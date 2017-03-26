module.exports = function(bh) {
    bh.match('heading', function(ctx, data) {
        ctx.tag('h' + (data.mods.level || 1));
    });
};
