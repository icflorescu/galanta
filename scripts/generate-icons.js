import { camelCase, upperFirst } from 'lodash-es';
import { exec } from 'node:child_process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { cwd } from 'node:process';
import { promisify } from 'node:util';
import { optimize } from 'svgo';

const execute = promisify(exec);

const pwd = cwd();
const inputDir = `${pwd}/node_modules/@tabler/icons/icons`;
const outputDir = `${pwd}/src/lib/icons`;

console.log('Reading source files...');

const files = await readdir(inputDir);

console.log(`Generating ${files.length} icon files...`);

await execute(`rm -rf ${outputDir}`);
await execute(`mkdir ${outputDir}`);

let indexContent = '';

const filePrefix = `
  <script lang="ts">
    export let size = 24;
    export let color = 'currentColor';
    export let strokeWidth = 2;
  </script>
`;

for (const file of files) {
  const source = await readFile(`${inputDir}/${file}`, { encoding: 'utf-8' });

  let content =
    filePrefix +
    optimize(source, { multipass: true })
      .data.replace('xmlns="http://www.w3.org/2000/svg"', '')
      .replace('icon-tabler icon-tabler', 'icon')
      .replace('width="24"', 'width={size}')
      .replace('height="24"', 'height={size}')
      .replace('stroke-width="2"', 'stroke-width={strokeWidth}')
      .replace('"currentColor"', '{color}');

  let [componentName] = file.split('.');
  componentName = upperFirst(camelCase(componentName));
  if (componentName.startsWith('2')) {
    componentName = componentName.replace(/^2/, 'Two');
  } else if (componentName.startsWith('3')) {
    componentName = componentName.replace(/^3/, 'Three');
  }
  indexContent += `export { default as ${componentName} } from './${componentName}.svelte';`;

  await writeFile(`${outputDir}/${componentName}.svelte`, content);
}

await writeFile(`${outputDir}/index.ts`, indexContent);

console.log('Formatting generated files...');

await execute(`pnpm prettier --write --plugin-search-dir="${pwd}" ${outputDir}`);
