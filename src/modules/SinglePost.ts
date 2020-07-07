export default class SinglePOst implements IPost {
  title: string;
  content?: string | undefined;
  tag?: string | undefined;
  headIcon?: string | undefined;
  poster: IUser;
  postTime: string | number;
  options: "like" | "start" | "delete" | "comment";
  extData?: any;

  constructor(title: string, poster: IUser, options: "like" | "start" | "delete" | "comment", postTime: string | number, content?: string | undefined, tag?: string | undefined, headIcon?: string | undefined, extData?: any) {
    this.title = title;
    this.content = content;
    this.tag = tag;
    this.headIcon = headIcon;
    this.poster = poster;
    this.postTime = postTime;
    this.options = options;
    this.extData = extData;
  }
}
