import React from "react";
// import { hotelsData } from "../arrayhoteles";
import "./Header.css";

// Componente Header
export const Header = () => {
  return (
    <div className="contenedor-Header">
      <p className="titulo-section">Hoteles</p>
      <p className="resultadoBusqueda"></p>
      {/* TODO: hacer funcion para llamar el resultado de los filtros */}
    </div>
  );
};
/* =========================================================== */
