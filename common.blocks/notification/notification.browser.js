modules.define('notification', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        onSetMod: {
            'js': {
                'inited': function() {
                    BEMDOM.scope.append(this.domElem);

                    this._popup = this.findBlockOn('popup');
                    this._statusIcon = this.findBlockOn('icon', 'icon');

                    this._popup.setPosition(
                        BEMDOM.win.outerWidth(true) - 25,
                        this.domElem.height() + 145
                    );

                    this
                        .bindTo('mouseenter', this._stopEvade)
                        .bindTo('mouseleave', this._startEvade)
                        .bindTo('close', 'click', function() {
                            this.delMod('visible');
                        });
                }
            },

            'visible': {
                'true': function(key) {
                    this._startEvade();
                    this._popup.setMod(key);
                },
                '': function(key) {
                    this._stopEvade();
                    this._popup.delMod(key);
                }
            },
            'theme': {
                '*': function(key, val) {
                    [
                        this._popup,
                        this.findBlockOn('close', 'icon')
                    ].forEach(function(block) {
                        block.setMod(key, val);
                    });
                }
            },
            'status': {
                '*': function(key, val) {
                    this._statusIcon.setMod('action', val);
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

        push: function(status, message) {
            this.setMod('status', status);
            // update message
            this.elem('message').html(message);
            if (this.getMod('visible')){
                this.delMod('visible');
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
