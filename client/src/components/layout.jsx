function layout({image, title, description}){
  return (
    <div className="layout-content">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div>
            <img className="Img" src={image} alt={title} />
            <h2>{description}</h2>
        </div>
    </div>
  );
}

export default layout;