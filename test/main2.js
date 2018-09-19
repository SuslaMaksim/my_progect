let stars = getStars();

bindStars(stars);

getStarsFromStorage(stars);




function getStars(){
	let getSelector = document.querySelectorAll(".js-stars img");
	return getSelector;
};



function bindStars(stars){
	stars.forEach( star => {
		star.addEventListener("click", (e) => {
		findClass =  document.querySelectorAll(".js-stars img.active");
			findClass.forEach( item => item.classList.remove("active"));
			
			let targetEl = e.currentTarget;
			let saveToStorage;

			for(let i = 0; i < stars.length; i++){

				let starEl = stars[i];
				starEl.classList.add("active");
				if(starEl === targetEl){
					saveToStorage = i;
					break;
				}
			}
			localStorage.setItem("saveToStorage",saveToStorage);

		});
	});
};

function getStarsFromStorage(stars){
	let loadFromStorage = localStorage.getItem("saveToStorage");
	if(!!loadFromStorage){
		loadFromStorage = +loadFromStorage;
		for(let i = 0; i < stars.length; i++){
				let starEl = stars[i];
				starEl.classList.add("active");
				if( i === loadFromStorage){
					break;
				}
			}
	}


};