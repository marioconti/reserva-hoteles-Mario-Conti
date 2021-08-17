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
export const Filtros = (props) => {
  return (
    <div className="contenedor-filtros">
      <FiltroFechaDesde
        fechaDesde={props.fechaDesde}
        setFechaDesde={props.setFechaDesde}
      />
      <FiltroFechaHasta
        fechaHasta={props.fechaHasta}
        setFechaHasta={props.setFechaHasta}
      />
      <FiltroPais country={props.country} setCountry={props.setCountry} />
      <FiltroPrecio price={props.price} setPrice={props.setPrice} />
      <FiltroTamanio tamanio={props.tamanio} setTamanio={props.setTamanio} />
      <div className="botonLimpiar">Limpiar</div>
    </div>
  );
};
/* =========================================================== */
