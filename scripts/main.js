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
    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);


    await fetch(`https://api.genius.com/search?q=${urlEncodedSearchString}&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj`)
      .then(async function (response) {
        return response.json();

      })
      .then(function (data) {
        document.getElementsByClassName("artistContainer").innerHTML = data.response.hits[0].result.artist_names
        console.log(document.getElementsByClassName("artistContainer").innerHTML)

      })
  })
})


// Write a local item..
localStorage.setItem("myKey", "myValue");

// Read a local item..
var theItemValue = localStorage.getItem("myKey");

// Check for changes in the local item and log them..
window.addEventListener('storage', function (event) {
  console.log('The value for ' + event.key + ' was changed from' + event.oldValue + ' to ' + event.newValue);
}, false);

// Check for HTML5 Storage..
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
supports_html5_storage();







const bgImages = ['Concert1.png', 'Concert2.png', 'Concert3.png', 'Concert4.png']

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function setRandomBackgroundImage() {
  let randNum = getRandomInt(0, 4);
  console.log(randNum);
  document.body.style.backgroundImage = `url(images/${bgImages[randNum]})`
  // document.getElementById("backgroundImage").src = `images/${bgImages[randNum]}`;
}

setRandomBackgroundImage();
