/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DswButton {
        "appearance": string;
        "text": string;
        "type": string;
    }
    interface DswDivisor {
        "appearance": string;
    }
    interface DswFooter {
    }
    interface DswHeading {
        "appearance"?: string;
        "text"?: string;
    }
    interface DswIcon {
        "icon": string;
        "url": string;
    }
    interface DswInput {
        "disabled"?: boolean;
        "icon"?: string;
        "inputId": string;
        "label": string;
        "required"?: boolean;
        "textError"?: string;
        "type": string;
    }
    interface DswLink {
        "appearance"?: string;
        "target"?: string;
        "text"?: string;
        "url"?: string;
    }
    interface DswLogo {
        "url": string;
        "width": number;
    }
    interface DswParagraph {
        "appearance": string;
        "text": string;
    }
    interface DswPillSmall {
        "disabled": boolean;
        "text": string;
    }
    interface DswSocialLogin {
        "appearance": string;
    }
    interface DswStoreButton {
        "appearance": string;
        "text": string;
    }
    interface DswSubtitle {
        "appearance": string;
        "text": string;
    }
}
declare global {
    interface HTMLDswButtonElement extends Components.DswButton, HTMLStencilElement {
    }
    var HTMLDswButtonElement: {
        prototype: HTMLDswButtonElement;
        new (): HTMLDswButtonElement;
    };
    interface HTMLDswDivisorElement extends Components.DswDivisor, HTMLStencilElement {
    }
    var HTMLDswDivisorElement: {
        prototype: HTMLDswDivisorElement;
        new (): HTMLDswDivisorElement;
    };
    interface HTMLDswFooterElement extends Components.DswFooter, HTMLStencilElement {
    }
    var HTMLDswFooterElement: {
        prototype: HTMLDswFooterElement;
        new (): HTMLDswFooterElement;
    };
    interface HTMLDswHeadingElement extends Components.DswHeading, HTMLStencilElement {
    }
    var HTMLDswHeadingElement: {
        prototype: HTMLDswHeadingElement;
        new (): HTMLDswHeadingElement;
    };
    interface HTMLDswIconElement extends Components.DswIcon, HTMLStencilElement {
    }
    var HTMLDswIconElement: {
        prototype: HTMLDswIconElement;
        new (): HTMLDswIconElement;
    };
    interface HTMLDswInputElement extends Components.DswInput, HTMLStencilElement {
    }
    var HTMLDswInputElement: {
        prototype: HTMLDswInputElement;
        new (): HTMLDswInputElement;
    };
    interface HTMLDswLinkElement extends Components.DswLink, HTMLStencilElement {
    }
    var HTMLDswLinkElement: {
        prototype: HTMLDswLinkElement;
        new (): HTMLDswLinkElement;
    };
    interface HTMLDswLogoElement extends Components.DswLogo, HTMLStencilElement {
    }
    var HTMLDswLogoElement: {
        prototype: HTMLDswLogoElement;
        new (): HTMLDswLogoElement;
    };
    interface HTMLDswParagraphElement extends Components.DswParagraph, HTMLStencilElement {
    }
    var HTMLDswParagraphElement: {
        prototype: HTMLDswParagraphElement;
        new (): HTMLDswParagraphElement;
    };
    interface HTMLDswPillSmallElement extends Components.DswPillSmall, HTMLStencilElement {
    }
    var HTMLDswPillSmallElement: {
        prototype: HTMLDswPillSmallElement;
        new (): HTMLDswPillSmallElement;
    };
    interface HTMLDswSocialLoginElement extends Components.DswSocialLogin, HTMLStencilElement {
    }
    var HTMLDswSocialLoginElement: {
        prototype: HTMLDswSocialLoginElement;
        new (): HTMLDswSocialLoginElement;
    };
    interface HTMLDswStoreButtonElement extends Components.DswStoreButton, HTMLStencilElement {
    }
    var HTMLDswStoreButtonElement: {
        prototype: HTMLDswStoreButtonElement;
        new (): HTMLDswStoreButtonElement;
    };
    interface HTMLDswSubtitleElement extends Components.DswSubtitle, HTMLStencilElement {
    }
    var HTMLDswSubtitleElement: {
        prototype: HTMLDswSubtitleElement;
        new (): HTMLDswSubtitleElement;
    };
    interface HTMLElementTagNameMap {
        "dsw-button": HTMLDswButtonElement;
        "dsw-divisor": HTMLDswDivisorElement;
        "dsw-footer": HTMLDswFooterElement;
        "dsw-heading": HTMLDswHeadingElement;
        "dsw-icon": HTMLDswIconElement;
        "dsw-input": HTMLDswInputElement;
        "dsw-link": HTMLDswLinkElement;
        "dsw-logo": HTMLDswLogoElement;
        "dsw-paragraph": HTMLDswParagraphElement;
        "dsw-pill-small": HTMLDswPillSmallElement;
        "dsw-social-login": HTMLDswSocialLoginElement;
        "dsw-store-button": HTMLDswStoreButtonElement;
        "dsw-subtitle": HTMLDswSubtitleElement;
    }
}
declare namespace LocalJSX {
    interface DswButton {
        "appearance"?: string;
        "text"?: string;
        "type"?: string;
    }
    interface DswDivisor {
        "appearance"?: string;
    }
    interface DswFooter {
    }
    interface DswHeading {
        "appearance"?: string;
        "text"?: string;
    }
    interface DswIcon {
        "icon"?: string;
        "url"?: string;
    }
    interface DswInput {
        "disabled"?: boolean;
        "icon"?: string;
        "inputId"?: string;
        "label"?: string;
        "required"?: boolean;
        "textError"?: string;
        "type"?: string;
    }
    interface DswLink {
        "appearance"?: string;
        "target"?: string;
        "text"?: string;
        "url"?: string;
    }
    interface DswLogo {
        "url"?: string;
        "width"?: number;
    }
    interface DswParagraph {
        "appearance"?: string;
        "text"?: string;
    }
    interface DswPillSmall {
        "disabled"?: boolean;
        "text"?: string;
    }
    interface DswSocialLogin {
        "appearance"?: string;
    }
    interface DswStoreButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface DswSubtitle {
        "appearance"?: string;
        "text"?: string;
    }
    interface IntrinsicElements {
        "dsw-button": DswButton;
        "dsw-divisor": DswDivisor;
        "dsw-footer": DswFooter;
        "dsw-heading": DswHeading;
        "dsw-icon": DswIcon;
        "dsw-input": DswInput;
        "dsw-link": DswLink;
        "dsw-logo": DswLogo;
        "dsw-paragraph": DswParagraph;
        "dsw-pill-small": DswPillSmall;
        "dsw-social-login": DswSocialLogin;
        "dsw-store-button": DswStoreButton;
        "dsw-subtitle": DswSubtitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dsw-button": LocalJSX.DswButton & JSXBase.HTMLAttributes<HTMLDswButtonElement>;
            "dsw-divisor": LocalJSX.DswDivisor & JSXBase.HTMLAttributes<HTMLDswDivisorElement>;
            "dsw-footer": LocalJSX.DswFooter & JSXBase.HTMLAttributes<HTMLDswFooterElement>;
            "dsw-heading": LocalJSX.DswHeading & JSXBase.HTMLAttributes<HTMLDswHeadingElement>;
            "dsw-icon": LocalJSX.DswIcon & JSXBase.HTMLAttributes<HTMLDswIconElement>;
            "dsw-input": LocalJSX.DswInput & JSXBase.HTMLAttributes<HTMLDswInputElement>;
            "dsw-link": LocalJSX.DswLink & JSXBase.HTMLAttributes<HTMLDswLinkElement>;
            "dsw-logo": LocalJSX.DswLogo & JSXBase.HTMLAttributes<HTMLDswLogoElement>;
            "dsw-paragraph": LocalJSX.DswParagraph & JSXBase.HTMLAttributes<HTMLDswParagraphElement>;
            "dsw-pill-small": LocalJSX.DswPillSmall & JSXBase.HTMLAttributes<HTMLDswPillSmallElement>;
            "dsw-social-login": LocalJSX.DswSocialLogin & JSXBase.HTMLAttributes<HTMLDswSocialLoginElement>;
            "dsw-store-button": LocalJSX.DswStoreButton & JSXBase.HTMLAttributes<HTMLDswStoreButtonElement>;
            "dsw-subtitle": LocalJSX.DswSubtitle & JSXBase.HTMLAttributes<HTMLDswSubtitleElement>;
        }
    }
}
