import React from "react";
type TState = {};
export default class Group extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {};
  render() {
    return <div className="group">群组</div>;
  }
}
