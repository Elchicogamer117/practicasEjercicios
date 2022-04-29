const http = require('http')

http.createServer(router).listen(3000)

function router(req,res){
      console.log('New request')
      console.log(req.url)
      switch (req.url){
            case '/hello':
                  res.write('Hello explorer 🖐')
                  res.end()
                  break
            default:
                  res.write('404: Not found')
                  res.end()
      }
/*
      res.writeHead(201, {'Content-Type': 'text/plain'})
      //* Escribir respeusta de usuario
      res.write('Test HTTP with native nodejs')
      res.end()
*/
}

console.log('Listening on port 3000')