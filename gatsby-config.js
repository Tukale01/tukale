module.exports = {
  siteMetadata: {
    title: `Ridwan Tukale`,
    description: `Rdiwan Tukale personal site and blog.`,
    author: `Ridwan Tukale`
  },
  plugins: [

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: " UA-174213892-1 ",
      },
    },
      
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ridwan Tukale website, portfolio, resume, blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ed64a6`,
        theme_color: `#4f14ff`,
        display: `minimal-ui`,
        icon: `src/assets/images/gat.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};
