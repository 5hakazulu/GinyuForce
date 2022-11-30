async function getData (){
    const result =  await fetch("https://api.genius.com/search?q=Kendrick%20Lamar&access_token=wG0T7APBwvyIwjbLlMF63S5NKLHV1o2UavANFobyb0xTf4ycHh_shy--Cf23G6Wj")
    const parsedResponse = await result.json();
    console.log(parsedResponse)

}

getData();