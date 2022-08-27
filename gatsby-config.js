// module.exports = {
//   siteMetadata: {
//     title: `My Gatsby Site`,
//     siteUrl: `https://www.yourdomain.tld`
//   },
//   plugins: [{
//     resolve: 'gatsby-plugin-google-analytics',
//     options: {
//       "trackingId": ""
//     }
//   }]
// };

module.exports = {
  siteMetadata: {
    title: `AcroTags`,
    description: "Demo site for Gatsby AcroTags Blog",
    author: `Kyle Pennell`,
  },
  plugins: [

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
        
    //   },
    // },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        
        theme: {
          palette: {
              primary: {
                  main: '#BA3D3B', // new color here 
              } 
          },
      },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
