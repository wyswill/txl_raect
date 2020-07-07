import React from "react";
import BackBar from "../../../component/BackBar";
import { History } from "history";
type TState = {};
type TProps = { history: History };
export default class Shearch extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {};

  render() {
    return (
      <div className="Shearch">
        <BackBar title="高级搜索" history={this.props.history} />
        Shearch
      </div>
    );
  }
}
