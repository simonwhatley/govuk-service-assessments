const markdownit = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const slugify = require('../filters/slugify')

// based on accessible anchor links by Nicolas Hoizey
// https://nicolas-hoizey.com/articles/2021/02/25/accessible-anchor-links-with-markdown-it-and-eleventy/
const markdownItAnchorOptions = {
  permalink: true,
  permalinkClass: 'header-anchor',
  permalinkSymbol: '#',
  level: [2, 3, 4],
  slugify,
  renderPermalink: (slug, opts, state, idx) => {
    const linkContent = state.tokens[idx + 1].children[0].content

    // Create the openning <div> for the wrapper
    const headingWrapperTokenOpen = Object.assign(
      new state.Token('div_open', 'div', 1),
      {
        attrs: [['class', 'heading-wrapper']]
      }
    )

    // Create the closing </div> for the wrapper
    const headingWrapperTokenClose = Object.assign(
      new state.Token('div_close', 'div', -1),
      {
        attrs: [['class', 'heading-wrapper']]
      }
    )

    // Create the tokens for the full accessible anchor link
    // <a class="header-anchor" href="#your-own-platform-is-the-nearest-you-can-get-help-to-setup">
    //   <span aria-hidden="true">
    //     ${opts.permalinkSymbol}
    //   </span>
    //   <span class="visually-hidden">
    //     Section titled Your "own" platform is the nearest you can (get help to) setup
    //   </span>
    // </a >

    const anchorTokens = [
      Object.assign(new state.Token('link_open', 'a', 1), {
        attrs: [
          ...(opts.permalinkClass ? [['class', opts.permalinkClass]] : []),
          ['href', opts.permalinkHref(slug, state)],
          ...Object.entries(opts.permalinkAttrs(slug, state))
        ]
      }),
      Object.assign(new state.Token('span_open', 'span', 1), {
        attrs: [['aria-hidden', 'true']]
      }),
      Object.assign(new state.Token('html_block', '', 0), {
        content: opts.permalinkSymbol
      }),
      Object.assign(new state.Token('span_close', 'span', -1), {}),
      Object.assign(new state.Token('span_open', 'span', 1), {
        attrs: [['class', 'govuk-visually-hidden']]
      }),
      Object.assign(new state.Token('html_block', '', 0), {
        content: `Permalink to section titled ${linkContent}`
      }),
      Object.assign(new state.Token('span_close', 'span', -1), {}),
      new state.Token('link_close', 'a', -1)
    ]

    // idx is the index of the heading's first token
    // insert the wrapper opening before the heading
    state.tokens.splice(idx, 0, headingWrapperTokenOpen)

    // insert the anchor link tokens after the wrapper opening and the 3 tokens of the heading
    // state.tokens.splice(idx + 3 + 1, 0, ...anchorTokens)
    state.tokens.splice(idx + 3, 0, ...anchorTokens)

    // insert the wrapper closing after all these
    state.tokens.splice(
      // idx + 3 + 1 + anchorTokens.length,
      idx + 3 + anchorTokens.length,
      0,
      headingWrapperTokenClose
    )
  }
}

module.exports = (() => {
  const opts = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }

  const parser = markdownit(opts)

  parser
    .use(require('markdown-it-abbr'))
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-emoji'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-table-of-contents'), {
      containerHeaderHtml: '<h2 class="heading-l" id="contents">Contents</h2>',
      includeLevel: [2, 3]
    })

  parser.linkify.set({ fuzzyLink: false })

  return parser
})()
