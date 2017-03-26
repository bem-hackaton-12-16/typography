module.exports = function(bh) {
    bh.match('paragraph', function(ctx) {
        ctx.tag('p');
    });
};
