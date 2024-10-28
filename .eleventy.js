const fs = require('fs')
const htmlmin = require('html-minifier')
const moment = require('moment')
const rss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = eleventyConfig => {
  // add support for RSS/atom
  eleventyConfig.addPlugin(rss)

  // add support for syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight)

  // Template libraries
  eleventyConfig.setLibrary('md', require('./src/utils/libraries/markdown'))

  // add some utility filters
  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '')
  })

  eleventyConfig.addFilter('date', (timestamp, format) => {
    return moment(timestamp).format(format)
  })

  eleventyConfig.addFilter('arrayToList', require('./src/utils/filters/array-to-list'))
  eleventyConfig.addFilter('excerpt', require('./src/utils/filters/excerpt'))
  eleventyConfig.addFilter('includes', require('./src/utils/filters/includes'))
  eleventyConfig.addFilter('markdown', require('./src/utils/filters/markdown'))
  eleventyConfig.addFilter('matches', require('./src/utils/filters/matches'))
  eleventyConfig.addFilter('readingTime', require('./src/utils/filters/reading-time'))
  eleventyConfig.addFilter('slugify', require('./src/utils/filters/slugify'))
  eleventyConfig.addFilter('squash', require('./src/utils/filters/squash'))
  eleventyConfig.addFilter('tenure', require('./src/utils/filters/tenure'))

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
      .getFilteredByTags('post', 'highlight')
      .reverse()
      .slice(0, 5)
  })

  eleventyConfig.addCollection('posts', (collection) => {
    return collection.getFilteredByTag('post')
  })

  eleventyConfig.addCollection('jobs', (collection) => {
    return collection
      .getFilteredByTag('job')
      .sort((a, b) => {
        // Place items without an end_date first
        if (!a.data.end_date) return 1
        if (!b.data.end_date) return -1
        // Sort by end_date, newest first
        return new Date(a.data.end_date) - new Date(b.data.end_date)
      })
  })

  // sort books alphabetically by title
  eleventyConfig.addCollection('books', (collection) => {
    return collection
      .getFilteredByTag('book')
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
  })

  // sort podcasts alphabetically by title
  eleventyConfig.addCollection('podcasts', (collection) => {
    return collection
      .getFilteredByTag('podcast')
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
  })

  // sort projects alphabetically by title
  eleventyConfig.addCollection('projects', (collection) => {
    return collection
      .getFilteredByTag('project')
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
  })

  // sort podcasts alphabetically by title
  eleventyConfig.addCollection('newsletters', (collection) => {
    return collection
      .getFilteredByTag('newsletter')
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
  })

  const filterTagList = (tags = []) => {
    return tags.filter(tag => ['all',
      'book',
      'books',
      'job',
      'jobs',
      'making',
      'made',
      'nav',
      'newsletter',
      'newsletters',
      'podcast',
      'podcasts',
      'post',
      'posts',
      'project',
      'projects',
      'testimonial',
      'testimonials'].indexOf(tag) === -1)
  }

  eleventyConfig.addCollection('tags', (collection) => {
    const tagSet = new Set()
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag))
    })
    const tags = filterTagList([...tagSet])
    return tags.sort((a, b) => a.localeCompare(b))
  })

  const tagList = [
    'business',
    'content',
    'design-methods',
    'design-patterns',
    'design-principles',
    'design-thinking',
    'innovation',
    'interaction-design',
    'leadership',
    'playbook',
    'product-management',
    'psychology',
    'research',
    'service-design',
    'strategy',
    'systems-thinking',
    'user-experience'
  ]

  // create a collection for each tag
  tagList.forEach((tag, i) => {
    eleventyConfig.addCollection(tag, (collection) => {
      return collection
        .getFilteredByTag(tag)
        .filter((post) => post.data.tags.includes('post'))
        .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    })
  })

  // add layout aliases to make templates more portable
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
  eleventyConfig.addLayoutAlias('posts', 'layouts/posts.njk')
  eleventyConfig.addLayoutAlias('book', 'layouts/book.njk')
  eleventyConfig.addLayoutAlias('books', 'layouts/books.njk')
  eleventyConfig.addLayoutAlias('job', 'layouts/job.njk')
  eleventyConfig.addLayoutAlias('jobs', 'layouts/jobs.njk')
  eleventyConfig.addLayoutAlias('testimonial', 'layouts/testimonial.njk')
  eleventyConfig.addLayoutAlias('testimonials', 'layouts/testimonials.njk')
  eleventyConfig.addLayoutAlias('podcast', 'layouts/podcast.njk')
  eleventyConfig.addLayoutAlias('podcasts', 'layouts/podcasts.njk')
  eleventyConfig.addLayoutAlias('project', 'layouts/project.njk')
  eleventyConfig.addLayoutAlias('projects', 'layouts/projects.njk')
  eleventyConfig.addLayoutAlias('newsletter', 'layouts/newsletter.njk')
  eleventyConfig.addLayoutAlias('newsletters', 'layouts/newsletters.njk')
  eleventyConfig.addLayoutAlias('tags', 'layouts/tags.njk')

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
