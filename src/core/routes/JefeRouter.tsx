import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarJefe } from "../../components/Navbar-Jefe";
import { HomeViewJefe } from "../../jefe/views/HomeViewJefe";

export const JefeRouter = () => {
  return (
    <>
      <NavbarJefe />
      <Routes>
        {/* Página de inicio */}
        <Route path="home" element={<HomeViewJefe />} />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/jefe/home" />} />
      </Routes>
    </>
  );
};
