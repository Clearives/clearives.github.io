module.exports = {
    title: 'Clearives',
    description: '前端博客clearives.cc是基于vuepress搭建的前端技术分享博客，有js、node、react、vue等前端技术分享',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', { name: 'keywords', content: '前端开发，前端技术，html，js，JavaScript，node，react，vue，前端博客，clearives，vuepress' }],
    ],
    markdown: {
        anchor: {
            permalink: true
        },
        externalLinks: {
            target: ''
        },
        toc: {
            includeLevel: [1, 2, 3]
        },
        lineNumbers: true
    },
    themeConfig: {
        // repo: 'clearives/blog',
        nav: require('./config/nav'),
        sidebar: require('./config/sidebar'),
        lastUpdated: '更新于',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: false,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins: [
        require('./plugins/blog-router'),
        '@vuepress/back-to-top',
        [
            'vuepress-plugin-comment',
            require('./plugins/blog-comment'),
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-142861946-1'
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现有新东西呦",
                    buttonText: "刷新"
                }
            }
        ],
    ]
}