const response = fetch("https://jsonplaceholder.typicode.com/posts/1");

response.then((response1) => {
  const response2 = response1.json();
  response2.then((Json) => {
    console.log(Json);

    console.log(Json.title);
  });
});
