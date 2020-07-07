import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/base.less";
import {Provider as MobxProvider} from 'mobx-react'
import mobx from "./mobx/mobx";
import Myrouter from "./router";

ReactDOM.render(
    <React.StrictMode>
      <MobxProvider {...mobx}>
          <Myrouter/>
      </MobxProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
