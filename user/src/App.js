import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Navigation_navB/navbar";

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
