module.exports = function(bh) {
    bh.match('input_type_hidden__control', function(ctx) {
        ctx.attr('type', 'hidden');
    });
};
