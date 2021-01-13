import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="material-form-item" theme-for="vaadin-form-item">
  <template>
    <style>
      [part="label"] {
        font-family: var(--material-font-family);
        font-size: var(--material-small-font-size);
        color: var(--material-secondary-text-color);
        line-height: 16px;
        font-weight: 400;
        margin-top: 16px;
        margin-bottom: 8px;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
