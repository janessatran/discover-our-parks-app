var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./image-navigation.css";
let ImageNavigation = class ImageNavigation extends MobxLitElement {
    static styles = styles;
    render() {
        return html `
      <div class="image-nav-container">
        <div class="primary-nav-section">
          <div class="link">
            <a href="#">first visit checklist</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div class="secondary-nav-section">
          <div class="link">
            <a href="https://www.nps.gov/aboutus/index.htm" target="_blank"
              >Learn more about n.p.s.</a
            >
          </div>
          <img
            src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    `;
    }
};
ImageNavigation = __decorate([
    customElement("image-navigation")
], ImageNavigation);
export { ImageNavigation };
