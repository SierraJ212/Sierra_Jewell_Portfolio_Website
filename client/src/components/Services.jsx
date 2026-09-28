/**
 * Services page.
 * Lists the technical services I offer (web development, SQL, Java, Python)
 * as Card components, with the current year as the date.
 *
 * @returns {JSX.Element} The Services page
 */

import databaseLogo from "../assets/databaseLogo2.png";
import laptopLogo from "../assets/webDesignLogo.png";
import pythonLogo from "../assets/pythonLogo.png";
import JavaLogo from "../assets/JavaLogo.png";
import Card from "./Card.jsx";


function Services() {
  return (
    <div>
      <h2>Services</h2>
      <p>Services that I offer.</p>
      <Card
        image={laptopLogo}
        title="HTML/CSS/Javascript"
        description="Creating responsive, well-designed web pages."
        date={new Date().getFullYear()}
        />
        <Card
        image={databaseLogo}
        title="Oracle SQL"
        description="Writing SQL queries to organize and retrieve data for real business needs."
        date={new Date().getFullYear()}
        />
        <Card
        image={JavaLogo}
        title="Java"
        description="Building object-oriented applications with clean, reusable code."
        date={new Date().getFullYear()}
        />
        <Card
        image={pythonLogo}
        title="Python"
        description="Writing readable scripts to solve problems quickly."
        date={new Date().getFullYear()}
        />
    </div>
  );
}

export default Services;