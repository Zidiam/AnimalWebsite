import React from "react";
import FAQ from "../FAQ/faq.js"
import About from "../FAQ/faq.js"
import "./components/footer.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <div className = "bottomnav">
          <div className="tab-content">
            <a className="active">
              <Link to="/about">About</Link>
            </a>
              <a className="active">
              <Link to="/FAQ">FAQ</Link>
            </a>
          </div>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
            <Route path="/FAQ">
            <FAQ />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}