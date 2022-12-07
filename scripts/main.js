function renderArtistCard(data) {
  let artistArray = data.map(function (song) {
      return `<div class="card" style="width: 18rem;">
      <img src="${song.result.header_image_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${song.result.title_with_featured}</h5>
        <p class="card-text">Release date: ${song.result.release_date_for_display} </p> 
        <p class="card-text">Times viewed on Genius.com: ${song.result.stats.pageviews} </p>
        <a href="${song.result.relationships_index_url}" class="btn btn-primary"> Sampling </a>
        <a href="${song.result.url}" class="btn btn-primary"> Lyrics </a>
        
        
      </div>
    </div>
`
  })
  return artistArray.join("")
}










document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("search-form");
  myForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
  

    await fetch(`https://api.genius.com/search?q=${urlEncodedSearchString}&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj`)
    .then(async function(response){
      return response.json();
      
    })
    .then(function(data){
      const newArray = data.response.hits.slice(0,6)
      document.getElementsByClassName("artistContainer")[0].innerHTML =  renderArtistCard(newArray)

      // console.log(document.getElementsByClassName("artistContainer").innerHTML)

    })
  })
})


document.addEventListener("DOMContentLoaded", function () {
  const eventSearchButton = document.getElementById("event-search");
  eventSearchButton.addEventListener("click", async function (e) {
    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
  

    await fetch(`https://rest.bandsintown.com/artists/${urlEncodedSearchString}/events?app_id=f902795fc209049a2c1bc9479048d797&date=upcoming`)
    .then(async function(response){
      return response.json();
      
    })
    .then(function(data){
      console.log(data)
      document.getElementsByClassName("artistContainer").innerHTML = data[0].venue.location
      console.log(document.getElementsByClassName("artistContainer").innerHTML)

    })
  })
})











const bgImages = ['Concert1.png', 'Concert2.png', 'Concert3.png', 'Concert4.png']

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function setRandomBackgroundImage() {
  let randNum = getRandomInt(0, 4);
  console.log(randNum);
  document.getElementById("backgroundImage").src = `images/${bgImages[randNum]}`;
}

setRandomBackgroundImage();



