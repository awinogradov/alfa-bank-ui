modules.define('notification', ['i-bem__dom', 'BEMHTML'], function(provide, BEMDOM, BEMHTML) {

    provide(BEMDOM.decl(this.name, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    BEMDOM.scope.append(this.domElem);

                    this.bindTo('mouseenter', function(){
                        this._stopEvade();
                    });

                    this.bindTo('mouseleave', function(){
                        this._startEvade();
                    });

                    this.bindTo('click', function(){
                        this._evade();
                    });
                }
            },

            'visible' : {
                'true' : function() {
                    this._startEvade();
                }
            }
        },

        _stopEvade : function() {
            clearTimeout(this._outTimeOut);
        },

        _startEvade : function() {
            var _this = this;
            this._outTimeOut = setTimeout(function() {
                _this.delMod('visible');
            }, 2000);
        },

        _evade : function() {
            this.delMod('visible');
        },

        push : function(status, message) {
            console.log('push notification');
            //update icon
            this.findBlockInside('icon').setMod('action', status);
            //update background-color
            this.findBlockInside('notification__status').setMod('type', status);
            //update message
            this.elem('inner').html(message);
            this.setMod('visible', true);
        }

    }));
});
