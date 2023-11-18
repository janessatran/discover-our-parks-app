import { LitElement, PropertyValues } from "lit";
export declare class PhotoCarousel extends LitElement {
    static styles: import("lit").CSSResult;
    private selectedInternal;
    private left;
    private previous;
    selected: number;
    name: string;
    metadata: string;
    connectedCallback(): void;
    get maxSelected(): number;
    hasValidSelected(): boolean;
    protected updated(changedProperties: PropertyValues): void;
    private updateSlots;
    private handleForwardClick;
    private handleBackClick;
    private dispatchChange;
    private updateData;
    render(): import("lit-html").TemplateResult<1>;
}
