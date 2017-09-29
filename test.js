var clickatell = require('./index.js');

///clickatell.rest("Hello testing message", ["27XXXXX-NUMBER"], "");
clickatell.http("Hello testing message", ["27XXXXX-NUMBER"], "APIKEY-HERE");
