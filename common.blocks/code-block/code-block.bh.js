module.exports = function(bh) {
    bh.match('code-block', function(ctx) {
        ctx.tag('pre');

        ctx.content({
            elem: 'inner',
            content: ctx.content()
        }, true);
    });

    bh.match('code-block__inner', function(ctx) {
        ctx.tag('code');
    });
};
