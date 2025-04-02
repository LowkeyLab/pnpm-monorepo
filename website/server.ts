import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Hono app
const app = new Hono();

// Serve static files from the dist directory
app.use('*', serveStatic({ root: 'dist' }));

// Get port from environment variable or use default
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Start the server
console.log(`Server is running on port ${PORT}`);
serve({
  fetch: app.fetch,
  port: PORT
});
