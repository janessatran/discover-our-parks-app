import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { MobxLitElement } from "@adobe/lit-mobx";

import { styles } from "./main-layout.css";

import "../about-section/about-section";
import "../info-card/info-card";
import "../photo-carousel/photo-carousel";
import "../parks-map/parks-map";
import "../image-navigation/image-navigation";

@customElement("main-layout")
export class MainLayout extends MobxLitElement {
  static styles = styles;

  public render(): TemplateResult {
    const imageNav = html`<image-navigation></image-navigation>`;
    return html`<div class="main-container">
      <about-section
        title="Discover our parks"
        .contentTemplate=${imageNav}
      ></about-section>
      <info-card
        initialTextContent="Welcome to Your Ultimate National Park Adventure Hub!"
        secondaryTextContent="From the rugged Rockies to the serene shores, we've got the lowdown on all your favorite national parks. Dive in, find your next adventure,  and let's make some memories!"
      >
        <photo-carousel slot="photo-carousel-container">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2842&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1605999212421-3f0bf43857ab?auto=format&fit=crop&q=80&w=2680&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2752&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1604542031551-3fd943f1886f?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1577018925296-e908942c6851?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1597777933704-61bde8bd8e02?auto=format&fit=crop&q=80&w=2728&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </photo-carousel>
      </info-card>
    </div>`;
  }
}
