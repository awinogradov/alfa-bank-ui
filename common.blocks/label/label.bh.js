module.exports = function(bh) {

    bh.match('label', function(ctx) {
        ctx.tag('label');
    });

};
