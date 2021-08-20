import React from "react";
import { hotelsData } from "../arrayhoteles";
import "./HotelInfo.css";

// Esta función es la que realiza la instanciación dinámica de las card con HotelInfo
// Componente
// Renderizado filtro por pais
// export function RenderizadoPorPais(props) {
//   const listaPorPais = hotelsData.map((e) => {
//     if (e.country === props.country) {
//       return (
//         <HotelInfo
//           name={e.name}
//           photo={e.photo}
//           description={e.description}
//           desde={e.availabilityFrom}
//           hasta={e.availabilityTo}
//           city={e.city}
//           country={e.country}
//           rooms={e.rooms}
//           price={e.price}
//         />
//       );
//     } else if (props.country === "Todos") {
//       return (
//         <HotelInfo
//           name={e.name}
//           photo={e.photo}
//           description={e.description}
//           desde={e.availabilityFrom}
//           hasta={e.availabilityTo}
//           city={e.city}
//           country={e.country}
//           rooms={e.rooms}
//           price={e.price}
//         />
//       );
//     }
//   });
//   return <div className="contenedor-section-hotel">{listaPorPais}</div>;
// }
// ===========================================================
// filtrar los hoteles por un pais (fx javier/Clase)
// let hotelesFiltrados = [];

// if (props.country === "todos") {
//   hotelesFiltrados = [...props.hotelsData];
// } else {
//   hotelesFiltrados = props.hotelsData.filter((hotel) => {
//     return hotel.country.toUpperCase() === props.country.toUpperCase();
//   });
// }
// ===========================================================
// Renderizado filtro por precio
export function RenderizadoPorPrecio(props) {
  const listaPorPrecio = hotelsData.map((e) => {
    if (e.price == props.price) {
      return (
        <HotelInfo
          name={e.name}
          photo={e.photo}
          description={e.description}
          desde={e.availabilityFrom}
          hasta={e.availabilityTo}
          city={e.city}
          country={e.country}
          rooms={e.rooms}
          price={e.price}
        />
      );
    } else if (props.price === "Todos") {
      return (
        <HotelInfo
          name={e.name}
          photo={e.photo}
          description={e.description}
          desde={e.availabilityFrom}
          hasta={e.availabilityTo}
          city={e.city}
          country={e.country}
          rooms={e.rooms}
          price={e.price}
        />
      );
    }
  });
  return <div className="contenedor-section-hotel">{listaPorPrecio}</div>;
}

// ===========================================================
// Esta función es la card genérica que tiene el html y recibirá por props la info de los hoteles
export const HotelInfo = (props) => {
  // let fechaDesdeUnix = props.desde;
  const fechaDesde = () => {
    let date = new Date(props.desde);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return `Desde el ${date.toLocaleDateString(undefined, options)}`;
  };

  const fechaHasta = () => {
    let date = new Date(props.hasta);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return `Hasta el ${date.toLocaleDateString(undefined, options)}`;
  };

  // esta funcion devuelve los signos $$$
  function mostrarPrice() {
    let signoPesos = <i class="fas fa-dollar-sign"></i>;
    let arrayPesos = [];
    for (let i = 0; i < props.price; i++) {
      arrayPesos.push(signoPesos);
    }
    return arrayPesos;
  }
  // ===========================================================

  // Aquí se hace el return, lo que devuelve nuestra fx. El HTML de la card
  return (
    <div className="contenedor-HotelInfo">
      <img className="imagen-hotel" src={props.photo} alt="imagen hotel" />

      <div className="info-general">
        <p className="name">{props.name}</p>
        <div className="info-fechas"> {fechaDesde()}</div>
        <div className="info-fechas"> {fechaHasta()}</div>
        <p className="info">{props.description}</p>
      </div>
      <div className="rectangulos">
        <div className="country">
          <div className="svg">
            <i class="fas fa-map-marker"></i>
          </div>
          <p className="texto-rectangulo">
            {props.country}, {props.city}
          </p>
        </div>
        <div className="habitaciones">
          <div className="svg">
            <i class="fas fa-bed"></i>
          </div>
          <p className="texto-rectangulo">{props.rooms} habitaciones</p>
        </div>
        <div className="precio">
          <div className="svg">{mostrarPrice()}</div>
        </div>
      </div>

      <div className="boton">
        <div className="boton-reserva">Reserva</div>
      </div>
    </div>
  );
};
// ===========================================================
