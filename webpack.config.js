const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');

const getEnvConfig = () => {
  const path = require('path');
  const { config } = require('dotenv');
  const envFilePath = path.resolve(__dirname, '.env');
  const Config = config({ path: envFilePath }).parsed;

  return JSON.stringify(Config);
}

let plugins = [
  new webpack.DefinePlugin({
    '__REACT_WEB_CONFIG__': getEnvConfig()
  })
];

if (process.env.NODE_ENV == "production") {
  plugins = [
    ...plugins,
    ReactWebConfig(envFilePath),
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      "process.env.NODE_ENV": "'production'"
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ];
} else {
  plugins = [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

module.exports = {
  entry: {
    main: ['babel-polyfill','./index.web.js',]
  },
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "web/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react-native", "env"]
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "url-loader",
        options: {
          limit: 8192
        }
      }
    ],
  },
  plugins,
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-config': 'react-web-config',
    },
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
