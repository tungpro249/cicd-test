import { Outlet } from "react-router";

const AppLayout = () => {

  return (
    <div className="min-h-screen xl:flex">
      <Outlet />
    </div>
  );
};

export default AppLayout;
