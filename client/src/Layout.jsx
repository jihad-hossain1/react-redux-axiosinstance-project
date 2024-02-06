import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
