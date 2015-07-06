module.exports = [
    require('postcss-each'),
    require('postcss-custom-properties'),
    require('postcss-nested'),
    require('postcss-url')({
        url: 'rebase'
    }),
    require('autoprefixer-core')({
        browsers: [
            'last 2 versions',
            'ie 10',
            'ff 24',
            'android 4',
            'ios >= 5'
        ]
    })
];
