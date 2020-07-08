import React, { TouchEvent } from "react";
import "./ios14.less";

type TState = {
  time: string,
  month: string,
  isShowPwd: boolean,
  timer: NodeJS.Timeout | number,
  pwds: number[],
  numPads: string[],
}
type TProps = {}
export default class Ios14 extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {
    time: timeHandler()[0],
    month: timeHandler()[1],
    isShowPwd: false,
    timer: 0,
    pwds: new Array(4).fill(0),
    numPads: ["", "ABC", "DEF", "GHI", "JKL", "MNO", "PRQS", "TUV", "WXYZ", "", ""],
  };

  componentDidMount() {
    const timer: NodeJS.Timeout = setInterval(() => {
      this.setState({ time: timeHandler()[0] });
    }, 30000);
    this.setState({ timer });
  }

  showEnterPwd(event: TouchEvent) {
    const clientY: number = event.nativeEvent.touches[0].clientY;
    if (this.state.isShowPwd) {

    } else {

    }
  }

  render() {
    return (
      <div className='Ios14' onTouchMove={this.showEnterPwd.bind(this)}>
        <div className="top">
          <span>中国移动</span>
          <span><img src={require("../../assets/ios14/xinhao.png")} alt=""/>
        <img src={require("../../assets/ios14/xinhao_1.png")} alt=""/>
        <img src={require("../../assets/ios14/iconset0252.png")} alt=""/></span>
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
        <div className="enterPwd">
          <img src={require("../../assets/ios14/suo.png")} alt=""/>
          <p className={"tip"}>输入密码</p>
          <div className="dots">
            {
              this.state.pwds.map((ele, index) => <div className={`pwd_dot ${ele > 0 ? "full" : ""}`} key={index}/>)
            }
          </div>
          <div className="numPad">
            {
              this.state.numPads.map((ele, index) => <div className="numpadItem" key={index} id={`numpadItem_${index}`}>
                <p>{index + 1 >= 10 ? 0 : index + 1}</p>
                <span>{ele}</span>
              </div>)
            }
          </div>
        </div>
      </div>
    );
  }
}

function timeHandler(): string[] {
  const date: Date = new Date(), res: string[] = [], weekTab = ["日", "一", "二", "三", "四", "五", "六"];
  res[0] = `${date.getHours()}:${date.getMinutes()}`;
  res[1] = `${date.getMonth() + 1}月${date.getDate()}日  星期${weekTab[date.getDay()]}`;
  console.log(res);
  return res;
}
