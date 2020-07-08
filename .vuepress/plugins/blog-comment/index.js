module.exports = {
  choosen: 'gitalk',
  options: {
    clientID: '6f9f50fcf91b2dfc90a8',
    clientSecret: process.env.clientSecret || '984d421c143963edb885064a9cc4b0ec2ab7ec55',
    repo: 'blog',
    owner: 'Clearives',
    admin: ['Clearives'],
    id: '<%- frontmatter.commentid || frontmatter.permalink %>', // Ensure uniqueness and length less than 50
    distractionFreeMode: false, // Facebook-like distraction free mode
    labels: ['Gitalk', 'Comment'],
    title: '「Comment」<%- frontmatter.title %>',
    body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
  }
}