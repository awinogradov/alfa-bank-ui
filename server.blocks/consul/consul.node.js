modules.define('consul', function(provide) {
    var path = require('path');
    provide(require(path.join(process.cwd(), 'libs', 'morgan', 'lib', 'consul')));
});
