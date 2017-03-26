block('code').mod('inline', 'yes')(
    tag()('code'),

    content()(function() {
        return this.ctx.content;
    })
);
