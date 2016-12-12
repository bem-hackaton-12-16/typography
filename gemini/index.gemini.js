gemini.suite('blockquote', (suite) => {
    suite.setUrl('common.bundles/index/index.html')
    .setCaptureElements('.blockquote')
    .capture('plain');
});
