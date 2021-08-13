import React from "react";
import { hotelsData } from "../arrayhoteles";
import "./HotelInfo.css";

// Esta función es la que realiza la instanciación dinámica de las card con HotelInfo
// Componente
export const ListadoHoteles = () => {
  let lista = hotelsData.map((e) => {
    return (
      <>
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
      </>
    );
  });
  return <div className="contenedor-section-hotel">{lista}</div>;
};
// ===========================================================

// Esta función es la card genérica que tiene el html y recibirá por props la info de los hoteles
export const HotelInfo = (props) => {
  let fechaDesdeUnix = props.desde;
  // Desde
  let diaDesde = new Date(fechaDesdeUnix).getDate();
  let nombreDiaDesde = new Date(fechaDesdeUnix).getDay();
  let nombreMesDesde = new Date(fechaDesdeUnix).getMonth();
  let nombreAñoDesde = new Date(fechaDesdeUnix).getFullYear();
  // ===========================================================
  // Hasta
  let fechaHastaUnix = props.hasta;
  let diaHasta = new Date(fechaHastaUnix).getDate();
  let nombreDiaHasta = new Date(fechaHastaUnix).getDay();
  let nombreMesHasta = new Date(fechaHastaUnix).getMonth();
  let nombreAñoHasta = new Date(fechaHastaUnix).getFullYear();
  // ===========================================================

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

  // esta función genérica recupera el valor del numero del día por un lado, y mes por otro y devuelve el nombre
  const nombreDia = (e) => {
    if (e === 0) {
      return "Domingo";
    } else if (e === 1) {
      return "Lunes";
    } else if (e === 2) {
      return "Martes";
    } else if (e === 3) {
      return "Miércoles";
    } else if (e === 4) {
      return "Jueves";
    } else if (e === 5) {
      return "Viernes";
    } else if (e === 6) {
      return "Sábado";
    }
  };
  // ===========================================================
  const nombreMes = (e) => {
    if (e === 0) {
      return "Enero";
    } else if (e === 1) {
      return "Febrero";
    } else if (e === 2) {
      return "Marzo";
    } else if (e === 3) {
      return "Abril";
    } else if (e === 4) {
      return "Mayo";
    } else if (e === 5) {
      return "Junio";
    } else if (e === 6) {
      return "Julio";
    } else if (e === 7) {
      return "Agosto";
    } else if (e === 8) {
      return "Septiembre";
    } else if (e === 9) {
      return "Octubre";
    } else if (e === 10) {
      return "Noviembre";
    } else if (e === 11) {
      return "Diciembre";
    }
  };
  // ===========================================================

  // Aquí se hace el return, lo que devuelve nuestra fx. El HTML de la card
  return (
    <div className="contenedor-HotelInfo">
      <img className="imagen-hotel" src={props.photo} alt="imagen hotel" />

      <div className="info-general">
        <p className="name">{props.name}</p>
        <div className="info-fechas">
          Desde el {nombreDia(nombreDiaDesde)}, {diaDesde} de{" "}
          {nombreMes(nombreMesDesde)} de {nombreAñoDesde}
        </div>
        <div className="info-fechas">
          Hasta el {nombreDia(nombreDiaHasta)}, {diaHasta} de{" "}
          {nombreMes(nombreMesHasta)} de {nombreAñoHasta}
        </div>
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
