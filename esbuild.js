const { build } = require('esbuild');

build({
  entryPoints: ['./src/client.tsx'], 
  outbase: './src',
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  external: [], 
  watch: false,
});