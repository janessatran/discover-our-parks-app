import { TemplateResult } from "lit";
import { MobxLitElement } from "@adobe/lit-mobx";
import "../pill-button/pill-button";
export declare class InfoCard extends MobxLitElement {
    static styles: import("lit").CSSResult;
    initialTextContent: string | undefined;
    secondaryTextContent: string | undefined;
    buttonLabel: string;
    buttonRoute: string | undefined;
    render(): TemplateResult;
}
