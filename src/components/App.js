import Header from "./Header"
import Hero from './Hero'
import Contact from "./Contact"
import About from "./About"
import Pricing from "./Pricing"
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

export default function App(){
    return(
        <div>
        <Router>
         <Header /> 
        <Switch>
        <Route exact path="/">
        <Hero />
        <Contact />
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/pricing" component={Pricing}>
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
        </Switch>
        </Router>
         
        </div>
    )
}