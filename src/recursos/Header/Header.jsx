import React from "react";
import "./Header.css";

// Componente Header
export const Header = (props) => {
  let fechaDesdeFiltrada = new Date(props.fechaDesde).toLocaleDateString(
    "es-AR",
    { timeZone: "UTC" }
  );
  let fechaHastaFiltrada = new Date(props.fechaHasta).toLocaleDateString(
    "es-AR",
    { timeZone: "UTC" }
  );
  /* =========================================================== */
  // FX en el caso de querer que empiece vacio
  /* =========================================================== */

  const mostrarFechaDesde = () => {
    if (fechaDesdeFiltrada === "Invalid Date") {
      return;
    } else {
      return fechaDesdeFiltrada;
    }
  };
  const mostrarFechaHasta = () => {
    if (fechaHastaFiltrada === "Invalid Date") {
      return;
    } else {
      return fechaHastaFiltrada;
    }
  };
  // Ver como optimizar estas funciones

  /* =========================================================== */
  return (
    <div className="contenedor-Header">
      <p className="titulo-section">Hotelandia</p>
      <div className="contenedor-resultados">
        <p className="resultadoBusqueda">Desde el: {mostrarFechaDesde()}</p>
        <p className="resultadoBusqueda">Desde el: {mostrarFechaHasta()}</p>
        <p className="resultadoBusqueda">
          Destino: {props.country.toUpperCase()}
        </p>
        <p className="resultadoBusqueda">Precio: {props.price.toUpperCase()}</p>
        <p className="resultadoBusqueda">
          Tamaño: {props.tamanio.toUpperCase()}
        </p>
      </div>
    </div>
  );
};
/* =========================================================== */
