import markdown from '../libraries/markdown.js'

/**
 * Convert Markdown string to HTML
 *
 * @param {String} string Markdown
 * @param {String} value If `inline`, renders HTML without paragraph tags
 * @return {String} HTML
 *
 */

export default (string, value) => {
  if (string) {
    if (value === 'inline') {
      return markdown.renderInline(string)
    }

    return markdown.render(string)
  }
}
