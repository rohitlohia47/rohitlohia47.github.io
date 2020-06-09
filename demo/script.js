let btn=document.querySelector('.open');
btn.addEventListener('click', trans);

function trans(){
	document.querySelector('nav-list').classList.add('active');
}