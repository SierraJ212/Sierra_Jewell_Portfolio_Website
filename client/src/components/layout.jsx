function Layout({image, title, description}){
  return (
    <div className="Layout-content">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div>
            <img className="Img" src={image} alt={title} />
        </div>
    </div>
  );
}

export default Layout;