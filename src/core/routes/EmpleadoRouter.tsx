import { Navigate, Route, Routes } from "react-router-dom";
import { HomeEmpleado } from "../../trabajador/views/Home";
import { NavbarVendedor } from "../../components/Navbar-vendedor";

export const EmpleadoRouter = () => {
  return (
    <>
      <NavbarVendedor />
      <Routes>
        {/* Página de inicio */}
        <Route path="home" element={<HomeEmpleado />} />
        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/vendedor/home" />} />
      </Routes>
    </>
  );
};

