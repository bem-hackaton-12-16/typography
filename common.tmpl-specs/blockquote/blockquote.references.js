module.exports = {
    "default": {
        "bemjson": {
            "tag": "html",
            "content": {
                "tag": "body",
                "content": [
                    {
                        "tag": "link",
                        "attrs": {
                            "type": "text/css",
                            "rel": "stylesheet",
                            "href": "index.css"
                        }
                    },
                    [
                        {
                            "block": "blockquote",
                            "content": "Hello world"
                        },
                        {
                            "block": "blockquote",
                            "content": "Hello world with footer",
                            "source": "by BEM"
                        }
                    ]
                ]
            }
        },
        "name": "default",
        "dir": "/Users/anyatyu/projects/typography/common.blocks/blockquote/blockquote.tmpl-specs",
        "html": "<html><body><link type=\"text/css\" rel=\"stylesheet\" href=\"index.css\"><blockquote class=\"blockquote\"><p class=\"blockquote__content\">Hello world</p></blockquote><blockquote class=\"blockquote\"><p class=\"blockquote__content\">Hello world with footer</p><footer class=\"blockquote__footer\">by BEM</footer></blockquote></body></html>\n"
    }
};