import { observable, action, makeObservable } from "mobx";

export class CounterStore {
  @observable
  public count = 0;

  @action
  public increment() {
    this.count++;
  }

  public constructor() {
    makeObservable(this);
  }
}
