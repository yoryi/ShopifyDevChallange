const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./tabs/tabs.tsx'],
  bundle: true,
  outfile: './theme/assets/tabs.js',
  platform: 'browser',
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
})
.catch(() => process.exit(1));