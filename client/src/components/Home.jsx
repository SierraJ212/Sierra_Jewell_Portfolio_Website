import apple from "../assets/apple.avif";
import Card from "./Card.jsx";

function Home() {
  return (
    <>
        <Card
            image={apple}
            title="My Vision for the future"
            description="Looking ahead, I want to move beyond writing functional code toward designing
            systems that are scalable, secure and useful to the people who rely on them."         
        />
    </>
  );
}

export default Home;