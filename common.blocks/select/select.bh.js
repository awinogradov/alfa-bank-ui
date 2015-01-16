module.exports = function(bh) {

    bh.match('select', function(ctx, json) {
        ctx.content([
            {
                block : 'popup',
                mods : { target : 'anchor', theme : ctx.mod('theme'), bkg : ctx.mod('bkg'), autoclosable : true },
                directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
                content : { block : json.block, mods : ctx.mods(), elem : 'menu' }
            }
        ]);
    });

};
