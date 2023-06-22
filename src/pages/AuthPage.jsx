import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="max-w-md mx-auto p-10 mt-20">
      <Outlet />
    </div>
  );
};

export default AuthPage;
