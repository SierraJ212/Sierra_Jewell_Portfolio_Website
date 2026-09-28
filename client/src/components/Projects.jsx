import databaseLogo from "../assets/databaseLogo.png";
import petLogo from "../assets/petLogo.png";
import laptopLogo from "../assets/laptopLogo.png";
import Card from "./Card.jsx";

function Projects() {
  return (
    <div>
      
      <h2>My Projects</h2>
      <p>Academic Projects I worked on.</p>
      
        <Card
        image={databaseLogo}
        title="Online Shopping Database"
        description="Collaborated with a 3-person team to develop a relational database for an online shopping system."
        date="March-April 2026"
        />
        <Card
        image={petLogo}
        title="Software Requirements Specification"
        description="In a group of 5 collaborated on designing a pet rescue and adoption platform."
        date="January-April 2026"
        />
        <Card
        image={laptopLogo}
        title="Car Dealership Website"
        description="Designed a multi-page car dealership website using HTML and CSS with a user-friendly interface and navigation."
        date="January 2026"
        />
    </div>
  );
}

export default Projects;