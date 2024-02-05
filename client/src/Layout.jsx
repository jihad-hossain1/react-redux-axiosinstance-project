import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <nav>
        <Link to={"/"}>Home</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
