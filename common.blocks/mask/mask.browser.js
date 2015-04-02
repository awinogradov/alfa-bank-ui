modules.define('mask', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        setVal : function(newVal) {
            var num = newVal.split(/\*+/);
            this._val = num[0] + '●●●●' + num[1];
            this.domElem.html(this._val);
        },

        getVal : function() {
            return this._val;
        }

    }));
});
