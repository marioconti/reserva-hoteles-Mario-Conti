import React from "react";
import "./Header.css";

// Componente Header
export const Header = (props) => {
  return (
    <div className="contenedor-Header">
      <p className="titulo-section">Hoteles</p>
      <p className="resultadoBusqueda">{props.country}</p>
      {/* TODO: hacer funcion para llamar el resultado de los filtros */}
    </div>
  );
};
/* =========================================================== */
