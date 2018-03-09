
var enabled = true
var pattern = 'http://localhost:9002'

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (enabled && changeInfo.status === "complete" && tab.url.match(new RegExp(pattern))) {
        chrome.notifications.create("", {
            title: "Page Reloaded", 
            message: `The page at ${tab.url} has been reloaded`,
            iconUrl: "refresh.png",
            type: "basic"
        })
    }
})
