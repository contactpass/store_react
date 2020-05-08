import React from "react";
import logo from "./logo.svg";
import HeaderLogin from "./components/HeaderLogin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import "./App.css";
import { Switch, Route } from "react-router-dom";

var routers = {
  login: "/login",
  register: "/register",
  home: "/home",
  profile: "/profile",
};

function App() {
  return (
    <div>
      <HeaderLogin />
      <div>
        <Switch>
          <Route exact path={routers.login} component={Login} />
          <Route exact path={routers.register} component={Register} />
          <Route exact path={routers.home} component={Home} />
          <Route exact path={routers.profile} component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
