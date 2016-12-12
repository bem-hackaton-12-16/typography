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
                            "block": "list",
                            "content": [
                                {
                                    "elem": "item",
                                    "content": "Milk"
                                },
                                {
                                    "elem": "item",
                                    "content": "Coffee"
                                },
                                {
                                    "elem": "item",
                                    "content": "Apple"
                                }
                            ]
                        }
                    ]
                ]
            }
        },
        "name": "default",
        "dir": "/Users/anyatyu/projects/typography/common.blocks/list/list.tmpl-specs",
        "html": "<html><body><link type=\"text/css\" rel=\"stylesheet\" href=\"index.css\"><ul class=\"list\"><li class=\"list__item\">Milk</li><li class=\"list__item\">Coffee</li><li class=\"list__item\">Apple</li></ul></body></html>\n"
    }
};