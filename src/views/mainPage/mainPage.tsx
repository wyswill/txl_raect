import React from "react";
import './mainPage.less';

type TState = {}
export default class MainPage extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {}

  render() {
    return (<div className='mainPage'>
      mainPage
    </div>);
  }
}