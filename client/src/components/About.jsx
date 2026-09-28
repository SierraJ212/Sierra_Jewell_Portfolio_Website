
/**
 * About page.
 * Shows a profile photo with a short bio, plus a link that opens the resume PDF.
 *
 * @returns {JSX.Element} The About page
 */

import profilePic from "../assets/pfp.JPG";
import Layout from "./Layout";
import resume from "../assets/Sierra Jewell Resume_Enercare.pdf";

function About() {
  return (
    <div>
        <Layout
            image={profilePic}
            title="Welcome to My Portfolio"
            description="Hi, I'm Sierra Jewell! I'm a Software Engineering Technology student at Centennial College who loves turning ideas into working projects. I've built a solid foundation in Agile practices, the software development life cycle, debugging, and web design, and I enjoy solving problems whether I'm working solo or with a team. I'm always looking for new things to learn, so I keep building my skills outside the classroom to stay in tune with what the industry needs."         
        />
        <div>
          <p>
            <a href={resume} target="_blank" className="resumeBtn" rel="noopener noreferrer">
              View Resume
            </a>
          </p>
        </div>
    </div>
  );
}

export default About;