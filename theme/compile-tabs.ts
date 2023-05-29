import schema from './tabs/schema';
import fs from 'fs';

// Generate the schema as a string
const schemaString = JSON.stringify(schema, null, 2);

// Read the content.liquid file
const contentLiquid = fs.readFileSync('./tabs/content.liquid', 'utf8');

// Read the tabs.vanilla.js file
const jsScript = fs.readFileSync('./tabs/tabs.vanilla.js', 'utf8');

// Compile the output liquid file content
const outputLiquid = `
{% schema %}
${schemaString}
{% endschema %}

${contentLiquid}

<script>
${jsScript}
</script>`

fs.writeFileSync('./sections/tabs.liquid', outputLiquid, 'utf8');