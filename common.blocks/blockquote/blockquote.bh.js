module.exports = function(bh) {
    bh.match('blockquote', function(ctx, json) {
        ctx.tag('blockquote');

        ctx.content([
            {
                elem: 'content',
                content: ctx.content()
            },
            json.source && {
                elem: 'footer',
                content: json.source
            }
        ], true);
    });

    bh.match('blockquote__content', function(ctx) {
        ctx.tag('p');
    });

    bh.match('blockquote__footer', function(ctx) {
        ctx.tag('footer');
    });
};
