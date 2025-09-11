function handleFlipbookClick() {
    const isMobile = window.innerWidth < 768;
    const modal = document.getElementById('flipbookModal');
	const iframe = document.getElementById('flipbookIframe');
	const flipbookUrl = "https://online.fliphtml5.com/qmuk/zvzk";

    if (isMobile) {
        window.open(flipbookUrl, '_blank');
    } else {
        iframe.src = flipbookUrl;
        modal.style.display = 'flex';
    }
}

onload = function() {
    const navCloseBtn = document.getElementById('nav-close');
    navCloseBtn.addEventListener('click', function(){
        const nav = document.getElementById("topnav");
		nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
    });

    const modal = document.getElementById('flipbookModal');
    const flipOpenBtn = document.getElementById('flip-open');
    flipOpenBtn.addEventListener('click', handleFlipbookClick)
	
    const flipCloseBtn = document.getElementById('flip-close')
	flipCloseBtn.addEventListener('click', function(){
        modal.style.display = 'none';
    });

	document.addEventListener('keydown', function(event){
		if (event.key === "Escape") {
            console.log("hi")
			modal.style.display = 'none';
		}
	});
	
};