let photoInputEl = findInputEl();
let ulElement = findeElement();
let imges = [];
bindPhotoEl(photoInputEl,ulElement,imges);
checkToLockalStorage(photoInputEl,ulElement,imges);


function findInputEl(){
	return document.querySelector(".new_photo");
};

function findeElement(){
	return document.querySelector(".js_photo");
};


function bindPhotoEl(photoInputEl,ulElement,imges){
	photoInputEl.addEventListener("keyup", (e) => {
		if(e.code == "Enter"){

			let src = photoInputEl.value;
			let li = document.createElement("li");

			li.innerHTML = `<img src="${src}">`;
			ulElement.appendChild(li);

			photoInputEl.value = "";

			imges.push(src);
			//console.log(imges);
			localStorage.setItem("url", JSON.stringify(imges));
		}
	});
};



function checkToLockalStorage(photoInputEl,ulElement,imges){
	let photosStr = localStorage.getItem("url");
	if(!!photosStr){
		let photo = JSON.parse(photosStr);

		photo.forEach( url => {
			let li = document.createElement("li");
			imges.push(url);
			li.innerHTML = `<img src="${url}">`;
			ulElement.appendChild(li);


		})

	}
};