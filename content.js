
let baseUrl="https://www.youtube.com/channel/UCrFf5dtMe6M1XJHqbKJ4X6Q";
let myURL = baseUrl;
console.log("my URL=>"+ myURL);
let channelName ="";
let mainChannelName ="";
	

try {
	 channelName =document.evaluate('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[9]/div[2]/ytd-video-secondary-info-renderer/div/div/ytd-video-owner-renderer/div[1]/ytd-channel-name/div/div/yt-formatted-string/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	 mainChannelName = document.evaluate('/html/body/ytd-app/div/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string',document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
} catch (error) {
	console.log(error)
}
if (document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue == null) {
	window.location.replace(baseUrl); 
}
else
{ 
	console.log( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text );
}
setInterval(function(){ 
	channelName =document.evaluate('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[9]/div[2]/ytd-video-secondary-info-renderer/div/div/ytd-video-owner-renderer/div[1]/ytd-channel-name/div/div/yt-formatted-string/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    mainChannelName = document.evaluate('/html/body/ytd-app/div/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string',document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	try {
		 
		 channelName=document.evaluate('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[9]/div[2]/ytd-video-secondary-info-renderer/div/div/ytd-video-owner-renderer/div[1]/ytd-channel-name/div/div/yt-formatted-string/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		 mainChannelName =document.evaluate('/html/body/ytd-app/div/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string',document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue ;
		
	} catch (error) {
		
	}

	//let href =document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.href;
 

	if ( (channelName.outerText == "TRT Çocuk" || channelName.textContent == null )&& ( mainChannelName.outerText == "TRT Çocuk" || mainChannelName.textContent =='<yt-formatted-string id="text" title="" class="style-scope ytd-channel-name">TRT Çocuk</yt-formatted-string>')) {

		 //doSomething
	}
	else
	{   
		console.log("Kanal Değişti");
		window.location.replace(baseUrl);
	//   if(document.evaluate('//img[contains(@src, "https://yt3.ggpht.com/ytc/AAUvwniKvLWthPa5o1TYobGTsmNZI-qKHIJy4zyq382n_A=s176-c-k-c0xffffffff-no-rj-mo")]', document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue!=null){
		 
	// 	if (   document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text == "TRT Çocuk" ) {
			 
	// 			console.log(document.URL);
	// 		if ( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.text == "TRT Çocuk" )
	// 		{ 
	// 		    console.log( document.evaluate('//img[contains(@src, "https://yt3.ggpht.com/ytc/AAUvwniKvLWthPa5o1TYobGTsmNZI-qKHIJy4zyq382n_A=s176-c-k-c0xffffffff-no-rj-mo")]', document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);
	// 			console.log(document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string").text);
	// 		} 
	// 		else{
	// 			console.log( document.evaluate('//*[@id="text"]/a', document, null, XPathResult.arguments, null).singleNodeValue.text ); 
	// 			console.log("URL has changed"); 
	// 			window.location.replace(baseUrl);
	// 		}
	// 	}
	// 	else
	// 	{		
	// 			console.log("!TRT Çocuk");
	// 		if (window.location!="https://www.youtube.com/channel/UCrFf5dtMe6M1XJHqbKJ4X6Q?name:TRT Çocuk") {
	// 			console.log("redirect");
	// 			window.location.replace(baseUrl);
	// 		}
	// 	}
	// }
	// else {
	// 	window.location.replace(baseUrl);
	// }
	} 
 }, 3000);

