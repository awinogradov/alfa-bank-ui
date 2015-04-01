modules.define('collapse', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    var _this = this;
                    this.bindTo('link', 'click', function() {
                        _this.toggleMod('expanded');
                    });

                    this.elem('content').css('height', 'auto');
                    this._height = this.elem('content').outerHeight(true);
                    this.elem('content').height(this.getMod('expanded') ? this._height : 0);
                }
            },
            'expanded' : {
                'true' : function() {
                    this.__base.apply(this, arguments);
                    this.elem('link').text(this.params.expandedLabel);
                    this.elem('content').height(this._height);
                },
                '' : function() {
                    this.__base.apply(this, arguments);
                    this.elem('link').text(this.params.collapsedLabel);
                    this.elem('content').height(0);
                }
            }
        }

    }));
});
