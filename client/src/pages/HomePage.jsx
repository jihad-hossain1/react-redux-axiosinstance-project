import { useSelector } from "react-redux";
import Products from "../components/Products";
const HomePage = () => {
  const user = useSelector((state) => state.auth?.userData);

  // console.log(user);
  return (
    <div>
      {user ? (
        <ul>
          <li>abc</li>
        </ul>
      ) : (
        ""
      )}

      <Products />
    </div>
  );
};

export default HomePage;
