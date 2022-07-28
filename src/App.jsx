import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Filters from "./containers/Filters/Filters";
import CardList from "./containers/CardList/CardList";
import beers from "./assets/data/example-api-response";
import { useState } from "react";
import data from "./assets/data/example-api-response";

const App = () => {
  const [cardsToRender, setCardsToRender] = useState(data);
  return (
    <>
      <NavBar />
      <Filters data={beers} setCardsToRender={setCardsToRender} />
      <CardList cards={cardsToRender} />
    </>
  );
};

export default App;
