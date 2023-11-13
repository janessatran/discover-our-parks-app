import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./info-card.css";
import "../pill-button/pill-button";

@customElement("info-card")
export class InfoCard extends MobxLitElement {
  static styles = styles;

  @property()
  initialTextContent: string | undefined;

  @property()
  secondaryTextContent: string | undefined;

  @property()
  buttonLabel = "Explore the map";

  @property()
  buttonRoute: string | undefined;

  public render(): TemplateResult {
    return html`
      <div class="image-container">
        <slot name="photo-carousel-container"></slot>
      </div>
      <div class="content-container">
        <p class="text-content">${this.initialTextContent}</p>

        <p class="text-content">${this.secondaryTextContent}</p>

        ${when(
          this.buttonRoute,
          () => html`<div class="nav-container">
            <pill-button
              label=${this.buttonLabel}
              route=${this.buttonRoute}
            ></pill-button>
          </div>`
        )}
      </div>
    `;
  }
}
