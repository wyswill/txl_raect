import React from "react";
import BackBar from "../../../component/BackBar";
import { History } from "history";
type TState = {};
type TProps = { history: History };
export default class StartSin extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {};

  render() {
    return (
      <div className="StartSin">
        <BackBar title="星座速配" history={this.props.history} />
        StartSin
      </div>
    );
  }
}
