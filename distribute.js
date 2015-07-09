var exec = require('child_process').exec,
    postcss = require('postcss'),
    fs = require('fs'),
    path = require('path'),
    plugins = require('./.enb/postcss-plugins');

var levels = [
    'common.blocks',
    'desktop.blocks',
    'touch.blocks',
    'touch-phone.blocks'
];

levels.forEach(function(level) {

    exec('find ' + level + ' -iname \'*.post.css\'', function(err, stdout, stdin) {

        var cssFiles = stdout.split('\n');

        cssFiles.pop();

        cssFiles.forEach(function(file) {
            var relativePath = path.join('./', file);

            postcss(plugins)
            .process(fs.readFileSync(relativePath))
            .then(function(result) {

                var distPath = relativePath.replace('.post.css', '.css');

                fs.writeFileSync(distPath, result.css);
            });

        });
    });

});
