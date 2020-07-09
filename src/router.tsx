import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import MyClassMate from "./views/mainPage/MyClassMeate/MyClassMate";
import Mypeet from "./views/mainPage/Mypeer/Mypeet";
import Shearch from "./views/mainPage/Shearch/Shearch";
import StartSin from "./views/mainPage/StratSin/StartSin";
import Ios14 from "./views/ios14/Ios14";
import Mainscrean from "./views/ios14/Mainscrean/Mainscrean";

export default function Myrouter() {
  return (
      <Router>
        <Switch>
          {/*<Route exact path="/" component={App} />*/}
          <Route exact path={"/"} component={Ios14}/>
          <Route path="/Mainscrean" component={Mainscrean}/>
          <Route path="/MyClassMate" component={MyClassMate}/>
          <Route path="/Mypeer" component={Mypeet}/>
          <Route path="/StartSin" component={StartSin}/>
          <Route path="/Shearch" component={Shearch}/>
        </Switch>
      </Router>
  );
}
