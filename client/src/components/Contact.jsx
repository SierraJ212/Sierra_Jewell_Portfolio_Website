/**
 * Contact page.
 * Shows contact details in a panel, plus a controlled form that captures
 * first name, last name, phone, email, and message. On submit, the data is
 * logged and the user is redirected to the Home page with the form data
 * passed along in the router state.
 *
 * @returns {JSX.Element} The Contact page
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    message:"",
  });
  //updates field changed
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();//prevents reloading
    console.log("Form submitted:",formData);
    navigate("/", {state: {formData}});//redirect to home
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>Email: sjewell6@my.centennialcollege.ca</p>
        <p>Phone: (647) 685-7048</p>
        <p>Location: Toronto, ON</p>
        <p>
          <a href="https://www.linkedin.com/in/sierra-jewell/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          { " | " }
          <a href="https://github.com/SierraJ212" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Me a Message</h2>

        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} required />
      
        <label htmlFor="phone">Contact Number</label>
        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />

        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;