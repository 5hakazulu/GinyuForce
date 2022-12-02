// async function getArtistData (){
//     const result =  await fetch("https://api.genius.com/search?q=Kendrick%20Lamar&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj")
//     const parsedResponse = await result.json();
//     console.log(parsedResponse)

// }

// getArtistData();

// async function getArtistEvent (){
//     const 
// }

 Promise.all([
    fetch("https://api.genius.com/search?q=Kendrick%20Lamar&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj")
        .then(value => value.json()),
    fetch("https://rest.bandsintown.com/artists/Kendrick%20Lamar/events?app_id=f902795fc209049a2c1bc9479048d797&date=upcoming")
        .then(value => value.json())
    ])
    .then((value) => {
     console.log(value)
     insert(value);
    })
    .catch((err) => {
    });

function insert(value) {
  document.getElementById("cardContainer").innerHTML = renderArtistCard(value);
}

function renderArtistCard(data) {
  const artistArray = data.map(function (data) {
    const index = artistData.map(object => object.englishName).indexOf(data.englishName)
    return `<div class="col">
        <div class="card">
          <img src="${planetData[index].thumbImg}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.englishName}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>`;
  });
  return artistArray.join("");
}


document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById("search-form");
    myForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const searchString = document.getElementById("search-bar").value;
      const urlEncodedSearchString = encodeURIComponent(searchString);
  
      await fetch(`https://api.genius.com/search?q=${urlEncodedSearchString}s&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj`)
      .then(async function(response){
        return response.json();
      })
      .then(function(data){
        document.getElementsByClassName("artist-container")[0].innerHTML = renderArtistCard(data.Search);
        movieData = data.Search;
      })
    });
})

