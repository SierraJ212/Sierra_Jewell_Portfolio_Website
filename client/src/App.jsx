/**
 * Root component of the portfolio.
 * Wraps the app in the BrowserRouter so routing works everywhere, renders
 * the page routes through MainRouter, and shows the Footer on every page.
 *
 * @returns {JSX.Element} The application shell
 */


import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <MainRouter />
      <Footer />
    </Router>
  );
}

export default App;