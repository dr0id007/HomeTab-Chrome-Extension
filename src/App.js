import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./comp/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/google"}
          component={(props) => {
            console.log(
              "https://www.google.com/?search?q=" + props.location.state.search
            );
            if (props.location.state.search === undefined) {
              return <home />;
            }
            window.location =
              "https://www.google.com/search?client=ubuntu&channel=fs&q=" +
              props.location.state.search +
              "&ie=utf-8&oe=utf-8 + props.location.state.search";
          }}
        />
        <Route path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
