
function Card({ image, title, description }) {
  return (
    <div className="card">
      <img className="cardImg" src={image} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
    </div>
  );
}

export default Card;