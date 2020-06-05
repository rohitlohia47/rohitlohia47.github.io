
let countries=[];
let mainobj;
let search=document.querySelector(".search")
let suggestionList=document.getElementById("suggestion-list")
let btn=document.getElementById('btn')
btn.addEventListener('click', ()=>{
	if (countries.includes(search.value)==true){
		showdata()
	}
	else{
		alert("Enter A Valid country")
	}
})



search.addEventListener("input", showcountry)

function showloader(){
	document.querySelector(".spin").style.display = 'block';
	document.querySelector(".blur").style.display = 'block'

}
function hideloader(){
	document.querySelector(".spin").style.display = 'none';
	document.querySelector(".blur").style.display = 'none'

}

function showdata(){
	showloader()
	setTimeout(()=>{
		document.querySelector(".cname").innerHTML=search.value;
	let index = countries.indexOf(search.value)
	document.getElementById("tconfirmed").innerHTML=mainobj[index].TotalConfirmed.toLocaleString();
	document.getElementById("trecovered").innerHTML=mainobj[index].TotalRecovered.toLocaleString();
	document.getElementById("tdeaths").innerHTML=mainobj[index].TotalDeaths.toLocaleString();
		hideloader()
	}, 1000)
	
}


// 👇👇👇 Function To Show Global Data By Default 👇👇👇
function showGlobalData(data){
	
	document.getElementById("tconfirmed").innerHTML=data.TotalConfirmed.toLocaleString();
	document.getElementById("trecovered").innerHTML=data.TotalRecovered.toLocaleString();
	document.getElementById("tdeaths").innerHTML=data.TotalDeaths.toLocaleString();


}

// 👇👇👇 Fetching Data From API 👇👇👇

fetch('https://api.covid19api.com/summary').then((dataa)=>{
	cdata= dataa.json()
	return cdata
}).then((cdata)=>{
	mainobj=cdata.Countries;
	let asd=cdata.Countries;
	
	for(let i=0;i<asd.length;i++){
		let cname=asd[i].Country;
		countries.push(cname)
		
	}
	console.log(countries[0])

	let globalData=cdata.Global
	showGlobalData(globalData);
}).catch((error)=>{
	console.log(error)
});



// 👇👇👇 Show Recommendation Below The Search Bar 👇👇👇

function showcountry(){
	let input=search.value;
	suggestionList.innerHTML='';
	var searchCountry=countries.filter((country)=>{
	return country.toLowerCase().startsWith(input)
	

})
	if(search.value===""){
	suggestionList.innerHTML="";
}
else{
	searchCountry.forEach( function(element) {
		let ele = document.createElement("li")
		ele.setAttribute('id', "list")
		ele.innerHTML=element;
		suggestionList.appendChild(ele)

		// 👇👇👇 Copy Search Suggestions And Put It Inside SearchBar When User Clicks It 👇👇👇

		let listclick=document.getElementById('list');
		listclick.addEventListener('click', ()=>{
			search.value=listclick.innerHTML;
			suggestionList.innerHTML="";
		})
	});
}

}





