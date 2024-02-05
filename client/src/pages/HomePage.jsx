import { useEffect, useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      return await fetch("https://api-secure.vercel.app/api/v1/users/allusers")
        .then((res) => res.json())
        .then((result) => setUsers(result));
    };

    fetchData();
  }, []);

  console.log(users);
  return <div>HomePage</div>;
};

export default HomePage;
