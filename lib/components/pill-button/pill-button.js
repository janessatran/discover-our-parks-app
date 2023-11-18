var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./pill-button.css";
let PillButton = class PillButton extends MobxLitElement {
    static styles = styles;
    label = "Button";
    route;
    render() {
        return html `
      <a href=${ifDefined(this.route)}>
        <button class="pill-button" type="button">
          ${this.label}<span>&#10230;</span>
        </button>
      </a>
    `;
    }
};
__decorate([
    property()
], PillButton.prototype, "label", void 0);
__decorate([
    property()
], PillButton.prototype, "route", void 0);
PillButton = __decorate([
    customElement("pill-button")
], PillButton);
export { PillButton };
