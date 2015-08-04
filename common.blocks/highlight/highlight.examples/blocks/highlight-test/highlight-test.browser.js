modules.define(
'highlight-test',
['i-bem__dom', 'jquery__highlight'],
function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                var texts = $('.paragraph');

                this.findBlockOn('clean', 'button')
                    .bindTo('click', function() {
                        texts.unhighlight();
                    });

                this.findBlockOn('find', 'button')
                    .bindTo('click', function() {
                        texts.highlight('депозита');
                    });
            }
        }
    }
}));

});
