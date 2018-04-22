"use strict";
function htmlEncode(s) {
    return (s != null) ? s.replace("&", "&amp;").replace("<", "&lt;") : null;
}

function writeline(s, tag) {
    if (typeof s === "undefined") { s = ""; }
    if (typeof tag === "undefined") { tag = "div"; }
    if (s != null) {
        var o = document.createElement(tag);
        o.innerHTML = (s.length > 0) ? htmlEncode(s) : "&nbsp;";
        output.appendChild(o);
    }
}

function debugWriteline(s, tag) {
    if (typeof s === "undefined") { s = ""; }
    if (typeof tag === "undefined") { tag = "div"; }
    if (s != null) {
        document.write("<" + tag + ">");
        document.write((s.length > 0) ? htmlEncode(s) : "&nbsp;");
        document.write("</" + tag + ">");
    }
}

function requestSearch(key, defaultValue) {
    if (typeof defaultValue === "undefined") { defaultValue = ""; }
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.top.location.search);
    if (qs == null)
        return defaultValue;
    else
        return qs[1];
}

function requestHashPath(key, defaultValue) {
    if (typeof defaultValue === "undefined") { defaultValue = ""; }
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
    if (typeof defaultValue === "undefined") { defaultValue = ""; }
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
    var lma = requestHashPath("lma", null);
    if (lma == null) {
        lma = requestSearch("lma", null);
    }

    if (lma != null) {
        if (isWP) {
            app = "Live Music Access";
            link = "tiwahu-lma://" + ((lma != null) ? lma : "");
        } else {
            app = "Live Music Archive : Internet Archive";
            var parts = lma.split("/", 2);
            link = "http://archive.org/details/" + parts[0];
            //link = "http://archive.org/embed/" + parts[0] + "&playlist=1";
        }
    } else if ((window.top.location.hash == "#lma") || (window.top.location.search == "?lma")) {
        app = "Live Music Access | Windows Phone Store";
        link = "http://windowsphone.com/s?appid=411b8788-27a3-409a-a584-f381f4865e21";
    } else {
        app = "Tiwahu Software LLC";
        link = "http://www.tiwahu.com/";
    }

    var div = document.createElement("div");
    div.setAttribute("style", "font-size:x-small;color:#808080;");

    if (app != null) {
        var h1 = document.createElement("h1");
        h1.innerText = app;
        div.appendChild(h1);
    }

    if (link != null) {
        var message = (isWP) ? "Back to the app" : "Redirect";

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
var isWP = ((ua.indexOf("Windows Phone 8.") >= 0) || (ua.indexOf("Windows Phone 10.") >= 0));
var link = null;
var app = null;
var redirected = false;
var output = document.getElementById("console") || document.body;

window.onload = function () {
    processRedirect();
};
