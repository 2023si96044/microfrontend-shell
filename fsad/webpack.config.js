const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
	  {
        test: /\.css$/,  // Add this rule for CSS
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
	new ModuleFederationPlugin({
	  name: 'fsad',
	  filename: 'remoteEntry.js',
	  exposes: {
		'./FSADApp': './src/FSADApp',
	  },
	  shared: {
		react: {
			singleton: true,
			eager: true,
			requiredVersion: '^17.0.2',
		},
		'react-dom': {
			singleton: true,
			eager: true,
			requiredVersion: '^17.0.2',
		},
	  },
	}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
