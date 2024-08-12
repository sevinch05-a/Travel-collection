const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
const photoBar = document.getElementById('photoBar');
const uploadButton = document.getElementById('uploadButton');
const imageUrls = [];
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

imageUrls.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  photoBar.appendChild(img);
});
uploadButton.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          photoBar.appendChild(img);
      };
      reader.readAsDataURL(file);
  }
});

const commentInput = document.getElementById('commentInput');
    const submitComment = document.getElementById('submitComment');
    const commentsContainer = document.getElementById('commentsContainer');

    submitComment.addEventListener('click', function() {
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.textContent = commentText;
            commentsContainer.appendChild(comment);
            commentInput.value = '';
        }
    });





function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));