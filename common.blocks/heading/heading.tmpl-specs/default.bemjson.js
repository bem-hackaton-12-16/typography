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
                { block: 'heading', mods: { level: '1' }, content: 'Размер текста заголовка' },
                { block: 'heading', mods: { level: '2' }, content: 'Размер текста заголовка' },
                { block: 'heading', mods: { level: '3' }, content: 'Размер текста заголовка' },
                { block: 'heading', mods: { level: '4' }, content: 'Размер текста заголовка' },
                { block: 'heading', mods: { level: '5' }, content: 'Размер текста заголовка' },
                { block: 'heading', mods: { level: '6' }, content: 'Размер текста заголовка' }
            ]
        ]
    }
};
