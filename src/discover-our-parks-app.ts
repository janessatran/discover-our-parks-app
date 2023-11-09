import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { styles } from "./discover-our-parks-app.css";
import "./setup-env";
import "./components/parks-map/parks-map";
import "./components/main-layout/main-layout";
import { configureRouter } from "./setup-router";

@customElement("discover-our-parks-app")
export class DiscoverOurParksApp extends LitElement {
  @property({ type: String }) header = "Discover Our Parks!";

  static styles = styles;

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector("#outlet");
    if (outlet) configureRouter(outlet);
  }

  render() {
    return html`
      <main>
        <div id="outlet"></div>
        <div class="container">
          <div class="right-layer"></div>
          <div class="right-layer right-layer--2"></div>
          <div class="right-layer right-layer--3"></div>
          <div class="right-layer right-layer--4"></div>
        </div>
      </main>
    `;
  }
}
