let movieData = JSON.parse(movies);
console.log(movieData);
//putting the JSON into a local storage

// localStorage.setItem("Movies", JSON.stringify(movieData));
// console.log(localStorage.Movies);
// let getLocal = JSON.parse(localStorage.getItem(""));
// console.log(localStorage.key(1));
// console.log(getLocal)

function generateHTML(){
  let cardGenerator = "";
  for (i in movieData.Movies){
    cardGenerator += `
    <div id="movieCard" class="card bg-dark mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${movieData.Movies[i].image}" alt="movie image failed to load">
        </div>
        <div class="col-md-8">
          <div class="card-body">
              <h5 id="movieTitle" class="card-title text-white">${movieData.Movies[i].movieTitle}</h5>
              <p class="card-text text-white">${movieData.Movies[i].description}</p>
              <p class="card-text text-danger">${movieData.Movies[i].genre}</p>
              <span id="likeValue" class="bg-success text-white rounded p-1">${movieData.Movies[i].likes}</span><br><br>
              <p id="likeBtn" class="btn btn-success like">Did You like this movie?</p>
          </div>
        </div>
      </div>
    </div>
    `
}
return cardGenerator
}

document.getElementById("content").innerHTML += generateHTML();

let likeBtns = document.querySelectorAll("#likeBtn");
let sortBtn = document.querySelector("#sortBtn");
// let likedValue = document.querySelectorAll("#likeValue");
// console.log(likedValue)

likeBtns.forEach(function(currentBtn){ // we take the button #like, the forEach loops goes over and attaches an event listener to each #like 
  currentBtn.addEventListener("click", function(){
      console.log(this.parentNode.querySelector("#likeValue")); //this in an eventlistener 
      let likedValue = this.parentNode.querySelector("#likeValue").innerHTML; //then declare a variable that will go into the parentNode of the pressed button and access teh innerHTML of the #likeValue
      // console.log(typeof likedValue);
      likedValue = parseInt(likedValue); //return it as an int because JSON. Need to regrab the the number of likes, and make that string = int + 1 every time eventlistener is called
      this.parentNode.querySelector("#likeValue").innerHTML = likedValue + 1;
      let currentLikeKey = this.parentNode.querySelector("movieCard");
      let currentLikeValue = likedValue + 1;
      localStorage.setItem(currentLikeKey ,JSON.stringify(currentLikeValue))
  })
})


function sortByScore(){
    for(i in movieData.Movies){
      let likesArray = [movieData.Movies[i].likes];
      let resultArray = likesArray.concat()
      let aa = document.querySelector("#likeValue");
      console.log(aa)
    }
    // console.log("hello")
  // let cardGenerator = "";
  // for (i in movieData.Movies){
  //   cardGenerator += `
  //   <div id="movieCard" class="card bg-dark mb-3" style="max-width: 540px;">
  //     <div class="row g-0">
  //       <div class="col-md-4">
  //         <img src="${movieData.Movies[i].image}" alt="movie image failed to load">
  //       </div>
  //       <div class="col-md-8">
  //         <div class="card-body">
  //             <h5 id="movieTitle" class="card-title text-white">${movieData.Movies[i].movieTitle}</h5>
  //             <p class="card-text text-white">${movieData.Movies[i].description}</p>
  //             <p class="card-text text-danger">${movieData.Movies[i].genre}</p>
  //             <span id="likeValue" class="bg-success text-white rounded p-1">${movieData.Movies[i].likes}</span><br><br>
  //             <p id="likeBtn" class="btn btn-success like">Did You like this movie?</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   `
// }
// document.getElementById("content").innerHTML = cardGenerator;
  }


sortBtn.addEventListener("click", function(){
  let currentLikes = document.querySelectorAll("#likeValue");
  for (i = 0; i < currentLikes.length; i++){
  let aa = currentLikes.item(i);
  let bb = parseInt(aa);
  let cc = aa.parentNode;}
})







  // likeBtns.forEach(function(currentBtn){
  //   currentBtn.addEventListener("click", function(){
  //     for (i in movieData.Movies){
  //       // console.log(movieData.Movies[i].likes)
  //       let likedValue = this.parentNode.querySelector("#likeValue").innerHTML;
  //       console.log(likedValue);
  //     }
  //   })
  // })

