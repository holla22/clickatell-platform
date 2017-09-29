var Http = require("./api/http");
var Rest = require('./api/rest');

module.exports = {
    http: function (content, to, apiKey) {
        return new Http(content, to, apiKey);
    },
    rest: function (content, to, apiKey) {
        return new Rest(content, to, apiKey);
    }
}