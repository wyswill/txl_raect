import React from "react";
import "./leftBar.less";

type Ts = {
  apps: string[];
  tips: any[];
};
export default class LeftBar extends React.Component<any, Ts> {
  public readonly state: Ts = {
    apps: ["appletv", "camera", "facetime", "icloud", "mail", "map", "message", "note", "podcast", "rili"],
    tips: [],
  };

  componentDidMount() {
    const _t: any = [];
    this.state.apps.map((ele) => {
      _t.push({
        imgSrc: require(`../../../assets/ios14/${ele}.png`),
        title: ele,
      });
    });
    this.setState({ tips: _t });
  }

  render() {
    return (
      <div className="LeftBar">
        <div className="search">
          <img src={require("../../../assets/ios14/fangdajing.png")} alt="" />
          <span>搜索</span>
          <img src={require("../../../assets/ios14/mac.png")} alt="" style={{ marginLeft: "auto" }} />
        </div>
        {this.state.tips.map((ele, index) => (
          <div className="tip" key={index}>
            <div className="title">
              <img src={ele.imgSrc} alt="" />
              <span>{ele.title}</span>
            </div>
            <div className="content">{ele.title}</div>
          </div>
        ))}
      </div>
    );
  }
}
