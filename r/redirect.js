"use strict";
function htmlEncode(s) {
    return (s != null) ? s.replace("&", "&amp;").replace("<", "&lt;") : null;
}
function writeline(s, tag) {
    if (s === void 0) { s = ""; }
    if (tag === void 0) { tag = "div"; }
    if (s != null) {
        var o = document.createElement(tag);
        o.innerHTML = (s.length > 0) ? htmlEncode(s) : "&nbsp;";
        output.appendChild(o);
    }
}
function debugWriteline(s, tag) {
    if (s === void 0) { s = ""; }
    if (tag === void 0) { tag = "div"; }
    if (s != null) {
        document.write("<" + tag + ">");
        document.write((s.length > 0) ? htmlEncode(s) : "&nbsp;");
        document.write("</" + tag + ">");
    }
}
function requestSearch(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ""; }
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.top.location.search);
    if (qs == null)
        return defaultValue;
    else
        return qs[1];
}
function requestHashPath(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ""; }
    var h = window.top.location.hash;
    if (h) {
        if (h.length > 1) {
            if (h[0] == '#') {
                var index = h.indexOf("/", 2);
                if (index > 1) {
                    var code = h.substring(1, index);
                    if (code == key) {
                        return h.substring(index + 1);
                    }
                }
            }
        }
    }
    return defaultValue;
}
function getQueryVariable(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ""; }
    var query = window.top.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == key) {
            return decodeURIComponent(pair[1]);
        }
    }
    return defaultValue;
}
function processRedirect() {
    var lma = requestHashPath("lma", null) || requestSearch("lma", null);
    if (lma != null) {
        app = "Llama Music";
        // uggh, the tiwahu-lma:open:// thing "fixes" a lower casing that Windows 10 seems to do, since the id looks like a domain name.
        link = "tiwahu-lma://open/" + ((lma != null) ? lma : "");
        // app = "Live Music Archive : Internet Archive";
        // var parts = lma.split("/", 2);
        // link = "https://archive.org/details/" + parts[0];
        // //link = "https://archive.org/embed/" + parts[0] + "&playlist=1";
    }
    else {
        app = "Tiwahu Software LLC";
        link = "https://www.tiwahu.com/";
    }
    var div = document.createElement("div");
    div.setAttribute("style", "font-size:x-small;color:#808080;");
    if (app != null) {
        var h1 = document.createElement("h1");
        h1.innerText = app;
        div.appendChild(h1);
    }
    if (link != null) {
        var message = "Back to the app"; // : "Redirect";
        var h2 = document.createElement("h2");
        var a = document.createElement("a");
        a.setAttribute("style", "text-decoration:none;");
        a.setAttribute("href", link);
        a.innerText = message;
        h2.appendChild(a);
        div.appendChild(h2);
    }
    if (debug) {
        writeline(ua);
        writeline();
        writeline(window.top.location.toString());
        writeline();
        writeline(lma);
        writeline();
        writeline(link);
    }
    output.appendChild(div);
    if (link != null) {
        if (!debug) {
            if (!redirected) {
                redirected = true;
                window.top.location.replace(link);
            }
        }
    }
}
var debug = (requestSearch("d", null) != null);
var ua = ((navigator) && (navigator.userAgent)) ? navigator.userAgent : "";
var link = null;
var app = null;
var redirected = false;
var output = document.getElementById("console") || document.body;
window.onload = function () {
    processRedirect();
};
