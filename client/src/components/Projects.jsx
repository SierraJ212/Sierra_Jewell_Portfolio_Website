import hero from "../assets/hero.png";
import Card from "./Card.jsx";

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <p>At least 3 projects with title, image, description, and completion date will go here.</p>
        <Card
        image={hero}
        title="Sierra Jewell"
        description="These are my projects, skills, and experience."
      />
    </div>
  );
}

export default Projects;