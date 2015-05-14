var fs = require('fs'),
    util = require('util'),
    repository = 'http://git/projects/MAN/repos/' + require('./bower.json').name;

require('conventional-changelog')({
    repository: repository,
    commitLink: function(hash) {
        return util.format(
            '[%s](%s/commits/%s)',
            hash.substring(0, 7),
            repository,
            hash
        );
    },
    version: require('./bower.json').version
}, function(err, log) {
    fs.writeFileSync('CHANGELOG.md', log);
});
