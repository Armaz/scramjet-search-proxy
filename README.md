# Scramjet Search Proxy

A simple search interface that proxies DuckDuckGo searches through a Wisp backend server.

## Setup

1. Update `WISP_BACKEND` in `index.html` to point to your Wisp server
2. Deploy this to your server
3. When users search, queries are sent through the Wisp proxy using base64-encoded URLs

## How it works

- User enters a search query
- The app encodes the DuckDuckGo search URL in base64
- Sends to Wisp backend: `https://your-wisp-server.com/?uri=base64(duckduckgo-url)`
- Wisp proxies the request and returns the result in an iframe
- Search results display on the page

## Wisp Backend URL Format

Your Wisp server should accept:
- `?uri=` - base64 encoded target URL
- Returns the proxied content for iframe embedding

Example: `https://your-wisp-server.com/?uri=aHR0cHM6Ly9kdWNrZHVja2dvLmNvbS8/cT1zZWFyY2g=`
