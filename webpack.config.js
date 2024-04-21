const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    static: {
      directory: './dist',
    },
  },
};
