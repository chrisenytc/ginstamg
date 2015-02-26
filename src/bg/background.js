/*
 * ginstamg
 * https://github.com/chrisenytc/ginstamg
 *
 * Copyright (c) 2015, Christopher EnyTC
 */


chrome.runtime.onInstalled.addListener(function(details) {
    //Redirect
    chrome.tabs.create({
        url: chrome.extension.getURL('options/installed.html')
    });
});

chrome.browserAction.onClicked.addListener(function(tab) {
    var regex = /^https:\/\/instagram.com\/p\//;
    //Check if this url is a valid instagram url
    if (regex.test(tab.url)) {
        //Get photo link
        chrome.tabs.sendMessage(tab.id, 'getSource', function(photolink) {
            if (photolink && photolink !== '') {
                //Open photo link
                chrome.tabs.update(tab.id, {
                    url: photolink
                });
            } else {
                chrome.tabs.duplicate(tab.id, function(dTab) {
                    chrome.browserAction.setBadgeText({
                        text: 'click',
                        tabId: dTab.id
                    });
                });
            }
        });
    }
});
