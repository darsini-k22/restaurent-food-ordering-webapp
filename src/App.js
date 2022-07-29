import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
