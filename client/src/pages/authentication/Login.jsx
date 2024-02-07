import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, userLogin } from "../../redux/slice/authSlice";
import toast from "react-hot-toast";
// import {useNa } from 'react-router-dom'
const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth?.loading);
  const user = useSelector((state) => state.auth?.userData);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      username,
      password,
    };
    const response = await dispatch(userLogin(loginData));
    const user = await dispatch(getCurrentUser());

    if (user && response?.payload) {
      toast.success("login successfull ");
    }
  };

  console.log("after login user info: ", user);
  return (
    <div>
      Login
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "600px",
          margin: "auto",
          gap: "16px",
        }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <input
          style={{ padding: "9px" }}
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          style={{ padding: "9px" }}
          placeholder="email"
          value={email}
          type="text"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          style={{ padding: "9px" }}
          placeholder="password"
          value={password}
          type="text"
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type="submit">{loading ? "loading..." : "Login"}</button>
      </form>
    </div>
  );
};

export default Login;
