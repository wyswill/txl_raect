import React from "react";
import "./Mypeer.less";
import BackBar from "../../../component/BackBar";
import { History } from "history";
type TState = {};
type TProps = { history: History };
export default class Mypeet extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {};

  render() {
    return (
      <div className="Mypeet">
        <BackBar title="我的同行" history={this.props.history} />
        Mypeet
      </div>
    );
  }
}
