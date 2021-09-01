// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config();

module.exports = {
  siteName: 'Baby Wishlist',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // required
        base: process.env.AIRTABLE_BASE, // required
        tables: [
          {
            name: 'Items', // required
            typeName: 'Item', // required
            select: {}, // optional,
          }
        ],
        tableName: 'YOUR_TABLE_NAME', // required
      },
    },
  ]
}
