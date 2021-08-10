import React from "react";
// import { hotelsData } from "../arrayhoteles";
import "./Filtros.css";
import App from "../../App";

// Componente de los Filtros
export const Filtros = () => {
  return (
    <div className="contenedor-filtros">
      <FiltroPais />
    </div>
  );
};
/* =========================================================== */

// Filtro por Pais
export const FiltroPais = () => {
  return (
    <div className="filtros">
      <select className="filtrosPorPais" name="Todos" id="">
        <option value="Todos">Todos los hoteles</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
    </div>
  );
};
/* =========================================================== */
