const routePfx = '/page/'

module.exports = {
  extendPageData($page) {
    const { frontmatter } = $page

    if (
      !frontmatter 
      || JSON.stringify(frontmatter) === '{}'
      || !frontmatter.permalink 
      || frontmatter.single === true
    ) {
      return
    }
    frontmatter.commentid = frontmatter.permalink 
    if (frontmatter.classify) {
      frontmatter.permalink = `${frontmatter.permalink}`
    } else {
      frontmatter.permalink = `${routePfx}${frontmatter.permalink}`
    }
  }
}