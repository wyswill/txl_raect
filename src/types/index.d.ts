declare interface IUser {
  baseInfo: {
    name: string;
    headIcon: string;
    title: string;
  };
  extInfo: {};
}

declare interface IPost {
  title: string;
  content?: string;
  tag?: string;
  headIcon?: string;
  poster: IUser;
  postTime: number | string;
  options: "like" | "start" | "delete" | "comment";
  extData?: any;
}

declare interface IMsg {
  title: string;
  user: IUser;
  time: string | number;
  content: string;
}
declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}