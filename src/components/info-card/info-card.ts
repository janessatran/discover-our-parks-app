import { html, TemplateResult, customElement, property } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./info-card.css";

@customElement("info-card")
export class InfoCard extends MobxLitElement {
  static styles = styles;

  public render(): TemplateResult {
    return html`
      <div class="image-container">
        <slot name="photo-carousel-container"></slot>
      </div>
      <div class="content-container">
        <p>Welcome to Your Ultimate National Park Adventure Hub!</p>

        <p>
          From the rugged Rockies to the serene shores, we've got the lowdown on
          all your favorite national parks. Dive in, find your next adventure,
          and let's make some memories!
        </p>
      </div>
    `;
  }
}
