// ==== DARK MODE TOGGLE ====
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent =
    document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

// ==== IMAGE CAROUSEL ====
const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(index) {
  carouselImage.src = images[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Initialize carousel
showImage(currentIndex);

// ==== JOKE FETCH ====
const jokeText = document.getElementById("jokeText");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
  jokeText.textContent = "Loading a joke...";
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
    })
    .catch((err) => {
      console.error(err);
      jokeText.textContent = "Oops! Couldn't fetch a joke. Try again later.";
    });
});

// ==== AOS Animation ====
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true
});
