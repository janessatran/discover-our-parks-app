import { html, TemplateResult, customElement, property } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import { styles } from "./pill-button.css";

@customElement("pill-button")
export class PillButton extends MobxLitElement {
  static styles = styles;

  @property()
  private label: string = "Button";

  @property()
  private clickUrl: string | undefined;

  handleClick(event: Event) {
    if (this.clickUrl) document.body.classList.add("fadeout");
    setTimeout(() => {
      if (this.clickUrl) window.location.href = this.clickUrl;
    }, 2000);
  }

  public render(): TemplateResult {
    return html`
      <button class="pill-button" @click=${this.handleClick}>
        ${this.label}<span>&#10230;</span>
      </button>
    `;
  }
}
