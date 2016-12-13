block('code')(
    tag()('pre'),

    elem('content').tag()('code'),

    content()(function() {
        return {
            elem: 'content',
            content: this.ctx.content
        };
    })
);
