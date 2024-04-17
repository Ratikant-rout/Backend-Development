const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url == "/hello"){
      res.write("hello world !")
   }else{
     res.write("Welcome to Node js Server!")
   }

   server.listen(8000,()=>{
        console.log('server is running on port 8000');
   })
})