# A simple NODEJS REST & HTTP interaction with Clickatell platform API

Inside the test.js file is an example implementation of the REST and HTTP API.

Simply require the file index.js file and use one of the methods to send. 
Add the message you want to send, and add the cell number you're sending to, and the API key.

```
clickatell.rest("Hello testing message", ["27XXXXX-NUMBER","27XXXXX-NUMBER"], "APIKEY-HERE");
clickatell.http("Hello testing message", ["27XXXXX-NUMBER","27XXXXX-NUMBER"], "APIKEY-HERE");
```

### Run the code

Simply trigger the sending by running "node test.js" in your terminal.

```
node test.js
```