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
import { styles } from "./about-section.css";
let AboutSection = class AboutSection extends MobxLitElement {
    static styles = styles;
    title = "Discover Our Parks";
    contentTemplate;
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
