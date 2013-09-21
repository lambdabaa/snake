suite('unit tests', function() {
  var client = marionette.client();

  setup(function() {
    client.goUrl('http://localhost:8000');  // Go to mocha url.
  });

  test('should all pass', function() {
    // TODO(gaye)
  });
});
