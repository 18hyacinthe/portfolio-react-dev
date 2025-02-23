import { createServer } from 'http'
import { createReadStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3000

const server = createServer((req, res) => {
  const filePath = req.url === '/' ? 'index.html' : req.url
  const fullPath = join(__dirname, 'dist', filePath)
  
  createReadStream(fullPath)
    .on('error', () => {
      // En cas d'erreur, servir index.html pour le routing côté client
      createReadStream(join(__dirname, 'dist', 'index.html')).pipe(res)
    })
    .pipe(res)
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})