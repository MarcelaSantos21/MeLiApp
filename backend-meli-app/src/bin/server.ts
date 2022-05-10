import { debug } from 'console';
import http from 'http';
import app from '../app';
import config from '../config';

// LOAD PORT TO RUN SERVER NODE
const port = Number(config.port);
// CREATE INSTANCE SERVER
const server = http.createServer(app);
// SET PORT TO SERVER
app.set('port', port);
// LISTEN REQUEST IN PORT
server.listen(port);
// RUN SERVER
server.on('listening', () => debug(`Listening on ${port}`));

export default server;
