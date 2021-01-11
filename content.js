
let baseUrl="https://www.youtube.com/channel/UCrFf5dtMe6M1XJHqbKJ4X6Q";

if (document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue == null) {
	console.log ("redirect"); 
	window.location.replace(baseUrl); 
}
else
{ 
	console.log( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text );
}
let myURL = baseUrl;
console.log("my URL=>"+ myURL);
setInterval(function(){ 

if (document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue == null  ) {
	console.log ("redirect"); 
	console.log ("2"); 
}
else
{   
	  if(document.evaluate('//img[contains(@src, "https://yt3.ggpht.com/ytc/AAUvwniKvLWthPa5o1TYobGTsmNZI-qKHIJy4zyq382n_A=s176-c-k-c0xffffffff-no-rj-mo")]', document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue!=null){
		 
		if (   document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text == "TRT Çocuk" ) {
			 
				console.log(document.URL);
			if ( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text == "TRT Çocuk" )
			{ 
			    console.log( document.evaluate('//img[contains(@src, "https://yt3.ggpht.com/ytc/AAUvwniKvLWthPa5o1TYobGTsmNZI-qKHIJy4zyq382n_A=s176-c-k-c0xffffffff-no-rj-mo")]', document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);
				console.log(document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string").text);
			} 
			else{
				console.log( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.arguments, null).singleNodeValue.text ); 
				console.log("URL has changed"); 
				window.location.replace(baseUrl);
			}
		}
		else
		{		
				console.log("!TRT Çocuk");
			if (window.location!="https://www.youtube.com/channel/UCrFf5dtMe6M1XJHqbKJ4X6Q?name:TRT Çocuk") {
				console.log("redirect");
				window.location.replace(baseUrl);
			}
		}
	}
	else {
		window.location.replace(baseUrl);
	}
	} 
 }, 3000);

