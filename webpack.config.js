const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

let plugins = [
  new MiniCssExtractPlugin({
    filename: '[name]' + (isProd ? '.min' : '') + '.css',
    allChunks: true,
  }),
];

module.exports = {
  entry: {
    'select2-bootstrap4': [
      './src/layout.scss',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
			{
            	loader: MiniCssExtractPlugin.loader,
			},
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  let plugins = [
                    require('precss'),  // bootstrap4 requires this
                    require('autoprefixer'),
                  ];
                  if (isProd) {
                    plugins = plugins.concat([
                      require('cssnano')({ preset: 'default' }),
                    ])
                  }

                  return plugins;
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                prependData: `
                  @import "~bootstrap/scss/functions";
                  @import "~bootstrap/scss/variables";
                  @import "~bootstrap/scss/mixins";
                `
              }
            },
		]
      },
    ],
  },
  plugins: plugins,
};
