const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./tabs.tsx'],
    bundle: true,
    outfile: '../theme/assets/tabs.js',
    platform: 'browser',
    target: ['es2015'],
    format: 'esm',
    loader: {
      '.js': 'jsx', // Enable JSX transformation for JavaScript files
    },
    sourcemap: true,
    minify: true
  })
  .catch(() => process.exit(1));  