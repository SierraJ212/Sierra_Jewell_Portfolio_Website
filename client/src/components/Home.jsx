import profilePic from "../assets/pfp.JPG";
import Card from "./Card.jsx";

function Home() {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>Hi, I'm Sierra Jewell. This site showcases my work, skills, and experience.</p>
      <Card
        image={profilePic}
        title="Sierra Jewell"
        description="These are my projects, skills, and experience."
      />
    </div>
  );
}

export default Home;