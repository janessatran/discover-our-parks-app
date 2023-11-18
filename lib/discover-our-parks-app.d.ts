import { LitElement } from "lit";
import "./setup-env";
import "./components/parks-map/parks-map";
import "./components/main-layout/main-layout";
export declare class DiscoverOurParksApp extends LitElement {
    header: string;
    static styles: import("lit").CSSResult;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
