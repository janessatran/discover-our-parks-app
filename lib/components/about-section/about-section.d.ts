import { TemplateResult } from "lit";
import { MobxLitElement } from "@adobe/lit-mobx";
export declare class AboutSection extends MobxLitElement {
    static styles: import("lit").CSSResult;
    title: string;
    contentTemplate: any | undefined;
    render(): TemplateResult;
}
