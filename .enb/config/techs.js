module.exports = {
    files: {
        provide: require('enb/techs/file-provider'),
        copy: require('enb/techs/file-copy'),
        merge: require('enb/techs/file-merge')
    },
    bem: require('enb-bem-techs'),
    postcss: require('enb-postcss/techs/enb-postcss'),
    js: require('enb-js/techs/browser-js'),
    ym: require('enb-modules/techs/prepend-modules'),
    engines: {
        bemhtml: require('enb-bemxjst/techs/bemhtml')
    },
    html: {
        bemhtml: require('enb-bemxjst/techs/bemjson-to-html'),
    },
    borschik: require('enb-borschik/techs/borschik')
};
