import { camelCase, upperFirst } from 'lodash-es';
import { exec } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { cwd } from 'node:process';

const pwd = cwd();
const inputDir = `${pwd}/node_modules/@tabler/icons/icons`;
const outputDir = `${pwd}/src/lib/icons`;

console.log('Reading source files...');

const files = readdirSync(inputDir);

console.log(`Generating ${files.length} icon files...`);

exec(`rm -rf ${outputDir}`);
exec(`mkdir ${outputDir}`);

let indexContent = '';
const fileOptions = { mode: '666' };
const filePrefix = `
  <script lang="ts">
    export let color: string = 'currentColor';
  </script>
`;

for (const file of files) {
  let content =
    filePrefix +
    readFileSync(`${inputDir}/${file}`, { encoding: 'utf-8' })
      .replace(/<desc>[^<]+<\/desc>/, '')
      .replace('icon-tabler icon-tabler', 'icon');

  let [componentName] = file.split('.');
  componentName = upperFirst(camelCase(componentName));
  if (componentName.startsWith('2')) {
    componentName = componentName.replace(/^2/, 'Two');
  } else if (componentName.startsWith('3')) {
    componentName = componentName.replace(/^3/, 'Three');
  }
  writeFileSync(`${outputDir}/${componentName}.svelte`, content, fileOptions);
  indexContent += `export { default as ${componentName} } from './${componentName}.svelte';\n`;
  writeFileSync(`${outputDir}/index.ts`, indexContent, fileOptions);
}

console.log('Formatting icon files...');

exec(`pnpm prettier --write --plugin-search-dir="${pwd}" ${outputDir}/*.svelte`);
