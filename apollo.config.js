module.exports = {
    client: {
      service: {
        name: 'spacex-app',
        // URL to the GraphQL API
        url: 'https://api.spacex.land/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
        'src/*.ts',
      ],
    },
  }