import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import FourOhFour from "../FourOhFour/FourOhFour";
import AddAnimals from "../AnimalAdd/AnimalAdding.js"
import AnimalsList from "../AnimalList/Animals.js"

function App() {
  return (
      <div className="bg-primary">
        <BrowserRouter>
          <Header/>
              <Switch>
                  <Route exact path="/addanimals">
                  <AddAnimals/>
                </Route>
                  <Route exact path="/animalslist">
                  <AnimalsList/>
                </Route>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route>
                  <FourOhFour/>
                </Route>
              </Switch>
              <hr/>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
