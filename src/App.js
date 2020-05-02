import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./comp/views/Home";
import "./style/main.css";
import { SitesProvider } from "./comp/context/SitesContext";

const App = () => {
  return (
    <SitesProvider>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
    </SitesProvider>
  );
};

export default App;
