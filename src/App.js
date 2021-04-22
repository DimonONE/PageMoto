import { HomePage } from "./pages/Home/Home";
import { Route } from "react-router-dom";
import "./App.css"

const App = (props) => {
  return (
    <div classNameName="App">
        <Route path="/home"></Route>
      <HomePage />
    </div>
  );
}

export default App;
