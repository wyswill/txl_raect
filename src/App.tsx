import React from "react";
import "./App.less";

import swiper from "swiper";
import 'swiper/swiper-bundle.min.css'
import MainPage from "./views/mainPage/mainPage";
import Plaza from "./views/plaza/plaza";
import Group from "./views/group/group";
import Msg from "./views/msg/msg";
import Mine from "./views/mine/mine";

type Tstate = {
  pages: string[],
  activeIndex: number,
  swiper: swiper | object,
}

class App extends React.Component<any, any, Tstate> {
  public readonly state: Readonly<Tstate> = {
    pages: ['首页', '广场', '群组', '消息', '我的'],
    activeIndex: 0,
    swiper: {},
  }

  componentDidMount() {
    const _swiper = new swiper('.swiper-container', {
      direction: "horizontal",
      on: {
        slideChangeTransitionStart: ({activeIndex}) => {
          this.setState({activeIndex})
        },
      }
    });
    this.setState({
      swiper: _swiper
    });
  }

  changePage(index: number) {
    // @ts-ignore
    this.state.swiper.slideTo(index);
  }

  render() {
    return (<div className="App">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.state.pages.map((ele: string, index: number) => (<div className='swiper-slide' key={index}>{switchPage(ele)}</div>))}
        </div>
      </div>
      <div className='buttonBar'>
        {this.state.pages.map((ele: string, index: number) => (<div onClick={this.changePage.bind(this, index)} className={`buttonBarItem ${this.state.activeIndex === index ? 'active' : ''}`} key={index}>{ele}</div>))}
      </div>
    </div>);
  }

}

function switchPage(name: string) {
  const map: { [index: string]: any } = {
    "首页": <MainPage/>, "广场": <Plaza/>, "群组": <Group/>, "消息": <Msg/>, "我的": <Mine/>,
  }
  return map[name];
}

export default App;
