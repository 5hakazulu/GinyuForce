function renderArtistCard(data) {
  let artistArray = data.map(function (song) {
      return `<div id="ArtistCard" class="row justify-content-center">
      <div class="col-11">
          <div class="container-fluid   p-5  ">
              <div class="row bg-secondary" style="--bs-bg-opacity: .75;">

                  <div class="col-7 m-5 align-self-center">
                      <img class="w-100 " src="${song.result.header_image_url}" alt="">
                  </div>

                  <div class="col m-3">
                      <div class="row">
                          <h3 class="text-center" style="color:white; text-shadow:10px black; font-weight:bold; ">
                              Title</h3>
                      </div>
                      <div class="row m-5">
                          <div class="overflow-auto h-75 d-inline-block">
                              <p>
                              ${song.result.full_title} 
                              ${song.result.artist_names}
                              ${song.result.release_date_for_display} 
                              
                               
 
                              </p>
                          </div>

                      </div>
                      <div class="row justify-content-center">
                      
                      </div>
                  </div>
              </div>

          </div>
      </div>

  </div>
`;
  });
  return artistArray.join("");
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
      const newArray = data.response.hits.slice(0,3)
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


