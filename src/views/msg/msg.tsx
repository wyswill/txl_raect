import React from "react";

type TState = {}
export default class Msg extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {}

  render() {
    return (<div className='msg'>msg</div>)
  }
}
