var path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
	// `gatsby-plugin-offline`,
	'gatsby-plugin-typescript',
	{
		resolve: `gatsby-plugin-prefetch-google-fonts`,
		options: {
			fonts: [
				{
					family: 'Overpass',
					variants: [`400`, `600`, `700`, `800`],
				},
				{
					family: 'Patua One',
					variants: [`400`],
				},
			],
		},
	},
	{
		resolve: `gatsby-plugin-styled-components`,
	},
	{
		resolve: `gatsby-plugin-alias-imports`,
		options: {
			alias: {
				"styled-components": path.resolve("node_modules", "styled-components"),
				"react": path.resolve("node_modules", "react"),
				"react-dom": path.resolve("node_modules", "react-dom")
			}
		}
	}
]
}
