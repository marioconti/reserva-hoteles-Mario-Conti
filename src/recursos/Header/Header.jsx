import React from "react";
import "./Header.css";

// Componente Header
export const Header = (props) => {
  return (
    <div className="contenedor-Header">
      <p className="titulo-section">Hotalandia</p>
      <p className="resultadoBusqueda">{props.country}</p>
    </div>
  );
};
/* =========================================================== */
