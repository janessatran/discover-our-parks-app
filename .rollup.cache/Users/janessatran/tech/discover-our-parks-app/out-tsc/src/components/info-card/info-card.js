import { __decorate } from "tslib";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./info-card.css";
import "../pill-button/pill-button";
let InfoCard = class InfoCard extends MobxLitElement {
    constructor() {
        super(...arguments);
        this.buttonLabel = "Explore the map";
    }
    render() {
        return html `
      <div class="image-container">
        <slot name="photo-carousel-container"></slot>
      </div>
      <div class="content-container">
        <p class="text-content">${this.initialTextContent}</p>

        <p class="text-content">${this.secondaryTextContent}</p>

        ${when(this.buttonRoute, () => html `<div class="nav-container">
            <pill-button
              label=${this.buttonLabel}
              route=${this.buttonRoute}
            ></pill-button>
          </div>`)}
      </div>
    `;
    }
};
InfoCard.styles = styles;
__decorate([
    property()
], InfoCard.prototype, "initialTextContent", void 0);
__decorate([
    property()
], InfoCard.prototype, "secondaryTextContent", void 0);
__decorate([
    property()
], InfoCard.prototype, "buttonLabel", void 0);
__decorate([
    property()
], InfoCard.prototype, "buttonRoute", void 0);
InfoCard = __decorate([
    customElement("info-card")
], InfoCard);
export { InfoCard };
//# sourceMappingURL=info-card.js.map