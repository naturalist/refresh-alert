
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.match(/^http:\/\/localhost:9002/)) {
        chrome.notifications.create("", {
            title: "Page Reloaded", 
            message: `The admin page at ${tab.url} has been reloaded`,
            iconUrl: "refresh.png",
            type: "basic"
        })
    }
})
