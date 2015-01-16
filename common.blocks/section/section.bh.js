module.exports = function(bh) {

    bh.match('section', function(ctx, json) {
        ctx.tag('section');
    });

};
