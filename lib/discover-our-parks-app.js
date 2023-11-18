var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { styles } from "./discover-our-parks-app.css";
import "./setup-env";
import "./components/parks-map/parks-map";
import "./components/main-layout/main-layout";
import { configureRouter } from "./setup-router";
let DiscoverOurParksApp = class DiscoverOurParksApp extends LitElement {
    header = "Discover Our Parks!";
    static styles = styles;
    firstUpdated() {
        const outlet = this.shadowRoot?.querySelector("#outlet");
        if (outlet)
            configureRouter(outlet);
    }
    render() {
        return html `
      <main>
        <div id="outlet"></div>
      </main>
    `;
    }
};
__decorate([
    property({ type: String })
], DiscoverOurParksApp.prototype, "header", void 0);
DiscoverOurParksApp = __decorate([
    customElement("discover-our-parks-app")
], DiscoverOurParksApp);
export { DiscoverOurParksApp };
