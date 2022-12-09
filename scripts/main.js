// Render artist info
function renderArtistCard(data) {
  let artistArray = data.map(function (song) {
    return `<div class="  col-md-3">
    <div class="box ">
      <div class="body">
        <div class="imgContainer">
          <img src="${song.result.header_image_url}" alt="...">
        </div>
        <div class="content d-flex flex-column align-items-center justify-content-center">
          <div>
          <h5 class="card-title">${song.result.title_with_featured}</h5>
          <p class="card-text">Release date: ${song?.result?.release_date_for_display ?? 'unavailable'} </p> 
          <p class="card-text">Times viewed on Genius.com: ${song?.result?.stats?.pageviews ?? 'unavailable'} </p>
          <p class="card-text">Language: ${song?.result?.language} </p> 
          <a href="${song?.result?.relationships_index_url}" class="btn btn-primary"> Sampling info </a>
          <a href="${song?.result?.url}" class="btn btn-primary"> Lyrics </a>
          </div>
        </div>
      </div>
    </div>
  </div>

`


  })
  return artistArray.join("")
}


// Render events info
function renderMusicEvents(data) {
 return data.map(function (value) {
    console.log(value)
   return `<div class="card col-3 mb-4 m-5">


        <div class="content d-flex flex-column align-items-center justify-content-center m-5">
          <div>
            <h5 class="card-title">${value?.artist?.name ?? ""}</h5>
            <p class="card-text">Date: ${value?.datetime} </p>
            <p class="card-text">Venue: ${value?.venue?.name} </p> 
            <p class="card-text">${value?.venue?.street_address} <br> ${value?.venue?.location} ${value?.venue?.postal_code} </p>

            <p class="card-text">Tickets drop on: ${value?.on_sale_datetime ?? ""} </p>
            <a href="${value?.offers[0]?.url}" class="btn btn-primary"> Get Tickets </a>
          </div>
        </div>

    </div>
   </div>
 </div>

`


 })
}

// Search function
document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("search-form");
  myForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);


    await fetch(`https://api.genius.com/search?q=${urlEncodedSearchString}&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj`)
      .then(async function (response) {
        return response.json();

      })
      .then(function (data) {
        const newArray = data.response.hits.slice(0, 8)
        document.getElementsByClassName("artistContainer")[0].innerHTML = renderArtistCard(newArray)

        // console.log(document.getElementsByClassName("artistContainer").innerHTML)

      })
      
  })
})

// Event button
document.addEventListener("DOMContentLoaded", function () {
  const eventSearchButton = document.getElementById("event-search");
  eventSearchButton.addEventListener("click", async function (e) {
    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    try {
      const tryFetch = await fetch(`https://rest.bandsintown.com/artists/${urlEncodedSearchString}/events?app_id=f902795fc209049a2c1bc9479048d797&date=upcoming`)
      const eventJson = await tryFetch.json()
      console.log(eventJson)
      document.getElementsByClassName("artistContainer")[0].innerHTML = renderMusicEvents(eventJson).join('')
    } catch(e) {
      console.log(e)
    }

    })
    
  })










// Background Image
const bgImages = ['Concert1.png', 'Concert2.png', 'Concert3.png', 'Concert4.png']

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function setRandomBackgroundImage() {
  let randNum = getRandomInt(0, 4);
  document.getElementById("backgroundImage").src = `images/${bgImages[randNum]}`;
}

setRandomBackgroundImage();




