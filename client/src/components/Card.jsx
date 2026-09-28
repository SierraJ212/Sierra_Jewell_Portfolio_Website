/**
 * Reusable card with an image beside a title, description, and date.
 * Used on the Projects and Services pages.
 *
 * @param {Object} props
 * @param {string} props.image - Imported image source
 * @param {string} props.title - Card heading (also used as the image alt text)
 * @param {string} props.description - Short body text
 * @param {string|number} props.date - Date or year shown at the bottom of the card
 * @returns {JSX.Element} The rendered card
 */


function Card({ image, title, description, date}) {
  return (
    <div className="card">
      <img className="cardImg" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <br></br>
        <p className="card-text">{date}</p>
        </div>
    </div>
  );
}

export default Card;