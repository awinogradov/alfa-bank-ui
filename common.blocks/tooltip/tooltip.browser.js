modules.define('tooltip',
    ['i-bem__dom', 'jquery', 'control'],
    function(provide, BEMDOM, $, Control) {

        provide(BEMDOM.decl({ block: this.name, baseBlock : Control }, {

            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._icon = this.elem('icon');
                        this._popup = this.findBlockInside('popup');
                        this._popup.setAnchor(this._icon);
                    }
                },
                'hovered' : {
                    'true' : function() {
                        this.__base.apply(this, arguments);
                        this._popup.setMod('visible');
                    },
                    '' : function() {
                        this.__base.apply(this, arguments);
                        this._popup.delMod('visible');
                    }
                }
            }

        }));

    });
