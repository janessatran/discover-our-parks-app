import { CSSResult, html, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { MobxLitElement } from "@adobe/lit-mobx";

import "../about-section/about-section";
import "../info-card/info-card";
import "../photo-carousel/photo-carousel";
import "../parks-map/parks-map";

import { setUpMap, addPopupToMap, flyTo } from "../../../map";

import * as mapboxgl from "mapbox-gl";

import { styles } from "./parks-map.css";
import { styles as mainLayoutStyles } from "../main-layout/main-layout.css";
import { styles as aboutSectionStyles } from "../about-section/about-section.css";
import { RequestInfo } from "undici-types";

@customElement("parks-map")
export class ParksMap extends MobxLitElement {
  static styles: CSSResult[] = [mainLayoutStyles, aboutSectionStyles, styles];

  @state()
  parks = [];

  mapElement: HTMLElement | undefined;

  mapObj: mapboxgl.Map | undefined;

  ready = false;

  parkCodeToDataMap = new Map();

  @state()
  parkDescription = "";

  @state()
  parkUrl = "";

  @state()
  imagesForCarousel: (TemplateResult<1> | undefined)[] | undefined;

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener(
      "changed-photo-event",
      this.handleChangePhotoEvent.bind(this)
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(
      "changed-photo-event",
      this.handleChangePhotoEvent.bind(this)
    );
  }

  repeatUntilMapReady() {
    if (!this.mapObj) {
      console.log("repeating until map ready");
      const mapEl = document.body.querySelector("#map") as HTMLElement;
      if (mapEl) {
        mapEl.style.display = "block";
        mapEl.style.width = "100%";
        mapEl.style.minHeight = "500px";
        this.mapElement = mapEl;
        this.getMap();
        this.requestUpdate();
      } else {
        const mapWrapperEl = document.body.querySelector(
          ".map-wrapper"
        ) as HTMLElement;
        const createdMap = document.createElement("div");
        createdMap.id = "map";
        createdMap.style.height = "400px";
        createdMap.style.width = "100%";
        mapWrapperEl.appendChild(createdMap);
      }
      setTimeout(() => {
        this.repeatUntilMapReady();
      }, 1000); // Adjust the delay as needed
    }
  }

  repeatUntilImagesReady() {
    if (!this.imagesForCarousel || !this.parks) {
      console.log("repeating until images/data ready");

      this.getData();
      this.requestUpdate();
    }

    // Set a timeout to call the function again after a delay
    setTimeout(() => {
      this.repeatUntilImagesReady();
    }, 1000); // Adjust the delay as needed
  }

  getMap() {
    const map = setUpMap();
    if (map) {
      this.mapObj = map;
    }

    return this.mapObj ? true : false;
  }

  handleChangePhotoEvent(e: Event) {
    console.log(e);
    const event = e as CustomEvent;
    if (this.parkCodeToDataMap) {
      const parkData = this.parkCodeToDataMap.get(event.detail.metadata);
      if (parkData) {
        this.parkDescription = parkData.description;
        this.parkUrl = parkData.url;
        flyTo(this.mapObj, parkData);
        // addPopupToMap(this.mapObj, parkData);
      }
    }
  }

  firstUpdated() {
    this.repeatUntilMapReady();
    if (this.mapElement) this.repeatUntilImagesReady();
  }

  async getData() {
    await this.fetchParks();
    this.imagesForCarousel = this.getImages();
  }

  async fetchWithTimeout(resource: RequestInfo, options?: any) {
    const timeout = options?.timeout ?? 8000;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    return response;
  }

  async fetchParks() {
    const map = this.mapObj;
    let parksData;

    const response = await this.fetchWithTimeout(
      "https://developer.nps.gov/api/v1/parks?limit=100000",
      {
        method: "GET",
        headers: {
          "X-Api-Key": "Y8Idz9Ba8lWUazAqUHNfxwE1RR97i3TSuoYiBsL7",
        },
        timeout: 4000,
      }
    );

    const jsonResponse = await response.json();
    parksData = jsonResponse.data;
    this.parks = parksData;

    parksData.forEach((park: any) => {
      this.parkCodeToDataMap.set(park.parkCode, park);
    });

    parksData.slice(0, 1).forEach((park: any) => {
      // addPopupToMap(map, park);
      flyTo(map, park);
    });
  }

  getImages() {
    const imageTemplate = this.parks.map((park: any) => {
      const img = park.images[0];

      if (img) {
        return html` <img
          src="${img.url}"
          id=${park.fullName}
          park-code=${park.parkCode}
        />`;
      }
    });

    const filtered = imageTemplate.filter((item) => item);
    return filtered;
  }

  public render(): TemplateResult {
    const placeholderImageForMap = html`<img
      class="placeholder-img"
      src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />`;
    const placeholderText =
      "Beyond the towering trees and vast horizons lies a path to self-discovery. Nature's canvas becomes a mirror reflecting your innermost thoughts and aspirations. Wander the trails, traverse the meadows, and allow the whispers of the wilderness to guide you on a journey of self-reflection. Or, at least that's what nature evokes for me! Begin your exploration of the various parks by clicking the arrow above.";

    return html`
      <div class="main-container">
        <about-section
          title="Explore the map"
          .contentTemplate=${this.mapElement
            ? this.mapElement
            : placeholderImageForMap}
        ></about-section>
        <info-card
          .initialTextContent=${this.parkDescription
            ? this.parkDescription
            : placeholderText}
          .buttonLabel=${"Learn more"}
          .buttonRoute=${this.parkUrl}
        >
          <photo-carousel
            slot="photo-carousel-container"
            .name=${"Click the arrow to begin exploring!"}
          >
            <img
              src="https://images.unsplash.com/photo-1592415251033-6d09541f9a23?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            ${this.imagesForCarousel}
          </photo-carousel>
        </info-card>
      </div>
    `;
  }
}
