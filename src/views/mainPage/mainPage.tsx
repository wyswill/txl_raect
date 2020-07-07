import React from "react";
import "./mainPage.less";
import { inject, observer } from "mobx-react";

import ModuleDisplay from "../../component/ModuleDisplay";
import UpAndDown from "../../component/UpAndDown";
import { Link } from "react-router-dom";
import SinglePOst from "../../modules/SinglePost";
import User from "../../modules/User";
import Post from "../../component/Post";

type fm = {
  tag: string;
  imgSrc: string;
  router: string;
};
type TState = {
  firendList: fm[];
  posts: IPost[];
};
@inject("mainPageStore")
@observer
export default class MainPage extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {
    firendList: [
      { tag: "我的同班", imgSrc: require("../../assets/images/home/icon_Navigationbar_class.png"), router: "MyClassMate" },
      { tag: "我的同行", imgSrc: require("../../assets/images/home/icon_Navigationbar_job.png"), router: "Mypeer" },
      { tag: "星座速配", imgSrc: require("../../assets/images/home/icon_Navigationbar_.png"), router: "StartSin" },
      { tag: "高级查找", imgSrc: require("../../assets/images/home/icon_Navigationbar_search.png"), router: "Shearch" },
    ],
    posts: [],
  };
  constructor(props: any) {
    super(props);
    new Array(10).fill(0).map((ele: number) => {
      const _singlePost = new SinglePOst("asdf", new User("asdf", "asdfasdf", "asdfwerqwer"), "like", Date.now(), "content", "newONe", "rqwerqwer");
      this.state.posts.push(_singlePost);
    });
  }
  render() {
    return (
      <div className="mainPage">
        <img src={require("../../assets/images/bg_banner.png")} alt="banner" />
        <ModuleDisplay headICon={require("../../assets/images/home/ic_collection_press.png")} moduleName="今日之星">
          {[1, 2, 3, 4, 5].map((ele, index) => (
            <UpAndDown key={index}>
              <img src={require("../../assets/images/home/ic_collection_press.png")} alt="hea" />
              <div className="down">index</div>
            </UpAndDown>
          ))}
        </ModuleDisplay>
        <ModuleDisplay headICon={require("../../assets/images/icons/ic_home_add_newfriend.png")} moduleName="搜索朋友">
          {this.state.firendList.map((ele, index) => (
            <Link to={`/${ele.router}`} key={index}>
              <UpAndDown>
                <img src={ele.imgSrc} alt="imgSrc" />
                <div className="down">{ele.tag}</div>
              </UpAndDown>
            </Link>
          ))}
        </ModuleDisplay>
        <ModuleDisplay headICon={require("../../assets/images/home/ic_home_notic.png")} moduleName="学院通知">
          <div>asdfasd</div>
        </ModuleDisplay>
        <ModuleDisplay headICon={require("../../assets/images/home/icon_Navigationbar_demand.png")} moduleName="帖子广场" extClass="posetSquery">
          {this.state.posts.map((ele: IPost, index: number) => (
            <Post key={index} postInfo={ele}></Post>
          ))}
        </ModuleDisplay>
      </div>
    );
  }
}
