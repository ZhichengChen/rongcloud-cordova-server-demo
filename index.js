var http = require('http');
var rongcloudSDK = require( 'rongcloud-sdk' );
rongcloudSDK.init( 'KEY', 'SECRET' );
http.createServer(function (req, res) {
  rongcloudSDK.user.getToken( '0001', 'Lance', 'http://www.gravatar.com/avatar/629497a2072fbfdbde466141b2888c42?s=82&d=wavatar', function( err, resultText ) {
    var result;
    if(err) {
      result = JSON.stringify(err);
    } else {
      var obj = JSON.parse(resultText);
      result = {'code':200, 'result':{'id':obj.userId, 'token':obj.token, 'username':'Lance','portrait':'http://www.gravatar.com/avatar/629497a2072fbfdbde466141b2888c42?s=82&d=wavatar'}};
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  });
}).listen(8888);
