import React from "react";
import "./App.less";

import swiper from "swiper";
import 'swiper/swiper-bundle.min.css'
import MainPage from "./views/mainPage/mainPage";

/*const _swiper =*/
type Tstate = {
  pages: string[]
}

interface App {
  state: Tstate
}

class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      pages: ['mainPage', 'mainPage', 'mainPage', 'mainPage', 'mainPage',]
    }
  }

  componentDidMount() {
    new swiper('.swiper-container', {
      direction: "horizontal", // 垂直切换选项
    })
  }

  render() {

    return (<div className="App">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            this.state.pages.map((ele: any, index: number) => (<div className='swiper-slide' key={index}>{<MainPage/>}</div>))}
        </div>
      </div>
      <div className='buttonBar'>
        {this.state.pages.map((ele: string, index: number) => (<div className="buttonBarItem" key={index}>{ele}</div>))}
      </div>
    </div>);
  }

}

export default App;
