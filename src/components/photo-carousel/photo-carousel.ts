import { LitElement, html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

import { styles } from "./photo-carousel.css";

@customElement("photo-carousel")
export class PhotoCarousel extends LitElement {
  static styles = styles;

  private selectedInternal = 0;

  private left = 0;

  private previous = 0;

  @property({ type: Number })
  selected = 0;

  @property()
  name = "";

  metadata = "";

  connectedCallback() {
    super.connectedCallback();
  }

  get maxSelected() {
    console.log(this.childElementCount);
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has("selected") && this.hasValidSelected()) {
      this.updateSlots();
      this.previous = this.selected;
    }
  }

  private updateSlots() {
    this.children[this.previous]?.removeAttribute("slot");
    this.children[this.selected]?.setAttribute("slot", "selected");
  }

  private handleForwardClick(e: MouseEvent) {
    const i = this.selected + (Number(!e.shiftKey) || 1);
    this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
    this.dispatchChange(this.selected);
  }

  private handleBackClick(e: MouseEvent) {
    const i = this.selected + (Number(!e.shiftKey) || -1);
    this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
    this.dispatchChange(this.selected);
  }

  private dispatchChange(selected: number) {
    const change = new CustomEvent("change", {
      detail: selected,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(change);
    this.updateData(selected);
  }

  private updateData(selected: number) {
    const name = this.children[selected].getAttribute("id");
    if (name) {
      this.name = name;
    }
    const code = this.children[selected].getAttribute("park-code");
    if (code) {
      this.metadata = code;
    }

    window.dispatchEvent(
      new CustomEvent("changed-photo-event", {
        detail: {
          name: this.name,
          metadata: this.metadata,
        },
      })
    );
  }

  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }

    const countText =
      this.maxSelected > 0 ? `${this.selected} OF ${this.maxSelected}` : "...";

    return html`
      <div class="fit">
        <div class="photo-container">
          <slot name="selected"></slot>
        </div>
        <div class="menu-container">
          <slot name="count">${countText}</slot>
          <slot name="name">${this.name}</slot>
          <div class="buttons">
            <!-- <div class="back-arrow" @click=${this.handleBackClick}>
              <span>&#10229;</span>
            </div> -->
            <div class="forward-arrow" @click=${this.handleForwardClick}>
              <span>&#10230;</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
