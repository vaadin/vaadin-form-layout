gemini.suite('vaadin-form-layout', (rootSuite) => {

  var demos = [
    {name: 'index', snippets: [
      'basic',
      'single-column',
      'columns',
      'colspan',
      'br',
      'column-gap',
      'paper-input'
    ]}
  ];

  demos.forEach(function(demo) {

    gemini.suite(demo.name, (demoSuite) => {

      demo.snippets.forEach((snippet, snippetIndex) => {
        gemini.suite(snippet, (snippetSuite) => {
          snippetSuite
            .setUrl('/../../demo/' + demo.name + '.html')
            .setCaptureElements('demo-snippet:nth-of-type(' + (snippetIndex + 1) + ') vaadin-form-layout')
            .capture('default', {}, (actions, find) => {
              actions
                .waitForJSCondition(function(window) {
                  var elementName = 'vaadin-form-layout';
                  return window.document.createElement(elementName).constructor.is === elementName;
                }, 60000)
                .executeJS(function(window) {
                  window.document.activeElement.blur();
                });
            });
        });
      });

    });

  });

});
