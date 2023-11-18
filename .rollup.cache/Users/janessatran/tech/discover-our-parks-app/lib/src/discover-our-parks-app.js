import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { styles } from "./discover-our-parks-app.css";
import "./setup-env";
import "./components/parks-map/parks-map";
import "./components/main-layout/main-layout";
import { configureRouter } from "./setup-router";
let DiscoverOurParksApp = class DiscoverOurParksApp extends LitElement {
    constructor() {
        super(...arguments);
        this.header = "Discover Our Parks!";
    }
    firstUpdated() {
        var _a;
        const outlet = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#outlet");
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
DiscoverOurParksApp.styles = styles;
__decorate([
    property({ type: String })
], DiscoverOurParksApp.prototype, "header", void 0);
DiscoverOurParksApp = __decorate([
    customElement("discover-our-parks-app")
], DiscoverOurParksApp);
export { DiscoverOurParksApp };
//# sourceMappingURL=discover-our-parks-app.js.map