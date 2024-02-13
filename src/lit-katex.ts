import katex from "katex";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("lit-katex")
export class LitKatex extends LitElement {
  render() {
    const data = String.raw`${this.innerHTML}`;

    const formula = katex.renderToString(data, {
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
