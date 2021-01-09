import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
import Dashborad from "./components/Dashborad";
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return (
    <React.Fragment>
     <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Dashborad} />
     </Router>
    </React.Fragment>
  );
}

export default App;
