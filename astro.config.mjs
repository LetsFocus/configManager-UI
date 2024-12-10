import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  content: {
    collections: {
      docs: {
        directory: './src/content/docs',
        schema: ({ z }) => z.object({
          title: z.string(),
          description: z.string().optional(),
        }),
      },
    },
  },
});
