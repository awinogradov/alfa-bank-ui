modules.define('notification', ['i-bem__dom', 'BEMHTML', 'plate'], function(provide, BEMDOM, BEMHTML) {

    provide(BEMDOM.decl(this.name, {

        onSetMod: {
            'js': {
                'inited': function() {
                    BEMDOM.scope.append(this.domElem);

                    this.bindTo('mouseenter', function() {
                        this._stopEvade();
                    });

                    this.bindTo('mouseleave', function() {
                        this._startEvade();
                    });

                    var _this = this;

                    // override to don't hide plate
                    this.findBlockInside('plate')._onClick = function() {
                        _this._evade();
                    };

                }
            },

            'visible': {
                'true': function() {
                    this._startEvade();
                }
            }
        },

        _stopEvade: function() {
            clearTimeout(this._outTimeOut);
        },

        _startEvade: function() {
            this._stopEvade();
            this._outTimeOut = setTimeout(this._setVisible.bind(this, false), 5000);
        },

        _evade: function() {
            this._stopEvade();
            this.delMod('visible');
        },

        push: function(status, message) {
            // update icon
            this.findBlockInside('icon').setMod('action', status);
            // update background-color
            this.findBlockInside('notification__status').setMod('type', status);
            // update message
            this.elem('inner').html(message);
            if (this.getMod('visible')){
                this._evade();
                setTimeout(this._setVisible.bind(this, true), 200);
            } else {
                this.setMod('visible', true);
            }
        },

        _setVisible: function(visible) {
            if (visible) {
                this.setMod('visible', true);
            } else {
                this.delMod('visible');
            }
        }

    }));
});
