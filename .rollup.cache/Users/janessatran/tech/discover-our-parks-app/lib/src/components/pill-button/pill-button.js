import { __decorate } from "tslib";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./pill-button.css";
let PillButton = class PillButton extends MobxLitElement {
    constructor() {
        super(...arguments);
        this.label = "Button";
    }
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
PillButton.styles = styles;
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
//# sourceMappingURL=pill-button.js.map