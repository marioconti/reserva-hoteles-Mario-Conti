import { React, useState } from "react";
import { ListaHoteles } from "../HotelInfo/HotelInfo";
import { Header } from "../Header/Header";
import { Filtros } from "../Filtros/Filtros";

export function Container() {
  // Declaración de estados globales
  const [country, setCountry] = useState("Todos");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [price, setPrice] = useState("Todos");
  const [tamanio, setTamanio] = useState("Todos");
  /* =========================================================== */
  return (
    <div className="App">
      <Header
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        country={country}
        price={price}
        tamanio={tamanio}
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
      <ListaHoteles
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        country={country}
        price={price}
        tamanio={tamanio}
      />
    </div>
  );
}
