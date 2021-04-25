import { HomePage } from "./pages/Home/Home";
import { Route } from "react-router-dom";
import "./App.css"

const App = (props) => {
  return (
    <div className="App">
        <Route path="/"><HomePage /></Route>
    </div>
  );
}

export default App;
