import { html, TemplateResult } from "lit";

import { customElement, state } from "lit/decorators.js";
import { MobxLitElement } from "@adobe/lit-mobx";

import "../about-section/about-section";
import "../info-card/info-card";
import "../photo-carousel/photo-carousel";
import "../parks-map/parks-map";

// import * as mapboxgl from "mapbox-gl";

import { styles } from "./parks-map.css";
import { Map } from "mapbox-gl";

@customElement("parks-map")
export class ParksMap extends MobxLitElement {
  static styles = styles;

  @state()
  parks = [];

  map: HTMLElement | undefined;

  connectedCallback() {
    super.connectedCallback();

    const map = document.body.querySelector("#map") as HTMLElement;
    map.style.display = "initial";
    this.map = map;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  public render(): TemplateResult {
    return html`
      <div class="main-layout">
        <info-card>
          <photo-carousel slot="photo-carousel-container"> </photo-carousel>
        </info-card>
        <about-section
          title="Explore the map"
          .contentTemplate=${this.map}
        ></about-section>
      </div>
    `;
  }
}
