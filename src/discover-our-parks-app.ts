import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { Router } from "@vaadin/router";
import { styles } from "./discover-our-parks-app.css";
import "./setup-env";
import "./components/parks-map/parks-map";
import "./components/main-layout/main-layout";

@customElement("discover-our-parks-app")
export class DiscoverOurParksApp extends LitElement {
  @property({ type: String }) header = "Discover Our Parks!";

  static styles = styles;

  firstUpdated() {
    const router = new Router(this.shadowRoot?.querySelector("#outlet"));
    router.setRoutes([
      { path: "/", component: "main-layout" },
      { path: "/parks-map", component: "parks-map" },
      { path: "(.*)", redirect: "/" },
    ]);
  }

  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}
