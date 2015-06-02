modules.define('log',
    ['jquery'],
    function(provide, $) {

provide({
    /**
     * Send log object to the middle
     *
     * @param {Object} log
     * @returns xhr
     * @private
     */
    _write: function(log) {
        return $.ajax({
            type: 'post',
            url: '/system/log',
            data: log
        });
    },
    verbose: function(message, meta) {
        return this._write({ level: 'verbose', message: message, meta: meta });
    },
    info: function(message, meta) {
        return this._write({ level: 'info', message: message, meta: meta });
    },
    debug: function(message, meta) {
        return this._write({ level: 'debug', message: message, meta: meta });
    },
    warning: function(message, meta) {
        return this._write({ level: 'warning', message: message, meta: meta });
    },
    error: function(message, meta) {
        return this._write({ level: 'error', message: message, meta: meta });
    }
});

});
