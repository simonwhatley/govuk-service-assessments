const fs = require('fs')
const htmlmin = require('html-minifier')

module.exports = eleventyConfig => {
  // add support for RSS/atom
  // eleventyConfig.addPlugin(rss)

  // Template libraries
  eleventyConfig.setLibrary('md', require('./src/utils/libraries/markdown'))

  // add some utility filters
  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '')
  })

  eleventyConfig.addFilter('excerpt', require('./src/utils/filters/excerpt'))
  eleventyConfig.addFilter('markdown', require('./src/utils/filters/markdown'))
  eleventyConfig.addFilter('slugify', require('./src/utils/filters/slugify'))
  eleventyConfig.addFilter('squash', require('./src/utils/filters/squash'))

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

  eleventyConfig.addCollection('home', (collection) => {
    return collection
    // collection
    //   .getFilteredByTags('post', 'highlight')
    //   .reverse()
    //   .slice(0, 5)
  })

  eleventyConfig.addCollection('posts', (collection) => {
    return collection.getFilteredByTag('post')
  })


  // add layout aliases to make templates more portable
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk')
  // eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  // eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
  // eleventyConfig.addLayoutAlias('posts', 'layouts/posts.njk')
  // eleventyConfig.addLayoutAlias('tags', 'layouts/tags.njk')

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  // eleventyConfig.setFrontMatterParsingOptions({
  //   excerpt: true,
  //   // Optional, default is '---'
  //   excerpt_separator: '<!-- excerpt -->'
  // })

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
