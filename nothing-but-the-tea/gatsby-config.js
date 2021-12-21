module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Nothing But The Tea",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve:"gatsby-source-shopify",
      options:{
        apiKey:"88ad6096df236974145df28e25808b93",
        password:"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",
        storeUrl:"nothing-but-the-tea.myshopify.com",
        downloadImages: true,
      }
    }
  ],
};
