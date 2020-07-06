import {action, observable} from "mobx";

export default class MainPageStore {
  @observable oneNum = 3333;

  @action add() {
    this.oneNum += 10;
  }
}
