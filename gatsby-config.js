const basePath = '/ProjectDASH'

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title: `Edition numérique: « Portraits contemporains » de la Comtesse Dash`,
    description: `Edition numérique collaborative des « Portraits contemporains » de la Comtesse Dash.`,
    author: `FREN659 'Littérature et Presse au XIXème siècle' at the University of Maryland`
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/tei`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/pages`,
        name: `html`,
      },
    },
  ],
}
