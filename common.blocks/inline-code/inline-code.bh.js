module.exports = function(bh) {
    bh.match('inline-code', function(ctx) {
        ctx.tag('code');
    });
};
