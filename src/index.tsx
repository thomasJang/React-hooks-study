import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./useRef";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>,<Link to="/useRef">useRef Sample</Link>
        </nav>

        <Route path="/useRef" exact component={Counter} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
