const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')
const path = require('node:path')
const { findAvailablePort } = require('./12.free-port')
// const host = '127.0.0.1'
// const puerto = 8000

const serveStatic = (req, resp) => {
  const filePath = path.join(__dirname, 'public', req.url)

  fs.readFile(filePath, (err, data) => {
    if (err) {
      resp.writeHead(404)
      return resp.end('File not found')
    }

    const ext = path.extname(filePath).toLowerCase()
    let contentType = 'text/html'
    if (ext === '.jpg' || ext === '.jpeg') {
      contentType = 'image/jpeg'
    } else if (ext === '.png') {
      contentType = 'image/png'
    } else if (ext === '.css') {
      contentType = 'text/css'
    } else if (ext === '.js') {
      contentType = 'application/javascript'
    }

    resp.writeHead(200, { 'Content-Type': contentType })
    resp.end(data)
  })
}

const routes = {
  '/': (req, resp) => {
    resp.statusCode = 200
    resp.writeHead(200)
    resp.write('Hola mundo')
    resp.end()
  },
  '/json': (req, resp) => {
    // resp.setHeader('Content-Type', 'aplication/json')  descarga un archivo con el contenido del json
    // resp.setHeader('Content-Type', 'text/json')
    resp.writeHead(200)
    // resp.write('Hola mundo')
    const objeto = {
      frase: 'Hola',
      edad: 23,
      cursos: ['PHP', 'Python', 'JavaScript', 'Node.js', 'C#', 'Java']
    }
    resp.end(JSON.stringify(objeto))
    // resp.end('{"mensaje": "Contenido en formato JSON."}')
  },
  '/html': (req, resp) => {
    /* resp.setHeader('Content-Type', 'text/html')
    resp.writeHead(200)
    // resp.write('Hola mundo')
    resp.end('<html><body><h1> Formato Html</h1></body></html>') */
    const htmlfile = fs.readFileSync('./public/index.html')
    // resp.setHeader('Content-Type', 'text/html')
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    resp.end(htmlfile)
  },
  '/login': (req, resp) => {
    /* resp.setHeader('Content-Type', 'text/html')
    resp.writeHead(200)
    // resp.write('Hola mundo')
    resp.end('<html><body><h1> Formato Html</h1></body></html>') */
    const htmlfile = fs.readFileSync('./public/login.html')
    // resp.setHeader('Content-Type', 'text/html')
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    resp.end(htmlfile)
  },
  '/new-post': (req, resp) => {
    /* resp.setHeader('Content-Type', 'text/html')
    resp.writeHead(200)
    // resp.write('Hola mundo')
    resp.end('<html><body><h1> Formato Html</h1></body></html>') */
    const htmlfile = fs.readFileSync('./public/new-post.html')
    // resp.setHeader('Content-Type', 'text/html')
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    resp.end(htmlfile)
  },
  '/csv': (req, resp) => {
    // resp.setHeader('Content-Type', 'text/csv')
    resp.setHeader('Content-Disposition', 'attachment;filename=amigos.csv')
    resp.writeHead(200)
    resp.end('codigo,nombre,email\n123,Kevin Guzman,kevin.com')
  }
}

const server = http.createServer((req, resp) => {
  console.log('request received')
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  console.log(req.headers['user-agent'])
  // resp.writeHead(200)
  // resp.write('Hola mundo')
  // resp.end('Hola mundo')
  if (req.url.startsWith('/Resources/') || req.url.startsWith('/css/') || req.url.startsWith('/js/')) {
    serveStatic(req, resp)
  } else if (req.url in routes) {
    routes[req.url](req, resp)
  } else {
    resp.writeHead(404)
    resp.end(`${http.STATUS_CODES[404]}, please try another route`)
  }
})

findAvailablePort(1234).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}/html`)
  })
})
