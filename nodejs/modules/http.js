const http = require('http')

http.createServer(router).listen(3000)

function router(req,res){
      console.log('New request')
      console.log(req.url)
      switch (req.url){
            case '/hello':
                  let greet = hello()
                  res.write(greet)
                  //res.write('Hello explorer 🖐')
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
function hello(){
      return 'Hello explorer 🖐'
}

console.log('Listening on port 3000')