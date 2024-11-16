const cheerio = require('cheerio')

const cleanToc = (items) => {
  items.forEach(item => {
    if (item.items && item.items.length === 0) {
      delete item.items
    } else if (item.items) {
      cleanToc(item.items)
    }
  })
}

module.exports = (content, headingLevels = ['h2', 'h3']) => {
  // Load the HTML content using cheerio
  const $ = cheerio.load(content)

  // Object to store table of contents items with hierarchy
  const toc = []
  const levelStack = [{ items: toc }]

  // Iterate over the specified heading levels
  $(headingLevels.join(',')).each((index, element) => {
    const text = $(element).text().replace(/#Permalink.*/, '').trim()
    const id = $(element).attr('id')
    const tagName = $(element).get(0).tagName

    if (id) {
      const currentLevel = headingLevels.indexOf(tagName)

      // Create the toc item
      const tocItem = {
        text,
        href: `#${id}`
      }

      // Find the appropriate parent level
      while (levelStack.length > 1 && levelStack[levelStack.length - 1].level >= currentLevel) {
        levelStack.pop()
      }

      const parentItems = levelStack[levelStack.length - 1].items
      parentItems.push(tocItem)

      // Only add items array if there are sub-items
      tocItem.items = []
      levelStack.push({ level: currentLevel, items: tocItem.items })
    }
  })

  // Remove empty items arrays
  cleanToc(toc)

  return toc
}
