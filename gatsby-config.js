const path = require('path')
module.exports = options => ({
  siteMetadata: {
    title: 'Kickstart Gatsby static site development with Plone',
    subTitle: 'Plone + Gatsby = \u2764',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-plone',
      options: {
        baseUrl: options.baseUrl ? options.baseUrl : 'https://plonedemo.kitconcept.com/en',
        token: options.token ? options.token : '',
        logLevel: 'DEBUG',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Starter Plone',
        short_name: 'Plone',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007eb6',
        display: 'standalone',
        icon: require.resolve('./src/images/icon.png'),
    },
  },
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: path.join(__dirname, 'src', 'pages')
    }
  },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
});
