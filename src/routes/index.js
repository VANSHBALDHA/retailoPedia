import { Routes, Route, Outlet } from "react-router-dom";
import routes from "./routes";

function AppRoutes() {
  return (
    <>
      <Routes>
        {routes.map(({ path, component: Component, exact }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      <Outlet />
    </>
  );
}

export default AppRoutes;
