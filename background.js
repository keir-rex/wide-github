chrome.extension.onMessage.addListener(function(message, sender) {
    if (message && message.type === 'showPageAction') {
        var tab = sender.tab;
        chrome.pageAction.show(tab.id);
        chrome.pageAction.setTitle({
            tabId: tab.id,
            title: 'url=' + tab.url
        });
    }
});