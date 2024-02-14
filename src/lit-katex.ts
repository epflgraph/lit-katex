import katex from "katex";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("lit-katex")
export class LitKatex extends LitElement {
  render() {
    const formula = katex.renderToString(this.innerHTML, {
      throwOnError: false,
      output: "mathml",
    });

    return html`${unsafeHTML(formula)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-katex": LitKatex;
  }
}
