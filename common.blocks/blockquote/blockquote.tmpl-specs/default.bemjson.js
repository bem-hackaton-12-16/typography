module.exports = {
    tag: 'html',
    content: {
        tag: 'body',
        content: [
            {
                tag: 'link',
                attrs: {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href:'index.css'
                }
            },
            [
                { block: 'blockquote', content: 'Hello world' },
                { block: 'blockquote', content: 'Hello world with footer', source: 'by BEM' },
            ]
        ]
    }
};
