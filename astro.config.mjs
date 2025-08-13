import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

// Generate the static list of dynamic URLs
const generateDynamicUrls = () => {
  const urls = []
  for (let id = 0; id <= 32; id++) {
    urls.push(`/project/${id}`)
  }
  return urls
}

const dynamicUrls = generateDynamicUrls()

// https://astro.build/config
export default defineConfig({
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  site: 'https://kiraaziz.vercel.app/',
  integrations: [
    tailwind(),
    sitemap({
      customPages: dynamicUrls,
    }),
    react(),
  ],
  output: 'server',
  devToolbar: {
    enabled: false,
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
})
