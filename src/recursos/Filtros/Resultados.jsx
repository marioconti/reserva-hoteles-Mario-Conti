import { React } from "react";
import "./Filtros.css";

/* =========================================================== */
// Filtro por Desde
export const FiltroFechaDesde = (props) => {
  const handleSelect = (evento) => {
    const fechaDesdeSeleccionada = evento.target.value;
    props.setFechaDesde(fechaDesdeSeleccionada);
  };
  return (
    <div className="filtros">
      <input
        value={props.fechaDesde}
        onChange={handleSelect}
        className="filtrosFechaDesde seleccionado"
        name=""
        type="date"
        id=""
      />
    </div>
  );
};
/* =========================================================== */
// Filtro por Hasta
export const FiltroFechaHasta = (props) => {
  const handleSelect = (evento) => {
    const fechaHastaSeleccionada = evento.target.value;
    props.setFechaHasta(fechaHastaSeleccionada);
  };
  return (
    <div className="filtros">
      <input
        value={props.fechaHasta}
        onChange={handleSelect}
        className="filtrosFechaHasta seleccionado"
        name=""
        type="date"
        id=""
      />
    </div>
  );
};
/* =========================================================== */
// Filtro por Pais
export const FiltroPais = (props) => {
  const handleSelect = (evento) => {
    const paisSeleccionado = evento.target.value;
    props.setCountry(paisSeleccionado);
  };
  return (
    <div className="filtros">
      <select
        value={props.country}
        onChange={handleSelect}
        className="filtrosPorPais seleccionado"
        name="Todos"
        id=""
      >
        <option value="Todos">Paises</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
    </div>
  );
};
/* =========================================================== */
// Filtro por Precio
export const FiltroPrecio = (props) => {
  const handleSelect = (evento) => {
    const precioSeleccionado = evento.target.value;
    props.setPrice(precioSeleccionado);
  };

  return (
    <div className="filtros">
      <select
        value={props.price}
        onChange={handleSelect}
        className="filtrosPorPrecio seleccionado"
        name="Todos"
        id=""
      >
        <option value="Todos">Precio</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
    </div>
  );
};
/* =========================================================== */
// Filtro por Tama??o
export const FiltroTamanio = (props) => {
  const handleSelect = (evento) => {
    const tamanioSeleccionado = evento.target.value;
    props.setTamanio(tamanioSeleccionado);
  };

  return (
    <div className="filtros">
      <select
        value={props.tamanio}
        onChange={handleSelect}
        className="filtrosPorTamanio seleccionado"
        name="Todos"
        id=""
      >
        <option value="Todos">Tama??os</option>
        <option value="peque??o">Peque??o</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
    </div>
  );
};
/* =========================================================== */
