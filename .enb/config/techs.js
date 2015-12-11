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
            require('postcss-mixins'),
            require('postcss-for'),
            require('postcss-each'),
            require('postcss-simple-vars')({
                variables: {
                    gridMaxWidth: '1000px',
                    gridGutter: '10px',
                    gridFlex: 'flex'
                }
            }),
            require('lost'),
            require('cssnext')(),
            require('postcss-custom-properties'),
            require('postcss-nested'),
            require('autoprefixer')({
                browsers: [
                    'last 2 versions',
                    'ie 10',
                    'ff 24',
                    'android 4',
                    'ios >= 5'
                ]
            })
        ]
    },
    templates: {
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemtree: require('enb-bemxjst/techs/bemtree')
    },
    html: {
        bemhtml: require('enb-bemxjst/techs/bemjson-to-html')
    },
    borschik: require('enb-borschik/techs/borschik')
};
