var fetch = require('node-fetch');

console.log('starting up...');

fetch('https://www.scorebat.com/video-api/v1/')
.then((response)=> {
  return response.json();
})
.then(response => {
  console.log(response[0].competition.name);
  let compArray = response.map( highlight => highlight.competition.name);
  console.log(compArray);
})
.catch(e => console.log(e));

