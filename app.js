const http = require('http');
const routes = require('./api/routes/v1');
const server = http.createServer(routes);

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
