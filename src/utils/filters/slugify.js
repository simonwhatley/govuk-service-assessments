/**
 * Make string URL friendly
 *
 * @param {String} text value to make into a slug
 * @return {String} URL friendly string
 *
 */
module.exports = (text) => {
  if (!text.length) {
    return null
  }

  return text.trim()
    .toLowerCase()
    // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[^\w\s-]/g, '')
    // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/[\s_-]+/g, '-')
    // remove leading, trailing -
    .replace(/^-+|-+$/g, '')
}
