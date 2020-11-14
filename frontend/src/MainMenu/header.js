import React from "react";
import AnimalAdding from "../AnimalAdd/AnimalAdding";
import AnimalsList from "../AnimalList/Animals"
import "./components/header.css"
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
            <a className="active" href="#home">
              <Link to="/">Home</Link>
            </a>
              <a className="active" href="#home">
              <Link to="/animalsAdd">AnimalsAdd</Link>
            </a>
              <a className="active" href="#home">
              <Link to="/animals">Animals</Link>
            </a>
              <a className="active" href="#home">
              <Link to="/topics">Topics</Link>
            </a>
          </div>
        </div>

        <Switch>
          <Route path="/animalsAdd">
            <AnimalsAdd />
          </Route>
            <Route path="/animals">
            <Animals />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function AnimalsAdd() {
  return <AnimalAdding/>;
}
function Animals() {
  return <AnimalsList/>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}