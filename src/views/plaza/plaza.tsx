import React from "react";
import style from "./plaza.module.less";
import SinglePOst from "../../modules/SinglePost";
import User from "../../modules/User";
import ModuleDisplay from "../../component/ModuleDisplay";
import Post from "../../component/Post";

type TState = {
  options: string[],
  posts: IPost[]
};
export default class Plaza extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {
    options: new Array(6).fill("类别"),
    posts: new Array(10).fill(0).map((ele: number) =>
      new SinglePOst({
        title: "title",
        headIcon: require("../../assets/images/home/icon_Navigationbar_class.png"),
        content: "content",
        tag: "tag",
        poster: new User("name", "icon", "title"),
        postTime: Date.now(),
        options: "comment",
      }),
    ),
  };

  render() {
    return <div className={style.Plaza}>
      <div className={style.options}>
        {
          this.state.options.map((ele, index) => <div className={style.optionItem}
                                                      key={index}>{ele + (index + 1)}</div>)
        }
      </div>
      <ModuleDisplay headICon={require("../../assets/images/home/icon_Navigationbar_demand.png")} moduleName="帖子广场"
                     extClass={style.posetSquery} extContentClass={style.content}>
        {this.state.posts.map((ele: IPost, index: number) => (
          <Post key={index} postInfo={ele}/>
        ))}
      </ModuleDisplay>
    </div>;
  }
}
