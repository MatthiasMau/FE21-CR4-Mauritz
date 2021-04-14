let movieData = JSON.parse(movies);
// console.log(movieData);

function generateHTML(array){
  let cardGenerator = ``;
  for (i in array){
    cardGenerator += `
    <div id="movieCard" class="card bg-dark mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${array[i].image}" alt="movie image failed to load">
        </div>
        <div class="col-md-8">
          <div class="card-body">
              <h5 id="movieTitle" class="card-title text-white">${array[i].movieTitle}</h5>
              <p class="card-text text-white">${array[i].description}</p>
              <p class="card-text text-danger">${array[i].genre}</p>
              <span id="likeValue" class="bg-success text-white rounded p-1">${array[i].likes}</span><br><br>
              <p id="likeBtn" class="btn btn-success like">Did You like this movie?</p>
          </div>
        </div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="title-tab${i}" data-bs-toggle="tab" data-bs-target="#title${i}" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="description-tab${i}" data-bs-toggle="tab" data-bs-target="#description${i}" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="genre-tab${i}" data-bs-toggle="tab" data-bs-target="#genre${i}" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
          </li>
        </ul>
        <div class="tab-content text-warning" id="myTabContent">
          <div class="tab-pane fade show active" id="title${i}" role="tabpanel" aria-labelledby="home-tab">${array[i].movieTitle}</div>
          <div class="tab-pane fade" id="description${i}" role="tabpanel" aria-labelledby="profile-tab">${array[i].description}</div>
          <div class="tab-pane fade" id="genre${i}" role="tabpanel" aria-labelledby="contact-tab">${array[i].genre}</div>
        </div>
      </div>
    </div>
    `
}
return cardGenerator
}

document.getElementById("content").innerHTML += generateHTML(movieData.Movies);

let likeBtns = document.querySelectorAll("#likeBtn");
let sortBtn = document.querySelector("#sortBtn");

likeBtns.forEach(function(currentBtn, index){ // we take the button #like, the forEach loops goes over and attaches an event listener to each #like 
  currentBtn.addEventListener("click", function(){
      console.log(this.parentNode.querySelector("#likeValue")); //.this in an eventlistener refers to the element the event is called on. SO when we call this on the ForEach button, we get access to all btns as individuals
      let likedValue = movieData.Movies[index].likes ++; //then declare a variable that will go into the parentNode of the pressed button and access teh innerHTML of the #likeValue
      // console.log(typeof likedValue);
      likedValue = parseInt(likedValue + 1); //return it as an int because JSON. Need to regrab the the number of likes, and make that string = int + 1 every time eventlistener is called
      this.parentNode.querySelector("#likeValue").innerHTML = likedValue;
  })
})

sortBtn.addEventListener("click", function(){sortFunction(movieData.Movies)});


function sortFunction(arr){
  // console.table(x);
//  let currentLikes = document.querySelectorAll("#likeValue"); //gather the items in a nodelist.
// //  currentLikes = Object.entries(currentLikes);
// //  console.log(currentLikes) //put them into an array.
//  for (i = 0; i < currentLikes.length; i++){ //iterate through them
//   var sortedArray = currentLikes[i];
//   let John = sortedArray.innerHTML
//    console.log(John)
//  }
document.getElementById("content").innerHTML = "";
console.table(arr);
arr.sort((a,b)=> b.likes - a.likes);
console.table(arr);
document.getElementById("content").innerHTML += generateHTML(arr); 
}

// function sortFunction(){
//   movieData.sort((a, b) => b.likes - a.likes);
//   document.getElementById("content").innerHTML += generateHTML();
// }


