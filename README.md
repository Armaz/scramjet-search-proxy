# Scramjet Search Proxy - Complete Working Setup

A full-featured search proxy using Scramjet + Wisp WebSocket backend with real proxied iframe results.

## Quick Start

### Option 1: Clone Scramjet & Use This

```bash
# Clone Scramjet repo
git clone --recursive https://github.com/MercuryWorkshop/scramjet.git
cd scramjet

# Install dependencies
pnpm install

# Copy our files into the demo public folder
cp path/to/index.html packages/demo/public/
cp path/to/styles.css packages/demo/public/

# Run Scramjet dev server
pnpm dev
```

Then open: `http://localhost:4141`

This will:
- Start Wisp WebSocket server on `ws://localhost:4142/`
- Serve the search UI on `http://localhost:4141`
- Proxy DuckDuckGo through Scramjet in an iframe

### Option 2: Use Our Standalone Backend

```bash
npm install
npm run server
```

Then open: `http://localhost:4141`

## How It Works

1. **Frontend** - `index.html` with search bar
2. **Wisp Backend** - WebSocket proxy on port 4142
3. **Scramjet Controller** - Real-time iframe proxying
4. **Results** - DuckDuckGo search displayed inside proxied frame

## Key Features

✅ Full Scramjet integration
✅ Wisp WebSocket protocol
✅ Real proxied iframe results
✅ LibCurl transport for encrypted traffic
✅ Live URL watching
✅ HTTP caching plugin

## Production Deployment

```bash
PORT=8080 WISP_PORT=8081 npm run server
```

Update Wisp URL in HTML for your domain:
```javascript
const WISP_URL = 'wss://your-domain.com:8081/';
```

## File Structure

```
.
├── server.js              # Wisp + Express backend
├── index.html             # Search UI with Scramjet integration
├── styles.css             # Styling
├── package.json           # Dependencies
└── README.md
```

## Dependencies

- `express` - Web server
- `@mercuryworkshop/wisp-js` - WebSocket proxy protocol
- `@mercuryworkshop/scramjet` - Client bundle
- `@mercuryworkshop/scramjet-controller` - Frame controller
- `@mercuryworkshop/libcurl-transport` - Transport layer

## Troubleshooting

**Blank iframe?**
- Check browser console for errors
- Verify Wisp server is running on port 4142
- Ensure Scramjet bundles are loaded

**Connection refused?**
- Wisp URL may be wrong
- Check that server is running: `npm run server`
- Verify ports 4141 (frontend) and 4142 (wisp) are available

## License

GNU AFFERO GENERAL PUBLIC LICENSE v3
