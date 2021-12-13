const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 25
    return {
        lang: 'en-AU',
        title: 'Craig Taylor',
        base:'/',
        description: 'blog, technology, business',
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://www.craigtaylor.me/', //copyright link
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Blog', link: '/blog/' },
                { text: 'Archives', link: '/blog/archives' },
                { text: 'Tags', link: '/blog/tags' },
                { text: 'About', link: '/about' }
                // { text: 'Airene', link: 'http://airene.net' }  -- External link test
            ]
        },
        srcExclude: ['README.md'] // exclude the README.md , needn't to compiler
        /*
        vite: {
            build: { minify: false }
        },
        optimizeDeps: {
            keepNames: true
        }
        */
    }
}

module.exports = config()