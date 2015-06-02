var path = require('path'),
    vm = require('vm'),
    vow = require('vow'),
    vfs = require('vow-fs'),
    _ = require('lodash');

modules.define('template', function(provide) {

    var bemhtmlPath, bemtreePath;

    provide({
        setBEMHTML: function(path) {
            bemhtmlPath = path;
        },
        setBEMTREE: function(path) {
            bemtreePath = path;
        },
        BEMHTML: function() {
            return require(bemhtmlPath).BEMHTML;
        },
        BEMTREE: function(data) {
            var context = vm.createContext({
                console: console,
                Vow: vow,
                data: data,
                _: _
            });

            return vfs.read(bemtreePath).then(function(BEMTREE) {
                vm.runInNewContext(BEMTREE, context);
                return context.BEMTREE;
            });
        }
    });

});
