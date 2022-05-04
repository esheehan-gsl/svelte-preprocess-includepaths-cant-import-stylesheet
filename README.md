# svelte-preprocess-includepaths-cant-import-stylesheet

This repo reproduces a bug using USWDS 3.0 with SvelteKit and svelte-preprocess
4.10.

The styles in `src/styles.scss` and `src/_uswds-theme.scss` follow the recommendations for [configuring USWDS](https://designsystem.digital.gov/documentation/settings/). The root stylesheet (`styles.scss`) is imported into `index.svelte` to trigger processing of the styles by svelte-preprocessor, which is configured in `svelte.config.js` to add `node_modules/@uswds/uswds/packages` to the include paths.

For comparison, you can run `npm run sass` to call Sass directly and compile `src/styles.scss` to `build/styles.css` and see that providing that same include path directly to Sass via the `--load-path` argument works.
