import { React } from "react";
import "./App.css";
import { ListadoHoteles } from "./recursos/HotelInfo/HotelInfo";
import { Header } from "./recursos/Header/Header";
import { Filtros } from "./recursos/Filtros/Filtros";

function App() {
  // const [country, setCountry] = useState("");

  return (
    <div className="App">
      <Header />
      <Filtros />
      <ListadoHoteles />
    </div>
  );
}

export default App;
