const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //Coin flip API
  else if (page == '/api') {
    if('coin' in params){
      if((params['coin'] === 'heads') || (params['coin'] === 'tails')){
        let flipResult = Math.floor(Math.random() * 2) === 1 ? 'heads' : 'tails'
        let coinImg = ''
        if (flipResult === 'heads') {
          coinImg = 'https://i.etsystatic.com/18202207/r/il/97a81a/2727232986/il_794xN.2727232986_84f5.jpg'
        } 
        else {
          coinImg = 'https://i.etsystatic.com/18202207/r/il/09a5c7/2774926489/il_794xN.2774926489_te2i.jpg'
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          flipResult: flipResult,
          coinImg: coinImg,
          flipAnim: //'https://i.pinimg.com/originals/a4/89/03/a489031059b5bee46bbbea0f02856309.gif' 
          'https://1.bp.blogspot.com/-JuSINkTeoCo/WnSxT2cpdcI/AAAAAAAAPes/iD97Aq6_lwQnMyYcym195a8GRedfOkjZgCLcBGAs/s1600/DistantBronzeAmericanwarmblood-size_restricted.gif'
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['coin'] != 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
