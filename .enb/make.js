var levels = ['common.blocks'],
    enbBemTechs = require('enb-bem-techs'),
    techs = {
        fileProvider: require('enb/techs/file-provider'),
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html'),
        postcss : {
            core: require('enb-postcss/techs/enb-postcss'),
            plugins: [
                require('postcss-import')(),
                require('rebem-css'),
                require('postcss-css-variables')(),
                require('postcss-calc')()
            ]
        }
    };

module.exports = function(config) {
    config.includeConfig('enb-bem-tmpl-specs');

    var tmplSpecs = config.module('enb-bem-tmpl-specs')
        .createConfigurator('tmpl-specs', {
            coverage: {
                engines: ['bh'],
                reportDirectory: 'coverage',
                exclude: ['**/node_modules/**', '**/libs/**'],
                reporters: ['lcov']
            }
        });

    tmplSpecs.configure({
        destPath: 'common.tmpl-specs',
        levels: ['common.blocks'],
        sourceLevels: [
            {path: 'common.blocks', check: true}
        ],
        engines: {
            'bemhtml': {
                tech: 'enb-bemxjst/techs/bemhtml',
                options: {
                    exportName: 'BEMHTML'
                }
            }
        }
    });

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.levels, { levels: levels }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [techs.bemhtml],
            [techs.postcss.core, {
                target : '?.css',
                plugins: techs.postcss.plugins
            }],
            [techs.bemjsonToHtml, { target: '?.html',  bemjsonFile: '?.bemjson.js' }],
        ]);

        nodeConfig.addTargets(['?.css', '?.html']);
    });
};
