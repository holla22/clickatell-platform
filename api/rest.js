const Request = require('request');

// Constructor
function Rest(content, to, apiKey) {
  // always initialize all instance properties
    this.content = content; // message you are sending
    this.to = to; // phone number
    this.apiKey = apiKey;

    this.sendMessage(this.content,this.to,this.apiKey);
}
// class methods
Rest.prototype.sendMessage = function(content, to, apiKey) {
    // set options array
    var options = { 
      method: 'POST',
      url:'https://platform.clickatell.com/messages', 
      headers:
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': apiKey
      },
      form: {'content': content, 'to': to.join(",")}
    }
    // send the request
    Request(options, function (error, response, body) {

    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    }); 
};
// export the class
module.exports = Rest;