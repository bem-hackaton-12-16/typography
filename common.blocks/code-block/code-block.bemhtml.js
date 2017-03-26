block('code-block')(
    tag()('pre'),

    elem('inner').tag()('code'),

    content()(function() {
        return {
            elem: 'inner',
            content: this.ctx.content
        };
    })
);
