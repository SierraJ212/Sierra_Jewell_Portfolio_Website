
import profilePic from "../assets/pfp.JPG";
function About() {
  return (
    <div className="homepage">
        <div>
            <h2>Welcome to My Portfolio</h2>
            <p>Hi, I'm Sierra Jewell. This site showcases my work, skills, and experience.</p>
        </div>
        <div>
            <img className="pfp" src={profilePic} alt="profile picture"></img>
            <h2>Desc</h2>
            <p>This is the description of the project</p>
        </div>
    </div>
  );
}

export default About;