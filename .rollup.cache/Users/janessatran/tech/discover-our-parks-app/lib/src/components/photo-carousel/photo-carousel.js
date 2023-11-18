import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./photo-carousel.css";
let PhotoCarousel = class PhotoCarousel extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedInternal = 0;
        this.left = 0;
        this.previous = 0;
        this.selected = 0;
        this.name = "";
        this.metadata = "";
    }
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
        var _a, _b;
        (_a = this.children[this.previous]) === null || _a === void 0 ? void 0 : _a.removeAttribute("slot");
        (_b = this.children[this.selected]) === null || _b === void 0 ? void 0 : _b.setAttribute("slot", "selected");
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
PhotoCarousel.styles = styles;
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
//# sourceMappingURL=photo-carousel.js.map