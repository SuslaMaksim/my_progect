let getFild = document.getElementById("fild");
let text = document.getElementById("text");

getFild.addEventListener("click", () => {
	 count = text.innerHTML;
	 count++;

	 localStorage.setItem("setCount", count);
	 text.innerHTML = count;
});
 let setCount = localStorage.getItem("setCount");
 if(!!setCount){
 text.innerHTML = setCount;
}