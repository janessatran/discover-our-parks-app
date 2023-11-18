import { __decorate } from "tslib";
import { html } from "lit";
import { MobxLitElement } from "@adobe/lit-mobx";
import { CounterStore } from "../stores/CounterStore";
import { customElement } from "lit/decorators.js";
// create a new custom element, and use the base MobxLitElement class
// alternatively you can use the MobxReactionUpdate mixin, e.g. `class MyElement extends MobxReactionUpdate(LitElement)`
let MyElement = class MyElement extends MobxLitElement {
    constructor() {
        super(...arguments);
        this.counter = new CounterStore();
    }
    firstUpdated() {
        // you can update in first updated
        this.counter.increment(); // value is now 1
    }
    incrementCount() {
        // and you can trigger change in event callbacks
        this.counter.increment(); // value is now n + 1
    }
    // any observables accessed in the render method will now trigger an update
    render() {
        console.log("JT DEBUG: re-rendering");
        return html `
      Count is ${this.counter.count}
      <br />
      <button @click=${this.incrementCount}>Add</button>
    `;
    }
};
MyElement = __decorate([
    customElement("my-element")
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map