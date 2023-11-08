import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./pill-button.css";

@customElement("pill-button")
export class PillButton extends MobxLitElement {
  static styles = styles;

  @property()
  private label: string = "Button";

  @property()
  private clickUrl: string | undefined;

  handleClick(event: Event) {
    const layerClass = "." + "right-layer";
    // Perhaps dispatch an event instead....
    const mainAppElement = document.body?.querySelector<HTMLElement>(
      "discover-our-parks-app"
    );
    const layers = mainAppElement?.shadowRoot?.querySelectorAll(".right-layer");

    if (layers) {
      layers.forEach((layer: Element) => {
        layer.classList.toggle("active");
      });
    }
    setTimeout(() => {
      // const loadingPageEvent = new CustomEvent("loading-page-event");
      // this.dispatchEvent(loadingPageEvent);
      // if (mainAppElement) mainAppElement.style.opacity = "0";
      if (this.clickUrl) {
        window.location.href = this.clickUrl;
        // TODO: add fetch request
        // window.history.pushState("Maps", "Explore the Map", this.clickUrl);
      }
    }, 1000);
  }

  public render(): TemplateResult {
    return html`
      <button class="pill-button" id="right" @click=${this.handleClick}>
        ${this.label}<span>&#10230;</span>
      </button>
    `;
  }
}
