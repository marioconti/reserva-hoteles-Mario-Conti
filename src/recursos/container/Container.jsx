import { React, useState } from "react";
import { ListadoHoteles } from "../HotelInfo/HotelInfo";
import { Header } from "../Header/Header";
import { Filtros } from "../Filtros/Filtros";
// este import trae la fecha de hoy exportada como una const del arrayhoteles

export function Container() {
  // Declaración de estados globales
  const [country, setCountry] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [price, setPrice] = useState("");
  const [tamanio, setTamanio] = useState("");
   /* =========================================================== */
  return (
    <div className="App">
      <Header
        fechaDesde={fechaDesde}
        setFechaDesde={setFechaDesde}
        fechaHasta={fechaHasta}
        setFechaHasta={setFechaHasta}
        country={country}
        setCountry={setCountry}
        price={price}
        setPrice={setPrice}
        tamanio={tamanio}
        setTamanio={setTamanio}
      />
      <Filtros
        fechaDesde={fechaDesde}
        setFechaDesde={setFechaDesde}
        fechaHasta={fechaHasta}
        setFechaHasta={setFechaHasta}
        country={country}
        setCountry={setCountry}
        price={price}
        setPrice={setPrice}
        tamanio={tamanio}
        setTamanio={setTamanio}
      />
      <ListadoHoteles />
    </div>
  );
}
