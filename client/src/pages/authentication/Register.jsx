import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth?.loading);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createAccount({ username, email, password, fullname }));
    // console.log({ username, email, password, fullname });
    // toast.success("account create successfull");
  };
  return (
    <>
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        Register
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input
            style={{ padding: "9px" }}
            placeholder="fullname"
            type="text"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
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
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit">{loading ? "loading..." : "register"}</button>
        </form>
        <div>
          <Link to={"/login"}>Go to Login</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
