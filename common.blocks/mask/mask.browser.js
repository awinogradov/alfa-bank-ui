modules.define('mask', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        setVal : function(newVal) {
            var num = newVal.split(/\*+/);
            if(num[0]){
                num[0] = num[0].trim().substring(0, 4);
            }
            if(num[1]){
                num[1] = num[1].trim().substring(0, 4);
            }
            this._val = num[0] + ' ●●●● ' + num[1];
            this.domElem.html(this._val);
        },

        getVal : function() {
            return this._val;
        }

    }));
});
