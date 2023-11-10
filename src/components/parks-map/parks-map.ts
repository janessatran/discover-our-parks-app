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

  connectedCallback() {
    super.connectedCallback();
    if (this.parks.length <= 0) {
      this.fetchParks();
    }

    const map = document.body.querySelector("#map") as HTMLElement;
    map.style.display = "intiial";
    map.style.width = "100%";
    map.style.height = "100%";
    // map.addEventListener("load", this.resizeMap);
  }

  resizeMap = (event: Event) => {
    const map = event.currentTarget as unknown as Map;
    map.resize();
  };

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

  // getMap = () => {
  //   // this.assign(
  //   //   mapboxgl,
  //   //   "accessToken",
  //   //   "pk.eyJ1IjoiamFuZXNzYXRyYW4iLCJhIjoiY2tjamlkaDVsMHA5bDJybzJyM2d3emg3ayJ9.O7NRbOgizvxFhP4QCCxgoA"
  //   // );

  //   mapboxgl.

  //   const map = new mapboxgl.Map({
  //     container: "map", // container ID
  //     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  //     style: "mapbox://styles/mapbox/light-v11", // style URL
  //     center: [9.49, 49.01], // starting position [lng, lat]
  //     zoom: 4, // starting zoom,
  //     accessToken:
  //       "pk.eyJ1IjoiamFuZXNzYXRyYW4iLCJhIjoiY2tjamlkaDVsMHA5bDJybzJyM2d3emg3ayJ9.O7NRbOgizvxFhP4QCCxgoA",
  //   });

  //   map.on("load", () => {
  //     map.setLayoutProperty("country-label", "text-field", [
  //       "format",
  //       ["get", "name_en"],
  //       { "font-scale": 1.2 },
  //       "\n",
  //       {},
  //       ["get", "name"],
  //       {
  //         "font-scale": 0.8,
  //         "text-font": [
  //           "literal",
  //           ["DIN Offc Pro Italic", "Arial Unicode MS Regular"],
  //         ],
  //       },
  //     ]);
  //   });

  //   return map;
  // };

  // private assign(obj: any, prop: any, value: any) {
  //   if (typeof prop === "string") prop = prop.split(".");

  //   if (prop.length > 1) {
  //     var e = prop.shift();
  //     this.assign(
  //       (obj[e] =
  //         Object.prototype.toString.call(obj[e]) === "[object Object]"
  //           ? obj[e]
  //           : {}),
  //       prop,
  //       value
  //     );
  //   } else obj[prop[0]] = value;
  // }

  public render(): TemplateResult {
    return html`
      <div class="main-layout">
        <info-card>
          <photo-carousel slot="photo-carousel-container"> </photo-carousel>
        </info-card>
        <about-section
          title="Explore the map"
          .contentTemplate=${map}
        ></about-section>
      </div>
    `;
  }
}
