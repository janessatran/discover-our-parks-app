var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./info-card.css";
import "../pill-button/pill-button";
let InfoCard = class InfoCard extends MobxLitElement {
    static styles = styles;
    initialTextContent;
    secondaryTextContent;
    buttonLabel = "Explore the map";
    buttonRoute;
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
