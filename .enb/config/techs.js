module.exports = {
    files: {
        provide: require('enb/techs/file-provider'),
        merge: require('enb/techs/file-merge'),
        copy: require('enb/techs/file-copy')
    },
    bem: require('enb-bem-techs'),
    js: require('enb-js/techs/browser-js'),
    ym: require('enb-modules/techs/prepend-modules'),
    postcss: {
        engine: require('enb-postcss/techs/enb-postcss'),
        plugins: [
            require('postcss-import'),
            require('postcss-url'),
            require('postcss-for'),
            require('postcss-each'),
            require('postcss-cssnext'),
            require('postcss-nested'),
            require('autoprefixer')({
                browsers: [
                    'last 2 versions',
                    'ie 10',
                    'ff 24',
                    'android 4',
                    'ios >= 5'
                ]
            }),
            require('postcss-browser-reporter'),
            require('postcss-reporter')
        ]
    },
    templates: {
        bemhtml: require('enb-bemxjst/techs/bemhtml')
    },
    html: {
        bemhtml: require('enb-bemxjst/techs/bemjson-to-html')
    },
    borschik: require('enb-borschik/techs/borschik')
};
