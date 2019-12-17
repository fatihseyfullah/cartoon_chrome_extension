
if (document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue == null) {
	console.log ("redirect");

			window.location.replace("https://www.youtube.com/user/TRTCOCUKKANALI");
}
else
{
	console.log( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text );
}

let myURL = document.URL;
console.log("my URL=>"+ myURL);

setInterval(function(){ 
if (document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue == null) {
	console.log ("redirect");
}
else
{
	console.log( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text );
	if (   document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text == "TRT Çocuk") {
			console.log("OK");
		if (myURL !== document.URL )
		{
			console.log("URL has changed");
//location.reload();
			window.location.replace(document.URL);
		}
	}
	else
	{
		if (document.readyState === 'complete') {
console.log("redirect");
			window.location.replace("https://www.youtube.com/user/TRTCOCUKKANALI");}
		
	}
}
 }, 3000);

