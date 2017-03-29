gemini.suite('vaadin-form-layout', (rootSuite) => {

  var demos = [
    {name: 'index', snippetCount: 2}
  ];

  demos.forEach(function(demo) {

    gemini.suite(demo.name, (demoSuite) => {

      demoSuite.setUrl('/../../demo/' + demo.name + '.html')
        .before(function(actions, find) {
          actions.wait(5000);
        });

      for (let i = 1; i <= demo.snippetCount; i++) {
        gemini.suite(demo.name + '-' + i, (snippet) => {
          snippet.setCaptureElements('demo-snippet:nth-of-type(' + i + ') vaadin-form-layout')
            .capture('default');
        });
      }
    });

  });



});
