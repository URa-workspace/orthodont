const images = [...document.querySelectorAll(".gallery__img img")],
			popup = document.querySelector(".popup-gallery"),
			closeBtn = document.querySelector(".close-btn"),
			imageName = document.querySelector(".img-name"),
			largeImage = document.querySelector(".large-img"),
			imageIndex = document.querySelector(".index"),
			rightArrow = document.querySelector(".arrow-right"),
			leftArrow = document.querySelector(".arrow-left"),
			body = document.body;

let index = 0

images.forEach((itm, idx) => {
	itm.addEventListener('click', () => {
		updateImg(idx)
		popup.classList.toggle('active')
		body.classList.toggle("no-scroll");
		switchArrow(index, leftArrow, 0)
    switchArrow(index, rightArrow, images.length - 1);
	})
})

closeBtn.addEventListener("click", () => {
	popup.classList.toggle("active");
	body.classList.toggle("no-scroll");
});

const updateImg = function (i) {
	let path = `./img/certificates/certificat_${i + 1}.png`;
	largeImage.src = path;
	imageName.innerHTML = `certificat_${i + 1}`;
	imageIndex.innerHTML = `${i + 1}`;
	index = i;
}

leftArrow.addEventListener('click', () => {
	if (index > 0) {
		updateImg(index - 1);
		switchArrow(index, leftArrow, 0);
    switchArrow(index, rightArrow, images.length - 1);
	}
})

rightArrow.addEventListener("click", () => {
  if (index < images.length - 1) {
		updateImg(index + 1);
		switchArrow(index, leftArrow, 0);
		switchArrow(index, rightArrow, images.length - 1);
  } 
});

const switchArrow = (target, arrow, val) => {
	target === val
    ? (arrow.style.display = "none")
    : (arrow.style.display = "block");
}