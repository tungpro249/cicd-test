import { Outlet } from "react-router";
import SideBar from "./SideBar";

const AppLayout = () => {

  return (
    <div className="min-h-screen xl:flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
