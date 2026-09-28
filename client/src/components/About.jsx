
import profilePic from "../assets/pfp.JPG";
import Layout from "./Layout";
function About() {
  return (
    <div className="homepage">
        <Layout
            image={profilePic}
            title="Welcome to My Portfolio"
            description="Hi, I'm Sierra Jewell! I'm a Software Engineering Technology student at Centennial College who loves turning ideas into working projects. I've built a solid foundation in Agile practices, the software development life cycle, debugging, and web design, and I enjoy solving problems whether I'm working solo or with a team. I'm always looking for new things to learn, so I keep building my skills outside the classroom to stay in tune with what the industry needs."         
        />
    </div>
  );
}

export default About;