import React from "react";
import { hotelsData } from "../arrayhoteles";
import "./HotelInfo.css";

// Función que realiza los filtros y la instanciación dinámica de las card con HotelInfo
// Renderizado por filtros
export function ListaHoteles(props) {
  const hotelesFiltradoPorPais = hotelsData.filter((hotel) => {
    if (props.country === "Todos") {
      return true;
    } else {
      return hotel.country.toLowerCase() === props.country.toLowerCase();
    }
  });
  const hotelesFiltradoPorTamanioYPais = hotelesFiltradoPorPais.filter(
    (hotel) => {
      if (props.tamanio === "Todos") {
        return true;
      } else {
        if (props.tamanio === "pequeño") {
          return hotel.rooms <= 10;
        } else if (props.tamanio === "mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else {
          return hotel.rooms >= 20;
        }
      }
    }
  );
  const hotelesFiltradoPorTamanioPaisYPrecio =
    hotelesFiltradoPorTamanioYPais.filter((hotel) => {
      if (props.price === "Todos") {
        return true;
      } else {
        return hotel.price === parseFloat(props.price);
      }
    });

  const hotelesFiltradoPorTamanioPaisPrecioYFecha =
    hotelesFiltradoPorTamanioPaisYPrecio.filter((hotel) => {
      let fechaDesdeSeleccionada = new Date(props.fechaDesde).getTime();
      let fechaHastaSeleccionada = new Date(props.fechaHasta).getTime();
     
      if (props.fechaDesde === "" || props.fechaHasta === "") {
        return true;
      } else {
        return (
          hotel.availabilityFrom > fechaDesdeSeleccionada &&
          fechaHastaSeleccionada < hotel.availabilityTo
        );
      }
    });
  // FIXME: no funciona bien todavia el filtro. ya probe de todo. fijarme si están bien extraídas las fechas

  let renderizacionHoteles = hotelesFiltradoPorTamanioPaisPrecioYFecha.map(
    (hotel) => {
      return (
        <HotelInfo
          photo={hotel.photo}
          name={hotel.name}
          fechaDesde={hotel.availabilityFrom}
          fechaHasta={hotel.availabilityTo}
          description={hotel.description}
          city={hotel.city}
          country={hotel.country}
          rooms={hotel.rooms}
          price={hotel.price}
        />
      );
    }
  );
  if (renderizacionHoteles.length !== 0) {
    return <div className="contenedorHoteles">{renderizacionHoteles}</div>;
  } else {
    return (
      <p className="mensajeError">
        No se encontraron hoteles con esta busqueda
      </p>
    );
  }
}

// ===========================================================
// Esta función es la card genérica que tiene el html y recibirá por props la info de los hoteles
export const HotelInfo = (props) => {
  // let fechaDesdeUnix = props.desde;
  const fechaDesde = () => {
    let date = new Date(props.fechaDesde);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return `Desde el ${date.toLocaleDateString(undefined, options)}`;
  };

  const fechaHasta = () => {
    let date = new Date(props.fechaHasta);
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
    let signoPesos = (
      <div>
        {" "}
        <i class="fas fa-dollar-sign"></i>
      </div>
    );
    let arrayPesos = [];
    for (let e = 0; e < props.price; e++) {
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
        <div className="boton-reserva">Reservar</div>
      </div>
    </div>
  );
};
// ===========================================================
