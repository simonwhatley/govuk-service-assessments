const glob = require("glob")

module.exports = eleventyConfig => {
  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'))

  // Template libraries
  eleventyConfig.setLibrary('md', require('./src/utils/libraries/markdown'))

  // Filters
  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '')
  })

  eleventyConfig.addFilter('date', require('./src/utils/filters/date'))
  eleventyConfig.addFilter('excerpt', require('./src/utils/filters/excerpt'))
  eleventyConfig.addFilter('markdown', require('./src/utils/filters/markdown'))
  eleventyConfig.addFilter('pretty', require('./src/utils/filters/pretty'))
  eleventyConfig.addFilter('slugify', require('./src/utils/filters/slugify'))
  eleventyConfig.addFilter('squash', require('./src/utils/filters/squash'))
  eleventyConfig.addFilter('toc', require('./src/utils/filters/table-of-contents'))

  // Passthrough
  // eleventyConfig.addPassthroughCopy('./src/assets/images')
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
    port: 9000, // Set your preferred port number here
    // You can also configure other options such as:
    // host: "0.0.0.0",
    // open: true
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
      }
    }
  })

  // Collections
  eleventyConfig.addCollection('home', (collection) => {
    return collection
      .getFilteredByTags('overview', 'version')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
  })

  eleventyConfig.addCollection('version-1', (collection) => {
    return collection
      .getFilteredByTags('version-1', 'standard')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
    })

  eleventyConfig.addCollection('version-2', (collection) => {
    return collection
      .getFilteredByTags('version-2', 'standard')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
  })

  eleventyConfig.addCollection('version-3', (collection) => {
    return collection
      .getFilteredByTags('version-3', 'standard')
      .sort((a, b) => a.fileSlug.toLowerCase().localeCompare(b.fileSlug.toLowerCase()))
  })

  // Layouts
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  eleventyConfig.addLayoutAlias('standards', 'layouts/standards.njk')
  eleventyConfig.addLayoutAlias('standards-v1', 'layouts/standards-v1.njk')
  eleventyConfig.addLayoutAlias('standard', 'layouts/standard.njk')
  eleventyConfig.addLayoutAlias('error', 'layouts/error.njk')

  // Short codes
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
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
