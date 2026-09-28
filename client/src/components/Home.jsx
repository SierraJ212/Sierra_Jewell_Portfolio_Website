/**
 * Home page.
 * Presents my vision for the future using the Layout component, with a
 * button that navigates to the About page.
 *
 * @returns {JSX.Element} The Home page
 */

import { useNavigate } from "react-router-dom";
import programming from "../assets/programming.png";
import Layout from "./Layout.jsx";

function Home() {
  const navigate = useNavigate();
  
  return (
    <>
        <Layout
            image={programming}
            title="My Vision for the future"
            description="Looking ahead, I want to move beyond writing functional code toward designing systems that are scalable, secure, and useful to the people who rely on them. I'm interested in understanding how an application fits together as a whole, from the database and back-end logic to the interface someone actually sees and clicks on. I want to keep growing my skills in areas like full-stack development, databases, and cloud technologies, and to learn from experienced developers along the way. Most of all, I want to build software that makes everyday tasks simpler, especially in areas like finance, where clear and approachable technology can help people feel more confident about their decisions."         
        />
        <button className="btn" onClick={() => navigate("/about")}>
          More about me!
        </button>
    </>
  );
}

export default Home;