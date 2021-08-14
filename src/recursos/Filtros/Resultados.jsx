import { React, useState } from "react";
import "./Filtros.css";


export const FiltroFechaDesde = () => {
  let [fechaDesde, setFechaDesde] = useState("");

  const handleSelect = (evento) => {
    // const tiempoUNIX = new Date(evento.target.value);
    const FechaDesdeSeleccionada = evento.target.value;
    setFechaDesde(FechaDesdeSeleccionada);
  };

  return (
    <div className="filtros">
      <input
        value={fechaDesde}
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
export const FiltroFechaHasta = () => {
  let [fechaHasta, setFechaHasta] = useState("");

  const handleSelect = (evento) => {
    // const tiempoUNIX = new Date(evento.target.value);
    const FechaHastaSeleccionada = evento.target.value;
    setFechaHasta(FechaHastaSeleccionada);
  };

  return (
    <div className="filtros">
      <input
        value={fechaHasta}
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
export const FiltroPrecio = () => {
  const [price, setPrice] = useState("Todos");

  const handleSelect = (evento) => {
    const precioSeleccionado = evento.target.value;
    setPrice(precioSeleccionado);
  };

  return (
    <div className="filtros">
      <select
        value={price}
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
export const FiltroTamanio = () => {
  const [tamanio, setTamanio] = useState("Todos");

  const handleSelect = (evento) => {
    const tamanioSeleccionado = evento.target.value;
    setTamanio(tamanioSeleccionado);
  };

  return (
    <div className="filtros">
      <select
        value={tamanio}
        onChange={handleSelect}
        className="filtrosPorTamanio"
        name="Todos"
        id=""
      >
        <option value="todos">Tamaños</option>
        <option value="pequenio">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
    </div>
  );
};
/* =========================================================== */
