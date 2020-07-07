export default class User implements IUser {
  baseInfo: { name: string; headIcon: string; title: string };
  extInfo: object;
  constructor(name: string, headIcon: string, title: string) {
    this.baseInfo = { name, headIcon, title };
    this.extInfo = {};
  }
}
