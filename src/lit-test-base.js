import {LitElement, html} from 'lit-element/lit-element.js';
import {style} from './lit-test-styles.js';

/**
 * `lit-test`
 * nothing yet
 *
 * ## Styling
 *
 * | Custom property | Description | Default |
 * | --- | --- | --- |
 * | `--custom-property` | What it does | `value` |
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class LitTest extends LitElement {
  /**
   * Declare the properties that will
   * trigger calls to `render`
   */
  static get properties() {
    return {
      greeting: {type: String},
    };
  }
  /**
   * Use the constructor to set defaults to your properties.
   */
  constructor() {
    super();
    this.greeting = 'hello';
    import('@lrnwebcomponents/multiple-choice/multiple-choice.js');
  }
  /**
   * Style definitions returned in an array of CSSResults can be optomized
   * as constructable style sheets for more performant sharing across an
   * application.
   *
   * @return {CSSResult[]}
   */
  static get styles() {
    return [style];
  }
  /**
   * Use [lit-html syntax](https://lit-html.polymer-project.org/guide/template-reference)
   * to declare the DOM representation of your element.
   *
   * @return {TemplateResult}
   */
  render() {
    return html`
        <h1>lit-test says '${this.greeting}'</h1>
    `;
  }
};
