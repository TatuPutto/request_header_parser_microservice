const ipaddr = require('ipaddr.js');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', (req, res) => {
    const ipaddress = req.ip;
    const language = req.headers['accept-language'].split(',')[0];
    const software = req.headers['user-agent'].split('(')[1].split(')')[0];
    const output = {ipaddress, language, software};
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(output));
});

app.listen(app.get('port'), '127.0.0.1');
