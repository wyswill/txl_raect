import React from "react";
import "./App.less";
import swiper from "swiper";
import 'swiper/swiper-bundle.min.css'
import MainPage from "./views/mainPage/mainPage";
import Plaza from "./views/plaza/plaza";
import Group from "./views/group/group";
import Msg from "./views/msg/msg";
import Mine from "./views/mine/mine";
import UpAndDown from "./component/UpAndDown";
import ic_group_press from './assets/images/tab/ic_group_press.png'
import ic_group from './assets/images/tab/ic_group.png'
import ic_home_press from './assets/images/tab/ic_home_press.png'
import ic_home from './assets/images/tab/ic_home.png'
import ic_message_press from './assets/images/tab/ic_message_press.png'
import ic_message from './assets/images/tab/ic_message.png'
import ic_mine_press from './assets/images/tab/ic_mine_press.png'
import ic_mine from './assets/images/tab/ic_mine.png'
import ic_release_press from './assets/images/tab/ic_release_press.png'
import ic_release from './assets/images/tab/ic_release.png'

type singlePage = {
  [index: string]: any,
  name: string,
  imagePath: string,
  imagePress: string
}
type Tstate = {
  pages: singlePage[],
  swiper: swiper | {},
  activeIndex: number
}

class App extends React.Component<any, any, Tstate> {
  public readonly state: Readonly<Tstate> = {
    // pages: ['首页', '广场', '群组', '消息', '我的'],
    pages: [
      {
        name: '首页',
        imagePath: ic_home,
        imagePress: ic_home_press
      }, {
        name: '广场',
        imagePath: ic_release,
        imagePress: ic_release_press
      }, {
        name: '群组',
        imagePath: ic_group,
        imagePress: ic_group_press
      }, {
        name: '消息',
        imagePath: ic_message,
        imagePress: ic_message_press
      }, {
        name: '我的',
        imagePath: ic_mine,
        imagePress: ic_mine_press
      },
    ],
    swiper: {},
    activeIndex: 0
  }

  componentDidMount() {
    const _swiper = new swiper('#swiperApp', {
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
      <div className="swiper-container" id='swiperApp'>
        <div className="swiper-wrapper">
          {this.state.pages.map((ele: singlePage, index: number) => (<div className='swiper-slide' key={index}>{switchPage(ele.name)}</div>))}
        </div>
      </div>
      <div className='buttonBar'>
        {this.state.pages.map((ele: singlePage, index: number) =>
            (
                <div onClick={this.changePage.bind(this, index)} key={index}>
                  <UpAndDown>
                    <img src={
                      this.state.activeIndex === index ? this.state.pages[index].imagePress : this.state.pages[index].imagePath} alt=''/>
                    <p>{ele.name}</p>
                  </UpAndDown>
                </div>
            ))
        }
      </div>

    </div>);
  }

}

function switchPage(name: string) {
  // noinspection NonAsciiCharacters
  const map: { [index: string]: any } = {
    "首页": <MainPage/>, "广场": <Plaza/>, "群组": <Group/>, "消息": <Msg/>, "我的": <Mine/>,
  }
  return map[name];
}

export default App;
