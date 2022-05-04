import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    includePaths: [
      'node_modules/@uswds/uswds/packages'
    ]
  }),
	kit: {
		adapter: adapter()
	}
};

export default config;
