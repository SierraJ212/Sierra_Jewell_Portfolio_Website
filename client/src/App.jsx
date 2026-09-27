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