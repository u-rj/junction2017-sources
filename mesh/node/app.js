var http = require('http');
var exec = require("child_process").exec;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello test\n');
  exec('. ~/.profile \;/usr/bin/python /Users/kitazaki/temp/Pepper/Python/jt2017.py', (err, stdout, stderr) => {
    if (err) { console.log(err); }
    console.log(stdout);
  });
}).listen(80, '0.0.0.0');

