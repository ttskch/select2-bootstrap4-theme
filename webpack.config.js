const path = require('path');

const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

let plugins = [
    new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
    }),
    new ExtractTextPlugin({
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => {
                                    return [
                                        require('precss'),  // bootstrap4 requires this
                                        require('autoprefixer')({ browsers: ['last 2 versions'] }),
                                    ];
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
        ],
    },
    plugins: plugins,
};
