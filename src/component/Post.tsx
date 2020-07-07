import React from "react";
import * as  style from "../styles/Post.module.less";

type TPros = {
  postInfo: IPost;
};
export default function Post(props: TPros) {
  const { postInfo } = props;
  return (
    <div className={style.Post}>
      <div className={style.title}>
        <span>{postInfo.tag}</span>
        <span>{postInfo.title}</span>
      </div>
      <div className={style.content}>{postInfo.content}</div>
      <div className={style.footer}>
        <img src={postInfo.poster.baseInfo.headIcon} alt=""/>
        <span>{postInfo.poster.baseInfo.name}</span>
        <span>{new Date(postInfo.postTime).toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
