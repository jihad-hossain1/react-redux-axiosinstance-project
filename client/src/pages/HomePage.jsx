import { useSelector } from "react-redux";
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
    </div>
  );
};

export default HomePage;
