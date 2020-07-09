import React from "react";
import "./Mainscrean.less";
import { timeHandler } from "../Ios14";
import { Motion, spring } from "react-motion";
import swiper from "swiper";
import "swiper/swiper.less";
type TState = {
  timer: any;
  time: string;
  apps: string[];
  swiper: swiper | {};
};
export default class Mainscrean extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {
    timer: 0,
    time: timeHandler()[0],
    apps: ["applemusic", "appletv", "camera", "facetime", "icloud", "mail", "map", "message", "note", "podcast", "rili", "safari", "applemusic", "appletv", "camera", "safari", "applemusic", "appletv", "camera"],
    swiper: {},
  };

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({ time: timeHandler()[0] });
    }, 30000);
    const _swiper = new swiper(".swiper-container", {
      direction: "horizontal",
      initialSlide: 1,
    });
    this.setState({ timer, swiper: _swiper });
  }

  render() {
    return (
      <div className="Mainscrean">
        <div className="top">
          <span>{this.state.time}</span>
          <span>
            <img src={require("../../../assets/ios14/xinhao.png")} alt="" />
            <img src={require("../../../assets/ios14/xinhao_1.png")} alt="" />
            <img src={require("../../../assets/ios14/iconset0252.png")} alt="" />
          </span>
        </div>
        <Motion defaultStyle={{ botton: -15, x: 20 }} style={{ botton: spring(2, { stiffness: 120, damping: 20 }) }}>
          {({ botton }) => (
            <div className="swiper-container" style={{ height: `97%` }}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">asdfasd</div>
                <div className="container swiper-slide">
                  <div className="center ">
                    {this.state.apps.map((ele, key) => {
                      return (
                        <div className="app" key={key}>
                          <img src={require(`../../../assets/ios14/${ele}.png`)} alt={ele} />
                          <span>{ele}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="docker"
                    style={{
                      bottom: `${botton}vh`,
                    }}
                  >
                    {this.state.apps.slice(0, 4).map((ele, index) => (
                      <div className="app" key={index}>
                        <img src={require(`../../../assets/ios14/${ele}.png`)} alt={ele} />
                      </div>
                    ))}
                  </div>{" "}
                </div>
                <div className="swiper-slide">asdfasd</div>
              </div>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}
