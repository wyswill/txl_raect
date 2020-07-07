import React from "react";
import style from "./plaza.module.less";

type TState = {
  options: string[]
};
export default class Plaza extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {
    options: ["1", "2", "1", "2", "1", "2"],
  };

  render() {
    return <div className={style.Plaza}>
      <div className={style.options}>
        {
          this.state.options.map((ele, index) => <div className={style.optionItem} key={index}>{ele}</div>)
        }
      </div>

    </div>;
  }
}
