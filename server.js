import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { server as wisp, logging } from '@mercuryworkshop/wisp-js/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 4141;
const WISP_PORT = process.env.WISP_PORT || 4142;

const app = express();

// Serve Scramjet client bundles
app.use(
  '/scramjet',
  express.static(
    path.join(
      process.cwd(),
      'node_modules/@mercuryworkshop/scramjet/dist'
    )
  )
);

app.use(
  '/controller',
  express.static(
    path.join(
      process.cwd(),
      'node_modules/@mercuryworkshop/scramjet-controller/dist'
    )
  )
);

app.use(
  '/libcurl',
  express.static(
    path.join(
      process.cwd(),
      'node_modules/@mercuryworkshop/libcurl-transport/dist'
    )
  )
);

// Serve frontend
app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`\n🚀 Scramjet Search Proxy Frontend`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`\n`);
});

// Wisp WebSocket Server
const wispServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Wisp WebSocket Server');
});

wisp.options.allow_private_ips = true;
wisp.options.allow_loopback_ips = true;
logging.set_level(logging.NONE);

wispServer.on('upgrade', (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

wispServer.listen(WISP_PORT, () => {
  console.log(`🔌 Wisp WebSocket Server`);
  console.log(`   ws://localhost:${WISP_PORT}/`);
  console.log(`\n✅ Scramjet proxy ready!\n`);
});
