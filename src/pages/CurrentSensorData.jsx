import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SENSORS = [
  { id: "GRASP", path: "/GRASP.csv" },
  { id: "NINJA", path: "/NINJA.csv" },
  { id: "CAMPS", path: "/CAMPS.csv" },
  { id: "CENSE", path: "/CENSE.csv" },
  { id: "GLITZ", path: "/GLITZ.csv" },
];

const SENSOR_COLORS = {
  GRASP: "#2563eb", // blue
  NINJA: "#16a34a", // green
  CAMPS: "#d946ef", // purple
  CENSE: "#f59e0b", // orange
  GLITZ: "#ef4444", // red
};


// ---- CSV PARSER ----
function parseSensorCsv(text) {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const dataLines = lines.slice(5);

  return dataLines.map((line) => {
    const [timestamp, vwcStr, vwcRawStr, batteryStr] =
      line.split(",").map((s) => s.trim());

    return {
      timestamp,
      vwc: parseFloat(vwcStr),
      vwcRaw: parseFloat(vwcRawStr),
      battery: parseFloat(batteryStr),
    };
  });
}

const METRIC_LABEL = {
  vwc: "Volumetric Water Content [%]",
  vwcRaw: "VWC Raw [V]",
  battery: "Battery [V]",
};

export default function CurrentSensorData() {
  const [chartData, setChartData] = useState([]);
  const [metric, setMetric] = useState("vwc"); // "vwc" | "vwcRaw" | "battery"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Current Sensor Data";

    async function loadData() {
      try {
        // fetch all sensor CSVs
        const texts = await Promise.all(
          SENSORS.map((s) => fetch(s.path).then((r) => r.text()))
        );

        const sensorData = SENSORS.map((s, idx) => ({
          id: s.id,
          rows: parseSensorCsv(texts[idx]),
        }));

        // build maps by timestamp for each sensor
        const sensorMaps = sensorData.map((s) => ({
          id: s.id,
          map: new Map(s.rows.map((r) => [r.timestamp, r])),
        }));

        // union of all timestamps
        const allTimestamps = Array.from(
          new Set(
            sensorData.flatMap((s) => s.rows.map((r) => r.timestamp))
          )
        );

        // sort chronologically
        allTimestamps.sort(
          (a, b) => new Date(a).getTime() - new Date(b).getTime()
        );

        // merged row for each timestamp with fields like grasp_vwc, camps_battery, etc.
        const merged = allTimestamps.map((ts) => {
          const row = { timestamp: ts };

          sensorMaps.forEach(({ id, map }) => {
            const data = map.get(ts);
            const prefix = id.toLowerCase(); // "grasp", "ninja", etc.

            row[`${prefix}_vwc`] = data ? data.vwc : null;
            row[`${prefix}_vwcRaw`] = data ? data.vwcRaw : null;
            row[`${prefix}_battery`] = data ? data.battery : null;
          });

          return row;
        });

        setChartData(merged);
      } catch (err) {
        console.error("Failed to load CSVs", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <h1 className="titleHeader">Live Sensor Data</h1>
        <p>Loading sensor data…</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="titleHeader">Live Sensor Data</h1>

      {/* Metric Toggle */}
      <div className="mt-2 px-3 pb-3 flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-600">Metric:</span>

        <button
          type="button"
          onClick={() => setMetric("vwc")}
          className={`border px-3 py-1 rounded-full text-sm ${
            metric === "vwc" ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          VWC [%]
        </button>

        <button
          type="button"
          onClick={() => setMetric("vwcRaw")}
          className={`border px-3 py-1 rounded-full text-sm ${
            metric === "vwcRaw" ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          VWC Raw [V]
        </button>

        <button
          type="button"
          onClick={() => setMetric("battery")}
          className={`border px-3 py-1 rounded-full text-sm ${
            metric === "battery" ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          Battery [V]
        </button>
      </div>

      {/* Chart */}
      <div className="mt-2 px-3 pb-8">
        <div className="w-full h-80 border rounded-xl bg-white/80 shadow-sm p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                tick={{ fontSize: 10 }}
                interval="preserveStartEnd"
              />
              <YAxis />
              <Tooltip />
              <Legend />
              {SENSORS.map((s) => (
                <Line
                  key={s.id}
                  type="monotone"
                  dataKey={`${s.id.toLowerCase()}_${metric}`}
                  name={`${s.id} ${METRIC_LABEL[metric]}`}
                  stroke={SENSOR_COLORS[s.id]}
                  strokeWidth={2}
                  dot={false}
                  connectNulls={true}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
