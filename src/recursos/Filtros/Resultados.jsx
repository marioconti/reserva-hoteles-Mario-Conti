import { React } from "react";
import "./Filtros.css";

export const FiltroFechaDesde = (props) => {
  const handleSelect = (evento) => {
    // const tiempoUNIX = new Date(evento.target.value)
    const FechaDesdeSeleccionada = evento.target.value;
    props.setFechaDesde(FechaDesdeSeleccionada);
  };

  return (
    <div className="filtros">
      <input
        value={props.fechaDesde}
        onChange={handleSelect}
        className="filtrosPorTamanio"
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
    // const tiempoUNIX = new Date(evento.target.value);
    const FechaHastaSeleccionada = evento.target.value;
    props.setFechaHasta(FechaHastaSeleccionada);
  };

  return (
    <div className="filtros">
      <input
        value={props.fechaHasta}
        onChange={handleSelect}
        className="filtrosPorTamanio"
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
  // Manejar el cambio de un select
  // Fx que recibe evento/cambio de estado
  const handleSelect = (evento) => {
    // como todo evento de etiqueta, el handle select recibe un objeto evento
    // este objeto evento tiene la información sobre el elemento que se ejecuta
    // este se ejecuta cuando hay un cambio en el select
    const paisSeleccionado = evento.target.value;
    props.setCountry(paisSeleccionado);
  };


  return (
    <div className="filtros">
      <select
        value={props.country}
        onChange={handleSelect}
        className="filtrosPorPais"
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

// Filtro por Pais
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
        className="filtrosPorPrecio"
        name="Todos"
        id=""
      >
        <option value="Todos">Precio</option>
        <option value="economico">Económico</option>
        <option value="confort">Confort</option>
        <option value="lujos">Lujos</option>
        <option value="magnifico">Magnífico</option>
      </select>
    </div>
  );
};
/* =========================================================== */
// Filtro por Tamaño
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
        className="filtrosPorTamanio"
        name="Todos"
        id=""
      >
        <option value="todos">Tamaños</option>
        <option value="pequeño">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
    </div>
  );
};
/* =========================================================== */
