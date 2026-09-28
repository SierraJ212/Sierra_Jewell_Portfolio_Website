/**
 * Reusable two-column layout with text on the left and an image on the right.
 * Used on the Home and About pages.
 *
 * @param {Object} props
 * @param {string} props.image - Imported image source
 * @param {string} props.title - Heading text (also used as the image alt text)
 * @param {string} props.description - Paragraph text beside the image
 * @returns {JSX.Element} The rendered layout
 */


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