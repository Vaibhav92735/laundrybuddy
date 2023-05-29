const selectImage = document.querySelector('.select-image');
const selectImage2 = document.querySelector('.select-image2');
const selectImage3 = document.querySelector('.select-image3');
const selectImage4 = document.querySelector('.select-image4');
const inputFile = document.querySelector('#file');
const inputFile2 = document.querySelector('#file2');
const inputFile3 = document.querySelector('#file3');
const inputFile4 = document.querySelector('#file4');
const imgArea = document.querySelector('.img-area');
const imgArea2 = document.querySelector('.img-area2');
const imgArea3 = document.querySelector('.img-area3');
const imgArea4 = document.querySelector('.img-area4');

selectImage.addEventListener('click', function () {
	inputFile.click();
})
selectImage2.addEventListener('click', function () {
	inputFile2.click();
})
selectImage3.addEventListener('click', function () {
	inputFile3.click();
})
selectImage4.addEventListener('click', function () {
	inputFile4.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})
inputFile2.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea2.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea2.appendChild(img);
			imgArea2.classList.add('active');
			imgArea2.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})
inputFile3.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea3.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea3.appendChild(img);
			imgArea3.classList.add('active');
			imgArea3.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})
inputFile4.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea4.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea4.appendChild(img);
			imgArea4.classList.add('active');
			imgArea4.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})