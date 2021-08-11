import { React } from "react";
import {
  FiltroPais,
  FiltroPrecio,
  FiltroTamanio,
  FiltroFechaDesde,
  FiltroFechaHasta,
} from "./Resultados";
import "./Filtros.css";

// Componente de los Filtros
export const Filtros = () => {
  return (
    <div className="contenedor-filtros">
      <FiltroFechaDesde />
      <FiltroFechaHasta />
      <FiltroPais />
      <FiltroPrecio />
      <FiltroTamanio />
    </div>
  );
};
/* =========================================================== */
