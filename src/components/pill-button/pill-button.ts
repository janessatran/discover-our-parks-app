import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./pill-button.css";

@customElement("pill-button")
export class PillButton extends MobxLitElement {
  static styles = styles;

  @property()
  private label: string = "Button";

  @property()
  private route: string | undefined;

  public render(): TemplateResult {
    return html`
      <a href=${ifDefined(this.route)}>
        <button class="pill-button" id="right">
          ${this.label}<span>&#10230;</span>
        </button>
      </a>
    `;
  }
}
