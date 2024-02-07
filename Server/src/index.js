const http = require("http");
const data = require("./utils/data")

http.createServer((req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req;
  
  if(url.includes("/rickandmorty/character")) {
    const array = url.split("/");
    console.log(array)
    const id = array.pop()
    console.log(id)
    const character = data.filter(char => char.id == id)
    console.log(character)
    res.writeHead(200, { "Content-Type": "aplication-json" });
    return res.end(JSON.stringify(...character));
  };
  res.writeHead(400);
  res.end();
  
}).listen(3001, "localhost");

