import React from "react";
import { hotelsData } from "../arrayhoteles";
import "./HotelInfo.css";

// Esta función es la que hara la instanciación dinámica de las card con HOTEL INFO
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
  return <div className="contenedor-section-hotel">{lista};</div>;
};

// Esta función será la card genérica que tendrá el html y css y recibirá por props la info de los hoteles
export const HotelInfo = (props) => {
  let fechaDesdeUnix = props.desde;
  // Desde
  let diaDesde = new Date(fechaDesdeUnix).getDate();
  let nombreDiaDesde = new Date(fechaDesdeUnix).getDay();
  let nombreMesDesde = new Date(fechaDesdeUnix).getMonth();
  let nombreAñoDesde = new Date(fechaDesdeUnix).getFullYear();
  // Desde
  // Hasta
  let fechaHastaUnix = props.hasta;

  let diaHasta = new Date(fechaHastaUnix).getDate();
  let nombreDiaHasta = new Date(fechaHastaUnix).getDay();
  let nombreMesHasta = new Date(fechaHastaUnix).getMonth();
  let nombreAñoHasta = new Date(fechaHastaUnix).getFullYear();
  // Hasta
  // esta función genérica recupera el valor del numero del día y devuelve el nombre
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
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="map-marker"
              class="svg-inline--fa fa-map-marker fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"
              ></path>
            </svg>
          </div>
          <p className="texto-rectangulo">
            {props.country}, {props.city}
          </p>
        </div>

        <div className="habitaciones">
          <div className="svg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bed"
              class="svg-inline--fa fa-bed fa-w-20"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"
              ></path>
            </svg>
            {/* Como importar este svg desde otro archivo externo para que no se arme esto por cada svg */}
          </div>
          <p className="texto-rectangulo">{props.rooms} habitaciones</p>
        </div>
        <div className="precio">
          <div className="svg">
            <mostrarPrecios />
            {/* <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dollar-sign"
              class="svg-inline--fa fa-dollar-sign fa-w-9"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 288 512"
            >
              <path
                fill="currentColor"
                d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
              ></path>
            </svg> */}
          </div>
        </div>
      </div>

      <div className="boton">
        <div className="boton-reserva">Reserva</div>
      </div>
    </div>
  );
};
