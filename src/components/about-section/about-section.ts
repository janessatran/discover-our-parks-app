import {
  html,
  TemplateResult,
  customElement,
  property,
  css,
} from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./about-section.css";

@customElement("about-section")
export class AboutSection extends MobxLitElement {
  static styles = styles;

  public render(): TemplateResult {
    return html`
      <div class="content">
        <div class="header">
          <div class="title">U.S. National Parks</div>
          <div class="author">By Janessa</div>
        </div>
        <hr class="divider" />
        <div class="app-title-section">Discover our parks</div>
        <hr class="divider" />
        <div class="image-nav-container">
          <div class="primary-nav-section">
            <div class="link">
              <a href="#">first visit checklist</a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div class="secondary-nav-section">
            <div class="link">
              <a href="#">Learn more about n.p.s.</a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    `;
  }
}
