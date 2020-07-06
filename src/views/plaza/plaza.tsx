import React from "react";

type TState = {};
export default class Plaza extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {};

  render() {
    return <div className="Plaza">广场</div>;
  }
}
