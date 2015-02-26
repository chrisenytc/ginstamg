/*
 * ginstamg
 * https://github.com/chrisenytc/ginstamg
 *
 * Copyright (c) 2015, Christopher EnyTC
 */

'use strict';

document.title = chrome.i18n.getMessage('options_title');
if (document.getElementById('i18n-copyright-year')) {
    document.getElementById('i18n-copyright-year').innerHTML = 'Copyright &copy; ' + new Date().getFullYear();
}

//setMessage

function setMessage(id, key, data) {
    if (document.getElementById('i18n-' + id)) {
        document.getElementById('i18n-' + id).innerHTML = chrome.i18n.getMessage(key, data);
    }
}

function setPlaceholder(name, key, data) {
    if (document.getElementsByName(name)[0]) {
        document.getElementsByName(name)[0].placeholder = chrome.i18n.getMessage(key, data);
    }
}

//Translations

setMessage('app-title', 'app_title');

setMessage('app-logo', 'app_title');

setMessage('about', 'about');

setMessage('installed', 'installed');
