module.exports = function(bh) {
    bh.match('ordered-list', function(ctx) {
        ctx.tag('ol');
    });

    bh.match('ordered-list__item', function(ctx) {
        ctx.tag('li');
    });
};
