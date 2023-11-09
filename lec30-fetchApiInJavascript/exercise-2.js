const response = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

response.then((responseObject) => {
  const result = responseObject.json();
  result.then((finalResponse) => {
    console.log(finalResponse.sprites.other['official-artwork'].front_default)
  })
  
})