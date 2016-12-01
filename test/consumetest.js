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
    
      var myResponse = JSON.parse(body);
        console.log(myResponse['geonames']);


      myResponse['geonames'].forEach(function(element) {
          console.log(element.title);
          console.log(element.summary);
          console.log(element.feature);
          console.log(element.countryCode);
          console.log('\n');

      });
      // My username is meddy

     // console.log(response.statusCode, body.geonames);
       //console.log(response.statusCode, body);
   }
});

  rl.close();
});