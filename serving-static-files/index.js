import { createReadStream } from "node:fs";
import http from "node:http";

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
      serverFile(req ,res,"./index.html", {statusCode: 200})
    } else if(req.url === "/about"){
      serverFile(req, res, "./about.html", { statusCode: 200 });
    }else if(req.url === "/contact-me"){
      serverFile(req, res, "./contact-me.html", {statusCode: 200})
    }else{
      serverFile(req, res,"./404.html", { statusCode: 404 });
    }
});

function serverFile(req, res, filePath, {statusCode}){
     res.setHeader("Content-Type", "text/html");
     res.statusCode = statusCode;
     const readStream = createReadStream(filePath);
     readStream.pipe(res);
};

server.listen(8080, 'localhost', (err)=> {
  if(err){
    console.log("Something went wrong!");
    process.exit(1);
  };
  console.log("Server binded on port 8080.");
})