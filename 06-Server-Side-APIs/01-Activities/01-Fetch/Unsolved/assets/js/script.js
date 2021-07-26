// Write a fetch request to the Giphy API
// Then log the response in the console

// var url = "http://www.omdbapi.com/?i=tt3896198&apikey=c0f02e58";
// var key = c0f02e58;

// fetch("http://www.omdbapi.com/?apikey=" + key + "&t=die+hard")
//   .then(function (res) {
//     return res.json()
//   })
//   .then(function (data) {
//     console.log(data)
//   });


var url = "http://www.omdbapi.com/?i=tt3896198&apikey=c0f02e58";
var key = "c0f02e58";

fetch("http://www.omdbapi.com/?apikey=" + key + "&t=die+hard")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  });


  fetch (url)

  .then(function (response) { 
    return response.json();
   })
   .then(function (response) { 
      var responseContainerEl = document.querySelector
      ("response-container");
      var gifImg = document.createElement("img");
      gifImg.setAttribute("src", response.Poster);
      responseContainerEl.appendChild(gifImg);
    })