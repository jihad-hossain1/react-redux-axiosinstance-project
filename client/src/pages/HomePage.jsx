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

  console.log(users?.users);
  return (
    <div>
      {users?.users?.map((user) => (
        <li key={user?._id}>{user?.username}</li>
      ))}
    </div>
  );
};

export default HomePage;
