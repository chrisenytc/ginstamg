/*
 * ginstamg
 * https://github.com/chrisenytc/ginstamg
 *
 * Copyright (c) 2015, Christopher EnyTC
 */

'use strict';

function getContentByMetaTagName(c, callback) {
	for (var b = document.getElementsByTagName("meta"), a = 0; a < b.length; a++) {
		if (c == b[a].getAttribute("property")) {
			return callback(b[a].getAttribute("content"));
		}
	}
}
