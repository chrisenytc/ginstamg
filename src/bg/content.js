/*
 * ginstamg
 * https://github.com/chrisenytc/ginstamg
 *
 * Copyright (c) 2015, Christopher EnyTC
 */

chrome.runtime.onMessage.addListener(function(message, sender, callback) {
	if (message === 'getInstagramSource') {
		//Send photo link
		getContentByMetaTagName('og:image', callback)
		return true
	}
});
