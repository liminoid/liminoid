const remarkPlugins = [require('remark-slug'), require('liminoid-mdx')];

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: remarkPlugins,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
  ],
};
