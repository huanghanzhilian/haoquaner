/*************************************************************************
 *
 * Fenhongxiang CONFIDENTIAL
 * __________________
 *
 *  [2015] - [2017] Shenzhen Fenhongxiang information technology Co., Ltd.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Fenhongxiang and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Fenhongxiang
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Fenhongxiang.
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.KMP = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        if ("undefined" == typeof document) return t;
        e = e || "";
        var n = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
        return o.type = "text/css", n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)), t
    }

    function t(e) {
        function t(e) {
            var t, n, o, i, r, a, s, l = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
            for (a = e.length, r = 0, s = ""; r < a;) {
                do {
                    t = l[255 & e.charCodeAt(r++)]
                } while (r < a && -1 == t);
                if (-1 == t) break;
                do {
                    n = l[255 & e.charCodeAt(r++)]
                } while (r < a && -1 == n);
                if (-1 === n) break;
                s += String.fromCharCode(t << 2 | (48 & n) >> 4);
                do {
                    if (61 == (o = 255 & e.charCodeAt(r++))) return s;
                    o = l[o]
                } while (r < a && -1 == o);
                if (-1 == o) break;
                s += String.fromCharCode((15 & n) << 4 | (60 & o) >> 2);
                do {
                    if (61 == (i = 255 & e.charCodeAt(r++))) return s;
                    i = l[i]
                } while (r < a && -1 == i);
                if (-1 == i) break;
                s += String.fromCharCode((3 & o) << 6 | i)
            }
            return s
        }
        var n = {
                type: "native",
                src: "",
                module: "",
                mobile: !1,
                featureEnabled: !1
            },
            o = function() {
                return {
                    canplayNative: function(e) {
                        if (e) {
                            var t = document.createElement("video");
                            return "" !== t.canPlayType(e) && "no" !== t.canPlayType(e)
                        }
                        return !1
                    },
                    supportMSE: function() {
                        return Boolean(window.MediaSource)
                    }(),
                    supportH264: function() {
                        return Boolean(window.MediaSource) && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                    }(),
                    supportWebRTC: function() {
                        var e = !1;
                        return ["RTCPeerConnection", "webkitRTCPeerConnection", "mozRTCPeerConnection", "RTCIceGatherer"].forEach(function(t) {
                            e || t in window && (e = !0)
                        }), e
                    }(),
                    mobile: function(e) {
                        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)))
                    }(navigator.userAgent || navigator.vendor || window.opera)
                }
            }();
        if (n.mobile = o.mobile, o.canplayNative(e)) n.type = "native";
        else if (e) switch (e.toLocaleLowerCase()) {
            case j.M3U8.toLocaleLowerCase():
                n.type = "mse", n.src = t(ce), n.module = t(de), n.featureEnabled = o.supportH264;
                break;
            case j.FLV.toLocaleLowerCase():
                n.type = "mse", n.src = t(ue), n.module = t(pe), n.featureEnabled = o.supportH264;
                break;
            case j.TORRENT.toLocaleLowerCase():
                n.type = "mse", n.src = t(fe), n.module = t(me), n.featureEnabled = o.supportWebRTC;
                break;
            default:
                n.type = "mse", n.featureEnabled = !1
        } else n.type = "empty", n.featureEnabled = !1;
        return n
    }

    function n(e) {
        var t = void 0;
        switch (e) {
            case "red":
                t = Q.RED;
                break;
            case "green":
                t = Q.GREEN;
                break;
            case "lightBlue":
                t = Q.LIGHT_BLUE;
                break;
            case "darkBlue":
                t = Q.DARK_BLUE;
                break;
            case "yellow":
                t = Q.YELLOW;
                break;
            default:
                t = Q.DEFAULT
        }
        return t
    }

    function o() {
        return function(e) {
            return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)))
        }(navigator.userAgent || navigator.vendor || window.opera)
    }

    function i(e) {
        var t = Math.floor(e);
        if (t < 3600) {
            var n = Math.floor(t / 60),
                o = Math.floor(t % 60);
            return (n < 10 ? "0" + n : n) + ":" + (o < 10 ? "0" + o : o)
        }
        var i = Math.floor(t / 3600),
            r = Math.floor((t - 3600 * i) / 60),
            a = Math.floor((t - 3600 * i) % 60);
        return (i < 10 ? "0" + i : i) + ":" + (r < 10 ? "0" + r : r) + ":" + (a < 10 ? "0" + a : a)
    }

    function r(e) {
        try {
            var t = window[e],
                n = "__storage_test__";
            return t.setItem(n, n), t.removeItem(n), !0
        } catch (e) {
            return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== t.length
        }
    }

    function a(e) {
        function t(e, t, n, o) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | n) + (0 | o) / 1e3
        }
        var n = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return n ? n[3] ? t(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? t(n[1], n[2], 0, n[4]) : t(0, n[1], n[2], n[4]) : null
    }

    function s(e, t, n, o) {
        var i = o ? e.split(o) : [e];
        for (var r in i)
            if ("string" == typeof i[r]) {
                var a = i[r].split(n);
                2 === a.length && t(a[0], a[1])
            }
    }

    function l(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function c(e) {
        if (!((e = String(e)).length > 100)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
                var n = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * Pe;
                    case "days":
                    case "day":
                    case "d":
                        return n * Ne;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * Ie;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * Me;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * Re;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                }
            }
        }
    }

    function d(e) {
        return e >= Ne ? Math.round(e / Ne) + "d" : e >= Ie ? Math.round(e / Ie) + "h" : e >= Me ? Math.round(e / Me) + "m" : e >= Re ? Math.round(e / Re) + "s" : e + "ms"
    }

    function u(e) {
        return p(e, Ne, "day") || p(e, Ie, "hour") || p(e, Me, "minute") || p(e, Re, "second") || e + " ms"
    }

    function p(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }

    function m(e, t) {
        var n = e.className.split(" ");
        n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
    }

    function f(e, t) {
        var n = e.className.split(" "),
            o = n.indexOf(t);
        o >= 0 && n.splice(o, 1), e.className = n.join(" ")
    }

    function h(e, t) {
        return window.getComputedStyle(e)[t]
    }

    function g(e, t, n) {
        return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
    }

    function b(e, t) {
        for (var n in t) {
            var o = t[n];
            "number" == typeof o && (o = o.toString() + "px"), e.style[n] = o
        }
        return e
    }

    function v(e) {
        function t() {
            Ue.add(e, "ps--focus")
        }

        function n() {
            Ue.remove(e, "ps--focus")
        }
        var o = this;
        o.settings = Ge.clone(Ve), o.containerWidth = null, o.containerHeight = null, o.contentWidth = null, o.contentHeight = null, o.isRtl = "rtl" === ze.css(e, "direction"), o.isNegativeScroll = function() {
            var t = e.scrollLeft,
                n = null;
            return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
        }(), o.negativeScrollAdjustment = o.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.event = new Ze, o.ownerDocument = e.ownerDocument || document, o.scrollbarXRail = ze.appendTo(ze.e("div", "ps__scrollbar-x-rail"), e), o.scrollbarX = ze.appendTo(ze.e("div", "ps__scrollbar-x"), o.scrollbarXRail), o.scrollbarX.setAttribute("tabindex", 0), o.event.bind(o.scrollbarX, "focus", t), o.event.bind(o.scrollbarX, "blur", n), o.scrollbarXActive = null, o.scrollbarXWidth = null, o.scrollbarXLeft = null, o.scrollbarXBottom = Ge.toInt(ze.css(o.scrollbarXRail, "bottom")), o.isScrollbarXUsingBottom = o.scrollbarXBottom === o.scrollbarXBottom, o.scrollbarXTop = o.isScrollbarXUsingBottom ? null : Ge.toInt(ze.css(o.scrollbarXRail, "top")), o.railBorderXWidth = Ge.toInt(ze.css(o.scrollbarXRail, "borderLeftWidth")) + Ge.toInt(ze.css(o.scrollbarXRail, "borderRightWidth")), ze.css(o.scrollbarXRail, "display", "block"), o.railXMarginWidth = Ge.toInt(ze.css(o.scrollbarXRail, "marginLeft")) + Ge.toInt(ze.css(o.scrollbarXRail, "marginRight")), ze.css(o.scrollbarXRail, "display", ""), o.railXWidth = null, o.railXRatio = null, o.scrollbarYRail = ze.appendTo(ze.e("div", "ps__scrollbar-y-rail"), e), o.scrollbarY = ze.appendTo(ze.e("div", "ps__scrollbar-y"), o.scrollbarYRail), o.scrollbarY.setAttribute("tabindex", 0), o.event.bind(o.scrollbarY, "focus", t), o.event.bind(o.scrollbarY, "blur", n), o.scrollbarYActive = null, o.scrollbarYHeight = null, o.scrollbarYTop = null, o.scrollbarYRight = Ge.toInt(ze.css(o.scrollbarYRail, "right")), o.isScrollbarYUsingRight = o.scrollbarYRight === o.scrollbarYRight, o.scrollbarYLeft = o.isScrollbarYUsingRight ? null : Ge.toInt(ze.css(o.scrollbarYRail, "left")), o.scrollbarYOuterWidth = o.isRtl ? Ge.outerWidth(o.scrollbarY) : null, o.railBorderYWidth = Ge.toInt(ze.css(o.scrollbarYRail, "borderTopWidth")) + Ge.toInt(ze.css(o.scrollbarYRail, "borderBottomWidth")), ze.css(o.scrollbarYRail, "display", "block"), o.railYMarginHeight = Ge.toInt(ze.css(o.scrollbarYRail, "marginTop")) + Ge.toInt(ze.css(o.scrollbarYRail, "marginBottom")), ze.css(o.scrollbarYRail, "display", ""), o.railYHeight = null, o.railYRatio = null
    }

    function w(e) {
        return e.getAttribute("data-ps-id")
    }

    function k(e, t) {
        e.setAttribute("data-ps-id", t)
    }

    function y(e) {
        e.removeAttribute("data-ps-id")
    }

    function E(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
    }

    function x(e, t) {
        var n = {
            width: t.railXWidth
        };
        t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, ze.css(t.scrollbarXRail, n);
        var o = {
            top: e.scrollTop,
            height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? t.isRtl ? o.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : o.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? o.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : o.left = t.scrollbarYLeft + e.scrollLeft, ze.css(t.scrollbarYRail, o), ze.css(t.scrollbarX, {
            left: t.scrollbarXLeft,
            width: t.scrollbarXWidth - t.railBorderXWidth
        }), ze.css(t.scrollbarY, {
            top: t.scrollbarYTop,
            height: t.scrollbarYHeight - t.railBorderYWidth
        })
    }

    function L(e, t) {
        function n(e) {
            return e.getBoundingClientRect()
        }
        var o = function(e) {
            e.stopPropagation()
        };
        t.event.bind(t.scrollbarY, "click", o), t.event.bind(t.scrollbarYRail, "click", function(o) {
            var i = o.pageY - window.pageYOffset - n(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
            $e(e, "top", e.scrollTop + i * t.containerHeight), et(e), o.stopPropagation()
        }), t.event.bind(t.scrollbarX, "click", o), t.event.bind(t.scrollbarXRail, "click", function(o) {
            var i = o.pageX - window.pageXOffset - n(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
            $e(e, "left", e.scrollLeft + i * t.containerWidth), et(e), o.stopPropagation()
        })
    }

    function T(e, t) {
        function n(n) {
            var i = o + n * t.railXRatio,
                r = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
            t.scrollbarXLeft = i < 0 ? 0 : i > r ? r : i;
            var a = Ge.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
            $e(e, "left", a)
        }
        var o = null,
            i = null,
            r = function(t) {
                n(t.pageX - i), et(e), t.stopPropagation(), t.preventDefault()
            },
            a = function() {
                Ge.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", r)
            };
        t.event.bind(t.scrollbarX, "mousedown", function(n) {
            i = n.pageX, o = Ge.toInt(ze.css(t.scrollbarX, "left")) * t.railXRatio, Ge.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", r), t.event.once(t.ownerDocument, "mouseup", a), n.stopPropagation(), n.preventDefault()
        })
    }

    function A(e, t) {
        function n(n) {
            var i = o + n * t.railYRatio,
                r = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
            t.scrollbarYTop = i < 0 ? 0 : i > r ? r : i;
            var a = Ge.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
            $e(e, "top", a)
        }
        var o = null,
            i = null,
            r = function(t) {
                n(t.pageY - i), et(e), t.stopPropagation(), t.preventDefault()
            },
            a = function() {
                Ge.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", r)
            };
        t.event.bind(t.scrollbarY, "mousedown", function(n) {
            i = n.pageY, o = Ge.toInt(ze.css(t.scrollbarY, "top")) * t.railYRatio, Ge.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", r), t.event.once(t.ownerDocument, "mouseup", a), n.stopPropagation(), n.preventDefault()
        })
    }

    function C(e, t) {
        function n(n, o) {
            var i = e.scrollTop;
            if (0 === n) {
                if (!t.scrollbarYActive) return !1;
                if (0 === i && o > 0 || i >= t.contentHeight - t.containerHeight && o < 0) return !t.settings.wheelPropagation
            }
            var r = e.scrollLeft;
            if (0 === o) {
                if (!t.scrollbarXActive) return !1;
                if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
            }
            return !0
        }
        var o = !1;
        t.event.bind(e, "mouseenter", function() {
            o = !0
        }), t.event.bind(e, "mouseleave", function() {
            o = !1
        });
        var i = !1;
        t.event.bind(t.ownerDocument, "keydown", function(r) {
            if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented)) {
                var a = ze.matches(t.scrollbarX, ":focus") || ze.matches(t.scrollbarY, ":focus");
                if (o || a) {
                    var s = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                    if (s) {
                        if ("IFRAME" === s.tagName) s = s.contentDocument.activeElement;
                        else
                            for (; s.shadowRoot;) s = s.shadowRoot.activeElement;
                        if (Ge.isEditable(s)) return
                    }
                    var l = 0,
                        c = 0;
                    switch (r.which) {
                        case 37:
                            l = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                            break;
                        case 38:
                            c = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                            break;
                        case 39:
                            l = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                            break;
                        case 40:
                            c = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                            break;
                        case 33:
                            c = 90;
                            break;
                        case 32:
                            c = r.shiftKey ? 90 : -90;
                            break;
                        case 34:
                            c = -90;
                            break;
                        case 35:
                            c = r.ctrlKey ? -t.contentHeight : -t.containerHeight;
                            break;
                        case 36:
                            c = r.ctrlKey ? e.scrollTop : t.containerHeight;
                            break;
                        default:
                            return
                    }
                    $e(e, "top", e.scrollTop - c), $e(e, "left", e.scrollLeft + l), et(e), (i = n(l, c)) && r.preventDefault()
                }
            }
        })
    }

    function S(e, t) {
        function n(n, o) {
            var i = e.scrollTop;
            if (0 === n) {
                if (!t.scrollbarYActive) return !1;
                if (0 === i && o > 0 || i >= t.contentHeight - t.containerHeight && o < 0) return !t.settings.wheelPropagation
            }
            var r = e.scrollLeft;
            if (0 === o) {
                if (!t.scrollbarXActive) return !1;
                if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
            }
            return !0
        }

        function o(e) {
            var t = e.deltaX,
                n = -1 * e.deltaY;
            return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
        }

        function i(t, n) {
            var o = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
            if (o) {
                var i = window.getComputedStyle(o);
                if (![i.overflow, i.overflowX, i.overflowY].join("").match(/(scroll|auto)/)) return !1;
                var r = o.scrollHeight - o.clientHeight;
                if (r > 0 && !(0 === o.scrollTop && n > 0 || o.scrollTop === r && n < 0)) return !0;
                var a = o.scrollLeft - o.clientWidth;
                if (a > 0 && !(0 === o.scrollLeft && t < 0 || o.scrollLeft === a && t > 0)) return !0
            }
            return !1
        }

        function r(r) {
            var s = o(r),
                l = s[0],
                c = s[1];
            i(l, c) || (a = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (c ? $e(e, "top", e.scrollTop - c * t.settings.wheelSpeed) : $e(e, "top", e.scrollTop + l * t.settings.wheelSpeed), a = !0) : t.scrollbarXActive && !t.scrollbarYActive && (l ? $e(e, "left", e.scrollLeft + l * t.settings.wheelSpeed) : $e(e, "left", e.scrollLeft - c * t.settings.wheelSpeed), a = !0) : ($e(e, "top", e.scrollTop - c * t.settings.wheelSpeed), $e(e, "left", e.scrollLeft + l * t.settings.wheelSpeed)), et(e), (a = a || n(l, c)) && (r.stopPropagation(), r.preventDefault()))
        }
        var a = !1;
        void 0 !== window.onwheel ? t.event.bind(e, "wheel", r) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", r)
    }

    function _(e, t, n, o) {
        function i(n, o) {
            var i = e.scrollTop,
                r = e.scrollLeft,
                a = Math.abs(n),
                s = Math.abs(o);
            if (s > a) {
                if (o < 0 && i === t.contentHeight - t.containerHeight || o > 0 && 0 === i) return !t.settings.swipePropagation
            } else if (a > s && (n < 0 && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r)) return !t.settings.swipePropagation;
            return !0
        }

        function r(t, n) {
            $e(e, "top", e.scrollTop - n), $e(e, "left", e.scrollLeft - t), et(e)
        }

        function a() {
            b = !0
        }

        function s() {
            b = !1
        }

        function l(e) {
            return e.targetTouches ? e.targetTouches[0] : e
        }

        function c(e) {
            return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
        }

        function d(e) {
            if (c(e)) {
                v = !0;
                var t = l(e);
                m.pageX = t.pageX, m.pageY = t.pageY, f = (new Date).getTime(), null !== g && clearInterval(g), e.stopPropagation()
            }
        }

        function u(e) {
            if (!v && t.settings.swipePropagation && d(e), !b && v && c(e)) {
                var n = l(e),
                    o = {
                        pageX: n.pageX,
                        pageY: n.pageY
                    },
                    a = o.pageX - m.pageX,
                    s = o.pageY - m.pageY;
                r(a, s), m = o;
                var u = (new Date).getTime(),
                    p = u - f;
                p > 0 && (h.x = a / p, h.y = s / p, f = u), i(a, s) && (e.stopPropagation(), e.preventDefault())
            }
        }

        function p() {
            !b && v && (v = !1, t.settings.swipeEasing && (clearInterval(g), g = setInterval(function() {
                Qe.get(e) && (h.x || h.y) ? Math.abs(h.x) < .01 && Math.abs(h.y) < .01 ? clearInterval(g) : (r(30 * h.x, 30 * h.y), h.x *= .8, h.y *= .8) : clearInterval(g)
            }, 10)))
        }
        var m = {},
            f = 0,
            h = {},
            g = null,
            b = !1,
            v = !1;
        n ? (t.event.bind(window, "touchstart", a), t.event.bind(window, "touchend", s), t.event.bind(e, "touchstart", d), t.event.bind(e, "touchmove", u), t.event.bind(e, "touchend", p)) : o && (window.PointerEvent ? (t.event.bind(window, "pointerdown", a), t.event.bind(window, "pointerup", s), t.event.bind(e, "pointerdown", d), t.event.bind(e, "pointermove", u), t.event.bind(e, "pointerup", p)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", a), t.event.bind(window, "MSPointerUp", s), t.event.bind(e, "MSPointerDown", d), t.event.bind(e, "MSPointerMove", u), t.event.bind(e, "MSPointerUp", p)))
    }

    function R(e, t) {
        function n() {
            var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
            return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
        }

        function o() {
            r || (r = setInterval(function() {
                Qe.get(e) ? ($e(e, "top", e.scrollTop + a.top), $e(e, "left", e.scrollLeft + a.left), et(e)) : clearInterval(r)
            }, 50))
        }

        function i() {
            r && (clearInterval(r), r = null), Ge.stopScrolling(e)
        }
        var r = null,
            a = {
                top: 0,
                left: 0
            },
            s = !1;
        t.event.bind(t.ownerDocument, "selectionchange", function() {
            e.contains(n()) ? s = !0 : (s = !1, i())
        }), t.event.bind(window, "mouseup", function() {
            s && (s = !1, i())
        }), t.event.bind(window, "keyup", function() {
            s && (s = !1, i())
        }), t.event.bind(window, "mousemove", function(t) {
            if (s) {
                var n = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    r = {
                        left: e.offsetLeft,
                        right: e.offsetLeft + e.offsetWidth,
                        top: e.offsetTop,
                        bottom: e.offsetTop + e.offsetHeight
                    };
                n.x < r.left + 3 ? (a.left = -5, Ge.startScrolling(e, "x")) : n.x > r.right - 3 ? (a.left = 5, Ge.startScrolling(e, "x")) : a.left = 0, n.y < r.top + 3 ? (a.top = r.top + 3 - n.y < 5 ? -5 : -20, Ge.startScrolling(e, "y")) : n.y > r.bottom - 3 ? (a.top = n.y - r.bottom + 3 < 5 ? 5 : 20, Ge.startScrolling(e, "y")) : a.top = 0, 0 === a.top && 0 === a.left ? i() : o()
            }
        })
    }

    function M(e, t) {
        t.event.bind(e, "scroll", function() {
            et(e)
        })
    }

    function I(e, t) {
        var n = document.createElement("script");
        n.async = !0, n.charset = "utf-8", n.src = e, n.addEventListener ? n.addEventListener("load", t, !1) : n.readyState && (n.onreadystatechange = t), document.body.appendChild(n)
    }

    function N(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function P(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && N(e.slice(0, 0))
    }
    e('.IIV::-webkit-media-controls-play-button,.IIV::-webkit-media-controls-start-playback-button{opacity:0;pointer-events:none;width:5px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px}video::-webkit-media-controls{}.kmp-loading-icon{height:30%;width:30%;text-align:center;padding:1em;left:35%;bottom:40%;display:inline-block;vertical-align:top;position:absolute;pointer-events:none}.kmp-color-default{fill:#673ab7;color:#673ab7;background:#673ab7}.kmp-color-green{fill:#49b956;color:#49b956;background:#49b956}.kmp-color-lightBlue{fill:#20ccec;color:#20ccec;background:#20ccec}.kmp-color-darkBlue{fill:#1f77d0;color:#1f77d0;background:#1f77d0}.kmp-color-red{fill:#ff3c45;color:#ff3c45;background:#ff3c45}.kmp-color-yellow{fill:#ff9b2f;color:#ff9b2f;background:#ff9b2f}.koko-media-player{background-color:#000;position:relative;overflow:hidden;outline:0;font-family:Roboto,Arial,Helvetica,sans-serif;color:#eee;text-align:left;direction:ltr;font-size:14px;line-height:1.3;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;min-width:80px;min-height:45px}.kmp-video-in-full,.koko-media-player{width:100%;height:100%}.kmp-video-not-support{background:#000;color:#fff}.koko-media-player[data-fullscreen=true] video::-webkit-media-controls{display:none!important}.koko-media-player[data-fullscreen=true] video{width:100%;height:100%}.koko-media-player[data-fullscreen=true] .kmp-chrome-bottom{z-index:2!important}.video-stream-full{-o-object-fit:contain!important;object-fit:contain!important}.kmp-loading,.kmp-video{display:block;width:100%;height:100%;position:absolute;pointer-events:none}.kmp-loading{background:rgba(0,0,0,.6)}.kmp-hide-cursor{cursor:none!important}.kmp-chrome-bottom{bottom:0;height:.8rem;width:100%;text-align:left;direction:ltr;position:absolute}.kmp-chrome-bottom .kmp-hide{opacity:0;pointer-events:none}.kmp-button{display:inline-block;width:.38rem;height:.38rem;border:none;background-color:transparent!important;color:inherit;cursor:pointer;padding:0;margin:.19rem .14rem 0}.kmp-button-big{width:.42rem!important;height:.42rem!important;margin:.16rem .14rem 0}.kmp-button:focus{outline:0}.kmp-bigplay-button{width:8em;height:8em;border:none;position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:1em;transition:all .3s ease;background:transparent!important;cursor:pointer;opacity:.8;outline:none}.kmp-bigplay-button:hover{opacity:1}.kmp-hide{display:none}.kmp-svg-fill{fill:#fff;pointer-events:none}.kmp-progress{height:2px;background:#444!important;position:absolute;bottom:90%;cursor:pointer;transition:width .35s,height .35s,margin .35s;left:70px;right:70px}.kmp-progress:hover{height:.71em}.kmp-progress-loaded{background:#777!important}.kmp-progress-loaded,.kmp-progress-played{height:100%;width:0;left:0;position:absolute;pointer-events:none}.kmp-progress-played::-moz-progress-bar,.kmp-progress-played::-ms-fill,.kmp-progress-played::-webkit-progress-value{transition:width .2s ease}.kmp-progress-tip{left:0;height:100%;width:0;opacity:0;background:#ccc;position:absolute;display:none;pointer-events:none}.kmp-progress:hover .kmp-progress-tip{opacity:.6;display:block}.kmp-progress:hover .kmp-progress-tooltip{opacity:1;display:block}.kmp-controls{height:100%;line-height:100%;font-size:109%;text-align:left;direction:ltr;background:rgba(0,0,0,.6)}.kmp-right-controls{float:right;height:100%}.kmp-left-controls{float:left;height:100%}.kmp-controls .kmp-button[aria-pressed]{position:relative}.kmp-controls .kmp-button[aria-pressed=true]:after{content:"";display:block;position:absolute;height:.15em;border-radius:.15em;left:12px;right:11px;bottom:2px;transition:left .1s cubic-bezier(.4,0,1,1),width .1s cubic-bezier(.4,0,1,1)}.kmp-menu{height:100%;margin:0;bottom:0;display:inline-block;position:relative;text-align:left;text-transform:capitalize}.kmp-menu-item{line-height:2em;padding:0 .3em;font-size:1em;display:block;color:#fff;background:rgba(0,0,0,.8);cursor:pointer;text-align:center}.kmp-menu-item:first-child{border-top-left-radius:10px;border-top-right-radius:10px}.kmp-menu-item:hover{color:#fff}.kmp-menu-item.fixed{color:#fff;pointer-events:none}.kmp-menu-item.fixed:hover{color:#fff!important}.kmp-submenu{position:absolute;display:block;visibility:hidden;opacity:0;padding:0;margin:0;right:10px;max-width:300px;min-width:150px;max-height:70%;bottom:60px;overflow:hidden;text-align:center;pointer-events:none;transition:visibility 0s,opacity 0s}.kmp-menu-show{opacity:1;visibility:visible;pointer-events:auto;transition:visibility 0s,opacity .3s;position:absolute}.kmp-media-time{top:-6px;width:60px}.kmp-media-history-time,.kmp-media-time{position:absolute;display:inline-block;pointer-events:none;line-height:12px;margin:0;font-size:11px}.kmp-media-history-time{left:0;text-align:left;top:-40px;padding-left:10px}.kmp-media-history-time a{padding-left:3px}.kmp-media-history-text{border:none;position:absolute;top:55%;left:50%;background:transparent!important;outline:none;text-align:center}.kmp-media-time-current{left:0;text-align:right}.kmp-media-time-total{right:0;text-align:left}.kmp-progress-tooltip{position:absolute;bottom:110%;margin-bottom:15px;padding:5px 7px;opacity:0;background:rgba(0,0,0,.7);border-radius:3px;color:#fff;font-size:14px;line-height:1.3;-webkit-transform:translate(-50%,10px) scale(.8);transform:translate(-50%,10px) scale(.8);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transition:opacity .2s ease .1s,-webkit-transform .2s ease .1s;transition:transform .2s ease .1s,opacity .2s ease .1s;transition:transform .2s ease .1s,opacity .2s ease .1s,-webkit-transform .2s ease .1s;pointer-events:none}.kmp-progress-tooltip:before{content:"";position:absolute;width:0;height:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:-4px;border-right:4px solid transparent;border-top:4px solid rgba(0,0,0,.7);border-left:4px solid transparent}.koko-media-player[data-fullscreen=true] .kmp-captions{font-size:2.25em!important}.kmp-captions{position:absolute;left:0;width:100%;bottom:0;-webkit-transform:translateY(-80px);transform:translateY(-80px);color:#fff;font-size:1.5em;text-align:center;font-weight:400;pointer-events:none}.kmp-captions,.kmp-captions-bottom{transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.kmp-captions-bottom{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.kmp-captions span{border-radius:2px;padding:3px 10px;background:rgba(0,0,0,.7);-webkit-box-decoration-break:clone;box-decoration-break:clone;line-height:150%}.kmp-captions span:empty{display:none}.kmp-color-yellow .kmp-menu-item.active,.kmp-media-history-time a{color:#ff9b2f}.kmp-color-green .kmp-menu-item.active,.kmp-media-history-time a{color:#49b956}.kmp-color-lightBlue .kmp-menu-item.active,.kmp-media-history-time a{color:#20ccec}.kmp-color-darkBlue .kmp-menu-item.active,.kmp-media-history-time a{color:#1f77d0}.kmp-color-red .kmp-menu-item.active,.kmp-media-history-time a{color:#ff3c45}.kmp-color-default .kmp-menu-item.active,.kmp-media-history-time a{color:#673ab7}.kmp-color-darkBlue .kmp-menu-item.active:hover,.kmp-color-default .kmp-menu-item.active:hover,.kmp-color-green .kmp-menu-item.active:hover,.kmp-color-lightBlue .kmp-menu-item.active:hover,.kmp-color-red .kmp-menu-item.active:hover,.kmp-color-yellow .kmp-menu-item.active:hover{color:#fff!important}.kmp-color-lightBlue .kmp-button[aria-pressed=true]:after,.kmp-color-lightBlue .kmp-menu-item.fixed,.kmp-color-lightBlue .kmp-progress-played,.kmp-color-lightBlue .kmp-rangeSlider__fill{background:#20ccec}.kmp-color-default .kmp-button[aria-pressed=true]:after,.kmp-color-default .kmp-menu-item.fixed,.kmp-color-default .kmp-progress-played,.kmp-color-default .kmp-rangeSlider__fill{background:#673ab7}.kmp-color-red .kmp-button[aria-pressed=true]:after,.kmp-color-red .kmp-menu-item.fixed,.kmp-color-red .kmp-progress-played,.kmp-color-red .kmp-rangeSlider__fill{background:#ff3c45}.kmp-color-yellow .kmp-button[aria-pressed=true]:after,.kmp-color-yellow .kmp-menu-item.fixed,.kmp-color-yellow .kmp-progress-played,.kmp-color-yellow .kmp-rangeSlider__fill{background:#ff9b2f}.kmp-color-darkBlue .kmp-button[aria-pressed=true]:after,.kmp-color-darkBlue .kmp-menu-item.fixed,.kmp-color-darkBlue .kmp-progress-played,.kmp-color-darkBlue .kmp-rangeSlider__fill{background:#1f77d0}.kmp-color-green .kmp-button[aria-pressed=true]:after,.kmp-color-green .kmp-menu-item.fixed,.kmp-color-green .kmp-progress-played,.kmp-color-green .kmp-rangeSlider__fill{background:#49b956}.kmp-color-default .kmp-menu-item:hover{background:rgba(103,58,183,.8)}.kmp-color-green .kmp-menu-item:hover{background:rgba(73,185,86,.8)}.kmp-color-lightBlue .kmp-menu-item:hover{background:rgba(32,204,236,.8)}.kmp-color-red .kmp-menu-item:hover{background:rgba(255,60,69,.8)}.kmp-color-darkBlue .kmp-menu-item:hover{background:rgba(31,119,208,.8)}.kmp-color-yellow .kmp-menu-item:hover{background:rgba(255,155,47,.8)}.kmp-color-default .kmp-button:hover .kmp-svg-fill{fill:#673ab7}.kmp-color-green .kmp-button:hover .kmp-svg-fill{fill:#49b956}.kmp-color-lightBlue .kmp-button:hover .kmp-svg-fill{fill:#20ccec}.kmp-color-red .kmp-button:hover .kmp-svg-fill{fill:#ff3c45}.kmp-color-darkBlue .kmp-button:hover .kmp-svg-fill{fill:#1f77d0}.kmp-color-yellow .kmp-button:hover .kmp-svg-fill{fill:#ff9b2f}\n\n/*!--------------------------------------------------------------------\nSTYLES "Outdated Browser"\nVersion:    1.1.2 - 2015\nauthor:     Burocratik\nwebsite:    http://www.burocratik.com\n* @preserve\n-----------------------------------------------------------------------*/#outdated{display:none;position:fixed;top:0;left:0;width:100%;height:170px;text-align:center;text-transform:uppercase;z-index:1;background-color:#f25648;color:#fff}* html #outdated{position:absolute}#outdated h6{font-size:25px;line-height:25px;margin:30px 0 10px}#outdated p{font-size:12px;line-height:12px;margin:0}#outdated #btnUpdateBrowser{display:block;position:relative;padding:10px 20px;margin:30px auto 0;width:230px;color:#fff;text-decoration:none;border:2px solid #fff;cursor:pointer}#outdated #btnUpdateBrowser:hover{color:#f25648;background-color:#fff}#outdated .last{position:absolute;top:10px;right:25px;width:20px;height:20px}#outdated .last[dir=rtl]{right:auto!important;left:25px!important}#outdated #btnCloseUpdateBrowser{display:block;position:relative;width:100%;height:100%;text-decoration:none;color:#fff;font-size:36px;line-height:36px}', void 0), e('body.stop-scrolling{height:100%;overflow:hidden}.sweet-overlay{background-color:#000;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";background-color:rgba(0,0,0,.4);position:fixed;left:0;right:0;top:0;bottom:0;display:none;z-index:3}.sweet-alert{background-color:#fff;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;width:478px;padding:17px;border-radius:5px;text-align:center;position:fixed;left:50%;top:50%;margin-left:-256px;margin-top:-200px;overflow:hidden;display:none;z-index:4}@media (max-width:540px){.sweet-alert{width:auto;margin-left:0;margin-right:0;left:15px;right:15px}}.sweet-alert h2{color:#575757;font-size:30px;font-weight:600;text-transform:none;margin:25px 0;line-height:40px;display:block}.sweet-alert h2,.sweet-alert p{text-align:center;position:relative;padding:0}.sweet-alert p{color:#797979;font-size:16px;font-weight:300;text-align:inherit;float:none;margin:0;line-height:normal}.sweet-alert fieldset{border:none;position:relative}.sweet-alert .sa-error-container{background-color:#f1f1f1;margin-left:-17px;margin-right:-17px;overflow:hidden;padding:0 10px;max-height:0;webkit-transition:padding .15s,max-height .15s;transition:padding .15s,max-height .15s}.sweet-alert .sa-error-container.show{padding:10px 0;max-height:100px;webkit-transition:padding .2s,max-height .2s;transition:padding .25s,max-height .25s}.sweet-alert .sa-error-container .icon{display:inline-block;width:24px;height:24px;border-radius:50%;background-color:#ea7d7d;color:#fff;line-height:24px;text-align:center;margin-right:3px}.sweet-alert .sa-error-container p{display:inline-block}.sweet-alert .sa-input-error{position:absolute;top:29px;right:26px;width:20px;height:20px;opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transition:all .1s}.sweet-alert .sa-input-error:after,.sweet-alert .sa-input-error:before{content:"";width:20px;height:6px;background-color:#f06e57;border-radius:3px;position:absolute;top:50%;margin-top:-4px;left:50%;margin-left:-9px}.sweet-alert .sa-input-error:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sweet-alert .sa-input-error:after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sweet-alert .sa-input-error.show{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.sweet-alert input{width:100%;box-sizing:border-box;border-radius:3px;border:1px solid #d7d7d7;height:43px;margin-top:10px;margin-bottom:17px;font-size:18px;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);padding:0 12px;display:none;transition:all .3s}.sweet-alert input:focus{outline:none;box-shadow:0 0 3px #c4e6f5;border:1px solid #b4dbed}.sweet-alert input:focus::-moz-placeholder{transition:opacity .3s ease .03s;opacity:.5}.sweet-alert input:focus:-ms-input-placeholder{transition:opacity .3s ease .03s;opacity:.5}.sweet-alert input:focus::-webkit-input-placeholder{transition:opacity .3s ease .03s;opacity:.5}.sweet-alert input::-moz-placeholder{color:#bdbdbd}.sweet-alert input::-ms-clear{display:none}.sweet-alert input:-ms-input-placeholder{color:#bdbdbd}.sweet-alert input::-webkit-input-placeholder{color:#bdbdbd}.sweet-alert.show-input input{display:block}.sweet-alert .sa-confirm-button-container{display:inline-block;position:relative}.sweet-alert .la-ball-fall{position:absolute;left:50%;top:50%;margin-left:-27px;margin-top:4px;opacity:0;visibility:hidden}.sweet-alert button{background-color:#8cd4f5;color:#fff;border:none;box-shadow:none;font-size:17px;font-weight:500;border-radius:5px;padding:10px 32px;margin:26px 5px 0;cursor:pointer}.sweet-alert button:focus{outline:none;box-shadow:0 0 2px rgba(128,179,235,.5),inset 0 0 0 1px rgba(0,0,0,.05)}.sweet-alert button:hover{background-color:#7ecff4}.sweet-alert button:active{background-color:#5dc2f1}.sweet-alert button.cancel{background-color:#c1c1c1}.sweet-alert button.cancel:hover{background-color:#b9b9b9}.sweet-alert button.cancel:active{background-color:#a8a8a8}.sweet-alert button.cancel:focus{box-shadow:0 0 2px rgba(197,205,211,.8),inset 0 0 0 1px rgba(0,0,0,.0470588)!important}.sweet-alert button[disabled]{opacity:.6;cursor:default}.sweet-alert button.confirm[disabled]{color:transparent}.sweet-alert button.confirm[disabled]~.la-ball-fall{opacity:1;visibility:visible;transition-delay:0s}.sweet-alert button::-moz-focus-inner{border:0}.sweet-alert[data-has-cancel-button=false] button{box-shadow:none!important}.sweet-alert[data-has-confirm-button=false][data-has-cancel-button=false]{padding-bottom:40px}.sweet-alert .sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:40px;border-radius:50%;margin:20px auto;padding:0;position:relative;box-sizing:content-box}.sweet-alert .sa-icon.sa-error{border-color:#f27474}.sweet-alert .sa-icon.sa-error .sa-x-mark{position:relative;display:block}.sweet-alert .sa-icon.sa-error .sa-line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.sweet-alert .sa-icon.sa-error .sa-line.sa-left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.sweet-alert .sa-icon.sa-error .sa-line.sa-right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}.sweet-alert .sa-icon.sa-warning{border-color:#f8bb86}.sweet-alert .sa-icon.sa-warning .sa-body{position:absolute;width:5px;height:47px;left:50%;top:10px;border-radius:2px;margin-left:-2px;background-color:#f8bb86}.sweet-alert .sa-icon.sa-warning .sa-dot{position:absolute;width:7px;height:7px;border-radius:50%;margin-left:-3px;left:50%;bottom:10px;background-color:#f8bb86}.sweet-alert .sa-icon.sa-info{border-color:#c9dae1}.sweet-alert .sa-icon.sa-info:before{content:"";position:absolute;width:5px;height:29px;left:50%;bottom:17px;border-radius:2px;margin-left:-2px;background-color:#c9dae1}.sweet-alert .sa-icon.sa-info:after{content:"";position:absolute;width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px;background-color:#c9dae1;left:50%}.sweet-alert .sa-icon.sa-success{border-color:#a5dc86}.sweet-alert .sa-icon.sa-success:after,.sweet-alert .sa-icon.sa-success:before{content:"";border-radius:40px;border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sweet-alert .sa-icon.sa-success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sweet-alert .sa-icon.sa-success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.sweet-alert .sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:40px;border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sweet-alert .sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sweet-alert .sa-icon.sa-success .sa-line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.sweet-alert .sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sweet-alert .sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sweet-alert .sa-icon.sa-custom{background-size:contain;border-radius:0;border:none;background-position:50%;background-repeat:no-repeat}@-webkit-keyframes a{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-transform:scale(.95)}to{transform:scale(1);-webkit-transform:scale(1)}}@keyframes a{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-transform:scale(.95)}to{transform:scale(1);-webkit-transform:scale(1)}}@-webkit-keyframes b{0%{transform:scale(1);-webkit-transform:scale(1)}to{transform:scale(.5);-webkit-transform:scale(.5)}}@keyframes b{0%{transform:scale(1);-webkit-transform:scale(1)}to{transform:scale(.5);-webkit-transform:scale(.5)}}@-webkit-keyframes c{0%{top:0}to{top:50%}}@keyframes c{0%{top:0}to{top:50%}}@-webkit-keyframes d{0%{top:50%}to{top:0}}@keyframes d{0%{top:50%}to{top:0}}@-webkit-keyframes e{0%{top:70%}to{top:50%}}@keyframes e{0%{top:70%}to{top:50%}}@-webkit-keyframes f{0%{top:50%}to{top:70%}}@keyframes f{0%{top:50%}to{top:70%}}.showSweetAlert[data-animation=pop]{-webkit-animation:a .3s;animation:a .3s}.showSweetAlert[data-animation=none]{-webkit-animation:none;animation:none}.showSweetAlert[data-animation=slide-from-top]{-webkit-animation:c .3s;animation:c .3s}.showSweetAlert[data-animation=slide-from-bottom]{-webkit-animation:e .3s;animation:e .3s}.hideSweetAlert[data-animation=pop]{-webkit-animation:b .2s;animation:b .2s}.hideSweetAlert[data-animation=none]{-webkit-animation:none;animation:none}.hideSweetAlert[data-animation=slide-from-top]{-webkit-animation:d .4s;animation:d .4s}.hideSweetAlert[data-animation=slide-from-bottom]{-webkit-animation:f .3s;animation:f .3s}@-webkit-keyframes g{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes g{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes h{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes h{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@-webkit-keyframes i{0%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}to{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes i{0%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}to{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}.animateSuccessTip{-webkit-animation:g .75s;animation:g .75s}.animateSuccessLong{-webkit-animation:h .75s;animation:h .75s}.sa-icon.sa-success.animate:after{-webkit-animation:i 4.25s ease-in;animation:i 4.25s ease-in}@-webkit-keyframes j{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}to{transform:rotateX(0deg);-webkit-transform:rotateX(0deg);opacity:1}}@keyframes j{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}to{transform:rotateX(0deg);-webkit-transform:rotateX(0deg);opacity:1}}.animateErrorIcon{-webkit-animation:j .5s;animation:j .5s}@-webkit-keyframes k{0%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}to{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}@keyframes k{0%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}to{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}.animateXMark{-webkit-animation:k .5s;animation:k .5s}@-webkit-keyframes l{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes l{0%{border-color:#f8d486}to{border-color:#f8bb86}}.pulseWarning{-webkit-animation:l .75s infinite alternate;animation:l .75s infinite alternate}@-webkit-keyframes m{0%{background-color:#f8d486}to{background-color:#f8bb86}}@keyframes m{0%{background-color:#f8d486}to{background-color:#f8bb86}}.pulseWarningIns{-webkit-animation:m .75s infinite alternate;animation:m .75s infinite alternate}.sweet-alert .sa-icon.sa-error .sa-line.sa-left{-ms-transform:rotate(45deg)\\9}.sweet-alert .sa-icon.sa-error .sa-line.sa-right{-ms-transform:rotate(-45deg)\\9}.sweet-alert .sa-icon.sa-success{border-color:transparent\\9}.sweet-alert .sa-icon.sa-success .sa-line.sa-tip{-ms-transform:rotate(45deg)\\9}.sweet-alert .sa-icon.sa-success .sa-line.sa-long{-ms-transform:rotate(-45deg)\\9}\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */.la-ball-fall,.la-ball-fall>div{position:relative;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-fall{width:54px;height:18px}.la-ball-fall>div{width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:n 1s ease-in-out infinite;animation:n 1s ease-in-out infinite}.la-ball-fall>div:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes n{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}to{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}@keyframes n{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}to{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}', void 0), e(".ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}", void 0);
    var D = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        O = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        Y = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        B = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        H = function() {
            function e() {
                D(this, e)
            }
            return O(e, null, [{
                key: "toggleClass",
                value: function(e, t, n) {
                    if (e)
                        if (e.classList) e.classList[n ? "add" : "remove"](t);
                        else {
                            var o = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                            e.className = o + (n ? " " + t : "")
                        }
                }
            }, {
                key: "hasClass",
                value: function(e, t) {
                    return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
                }
            }]), e
        }(),
        X = {
            PLAY: "播放",
            REPLAY: "继续上次播放",
            PAUSE: "暂停",
            SHOW_CC: "显示字幕",
            HIDE_CC: "隐藏字幕",
            ENTER_FULL: "进入全屏",
            EXIT_FULL: "退出全屏",
            SETTING: "设置",
            MUTE: "静音",
            UNMUTE: "取消静音",
            ENTER_PIP: "开启画中画",
            EXIT_PIP: "退出画中画"
        },
        U = {
            PAUSE: "pause",
            PLAY: "play",
            PLAYING: "playing",
            WAITING: "waiting",
            CANPLAY: "canplay",
            SEEKED: "seeked",
            SEEKING: "seeking",
            TIMEUPDATE: "timeupdate",
            ENDED: "ended",
            PROGRESS: "progress",
            LOADSTART: "loadstart",
            CANPLAYTHROUGH: "canplaythrough",
            RATECHANGE: "ratechange",
            DURATIONCHANGE: "durationchange",
            SUSPEND: "suspend",
            LOADEDMETADATA: "loadedmetadata",
            LOADEDDATA: "loadeddata",
            VOLUMECHANGE: "volumechange",
            ERROR: "error",
            ABORT: "abort"
        },
        W = {
            PAUSE: "onpause",
            PLAY: "onplay",
            PLAYING: "onplaying",
            WAITING: "onwaiting",
            CANPLAY: "oncanplay",
            SEEKED: "onseeked",
            SEEKING: "onseeking",
            TIMEUPDATE: "ontimeupdate",
            ENDED: "onended",
            PROGRESS: "onprogress",
            LOADSTART: "onloadstart",
            CANPLAYTHROUGH: "oncanplaythrough",
            RATECHANGE: "onratechange",
            DURATIONCHANGE: "ondurationchange",
            SUSPEND: "onsuspend",
            LOADEDMETADATA: "onloadedmetadata",
            LOADEDDATA: "onloadeddata",
            VOLUMECHANGE: "onvolumechange",
            ERROR: "onerror",
            ABORT: "onabort"
        },
        z = {
            ENTER: "mouseenter",
            OVER: "mouseover",
            MOVE: "mousemove",
            DOWN: "mousedown",
            UP: "mouseup",
            AUXCLICK: "auxclick",
            CLICK: "click",
            DBCLICK: "dblclick",
            CONTEXT: "contextmenu",
            WHEEL: "wheel",
            LEAVE: "mouseleave",
            OUT: "mouseout",
            SELECT: "select",
            LOCKCHANGE: "pointerlockchange",
            LOCKERROR: "pointerlockerror"
        },
        G = {
            PAUSE: "mark_kmp_pause",
            PLAY: "mark_kmp_play",
            PLAYING: "mark_kmp_playing",
            WAITING: "mark_kmp_waiting",
            CANPLAY: "mark_kmp_canplay",
            SEEKED: "mark_kmp_seeked",
            SEEKING: "mark_kmp_seeking",
            TIMEUPDATE: "mark_kmp_timeupdate",
            ENDED: "mark_kmp_ended",
            PROGRESS: "mark_kmp_progress",
            LOADSTART: "mark_kmp_loadstart",
            CANPLAYTHROUGH: "mark_kmp_canplaythrough",
            RATECHANGE: "mark_kmp_ratechange",
            DURATIONCHANGE: "mark_kmp_durationchange",
            SUSPEND: "mark_kmp_suspend",
            LOADEDMETADATA: "mark_kmp_loadedmetadata",
            LOADEDDATA: "mark_kmp_loadeddata",
            VOLUMECHANGE: "mark_kmp_volumechange",
            ERROR: "mark_kmp_error",
            ABORT: "mark_kmp_abort"
        },
        V = {
            MAIN: "kmp",
            PLAYER: "koko-media-player",
            VID: "kmp-video",
            LD: "kmp-loading",
            LD_ICO: "kmp-loading-icon",
            VF: "kmp-video-full",
            BOTTOM: "kmp-chrome-bottom",
            BTN: "kmp-button",
            BTN_BIG: "kmp-button-big",
            BTN_BIG_PLAY: "kmp-bigplay-button",
            SHOW: "kmp-show",
            HIDE: "kmp-hide",
            HIDE_CURSOR: "kmp-hide-cursor",
            SVG_FILL: "kmp-svg-fill",
            PER: "kmp-progress",
            PER_LOD: "kmp-progress-loaded",
            PER_PLD: "kmp-progress-played",
            PER_TIP: "kmp-progress-tip",
            PER_HDL: "kmp-progress-handle",
            PER_TL_TIP: "kmp-progress-tooltip",
            CTL: "kmp-controls",
            CTL_R: "kmp-right-controls",
            CTL_L: "kmp-left-controls",
            CC_ON: "kmp-caption-on",
            CC: "kmp-captions",
            VOL: "kmp-volume-panel",
            MENU: "kmp-menu",
            MENU_ITEM: "kmp-menu-item",
            SUB_MENU: "kmp-submenu",
            MENU_SHOW: "kmp-menu-show",
            TIME: "kmp-media-time",
            TIME_TOTAL: "kmp-media-time-total",
            TIME_CURRENT: "kmp-media-time-current",
            CTL_HIDE: "kmp-controlBar-hide",
            CTL_SHOW: "kmp-controlBar-show",
            CAPTION: "kmp-captions-bottom",
            IN_FULL: "kmp-in-fullscreen"
        },
        j = {
            FLV: "video/x-flv",
            MP4: "video/mp4",
            M3U8: "application/x-mpegURL",
            TS: "video/MP2T",
            GP3: "video/3gpp",
            MOV: "video/quicktime",
            AVI: "video/x-msvideo",
            WMV: "video/x-ms-wmv",
            TORRENT: "torrent"
        },
        F = {
            ERR_XHR: "字幕加载失败,因为浏览器不支持XMLHttpRequest.",
            OK: "字幕加载成功",
            FAIL_WITH_CODE: "字幕加载失败，错误代码:"
        },
        Z = [{
            label: "播放速度",
            value: "播放速度",
            type: "fixed"
        }, {
            label: "2.0",
            value: "2.0",
            belongs: "playrate"
        }, {
            label: "1.25",
            value: "1.25",
            belongs: "playrate"
        }, {
            label: "正常",
            value: "1.0",
            belongs: "playrate"
        }, {
            label: "0.5",
            value: "0.5",
            belongs: "playrate"
        }],
        K = [{
            label: "字幕",
            value: "字幕",
            type: "fixed"
        }, {
            label: "无",
            value: "",
            belongs: "subtitle"
        }],
        q = [{
            label: "清晰度",
            value: "清晰度",
            type: "fixed"
        }, {
            label: "自动",
            value: "-1",
            belongs: "quality"
        }],
        Q = {
            RED: "kmp-color-red",
            GREEN: "kmp-color-green",
            LIGHT_BLUE: "kmp-color-lightBlue",
            DARK_BLUE: "kmp-color-darkBlue",
            YELLOW: "kmp-color-yellow",
            DEFAULT: "kmp-color-default"
        },
        J = {
            DATA_FULLSCREEN: "data-fullscreen",
            DISABLED: "disabled",
            ARIA_PRESSED: "aria-pressed",
            ARIA_EXPANDED: "aria-expanded",
            ARIA_HASPOPUP: "aria-haspopup",
            ARIA_LABEL: "aria-label",
            TITLE: "title"
        },
        $ = ["exitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen", "msExitFullscreen"],
        ee = ["requestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen", "msRequestFullscreen", "webkitEnterFullscreen"],
        te = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"],
        ne = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"],
        oe = function() {
            function e() {
                function t(e) {
                    e.preventDefault(), e.stopImmediatePropagation(), a.playedTrack.style.width = e.offsetX + "px", a.onchange && a.onchange(a.playedTrack.offsetWidth / a.container.offsetWidth)
                }

                function n(e) {
                    a.dragging = !0, document.addEventListener("mousemove", o), document.addEventListener("touchmove", o), document.addEventListener("pointermove", o), document.addEventListener("mouseup", i), document.addEventListener("touchend", i), document.addEventListener("pointerup", i);
                    var t = void 0 === e.offsetX ? e.layerX : e.offsetX;
                    a.playedTrack.style.width = t + "px"
                }

                function o(e) {
                    if (a.dragging = !0, e.target === a.container) {
                        var t = void 0 === e.offsetX ? e.layerX : e.offsetX;
                        a.playedTrack.style.width = t + "px", a.onchange && a.onchange(a.playedTrack.offsetWidth / a.container.offsetWidth)
                    }
                }

                function i() {
                    a.dragging = !1, document.removeEventListener("mousemove", o), document.removeEventListener("touchmove", o), document.removeEventListener("pointermove", o), document.removeEventListener("mouseup", i), document.removeEventListener("touchend", i), document.removeEventListener("pointerup", i)
                }

                function r(e) {
                    var t = a.tooltip.offsetWidth / 2,
                        n = a.container.offsetWidth - a.tooltip.offsetWidth / 2;
                    s.style.width = e.offsetX + "px", e.offsetX >= n ? a.tooltip.style.left = n + "px" : e.offsetX < t ? a.tooltip.style.left = t + "px" : a.tooltip.style.left = e.offsetX + "px", a.ontipChange && a.ontipChange(e.offsetX / a.container.offsetWidth)
                }
                D(this, e);
                var a = this,
                    s = document.createElement("div");
                a.tooltip = document.createElement("div"), a.container = document.createElement("span"), a.onchange = null, a.ontipChange = null, a.loadedTrack = document.createElement("div"), a.playedTrack = document.createElement("div"), a.dragging = !1, a.tooltip.innerHTML = "--:--", H.toggleClass(a.tooltip, V.PER_TL_TIP, !0), H.toggleClass(a.container, V.PER, !0), H.toggleClass(a.loadedTrack, V.PER_LOD, !0), H.toggleClass(a.playedTrack, V.PER_PLD, !0), H.toggleClass(s, V.PER_TIP, !0), H.toggleClass(a.container, V.PER, !0), a.container.appendChild(a.tooltip), a.container.appendChild(a.loadedTrack), a.container.appendChild(a.playedTrack), a.container.appendChild(s), a.container.addEventListener("click", t), a.container.addEventListener("mousedown", n), a.container.addEventListener("touchstart", n), a.container.addEventListener("pointerdown", n), a.container.addEventListener("mousemove", function(e) {
                    s.style.width = e.offsetX + "px", r(e)
                }), a.container.addEventListener("mouseover", function(e) {
                    s.style.width = e.offsetX + "px", r(e)
                })
            }
            return O(e, [{
                key: "updateTooltip",
                value: function(e) {
                    this.tooltip && (this.tooltip.innerHTML = e)
                }
            }, {
                key: "played",
                set: function(e) {
                    this.dragging || (e < 0 ? e = 0 : e > 1 && (e = 1), this.playedTrack.style.width = 100 * e + "%")
                }
            }, {
                key: "buffered",
                set: function(e) {
                    e < 0 ? e = 0 : e > 1 && (e = 1), this.loadedTrack.style.width = 100 * e + "%"
                }
            }]), e
        }(),
        ie = "http://www.w3.org/2000/svg",
        re = function() {
            function e(t) {
                var n = t.normalSkin,
                    o = t.normalLabel,
                    i = t.selectedSkin,
                    r = t.selectedLabel,
                    a = t.defaultSelected,
                    s = void 0 !== a && a;
                D(this, e);
                var l = this,
                    c = document.createElementNS(ie, "path"),
                    d = document.createElementNS(ie, "svg");
                l.onchange = null, l.container = document.createElement("button"), l._selected = s, l.normalSkin = n, l.normalTitle = o, l.selectedSkin = i, l.selectedTitle = r, c.setAttributeNS("", "d", n), H.toggleClass(c, "kmp-svg-fill", !0), l.icon = c, d.setAttributeNS("", "width", "100%"), d.setAttributeNS("", "height", "100%"), d.setAttributeNS("", "viewBox", "0 0 24 24"), d.setAttributeNS("", "version", "1.1"), d.appendChild(c), l.container.appendChild(d), l.container.addEventListener("click", function() {
                    l.selected = !l.selected, l.onchange && l.onchange()
                })
            }
            return O(e, [{
                key: "hide",
                value: function() {
                    H.toggleClass(this.container, "kmp-hide", !0)
                }
            }, {
                key: "show",
                value: function() {
                    H.toggleClass(this.container, "kmp-hide", !1)
                }
            }, {
                key: "addClass",
                value: function(e) {
                    H.toggleClass(this.container, e, !0)
                }
            }, {
                key: "removeClass",
                value: function(e) {
                    H.toggleClass(this.container, e, !1)
                }
            }, {
                key: "addIconClass",
                value: function(e) {
                    H.toggleClass(this.icon, e, !0)
                }
            }, {
                key: "removeIconClass",
                value: function(e) {
                    H.toggleClass(this.icon, e, !1)
                }
            }, {
                key: "selected",
                set: function(e) {
                    var t = this;
                    t._selected = Boolean(e), t._selected ? (t.icon.setAttributeNS("", "d", t.selectedSkin), t.label = t.selectedTitle) : (t.icon.setAttributeNS("", "d", t.normalSkin), t.label = t.normalTitle)
                },
                get: function() {
                    return this._selected
                }
            }, {
                key: "label",
                set: function(e) {
                    this.container.setAttribute("aria-label", e), this.container.setAttribute("title", e)
                },
                get: function() {
                    return this.container.getAttribute("aria-label")
                }
            }]), e
        }(),
        ae = "M12,0 C5.37225,0 0,5.37225 0,12 C0,18.62775 5.37225,24 12,24 C18.62775,24 24,18.62775 24,12 C24,5.37225 18.62775,0 12,0 Z M12,21.75 C6.615,21.75 2.25,17.385 2.25,12 C2.25,6.615 6.615,2.25 12,2.25 C17.385,2.25 21.75,6.615 21.75,12 C21.75,17.385 17.385,21.75 12,21.75 Z M9,6.75 L18,12 L9,17.25 L9,6.75 Z",
        se = "http://www.w3.org/2000/svg",
        le = function() {
            function e(t) {
                D(this, e), this.pathEle = document.createElementNS(se, "path"), this.pathEle.setAttributeNS("", "d", t);
                var n = document.createElementNS(se, "svg");
                n.setAttributeNS("", "width", "100%"), n.setAttributeNS("", "height", "100%"), n.setAttributeNS("", "viewBox", "0 0 24 24"), n.setAttributeNS("", "version", "1.1"), n.appendChild(this.pathEle), this.container = document.createElement("button"), this.container.appendChild(n), this._relatedMenu = null
            }
            return O(e, [{
                key: "hideMenu",
                value: function() {
                    this._relatedMenu && this._relatedMenu.close(), this.container.setAttribute(J.ARIA_EXPANDED, !1)
                }
            }, {
                key: "showMenu",
                value: function() {
                    this._relatedMenu && this._relatedMenu.open(), this.container.setAttribute(J.ARIA_EXPANDED, !0)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.container.addEventListener(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.container.removeEventListener(e, t)
                }
            }, {
                key: "hide",
                value: function() {
                    H.toggleClass(this.container, V.HIDE, !0)
                }
            }, {
                key: "show",
                value: function() {
                    H.toggleClass(this.container, V.HIDE, !1)
                }
            }, {
                key: "addClass",
                value: function(e) {
                    H.toggleClass(this.container, e, !0)
                }
            }, {
                key: "removeClass",
                value: function(e) {
                    H.toggleClass(this.container, e, !1)
                }
            }, {
                key: "addIconClass",
                value: function(e) {
                    H.toggleClass(this.pathEle, e, !0)
                }
            }, {
                key: "removeIconClass",
                value: function(e) {
                    H.toggleClass(this.pathEle, e, !1)
                }
            }, {
                key: "relatedMenu",
                set: function(e) {
                    var t = this;
                    this._relatedMenu = e, this._relatedMenu && this.on("click", function() {
                        "false" === t.container.getAttribute(J.ARIA_EXPANDED) ? t.showMenu() : t.hideMenu()
                    })
                }
            }, {
                key: "label",
                set: function(e) {
                    this.container.setAttribute(J.ARIA_LABEL, e), this.container.setAttribute(J.TITLE, e)
                }
            }]), e
        }(),
        ce = "aHR0cHM6Ly9jZG4ua29rb3BsYXllci5jb20vS01QLkguanM=",
        de = "S01QSExT",
        ue = "aHR0cHM6Ly9jZG4ua29rb3BsYXllci5jb20vS01QLkYuanM=",
        pe = "Zmx2anM=",
        me = "V2ViVG9ycmVudA==",
        fe = "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L3dlYnRvcnJlbnQvbGF0ZXN0L3dlYnRvcnJlbnQubWluLmpz",
        he = "//cdn.kokoplayer.com/outdatedbrowser/lang/zh-cn.html",
        ge = function() {
            function e() {
                D(this, e), this.onAvailableStateChange = null, this.onWirelessStateChange = null, this.hostVideo = null, this.available = !1
            }
            return O(e, [{
                key: "setup",
                value: function(t) {
                    var n = this;
                    e.enabled && t && "html5" === t.type && (n.hostVideo = t.vidEle, t.on("webkitplaybacktargetavailabilitychanged", function(e) {
                        n.available = "available" === e.availability, n.onAvailableStateChange && n.onAvailableStateChange()
                    }), t.on("webkitcurrentplaybacktargetiswirelesschanged", function() {
                        n.onWirelessStateChange && n.onWirelessStateChange()
                    }))
                }
            }, {
                key: "showMenu",
                value: function() {
                    this.hostVideo && this.hostVideo.webkitShowPlaybackTargetPicker()
                }
            }, {
                key: "isWireless",
                get: function() {
                    return this.hostVideo && this.hostVideo.webkitCurrentPlaybackTargetIsWireless
                }
            }], [{
                key: "enabled",
                get: function() {
                    return Boolean(window.WebKitPlaybackTargetAvailabilityEvent)
                }
            }]), e
        }(),
        be = function() {
            function e() {
                D(this, e), this.hostVideo = null, this.onChange = null, this.active = !1
            }
            return O(e, [{
                key: "setup",
                value: function(e) {
                    var t = this;
                    e && "html5" === e.type ? (t.hostVideo = e.vidEle, e.on("webkitpresentationmodechanged", function() {
                        t.active = "picture-in-picture" === t.hostVideo.webkitPresentationMode, t.onChange && t.onChange()
                    })) : t.hostVideo = null
                }
            }, {
                key: "toggle",
                value: function() {
                    var e = this.hostVideo;
                    e && ("picture-in-picture" === e.webkitPresentationMode ? e.webkitSetPresentationMode("inline") : e.webkitSetPresentationMode("picture-in-picture"))
                }
            }], [{
                key: "enabled",
                get: function() {
                    var e = document.createElement("video");
                    return e && e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode
                }
            }]), e
        }(),
        ve = function() {
            function e() {
                D(this, e);
                var t = this;
                t.container = document.createElement("div"), t.buttonWithMenus = [], t.oncaptionChange = null, t.fullElement = null, H.toggleClass(t.container, V.CTL, !0)
            }
            return O(e, [{
                key: "setup",
                value: function(e, t) {
                    var n = this;
                    n.container.innerHTML = "", n.buttonWithMenus = [];
                    var i = document.createElement("div");
                    H.toggleClass(i, V.CTL_L, !0);
                    var r = document.createElement("div");
                    if (H.toggleClass(r, V.CTL_R, !0), -1 !== t.uiList.indexOf("play")) {
                        var a = new re({
                            normalSkin: "M12,0 C5.37225,0 0,5.37225 0,12 C0,18.62775 5.37225,24 12,24 C18.62775,24 24,18.62775 24,12 C24,5.37225 18.62775,0 12,0 Z M12,22 C6.47692308,22 2,17.5230769 2,12 C2,6.47692308 6.47692308,2 12,2 C17.5230769,2 22,6.47692308 22,12 C22,17.5230769 17.5230769,22 12,22 Z M9,7.5 L17,12 L9,16.5 L9,7.5 Z",
                            normalLabel: X.PLAY,
                            selectedSkin: "M12,0 C5.37225,0 0,5.37225 0,12 C0,18.62775 5.37225,24 12,24 C18.62775,24 24,18.62775 24,12 C24,5.37225 18.62775,0 12,0 Z M12,22 C6.47692308,22 2,17.5230769 2,12 C2,6.47692308 6.47692308,2 12,2 C17.5230769,2 22,6.47692308 22,12 C22,17.5230769 17.5230769,22 12,22 Z M8,7.5 L10,7.5 L10,16.5 L8,16.5 L8,7.5 Z M14,7.5 L16,7.5 L16,16.5 L14,16.5 L14,7.5 Z",
                            selectedLabel: X.PAUSE
                        });
                        a.addClass(V.BTN), a.addClass(V.BTN_BIG), a.onchange = function() {
                            e.paused ? e.play() : e.pause()
                        }, e.on(U.PAUSE, function() {
                            a.selected = !1
                        }), e.on(U.PLAYING, function() {
                            a.selected = !0
                        }), i.appendChild(a.container)
                    }
                    if (-1 !== t.uiList.indexOf("volume") && !o()) {
                        var s = new re({
                            normalSkin: "M 14.688 0 C 20.062667 1.2197125 24 6.160164 24 12 C 24 17.839836 20.062667 22.780287 14.688 24 L 14.688 21.175907 C 18.562667 20.020534 21.313333 16.362765 21.313333 12 C 21.313333 7.637235 18.562667 3.979466 14.688 2.824093 L 14.688 0 Z M 18 12 C 18 14.438056 16.688 16.491444 14.688 17.518138 L 14.688 6.480493 C 16.688 7.507187 18 9.560575 18 11.998631 Z M 35527137e-22 7.893224 L 5.312 7.893224 L 12 1.026694 L 12 22.971937 L 5.312 16.105407 L 35527137e-22 16.105407 L 35527137e-22 7.891855 Z",
                            normalLabel: X.MUTE,
                            selectedSkin: "M 12.000667 1.312 L 12.000667 6.937333 L 9.188823 4.1253333 Z M 1.6892395 0 L 24 22.312 L 22.312094 24 L 19.56158 21.249333 C 18.124326 22.374667 16.499083 23.249333 14.687184 23.686667 L 14.687184 20.936 C 15.812455 20.624 16.8124 20.061333 17.687017 19.373333 L 11.999333 13.685333 L 11.999333 22.685333 L 5.311705 15.997333 L 17763568e-22 15.997333 L 17763568e-22 7.997333 L 6.311649 7.997333 L 17763568e-22 1.6853333 Z M 21.31215 12 C 21.31215 7.749333 18.561635 4.188 14.687184 3.0626667 L 14.687184 .312 C 20.061552 1.5 23.998667 6.312 23.998667 12 C 23.998667 14 23.498695 15.937333 22.624076 17.562667 L 20.624188 15.5 C 21.061497 14.437333 21.31215 13.249333 21.31215 12 Z M 18.000333 12 C 18.000333 12.312 18.000333 12.562667 17.93767 12.812 L 14.687184 9.561333 L 14.687184 6.624 C 16.687073 7.624 17.999 9.624 17.999 11.998667 Z",
                            selectedLabel: X.UNMUTE
                        });
                        s.addClass(V.BTN), s.onchange = function() {
                            e.muted = s.selected
                        }, s.selected = e.muted, e.on(U.VOLUMECHANGE, function(t) {
                            t.preventDefault(), s.selected = e.muted || e.volume <= 0
                        }), i.appendChild(s.container)
                    }
                    if (ge.enabled) {
                        var l = new ge,
                            c = new le("M21.8039216,4.69353451e-16 C22.9782135,4.69353451e-16 24,1.18584071 24,2.54867257 L24,17.7193426 C24,19.0821745 22.9782135,20 21.8039216,20 L17.4640523,20 L17.4640523,18 L22,18 L22,2 L2,2 L2,18 L6.53594771,18 L6.53594771,20 L2.19607843,20 C1.02178649,20 0,19.0821745 0,17.7193426 L0,2.54867257 C0,1.18584071 1.02178649,-1.77635684e-15 2.19607843,-1.77635684e-15 L21.8039216,4.69353451e-16 Z M5.46405229,24 L12,16.414665 L18.5359477,24 L5.46405229,24 Z");
                        c.addClass(V.BTN), c.container.setAttribute(J.ARIA_PRESSED, !1), c.addIconClass(V.SVG_FILL), c.on(z.CLICK, function() {
                            l.showMenu()
                        }), l.setup(e), l.onAvailableStateChange = function() {
                            l.available ? c.container.removeAttribute(J.DISABLED) : c.container.setAttribute(J.DISABLED, !0)
                        }, l.onWirelessStateChange = function() {
                            c.container.setAttribute(J.ARIA_PRESSED, l.isWireless)
                        }, r.appendChild(c.container)
                    }
                    if (be.enabled) {
                        var d = new be,
                            u = new re({
                                normalSkin: "M22,22 L22,2 L2,2 L2,22 L22,22 Z M24,22 C24,23.4372535 23.1742919,24 22,24 L2,24 C0.825708061,24 0,23.4372535 0,22 L0,2 C0,0.562746514 0.825708061,0 2,0 L22,0 C23.1742919,0 24,0.562746514 24,2 L24,22 Z M18.9933036,19 L11,19 L11,11.0379464 L18.9933036,11 L18.9933036,19 Z",
                                normalLabel: X.ENTER_PIP,
                                selectedSkin: "M22,22 L22,2 L2,2 L2,22 L22,22 Z M22,0 C23.1742919,0 24,0.680599604 24,2.11785309 L24,22 C24,23.4372535 23.1742919,24 22,24 L2,24 C0.825708061,24 3.24740235e-15,23.4372535 3.24740235e-15,22 L0,2 C0,0.562746514 0.825708061,0 2,0 L22,0 Z M19,5 L19,13 L11,13 L11,5 L19,5 Z",
                                selectedLabel: X.EXIT_PIP
                            });
                        d.setup(e), d.onChange = function() {
                            u.selected = d.active
                        }, u.addClass(V.BTN), u.onchange = function() {
                            d.toggle()
                        }, u.selected = d.active, r.appendChild(u.container)
                    }
                    if (-1 !== t.uiList.indexOf("setting")) {
                        // var p = new le("M22.5454545,0 L1.45454545,0 C0.856727273,0 0,0.8835 0,1.5 L0,22.5 C0,23.1165 0.856727273,24 1.45454545,24 L22.5454545,24 C23.1432727,24 24,23.1165 24,22.5 L24,1.5 C24,0.8835 23.1432727,0 22.5454545,0 Z M22,21.5 C21.9956364,21.713 21.7565447,21.9955 21.5499992,22 L2.45000005,22 C2.24345459,21.9955 2.00436364,21.713 2,21.5 L2,2.5 C2.00436364,2.287 2.24345459,2.0045 2.45000005,2 L21.5499992,2 C21.7565447,2.0045 21.9956364,2.287 22,2.5 L22,21.5 Z M12.0454545,4.125 C11.2182045,4.125 10.5454545,4.79775 10.5454545,5.625 C10.5454545,6.45225 11.2182045,7.125 12.0454545,7.125 C12.8727045,7.125 13.5454545,6.45225 13.5454545,5.625 C13.5454545,4.79775 12.8727045,4.125 12.0454545,4.125 Z M12.0227273,6.375 C11.6094773,6.375 11.2727273,6.03825 11.2727273,5.625 C11.2727273,5.21175 11.6094773,4.875 12.0227273,4.875 C12.4359773,4.875 12.7727273,5.21175 12.7727273,5.625 C12.7727273,6.03825 12.4359773,6.375 12.0227273,6.375 Z M18,17.125 C17.17275,17.125 16.5,17.79775 16.5,18.625 C16.5,19.45225 17.17275,20.125 18,20.125 C18.82725,20.125 19.5,19.45225 19.5,18.625 C19.5,17.79775 18.82725,17.125 18,17.125 Z M18.0499992,19.375 C17.6367492,19.375 17.2999992,19.03825 17.2999992,18.625 C17.2999992,18.21175 17.6367492,17.875 18.0499992,17.875 C18.4632492,17.875 18.7999992,18.21175 18.7999992,18.625 C18.7999992,19.03825 18.4632492,19.375 18.0499992,19.375 Z M6,12.375 C5.17275,12.375 4.5,13.04775 4.5,13.875 C4.5,14.70225 5.17275,15.375 6,15.375 C6.82725,15.375 7.5,14.70225 7.5,13.875 C7.5,13.04775 6.82725,12.375 6,12.375 Z M6.05000019,14.625 C5.63675019,14.625 5.30000019,14.28825 5.30000019,13.875 C5.30000019,13.46175 5.63675019,13.125 6.05000019,13.125 C6.46325019,13.125 6.80000019,13.46175 6.80000019,13.875 C6.80000019,14.28825 6.46325019,14.625 6.05000019,14.625 Z M6,11.5 C6.552,11.5 7,11.332 7,11.125 L7,4.375 C7,4.168 6.552,4 6,4 C5.448,4 5,4.168 5,4.375 L5,11.125 C5,11.332 5.448,11.5 6,11.5 Z M6,17 C5.448,17 5,17.168 5,17.375 L5,19.625 C5,19.832 5.448,20 6,20 C6.552,20 7,19.832 7,19.625 L7,17.375 C7,17.168 6.552,17 6,17 Z M12,8 C11.448,8 11,8.1792 11,8.4 L11,19.6 C11,19.8208 11.448,20 12,20 C12.552,20 13,19.8208 13,19.6 L13,8.4 C13,8.1792 12.552,8 12,8 Z M18,16 C18.552,16 19,15.811452 19,15.6000004 L19,4.4000001 C19,4.18854849 18.552,4 18,4 C17.448,4 17,4.18854849 17,4.4000001 L17,15.6000004 C17,15.811452 17.448,16 18,16 Z");
                        // p.addClass(V.BTN), p.container.setAttribute(J.ARIA_EXPANDED, !1), p.container.setAttribute(J.ARIA_HASPOPUP, !0), p.label = X.SETTING, p.addIconClass(V.SVG_FILL), p.relatedMenu = t.settingMenu, r.appendChild(p.container), n.buttonWithMenus.push(p)
                    }
                    if (-1 !== t.uiList.indexOf("fullscreen")) {
                        var m = new re({
                            normalSkin: "M24,0.00171796707 L24,8.53829635 L22,8.53829635 L22,2 L15.4634216,2 L15.4634216,0.00171796707 L24,0.00171796707 Z M22,22 L22,15.4634216 L24,15.4634216 L24,24 L15.4634216,24 L15.4634216,22 L22,22 Z M0.00171796707,8.53657838 L0.00171796707,0 L8.53829635,0 L8.53999996,2 L2,2 L2,8.53657838 L0.00171796707,8.53657838 Z M2,22 L8.53657838,22 L8.53657838,24 L0,24 L0,15.4634216 L2,15.4634216 L2,22 Z",
                            normalLabel: X.ENTER_FULL,
                            selectedSkin: "M23.9982819,5 L23.9982819,7 L17,7 L17,0 L19,0 L19,5 L23.9982819,5 Z M17,23.9982819 L17,17 L24,17 L24,19 L19,19 L19,23.9982819 L17,23.9982819 Z M5,5.15427017 L5,8.8817842e-16 L7,8.8817842e-16 L7,7 L0,7 L0,5.15427017 L5.15427017,5.15427017 L5,5.15427017 Z M8.8817842e-16,17 L7,17 L7,23.9982819 L5,23.9982819 L5,19 L8.8817842e-16,19 L8.8817842e-16,17 Z",
                            selectedLabel: X.EXIT_FULL
                        });
                        m.addClass(V.BTN), r.appendChild(m.container);
                        for (var f = function() {
                                return Boolean(document.fullscreenElement || document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement)
                            }, h = function() {
                                var e = f();
                                m.selected = e, n.onfullscreenChange && n.onfullscreenChange(e)
                            }, g = 0, b = ne.length; g < b; g++) document.addEventListener(ne[g], h, !1);
                        m.onchange = function() {
                            for (var t = !1, o = 0, i = te.length; o < i; o++)
                                if (document[te[o]]) {
                                    t = !0;
                                    break
                                }
                            if (t) {
                                for (var r = 0, a = $.length; r < a; r++)
                                    if (document[$[r]]) {
                                        document[$[r]]();
                                        break
                                    }
                                H.toggleClass(e.vidEle.parentNode, "video-stream-full", !1), n.fullElement && H.toggleClass(n.fullElement, "kmp-video-in-full", !1), n.onfullscreenChange && n.onfullscreenChange(!1)
                            } else {
                                for (var s = n.fullElement ? n.fullElement : e.vidEle.parentNode, l = 0, c = ee.length; l < c; l++)
                                    if (s[ee[l]]) {
                                        s[ee[l]]();
                                        break
                                    }
                                H.toggleClass(s, "video-stream-full", !0), n.fullElement && H.toggleClass(s, "kmp-video-in-full", !0), n.onfullscreenChange && n.onfullscreenChange(!0)
                            }
                        }
                    }
                    n.container.appendChild(i), n.container.appendChild(r)
                }
            }, {
                key: "hideRelatedMenus",
                value: function() {
                    if (this.buttonWithMenus && this.buttonWithMenus.length > 0)
                        for (var e = 0, t = this.buttonWithMenus.length; e < t; e++) this.buttonWithMenus[e].hideMenu()
                }
            }, {
                key: "hide",
                value: function() {
                    H.toggleClass(this.container, V.CTL_HIDE, !0)
                }
            }, {
                key: "show",
                value: function() {
                    H.toggleClass(this.container, V.CTL_HIDE, !1)
                }
            }]), e
        }(),
        we = function() {
            function e(t) {
                D(this, e);
                var n = [];
                n.push("<div class='kmp-loading-icon'>"), n.push("<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'"), n.push("width='100%' height='100%' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'>"), n.push("<path opacity='0.2' class='" + t + "' d='M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z'/>"), n.push("<path class='" + t + "' d='M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z'>"), n.push("<animateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 20 20' to='360 20 20' dur='0.5s' repeatCount='indefinite'/>"), n.push("</path></svg></div>"), this.container = document.createElement("div"), this.container.setAttribute("title", "Loading..."), this.container.setAttribute("aria-label", "Loading..."), this.container.innerHTML = n.join(""), H.toggleClass(this.container, "kmp-loading", !0)
            }
            return O(e, [{
                key: "hide",
                value: function() {
                    H.toggleClass(this.container, "kmp-hide", !0)
                }
            }, {
                key: "show",
                value: function() {
                    H.toggleClass(this.container, "kmp-hide", !1)
                }
            }, {
                key: "visible",
                get: function() {
                    return H.hasClass(this.container, "kmp-hide")
                }
            }]), e
        }(),
        ke = function(e) {
            function t(e, n) {
                D(this, t);
                var o = B(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return o.name = "ParsingError", o.code = e.code, o.message = n || e.message, o
            }
            return Y(t, e), O(t, null, [{
                key: "Errors",
                get: function() {
                    return {
                        BadSignature: {
                            code: 0,
                            message: "Malformed WebVTT signature."
                        },
                        BadTimeStamp: {
                            code: 1,
                            message: "Malformed time stamp."
                        }
                    }
                }
            }]), t
        }(Error),
        ye = function() {
            function e() {
                D(this, e), this.values = {}
            }
            return O(e, [{
                key: "set",
                value: function(e, t) {
                    this.get(e) || "" === t || (this.values[e] = t)
                }
            }, {
                key: "get",
                value: function(e, t, n) {
                    return n ? this.has(e) ? this.values[e] : t[n] : this.has(e) ? this.values[e] : t
                }
            }, {
                key: "has",
                value: function(e) {
                    return e in this.values
                }
            }, {
                key: "alt",
                value: function(e, t, n) {
                    for (var o = 0; o < n.length; ++o)
                        if (t === n[o]) {
                            this.set(e, t);
                            break
                        }
                }
            }, {
                key: "integer",
                value: function(e, t) {
                    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                }
            }, {
                key: "percent",
                value: function(e, t) {
                    return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
                }
            }]), e
        }(),
        Ee = function() {
            function e() {
                D(this, e)
            }
            return O(e, [{
                key: "decode",
                value: function(e) {
                    if (!e) return "";
                    if ("string" != typeof e) throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(e))
                }
            }]), e
        }(),
        xe = {
            "": !0,
            lr: !0,
            rl: !0
        },
        Le = {
            start: !0,
            middle: !0,
            end: !0,
            left: !0,
            right: !0
        },
        Te = function() {
            function e(t, n, o) {
                D(this, e), this.hasBeenReset = !1, this._id = "", this._pauseOnExit = !1, this._startTime = t, this._endTime = n, this._text = o, this._region = null, this._vertical = "", this._snapToLines = !0, this._line = "auto", this._lineAlign = "start", this._position = 50, this._positionAlign = "middle", this._size = 50, this._align = "middle", this.displayState = void 0
            }
            return O(e, [{
                key: "findDirectionSetting",
                value: function(e) {
                    return "string" == typeof e && (!!xe[e.toLowerCase()] && e.toLowerCase())
                }
            }, {
                key: "findAlignSetting",
                value: function(e) {
                    return "string" == typeof e && (!!Le[e.toLowerCase()] && e.toLowerCase())
                }
            }, {
                key: "extend",
                value: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) e[o] = n[o]
                    }
                    return e
                }
            }, {
                key: "toJSON",
                value: function() {
                    var e = {},
                        t = this;
                    return Object.keys(this).forEach(function(n) {
                        "getCueAsHTML" !== n && "hasBeenReset" !== n && "displayState" !== n && (e[n] = t[n])
                    }), e
                }
            }, {
                key: "create",
                value: function(t) {
                    if (!t.hasOwnProperty("startTime") || !t.hasOwnProperty("endTime") || !t.hasOwnProperty("text")) throw new Error("You must at least have start time, end time, and text.");
                    var n = new e(t.startTime, t.endTime, t.text);
                    for (var o in t) n.hasOwnProperty(o) && (n[o] = t[o]);
                    return n
                }
            }, {
                key: "fromJSON",
                value: function(e) {
                    return this.create(JSON.parse(e))
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                },
                set: function(e) {
                    this._id = "" + e
                }
            }, {
                key: "pauseOnExit",
                get: function() {
                    return this._pauseOnExit
                },
                set: function(e) {
                    this._pauseOnExit = !!e
                }
            }, {
                key: "startTime",
                get: function() {
                    return this._startTime
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                    this._startTime = e, this.hasBeenReset = !0
                }
            }, {
                key: "endTime",
                get: function() {
                    return this._endTime
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                    this._endTime = e, this.hasBeenReset = !0
                }
            }, {
                key: "text",
                get: function() {
                    return this._text
                },
                set: function(e) {
                    this._text = "" + e, this.hasBeenReset = !0
                }
            }, {
                key: "region",
                get: function() {
                    return this._region
                },
                set: function(e) {
                    this._region = e, this.hasBeenReset = !0
                }
            }, {
                key: "vertical",
                get: function() {
                    return this._vertical
                },
                set: function(e) {
                    var t = this.findDirectionSetting(e);
                    if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                    this._vertical = t, this.hasBeenReset = !0
                }
            }, {
                key: "snapToLines",
                get: function() {
                    return this._snapToLines
                },
                set: function(e) {
                    this._snapToLines = !!e, this.hasBeenReset = !0
                }
            }, {
                key: "line",
                get: function() {
                    return this._line
                },
                set: function(e) {
                    if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                    this._line = e, this.hasBeenReset = !0
                }
            }, {
                key: "lineAlign",
                get: function() {
                    return this._lineAlign
                },
                set: function(e) {
                    var t = this.findAlignSetting(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    this._lineAlign = t, this.hasBeenReset = !0
                }
            }, {
                key: "position",
                get: function() {
                    return this._position
                },
                set: function(e) {
                    if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                    this._position = e, this.hasBeenReset = !0
                }
            }, {
                key: "positionAlign",
                get: function() {
                    return this._positionAlign
                },
                set: function(e) {
                    var t = this.findAlignSetting(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    this._positionAlign = t, this.hasBeenReset = !0
                }
            }, {
                key: "size",
                get: function() {
                    return this._size
                },
                set: function(e) {
                    if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                    this._size = e, this.hasBeenReset = !0
                }
            }, {
                key: "align",
                get: function() {
                    return this._align
                },
                set: function(e) {
                    var t = this.findAlignSetting(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    this._align = t, this.hasBeenReset = !0
                }
            }]), e
        }(),
        Ae = {
            "": !0,
            up: !0
        },
        Ce = function() {
            function e() {
                D(this, e), this._width = 100, this._lines = 3, this._regionAnchorX = 0, this._regionAnchorY = 100, this._viewportAnchorX = 0, this._viewportAnchorY = 100, this._scroll = ""
            }
            return O(e, [{
                key: "findScrollSetting",
                value: function(e) {
                    return "string" == typeof e && (!!Ae[e.toLowerCase()] && e.toLowerCase())
                }
            }, {
                key: "isValidPercentValue",
                value: function(e) {
                    return "number" == typeof e && e >= 0 && e <= 100
                }
            }, {
                key: "create",
                value: function(t) {
                    var n = new e;
                    for (var o in t) n.hasOwnProperty(o) && (n[o] = t[o]);
                    return n
                }
            }, {
                key: "fromJSON",
                value: function(e) {
                    return this.create(JSON.parse(e))
                }
            }, {
                key: "width",
                get: function() {
                    return this._width
                },
                set: function(e) {
                    if (!this.isValidPercentValue(e)) throw new Error("Width must be between 0 and 100.");
                    this._width = e
                }
            }, {
                key: "lines",
                get: function() {
                    return this._lines
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                    this._lines = e
                }
            }, {
                key: "regionAnchorY",
                get: function() {
                    return this._regionAnchorY
                },
                set: function(e) {
                    if (!this.isValidPercentValue(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    this._regionAnchorY = e
                }
            }, {
                key: "regionAnchorX",
                get: function() {
                    return this._regionAnchorX
                },
                set: function(e) {
                    if (!this.isValidPercentValue(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    this._regionAnchorX = e
                }
            }, {
                key: "viewportAnchorY",
                get: function() {
                    return this._viewportAnchorY
                },
                set: function(e) {
                    if (!this.isValidPercentValue(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    this._viewportAnchorY = e
                }
            }, {
                key: "viewportAnchorX",
                get: function() {
                    return this._viewportAnchorX
                },
                set: function(e) {
                    if (!this.isValidPercentValue(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    this._viewportAnchorX = e
                }
            }, {
                key: "scroll",
                get: function() {
                    return this._scroll
                },
                set: function(e) {
                    var t = this.findScrollSetting(e);
                    if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                    this._scroll = t
                }
            }]), e
        }(),
        Se = function() {
            function e(t, n) {
                D(this, e), this.window = t, this.state = "INITIAL", this.buffer = "", this.decoder = n || new Ee, this.regionList = [], this.onparsingerror = null, this.oncue = null, this.onregion = null, this.onflush = null
            }
            return O(e, [{
                key: "reportOrThrowError",
                value: function(e) {
                    if (!(e instanceof ke)) throw e;
                    this.onparsingerror && this.onparsingerror(e)
                }
            }, {
                key: "parseCue",
                value: function(e, t, n) {
                    function o() {
                        var t = a(e);
                        if (null === t) throw new ke(ke.Errors.BadTimeStamp, "Malformed timestamp: " + r);
                        return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
                    }

                    function i() {
                        e = e.replace(/^\s+/, "")
                    }
                    var r = e;
                    if (i(), t.startTime = o(), i(), "--\x3e" !== e.substr(0, 3)) throw new ke(ke.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
                    e = e.substr(3), i(), t.endTime = o(), i(),
                        function(e, t) {
                            var o = new ye;
                            s(e, function(e, t) {
                                switch (e) {
                                    case "region":
                                        for (var i = n.length - 1; i >= 0; i--)
                                            if (n[i].id === t) {
                                                o.set(e, n[i].region);
                                                break
                                            }
                                        break;
                                    case "vertical":
                                        o.alt(e, t, ["rl", "lr"]);
                                        break;
                                    case "line":
                                        var r = t.split(","),
                                            a = r[0];
                                        o.integer(e, a), o.percent(e, a) && o.set("snapToLines", !1), o.alt(e, a, ["auto"]), 2 === r.length && o.alt("lineAlign", r[1], ["start", "middle", "end"]);
                                        break;
                                    case "position":
                                        r = t.split(","), o.percent(e, r[0]), 2 === r.length && o.alt("positionAlign", r[1], ["start", "middle", "end"]);
                                        break;
                                    case "size":
                                        o.percent(e, t);
                                        break;
                                    case "align":
                                        o.alt(e, t, ["start", "middle", "end", "left", "right"])
                                }
                            }, /:/, /\s/), t.region = o.get("region", null), t.vertical = o.get("vertical", ""), t.line = o.get("line", "auto"), t.lineAlign = o.get("lineAlign", "start"), t.snapToLines = o.get("snapToLines", !0), t.size = o.get("size", 100), t.align = o.get("align", "middle"), t.position = o.get("position", "auto"), t.positionAlign = o.get("positionAlign", {
                                start: "start",
                                left: "start",
                                middle: "middle",
                                end: "end",
                                right: "end"
                            }, t.align)
                        }(e, t)
                }
            }, {
                key: "parse",
                value: function(e) {
                    function t() {
                        for (var e = o.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
                        var n = e.substr(0, t);
                        return "\r" === e[t] && ++t, "\n" === e[t] && ++t, o.buffer = e.substr(t), n
                    }

                    function n(e) {
                        var t = new ye;
                        if (s(e, function(e, n) {
                                switch (e) {
                                    case "id":
                                        t.set(e, n);
                                        break;
                                    case "width":
                                        t.percent(e, n);
                                        break;
                                    case "lines":
                                        t.integer(e, n);
                                        break;
                                    case "regionanchor":
                                    case "viewportanchor":
                                        var o = n.split(",");
                                        if (2 !== o.length) break;
                                        var i = new ye;
                                        if (i.percent("x", o[0]), i.percent("y", o[1]), !i.has("x") || !i.has("y")) break;
                                        t.set(e + "X", i.get("x")), t.set(e + "Y", i.get("y"));
                                        break;
                                    case "scroll":
                                        t.alt(e, n, ["up"])
                                }
                            }, /=/, /\s/), t.has("id")) {
                            var n = new Ce;
                            n.width = t.get("width", 100), n.lines = t.get("lines", 3), n.regionAnchorX = t.get("regionanchorX", 0), n.regionAnchorY = t.get("regionanchorY", 100), n.viewportAnchorX = t.get("viewportanchorX", 0), n.viewportAnchorY = t.get("viewportanchorY", 100), n.scroll = t.get("scroll", ""), o.onregion && o.onregion(n), o.regionList.push({
                                id: t.get("id"),
                                region: n
                            })
                        }
                    }
                    var o = this;
                    e && (o.buffer += o.decoder.decode(e, {
                        stream: !0
                    }));
                    try {
                        var i = void 0;
                        if ("INITIAL" === o.state) {
                            if (!/\r\n|\n/.test(o.buffer)) return this;
                            var r = (i = t()).match(/^WEBVTT([ \t].*)?$/);
                            if (!r || !r[0]) throw new ke(ke.Errors.BadSignature);
                            o.state = "HEADER"
                        }
                        for (var a = !1; o.buffer;) {
                            if (!/\r\n|\n/.test(o.buffer)) return this;
                            switch (a ? a = !1 : i = t(), o.state) {
                                case "HEADER":
                                    /:/.test(i) ? function(e) {
                                        s(e, function(e, t) {
                                            switch (e) {
                                                case "Region":
                                                    n(t)
                                            }
                                        }, /:/)
                                    }(i) : i || (o.state = "ID");
                                    continue;
                                case "NOTE":
                                    i || (o.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(i)) {
                                        o.state = "NOTE";
                                        break
                                    }
                                    if (!i) continue;
                                    if (o.cue = new Te(0, 0, ""), o.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                        o.cue.id = i;
                                        continue
                                    }
                                case "CUE":
                                    try {
                                        this.parseCue(i, o.cue, o.regionList)
                                    } catch (e) {
                                        o.reportOrThrowError(e), o.cue = null, o.state = "BADCUE";
                                        continue
                                    }
                                    o.state = "CUETEXT";
                                    continue;
                                case "CUETEXT":
                                    var l = -1 !== i.indexOf("--\x3e");
                                    if (!i || l && (a = !0)) {
                                        o.oncue && o.oncue(o.cue), o.cue = null, o.state = "ID";
                                        continue
                                    }
                                    o.cue.text && (o.cue.text += "\n"), o.cue.text += i;
                                    continue;
                                case "BADCUE":
                                    i || (o.state = "ID")
                            }
                        }
                    } catch (e) {
                        o.reportOrThrowError(e), "CUETEXT" === o.state && o.cue && o.oncue && o.oncue(o.cue), o.cue = null, o.state = "INITIAL" === o.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                }
            }, {
                key: "flush",
                value: function() {
                    var e = this;
                    try {
                        if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new ke(ke.Errors.BadSignature)
                    } catch (t) {
                        e.reportOrThrowError(t)
                    }
                    return e.onflush && e.onflush(), this
                }
            }]), e
        }(),
        _e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        Re = 1e3,
        Me = 60 * Re,
        Ie = 60 * Me,
        Ne = 24 * Ie,
        Pe = 365.25 * Ne,
        De = function(e, t) {
            t = t || {};
            var n = typeof e;
            if ("string" === n && e.length > 0) return c(e);
            if ("number" === n && !1 === isNaN(e)) return t.long ? u(e) : d(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        },
        Oe = l(function(e, t) {
            function n(e) {
                var n, o = 0;
                for (n in e) o = (o << 5) - o + e.charCodeAt(n), o |= 0;
                return t.colors[Math.abs(o) % t.colors.length]
            }

            function o(e) {
                function o() {
                    if (o.enabled) {
                        var e = o,
                            n = +new Date,
                            i = n - (l || n);
                        e.diff = i, e.prev = l, e.curr = n, l = n;
                        for (var r = new Array(arguments.length), a = 0; a < r.length; a++) r[a] = arguments[a];
                        r[0] = t.coerce(r[0]), "string" != typeof r[0] && r.unshift("%O");
                        var s = 0;
                        r[0] = r[0].replace(/%([a-zA-Z%])/g, function(n, o) {
                            if ("%%" === n) return n;
                            s++;
                            var i = t.formatters[o];
                            if ("function" == typeof i) {
                                var a = r[s];
                                n = i.call(e, a), r.splice(s, 1), s--
                            }
                            return n
                        }), t.formatArgs.call(e, r), (o.log || t.log || void 0).apply(e, r)
                    }
                }
                return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = n(e), "function" == typeof t.init && t.init(o), o
            }

            function i(e) {
                t.save(e), t.names = [], t.skips = [];
                for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), o = n.length, i = 0; i < o; i++) n[i] && ("-" === (e = n[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
            }

            function r() {
                t.enable("")
            }

            function a(e) {
                var n, o;
                for (n = 0, o = t.skips.length; n < o; n++)
                    if (t.skips[n].test(e)) return !1;
                for (n = 0, o = t.names.length; n < o; n++)
                    if (t.names[n].test(e)) return !0;
                return !1
            }

            function s(e) {
                return e instanceof Error ? e.stack || e.message : e
            }(t = e.exports = o.debug = o.default = o).coerce = s, t.disable = r, t.enable = i, t.enabled = a, t.humanize = De, t.names = [], t.skips = [], t.formatters = {};
            var l
        }),
        Ye = l(function(e, t) {
            function n() {
                return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }

            function o(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                    var o = "color: " + this.color;
                    e.splice(1, 0, o, "color: inherit");
                    var i = 0,
                        r = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (i++, "%c" === e && (r = i))
                    }), e.splice(r, 0, o)
                }
            }

            function i() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function r(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }

            function a() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
            }(t = e.exports = Oe).log = i, t.formatArgs = o, t.save = r, t.load = a, t.useColors = n, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(a())
        }),
        Be = function() {
            function e() {
                D(this, e)
            }
            return O(e, null, [{
                key: "warn",
                value: function(t) {
                    if (e.DEBUG) {
                        Ye.enable("*");
                        var n = Ye("KMP:warn");
                        n(t)
                    }
                }
            }, {
                key: "error",
                value: function(t) {
                    if (e.DEBUG) {
                        Ye.enable("*");
                        var n = Ye("KMP:error");
                        n(t)
                    }
                }
            }, {
                key: "log",
                value: function(t) {
                    e.DEBUG && (Ye.enable("*"), Ye("KMP:log")(t))
                }
            }]), e
        }();
    Be.DEBUG = !0;
    var He = function() {
            function e() {
                D(this, e);
                var t = this,
                    n = null,
                    o = 3;
                t.caches = {}, t.activeCues = [], t.activeRegions = [], t.activeData = "", t.onResult = null, t.load = function(e) {
                    function i() {
                        t.caches[e] && t.caches[e].loaded ? (t.activeCues = t.caches[e].cues, t.activeData = t.caches[e].data, t.activeRegions = t.caches[e].regions, t.onResult && t.onResult()) : (delete t.caches[e], n && n.abort(), n = r(), (o -= 1) < 0 ? n = null : n ? (n.onreadystatechange = a, n.open("get", e, !0), n.timeout = 1e4, n.ontimeout = i, n.send()) : Be.error(F.ERR_XHR))
                    }

                    function r() {
                        if (window.XMLHttpRequest) return new window.XMLHttpRequest;
                        try {
                            return new window.ActiveXObject("MSXML2.XMLHTTP.3.0")
                        } catch (e) {
                            return null
                        }
                    }

                    function a() {
                        if (n && 4 === n.readyState)
                            if (200 === n.status) {
                                var o = {
                                    loaded: !0,
                                    cues: [],
                                    data: n.responseText,
                                    regions: [],
                                    status: "ok"
                                };
                                o.loaded = !0, o.data = n.responseText;
                                var i = new Se;
                                i.oncue = function(e) {
                                    o.cues.push(e)
                                }, i.onregion = function(e) {
                                    o.regions.push(e)
                                }, i.onparsingerror = function(e) {
                                    o.status = e.message
                                };
                                try {
                                    i.parse(n.responseText)
                                } catch (e) {
                                    o.status = e.message
                                } finally {
                                    i.flush()
                                }
                                t.caches[e] = o, t.activeCues = o.cues, t.activeData = o.data, t.activeRegions = o.regions, t.onResult && t.onResult(), Be.log(F.OK)
                            } else Be.warn(F.FAIL_WITH_CODE + n.status)
                    }
                    o = 3, i()
                }
            }
            return O(e, [{
                key: "parse",
                value: function(e, t) {
                    var n = new Se,
                        o = {
                            cues: [],
                            data: e,
                            regions: [],
                            status: "ok"
                        };
                    n.oncue = function(e) {
                        o.cues.push(e)
                    }, n.onregion = function(e) {
                        o.regions.push(e)
                    }, n.onparsingerror = function(e) {
                        o.status = e.message
                    };
                    try {
                        n.parse(e)
                    } catch (e) {
                        o.status = e.message
                    } finally {
                        n.flush()
                    }
                    t && t(o)
                }
            }]), e
        }(),
        Xe = function() {
            function e() {
                D(this, e), this.vtt = new He, this.container = document.createElement("div"), this.activeText = "", H.toggleClass(this.container, "kmp-captions", !0), this.hide()
            }
            return O(e, [{
                key: "load",
                value: function(e) {
                    this.vtt.load(e)
                }
            }, {
                key: "render",
                value: function(e) {
                    if (this.vtt.activeCues.length > 0 && !H.hasClass(this.container, "kmp-hide")) {
                        for (var t = null, n = 0, o = this.vtt.activeCues.length; n < o; n++) {
                            var i = this.vtt.activeCues[n];
                            if (e >= i.startTime && e <= i.endTime) {
                                t = i;
                                break
                            }
                        }
                        t ? this.activeText !== t.text && (this.container.innerHTML = t.text, this.activeText = t.text) : (this.container.innerHTML = "", this.activeText = "")
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    H.toggleClass(this.container, "kmp-hide", !0)
                }
            }, {
                key: "show",
                value: function() {
                    H.toggleClass(this.container, "kmp-hide", !1)
                }
            }]), e
        }(),
        Ue = {
            add: function(e, t) {
                e.classList ? e.classList.add(t) : m(e, t)
            },
            remove: function(e, t) {
                e.classList ? e.classList.remove(t) : f(e, t)
            },
            list: function(e) {
                return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
            }
        },
        We = {};
    We.e = function(e, t) {
        var n = document.createElement(e);
        return n.className = t, n
    }, We.appendTo = function(e, t) {
        return t.appendChild(e), e
    }, We.css = function(e, t, n) {
        return "object" == typeof t ? b(e, t) : void 0 === n ? h(e, t) : g(e, t, n)
    }, We.matches = function(e, t) {
        return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
    }, We.remove = function(e) {
        void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }, We.queryChildren = function(e, t) {
        return Array.prototype.filter.call(e.childNodes, function(e) {
            return We.matches(e, t)
        })
    };
    var ze = We,
        Ge = l(function(e, t) {
            function n(e) {
                return function(t, n) {
                    e(t, "ps--in-scrolling"), void 0 !== n ? e(t, "ps--" + n) : (e(t, "ps--x"), e(t, "ps--y"))
                }
            }
            var o = t.toInt = function(e) {
                    return parseInt(e, 10) || 0
                },
                i = t.clone = function(e) {
                    if (e) {
                        if (Array.isArray(e)) return e.map(i);
                        if ("object" == typeof e) {
                            var t = {};
                            for (var n in e) t[n] = i(e[n]);
                            return t
                        }
                        return e
                    }
                    return null
                };
            t.extend = function(e, t) {
                var n = i(e);
                for (var o in t) n[o] = i(t[o]);
                return n
            }, t.isEditable = function(e) {
                return ze.matches(e, "input,[contenteditable]") || ze.matches(e, "select,[contenteditable]") || ze.matches(e, "textarea,[contenteditable]") || ze.matches(e, "button,[contenteditable]")
            }, t.removePsClasses = function(e) {
                for (var t = Ue.list(e), n = 0; n < t.length; n++) {
                    var o = t[n];
                    0 === o.indexOf("ps-") && Ue.remove(e, o)
                }
            }, t.outerWidth = function(e) {
                return o(ze.css(e, "width")) + o(ze.css(e, "paddingLeft")) + o(ze.css(e, "paddingRight")) + o(ze.css(e, "borderLeftWidth")) + o(ze.css(e, "borderRightWidth"))
            }, t.startScrolling = n(Ue.add), t.stopScrolling = n(Ue.remove), t.env = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
            }
        }),
        Ve = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        },
        je = function(e) {
            this.element = e, this.events = {}
        };
    je.prototype.bind = function(e, t) {
        void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
    }, je.prototype.unbind = function(e, t) {
        var n = void 0 !== t;
        this.events[e] = this.events[e].filter(function(o) {
            return !(!n || o === t) || (this.element.removeEventListener(e, o, !1), !1)
        }, this)
    }, je.prototype.unbindAll = function() {
        for (var e in this.events) this.unbind(e)
    };
    var Fe = function() {
        this.eventElements = []
    };
    Fe.prototype.eventElement = function(e) {
        var t = this.eventElements.filter(function(t) {
            return t.element === e
        })[0];
        return void 0 === t && (t = new je(e), this.eventElements.push(t)), t
    }, Fe.prototype.bind = function(e, t, n) {
        this.eventElement(e).bind(t, n)
    }, Fe.prototype.unbind = function(e, t, n) {
        this.eventElement(e).unbind(t, n)
    }, Fe.prototype.unbindAll = function() {
        for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
    }, Fe.prototype.once = function(e, t, n) {
        var o = this.eventElement(e),
            i = function(e) {
                o.unbind(t, i), n(e)
            };
        o.bind(t, i)
    };
    var Ze = Fe,
        Ke = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }(),
        qe = {},
        Qe = {
            add: function(e) {
                var t = Ke();
                return k(e, t), qe[t] = new v(e), qe[t]
            },
            remove: function(e) {
                delete qe[w(e)], y(e)
            },
            get: function(e) {
                return qe[w(e)]
            }
        },
        Je = function(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t
        },
        $e = function(e, t, n) {
            if (void 0 === e) throw "You must provide an element to the update-scroll function";
            if (void 0 === t) throw "You must provide an axis to the update-scroll function";
            if (void 0 === n) throw "You must provide a value to the update-scroll function";
            "top" === t && n <= 0 && (e.scrollTop = n = 0, e.dispatchEvent(Je("ps-y-reach-start"))), "left" === t && n <= 0 && (e.scrollLeft = n = 0, e.dispatchEvent(Je("ps-x-reach-start")));
            var o = Qe.get(e);
            "top" === t && n >= o.contentHeight - o.containerHeight && ((n = o.contentHeight - o.containerHeight) - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, e.dispatchEvent(Je("ps-y-reach-end"))), "left" === t && n >= o.contentWidth - o.containerWidth && ((n = o.contentWidth - o.containerWidth) - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, e.dispatchEvent(Je("ps-x-reach-end"))), void 0 === o.lastTop && (o.lastTop = e.scrollTop), void 0 === o.lastLeft && (o.lastLeft = e.scrollLeft), "top" === t && n < o.lastTop && e.dispatchEvent(Je("ps-scroll-up")), "top" === t && n > o.lastTop && e.dispatchEvent(Je("ps-scroll-down")), "left" === t && n < o.lastLeft && e.dispatchEvent(Je("ps-scroll-left")), "left" === t && n > o.lastLeft && e.dispatchEvent(Je("ps-scroll-right")), "top" === t && n !== o.lastTop && (e.scrollTop = o.lastTop = n, e.dispatchEvent(Je("ps-scroll-y"))), "left" === t && n !== o.lastLeft && (e.scrollLeft = o.lastLeft = n, e.dispatchEvent(Je("ps-scroll-x")))
        },
        et = function(e) {
            var t = Qe.get(e);
            t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
            var n;
            e.contains(t.scrollbarXRail) || ((n = ze.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && n.forEach(function(e) {
                ze.remove(e)
            }), ze.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || ((n = ze.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && n.forEach(function(e) {
                ze.remove(e)
            }), ze.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = E(t, Ge.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = Ge.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = E(t, Ge.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = Ge.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), x(e, t), t.scrollbarXActive ? Ue.add(e, "ps--active-x") : (Ue.remove(e, "ps--active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, $e(e, "left", 0)), t.scrollbarYActive ? Ue.add(e, "ps--active-y") : (Ue.remove(e, "ps--active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, $e(e, "top", 0))
        },
        tt = function(e) {
            M(e, Qe.get(e))
        },
        nt = {
            "click-rail": function(e) {
                L(e, Qe.get(e))
            },
            "drag-scrollbar": function(e) {
                var t = Qe.get(e);
                T(e, t), A(e, t)
            },
            keyboard: function(e) {
                C(e, Qe.get(e))
            },
            wheel: function(e) {
                S(e, Qe.get(e))
            },
            touch: function(e) {
                (Ge.env.supportsTouch || Ge.env.supportsIePointer) && _(e, Qe.get(e), Ge.env.supportsTouch, Ge.env.supportsIePointer)
            },
            selection: function(e) {
                R(e, Qe.get(e))
            }
        },
        ot = {
            initialize: function(e, t) {
                t = "object" == typeof t ? t : {}, Ue.add(e, "ps");
                var n = Qe.add(e);
                n.settings = Ge.extend(n.settings, t), Ue.add(e, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function(t) {
                    nt[t](e)
                }), tt(e), et(e)
            },
            update: function(e) {
                var t = Qe.get(e);
                t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, ze.css(t.scrollbarXRail, "display", "block"), ze.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = Ge.toInt(ze.css(t.scrollbarXRail, "marginLeft")) + Ge.toInt(ze.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = Ge.toInt(ze.css(t.scrollbarYRail, "marginTop")) + Ge.toInt(ze.css(t.scrollbarYRail, "marginBottom")), ze.css(t.scrollbarXRail, "display", "none"), ze.css(t.scrollbarYRail, "display", "none"), et(e), $e(e, "top", e.scrollTop), $e(e, "left", e.scrollLeft), ze.css(t.scrollbarXRail, "display", ""), ze.css(t.scrollbarYRail, "display", ""))
            },
            destroy: function(e) {
                var t = Qe.get(e);
                t && (t.event.unbindAll(), ze.remove(t.scrollbarX), ze.remove(t.scrollbarY), ze.remove(t.scrollbarXRail), ze.remove(t.scrollbarYRail), Ge.removePsClasses(e), Qe.remove(e))
            }
        },
        it = function() {
            function e() {
                D(this, e), this.container = document.createElement("ul"), this.onchange = null, this.items = [], ot.initialize(this.container), H.toggleClass(this.container, "kmp-submenu", !0)
            }
            return O(e, [{
                key: "addItem",
                value: function(e) {
                    function t(e) {
                        d.onchange && d.onchange(u.getAttribute("data-value"), u.getAttribute("data-belong"));
                        for (var t = 0; t < d.items.length; t++) {
                            var n = d.items[t];
                            n.getAttribute("data-belong") === u.getAttribute("data-belong") && H.toggleClass(n, "active", !1)
                        }
                        H.toggleClass(u, "active", !0)
                    }
                    var n = e.label,
                        o = void 0 === n ? "untitled" : n,
                        i = e.value,
                        r = void 0 === i ? "unknown" : i,
                        a = e.type,
                        s = void 0 === a ? "normal" : a,
                        l = e.belongs,
                        c = void 0 === l ? "" : l,
                        d = this,
                        u = document.createElement("li");
                    u.innerHTML = o, u.setAttribute("data-value", r), c && u.setAttribute("data-belong", c), u.setAttribute("data-label", o), "fixed" === s ? (H.toggleClass(u, "kmp-menu-item", !0), H.toggleClass(u, "fixed", !0)) : (H.toggleClass(u, "kmp-menu-item", !0), u.addEventListener("touchend", function(e) {
                        t(e)
                    }), u.addEventListener("click", function(e) {
                        t(e)
                    })), d.container.appendChild(u), d.items.push(u), ot.update(this.container)
                }
            }, {
                key: "selectItem",
                value: function(e, t) {
                    for (var n = 0, o = this.items.length; n < o; n++) this.items[n].getAttribute("data-belong") === e && (parseFloat(this.items[n].getAttribute("data-value")) === parseFloat(t) ? H.toggleClass(this.items[n], "active", !0) : H.toggleClass(this.items[n], "active", !1))
                }
            }, {
                key: "removeAllItem",
                value: function() {
                    this.container.innerHTML = "", this.items = [], ot.update(this.container)
                }
            }, {
                key: "open",
                value: function() {
                    H.toggleClass(this.container, "kmp-menu-show", !0)
                }
            }, {
                key: "close",
                value: function() {
                    var e = this;
                    H.toggleClass(e.container, "kmp-menu-show", !1), e.container.scrollTop = 0, ot.update(e.container)
                }
            }]), e
        }(),
        rt = function() {
            function e() {
                D(this, e), this.outdatedBrowser = function(e) {
                    function t(e) {
                        a.style.opacity = e / 100, a.style.filter = "alpha(opacity=" + e + ")"
                    }

                    function n(e) {
                        t(e), 1 === e && (a.style.display = "block"), 100 === e && (l = !0)
                    }

                    function o() {
                        var e = document.getElementById("btnCloseUpdateBrowser"),
                            t = document.getElementById("btnUpdateBrowser");
                        a.style.backgroundColor = s.bkgColor, a.style.color = s.txtColor, a.children[0].style.color = s.txtColor, a.children[1].style.color = s.txtColor, t.style.color = s.txtColor, t.style.borderColor && (t.style.borderColor = s.txtColor), e.style.color = s.txtColor, e.onmousedown = function() {
                            return a.style.display = "none", !1
                        }, t.onmouseover = function() {
                            this.style.color = s.bkgColor, this.style.backgroundColor = s.txtColor
                        }, t.onmouseout = function() {
                            this.style.color = s.txtColor, this.style.backgroundColor = s.bkgColor
                        }
                    }

                    function i() {
                        var e = !1;
                        if (window.XMLHttpRequest) e = new XMLHttpRequest;
                        else if (window.ActiveXObject) try {
                            e = new window.ActiveXObject("Msxml2.XMLHTTP")
                        } catch (t) {
                            try {
                                e = new window.ActiveXObject("Microsoft.XMLHTTP")
                            } catch (t) {
                                e = !1
                            }
                        }
                        return e
                    }

                    function r(e) {
                        var t = document.getElementById("outdated");
                        return 4 === e.readyState && (200 === e.status || 304 === e.status ? t.innerHTML = e.responseText : t.innerHTML = d, o()), !1
                    }
                    var a = document.getElementById("outdated"),
                        s = this;
                    s.defaultOpts = {
                        bgColor: "#f25648",
                        color: "#ffffff",
                        lowerThan: "transform",
                        languagePath: he
                    }, e ? ("IE8" === e.lowerThan || "borderSpacing" === e.lowerThan ? e.lowerThan = "borderSpacing" : "IE9" === e.lowerThan || "boxShadow" === e.lowerThan ? e.lowerThan = "boxShadow" : "IE10" === e.lowerThan || "transform" === e.lowerThan || "" === e.lowerThan || void 0 === e.lowerThan ? e.lowerThan = "transform" : "IE11" !== e.lowerThan && "borderImage" !== e.lowerThan || (e.lowerThan = "borderImage"), s.defaultOpts.bgColor = e.bgColor, s.defaultOpts.color = e.color, s.defaultOpts.lowerThan = e.lowerThan, s.defaultOpts.languagePath = e.languagePath, s.bkgColor = s.defaultOpts.bgColor, s.txtColor = s.defaultOpts.color, s.cssProp = s.defaultOpts.lowerThan, s.languagePath = s.defaultOpts.languagePath) : (s.bkgColor = s.defaultOpts.bgColor, s.txtColor = s.defaultOpts.color, s.cssProp = s.defaultOpts.lowerThan, s.languagePath = s.defaultOpts.languagePath);
                    var l = !0;
                    if (! function() {
                            var e = document.createElement("div"),
                                t = "Khtml Ms O Moz Webkit".split(" "),
                                n = t.length;
                            return function(o) {
                                if (o in e.style) return !0;
                                for (o = o.replace(/^[a-z]/, function(e) {
                                        return e.toUpperCase()
                                    }); n--;)
                                    if (t[n] + o in e.style) return !0;
                                return !1
                            }
                        }()("" + s.cssProp)) {
                        if (l && "1" !== a.style.opacity) {
                            l = !1;
                            for (var c = 1; c <= 100; c++) setTimeout(function(e) {
                                return function() {
                                    n(e)
                                }
                            }(c), 8 * c)
                        }
                        " " === s.languagePath || 0 === s.languagePath.length ? o() : function(e) {
                            var t = i();
                            t && (t.onreadystatechange = function() {
                                r(t)
                            }, t.open("GET", e, !0), t.send(null))
                        }(s.languagePath);
                        var d = '<h6>Your browser is out-of-date!</h6><p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p><p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>'
                    }
                }
            }
            return O(e, [{
                key: "install",
                value: function() {
                    var e = this,
                        t = document.getElementById("outdated");
                    t || ((t = document.createElement("div")).setAttribute("id", "outdated"), document.body.appendChild(t)), "complete" === document.readyState ? e.outdatedBrowser({
                        bgColor: "#f25648",
                        color: "#ffffff",
                        lowerThan: "transform",
                        languagePath: he
                    }) : function(e) {
                        var t = window.onload;
                        "function" != typeof window.onload ? window.onload = e : window.onload = function() {
                            t && t(), e()
                        }
                    }(function() {
                        e.outdatedBrowser({
                            bgColor: "#f25648",
                            color: "#ffffff",
                            lowerThan: "transform",
                            languagePath: he
                        })
                    })
                }
            }]), e
        }(),
        at = function() {
            function e(t, r) {
                function a(e) {
                    e.type === U.WAITING ? v.show() : v.hide()
                }

                function s() {
                    window.clearTimeout(k), t.paused || t.ended || (k = window.setTimeout(function() {
                        H.toggleClass(f, V.HIDE, !0), H.toggleClass(w, V.HIDE, !0), H.toggleClass(d.container, V.HIDE_CURSOR, !0), m && H.toggleClass(m.container, V.CAPTION, !0), p && p.hideRelatedMenus()
                    }, 3e3))
                }

                function l() {
                    window.clearTimeout(k), H.toggleClass(f, V.HIDE, !1), H.toggleClass(w, V.HIDE, !1), H.toggleClass(d.container, V.HIDE_CURSOR, !1), m && H.toggleClass(m.container, V.CAPTION, !1), t.paused || t.ended || s()
                }

                function c(e) {
                    e ? (m.load(e), m.show()) : m.hide()
                }
                D(this, e);
                var d = this;
                document.body.addEventListener("touchstart", function() {}), d.container = document.createElement("div");
                for (var u = n(r.theme), p = new ve, m = new Xe, f = new oe, h = null, g = null, b = new le(ae), v = new we, w = document.createElement("div"), k = -1, y = o(), E = new it, x = new rt, L = 0, T = Z.length; L < T; L++) E.addItem(Z[L]);
                if (r && r.subtitle) {
                    for (var A = 0, C = K.length; A < C; A++) E.addItem(K[A]);
                    for (var S = 0; S < r.subtitle.length; S++) {
                        var _ = r.subtitle[S];
                        E.addItem({
                            label: _.lang,
                            value: _.src,
                            belongs: "subtitle"
                        })
                    }
                }
                d.updateQualityMenu = function(e) {
                    if (e) {
                        for (var t = 0, n = q.length; t < n; t++) E.addItem(q[t]);
                        for (var o = 0, i = e.length; o < i; o++) e[o].height ? E.addItem({
                            label: e[o].height + "p",
                            value: o,
                            belongs: "quality"
                        }) : E.addItem({
                            label: "未知" + o + " p",
                            value: o,
                            belongs: "quality"
                        })
                    }
                }, d.updateQualityMenuCallback = null, E.onchange = function(e, n) {
                    switch (n) {
                        case "quality":
                            null !== d.updateQualityMenuCallback && d.updateQualityMenuCallback(e);
                            break;
                        case "playrate":
                            t.playbackRate = e;
                            break;
                        case "subtitle":
                            c(e)
                    }
                }, f.onchange = function(e) {
                    t && !isNaN(t.duration) && (t.currentTime = e * t.duration)
                }, v.hide(), t.vidEle.parentNode.appendChild(d.container), t.vidEle.parentNode.removeChild(t.vidEle), d.container.appendChild(t.vidEle), b.label = W.PLAY, b.removeClass(V.BTN), b.addClass(V.BTN_BIG_PLAY), b.addClass(u), b.on("click", function() {
                    t.play()
                }), H.toggleClass(b, u, !0), (h = document.createElement("span")).innerHTML = "00:00", (g = document.createElement("span")).innerHTML = "--:--", H.toggleClass(h, V.TIME, !0), H.toggleClass(h, V.TIME_CURRENT, !0), H.toggleClass(g, V.TIME, !0), H.toggleClass(g, V.TIME_TOTAL, !0), t.on(U.PAUSE, function() {
                    b.show(), l()
                }), t.on(U.PLAY, function() {
                    b.hide(), l()
                }), t.on(U.ENDED, function() {
                    l()
                }), t.on(U.WAITING, a), t.on(U.CANPLAY, a), t.on(U.SEEKED, a), t.on(U.TIMEUPDATE, function() {
                    f.played = t.currentTime / t.duration, m.render(t.currentTime), h.innerHTML = i(t.currentTime)
                }), t.on(U.DURATIONCHANGE, function() {
                    isNaN(t.duration) ? g.innerHTML = "--:--" : g.innerHTML = Number.isFinite(t.duration) ? i(t.duration) : "Live"
                }), t.on(U.ENDED, function() {
                    t.currentTime = 0
                }), t.on(U.PROGRESS, function() {
                    t.buffered.length > 0 && (f.buffered = t.buffered.end(0) / t.duration)
                }), t.on(U.RATECHANGE, function() {
                    E.selectItem("playrate", t.playbackRate)
                }), r.fullElement ? p.fullElement = r.fullElement : p.fullElement = null, p.setup(t, {
                    uiList: ["volume", "fullscreen", "play", "setting", "time"],
                    settingMenu: E
                }), p.onfullscreenChange = function(e) {
                    H.toggleClass(d.container, V.IN_FULL, e), d.container.setAttribute("data-fullscreen", e)
                }, H.toggleClass(w, V.BOTTOM, !0), H.toggleClass(d.container, V.PLAYER, !0), H.toggleClass(d.container, u, !0), H.toggleClass(t.vidEle, V.VID, !0), w.appendChild(h), w.appendChild(g), w.appendChild(f.container), w.appendChild(p.container), d.container.appendChild(v.container), d.container.appendChild(w), d.container.appendChild(b.container), d.container.appendChild(m.container), d.container.appendChild(E.container), d.container.addEventListener(z.CLICK, function(e) {
                    e.preventDefault(), y || e.target === d.container && (t && (t.paused ? t.play() : t.pause()), p.hideRelatedMenus())
                }), d.container.addEventListener(z.MOVE, l), d.container.addEventListener("touchstart", l), d.container.addEventListener(z.ENTER, l), d.container.addEventListener("focus", l), f.ontipChange = function(e) {
                    isNaN(t.duration) ? f.tooltip.innerHTML = "--:--" : f.tooltip.innerHTML = Number.isFinite(t.duration) ? i(e * t.duration) : "--:--"
                }, x.install()
            }
            return O(e, [{
                key: "cleanUI",
                value: function() {
                    this.container && (this.container.innerHTML = null, this.container.parentNode && this.container.parentNode.removeChild(this.container))
                }
            }]), e
        }(),
        st = function() {
            function e() {
                D(this, e)
            }
            return O(e, [{
                key: "encodingUTF8",
                value: function(e) {
                    function t(e, t) {
                        for (var n = t || 1 / 0, o = void 0, i = e.length, r = null, a = [], s = 0; s < i; s++) {
                            if ((o = e.charCodeAt(s)) > 55295 && o < 57344) {
                                if (!r) {
                                    if (o > 56319) {
                                        (n -= 3) > -1 && a.push(239, 191, 189);
                                        continue
                                    }
                                    if (s + 1 === i) {
                                        (n -= 3) > -1 && a.push(239, 191, 189);
                                        continue
                                    }
                                    r = o;
                                    continue
                                }
                                if (o < 56320) {
                                    (n -= 3) > -1 && a.push(239, 191, 189), r = o;
                                    continue
                                }
                                o = r - 55296 << 10 | o - 56320 | 65536, r = null
                            } else r && ((n -= 3) > -1 && a.push(239, 191, 189), r = null);
                            if (o < 128) {
                                if ((n -= 1) < 0) break;
                                a.push(o)
                            } else if (o < 2048) {
                                if ((n -= 2) < 0) break;
                                a.push(o >> 6 | 192, 63 & o | 128)
                            } else if (o < 65536) {
                                if ((n -= 3) < 0) break;
                                a.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
                            } else {
                                if (!(o < 2097152)) throw new Error("Invalid code point");
                                if ((n -= 4) < 0) break;
                                a.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
                            }
                        }
                        return a
                    }

                    function n(e, t, n) {
                        for (var i = void 0, r = [], a = t; a < n; a += 3) i = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], r.push(o(i));
                        return r.join("")
                    }

                    function o(e) {
                        return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e]
                    }
                    for (var i = [], r = [], a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) i[s] = a[s], r[a.charCodeAt(s)] = s;
                    return r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63, e ? function(e) {
                        for (var t = void 0, o = e.length, r = o % 3, a = "", s = [], l = 0, c = o - r; l < c; l += 16383) s.push(n(e, l, l + 16383 > c ? c : l + 16383));
                        return 1 === r ? (t = e[o - 1], a += i[t >> 2], a += i[t << 4 & 63], a += "==") : 2 === r && (t = (e[o - 2] << 8) + e[o - 1], a += i[t >> 10], a += i[t >> 4 & 63], a += i[t << 2 & 63], a += "="), s.push(a), s.join("")
                    }(function(e) {
                        return "undefined" == typeof Uint8Array ? t(e) : new Uint8Array(t(e))
                    }(e)) : ""
                }
            }]), e
        }(),
        lt = function() {
            function e() {
                D(this, e), this._marks = [], this.onupdate = null, this.base64 = new st
            }
            return O(e, [{
                key: "mark",
                value: function(e) {
                    var t = e.markName,
                        n = e.data,
                        o = void 0 === n ? null : n,
                        i = e.mediaURI,
                        r = void 0 === i ? null : i;
                    if (this._marks) {
                        var a = {
                            time: this.now,
                            markName: t,
                            mediaURL: this.base64.encodingUTF8(r),
                            data: o
                        };
                        this._marks.push(a), this.onupdate && this.onupdate(a)
                    }
                }
            }, {
                key: "getMarks",
                value: function() {
                    return this._marks ? this._marks.sort(function(e, t) {
                        return e.time > t.time ? 1 : e.time < t.time ? -1 : 0
                    }) : []
                }
            }, {
                key: "clearMarks",
                value: function(e) {
                    if (this._marks)
                        if (e)
                            for (var t = 0, n = this._marks.length; t < n; t += 1) this._marks[t].markName;
                        else this._marks = []
                }
            }, {
                key: "getMarksByName",
                value: function(e) {
                    if (this._marks) {
                        for (var t = [], n = 0, o = this._marks.length; n < o; n += 1) e === this._marks[n].markName && t.push(this._marks[n]);
                        return t
                    }
                    return []
                }
            }, {
                key: "now",
                get: function() {
                    return window.performance && window.performance.now ? window.performance.now() : Date.now ? Date.now() : (new Date).getTime()
                }
            }]), e
        }(),
        ct = function() {
            function e(t, n) {
                D(this, e);
                var o = -1,
                    i = this;
                i.vidEle = t, n && (n.src && "torrent" !== n.mime ? i.vidEle.setAttribute("src", n.src) : i.vidEle.currentSrc || i.vidEle.removeAttribute("src"), i.autoplay = Boolean(n.autoplay), i.poster = n.poster ? n.poster : null, n.preload ? i.vidEle.setAttribute("preload", "auto") : i.vidEle.setAttribute("preload", "true")), i.vidEle.setAttribute("playsinline", !0), i.vidEle.setAttribute("webkit-playsinline", !0), i.vidEle.setAttribute("x5-video-player-type", "h5"), i.vidEle.setAttribute("x5-video-orientation", "landscape|portrait"), i.fadeOutSound = function() {
                    o && (clearInterval(o), o = setInterval(function() {
                        var e = i.vidEle.volume;
                        (e -= .1) <= 0 ? (i.volume = 0, clearInterval(o)) : i.volume = e
                    }, 150))
                }, i.isAD = !1, i.fadeInSound = function() {
                    o && (clearInterval(o), o = setInterval(function() {
                        var e = i.vidEle.volume;
                        (e += .1) >= 1 ? (i.volume = 1, clearInterval(o)) : i.volume = e
                    }, 150))
                }, i.canPlay = !1, i.on("canplay", function() {
                    i.canPlay = !0
                })
            }
            return O(e, [{
                key: "on",
                value: function(e, t) {
                    this.vidEle && this.vidEle.addEventListener(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.vidEle && this.vidEle.removeEventListener(e, t)
                }
            }, {
                key: "load",
                value: function() {
                    if (this.vidEle) try {
                        this.vidEle.load(), this.canPlay = !1
                    } catch (e) {
                        Be.error(e.message)
                    }
                }
            }, {
                key: "play",
                value: function() {
                    if (this.vidEle) try {
                        this.vidEle.play()
                    } catch (e) {
                        Be.error(e.message)
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    if (this.vidEle && this.canPlay) try {
                        this.vidEle.pause()
                    } catch (e) {
                        Be.error(e.message)
                    }
                }
            }, {
                key: "canPlayType",
                value: function(e) {
                    if (!this.vidEle) return !1;
                    try {
                        return Boolean(this.vidEle.canPlayType(e + ""))
                    } catch (e) {
                        return Be.error(e.message), !1
                    }
                }
            }, {
                key: "src",
                get: function() {
                    if (!this.vidEle) return "";
                    try {
                        return this.vidEle.src
                    } catch (e) {
                        return Be.error(e.message), ""
                    }
                },
                set: function(e) {
                    if (this.vidEle)
                        if (e) this.vidEle.removeAttribute("src");
                        else try {
                            this.vidEle.src = e
                        } catch (e) {
                            Be.error(e.message)
                        } else Be.error("video对象为空，设置src属性失败")
                }
            }, {
                key: "currentSrc",
                get: function() {
                    if (!this.vidEle) return "";
                    try {
                        return this.vidEle.currentSrc
                    } catch (e) {
                        return Be.error(e.message), ""
                    }
                }
            }, {
                key: "seeking",
                get: function() {
                    if (!this.vidEle) return !1;
                    try {
                        return Boolean(this.vidEle.seeking)
                    } catch (e) {
                        return Be.error(e.message), !1
                    }
                }
            }, {
                key: "currentTime",
                get: function() {
                    if (!this.vidEle) return 0;
                    try {
                        return parseFloat(this.vidEle.currentTime)
                    } catch (e) {
                        return Be.error(e.message), 0
                    }
                },
                set: function(e) {
                    if (this.vidEle) try {
                        this.vidEle.currentTime = e
                    } catch (e) {
                        Be.error(e.message)
                    } else Be.error("Video对象为空，设置currentTime属性失败!")
                }
            }, {
                key: "videoHeight",
                get: function() {
                    if (!this.vidEle) return 0;
                    try {
                        return this.vidEle.videoHeight
                    } catch (e) {
                        Be.error(e.message)
                    }
                }
            }, {
                key: "videoWidth",
                get: function() {
                    if (!this.vidEle) return 0;
                    try {
                        return this.vidEle.videoWidth
                    } catch (e) {
                        Be.error(e.message)
                    }
                }
            }, {
                key: "duration",
                get: function() {
                    if (!this.vidEle) return NaN;
                    try {
                        return parseFloat(this.vidEle.duration)
                    } catch (e) {
                        return Be.error(e.message), NaN
                    }
                }
            }, {
                key: "paused",
                get: function() {
                    if (!this.vidEle) return !1;
                    try {
                        return Boolean(this.vidEle.paused)
                    } catch (e) {
                        return Be.error(e.message), !1
                    }
                }
            }, {
                key: "defaultPlaybackRate",
                get: function() {
                    return this.vidEle ? this.vidEle.defaultPlaybackRate : 1
                },
                set: function(e) {
                    this.vidEle && (this.vidEle.defaultPlaybackRate = e)
                }
            }, {
                key: "playbackRate",
                get: function() {
                    return this.vidEle ? this.vidEle.playbackRate : 1
                },
                set: function(e) {
                    this.vidEle && (this.vidEle.playbackRate = e)
                }
            }, {
                key: "played",
                get: function() {
                    if (!this.vidEle) return new TimeRanges;
                    try {
                        return this.vidEle.played
                    } catch (e) {
                        return Be.error(e.message), new TimeRanges
                    }
                }
            }, {
                key: "buffered",
                get: function() {
                    if (!this.vidEle) return new TimeRanges;
                    try {
                        return this.vidEle.buffered
                    } catch (e) {
                        return Be.error(e.message), new TimeRanges
                    }
                }
            }, {
                key: "seekable",
                get: function() {
                    if (!this.vidEle) return new TimeRanges;
                    try {
                        return this.vidEle.seekable
                    } catch (e) {
                        return Be.error(e.message), new TimeRanges
                    }
                }
            }, {
                key: "ended",
                get: function() {
                    if (!this.vidEle) return !0;
                    try {
                        return Boolean(this.vidEle.ended)
                    } catch (e) {
                        return Be.error(e.message), !0
                    }
                }
            }, {
                key: "autoplay",
                get: function() {
                    if (!this.vidEle) return !1;
                    try {
                        return Boolean(this.vidEle.autoplay)
                    } catch (e) {
                        return Be.error(e.message), !1
                    }
                },
                set: function(e) {
                    this.vidEle && (Boolean(e) ? this.vidEle.setAttribute("autoplay", !0) : this.vidEle.removeAttribute("autoplay"))
                }
            }, {
                key: "loop",
                get: function() {
                    if (!this.vidEle) return !1;
                    try {
                        return Boolean(this.vidEle.loop)
                    } catch (e) {
                        return Be.error(e.message), !1
                    }
                },
                set: function(e) {
                    this.vidEle && (e ? this.vidEle.setAttribute("loop", !0) : this.vidEle.removeAttribute("loop"))
                }
            }, {
                key: "controls",
                get: function() {
                    return !!this.vidEle && this.vidEle.controls
                },
                set: function(e) {
                    this.vidEle ? e ? this.vidEle.setAttribute("controls", "true") : this.vidEle.removeAttribute("controls") : Be.error("Video对象为空，设置controls属性失败!")
                }
            }, {
                key: "volume",
                get: function() {
                    if (!this.vidEle) return 0;
                    try {
                        return parseFloat(this.vidEle.volume)
                    } catch (e) {
                        return Be.error(e.message), 0
                    }
                },
                set: function(e) {
                    if (this.vidEle) try {
                        this.vidEle.volume = parseFloat(e)
                    } catch (e) {
                        Be.error(e.message)
                    } else Be.error("Video对象为空，设置volume属性失败!")
                }
            }, {
                key: "muted",
                get: function() {
                    if (!this.vidEle) return !0;
                    try {
                        return Boolean(this.vidEle.muted)
                    } catch (e) {
                        return Be.error(e.message), !0
                    }
                },
                set: function(e) {
                    if (this.vidEle) try {
                        this.vidEle.muted = Boolean(e)
                    } catch (e) {
                        Be.error(e.message)
                    } else Be.error("Video对象为空，设置muted属性失败!")
                }
            }, {
                key: "defaultMuted",
                get: function() {
                    if (!this.vidEle) return !0;
                    try {
                        return Boolean(this.vidEle.defaultMuted)
                    } catch (e) {
                        return Be.error(e.message), !0
                    }
                },
                set: function(e) {
                    if (this.vidEle) try {
                        this.vidEle.defaultMuted = Boolean(e)
                    } catch (e) {
                        Be.error(e.message)
                    } else Be.error("Video对象为空，设置defaultMuted属性失败!")
                }
            }, {
                key: "poster",
                set: function(e) {
                    if (this.vidEle) try {
                        e ? this.vidEle.poster = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") : this.vidEle.removeAttribute("poster")
                    } catch (e) {
                        Be.error(e.message)
                    } else Be.warn("Video对象为空，设置poster属性失败")
                }
            }, {
                key: "type",
                get: function() {
                    return "html5"
                }
            }]), e
        }(),
        dt = l(function(e, t) {
            ! function(n, o) {
                var i = "model",
                    r = "name",
                    a = "type",
                    s = "vendor",
                    l = "version",
                    c = "mobile",
                    d = "tablet",
                    u = {
                        extend: function(e, t) {
                            var n = {};
                            for (var o in e) t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                            return n
                        },
                        has: function(e, t) {
                            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                        },
                        trim: function(e) {
                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                    },
                    p = {
                        rgx: function(e, t) {
                            for (var n, o, i, r, a, s, l = 0; l < t.length && !a;) {
                                var c = t[l],
                                    d = t[l + 1];
                                for (n = o = 0; n < c.length && !a;)
                                    if (a = c[n++].exec(e))
                                        for (i = 0; i < d.length; i++) s = a[++o], "object" == typeof(r = d[i]) && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? this[r[0]] = r[1].call(this, s) : this[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? this[r[0]] = s ? s.replace(r[1], r[2]) : void 0 : this[r[0]] = s ? r[1].call(this, s, r[2]) : void 0 : 4 == r.length && (this[r[0]] = s ? r[3].call(this, s.replace(r[1], r[2])) : void 0) : this[r] = s || void 0;
                                l += 2
                            }
                        },
                        str: function(e, t) {
                            for (var n in t)
                                if ("object" == typeof t[n] && t[n].length > 0) {
                                    for (var o = 0; o < t[n].length; o++)
                                        if (u.has(t[n][o], e)) return "?" === n ? void 0 : n
                                } else if (u.has(t[n], e)) return "?" === n ? void 0 : n;
                            return e
                        }
                    },
                    m = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2000: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    f = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [r, l],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [r, "Opera Mini"], l
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [r, "Opera"], l
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],
                            [r, l],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [r, "IE"], l
                            ],
                            [/(edge)\/((\d+)?[\w\.]+)/i],
                            [r, l],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [r, "Yandex"], l
                            ],
                            [/(puffin)\/([\w\.]+)/i],
                            [
                                [r, "Puffin"], l
                            ],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [r, "UCBrowser"], l
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [r, /_/g, " "], l
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [r, "WeChat"], l
                            ],
                            [/(QQ)\/([\d\.]+)/i],
                            [r, l],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [r, l],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [l, [r, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [l, [r, "Facebook"]],
                            [/(headlesschrome) ([\w\.]+)/i],
                            [l, [r, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [r, /(.+)/, "$1 WebView"], l
                            ],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [
                                [r, /(.+(?:g|us))(.+)/, "$1 $2"], l
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [l, [r, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [r, l],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [r, "Dolphin"], l
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [r, "Chrome"], l
                            ],
                            [/(coast)\/([\w\.]+)/i],
                            [
                                [r, "Opera Coast"], l
                            ],
                            [/fxios\/([\w\.-]+)/i],
                            [l, [r, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [l, [r, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [l, r],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [r, [l, p.str, m.browser.oldsafari.version]],
                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                            [r, l],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [r, "Netscape"], l
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [r, l]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                ["architecture", "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                ["architecture", u.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                ["architecture", "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                ["architecture", "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                ["architecture", /ower/, "", u.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                ["architecture", "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                ["architecture", u.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                            [i, s, [a, d]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [i, [s, "Apple"],
                                [a, d]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [i, "Apple TV"],
                                [s, "Apple"]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [s, i, [a, d]],
                            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                            [i, [s, "Amazon"],
                                [a, d]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                            [
                                [i, p.str, m.device.amazon.model],
                                [s, "Amazon"],
                                [a, c]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [i, s, [a, c]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [i, [s, "Apple"],
                                [a, c]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [s, i, [a, c]],
                            [/\(bb10;\s(\w+)/i],
                            [i, [s, "BlackBerry"],
                                [a, c]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                            [i, [s, "Asus"],
                                [a, d]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [s, "Sony"],
                                [i, "Xperia Tablet"],
                                [a, d]
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                            [i, [s, "Sony"],
                                [a, c]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [s, i, [a, "console"]],
                            [/android.+;\s(shield)\sbuild/i],
                            [i, [s, "Nvidia"],
                                [a, "console"]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [i, [s, "Sony"],
                                [a, "console"]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [s, p.str, m.device.sprint.vendor],
                                [i, p.str, m.device.sprint.model],
                                [a, c]
                            ],
                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                            [s, i, [a, d]],
                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                            [s, [i, /_/g, " "],
                                [a, c]
                            ],
                            [/(nexus\s9)/i],
                            [i, [s, "HTC"],
                                [a, d]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                            [i, [s, "Huawei"],
                                [a, c]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [s, i, [a, c]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [i, [s, "Microsoft"],
                                [a, "console"]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [i, /\./g, " "],
                                [s, "Microsoft"],
                                [a, c]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [i, [s, "Motorola"],
                                [a, c]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [i, [s, "Motorola"],
                                [a, d]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [s, u.trim],
                                [i, u.trim],
                                [a, "smarttv"]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [i, /^/, "SmartTV"],
                                [s, "Samsung"],
                                [a, "smarttv"]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [i, [s, "Sharp"],
                                [a, "smarttv"]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [s, "Samsung"], i, [a, d]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [s, [a, "smarttv"], i],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                            [
                                [s, "Samsung"], i, [a, c]
                            ],
                            [/sie-(\w+)*/i],
                            [i, [s, "Siemens"],
                                [a, c]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                            [
                                [s, "Nokia"], i, [a, c]
                            ],
                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                            [i, [s, "Acer"],
                                [a, d]
                            ],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [i, [s, "LG"],
                                [a, d]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [s, "LG"], i, [a, d]
                            ],
                            [/(lg) netcast\.tv/i],
                            [s, i, [a, "smarttv"]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [i, [s, "LG"],
                                [a, c]
                            ],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [i, [s, "Lenovo"],
                                [a, d]
                            ],
                            [/linux;.+((jolla));/i],
                            [s, i, [a, c]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [s, i, [a, "wearable"]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [s, i, [a, c]],
                            [/crkey/i],
                            [
                                [i, "Chromecast"],
                                [s, "Google"]
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [i, [s, "Google"],
                                [a, "wearable"]
                            ],
                            [/android.+;\s(pixel c)\s/i],
                            [i, [s, "Google"],
                                [a, d]
                            ],
                            [/android.+;\s(pixel xl|pixel)\s/i],
                            [i, [s, "Google"],
                                [a, c]
                            ],
                            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                            [
                                [i, /_/g, " "],
                                [s, "Xiaomi"],
                                [a, c]
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [i, [s, "Meizu"],
                                [a, d]
                            ],
                            [/android.+a000(1)\s+build/i],
                            [i, [s, "OnePlus"],
                                [a, c]
                            ],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [i, [s, "RCA"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],
                            [i, [s, "Dell"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [i, [s, "Verizon"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [
                                [s, "Barnes & Noble"], i, [a, d]
                            ],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [i, [s, "NuVision"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],
                            [
                                [s, "ZTE"], i, [a, d]
                            ],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [i, [s, "Swiss"],
                                [a, c]
                            ],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [i, [s, "Swiss"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [i, [s, "Zeki"],
                                [a, d]
                            ],
                            [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],
                            [
                                [s, "Dragon Touch"], i, [a, d]
                            ],
                            [/android.+[;\/]\s*(NS-?.+)\s+build/i],
                            [i, [s, "Insignia"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],
                            [i, [s, "NextBook"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [
                                [s, "Voice"], i, [a, c]
                            ],
                            [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],
                            [
                                [s, "LvTel"], i, [a, c]
                            ],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [i, [s, "Envizen"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],
                            [s, i, [a, d]],
                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                            [i, [s, "MachSpeed"],
                                [a, d]
                            ],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [s, i, [a, d]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [i, [s, "Rotor"],
                                [a, d]
                            ],
                            [/android.+(KS(.+))\s+build/i],
                            [i, [s, "Amazon"],
                                [a, d]
                            ],
                            [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],
                            [s, i, [a, d]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [a, u.lowerize], s, i
                            ],
                            [/(android.+)[;\/].+build/i],
                            [i, [s, "Generic"]]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [l, [r, "EdgeHTML"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [r, l],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            [l, r]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [r, l],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [r, [l, p.str, m.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [r, "Windows"],
                                [l, p.str, m.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [r, "BlackBerry"], l
                            ],
                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                            [r, l],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                [r, "Symbian"], l
                            ],
                            [/\((series40);/i],
                            [r],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [r, "Firefox OS"], l
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                            [r, l],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [r, "Chromium OS"], l
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                [r, "Solaris"], l
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            [r, l],
                            [/(haiku)\s(\w+)/i],
                            [r, l],
                            [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                [l, /_/g, "."],
                                [r, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [r, "Mac OS"],
                                [l, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                            [r, l]
                        ]
                    },
                    h = function(e, t) {
                        this[r] = e, this[l] = t
                    },
                    g = function(e) {
                        this.architecture = e
                    },
                    b = function(e, t, n) {
                        this[s] = e, this[i] = t, this[a] = n
                    },
                    v = h,
                    w = h,
                    k = function(e, t) {
                        if ("object" == typeof e && (t = e, e = void 0), !(this instanceof k)) return new k(e, t).getResult();
                        var o = e || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                            i = t ? u.extend(f, t) : f,
                            r = new h,
                            a = new g,
                            s = new b,
                            l = new v,
                            c = new w;
                        return this.getBrowser = function() {
                            return p.rgx.call(r, o, i.browser), r.major = u.major(r.version), r
                        }, this.getCPU = function() {
                            return p.rgx.call(a, o, i.cpu), a
                        }, this.getDevice = function() {
                            return p.rgx.call(s, o, i.device), s
                        }, this.getEngine = function() {
                            return p.rgx.call(l, o, i.engine), l
                        }, this.getOS = function() {
                            return p.rgx.call(c, o, i.os), c
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return o
                        }, this.setUA = function(e) {
                            return o = e, r = new h, a = new g, s = new b, l = new v, c = new w, this
                        }, this
                    };
                k.VERSION = "0.7.14", k.BROWSER = {
                    NAME: r,
                    MAJOR: "major",
                    VERSION: l
                }, k.CPU = {
                    ARCHITECTURE: "architecture"
                }, k.DEVICE = {
                    MODEL: i,
                    VENDOR: s,
                    TYPE: a,
                    CONSOLE: "console",
                    MOBILE: c,
                    SMARTTV: "smarttv",
                    TABLET: d,
                    WEARABLE: "wearable",
                    EMBEDDED: "embedded"
                }, k.ENGINE = {
                    NAME: r,
                    VERSION: l
                }, k.OS = {
                    NAME: r,
                    VERSION: l
                }, e.exports && (t = e.exports = k), t.UAParser = k;
                var y = n && (n.jQuery || n.Zepto);
                if (void 0 !== y) {
                    var E = new k;
                    y.ua = E.getResult(), y.ua.get = function() {
                        return E.getUA()
                    }, y.ua.set = function(e) {
                        E.setUA(e);
                        var t = E.getResult();
                        for (var n in t) y.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : _e)
        }),
        ut = function() {
            function e() {
                D(this, e), this.media = null
            }
            return O(e, [{
                key: "getQueryVariable",
                value: function() {
                    var e = /\bt=([\dhHmMsS.:]*)(?:,([\dhHmMsS.:]+))?\b/g,
                        t = e.exec(location.hash) || e.exec(location.search);
                    return !!t && t[1]
                }
            }, {
                key: "parseTime",
                value: function(e) {
                    var t = /^(?:npt:)?(?:(?:(\d+):)?(\d\d?):)?(\d\d?)(\.\d+)?$/,
                        n = /^(?:(\d\d?)[hH])?(?:(\d\d?)[mM])?(\d\d?)[sS]$/,
                        o = void 0;
                    return /^\d+(\.\d+)?$/g.test(e) ? parseFloat(e) : (o = t.exec(e) || n.exec(e), o ? 3600 * (parseInt(o[1], 10) || 0) + 60 * (parseInt(o[2], 10) || 0) + parseInt(o[3], 10) + (parseFloat(o[4]) || 0) : 0)
                }
            }, {
                key: "setup",
                value: function(e) {
                    function t() {
                        var e = o.getQueryVariable() || 0;
                        if (e) {
                            var t = o.parseTime(e);
                            o.media && (o.media.currentTime = t);
                            for (var n = document.querySelectorAll("a"), i = 0, r = n.length; i < r; i++)
                                if (n.item(i).hash === location.hash) {
                                    var a = location.hash.split("&")[0];
                                    n.item(i).hash = a + "&hashtail=" + Math.random()
                                }
                        }
                    }

                    function n() {
                        o.media.off("canplay", n), t()
                    }
                    var o = this;
                    o.media = e, o.media && o.media.on("canplay", n), window.addEventListener ? (window.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("hashchange", t, !1)) : window.attachEvent && (window.attachEvent("onload", t), window.attachEvent("onhashchange", t))
                }
            }]), e
        }(),
        pt = function() {
            function e() {
                D(this, e), this.media = null
            }
            return O(e, [{
                key: "setup",
                value: function(e) {
                    function t() {
                        n.media && (document[o] ? (r = !n.media.paused, !n.media.muted && r && n.media.fadeOutSound(), n.media.pause()) : r && (n.media.play(), n.media.muted || n.media.fadeInSound()))
                    }
                    var n = this;
                    n.media = e;
                    var o = void 0,
                        i = void 0,
                        r = !1;
                    void 0 !== document.hidden ? (o = "hidden", i = "visibilitychange") : void 0 !== document.msHidden ? (o = "msHidden", i = "msvisibilitychange") : void 0 !== document.webkitHidden && (o = "webkitHidden", i = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === document[o] ? Be.warn("SmartPlay无法在该浏览器上正常工作") : document.addEventListener(i, t)
                }
            }]), e
        }(),
        mt = l(function(e) {
            ! function() {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    n = {
                        rotl: function(e, t) {
                            return e << t | e >>> 32 - t
                        },
                        rotr: function(e, t) {
                            return e << 32 - t | e >>> t
                        },
                        endian: function(e) {
                            if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                            return e
                        },
                        randomBytes: function(e) {
                            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                            return t
                        },
                        bytesToWords: function(e) {
                            for (var t = [], n = 0, o = 0; n < e.length; n++, o += 8) t[o >>> 5] |= e[n] << 24 - o % 32;
                            return t
                        },
                        wordsToBytes: function(e) {
                            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                            return t
                        },
                        bytesToHex: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                            return t.join("")
                        },
                        hexToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                            return t
                        },
                        bytesToBase64: function(e) {
                            for (var n = [], o = 0; o < e.length; o += 3)
                                for (var i = e[o] << 16 | e[o + 1] << 8 | e[o + 2], r = 0; r < 4; r++) 8 * o + 6 * r <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - r) & 63)) : n.push("=");
                            return n.join("")
                        },
                        base64ToBytes: function(e) {
                            e = e.replace(/[^A-Z0-9+\/]/gi, "");
                            for (var n = [], o = 0, i = 0; o < e.length; i = ++o % 4) 0 != i && n.push((t.indexOf(e.charAt(o - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(o)) >>> 6 - 2 * i);
                            return n
                        }
                    };
                e.exports = n
            }()
        }),
        ft = {
            utf8: {
                stringToBytes: function(e) {
                    return ft.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(ft.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        },
        ht = ft,
        gt = function(e) {
            return null != e && (N(e) || P(e) || !!e._isBuffer)
        },
        bt = l(function(e) {
            ! function() {
                var t = mt,
                    n = ht.utf8,
                    o = gt,
                    i = ht.bin,
                    r = function(e, a) {
                        e.constructor == String ? e = a && "binary" === a.encoding ? i.stringToBytes(e) : n.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                        for (var s = t.bytesToWords(e), l = 8 * e.length, c = 1732584193, d = -271733879, u = -1732584194, p = 271733878, m = 0; m < s.length; m++) s[m] = 16711935 & (s[m] << 8 | s[m] >>> 24) | 4278255360 & (s[m] << 24 | s[m] >>> 8);
                        s[l >>> 5] |= 128 << l % 32, s[14 + (l + 64 >>> 9 << 4)] = l;
                        for (var f = r._ff, h = r._gg, g = r._hh, b = r._ii, m = 0; m < s.length; m += 16) {
                            var v = c,
                                w = d,
                                k = u,
                                y = p;
                            d = b(d = b(d = b(d = b(d = g(d = g(d = g(d = g(d = h(d = h(d = h(d = h(d = f(d = f(d = f(d = f(d, u = f(u, p = f(p, c = f(c, d, u, p, s[m + 0], 7, -680876936), d, u, s[m + 1], 12, -389564586), c, d, s[m + 2], 17, 606105819), p, c, s[m + 3], 22, -1044525330), u = f(u, p = f(p, c = f(c, d, u, p, s[m + 4], 7, -176418897), d, u, s[m + 5], 12, 1200080426), c, d, s[m + 6], 17, -1473231341), p, c, s[m + 7], 22, -45705983), u = f(u, p = f(p, c = f(c, d, u, p, s[m + 8], 7, 1770035416), d, u, s[m + 9], 12, -1958414417), c, d, s[m + 10], 17, -42063), p, c, s[m + 11], 22, -1990404162), u = f(u, p = f(p, c = f(c, d, u, p, s[m + 12], 7, 1804603682), d, u, s[m + 13], 12, -40341101), c, d, s[m + 14], 17, -1502002290), p, c, s[m + 15], 22, 1236535329), u = h(u, p = h(p, c = h(c, d, u, p, s[m + 1], 5, -165796510), d, u, s[m + 6], 9, -1069501632), c, d, s[m + 11], 14, 643717713), p, c, s[m + 0], 20, -373897302), u = h(u, p = h(p, c = h(c, d, u, p, s[m + 5], 5, -701558691), d, u, s[m + 10], 9, 38016083), c, d, s[m + 15], 14, -660478335), p, c, s[m + 4], 20, -405537848), u = h(u, p = h(p, c = h(c, d, u, p, s[m + 9], 5, 568446438), d, u, s[m + 14], 9, -1019803690), c, d, s[m + 3], 14, -187363961), p, c, s[m + 8], 20, 1163531501), u = h(u, p = h(p, c = h(c, d, u, p, s[m + 13], 5, -1444681467), d, u, s[m + 2], 9, -51403784), c, d, s[m + 7], 14, 1735328473), p, c, s[m + 12], 20, -1926607734), u = g(u, p = g(p, c = g(c, d, u, p, s[m + 5], 4, -378558), d, u, s[m + 8], 11, -2022574463), c, d, s[m + 11], 16, 1839030562), p, c, s[m + 14], 23, -35309556), u = g(u, p = g(p, c = g(c, d, u, p, s[m + 1], 4, -1530992060), d, u, s[m + 4], 11, 1272893353), c, d, s[m + 7], 16, -155497632), p, c, s[m + 10], 23, -1094730640), u = g(u, p = g(p, c = g(c, d, u, p, s[m + 13], 4, 681279174), d, u, s[m + 0], 11, -358537222), c, d, s[m + 3], 16, -722521979), p, c, s[m + 6], 23, 76029189), u = g(u, p = g(p, c = g(c, d, u, p, s[m + 9], 4, -640364487), d, u, s[m + 12], 11, -421815835), c, d, s[m + 15], 16, 530742520), p, c, s[m + 2], 23, -995338651), u = b(u, p = b(p, c = b(c, d, u, p, s[m + 0], 6, -198630844), d, u, s[m + 7], 10, 1126891415), c, d, s[m + 14], 15, -1416354905), p, c, s[m + 5], 21, -57434055), u = b(u, p = b(p, c = b(c, d, u, p, s[m + 12], 6, 1700485571), d, u, s[m + 3], 10, -1894986606), c, d, s[m + 10], 15, -1051523), p, c, s[m + 1], 21, -2054922799), u = b(u, p = b(p, c = b(c, d, u, p, s[m + 8], 6, 1873313359), d, u, s[m + 15], 10, -30611744), c, d, s[m + 6], 15, -1560198380), p, c, s[m + 13], 21, 1309151649), u = b(u, p = b(p, c = b(c, d, u, p, s[m + 4], 6, -145523070), d, u, s[m + 11], 10, -1120210379), c, d, s[m + 2], 15, 718787259), p, c, s[m + 9], 21, -343485551), c = c + v >>> 0, d = d + w >>> 0, u = u + k >>> 0, p = p + y >>> 0
                        }
                        return t.endian([c, d, u, p])
                    };
                r._ff = function(e, t, n, o, i, r, a) {
                    var s = e + (t & n | ~t & o) + (i >>> 0) + a;
                    return (s << r | s >>> 32 - r) + t
                }, r._gg = function(e, t, n, o, i, r, a) {
                    var s = e + (t & o | n & ~o) + (i >>> 0) + a;
                    return (s << r | s >>> 32 - r) + t
                }, r._hh = function(e, t, n, o, i, r, a) {
                    var s = e + (t ^ n ^ o) + (i >>> 0) + a;
                    return (s << r | s >>> 32 - r) + t
                }, r._ii = function(e, t, n, o, i, r, a) {
                    var s = e + (n ^ (t | ~o)) + (i >>> 0) + a;
                    return (s << r | s >>> 32 - r) + t
                }, r._blocksize = 16, r._digestsize = 16, e.exports = function(e, n) {
                    if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                    var o = t.wordsToBytes(r(e, n));
                    return n && n.asBytes ? o : n && n.asString ? i.bytesToString(o) : t.bytesToHex(o)
                }
            }()
        }),
        vt = function e() {
            D(this, e);
            var t = this;
            t.available = r("localStorage");
            var n = bt(function() {
                return new RegExp(/^.*\//).exec(window.location.href)
            }());
            t.update = function(e) {
                if (e && t.available) {
                    var o = localStorage.getItem(n),
                        i = {};
                    if (null === o) i = {};
                    else {
                        i = JSON.parse(o);
                        var r = bt(e.url);
                        e.url = bt(e.url), i[r] = e
                    }
                    return localStorage.setItem(n, JSON.stringify(i)), i
                }
                return null
            }, t.retrieve = function(e) {
                if (!e || !t.available) return null;
                var o = localStorage.getItem(n);
                try {
                    var i = JSON.parse(o),
                        r = bt(e);
                    return i && i[r] ? i[r] : null
                } catch (e) {
                    return Be.warn(e.message), null
                }
            }, t.retrieveAll = function() {
                if (!t.available) return null;
                var e = localStorage.getItem(n);
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return Be.warn(e.message), null
                }
            }, t.available && (localStorage.getItem(n) || t.update({}))
        },
        wt = function() {
            function e() {
                D(this, e), this._media = null, this.release = function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                }
            }
            return O(e, [{
                key: "jail",
                value: function(e) {
                    function t(e) {
                        e.currentTarget.removeEventListener(U.SEEKING, t), e.currentTarget.removeEventListener(U.TIMEUPDATE, n), e.currentTarget.addEventListener(U.SEEKED, o)
                    }

                    function n(e) {
                        l = e.currentTarget.currentTime
                    }

                    function o(e) {
                        Math.abs(l - s._media.currentTime) > .1 ? e.currentTarget.currentTime = l : (e.currentTarget.removeEventListener(U.SEEKED, o), e.currentTarget.addEventListener(U.SEEKING, t), e.currentTarget.addEventListener(U.TIMEUPDATE, n))
                    }

                    function i() {
                        l = 0
                    }

                    function r(e) {
                        1 !== e.currentTarget.playbackRate && (e.currentTarget.playbackRate = 1)
                    }

                    function a() {
                        s._media.on(U.TIMEUPDATE, n), s._media.off(U.CANPLAY, a)
                    }
                    var s = this,
                        l = 0;
                    s._media = e, s._media && (s._media.on(U.SEEKING, t), s._media.on(U.ENDED, i), s._media.on(U.CANPLAY, a), s._media.on(U.RATECHANGE, r)), s.release = function() {
                        s._media && (s._media.off(U.SEEKED, o), s._media.off(U.SEEKING, t), s._media.off(U.TIMEUPDATE, n), s._media.off(U.ENDED, i), s._media.off(U.CANPLAY, a), s._media.off(U.RATECHANGE, r), s._media = null)
                    }
                }
            }]), e
        }(),
        kt = new vt;
    return function() {
        function e() {
            var n = this;
            D(this, e), this.timeAnalysis = new lt;
            var o = null,
                i = null,
                r = null,
                a = null,
                s = {},
                l = null,
                c = new dt,
                d = new ut,
                u = new pt,
                p = new wt;
            this.clientInfo = c.getResult(), window.onerror || (window.KMPErrorStack = [], window.onerror = function(e, t, n, o, i) {
                var r = e.toLowerCase(),
                    a = {};
                return a.url = t, a.line = n, a.column = o, a.error = JSON.stringify(i), r.indexOf("script error") > -1 ? a.message = "Script Error: See Browser Console for Detail" : a.message = e, window.KMPErrorStack.push(a), window.KMPErrorStackChange && window.KMPErrorStackChange(a), !Be.DEBUG
            }), this.media = null, this.onPlayHistoryDetected = null, this.setup = function(c, m) {
                function f(e) {
                    a && (a.destroy(), a = null), a = new s[e.module]({
                        debug: Boolean(m.debug)
                    }), m.src && a.loadSource(m.src), a.attachMedia(o.vidEle), a.on(s[e.module].Events.MANIFEST_PARSED, function(e, t) {
                        var n = t.levels;
                        n && (l.updateQualityMenu(n), l.updateQualityMenuCallback = function(e) {
                            Be.log("切换清晰度:" + e), a.currentLevel = e
                        })
                    }), a.on(s[e.module].Events.ERROR, function(e, t) {
                        if (t.fatal) switch (t.type) {
                            case "networkError":
                                a.startLoad();
                                break;
                            case "mediaError":
                                a.recoverMediaError();
                                break;
                            default:
                                a.destroy()
                        }
                    })
                }

                function h(e) {
                    a && (a.destroy(), a = null), a = s[e.module].createPlayer({
                        type: "flv",
                        url: m.src
                    }), s[e.module].LoggingControl.globalTag = "KMP:flv", s[e.module].LoggingControl.enableAll = !1, s[e.module].LoggingControl.enableDebug = Boolean(m.debug), s[e.module].LoggingControl.enableVerbose = !1, s[e.module].LoggingControl.enableInfo = !1, s[e.module].LoggingControl.enableWarn = !1, s[e.module].LoggingControl.enableError = !0, a.attachMediaElement(o.vidEle), a.load()
                }

                function g(e) {
                    a && (a = null), a = new s[e.module], m.src && a.add(m.src, function(e) {
                        var t = e.files.find(function(e) {
                            return e.name.endsWith(".mp4")
                        });
                        t && t.renderTo(c)
                    })
                }
                Be.log("初始化播放器");
                var b = n,
                    v = null;
                if (b.timeAnalysis.mark({
                        markName: "kmp_setup_start",
                        data: null
                    }), c ? (i = c.cloneNode(!0), r = c.parentNode, v = c) : i ? (v = i, H.toggleClass(v, "kmp-video", !1), r && r.appendChild(v)) : (i = null, r = null, v = null), function() {
                        o && (o.src = "", o.volume = .75, o.load(), o = null), a && (a.destroy(), a = null), l && (l.cleanUI(), l = null), d && d.setup(null), u && u.setup(null), b.media = null
                    }(), v) {
                    var w = t(m.mime);
                    if ("mse" === w.type)
                        if (o = new ct(v, m), w.featureEnabled) s[w.module] ? "torrent" === m.mime ? g(w) : m.mime === e.MIME.M3U8 ? f(w) : m.mime === e.MIME.FLV && h(w) : I(w.src, function() {
                            window[w.module] ? (s[w.module] = window[w.module], delete window[w.module], Be.log("播放模块加载成功!"), "torrent" === m.mime ? g(w) : m.mime === e.MIME.M3U8 ? f(w) : m.mime === e.MIME.FLV && h(w)) : Be.warn("播放模块加载失败!")
                        });
                        else {
                            o = null, Be.error("无法播放视频类型:" + m.mime);
                            var k = document.createElement("p");
                            k.innerHTML = "您的浏览器无法播放视频类型:" + m.mime + ",请升级您的浏览器后再尝试播放或者联系网站管理员解决", c.parentNode.appendChild(k)
                        }
                    else "native" === w.type && (o = new ct(v, m));
                    b.media = o, o && (d.setup(o), u.setup(o), m.hasOwnProperty("freeman") && !m.freeman ? p.jail(o) : p.release(o)), m.enableUI && o && (o.controls = !1, l = new at(o, m))
                } else Be.error("播放器初始化失败，Video对象不存在");
                o && (o.on(U.LOADSTART, function() {
                    b.timeAnalysis.mark({
                        markName: G.LOADSTART,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.CANPLAYTHROUGH, function() {
                    b.timeAnalysis.mark({
                        markName: G.CANPLAYTHROUGH,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.ENDED, function() {
                    b.timeAnalysis.mark({
                        markName: G.ENDED,
                        mediaURI: o.currentSrc
                    }), kt.update({
                        url: m.src,
                        lastTime: o.currentTime,
                        ended: !0
                    })
                }), o.on(U.RATECHANGE, function() {
                    b.timeAnalysis.mark({
                        markName: G.RATECHANGE,
                        data: o.playbackRate,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.DURATIONCHANGE, function() {
                    b.timeAnalysis.mark({
                        markName: G.DURATIONCHANGE,
                        data: o.duration,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.SUSPEND, function() {
                    b.timeAnalysis.mark({
                        markName: G.SUSPEND,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.CANPLAY, function() {
                    b.timeAnalysis.mark({
                        markName: G.CANPLAY,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.SEEKED, function() {
                    b.timeAnalysis.mark({
                        markName: G.SEEKED,
                        data: o.currentTime,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.SEEKING, function() {
                    b.timeAnalysis.mark({
                        markName: G.SEEKING,
                        data: o.currentTime,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.LOADEDMETADATA, function() {
                    if (b.timeAnalysis.mark({
                            markName: G.LOADEDMETADATA,
                            mediaURI: o.currentSrc
                        }), b.onPlayHistoryDetected) {
                        var e = kt.retrieve(m.src);
                        null !== e && ("[object Function]" === {}.toString.call(b.onPlayHistoryDetected) && b.onPlayHistoryDetected(e), delete b.onPlayHistoryDetected)
                    }
                }), o.on(U.LOADEDDATA, function() {
                    b.timeAnalysis.mark({
                        markName: G.LOADEDDATA,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.WAITING, function() {
                    b.timeAnalysis.mark({
                        markName: G.WAITING,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.PROGRESS, function() {
                    b.timeAnalysis.mark({
                        markName: G.PROGRESS,
                        data: o.buffered,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.TIMEUPDATE, function() {
                    b.timeAnalysis.mark({
                        markName: G.TIMEUPDATE,
                        data: o.currentTime,
                        mediaURI: o.currentSrc
                    }), kt.update({
                        url: m.src,
                        lastTime: o.currentTime,
                        ended: !1
                    })
                }), o.on(U.VOLUMECHANGE, function() {
                    b.timeAnalysis.mark({
                        markName: G.VOLUMECHANGE,
                        data: o.volume,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.PLAY, function() {
                    b.timeAnalysis.mark({
                        markName: G.PLAY,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.PAUSE, function() {
                    b.timeAnalysis.mark({
                        markName: G.PAUSE,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.ERROR, function(e) {
                    b.timeAnalysis.mark({
                        markName: G.ERROR,
                        data: e.message,
                        mediaURI: o.currentSrc
                    })
                }), o.on(U.ABORT, function() {
                    b.timeAnalysis.mark({
                        markName: G.ABORT,
                        mediaURI: o.currentSrc
                    })
                })), b.timeAnalysis.mark({
                    markName: "kmp_setup_end",
                    data: null
                }), Be.log("初始化播放器完成")
            }
        }
        return O(e, null, [{
            key: "version",
            get: function() {
                return {
                    ver: "0.0.13",
                    lastUpdate: "2017-08-08 01:46:32",
                    author: "contact@kokoplayer.com",
                    site: "www.kokoplayer.com"
                }
            }
        }, {
            key: "playHistory",
            get: function() {
                return kt
            }
        }, {
            key: "MIME",
            get: function() {
                return j
            }
        }]), e
    }()
});