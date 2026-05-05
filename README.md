# CU GeoData Website
**Official website of the CU GeoData project team**

The CU GeoData website is a React/Vite.js web app.

### Directory Structure
- Routing information for **inter-page hyperlinks** are in `src/App.jsx`
- **Images** are in `src/assets/images`. Images are sorted by their type, i.e. member headshots, current projects
- Shared React components and accompanying CSS, including the navbar and member information display cards, are in `src/components`
- JSX files and accompanying CSS for **individual webpages** are in `src/pages`.
  - `Base.css` contains CSS shared between pages


### Run Instructions
This project requires [Node.js](https://nodejs.org/en/download) to be installed on your device.

Install all dependencies. Then, open a terminal in this project's top-level directory and run `npm run dev` to start the website.

<details>
<summary>Vite Info</summary>
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

</details>
