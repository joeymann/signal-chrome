chrome.tabs.onUpdated.addListener(function (tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentTab = tabs[0]
    });
});