import markdownit from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTOC from 'markdown-it-table-of-contents'
import slugify from '../filters/slugify.js'

// based on accessible anchor links by Nicolas Hoizey
// https://nicolas-hoizey.com/articles/2021/02/25/accessible-anchor-links-with-markdown-it-and-eleventy/
const markdownItAnchorOptions = {
  permalink: true,
  permalinkClass: 'app-header-anchor',
  permalinkSymbol: '#',
  level: [2, 3, 4],
  slugify,
  renderPermalink: (slug, opts, state, idx) => {
    const linkContent = state.tokens[idx + 1].children[0].content

    // Create the opening <div> for the wrapper
    const headingWrapperTokenOpen = Object.assign(
      new state.Token('div_open', 'div', 1),
      {
        attrs: [['class', 'app-heading-wrapper']]
      }
    )

    // Create the closing </div> for the wrapper
    const headingWrapperTokenClose = Object.assign(
      new state.Token('div_close', 'div', -1),
      {
        attrs: [['class', 'app-heading-wrapper']]
      }
    )

    // Create the tokens for the full accessible anchor link
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
    state.tokens.splice(idx + 3, 0, ...anchorTokens)

    // insert the wrapper closing after all these
    state.tokens.splice(idx + 3 + anchorTokens.length, 0, headingWrapperTokenClose)
  }
}

export default () => {
  const opts = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }

  const parser = markdownit(opts)

  parser
    .use(markdownItAbbr)
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(markdownItDeflist)
    .use(markdownItFootnote)
    .use(markdownItIns)
    .use(markdownItMark)
    .use(markdownItSub)
    .use(markdownItSup)
    .use(markdownItTOC, {
      containerHeaderHtml: '<h2 class="govuk-heading-s" id="contents">Contents</h2>',
      includeLevel: [2, 3]
    })

  parser.linkify.set({ fuzzyLink: false })

  return parser
}
