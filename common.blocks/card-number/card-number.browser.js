modules.define('card-number', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        getVal : function() {
            return this._val;
        }

    }));
});
