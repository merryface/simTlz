import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

  const config = {
  preprocess: preprocessor(),
  kit: {
    adapter: adapter()
  }
};
export default config;