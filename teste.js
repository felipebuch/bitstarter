#!/usr/bin/env node
var sys = require('util'),
    rest = require('restler');

rest.get('http://nameless-ocean-7237.herokuapp.com/').on('complete', function(result) {
  if (result instanceof Error) {
    sys.puts('Error: ' + result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    sys.puts(result);
  }
});
