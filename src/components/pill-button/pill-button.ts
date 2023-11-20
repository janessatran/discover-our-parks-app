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

  @property({ type: Boolean })
  private openInNewTab = false;

  public render(): TemplateResult {
    return html`
      <a
        href=${ifDefined(this.route)}
        target=${ifDefined(this.openInNewTab === true ? "_blank" : "")}
      >
        <button class="pill-button" type="button">
          ${this.label}<span>&#10230;</span>
        </button>
      </a>
    `;
  }
}
