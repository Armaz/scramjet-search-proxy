# Scramjet Search Proxy

A complete web search proxy using Scramjet + Wisp backend with WebSocket support.

## Features

- Full Scramjet proxy integration
- Wisp protocol WebSocket backend
- DuckDuckGo search through Scramjet
- Real-time search results in iframe
- Fully encrypted traffic

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Wisp Backend Server

```bash
npm run server
```

This will:
- Start the Wisp WebSocket server on port 4142
- Serve the frontend on port 4141
- Load all Scramjet bundles

### 3. Open in Browser

Go to `http://localhost:4141` and search!

## How It Works

1. **Frontend** (`index.html`) - Search UI that connects to Wisp
2. **Wisp Backend** (`server.js`) - WebSocket proxy server
3. **Scramjet Integration** - Real-time proxying of DuckDuckGo
4. **Encrypted Traffic** - All requests go through Wisp protocol

## Project Structure

```
.
├── server.js           # Wisp backend + Express server
├── index.html          # Frontend search interface
├── package.json        # Dependencies
└── README.md
```

## Deployment

For production:

```bash
PORT=8080 WISP_PORT=8081 npm run server
```

Then update the frontend to point to your domain:

```javascript
const WISP_URL = 'wss://your-domain.com:8081/'; // Use wss:// for HTTPS
```

## License

GNU AFFERO GENERAL PUBLIC LICENSE v3
