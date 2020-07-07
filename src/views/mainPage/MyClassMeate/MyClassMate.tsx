import React from "react";
import "./MyClassMate.less";
import BackBar from "../../../component/BackBar";
import { History } from "history";

type TState = {};
type TProps = {
  history: History;
};
export default class MyClassMate extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {};

  render() {
    return (
      <div className="MyClassMate">
        <BackBar title="我的同班" history={this.props.history} />
      </div>
    );
  }
}
