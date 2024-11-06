const fs = require('fs')

module.exports = eleventyConfig => {
  // add support for RSS/atom
  // eleventyConfig.addPlugin(rss)

  // Template libraries
  eleventyConfig.setLibrary('md', require('./src/utils/libraries/markdown'))

  // add some utility filters
  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '')
  })

  eleventyConfig.addFilter('date', require('./src/utils/filters/date'))
  eleventyConfig.addFilter('excerpt', require('./src/utils/filters/excerpt'))
  eleventyConfig.addFilter('markdown', require('./src/utils/filters/markdown'))
  eleventyConfig.addFilter('pretty', require('./src/utils/filters/pretty'))
  eleventyConfig.addFilter('slugify', require('./src/utils/filters/slugify'))
  eleventyConfig.addFilter('squash', require('./src/utils/filters/squash'))

  // Browsersync Overrides
  // eleventyConfig.setBrowserSyncConfig({
  //   callbacks: {
  //     ready: (err, browserSync) => {
  //       const content = fs.readFileSync('dist/404.html')

  //       browserSync.addMiddleware('*', (req, res) => {
  //         // Provides the 404 content without redirect.
  //         res.write(content)
  //         res.end()
  //       })
  //     }
  //   }
  // })

  eleventyConfig.addCollection('home', (collection) => {
    return collection
    // collection
    //   .getFilteredByTags('post', 'highlight')
    //   .reverse()
    //   .slice(0, 5)
  })

  // eleventyConfig.addCollection('versions', (collection) => {
  //   return collection.getFilteredByTag('version')
  // })

  eleventyConfig.addCollection('version-1', (collection) => {
    return collection
      .getFilteredByTags('version-1', 'standard')
    })

  eleventyConfig.addCollection('version-2', (collection) => {
    return collection
      .getFilteredByTags('version-2', 'standard')
  })

  eleventyConfig.addCollection('version-3', (collection) => {
    return collection
      .getFilteredByTags('version-3', 'standard')
  })

  // add layout aliases to make templates more portable
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  eleventyConfig.addLayoutAlias('collection', 'layouts/collection.njk')
  // eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
  // eleventyConfig.addLayoutAlias('posts', 'layouts/posts.njk')
  // eleventyConfig.addLayoutAlias('tags', 'layouts/tags.njk')

  eleventyConfig.addShortcode('now', () => `${new Date()}`)
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)

  return {
    templateFormats: ['njk', 'md', 'html', 'png', 'ico', 'svg', 'jpg', 'jpeg', 'gif', 'pdf', 'mp4', 'webm', 'vtt'],
    dir: {
      data: '_data',
      includes: '_includes',
      // components: '_includes/components',
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
