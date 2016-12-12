var assert = require('assert'),
    path = require('path'),
    vow = require('./../../node_modules/enb-bem-tmpl-specs/node_modules/vow/lib/vow.js'),

    clearRequire = require('./../../node_modules/clear-require/index.js'),
    HtmlDiffer = require('./../../node_modules/html-differ/lib/index.js').HtmlDiffer,
    htmlDiffer = new HtmlDiffer({"preset":"bem"}),
    referencesJSON = JSON.stringify(require('./heading.references.js')),
    getReferences = function () {
        return JSON.parse(referencesJSON);
    };



describe('heading (common.tmpl-specs)', function() {
    
    describe('default', function() {

        

it('should be equal `default` by bemhtml', function () {
    var references = getReferences();
var engine = loadTemplate("./heading.bemhtml.js", "BEMHTML");

    var ref = references['default'],
        bemjson = ref.bemjson,
        expected = ref.html;

    

    

    

    return new vow.Promise(function(resolve, reject) {
        
            resolve(engine.apply(bemjson));
        
    }).then(function(actual) {
        
            return assertHtml(actual, expected);
        
    });

});


    });
    

}); // /describe heading (common.tmpl-specs)

function assertHtml(actual, expected) {
   if (htmlDiffer.isEqual(actual, expected)) {
        // Throw error if actual is empty
        assert.ok(actual);
    } else {
        assert.fail(actual, expected, null, '\n');
    }
}

function loadTemplate(file, exportName) {
    try {
        var res = reRequire(file);
        exportName && (res = res[exportName]);
        return res;
    } catch (e) {
        console.error(e.stack);
        return { apply: function() { return e.stack; } };
    }
}
function reRequire(file) {
    file = require.resolve(file);
    clearRequire(file);
    return require(file);
}
