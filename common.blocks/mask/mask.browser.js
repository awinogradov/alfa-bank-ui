modules.define('mask', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        setVal : function(newVal) {
            this._val = newVal.replace(/\*/g, '●');
            this.domElem.html(this._val);
        },

        getVal : function() {
            return this._val;
        }

    }));
});
