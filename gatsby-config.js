

module.exports = {
  pathPrefix: '/CULTURE_PORTAL',
  siteMetadata: {
    title: 'Gatsby',
    siteUrl: 'https://www.gatsbyjs.org',
    description: 'Blazing fast modern site generator for React',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-javascript-frontmatter',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/data/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18next',
      options: {
        availableLngs: ['en', 'ru', 'by'],
        fallbackLng: 'en',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locale`,
        name: 'locale',
      },
    },
    'gatsby-transformer-javascript-frontmatter',
  ],
};
