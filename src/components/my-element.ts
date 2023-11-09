import { html, TemplateResult } from "lit";
import { MobxLitElement } from "@adobe/lit-mobx";

import { CounterStore } from "../stores/CounterStore";
import { customElement } from "lit/decorators.js";

// create a new custom element, and use the base MobxLitElement class
// alternatively you can use the MobxReactionUpdate mixin, e.g. `class MyElement extends MobxReactionUpdate(LitElement)`
@customElement("my-element")
export class MyElement extends MobxLitElement {
  private counter = new CounterStore();

  public firstUpdated() {
    // you can update in first updated
    this.counter.increment(); // value is now 1
  }

  private incrementCount() {
    // and you can trigger change in event callbacks
    this.counter.increment(); // value is now n + 1
  }

  // any observables accessed in the render method will now trigger an update
  public render(): TemplateResult {
    console.log("JT DEBUG: re-rendering");
    return html`
      Count is ${this.counter.count}
      <br />
      <button @click=${this.incrementCount}>Add</button>
    `;
  }
}
