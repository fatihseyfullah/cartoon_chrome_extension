'use strict';
// var limitMinutes = Infinity;
var form = document.getElementById('block-form');


// save given limit in local storage
chrome.storage.sync.get(['limitInMiliseconds'], (results) => {
    if (results.limitInMiliseconds != undefined && results.limitInMiliseconds != null) {
        document.getElementById('block-after').value = results.limitInMiliseconds / 60 / 1000
    }
});


// sets back to infity if you dont want to use it anymore
document.getElementById('reset-btn').addEventListener('click', (event) => {
    setNewLimit(Infinity)
})

form.addEventListener('submit', (event) => {
    event.preventDefault(); // to prevent submit event to go to popup.html?limit=x
    setNewLimit(document.getElementById('block-after').value * 60 * 1000)

})


function setNewLimit(limitInMiliseconds){
    console.log('new limit in popup '+ limitInMiliseconds);
    
    chrome.storage.sync.set({
        'limitInMiliseconds': limitInMiliseconds
    }, function(){

        // send message to background.js, this is how we pass data in extensions
        chrome.runtime.sendMessage({
            reason: "new_limit",
            limitInMiliseconds
        }, (response) => {
            console.log(response);
        })
    })
}
