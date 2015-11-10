modules.define('select',
['BEMHTML', 'i-bem__dom'],
function(provide, BEMHTML, BEMDOM, Select) {

provide(Select.decl({
    setOptions: function(options) {
        var mods = this.getMods();
        var optionToMenuItem = function(option) {
            var res = {
                    block: 'menu-item',
                    mods: { disabled: mods.disabled || option.disabled },
                    val: option.val,
                    js: { checkedText: option.checkedText },
                    content: option.text
                };

            if (option.icon) {
                res.js.text = option.text;
                res.content = [
                    option.icon,
                    res.content
                ];
            }

            return res;
        };

        this._menu.setContent(BEMHTML.apply(options.map(function(optionOrGroup) {
            return optionOrGroup.group ? {
                    block: 'menu',
                    elem: 'group',
                    title: optionOrGroup.title,
                    content: optionOrGroup.group.map(optionToMenuItem)
                } : optionToMenuItem(optionOrGroup);
        })));
    }

}));

});
