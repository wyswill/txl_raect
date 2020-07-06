import React from "react";
import "./App.less";

import swiper from "swiper";
import 'swiper/swiper-bundle.min.css'
import MainPage from "./views/mainPage/mainPage";

type Tstate = {
  pages: string[],
  activeIndex: number,
  swiper: swiper | object,
}

class App extends React.Component<any, any, Tstate> {
  public readonly state: Readonly<Tstate> = {
    pages: ['mainPage', 'mainPage', 'mainPage', 'mainPage', 'mainPage',],
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
          {this.state.pages.map((ele: any, index: number) => (<div className='swiper-slide' key={index}>{<MainPage/>}</div>))}
        </div>
      </div>
      <div className='buttonBar'>
        {this.state.pages.map((ele: string, index: number) => (<div onClick={this.changePage.bind(this, index)} className={`buttonBarItem ${this.state.activeIndex === index ? 'active' : ''}`} key={index}>{ele}</div>))}
      </div>
    </div>);
  }

}

export default App;
