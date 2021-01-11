var config = {
  mode: "direct",
  rules: {
    singleProxy: {
      scheme: "http",
      host: "127.0.0.1",
      port: 8080
    },
  }
};

chrome.proxy.settings.set({
    value: config,
    scope: 'regular'
  },
  function () {});
 
// sets limit to given minute. (but in miliseconds)
function limitUsage(limitInMiliseconds = Infinity) {

  if (limitInMiliseconds === Infinity) {
    timeout = setTimeout(() => {
      console.log('No proxy enabled')
      config.mode = "direct";
      chrome.proxy.settings.set({
          value: config,
          scope: 'regular'
        },
        function () {}
      );
    }, 0) // if limit not set, dont do anything
    return;
  }
  timeout = setTimeout(() => {
    console.log('Started proxy after : '+ limitInMiliseconds)
    config.mode = "fixed_servers"
    chrome.proxy.settings.set({
        value: config,
        scope: 'regular'
      },
      function () {}
    );

  }, limitInMiliseconds) 
}
 
chrome.storage.sync.get(['limitInMiliseconds'], (results) => {
  limitUsage(results.limit)
})

chrome.runtime.onMessage.addListener(
  (req, sender, sendResponse) => {
    if(req.limitInMiliseconds == null) req.limitInMiliseconds = Infinity
    if (req.reason == "new_limit") {
      console.log('new limit is' + req.limitInMiliseconds);
      
      clearTimeout(timeout);
      limitUsage(req.limitInMiliseconds)
    }
    sendResponse({
      ok: 'ok'
    })
  }
)