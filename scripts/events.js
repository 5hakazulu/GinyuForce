async function getEvents (){
await fetch(`https://rest.bandsintown.com/artists/kendrick%20lamar/events?app_id=f902795fc209049a2c1bc9479048d797&date=upcoming
`)
    .then(async function(response){
      return response.json();
      
    })
    .then(function(data){
      document.getElementsByClassName("artistContainer").innerHTML = data[0].venue.location
      console.log(document.getElementsByClassName("artistContainer").innerHTML)

    })
}
getEvents();


