import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Filters from "./containers/Filters/Filters";
import beers from "./assets/data/example-api-response";

function App() {
  return (
    <>
      <NavBar />
      <Filters data={beers} />
    </>
  );
}

export default App;
