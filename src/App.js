import Header from "./components/Layout/Header";
import { Fragment } from "react/cjs/react.production.min";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
