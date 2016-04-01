modules.define('dropdown',
    ['link', 'button'],
    function(provide, Link, Button, Dropdown) {

provide(Dropdown.decl(
{ modName: 'mode' },
null,
{
    live: function() {
        ['link', 'button'].forEach(function(blockName) {
            this.liveInitOnBlockEvent(
                { modName: 'js', modVal: 'inited' },
                blockName
            );
        }, this);
        return this.__base.apply(this, arguments);
    }
}));

});
