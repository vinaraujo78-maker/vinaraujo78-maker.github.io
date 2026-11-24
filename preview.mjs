import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = resolve(process.argv[2] || '.');
const types = { '.html':'text/html; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml','.txt':'text/plain; charset=utf-8' };
const server = createServer(async (request, response) => {
  try {
    const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (path.includes('\\') || path.split('/').some(part => part.startsWith('.'))) throw new Error();
    const file = resolve(root, '.' + (path.endsWith('/') ? path + 'index.html' : path));
    const mime = types[extname(file)];
    if (!mime || !file.startsWith(root + sep)) throw new Error();
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': mime, 'Cache-Control':'no-store' }).end(body);
  } catch {
    response.writeHead(404, { 'Content-Type':'text/html; charset=utf-8' }).end(await readFile(resolve(root,'404.html')));
  }
});
server.listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log('http://127.0.0.1:' + server.address().port));
