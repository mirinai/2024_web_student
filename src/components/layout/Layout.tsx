import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <head></head>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
