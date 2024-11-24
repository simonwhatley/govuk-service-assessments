import * as glob from 'glob'
import fs from 'fs'
import eleventyNavigationPlugin from '@11ty/eleventy-navigation'
import eleventyRssPlugin from '@11ty/eleventy-plugin-rss'
import markdownLibrary from './src/utils/libraries/markdown.js'
import dateFilter from './src/utils/filters/date.js'
import excerptFilter from './src/utils/filters/excerpt.js'
import markdownFilter from './src/utils/filters/markdown.js'
import prettyFilter from './src/utils/filters/pretty.js'
import slugifyFilter from './src/utils/filters/slugify.js'
import squashFilter from './src/utils/filters/squash.js'
import tocFilter from './src/utils/filters/table-of-contents.js'

export default (eleventyConfig) => {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(eleventyRssPlugin)

  // Template libraries
  eleventyConfig.setLibrary('md', markdownLibrary)

  // Filters
  eleventyConfig.addFilter('permalink', (str) => str.replace(/\.html/g, ''))
  eleventyConfig.addFilter('date', dateFilter)
  eleventyConfig.addFilter('excerpt', excerptFilter)
  eleventyConfig.addFilter('markdown', markdownFilter)
  eleventyConfig.addFilter('pretty', prettyFilter)
  eleventyConfig.addFilter('slugify', slugifyFilter)
  eleventyConfig.addFilter('squash', squashFilter)
  eleventyConfig.addFilter('toc', tocFilter)

  // Passthrough
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/dist/govuk/assets': 'assets' })

  // Pass-through copy of images, PDFs, and other assets from content
  const assetFiles = glob.sync('src/content/**/*.{jpg,jpeg,png,gif,svg,pdf,odt,docx,xlsx,pptx}')
  assetFiles.forEach((file) => {
    // Get destination path based on the source file
    const destinationPath = file.replace(/^src\/content/, 'assets/content')
    eleventyConfig.addPassthroughCopy({ [file]: destinationPath })
  })

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.setServerOptions({
    port: 9000
  })

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) => {
        const content = fs.readFileSync('dist/404.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content)
          res.end()
        })
      },
    },
  })

  // Collections
  eleventyConfig.addCollection('home', (collection) =>
    collection
      .getFilteredByTags('overview', 'version')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
  )

  eleventyConfig.addCollection('version-1', (collection) =>
    collection
      .getFilteredByTags('version-1', 'standard')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
  )

  eleventyConfig.addCollection('version-2', (collection) =>
    collection
      .getFilteredByTags('version-2', 'standard')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
  )

  eleventyConfig.addCollection('version-3', (collection) =>
    collection
      .getFilteredByTags('version-3', 'standard')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
  )

  // Layouts
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  eleventyConfig.addLayoutAlias('standards', 'layouts/standards.njk')
  eleventyConfig.addLayoutAlias('standards-v1', 'layouts/standards-v1.njk')
  eleventyConfig.addLayoutAlias('standard', 'layouts/standard.njk')
  eleventyConfig.addLayoutAlias('error', 'layouts/error.njk')

  // Shortcodes
  eleventyConfig.addShortcode('now', () => `${new Date()}`)
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)

  // Configuration
  return {
    templateFormats: ['njk', 'md'],
    dir: {
      data: '_data',
      includes: '_includes',
      components: '_includes/components',
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
  }
}
