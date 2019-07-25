

module.exports = {
  pathPrefix: '/CULTURE_PORTAL',
  siteMetadata: {
    title: 'Gatsby',
    siteUrl: 'https://www.gatsbyjs.org',
    description: 'Blazing fast modern site generator for React',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/data/images`,
      },
    },
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
  ],
};
