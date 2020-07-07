import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import MyClassMate from "./views/mainPage/MyClassMeate/MyClassMate";
import Mypeet from "./views/mainPage/Mypeer/Mypeet";
import Shearch from "./views/mainPage/Shearch/Shearch";
import StartSin from "./views/mainPage/StratSin/StartSin";

export default function Myrouter() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/MyClassMate' component={MyClassMate}/>
          <Route path='/Mypeer' component={Mypeet}/>
          <Route path='/StartSin' component={StartSin}/>
          <Route path='/Shearch' component={Shearch}/>
        </Switch>
      </BrowserRouter>
  )
}