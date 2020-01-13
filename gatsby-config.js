module.exports = {
  siteMetadata: {
    siteTitle: 'gatsby-starter-mdx-typescript',
    siteUrl: '',
    description: 'A modern gatsby starter with great static analysis',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },

          {
            resolve: 'gatsby-remark-smartypants',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      // TODO: Customize this to fit your own site
      options: {
        name: 'Gatsby Starter Blog',
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f2055c',
        /* eslint-enable @typescript-eslint/camelcase */
        display: 'minimal-ui',
        icon: '',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
};

// module.exports = {
//   plugins: [
//     'gatsby-plugin-emotion',
//     'gatsby-plugin-typescript',
//     // {
//     //   resolve: 'gatsby-source-filesystem',
//     //   options: {
//     //     path: `${__dirname}/content/blog`,
//     //     name: 'blog',
//     //   },
//     // },
//     {
//       resolve: 'gatsby-plugin-mdx',
//       options: {
//         extensions: ['.mdx', '.md'],
//         // a workaround to solve mdx-remark plugin compat issue
//         // https://github.com/gatsbyjs/gatsby/issues/15486
//         plugins: ['gatsby-remark-images'],
//         gatsbyRemarkPlugins: [
//           {
//             resolve: 'gatsby-remark-images',
//             options: {
//               maxWidth: 590,
//             },
//           },
//           {
//             resolve: 'gatsby-remark-responsive-iframe',
//             options: {
//               wrapperStyle: 'margin-bottom: 1.0725rem',
//             },
//           },
//           {
//             resolve: 'gatsby-remark-copy-linked-files',
//           },

//           {
//             resolve: 'gatsby-remark-smartypants',
//           },
//         ],
//       },
//     },
//     'gatsby-transformer-sharp',
//     'gatsby-plugin-sharp',
//     // {
//     //   resolve: 'gatsby-plugin-google-analytics',
//     //   options: {
//     //     // trackingId: 'ADD YOUR TRACKING ID HERE',
//     //   },
//     // },
//     {
//       resolve: 'gatsby-plugin-manifest',
//       // TODO: Customize this to fit your own site
//       options: {
//         name: 'Gatsby Starter Blog',
//         /* eslint-disable @typescript-eslint/camelcase */
//         short_name: 'GatsbyJS',
//         start_url: '/',
//         background_color: '#ffffff',
//         theme_color: '#f2055c',
//         /* eslint-enable @typescript-eslint/camelcase */
//         display: 'minimal-ui',
//         icon: '',
//       },
//     },
//     'gatsby-plugin-offline',
//     'gatsby-plugin-react-helmet',
//     {
//       resolve: 'gatsby-plugin-typography',
//       options: {
//         pathToConfigModule: './src/utils/typography',
//       },
//     },
//   ],
// };
