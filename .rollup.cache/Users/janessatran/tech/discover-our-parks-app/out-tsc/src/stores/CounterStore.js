import { __decorate } from "tslib";
import { observable, action, makeObservable } from "mobx";
export class CounterStore {
    increment() {
        this.count++;
    }
    constructor() {
        this.count = 0;
        makeObservable(this);
    }
}
__decorate([
    observable
], CounterStore.prototype, "count", void 0);
__decorate([
    action
], CounterStore.prototype, "increment", null);
//# sourceMappingURL=CounterStore.js.map