module.exports = {
    files: {
        provide: require('enb/techs/file-provider'),
        copy: require('enb/techs/file-copy'),
        merge: require('enb/techs/file-merge')
    },
    bem: require('enb-bem-techs'),
    css: require('enb/techs/css'),
    postcss: require('enb-postcss/techs/enb-postcss'),
    js: require('enb/techs/js'),
    ym: require('enb-modules/techs/prepend-modules'),
    engines: {
        bemhtml: require('enb-bemxjst/techs/bemhtml')
    },
    html: {
        bemhtml: require('enb-bemxjst/techs/bemjson-to-html'),
    },
    borschik: require('enb-borschik/techs/borschik')
};
