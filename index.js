const fetch = require('node-fetch');

console.log('starting up...');

fetch('https://www.scorebat.com/video-api/v1/')
.then((response)=> {
  return response.json();
})
.then(response => console.log(response))
.catch(e => console.log(e));
