/* 

Using the form displayed in index.html, create the following functionality using JavaScript. 

If the user tries to submit the form without entering any info, display an error message on the page that tells them all info is required. 
When users submit their first name and favourite colour, display a customized welcome message on the page in a new H1 that includes their name. Change the background colour of the page to their favourite colour. 

*/



//let submitClick = document.getElementsByClassName('submit');

function request(){
		let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';
		let request = new XMLHttpRequest(); 
		request.open('GET', requestURL); 
		request.responseType = 'json'; 
		request.send();
		
		request.onload = function() {
			let catsList = request.response; 
			console.log(catsList); 
			catsInfo(catsList); 
			
		}

}

		function catsInfo(jsonObj) {
			let catsInfo = jsonObj['cats']; 
			for(let i = 0; i < catsInfo.length; i++) {
				let name = document.createElement('h1');
				let species = document.createElement('h2');
				let favFoods = document.createElement('h2');
				let age = document.createElement('h2');
				let section = document.querySelector('section');
				let article = document.createElement('article');
				name.textContent = catsInfo[i].name;
				species.textContent = catsInfo[i].species;
				favFoods.textContent = catsInfo[i].faveFoods;
				age.textContent = catsInfo[i].age;


				article.appendChild(name);
				article.appendChild(species); 
				article.appendChild(favFoods); 
				article.appendChild(age); 
				section.appendChild(article); 
			}
		}