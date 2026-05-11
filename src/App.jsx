import {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';

import Air from './pages/subteams/Air.jsx';
import Business from './pages/subteams/Business.jsx';
import CurrentSensorData from './pages/subteams/CurrentSensorData.jsx';
import Data from './pages/subteams/Data.jsx';
import Home from './pages/Home.jsx';
import Layout from './components/Layout';
import Members from './pages/Members.jsx';
import MissionStatement from "./pages/MissionStatement.jsx";
import Our_Work from './pages/OurWork.jsx';
import Recruitment from './pages/Recruitment.jsx';
import Rock from './pages/subteams/Rock.jsx';
import Sponsorships from './pages/Sponsorships.jsx';
import Tech from './pages/subteams/Tech.jsx';
import Water from './pages/subteams/Water.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="air" element={<Air />} />
          <Route path="business" element={<Business />} />
          <Route path="current-sensor-data" element={<CurrentSensorData />} />
          <Route path="data" element={<Data />} />
          <Route path="members" element={<Members />} />
          <Route path="mission-statement" element={<MissionStatement />} />
          <Route path="our-work" element={<Our_Work />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="rock" element={<Rock />} />
          <Route path="sponsorships" element={<Sponsorships />} />
          <Route path="teams" element={<Air />} />
          <Route path="tech" element={<Tech />} />
          <Route path="water" element={<Water />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
