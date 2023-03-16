const url = "https://jsonplaceholder.typicode.com/posts/1";
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");
async function fetchData(url){
	const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
	var data = await response.json();
	outputDiv.innerHTML = data.title;
}
button.addEventListener("click",fetchData);

//your JS code here. If required.
