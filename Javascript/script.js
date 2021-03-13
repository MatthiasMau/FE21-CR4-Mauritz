let movieData = JSON.parse(movies);
console.log(movieData);

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

likeBtns.forEach(function(currentBtn){ // we take the button #like, the forEach loops goes over and attaches an event listener to each #like 
  currentBtn.addEventListener("click", function(){
      console.log(this.parentNode.querySelector("#likeValue")); //.this in an eventlistener refers to the element the event is called on. SO when we call this on the ForEach button, we get access to all btns as individuals
      let likedValue = this.parentNode.querySelector("#likeValue").innerHTML; //then declare a variable that will go into the parentNode of the pressed button and access teh innerHTML of the #likeValue
      // console.log(typeof likedValue);
      likedValue = parseInt(likedValue); //return it as an int because JSON. Need to regrab the the number of likes, and make that string = int + 1 every time eventlistener is called
      this.parentNode.querySelector("#likeValue").innerHTML = likedValue + 1;
  })
})

sortBtn.addEventListener("click", sortFunction);


function sortFunction(){
 let currentLikes = document.querySelectorAll("#likeValue"); //gather the items in a nodelist.
 currentLikes = Object.entries(currentLikes); //put them into an array.
 for (i = 0; i < currentLikes.length; i++){ //iterate through them
   var likesArray = currentLikes[i];
   console.log(likesArray[1]); //log the 1st value of the array.? I think.
  //  I cant seem to make the leap in logic to then process the items the sort button is writing in the console.log
 }
//  console.log(likesArray[1])
}
