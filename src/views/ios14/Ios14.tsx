import React, {TouchEvent} from "react";
import "./ios14.less";
import {Motion, spring} from "react-motion";
import {History} from "history";

type TState = {
  time: string;
  month: string;
  isShowPwd: boolean;
  isUnlock: boolean;
  timer: any;
  pwds: number[];
  numPads: string[];
};
type TProps = {
  history: History
};
export default class Ios14 extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {
    time: timeHandler()[0],
    month: timeHandler()[1],
    isShowPwd: false,
    isUnlock: false,
    timer: 0,
    pwds: [],
    numPads: ["", "ABC", "DEF", "GHI", "JKL", "MNO", "PRQS", "TUV", "WXYZ", "", ""],
  };

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({time: timeHandler()[0]});
    }, 30000);
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  showEnterPwd() {
    let {pwds, isShowPwd} = this.state;
    if (isShowPwd) pwds = [];
    this.setState({
      isShowPwd: !isShowPwd,
      pwds,
    });
  }

  enterPwd(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const {pwds} = this.state;
    if (pwds.length < 4) {
      pwds.push(1);
      this.setState({
        pwds,
      });
      if (pwds.length == 4) {
        this.setState({
          isUnlock: true,
          isShowPwd: false,
        });
        this.props.history.push('/Mainscrean')
      }
    }
  }

  render() {
    return (
        <div className="Ios14" onClick={this.showEnterPwd.bind(this)}>
          <Motion
              defaultStyle={{
                x: 100,
                blur: 0,
                unlock: 0,
              }}
              style={{
                x: spring(this.state.isShowPwd ? -100 : 100, {stiffness: 120, damping: 17}),
                blur: spring(this.state.isShowPwd ? 10 : 0),
                unlock: spring(this.state.isUnlock ? -100 : 0, {stiffness: 120, damping: 12}),
              }}
          >
            {({x, blur, unlock}) => (
                <div className="container">
                  <div
                      className="basepae"
                      style={{
                        filter: `blur(${blur}px)`,
                        transform: `translate3d(0, ${unlock}vh, 0)`,
                      }}
                  >
                    <div className="top">
                      <span>中国移动</span>
                      <span>
                    <img src={require("../../assets/ios14/xinhao.png")} alt=""/>
                    <img src={require("../../assets/ios14/xinhao_1.png")} alt=""/>
                    <img src={require("../../assets/ios14/iconset0252.png")} alt=""/>
                  </span>
                    </div>
                    <div className="center">
                      <img src={require("../../assets/ios14/suo.png")} alt=""/>
                      <span className={"time"}>{this.state.time}</span>
                      <span className={"month"}>{this.state.month}</span>
                    </div>
                    <div className="bottonOptons">
                      <div className="item">
                        <img src={require("../../assets/ios14/icon-.png")} alt=""/>
                      </div>
                      <div className="item">
                        <img src={require("../../assets/ios14/xiangji_huaban.png")} alt=""/>
                      </div>
                    </div>
                  </div>
                  <div
                      className="enterPwd"
                      style={{
                        transform: `translate3d(0, ${x}vh, 0)`,
                      }}
                  >
                    <img src={require("../../assets/ios14/suo.png")} alt=""/>
                    <p className={"tip"}>输入密码</p>
                    <div className="dots">
                      {new Array<number>(4).fill(0).map((ele, index) => (
                          <div className={`pwd_dot ${this.state.pwds[index] > 0 ? "full" : ""}`} key={index}/>
                      ))}
                    </div>
                    <div className="numPad">
                      {this.state.numPads.map((ele, index) => (
                          <div className="numpadItem" key={index} id={`numpadItem_${index}`} onClick={this.enterPwd.bind(this)}>
                            <p>{index + 1 >= 10 ? 0 : index + 1}</p>
                            <span>{ele}</span>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
            )}
          </Motion>
        </div>
    );
  }
}

export function timeHandler(): string[] {
  const date: Date = new Date(),
      res: string[] = [],
      weekTab = ["日", "一", "二", "三", "四", "五", "六"];
  res[0] = `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
  res[1] = `${date.getMonth() + 1}月${date.getDate()}日  星期${weekTab[date.getDay()]}`;
  return res;
}
