import React from "react";
import "./Header.css";

// Componente Header
export const Header = (props) => {
  // Fechas
  let fechaDesdeFiltrada = new Date(props.fechaDesde).toLocaleDateString(
    "es-AR",
    { timeZone: "UTC" }
  );
  let fechaHastaFiltrada = new Date(props.fechaHasta).toLocaleDateString(
    "es-AR",
    { timeZone: "UTC" }
  );
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
  /* =========================================================== */
  // Precio
  const nombrePrecio = () => {
    let nombreDePrecio;
    if (props.price === "1") {
      nombreDePrecio = "Económico";
    } else if (props.price === "2") {
      nombreDePrecio = "Confort";
    } else if (props.price === "3") {
      nombreDePrecio = "Lujoso";
    } else if (props.price === "4") {
      nombreDePrecio = "Magnífico";
    } else {
      nombreDePrecio = "Todos";
    }
    return nombreDePrecio.toUpperCase();
  };

  return (
    <div className="contenedor-Header">
      <p className="titulo-section">Hotelandia</p>
      <div className="contenedor-resultados">
        <p className="resultadoBusqueda">Desde el: {mostrarFechaDesde()}</p>
        <p className="resultadoBusqueda">Desde el: {mostrarFechaHasta()}</p>
        <p className="resultadoBusqueda">
          Destino: {props.country.toUpperCase()}
        </p>
        <p className="resultadoBusqueda">Precio: {nombrePrecio()}</p>
        <p className="resultadoBusqueda">
          Tamaño: {props.tamanio.toUpperCase()}
        </p>
      </div>
    </div>
  );
};
/* =========================================================== */
