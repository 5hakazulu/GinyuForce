const bgImages = ['Concert1.png', 'Concert2.png', 'Concert3.png', 'Concert4.png']

async function getData() {
    const result = await fetch("https://api.genius.com/search?q=Kendrick%20Lamar&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj")
    const parsedResponse = await result.json();
    console.log(parsedResponse)

}

getData();

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