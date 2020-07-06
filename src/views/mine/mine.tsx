import React from "react";

type TState = {}
export default class Mine extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {}

  render() {
    return (<div className='Mine'>Mine</div>)
  }
}
