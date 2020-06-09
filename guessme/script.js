let words=["REACTJS", "C++", "SWIFT", "ANGULAR", "PYTHON", "HTML", "CSS", "BOOTSTRAP", "JQUERY", "JAVASCRIPT", "JAVA", "NODEJS", "ORACLE", "MONGODB", "EXPRESSJS", "SQL"]
let score=document.getElementById("scoreupdate")
let startbtn=document.querySelector(".startbtn")
let displayword=document.querySelector(".word")
let userinput = document.querySelector(".userinput")
let submitbtn=document.querySelector(".submit")
let newWord="";
let scrambleWord="";
let scoree=0;


// Take an array of correct word and returns an array of scramble word 👇👇
	
	const scramble=(arr)=>{
		for(let i=arr.length-1;i>0;i--){
			let temp=arr[i];
			let j= Math.floor(Math.random()*(i+1))
			arr[i]=arr[j]
			arr[j]= temp
		}
			return arr


	}

	// Remove any other element present on the screen and load the game canvas 👇👇

	const contentDisplay=()=>{
		document.querySelector(".start").style.display="none"
		document.querySelector(".content").style.display="block"
	}

// Load new words into the canvas

	const loadword=()=>{
	contentDisplay();
	let random = Math.floor(Math.random()*words.length)	
	newWord= words[random]
	scrambleWord = scramble(newWord.split(""));
	displayword.innerHTML=scrambleWord.join("");
	

	}

// Converts the input value to uppercase so that we can easily match the word with our array list 👇👇

userinput.addEventListener("input",()=>{
	let caps=userinput.value.toUpperCase()
	userinput.value=caps;
})
startbtn.addEventListener("click", loadword)


// When User Clicks On Button 👇👇

submitbtn.addEventListener("click", ()=>{

// Display "Input Empty" If the input field is empty 👇👇

	if(userinput.value==""){
		displayword.innerHTML="Input Empty"
	setTimeout(loadword, 1000);
	}

// Display "correct" if the word gets matched  👇👇

else if(userinput.value===newWord){
	displayword.innerHTML="Correct"
	setTimeout(loadword, 1000);
	scoree++ //Increases the score by one if input is correct
	score.innerHTML=scoree;
	userinput.value=""
}

// Display "Incorrect" if the entered word is incorrect 👇👇

else{
	displayword.innerHTML="InCorrect"
	setTimeout(loadword, 1000);


	userinput.value=""
}

})



