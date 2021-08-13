import { React, useState } from "react";
import { ListadoHoteles } from "../HotelInfo/HotelInfo";
import { Header } from "../Header/Header";
import { Filtros } from "../Filtros/Filtros";

export function Container() {
  const [country, setCountry] = useState("");

  return (
    <div className="App">
      <Header />
      <Filtros country={country} setCountry={setCountry} />
      <ListadoHoteles />
    </div>
  );
}
