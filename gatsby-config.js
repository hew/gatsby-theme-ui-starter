const path = require("path")
const config = require("./data/config")

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./static/favicon/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          Components: path.resolve(__dirname, "src/components"),
          Common: path.resolve(__dirname, "src/components/common"),
          Static: path.resolve(__dirname, "static/"),
          Theme: path.resolve(__dirname, "src/gatsby-plugin-theme-ui"),
          Data: path.resolve(__dirname, "data/config"),
        },
      },
    },
  ],
}
