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
                {
                    block: 'list',
                    content: [
                        { elem: 'item', content: 'Milk' },
                        { elem: 'item', content: 'Coffee' },
                        { elem: 'item', content: 'Apple' }
                    ]
                }
            ]
        ]
    }
};
