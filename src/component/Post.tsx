import React from "react";
type TPros = {
  postInfo: IPost;
};
export default function Post(props: TPros) {
  const { postInfo } = props;
  return (
    <div className="Post">
      <div className="title">
        <span>{postInfo.headIcon}</span>
        <span>{postInfo.title}</span>
      </div>
      <div className="content">{postInfo.content}</div>
      <div className="footer">
        <span>{postInfo.postTime}</span>
      </div>
    </div>
  );
}
