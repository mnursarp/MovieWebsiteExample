const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 280
      }px)`; /* backtick için alt + 96*/
    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});

/* Dark Mode */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title");
ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"));
})
