import { React } from "react";
import {
  FiltroPais,
  FiltroPrecio,
  FiltroTamanio,
  FiltroFechaDesde,
  FiltroFechaHasta
} from "./Resultados";
import "./Filtros.css";

// Componente de los Filtros
export const Filtros = (props) => {
  // Boton limpiar
  const BotonReiniciar = () => {
    props.setCountry("Todos");
    props.setTamanio("Todos");
    props.setPrice("Todos");
    props.setFechaDesde("");
    props.setFechaHasta("");
  };
  /* =========================================================== */
  return (
    <div className="contenedor-filtros">
      <div className="filtroDesde">
        <p>Desde</p>
        <FiltroFechaDesde
          fechaDesde={props.fechaDesde}
          setFechaDesde={props.setFechaDesde}
        />
      </div>
      <div className="filtroHasta">
        <p>Hasta</p>
        <FiltroFechaHasta
          fechaHasta={props.fechaHasta}
          setFechaHasta={props.setFechaHasta}
        />
      </div>
      <FiltroPais country={props.country} setCountry={props.setCountry} />
      <FiltroPrecio price={props.price} setPrice={props.setPrice} />
      <FiltroTamanio tamanio={props.tamanio} setTamanio={props.setTamanio} />
      <div onClick={BotonReiniciar} className="botonLimpiar">
        Reiniciar
      </div>
    </div>
  );
};
/* =========================================================== */
