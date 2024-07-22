import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import sentry from "@sentry/astro";

// Generate the static list of dynamic URLs
const generateDynamicUrls = () => {
  const urls = [];
  for (let id = 0; id <= 32; id++) {
    urls.push(`/project/${id}`);
  }
  return urls;
};

const dynamicUrls = generateDynamicUrls();

// https://astro.build/config
export default defineConfig({
  site: 'https://kiraaziz.vercel.app/',
  integrations: [
    tailwind(),
    sitemap({
      customPages: dynamicUrls,
    }),
    react(),
    sentry({
      dsn: "https://afc04dbf255d37b0840183c89396dfee@o4507629142278144.ingest.de.sentry.io/4507646489133136",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
