module.exports = {
  pathPrefix: '/gatsby-i18n/gatsby-starter-i18next',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-javascript-frontmatter',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lingui',
        short_name: 'starter',
        start_url: '/gatsby-i18n/gatsby-starter-i18next/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-i18next`,
      options: {
        availableLngs: ['en', 'ru', 'by', 'de'],
        fallbackLng: 'en',
        debug: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ]
};
