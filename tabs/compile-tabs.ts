import { Section } from './schema';
import fs from 'fs';

const contentLiquid = fs.readFileSync('./tabs/content.liquid', 'utf8');
const jsScript = fs.readFileSync('./tabs/tabs.vanilla.js', 'utf8');

const schemaData: Section = {
  "name": "Tabs",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_tabs",
      "label": "Show Tabs",
      "default": true
    },
    {
      "type": "number",
      "id": "tab_font_size",
      "label": "Font size",
      "default": 20
    },
    {
      "type": "color",
      "id": "tab_text_color",
      "label": "Text color",
      "default": "#000000"
    }
  ],
  "blocks": [
    {
      "type": "text",
      "name": "t:sections.tabs.blocks.column.name",
      "settings": [{
        "id": "tab_title",
        "type": "text",
        "label": "Tab"
      }]
    }
  ],
  "presets": [
    {
      "name": "t:sections.tabs.presets.name",
      "blocks": [
        {
          "type": "text"
        },
        {
          "type": "text"
        },
        {
          "type": "text"
        }
      ]
    }
  ]
}
// Compile the output liquid file content
const outputLiquid = `
{% schema %}
${JSON.stringify(schemaData)}
{% endschema %}

${contentLiquid}

<script>
${jsScript}
</script>`

fs.writeFileSync('./theme/sections/tabs.liquid', outputLiquid, 'utf8');