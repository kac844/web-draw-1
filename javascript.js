var flag;
var count = 0;
var img = ["media/background.jpg","media/background2.jpg","media/background.jfif", "media/background3.jpg"];



function start(){
	if (count == img.length){
		count = 0;
	}

	document.getElementById('image').src = img[count];
	
	
	count++;

	flag = setTimeout(start, 2200);

	
}

function stop (){
	clearTimeout(flag);
}

