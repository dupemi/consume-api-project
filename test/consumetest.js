var request =require ('request')

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('enter your username')

rl.question('username: ', (answer) => {
  // TODO: Log the answer in a database
  request({
   url: 'http://api.geonames.org/findNearbyWikipediaJSON', //URL to hit
   qs: {username: `${answer}`, lat: 47, lng:9}, //Query string data
   method: 'POST',
}, function(error, response, body){
   if(error) {
       console.log(error);
   } else {
       console.log(response.statusCode, body);
   }
});

  rl.close();
});