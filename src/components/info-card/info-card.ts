import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./info-card.css";
import "../pill-button/pill-button";

@customElement("info-card")
export class InfoCard extends MobxLitElement {
  static styles = styles;

  public render(): TemplateResult {
    return html`
      <div class="image-container">
        <slot name="photo-carousel-container"></slot>
      </div>
      <div class="content-container">
        <p class="text-content">
          Welcome to Your Ultimate National Park Adventure Hub!
        </p>

        <p class="text-content">
          From the rugged Rockies to the serene shores, we've got the lowdown on
          all your favorite national parks. Dive in, find your next adventure,
          and let's make some memories!
        </p>

        <div class="nav-container">
          <pill-button label="Explore the map" route="/parks-map"></pill-button>
        </div>
      </div>
    `;
  }
}
