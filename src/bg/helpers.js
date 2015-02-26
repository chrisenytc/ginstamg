/*
 * ginstamg
 * https://github.com/chrisenytc/ginstamg
 *
 * Copyright (c) 2015, Christopher EnyTC
 */

'use strict';

function getContentByMetaTagName(c) {
    for (var b = document.getElementsByTagName("meta"), a = 0; a < b.length; a++) {
        if (c == b[a].name || c == b[a].getAttribute("property")) {
            return b[a].content;
        }
    }
    return false;
}
