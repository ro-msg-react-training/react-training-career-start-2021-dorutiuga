import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>this is home page. </p>
      <Link to="/products"> Go to products</Link>
    </div>
  );
};
export default HomePage;
