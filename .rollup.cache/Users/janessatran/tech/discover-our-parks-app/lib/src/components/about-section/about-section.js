import { __decorate } from "tslib";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./about-section.css";
let AboutSection = class AboutSection extends MobxLitElement {
    constructor() {
        super(...arguments);
        this.title = "Discover Our Parks";
    }
    render() {
        return html `
      <div class="content">
        <div class="header">
          <div class="title"><a href="/">U.S. National Parks Discovery</a></div>
          <div class="author">By Janessa</div>
        </div>
        <hr class="divider" />
        <div class="app-title-section">${this.title}</div>
        <hr class="divider" />
        ${ifDefined(this.contentTemplate)}
      </div>
    `;
    }
};
AboutSection.styles = styles;
__decorate([
    property()
], AboutSection.prototype, "title", void 0);
__decorate([
    property({ type: Object })
], AboutSection.prototype, "contentTemplate", void 0);
AboutSection = __decorate([
    customElement("about-section")
], AboutSection);
export { AboutSection };
//# sourceMappingURL=about-section.js.map