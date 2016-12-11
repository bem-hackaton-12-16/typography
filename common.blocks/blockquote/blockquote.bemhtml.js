block('blockquote')(
    tag()('blockquote'),

    content()(function() {
        return [
            {
                elem: 'content',
                content: this.ctx.content
            },
            this.ctx.source && {
                elem: 'footer',
                content: this.ctx.source
            }
        ];
    }),

    elem('content').tag()('p'),

    elem('footer').tag()('footer')
);
