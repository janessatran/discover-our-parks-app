var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./photo-carousel.css";
let PhotoCarousel = class PhotoCarousel extends LitElement {
    static styles = styles;
    selectedInternal = 0;
    left = 0;
    previous = 0;
    selected = 0;
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
    updated(changedProperties) {
        if (changedProperties.has("selected") && this.hasValidSelected()) {
            this.updateSlots();
            this.previous = this.selected;
        }
    }
    updateSlots() {
        this.children[this.previous]?.removeAttribute("slot");
        this.children[this.selected]?.setAttribute("slot", "selected");
    }
    handleForwardClick(e) {
        const i = this.selected + (Number(!e.shiftKey) || 1);
        this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
        this.dispatchChange(this.selected);
    }
    handleBackClick(e) {
        const i = this.selected + (Number(!e.shiftKey) || -1);
        this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
        this.dispatchChange(this.selected);
    }
    dispatchChange(selected) {
        const change = new CustomEvent("change", {
            detail: selected,
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(change);
        this.updateData(selected);
    }
    updateData(selected) {
        const name = this.children[selected].getAttribute("id");
        if (name) {
            this.name = name;
        }
        const code = this.children[selected].getAttribute("park-code");
        if (code) {
            this.metadata = code;
        }
        window.dispatchEvent(new CustomEvent("changed-photo-event", {
            detail: {
                name: this.name,
                metadata: this.metadata,
            },
        }));
    }
    render() {
        if (this.hasValidSelected()) {
            this.selectedInternal = this.selected;
        }
        const countText = this.maxSelected > 0 ? `${this.selected} OF ${this.maxSelected}` : "...";
        return html `
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
};
__decorate([
    property({ type: Number })
], PhotoCarousel.prototype, "selected", void 0);
__decorate([
    property()
], PhotoCarousel.prototype, "name", void 0);
PhotoCarousel = __decorate([
    customElement("photo-carousel")
], PhotoCarousel);
export { PhotoCarousel };
