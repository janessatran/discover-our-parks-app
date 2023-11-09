import { html, TemplateResult } from "lit";

import { customElement, state } from "lit/decorators.js";
import { MobxLitElement } from "@adobe/lit-mobx";

import "../about-section/about-section";
import "../info-card/info-card";
import "../photo-carousel/photo-carousel";
import "../parks-map/parks-map";

import { styles } from "./parks-map.css";

@customElement("parks-map")
export class ParksMap extends MobxLitElement {
  static styles = styles;

  @state()
  parks = [];

  connectedCallback() {
    super.connectedCallback();
    if (this.parks.length <= 0) {
      this.fetchParks();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  async fetchParks() {
    const response = await fetch(
      "https://developer.nps.gov/api/v1/parks?limit=100000",
      {
        method: "GET",
        headers: {
          "X-Api-Key": "Y8Idz9Ba8lWUazAqUHNfxwE1RR97i3TSuoYiBsL7",
        },
      }
    );

    const jsonResponse = await response.json();
    this.parks = jsonResponse.data;
  }

  public render(): TemplateResult {
    return html`
      <div class="main-layout">
        <info-card>
          <photo-carousel slot="photo-carousel-container"> </photo-carousel>
        </info-card>
        <about-section></about-section>
      </div>
    `;
  }
}
