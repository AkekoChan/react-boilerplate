import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Welcome to the Home Page</h1>
      <Link to="/count" className="link-primary">
        Go to Count Page
      </Link>
    </section>
  );
};

export default Home;
