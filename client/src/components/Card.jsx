
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