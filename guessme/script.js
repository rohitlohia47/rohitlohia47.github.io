let words=["REACTJS", "C++", "SWIFT", "ANGULAR", "PYTHON", "HTML", "CSS", "BOOTSTRAP", "JQUERY", "JAVASCRIPT", "JAVA"]
let score=document.getElementById("scoreupdate")
let startbtn=document.querySelector(".startbtn")
let displayword=document.querySelector(".word")
let userinput = document.querySelector(".userinput")
let submitbtn=document.querySelector(".submit")
let newWord="";
let scrambleWord="";
let scoree=0;

	
	const scramble=(arr)=>{
		for(let i=arr.length-1;i>0;i--){
			let temp=arr[i];
			let j= Math.floor(Math.random()*(i+1))
			arr[i]=arr[j]
			arr[j]= temp
		}
			return arr


	}



	



	const contentDisplay=()=>{
		document.querySelector(".start").style.display="none"
		document.querySelector(".content").style.display="block"
	}

	const loadword=()=>{
	contentDisplay();
	let random = Math.floor(Math.random()*words.length)	
	newWord= words[random]
	scrambleWord = scramble(newWord.split(""));
	displayword.innerHTML=scrambleWord.join("");
	// console.log(scrambleWord)

	}

userinput.addEventListener("input",()=>{
	let caps=userinput.value.toUpperCase()
	userinput.value=caps;
})
startbtn.addEventListener("click", loadword)
submitbtn.addEventListener("click", ()=>{
if(userinput.value===newWord){
	displayword.innerHTML="Correct"
	setTimeout(loadword, 1000);
	scoree++
	score.innerHTML=scoree;
	userinput.value=""
}
else{
	displayword.innerHTML="InCorrect"
	setTimeout(loadword, 1000);


	userinput.value=""
}

})



