import React from "react"
import {BrowserRouter, Route} from "react-router-dom"

import Register from "./components/Register";
import Login from "./components/Login";
import Dashborad from "./components/Dashborad";
import Header from "./components/Header"
import Home from "./components/Home"
import Profiles from "./components/Profiles"


function App() {
  return (
    <React.Fragment>
     <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/dashborad" component={Dashborad} />
     </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
