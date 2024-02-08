import { useSelector } from "react-redux";
import Products from "../components/Products";
const HomePage = () => {
  const user = useSelector((state) => state.auth?.userData);

  // console.log(user);
  return (
    <div style={{ padding: "10px" }}>
      {user ? (
        <ul>
          <li>abc</li>
        </ul>
      ) : (
        <p>No user data here. login then able see All users information.</p>
      )}

      <Products />
    </div>
  );
};

export default HomePage;
