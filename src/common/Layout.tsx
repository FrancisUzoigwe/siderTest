import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sider from "./Sider";

const Layout = () => {
  return (
    <div className="flex">
      <Sider />

      <div className="w-full">
        <Header />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
