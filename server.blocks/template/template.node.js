var path = require('path'),
    vm = require('vm'),
    vow = require('vow'),
    fs = require('fs'),
    _ = require('lodash');

modules.define('template', function(provide) {

    var bemhtml, bemtree;

    provide({
        setBEMHTML: function(path) {
            bemhtml = require(path).BEMHTML;
        },
        setBEMTREE: function(path) {
            var context = vm.createContext({ console: console, Vow: vow, _: _ });
            bemtree = vm.runInNewContext('(function(data){' + fs.readFileSync(path) +
                '; return this.BEMTREE})', context);
        },
        BEMHTML: function() {
            return bemhtml;
        },
        BEMTREE: function(data) {
            return vow.invoke(bemtree, data);
        }
    });

});
