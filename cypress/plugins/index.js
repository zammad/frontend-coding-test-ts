// module.exports = (on, config) => {
//     if (config.testingType === 'component') {
//       const { startDevServer } = require('@cypress/webpack-dev-server')
  
//       // Vue's Webpack configuration
//       const webpackConfig = require('@vu')
  
//       on('dev-server:start', (options) =>
//         startDevServer({ options, webpackConfig })
//       )
//     }
//   }

const path = require('path')
const { startDevServer } = require('@cypress/vite-dev-server')

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '..', '..', 'vite.config.ts'),
      },
    })
  })

  return config
}