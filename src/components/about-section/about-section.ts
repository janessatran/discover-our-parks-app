import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./about-section.css";

@customElement("about-section")
export class AboutSection extends MobxLitElement {
  static styles = styles;

  @property()
  title = "Discover Our Parks";

  @property({ type: Object })
  contentTemplate: any | undefined;

  public render(): TemplateResult {
    return html`
      <div class="content">
        <div class="header">
          <div class="title"><a href="/">U.S. National Parks Discovery</a></div>
          <div class="author">By Janessa</div>
        </div>
        <hr class="divider" />
        <div class="app-title-section">${this.title}</div>
        <hr class="divider" />
        ${ifDefined(this.contentTemplate)}
      </div>
    `;
  }
}
