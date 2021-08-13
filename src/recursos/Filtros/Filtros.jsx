import { React } from "react";
import {
  FiltroPais,
  FiltroPrecio,
  FiltroTamanio,
  FiltroFechaDesde,
  FiltroFechaHasta,
} from "./Resultados";
import { Container } from "../container/Container";
import "./Filtros.css";

// Componente de los Filtros
export const Filtros = (props) => {
  <Container country={props.country} setCountry={props.setCountry} />;
  return (
    <div className="contenedor-filtros">
      <FiltroFechaDesde />
      <FiltroFechaHasta />
      <FiltroPais country={props.country} setCountry={props.setCountry} />
      <FiltroPrecio />
      <FiltroTamanio />
    </div>
  );
};
/* =========================================================== */
