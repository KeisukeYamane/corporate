const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "コーポレートサイト",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "draft/*": [
            "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
        resolve: 'gatsby-source-microcms',
        options: {
          apiKey: process.env.MICROCMS_API_KEY,
          serviceId: process.env.MICROCMS_SERVICE_ID,
          apis: [
            {
              endpoint: 'information'
            },
            {
              endpoint: 'categories'
            },
            {
              endpoint: 'authers'
            },
          ],
        },
      }
  ],
};
