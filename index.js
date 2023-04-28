/*! For license information please see index.js.LICENSE.txt */
(() => {
    var e, t, n = {
        6751: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => oe});
            var r = function () {
                function e(e) {
                    var t = this;
                    this._insertTag = function (e) {
                        var n;
                        n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                    }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                }

                var t = e.prototype;
                return t.hydrate = function (e) {
                    e.forEach(this._insertTag)
                }, t.insert = function (e) {
                    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function (e) {
                        var t = document.createElement("style");
                        return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
                    }(this));
                    var t = this.tags[this.tags.length - 1];
                    if (this.isSpeedy) {
                        var n = function (e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }(t);
                        try {
                            n.insertRule(e, n.cssRules.length)
                        } catch (e) {
                        }
                    } else t.appendChild(document.createTextNode(e));
                    this.ctr++
                }, t.flush = function () {
                    this.tags.forEach((function (e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    })), this.tags = [], this.ctr = 0
                }, e
            }(), o = Math.abs, a = String.fromCharCode, i = Object.assign;

            function l(e) {
                return e.trim()
            }

            function s(e, t, n) {
                return e.replace(t, n)
            }

            function u(e, t) {
                return e.indexOf(t)
            }

            function c(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function d(e, t, n) {
                return e.slice(t, n)
            }

            function p(e) {
                return e.length
            }

            function f(e) {
                return e.length
            }

            function m(e, t) {
                return t.push(e), e
            }

            var h = 1, v = 1, g = 0, b = 0, y = 0, w = "";

            function x(e, t, n, r, o, a, i) {
                return {
                    value: e,
                    root: t,
                    parent: n,
                    type: r,
                    props: o,
                    children: a,
                    line: h,
                    column: v,
                    length: i,
                    return: ""
                }
            }

            function S(e, t) {
                return i(x("", null, null, "", null, null, 0), e, {length: -e.length}, t)
            }

            function k() {
                return y = b > 0 ? c(w, --b) : 0, v--, 10 === y && (v = 1, h--), y
            }

            function C() {
                return y = b < g ? c(w, b++) : 0, v++, 10 === y && (v = 1, h++), y
            }

            function E() {
                return c(w, b)
            }

            function Z() {
                return b
            }

            function P(e, t) {
                return d(w, e, t)
            }

            function R(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function T(e) {
                return h = v = 1, g = p(w = e), b = 0, []
            }

            function O(e) {
                return w = "", e
            }

            function M(e) {
                return l(P(b - 1, I(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
            }

            function z(e) {
                for (; (y = E()) && y < 33;) C();
                return R(e) > 2 || R(y) > 3 ? "" : " "
            }

            function N(e, t) {
                for (; --t && C() && !(y < 48 || y > 102 || y > 57 && y < 65 || y > 70 && y < 97);) ;
                return P(e, Z() + (t < 6 && 32 == E() && 32 == C()))
            }

            function I(e) {
                for (; C();) switch (y) {
                    case e:
                        return b;
                    case 34:
                    case 39:
                        34 !== e && 39 !== e && I(y);
                        break;
                    case 40:
                        41 === e && I(e);
                        break;
                    case 92:
                        C()
                }
                return b
            }

            function L(e, t) {
                for (; C() && e + y !== 57 && (e + y !== 84 || 47 !== E());) ;
                return "/*" + P(t, b - 1) + "*" + a(47 === e ? e : C())
            }

            function _(e) {
                for (; !R(E());) C();
                return P(e, b)
            }

            var A = "-ms-", $ = "-moz-", F = "-webkit-", D = "comm", j = "rule", W = "decl", B = "@import",
                H = "@keyframes";

            function V(e, t) {
                for (var n = "", r = f(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
                return n
            }

            function U(e, t, n, r) {
                switch (e.type) {
                    case B:
                    case W:
                        return e.return = e.return || e.value;
                    case D:
                        return "";
                    case H:
                        return e.return = e.value + "{" + V(e.children, r) + "}";
                    case j:
                        e.value = e.props.join(",")
                }
                return p(n = V(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function K(e) {
                return O(q("", null, null, null, [""], e = T(e), 0, [0], e))
            }

            function q(e, t, n, r, o, i, l, d, f) {
                for (var h = 0, v = 0, g = l, b = 0, y = 0, w = 0, x = 1, S = 1, P = 1, R = 0, T = "", O = o, I = i, A = r, $ = T; S;) switch (w = R, R = C()) {
                    case 40:
                        if (108 != w && 58 == c($, g - 1)) {
                            -1 != u($ += s(M(R), "&", "&\f"), "&\f") && (P = -1);
                            break
                        }
                    case 34:
                    case 39:
                    case 91:
                        $ += M(R);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        $ += z(w);
                        break;
                    case 92:
                        $ += N(Z() - 1, 7);
                        continue;
                    case 47:
                        switch (E()) {
                            case 42:
                            case 47:
                                m(X(L(C(), Z()), t, n), f);
                                break;
                            default:
                                $ += "/"
                        }
                        break;
                    case 123 * x:
                        d[h++] = p($) * P;
                    case 125 * x:
                    case 59:
                    case 0:
                        switch (R) {
                            case 0:
                            case 125:
                                S = 0;
                            case 59 + v:
                                y > 0 && p($) - g && m(y > 32 ? Q($ + ";", r, n, g - 1) : Q(s($, " ", "") + ";", r, n, g - 2), f);
                                break;
                            case 59:
                                $ += ";";
                            default:
                                if (m(A = Y($, t, n, h, v, o, d, T, O = [], I = [], g), i), 123 === R) if (0 === v) q($, t, A, A, O, i, g, d, I); else switch (99 === b && 110 === c($, 3) ? 100 : b) {
                                    case 100:
                                    case 109:
                                    case 115:
                                        q(e, A, A, r && m(Y(e, A, A, 0, 0, o, d, T, o, O = [], g), I), o, I, g, d, r ? O : I);
                                        break;
                                    default:
                                        q($, A, A, A, [""], I, 0, d, I)
                                }
                        }
                        h = v = y = 0, x = P = 1, T = $ = "", g = l;
                        break;
                    case 58:
                        g = 1 + p($), y = w;
                    default:
                        if (x < 1) if (123 == R) --x; else if (125 == R && 0 == x++ && 125 == k()) continue;
                        switch ($ += a(R), R * x) {
                            case 38:
                                P = v > 0 ? 1 : ($ += "\f", -1);
                                break;
                            case 44:
                                d[h++] = (p($) - 1) * P, P = 1;
                                break;
                            case 64:
                                45 === E() && ($ += M(C())), b = E(), v = g = p(T = $ += _(Z())), R++;
                                break;
                            case 45:
                                45 === w && 2 == p($) && (x = 0)
                        }
                }
                return i
            }

            function Y(e, t, n, r, a, i, u, c, p, m, h) {
                for (var v = a - 1, g = 0 === a ? i : [""], b = f(g), y = 0, w = 0, S = 0; y < r; ++y) for (var k = 0, C = d(e, v + 1, v = o(w = u[y])), E = e; k < b; ++k) (E = l(w > 0 ? g[k] + " " + C : s(C, /&\f/g, g[k]))) && (p[S++] = E);
                return x(e, t, n, 0 === a ? j : c, p, m, h)
            }

            function X(e, t, n) {
                return x(e, t, n, D, a(y), d(e, 2, -2), 0)
            }

            function Q(e, t, n, r) {
                return x(e, t, n, W, d(e, 0, r), d(e, r + 1, -1), r)
            }

            var G = function (e, t, n) {
                for (var r = 0, o = 0; r = o, o = E(), 38 === r && 12 === o && (t[n] = 1), !R(o);) C();
                return P(e, b)
            }, J = new WeakMap, ee = function (e) {
                if ("rule" === e.type && e.parent && !(e.length < 1)) {
                    for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type;) if (!(n = n.parent)) return;
                    if ((1 !== e.props.length || 58 === t.charCodeAt(0) || J.get(n)) && !r) {
                        J.set(e, !0);
                        for (var o = [], i = function (e, t) {
                            return O(function (e, t) {
                                var n = -1, r = 44;
                                do {
                                    switch (R(r)) {
                                        case 0:
                                            38 === r && 12 === E() && (t[n] = 1), e[n] += G(b - 1, t, n);
                                            break;
                                        case 2:
                                            e[n] += M(r);
                                            break;
                                        case 4:
                                            if (44 === r) {
                                                e[++n] = 58 === E() ? "&\f" : "", t[n] = e[n].length;
                                                break
                                            }
                                        default:
                                            e[n] += a(r)
                                    }
                                } while (r = C());
                                return e
                            }(T(e), t))
                        }(t, o), l = n.props, s = 0, u = 0; s < i.length; s++) for (var c = 0; c < l.length; c++, u++) e.props[u] = o[s] ? i[s].replace(/&\f/g, l[c]) : l[c] + " " + i[s]
                    }
                }
            }, te = function (e) {
                if ("decl" === e.type) {
                    var t = e.value;
                    108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                }
            };

            function ne(e, t) {
                switch (function (e, t) {
                    return 45 ^ c(e, 0) ? (((t << 2 ^ c(e, 0)) << 2 ^ c(e, 1)) << 2 ^ c(e, 2)) << 2 ^ c(e, 3) : 0
                }(e, t)) {
                    case 5103:
                        return F + "print-" + e + e;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return F + e + e;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return F + e + $ + e + A + e + e;
                    case 6828:
                    case 4268:
                        return F + e + A + e + e;
                    case 6165:
                        return F + e + A + "flex-" + e + e;
                    case 5187:
                        return F + e + s(e, /(\w+).+(:[^]+)/, F + "box-$1$2" + A + "flex-$1$2") + e;
                    case 5443:
                        return F + e + A + "flex-item-" + s(e, /flex-|-self/, "") + e;
                    case 4675:
                        return F + e + A + "flex-line-pack" + s(e, /align-content|flex-|-self/, "") + e;
                    case 5548:
                        return F + e + A + s(e, "shrink", "negative") + e;
                    case 5292:
                        return F + e + A + s(e, "basis", "preferred-size") + e;
                    case 6060:
                        return F + "box-" + s(e, "-grow", "") + F + e + A + s(e, "grow", "positive") + e;
                    case 4554:
                        return F + s(e, /([^-])(transform)/g, "$1" + F + "$2") + e;
                    case 6187:
                        return s(s(s(e, /(zoom-|grab)/, F + "$1"), /(image-set)/, F + "$1"), e, "") + e;
                    case 5495:
                    case 3959:
                        return s(e, /(image-set\([^]*)/, F + "$1$`$1");
                    case 4968:
                        return s(s(e, /(.+:)(flex-)?(.*)/, F + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + F + e + e;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return s(e, /(.+)-inline(.+)/, F + "$1$2") + e;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if (p(e) - 1 - t > 6) switch (c(e, t + 1)) {
                            case 109:
                                if (45 !== c(e, t + 4)) break;
                            case 102:
                                return s(e, /(.+:)(.+)-([^]+)/, "$1" + F + "$2-$3$1" + $ + (108 == c(e, t + 3) ? "$3" : "$2-$3")) + e;
                            case 115:
                                return ~u(e, "stretch") ? ne(s(e, "stretch", "fill-available"), t) + e : e
                        }
                        break;
                    case 4949:
                        if (115 !== c(e, t + 1)) break;
                    case 6444:
                        switch (c(e, p(e) - 3 - (~u(e, "!important") && 10))) {
                            case 107:
                                return s(e, ":", ":" + F) + e;
                            case 101:
                                return s(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + F + (45 === c(e, 14) ? "inline-" : "") + "box$3$1" + F + "$2$3$1" + A + "$2box$3") + e
                        }
                        break;
                    case 5936:
                        switch (c(e, t + 11)) {
                            case 114:
                                return F + e + A + s(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                            case 108:
                                return F + e + A + s(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                            case 45:
                                return F + e + A + s(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                        }
                        return F + e + A + e + e
                }
                return e
            }

            var re = [function (e, t, n, r) {
                if (e.length > -1 && !e.return) switch (e.type) {
                    case W:
                        e.return = ne(e.value, e.length);
                        break;
                    case H:
                        return V([S(e, {value: s(e.value, "@", "@" + F)})], r);
                    case j:
                        if (e.length) return function (e, t) {
                            return e.map(t).join("")
                        }(e.props, (function (t) {
                            switch (function (e, t) {
                                return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e
                            }(t)) {
                                case":read-only":
                                case":read-write":
                                    return V([S(e, {props: [s(t, /:(read-\w+)/, ":" + $ + "$1")]})], r);
                                case"::placeholder":
                                    return V([S(e, {props: [s(t, /:(plac\w+)/, ":" + F + "input-$1")]}), S(e, {props: [s(t, /:(plac\w+)/, ":" + $ + "$1")]}), S(e, {props: [s(t, /:(plac\w+)/, A + "input-$1")]})], r)
                            }
                            return ""
                        }))
                }
            }];
            const oe = function (e) {
                var t = e.key;
                if ("css" === t) {
                    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                    Array.prototype.forEach.call(n, (function (e) {
                        -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                    }))
                }
                var o, a, i = e.stylisPlugins || re, l = {}, s = [];
                o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function (e) {
                    for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) l[t[n]] = !0;
                    s.push(e)
                }));
                var u, c, d, p, m = [U, (p = function (e) {
                    u.insert(e)
                }, function (e) {
                    e.root || (e = e.return) && p(e)
                })], h = (c = [ee, te].concat(i, m), d = f(c), function (e, t, n, r) {
                    for (var o = "", a = 0; a < d; a++) o += c[a](e, t, n, r) || "";
                    return o
                });
                a = function (e, t, n, r) {
                    u = n, V(K(e ? e + "{" + t.styles + "}" : t.styles), h), r && (v.inserted[t.name] = !0)
                };
                var v = {
                    key: t,
                    sheet: new r({
                        key: t,
                        container: o,
                        nonce: e.nonce,
                        speedy: e.speedy,
                        prepend: e.prepend,
                        insertionPoint: e.insertionPoint
                    }),
                    nonce: e.nonce,
                    inserted: l,
                    registered: {},
                    insert: a
                };
                return v.sheet.hydrate(s), v
            }
        }, 5042: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = function (e) {
                var t = Object.create(null);
                return function (n) {
                    return void 0 === t[n] && (t[n] = e(n)), t[n]
                }
            }
        }, 2443: (e, t, n) => {
            "use strict";
            n.d(t, {T: () => l, w: () => i});
            var r = n(7294), o = n(6751),
                a = (n(6797), n(7278), (0, r.createContext)("undefined" != typeof HTMLElement ? (0, o.Z)({key: "css"}) : null));
            a.Provider;
            var i = function (e) {
                return (0, r.forwardRef)((function (t, n) {
                    var o = (0, r.useContext)(a);
                    return e(t, o, n)
                }))
            }, l = (0, r.createContext)({})
        }, 6797: (e, t, n) => {
            "use strict";
            n.d(t, {O: () => h});
            const r = function (e) {
                for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                switch (o) {
                    case 3:
                        n ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                        n ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                        n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                }
                return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
            }, o = {
                animationIterationCount: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1
            };
            var a = n(5042), i = /[A-Z]|^ms/g, l = /_EMO_([^_]+?)_([^]*?)_EMO_/g, s = function (e) {
                return 45 === e.charCodeAt(1)
            }, u = function (e) {
                return null != e && "boolean" != typeof e
            }, c = (0, a.Z)((function (e) {
                return s(e) ? e : e.replace(i, "-$&").toLowerCase()
            })), d = function (e, t) {
                switch (e) {
                    case"animation":
                    case"animationName":
                        if ("string" == typeof t) return t.replace(l, (function (e, t, n) {
                            return f = {name: t, styles: n, next: f}, t
                        }))
                }
                return 1 === o[e] || s(e) || "number" != typeof t || 0 === t ? t : t + "px"
            };

            function p(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case"boolean":
                        return "";
                    case"object":
                        if (1 === n.anim) return f = {name: n.name, styles: n.styles, next: f}, n.name;
                        if (void 0 !== n.styles) {
                            var r = n.next;
                            if (void 0 !== r) for (; void 0 !== r;) f = {
                                name: r.name,
                                styles: r.styles,
                                next: f
                            }, r = r.next;
                            return n.styles + ";"
                        }
                        return function (e, t, n) {
                            var r = "";
                            if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += p(e, t, n[o]) + ";"; else for (var a in n) {
                                var i = n[a];
                                if ("object" != typeof i) null != t && void 0 !== t[i] ? r += a + "{" + t[i] + "}" : u(i) && (r += c(a) + ":" + d(a, i) + ";"); else if (!Array.isArray(i) || "string" != typeof i[0] || null != t && void 0 !== t[i[0]]) {
                                    var l = p(e, t, i);
                                    switch (a) {
                                        case"animation":
                                        case"animationName":
                                            r += c(a) + ":" + l + ";";
                                            break;
                                        default:
                                            r += a + "{" + l + "}"
                                    }
                                } else for (var s = 0; s < i.length; s++) u(i[s]) && (r += c(a) + ":" + d(a, i[s]) + ";")
                            }
                            return r
                        }(e, t, n);
                    case"function":
                        if (void 0 !== e) {
                            var o = f, a = n(e);
                            return f = o, p(e, t, a)
                        }
                }
                if (null == t) return n;
                var i = t[n];
                return void 0 !== i ? i : n
            }

            var f, m = /label:\s*([^\s;\n{]+)\s*(;|$)/g, h = function (e, t, n) {
                if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                var o = !0, a = "";
                f = void 0;
                var i = e[0];
                null == i || void 0 === i.raw ? (o = !1, a += p(n, t, i)) : a += i[0];
                for (var l = 1; l < e.length; l++) a += p(n, t, e[l]), o && (a += i[l]);
                m.lastIndex = 0;
                for (var s, u = ""; null !== (s = m.exec(a));) u += "-" + s[1];
                return {name: r(a) + u, styles: a, next: f}
            }
        }, 7278: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {L: () => i, j: () => l});
            var o = n(7294),
                a = !!(r || (r = n.t(o, 2))).useInsertionEffect && (r || (r = n.t(o, 2))).useInsertionEffect,
                i = a || function (e) {
                    return e()
                }, l = a || o.useLayoutEffect
        }, 444: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                var r = "";
                return n.split(" ").forEach((function (n) {
                    void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
                })), r
            }

            n.d(t, {My: () => a, fp: () => r, hC: () => o});
            var o = function (e, t, n) {
                var r = e.key + "-" + t.name;
                !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
            }, a = function (e, t, n) {
                o(e, t, n);
                var r = e.key + "-" + t.name;
                if (void 0 === e.inserted[t.name]) {
                    var a = t;
                    do {
                        e.insert(t === a ? "." + r : "", a, e.sheet, !0), a = a.next
                    } while (void 0 !== a)
                }
            }
        }, 1899: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}), "ContentCopy");
            t.Z = i
        }, 1048: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"}), "Crop");
            t.Z = i
        }, 6693: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}), "Image");
            t.Z = i
        }, 9245: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "M14 10H3v2h11v-2zm0-4H3v2h11V6zM3 16h7v-2H3v2zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59 14.41 22z"}), "PlaylistRemove");
            t.Z = i
        }, 9994: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}), "Replay");
            t.Z = i
        }, 7097: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}), "Restore");
            t.Z = i
        }, 4229: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}), "Settings");
            t.Z = i
        }, 3265: (e, t, n) => {
            "use strict";
            var r = n(4836);
            t.Z = void 0;
            var o = r(n(4938)), a = n(5893),
                i = (0, o.default)((0, a.jsx)("path", {d: "m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"}), "Translate");
            t.Z = i
        }, 4938: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return r.createSvgIcon
                }
            });
            var r = n(1699)
        }, 9617: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => D});
            var r = n(7462), o = n(3366), a = n(1387), i = n(9766), l = n(6268), s = n(8010), u = n(6523), c = n(1796);
            const d = {black: "#000", white: "#fff"}, p = {
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#eeeeee",
                300: "#e0e0e0",
                400: "#bdbdbd",
                500: "#9e9e9e",
                600: "#757575",
                700: "#616161",
                800: "#424242",
                900: "#212121",
                A100: "#f5f5f5",
                A200: "#eeeeee",
                A400: "#bdbdbd",
                A700: "#616161"
            }, f = {
                50: "#f3e5f5",
                100: "#e1bee7",
                200: "#ce93d8",
                300: "#ba68c8",
                400: "#ab47bc",
                500: "#9c27b0",
                600: "#8e24aa",
                700: "#7b1fa2",
                800: "#6a1b9a",
                900: "#4a148c",
                A100: "#ea80fc",
                A200: "#e040fb",
                A400: "#d500f9",
                A700: "#aa00ff"
            }, m = {
                50: "#ffebee",
                100: "#ffcdd2",
                200: "#ef9a9a",
                300: "#e57373",
                400: "#ef5350",
                500: "#f44336",
                600: "#e53935",
                700: "#d32f2f",
                800: "#c62828",
                900: "#b71c1c",
                A100: "#ff8a80",
                A200: "#ff5252",
                A400: "#ff1744",
                A700: "#d50000"
            }, h = {
                50: "#fff3e0",
                100: "#ffe0b2",
                200: "#ffcc80",
                300: "#ffb74d",
                400: "#ffa726",
                500: "#ff9800",
                600: "#fb8c00",
                700: "#f57c00",
                800: "#ef6c00",
                900: "#e65100",
                A100: "#ffd180",
                A200: "#ffab40",
                A400: "#ff9100",
                A700: "#ff6d00"
            }, v = {
                50: "#e3f2fd",
                100: "#bbdefb",
                200: "#90caf9",
                300: "#64b5f6",
                400: "#42a5f5",
                500: "#2196f3",
                600: "#1e88e5",
                700: "#1976d2",
                800: "#1565c0",
                900: "#0d47a1",
                A100: "#82b1ff",
                A200: "#448aff",
                A400: "#2979ff",
                A700: "#2962ff"
            }, g = {
                50: "#e1f5fe",
                100: "#b3e5fc",
                200: "#81d4fa",
                300: "#4fc3f7",
                400: "#29b6f6",
                500: "#03a9f4",
                600: "#039be5",
                700: "#0288d1",
                800: "#0277bd",
                900: "#01579b",
                A100: "#80d8ff",
                A200: "#40c4ff",
                A400: "#00b0ff",
                A700: "#0091ea"
            }, b = {
                50: "#e8f5e9",
                100: "#c8e6c9",
                200: "#a5d6a7",
                300: "#81c784",
                400: "#66bb6a",
                500: "#4caf50",
                600: "#43a047",
                700: "#388e3c",
                800: "#2e7d32",
                900: "#1b5e20",
                A100: "#b9f6ca",
                A200: "#69f0ae",
                A400: "#00e676",
                A700: "#00c853"
            }, y = ["mode", "contrastThreshold", "tonalOffset"], w = {
                text: {
                    primary: "rgba(0, 0, 0, 0.87)",
                    secondary: "rgba(0, 0, 0, 0.6)",
                    disabled: "rgba(0, 0, 0, 0.38)"
                },
                divider: "rgba(0, 0, 0, 0.12)",
                background: {paper: d.white, default: d.white},
                action: {
                    active: "rgba(0, 0, 0, 0.54)",
                    hover: "rgba(0, 0, 0, 0.04)",
                    hoverOpacity: .04,
                    selected: "rgba(0, 0, 0, 0.08)",
                    selectedOpacity: .08,
                    disabled: "rgba(0, 0, 0, 0.26)",
                    disabledBackground: "rgba(0, 0, 0, 0.12)",
                    disabledOpacity: .38,
                    focus: "rgba(0, 0, 0, 0.12)",
                    focusOpacity: .12,
                    activatedOpacity: .12
                }
            }, x = {
                text: {
                    primary: d.white,
                    secondary: "rgba(255, 255, 255, 0.7)",
                    disabled: "rgba(255, 255, 255, 0.5)",
                    icon: "rgba(255, 255, 255, 0.5)"
                },
                divider: "rgba(255, 255, 255, 0.12)",
                background: {paper: "#121212", default: "#121212"},
                action: {
                    active: d.white,
                    hover: "rgba(255, 255, 255, 0.08)",
                    hoverOpacity: .08,
                    selected: "rgba(255, 255, 255, 0.16)",
                    selectedOpacity: .16,
                    disabled: "rgba(255, 255, 255, 0.3)",
                    disabledBackground: "rgba(255, 255, 255, 0.12)",
                    disabledOpacity: .38,
                    focus: "rgba(255, 255, 255, 0.12)",
                    focusOpacity: .12,
                    activatedOpacity: .24
                }
            };

            function S(e, t, n, r) {
                const o = r.light || r, a = r.dark || 1.5 * r;
                e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : "light" === t ? e.light = (0, c.$n)(e.main, o) : "dark" === t && (e.dark = (0, c._j)(e.main, a)))
            }

            const k = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"],
                C = {textTransform: "uppercase"}, E = '"Roboto", "Helvetica", "Arial", sans-serif';

            function Z(e, t) {
                const n = "function" == typeof t ? t(e) : t, {
                    fontFamily: a = E,
                    fontSize: l = 14,
                    fontWeightLight: s = 300,
                    fontWeightRegular: u = 400,
                    fontWeightMedium: c = 500,
                    fontWeightBold: d = 700,
                    htmlFontSize: p = 16,
                    allVariants: f,
                    pxToRem: m
                } = n, h = (0, o.Z)(n, k), v = l / 14, g = m || (e => e / p * v + "rem"), b = (e, t, n, o, i) => {
                    return (0, r.Z)({
                        fontFamily: a,
                        fontWeight: e,
                        fontSize: g(t),
                        lineHeight: n
                    }, a === E ? {letterSpacing: (l = o / t, Math.round(1e5 * l) / 1e5 + "em")} : {}, i, f);
                    var l
                }, y = {
                    h1: b(s, 96, 1.167, -1.5),
                    h2: b(s, 60, 1.2, -.5),
                    h3: b(u, 48, 1.167, 0),
                    h4: b(u, 34, 1.235, .25),
                    h5: b(u, 24, 1.334, 0),
                    h6: b(c, 20, 1.6, .15),
                    subtitle1: b(u, 16, 1.75, .15),
                    subtitle2: b(c, 14, 1.57, .1),
                    body1: b(u, 16, 1.5, .15),
                    body2: b(u, 14, 1.43, .15),
                    button: b(c, 14, 1.75, .4, C),
                    caption: b(u, 12, 1.66, .4),
                    overline: b(u, 12, 2.66, 1, C)
                };
                return (0, i.Z)((0, r.Z)({
                    htmlFontSize: p,
                    pxToRem: g,
                    fontFamily: a,
                    fontSize: l,
                    fontWeightLight: s,
                    fontWeightRegular: u,
                    fontWeightMedium: c,
                    fontWeightBold: d
                }, y), h, {clone: !1})
            }

            const P = .2, R = .14, T = .12;

            function O(...e) {
                return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${P})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${R})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${T})`].join(",")
            }

            const M = ["none", O(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), O(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), O(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), O(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), O(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), O(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), O(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), O(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), O(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), O(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), O(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), O(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), O(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), O(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), O(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), O(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), O(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), O(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), O(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), O(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), O(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), O(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), O(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), O(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
                z = ["duration", "easing", "delay"], N = {
                    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
                    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
                    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
                    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
                }, I = {
                    shortest: 150,
                    shorter: 200,
                    short: 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195
                };

            function L(e) {
                return `${Math.round(e)}ms`
            }

            function _(e) {
                if (!e) return 0;
                const t = e / 36;
                return Math.round(10 * (4 + 15 * t ** .25 + t / 5))
            }

            function A(e) {
                const t = (0, r.Z)({}, N, e.easing), n = (0, r.Z)({}, I, e.duration);
                return (0, r.Z)({
                    getAutoHeightDuration: _, create: (e = ["all"], r = {}) => {
                        const {duration: a = n.standard, easing: i = t.easeInOut, delay: l = 0} = r;
                        return (0, o.Z)(r, z), (Array.isArray(e) ? e : [e]).map((e => `${e} ${"string" == typeof a ? a : L(a)} ${i} ${"string" == typeof l ? l : L(l)}`)).join(",")
                    }
                }, e, {easing: t, duration: n})
            }

            const $ = {
                mobileStepper: 1e3,
                fab: 1050,
                speedDial: 1050,
                appBar: 1100,
                drawer: 1200,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500
            }, F = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
            const D = function (e = {}, ...t) {
                const {mixins: n = {}, palette: k = {}, transitions: C = {}, typography: E = {}} = e,
                    P = (0, o.Z)(e, F);
                if (e.vars) throw new Error((0, a.Z)(18));
                const R = function (e) {
                    const {mode: t = "light", contrastThreshold: n = 3, tonalOffset: l = .2} = e, s = (0, o.Z)(e, y),
                        u = e.primary || function (e = "light") {
                            return "dark" === e ? {main: v[200], light: v[50], dark: v[400]} : {
                                main: v[700],
                                light: v[400],
                                dark: v[800]
                            }
                        }(t), k = e.secondary || function (e = "light") {
                            return "dark" === e ? {main: f[200], light: f[50], dark: f[400]} : {
                                main: f[500],
                                light: f[300],
                                dark: f[700]
                            }
                        }(t), C = e.error || function (e = "light") {
                            return "dark" === e ? {main: m[500], light: m[300], dark: m[700]} : {
                                main: m[700],
                                light: m[400],
                                dark: m[800]
                            }
                        }(t), E = e.info || function (e = "light") {
                            return "dark" === e ? {main: g[400], light: g[300], dark: g[700]} : {
                                main: g[700],
                                light: g[500],
                                dark: g[900]
                            }
                        }(t), Z = e.success || function (e = "light") {
                            return "dark" === e ? {main: b[400], light: b[300], dark: b[700]} : {
                                main: b[800],
                                light: b[500],
                                dark: b[900]
                            }
                        }(t), P = e.warning || function (e = "light") {
                            return "dark" === e ? {main: h[400], light: h[300], dark: h[700]} : {
                                main: "#ed6c02",
                                light: h[500],
                                dark: h[900]
                            }
                        }(t);

                    function R(e) {
                        return (0, c.mi)(e, x.text.primary) >= n ? x.text.primary : w.text.primary
                    }

                    const T = ({color: e, name: t, mainShade: n = 500, lightShade: o = 300, darkShade: i = 700}) => {
                        if (!(e = (0, r.Z)({}, e)).main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw new Error((0, a.Z)(11, t ? ` (${t})` : "", n));
                        if ("string" != typeof e.main) throw new Error((0, a.Z)(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
                        return S(e, "light", o, l), S(e, "dark", i, l), e.contrastText || (e.contrastText = R(e.main)), e
                    }, O = {dark: x, light: w};
                    return (0, i.Z)((0, r.Z)({
                        common: (0, r.Z)({}, d),
                        mode: t,
                        primary: T({color: u, name: "primary"}),
                        secondary: T({
                            color: k,
                            name: "secondary",
                            mainShade: "A400",
                            lightShade: "A200",
                            darkShade: "A700"
                        }),
                        error: T({color: C, name: "error"}),
                        warning: T({color: P, name: "warning"}),
                        info: T({color: E, name: "info"}),
                        success: T({color: Z, name: "success"}),
                        grey: p,
                        contrastThreshold: n,
                        getContrastText: R,
                        augmentColor: T,
                        tonalOffset: l
                    }, O[t]), s)
                }(k), T = (0, l.Z)(e);
                let O = (0, i.Z)(T, {
                    mixins: (z = T.breakpoints, N = n, (0, r.Z)({
                        toolbar: {
                            minHeight: 56,
                            [z.up("xs")]: {"@media (orientation: landscape)": {minHeight: 48}},
                            [z.up("sm")]: {minHeight: 64}
                        }
                    }, N)),
                    palette: R,
                    shadows: M.slice(),
                    typography: Z(R, E),
                    transitions: A(C),
                    zIndex: (0, r.Z)({}, $)
                });
                var z, N;
                return O = (0, i.Z)(O, P), O = t.reduce(((e, t) => (0, i.Z)(e, t)), O), O.unstable_sxConfig = (0, r.Z)({}, s.Z, null == P ? void 0 : P.unstable_sxConfig), O.unstable_sx = function (e) {
                    return (0, u.Z)({sx: e, theme: this})
                }, O
            }
        }, 247: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = (0, n(9617).Z)()
        }, 2077: (e, t, n) => {
            "use strict";
            n.d(t, {ZP: () => _, FO: () => N, Dz: () => I});
            var r = n(3366), o = n(7462), a = n(7294), i = n(5042),
                l = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            const s = (0, i.Z)((function (e) {
                return l.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
            }));
            var u = n(2443), c = n(444), d = n(6797), p = n(7278), f = s, m = function (e) {
                return "theme" !== e
            }, h = function (e) {
                return "string" == typeof e && e.charCodeAt(0) > 96 ? f : m
            }, v = function (e, t, n) {
                var r;
                if (t) {
                    var o = t.shouldForwardProp;
                    r = e.__emotion_forwardProp && o ? function (t) {
                        return e.__emotion_forwardProp(t) && o(t)
                    } : o
                }
                return "function" != typeof r && n && (r = e.__emotion_forwardProp), r
            }, g = function (e) {
                var t = e.cache, n = e.serialized, r = e.isStringTag;
                return (0, c.hC)(t, n, r), (0, p.L)((function () {
                    return (0, c.My)(t, n, r)
                })), null
            };
            var b = function e(t, n) {
                var r, i, l = t.__emotion_real === t, s = l && t.__emotion_base || t;
                void 0 !== n && (r = n.label, i = n.target);
                var p = v(t, n, l), f = p || h(s), m = !f("as");
                return function () {
                    var b = arguments, y = l && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                    if (void 0 !== r && y.push("label:" + r + ";"), null == b[0] || void 0 === b[0].raw) y.push.apply(y, b); else {
                        y.push(b[0][0]);
                        for (var w = b.length, x = 1; x < w; x++) y.push(b[x], b[0][x])
                    }
                    var S = (0, u.w)((function (e, t, n) {
                        var r = m && e.as || s, o = "", l = [], v = e;
                        if (null == e.theme) {
                            for (var b in v = {}, e) v[b] = e[b];
                            v.theme = (0, a.useContext)(u.T)
                        }
                        "string" == typeof e.className ? o = (0, c.fp)(t.registered, l, e.className) : null != e.className && (o = e.className + " ");
                        var w = (0, d.O)(y.concat(l), t.registered, v);
                        o += t.key + "-" + w.name, void 0 !== i && (o += " " + i);
                        var x = m && void 0 === p ? h(r) : f, S = {};
                        for (var k in e) m && "as" === k || x(k) && (S[k] = e[k]);
                        return S.className = o, S.ref = n, (0, a.createElement)(a.Fragment, null, (0, a.createElement)(g, {
                            cache: t,
                            serialized: w,
                            isStringTag: "string" == typeof r
                        }), (0, a.createElement)(r, S))
                    }));
                    return S.displayName = void 0 !== r ? r : "Styled(" + ("string" == typeof s ? s : s.displayName || s.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = s, S.__emotion_styles = y, S.__emotion_forwardProp = p, Object.defineProperty(S, "toString", {
                        value: function () {
                            return "." + i
                        }
                    }), S.withComponent = function (t, r) {
                        return e(t, (0, o.Z)({}, n, r, {shouldForwardProp: v(S, r, !0)})).apply(void 0, y)
                    }, S
                }
            }.bind();
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function (e) {
                b[e] = b(e)
            }));
            const y = b;
            var w = n(6268), x = n(8320);
            const S = ["variant"];

            function k(e) {
                return 0 === e.length
            }

            function C(e) {
                const {variant: t} = e, n = (0, r.Z)(e, S);
                let o = t || "";
                return Object.keys(n).sort().forEach((t => {
                    o += "color" === t ? k(o) ? e[t] : (0, x.Z)(e[t]) : `${k(o) ? t : (0, x.Z)(t)}${(0, x.Z)(e[t].toString())}`
                })), o
            }

            var E = n(6523);
            const Z = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], P = ["theme"],
                R = ["theme"];

            function T(e) {
                return 0 === Object.keys(e).length
            }

            function O(e) {
                return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e
            }

            const M = (0, w.Z)();
            var z = n(247);
            const N = e => O(e) && "classes" !== e, I = O, L = function (e = {}) {
                const {defaultTheme: t = M, rootShouldForwardProp: n = O, slotShouldForwardProp: a = O} = e, i = e => {
                    const n = T(e.theme) ? t : e.theme;
                    return (0, E.Z)((0, o.Z)({}, e, {theme: n}))
                };
                return i.__mui_systemSx = !0, (e, l = {}) => {
                    ((e, t) => {
                        Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
                    })(e, (e => e.filter((e => !(null != e && e.__mui_systemSx)))));
                    const {name: s, slot: u, skipVariantsResolver: c, skipSx: d, overridesResolver: p} = l,
                        f = (0, r.Z)(l, Z), m = void 0 !== c ? c : u && "Root" !== u || !1, h = d || !1;
                    let v = O;
                    "Root" === u ? v = n : u ? v = a : function (e) {
                        return "string" == typeof e && e.charCodeAt(0) > 96
                    }(e) && (v = void 0);
                    const g = function (e, t) {
                        return y(e, t)
                    }(e, (0, o.Z)({shouldForwardProp: v, label: void 0}, f)), b = (e, ...n) => {
                        const a = n ? n.map((e => "function" == typeof e && e.__emotion_real !== e ? n => {
                            let {theme: a} = n, i = (0, r.Z)(n, P);
                            return e((0, o.Z)({theme: T(a) ? t : a}, i))
                        } : e)) : [];
                        let l = e;
                        s && p && a.push((e => {
                            const n = T(e.theme) ? t : e.theme,
                                r = ((e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null)(s, n);
                            if (r) {
                                const t = {};
                                return Object.entries(r).forEach((([r, a]) => {
                                    t[r] = "function" == typeof a ? a((0, o.Z)({}, e, {theme: n})) : a
                                })), p(e, t)
                            }
                            return null
                        })), s && !m && a.push((e => {
                            const n = T(e.theme) ? t : e.theme;
                            return ((e, t, n, r) => {
                                var o, a;
                                const {ownerState: i = {}} = e, l = [],
                                    s = null == n || null == (o = n.components) || null == (a = o[r]) ? void 0 : a.variants;
                                return s && s.forEach((n => {
                                    let r = !0;
                                    Object.keys(n.props).forEach((t => {
                                        i[t] !== n.props[t] && e[t] !== n.props[t] && (r = !1)
                                    })), r && l.push(t[C(n.props)])
                                })), l
                            })(e, ((e, t) => {
                                let n = [];
                                t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
                                const r = {};
                                return n.forEach((e => {
                                    const t = C(e.props);
                                    r[t] = e.style
                                })), r
                            })(s, n), n, s)
                        })), h || a.push(i);
                        const u = a.length - n.length;
                        if (Array.isArray(e) && u > 0) {
                            const t = new Array(u).fill("");
                            l = [...e, ...t], l.raw = [...e.raw, ...t]
                        } else "function" == typeof e && e.__emotion_real !== e && (l = n => {
                            let {theme: a} = n, i = (0, r.Z)(n, R);
                            return e((0, o.Z)({theme: T(a) ? t : a}, i))
                        });
                        return g(l, ...a)
                    };
                    return g.withConfig && (b.withConfig = g.withConfig), b
                }
            }({defaultTheme: z.Z, rootShouldForwardProp: N}), _ = L
        }, 6122: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => i});
            var r = n(7925), o = n(6682);
            var a = n(247);

            function i({props: e, name: t}) {
                return function ({props: e, name: t, defaultTheme: n}) {
                    const a = function (e) {
                        const {theme: t, name: n, props: o} = e;
                        return t && t.components && t.components[n] && t.components[n].defaultProps ? (0, r.Z)(t.components[n].defaultProps, o) : o
                    }({theme: (0, o.Z)(n), name: t, props: e});
                    return a
                }({props: e, name: t, defaultTheme: a.Z})
            }
        }, 8216: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(8320).Z
        }, 5949: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => y});
            var r = n(7462), o = n(7294), a = n(3366), i = n(6010), l = n(4780), s = n(8216), u = n(6122), c = n(2077),
                d = n(1588), p = n(4867);

            function f(e) {
                return (0, p.Z)("MuiSvgIcon", e)
            }

            (0, d.Z)("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
            var m = n(5893);
            const h = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
                v = (0, c.ZP)("svg", {
                    name: "MuiSvgIcon", slot: "Root", overridesResolver: (e, t) => {
                        const {ownerState: n} = e;
                        return [t.root, "inherit" !== n.color && t[`color${(0, s.Z)(n.color)}`], t[`fontSize${(0, s.Z)(n.fontSize)}`]]
                    }
                })((({theme: e, ownerState: t}) => {
                    var n, r, o, a, i, l, s, u, c, d, p, f, m, h, v, g, b;
                    return {
                        userSelect: "none",
                        width: "1em",
                        height: "1em",
                        display: "inline-block",
                        fill: "currentColor",
                        flexShrink: 0,
                        transition: null == (n = e.transitions) || null == (r = n.create) ? void 0 : r.call(n, "fill", {duration: null == (o = e.transitions) || null == (a = o.duration) ? void 0 : a.shorter}),
                        fontSize: {
                            inherit: "inherit",
                            small: (null == (i = e.typography) || null == (l = i.pxToRem) ? void 0 : l.call(i, 20)) || "1.25rem",
                            medium: (null == (s = e.typography) || null == (u = s.pxToRem) ? void 0 : u.call(s, 24)) || "1.5rem",
                            large: (null == (c = e.typography) || null == (d = c.pxToRem) ? void 0 : d.call(c, 35)) || "2.1875rem"
                        }[t.fontSize],
                        color: null != (p = null == (f = (e.vars || e).palette) || null == (m = f[t.color]) ? void 0 : m.main) ? p : {
                            action: null == (h = (e.vars || e).palette) || null == (v = h.action) ? void 0 : v.active,
                            disabled: null == (g = (e.vars || e).palette) || null == (b = g.action) ? void 0 : b.disabled,
                            inherit: void 0
                        }[t.color]
                    }
                })), g = o.forwardRef((function (e, t) {
                    const n = (0, u.Z)({props: e, name: "MuiSvgIcon"}), {
                        children: o,
                        className: c,
                        color: d = "inherit",
                        component: p = "svg",
                        fontSize: g = "medium",
                        htmlColor: b,
                        inheritViewBox: y = !1,
                        titleAccess: w,
                        viewBox: x = "0 0 24 24"
                    } = n, S = (0, a.Z)(n, h), k = (0, r.Z)({}, n, {
                        color: d,
                        component: p,
                        fontSize: g,
                        instanceFontSize: e.fontSize,
                        inheritViewBox: y,
                        viewBox: x
                    }), C = {};
                    y || (C.viewBox = x);
                    const E = (e => {
                        const {color: t, fontSize: n, classes: r} = e,
                            o = {root: ["root", "inherit" !== t && `color${(0, s.Z)(t)}`, `fontSize${(0, s.Z)(n)}`]};
                        return (0, l.Z)(o, f, r)
                    })(k);
                    return (0, m.jsxs)(v, (0, r.Z)({
                        as: p,
                        className: (0, i.Z)(E.root, c),
                        focusable: "false",
                        color: b,
                        "aria-hidden": !w || void 0,
                        role: w ? "img" : void 0,
                        ref: t
                    }, C, S, {ownerState: k, children: [o, w ? (0, m.jsx)("title", {children: w}) : null]}))
                }));
            g.muiName = "SvgIcon";
            const b = g;

            function y(e, t) {
                function n(n, o) {
                    return (0, m.jsx)(b, (0, r.Z)({"data-testid": `${t}Icon`, ref: o}, n, {children: e}))
                }

                return n.muiName = b.muiName, o.memo(o.forwardRef(n))
            }
        }, 7144: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(7596).Z
        }, 1699: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                capitalize: () => o.Z,
                createChainedFunction: () => a,
                createSvgIcon: () => i.Z,
                debounce: () => l.Z,
                deprecatedPropType: () => s,
                isMuiElement: () => u.Z,
                ownerDocument: () => c.Z,
                ownerWindow: () => d.Z,
                requirePropFactory: () => p,
                setRef: () => f,
                unstable_ClassNameGenerator: () => x,
                unstable_useEnhancedEffect: () => m.Z,
                unstable_useId: () => h.Z,
                unsupportedProp: () => v,
                useControlled: () => g.Z,
                useEventCallback: () => b.Z,
                useForkRef: () => y.Z,
                useIsFocusVisible: () => w.Z
            });
            var r = n(7078), o = n(8216);
            const a = n(9064).Z;
            var i = n(5949), l = n(7144);
            const s = function (e, t) {
                return () => null
            };
            var u = n(8502), c = n(8038), d = n(5340);
            n(7462);
            const p = function (e, t) {
                return () => null
            }, f = n(7960).Z;
            var m = n(8974), h = n(7909);
            const v = function (e, t, n, r, o) {
                return null
            };
            var g = n(2893), b = n(2068), y = n(1705), w = n(3511);
            const x = {
                configure: e => {
                    r.Z.configure(e)
                }
            }
        }, 8502: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(7294);
            const o = function (e, t) {
                return r.isValidElement(e) && -1 !== t.indexOf(e.type.muiName)
            }
        }, 8038: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(7094).Z
        }, 5340: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(8290).Z
        }, 2893: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(7294);
            const o = function ({controlled: e, default: t, name: n, state: o = "value"}) {
                const {current: a} = r.useRef(void 0 !== e), [i, l] = r.useState(t);
                return [a ? e : i, r.useCallback((e => {
                    a || l(e)
                }), [])]
            }
        }, 8974: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(6600).Z
        }, 2068: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(3633).Z
        }, 1705: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(67).Z
        }, 7909: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(7579).Z
        }, 3511: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => d});
            var r = n(7294);
            let o, a = !0, i = !1;
            const l = {
                text: !0,
                search: !0,
                url: !0,
                tel: !0,
                email: !0,
                password: !0,
                number: !0,
                date: !0,
                month: !0,
                week: !0,
                time: !0,
                datetime: !0,
                "datetime-local": !0
            };

            function s(e) {
                e.metaKey || e.altKey || e.ctrlKey || (a = !0)
            }

            function u() {
                a = !1
            }

            function c() {
                "hidden" === this.visibilityState && i && (a = !0)
            }

            const d = function () {
                const e = r.useCallback((e => {
                    var t;
                    null != e && ((t = e.ownerDocument).addEventListener("keydown", s, !0), t.addEventListener("mousedown", u, !0), t.addEventListener("pointerdown", u, !0), t.addEventListener("touchstart", u, !0), t.addEventListener("visibilitychange", c, !0))
                }), []), t = r.useRef(!1);
                return {
                    isFocusVisibleRef: t, onFocus: function (e) {
                        return !!function (e) {
                            const {target: t} = e;
                            try {
                                return t.matches(":focus-visible")
                            } catch (e) {
                            }
                            return a || function (e) {
                                const {type: t, tagName: n} = e;
                                return !("INPUT" !== n || !l[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable
                            }(t)
                        }(e) && (t.current = !0, !0)
                    }, onBlur: function () {
                        return !!t.current && (i = !0, window.clearTimeout(o), o = window.setTimeout((() => {
                            i = !1
                        }), 100), t.current = !1, !0)
                    }, ref: e
                }
            }
        }, 4819: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = n(7294).createContext(null)
        }, 6760: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => a});
            var r = n(7294), o = n(4819);

            function a() {
                return r.useContext(o.Z)
            }
        }, 5408: (e, t, n) => {
            "use strict";
            n.d(t, {L7: () => l, VO: () => r, W8: () => i, k9: () => a});
            const r = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
                o = {keys: ["xs", "sm", "md", "lg", "xl"], up: e => `@media (min-width:${r[e]}px)`};

            function a(e, t, n) {
                const a = e.theme || {};
                if (Array.isArray(t)) {
                    const e = a.breakpoints || o;
                    return t.reduce(((r, o, a) => (r[e.up(e.keys[a])] = n(t[a]), r)), {})
                }
                if ("object" == typeof t) {
                    const e = a.breakpoints || o;
                    return Object.keys(t).reduce(((o, a) => {
                        if (-1 !== Object.keys(e.values || r).indexOf(a)) o[e.up(a)] = n(t[a], a); else {
                            const e = a;
                            o[e] = t[e]
                        }
                        return o
                    }), {})
                }
                return n(t)
            }

            function i(e = {}) {
                var t;
                return (null == (t = e.keys) ? void 0 : t.reduce(((t, n) => (t[e.up(n)] = {}, t)), {})) || {}
            }

            function l(e, t) {
                return e.reduce(((e, t) => {
                    const n = e[t];
                    return (!n || 0 === Object.keys(n).length) && delete e[t], e
                }), t)
            }
        }, 1796: (e, t, n) => {
            "use strict";
            n.d(t, {$n: () => d, Fq: () => u, _4: () => p, _j: () => c, mi: () => s});
            var r = n(1387);

            function o(e, t = 0, n = 1) {
                return Math.min(Math.max(t, e), n)
            }

            function a(e) {
                if (e.type) return e;
                if ("#" === e.charAt(0)) return a(function (e) {
                    e = e.slice(1);
                    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
                    let n = e.match(t);
                    return n && 1 === n[0].length && (n = n.map((e => e + e))), n ? `rgb${4 === n.length ? "a" : ""}(${n.map(((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3)).join(", ")})` : ""
                }(e));
                const t = e.indexOf("("), n = e.substring(0, t);
                if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n)) throw new Error((0, r.Z)(9, e));
                let o, i = e.substring(t + 1, e.length - 1);
                if ("color" === n) {
                    if (i = i.split(" "), o = i.shift(), 4 === i.length && "/" === i[3].charAt(0) && (i[3] = i[3].slice(1)), -1 === ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o)) throw new Error((0, r.Z)(10, o))
                } else i = i.split(",");
                return i = i.map((e => parseFloat(e))), {type: n, values: i, colorSpace: o}
            }

            function i(e) {
                const {type: t, colorSpace: n} = e;
                let {values: r} = e;
                return -1 !== t.indexOf("rgb") ? r = r.map(((e, t) => t < 3 ? parseInt(e, 10) : e)) : -1 !== t.indexOf("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), r = -1 !== t.indexOf("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, `${t}(${r})`
            }

            function l(e) {
                let t = "hsl" === (e = a(e)).type || "hsla" === e.type ? a(function (e) {
                    e = a(e);
                    const {values: t} = e, n = t[0], r = t[1] / 100, o = t[2] / 100, l = r * Math.min(o, 1 - o),
                        s = (e, t = (e + n / 30) % 12) => o - l * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                    let u = "rgb";
                    const c = [Math.round(255 * s(0)), Math.round(255 * s(8)), Math.round(255 * s(4))];
                    return "hsla" === e.type && (u += "a", c.push(t[3])), i({type: u, values: c})
                }(e)).values : e.values;
                return t = t.map((t => ("color" !== e.type && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4))), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
            }

            function s(e, t) {
                const n = l(e), r = l(t);
                return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
            }

            function u(e, t) {
                return e = a(e), t = o(t), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), "color" === e.type ? e.values[3] = `/${t}` : e.values[3] = t, i(e)
            }

            function c(e, t) {
                if (e = a(e), t = o(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t; else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
                return i(e)
            }

            function d(e, t) {
                if (e = a(e), t = o(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t; else if (-1 !== e.type.indexOf("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t; else if (-1 !== e.type.indexOf("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
                return i(e)
            }

            function p(e, t = .15) {
                return l(e) > .5 ? c(e, t) : d(e, t)
            }
        }, 6268: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => p});
            var r = n(7462), o = n(3366), a = n(9766);
            const i = ["values", "unit", "step"], l = {borderRadius: 4};
            var s = n(2605), u = n(6523), c = n(8010);
            const d = ["breakpoints", "palette", "spacing", "shape"], p = function (e = {}, ...t) {
                const {breakpoints: n = {}, palette: p = {}, spacing: f, shape: m = {}} = e, h = (0, o.Z)(e, d),
                    v = function (e) {
                        const {
                            values: t = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
                            unit: n = "px",
                            step: a = 5
                        } = e, l = (0, o.Z)(e, i), s = (e => {
                            const t = Object.keys(e).map((t => ({key: t, val: e[t]}))) || [];
                            return t.sort(((e, t) => e.val - t.val)), t.reduce(((e, t) => (0, r.Z)({}, e, {[t.key]: t.val})), {})
                        })(t), u = Object.keys(s);

                        function c(e) {
                            return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${n})`
                        }

                        function d(e) {
                            return `@media (max-width:${("number" == typeof t[e] ? t[e] : e) - a / 100}${n})`
                        }

                        function p(e, r) {
                            const o = u.indexOf(r);
                            return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${n}) and (max-width:${(-1 !== o && "number" == typeof t[u[o]] ? t[u[o]] : r) - a / 100}${n})`
                        }

                        return (0, r.Z)({
                            keys: u, values: s, up: c, down: d, between: p, only: function (e) {
                                return u.indexOf(e) + 1 < u.length ? p(e, u[u.indexOf(e) + 1]) : c(e)
                            }, not: function (e) {
                                const t = u.indexOf(e);
                                return 0 === t ? c(u[1]) : t === u.length - 1 ? d(u[t]) : p(e, u[u.indexOf(e) + 1]).replace("@media", "@media not all and")
                            }, unit: n
                        }, l)
                    }(n), g = function (e = 8) {
                        if (e.mui) return e;
                        const t = (0, s.hB)({spacing: e}), n = (...e) => (0 === e.length ? [1] : e).map((e => {
                            const n = t(e);
                            return "number" == typeof n ? `${n}px` : n
                        })).join(" ");
                        return n.mui = !0, n
                    }(f);
                let b = (0, a.Z)({
                    breakpoints: v,
                    direction: "ltr",
                    components: {},
                    palette: (0, r.Z)({mode: "light"}, p),
                    spacing: g,
                    shape: (0, r.Z)({}, l, m)
                }, h);
                return b = t.reduce(((e, t) => (0, a.Z)(e, t)), b), b.unstable_sxConfig = (0, r.Z)({}, c.Z, null == h ? void 0 : h.unstable_sxConfig), b.unstable_sx = function (e) {
                    return (0, u.Z)({sx: e, theme: this})
                }, b
            }
        }, 7730: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(9766);
            const o = function (e, t) {
                return t ? (0, r.Z)(e, t, {clone: !1}) : e
            }
        }, 2605: (e, t, n) => {
            "use strict";
            n.d(t, {hB: () => m, eI: () => f, NA: () => h, e6: () => g, o3: () => b});
            var r = n(5408), o = n(4844), a = n(7730);
            const i = {m: "margin", p: "padding"},
                l = {t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"]},
                s = {marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py"}, u = function (e) {
                    const t = {};
                    return e => (void 0 === t[e] && (t[e] = (e => {
                        if (e.length > 2) {
                            if (!s[e]) return [e];
                            e = s[e]
                        }
                        const [t, n] = e.split(""), r = i[t], o = l[n] || "";
                        return Array.isArray(o) ? o.map((e => r + e)) : [r + o]
                    })(e)), t[e])
                }(),
                c = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
                d = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"],
                p = [...c, ...d];

            function f(e, t, n, r) {
                var a;
                const i = null != (a = (0, o.DW)(e, t, !1)) ? a : n;
                return "number" == typeof i ? e => "string" == typeof e ? e : i * e : Array.isArray(i) ? e => "string" == typeof e ? e : i[e] : "function" == typeof i ? i : () => {
                }
            }

            function m(e) {
                return f(e, "spacing", 8)
            }

            function h(e, t) {
                if ("string" == typeof t || null == t) return t;
                const n = e(Math.abs(t));
                return t >= 0 ? n : "number" == typeof n ? -n : `-${n}`
            }

            function v(e, t) {
                const n = m(e.theme);
                return Object.keys(e).map((o => function (e, t, n, o) {
                    if (-1 === t.indexOf(n)) return null;
                    const a = function (e, t) {
                        return n => e.reduce(((e, r) => (e[r] = h(t, n), e)), {})
                    }(u(n), o), i = e[n];
                    return (0, r.k9)(e, i, a)
                }(e, t, o, n))).reduce(a.Z, {})
            }

            function g(e) {
                return v(e, c)
            }

            function b(e) {
                return v(e, d)
            }

            function y(e) {
                return v(e, p)
            }

            g.propTypes = {}, g.filterProps = c, b.propTypes = {}, b.filterProps = d, y.propTypes = {}, y.filterProps = p
        }, 4844: (e, t, n) => {
            "use strict";
            n.d(t, {DW: () => a, Jq: () => i, ZP: () => l});
            var r = n(8320), o = n(5408);

            function a(e, t, n = !0) {
                if (!t || "string" != typeof t) return null;
                if (e && e.vars && n) {
                    const n = `vars.${t}`.split(".").reduce(((e, t) => e && e[t] ? e[t] : null), e);
                    if (null != n) return n
                }
                return t.split(".").reduce(((e, t) => e && null != e[t] ? e[t] : null), e)
            }

            function i(e, t, n, r = n) {
                let o;
                return o = "function" == typeof e ? e(n) : Array.isArray(e) ? e[n] || r : a(e, n) || r, t && (o = t(o, r, e)), o
            }

            const l = function (e) {
                const {prop: t, cssProperty: n = e.prop, themeKey: l, transform: s} = e, u = e => {
                    if (null == e[t]) return null;
                    const u = e[t], c = a(e.theme, l) || {};
                    return (0, o.k9)(e, u, (e => {
                        let o = i(c, s, e);
                        return e === o && "string" == typeof e && (o = i(c, s, `${t}${"default" === e ? "" : (0, r.Z)(e)}`, e)), !1 === n ? o : {[n]: o}
                    }))
                };
                return u.propTypes = {}, u.filterProps = [t], u
            }
        }, 8010: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => M});
            var r = n(2605), o = n(4844), a = n(7730);
            const i = function (...e) {
                const t = e.reduce(((e, t) => (t.filterProps.forEach((n => {
                    e[n] = t
                })), e)), {}), n = e => Object.keys(e).reduce(((n, r) => t[r] ? (0, a.Z)(n, t[r](e)) : n), {});
                return n.propTypes = {}, n.filterProps = e.reduce(((e, t) => e.concat(t.filterProps)), []), n
            };
            var l = n(5408);

            function s(e) {
                return "number" != typeof e ? e : `${e}px solid`
            }

            const u = (0, o.ZP)({prop: "border", themeKey: "borders", transform: s}),
                c = (0, o.ZP)({prop: "borderTop", themeKey: "borders", transform: s}),
                d = (0, o.ZP)({prop: "borderRight", themeKey: "borders", transform: s}),
                p = (0, o.ZP)({prop: "borderBottom", themeKey: "borders", transform: s}),
                f = (0, o.ZP)({prop: "borderLeft", themeKey: "borders", transform: s}),
                m = (0, o.ZP)({prop: "borderColor", themeKey: "palette"}),
                h = (0, o.ZP)({prop: "borderTopColor", themeKey: "palette"}),
                v = (0, o.ZP)({prop: "borderRightColor", themeKey: "palette"}),
                g = (0, o.ZP)({prop: "borderBottomColor", themeKey: "palette"}),
                b = (0, o.ZP)({prop: "borderLeftColor", themeKey: "palette"}), y = e => {
                    if (void 0 !== e.borderRadius && null !== e.borderRadius) {
                        const t = (0, r.eI)(e.theme, "shape.borderRadius", 4, "borderRadius"),
                            n = e => ({borderRadius: (0, r.NA)(t, e)});
                        return (0, l.k9)(e, e.borderRadius, n)
                    }
                    return null
                };
            y.propTypes = {}, y.filterProps = ["borderRadius"], i(u, c, d, p, f, m, h, v, g, b, y);
            const w = e => {
                if (void 0 !== e.gap && null !== e.gap) {
                    const t = (0, r.eI)(e.theme, "spacing", 8, "gap"), n = e => ({gap: (0, r.NA)(t, e)});
                    return (0, l.k9)(e, e.gap, n)
                }
                return null
            };
            w.propTypes = {}, w.filterProps = ["gap"];
            const x = e => {
                if (void 0 !== e.columnGap && null !== e.columnGap) {
                    const t = (0, r.eI)(e.theme, "spacing", 8, "columnGap"), n = e => ({columnGap: (0, r.NA)(t, e)});
                    return (0, l.k9)(e, e.columnGap, n)
                }
                return null
            };
            x.propTypes = {}, x.filterProps = ["columnGap"];
            const S = e => {
                if (void 0 !== e.rowGap && null !== e.rowGap) {
                    const t = (0, r.eI)(e.theme, "spacing", 8, "rowGap"), n = e => ({rowGap: (0, r.NA)(t, e)});
                    return (0, l.k9)(e, e.rowGap, n)
                }
                return null
            };

            function k(e, t) {
                return "grey" === t ? t : e
            }

            function C(e) {
                return e <= 1 && 0 !== e ? 100 * e + "%" : e
            }

            S.propTypes = {}, S.filterProps = ["rowGap"], i(w, x, S, (0, o.ZP)({prop: "gridColumn"}), (0, o.ZP)({prop: "gridRow"}), (0, o.ZP)({prop: "gridAutoFlow"}), (0, o.ZP)({prop: "gridAutoColumns"}), (0, o.ZP)({prop: "gridAutoRows"}), (0, o.ZP)({prop: "gridTemplateColumns"}), (0, o.ZP)({prop: "gridTemplateRows"}), (0, o.ZP)({prop: "gridTemplateAreas"}), (0, o.ZP)({prop: "gridArea"})), i((0, o.ZP)({
                prop: "color",
                themeKey: "palette",
                transform: k
            }), (0, o.ZP)({
                prop: "bgcolor",
                cssProperty: "backgroundColor",
                themeKey: "palette",
                transform: k
            }), (0, o.ZP)({prop: "backgroundColor", themeKey: "palette", transform: k}));
            const E = (0, o.ZP)({prop: "width", transform: C}), Z = e => {
                if (void 0 !== e.maxWidth && null !== e.maxWidth) {
                    const t = t => {
                        var n, r, o;
                        return {maxWidth: (null == (n = e.theme) || null == (r = n.breakpoints) || null == (o = r.values) ? void 0 : o[t]) || l.VO[t] || C(t)}
                    };
                    return (0, l.k9)(e, e.maxWidth, t)
                }
                return null
            };
            Z.filterProps = ["maxWidth"];
            const P = (0, o.ZP)({prop: "minWidth", transform: C}), R = (0, o.ZP)({prop: "height", transform: C}),
                T = (0, o.ZP)({prop: "maxHeight", transform: C}), O = (0, o.ZP)({prop: "minHeight", transform: C}),
                M = ((0, o.ZP)({prop: "size", cssProperty: "width", transform: C}), (0, o.ZP)({
                    prop: "size",
                    cssProperty: "height",
                    transform: C
                }), i(E, Z, P, R, T, O, (0, o.ZP)({prop: "boxSizing"})), {
                    border: {themeKey: "borders", transform: s},
                    borderTop: {themeKey: "borders", transform: s},
                    borderRight: {themeKey: "borders", transform: s},
                    borderBottom: {themeKey: "borders", transform: s},
                    borderLeft: {themeKey: "borders", transform: s},
                    borderColor: {themeKey: "palette"},
                    borderTopColor: {themeKey: "palette"},
                    borderRightColor: {themeKey: "palette"},
                    borderBottomColor: {themeKey: "palette"},
                    borderLeftColor: {themeKey: "palette"},
                    borderRadius: {themeKey: "shape.borderRadius", style: y},
                    color: {themeKey: "palette", transform: k},
                    bgcolor: {themeKey: "palette", cssProperty: "backgroundColor", transform: k},
                    backgroundColor: {themeKey: "palette", transform: k},
                    p: {style: r.o3},
                    pt: {style: r.o3},
                    pr: {style: r.o3},
                    pb: {style: r.o3},
                    pl: {style: r.o3},
                    px: {style: r.o3},
                    py: {style: r.o3},
                    padding: {style: r.o3},
                    paddingTop: {style: r.o3},
                    paddingRight: {style: r.o3},
                    paddingBottom: {style: r.o3},
                    paddingLeft: {style: r.o3},
                    paddingX: {style: r.o3},
                    paddingY: {style: r.o3},
                    paddingInline: {style: r.o3},
                    paddingInlineStart: {style: r.o3},
                    paddingInlineEnd: {style: r.o3},
                    paddingBlock: {style: r.o3},
                    paddingBlockStart: {style: r.o3},
                    paddingBlockEnd: {style: r.o3},
                    m: {style: r.e6},
                    mt: {style: r.e6},
                    mr: {style: r.e6},
                    mb: {style: r.e6},
                    ml: {style: r.e6},
                    mx: {style: r.e6},
                    my: {style: r.e6},
                    margin: {style: r.e6},
                    marginTop: {style: r.e6},
                    marginRight: {style: r.e6},
                    marginBottom: {style: r.e6},
                    marginLeft: {style: r.e6},
                    marginX: {style: r.e6},
                    marginY: {style: r.e6},
                    marginInline: {style: r.e6},
                    marginInlineStart: {style: r.e6},
                    marginInlineEnd: {style: r.e6},
                    marginBlock: {style: r.e6},
                    marginBlockStart: {style: r.e6},
                    marginBlockEnd: {style: r.e6},
                    displayPrint: {cssProperty: !1, transform: e => ({"@media print": {display: e}})},
                    display: {},
                    overflow: {},
                    textOverflow: {},
                    visibility: {},
                    whiteSpace: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexWrap: {},
                    justifyContent: {},
                    alignItems: {},
                    alignContent: {},
                    order: {},
                    flex: {},
                    flexGrow: {},
                    flexShrink: {},
                    alignSelf: {},
                    justifyItems: {},
                    justifySelf: {},
                    gap: {style: w},
                    rowGap: {style: S},
                    columnGap: {style: x},
                    gridColumn: {},
                    gridRow: {},
                    gridAutoFlow: {},
                    gridAutoColumns: {},
                    gridAutoRows: {},
                    gridTemplateColumns: {},
                    gridTemplateRows: {},
                    gridTemplateAreas: {},
                    gridArea: {},
                    position: {},
                    zIndex: {themeKey: "zIndex"},
                    top: {},
                    right: {},
                    bottom: {},
                    left: {},
                    boxShadow: {themeKey: "shadows"},
                    width: {transform: C},
                    maxWidth: {style: Z},
                    minWidth: {transform: C},
                    height: {transform: C},
                    maxHeight: {transform: C},
                    minHeight: {transform: C},
                    boxSizing: {},
                    fontFamily: {themeKey: "typography"},
                    fontSize: {themeKey: "typography"},
                    fontStyle: {themeKey: "typography"},
                    fontWeight: {themeKey: "typography"},
                    letterSpacing: {},
                    textTransform: {},
                    lineHeight: {},
                    textAlign: {},
                    typography: {cssProperty: !1, themeKey: "typography"}
                })
        }, 6523: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => u});
            var r = n(8320), o = n(7730), a = n(4844), i = n(5408), l = n(8010);
            const s = function () {
                function e(e, t, n, o) {
                    const l = {[e]: t, theme: n}, s = o[e];
                    if (!s) return {[e]: t};
                    const {cssProperty: u = e, themeKey: c, transform: d, style: p} = s;
                    if (null == t) return null;
                    const f = (0, a.DW)(n, c) || {};
                    return p ? p(l) : (0, i.k9)(l, t, (t => {
                        let n = (0, a.Jq)(f, d, t);
                        return t === n && "string" == typeof t && (n = (0, a.Jq)(f, d, `${e}${"default" === t ? "" : (0, r.Z)(t)}`, t)), !1 === u ? n : {[u]: n}
                    }))
                }

                return function t(n) {
                    var r;
                    const {sx: a, theme: s = {}} = n || {};
                    if (!a) return null;
                    const u = null != (r = s.unstable_sxConfig) ? r : l.Z;

                    function c(n) {
                        let r = n;
                        if ("function" == typeof n) r = n(s); else if ("object" != typeof n) return n;
                        if (!r) return null;
                        const a = (0, i.W8)(s.breakpoints), l = Object.keys(a);
                        let c = a;
                        return Object.keys(r).forEach((n => {
                            const a = "function" == typeof (l = r[n]) ? l(s) : l;
                            var l;
                            if (null != a) if ("object" == typeof a) if (u[n]) c = (0, o.Z)(c, e(n, a, s, u)); else {
                                const e = (0, i.k9)({theme: s}, a, (e => ({[n]: e})));
                                !function (...e) {
                                    const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []), n = new Set(t);
                                    return e.every((e => n.size === Object.keys(e).length))
                                }(e, a) ? c = (0, o.Z)(c, e) : c[n] = t({sx: a, theme: s})
                            } else c = (0, o.Z)(c, e(n, a, s, u))
                        })), (0, i.L7)(l, c)
                    }

                    return Array.isArray(a) ? a.map(c) : c(a)
                }
            }();
            s.filterProps = ["sx"];
            const u = s
        }, 6682: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => i});
            var r = n(6268), o = n(4168);
            const a = (0, r.Z)(), i = function (e = a) {
                return (0, o.Z)(e)
            }
        }, 4168: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(6760);
            const o = function (e = null) {
                const t = (0, r.Z)();
                return t && (n = t, 0 !== Object.keys(n).length) ? t : e;
                var n
            }
        }, 7078: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            const r = e => e, o = (() => {
                let e = r;
                return {
                    configure(t) {
                        e = t
                    }, generate: t => e(t), reset() {
                        e = r
                    }
                }
            })()
        }, 8320: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(1387);

            function o(e) {
                if ("string" != typeof e) throw new Error((0, r.Z)(7));
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
        }, 4780: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                const r = {};
                return Object.keys(e).forEach((o => {
                    r[o] = e[o].reduce(((e, r) => (r && (e.push(t(r)), n && n[r] && e.push(n[r])), e)), []).join(" ")
                })), r
            }

            n.d(t, {Z: () => r})
        }, 9064: (e, t, n) => {
            "use strict";

            function r(...e) {
                return e.reduce(((e, t) => null == t ? e : function (...n) {
                    e.apply(this, n), t.apply(this, n)
                }), (() => {
                }))
            }

            n.d(t, {Z: () => r})
        }, 7596: (e, t, n) => {
            "use strict";

            function r(e, t = 166) {
                let n;

                function r(...r) {
                    clearTimeout(n), n = setTimeout((() => {
                        e.apply(this, r)
                    }), t)
                }

                return r.clear = () => {
                    clearTimeout(n)
                }, r
            }

            n.d(t, {Z: () => r})
        }, 9766: (e, t, n) => {
            "use strict";
            n.d(t, {P: () => o, Z: () => i});
            var r = n(7462);

            function o(e) {
                return null !== e && "object" == typeof e && e.constructor === Object
            }

            function a(e) {
                if (!o(e)) return e;
                const t = {};
                return Object.keys(e).forEach((n => {
                    t[n] = a(e[n])
                })), t
            }

            function i(e, t, n = {clone: !0}) {
                const l = n.clone ? (0, r.Z)({}, e) : e;
                return o(e) && o(t) && Object.keys(t).forEach((r => {
                    "__proto__" !== r && (o(t[r]) && r in e && o(e[r]) ? l[r] = i(e[r], t[r], n) : n.clone ? l[r] = o(t[r]) ? a(t[r]) : t[r] : l[r] = t[r])
                })), l
            }
        }, 1387: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = "https://mui.com/production-error/?code=" + e;
                for (let e = 1; e < arguments.length; e += 1) t += "&args[]=" + encodeURIComponent(arguments[e]);
                return "Minified MUI error #" + e + "; visit " + t + " for the full message."
            }

            n.d(t, {Z: () => r})
        }, 4867: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => a});
            var r = n(7078);
            const o = {
                active: "active",
                checked: "checked",
                completed: "completed",
                disabled: "disabled",
                error: "error",
                expanded: "expanded",
                focused: "focused",
                focusVisible: "focusVisible",
                required: "required",
                selected: "selected"
            };

            function a(e, t, n = "Mui") {
                const a = o[t];
                return a ? `${n}-${a}` : `${r.Z.generate(e)}-${t}`
            }
        }, 1588: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(4867);

            function o(e, t, n = "Mui") {
                const o = {};
                return t.forEach((t => {
                    o[t] = (0, r.Z)(e, t, n)
                })), o
            }
        }, 7094: (e, t, n) => {
            "use strict";

            function r(e) {
                return e && e.ownerDocument || document
            }

            n.d(t, {Z: () => r})
        }, 8290: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(7094);

            function o(e) {
                return (0, r.Z)(e).defaultView || window
            }
        }, 7925: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(7462);

            function o(e, t) {
                const n = (0, r.Z)({}, t);
                return Object.keys(e).forEach((a => {
                    if (a.toString().match(/^(components|slots)$/)) n[a] = (0, r.Z)({}, e[a], n[a]); else if (a.toString().match(/^(componentsProps|slotProps)$/)) {
                        const i = e[a] || {}, l = t[a];
                        n[a] = {}, l && Object.keys(l) ? i && Object.keys(i) ? (n[a] = (0, r.Z)({}, l), Object.keys(i).forEach((e => {
                            n[a][e] = o(i[e], l[e])
                        }))) : n[a] = l : n[a] = i
                    } else void 0 === n[a] && (n[a] = e[a])
                })), n
            }
        }, 7960: (e, t, n) => {
            "use strict";

            function r(e, t) {
                "function" == typeof e ? e(t) : e && (e.current = t)
            }

            n.d(t, {Z: () => r})
        }, 6600: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => o});
            var r = n(7294);
            const o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect
        }, 3633: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => a});
            var r = n(7294), o = n(6600);

            function a(e) {
                const t = r.useRef(e);
                return (0, o.Z)((() => {
                    t.current = e
                })), r.useCallback(((...e) => (0, t.current)(...e)), [])
            }
        }, 67: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => a});
            var r = n(7294), o = n(7960);

            function a(...e) {
                return r.useMemo((() => e.every((e => null == e)) ? null : t => {
                    e.forEach((e => {
                        (0, o.Z)(e, t)
                    }))
                }), e)
            }
        }, 7579: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {Z: () => l});
            var o = n(7294);
            let a = 0;
            const i = (r || (r = n.t(o, 2))).useId;

            function l(e) {
                if (void 0 !== i) {
                    const t = i();
                    return null != e ? e : t
                }
                return function (e) {
                    const [t, n] = o.useState(e), r = e || t;
                    return o.useEffect((() => {
                        null == t && (a += 1, n(`mui-${a}`))
                    }), [t]), r
                }(e)
            }
        }, 6010: (e, t, n) => {
            "use strict";

            function r(e) {
                var t, n, o = "";
                if ("string" == typeof e || "number" == typeof e) o += e; else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n); else for (t in e) e[t] && (o && (o += " "), o += t);
                return o
            }

            n.d(t, {Z: () => o});
            const o = function () {
                for (var e, t, n = 0, o = ""; n < arguments.length;) (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), o += t);
                return o
            }
        }, 2242: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => l});
            var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
            i.push([e.id, "html,\nbody {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  font-family: system-ui;\n  word-break: break-all;\n}\n#root {\n  width: 100%;\n  height: 100%;\n}\n.app-body {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.app-body > div {\n  width: 50%;\n  height: 100%;\n}\n.ocr-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  user-select: none;\n  padding: 10px 10px 0 10px;\n  box-sizing: border-box;\n}\n.ocr-input .ocr-input-wrapper {\n  background-color: #e6e6e6;\n}\n.ocr-input .ocr-input-img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.ocr-input .ocr-input-empty {\n  color: #8e8e8e;\n}\n.ocr-input .ocr-input-btns {\n  display: flex;\n  height: 60px;\n  align-items: center;\n}\n.ocr-input .ocr-input-btns > button {\n  margin: 0 16px;\n}\n.ocr-result {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  background-color: #f4f7ff;\n}\n.ocr-result .ocr-progress {\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  top: 15px;\n  margin-left: -16px;\n  color: #888;\n}\n.ocr-result .ocr-response {\n  flex: 1;\n  display: flex;\n  min-height: 0;\n  position: relative;\n}\n.ocr-result .ocr-response > textarea {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  color: #333;\n  line-height: 1.36;\n  font-family: system-ui;\n  padding: 16px;\n  box-sizing: border-box;\n  background-color: #f4f7ff;\n}\n.ocr-result .ocr-response > textarea::placeholder {\n  color: #8e8e8e;\n}\n.ocr-result .ocr-response > textarea::-webkit-scrollbar-track-piece {\n  background-color: #f4f7ff;\n}\n.ocr-result .ocr-response > textarea::-webkit-scrollbar-thumb {\n  border-color: #f4f7ff;\n}\n.ocr-result .ocr-result-handles {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  right: 8px;\n  bottom: 0;\n}\n.ocr-result .ocr-result-handles > span {\n  margin-bottom: 8px;\n}\n.ocr-result .ocr-result-bottom {\n  height: 48px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #eee;\n  box-sizing: border-box;\n}\n.ocr-result .ocr-result-bottom button {\n  margin: 0 8px;\n}\n.ocr-result-selection {\n  position: fixed;\n  z-index: 2;\n  background-color: #fff;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.ocr-result-selection > div {\n  display: flex;\n  align-items: center;\n  width: 56px;\n  justify-content: center;\n  padding: 4px 0;\n}\n.ocr-result-selection > div:first-child {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.ocr-result-selection > div:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.ocr-result-selection > div > svg {\n  font-size: 16px;\n  margin-right: 4px;\n}\n.ocr-result-selection > div:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.settings-content {\n  width: 300px;\n}\n.settings-content > div {\n  margin-bottom: 16px;\n}\n.settings-content > h3 {\n  margin: 0;\n  padding-bottom: 10px;\n}\n@media (prefers-color-scheme: light) {\n  body {\n    background-color: #ffffff;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #303133;\n    color: white;\n  }\n  .ocr-input .ocr-input-wrapper {\n    background-color: #515151;\n  }\n  .ocr-result {\n    background-color: #1e1e1e;\n  }\n  .ocr-result .ocr-response > textarea {\n    background-color: #1e1e1e;\n    color: #f6f6f6;\n  }\n  .ocr-result .ocr-response > textarea::-webkit-scrollbar-track-piece {\n    background-color: #1e1e1e;\n  }\n  .ocr-result .ocr-response > textarea::-webkit-scrollbar-thumb {\n    background-color: #666;\n    border-color: #1e1e1e;\n  }\n  .ocr-result .ocr-result-bottom {\n    border-color: #383838;\n  }\n  .ocr-result-selection {\n    background-color: #424242;\n  }\n}\n", ""]);
            const l = i
        }, 3645: e => {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var n = "", r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    })).join("")
                }, t.i = function (e, n, r, o, a) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var i = {};
                    if (r) for (var l = 0; l < this.length; l++) {
                        var s = this[l][0];
                        null != s && (i[s] = !0)
                    }
                    for (var u = 0; u < e.length; u++) {
                        var c = [].concat(e[u]);
                        r && i[c[0]] || (void 0 !== a && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = a), n && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = n) : c[2] = n), o && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = o) : c[4] = "".concat(o)), t.push(c))
                    }
                }, t
            }
        }, 8081: e => {
            "use strict";
            e.exports = function (e) {
                return e[1]
            }
        }, 8679: (e, t, n) => {
            "use strict";
            var r = n(1296), o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                }, a = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
                i = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, l = {};

            function s(e) {
                return r.isMemo(e) ? i : l[e.$$typeof] || o
            }

            l[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, l[r.Memo] = i;
            var u = Object.defineProperty, c = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, m = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (m) {
                        var o = f(n);
                        o && o !== m && e(t, o, r)
                    }
                    var i = c(n);
                    d && (i = i.concat(d(n)));
                    for (var l = s(t), h = s(n), v = 0; v < i.length; ++v) {
                        var g = i[v];
                        if (!(a[g] || r && r[g] || h && h[g] || l && l[g])) {
                            var b = p(n, g);
                            try {
                                u(t, g, b)
                            } catch (e) {
                            }
                        }
                    }
                }
                return t
            }
        }, 6103: (e, t) => {
            "use strict";
            var n = "function" == typeof Symbol && Symbol.for, r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107,
                i = n ? Symbol.for("react.strict_mode") : 60108, l = n ? Symbol.for("react.profiler") : 60114,
                s = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110,
                c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111,
                p = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113,
                m = n ? Symbol.for("react.suspense_list") : 60120, h = n ? Symbol.for("react.memo") : 60115,
                v = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121,
                b = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118,
                w = n ? Symbol.for("react.scope") : 60119;

            function x(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case c:
                                case d:
                                case a:
                                case l:
                                case i:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case p:
                                        case v:
                                        case h:
                                        case s:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function S(e) {
                return x(e) === d
            }

            t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = s, t.Element = r, t.ForwardRef = p, t.Fragment = a, t.Lazy = v, t.Memo = h, t.Portal = o, t.Profiler = l, t.StrictMode = i, t.Suspense = f, t.isAsyncMode = function (e) {
                return S(e) || x(e) === c
            }, t.isConcurrentMode = S, t.isContextConsumer = function (e) {
                return x(e) === u
            }, t.isContextProvider = function (e) {
                return x(e) === s
            }, t.isElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function (e) {
                return x(e) === p
            }, t.isFragment = function (e) {
                return x(e) === a
            }, t.isLazy = function (e) {
                return x(e) === v
            }, t.isMemo = function (e) {
                return x(e) === h
            }, t.isPortal = function (e) {
                return x(e) === o
            }, t.isProfiler = function (e) {
                return x(e) === l
            }, t.isStrictMode = function (e) {
                return x(e) === i
            }, t.isSuspense = function (e) {
                return x(e) === f
            }, t.isValidElementType = function (e) {
                return "string" == typeof e || "function" == typeof e || e === a || e === d || e === l || e === i || e === f || e === m || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === h || e.$$typeof === s || e.$$typeof === u || e.$$typeof === p || e.$$typeof === b || e.$$typeof === y || e.$$typeof === w || e.$$typeof === g)
            }, t.typeOf = x
        }, 1296: (e, t, n) => {
            "use strict";
            e.exports = n(6103)
        }, 4448: (e, t, n) => {
            "use strict";
            var r = n(7294), o = n(3840);

            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var i = new Set, l = {};

            function s(e, t) {
                u(e, t), u(e + "Capture", t)
            }

            function u(e, t) {
                for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
            }

            var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                d = Object.prototype.hasOwnProperty,
                p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                f = {}, m = {};

            function h(e, t, n, r, o, a, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
            }

            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                v[e] = new h(e, 0, !1, e, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
                var t = e[0];
                v[t] = new h(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                v[e] = new h(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                v[e] = new h(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function (e) {
                v[e] = new h(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (e) {
                v[e] = new h(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (e) {
                v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var g = /[\-:]([a-z])/g;

            function b(e) {
                return e[1].toUpperCase()
            }

            function y(e, t, n, r) {
                var o = v.hasOwnProperty(t) ? v[t] : null;
                (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
                    if (null == t || function (e, t, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof t) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, o, r) && (n = null), r || null === o ? function (e) {
                    return !!d.call(m, e) || !d.call(f, e) && (p.test(e) ? m[e] = !0 : (f[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                var t = e.replace(g, b);
                v[t] = new h(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                var t = e.replace(g, b);
                v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                var t = e.replace(g, b);
                v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), v.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = Symbol.for("react.element"),
                S = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"),
                E = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), P = Symbol.for("react.context"),
                R = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"),
                O = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), z = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var N = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var I = Symbol.iterator;

            function L(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = I && e[I] || e["@@iterator"]) ? e : null
            }

            var _, A = Object.assign;

            function $(e) {
                if (void 0 === _) try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    _ = t && t[1] || ""
                }
                return "\n" + _ + e
            }

            var F = !1;

            function D(e, t) {
                if (!e || F) return "";
                F = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t) if (t = function () {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (e) {
                            var r = e
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (e) {
                            r = e
                        }
                        e.call(t.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (t) {
                    if (t && r && "string" == typeof t.stack) {
                        for (var o = t.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
                        for (; 1 <= i && 0 <= l; i--, l--) if (o[i] !== a[l]) {
                            if (1 !== i || 1 !== l) do {
                                if (i--, 0 > --l || o[i] !== a[l]) {
                                    var s = "\n" + o[i].replace(" at new ", " at ");
                                    return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                }
                            } while (1 <= i && 0 <= l);
                            break
                        }
                    }
                } finally {
                    F = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? $(e) : ""
            }

            function j(e) {
                switch (e.tag) {
                    case 5:
                        return $(e.type);
                    case 16:
                        return $("Lazy");
                    case 13:
                        return $("Suspense");
                    case 19:
                        return $("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return D(e.type, !1);
                    case 11:
                        return D(e.type.render, !1);
                    case 1:
                        return D(e.type, !0);
                    default:
                        return ""
                }
            }

            function W(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case k:
                        return "Fragment";
                    case S:
                        return "Portal";
                    case E:
                        return "Profiler";
                    case C:
                        return "StrictMode";
                    case T:
                        return "Suspense";
                    case O:
                        return "SuspenseList"
                }
                if ("object" == typeof e) switch (e.$$typeof) {
                    case P:
                        return (e.displayName || "Context") + ".Consumer";
                    case Z:
                        return (e._context.displayName || "Context") + ".Provider";
                    case R:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case M:
                        return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
                    case z:
                        t = e._payload, e = e._init;
                        try {
                            return W(e(t))
                        } catch (e) {
                        }
                }
                return null
            }

            function B(e) {
                var t = e.type;
                switch (e.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (t.displayName || "Context") + ".Consumer";
                    case 10:
                        return (t._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return t;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return W(t);
                    case 8:
                        return t === C ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if ("function" == typeof t) return t.displayName || t.name || null;
                        if ("string" == typeof t) return t
                }
                return null
            }

            function H(e) {
                switch (typeof e) {
                    case"boolean":
                    case"number":
                    case"string":
                    case"undefined":
                    case"object":
                        return e;
                    default:
                        return ""
                }
            }

            function V(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function U(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = V(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var o = n.get, a = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0, get: function () {
                                return o.call(this)
                            }, set: function (e) {
                                r = "" + e, a.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return r
                            }, setValue: function (e) {
                                r = "" + e
                            }, stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function K(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(), r = "";
                return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function q(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function Y(e, t) {
                var n = t.checked;
                return A({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function X(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = H(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function Q(e, t) {
                null != (t = t.checked) && y(e, "checked", t, !1)
            }

            function G(e, t) {
                Q(e, t);
                var n = H(t.value), r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function J(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function ee(e, t, n) {
                "number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            var te = Array.isArray;

            function ne(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + H(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
                return A({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
            }

            function oe(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(a(92));
                        if (te(n)) {
                            if (1 < n.length) throw Error(a(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {initialValue: H(n)}
            }

            function ae(e, t) {
                var n = H(t.value), r = H(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function ie(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function le(e) {
                switch (e) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function se(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }

            var ue, ce, de = (ce = function (e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function () {
                    return ce(e, t)
                }))
            } : ce);

            function pe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
                }
                e.textContent = t
            }

            var fe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, me = ["Webkit", "ms", "Moz", "O"];

            function he(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || fe.hasOwnProperty(e) && fe[e] ? ("" + t).trim() : t + "px"
            }

            function ve(e, t) {
                for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"), o = he(n, t[n], r);
                    "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                }
            }

            Object.keys(fe).forEach((function (e) {
                me.forEach((function (t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), fe[t] = fe[e]
                }))
            }));
            var ge = A({menuitem: !0}, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function be(e, t) {
                if (t) {
                    if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(a(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
                    }
                    if (null != t.style && "object" != typeof t.style) throw Error(a(62))
                }
            }

            function ye(e, t) {
                if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                switch (e) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var we = null;

            function xe(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            var Se = null, ke = null, Ce = null;

            function Ee(e) {
                if (e = wo(e)) {
                    if ("function" != typeof Se) throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = So(t), Se(e.stateNode, e.type, t))
                }
            }

            function Ze(e) {
                ke ? Ce ? Ce.push(e) : Ce = [e] : ke = e
            }

            function Pe() {
                if (ke) {
                    var e = ke, t = Ce;
                    if (Ce = ke = null, Ee(e), t) for (e = 0; e < t.length; e++) Ee(t[e])
                }
            }

            function Re(e, t) {
                return e(t)
            }

            function Te() {
            }

            var Oe = !1;

            function Me(e, t, n) {
                if (Oe) return e(t, n);
                Oe = !0;
                try {
                    return Re(e, t, n)
                } finally {
                    Oe = !1, (null !== ke || null !== Ce) && (Te(), Pe())
                }
            }

            function ze(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = So(n);
                if (null === r) return null;
                n = r[t];
                e:switch (t) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
                return n
            }

            var Ne = !1;
            if (c) try {
                var Ie = {};
                Object.defineProperty(Ie, "passive", {
                    get: function () {
                        Ne = !0
                    }
                }), window.addEventListener("test", Ie, Ie), window.removeEventListener("test", Ie, Ie)
            } catch (ce) {
                Ne = !1
            }

            function Le(e, t, n, r, o, a, i, l, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, u)
                } catch (e) {
                    this.onError(e)
                }
            }

            var _e = !1, Ae = null, $e = !1, Fe = null, De = {
                onError: function (e) {
                    _e = !0, Ae = e
                }
            };

            function je(e, t, n, r, o, a, i, l, s) {
                _e = !1, Ae = null, Le.apply(De, arguments)
            }

            function We(e) {
                var t = e, n = e;
                if (e.alternate) for (; t.return;) t = t.return; else {
                    e = t;
                    do {
                        0 != (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function Be(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
                }
                return null
            }

            function He(e) {
                if (We(e) !== e) throw Error(a(188))
            }

            function Ve(e) {
                return null !== (e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = We(e))) throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ;) {
                        var o = n.return;
                        if (null === o) break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i;) {
                                if (i === n) return He(o), e;
                                if (i === r) return He(o), t;
                                i = i.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== r.return) n = o, r = i; else {
                            for (var l = !1, s = o.child; s;) {
                                if (s === n) {
                                    l = !0, n = o, r = i;
                                    break
                                }
                                if (s === r) {
                                    l = !0, r = o, n = i;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!l) {
                                for (s = i.child; s;) {
                                    if (s === n) {
                                        l = !0, n = i, r = o;
                                        break
                                    }
                                    if (s === r) {
                                        l = !0, r = i, n = o;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!l) throw Error(a(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(a(190))
                    }
                    if (3 !== n.tag) throw Error(a(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Ue(e) : null
            }

            function Ue(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = Ue(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }

            var Ke = o.unstable_scheduleCallback, qe = o.unstable_cancelCallback, Ye = o.unstable_shouldYield,
                Xe = o.unstable_requestPaint, Qe = o.unstable_now, Ge = o.unstable_getCurrentPriorityLevel,
                Je = o.unstable_ImmediatePriority, et = o.unstable_UserBlockingPriority, tt = o.unstable_NormalPriority,
                nt = o.unstable_LowPriority, rt = o.unstable_IdlePriority, ot = null, at = null,
                it = Math.clz32 ? Math.clz32 : function (e) {
                    return 0 === (e >>>= 0) ? 32 : 31 - (lt(e) / st | 0) | 0
                }, lt = Math.log, st = Math.LN2, ut = 64, ct = 4194304;

            function dt(e) {
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return e
                }
            }

            function pt(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0, o = e.suspendedLanes, a = e.pingedLanes, i = 268435455 & n;
                if (0 !== i) {
                    var l = i & ~o;
                    0 !== l ? r = dt(l) : 0 != (a &= i) && (r = dt(a))
                } else 0 != (i = n & ~o) ? r = dt(i) : 0 !== a && (r = dt(a));
                if (0 === r) return 0;
                if (0 !== t && t !== r && 0 == (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 != (4194240 & a))) return t;
                if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - it(t)), r |= e[n], t &= ~o;
                return r
            }

            function ft(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                        return t + 250;
                    case 8:
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function mt(e) {
                return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function ht() {
                var e = ut;
                return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e
            }

            function vt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function gt(e, t, n) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
            }

            function bt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - it(n), o = 1 << r;
                    o & t | e[r] & t && (e[r] |= t), n &= ~o
                }
            }

            var yt = 0;

            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
            }

            var xt, St, kt, Ct, Et, Zt = !1, Pt = [], Rt = null, Tt = null, Ot = null, Mt = new Map, zt = new Map,
                Nt = [],
                It = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function Lt(e, t) {
                switch (e) {
                    case"focusin":
                    case"focusout":
                        Rt = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        Tt = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        Ot = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        Mt.delete(t.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        zt.delete(t.pointerId)
                }
            }

            function _t(e, t, n, r, o, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [o]
                }, null !== t && null !== (t = wo(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
            }

            function At(e) {
                var t = yo(e.target);
                if (null !== t) {
                    var n = We(t);
                    if (null !== n) if (13 === (t = n.tag)) {
                        if (null !== (t = Be(n))) return e.blockedOn = t, void Et(e.priority, (function () {
                            kt(n)
                        }))
                    } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function $t(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = wo(n)) && St(t), e.blockedOn = n, !1;
                    var r = new (n = e.nativeEvent).constructor(n.type, n);
                    we = r, n.target.dispatchEvent(r), we = null, t.shift()
                }
                return !0
            }

            function Ft(e, t, n) {
                $t(e) && n.delete(t)
            }

            function Dt() {
                Zt = !1, null !== Rt && $t(Rt) && (Rt = null), null !== Tt && $t(Tt) && (Tt = null), null !== Ot && $t(Ot) && (Ot = null), Mt.forEach(Ft), zt.forEach(Ft)
            }

            function jt(e, t) {
                e.blockedOn === t && (e.blockedOn = null, Zt || (Zt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Dt)))
            }

            function Wt(e) {
                function t(t) {
                    return jt(t, e)
                }

                if (0 < Pt.length) {
                    jt(Pt[0], e);
                    for (var n = 1; n < Pt.length; n++) {
                        var r = Pt[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Rt && jt(Rt, e), null !== Tt && jt(Tt, e), null !== Ot && jt(Ot, e), Mt.forEach(t), zt.forEach(t), n = 0; n < Nt.length; n++) (r = Nt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn;) At(n), null === n.blockedOn && Nt.shift()
            }

            var Bt = w.ReactCurrentBatchConfig, Ht = !0;

            function Vt(e, t, n, r) {
                var o = yt, a = Bt.transition;
                Bt.transition = null;
                try {
                    yt = 1, Kt(e, t, n, r)
                } finally {
                    yt = o, Bt.transition = a
                }
            }

            function Ut(e, t, n, r) {
                var o = yt, a = Bt.transition;
                Bt.transition = null;
                try {
                    yt = 4, Kt(e, t, n, r)
                } finally {
                    yt = o, Bt.transition = a
                }
            }

            function Kt(e, t, n, r) {
                if (Ht) {
                    var o = Yt(e, t, n, r);
                    if (null === o) Hr(e, t, r, qt, n), Lt(e, r); else if (function (e, t, n, r, o) {
                        switch (t) {
                            case"focusin":
                                return Rt = _t(Rt, e, t, n, r, o), !0;
                            case"dragenter":
                                return Tt = _t(Tt, e, t, n, r, o), !0;
                            case"mouseover":
                                return Ot = _t(Ot, e, t, n, r, o), !0;
                            case"pointerover":
                                var a = o.pointerId;
                                return Mt.set(a, _t(Mt.get(a) || null, e, t, n, r, o)), !0;
                            case"gotpointercapture":
                                return a = o.pointerId, zt.set(a, _t(zt.get(a) || null, e, t, n, r, o)), !0
                        }
                        return !1
                    }(o, e, t, n, r)) r.stopPropagation(); else if (Lt(e, r), 4 & t && -1 < It.indexOf(e)) {
                        for (; null !== o;) {
                            var a = wo(o);
                            if (null !== a && xt(a), null === (a = Yt(e, t, n, r)) && Hr(e, t, r, qt, n), a === o) break;
                            o = a
                        }
                        null !== o && r.stopPropagation()
                    } else Hr(e, t, r, null, n)
                }
            }

            var qt = null;

            function Yt(e, t, n, r) {
                if (qt = null, null !== (e = yo(e = xe(r)))) if (null === (t = We(e))) e = null; else if (13 === (n = t.tag)) {
                    if (null !== (e = Be(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return qt = e, null
            }

            function Xt(e) {
                switch (e) {
                    case"cancel":
                    case"click":
                    case"close":
                    case"contextmenu":
                    case"copy":
                    case"cut":
                    case"auxclick":
                    case"dblclick":
                    case"dragend":
                    case"dragstart":
                    case"drop":
                    case"focusin":
                    case"focusout":
                    case"input":
                    case"invalid":
                    case"keydown":
                    case"keypress":
                    case"keyup":
                    case"mousedown":
                    case"mouseup":
                    case"paste":
                    case"pause":
                    case"play":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointerup":
                    case"ratechange":
                    case"reset":
                    case"resize":
                    case"seeked":
                    case"submit":
                    case"touchcancel":
                    case"touchend":
                    case"touchstart":
                    case"volumechange":
                    case"change":
                    case"selectionchange":
                    case"textInput":
                    case"compositionstart":
                    case"compositionend":
                    case"compositionupdate":
                    case"beforeblur":
                    case"afterblur":
                    case"beforeinput":
                    case"blur":
                    case"fullscreenchange":
                    case"focus":
                    case"hashchange":
                    case"popstate":
                    case"select":
                    case"selectstart":
                        return 1;
                    case"drag":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"mousemove":
                    case"mouseout":
                    case"mouseover":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"scroll":
                    case"toggle":
                    case"touchmove":
                    case"wheel":
                    case"mouseenter":
                    case"mouseleave":
                    case"pointerenter":
                    case"pointerleave":
                        return 4;
                    case"message":
                        switch (Ge()) {
                            case Je:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case nt:
                                return 16;
                            case rt:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }

            var Qt = null, Gt = null, Jt = null;

            function en() {
                if (Jt) return Jt;
                var e, t, n = Gt, r = n.length, o = "value" in Qt ? Qt.value : Qt.textContent, a = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++) ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === o[a - t]; t++) ;
                return Jt = o.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function on(e) {
                function t(t, n, r, o, a) {
                    for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }

                return A(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                    }, stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                    }, persist: function () {
                    }, isPersistent: nn
                }), t
            }

            var an, ln, sn, un = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                        return e.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, cn = on(un), dn = A({}, un, {view: 0, detail: 0}), pn = on(dn), fn = A({}, dn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: En,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (an = e.screenX - sn.screenX, ln = e.screenY - sn.screenY) : ln = an = 0, sn = e), an)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : ln
                    }
                }), mn = on(fn), hn = on(A({}, fn, {dataTransfer: 0})), vn = on(A({}, dn, {relatedTarget: 0})),
                gn = on(A({}, un, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), bn = A({}, un, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }), yn = on(bn), wn = on(A({}, un, {data: 0})), xn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, Sn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, kn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function Cn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
            }

            function En() {
                return Cn
            }

            var Zn = A({}, dn, {
                key: function (e) {
                    if (e.key) {
                        var t = xn[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: En,
                charCode: function (e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function (e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }), Pn = on(Zn), Rn = on(A({}, fn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })), Tn = on(A({}, dn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: En
            })), On = on(A({}, un, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), Mn = A({}, fn, {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                }, deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            }), zn = on(Mn), Nn = [9, 13, 27, 32], In = c && "CompositionEvent" in window, Ln = null;
            c && "documentMode" in document && (Ln = document.documentMode);
            var _n = c && "TextEvent" in window && !Ln, An = c && (!In || Ln && 8 < Ln && 11 >= Ln),
                $n = String.fromCharCode(32), Fn = !1;

            function Dn(e, t) {
                switch (e) {
                    case"keyup":
                        return -1 !== Nn.indexOf(t.keyCode);
                    case"keydown":
                        return 229 !== t.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function jn(e) {
                return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
            }

            var Wn = !1, Bn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Hn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Bn[e.type] : "textarea" === t
            }

            function Vn(e, t, n, r) {
                Ze(r), 0 < (t = Ur(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }

            var Un = null, Kn = null;

            function qn(e) {
                $r(e, 0)
            }

            function Yn(e) {
                if (K(xo(e))) return e
            }

            function Xn(e, t) {
                if ("change" === e) return t
            }

            var Qn = !1;
            if (c) {
                var Gn;
                if (c) {
                    var Jn = "oninput" in document;
                    if (!Jn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), Jn = "function" == typeof er.oninput
                    }
                    Gn = Jn
                } else Gn = !1;
                Qn = Gn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                Un && (Un.detachEvent("onpropertychange", nr), Kn = Un = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && Yn(Kn)) {
                    var t = [];
                    Vn(t, Kn, e, xe(e)), Me(qn, t)
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), Kn = n, (Un = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function or(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(Kn)
            }

            function ar(e, t) {
                if ("click" === e) return Yn(t)
            }

            function ir(e, t) {
                if ("input" === e || "change" === e) return Yn(t)
            }

            var lr = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            };

            function sr(e, t) {
                if (lr(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e), r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (!d.call(t, o) || !lr(e[o], t[o])) return !1
                }
                return !0
            }

            function ur(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function cr(e, t) {
                var n, r = ur(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                        e = n
                    }
                    e:{
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }

            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function pr() {
                for (var e = window, t = q(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n) break;
                    t = q((e = t.contentWindow).document)
                }
                return t
            }

            function fr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function mr(e) {
                var t = pr(), n = e.focusedElem, r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && fr(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var o = n.textContent.length, a = Math.min(r.start, o);
                        r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = cr(n, a);
                        var i = cr(n, r);
                        o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                    }
                    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }

            var hr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, br = null,
                yr = !1;

            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                yr || null == vr || vr !== q(r) || (r = "selectionStart" in (r = vr) && fr(r) ? {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, br && sr(br, r) || (br = r, 0 < (r = Ur(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = vr)))
            }

            function xr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }

            var Sr = {
                animationend: xr("Animation", "AnimationEnd"),
                animationiteration: xr("Animation", "AnimationIteration"),
                animationstart: xr("Animation", "AnimationStart"),
                transitionend: xr("Transition", "TransitionEnd")
            }, kr = {}, Cr = {};

            function Er(e) {
                if (kr[e]) return kr[e];
                if (!Sr[e]) return e;
                var t, n = Sr[e];
                for (t in n) if (n.hasOwnProperty(t) && t in Cr) return kr[e] = n[t];
                return e
            }

            c && (Cr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
            var Zr = Er("animationend"), Pr = Er("animationiteration"), Rr = Er("animationstart"),
                Tr = Er("transitionend"), Or = new Map,
                Mr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function zr(e, t) {
                Or.set(e, t), s(t, [e])
            }

            for (var Nr = 0; Nr < Mr.length; Nr++) {
                var Ir = Mr[Nr];
                zr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)))
            }
            zr(Zr, "onAnimationEnd"), zr(Pr, "onAnimationIteration"), zr(Rr, "onAnimationStart"), zr("dblclick", "onDoubleClick"), zr("focusin", "onFocus"), zr("focusout", "onBlur"), zr(Tr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                _r = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

            function Ar(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n, function (e, t, n, r, o, i, l, s, u) {
                    if (je.apply(this, arguments), _e) {
                        if (!_e) throw Error(a(198));
                        var c = Ae;
                        _e = !1, Ae = null, $e || ($e = !0, Fe = c)
                    }
                }(r, t, void 0, e), e.currentTarget = null
            }

            function $r(e, t) {
                t = 0 != (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], o = r.event;
                    r = r.listeners;
                    e:{
                        var a = void 0;
                        if (t) for (var i = r.length - 1; 0 <= i; i--) {
                            var l = r[i], s = l.instance, u = l.currentTarget;
                            if (l = l.listener, s !== a && o.isPropagationStopped()) break e;
                            Ar(o, l, u), a = s
                        } else for (i = 0; i < r.length; i++) {
                            if (s = (l = r[i]).instance, u = l.currentTarget, l = l.listener, s !== a && o.isPropagationStopped()) break e;
                            Ar(o, l, u), a = s
                        }
                    }
                }
                if ($e) throw e = Fe, $e = !1, Fe = null, e
            }

            function Fr(e, t) {
                var n = t[vo];
                void 0 === n && (n = t[vo] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Br(t, e, 2, !1), n.add(r))
            }

            function Dr(e, t, n) {
                var r = 0;
                t && (r |= 4), Br(n, e, r, t)
            }

            var jr = "_reactListening" + Math.random().toString(36).slice(2);

            function Wr(e) {
                if (!e[jr]) {
                    e[jr] = !0, i.forEach((function (t) {
                        "selectionchange" !== t && (_r.has(t) || Dr(t, !1, e), Dr(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[jr] || (t[jr] = !0, Dr("selectionchange", !1, t))
                }
            }

            function Br(e, t, n, r) {
                switch (Xt(t)) {
                    case 1:
                        var o = Vt;
                        break;
                    case 4:
                        o = Ut;
                        break;
                    default:
                        o = Kt
                }
                n = o.bind(null, t, n, e), o = void 0, !Ne || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
            }

            function Hr(e, t, n, r, o) {
                var a = r;
                if (0 == (1 & t) && 0 == (2 & t) && null !== r) e:for (; ;) {
                    if (null === r) return;
                    var i = r.tag;
                    if (3 === i || 4 === i) {
                        var l = r.stateNode.containerInfo;
                        if (l === o || 8 === l.nodeType && l.parentNode === o) break;
                        if (4 === i) for (i = r.return; null !== i;) {
                            var s = i.tag;
                            if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || 8 === s.nodeType && s.parentNode === o)) return;
                            i = i.return
                        }
                        for (; null !== l;) {
                            if (null === (i = yo(l))) return;
                            if (5 === (s = i.tag) || 6 === s) {
                                r = a = i;
                                continue e
                            }
                            l = l.parentNode
                        }
                    }
                    r = r.return
                }
                Me((function () {
                    var r = a, o = xe(n), i = [];
                    e:{
                        var l = Or.get(e);
                        if (void 0 !== l) {
                            var s = cn, u = e;
                            switch (e) {
                                case"keypress":
                                    if (0 === tn(n)) break e;
                                case"keydown":
                                case"keyup":
                                    s = Pn;
                                    break;
                                case"focusin":
                                    u = "focus", s = vn;
                                    break;
                                case"focusout":
                                    u = "blur", s = vn;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    s = vn;
                                    break;
                                case"click":
                                    if (2 === n.button) break e;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    s = mn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    s = hn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    s = Tn;
                                    break;
                                case Zr:
                                case Pr:
                                case Rr:
                                    s = gn;
                                    break;
                                case Tr:
                                    s = On;
                                    break;
                                case"scroll":
                                    s = pn;
                                    break;
                                case"wheel":
                                    s = zn;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    s = yn;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    s = Rn
                            }
                            var c = 0 != (4 & t), d = !c && "scroll" === e,
                                p = c ? null !== l ? l + "Capture" : null : l;
                            c = [];
                            for (var f, m = r; null !== m;) {
                                var h = (f = m).stateNode;
                                if (5 === f.tag && null !== h && (f = h, null !== p && null != (h = ze(m, p)) && c.push(Vr(m, h, f))), d) break;
                                m = m.return
                            }
                            0 < c.length && (l = new s(l, u, null, n, o), i.push({event: l, listeners: c}))
                        }
                    }
                    if (0 == (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !yo(u) && !u[ho]) && (s || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (u = (u = n.relatedTarget || n.toElement) ? yo(u) : null) && (u !== (d = We(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = r), s !== u)) {
                            if (c = mn, h = "onMouseLeave", p = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Rn, h = "onPointerLeave", p = "onPointerEnter", m = "pointer"), d = null == s ? l : xo(s), f = null == u ? l : xo(u), (l = new c(h, m + "leave", s, n, o)).target = d, l.relatedTarget = f, h = null, yo(o) === r && ((c = new c(p, m + "enter", u, n, o)).target = f, c.relatedTarget = d, h = c), d = h, s && u) e:{
                                for (p = u, m = 0, f = c = s; f; f = Kr(f)) m++;
                                for (f = 0, h = p; h; h = Kr(h)) f++;
                                for (; 0 < m - f;) c = Kr(c), m--;
                                for (; 0 < f - m;) p = Kr(p), f--;
                                for (; m--;) {
                                    if (c === p || null !== p && c === p.alternate) break e;
                                    c = Kr(c), p = Kr(p)
                                }
                                c = null
                            } else c = null;
                            null !== s && qr(i, l, s, c, !1), null !== u && null !== d && qr(i, d, u, c, !0)
                        }
                        if ("select" === (s = (l = r ? xo(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var v = Xn; else if (Hn(l)) if (Qn) v = ir; else {
                            v = or;
                            var g = rr
                        } else (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = ar);
                        switch (v && (v = v(e, r)) ? Vn(i, v, n, o) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)), g = r ? xo(r) : window, e) {
                            case"focusin":
                                (Hn(g) || "true" === g.contentEditable) && (vr = g, gr = r, br = null);
                                break;
                            case"focusout":
                                br = gr = vr = null;
                                break;
                            case"mousedown":
                                yr = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                yr = !1, wr(i, n, o);
                                break;
                            case"selectionchange":
                                if (hr) break;
                            case"keydown":
                            case"keyup":
                                wr(i, n, o)
                        }
                        var b;
                        if (In) e:{
                            switch (e) {
                                case"compositionstart":
                                    var y = "onCompositionStart";
                                    break e;
                                case"compositionend":
                                    y = "onCompositionEnd";
                                    break e;
                                case"compositionupdate":
                                    y = "onCompositionUpdate";
                                    break e
                            }
                            y = void 0
                        } else Wn ? Dn(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
                        y && (An && "ko" !== n.locale && (Wn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Wn && (b = en()) : (Gt = "value" in (Qt = o) ? Qt.value : Qt.textContent, Wn = !0)), 0 < (g = Ur(r, y)).length && (y = new wn(y, e, null, n, o), i.push({
                            event: y,
                            listeners: g
                        }), (b || null !== (b = jn(n))) && (y.data = b))), (b = _n ? function (e, t) {
                            switch (e) {
                                case"compositionend":
                                    return jn(t);
                                case"keypress":
                                    return 32 !== t.which ? null : (Fn = !0, $n);
                                case"textInput":
                                    return (e = t.data) === $n && Fn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function (e, t) {
                            if (Wn) return "compositionend" === e || !In && Dn(e, t) ? (e = en(), Jt = Gt = Qt = null, Wn = !1, e) : null;
                            switch (e) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return An && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && 0 < (r = Ur(r, "onBeforeInput")).length && (o = new wn("onBeforeInput", "beforeinput", null, n, o), i.push({
                            event: o,
                            listeners: r
                        }), o.data = b)
                    }
                    $r(i, t)
                }))
            }

            function Vr(e, t, n) {
                return {instance: e, listener: t, currentTarget: n}
            }

            function Ur(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var o = e, a = o.stateNode;
                    5 === o.tag && null !== a && (o = a, null != (a = ze(e, n)) && r.unshift(Vr(e, a, o)), null != (a = ze(e, t)) && r.push(Vr(e, a, o))), e = e.return
                }
                return r
            }

            function Kr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function qr(e, t, n, r, o) {
                for (var a = t._reactName, i = []; null !== n && n !== r;) {
                    var l = n, s = l.alternate, u = l.stateNode;
                    if (null !== s && s === r) break;
                    5 === l.tag && null !== u && (l = u, o ? null != (s = ze(n, a)) && i.unshift(Vr(n, s, l)) : o || null != (s = ze(n, a)) && i.push(Vr(n, s, l))), n = n.return
                }
                0 !== i.length && e.push({event: t, listeners: i})
            }

            var Yr = /\r\n?/g, Xr = /\u0000|\uFFFD/g;

            function Qr(e) {
                return ("string" == typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, "")
            }

            function Gr(e, t, n) {
                if (t = Qr(t), Qr(e) !== t && n) throw Error(a(425))
            }

            function Jr() {
            }

            var eo = null, to = null;

            function no(e, t) {
                return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }

            var ro = "function" == typeof setTimeout ? setTimeout : void 0,
                oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
                ao = "function" == typeof Promise ? Promise : void 0,
                io = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ao ? function (e) {
                    return ao.resolve(null).then(e).catch(lo)
                } : ro;

            function lo(e) {
                setTimeout((function () {
                    throw e
                }))
            }

            function so(e, t) {
                var n = t, r = 0;
                do {
                    var o = n.nextSibling;
                    if (e.removeChild(n), o && 8 === o.nodeType) if ("/$" === (n = o.data)) {
                        if (0 === r) return e.removeChild(o), void Wt(t);
                        r--
                    } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = o
                } while (n);
                Wt(t)
            }

            function uo(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function co(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            var po = Math.random().toString(36).slice(2), fo = "__reactFiber$" + po, mo = "__reactProps$" + po,
                ho = "__reactContainer$" + po, vo = "__reactEvents$" + po, go = "__reactListeners$" + po,
                bo = "__reactHandles$" + po;

            function yo(e) {
                var t = e[fo];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[ho] || n[fo]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = co(e); null !== e;) {
                            if (n = e[fo]) return n;
                            e = co(e)
                        }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function wo(e) {
                return !(e = e[fo] || e[ho]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function xo(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(a(33))
            }

            function So(e) {
                return e[mo] || null
            }

            var ko = [], Co = -1;

            function Eo(e) {
                return {current: e}
            }

            function Zo(e) {
                0 > Co || (e.current = ko[Co], ko[Co] = null, Co--)
            }

            function Po(e, t) {
                Co++, ko[Co] = e.current, e.current = t
            }

            var Ro = {}, To = Eo(Ro), Oo = Eo(!1), Mo = Ro;

            function zo(e, t) {
                var n = e.type.contextTypes;
                if (!n) return Ro;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, a = {};
                for (o in n) a[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
            }

            function No(e) {
                return null != e.childContextTypes
            }

            function Io() {
                Zo(Oo), Zo(To)
            }

            function Lo(e, t, n) {
                if (To.current !== Ro) throw Error(a(168));
                Po(To, t), Po(Oo, n)
            }

            function _o(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(a(108, B(e) || "Unknown", o));
                return A({}, n, r)
            }

            function Ao(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ro, Mo = To.current, Po(To, e), Po(Oo, Oo.current), !0
            }

            function $o(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(a(169));
                n ? (e = _o(e, t, Mo), r.__reactInternalMemoizedMergedChildContext = e, Zo(Oo), Zo(To), Po(To, e)) : Zo(Oo), Po(Oo, n)
            }

            var Fo = null, Do = !1, jo = !1;

            function Wo(e) {
                null === Fo ? Fo = [e] : Fo.push(e)
            }

            function Bo() {
                if (!jo && null !== Fo) {
                    jo = !0;
                    var e = 0, t = yt;
                    try {
                        var n = Fo;
                        for (yt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Fo = null, Do = !1
                    } catch (t) {
                        throw null !== Fo && (Fo = Fo.slice(e + 1)), Ke(Je, Bo), t
                    } finally {
                        yt = t, jo = !1
                    }
                }
                return null
            }

            var Ho = [], Vo = 0, Uo = null, Ko = 0, qo = [], Yo = 0, Xo = null, Qo = 1, Go = "";

            function Jo(e, t) {
                Ho[Vo++] = Ko, Ho[Vo++] = Uo, Uo = e, Ko = t
            }

            function ea(e, t, n) {
                qo[Yo++] = Qo, qo[Yo++] = Go, qo[Yo++] = Xo, Xo = e;
                var r = Qo;
                e = Go;
                var o = 32 - it(r) - 1;
                r &= ~(1 << o), n += 1;
                var a = 32 - it(t) + o;
                if (30 < a) {
                    var i = o - o % 5;
                    a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Qo = 1 << 32 - it(t) + o | n << o | r, Go = a + e
                } else Qo = 1 << a | n << o | r, Go = e
            }

            function ta(e) {
                null !== e.return && (Jo(e, 1), ea(e, 1, 0))
            }

            function na(e) {
                for (; e === Uo;) Uo = Ho[--Vo], Ho[Vo] = null, Ko = Ho[--Vo], Ho[Vo] = null;
                for (; e === Xo;) Xo = qo[--Yo], qo[Yo] = null, Go = qo[--Yo], qo[Yo] = null, Qo = qo[--Yo], qo[Yo] = null
            }

            var ra = null, oa = null, aa = !1, ia = null;

            function la(e, t) {
                var n = zu(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
            }

            function sa(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ra = e, oa = uo(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ra = e, oa = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xo ? {
                            id: Qo,
                            overflow: Go
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = zu(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ra = e, oa = null, !0);
                    default:
                        return !1
                }
            }

            function ua(e) {
                return 0 != (1 & e.mode) && 0 == (128 & e.flags)
            }

            function ca(e) {
                if (aa) {
                    var t = oa;
                    if (t) {
                        var n = t;
                        if (!sa(e, t)) {
                            if (ua(e)) throw Error(a(418));
                            t = uo(n.nextSibling);
                            var r = ra;
                            t && sa(e, t) ? la(r, n) : (e.flags = -4097 & e.flags | 2, aa = !1, ra = e)
                        }
                    } else {
                        if (ua(e)) throw Error(a(418));
                        e.flags = -4097 & e.flags | 2, aa = !1, ra = e
                    }
                }
            }

            function da(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                ra = e
            }

            function pa(e) {
                if (e !== ra) return !1;
                if (!aa) return da(e), aa = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oa)) {
                    if (ua(e)) throw fa(), Error(a(418));
                    for (; t;) la(e, t), t = uo(t.nextSibling)
                }
                if (da(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                    e:{
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        oa = uo(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        oa = null
                    }
                } else oa = ra ? uo(e.stateNode.nextSibling) : null;
                return !0
            }

            function fa() {
                for (var e = oa; e;) e = uo(e.nextSibling)
            }

            function ma() {
                oa = ra = null, aa = !1
            }

            function ha(e) {
                null === ia ? ia = [e] : ia.push(e)
            }

            var va = w.ReactCurrentBatchConfig;

            function ga(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = A({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }

            var ba = Eo(null), ya = null, wa = null, xa = null;

            function Sa() {
                xa = wa = ya = null
            }

            function ka(e) {
                var t = ba.current;
                Zo(ba), e._currentValue = t
            }

            function Ca(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Ea(e, t) {
                ya = e, xa = wa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wl = !0), e.firstContext = null)
            }

            function Za(e) {
                var t = e._currentValue;
                if (xa !== e) if (e = {context: e, memoizedValue: t, next: null}, null === wa) {
                    if (null === ya) throw Error(a(308));
                    wa = e, ya.dependencies = {lanes: 0, firstContext: e}
                } else wa = wa.next = e;
                return t
            }

            var Pa = null;

            function Ra(e) {
                null === Pa ? Pa = [e] : Pa.push(e)
            }

            function Ta(e, t, n, r) {
                var o = t.interleaved;
                return null === o ? (n.next = n, Ra(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Oa(e, r)
            }

            function Oa(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }

            var Ma = !1;

            function za(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, interleaved: null, lanes: 0},
                    effects: null
                }
            }

            function Na(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Ia(e, t) {
                return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
            }

            function La(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 != (2 & Ts)) {
                    var o = r.pending;
                    return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Oa(e, n)
                }
                return null === (o = r.interleaved) ? (t.next = t, Ra(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Oa(e, n)
            }

            function _a(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
                }
            }

            function Aa(e, t) {
                var n = e.updateQueue, r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null, a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === a ? o = a = i : a = a.next = i, n = n.next
                        } while (null !== n);
                        null === a ? o = a = t : a = a.next = t
                    } else o = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        effects: r.effects
                    }, void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function $a(e, t, n, r) {
                var o = e.updateQueue;
                Ma = !1;
                var a = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending;
                if (null !== l) {
                    o.shared.pending = null;
                    var s = l, u = s.next;
                    s.next = null, null === i ? a = u : i.next = u, i = s;
                    var c = e.alternate;
                    null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s)
                }
                if (null !== a) {
                    var d = o.baseState;
                    for (i = 0, c = u = s = null, l = a; ;) {
                        var p = l.lane, f = l.eventTime;
                        if ((r & p) === p) {
                            null !== c && (c = c.next = {
                                eventTime: f,
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            });
                            e:{
                                var m = e, h = l;
                                switch (p = t, f = n, h.tag) {
                                    case 1:
                                        if ("function" == typeof (m = h.payload)) {
                                            d = m.call(f, d, p);
                                            break e
                                        }
                                        d = m;
                                        break e;
                                    case 3:
                                        m.flags = -65537 & m.flags | 128;
                                    case 0:
                                        if (null == (p = "function" == typeof (m = h.payload) ? m.call(f, d, p) : m)) break e;
                                        d = A({}, d, p);
                                        break e;
                                    case 2:
                                        Ma = !0
                                }
                            }
                            null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (p = o.effects) ? o.effects = [l] : p.push(l))
                        } else f = {
                            eventTime: f,
                            lane: p,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null
                        }, null === c ? (u = c = f, s = d) : c = c.next = f, i |= p;
                        if (null === (l = l.next)) {
                            if (null === (l = o.shared.pending)) break;
                            l = (p = l).next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
                        }
                    }
                    if (null === c && (s = d), o.baseState = s, o.firstBaseUpdate = u, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                        o = t;
                        do {
                            i |= o.lane, o = o.next
                        } while (o !== t)
                    } else null === a && (o.shared.lanes = 0);
                    As |= i, e.lanes = i, e.memoizedState = d
                }
            }

            function Fa(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
                    var r = e[t], o = r.callback;
                    if (null !== o) {
                        if (r.callback = null, r = n, "function" != typeof o) throw Error(a(191, o));
                        o.call(r)
                    }
                }
            }

            var Da = (new r.Component).refs;

            function ja(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : A({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }

            var Wa = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && We(e) === e
                }, enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = tu(), o = nu(e), a = Ia(r, o);
                    a.payload = t, null != n && (a.callback = n), null !== (t = La(e, a, o)) && (ru(t, e, o, r), _a(t, e, o))
                }, enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = tu(), o = nu(e), a = Ia(r, o);
                    a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = La(e, a, o)) && (ru(t, e, o, r), _a(t, e, o))
                }, enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = tu(), r = nu(e), o = Ia(n, r);
                    o.tag = 2, null != t && (o.callback = t), null !== (t = La(e, o, r)) && (ru(t, e, r, n), _a(t, e, r))
                }
            };

            function Ba(e, t, n, r, o, a, i) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !(t.prototype && t.prototype.isPureReactComponent && sr(n, r) && sr(o, a))
            }

            function Ha(e, t, n) {
                var r = !1, o = Ro, a = t.contextType;
                return "object" == typeof a && null !== a ? a = Za(a) : (o = No(t) ? Mo : To.current, a = (r = null != (r = t.contextTypes)) ? zo(e, o) : Ro), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Wa, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
            }

            function Va(e, t, n, r) {
                e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wa.enqueueReplaceState(t, t.state, null)
            }

            function Ua(e, t, n, r) {
                var o = e.stateNode;
                o.props = n, o.state = e.memoizedState, o.refs = Da, za(e);
                var a = t.contextType;
                "object" == typeof a && null !== a ? o.context = Za(a) : (a = No(t) ? Mo : To.current, o.context = zo(e, a)), o.state = e.memoizedState, "function" == typeof (a = t.getDerivedStateFromProps) && (ja(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Wa.enqueueReplaceState(o, o.state, null), $a(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
            }

            function Ka(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(a(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(a(147, e));
                        var o = r, i = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) {
                            var t = o.refs;
                            t === Da && (t = o.refs = {}), null === e ? delete t[i] : t[i] = e
                        }, t._stringRef = i, t)
                    }
                    if ("string" != typeof e) throw Error(a(284));
                    if (!n._owner) throw Error(a(290, e))
                }
                return e
            }

            function qa(e, t) {
                throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function Ya(e) {
                return (0, e._init)(e._payload)
            }

            function Xa(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function o(e, t) {
                    return (e = Iu(e, t)).index = 0, e.sibling = null, e
                }

                function i(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                }

                function l(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = $u(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function u(e, t, n, r) {
                    var a = n.type;
                    return a === k ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === z && Ya(a) === t.type) ? ((r = o(t, n.props)).ref = Ka(e, t, n), r.return = e, r) : ((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = Ka(e, t, n), r.return = e, r)
                }

                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fu(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                }

                function d(e, t, n, r, a) {
                    return null === t || 7 !== t.tag ? ((t = _u(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function p(e, t, n) {
                    if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = $u("" + t, e.mode, n)).return = e, t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case x:
                                return (n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = Ka(e, null, t), n.return = e, n;
                            case S:
                                return (t = Fu(t, e.mode, n)).return = e, t;
                            case z:
                                return p(e, (0, t._init)(t._payload), n)
                        }
                        if (te(t) || L(t)) return (t = _u(t, e.mode, n, null)).return = e, t;
                        qa(e, t)
                    }
                    return null
                }

                function f(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case x:
                                return n.key === o ? u(e, t, n, r) : null;
                            case S:
                                return n.key === o ? c(e, t, n, r) : null;
                            case z:
                                return f(e, t, (o = n._init)(n._payload), r)
                        }
                        if (te(n) || L(n)) return null !== o ? null : d(e, t, n, r, null);
                        qa(e, n)
                    }
                    return null
                }

                function m(e, t, n, r, o) {
                    if ("string" == typeof r && "" !== r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, o);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case x:
                                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                            case S:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                            case z:
                                return m(e, t, n, (0, r._init)(r._payload), o)
                        }
                        if (te(r) || L(r)) return d(t, e = e.get(n) || null, r, o, null);
                        qa(t, r)
                    }
                    return null
                }

                function h(o, a, l, s) {
                    for (var u = null, c = null, d = a, h = a = 0, v = null; null !== d && h < l.length; h++) {
                        d.index > h ? (v = d, d = null) : v = d.sibling;
                        var g = f(o, d, l[h], s);
                        if (null === g) {
                            null === d && (d = v);
                            break
                        }
                        e && d && null === g.alternate && t(o, d), a = i(g, a, h), null === c ? u = g : c.sibling = g, c = g, d = v
                    }
                    if (h === l.length) return n(o, d), aa && Jo(o, h), u;
                    if (null === d) {
                        for (; h < l.length; h++) null !== (d = p(o, l[h], s)) && (a = i(d, a, h), null === c ? u = d : c.sibling = d, c = d);
                        return aa && Jo(o, h), u
                    }
                    for (d = r(o, d); h < l.length; h++) null !== (v = m(d, o, h, l[h], s)) && (e && null !== v.alternate && d.delete(null === v.key ? h : v.key), a = i(v, a, h), null === c ? u = v : c.sibling = v, c = v);
                    return e && d.forEach((function (e) {
                        return t(o, e)
                    })), aa && Jo(o, h), u
                }

                function v(o, l, s, u) {
                    var c = L(s);
                    if ("function" != typeof c) throw Error(a(150));
                    if (null == (s = c.call(s))) throw Error(a(151));
                    for (var d = c = null, h = l, v = l = 0, g = null, b = s.next(); null !== h && !b.done; v++, b = s.next()) {
                        h.index > v ? (g = h, h = null) : g = h.sibling;
                        var y = f(o, h, b.value, u);
                        if (null === y) {
                            null === h && (h = g);
                            break
                        }
                        e && h && null === y.alternate && t(o, h), l = i(y, l, v), null === d ? c = y : d.sibling = y, d = y, h = g
                    }
                    if (b.done) return n(o, h), aa && Jo(o, v), c;
                    if (null === h) {
                        for (; !b.done; v++, b = s.next()) null !== (b = p(o, b.value, u)) && (l = i(b, l, v), null === d ? c = b : d.sibling = b, d = b);
                        return aa && Jo(o, v), c
                    }
                    for (h = r(o, h); !b.done; v++, b = s.next()) null !== (b = m(h, o, v, b.value, u)) && (e && null !== b.alternate && h.delete(null === b.key ? v : b.key), l = i(b, l, v), null === d ? c = b : d.sibling = b, d = b);
                    return e && h.forEach((function (e) {
                        return t(o, e)
                    })), aa && Jo(o, v), c
                }

                return function e(r, a, i, s) {
                    if ("object" == typeof i && null !== i && i.type === k && null === i.key && (i = i.props.children), "object" == typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case x:
                                e:{
                                    for (var u = i.key, c = a; null !== c;) {
                                        if (c.key === u) {
                                            if ((u = i.type) === k) {
                                                if (7 === c.tag) {
                                                    n(r, c.sibling), (a = o(c, i.props.children)).return = r, r = a;
                                                    break e
                                                }
                                            } else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === z && Ya(u) === c.type) {
                                                n(r, c.sibling), (a = o(c, i.props)).ref = Ka(r, c, i), a.return = r, r = a;
                                                break e
                                            }
                                            n(r, c);
                                            break
                                        }
                                        t(r, c), c = c.sibling
                                    }
                                    i.type === k ? ((a = _u(i.props.children, r.mode, s, i.key)).return = r, r = a) : ((s = Lu(i.type, i.key, i.props, null, r.mode, s)).ref = Ka(r, a, i), s.return = r, r = s)
                                }
                                return l(r);
                            case S:
                                e:{
                                    for (c = i.key; null !== a;) {
                                        if (a.key === c) {
                                            if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                                                n(r, a.sibling), (a = o(a, i.children || [])).return = r, r = a;
                                                break e
                                            }
                                            n(r, a);
                                            break
                                        }
                                        t(r, a), a = a.sibling
                                    }
                                    (a = Fu(i, r.mode, s)).return = r, r = a
                                }
                                return l(r);
                            case z:
                                return e(r, a, (c = i._init)(i._payload), s)
                        }
                        if (te(i)) return h(r, a, i, s);
                        if (L(i)) return v(r, a, i, s);
                        qa(r, i)
                    }
                    return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = o(a, i)).return = r, r = a) : (n(r, a), (a = $u(i, r.mode, s)).return = r, r = a), l(r)) : n(r, a)
                }
            }

            var Qa = Xa(!0), Ga = Xa(!1), Ja = {}, ei = Eo(Ja), ti = Eo(Ja), ni = Eo(Ja);

            function ri(e) {
                if (e === Ja) throw Error(a(174));
                return e
            }

            function oi(e, t) {
                switch (Po(ni, t), Po(ti, e), Po(ei, Ja), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                        break;
                    default:
                        t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                Zo(ei), Po(ei, t)
            }

            function ai() {
                Zo(ei), Zo(ti), Zo(ni)
            }

            function ii(e) {
                ri(ni.current);
                var t = ri(ei.current), n = se(t, e.type);
                t !== n && (Po(ti, e), Po(ei, n))
            }

            function li(e) {
                ti.current === e && (Zo(ei), Zo(ti))
            }

            var si = Eo(0);

            function ui(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            var ci = [];

            function di() {
                for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
                ci.length = 0
            }

            var pi = w.ReactCurrentDispatcher, fi = w.ReactCurrentBatchConfig, mi = 0, hi = null, vi = null, gi = null,
                bi = !1, yi = !1, wi = 0, xi = 0;

            function Si() {
                throw Error(a(321))
            }

            function ki(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
                return !0
            }

            function Ci(e, t, n, r, o, i) {
                if (mi = i, hi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pi.current = null === e || null === e.memoizedState ? ll : sl, e = n(r, o), yi) {
                    i = 0;
                    do {
                        if (yi = !1, wi = 0, 25 <= i) throw Error(a(301));
                        i += 1, gi = vi = null, t.updateQueue = null, pi.current = ul, e = n(r, o)
                    } while (yi)
                }
                if (pi.current = il, t = null !== vi && null !== vi.next, mi = 0, gi = vi = hi = null, bi = !1, t) throw Error(a(300));
                return e
            }

            function Ei() {
                var e = 0 !== wi;
                return wi = 0, e
            }

            function Zi() {
                var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === gi ? hi.memoizedState = gi = e : gi = gi.next = e, gi
            }

            function Pi() {
                if (null === vi) {
                    var e = hi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = vi.next;
                var t = null === gi ? hi.memoizedState : gi.next;
                if (null !== t) gi = t, vi = e; else {
                    if (null === e) throw Error(a(310));
                    e = {
                        memoizedState: (vi = e).memoizedState,
                        baseState: vi.baseState,
                        baseQueue: vi.baseQueue,
                        queue: vi.queue,
                        next: null
                    }, null === gi ? hi.memoizedState = gi = e : gi = gi.next = e
                }
                return gi
            }

            function Ri(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function Ti(e) {
                var t = Pi(), n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = vi, o = r.baseQueue, i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var l = o.next;
                        o.next = i.next, i.next = l
                    }
                    r.baseQueue = o = i, n.pending = null
                }
                if (null !== o) {
                    i = o.next, r = r.baseState;
                    var s = l = null, u = null, c = i;
                    do {
                        var d = c.lane;
                        if ((mi & d) === d) null !== u && (u = u.next = {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                            var p = {
                                lane: d,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = p, l = r) : u = u.next = p, hi.lanes |= d, As |= d
                        }
                        c = c.next
                    } while (null !== c && c !== i);
                    null === u ? l = r : u.next = s, lr(r, t.memoizedState) || (wl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    o = e;
                    do {
                        i = o.lane, hi.lanes |= i, As |= i, o = o.next
                    } while (o !== e)
                } else null === o && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }

            function Oi(e) {
                var t = Pi(), n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch, o = n.pending, i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var l = o = o.next;
                    do {
                        i = e(i, l.action), l = l.next
                    } while (l !== o);
                    lr(i, t.memoizedState) || (wl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                }
                return [i, r]
            }

            function Mi() {
            }

            function zi(e, t) {
                var n = hi, r = Pi(), o = t(), i = !lr(r.memoizedState, o);
                if (i && (r.memoizedState = o, wl = !0), r = r.queue, Hi(Li.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
                    if (n.flags |= 2048, Fi(9, Ii.bind(null, n, r, o, t), void 0, null), null === Os) throw Error(a(349));
                    0 != (30 & mi) || Ni(n, t, o)
                }
                return o
            }

            function Ni(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = hi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, hi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function Ii(e, t, n, r) {
                t.value = n, t.getSnapshot = r, _i(t) && Ai(e)
            }

            function Li(e, t, n) {
                return n((function () {
                    _i(t) && Ai(e)
                }))
            }

            function _i(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !lr(e, n)
                } catch (e) {
                    return !0
                }
            }

            function Ai(e) {
                var t = Oa(e, 1);
                null !== t && ru(t, e, 1, -1)
            }

            function $i(e) {
                var t = Zi();
                return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ri,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = nl.bind(null, hi, e), [t.memoizedState, e]
            }

            function Fi(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = hi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, hi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Di() {
                return Pi().memoizedState
            }

            function ji(e, t, n, r) {
                var o = Zi();
                hi.flags |= e, o.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function Wi(e, t, n, r) {
                var o = Pi();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== vi) {
                    var i = vi.memoizedState;
                    if (a = i.destroy, null !== r && ki(r, i.deps)) return void (o.memoizedState = Fi(t, n, a, r))
                }
                hi.flags |= e, o.memoizedState = Fi(1 | t, n, a, r)
            }

            function Bi(e, t) {
                return ji(8390656, 8, e, t)
            }

            function Hi(e, t) {
                return Wi(2048, 8, e, t)
            }

            function Vi(e, t) {
                return Wi(4, 2, e, t)
            }

            function Ui(e, t) {
                return Wi(4, 4, e, t)
            }

            function Ki(e, t) {
                return "function" == typeof t ? (e = e(), t(e), function () {
                    t(null)
                }) : null != t ? (e = e(), t.current = e, function () {
                    t.current = null
                }) : void 0
            }

            function qi(e, t, n) {
                return n = null != n ? n.concat([e]) : null, Wi(4, 4, Ki.bind(null, t, e), n)
            }

            function Yi() {
            }

            function Xi(e, t) {
                var n = Pi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Qi(e, t) {
                var n = Pi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ki(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Gi(e, t, n) {
                return 0 == (21 & mi) ? (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = n) : (lr(n, t) || (n = ht(), hi.lanes |= n, As |= n, e.baseState = !0), t)
            }

            function Ji(e, t) {
                var n = yt;
                yt = 0 !== n && 4 > n ? n : 4, e(!0);
                var r = fi.transition;
                fi.transition = {};
                try {
                    e(!1), t()
                } finally {
                    yt = n, fi.transition = r
                }
            }

            function el() {
                return Pi().memoizedState
            }

            function tl(e, t, n) {
                var r = nu(e);
                n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, rl(e) ? ol(t, n) : null !== (n = Ta(e, t, n, r)) && (ru(n, e, r, tu()), al(n, t, r))
            }

            function nl(e, t, n) {
                var r = nu(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
                if (rl(e)) ol(t, o); else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                        var i = t.lastRenderedState, l = a(i, n);
                        if (o.hasEagerState = !0, o.eagerState = l, lr(l, i)) {
                            var s = t.interleaved;
                            return null === s ? (o.next = o, Ra(t)) : (o.next = s.next, s.next = o), void (t.interleaved = o)
                        }
                    } catch (e) {
                    }
                    null !== (n = Ta(e, t, o, r)) && (ru(n, e, r, o = tu()), al(n, t, r))
                }
            }

            function rl(e) {
                var t = e.alternate;
                return e === hi || null !== t && t === hi
            }

            function ol(e, t) {
                yi = bi = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function al(e, t, n) {
                if (0 != (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
                }
            }

            var il = {
                readContext: Za,
                useCallback: Si,
                useContext: Si,
                useEffect: Si,
                useImperativeHandle: Si,
                useInsertionEffect: Si,
                useLayoutEffect: Si,
                useMemo: Si,
                useReducer: Si,
                useRef: Si,
                useState: Si,
                useDebugValue: Si,
                useDeferredValue: Si,
                useTransition: Si,
                useMutableSource: Si,
                useSyncExternalStore: Si,
                useId: Si,
                unstable_isNewReconciler: !1
            }, ll = {
                readContext: Za, useCallback: function (e, t) {
                    return Zi().memoizedState = [e, void 0 === t ? null : t], e
                }, useContext: Za, useEffect: Bi, useImperativeHandle: function (e, t, n) {
                    return n = null != n ? n.concat([e]) : null, ji(4194308, 4, Ki.bind(null, t, e), n)
                }, useLayoutEffect: function (e, t) {
                    return ji(4194308, 4, e, t)
                }, useInsertionEffect: function (e, t) {
                    return ji(4, 2, e, t)
                }, useMemo: function (e, t) {
                    var n = Zi();
                    return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                }, useReducer: function (e, t, n) {
                    var r = Zi();
                    return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, r.queue = e, e = e.dispatch = tl.bind(null, hi, e), [r.memoizedState, e]
                }, useRef: function (e) {
                    return e = {current: e}, Zi().memoizedState = e
                }, useState: $i, useDebugValue: Yi, useDeferredValue: function (e) {
                    return Zi().memoizedState = e
                }, useTransition: function () {
                    var e = $i(!1), t = e[0];
                    return e = Ji.bind(null, e[1]), Zi().memoizedState = e, [t, e]
                }, useMutableSource: function () {
                }, useSyncExternalStore: function (e, t, n) {
                    var r = hi, o = Zi();
                    if (aa) {
                        if (void 0 === n) throw Error(a(407));
                        n = n()
                    } else {
                        if (n = t(), null === Os) throw Error(a(349));
                        0 != (30 & mi) || Ni(r, t, n)
                    }
                    o.memoizedState = n;
                    var i = {value: n, getSnapshot: t};
                    return o.queue = i, Bi(Li.bind(null, r, i, e), [e]), r.flags |= 2048, Fi(9, Ii.bind(null, r, i, n, t), void 0, null), n
                }, useId: function () {
                    var e = Zi(), t = Os.identifierPrefix;
                    if (aa) {
                        var n = Go;
                        t = ":" + t + "R" + (n = (Qo & ~(1 << 32 - it(Qo) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":"
                    } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
                    return e.memoizedState = t
                }, unstable_isNewReconciler: !1
            }, sl = {
                readContext: Za,
                useCallback: Xi,
                useContext: Za,
                useEffect: Hi,
                useImperativeHandle: qi,
                useInsertionEffect: Vi,
                useLayoutEffect: Ui,
                useMemo: Qi,
                useReducer: Ti,
                useRef: Di,
                useState: function () {
                    return Ti(Ri)
                },
                useDebugValue: Yi,
                useDeferredValue: function (e) {
                    return Gi(Pi(), vi.memoizedState, e)
                },
                useTransition: function () {
                    return [Ti(Ri)[0], Pi().memoizedState]
                },
                useMutableSource: Mi,
                useSyncExternalStore: zi,
                useId: el,
                unstable_isNewReconciler: !1
            }, ul = {
                readContext: Za,
                useCallback: Xi,
                useContext: Za,
                useEffect: Hi,
                useImperativeHandle: qi,
                useInsertionEffect: Vi,
                useLayoutEffect: Ui,
                useMemo: Qi,
                useReducer: Oi,
                useRef: Di,
                useState: function () {
                    return Oi(Ri)
                },
                useDebugValue: Yi,
                useDeferredValue: function (e) {
                    var t = Pi();
                    return null === vi ? t.memoizedState = e : Gi(t, vi.memoizedState, e)
                },
                useTransition: function () {
                    return [Oi(Ri)[0], Pi().memoizedState]
                },
                useMutableSource: Mi,
                useSyncExternalStore: zi,
                useId: el,
                unstable_isNewReconciler: !1
            };

            function cl(e, t) {
                try {
                    var n = "", r = t;
                    do {
                        n += j(r), r = r.return
                    } while (r);
                    var o = n
                } catch (e) {
                    o = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {value: e, source: t, stack: o, digest: null}
            }

            function dl(e, t, n) {
                return {value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null}
            }

            function pl(e, t) {
                try {
                    console.error(t.value)
                } catch (e) {
                    setTimeout((function () {
                        throw e
                    }))
                }
            }

            var fl = "function" == typeof WeakMap ? WeakMap : Map;

            function ml(e, t, n) {
                (n = Ia(-1, n)).tag = 3, n.payload = {element: null};
                var r = t.value;
                return n.callback = function () {
                    Vs || (Vs = !0, Us = r), pl(0, t)
                }, n
            }

            function hl(e, t, n) {
                (n = Ia(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var o = t.value;
                    n.payload = function () {
                        return r(o)
                    }, n.callback = function () {
                        pl(0, t)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
                    pl(0, t), "function" != typeof r && (null === Ks ? Ks = new Set([this]) : Ks.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
                }), n
            }

            function vl(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new fl;
                    var o = new Set;
                    r.set(t, o)
                } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
                o.has(n) || (o.add(n), e = Zu.bind(null, e, t, n), t.then(e, e))
            }

            function gl(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function bl(e, t, n, r, o) {
                return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ia(-1, 1)).tag = 2, La(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
            }

            var yl = w.ReactCurrentOwner, wl = !1;

            function xl(e, t, n, r) {
                t.child = null === e ? Ga(t, null, n, r) : Qa(t, e.child, n, r)
            }

            function Sl(e, t, n, r, o) {
                n = n.render;
                var a = t.ref;
                return Ea(t, o), r = Ci(e, t, n, r, a, o), n = Ei(), null === e || wl ? (aa && n && ta(t), t.flags |= 1, xl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Vl(e, t, o))
            }

            function kl(e, t, n, r, o) {
                if (null === e) {
                    var a = n.type;
                    return "function" != typeof a || Nu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Lu(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Cl(e, t, a, r, o))
                }
                if (a = e.child, 0 == (e.lanes & o)) {
                    var i = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref) return Vl(e, t, o)
                }
                return t.flags |= 1, (e = Iu(a, r)).ref = t.ref, e.return = t, t.child = e
            }

            function Cl(e, t, n, r, o) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (sr(a, r) && e.ref === t.ref) {
                        if (wl = !1, t.pendingProps = r = a, 0 == (e.lanes & o)) return t.lanes = e.lanes, Vl(e, t, o);
                        0 != (131072 & e.flags) && (wl = !0)
                    }
                }
                return Pl(e, t, n, r, o)
            }

            function El(e, t, n) {
                var r = t.pendingProps, o = r.children, a = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode) if (0 == (1 & t.mode)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, Po(Is, Ns), Ns |= n; else {
                    if (0 == (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, Po(Is, Ns), Ns |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, r = null !== a ? a.baseLanes : n, Po(Is, Ns), Ns |= r
                } else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Po(Is, Ns), Ns |= r;
                return xl(e, t, o, n), t.child
            }

            function Zl(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
            }

            function Pl(e, t, n, r, o) {
                var a = No(n) ? Mo : To.current;
                return a = zo(t, a), Ea(t, o), n = Ci(e, t, n, r, a, o), r = Ei(), null === e || wl ? (aa && r && ta(t), t.flags |= 1, xl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Vl(e, t, o))
            }

            function Rl(e, t, n, r, o) {
                if (No(n)) {
                    var a = !0;
                    Ao(t)
                } else a = !1;
                if (Ea(t, o), null === t.stateNode) Hl(e, t), Ha(t, n, r), Ua(t, n, r, o), r = !0; else if (null === e) {
                    var i = t.stateNode, l = t.memoizedProps;
                    i.props = l;
                    var s = i.context, u = n.contextType;
                    u = "object" == typeof u && null !== u ? Za(u) : zo(t, u = No(n) ? Mo : To.current);
                    var c = n.getDerivedStateFromProps,
                        d = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
                    d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== u) && Va(t, i, r, u), Ma = !1;
                    var p = t.memoizedState;
                    i.state = p, $a(t, r, i, o), s = t.memoizedState, l !== r || p !== s || Oo.current || Ma ? ("function" == typeof c && (ja(t, n, c, r), s = t.memoizedState), (l = Ma || Ba(t, n, l, r, p, s, u)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = u, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    i = t.stateNode, Na(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ga(t.type, l), i.props = u, d = t.pendingProps, p = i.context, s = "object" == typeof (s = n.contextType) && null !== s ? Za(s) : zo(t, s = No(n) ? Mo : To.current);
                    var f = n.getDerivedStateFromProps;
                    (c = "function" == typeof f || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== d || p !== s) && Va(t, i, r, s), Ma = !1, p = t.memoizedState, i.state = p, $a(t, r, i, o);
                    var m = t.memoizedState;
                    l !== d || p !== m || Oo.current || Ma ? ("function" == typeof f && (ja(t, n, f, r), m = t.memoizedState), (u = Ma || Ba(t, n, u, r, p, m, s) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, m, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, m, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), i.props = r, i.state = m, i.context = s, r = u) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return Tl(e, t, n, r, a, o)
            }

            function Tl(e, t, n, r, o, a) {
                Zl(e, t);
                var i = 0 != (128 & t.flags);
                if (!r && !i) return o && $o(t, n, !1), Vl(e, t, a);
                r = t.stateNode, yl.current = t;
                var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && i ? (t.child = Qa(t, e.child, null, a), t.child = Qa(t, null, l, a)) : xl(e, t, l, a), t.memoizedState = r.state, o && $o(t, n, !0), t.child
            }

            function Ol(e) {
                var t = e.stateNode;
                t.pendingContext ? Lo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Lo(0, t.context, !1), oi(e, t.containerInfo)
            }

            function Ml(e, t, n, r, o) {
                return ma(), ha(o), t.flags |= 256, xl(e, t, n, r), t.child
            }

            var zl, Nl, Il, Ll, _l = {dehydrated: null, treeContext: null, retryLane: 0};

            function Al(e) {
                return {baseLanes: e, cachePool: null, transitions: null}
            }

            function $l(e, t, n) {
                var r, o = t.pendingProps, i = si.current, l = !1, s = 0 != (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Po(si, 1 & i), null === e) return ca(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = o.children, e = o.fallback, l ? (o = t.mode, l = t.child, s = {
                    mode: "hidden",
                    children: s
                }, 0 == (1 & o) && null !== l ? (l.childLanes = 0, l.pendingProps = s) : l = Au(s, o, 0, null), e = _u(e, o, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Al(n), t.memoizedState = _l, e) : Fl(t, s));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function (e, t, n, r, o, i, l) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, Dl(e, t, l, r = dl(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Au({
                        mode: "visible",
                        children: r.children
                    }, o, 0, null), (i = _u(i, o, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 != (1 & t.mode) && Qa(t, e.child, null, l), t.child.memoizedState = Al(l), t.memoizedState = _l, i);
                    if (0 == (1 & t.mode)) return Dl(e, t, l, null);
                    if ("$!" === o.data) {
                        if (r = o.nextSibling && o.nextSibling.dataset) var s = r.dgst;
                        return r = s, Dl(e, t, l, r = dl(i = Error(a(419)), r, void 0))
                    }
                    if (s = 0 != (l & e.childLanes), wl || s) {
                        if (null !== (r = Os)) {
                            switch (l & -l) {
                                case 4:
                                    o = 2;
                                    break;
                                case 16:
                                    o = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    o = 32;
                                    break;
                                case 536870912:
                                    o = 268435456;
                                    break;
                                default:
                                    o = 0
                            }
                            0 !== (o = 0 != (o & (r.suspendedLanes | l)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, Oa(e, o), ru(r, e, o, -1))
                        }
                        return vu(), Dl(e, t, l, r = dl(Error(a(421))))
                    }
                    return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Ru.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, oa = uo(o.nextSibling), ra = t, aa = !0, ia = null, null !== e && (qo[Yo++] = Qo, qo[Yo++] = Go, qo[Yo++] = Xo, Qo = e.id, Go = e.overflow, Xo = t), (t = Fl(t, r.children)).flags |= 4096, t)
                }(e, t, s, o, r, i, n);
                if (l) {
                    l = o.fallback, s = t.mode, r = (i = e.child).sibling;
                    var u = {mode: "hidden", children: o.children};
                    return 0 == (1 & s) && t.child !== i ? ((o = t.child).childLanes = 0, o.pendingProps = u, t.deletions = null) : (o = Iu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? l = Iu(r, l) : (l = _u(l, s, n, null)).flags |= 2, l.return = t, o.return = t, o.sibling = l, t.child = o, o = l, l = t.child, s = null === (s = e.child.memoizedState) ? Al(n) : {
                        baseLanes: s.baseLanes | n,
                        cachePool: null,
                        transitions: s.transitions
                    }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = _l, o
                }
                return e = (l = e.child).sibling, o = Iu(l, {
                    mode: "visible",
                    children: o.children
                }), 0 == (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
            }

            function Fl(e, t) {
                return (t = Au({mode: "visible", children: t}, e.mode, 0, null)).return = e, e.child = t
            }

            function Dl(e, t, n, r) {
                return null !== r && ha(r), Qa(t, e.child, null, n), (e = Fl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function jl(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), Ca(e.return, t, n)
            }

            function Wl(e, t, n, r, o) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o
                } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
            }

            function Bl(e, t, n) {
                var r = t.pendingProps, o = r.revealOrder, a = r.tail;
                if (xl(e, t, r.children, n), 0 != (2 & (r = si.current))) r = 1 & r | 2, t.flags |= 128; else {
                    if (null !== e && 0 != (128 & e.flags)) e:for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && jl(e, n, t); else if (19 === e.tag) jl(e, n, t); else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (Po(si, r), 0 == (1 & t.mode)) t.memoizedState = null; else switch (o) {
                    case"forwards":
                        for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === ui(e) && (o = n), n = n.sibling;
                        null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Wl(t, !1, o, n, a);
                        break;
                    case"backwards":
                        for (n = null, o = t.child, t.child = null; null !== o;) {
                            if (null !== (e = o.alternate) && null === ui(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling, o.sibling = n, n = o, o = e
                        }
                        Wl(t, !0, n, null, a);
                        break;
                    case"together":
                        Wl(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function Hl(e, t) {
                0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function Vl(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), As |= t.lanes, 0 == (n & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(a(153));
                if (null !== t.child) {
                    for (n = Iu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Iu(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function Ul(e, t) {
                if (!aa) switch (e.tailMode) {
                    case"hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function Kl(e) {
                var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0;
                if (t) for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling; else for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function ql(e, t, n) {
                var r = t.pendingProps;
                switch (na(t), t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return Kl(t), null;
                    case 1:
                    case 17:
                        return No(t.type) && Io(), Kl(t), null;
                    case 3:
                        return r = t.stateNode, ai(), Zo(Oo), Zo(To), di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (pa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ia && (lu(ia), ia = null))), Nl(e, t), Kl(t), null;
                    case 5:
                        li(t);
                        var o = ri(ni.current);
                        if (n = t.type, null !== e && null != t.stateNode) Il(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(a(166));
                                return Kl(t), null
                            }
                            if (e = ri(ei.current), pa(t)) {
                                r = t.stateNode, n = t.type;
                                var i = t.memoizedProps;
                                switch (r[fo] = t, r[mo] = i, e = 0 != (1 & t.mode), n) {
                                    case"dialog":
                                        Fr("cancel", r), Fr("close", r);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Fr("load", r);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (o = 0; o < Lr.length; o++) Fr(Lr[o], r);
                                        break;
                                    case"source":
                                        Fr("error", r);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Fr("error", r), Fr("load", r);
                                        break;
                                    case"details":
                                        Fr("toggle", r);
                                        break;
                                    case"input":
                                        X(r, i), Fr("invalid", r);
                                        break;
                                    case"select":
                                        r._wrapperState = {wasMultiple: !!i.multiple}, Fr("invalid", r);
                                        break;
                                    case"textarea":
                                        oe(r, i), Fr("invalid", r)
                                }
                                for (var s in be(n, i), o = null, i) if (i.hasOwnProperty(s)) {
                                    var u = i[s];
                                    "children" === s ? "string" == typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Gr(r.textContent, u, e), o = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Gr(r.textContent, u, e), o = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && Fr("scroll", r)
                                }
                                switch (n) {
                                    case"input":
                                        U(r), J(r, i, !0);
                                        break;
                                    case"textarea":
                                        U(r), ie(r);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" == typeof i.onClick && (r.onclick = Jr)
                                }
                                r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                s = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[fo] = t, e[mo] = r, zl(e, t, !1, !1), t.stateNode = e;
                                e:{
                                    switch (s = ye(n, r), n) {
                                        case"dialog":
                                            Fr("cancel", e), Fr("close", e), o = r;
                                            break;
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            Fr("load", e), o = r;
                                            break;
                                        case"video":
                                        case"audio":
                                            for (o = 0; o < Lr.length; o++) Fr(Lr[o], e);
                                            o = r;
                                            break;
                                        case"source":
                                            Fr("error", e), o = r;
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            Fr("error", e), Fr("load", e), o = r;
                                            break;
                                        case"details":
                                            Fr("toggle", e), o = r;
                                            break;
                                        case"input":
                                            X(e, r), o = Y(e, r), Fr("invalid", e);
                                            break;
                                        case"option":
                                        default:
                                            o = r;
                                            break;
                                        case"select":
                                            e._wrapperState = {wasMultiple: !!r.multiple}, o = A({}, r, {value: void 0}), Fr("invalid", e);
                                            break;
                                        case"textarea":
                                            oe(e, r), o = re(e, r), Fr("invalid", e)
                                    }
                                    for (i in be(n, o), u = o) if (u.hasOwnProperty(i)) {
                                        var c = u[i];
                                        "style" === i ? ve(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" == typeof c ? ("textarea" !== n || "" !== c) && pe(e, c) : "number" == typeof c && pe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && Fr("scroll", e) : null != c && y(e, i, c, s))
                                    }
                                    switch (n) {
                                        case"input":
                                            U(e), J(e, r, !1);
                                            break;
                                        case"textarea":
                                            U(e), ie(e);
                                            break;
                                        case"option":
                                            null != r.value && e.setAttribute("value", "" + H(r.value));
                                            break;
                                        case"select":
                                            e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof o.onClick && (e.onclick = Jr)
                                    }
                                    switch (n) {
                                        case"button":
                                        case"input":
                                        case"select":
                                        case"textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case"img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                }
                                r && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return Kl(t), null;
                    case 6:
                        if (e && null != t.stateNode) Ll(e, t, e.memoizedProps, r); else {
                            if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
                            if (n = ri(ni.current), ri(ei.current), pa(t)) {
                                if (r = t.stateNode, n = t.memoizedProps, r[fo] = t, (i = r.nodeValue !== n) && null !== (e = ra)) switch (e.tag) {
                                    case 3:
                                        Gr(r.nodeValue, n, 0 != (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, 0 != (1 & e.mode))
                                }
                                i && (t.flags |= 4)
                            } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fo] = t, t.stateNode = r
                        }
                        return Kl(t), null;
                    case 13:
                        if (Zo(si), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (aa && null !== oa && 0 != (1 & t.mode) && 0 == (128 & t.flags)) fa(), ma(), t.flags |= 98560, i = !1; else if (i = pa(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!i) throw Error(a(318));
                                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
                                    i[fo] = t
                                } else ma(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                Kl(t), i = !1
                            } else null !== ia && (lu(ia), ia = null), i = !0;
                            if (!i) return 65536 & t.flags ? t : null
                        }
                        return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & si.current) ? 0 === Ls && (Ls = 3) : vu())), null !== t.updateQueue && (t.flags |= 4), Kl(t), null);
                    case 4:
                        return ai(), Nl(e, t), null === e && Wr(t.stateNode.containerInfo), Kl(t), null;
                    case 10:
                        return ka(t.type._context), Kl(t), null;
                    case 19:
                        if (Zo(si), null === (i = t.memoizedState)) return Kl(t), null;
                        if (r = 0 != (128 & t.flags), null === (s = i.rendering)) if (r) Ul(i, !1); else {
                            if (0 !== Ls || null !== e && 0 != (128 & e.flags)) for (e = t.child; null !== e;) {
                                if (null !== (s = ui(e))) {
                                    for (t.flags |= 128, Ul(i, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return Po(si, 1 & si.current | 2), t.child
                                }
                                e = e.sibling
                            }
                            null !== i.tail && Qe() > Bs && (t.flags |= 128, r = !0, Ul(i, !1), t.lanes = 4194304)
                        } else {
                            if (!r) if (null !== (e = ui(s))) {
                                if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ul(i, !0), null === i.tail && "hidden" === i.tailMode && !s.alternate && !aa) return Kl(t), null
                            } else 2 * Qe() - i.renderingStartTime > Bs && 1073741824 !== n && (t.flags |= 128, r = !0, Ul(i, !1), t.lanes = 4194304);
                            i.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s, i.last = s)
                        }
                        return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Qe(), t.sibling = null, n = si.current, Po(si, r ? 1 & n | 2 : 1 & n), t) : (Kl(t), null);
                    case 22:
                    case 23:
                        return pu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Ns) && (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Kl(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(a(156, t.tag))
            }

            function Yl(e, t) {
                switch (na(t), t.tag) {
                    case 1:
                        return No(t.type) && Io(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return ai(), Zo(Oo), Zo(To), di(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return li(t), null;
                    case 13:
                        if (Zo(si), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(a(340));
                            ma()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return Zo(si), null;
                    case 4:
                        return ai(), null;
                    case 10:
                        return ka(t.type._context), null;
                    case 22:
                    case 23:
                        return pu(), null;
                    default:
                        return null
                }
            }

            zl = function (e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Nl = function () {
            }, Il = function (e, t, n, r) {
                var o = e.memoizedProps;
                if (o !== r) {
                    e = t.stateNode, ri(ei.current);
                    var a, i = null;
                    switch (n) {
                        case"input":
                            o = Y(e, o), r = Y(e, r), i = [];
                            break;
                        case"select":
                            o = A({}, o, {value: void 0}), r = A({}, r, {value: void 0}), i = [];
                            break;
                        case"textarea":
                            o = re(e, o), r = re(e, r), i = [];
                            break;
                        default:
                            "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Jr)
                    }
                    for (c in be(n, r), n = null, o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c]) if ("style" === c) {
                        var s = o[c];
                        for (a in s) s.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                    } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != o ? o[c] : void 0, r.hasOwnProperty(c) && u !== s && (null != u || null != s)) if ("style" === c) if (s) {
                            for (a in s) !s.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                            for (a in u) u.hasOwnProperty(a) && s[a] !== u[a] && (n || (n = {}), n[a] = u[a])
                        } else n || (i || (i = []), i.push(c, n)), n = u; else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (i = i || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && Fr("scroll", e), i || s === u || (i = [])) : (i = i || []).push(c, u))
                    }
                    n && (i = i || []).push("style", n);
                    var c = i;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }, Ll = function (e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var Xl = !1, Ql = !1, Gl = "function" == typeof WeakSet ? WeakSet : Set, Jl = null;

            function es(e, t) {
                var n = e.ref;
                if (null !== n) if ("function" == typeof n) try {
                    n(null)
                } catch (n) {
                    Eu(e, t, n)
                } else n.current = null
            }

            function ts(e, t, n) {
                try {
                    n()
                } catch (n) {
                    Eu(e, t, n)
                }
            }

            var ns = !1;

            function rs(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var o = r = r.next;
                    do {
                        if ((o.tag & e) === e) {
                            var a = o.destroy;
                            o.destroy = void 0, void 0 !== a && ts(t, n, a)
                        }
                        o = o.next
                    } while (o !== r)
                }
            }

            function os(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }

            function as(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
                }
            }

            function is(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, is(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[fo], delete t[mo], delete t[vo], delete t[go], delete t[bo]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function ls(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ss(e) {
                e:for (; ;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || ls(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function us(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Jr)); else if (4 !== r && null !== (e = e.child)) for (us(e, t, n), e = e.sibling; null !== e;) us(e, t, n), e = e.sibling
            }

            function cs(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (cs(e, t, n), e = e.sibling; null !== e;) cs(e, t, n), e = e.sibling
            }

            var ds = null, ps = !1;

            function fs(e, t, n) {
                for (n = n.child; null !== n;) ms(e, t, n), n = n.sibling
            }

            function ms(e, t, n) {
                if (at && "function" == typeof at.onCommitFiberUnmount) try {
                    at.onCommitFiberUnmount(ot, n)
                } catch (e) {
                }
                switch (n.tag) {
                    case 5:
                        Ql || es(n, t);
                    case 6:
                        var r = ds, o = ps;
                        ds = null, fs(e, t, n), ps = o, null !== (ds = r) && (ps ? (e = ds, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : ds.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== ds && (ps ? (e = ds, n = n.stateNode, 8 === e.nodeType ? so(e.parentNode, n) : 1 === e.nodeType && so(e, n), Wt(e)) : so(ds, n.stateNode));
                        break;
                    case 4:
                        r = ds, o = ps, ds = n.stateNode.containerInfo, ps = !0, fs(e, t, n), ds = r, ps = o;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Ql && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                            o = r = r.next;
                            do {
                                var a = o, i = a.destroy;
                                a = a.tag, void 0 !== i && (0 != (2 & a) || 0 != (4 & a)) && ts(n, t, i), o = o.next
                            } while (o !== r)
                        }
                        fs(e, t, n);
                        break;
                    case 1:
                        if (!Ql && (es(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
                            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                        } catch (e) {
                            Eu(n, t, e)
                        }
                        fs(e, t, n);
                        break;
                    case 21:
                        fs(e, t, n);
                        break;
                    case 22:
                        1 & n.mode ? (Ql = (r = Ql) || null !== n.memoizedState, fs(e, t, n), Ql = r) : fs(e, t, n);
                        break;
                    default:
                        fs(e, t, n)
                }
            }

            function hs(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Gl), t.forEach((function (t) {
                        var r = Tu.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function vs(e, t) {
                var n = t.deletions;
                if (null !== n) for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    try {
                        var i = e, l = t, s = l;
                        e:for (; null !== s;) {
                            switch (s.tag) {
                                case 5:
                                    ds = s.stateNode, ps = !1;
                                    break e;
                                case 3:
                                case 4:
                                    ds = s.stateNode.containerInfo, ps = !0;
                                    break e
                            }
                            s = s.return
                        }
                        if (null === ds) throw Error(a(160));
                        ms(i, l, o), ds = null, ps = !1;
                        var u = o.alternate;
                        null !== u && (u.return = null), o.return = null
                    } catch (e) {
                        Eu(o, t, e)
                    }
                }
                if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) gs(t, e), t = t.sibling
            }

            function gs(e, t) {
                var n = e.alternate, r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (vs(t, e), bs(e), 4 & r) {
                            try {
                                rs(3, e, e.return), os(3, e)
                            } catch (t) {
                                Eu(e, e.return, t)
                            }
                            try {
                                rs(5, e, e.return)
                            } catch (t) {
                                Eu(e, e.return, t)
                            }
                        }
                        break;
                    case 1:
                        vs(t, e), bs(e), 512 & r && null !== n && es(n, n.return);
                        break;
                    case 5:
                        if (vs(t, e), bs(e), 512 & r && null !== n && es(n, n.return), 32 & e.flags) {
                            var o = e.stateNode;
                            try {
                                pe(o, "")
                            } catch (t) {
                                Eu(e, e.return, t)
                            }
                        }
                        if (4 & r && null != (o = e.stateNode)) {
                            var i = e.memoizedProps, l = null !== n ? n.memoizedProps : i, s = e.type,
                                u = e.updateQueue;
                            if (e.updateQueue = null, null !== u) try {
                                "input" === s && "radio" === i.type && null != i.name && Q(o, i), ye(s, l);
                                var c = ye(s, i);
                                for (l = 0; l < u.length; l += 2) {
                                    var d = u[l], p = u[l + 1];
                                    "style" === d ? ve(o, p) : "dangerouslySetInnerHTML" === d ? de(o, p) : "children" === d ? pe(o, p) : y(o, d, p, c)
                                }
                                switch (s) {
                                    case"input":
                                        G(o, i);
                                        break;
                                    case"textarea":
                                        ae(o, i);
                                        break;
                                    case"select":
                                        var f = o._wrapperState.wasMultiple;
                                        o._wrapperState.wasMultiple = !!i.multiple;
                                        var m = i.value;
                                        null != m ? ne(o, !!i.multiple, m, !1) : f !== !!i.multiple && (null != i.defaultValue ? ne(o, !!i.multiple, i.defaultValue, !0) : ne(o, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                o[mo] = i
                            } catch (t) {
                                Eu(e, e.return, t)
                            }
                        }
                        break;
                    case 6:
                        if (vs(t, e), bs(e), 4 & r) {
                            if (null === e.stateNode) throw Error(a(162));
                            o = e.stateNode, i = e.memoizedProps;
                            try {
                                o.nodeValue = i
                            } catch (t) {
                                Eu(e, e.return, t)
                            }
                        }
                        break;
                    case 3:
                        if (vs(t, e), bs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Wt(t.containerInfo)
                        } catch (t) {
                            Eu(e, e.return, t)
                        }
                        break;
                    case 4:
                    default:
                        vs(t, e), bs(e);
                        break;
                    case 13:
                        vs(t, e), bs(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (Ws = Qe())), 4 & r && hs(e);
                        break;
                    case 22:
                        if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ql = (c = Ql) || d, vs(t, e), Ql = c) : vs(t, e), bs(e), 8192 & r) {
                            if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode)) for (Jl = e, d = e.child; null !== d;) {
                                for (p = Jl = d; null !== Jl;) {
                                    switch (m = (f = Jl).child, f.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            rs(4, f, f.return);
                                            break;
                                        case 1:
                                            es(f, f.return);
                                            var h = f.stateNode;
                                            if ("function" == typeof h.componentWillUnmount) {
                                                r = f, n = f.return;
                                                try {
                                                    t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                                } catch (e) {
                                                    Eu(r, n, e)
                                                }
                                            }
                                            break;
                                        case 5:
                                            es(f, f.return);
                                            break;
                                        case 22:
                                            if (null !== f.memoizedState) {
                                                Ss(p);
                                                continue
                                            }
                                    }
                                    null !== m ? (m.return = f, Jl = m) : Ss(p)
                                }
                                d = d.sibling
                            }
                            e:for (d = null, p = e; ;) {
                                if (5 === p.tag) {
                                    if (null === d) {
                                        d = p;
                                        try {
                                            o = p.stateNode, c ? "function" == typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = p.stateNode, l = null != (u = p.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null, s.style.display = he("display", l))
                                        } catch (t) {
                                            Eu(e, e.return, t)
                                        }
                                    }
                                } else if (6 === p.tag) {
                                    if (null === d) try {
                                        p.stateNode.nodeValue = c ? "" : p.memoizedProps
                                    } catch (t) {
                                        Eu(e, e.return, t)
                                    }
                                } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === e) && null !== p.child) {
                                    p.child.return = p, p = p.child;
                                    continue
                                }
                                if (p === e) break e;
                                for (; null === p.sibling;) {
                                    if (null === p.return || p.return === e) break e;
                                    d === p && (d = null), p = p.return
                                }
                                d === p && (d = null), p.sibling.return = p.return, p = p.sibling
                            }
                        }
                        break;
                    case 19:
                        vs(t, e), bs(e), 4 & r && hs(e);
                    case 21:
                }
            }

            function bs(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e:{
                            for (var n = e.return; null !== n;) {
                                if (ls(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(a(160))
                        }
                        switch (r.tag) {
                            case 5:
                                var o = r.stateNode;
                                32 & r.flags && (pe(o, ""), r.flags &= -33), cs(e, ss(e), o);
                                break;
                            case 3:
                            case 4:
                                var i = r.stateNode.containerInfo;
                                us(e, ss(e), i);
                                break;
                            default:
                                throw Error(a(161))
                        }
                    } catch (t) {
                        Eu(e, e.return, t)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function ys(e, t, n) {
                Jl = e, ws(e, t, n)
            }

            function ws(e, t, n) {
                for (var r = 0 != (1 & e.mode); null !== Jl;) {
                    var o = Jl, a = o.child;
                    if (22 === o.tag && r) {
                        var i = null !== o.memoizedState || Xl;
                        if (!i) {
                            var l = o.alternate, s = null !== l && null !== l.memoizedState || Ql;
                            l = Xl;
                            var u = Ql;
                            if (Xl = i, (Ql = s) && !u) for (Jl = o; null !== Jl;) s = (i = Jl).child, 22 === i.tag && null !== i.memoizedState ? ks(o) : null !== s ? (s.return = i, Jl = s) : ks(o);
                            for (; null !== a;) Jl = a, ws(a, t, n), a = a.sibling;
                            Jl = o, Xl = l, Ql = u
                        }
                        xs(e)
                    } else 0 != (8772 & o.subtreeFlags) && null !== a ? (a.return = o, Jl = a) : xs(e)
                }
            }

            function xs(e) {
                for (; null !== Jl;) {
                    var t = Jl;
                    if (0 != (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 != (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ql || os(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Ql) if (null === n) r.componentDidMount(); else {
                                        var o = t.elementType === t.type ? n.memoizedProps : ga(t.type, n.memoizedProps);
                                        r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                    }
                                    var i = t.updateQueue;
                                    null !== i && Fa(t, i, r);
                                    break;
                                case 3:
                                    var l = t.updateQueue;
                                    if (null !== l) {
                                        if (n = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                        }
                                        Fa(t, l, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = s;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                            case"button":
                                            case"input":
                                            case"select":
                                            case"textarea":
                                                u.autoFocus && n.focus();
                                                break;
                                            case"img":
                                                u.src && (n.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var d = c.memoizedState;
                                            if (null !== d) {
                                                var p = d.dehydrated;
                                                null !== p && Wt(p)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(a(163))
                            }
                            Ql || 512 & t.flags && as(t)
                        } catch (e) {
                            Eu(t, t.return, e)
                        }
                    }
                    if (t === e) {
                        Jl = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return, Jl = n;
                        break
                    }
                    Jl = t.return
                }
            }

            function Ss(e) {
                for (; null !== Jl;) {
                    var t = Jl;
                    if (t === e) {
                        Jl = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return, Jl = n;
                        break
                    }
                    Jl = t.return
                }
            }

            function ks(e) {
                for (; null !== Jl;) {
                    var t = Jl;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = t.return;
                                try {
                                    os(4, t)
                                } catch (e) {
                                    Eu(t, n, e)
                                }
                                break;
                            case 1:
                                var r = t.stateNode;
                                if ("function" == typeof r.componentDidMount) {
                                    var o = t.return;
                                    try {
                                        r.componentDidMount()
                                    } catch (e) {
                                        Eu(t, o, e)
                                    }
                                }
                                var a = t.return;
                                try {
                                    as(t)
                                } catch (e) {
                                    Eu(t, a, e)
                                }
                                break;
                            case 5:
                                var i = t.return;
                                try {
                                    as(t)
                                } catch (e) {
                                    Eu(t, i, e)
                                }
                        }
                    } catch (e) {
                        Eu(t, t.return, e)
                    }
                    if (t === e) {
                        Jl = null;
                        break
                    }
                    var l = t.sibling;
                    if (null !== l) {
                        l.return = t.return, Jl = l;
                        break
                    }
                    Jl = t.return
                }
            }

            var Cs, Es = Math.ceil, Zs = w.ReactCurrentDispatcher, Ps = w.ReactCurrentOwner,
                Rs = w.ReactCurrentBatchConfig, Ts = 0, Os = null, Ms = null, zs = 0, Ns = 0, Is = Eo(0), Ls = 0,
                _s = null, As = 0, $s = 0, Fs = 0, Ds = null, js = null, Ws = 0, Bs = 1 / 0, Hs = null, Vs = !1,
                Us = null, Ks = null, qs = !1, Ys = null, Xs = 0, Qs = 0, Gs = null, Js = -1, eu = 0;

            function tu() {
                return 0 != (6 & Ts) ? Qe() : -1 !== Js ? Js : Js = Qe()
            }

            function nu(e) {
                return 0 == (1 & e.mode) ? 1 : 0 != (2 & Ts) && 0 !== zs ? zs & -zs : null !== va.transition ? (0 === eu && (eu = ht()), eu) : 0 !== (e = yt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
            }

            function ru(e, t, n, r) {
                if (50 < Qs) throw Qs = 0, Gs = null, Error(a(185));
                gt(e, n, r), 0 != (2 & Ts) && e === Os || (e === Os && (0 == (2 & Ts) && ($s |= n), 4 === Ls && su(e, zs)), ou(e, r), 1 === n && 0 === Ts && 0 == (1 & t.mode) && (Bs = Qe() + 500, Do && Bo()))
            }

            function ou(e, t) {
                var n = e.callbackNode;
                !function (e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                        var i = 31 - it(a), l = 1 << i, s = o[i];
                        -1 === s ? 0 != (l & n) && 0 == (l & r) || (o[i] = ft(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l
                    }
                }(e, t);
                var r = pt(e, e === Os ? zs : 0);
                if (0 === r) null !== n && qe(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
                    if (null != n && qe(n), 1 === t) 0 === e.tag ? function (e) {
                        Do = !0, Wo(e)
                    }(uu.bind(null, e)) : Wo(uu.bind(null, e)), io((function () {
                        0 == (6 & Ts) && Bo()
                    })), n = null; else {
                        switch (wt(r)) {
                            case 1:
                                n = Je;
                                break;
                            case 4:
                                n = et;
                                break;
                            case 16:
                            default:
                                n = tt;
                                break;
                            case 536870912:
                                n = rt
                        }
                        n = Ou(n, au.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = n
                }
            }

            function au(e, t) {
                if (Js = -1, eu = 0, 0 != (6 & Ts)) throw Error(a(327));
                var n = e.callbackNode;
                if (ku() && e.callbackNode !== n) return null;
                var r = pt(e, e === Os ? zs : 0);
                if (0 === r) return null;
                if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gu(e, r); else {
                    t = r;
                    var o = Ts;
                    Ts |= 2;
                    var i = hu();
                    for (Os === e && zs === t || (Hs = null, Bs = Qe() + 500, fu(e, t)); ;) try {
                        yu();
                        break
                    } catch (t) {
                        mu(e, t)
                    }
                    Sa(), Zs.current = i, Ts = o, null !== Ms ? t = 0 : (Os = null, zs = 0, t = Ls)
                }
                if (0 !== t) {
                    if (2 === t && 0 !== (o = mt(e)) && (r = o, t = iu(e, o)), 1 === t) throw n = _s, fu(e, 0), su(e, r), ou(e, Qe()), n;
                    if (6 === t) su(e, r); else {
                        if (o = e.current.alternate, 0 == (30 & r) && !function (e) {
                            for (var t = e; ;) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                                        var o = n[r], a = o.getSnapshot;
                                        o = o.value;
                                        try {
                                            if (!lr(a(), o)) return !1
                                        } catch (e) {
                                            return !1
                                        }
                                    }
                                }
                                if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
                                    if (t === e) break;
                                    for (; null === t.sibling;) {
                                        if (null === t.return || t.return === e) return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return, t = t.sibling
                                }
                            }
                            return !0
                        }(o) && (2 === (t = gu(e, r)) && 0 !== (i = mt(e)) && (r = i, t = iu(e, i)), 1 === t)) throw n = _s, fu(e, 0), su(e, r), ou(e, Qe()), n;
                        switch (e.finishedWork = o, e.finishedLanes = r, t) {
                            case 0:
                            case 1:
                                throw Error(a(345));
                            case 2:
                            case 5:
                                Su(e, js, Hs);
                                break;
                            case 3:
                                if (su(e, r), (130023424 & r) === r && 10 < (t = Ws + 500 - Qe())) {
                                    if (0 !== pt(e, 0)) break;
                                    if (((o = e.suspendedLanes) & r) !== r) {
                                        tu(), e.pingedLanes |= e.suspendedLanes & o;
                                        break
                                    }
                                    e.timeoutHandle = ro(Su.bind(null, e, js, Hs), t);
                                    break
                                }
                                Su(e, js, Hs);
                                break;
                            case 4:
                                if (su(e, r), (4194240 & r) === r) break;
                                for (t = e.eventTimes, o = -1; 0 < r;) {
                                    var l = 31 - it(r);
                                    i = 1 << l, (l = t[l]) > o && (o = l), r &= ~i
                                }
                                if (r = o, 10 < (r = (120 > (r = Qe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Es(r / 1960)) - r)) {
                                    e.timeoutHandle = ro(Su.bind(null, e, js, Hs), r);
                                    break
                                }
                                Su(e, js, Hs);
                                break;
                            default:
                                throw Error(a(329))
                        }
                    }
                }
                return ou(e, Qe()), e.callbackNode === n ? au.bind(null, e) : null
            }

            function iu(e, t) {
                var n = Ds;
                return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256), 2 !== (e = gu(e, t)) && (t = js, js = n, null !== t && lu(t)), e
            }

            function lu(e) {
                null === js ? js = e : js.push.apply(js, e)
            }

            function su(e, t) {
                for (t &= ~Fs, t &= ~$s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - it(t), r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function uu(e) {
                if (0 != (6 & Ts)) throw Error(a(327));
                ku();
                var t = pt(e, 0);
                if (0 == (1 & t)) return ou(e, Qe()), null;
                var n = gu(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = mt(e);
                    0 !== r && (t = r, n = iu(e, r))
                }
                if (1 === n) throw n = _s, fu(e, 0), su(e, t), ou(e, Qe()), n;
                if (6 === n) throw Error(a(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, Su(e, js, Hs), ou(e, Qe()), null
            }

            function cu(e, t) {
                var n = Ts;
                Ts |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Ts = n) && (Bs = Qe() + 500, Do && Bo())
                }
            }

            function du(e) {
                null !== Ys && 0 === Ys.tag && 0 == (6 & Ts) && ku();
                var t = Ts;
                Ts |= 1;
                var n = Rs.transition, r = yt;
                try {
                    if (Rs.transition = null, yt = 1, e) return e()
                } finally {
                    yt = r, Rs.transition = n, 0 == (6 & (Ts = t)) && Bo()
                }
            }

            function pu() {
                Ns = Is.current, Zo(Is)
            }

            function fu(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Ms) for (n = Ms.return; null !== n;) {
                    var r = n;
                    switch (na(r), r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && Io();
                            break;
                        case 3:
                            ai(), Zo(Oo), Zo(To), di();
                            break;
                        case 5:
                            li(r);
                            break;
                        case 4:
                            ai();
                            break;
                        case 13:
                        case 19:
                            Zo(si);
                            break;
                        case 10:
                            ka(r.type._context);
                            break;
                        case 22:
                        case 23:
                            pu()
                    }
                    n = n.return
                }
                if (Os = e, Ms = e = Iu(e.current, null), zs = Ns = t, Ls = 0, _s = null, Fs = $s = As = 0, js = Ds = null, null !== Pa) {
                    for (t = 0; t < Pa.length; t++) if (null !== (r = (n = Pa[t]).interleaved)) {
                        n.interleaved = null;
                        var o = r.next, a = n.pending;
                        if (null !== a) {
                            var i = a.next;
                            a.next = o, r.next = i
                        }
                        n.pending = r
                    }
                    Pa = null
                }
                return e
            }

            function mu(e, t) {
                for (; ;) {
                    var n = Ms;
                    try {
                        if (Sa(), pi.current = il, bi) {
                            for (var r = hi.memoizedState; null !== r;) {
                                var o = r.queue;
                                null !== o && (o.pending = null), r = r.next
                            }
                            bi = !1
                        }
                        if (mi = 0, gi = vi = hi = null, yi = !1, wi = 0, Ps.current = null, null === n || null === n.return) {
                            Ls = 1, _s = t, Ms = null;
                            break
                        }
                        e:{
                            var i = e, l = n.return, s = n, u = t;
                            if (t = zs, s.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
                                var c = u, d = s, p = d.tag;
                                if (0 == (1 & d.mode) && (0 === p || 11 === p || 15 === p)) {
                                    var f = d.alternate;
                                    f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                }
                                var m = gl(l);
                                if (null !== m) {
                                    m.flags &= -257, bl(m, l, s, 0, t), 1 & m.mode && vl(i, c, t), u = c;
                                    var h = (t = m).updateQueue;
                                    if (null === h) {
                                        var v = new Set;
                                        v.add(u), t.updateQueue = v
                                    } else h.add(u);
                                    break e
                                }
                                if (0 == (1 & t)) {
                                    vl(i, c, t), vu();
                                    break e
                                }
                                u = Error(a(426))
                            } else if (aa && 1 & s.mode) {
                                var g = gl(l);
                                if (null !== g) {
                                    0 == (65536 & g.flags) && (g.flags |= 256), bl(g, l, s, 0, t), ha(cl(u, s));
                                    break e
                                }
                            }
                            i = u = cl(u, s), 4 !== Ls && (Ls = 2), null === Ds ? Ds = [i] : Ds.push(i), i = l;
                            do {
                                switch (i.tag) {
                                    case 3:
                                        i.flags |= 65536, t &= -t, i.lanes |= t, Aa(i, ml(0, u, t));
                                        break e;
                                    case 1:
                                        s = u;
                                        var b = i.type, y = i.stateNode;
                                        if (0 == (128 & i.flags) && ("function" == typeof b.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === Ks || !Ks.has(y)))) {
                                            i.flags |= 65536, t &= -t, i.lanes |= t, Aa(i, hl(i, s, t));
                                            break e
                                        }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        xu(n)
                    } catch (e) {
                        t = e, Ms === n && null !== n && (Ms = n = n.return);
                        continue
                    }
                    break
                }
            }

            function hu() {
                var e = Zs.current;
                return Zs.current = il, null === e ? il : e
            }

            function vu() {
                0 !== Ls && 3 !== Ls && 2 !== Ls || (Ls = 4), null === Os || 0 == (268435455 & As) && 0 == (268435455 & $s) || su(Os, zs)
            }

            function gu(e, t) {
                var n = Ts;
                Ts |= 2;
                var r = hu();
                for (Os === e && zs === t || (Hs = null, fu(e, t)); ;) try {
                    bu();
                    break
                } catch (t) {
                    mu(e, t)
                }
                if (Sa(), Ts = n, Zs.current = r, null !== Ms) throw Error(a(261));
                return Os = null, zs = 0, Ls
            }

            function bu() {
                for (; null !== Ms;) wu(Ms)
            }

            function yu() {
                for (; null !== Ms && !Ye();) wu(Ms)
            }

            function wu(e) {
                var t = Cs(e.alternate, e, Ns);
                e.memoizedProps = e.pendingProps, null === t ? xu(e) : Ms = t, Ps.current = null
            }

            function xu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 == (32768 & t.flags)) {
                        if (null !== (n = ql(n, t, Ns))) return void (Ms = n)
                    } else {
                        if (null !== (n = Yl(n, t))) return n.flags &= 32767, void (Ms = n);
                        if (null === e) return Ls = 6, void (Ms = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void (Ms = t);
                    Ms = t = e
                } while (null !== t);
                0 === Ls && (Ls = 5)
            }

            function Su(e, t, n) {
                var r = yt, o = Rs.transition;
                try {
                    Rs.transition = null, yt = 1, function (e, t, n, r) {
                        do {
                            ku()
                        } while (null !== Ys);
                        if (0 != (6 & Ts)) throw Error(a(327));
                        n = e.finishedWork;
                        var o = e.finishedLanes;
                        if (null === n) return null;
                        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
                        e.callbackNode = null, e.callbackPriority = 0;
                        var i = n.lanes | n.childLanes;
                        if (function (e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n;) {
                                var o = 31 - it(n), a = 1 << o;
                                t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
                            }
                        }(e, i), e === Os && (Ms = Os = null, zs = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || qs || (qs = !0, Ou(tt, (function () {
                            return ku(), null
                        }))), i = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || i) {
                            i = Rs.transition, Rs.transition = null;
                            var l = yt;
                            yt = 1;
                            var s = Ts;
                            Ts |= 4, Ps.current = null, function (e, t) {
                                if (eo = Ht, fr(e = pr())) {
                                    if ("selectionStart" in e) var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    }; else e:{
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var o = r.anchorOffset, i = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, i.nodeType
                                            } catch (e) {
                                                n = null;
                                                break e
                                            }
                                            var l = 0, s = -1, u = -1, c = 0, d = 0, p = e, f = null;
                                            t:for (; ;) {
                                                for (var m; p !== n || 0 !== o && 3 !== p.nodeType || (s = l + o), p !== i || 0 !== r && 3 !== p.nodeType || (u = l + r), 3 === p.nodeType && (l += p.nodeValue.length), null !== (m = p.firstChild);) f = p, p = m;
                                                for (; ;) {
                                                    if (p === e) break t;
                                                    if (f === n && ++c === o && (s = l), f === i && ++d === r && (u = l), null !== (m = p.nextSibling)) break;
                                                    f = (p = f).parentNode
                                                }
                                                p = m
                                            }
                                            n = -1 === s || -1 === u ? null : {start: s, end: u}
                                        } else n = null
                                    }
                                    n = n || {start: 0, end: 0}
                                } else n = null;
                                for (to = {
                                    focusedElem: e,
                                    selectionRange: n
                                }, Ht = !1, Jl = t; null !== Jl;) if (e = (t = Jl).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, Jl = e; else for (; null !== Jl;) {
                                    t = Jl;
                                    try {
                                        var h = t.alternate;
                                        if (0 != (1024 & t.flags)) switch (t.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                            case 5:
                                            case 6:
                                            case 4:
                                            case 17:
                                                break;
                                            case 1:
                                                if (null !== h) {
                                                    var v = h.memoizedProps, g = h.memoizedState, b = t.stateNode,
                                                        y = b.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ga(t.type, v), g);
                                                    b.__reactInternalSnapshotBeforeUpdate = y
                                                }
                                                break;
                                            case 3:
                                                var w = t.stateNode.containerInfo;
                                                1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                break;
                                            default:
                                                throw Error(a(163))
                                        }
                                    } catch (e) {
                                        Eu(t, t.return, e)
                                    }
                                    if (null !== (e = t.sibling)) {
                                        e.return = t.return, Jl = e;
                                        break
                                    }
                                    Jl = t.return
                                }
                                h = ns, ns = !1
                            }(e, n), gs(n, e), mr(to), Ht = !!eo, to = eo = null, e.current = n, ys(n, e, o), Xe(), Ts = s, yt = l, Rs.transition = i
                        } else e.current = n;
                        if (qs && (qs = !1, Ys = e, Xs = o), 0 === (i = e.pendingLanes) && (Ks = null), function (e) {
                            if (at && "function" == typeof at.onCommitFiberRoot) try {
                                at.onCommitFiberRoot(ot, e, void 0, 128 == (128 & e.current.flags))
                            } catch (e) {
                            }
                        }(n.stateNode), ou(e, Qe()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
                            componentStack: o.stack,
                            digest: o.digest
                        });
                        if (Vs) throw Vs = !1, e = Us, Us = null, e;
                        0 != (1 & Xs) && 0 !== e.tag && ku(), 0 != (1 & (i = e.pendingLanes)) ? e === Gs ? Qs++ : (Qs = 0, Gs = e) : Qs = 0, Bo()
                    }(e, t, n, r)
                } finally {
                    Rs.transition = o, yt = r
                }
                return null
            }

            function ku() {
                if (null !== Ys) {
                    var e = wt(Xs), t = Rs.transition, n = yt;
                    try {
                        if (Rs.transition = null, yt = 16 > e ? 16 : e, null === Ys) var r = !1; else {
                            if (e = Ys, Ys = null, Xs = 0, 0 != (6 & Ts)) throw Error(a(331));
                            var o = Ts;
                            for (Ts |= 4, Jl = e.current; null !== Jl;) {
                                var i = Jl, l = i.child;
                                if (0 != (16 & Jl.flags)) {
                                    var s = i.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for (Jl = c; null !== Jl;) {
                                                var d = Jl;
                                                switch (d.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        rs(8, d, i)
                                                }
                                                var p = d.child;
                                                if (null !== p) p.return = d, Jl = p; else for (; null !== Jl;) {
                                                    var f = (d = Jl).sibling, m = d.return;
                                                    if (is(d), d === c) {
                                                        Jl = null;
                                                        break
                                                    }
                                                    if (null !== f) {
                                                        f.return = m, Jl = f;
                                                        break
                                                    }
                                                    Jl = m
                                                }
                                            }
                                        }
                                        var h = i.alternate;
                                        if (null !== h) {
                                            var v = h.child;
                                            if (null !== v) {
                                                h.child = null;
                                                do {
                                                    var g = v.sibling;
                                                    v.sibling = null, v = g
                                                } while (null !== v)
                                            }
                                        }
                                        Jl = i
                                    }
                                }
                                if (0 != (2064 & i.subtreeFlags) && null !== l) l.return = i, Jl = l; else e:for (; null !== Jl;) {
                                    if (0 != (2048 & (i = Jl).flags)) switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            rs(9, i, i.return)
                                    }
                                    var b = i.sibling;
                                    if (null !== b) {
                                        b.return = i.return, Jl = b;
                                        break e
                                    }
                                    Jl = i.return
                                }
                            }
                            var y = e.current;
                            for (Jl = y; null !== Jl;) {
                                var w = (l = Jl).child;
                                if (0 != (2064 & l.subtreeFlags) && null !== w) w.return = l, Jl = w; else e:for (l = y; null !== Jl;) {
                                    if (0 != (2048 & (s = Jl).flags)) try {
                                        switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                os(9, s)
                                        }
                                    } catch (e) {
                                        Eu(s, s.return, e)
                                    }
                                    if (s === l) {
                                        Jl = null;
                                        break e
                                    }
                                    var x = s.sibling;
                                    if (null !== x) {
                                        x.return = s.return, Jl = x;
                                        break e
                                    }
                                    Jl = s.return
                                }
                            }
                            if (Ts = o, Bo(), at && "function" == typeof at.onPostCommitFiberRoot) try {
                                at.onPostCommitFiberRoot(ot, e)
                            } catch (e) {
                            }
                            r = !0
                        }
                        return r
                    } finally {
                        yt = n, Rs.transition = t
                    }
                }
                return !1
            }

            function Cu(e, t, n) {
                e = La(e, t = ml(0, t = cl(n, t), 1), 1), t = tu(), null !== e && (gt(e, 1, t), ou(e, t))
            }

            function Eu(e, t, n) {
                if (3 === e.tag) Cu(e, e, n); else for (; null !== t;) {
                    if (3 === t.tag) {
                        Cu(t, e, n);
                        break
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Ks || !Ks.has(r))) {
                            t = La(t, e = hl(t, e = cl(n, e), 1), 1), e = tu(), null !== t && (gt(t, 1, e), ou(t, e));
                            break
                        }
                    }
                    t = t.return
                }
            }

            function Zu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Os === e && (zs & n) === n && (4 === Ls || 3 === Ls && (130023424 & zs) === zs && 500 > Qe() - Ws ? fu(e, 0) : Fs |= n), ou(e, t)
            }

            function Pu(e, t) {
                0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = tu();
                null !== (e = Oa(e, t)) && (gt(e, t, n), ou(e, n))
            }

            function Ru(e) {
                var t = e.memoizedState, n = 0;
                null !== t && (n = t.retryLane), Pu(e, n)
            }

            function Tu(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode, o = e.memoizedState;
                        null !== o && (n = o.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    default:
                        throw Error(a(314))
                }
                null !== r && r.delete(t), Pu(e, n)
            }

            function Ou(e, t) {
                return Ke(e, t)
            }

            function Mu(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function zu(e, t, n, r) {
                return new Mu(e, t, n, r)
            }

            function Nu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Iu(e, t) {
                var n = e.alternate;
                return null === n ? ((n = zu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Lu(e, t, n, r, o, i) {
                var l = 2;
                if (r = e, "function" == typeof e) Nu(e) && (l = 1); else if ("string" == typeof e) l = 5; else e:switch (e) {
                    case k:
                        return _u(n.children, o, i, t);
                    case C:
                        l = 8, o |= 8;
                        break;
                    case E:
                        return (e = zu(12, n, t, 2 | o)).elementType = E, e.lanes = i, e;
                    case T:
                        return (e = zu(13, n, t, o)).elementType = T, e.lanes = i, e;
                    case O:
                        return (e = zu(19, n, t, o)).elementType = O, e.lanes = i, e;
                    case N:
                        return Au(n, o, i, t);
                    default:
                        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                            case Z:
                                l = 10;
                                break e;
                            case P:
                                l = 9;
                                break e;
                            case R:
                                l = 11;
                                break e;
                            case M:
                                l = 14;
                                break e;
                            case z:
                                l = 16, r = null;
                                break e
                        }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                }
                return (t = zu(l, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
            }

            function _u(e, t, n, r) {
                return (e = zu(7, e, r, t)).lanes = n, e
            }

            function Au(e, t, n, r) {
                return (e = zu(22, e, r, t)).elementType = N, e.lanes = n, e.stateNode = {isHidden: !1}, e
            }

            function $u(e, t, n) {
                return (e = zu(6, e, null, t)).lanes = n, e
            }

            function Fu(e, t, n) {
                return (t = zu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Du(e, t, n, r, o) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
            }

            function ju(e, t, n, r, o, a, i, l, s) {
                return e = new Du(e, t, n, l, s), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = zu(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, za(a), e
            }

            function Wu(e) {
                if (!e) return Ro;
                e:{
                    if (We(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (No(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(a(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (No(n)) return _o(e, n, t)
                }
                return t
            }

            function Bu(e, t, n, r, o, a, i, l, s) {
                return (e = ju(n, r, !0, e, 0, a, 0, l, s)).context = Wu(null), n = e.current, (a = Ia(r = tu(), o = nu(n))).callback = null != t ? t : null, La(n, a, o), e.current.lanes = o, gt(e, o, r), ou(e, r), e
            }

            function Hu(e, t, n, r) {
                var o = t.current, a = tu(), i = nu(o);
                return n = Wu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ia(a, i)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = La(o, t, i)) && (ru(e, o, i, a), _a(e, o, i)), i
            }

            function Vu(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function Uu(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Ku(e, t) {
                Uu(e, t), (e = e.alternate) && Uu(e, t)
            }

            Cs = function (e, t, n) {
                if (null !== e) if (e.memoizedProps !== t.pendingProps || Oo.current) wl = !0; else {
                    if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return wl = !1, function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                Ol(t), ma();
                                break;
                            case 5:
                                ii(t);
                                break;
                            case 1:
                                No(t.type) && Ao(t);
                                break;
                            case 4:
                                oi(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context, o = t.memoizedProps.value;
                                Po(ba, r._currentValue), r._currentValue = o;
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Po(si, 1 & si.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? $l(e, t, n) : (Po(si, 1 & si.current), null !== (e = Vl(e, t, n)) ? e.sibling : null);
                                Po(si, 1 & si.current);
                                break;
                            case 19:
                                if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                    if (r) return Bl(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), Po(si, si.current), r) break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0, El(e, t, n)
                        }
                        return Vl(e, t, n)
                    }(e, t, n);
                    wl = 0 != (131072 & e.flags)
                } else wl = !1, aa && 0 != (1048576 & t.flags) && ea(t, Ko, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var r = t.type;
                        Hl(e, t), e = t.pendingProps;
                        var o = zo(t, To.current);
                        Ea(t, n), o = Ci(null, t, r, e, o, n);
                        var i = Ei();
                        return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, No(r) ? (i = !0, Ao(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, za(t), o.updater = Wa, t.stateNode = o, o._reactInternals = t, Ua(t, r, e, n), t = Tl(null, t, r, !0, i, n)) : (t.tag = 0, aa && i && ta(t), xl(null, t, o, n), t = t.child), t;
                    case 16:
                        r = t.elementType;
                        e:{
                            switch (Hl(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function (e) {
                                if ("function" == typeof e) return Nu(e) ? 1 : 0;
                                if (null != e) {
                                    if ((e = e.$$typeof) === R) return 11;
                                    if (e === M) return 14
                                }
                                return 2
                            }(r), e = ga(r, e), o) {
                                case 0:
                                    t = Pl(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = Rl(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = Sl(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = kl(null, t, r, ga(r.type, e), n);
                                    break e
                            }
                            throw Error(a(306, r, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, o = t.pendingProps, Pl(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
                    case 1:
                        return r = t.type, o = t.pendingProps, Rl(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
                    case 3:
                        e:{
                            if (Ol(t), null === e) throw Error(a(387));
                            r = t.pendingProps, o = (i = t.memoizedState).element, Na(e, t), $a(t, r, null, n);
                            var l = t.memoizedState;
                            if (r = l.element, i.isDehydrated) {
                                if (i = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: l.cache,
                                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                    transitions: l.transitions
                                }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                    t = Ml(e, t, r, n, o = cl(Error(a(423)), t));
                                    break e
                                }
                                if (r !== o) {
                                    t = Ml(e, t, r, n, o = cl(Error(a(424)), t));
                                    break e
                                }
                                for (oa = uo(t.stateNode.containerInfo.firstChild), ra = t, aa = !0, ia = null, n = Ga(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (ma(), r === o) {
                                    t = Vl(e, t, n);
                                    break e
                                }
                                xl(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return ii(t), null === e && ca(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = o.children, no(r, o) ? l = null : null !== i && no(r, i) && (t.flags |= 32), Zl(e, t), xl(e, t, l, n), t.child;
                    case 6:
                        return null === e && ca(t), null;
                    case 13:
                        return $l(e, t, n);
                    case 4:
                        return oi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Qa(t, null, r, n) : xl(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, o = t.pendingProps, Sl(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
                    case 7:
                        return xl(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return xl(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e:{
                            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Po(ba, r._currentValue), r._currentValue = l, null !== i) if (lr(i.value, l)) {
                                if (i.children === o.children && !Oo.current) {
                                    t = Vl(e, t, n);
                                    break e
                                }
                            } else for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                var s = i.dependencies;
                                if (null !== s) {
                                    l = i.child;
                                    for (var u = s.firstContext; null !== u;) {
                                        if (u.context === r) {
                                            if (1 === i.tag) {
                                                (u = Ia(-1, n & -n)).tag = 2;
                                                var c = i.updateQueue;
                                                if (null !== c) {
                                                    var d = (c = c.shared).pending;
                                                    null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                                }
                                            }
                                            i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Ca(i.return, n, t), s.lanes |= n;
                                            break
                                        }
                                        u = u.next
                                    }
                                } else if (10 === i.tag) l = i.type === t.type ? null : i.child; else if (18 === i.tag) {
                                    if (null === (l = i.return)) throw Error(a(341));
                                    l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), Ca(l, n, t), l = i.sibling
                                } else l = i.child;
                                if (null !== l) l.return = i; else for (l = i; null !== l;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (null !== (i = l.sibling)) {
                                        i.return = l.return, l = i;
                                        break
                                    }
                                    l = l.return
                                }
                                i = l
                            }
                            xl(e, t, o.children, n), t = t.child
                        }
                        return t;
                    case 9:
                        return o = t.type, r = t.pendingProps.children, Ea(t, n), r = r(o = Za(o)), t.flags |= 1, xl(e, t, r, n), t.child;
                    case 14:
                        return o = ga(r = t.type, t.pendingProps), kl(e, t, r, o = ga(r.type, o), n);
                    case 15:
                        return Cl(e, t, t.type, t.pendingProps, n);
                    case 17:
                        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ga(r, o), Hl(e, t), t.tag = 1, No(r) ? (e = !0, Ao(t)) : e = !1, Ea(t, n), Ha(t, r, o), Ua(t, r, o, n), Tl(null, t, r, !0, e, n);
                    case 19:
                        return Bl(e, t, n);
                    case 22:
                        return El(e, t, n)
                }
                throw Error(a(156, t.tag))
            };
            var qu = "function" == typeof reportError ? reportError : function (e) {
                console.error(e)
            };

            function Yu(e) {
                this._internalRoot = e
            }

            function Xu(e) {
                this._internalRoot = e
            }

            function Qu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function Gu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function Ju() {
            }

            function ec(e, t, n, r, o) {
                var a = n._reactRootContainer;
                if (a) {
                    var i = a;
                    if ("function" == typeof o) {
                        var l = o;
                        o = function () {
                            var e = Vu(i);
                            l.call(e)
                        }
                    }
                    Hu(t, i, e, o)
                } else i = function (e, t, n, r, o) {
                    if (o) {
                        if ("function" == typeof r) {
                            var a = r;
                            r = function () {
                                var e = Vu(i);
                                a.call(e)
                            }
                        }
                        var i = Bu(t, r, e, 0, null, !1, 0, "", Ju);
                        return e._reactRootContainer = i, e[ho] = i.current, Wr(8 === e.nodeType ? e.parentNode : e), du(), i
                    }
                    for (; o = e.lastChild;) e.removeChild(o);
                    if ("function" == typeof r) {
                        var l = r;
                        r = function () {
                            var e = Vu(s);
                            l.call(e)
                        }
                    }
                    var s = ju(e, 0, !1, null, 0, !1, 0, "", Ju);
                    return e._reactRootContainer = s, e[ho] = s.current, Wr(8 === e.nodeType ? e.parentNode : e), du((function () {
                        Hu(t, s, n, r)
                    })), s
                }(n, t, e, o, r);
                return Vu(i)
            }

            Xu.prototype.render = Yu.prototype.render = function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(a(409));
                Hu(e, t, null, null)
            }, Xu.prototype.unmount = Yu.prototype.unmount = function () {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    du((function () {
                        Hu(null, e, null, null)
                    })), t[ho] = null
                }
            }, Xu.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                    var t = Ct();
                    e = {blockedOn: null, target: e, priority: t};
                    for (var n = 0; n < Nt.length && 0 !== t && t < Nt[n].priority; n++) ;
                    Nt.splice(n, 0, e), 0 === n && At(e)
                }
            }, xt = function (e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = dt(t.pendingLanes);
                            0 !== n && (bt(t, 1 | n), ou(t, Qe()), 0 == (6 & Ts) && (Bs = Qe() + 500, Bo()))
                        }
                        break;
                    case 13:
                        du((function () {
                            var t = Oa(e, 1);
                            if (null !== t) {
                                var n = tu();
                                ru(t, e, 1, n)
                            }
                        })), Ku(e, 1)
                }
            }, St = function (e) {
                if (13 === e.tag) {
                    var t = Oa(e, 134217728);
                    null !== t && ru(t, e, 134217728, tu()), Ku(e, 134217728)
                }
            }, kt = function (e) {
                if (13 === e.tag) {
                    var t = nu(e), n = Oa(e, t);
                    null !== n && ru(n, e, t, tu()), Ku(e, t)
                }
            }, Ct = function () {
                return yt
            }, Et = function (e, t) {
                var n = yt;
                try {
                    return yt = e, t()
                } finally {
                    yt = n
                }
            }, Se = function (e, t, n) {
                switch (t) {
                    case"input":
                        if (G(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var o = So(r);
                                    if (!o) throw Error(a(90));
                                    K(r), G(r, o)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        ae(e, n);
                        break;
                    case"select":
                        null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }, Re = cu, Te = du;
            var tc = {usingClientEntryPoint: !1, Events: [wo, xo, So, Ze, Pe, cu]},
                nc = {findFiberByHostInstance: yo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
                rc = {
                    bundleType: nc.bundleType,
                    version: nc.version,
                    rendererPackageName: nc.rendererPackageName,
                    rendererConfig: nc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: w.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = Ve(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: nc.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!oc.isDisabled && oc.supportsFiber) try {
                    ot = oc.inject(rc), at = oc
                } catch (ce) {
                }
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Qu(t)) throw Error(a(200));
                return function (e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: S,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }, t.createRoot = function (e, t) {
                if (!Qu(e)) throw Error(a(299));
                var n = !1, r = "", o = qu;
                return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = ju(e, 1, !1, null, 0, n, 0, r, o), e[ho] = t.current, Wr(8 === e.nodeType ? e.parentNode : e), new Yu(t)
            }, t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(a(188));
                    throw e = Object.keys(e).join(","), Error(a(268, e))
                }
                return null === (e = Ve(t)) ? null : e.stateNode
            }, t.flushSync = function (e) {
                return du(e)
            }, t.hydrate = function (e, t, n) {
                if (!Gu(t)) throw Error(a(200));
                return ec(null, e, t, !0, n)
            }, t.hydrateRoot = function (e, t, n) {
                if (!Qu(e)) throw Error(a(405));
                var r = null != n && n.hydratedSources || null, o = !1, i = "", l = qu;
                if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Bu(t, null, e, 1, null != n ? n : null, o, 0, i, l), e[ho] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                return new Xu(t)
            }, t.render = function (e, t, n) {
                if (!Gu(t)) throw Error(a(200));
                return ec(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function (e) {
                if (!Gu(e)) throw Error(a(40));
                return !!e._reactRootContainer && (du((function () {
                    ec(null, null, e, !1, (function () {
                        e._reactRootContainer = null, e[ho] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!Gu(n)) throw Error(a(200));
                if (null == e || void 0 === e._reactInternals) throw Error(a(38));
                return ec(e, t, n, !1, r)
            }, t.version = "18.2.0-next-9e3b772b8-20220608"
        }, 745: (e, t, n) => {
            "use strict";
            var r = n(3935);
            t.s = r.createRoot, r.hydrateRoot
        }, 3935: (e, t, n) => {
            "use strict";
            !function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), e.exports = n(4448)
        }, 9921: (e, t) => {
            "use strict";
            Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.for("react.offscreen");
            Symbol.for("react.module.reference")
        }, 9864: (e, t, n) => {
            "use strict";
            n(9921)
        }, 5251: (e, t, n) => {
            "use strict";
            var r = n(7294), o = Symbol.for("react.element"), a = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                s = {key: !0, ref: !0, __self: !0, __source: !0};

            function u(e, t, n) {
                var r, a = {}, u = null, c = null;
                for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
                if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                return {$$typeof: o, type: e, key: u, ref: c, props: a, _owner: l.current}
            }

            t.Fragment = a, t.jsx = u, t.jsxs = u
        }, 2408: (e, t) => {
            "use strict";
            var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"),
                s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.iterator, m = {
                    isMounted: function () {
                        return !1
                    }, enqueueForceUpdate: function () {
                    }, enqueueReplaceState: function () {
                    }, enqueueSetState: function () {
                    }
                }, h = Object.assign, v = {};

            function g(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || m
            }

            function b() {
            }

            function y(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || m
            }

            g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, g.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, b.prototype = g.prototype;
            var w = y.prototype = new b;
            w.constructor = y, h(w, g.prototype), w.isPureReactComponent = !0;
            var x = Array.isArray, S = Object.prototype.hasOwnProperty, k = {current: null},
                C = {key: !0, ref: !0, __self: !0, __source: !0};

            function E(e, t, r) {
                var o, a = {}, i = null, l = null;
                if (null != t) for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) S.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
                var s = arguments.length - 2;
                if (1 === s) a.children = r; else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                    a.children = u
                }
                if (e && e.defaultProps) for (o in s = e.defaultProps) void 0 === a[o] && (a[o] = s[o]);
                return {$$typeof: n, type: e, key: i, ref: l, props: a, _owner: k.current}
            }

            function Z(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }

            var P = /\/+/g;

            function R(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function T(e, t, o, a, i) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var s = !1;
                if (null === e) s = !0; else switch (l) {
                    case"string":
                    case"number":
                        s = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                s = !0
                        }
                }
                if (s) return i = i(s = e), e = "" === a ? "." + R(s, 0) : a, x(i) ? (o = "", null != e && (o = e.replace(P, "$&/") + "/"), T(i, t, o, "", (function (e) {
                    return e
                }))) : null != i && (Z(i) && (i = function (e, t) {
                    return {$$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(i, o + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(P, "$&/") + "/") + e)), t.push(i)), 1;
                if (s = 0, a = "" === a ? "." : a + ":", x(e)) for (var u = 0; u < e.length; u++) {
                    var c = a + R(l = e[u], u);
                    s += T(l, t, o, c, i)
                } else if (c = function (e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = f && e[f] || e["@@iterator"]) ? e : null
                }(e), "function" == typeof c) for (e = c.call(e), u = 0; !(l = e.next()).done;) s += T(l = l.value, t, o, c = a + R(l, u++), i); else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }

            function O(e, t, n) {
                if (null == e) return e;
                var r = [], o = 0;
                return T(e, r, "", "", (function (e) {
                    return t.call(n, e, o++)
                })), r
            }

            function M(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }

            var z = {current: null}, N = {transition: null},
                I = {ReactCurrentDispatcher: z, ReactCurrentBatchConfig: N, ReactCurrentOwner: k};
            t.Children = {
                map: O, forEach: function (e, t, n) {
                    O(e, (function () {
                        t.apply(this, arguments)
                    }), n)
                }, count: function (e) {
                    var t = 0;
                    return O(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return O(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!Z(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = g, t.Fragment = o, t.Profiler = i, t.PureComponent = y, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function (e, t, r) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props), a = e.key, i = e.ref, l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref, l = k.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                    for (u in t) S.call(t, u) && !C.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) o.children = r; else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
                    o.children = s
                }
                return {$$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l}
            }, t.createContext = function (e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {$$typeof: l, _context: e}, e.Consumer = e
            }, t.createElement = E, t.createFactory = function (e) {
                var t = E.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: u, render: e}
            }, t.isValidElement = Z, t.lazy = function (e) {
                return {$$typeof: p, _payload: {_status: -1, _result: e}, _init: M}
            }, t.memo = function (e, t) {
                return {$$typeof: d, type: e, compare: void 0 === t ? null : t}
            }, t.startTransition = function (e) {
                var t = N.transition;
                N.transition = {};
                try {
                    e()
                } finally {
                    N.transition = t
                }
            }, t.unstable_act = function () {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function (e, t) {
                return z.current.useCallback(e, t)
            }, t.useContext = function (e) {
                return z.current.useContext(e)
            }, t.useDebugValue = function () {
            }, t.useDeferredValue = function (e) {
                return z.current.useDeferredValue(e)
            }, t.useEffect = function (e, t) {
                return z.current.useEffect(e, t)
            }, t.useId = function () {
                return z.current.useId()
            }, t.useImperativeHandle = function (e, t, n) {
                return z.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function (e, t) {
                return z.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function (e, t) {
                return z.current.useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return z.current.useMemo(e, t)
            }, t.useReducer = function (e, t, n) {
                return z.current.useReducer(e, t, n)
            }, t.useRef = function (e) {
                return z.current.useRef(e)
            }, t.useState = function (e) {
                return z.current.useState(e)
            }, t.useSyncExternalStore = function (e, t, n) {
                return z.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function () {
                return z.current.useTransition()
            }, t.version = "18.2.0"
        }, 7294: (e, t, n) => {
            "use strict";
            e.exports = n(2408)
        }, 5893: (e, t, n) => {
            "use strict";
            e.exports = n(5251)
        }, 53: (e, t) => {
            "use strict";

            function n(e, t) {
                var n = e.length;
                e.push(t);
                e:for (; 0 < n;) {
                    var r = n - 1 >>> 1, o = e[r];
                    if (!(0 < a(o, t))) break e;
                    e[r] = t, e[n] = o, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function o(e) {
                if (0 === e.length) return null;
                var t = e[0], n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e:for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
                        var l = 2 * (r + 1) - 1, s = e[l], u = l + 1, c = e[u];
                        if (0 > a(s, n)) u < o && 0 > a(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l); else {
                            if (!(u < o && 0 > a(c, n))) break e;
                            e[r] = c, e[u] = n, r = u
                        }
                    }
                }
                return t
            }

            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }

            if ("object" == typeof performance && "function" == typeof performance.now) {
                var i = performance;
                t.unstable_now = function () {
                    return i.now()
                }
            } else {
                var l = Date, s = l.now();
                t.unstable_now = function () {
                    return l.now() - s
                }
            }
            var u = [], c = [], d = 1, p = null, f = 3, m = !1, h = !1, v = !1,
                g = "function" == typeof setTimeout ? setTimeout : null,
                b = "function" == typeof clearTimeout ? clearTimeout : null,
                y = "undefined" != typeof setImmediate ? setImmediate : null;

            function w(e) {
                for (var t = r(c); null !== t;) {
                    if (null === t.callback) o(c); else {
                        if (!(t.startTime <= e)) break;
                        o(c), t.sortIndex = t.expirationTime, n(u, t)
                    }
                    t = r(c)
                }
            }

            function x(e) {
                if (v = !1, w(e), !h) if (null !== r(u)) h = !0, N(S); else {
                    var t = r(c);
                    null !== t && I(x, t.startTime - e)
                }
            }

            function S(e, n) {
                h = !1, v && (v = !1, b(Z), Z = -1), m = !0;
                var a = f;
                try {
                    for (w(n), p = r(u); null !== p && (!(p.expirationTime > n) || e && !T());) {
                        var i = p.callback;
                        if ("function" == typeof i) {
                            p.callback = null, f = p.priorityLevel;
                            var l = i(p.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof l ? p.callback = l : p === r(u) && o(u), w(n)
                        } else o(u);
                        p = r(u)
                    }
                    if (null !== p) var s = !0; else {
                        var d = r(c);
                        null !== d && I(x, d.startTime - n), s = !1
                    }
                    return s
                } finally {
                    p = null, f = a, m = !1
                }
            }

            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var k, C = !1, E = null, Z = -1, P = 5, R = -1;

            function T() {
                return !(t.unstable_now() - R < P)
            }

            function O() {
                if (null !== E) {
                    var e = t.unstable_now();
                    R = e;
                    var n = !0;
                    try {
                        n = E(!0, e)
                    } finally {
                        n ? k() : (C = !1, E = null)
                    }
                } else C = !1
            }

            if ("function" == typeof y) k = function () {
                y(O)
            }; else if ("undefined" != typeof MessageChannel) {
                var M = new MessageChannel, z = M.port2;
                M.port1.onmessage = O, k = function () {
                    z.postMessage(null)
                }
            } else k = function () {
                g(O, 0)
            };

            function N(e) {
                E = e, C || (C = !0, k())
            }

            function I(e, n) {
                Z = g((function () {
                    e(t.unstable_now())
                }), n)
            }

            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                h || m || (h = !0, N(S))
            }, t.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function () {
                return f
            }, t.unstable_getFirstCallbackNode = function () {
                return r(u)
            }, t.unstable_next = function (e) {
                switch (f) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = f
                }
                var n = f;
                f = t;
                try {
                    return e()
                } finally {
                    f = n
                }
            }, t.unstable_pauseExecution = function () {
            }, t.unstable_requestPaint = function () {
            }, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = f;
                f = e;
                try {
                    return t()
                } finally {
                    f = n
                }
            }, t.unstable_scheduleCallback = function (e, o, a) {
                var i = t.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? i + a : i, e) {
                    case 1:
                        var l = -1;
                        break;
                    case 2:
                        l = 250;
                        break;
                    case 5:
                        l = 1073741823;
                        break;
                    case 4:
                        l = 1e4;
                        break;
                    default:
                        l = 5e3
                }
                return e = {
                    id: d++,
                    callback: o,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: l = a + l,
                    sortIndex: -1
                }, a > i ? (e.sortIndex = a, n(c, e), null === r(u) && e === r(c) && (v ? (b(Z), Z = -1) : v = !0, I(x, a - i))) : (e.sortIndex = l, n(u, e), h || m || (h = !0, N(S))), e
            }, t.unstable_shouldYield = T, t.unstable_wrapCallback = function (e) {
                var t = f;
                return function () {
                    var n = f;
                    f = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        f = n
                    }
                }
            }
        }, 3840: (e, t, n) => {
            "use strict";
            e.exports = n(53)
        }, 3379: e => {
            "use strict";
            var t = [];

            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++) if (t[r].identifier === e) {
                    n = r;
                    break
                }
                return n
            }

            function r(e, r) {
                for (var a = {}, i = [], l = 0; l < e.length; l++) {
                    var s = e[l], u = r.base ? s[0] + r.base : s[0], c = a[u] || 0, d = "".concat(u, " ").concat(c);
                    a[u] = c + 1;
                    var p = n(d), f = {css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5]};
                    if (-1 !== p) t[p].references++, t[p].updater(f); else {
                        var m = o(f, r);
                        r.byIndex = l, t.splice(l, 0, {identifier: d, updater: m, references: 1})
                    }
                    i.push(d)
                }
                return i
            }

            function o(e, t) {
                var n = t.domAPI(t);
                return n.update(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                        n.update(e = t)
                    } else n.remove()
                }
            }

            e.exports = function (e, o) {
                var a = r(e = e || [], o = o || {});
                return function (e) {
                    e = e || [];
                    for (var i = 0; i < a.length; i++) {
                        var l = n(a[i]);
                        t[l].references--
                    }
                    for (var s = r(e, o), u = 0; u < a.length; u++) {
                        var c = n(a[u]);
                        0 === t[c].references && (t[c].updater(), t.splice(c, 1))
                    }
                    a = s
                }
            }
        }, 569: e => {
            "use strict";
            var t = {};
            e.exports = function (e, n) {
                var r = function (e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        }, 9216: e => {
            "use strict";
            e.exports = function (e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        }, 3565: (e, t, n) => {
            "use strict";
            e.exports = function (e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }, 7795: e => {
            "use strict";
            e.exports = function (e) {
                var t = e.insertStyleElement(e);
                return {
                    update: function (n) {
                        !function (e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                            var a = n.sourceMap;
                            a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    }, remove: function () {
                        !function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }, 4589: e => {
            "use strict";
            e.exports = function (e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }, 4836: e => {
            e.exports = function (e) {
                return e && e.__esModule ? e : {default: e}
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }, 7462: (e, t, n) => {
            "use strict";

            function r() {
                return r = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, r.apply(this, arguments)
            }

            n.d(t, {Z: () => r})
        }, 3366: (e, t, n) => {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }

            n.d(t, {Z: () => r})
        }
    }, r = {};

    function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var a = r[e] = {id: e, exports: {}};
        return n[e](a, a.exports, o), a.exports
    }

    o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {a: t}), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function (n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var a = Object.create(null);
        o.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & r && n; "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((e => i[e] = () => n[e]));
        return i.default = () => n, o.d(a, i), a
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.nc = void 0, (() => {
        "use strict";
        var e = o(7294), t = o(745), n = o(3379), r = o.n(n), a = o(7795), i = o.n(a), l = o(569), s = o.n(l),
            u = o(3565), c = o.n(u), d = o(9216), p = o.n(d), f = o(4589), m = o.n(f), h = o(2242), v = {};
        v.styleTagTransform = m(), v.setAttributes = c(), v.insert = s().bind(null, "head"), v.domAPI = i(), v.insertStyleElement = p(), r()(h.Z, v), h.Z && h.Z.locals && h.Z.locals;
        var g = o(9617), b = o(7462), y = o(4819), w = o(6760);
        const x = "function" == typeof Symbol && Symbol.for ? Symbol.for("mui.nested") : "__THEME_NESTED__";
        var S = o(5893);
        const k = function (t) {
            const {children: n, theme: r} = t, o = (0, w.Z)(), a = e.useMemo((() => {
                const e = null === o ? r : function (e, t) {
                    return "function" == typeof t ? t(e) : (0, b.Z)({}, e, t)
                }(o, r);
                return null != e && (e[x] = null !== o), e
            }), [r, o]);
            return (0, S.jsx)(y.Z.Provider, {value: a, children: n})
        };
        var C = o(2443), E = o(6682);
        const Z = {};

        function P(e) {
            const t = (0, E.Z)();
            return (0, S.jsx)(C.T.Provider, {value: "object" == typeof t ? t : Z, children: e.children})
        }

        const R = function (e) {
            const {children: t, theme: n} = e;
            return (0, S.jsx)(k, {theme: n, children: (0, S.jsx)(P, {children: t})})
        };
        var T = function (e, t) {
            return Number(e.toFixed(t))
        }, O = function (e, t, n) {
            n && "function" == typeof n && n(e, t)
        }, M = {
            easeOut: function (e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }, linear: function (e) {
                return e
            }, easeInQuad: function (e) {
                return e * e
            }, easeOutQuad: function (e) {
                return e * (2 - e)
            }, easeInOutQuad: function (e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            }, easeInCubic: function (e) {
                return e * e * e
            }, easeOutCubic: function (e) {
                return --e * e * e + 1
            }, easeInOutCubic: function (e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            }, easeInQuart: function (e) {
                return e * e * e * e
            }, easeOutQuart: function (e) {
                return 1 - --e * e * e * e
            }, easeInOutQuart: function (e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
            }, easeInQuint: function (e) {
                return e * e * e * e * e
            }, easeOutQuint: function (e) {
                return 1 + --e * e * e * e * e
            }, easeInOutQuint: function (e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
            }
        }, z = function (e) {
            "number" == typeof e && cancelAnimationFrame(e)
        }, N = function (e) {
            e.mounted && (z(e.animation), e.animate = !1, e.animation = null, e.velocity = null)
        };

        function I(e, t, n, r) {
            if (e.mounted) {
                var o = (new Date).getTime();
                N(e), e.animation = function () {
                    if (!e.mounted) return z(e.animation);
                    var a = (new Date).getTime() - o, i = a / n, l = (0, M[t])(i);
                    a >= n ? (r(1), e.animation = null) : e.animation && (r(l), requestAnimationFrame(e.animation))
                }, requestAnimationFrame(e.animation)
            }
        }

        function L(e, t, n, r) {
            var o = function (e) {
                var t = e.scale, n = e.positionX, r = e.positionY;
                return !(Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
            }(t);
            if (e.mounted && o) {
                var a = e.setTransformState, i = e.transformState, l = i.scale, s = i.positionX, u = i.positionY,
                    c = t.scale - l, d = t.positionX - s, p = t.positionY - u;
                0 === n ? a(t.scale, t.positionX, t.positionY) : I(e, r, n, (function (e) {
                    a(l + c * e, s + d * e, u + p * e)
                }))
            }
        }

        var _ = function (e, t) {
            var n = e.wrapperComponent, r = e.contentComponent, o = e.setup.centerZoomedOut;
            if (!n || !r) throw new Error("Components are not mounted");
            var a = function (e, t, n) {
                var r = e.offsetWidth, o = e.offsetHeight, a = t.offsetWidth * n, i = t.offsetHeight * n;
                return {
                    wrapperWidth: r,
                    wrapperHeight: o,
                    newContentWidth: a,
                    newDiffWidth: r - a,
                    newContentHeight: i,
                    newDiffHeight: o - i
                }
            }(n, r, t), i = a.wrapperWidth, l = a.wrapperHeight, s = function (e, t, n, r, o, a, i) {
                var l = e > t ? n * (i ? 1 : .5) : 0, s = r > o ? a * (i ? 1 : .5) : 0;
                return {minPositionX: e - t - l, maxPositionX: l, minPositionY: r - o - s, maxPositionY: s}
            }(i, a.newContentWidth, a.newDiffWidth, l, a.newContentHeight, a.newDiffHeight, Boolean(o));
            return s
        }, A = function (e, t, n, r) {
            return T(r ? e < t ? t : e > n ? n : e : e, 2)
        }, $ = function (e, t) {
            var n = _(e, t);
            return e.bounds = n, n
        };

        function F(e, t, n, r, o, a, i) {
            var l = n.minPositionX, s = n.minPositionY, u = n.maxPositionX, c = n.maxPositionY, d = 0, p = 0;
            return i && (d = o, p = a), {x: A(e, l - d, u + d, r), y: A(t, s - p, c + p, r)}
        }

        function D(e, t, n, r, o, a) {
            var i = e.transformState, l = i.scale, s = i.positionX, u = i.positionY, c = r - l;
            return "number" != typeof t || "number" != typeof n ? (console.error("Mouse X and Y position were not provided!"), {
                x: s,
                y: u
            }) : F(s - t * c, u - n * c, o, a, 0, 0, null)
        }

        function j(e, t, n, r, o) {
            var a = t - (o ? r : 0);
            return !Number.isNaN(n) && e >= n ? n : !Number.isNaN(t) && e <= a ? a : e
        }

        var W = function (e, t) {
            var n = e.setup.panning.excluded, r = e.isInitialized, o = e.wrapperComponent, a = t.target,
                i = null == o ? void 0 : o.contains(a);
            return !!(r && a && i) && !be(a, n)
        }, B = function (e) {
            var t = e.isInitialized, n = e.isPanning, r = e.setup.panning.disabled;
            return !(!t || !n || r)
        }, H = function (e, t) {
            var n = e.transformState, r = n.positionX, o = n.positionY;
            e.isPanning = !0;
            var a = t.clientX, i = t.clientY;
            e.startCoords = {x: a - r, y: i - o}
        }, V = function (e, t) {
            var n = t.touches, r = e.transformState, o = r.positionX, a = r.positionY;
            if (e.isPanning = !0, 1 === n.length) {
                var i = n[0].clientX, l = n[0].clientY;
                e.startCoords = {x: i - o, y: l - a}
            }
        }, U = function (e, t, n) {
            var r = e.startCoords, o = e.transformState, a = e.setup.panning, i = a.lockAxisX, l = a.lockAxisY,
                s = o.positionX, u = o.positionY;
            if (!r) return {x: s, y: u};
            var c = t - r.x, d = n - r.y;
            return {x: i ? s : c, y: l ? u : d}
        }, K = function (e, t) {
            var n = e.setup, r = e.transformState.scale, o = n.minScale, a = n.disablePadding;
            return t > 0 && r >= o && !a ? t : 0
        }, q = function (e) {
            var t = e.mounted, n = e.setup, r = n.disabled, o = n.velocityAnimation, a = e.transformState.scale;
            return !(o.disabled && !(a > 1) && r && !t)
        }, Y = function (e) {
            var t = e.mounted, n = e.velocity, r = e.bounds, o = e.setup, a = o.disabled, i = o.velocityAnimation,
                l = e.transformState.scale;
            return !(i.disabled && !(l > 1) && a && !t || !n || !r)
        };

        function X(e, t, n, r, o, a, i, l, s, u) {
            if (o) {
                var c;
                if (t > i && n > i) return (c = i + (e - i) * u) > s ? s : c < i ? i : c;
                if (t < a && n < a) return (c = a + (e - a) * u) < l ? l : c > a ? a : c
            }
            return r ? t : A(e, a, i, o)
        }

        function Q(e, t) {
            var n = e.transformState.scale;
            N(e), $(e, n), void 0 !== window.TouchEvent && t instanceof TouchEvent ? V(e, t) : H(e, t)
        }

        function G(e) {
            var t = e.transformState.scale, n = e.setup, r = n.minScale, o = n.alignmentAnimation, a = o.disabled,
                i = o.sizeX, l = o.sizeY, s = o.animationTime, u = o.animationType;
            if (!(a || t < r || !i && !l)) {
                var c = function (e) {
                    var t = e.transformState, n = t.positionX, r = t.positionY, o = t.scale, a = e.setup,
                        i = a.disabled, l = a.limitToBounds, s = a.centerZoomedOut, u = e.wrapperComponent;
                    if (!i && u && e.bounds) {
                        var c = e.bounds, d = c.maxPositionX, p = c.minPositionX, f = c.maxPositionY,
                            m = c.minPositionY, h = n > d || n < p, v = r > f || r < m,
                            g = D(e, n > d ? u.offsetWidth : e.setup.minPositionX || 0, r > f ? u.offsetHeight : e.setup.minPositionY || 0, o, e.bounds, l || s),
                            b = g.x, y = g.y;
                        return {scale: o, positionX: h ? b : n, positionY: v ? y : r}
                    }
                }(e);
                c && L(e, c, s, u)
            }
        }

        function J(e, t, n) {
            var r = e.startCoords, o = e.setup.alignmentAnimation, a = o.sizeX, i = o.sizeY;
            if (r) {
                var l = U(e, t, n), s = l.x, u = l.y, c = K(e, a), d = K(e, i);
                (function (e, t) {
                    if (q(e)) {
                        var n = e.lastMousePosition, r = e.velocityTime, o = e.setup, a = e.wrapperComponent,
                            i = o.velocityAnimation.equalToMove, l = Date.now();
                        if (n && r && a) {
                            var s = function (e, t) {
                                    return t ? Math.min(1, e.offsetWidth / window.innerWidth) : 1
                                }(a, i), u = t.x - n.x, c = t.y - n.y, d = u / s, p = c / s, f = l - r, m = u * u + c * c,
                                h = Math.sqrt(m) / f;
                            e.velocity = {velocityX: d, velocityY: p, total: h}
                        }
                        e.lastMousePosition = t, e.velocityTime = l
                    }
                })(e, {x: s, y: u}), function (e, t, n, r, o) {
                    var a = e.setup.limitToBounds, i = e.wrapperComponent, l = e.bounds, s = e.transformState,
                        u = s.scale, c = s.positionX, d = s.positionY;
                    if (null !== i && null !== l && (t !== c || n !== d)) {
                        var p = F(t, n, l, a, r, o, i), f = p.x, m = p.y;
                        e.setTransformState(u, f, m)
                    }
                }(e, s, u, c, d)
            }
        }

        function ee(e, t, n, r) {
            var o = e.setup, a = o.minScale, i = o.maxScale, l = o.limitToBounds, s = j(T(t, 2), a, i, 0, !1),
                u = D(e, n, r, s, $(e, s), l);
            return {scale: s, positionX: u.x, positionY: u.y}
        }

        function te(e, t, n) {
            var r = e.transformState.scale, o = e.wrapperComponent, a = e.setup, i = a.minScale, l = a.limitToBounds,
                s = a.zoomAnimation, u = s.disabled, c = s.animationTime, d = s.animationType, p = u || r >= i;
            if ((r >= 1 || l) && G(e), !p && o && e.mounted) {
                var f = ee(e, i, t || o.offsetWidth / 2, n || o.offsetHeight / 2);
                f && L(e, f, c, d)
            }
        }

        var ne = function () {
            return ne = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, ne.apply(this, arguments)
        };

        function re(e, t, n) {
            if (n || 2 === arguments.length) for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }

        var oe = {
            disabled: !1,
            minPositionX: null,
            maxPositionX: null,
            minPositionY: null,
            maxPositionY: null,
            minScale: 1,
            maxScale: 8,
            limitToBounds: !0,
            centerZoomedOut: !1,
            centerOnInit: !1,
            disablePadding: !1,
            wheel: {step: .2, disabled: !1, wheelDisabled: !1, touchPadDisabled: !1, activationKeys: [], excluded: []},
            panning: {
                disabled: !1,
                velocityDisabled: !1,
                lockAxisX: !1,
                lockAxisY: !1,
                activationKeys: [],
                excluded: []
            },
            pinch: {step: 5, disabled: !1, excluded: []},
            doubleClick: {
                disabled: !1,
                step: .7,
                mode: "zoomIn",
                animationType: "easeOut",
                animationTime: 200,
                excluded: []
            },
            zoomAnimation: {disabled: !1, size: .4, animationTime: 200, animationType: "easeOut"},
            alignmentAnimation: {
                disabled: !1,
                sizeX: 100,
                sizeY: 100,
                animationTime: 200,
                velocityAlignmentTime: 400,
                animationType: "easeOut"
            },
            velocityAnimation: {
                disabled: !1,
                sensitivity: 1,
                animationTime: 400,
                animationType: "easeOut",
                equalToMove: !0
            }
        }, ae = function (e) {
            var t, n, r, o;
            return {
                previousScale: null !== (t = e.initialScale) && void 0 !== t ? t : 1,
                scale: null !== (n = e.initialScale) && void 0 !== n ? n : 1,
                positionX: null !== (r = e.initialPositionX) && void 0 !== r ? r : 0,
                positionY: null !== (o = e.initialPositionY) && void 0 !== o ? o : 0
            }
        }, ie = function (e) {
            var t = ne({}, oe);
            return Object.keys(e).forEach((function (n) {
                var r = void 0 !== e[n];
                if (void 0 !== oe[n] && r) {
                    var o = Object.prototype.toString.call(oe[n]), a = "[object Object]" === o,
                        i = "[object Array]" === o;
                    t[n] = a ? ne(ne({}, oe[n]), e[n]) : i ? re(re([], oe[n], !0), e[n], !0) : e[n]
                }
            })), t
        }, le = function (e, t, n) {
            var r = e.transformState.scale, o = e.wrapperComponent, a = e.setup, i = a.maxScale, l = a.minScale,
                s = a.zoomAnimation.size;
            if (!o) throw new Error("Wrapper is not mounted");
            var u = r * Math.exp(t * n);
            return j(T(u, 3), l, i, s, !1)
        };

        function se(e, t, n, r, o) {
            var a = e.wrapperComponent, i = e.transformState, l = i.scale, s = i.positionX, u = i.positionY;
            if (!a) return console.error("No WrapperComponent found");
            var c = (a.offsetWidth / 2 - s) / l, d = (a.offsetHeight / 2 - u) / l, p = ee(e, le(e, t, n), c, d);
            if (!p) return console.error("Error during zoom event. New transformation state was not calculated.");
            L(e, p, r, o)
        }

        function ue(e, t, n, r) {
            var o = e.setup, a = e.wrapperComponent, i = o.limitToBounds, l = ae(e.props), s = e.transformState,
                u = s.scale, c = s.positionX, d = s.positionY;
            if (a) {
                var p = _(e, l.scale), f = F(l.positionX, l.positionY, p, i, 0, 0, a),
                    m = {scale: l.scale, positionX: f.x, positionY: f.y};
                u === l.scale && c === l.positionX && d === l.positionY || (null == r || r(), L(e, m, t, n))
            }
        }

        var ce = function (e) {
            return function (t, n, r) {
                void 0 === t && (t = .5), void 0 === n && (n = 300), void 0 === r && (r = "easeOut"), se(e, 1, t, n, r)
            }
        }, de = function (e) {
            return function (t, n, r) {
                void 0 === t && (t = .5), void 0 === n && (n = 300), void 0 === r && (r = "easeOut"), se(e, -1, t, n, r)
            }
        }, pe = function (e) {
            return function (t, n, r, o, a) {
                void 0 === o && (o = 300), void 0 === a && (a = "easeOut");
                var i = e.transformState, l = i.positionX, s = i.positionY, u = i.scale, c = e.wrapperComponent,
                    d = e.contentComponent;
                if (!e.setup.disabled && c && d) {
                    var p = {
                        positionX: Number.isNaN(t) ? l : t,
                        positionY: Number.isNaN(n) ? s : n,
                        scale: Number.isNaN(r) ? u : r
                    };
                    L(e, p, o, a)
                }
            }
        }, fe = function (e) {
            return function (t, n) {
                void 0 === t && (t = 200), void 0 === n && (n = "easeOut"), ue(e, t, n)
            }
        }, me = function (e) {
            return function (t, n, r) {
                void 0 === n && (n = 200), void 0 === r && (r = "easeOut");
                var o = e.transformState, a = e.wrapperComponent, i = e.contentComponent;
                if (a && i) {
                    var l = we(t || o.scale, a, i);
                    L(e, l, n, r)
                }
            }
        }, he = function (e) {
            return function (t, n, r, o) {
                void 0 === r && (r = 600), void 0 === o && (o = "easeOut"), N(e);
                var a = e.wrapperComponent, i = "string" == typeof t ? document.getElementById(t) : t;
                if (a && i && a.contains(i)) {
                    var l = function (e, t, n) {
                        var r = e.wrapperComponent, o = e.contentComponent, a = e.transformState, i = e.setup,
                            l = i.limitToBounds, s = i.minScale, u = i.maxScale;
                        if (!r || !o) return a;
                        var c, d, p, f, m, h, v, g, b = r.getBoundingClientRect(), y = t.getBoundingClientRect(),
                            w = (c = r, d = o, p = a, f = t.getBoundingClientRect(), m = c.getBoundingClientRect(), h = d.getBoundingClientRect(), v = m.x * p.scale, g = m.y * p.scale, {
                                x: (f.x - h.x + v) / p.scale,
                                y: (f.y - h.y + g) / p.scale
                            }), x = w.x, S = w.y, k = y.width / a.scale, C = y.height / a.scale, E = r.offsetWidth / k,
                            Z = r.offsetHeight / C, P = j(n || Math.min(E, Z), s, u, 0, !1), R = (b.width - k * P) / 2,
                            T = (b.height - C * P) / 2,
                            O = F((b.left - x) * P + R, (b.top - S) * P + T, _(e, P), l, 0, 0, r);
                        return {positionX: O.x, positionY: O.y, scale: P}
                    }(e, i, n);
                    L(e, l, r, o)
                }
            }
        }, ve = function (e) {
            return {
                instance: e,
                state: e.transformState,
                zoomIn: ce(e),
                zoomOut: de(e),
                setTransform: pe(e),
                resetTransform: fe(e),
                centerView: me(e),
                zoomToElement: he(e)
            }
        };

        function ge() {
            try {
                return {
                    get passive() {
                        return !1
                    }
                }
            } catch (e) {
                return !1
            }
        }

        var be = function (e, t) {
            var n = e.tagName.toUpperCase();
            return !!t.find((function (e) {
                return e.toUpperCase() === n
            })) || !!t.find((function (t) {
                return e.classList.contains(t)
            }))
        }, ye = function (e) {
            e && clearTimeout(e)
        }, we = function (e, t, n) {
            var r = n.offsetWidth * e, o = n.offsetHeight * e;
            return {scale: e, positionX: (t.offsetWidth - r) / 2, positionY: (t.offsetHeight - o) / 2}
        };

        function xe(e, t, n) {
            var r = t.getBoundingClientRect(), o = 0, a = 0;
            if ("clientX" in e) o = (e.clientX - r.left) / n, a = (e.clientY - r.top) / n; else {
                var i = e.touches[0];
                o = (i.clientX - r.left) / n, a = (i.clientY - r.top) / n
            }
            return (Number.isNaN(o) || Number.isNaN(a)) && console.error("No mouse or touch offset found"), {x: o, y: a}
        }

        var Se = function (e) {
            return Math.sqrt(Math.pow(e.touches[0].pageX - e.touches[1].pageX, 2) + Math.pow(e.touches[0].pageY - e.touches[1].pageY, 2))
        }, ke = function (e, t) {
            var n = e.props.onZoomStop, r = e.setup.doubleClick.animationTime;
            ye(e.doubleClickStopEventTimer), e.doubleClickStopEventTimer = setTimeout((function () {
                e.doubleClickStopEventTimer = null, O(ve(e), t, n)
            }), r)
        }, Ce = function (e) {
            var t = this;
            this.mounted = !0, this.onChangeCallbacks = new Set, this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.startCoords = null, this.lastTouch = null, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.animate = !1, this.animation = null, this.maxBounds = null, this.pressedKeys = {}, this.mount = function () {
                t.initializeWindowEvents()
            }, this.unmount = function () {
                t.cleanupWindowEvents()
            }, this.update = function (e) {
                $(t, t.transformState.scale), t.setup = ie(e)
            }, this.initializeWindowEvents = function () {
                var e, n = ge(), r = null === (e = t.wrapperComponent) || void 0 === e ? void 0 : e.ownerDocument,
                    o = null == r ? void 0 : r.defaultView;
                null == o || o.addEventListener("mousedown", t.onPanningStart, n), null == o || o.addEventListener("mousemove", t.onPanning, n), null == o || o.addEventListener("mouseup", t.onPanningStop, n), null == r || r.addEventListener("mouseleave", t.clearPanning, n), null == o || o.addEventListener("keyup", t.setKeyUnPressed, n), null == o || o.addEventListener("keydown", t.setKeyPressed, n)
            }, this.cleanupWindowEvents = function () {
                var e, n, r = ge(), o = null === (e = t.wrapperComponent) || void 0 === e ? void 0 : e.ownerDocument,
                    a = null == o ? void 0 : o.defaultView;
                null == a || a.removeEventListener("mousedown", t.onPanningStart, r), null == a || a.removeEventListener("mousemove", t.onPanning, r), null == a || a.removeEventListener("mouseup", t.onPanningStop, r), null == o || o.removeEventListener("mouseleave", t.clearPanning, r), null == a || a.removeEventListener("keyup", t.setKeyUnPressed, r), null == a || a.removeEventListener("keydown", t.setKeyPressed, r), document.removeEventListener("mouseleave", t.clearPanning, r), N(t), null === (n = t.observer) || void 0 === n || n.disconnect()
            }, this.handleInitializeWrapperEvents = function (e) {
                var n = ge();
                e.addEventListener("wheel", t.onWheelZoom, n), e.addEventListener("dblclick", t.onDoubleClick, n), e.addEventListener("touchstart", t.onTouchPanningStart, n), e.addEventListener("touchmove", t.onTouchPanning, n), e.addEventListener("touchend", t.onTouchPanningStop, n)
            }, this.handleInitialize = function (e) {
                var n = t.setup.centerOnInit;
                t.applyTransformation(), n && (t.setCenter(), t.observer = new ResizeObserver((function () {
                    var e;
                    t.setCenter(), null === (e = t.observer) || void 0 === e || e.disconnect()
                })), t.observer.observe(e))
            }, this.onWheelZoom = function (e) {
                t.setup.disabled || function (e, t) {
                    var n = e.setup.wheel, r = n.disabled, o = n.wheelDisabled, a = n.touchPadDisabled, i = n.excluded,
                        l = e.isInitialized, s = e.isPanning, u = t.target;
                    return !(!l || s || r || !u || o && !t.ctrlKey || a && t.ctrlKey || be(u, i))
                }(t, e) && t.isPressingKeys(t.setup.wheel.activationKeys) && (function (e, t) {
                    var n = e.props, r = n.onWheelStart, o = n.onZoomStart;
                    e.wheelStopEventTimer || (N(e), O(ve(e), t, r), O(ve(e), t, o))
                }(t, e), function (e, t) {
                    var n = e.props, r = n.onWheel, o = n.onZoom, a = e.contentComponent, i = e.setup,
                        l = e.transformState.scale, s = i.limitToBounds, u = i.centerZoomedOut, c = i.zoomAnimation,
                        d = i.wheel, p = i.disablePadding, f = c.size, m = c.disabled, h = d.step;
                    if (!a) throw new Error("Component not mounted");
                    t.preventDefault(), t.stopPropagation();
                    var v = function (e, t) {
                        var n, r = function (e) {
                            return e ? e.deltaY < 0 ? 1 : -1 : 0
                        }(e);
                        return "number" == typeof (n = null) ? n : r
                    }(t), g = function (e, t, n, r, o) {
                        var a = e.transformState.scale, i = e.wrapperComponent, l = e.setup, s = l.maxScale,
                            u = l.minScale, c = l.zoomAnimation, d = l.disablePadding, p = c.size, f = c.disabled;
                        if (!i) throw new Error("Wrapper is not mounted");
                        var m = !r && !f;
                        return j(T(a + t * (a - a * n) * n, 3), u, s, p, m && !d)
                    }(e, v, h, !t.ctrlKey);
                    if (l !== g) {
                        var b = $(e, g), y = xe(t, a, l), w = s && (m || 0 === f || u || p),
                            x = D(e, y.x, y.y, g, b, w), S = x.x, k = x.y;
                        e.previousWheelEvent = t, e.setTransformState(g, S, k), O(ve(e), t, r), O(ve(e), t, o)
                    }
                }(t, e), function (e, t) {
                    var n = e.props, r = n.onWheelStop, o = n.onZoomStop;
                    ye(e.wheelAnimationTimer), e.wheelAnimationTimer = setTimeout((function () {
                        e.mounted && (te(e, t.x, t.y), e.wheelAnimationTimer = null)
                    }), 100);
                    var a = function (e, t) {
                        var n = e.previousWheelEvent, r = e.transformState.scale, o = e.setup, a = o.maxScale,
                            i = o.minScale;
                        return !!n && (r < a || r > i || Math.sign(n.deltaY) !== Math.sign(t.deltaY) || n.deltaY > 0 && n.deltaY < t.deltaY || n.deltaY < 0 && n.deltaY > t.deltaY || Math.sign(n.deltaY) !== Math.sign(t.deltaY))
                    }(e, t);
                    a && (ye(e.wheelStopEventTimer), e.wheelStopEventTimer = setTimeout((function () {
                        e.mounted && (e.wheelStopEventTimer = null, O(ve(e), t, r), O(ve(e), t, o))
                    }), 160))
                }(t, e))
            }, this.onPanningStart = function (e) {
                var n = t.setup.disabled, r = t.props.onPanningStart;
                n || W(t, e) && t.isPressingKeys(t.setup.panning.activationKeys) && (e.preventDefault(), e.stopPropagation(), N(t), Q(t, e), O(ve(t), e, r))
            }, this.onPanning = function (e) {
                var n = t.setup.disabled, r = t.props.onPanning;
                n || B(t) && t.isPressingKeys(t.setup.panning.activationKeys) && (e.preventDefault(), e.stopPropagation(), J(t, e.clientX, e.clientY), O(ve(t), e, r))
            }, this.onPanningStop = function (e) {
                var n = t.props.onPanningStop;
                t.isPanning && (function (e) {
                    if (e.isPanning) {
                        var t = e.setup.panning.velocityDisabled, n = e.velocity, r = e.wrapperComponent,
                            o = e.contentComponent;
                        e.isPanning = !1, e.animate = !1, e.animation = null;
                        var a = null == r ? void 0 : r.getBoundingClientRect(),
                            i = null == o ? void 0 : o.getBoundingClientRect(), l = (null == a ? void 0 : a.width) || 0,
                            s = (null == a ? void 0 : a.height) || 0, u = (null == i ? void 0 : i.width) || 0,
                            c = (null == i ? void 0 : i.height) || 0, d = l < u || s < c;
                        !t && n && (null == n ? void 0 : n.total) > .1 && d ? function (e) {
                            var t = e.velocity, n = e.bounds, r = e.setup, o = e.wrapperComponent;
                            if (Y(e) && t && n && o) {
                                var a = t.velocityX, i = t.velocityY, l = t.total, s = n.maxPositionX,
                                    u = n.minPositionX, c = n.maxPositionY, d = n.minPositionY, p = r.limitToBounds,
                                    f = r.alignmentAnimation, m = r.zoomAnimation, h = r.panning, v = h.lockAxisY,
                                    g = h.lockAxisX, b = m.animationType, y = f.sizeX, w = f.sizeY,
                                    x = f.velocityAlignmentTime, S = function (e, t) {
                                        var n = e.setup.velocityAnimation, r = n.equalToMove, o = n.animationTime,
                                            a = n.sensitivity;
                                        return r ? o * t * a : o
                                    }(e, l), k = Math.max(S, x), C = K(e, y), E = K(e, w), Z = C * o.offsetWidth / 100,
                                    P = E * o.offsetHeight / 100, R = s + Z, T = u - Z, O = c + P, z = d - P,
                                    N = e.transformState, L = (new Date).getTime();
                                I(e, b, k, (function (t) {
                                    var n = e.transformState, r = n.scale, o = n.positionX, l = n.positionY,
                                        m = ((new Date).getTime() - L) / x,
                                        h = 1 - (0, M[f.animationType])(Math.min(1, m)), b = 1 - t, y = o + a * b,
                                        w = l + i * b, S = X(y, N.positionX, o, g, p, u, s, T, R, h),
                                        k = X(w, N.positionY, l, v, p, d, c, z, O, h);
                                    o === y && l === w || e.setTransformState(r, S, k)
                                }))
                            }
                        }(e) : G(e)
                    }
                }(t), O(ve(t), e, n))
            }, this.onPinchStart = function (e) {
                var n = t.setup.disabled, r = t.props, o = r.onPinchingStart, a = r.onZoomStart;
                n || function (e, t) {
                    var n = e.setup.pinch, r = n.disabled, o = n.excluded, a = e.isInitialized, i = t.target;
                    return !(!a || r || !i || be(i, o))
                }(t, e) && (function (e, t) {
                    var n = Se(t);
                    e.pinchStartDistance = n, e.lastDistance = n, e.pinchStartScale = e.transformState.scale, e.isPanning = !1, N(e)
                }(t, e), N(t), O(ve(t), e, o), O(ve(t), e, a))
            }, this.onPinch = function (e) {
                var n = t.setup.disabled, r = t.props, o = r.onPinching, a = r.onZoom;
                n || function (e) {
                    var t = e.setup.pinch.disabled, n = e.isInitialized, r = e.pinchStartDistance;
                    return !(!n || t || !r)
                }(t) && (e.preventDefault(), e.stopPropagation(), function (e, t) {
                    var n = e.contentComponent, r = e.pinchStartDistance, o = e.transformState.scale, a = e.setup,
                        i = a.limitToBounds, l = a.centerZoomedOut, s = a.zoomAnimation, u = s.disabled, c = s.size;
                    if (null !== r && n) {
                        var d = function (e, t, n) {
                            var r = n.getBoundingClientRect(), o = e.touches, a = T(o[0].clientX - r.left, 5),
                                i = T(o[0].clientY - r.top, 5);
                            return {
                                x: (a + T(o[1].clientX - r.left, 5)) / 2 / t,
                                y: (i + T(o[1].clientY - r.top, 5)) / 2 / t
                            }
                        }(t, o, n);
                        if (Number.isFinite(d.x) && Number.isFinite(d.y)) {
                            var p = Se(t), f = function (e, t) {
                                var n = e.pinchStartScale, r = e.pinchStartDistance, o = e.setup, a = o.maxScale,
                                    i = o.minScale, l = o.zoomAnimation, s = o.disablePadding, u = l.size,
                                    c = l.disabled;
                                if (!n || null === r || !t) throw new Error("Pinch touches distance was not provided");
                                return t < 0 ? e.transformState.scale : j(T(t / r * n, 2), i, a, u, !c && !s)
                            }(e, p);
                            if (f !== o) {
                                var m = $(e, f), h = i && (u || 0 === c || l), v = D(e, d.x, d.y, f, m, h), g = v.x,
                                    b = v.y;
                                e.pinchMidpoint = d, e.lastDistance = p, e.setTransformState(f, g, b)
                            }
                        }
                    }
                }(t, e), O(ve(t), e, o), O(ve(t), e, a))
            }, this.onPinchStop = function (e) {
                var n, r, o = t.props, a = o.onPinchingStop, i = o.onZoomStop;
                t.pinchStartScale && (r = (n = t).pinchMidpoint, n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, te(n, null == r ? void 0 : r.x, null == r ? void 0 : r.y), O(ve(t), e, a), O(ve(t), e, i))
            }, this.onTouchPanningStart = function (e) {
                var n = t.setup.disabled, r = t.props.onPanningStart;
                if (!n && W(t, e)) if (t.lastTouch && +new Date - t.lastTouch < 200 && 1 === e.touches.length) t.onDoubleClick(e); else {
                    t.lastTouch = +new Date, N(t);
                    var o = e.touches, a = 1 === o.length, i = 2 === o.length;
                    a && (N(t), Q(t, e), O(ve(t), e, r)), i && t.onPinchStart(e)
                }
            }, this.onTouchPanning = function (e) {
                var n = t.setup.disabled, r = t.props.onPanning;
                if (t.isPanning && 1 === e.touches.length) {
                    if (n) return;
                    if (!B(t)) return;
                    e.preventDefault(), e.stopPropagation();
                    var o = e.touches[0];
                    J(t, o.clientX, o.clientY), O(ve(t), e, r)
                } else e.touches.length > 1 && t.onPinch(e)
            }, this.onTouchPanningStop = function (e) {
                t.onPanningStop(e), t.onPinchStop(e)
            }, this.onDoubleClick = function (e) {
                t.setup.disabled || function (e, t) {
                    var n = e.isInitialized, r = e.setup, o = e.wrapperComponent, a = r.doubleClick, i = a.disabled,
                        l = a.excluded, s = t.target, u = null == o ? void 0 : o.contains(s);
                    return !(!(n && s && u) || i || be(s, l))
                }(t, e) && function (e, t) {
                    var n = e.setup, r = e.doubleClickStopEventTimer, o = e.transformState, a = e.contentComponent,
                        i = o.scale, l = e.props, s = l.onZoomStart, u = l.onZoom, c = n.doubleClick, d = c.disabled,
                        p = c.mode, f = c.step, m = c.animationTime, h = c.animationType;
                    if (!d && !r) {
                        if ("reset" === p) return function (e, t) {
                            var n = e.props, r = n.onZoomStart, o = n.onZoom, a = e.setup.doubleClick,
                                i = a.animationTime, l = a.animationType;
                            O(ve(e), t, r), ue(e, i, l, (function () {
                                return O(ve(e), t, o)
                            })), ke(e, t)
                        }(e, t);
                        if (!a) return console.error("No ContentComponent found");
                        var v = le(e, "zoomOut" === p ? -1 : 1, f);
                        if (i !== v) {
                            O(ve(e), t, s);
                            var g = xe(t, a, i), b = ee(e, v, g.x, g.y);
                            if (!b) return console.error("Error during zoom event. New transformation state was not calculated.");
                            O(ve(e), t, u), L(e, b, m, h), ke(e, t)
                        }
                    }
                }(t, e)
            }, this.clearPanning = function (e) {
                t.isPanning && t.onPanningStop(e)
            }, this.setKeyPressed = function (e) {
                t.pressedKeys[e.key] = !0
            }, this.setKeyUnPressed = function (e) {
                t.pressedKeys[e.key] = !1
            }, this.isPressingKeys = function (e) {
                return !e.length || Boolean(e.find((function (e) {
                    return t.pressedKeys[e]
                })))
            }, this.setTransformState = function (e, n, r) {
                var o = t.props.onTransformed;
                if (Number.isNaN(e) || Number.isNaN(n) || Number.isNaN(r)) console.error("Detected NaN set state values"); else {
                    e !== t.transformState.scale && (t.transformState.previousScale = t.transformState.scale, t.transformState.scale = e), t.transformState.positionX = n, t.transformState.positionY = r;
                    var a = ve(t);
                    t.onChangeCallbacks.forEach((function (e) {
                        return e(a)
                    })), O(a, {scale: e, positionX: n, positionY: r}, o), t.applyTransformation()
                }
            }, this.setCenter = function () {
                if (t.wrapperComponent && t.contentComponent) {
                    var e = we(t.transformState.scale, t.wrapperComponent, t.contentComponent);
                    t.setTransformState(e.scale, e.positionX, e.positionY)
                }
            }, this.handleTransformStyles = function (e, n, r) {
                return t.props.customTransform ? t.props.customTransform(e, n, r) : function (e, t, n) {
                    return "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")")
                }(e, n, r)
            }, this.applyTransformation = function () {
                if (t.mounted && t.contentComponent) {
                    var e = t.transformState, n = e.scale, r = e.positionX, o = e.positionY,
                        a = t.handleTransformStyles(r, o, n);
                    t.contentComponent.style.transform = a
                }
            }, this.getContext = function () {
                return ve(t)
            }, this.onChange = function (e) {
                return t.onChangeCallbacks.has(e) || t.onChangeCallbacks.add(e), function () {
                    t.onChangeCallbacks.delete(e)
                }
            }, this.init = function (e, n) {
                t.cleanupWindowEvents(), t.wrapperComponent = e, t.contentComponent = n, $(t, t.transformState.scale), t.handleInitializeWrapperEvents(e), t.handleInitialize(n), t.initializeWindowEvents(), t.isInitialized = !0, O(ve(t), void 0, t.props.onInit)
            }, this.props = e, this.setup = ie(this.props), this.transformState = ae(this.props)
        }, Ee = e.createContext(null), Ze = e.forwardRef((function (t, n) {
            var r = (0, e.useState)(0)[1], o = t.children, a = (0, e.useRef)(new Ce(t)).current, i = function (e, t) {
                return "function" == typeof e ? e(t) : e
            }(t.children, ve(a)), l = (0, e.useCallback)((function () {
                "function" == typeof o && r((function (e) {
                    return e + 1
                }))
            }), [o]);
            return (0, e.useImperativeHandle)(n, (function () {
                return ve(a)
            }), [a]), (0, e.useEffect)((function () {
                a.update(t)
            }), [a, t]), (0, e.useEffect)((function () {
                return a.onChange(l)
            }), [a, t, l]), e.createElement(Ee.Provider, {value: a}, i)
        }));
        !function (e, t) {
            void 0 === t && (t = {});
            var n = t.insertAt;
            if (e && "undefined" != typeof document) {
                var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
                o.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
            }
        }(".transform-component-module_wrapper__7HFJe {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__uCDPE {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__uCDPE img {\n  pointer-events: none;\n}\n");
        var Pe = function (t) {
                var n = t.children, r = t.wrapperClass, o = void 0 === r ? "" : r, a = t.contentClass,
                    i = void 0 === a ? "" : a, l = t.wrapperStyle, s = t.contentStyle, u = t.wrapperProps,
                    c = void 0 === u ? {} : u, d = t.contentProps, p = void 0 === d ? {} : d,
                    f = (0, e.useContext)(Ee).init, m = (0, e.useRef)(null), h = (0, e.useRef)(null);
                return (0, e.useEffect)((function () {
                    var e = m.current, t = h.current;
                    null !== e && null !== t && f && f(e, t)
                }), []), e.createElement("div", ne({}, c, {
                    ref: m,
                    className: "react-transform-wrapper ".concat("transform-component-module_wrapper__7HFJe", " ").concat(o),
                    style: l
                }), e.createElement("div", ne({}, p, {
                    ref: h,
                    className: "react-transform-component ".concat("transform-component-module_content__uCDPE", " ").concat(i),
                    style: s
                }), n))
            }, Re = (e.forwardRef((function (t, n) {
                var r, o = (0, e.useRef)(null), a = (0, e.useContext)(Ee);
                return (0, e.useEffect)((function () {
                    return a.onChange((function (e) {
                        o.current && (o.current.style.transform = a.handleTransformStyles(0, 0, 1 / e.state.scale))
                    }))
                }), [a]), e.createElement("div", ne({}, t, {
                    ref: (r = [o, n], function (e) {
                        r.forEach((function (t) {
                            "function" == typeof t ? t(e) : null != t && (t.current = e)
                        }))
                    })
                }))
            })), o(3366)), Te = o(6010), Oe = o(4780), Me = o(1796), ze = o(2077), Ne = o(6122), Ie = o(1705), Le = o(2068),
            _e = o(3511);

        function Ae(e, t) {
            return Ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            }, Ae(e, t)
        }

        function $e(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ae(e, t)
        }

        const Fe = e.createContext(null);

        function De(t, n) {
            var r = Object.create(null);
            return t && e.Children.map(t, (function (e) {
                return e
            })).forEach((function (t) {
                r[t.key] = function (t) {
                    return n && (0, e.isValidElement)(t) ? n(t) : t
                }(t)
            })), r
        }

        function je(e, t, n) {
            return null != n[t] ? n[t] : e.props[t]
        }

        function We(t, n, r) {
            var o = De(t.children), a = function (e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }

                e = e || {}, t = t || {};
                var r, o = Object.create(null), a = [];
                for (var i in e) i in t ? a.length && (o[i] = a, a = []) : a.push(i);
                var l = {};
                for (var s in t) {
                    if (o[s]) for (r = 0; r < o[s].length; r++) {
                        var u = o[s][r];
                        l[o[s][r]] = n(u)
                    }
                    l[s] = n(s)
                }
                for (r = 0; r < a.length; r++) l[a[r]] = n(a[r]);
                return l
            }(n, o);
            return Object.keys(a).forEach((function (i) {
                var l = a[i];
                if ((0, e.isValidElement)(l)) {
                    var s = i in n, u = i in o, c = n[i], d = (0, e.isValidElement)(c) && !c.props.in;
                    !u || s && !d ? u || !s || d ? u && s && (0, e.isValidElement)(c) && (a[i] = (0, e.cloneElement)(l, {
                        onExited: r.bind(null, l),
                        in: c.props.in,
                        exit: je(l, "exit", t),
                        enter: je(l, "enter", t)
                    })) : a[i] = (0, e.cloneElement)(l, {in: !1}) : a[i] = (0, e.cloneElement)(l, {
                        onExited: r.bind(null, l),
                        in: !0,
                        exit: je(l, "exit", t),
                        enter: je(l, "enter", t)
                    })
                }
            })), a
        }

        var Be = Object.values || function (e) {
            return Object.keys(e).map((function (t) {
                return e[t]
            }))
        }, He = function (t) {
            function n(e, n) {
                var r, o = (r = t.call(this, e, n) || this).handleExited.bind(function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(r));
                return r.state = {contextValue: {isMounting: !0}, handleExited: o, firstRender: !0}, r
            }

            $e(n, t);
            var r = n.prototype;
            return r.componentDidMount = function () {
                this.mounted = !0, this.setState({contextValue: {isMounting: !1}})
            }, r.componentWillUnmount = function () {
                this.mounted = !1
            }, n.getDerivedStateFromProps = function (t, n) {
                var r, o, a = n.children, i = n.handleExited;
                return {
                    children: n.firstRender ? (r = t, o = i, De(r.children, (function (t) {
                        return (0, e.cloneElement)(t, {
                            onExited: o.bind(null, t),
                            in: !0,
                            appear: je(t, "appear", r),
                            enter: je(t, "enter", r),
                            exit: je(t, "exit", r)
                        })
                    }))) : We(t, a, i), firstRender: !1
                }
            }, r.handleExited = function (e, t) {
                var n = De(this.props.children);
                e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function (t) {
                    var n = (0, b.Z)({}, t.children);
                    return delete n[e.key], {children: n}
                })))
            }, r.render = function () {
                var t = this.props, n = t.component, r = t.childFactory,
                    o = (0, Re.Z)(t, ["component", "childFactory"]), a = this.state.contextValue,
                    i = Be(this.state.children).map(r);
                return delete o.appear, delete o.enter, delete o.exit, null === n ? e.createElement(Fe.Provider, {value: a}, i) : e.createElement(Fe.Provider, {value: a}, e.createElement(n, o, i))
            }, n
        }(e.Component);
        He.propTypes = {}, He.defaultProps = {
            component: "div", childFactory: function (e) {
                return e
            }
        };
        const Ve = He;
        o(6751), o(8679);
        var Ue = o(444), Ke = o(6797), qe = o(7278), Ye = (0, C.w)((function (t, n) {
            var r = t.styles, o = (0, Ke.O)([r], void 0, (0, e.useContext)(C.T)), a = (0, e.useRef)();
            return (0, qe.j)((function () {
                var e = n.key + "-global", t = new n.sheet.constructor({
                    key: e,
                    nonce: n.sheet.nonce,
                    container: n.sheet.container,
                    speedy: n.sheet.isSpeedy
                }), r = !1, i = document.querySelector('style[data-emotion="' + e + " " + o.name + '"]');
                return n.sheet.tags.length && (t.before = n.sheet.tags[0]), null !== i && (r = !0, i.setAttribute("data-emotion", e), t.hydrate([i])), a.current = [t, r], function () {
                    t.flush()
                }
            }), [n]), (0, qe.j)((function () {
                var e = a.current, t = e[0];
                if (e[1]) e[1] = !1; else {
                    if (void 0 !== o.next && (0, Ue.My)(n, o.next, !0), t.tags.length) {
                        var r = t.tags[t.tags.length - 1].nextElementSibling;
                        t.before = r, t.flush()
                    }
                    n.insert("", o, t, !1)
                }
            }), [n, o.name]), null
        }));

        function Xe() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return (0, Ke.O)(t)
        }

        var Qe = function () {
            var e = Xe.apply(void 0, arguments), t = "animation-" + e.name;
            return {
                name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function () {
                    return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                }
            }
        };
        var Ge = o(1588);
        const Je = (0, Ge.Z)("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
            et = ["center", "classes", "className"];
        let tt, nt, rt, ot, at = e => e;
        const it = Qe(tt || (tt = at`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), lt = Qe(nt || (nt = at`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), st = Qe(rt || (rt = at`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), ut = (0, ze.ZP)("span", {name: "MuiTouchRipple", slot: "Root"})({
                overflow: "hidden",
                pointerEvents: "none",
                position: "absolute",
                zIndex: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: "inherit"
            }), ct = (0, ze.ZP)((function (t) {
                const {
                        className: n,
                        classes: r,
                        pulsate: o = !1,
                        rippleX: a,
                        rippleY: i,
                        rippleSize: l,
                        in: s,
                        onExited: u,
                        timeout: c
                    } = t, [d, p] = e.useState(!1), f = (0, Te.Z)(n, r.ripple, r.rippleVisible, o && r.ripplePulsate),
                    m = {width: l, height: l, top: -l / 2 + i, left: -l / 2 + a},
                    h = (0, Te.Z)(r.child, d && r.childLeaving, o && r.childPulsate);
                return s || d || p(!0), e.useEffect((() => {
                    if (!s && null != u) {
                        const e = setTimeout(u, c);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }), [u, s, c]), (0, S.jsx)("span", {className: f, style: m, children: (0, S.jsx)("span", {className: h})})
            }), {name: "MuiTouchRipple", slot: "Ripple"})(ot || (ot = at`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Je.rippleVisible, it, 550, (({theme: e}) => e.transitions.easing.easeInOut), Je.ripplePulsate, (({theme: e}) => e.transitions.duration.shorter), Je.child, Je.childLeaving, lt, 550, (({theme: e}) => e.transitions.easing.easeInOut), Je.childPulsate, st, (({theme: e}) => e.transitions.easing.easeInOut)),
            dt = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiTouchRipple"}), {
                    center: o = !1,
                    classes: a = {},
                    className: i
                } = r, l = (0, Re.Z)(r, et), [s, u] = e.useState([]), c = e.useRef(0), d = e.useRef(null);
                e.useEffect((() => {
                    d.current && (d.current(), d.current = null)
                }), [s]);
                const p = e.useRef(!1), f = e.useRef(null), m = e.useRef(null), h = e.useRef(null);
                e.useEffect((() => () => {
                    clearTimeout(f.current)
                }), []);
                const v = e.useCallback((e => {
                    const {pulsate: t, rippleX: n, rippleY: r, rippleSize: o, cb: i} = e;
                    u((e => [...e, (0, S.jsx)(ct, {
                        classes: {
                            ripple: (0, Te.Z)(a.ripple, Je.ripple),
                            rippleVisible: (0, Te.Z)(a.rippleVisible, Je.rippleVisible),
                            ripplePulsate: (0, Te.Z)(a.ripplePulsate, Je.ripplePulsate),
                            child: (0, Te.Z)(a.child, Je.child),
                            childLeaving: (0, Te.Z)(a.childLeaving, Je.childLeaving),
                            childPulsate: (0, Te.Z)(a.childPulsate, Je.childPulsate)
                        }, timeout: 550, pulsate: t, rippleX: n, rippleY: r, rippleSize: o
                    }, c.current)])), c.current += 1, d.current = i
                }), [a]), g = e.useCallback(((e = {}, t = {}, n = (() => {
                })) => {
                    const {pulsate: r = !1, center: a = o || t.pulsate, fakeElement: i = !1} = t;
                    if ("mousedown" === (null == e ? void 0 : e.type) && p.current) return void (p.current = !1);
                    "touchstart" === (null == e ? void 0 : e.type) && (p.current = !0);
                    const l = i ? null : h.current,
                        s = l ? l.getBoundingClientRect() : {width: 0, height: 0, left: 0, top: 0};
                    let u, c, d;
                    if (a || void 0 === e || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) u = Math.round(s.width / 2), c = Math.round(s.height / 2); else {
                        const {clientX: t, clientY: n} = e.touches && e.touches.length > 0 ? e.touches[0] : e;
                        u = Math.round(t - s.left), c = Math.round(n - s.top)
                    }
                    if (a) d = Math.sqrt((2 * s.width ** 2 + s.height ** 2) / 3), d % 2 == 0 && (d += 1); else {
                        const e = 2 * Math.max(Math.abs((l ? l.clientWidth : 0) - u), u) + 2,
                            t = 2 * Math.max(Math.abs((l ? l.clientHeight : 0) - c), c) + 2;
                        d = Math.sqrt(e ** 2 + t ** 2)
                    }
                    null != e && e.touches ? null === m.current && (m.current = () => {
                        v({pulsate: r, rippleX: u, rippleY: c, rippleSize: d, cb: n})
                    }, f.current = setTimeout((() => {
                        m.current && (m.current(), m.current = null)
                    }), 80)) : v({pulsate: r, rippleX: u, rippleY: c, rippleSize: d, cb: n})
                }), [o, v]), y = e.useCallback((() => {
                    g({}, {pulsate: !0})
                }), [g]), w = e.useCallback(((e, t) => {
                    if (clearTimeout(f.current), "touchend" === (null == e ? void 0 : e.type) && m.current) return m.current(), m.current = null, void (f.current = setTimeout((() => {
                        w(e, t)
                    })));
                    m.current = null, u((e => e.length > 0 ? e.slice(1) : e)), d.current = t
                }), []);
                return e.useImperativeHandle(n, (() => ({
                    pulsate: y,
                    start: g,
                    stop: w
                })), [y, g, w]), (0, S.jsx)(ut, (0, b.Z)({
                    className: (0, Te.Z)(Je.root, a.root, i),
                    ref: h
                }, l, {children: (0, S.jsx)(Ve, {component: null, exit: !0, children: s})}))
            })), pt = dt;
        var ft = o(4867);

        function mt(e) {
            return (0, ft.Z)("MuiButtonBase", e)
        }

        const ht = (0, Ge.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]),
            vt = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
            gt = (0, ze.ZP)("button", {
                name: "MuiButtonBase",
                slot: "Root",
                overridesResolver: (e, t) => t.root
            })({
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                backgroundColor: "transparent",
                outline: 0,
                border: 0,
                margin: 0,
                borderRadius: 0,
                padding: 0,
                cursor: "pointer",
                userSelect: "none",
                verticalAlign: "middle",
                MozAppearance: "none",
                WebkitAppearance: "none",
                textDecoration: "none",
                color: "inherit",
                "&::-moz-focus-inner": {borderStyle: "none"},
                [`&.${ht.disabled}`]: {pointerEvents: "none", cursor: "default"},
                "@media print": {colorAdjust: "exact"}
            }), bt = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiButtonBase"}), {
                    action: o,
                    centerRipple: a = !1,
                    children: i,
                    className: l,
                    component: s = "button",
                    disabled: u = !1,
                    disableRipple: c = !1,
                    disableTouchRipple: d = !1,
                    focusRipple: p = !1,
                    LinkComponent: f = "a",
                    onBlur: m,
                    onClick: h,
                    onContextMenu: v,
                    onDragLeave: g,
                    onFocus: y,
                    onFocusVisible: w,
                    onKeyDown: x,
                    onKeyUp: k,
                    onMouseDown: C,
                    onMouseLeave: E,
                    onMouseUp: Z,
                    onTouchEnd: P,
                    onTouchMove: R,
                    onTouchStart: T,
                    tabIndex: O = 0,
                    TouchRippleProps: M,
                    touchRippleRef: z,
                    type: N
                } = r, I = (0, Re.Z)(r, vt), L = e.useRef(null), _ = e.useRef(null), A = (0, Ie.Z)(_, z), {
                    isFocusVisibleRef: $,
                    onFocus: F,
                    onBlur: D,
                    ref: j
                } = (0, _e.Z)(), [W, B] = e.useState(!1);
                u && W && B(!1), e.useImperativeHandle(o, (() => ({
                    focusVisible: () => {
                        B(!0), L.current.focus()
                    }
                })), []);
                const [H, V] = e.useState(!1);
                e.useEffect((() => {
                    V(!0)
                }), []);
                const U = H && !c && !u;

                function K(e, t, n = d) {
                    return (0, Le.Z)((r => (t && t(r), !n && _.current && _.current[e](r), !0)))
                }

                e.useEffect((() => {
                    W && p && !c && H && _.current.pulsate()
                }), [c, p, W, H]);
                const q = K("start", C), Y = K("stop", v), X = K("stop", g), Q = K("stop", Z), G = K("stop", (e => {
                    W && e.preventDefault(), E && E(e)
                })), J = K("start", T), ee = K("stop", P), te = K("stop", R), ne = K("stop", (e => {
                    D(e), !1 === $.current && B(!1), m && m(e)
                }), !1), re = (0, Le.Z)((e => {
                    L.current || (L.current = e.currentTarget), F(e), !0 === $.current && (B(!0), w && w(e)), y && y(e)
                })), oe = () => {
                    const e = L.current;
                    return s && "button" !== s && !("A" === e.tagName && e.href)
                }, ae = e.useRef(!1), ie = (0, Le.Z)((e => {
                    p && !ae.current && W && _.current && " " === e.key && (ae.current = !0, _.current.stop(e, (() => {
                        _.current.start(e)
                    }))), e.target === e.currentTarget && oe() && " " === e.key && e.preventDefault(), x && x(e), e.target === e.currentTarget && oe() && "Enter" === e.key && !u && (e.preventDefault(), h && h(e))
                })), le = (0, Le.Z)((e => {
                    p && " " === e.key && _.current && W && !e.defaultPrevented && (ae.current = !1, _.current.stop(e, (() => {
                        _.current.pulsate(e)
                    }))), k && k(e), h && e.target === e.currentTarget && oe() && " " === e.key && !e.defaultPrevented && h(e)
                }));
                let se = s;
                "button" === se && (I.href || I.to) && (se = f);
                const ue = {};
                "button" === se ? (ue.type = void 0 === N ? "button" : N, ue.disabled = u) : (I.href || I.to || (ue.role = "button"), u && (ue["aria-disabled"] = u));
                const ce = (0, Ie.Z)(n, j, L), de = (0, b.Z)({}, r, {
                    centerRipple: a,
                    component: s,
                    disabled: u,
                    disableRipple: c,
                    disableTouchRipple: d,
                    focusRipple: p,
                    tabIndex: O,
                    focusVisible: W
                }), pe = (e => {
                    const {disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o} = e,
                        a = {root: ["root", t && "disabled", n && "focusVisible"]}, i = (0, Oe.Z)(a, mt, o);
                    return n && r && (i.root += ` ${r}`), i
                })(de);
                return (0, S.jsxs)(gt, (0, b.Z)({
                    as: se,
                    className: (0, Te.Z)(pe.root, l),
                    ownerState: de,
                    onBlur: ne,
                    onClick: h,
                    onContextMenu: Y,
                    onFocus: re,
                    onKeyDown: ie,
                    onKeyUp: le,
                    onMouseDown: q,
                    onMouseLeave: G,
                    onMouseUp: Q,
                    onDragLeave: X,
                    onTouchEnd: ee,
                    onTouchMove: te,
                    onTouchStart: J,
                    ref: ce,
                    tabIndex: u ? -1 : O,
                    type: N
                }, ue, I, {children: [i, U ? (0, S.jsx)(pt, (0, b.Z)({ref: A, center: a}, M)) : null]}))
            }));
        var yt = o(8216);

        function wt(e) {
            return (0, ft.Z)("MuiIconButton", e)
        }

        const xt = (0, Ge.Z)("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]),
            St = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"],
            kt = (0, ze.ZP)(bt, {
                name: "MuiIconButton", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, "default" !== n.color && t[`color${(0, yt.Z)(n.color)}`], n.edge && t[`edge${(0, yt.Z)(n.edge)}`], t[`size${(0, yt.Z)(n.size)}`]]
                }
            })((({theme: e, ownerState: t}) => (0, b.Z)({
                textAlign: "center",
                flex: "0 0 auto",
                fontSize: e.typography.pxToRem(24),
                padding: 8,
                borderRadius: "50%",
                overflow: "visible",
                color: (e.vars || e).palette.action.active,
                transition: e.transitions.create("background-color", {duration: e.transitions.duration.shortest})
            }, !t.disableRipple && {
                "&:hover": {
                    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, Me.Fq)(e.palette.action.active, e.palette.action.hoverOpacity),
                    "@media (hover: none)": {backgroundColor: "transparent"}
                }
            }, "start" === t.edge && {marginLeft: "small" === t.size ? -3 : -12}, "end" === t.edge && {marginRight: "small" === t.size ? -3 : -12})), (({
                                                                                                                                                            theme: e,
                                                                                                                                                            ownerState: t
                                                                                                                                                        }) => {
                var n;
                const r = null == (n = (e.vars || e).palette) ? void 0 : n[t.color];
                return (0, b.Z)({}, "inherit" === t.color && {color: "inherit"}, "inherit" !== t.color && "default" !== t.color && (0, b.Z)({color: null == r ? void 0 : r.main}, !t.disableRipple && {"&:hover": (0, b.Z)({}, r && {backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, Me.Fq)(r.main, e.palette.action.hoverOpacity)}, {"@media (hover: none)": {backgroundColor: "transparent"}})}), "small" === t.size && {
                    padding: 5,
                    fontSize: e.typography.pxToRem(18)
                }, "large" === t.size && {
                    padding: 12,
                    fontSize: e.typography.pxToRem(28)
                }, {
                    [`&.${xt.disabled}`]: {
                        backgroundColor: "transparent",
                        color: (e.vars || e).palette.action.disabled
                    }
                })
            })), Ct = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiIconButton"}), {
                        edge: r = !1,
                        children: o,
                        className: a,
                        color: i = "default",
                        disabled: l = !1,
                        disableFocusRipple: s = !1,
                        size: u = "medium"
                    } = n, c = (0, Re.Z)(n, St),
                    d = (0, b.Z)({}, n, {edge: r, color: i, disabled: l, disableFocusRipple: s, size: u}), p = (e => {
                        const {classes: t, disabled: n, color: r, edge: o, size: a} = e,
                            i = {root: ["root", n && "disabled", "default" !== r && `color${(0, yt.Z)(r)}`, o && `edge${(0, yt.Z)(o)}`, `size${(0, yt.Z)(a)}`]};
                        return (0, Oe.Z)(i, wt, t)
                    })(d);
                return (0, S.jsx)(kt, (0, b.Z)({
                    className: (0, Te.Z)(p.root, a),
                    centerRipple: !0,
                    focusRipple: !s,
                    disabled: l,
                    ref: t,
                    ownerState: d
                }, c, {children: o}))
            })), Et = function (e) {
                return "string" == typeof e
            };

        function Zt(e, t, n) {
            return void 0 === e || Et(e) ? t : (0, b.Z)({}, t, {ownerState: (0, b.Z)({}, t.ownerState, n)})
        }

        var Pt = o(247);

        function Rt() {
            return (0, E.Z)(Pt.Z)
        }

        var Tt = o(3935);
        var Ot = "unmounted", Mt = "exited", zt = "entering", Nt = "entered", It = "exiting", Lt = function (t) {
            function n(e, n) {
                var r;
                r = t.call(this, e, n) || this;
                var o, a = n && !n.isMounting ? e.enter : e.appear;
                return r.appearStatus = null, e.in ? a ? (o = Mt, r.appearStatus = zt) : o = Nt : o = e.unmountOnExit || e.mountOnEnter ? Ot : Mt, r.state = {status: o}, r.nextCallback = null, r
            }

            $e(n, t), n.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === Ot ? {status: Mt} : null
            };
            var r = n.prototype;
            return r.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus)
            }, r.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== zt && n !== Nt && (t = zt) : n !== zt && n !== Nt || (t = It)
                }
                this.updateStatus(!1, t)
            }, r.componentWillUnmount = function () {
                this.cancelNextCallback()
            }, r.getTimeouts = function () {
                var e, t, n, r = this.props.timeout;
                return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                    exit: e,
                    enter: t,
                    appear: n
                }
            }, r.updateStatus = function (e, t) {
                if (void 0 === e && (e = !1), null !== t) if (this.cancelNextCallback(), t === zt) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var n = this.props.nodeRef ? this.props.nodeRef.current : Tt.findDOMNode(this);
                        n && function (e) {
                            e.scrollTop
                        }(n)
                    }
                    this.performEnter(e)
                } else this.performExit(); else this.props.unmountOnExit && this.state.status === Mt && this.setState({status: Ot})
            }, r.performEnter = function (e) {
                var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e,
                    o = this.props.nodeRef ? [r] : [Tt.findDOMNode(this), r], a = o[0], i = o[1],
                    l = this.getTimeouts(), s = r ? l.appear : l.enter;
                e || n ? (this.props.onEnter(a, i), this.safeSetState({status: zt}, (function () {
                    t.props.onEntering(a, i), t.onTransitionEnd(s, (function () {
                        t.safeSetState({status: Nt}, (function () {
                            t.props.onEntered(a, i)
                        }))
                    }))
                }))) : this.safeSetState({status: Nt}, (function () {
                    t.props.onEntered(a)
                }))
            }, r.performExit = function () {
                var e = this, t = this.props.exit, n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : Tt.findDOMNode(this);
                t ? (this.props.onExit(r), this.safeSetState({status: It}, (function () {
                    e.props.onExiting(r), e.onTransitionEnd(n.exit, (function () {
                        e.safeSetState({status: Mt}, (function () {
                            e.props.onExited(r)
                        }))
                    }))
                }))) : this.safeSetState({status: Mt}, (function () {
                    e.props.onExited(r)
                }))
            }, r.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
            }, r.safeSetState = function (e, t) {
                t = this.setNextCallback(t), this.setState(e, t)
            }, r.setNextCallback = function (e) {
                var t = this, n = !0;
                return this.nextCallback = function (r) {
                    n && (n = !1, t.nextCallback = null, e(r))
                }, this.nextCallback.cancel = function () {
                    n = !1
                }, this.nextCallback
            }, r.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : Tt.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (n && !r) {
                    if (this.props.addEndListener) {
                        var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = o[0], i = o[1];
                        this.props.addEndListener(a, i)
                    }
                    null != e && setTimeout(this.nextCallback, e)
                } else setTimeout(this.nextCallback, 0)
            }, r.render = function () {
                var t = this.state.status;
                if (t === Ot) return null;
                var n = this.props, r = n.children,
                    o = (n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef, (0, Re.Z)(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return e.createElement(Fe.Provider, {value: null}, "function" == typeof r ? r(t, o) : e.cloneElement(e.Children.only(r), o))
            }, n
        }(e.Component);

        function _t() {
        }

        Lt.contextType = Fe, Lt.propTypes = {}, Lt.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: _t,
            onEntering: _t,
            onEntered: _t,
            onExit: _t,
            onExiting: _t,
            onExited: _t
        }, Lt.UNMOUNTED = Ot, Lt.EXITED = Mt, Lt.ENTERING = zt, Lt.ENTERED = Nt, Lt.EXITING = It;
        const At = Lt, $t = e => e.scrollTop;

        function Ft(e, t) {
            var n, r;
            const {timeout: o, easing: a, style: i = {}} = e;
            return {
                duration: null != (n = i.transitionDuration) ? n : "number" == typeof o ? o : o[t.mode] || 0,
                easing: null != (r = i.transitionTimingFunction) ? r : "object" == typeof a ? a[t.mode] : a,
                delay: i.transitionDelay
            }
        }

        const Dt = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

        function jt(e) {
            return `scale(${e}, ${e ** 2})`
        }

        const Wt = {entering: {opacity: 1, transform: jt(1)}, entered: {opacity: 1, transform: "none"}},
            Bt = "undefined" != typeof navigator && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
            Ht = e.forwardRef((function (t, n) {
                const {
                        addEndListener: r,
                        appear: o = !0,
                        children: a,
                        easing: i,
                        in: l,
                        onEnter: s,
                        onEntered: u,
                        onEntering: c,
                        onExit: d,
                        onExited: p,
                        onExiting: f,
                        style: m,
                        timeout: h = "auto",
                        TransitionComponent: v = At
                    } = t, g = (0, Re.Z)(t, Dt), y = e.useRef(), w = e.useRef(), x = Rt(), k = e.useRef(null),
                    C = (0, Ie.Z)(k, a.ref, n), E = e => t => {
                        if (e) {
                            const n = k.current;
                            void 0 === t ? e(n) : e(n, t)
                        }
                    }, Z = E(c), P = E(((e, t) => {
                        $t(e);
                        const {duration: n, delay: r, easing: o} = Ft({style: m, timeout: h, easing: i}, {mode: "enter"});
                        let a;
                        "auto" === h ? (a = x.transitions.getAutoHeightDuration(e.clientHeight), w.current = a) : a = n, e.style.transition = [x.transitions.create("opacity", {
                            duration: a,
                            delay: r
                        }), x.transitions.create("transform", {
                            duration: Bt ? a : .666 * a,
                            delay: r,
                            easing: o
                        })].join(","), s && s(e, t)
                    })), R = E(u), T = E(f), O = E((e => {
                        const {duration: t, delay: n, easing: r} = Ft({style: m, timeout: h, easing: i}, {mode: "exit"});
                        let o;
                        "auto" === h ? (o = x.transitions.getAutoHeightDuration(e.clientHeight), w.current = o) : o = t, e.style.transition = [x.transitions.create("opacity", {
                            duration: o,
                            delay: n
                        }), x.transitions.create("transform", {
                            duration: Bt ? o : .666 * o,
                            delay: Bt ? n : n || .333 * o,
                            easing: r
                        })].join(","), e.style.opacity = 0, e.style.transform = jt(.75), d && d(e)
                    })), M = E(p);
                return e.useEffect((() => () => {
                    clearTimeout(y.current)
                }), []), (0, S.jsx)(v, (0, b.Z)({
                    appear: o,
                    in: l,
                    nodeRef: k,
                    onEnter: P,
                    onEntered: R,
                    onEntering: Z,
                    onExit: O,
                    onExited: M,
                    onExiting: T,
                    addEndListener: e => {
                        "auto" === h && (y.current = setTimeout(e, w.current || 0)), r && r(k.current, e)
                    },
                    timeout: "auto" === h ? null : h
                }, g, {
                    children: (t, n) => e.cloneElement(a, (0, b.Z)({
                        style: (0, b.Z)({
                            opacity: 0,
                            transform: jt(.75),
                            visibility: "exited" !== t || l ? void 0 : "hidden"
                        }, Wt[t], m, a.props.style), ref: C
                    }, n))
                }))
            }));
        Ht.muiSupportAuto = !0;
        const Vt = Ht;
        var Ut = o(67), Kt = o(6600), qt = o(7094);

        function Yt(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }

        function Xt(e) {
            return e instanceof Yt(e).Element || e instanceof Element
        }

        function Qt(e) {
            return e instanceof Yt(e).HTMLElement || e instanceof HTMLElement
        }

        function Gt(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof Yt(e).ShadowRoot || e instanceof ShadowRoot)
        }

        var Jt = Math.max, en = Math.min, tn = Math.round;

        function nn() {
            var e = navigator.userAgentData;
            return null != e && e.brands ? e.brands.map((function (e) {
                return e.brand + "/" + e.version
            })).join(" ") : navigator.userAgent
        }

        function rn() {
            return !/^((?!chrome|android).)*safari/i.test(nn())
        }

        function on(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            var r = e.getBoundingClientRect(), o = 1, a = 1;
            t && Qt(e) && (o = e.offsetWidth > 0 && tn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && tn(r.height) / e.offsetHeight || 1);
            var i = (Xt(e) ? Yt(e) : window).visualViewport, l = !rn() && n,
                s = (r.left + (l && i ? i.offsetLeft : 0)) / o, u = (r.top + (l && i ? i.offsetTop : 0)) / a,
                c = r.width / o, d = r.height / a;
            return {width: c, height: d, top: u, right: s + c, bottom: u + d, left: s, x: s, y: u}
        }

        function an(e) {
            var t = Yt(e);
            return {scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset}
        }

        function ln(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }

        function sn(e) {
            return ((Xt(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }

        function un(e) {
            return on(sn(e)).left + an(e).scrollLeft
        }

        function cn(e) {
            return Yt(e).getComputedStyle(e)
        }

        function dn(e) {
            var t = cn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + o + r)
        }

        function pn(e, t, n) {
            void 0 === n && (n = !1);
            var r, o, a = Qt(t), i = Qt(t) && function (e) {
                var t = e.getBoundingClientRect(), n = tn(t.width) / e.offsetWidth || 1,
                    r = tn(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== r
            }(t), l = sn(t), s = on(e, i, n), u = {scrollLeft: 0, scrollTop: 0}, c = {x: 0, y: 0};
            return (a || !a && !n) && (("body" !== ln(t) || dn(l)) && (u = (r = t) !== Yt(r) && Qt(r) ? {
                scrollLeft: (o = r).scrollLeft,
                scrollTop: o.scrollTop
            } : an(r)), Qt(t) ? ((c = on(t, !0)).x += t.clientLeft, c.y += t.clientTop) : l && (c.x = un(l))), {
                x: s.left + u.scrollLeft - c.x,
                y: s.top + u.scrollTop - c.y,
                width: s.width,
                height: s.height
            }
        }

        function fn(e) {
            var t = on(e), n = e.offsetWidth, r = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: r
            }
        }

        function mn(e) {
            return "html" === ln(e) ? e : e.assignedSlot || e.parentNode || (Gt(e) ? e.host : null) || sn(e)
        }

        function hn(e) {
            return ["html", "body", "#document"].indexOf(ln(e)) >= 0 ? e.ownerDocument.body : Qt(e) && dn(e) ? e : hn(mn(e))
        }

        function vn(e, t) {
            var n;
            void 0 === t && (t = []);
            var r = hn(e), o = r === (null == (n = e.ownerDocument) ? void 0 : n.body), a = Yt(r),
                i = o ? [a].concat(a.visualViewport || [], dn(r) ? r : []) : r, l = t.concat(i);
            return o ? l : l.concat(vn(mn(i)))
        }

        function gn(e) {
            return ["table", "td", "th"].indexOf(ln(e)) >= 0
        }

        function bn(e) {
            return Qt(e) && "fixed" !== cn(e).position ? e.offsetParent : null
        }

        function yn(e) {
            for (var t = Yt(e), n = bn(e); n && gn(n) && "static" === cn(n).position;) n = bn(n);
            return n && ("html" === ln(n) || "body" === ln(n) && "static" === cn(n).position) ? t : n || function (e) {
                var t = /firefox/i.test(nn());
                if (/Trident/i.test(nn()) && Qt(e) && "fixed" === cn(e).position) return null;
                var n = mn(e);
                for (Gt(n) && (n = n.host); Qt(n) && ["html", "body"].indexOf(ln(n)) < 0;) {
                    var r = cn(n);
                    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }

        var wn = "top", xn = "bottom", Sn = "right", kn = "left", Cn = "auto", En = [wn, xn, Sn, kn], Zn = "start",
            Pn = "end", Rn = "clippingParents", Tn = "viewport", On = "popper", Mn = "reference",
            zn = En.reduce((function (e, t) {
                return e.concat([t + "-" + Zn, t + "-" + Pn])
            }), []), Nn = [].concat(En, [Cn]).reduce((function (e, t) {
                return e.concat([t, t + "-" + Zn, t + "-" + Pn])
            }), []),
            In = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

        function Ln(e) {
            var t = new Map, n = new Set, r = [];

            function o(e) {
                n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
                    if (!n.has(e)) {
                        var r = t.get(e);
                        r && o(r)
                    }
                })), r.push(e)
            }

            return e.forEach((function (e) {
                t.set(e.name, e)
            })), e.forEach((function (e) {
                n.has(e.name) || o(e)
            })), r
        }

        var _n = {placement: "bottom", modifiers: [], strategy: "absolute"};

        function An() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return !t.some((function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            }))
        }

        function $n(e) {
            void 0 === e && (e = {});
            var t = e, n = t.defaultModifiers, r = void 0 === n ? [] : n, o = t.defaultOptions,
                a = void 0 === o ? _n : o;
            return function (e, t, n) {
                void 0 === n && (n = a);
                var o, i, l = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, _n, a),
                    modifiersData: {},
                    elements: {reference: e, popper: t},
                    attributes: {},
                    styles: {}
                }, s = [], u = !1, c = {
                    state: l, setOptions: function (n) {
                        var o = "function" == typeof n ? n(l.options) : n;
                        d(), l.options = Object.assign({}, a, l.options, o), l.scrollParents = {
                            reference: Xt(e) ? vn(e) : e.contextElement ? vn(e.contextElement) : [],
                            popper: vn(t)
                        };
                        var i, u, p = function (e) {
                            var t = Ln(e);
                            return In.reduce((function (e, n) {
                                return e.concat(t.filter((function (e) {
                                    return e.phase === n
                                })))
                            }), [])
                        }((i = [].concat(r, l.options.modifiers), u = i.reduce((function (e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign({}, n, t, {
                                options: Object.assign({}, n.options, t.options),
                                data: Object.assign({}, n.data, t.data)
                            }) : t, e
                        }), {}), Object.keys(u).map((function (e) {
                            return u[e]
                        }))));
                        return l.orderedModifiers = p.filter((function (e) {
                            return e.enabled
                        })), l.orderedModifiers.forEach((function (e) {
                            var t = e.name, n = e.options, r = void 0 === n ? {} : n, o = e.effect;
                            if ("function" == typeof o) {
                                var a = o({state: l, name: t, instance: c, options: r});
                                s.push(a || function () {
                                })
                            }
                        })), c.update()
                    }, forceUpdate: function () {
                        if (!u) {
                            var e = l.elements, t = e.reference, n = e.popper;
                            if (An(t, n)) {
                                l.rects = {
                                    reference: pn(t, yn(n), "fixed" === l.options.strategy),
                                    popper: fn(n)
                                }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function (e) {
                                    return l.modifiersData[e.name] = Object.assign({}, e.data)
                                }));
                                for (var r = 0; r < l.orderedModifiers.length; r++) if (!0 !== l.reset) {
                                    var o = l.orderedModifiers[r], a = o.fn, i = o.options, s = void 0 === i ? {} : i,
                                        d = o.name;
                                    "function" == typeof a && (l = a({state: l, options: s, name: d, instance: c}) || l)
                                } else l.reset = !1, r = -1
                            }
                        }
                    }, update: (o = function () {
                        return new Promise((function (e) {
                            c.forceUpdate(), e(l)
                        }))
                    }, function () {
                        return i || (i = new Promise((function (e) {
                            Promise.resolve().then((function () {
                                i = void 0, e(o())
                            }))
                        }))), i
                    }), destroy: function () {
                        d(), u = !0
                    }
                };
                if (!An(e, t)) return c;

                function d() {
                    s.forEach((function (e) {
                        return e()
                    })), s = []
                }

                return c.setOptions(n).then((function (e) {
                    !u && n.onFirstUpdate && n.onFirstUpdate(e)
                })), c
            }
        }

        var Fn = {passive: !0};
        const Dn = {
            name: "eventListeners", enabled: !0, phase: "write", fn: function () {
            }, effect: function (e) {
                var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = void 0 === o || o, i = r.resize,
                    l = void 0 === i || i, s = Yt(t.elements.popper),
                    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return a && u.forEach((function (e) {
                    e.addEventListener("scroll", n.update, Fn)
                })), l && s.addEventListener("resize", n.update, Fn), function () {
                    a && u.forEach((function (e) {
                        e.removeEventListener("scroll", n.update, Fn)
                    })), l && s.removeEventListener("resize", n.update, Fn)
                }
            }, data: {}
        };

        function jn(e) {
            return e.split("-")[0]
        }

        function Wn(e) {
            return e.split("-")[1]
        }

        function Bn(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }

        function Hn(e) {
            var t, n = e.reference, r = e.element, o = e.placement, a = o ? jn(o) : null, i = o ? Wn(o) : null,
                l = n.x + n.width / 2 - r.width / 2, s = n.y + n.height / 2 - r.height / 2;
            switch (a) {
                case wn:
                    t = {x: l, y: n.y - r.height};
                    break;
                case xn:
                    t = {x: l, y: n.y + n.height};
                    break;
                case Sn:
                    t = {x: n.x + n.width, y: s};
                    break;
                case kn:
                    t = {x: n.x - r.width, y: s};
                    break;
                default:
                    t = {x: n.x, y: n.y}
            }
            var u = a ? Bn(a) : null;
            if (null != u) {
                var c = "y" === u ? "height" : "width";
                switch (i) {
                    case Zn:
                        t[u] = t[u] - (n[c] / 2 - r[c] / 2);
                        break;
                    case Pn:
                        t[u] = t[u] + (n[c] / 2 - r[c] / 2)
                }
            }
            return t
        }

        var Vn = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

        function Un(e) {
            var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position,
                s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, p = i.x,
                f = void 0 === p ? 0 : p, m = i.y, h = void 0 === m ? 0 : m,
                v = "function" == typeof c ? c({x: f, y: h}) : {x: f, y: h};
            f = v.x, h = v.y;
            var g = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), y = kn, w = wn, x = window;
            if (u) {
                var S = yn(n), k = "clientHeight", C = "clientWidth";
                S === Yt(n) && "static" !== cn(S = sn(n)).position && "absolute" === l && (k = "scrollHeight", C = "scrollWidth"), (o === wn || (o === kn || o === Sn) && a === Pn) && (w = xn, h -= (d && S === x && x.visualViewport ? x.visualViewport.height : S[k]) - r.height, h *= s ? 1 : -1), o !== kn && (o !== wn && o !== xn || a !== Pn) || (y = Sn, f -= (d && S === x && x.visualViewport ? x.visualViewport.width : S[C]) - r.width, f *= s ? 1 : -1)
            }
            var E, Z = Object.assign({position: l}, u && Vn), P = !0 === c ? function (e) {
                var t = e.x, n = e.y, r = window.devicePixelRatio || 1;
                return {x: tn(t * r) / r || 0, y: tn(n * r) / r || 0}
            }({x: f, y: h}) : {x: f, y: h};
            return f = P.x, h = P.y, s ? Object.assign({}, Z, ((E = {})[w] = b ? "0" : "", E[y] = g ? "0" : "", E.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + h + "px)" : "translate3d(" + f + "px, " + h + "px, 0)", E)) : Object.assign({}, Z, ((t = {})[w] = b ? h + "px" : "", t[y] = g ? f + "px" : "", t.transform = "", t))
        }

        const Kn = {
            name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) {
                var t = e.state, n = e.options, r = n.gpuAcceleration, o = void 0 === r || r, a = n.adaptive,
                    i = void 0 === a || a, l = n.roundOffsets, s = void 0 === l || l, u = {
                        placement: jn(t.placement),
                        variation: Wn(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: o,
                        isFixed: "fixed" === t.options.strategy
                    };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Un(Object.assign({}, u, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: i,
                    roundOffsets: s
                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Un(Object.assign({}, u, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: s
                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {"data-popper-placement": t.placement})
            }, data: {}
        }, qn = {
            name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) {
                var t = e.state, n = e.options, r = e.name, o = n.offset, a = void 0 === o ? [0, 0] : o,
                    i = Nn.reduce((function (e, n) {
                        return e[n] = function (e, t, n) {
                            var r = jn(e), o = [kn, wn].indexOf(r) >= 0 ? -1 : 1,
                                a = "function" == typeof n ? n(Object.assign({}, t, {placement: e})) : n, i = a[0],
                                l = a[1];
                            return i = i || 0, l = (l || 0) * o, [kn, Sn].indexOf(r) >= 0 ? {x: l, y: i} : {x: i, y: l}
                        }(n, t.rects, a), e
                    }), {}), l = i[t.placement], s = l.x, u = l.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i
            }
        };
        var Yn = {left: "right", right: "left", bottom: "top", top: "bottom"};

        function Xn(e) {
            return e.replace(/left|right|bottom|top/g, (function (e) {
                return Yn[e]
            }))
        }

        var Qn = {start: "end", end: "start"};

        function Gn(e) {
            return e.replace(/start|end/g, (function (e) {
                return Qn[e]
            }))
        }

        function Jn(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && Gt(n)) {
                var r = t;
                do {
                    if (r && e.isSameNode(r)) return !0;
                    r = r.parentNode || r.host
                } while (r)
            }
            return !1
        }

        function er(e) {
            return Object.assign({}, e, {left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height})
        }

        function tr(e, t, n) {
            return t === Tn ? er(function (e, t) {
                var n = Yt(e), r = sn(e), o = n.visualViewport, a = r.clientWidth, i = r.clientHeight, l = 0, s = 0;
                if (o) {
                    a = o.width, i = o.height;
                    var u = rn();
                    (u || !u && "fixed" === t) && (l = o.offsetLeft, s = o.offsetTop)
                }
                return {width: a, height: i, x: l + un(e), y: s}
            }(e, n)) : Xt(t) ? function (e, t) {
                var n = on(e, !1, "fixed" === t);
                return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
            }(t, n) : er(function (e) {
                var t, n = sn(e), r = an(e), o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    a = Jt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                    i = Jt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                    l = -r.scrollLeft + un(e), s = -r.scrollTop;
                return "rtl" === cn(o || n).direction && (l += Jt(n.clientWidth, o ? o.clientWidth : 0) - a), {
                    width: a,
                    height: i,
                    x: l,
                    y: s
                }
            }(sn(e)))
        }

        function nr(e) {
            return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, e)
        }

        function rr(e, t) {
            return t.reduce((function (t, n) {
                return t[n] = e, t
            }), {})
        }

        function or(e, t) {
            void 0 === t && (t = {});
            var n = t, r = n.placement, o = void 0 === r ? e.placement : r, a = n.strategy,
                i = void 0 === a ? e.strategy : a, l = n.boundary, s = void 0 === l ? Rn : l, u = n.rootBoundary,
                c = void 0 === u ? Tn : u, d = n.elementContext, p = void 0 === d ? On : d, f = n.altBoundary,
                m = void 0 !== f && f, h = n.padding, v = void 0 === h ? 0 : h,
                g = nr("number" != typeof v ? v : rr(v, En)), b = p === On ? Mn : On, y = e.rects.popper,
                w = e.elements[m ? b : p], x = function (e, t, n, r) {
                    var o = "clippingParents" === t ? function (e) {
                        var t = vn(mn(e)), n = ["absolute", "fixed"].indexOf(cn(e).position) >= 0 && Qt(e) ? yn(e) : e;
                        return Xt(n) ? t.filter((function (e) {
                            return Xt(e) && Jn(e, n) && "body" !== ln(e)
                        })) : []
                    }(e) : [].concat(t), a = [].concat(o, [n]), i = a[0], l = a.reduce((function (t, n) {
                        var o = tr(e, n, r);
                        return t.top = Jt(o.top, t.top), t.right = en(o.right, t.right), t.bottom = en(o.bottom, t.bottom), t.left = Jt(o.left, t.left), t
                    }), tr(e, i, r));
                    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
                }(Xt(w) ? w : w.contextElement || sn(e.elements.popper), s, c, i), S = on(e.elements.reference),
                k = Hn({reference: S, element: y, strategy: "absolute", placement: o}), C = er(Object.assign({}, y, k)),
                E = p === On ? C : S, Z = {
                    top: x.top - E.top + g.top,
                    bottom: E.bottom - x.bottom + g.bottom,
                    left: x.left - E.left + g.left,
                    right: E.right - x.right + g.right
                }, P = e.modifiersData.offset;
            if (p === On && P) {
                var R = P[o];
                Object.keys(Z).forEach((function (e) {
                    var t = [Sn, xn].indexOf(e) >= 0 ? 1 : -1, n = [wn, xn].indexOf(e) >= 0 ? "y" : "x";
                    Z[e] += R[n] * t
                }))
            }
            return Z
        }

        const ar = {
            name: "flip", enabled: !0, phase: "main", fn: function (e) {
                var t = e.state, n = e.options, r = e.name;
                if (!t.modifiersData[r]._skip) {
                    for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, l = void 0 === i || i, s = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.flipVariations, m = void 0 === f || f, h = n.allowedAutoPlacements, v = t.options.placement, g = jn(v), b = s || (g !== v && m ? function (e) {
                        if (jn(e) === Cn) return [];
                        var t = Xn(e);
                        return [Gn(e), t, Gn(t)]
                    }(v) : [Xn(v)]), y = [v].concat(b).reduce((function (e, n) {
                        return e.concat(jn(n) === Cn ? function (e, t) {
                            void 0 === t && (t = {});
                            var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, i = n.padding,
                                l = n.flipVariations, s = n.allowedAutoPlacements, u = void 0 === s ? Nn : s, c = Wn(r),
                                d = c ? l ? zn : zn.filter((function (e) {
                                    return Wn(e) === c
                                })) : En, p = d.filter((function (e) {
                                    return u.indexOf(e) >= 0
                                }));
                            0 === p.length && (p = d);
                            var f = p.reduce((function (t, n) {
                                return t[n] = or(e, {placement: n, boundary: o, rootBoundary: a, padding: i})[jn(n)], t
                            }), {});
                            return Object.keys(f).sort((function (e, t) {
                                return f[e] - f[t]
                            }))
                        }(t, {
                            placement: n,
                            boundary: c,
                            rootBoundary: d,
                            padding: u,
                            flipVariations: m,
                            allowedAutoPlacements: h
                        }) : n)
                    }), []), w = t.rects.reference, x = t.rects.popper, S = new Map, k = !0, C = y[0], E = 0; E < y.length; E++) {
                        var Z = y[E], P = jn(Z), R = Wn(Z) === Zn, T = [wn, xn].indexOf(P) >= 0,
                            O = T ? "width" : "height",
                            M = or(t, {placement: Z, boundary: c, rootBoundary: d, altBoundary: p, padding: u}),
                            z = T ? R ? Sn : kn : R ? xn : wn;
                        w[O] > x[O] && (z = Xn(z));
                        var N = Xn(z), I = [];
                        if (a && I.push(M[P] <= 0), l && I.push(M[z] <= 0, M[N] <= 0), I.every((function (e) {
                            return e
                        }))) {
                            C = Z, k = !1;
                            break
                        }
                        S.set(Z, I)
                    }
                    if (k) for (var L = function (e) {
                        var t = y.find((function (t) {
                            var n = S.get(t);
                            if (n) return n.slice(0, e).every((function (e) {
                                return e
                            }))
                        }));
                        if (t) return C = t, "break"
                    }, _ = m ? 3 : 1; _ > 0 && "break" !== L(_); _--) ;
                    t.placement !== C && (t.modifiersData[r]._skip = !0, t.placement = C, t.reset = !0)
                }
            }, requiresIfExists: ["offset"], data: {_skip: !1}
        };

        function ir(e, t, n) {
            return Jt(e, en(t, n))
        }

        const lr = {
            name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) {
                var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = void 0 === o || o, i = n.altAxis,
                    l = void 0 !== i && i, s = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding,
                    p = n.tether, f = void 0 === p || p, m = n.tetherOffset, h = void 0 === m ? 0 : m,
                    v = or(t, {boundary: s, rootBoundary: u, padding: d, altBoundary: c}), g = jn(t.placement),
                    b = Wn(t.placement), y = !b, w = Bn(g), x = "x" === w ? "y" : "x",
                    S = t.modifiersData.popperOffsets, k = t.rects.reference, C = t.rects.popper,
                    E = "function" == typeof h ? h(Object.assign({}, t.rects, {placement: t.placement})) : h,
                    Z = "number" == typeof E ? {mainAxis: E, altAxis: E} : Object.assign({mainAxis: 0, altAxis: 0}, E),
                    P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, R = {x: 0, y: 0};
                if (S) {
                    if (a) {
                        var T, O = "y" === w ? wn : kn, M = "y" === w ? xn : Sn, z = "y" === w ? "height" : "width",
                            N = S[w], I = N + v[O], L = N - v[M], _ = f ? -C[z] / 2 : 0, A = b === Zn ? k[z] : C[z],
                            $ = b === Zn ? -C[z] : -k[z], F = t.elements.arrow,
                            D = f && F ? fn(F) : {width: 0, height: 0},
                            j = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, W = j[O], B = j[M], H = ir(0, k[z], D[z]),
                            V = y ? k[z] / 2 - _ - H - W - Z.mainAxis : A - H - W - Z.mainAxis,
                            U = y ? -k[z] / 2 + _ + H + B + Z.mainAxis : $ + H + B + Z.mainAxis,
                            K = t.elements.arrow && yn(t.elements.arrow),
                            q = K ? "y" === w ? K.clientTop || 0 : K.clientLeft || 0 : 0,
                            Y = null != (T = null == P ? void 0 : P[w]) ? T : 0, X = N + U - Y,
                            Q = ir(f ? en(I, N + V - Y - q) : I, N, f ? Jt(L, X) : L);
                        S[w] = Q, R[w] = Q - N
                    }
                    if (l) {
                        var G, J = "x" === w ? wn : kn, ee = "x" === w ? xn : Sn, te = S[x],
                            ne = "y" === x ? "height" : "width", re = te + v[J], oe = te - v[ee],
                            ae = -1 !== [wn, kn].indexOf(g), ie = null != (G = null == P ? void 0 : P[x]) ? G : 0,
                            le = ae ? re : te - k[ne] - C[ne] - ie + Z.altAxis,
                            se = ae ? te + k[ne] + C[ne] - ie - Z.altAxis : oe, ue = f && ae ? function (e, t, n) {
                                var r = ir(e, t, n);
                                return r > n ? n : r
                            }(le, te, se) : ir(f ? le : re, te, f ? se : oe);
                        S[x] = ue, R[x] = ue - te
                    }
                    t.modifiersData[r] = R
                }
            }, requiresIfExists: ["offset"]
        };
        const sr = {
            name: "arrow", enabled: !0, phase: "main", fn: function (e) {
                var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets,
                    l = jn(n.placement), s = Bn(l), u = [kn, Sn].indexOf(l) >= 0 ? "height" : "width";
                if (a && i) {
                    var c = function (e, t) {
                            return nr("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {placement: t.placement})) : e) ? e : rr(e, En))
                        }(o.padding, n), d = fn(a), p = "y" === s ? wn : kn, f = "y" === s ? xn : Sn,
                        m = n.rects.reference[u] + n.rects.reference[s] - i[s] - n.rects.popper[u],
                        h = i[s] - n.rects.reference[s], v = yn(a),
                        g = v ? "y" === s ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = m / 2 - h / 2, y = c[p],
                        w = g - d[u] - c[f], x = g / 2 - d[u] / 2 + b, S = ir(y, x, w), k = s;
                    n.modifiersData[r] = ((t = {})[k] = S, t.centerOffset = S - x, t)
                }
            }, effect: function (e) {
                var t = e.state, n = e.options.element, r = void 0 === n ? "[data-popper-arrow]" : n;
                null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Jn(t.elements.popper, r) && (t.elements.arrow = r)
            }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
        };

        function ur(e, t, n) {
            return void 0 === n && (n = {x: 0, y: 0}), {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }

        function cr(e) {
            return [wn, Sn, xn, kn].some((function (t) {
                return e[t] >= 0
            }))
        }

        var dr = $n({
            defaultModifiers: [Dn, {
                name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) {
                    var t = e.state, n = e.name;
                    t.modifiersData[n] = Hn({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                }, data: {}
            }, Kn, {
                name: "applyStyles", enabled: !0, phase: "write", fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach((function (e) {
                        var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e];
                        Qt(o) && ln(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function (e) {
                            var t = r[e];
                            !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                        })))
                    }))
                }, effect: function (e) {
                    var t = e.state, n = {
                        popper: {position: t.options.strategy, left: "0", top: "0", margin: "0"},
                        arrow: {position: "absolute"},
                        reference: {}
                    };
                    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
                        Object.keys(t.elements).forEach((function (e) {
                            var r = t.elements[e], o = t.attributes[e] || {},
                                a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                                    return e[t] = "", e
                                }), {});
                            Qt(r) && ln(r) && (Object.assign(r.style, a), Object.keys(o).forEach((function (e) {
                                r.removeAttribute(e)
                            })))
                        }))
                    }
                }, requires: ["computeStyles"]
            }, qn, ar, lr, sr, {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function (e) {
                    var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper,
                        a = t.modifiersData.preventOverflow, i = or(t, {elementContext: "reference"}),
                        l = or(t, {altBoundary: !0}), s = ur(i, r), u = ur(l, o, a), c = cr(s), d = cr(u);
                    t.modifiersData[n] = {
                        referenceClippingOffsets: s,
                        popperEscapeOffsets: u,
                        isReferenceHidden: c,
                        hasPopperEscaped: d
                    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-reference-hidden": c,
                        "data-popper-escaped": d
                    })
                }
            }]
        }), pr = o(7960);
        const fr = e.forwardRef((function (t, n) {
            const {children: r, container: o, disablePortal: a = !1} = t, [i, l] = e.useState(null),
                s = (0, Ut.Z)(e.isValidElement(r) ? r.ref : null, n);
            if ((0, Kt.Z)((() => {
                a || l(function (e) {
                    return "function" == typeof e ? e() : e
                }(o) || document.body)
            }), [o, a]), (0, Kt.Z)((() => {
                if (i && !a) return (0, pr.Z)(n, i), () => {
                    (0, pr.Z)(n, null)
                }
            }), [n, i, a]), a) {
                if (e.isValidElement(r)) {
                    const t = {ref: s};
                    return e.cloneElement(r, t)
                }
                return (0, S.jsx)(e.Fragment, {children: r})
            }
            return (0, S.jsx)(e.Fragment, {children: i ? Tt.createPortal(r, i) : i})
        }));

        function mr(e) {
            return (0, ft.Z)("MuiPopperUnstyled", e)
        }

        function hr(e) {
            if (void 0 === e) return {};
            const t = {};
            return Object.keys(e).filter((t => !(t.match(/^on[A-Z]/) && "function" == typeof e[t]))).forEach((n => {
                t[n] = e[n]
            })), t
        }

        function vr(e, t) {
            return "function" == typeof e ? e(t) : e
        }

        (0, Ge.Z)("MuiPopperUnstyled", ["root"]);
        const gr = ["elementType", "externalSlotProps", "ownerState"];

        function br(e) {
            var t;
            const {elementType: n, externalSlotProps: r, ownerState: o} = e, a = (0, Re.Z)(e, gr),
                i = vr(r, o), {props: l, internalRef: s} = function (e) {
                    const {
                        getSlotProps: t,
                        additionalProps: n,
                        externalSlotProps: r,
                        externalForwardedProps: o,
                        className: a
                    } = e;
                    if (!t) {
                        const e = (0, Te.Z)(null == o ? void 0 : o.className, null == r ? void 0 : r.className, a, null == n ? void 0 : n.className),
                            t = (0, b.Z)({}, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style),
                            i = (0, b.Z)({}, n, o, r);
                        return e.length > 0 && (i.className = e), Object.keys(t).length > 0 && (i.style = t), {
                            props: i,
                            internalRef: void 0
                        }
                    }
                    const i = function (e, t = []) {
                            if (void 0 === e) return {};
                            const n = {};
                            return Object.keys(e).filter((n => n.match(/^on[A-Z]/) && "function" == typeof e[n] && !t.includes(n))).forEach((t => {
                                n[t] = e[t]
                            })), n
                        }((0, b.Z)({}, o, r)), l = hr(r), s = hr(o), u = t(i),
                        c = (0, Te.Z)(null == u ? void 0 : u.className, null == n ? void 0 : n.className, a, null == o ? void 0 : o.className, null == r ? void 0 : r.className),
                        d = (0, b.Z)({}, null == u ? void 0 : u.style, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style),
                        p = (0, b.Z)({}, u, n, s, l);
                    return c.length > 0 && (p.className = c), Object.keys(d).length > 0 && (p.style = d), {
                        props: p,
                        internalRef: u.ref
                    }
                }((0, b.Z)({}, a, {externalSlotProps: i})),
                u = (0, Ut.Z)(s, null == i ? void 0 : i.ref, null == (t = e.additionalProps) ? void 0 : t.ref);
            return Zt(n, (0, b.Z)({}, l, {ref: u}), o)
        }

        const yr = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps"],
            wr = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];

        function xr(e) {
            return "function" == typeof e ? e() : e
        }

        const Sr = {}, kr = e.forwardRef((function (t, n) {
            var r;
            const {
                    anchorEl: o,
                    children: a,
                    component: i,
                    direction: l,
                    disablePortal: s,
                    modifiers: u,
                    open: c,
                    ownerState: d,
                    placement: p,
                    popperOptions: f,
                    popperRef: m,
                    slotProps: h = {},
                    slots: v = {},
                    TransitionProps: g
                } = t, y = (0, Re.Z)(t, yr), w = e.useRef(null), x = (0, Ut.Z)(w, n), k = e.useRef(null),
                C = (0, Ut.Z)(k, m), E = e.useRef(C);
            (0, Kt.Z)((() => {
                E.current = C
            }), [C]), e.useImperativeHandle(m, (() => k.current), []);
            const Z = function (e, t) {
                if ("ltr" === t) return e;
                switch (e) {
                    case"bottom-end":
                        return "bottom-start";
                    case"bottom-start":
                        return "bottom-end";
                    case"top-end":
                        return "top-start";
                    case"top-start":
                        return "top-end";
                    default:
                        return e
                }
            }(p, l), [P, R] = e.useState(Z), [T, O] = e.useState(xr(o));
            e.useEffect((() => {
                k.current && k.current.forceUpdate()
            })), e.useEffect((() => {
                o && O(xr(o))
            }), [o]), (0, Kt.Z)((() => {
                if (!T || !c) return;
                let e = [{name: "preventOverflow", options: {altBoundary: s}}, {
                    name: "flip",
                    options: {altBoundary: s}
                }, {
                    name: "onUpdate", enabled: !0, phase: "afterWrite", fn: ({state: e}) => {
                        R(e.placement)
                    }
                }];
                null != u && (e = e.concat(u)), f && null != f.modifiers && (e = e.concat(f.modifiers));
                const t = dr(T, w.current, (0, b.Z)({placement: Z}, f, {modifiers: e}));
                return E.current(t), () => {
                    t.destroy(), E.current(null)
                }
            }), [T, s, u, c, f, Z]);
            const M = {placement: P};
            null !== g && (M.TransitionProps = g);
            const z = (0, Oe.Z)({root: ["root"]}, mr, {}), N = null != (r = null != i ? i : v.root) ? r : "div",
                I = br({
                    elementType: N,
                    externalSlotProps: h.root,
                    externalForwardedProps: y,
                    additionalProps: {role: "tooltip", ref: x},
                    ownerState: (0, b.Z)({}, t, d),
                    className: z.root
                });
            return (0, S.jsx)(N, (0, b.Z)({}, I, {children: "function" == typeof a ? a(M) : a}))
        })), Cr = e.forwardRef((function (t, n) {
            const {
                anchorEl: r,
                children: o,
                container: a,
                direction: i = "ltr",
                disablePortal: l = !1,
                keepMounted: s = !1,
                modifiers: u,
                open: c,
                placement: d = "bottom",
                popperOptions: p = Sr,
                popperRef: f,
                style: m,
                transition: h = !1,
                slotProps: v = {},
                slots: g = {}
            } = t, y = (0, Re.Z)(t, wr), [w, x] = e.useState(!0);
            if (!s && !c && (!h || w)) return null;
            let k;
            if (a) k = a; else if (r) {
                const e = xr(r);
                k = e && void 0 !== e.nodeType ? (0, qt.Z)(e).body : (0, qt.Z)(null).body
            }
            const C = c || !s || h && !w ? void 0 : "none", E = h ? {
                in: c, onEnter: () => {
                    x(!1)
                }, onExited: () => {
                    x(!0)
                }
            } : void 0;
            return (0, S.jsx)(fr, {
                disablePortal: l,
                container: k,
                children: (0, S.jsx)(kr, (0, b.Z)({
                    anchorEl: r,
                    direction: i,
                    disablePortal: l,
                    modifiers: u,
                    ref: n,
                    open: h ? !w : c,
                    placement: d,
                    popperOptions: p,
                    popperRef: f,
                    slotProps: v,
                    slots: g
                }, y, {
                    style: (0, b.Z)({position: "fixed", top: 0, left: 0, display: C}, m),
                    TransitionProps: E,
                    children: o
                }))
            })
        }));
        var Er = o(4168);
        const Zr = ["components", "componentsProps", "slots", "slotProps"],
            Pr = (0, ze.ZP)(Cr, {name: "MuiPopper", slot: "Root", overridesResolver: (e, t) => t.root})({}),
            Rr = e.forwardRef((function (e, t) {
                var n;
                const r = (0, Er.Z)(), o = (0, Ne.Z)({props: e, name: "MuiPopper"}), {
                        components: a,
                        componentsProps: i,
                        slots: l,
                        slotProps: s
                    } = o, u = (0, Re.Z)(o, Zr),
                    c = null != (n = null == l ? void 0 : l.root) ? n : null == a ? void 0 : a.Root;
                return (0, S.jsx)(Pr, (0, b.Z)({
                    direction: null == r ? void 0 : r.direction,
                    slots: {root: c},
                    slotProps: null != s ? s : i
                }, u, {ref: t}))
            }));
        var Tr = o(7909), Or = o(2893);

        function Mr(e) {
            return (0, ft.Z)("MuiTooltip", e)
        }

        const zr = (0, Ge.Z)("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]),
            Nr = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"],
            Ir = (0, ze.ZP)(Rr, {
                name: "MuiTooltip", slot: "Popper", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose]
                }
            })((({theme: e, ownerState: t, open: n}) => (0, b.Z)({
                zIndex: (e.vars || e).zIndex.tooltip,
                pointerEvents: "none"
            }, !t.disableInteractive && {pointerEvents: "auto"}, !n && {pointerEvents: "none"}, t.arrow && {
                [`&[data-popper-placement*="bottom"] .${zr.arrow}`]: {
                    top: 0,
                    marginTop: "-0.71em",
                    "&::before": {transformOrigin: "0 100%"}
                },
                [`&[data-popper-placement*="top"] .${zr.arrow}`]: {
                    bottom: 0,
                    marginBottom: "-0.71em",
                    "&::before": {transformOrigin: "100% 0"}
                },
                [`&[data-popper-placement*="right"] .${zr.arrow}`]: (0, b.Z)({}, t.isRtl ? {
                    right: 0,
                    marginRight: "-0.71em"
                } : {left: 0, marginLeft: "-0.71em"}, {
                    height: "1em",
                    width: "0.71em",
                    "&::before": {transformOrigin: "100% 100%"}
                }),
                [`&[data-popper-placement*="left"] .${zr.arrow}`]: (0, b.Z)({}, t.isRtl ? {
                    left: 0,
                    marginLeft: "-0.71em"
                } : {right: 0, marginRight: "-0.71em"}, {
                    height: "1em",
                    width: "0.71em",
                    "&::before": {transformOrigin: "0 0"}
                })
            }))), Lr = (0, ze.ZP)("div", {
                name: "MuiTooltip", slot: "Tooltip", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${(0, yt.Z)(n.placement.split("-")[0])}`]]
                }
            })((({
                     theme: e,
                     ownerState: t
                 }) => (0, b.Z)({
                backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : (0, Me.Fq)(e.palette.grey[700], .92),
                borderRadius: (e.vars || e).shape.borderRadius,
                color: (e.vars || e).palette.common.white,
                fontFamily: e.typography.fontFamily,
                padding: "4px 8px",
                fontSize: e.typography.pxToRem(11),
                maxWidth: 300,
                margin: 2,
                wordWrap: "break-word",
                fontWeight: e.typography.fontWeightMedium
            }, t.arrow && {position: "relative", margin: 0}, t.touch && {
                padding: "8px 16px",
                fontSize: e.typography.pxToRem(14),
                lineHeight: (16 / 14, Math.round(114285.71428571428) / 1e5 + "em"),
                fontWeight: e.typography.fontWeightRegular
            }, {
                [`.${zr.popper}[data-popper-placement*="left"] &`]: (0, b.Z)({transformOrigin: "right center"}, t.isRtl ? (0, b.Z)({marginLeft: "14px"}, t.touch && {marginLeft: "24px"}) : (0, b.Z)({marginRight: "14px"}, t.touch && {marginRight: "24px"})),
                [`.${zr.popper}[data-popper-placement*="right"] &`]: (0, b.Z)({transformOrigin: "left center"}, t.isRtl ? (0, b.Z)({marginRight: "14px"}, t.touch && {marginRight: "24px"}) : (0, b.Z)({marginLeft: "14px"}, t.touch && {marginLeft: "24px"})),
                [`.${zr.popper}[data-popper-placement*="top"] &`]: (0, b.Z)({
                    transformOrigin: "center bottom",
                    marginBottom: "14px"
                }, t.touch && {marginBottom: "24px"}),
                [`.${zr.popper}[data-popper-placement*="bottom"] &`]: (0, b.Z)({
                    transformOrigin: "center top",
                    marginTop: "14px"
                }, t.touch && {marginTop: "24px"})
            }))), _r = (0, ze.ZP)("span", {
                name: "MuiTooltip",
                slot: "Arrow",
                overridesResolver: (e, t) => t.arrow
            })((({theme: e}) => ({
                overflow: "hidden",
                position: "absolute",
                width: "1em",
                height: "0.71em",
                boxSizing: "border-box",
                color: e.vars ? e.vars.palette.Tooltip.bg : (0, Me.Fq)(e.palette.grey[700], .9),
                "&::before": {
                    content: '""',
                    margin: "auto",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "currentColor",
                    transform: "rotate(45deg)"
                }
            })));
        let Ar = !1, $r = null, Fr = {x: 0, y: 0};

        function Dr(e, t) {
            return n => {
                t && t(n), e(n)
            }
        }

        const jr = e.forwardRef((function (t, n) {
            var r, o, a, i, l, s, u, c, d, p, f, m, h, v, g, y, w, x, k;
            const C = (0, Ne.Z)({props: t, name: "MuiTooltip"}), {
                    arrow: E = !1,
                    children: Z,
                    components: P = {},
                    componentsProps: R = {},
                    describeChild: T = !1,
                    disableFocusListener: O = !1,
                    disableHoverListener: M = !1,
                    disableInteractive: z = !1,
                    disableTouchListener: N = !1,
                    enterDelay: I = 100,
                    enterNextDelay: L = 0,
                    enterTouchDelay: _ = 700,
                    followCursor: A = !1,
                    id: $,
                    leaveDelay: F = 0,
                    leaveTouchDelay: D = 1500,
                    onClose: j,
                    onOpen: W,
                    open: B,
                    placement: H = "bottom",
                    PopperComponent: V,
                    PopperProps: U = {},
                    slotProps: K = {},
                    slots: q = {},
                    title: Y,
                    TransitionComponent: X = Vt,
                    TransitionProps: Q
                } = C, G = (0, Re.Z)(C, Nr), J = Rt(),
                ee = "rtl" === J.direction, [te, ne] = e.useState(), [re, oe] = e.useState(null), ae = e.useRef(!1),
                ie = z || A, le = e.useRef(), se = e.useRef(), ue = e.useRef(),
                ce = e.useRef(), [de, pe] = (0, Or.Z)({controlled: B, default: !1, name: "Tooltip", state: "open"});
            let fe = de;
            const me = (0, Tr.Z)($), he = e.useRef(), ve = e.useCallback((() => {
                void 0 !== he.current && (document.body.style.WebkitUserSelect = he.current, he.current = void 0), clearTimeout(ce.current)
            }), []);
            e.useEffect((() => () => {
                clearTimeout(le.current), clearTimeout(se.current), clearTimeout(ue.current), ve()
            }), [ve]);
            const ge = e => {
                    clearTimeout($r), Ar = !0, pe(!0), W && !fe && W(e)
                }, be = (0, Le.Z)((e => {
                    clearTimeout($r), $r = setTimeout((() => {
                        Ar = !1
                    }), 800 + F), pe(!1), j && fe && j(e), clearTimeout(le.current), le.current = setTimeout((() => {
                        ae.current = !1
                    }), J.transitions.duration.shortest)
                })), ye = e => {
                    ae.current && "touchstart" !== e.type || (te && te.removeAttribute("title"), clearTimeout(se.current), clearTimeout(ue.current), I || Ar && L ? se.current = setTimeout((() => {
                        ge(e)
                    }), Ar ? L : I) : ge(e))
                }, we = e => {
                    clearTimeout(se.current), clearTimeout(ue.current), ue.current = setTimeout((() => {
                        be(e)
                    }), F)
                }, {isFocusVisibleRef: xe, onBlur: Se, onFocus: ke, ref: Ce} = (0, _e.Z)(), [, Ee] = e.useState(!1),
                Ze = e => {
                    Se(e), !1 === xe.current && (Ee(!1), we(e))
                }, Pe = e => {
                    te || ne(e.currentTarget), ke(e), !0 === xe.current && (Ee(!0), ye(e))
                }, Me = e => {
                    ae.current = !0;
                    const t = Z.props;
                    t.onTouchStart && t.onTouchStart(e)
                }, ze = ye, Ae = we;
            e.useEffect((() => {
                if (fe) return document.addEventListener("keydown", e), () => {
                    document.removeEventListener("keydown", e)
                };

                function e(e) {
                    "Escape" !== e.key && "Esc" !== e.key || be(e)
                }
            }), [be, fe]);
            const $e = (0, Ie.Z)(Z.ref, Ce, ne, n);
            Y || 0 === Y || (fe = !1);
            const Fe = e.useRef(), De = {}, je = "string" == typeof Y;
            T ? (De.title = fe || !je || M ? null : Y, De["aria-describedby"] = fe ? me : null) : (De["aria-label"] = je ? Y : null, De["aria-labelledby"] = fe && !je ? me : null);
            const We = (0, b.Z)({}, De, G, Z.props, {
                className: (0, Te.Z)(G.className, Z.props.className),
                onTouchStart: Me,
                ref: $e
            }, A ? {
                onMouseMove: e => {
                    const t = Z.props;
                    t.onMouseMove && t.onMouseMove(e), Fr = {
                        x: e.clientX,
                        y: e.clientY
                    }, Fe.current && Fe.current.update()
                }
            } : {}), Be = {};
            N || (We.onTouchStart = e => {
                Me(e), clearTimeout(ue.current), clearTimeout(le.current), ve(), he.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ce.current = setTimeout((() => {
                    document.body.style.WebkitUserSelect = he.current, ye(e)
                }), _)
            }, We.onTouchEnd = e => {
                Z.props.onTouchEnd && Z.props.onTouchEnd(e), ve(), clearTimeout(ue.current), ue.current = setTimeout((() => {
                    be(e)
                }), D)
            }), M || (We.onMouseOver = Dr(ze, We.onMouseOver), We.onMouseLeave = Dr(Ae, We.onMouseLeave), ie || (Be.onMouseOver = ze, Be.onMouseLeave = Ae)), O || (We.onFocus = Dr(Pe, We.onFocus), We.onBlur = Dr(Ze, We.onBlur), ie || (Be.onFocus = Pe, Be.onBlur = Ze));
            const He = e.useMemo((() => {
                    var e;
                    let t = [{name: "arrow", enabled: Boolean(re), options: {element: re, padding: 4}}];
                    return null != (e = U.popperOptions) && e.modifiers && (t = t.concat(U.popperOptions.modifiers)), (0, b.Z)({}, U.popperOptions, {modifiers: t})
                }), [re, U]), Ve = (0, b.Z)({}, C, {
                    isRtl: ee,
                    arrow: E,
                    disableInteractive: ie,
                    placement: H,
                    PopperComponentProp: V,
                    touch: ae.current
                }), Ue = (e => {
                    const {classes: t, disableInteractive: n, arrow: r, touch: o, placement: a} = e, i = {
                        popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
                        tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${(0, yt.Z)(a.split("-")[0])}`],
                        arrow: ["arrow"]
                    };
                    return (0, Oe.Z)(i, Mr, t)
                })(Ve), Ke = null != (r = null != (o = q.popper) ? o : P.Popper) ? r : Ir,
                qe = null != (a = null != (i = null != (l = q.transition) ? l : P.Transition) ? i : X) ? a : Vt,
                Ye = null != (s = null != (u = q.tooltip) ? u : P.Tooltip) ? s : Lr,
                Xe = null != (c = null != (d = q.arrow) ? d : P.Arrow) ? c : _r,
                Qe = Zt(Ke, (0, b.Z)({}, U, null != (p = K.popper) ? p : R.popper, {className: (0, Te.Z)(Ue.popper, null == U ? void 0 : U.className, null == (f = null != (m = K.popper) ? m : R.popper) ? void 0 : f.className)}), Ve),
                Ge = Zt(qe, (0, b.Z)({}, Q, null != (h = K.transition) ? h : R.transition), Ve),
                Je = Zt(Ye, (0, b.Z)({}, null != (v = K.tooltip) ? v : R.tooltip, {className: (0, Te.Z)(Ue.tooltip, null == (g = null != (y = K.tooltip) ? y : R.tooltip) ? void 0 : g.className)}), Ve),
                et = Zt(Xe, (0, b.Z)({}, null != (w = K.arrow) ? w : R.arrow, {className: (0, Te.Z)(Ue.arrow, null == (x = null != (k = K.arrow) ? k : R.arrow) ? void 0 : x.className)}), Ve);
            return (0, S.jsxs)(e.Fragment, {
                children: [e.cloneElement(Z, We), (0, S.jsx)(Ke, (0, b.Z)({
                    as: null != V ? V : Rr,
                    placement: H,
                    anchorEl: A ? {
                        getBoundingClientRect: () => ({
                            top: Fr.y,
                            left: Fr.x,
                            right: Fr.x,
                            bottom: Fr.y,
                            width: 0,
                            height: 0
                        })
                    } : te,
                    popperRef: Fe,
                    open: !!te && fe,
                    id: me,
                    transition: !0
                }, Be, Qe, {
                    popperOptions: He,
                    children: ({TransitionProps: e}) => (0, S.jsx)(qe, (0, b.Z)({timeout: J.transitions.duration.shorter}, e, Ge, {children: (0, S.jsxs)(Ye, (0, b.Z)({}, Je, {children: [Y, E ? (0, S.jsx)(Xe, (0, b.Z)({}, et, {ref: oe})) : null]}))}))
                }))]
            })
        }));
        var Wr = o(7925);

        function Br(e) {
            return (0, ft.Z)("MuiButton", e)
        }

        const Hr = (0, Ge.Z)("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
            Vr = e.createContext({}),
            Ur = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
            Kr = e => (0, b.Z)({}, "small" === e.size && {"& > *:nth-of-type(1)": {fontSize: 18}}, "medium" === e.size && {"& > *:nth-of-type(1)": {fontSize: 20}}, "large" === e.size && {"& > *:nth-of-type(1)": {fontSize: 22}}),
            qr = (0, ze.ZP)(bt, {
                shouldForwardProp: e => (0, ze.FO)(e) || "classes" === e,
                name: "MuiButton",
                slot: "Root",
                overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, t[n.variant], t[`${n.variant}${(0, yt.Z)(n.color)}`], t[`size${(0, yt.Z)(n.size)}`], t[`${n.variant}Size${(0, yt.Z)(n.size)}`], "inherit" === n.color && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth]
                }
            })((({theme: e, ownerState: t}) => {
                var n, r;
                return (0, b.Z)({}, e.typography.button, {
                    minWidth: 64,
                    padding: "6px 16px",
                    borderRadius: (e.vars || e).shape.borderRadius,
                    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {duration: e.transitions.duration.short}),
                    "&:hover": (0, b.Z)({
                        textDecoration: "none",
                        backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, Me.Fq)(e.palette.text.primary, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {backgroundColor: "transparent"}
                    }, "text" === t.variant && "inherit" !== t.color && {
                        backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, Me.Fq)(e.palette[t.color].main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {backgroundColor: "transparent"}
                    }, "outlined" === t.variant && "inherit" !== t.color && {
                        border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                        backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, Me.Fq)(e.palette[t.color].main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {backgroundColor: "transparent"}
                    }, "contained" === t.variant && {
                        backgroundColor: (e.vars || e).palette.grey.A100,
                        boxShadow: (e.vars || e).shadows[4],
                        "@media (hover: none)": {
                            boxShadow: (e.vars || e).shadows[2],
                            backgroundColor: (e.vars || e).palette.grey[300]
                        }
                    }, "contained" === t.variant && "inherit" !== t.color && {
                        backgroundColor: (e.vars || e).palette[t.color].dark,
                        "@media (hover: none)": {backgroundColor: (e.vars || e).palette[t.color].main}
                    }),
                    "&:active": (0, b.Z)({}, "contained" === t.variant && {boxShadow: (e.vars || e).shadows[8]}),
                    [`&.${Hr.focusVisible}`]: (0, b.Z)({}, "contained" === t.variant && {boxShadow: (e.vars || e).shadows[6]}),
                    [`&.${Hr.disabled}`]: (0, b.Z)({color: (e.vars || e).palette.action.disabled}, "outlined" === t.variant && {border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`}, "contained" === t.variant && {
                        color: (e.vars || e).palette.action.disabled,
                        boxShadow: (e.vars || e).shadows[0],
                        backgroundColor: (e.vars || e).palette.action.disabledBackground
                    })
                }, "text" === t.variant && {padding: "6px 8px"}, "text" === t.variant && "inherit" !== t.color && {color: (e.vars || e).palette[t.color].main}, "outlined" === t.variant && {
                    padding: "5px 15px",
                    border: "1px solid currentColor"
                }, "outlined" === t.variant && "inherit" !== t.color && {
                    color: (e.vars || e).palette[t.color].main,
                    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${(0, Me.Fq)(e.palette[t.color].main, .5)}`
                }, "contained" === t.variant && {
                    color: e.vars ? e.vars.palette.text.primary : null == (n = (r = e.palette).getContrastText) ? void 0 : n.call(r, e.palette.grey[300]),
                    backgroundColor: (e.vars || e).palette.grey[300],
                    boxShadow: (e.vars || e).shadows[2]
                }, "contained" === t.variant && "inherit" !== t.color && {
                    color: (e.vars || e).palette[t.color].contrastText,
                    backgroundColor: (e.vars || e).palette[t.color].main
                }, "inherit" === t.color && {
                    color: "inherit",
                    borderColor: "currentColor"
                }, "small" === t.size && "text" === t.variant && {
                    padding: "4px 5px",
                    fontSize: e.typography.pxToRem(13)
                }, "large" === t.size && "text" === t.variant && {
                    padding: "8px 11px",
                    fontSize: e.typography.pxToRem(15)
                }, "small" === t.size && "outlined" === t.variant && {
                    padding: "3px 9px",
                    fontSize: e.typography.pxToRem(13)
                }, "large" === t.size && "outlined" === t.variant && {
                    padding: "7px 21px",
                    fontSize: e.typography.pxToRem(15)
                }, "small" === t.size && "contained" === t.variant && {
                    padding: "4px 10px",
                    fontSize: e.typography.pxToRem(13)
                }, "large" === t.size && "contained" === t.variant && {
                    padding: "8px 22px",
                    fontSize: e.typography.pxToRem(15)
                }, t.fullWidth && {width: "100%"})
            }), (({ownerState: e}) => e.disableElevation && {
                boxShadow: "none",
                "&:hover": {boxShadow: "none"},
                [`&.${Hr.focusVisible}`]: {boxShadow: "none"},
                "&:active": {boxShadow: "none"},
                [`&.${Hr.disabled}`]: {boxShadow: "none"}
            })), Yr = (0, ze.ZP)("span", {
                name: "MuiButton", slot: "StartIcon", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.startIcon, t[`iconSize${(0, yt.Z)(n.size)}`]]
                }
            })((({ownerState: e}) => (0, b.Z)({
                display: "inherit",
                marginRight: 8,
                marginLeft: -4
            }, "small" === e.size && {marginLeft: -2}, Kr(e)))), Xr = (0, ze.ZP)("span", {
                name: "MuiButton", slot: "EndIcon", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.endIcon, t[`iconSize${(0, yt.Z)(n.size)}`]]
                }
            })((({ownerState: e}) => (0, b.Z)({
                display: "inherit",
                marginRight: -4,
                marginLeft: 8
            }, "small" === e.size && {marginRight: -2}, Kr(e)))), Qr = e.forwardRef((function (t, n) {
                const r = e.useContext(Vr), o = (0, Wr.Z)(r, t), a = (0, Ne.Z)({props: o, name: "MuiButton"}), {
                        children: i,
                        color: l = "primary",
                        component: s = "button",
                        className: u,
                        disabled: c = !1,
                        disableElevation: d = !1,
                        disableFocusRipple: p = !1,
                        endIcon: f,
                        focusVisibleClassName: m,
                        fullWidth: h = !1,
                        size: v = "medium",
                        startIcon: g,
                        type: y,
                        variant: w = "text"
                    } = a, x = (0, Re.Z)(a, Ur), k = (0, b.Z)({}, a, {
                        color: l,
                        component: s,
                        disabled: c,
                        disableElevation: d,
                        disableFocusRipple: p,
                        fullWidth: h,
                        size: v,
                        type: y,
                        variant: w
                    }), C = (e => {
                        const {color: t, disableElevation: n, fullWidth: r, size: o, variant: a, classes: i} = e, l = {
                            root: ["root", a, `${a}${(0, yt.Z)(t)}`, `size${(0, yt.Z)(o)}`, `${a}Size${(0, yt.Z)(o)}`, "inherit" === t && "colorInherit", n && "disableElevation", r && "fullWidth"],
                            label: ["label"],
                            startIcon: ["startIcon", `iconSize${(0, yt.Z)(o)}`],
                            endIcon: ["endIcon", `iconSize${(0, yt.Z)(o)}`]
                        }, s = (0, Oe.Z)(l, Br, i);
                        return (0, b.Z)({}, i, s)
                    })(k), E = g && (0, S.jsx)(Yr, {className: C.startIcon, ownerState: k, children: g}),
                    Z = f && (0, S.jsx)(Xr, {className: C.endIcon, ownerState: k, children: f});
                return (0, S.jsxs)(qr, (0, b.Z)({
                    ownerState: k,
                    className: (0, Te.Z)(r.className, C.root, u),
                    component: s,
                    disabled: c,
                    focusRipple: !p,
                    focusVisibleClassName: (0, Te.Z)(C.focusVisible, m),
                    ref: n,
                    type: y
                }, x, {classes: C, children: [E, i, Z]}))
            }));

        function Gr(e) {
            return (0, ft.Z)("MuiDivider", e)
        }

        (0, Ge.Z)("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
        const Jr = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"],
            eo = (0, ze.ZP)("div", {
                name: "MuiDivider", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, "vertical" === n.orientation && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && "vertical" === n.orientation && t.withChildrenVertical, "right" === n.textAlign && "vertical" !== n.orientation && t.textAlignRight, "left" === n.textAlign && "vertical" !== n.orientation && t.textAlignLeft]
                }
            })((({theme: e, ownerState: t}) => (0, b.Z)({
                margin: 0,
                flexShrink: 0,
                borderWidth: 0,
                borderStyle: "solid",
                borderColor: (e.vars || e).palette.divider,
                borderBottomWidth: "thin"
            }, t.absolute && {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%"
            }, t.light && {borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : (0, Me.Fq)(e.palette.divider, .08)}, "inset" === t.variant && {marginLeft: 72}, "middle" === t.variant && "horizontal" === t.orientation && {
                marginLeft: e.spacing(2),
                marginRight: e.spacing(2)
            }, "middle" === t.variant && "vertical" === t.orientation && {
                marginTop: e.spacing(1),
                marginBottom: e.spacing(1)
            }, "vertical" === t.orientation && {
                height: "100%",
                borderBottomWidth: 0,
                borderRightWidth: "thin"
            }, t.flexItem && {alignSelf: "stretch", height: "auto"})), (({
                                                                             theme: e,
                                                                             ownerState: t
                                                                         }) => (0, b.Z)({}, t.children && {
                display: "flex",
                whiteSpace: "nowrap",
                textAlign: "center",
                border: 0,
                "&::before, &::after": {
                    position: "relative",
                    width: "100%",
                    borderTop: `thin solid ${(e.vars || e).palette.divider}`,
                    top: "50%",
                    content: '""',
                    transform: "translateY(50%)"
                }
            })), (({
                       theme: e,
                       ownerState: t
                   }) => (0, b.Z)({}, t.children && "vertical" === t.orientation && {
                flexDirection: "column",
                "&::before, &::after": {
                    height: "100%",
                    top: "0%",
                    left: "50%",
                    borderTop: 0,
                    borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
                    transform: "translateX(0%)"
                }
            })), (({ownerState: e}) => (0, b.Z)({}, "right" === e.textAlign && "vertical" !== e.orientation && {
                "&::before": {width: "90%"},
                "&::after": {width: "10%"}
            }, "left" === e.textAlign && "vertical" !== e.orientation && {
                "&::before": {width: "10%"},
                "&::after": {width: "90%"}
            }))), to = (0, ze.ZP)("span", {
                name: "MuiDivider", slot: "Wrapper", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.wrapper, "vertical" === n.orientation && t.wrapperVertical]
                }
            })((({theme: e, ownerState: t}) => (0, b.Z)({
                display: "inline-block",
                paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
                paddingRight: `calc(${e.spacing(1)} * 1.2)`
            }, "vertical" === t.orientation && {
                paddingTop: `calc(${e.spacing(1)} * 1.2)`,
                paddingBottom: `calc(${e.spacing(1)} * 1.2)`
            }))), no = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiDivider"}), {
                    absolute: r = !1,
                    children: o,
                    className: a,
                    component: i = (o ? "div" : "hr"),
                    flexItem: l = !1,
                    light: s = !1,
                    orientation: u = "horizontal",
                    role: c = ("hr" !== i ? "separator" : void 0),
                    textAlign: d = "center",
                    variant: p = "fullWidth"
                } = n, f = (0, Re.Z)(n, Jr), m = (0, b.Z)({}, n, {
                    absolute: r,
                    component: i,
                    flexItem: l,
                    light: s,
                    orientation: u,
                    role: c,
                    textAlign: d,
                    variant: p
                }), h = (e => {
                    const {
                        absolute: t,
                        children: n,
                        classes: r,
                        flexItem: o,
                        light: a,
                        orientation: i,
                        textAlign: l,
                        variant: s
                    } = e, u = {
                        root: ["root", t && "absolute", s, a && "light", "vertical" === i && "vertical", o && "flexItem", n && "withChildren", n && "vertical" === i && "withChildrenVertical", "right" === l && "vertical" !== i && "textAlignRight", "left" === l && "vertical" !== i && "textAlignLeft"],
                        wrapper: ["wrapper", "vertical" === i && "wrapperVertical"]
                    };
                    return (0, Oe.Z)(u, Gr, r)
                })(m);
                return (0, S.jsx)(eo, (0, b.Z)({
                    as: i,
                    className: (0, Te.Z)(h.root, a),
                    role: c,
                    ref: t,
                    ownerState: m
                }, f, {children: o ? (0, S.jsx)(to, {className: h.wrapper, ownerState: m, children: o}) : null}))
            }));

        function ro(e) {
            return (0, ft.Z)("MuiCircularProgress", e)
        }

        (0, Ge.Z)("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
        const oo = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
        let ao, io, lo, so, uo = e => e;
        const co = Qe(ao || (ao = uo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), po = Qe(io || (io = uo`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), fo = (0, ze.ZP)("span", {
            name: "MuiCircularProgress", slot: "Root", overridesResolver: (e, t) => {
                const {ownerState: n} = e;
                return [t.root, t[n.variant], t[`color${(0, yt.Z)(n.color)}`]]
            }
        })((({
                 ownerState: e,
                 theme: t
             }) => (0, b.Z)({display: "inline-block"}, "determinate" === e.variant && {transition: t.transitions.create("transform")}, "inherit" !== e.color && {color: (t.vars || t).palette[e.color].main})), (({ownerState: e}) => "indeterminate" === e.variant && Xe(lo || (lo = uo`
      animation: ${0} 1.4s linear infinite;
    `), co))), mo = (0, ze.ZP)("svg", {
            name: "MuiCircularProgress",
            slot: "Svg",
            overridesResolver: (e, t) => t.svg
        })({display: "block"}), ho = (0, ze.ZP)("circle", {
            name: "MuiCircularProgress", slot: "Circle", overridesResolver: (e, t) => {
                const {ownerState: n} = e;
                return [t.circle, t[`circle${(0, yt.Z)(n.variant)}`], n.disableShrink && t.circleDisableShrink]
            }
        })((({
                 ownerState: e,
                 theme: t
             }) => (0, b.Z)({stroke: "currentColor"}, "determinate" === e.variant && {transition: t.transitions.create("stroke-dashoffset")}, "indeterminate" === e.variant && {
            strokeDasharray: "80px, 200px",
            strokeDashoffset: 0
        })), (({ownerState: e}) => "indeterminate" === e.variant && !e.disableShrink && Xe(so || (so = uo`
      animation: ${0} 1.4s ease-in-out infinite;
    `), po))), vo = e.forwardRef((function (e, t) {
            const n = (0, Ne.Z)({props: e, name: "MuiCircularProgress"}), {
                    className: r,
                    color: o = "primary",
                    disableShrink: a = !1,
                    size: i = 40,
                    style: l,
                    thickness: s = 3.6,
                    value: u = 0,
                    variant: c = "indeterminate"
                } = n, d = (0, Re.Z)(n, oo),
                p = (0, b.Z)({}, n, {color: o, disableShrink: a, size: i, thickness: s, value: u, variant: c}),
                f = (e => {
                    const {classes: t, variant: n, color: r, disableShrink: o} = e, a = {
                        root: ["root", n, `color${(0, yt.Z)(r)}`],
                        svg: ["svg"],
                        circle: ["circle", `circle${(0, yt.Z)(n)}`, o && "circleDisableShrink"]
                    };
                    return (0, Oe.Z)(a, ro, t)
                })(p), m = {}, h = {}, v = {};
            if ("determinate" === c) {
                const e = 2 * Math.PI * ((44 - s) / 2);
                m.strokeDasharray = e.toFixed(3), v["aria-valuenow"] = Math.round(u), m.strokeDashoffset = `${((100 - u) / 100 * e).toFixed(3)}px`, h.transform = "rotate(-90deg)"
            }
            return (0, S.jsx)(fo, (0, b.Z)({
                className: (0, Te.Z)(f.root, r),
                style: (0, b.Z)({width: i, height: i}, h, l),
                ownerState: p,
                ref: t,
                role: "progressbar"
            }, v, d, {
                children: (0, S.jsx)(mo, {
                    className: f.svg,
                    ownerState: p,
                    viewBox: "22 22 44 44",
                    children: (0, S.jsx)(ho, {
                        className: f.circle,
                        style: m,
                        ownerState: p,
                        cx: 44,
                        cy: 44,
                        r: (44 - s) / 2,
                        fill: "none",
                        strokeWidth: s
                    })
                })
            }))
        }));

        function go(e) {
            return (0, ft.Z)("MuiFab", e)
        }

        const bo = (0, Ge.Z)("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]),
            yo = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"],
            wo = (0, ze.ZP)(bt, {
                name: "MuiFab",
                slot: "Root",
                shouldForwardProp: e => (0, ze.FO)(e) || "classes" === e,
                overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, t[n.variant], t[`size${(0, yt.Z)(n.size)}`], "inherit" === n.color && t.colorInherit, t[(0, yt.Z)(n.size)], t[n.color]]
                }
            })((({theme: e, ownerState: t}) => {
                var n, r;
                return (0, b.Z)({}, e.typography.button, {
                    minHeight: 36,
                    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {duration: e.transitions.duration.short}),
                    borderRadius: "50%",
                    padding: 0,
                    minWidth: 0,
                    width: 56,
                    height: 56,
                    zIndex: (e.vars || e).zIndex.fab,
                    boxShadow: (e.vars || e).shadows[6],
                    "&:active": {boxShadow: (e.vars || e).shadows[12]},
                    color: e.vars ? e.vars.palette.text.primary : null == (n = (r = e.palette).getContrastText) ? void 0 : n.call(r, e.palette.grey[300]),
                    backgroundColor: (e.vars || e).palette.grey[300],
                    "&:hover": {
                        backgroundColor: (e.vars || e).palette.grey.A100,
                        "@media (hover: none)": {backgroundColor: (e.vars || e).palette.grey[300]},
                        textDecoration: "none"
                    },
                    [`&.${bo.focusVisible}`]: {boxShadow: (e.vars || e).shadows[6]}
                }, "small" === t.size && {width: 40, height: 40}, "medium" === t.size && {
                    width: 48,
                    height: 48
                }, "extended" === t.variant && {
                    borderRadius: 24,
                    padding: "0 16px",
                    width: "auto",
                    minHeight: "auto",
                    minWidth: 48,
                    height: 48
                }, "extended" === t.variant && "small" === t.size && {
                    width: "auto",
                    padding: "0 8px",
                    borderRadius: 17,
                    minWidth: 34,
                    height: 34
                }, "extended" === t.variant && "medium" === t.size && {
                    width: "auto",
                    padding: "0 16px",
                    borderRadius: 20,
                    minWidth: 40,
                    height: 40
                }, "inherit" === t.color && {color: "inherit"})
            }), (({
                      theme: e,
                      ownerState: t
                  }) => (0, b.Z)({}, "inherit" !== t.color && "default" !== t.color && null != (e.vars || e).palette[t.color] && {
                color: (e.vars || e).palette[t.color].contrastText,
                backgroundColor: (e.vars || e).palette[t.color].main,
                "&:hover": {
                    backgroundColor: (e.vars || e).palette[t.color].dark,
                    "@media (hover: none)": {backgroundColor: (e.vars || e).palette[t.color].main}
                }
            })), (({theme: e}) => ({
                [`&.${bo.disabled}`]: {
                    color: (e.vars || e).palette.action.disabled,
                    boxShadow: (e.vars || e).shadows[0],
                    backgroundColor: (e.vars || e).palette.action.disabledBackground
                }
            }))), xo = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiFab"}), {
                        children: r,
                        className: o,
                        color: a = "default",
                        component: i = "button",
                        disabled: l = !1,
                        disableFocusRipple: s = !1,
                        focusVisibleClassName: u,
                        size: c = "large",
                        variant: d = "circular"
                    } = n, p = (0, Re.Z)(n, yo),
                    f = (0, b.Z)({}, n, {color: a, component: i, disabled: l, disableFocusRipple: s, size: c, variant: d}),
                    m = (e => {
                        const {color: t, variant: n, classes: r, size: o} = e,
                            a = {root: ["root", n, `size${(0, yt.Z)(o)}`, "inherit" === t ? "colorInherit" : t]},
                            i = (0, Oe.Z)(a, go, r);
                        return (0, b.Z)({}, r, i)
                    })(f);
                return (0, S.jsx)(wo, (0, b.Z)({
                    className: (0, Te.Z)(m.root, o),
                    component: i,
                    disabled: l,
                    focusRipple: !s,
                    focusVisibleClassName: (0, Te.Z)(m.focusVisible, u),
                    ownerState: f,
                    ref: t
                }, p, {classes: m, children: r}))
            }));
        var So = o(1048), ko = o(6693), Co = o(1899), Eo = o(3265), Zo = o(4229), Po = o(7097), Ro = o(9245),
            To = o(9994), Oo = o(7579), Mo = o(9766), zo = o(1387), No = o(8290), Io = o(7596);
        const Lo = ["onChange", "maxRows", "minRows", "style", "value"];

        function _o(e, t) {
            return parseInt(e[t], 10) || 0
        }

        const Ao = {
            visibility: "hidden",
            position: "absolute",
            overflow: "hidden",
            height: 0,
            top: 0,
            left: 0,
            transform: "translateZ(0)"
        };

        function $o(e) {
            return null == e || 0 === Object.keys(e).length
        }

        const Fo = e.forwardRef((function (t, n) {
            const {onChange: r, maxRows: o, minRows: a = 1, style: i, value: l} = t,
                s = (0, Re.Z)(t, Lo), {current: u} = e.useRef(null != l), c = e.useRef(null), d = (0, Ut.Z)(n, c),
                p = e.useRef(null), f = e.useRef(0), [m, h] = e.useState({}), v = e.useCallback((() => {
                    const e = c.current, n = (0, No.Z)(e).getComputedStyle(e);
                    if ("0px" === n.width) return {};
                    const r = p.current;
                    r.style.width = n.width, r.value = e.value || t.placeholder || "x", "\n" === r.value.slice(-1) && (r.value += " ");
                    const i = n["box-sizing"], l = _o(n, "padding-bottom") + _o(n, "padding-top"),
                        s = _o(n, "border-bottom-width") + _o(n, "border-top-width"), u = r.scrollHeight;
                    r.value = "x";
                    const d = r.scrollHeight;
                    let f = u;
                    return a && (f = Math.max(Number(a) * d, f)), o && (f = Math.min(Number(o) * d, f)), f = Math.max(f, d), {
                        outerHeightStyle: f + ("border-box" === i ? l + s : 0),
                        overflow: Math.abs(f - u) <= 1
                    }
                }), [o, a, t.placeholder]), g = (e, t) => {
                    const {outerHeightStyle: n, overflow: r} = t;
                    return f.current < 20 && (n > 0 && Math.abs((e.outerHeightStyle || 0) - n) > 1 || e.overflow !== r) ? (f.current += 1, {
                        overflow: r,
                        outerHeightStyle: n
                    }) : e
                }, y = e.useCallback((() => {
                    const e = v();
                    $o(e) || h((t => g(t, e)))
                }), [v]);
            return e.useEffect((() => {
                const e = (0, Io.Z)((() => {
                    f.current = 0, c.current && (() => {
                        const e = v();
                        $o(e) || (0, Tt.flushSync)((() => {
                            h((t => g(t, e)))
                        }))
                    })()
                })), t = (0, No.Z)(c.current);
                let n;
                return t.addEventListener("resize", e), "undefined" != typeof ResizeObserver && (n = new ResizeObserver(e), n.observe(c.current)), () => {
                    e.clear(), t.removeEventListener("resize", e), n && n.disconnect()
                }
            })), (0, Kt.Z)((() => {
                y()
            })), e.useEffect((() => {
                f.current = 0
            }), [l]), (0, S.jsxs)(e.Fragment, {
                children: [(0, S.jsx)("textarea", (0, b.Z)({
                    value: l,
                    onChange: e => {
                        f.current = 0, u || y(), r && r(e)
                    },
                    ref: d,
                    rows: a,
                    style: (0, b.Z)({height: m.outerHeightStyle, overflow: m.overflow ? "hidden" : null}, i)
                }, s)), (0, S.jsx)("textarea", {
                    "aria-hidden": !0,
                    className: t.className,
                    readOnly: !0,
                    ref: p,
                    tabIndex: -1,
                    style: (0, b.Z)({}, Ao, i, {padding: 0})
                })]
            })
        }));

        function Do({props: e, states: t, muiFormControl: n}) {
            return t.reduce(((t, r) => (t[r] = e[r], n && void 0 === e[r] && (t[r] = n[r]), t)), {})
        }

        const jo = e.createContext(void 0);

        function Wo() {
            return e.useContext(jo)
        }

        var Bo = o(8974);

        function Ho(e) {
            const {styles: t, defaultTheme: n = {}} = e, r = "function" == typeof t ? e => {
                return t(null == (r = e) || 0 === Object.keys(r).length ? n : e);
                var r
            } : t;
            return (0, S.jsx)(Ye, {styles: r})
        }

        const Vo = function (e) {
            return (0, S.jsx)(Ho, (0, b.Z)({}, e, {defaultTheme: Pt.Z}))
        };

        function Uo(e) {
            return null != e && !(Array.isArray(e) && 0 === e.length)
        }

        function Ko(e, t = !1) {
            return e && (Uo(e.value) && "" !== e.value || t && Uo(e.defaultValue) && "" !== e.defaultValue)
        }

        function qo(e) {
            return (0, ft.Z)("MuiInputBase", e)
        }

        const Yo = (0, Ge.Z)("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]),
            Xo = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"],
            Qo = (e, t) => {
                const {ownerState: n} = e;
                return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, "small" === n.size && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${(0, yt.Z)(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel]
            }, Go = (e, t) => {
                const {ownerState: n} = e;
                return [t.input, "small" === n.size && t.inputSizeSmall, n.multiline && t.inputMultiline, "search" === n.type && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel]
            }, Jo = (0, ze.ZP)("div", {name: "MuiInputBase", slot: "Root", overridesResolver: Qo})((({
                                                                                                         theme: e,
                                                                                                         ownerState: t
                                                                                                     }) => (0, b.Z)({}, e.typography.body1, {
                color: (e.vars || e).palette.text.primary,
                lineHeight: "1.4375em",
                boxSizing: "border-box",
                position: "relative",
                cursor: "text",
                display: "inline-flex",
                alignItems: "center",
                [`&.${Yo.disabled}`]: {color: (e.vars || e).palette.text.disabled, cursor: "default"}
            }, t.multiline && (0, b.Z)({padding: "4px 0 5px"}, "small" === t.size && {paddingTop: 1}), t.fullWidth && {width: "100%"}))),
            ea = (0, ze.ZP)("input", {name: "MuiInputBase", slot: "Input", overridesResolver: Go})((({
                                                                                                         theme: e,
                                                                                                         ownerState: t
                                                                                                     }) => {
                const n = "light" === e.palette.mode,
                    r = (0, b.Z)({color: "currentColor"}, e.vars ? {opacity: e.vars.opacity.inputPlaceholder} : {opacity: n ? .42 : .5}, {transition: e.transitions.create("opacity", {duration: e.transitions.duration.shorter})}),
                    o = {opacity: "0 !important"},
                    a = e.vars ? {opacity: e.vars.opacity.inputPlaceholder} : {opacity: n ? .42 : .5};
                return (0, b.Z)({
                    font: "inherit",
                    letterSpacing: "inherit",
                    color: "currentColor",
                    padding: "4px 0 5px",
                    border: 0,
                    boxSizing: "content-box",
                    background: "none",
                    height: "1.4375em",
                    margin: 0,
                    WebkitTapHighlightColor: "transparent",
                    display: "block",
                    minWidth: 0,
                    width: "100%",
                    animationName: "mui-auto-fill-cancel",
                    animationDuration: "10ms",
                    "&::-webkit-input-placeholder": r,
                    "&::-moz-placeholder": r,
                    "&:-ms-input-placeholder": r,
                    "&::-ms-input-placeholder": r,
                    "&:focus": {outline: 0},
                    "&:invalid": {boxShadow: "none"},
                    "&::-webkit-search-decoration": {WebkitAppearance: "none"},
                    [`label[data-shrink=false] + .${Yo.formControl} &`]: {
                        "&::-webkit-input-placeholder": o,
                        "&::-moz-placeholder": o,
                        "&:-ms-input-placeholder": o,
                        "&::-ms-input-placeholder": o,
                        "&:focus::-webkit-input-placeholder": a,
                        "&:focus::-moz-placeholder": a,
                        "&:focus:-ms-input-placeholder": a,
                        "&:focus::-ms-input-placeholder": a
                    },
                    [`&.${Yo.disabled}`]: {opacity: 1, WebkitTextFillColor: (e.vars || e).palette.text.disabled},
                    "&:-webkit-autofill": {animationDuration: "5000s", animationName: "mui-auto-fill"}
                }, "small" === t.size && {paddingTop: 1}, t.multiline && {
                    height: "auto",
                    resize: "none",
                    padding: 0,
                    paddingTop: 0
                }, "search" === t.type && {MozAppearance: "textfield"})
            })), ta = (0, S.jsx)(Vo, {
                styles: {
                    "@keyframes mui-auto-fill": {from: {display: "block"}},
                    "@keyframes mui-auto-fill-cancel": {from: {display: "block"}}
                }
            }), na = e.forwardRef((function (t, n) {
                var r;
                const o = (0, Ne.Z)({props: t, name: "MuiInputBase"}), {
                        "aria-describedby": a,
                        autoComplete: i,
                        autoFocus: l,
                        className: s,
                        components: u = {},
                        componentsProps: c = {},
                        defaultValue: d,
                        disabled: p,
                        disableInjectingGlobalStyles: f,
                        endAdornment: m,
                        fullWidth: h = !1,
                        id: v,
                        inputComponent: g = "input",
                        inputProps: y = {},
                        inputRef: w,
                        maxRows: x,
                        minRows: k,
                        multiline: C = !1,
                        name: E,
                        onBlur: Z,
                        onChange: P,
                        onClick: R,
                        onFocus: T,
                        onKeyDown: O,
                        onKeyUp: M,
                        placeholder: z,
                        readOnly: N,
                        renderSuffix: I,
                        rows: L,
                        slotProps: _ = {},
                        slots: A = {},
                        startAdornment: $,
                        type: F = "text",
                        value: D
                    } = o, j = (0, Re.Z)(o, Xo), W = null != y.value ? y.value : D, {current: B} = e.useRef(null != W),
                    H = e.useRef(), V = e.useCallback((e => {
                    }), []), U = (0, Ie.Z)(H, w, y.ref, V), [K, q] = e.useState(!1), Y = Wo(), X = Do({
                        props: o,
                        muiFormControl: Y,
                        states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
                    });
                X.focused = Y ? Y.focused : K, e.useEffect((() => {
                    !Y && p && K && (q(!1), Z && Z())
                }), [Y, p, K, Z]);
                const Q = Y && Y.onFilled, G = Y && Y.onEmpty, J = e.useCallback((e => {
                    Ko(e) ? Q && Q() : G && G()
                }), [Q, G]);
                (0, Bo.Z)((() => {
                    B && J({value: W})
                }), [W, J, B]), e.useEffect((() => {
                    J(H.current)
                }), []);
                let ee = g, te = y;
                C && "input" === ee && (te = L ? (0, b.Z)({
                    type: void 0,
                    minRows: L,
                    maxRows: L
                }, te) : (0, b.Z)({type: void 0, maxRows: x, minRows: k}, te), ee = Fo), e.useEffect((() => {
                    Y && Y.setAdornedStart(Boolean($))
                }), [Y, $]);
                const ne = (0, b.Z)({}, o, {
                    color: X.color || "primary",
                    disabled: X.disabled,
                    endAdornment: m,
                    error: X.error,
                    focused: X.focused,
                    formControl: Y,
                    fullWidth: h,
                    hiddenLabel: X.hiddenLabel,
                    multiline: C,
                    size: X.size,
                    startAdornment: $,
                    type: F
                }), re = (e => {
                    const {
                        classes: t,
                        color: n,
                        disabled: r,
                        error: o,
                        endAdornment: a,
                        focused: i,
                        formControl: l,
                        fullWidth: s,
                        hiddenLabel: u,
                        multiline: c,
                        readOnly: d,
                        size: p,
                        startAdornment: f,
                        type: m
                    } = e, h = {
                        root: ["root", `color${(0, yt.Z)(n)}`, r && "disabled", o && "error", s && "fullWidth", i && "focused", l && "formControl", "small" === p && "sizeSmall", c && "multiline", f && "adornedStart", a && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
                        input: ["input", r && "disabled", "search" === m && "inputTypeSearch", c && "inputMultiline", "small" === p && "inputSizeSmall", u && "inputHiddenLabel", f && "inputAdornedStart", a && "inputAdornedEnd", d && "readOnly"]
                    };
                    return (0, Oe.Z)(h, qo, t)
                })(ne), oe = A.root || u.Root || Jo, ae = _.root || c.root || {}, ie = A.input || u.Input || ea;
                return te = (0, b.Z)({}, te, null != (r = _.input) ? r : c.input), (0, S.jsxs)(e.Fragment, {
                    children: [!f && ta, (0, S.jsxs)(oe, (0, b.Z)({}, ae, !Et(oe) && {ownerState: (0, b.Z)({}, ne, ae.ownerState)}, {
                        ref: n,
                        onClick: e => {
                            H.current && e.currentTarget === e.target && H.current.focus(), R && R(e)
                        }
                    }, j, {
                        className: (0, Te.Z)(re.root, ae.className, s),
                        children: [$, (0, S.jsx)(jo.Provider, {
                            value: null,
                            children: (0, S.jsx)(ie, (0, b.Z)({
                                ownerState: ne,
                                "aria-invalid": X.error,
                                "aria-describedby": a,
                                autoComplete: i,
                                autoFocus: l,
                                defaultValue: d,
                                disabled: X.disabled,
                                id: v,
                                onAnimationStart: e => {
                                    J("mui-auto-fill-cancel" === e.animationName ? H.current : {value: "x"})
                                },
                                name: E,
                                placeholder: z,
                                readOnly: N,
                                required: X.required,
                                rows: L,
                                value: W,
                                onKeyDown: O,
                                onKeyUp: M,
                                type: F
                            }, te, !Et(ie) && {as: ee, ownerState: (0, b.Z)({}, ne, te.ownerState)}, {
                                ref: U,
                                className: (0, Te.Z)(re.input, te.className),
                                onBlur: e => {
                                    Z && Z(e), y.onBlur && y.onBlur(e), Y && Y.onBlur ? Y.onBlur(e) : q(!1)
                                },
                                onChange: (e, ...t) => {
                                    if (!B) {
                                        const t = e.target || H.current;
                                        if (null == t) throw new Error((0, zo.Z)(1));
                                        J({value: t.value})
                                    }
                                    y.onChange && y.onChange(e, ...t), P && P(e, ...t)
                                },
                                onFocus: e => {
                                    X.disabled ? e.stopPropagation() : (T && T(e), y.onFocus && y.onFocus(e), Y && Y.onFocus ? Y.onFocus(e) : q(!0))
                                }
                            }))
                        }), m, I ? I((0, b.Z)({}, X, {startAdornment: $})) : null]
                    }))]
                })
            })), ra = na;

        function oa(e) {
            return (0, ft.Z)("MuiInput", e)
        }

        const aa = (0, b.Z)({}, Yo, (0, Ge.Z)("MuiInput", ["root", "underline", "input"])),
            ia = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"],
            la = (0, ze.ZP)(Jo, {
                shouldForwardProp: e => (0, ze.FO)(e) || "classes" === e,
                name: "MuiInput",
                slot: "Root",
                overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [...Qo(e, t), !n.disableUnderline && t.underline]
                }
            })((({theme: e, ownerState: t}) => {
                let n = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
                return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), (0, b.Z)({position: "relative"}, t.formControl && {"label + &": {marginTop: 16}}, !t.disableUnderline && {
                    "&:after": {
                        borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
                        left: 0,
                        bottom: 0,
                        content: '""',
                        position: "absolute",
                        right: 0,
                        transform: "scaleX(0)",
                        transition: e.transitions.create("transform", {
                            duration: e.transitions.duration.shorter,
                            easing: e.transitions.easing.easeOut
                        }),
                        pointerEvents: "none"
                    },
                    [`&.${aa.focused}:after`]: {transform: "scaleX(1) translateX(0)"},
                    [`&.${aa.error}`]: {"&:before, &:after": {borderBottomColor: (e.vars || e).palette.error.main}},
                    "&:before": {
                        borderBottom: `1px solid ${n}`,
                        left: 0,
                        bottom: 0,
                        content: '"\\00a0"',
                        position: "absolute",
                        right: 0,
                        transition: e.transitions.create("border-bottom-color", {duration: e.transitions.duration.shorter}),
                        pointerEvents: "none"
                    },
                    [`&:hover:not(.${aa.disabled}, .${aa.error}):before`]: {
                        borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                        "@media (hover: none)": {borderBottom: `1px solid ${n}`}
                    },
                    [`&.${aa.disabled}:before`]: {borderBottomStyle: "dotted"}
                })
            })), sa = (0, ze.ZP)(ea, {name: "MuiInput", slot: "Input", overridesResolver: Go})({}),
            ua = e.forwardRef((function (e, t) {
                var n, r, o, a;
                const i = (0, Ne.Z)({props: e, name: "MuiInput"}), {
                        disableUnderline: l,
                        components: s = {},
                        componentsProps: u,
                        fullWidth: c = !1,
                        inputComponent: d = "input",
                        multiline: p = !1,
                        slotProps: f,
                        slots: m = {},
                        type: h = "text"
                    } = i, v = (0, Re.Z)(i, ia), g = (e => {
                        const {classes: t, disableUnderline: n} = e,
                            r = {root: ["root", !n && "underline"], input: ["input"]}, o = (0, Oe.Z)(r, oa, t);
                        return (0, b.Z)({}, t, o)
                    })(i), y = {root: {ownerState: {disableUnderline: l}}},
                    w = (null != f ? f : u) ? (0, Mo.Z)(null != f ? f : u, y) : y,
                    x = null != (n = null != (r = m.root) ? r : s.Root) ? n : la,
                    k = null != (o = null != (a = m.input) ? a : s.Input) ? o : sa;
                return (0, S.jsx)(ra, (0, b.Z)({
                    slots: {root: x, input: k},
                    slotProps: w,
                    fullWidth: c,
                    inputComponent: d,
                    multiline: p,
                    ref: t,
                    type: h
                }, v, {classes: g}))
            }));
        ua.muiName = "Input";
        const ca = ua;

        function da(e) {
            return (0, ft.Z)("MuiFilledInput", e)
        }

        const pa = (0, b.Z)({}, Yo, (0, Ge.Z)("MuiFilledInput", ["root", "underline", "input"])),
            fa = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"],
            ma = (0, ze.ZP)(Jo, {
                shouldForwardProp: e => (0, ze.FO)(e) || "classes" === e,
                name: "MuiFilledInput",
                slot: "Root",
                overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [...Qo(e, t), !n.disableUnderline && t.underline]
                }
            })((({theme: e, ownerState: t}) => {
                var n;
                const r = "light" === e.palette.mode, o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
                    a = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
                    i = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
                    l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
                return (0, b.Z)({
                    position: "relative",
                    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a,
                    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                    borderTopRightRadius: (e.vars || e).shape.borderRadius,
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shorter,
                        easing: e.transitions.easing.easeOut
                    }),
                    "&:hover": {
                        backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
                        "@media (hover: none)": {backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a}
                    },
                    [`&.${pa.focused}`]: {backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a},
                    [`&.${pa.disabled}`]: {backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l}
                }, !t.disableUnderline && {
                    "&:after": {
                        borderBottom: `2px solid ${null == (n = (e.vars || e).palette[t.color || "primary"]) ? void 0 : n.main}`,
                        left: 0,
                        bottom: 0,
                        content: '""',
                        position: "absolute",
                        right: 0,
                        transform: "scaleX(0)",
                        transition: e.transitions.create("transform", {
                            duration: e.transitions.duration.shorter,
                            easing: e.transitions.easing.easeOut
                        }),
                        pointerEvents: "none"
                    },
                    [`&.${pa.focused}:after`]: {transform: "scaleX(1) translateX(0)"},
                    [`&.${pa.error}`]: {"&:before, &:after": {borderBottomColor: (e.vars || e).palette.error.main}},
                    "&:before": {
                        borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
                        left: 0,
                        bottom: 0,
                        content: '"\\00a0"',
                        position: "absolute",
                        right: 0,
                        transition: e.transitions.create("border-bottom-color", {duration: e.transitions.duration.shorter}),
                        pointerEvents: "none"
                    },
                    [`&:hover:not(.${pa.disabled}, .${pa.error}):before`]: {borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`},
                    [`&.${pa.disabled}:before`]: {borderBottomStyle: "dotted"}
                }, t.startAdornment && {paddingLeft: 12}, t.endAdornment && {paddingRight: 12}, t.multiline && (0, b.Z)({padding: "25px 12px 8px"}, "small" === t.size && {
                    paddingTop: 21,
                    paddingBottom: 4
                }, t.hiddenLabel && {paddingTop: 16, paddingBottom: 17}))
            })), ha = (0, ze.ZP)(ea, {name: "MuiFilledInput", slot: "Input", overridesResolver: Go})((({
                                                                                                           theme: e,
                                                                                                           ownerState: t
                                                                                                       }) => (0, b.Z)({
                paddingTop: 25,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12
            }, !e.vars && {
                "&:-webkit-autofill": {
                    WebkitBoxShadow: "light" === e.palette.mode ? null : "0 0 0 100px #266798 inset",
                    WebkitTextFillColor: "light" === e.palette.mode ? null : "#fff",
                    caretColor: "light" === e.palette.mode ? null : "#fff",
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit"
                }
            }, e.vars && {
                "&:-webkit-autofill": {borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit"},
                [e.getColorSchemeSelector("dark")]: {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "#fff",
                        caretColor: "#fff"
                    }
                }
            }, "small" === t.size && {paddingTop: 21, paddingBottom: 4}, t.hiddenLabel && {
                paddingTop: 16,
                paddingBottom: 17
            }, t.multiline && {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }, t.startAdornment && {paddingLeft: 0}, t.endAdornment && {paddingRight: 0}, t.hiddenLabel && "small" === t.size && {
                paddingTop: 8,
                paddingBottom: 9
            }))), va = e.forwardRef((function (e, t) {
                var n, r, o, a;
                const i = (0, Ne.Z)({props: e, name: "MuiFilledInput"}), {
                        components: l = {},
                        componentsProps: s,
                        fullWidth: u = !1,
                        inputComponent: c = "input",
                        multiline: d = !1,
                        slotProps: p,
                        slots: f = {},
                        type: m = "text"
                    } = i, h = (0, Re.Z)(i, fa), v = (0, b.Z)({}, i, {fullWidth: u, inputComponent: c, multiline: d, type: m}),
                    g = (e => {
                        const {classes: t, disableUnderline: n} = e,
                            r = {root: ["root", !n && "underline"], input: ["input"]}, o = (0, Oe.Z)(r, da, t);
                        return (0, b.Z)({}, t, o)
                    })(i), y = {root: {ownerState: v}, input: {ownerState: v}},
                    w = (null != p ? p : s) ? (0, Mo.Z)(null != p ? p : s, y) : y,
                    x = null != (n = null != (r = f.root) ? r : l.Root) ? n : ma,
                    k = null != (o = null != (a = f.input) ? a : l.Input) ? o : ha;
                return (0, S.jsx)(ra, (0, b.Z)({
                    slots: {root: x, input: k},
                    componentsProps: w,
                    fullWidth: u,
                    inputComponent: c,
                    multiline: d,
                    ref: t,
                    type: m
                }, h, {classes: g}))
            }));
        va.muiName = "Input";
        const ga = va;
        var ba;
        const ya = ["children", "classes", "className", "label", "notched"], wa = (0, ze.ZP)("fieldset")({
            textAlign: "left",
            position: "absolute",
            bottom: 0,
            right: 0,
            top: -5,
            left: 0,
            margin: 0,
            padding: "0 8px",
            pointerEvents: "none",
            borderRadius: "inherit",
            borderStyle: "solid",
            borderWidth: 1,
            overflow: "hidden",
            minWidth: "0%"
        }), xa = (0, ze.ZP)("legend")((({ownerState: e, theme: t}) => (0, b.Z)({
            float: "unset",
            width: "auto",
            overflow: "hidden"
        }, !e.withLabel && {
            padding: 0,
            lineHeight: "11px",
            transition: t.transitions.create("width", {duration: 150, easing: t.transitions.easing.easeOut})
        }, e.withLabel && (0, b.Z)({
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: .01,
            transition: t.transitions.create("max-width", {duration: 50, easing: t.transitions.easing.easeOut}),
            whiteSpace: "nowrap",
            "& > span": {paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible"}
        }, e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
                duration: 100,
                easing: t.transitions.easing.easeOut,
                delay: 50
            })
        }))));

        function Sa(e) {
            return (0, ft.Z)("MuiOutlinedInput", e)
        }

        const ka = (0, b.Z)({}, Yo, (0, Ge.Z)("MuiOutlinedInput", ["root", "notchedOutline", "input"])),
            Ca = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"],
            Ea = (0, ze.ZP)(Jo, {
                shouldForwardProp: e => (0, ze.FO)(e) || "classes" === e,
                name: "MuiOutlinedInput",
                slot: "Root",
                overridesResolver: Qo
            })((({theme: e, ownerState: t}) => {
                const n = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
                return (0, b.Z)({
                    position: "relative",
                    borderRadius: (e.vars || e).shape.borderRadius,
                    [`&:hover .${ka.notchedOutline}`]: {borderColor: (e.vars || e).palette.text.primary},
                    "@media (hover: none)": {[`&:hover .${ka.notchedOutline}`]: {borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n}},
                    [`&.${ka.focused} .${ka.notchedOutline}`]: {
                        borderColor: (e.vars || e).palette[t.color].main,
                        borderWidth: 2
                    },
                    [`&.${ka.error} .${ka.notchedOutline}`]: {borderColor: (e.vars || e).palette.error.main},
                    [`&.${ka.disabled} .${ka.notchedOutline}`]: {borderColor: (e.vars || e).palette.action.disabled}
                }, t.startAdornment && {paddingLeft: 14}, t.endAdornment && {paddingRight: 14}, t.multiline && (0, b.Z)({padding: "16.5px 14px"}, "small" === t.size && {padding: "8.5px 14px"}))
            })), Za = (0, ze.ZP)((function (e) {
                const {className: t, label: n, notched: r} = e, o = (0, Re.Z)(e, ya), a = null != n && "" !== n,
                    i = (0, b.Z)({}, e, {notched: r, withLabel: a});
                return (0, S.jsx)(wa, (0, b.Z)({
                    "aria-hidden": !0,
                    className: t,
                    ownerState: i
                }, o, {
                    children: (0, S.jsx)(xa, {
                        ownerState: i,
                        children: a ? (0, S.jsx)("span", {children: n}) : ba || (ba = (0, S.jsx)("span", {
                            className: "notranslate",
                            children: "​"
                        }))
                    })
                }))
            }), {
                name: "MuiOutlinedInput",
                slot: "NotchedOutline",
                overridesResolver: (e, t) => t.notchedOutline
            })((({theme: e}) => {
                const t = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
                return {borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t}
            })), Pa = (0, ze.ZP)(ea, {name: "MuiOutlinedInput", slot: "Input", overridesResolver: Go})((({
                                                                                                             theme: e,
                                                                                                             ownerState: t
                                                                                                         }) => (0, b.Z)({padding: "16.5px 14px"}, !e.vars && {
                "&:-webkit-autofill": {
                    WebkitBoxShadow: "light" === e.palette.mode ? null : "0 0 0 100px #266798 inset",
                    WebkitTextFillColor: "light" === e.palette.mode ? null : "#fff",
                    caretColor: "light" === e.palette.mode ? null : "#fff",
                    borderRadius: "inherit"
                }
            }, e.vars && {
                "&:-webkit-autofill": {borderRadius: "inherit"},
                [e.getColorSchemeSelector("dark")]: {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "#fff",
                        caretColor: "#fff"
                    }
                }
            }, "small" === t.size && {padding: "8.5px 14px"}, t.multiline && {padding: 0}, t.startAdornment && {paddingLeft: 0}, t.endAdornment && {paddingRight: 0}))),
            Ra = e.forwardRef((function (t, n) {
                var r, o, a, i, l;
                const s = (0, Ne.Z)({props: t, name: "MuiOutlinedInput"}), {
                        components: u = {},
                        fullWidth: c = !1,
                        inputComponent: d = "input",
                        label: p,
                        multiline: f = !1,
                        notched: m,
                        slots: h = {},
                        type: v = "text"
                    } = s, g = (0, Re.Z)(s, Ca), y = (e => {
                        const {classes: t} = e,
                            n = (0, Oe.Z)({root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"]}, Sa, t);
                        return (0, b.Z)({}, t, n)
                    })(s), w = Wo(), x = Do({props: s, muiFormControl: w, states: ["required"]}), k = (0, b.Z)({}, s, {
                        color: x.color || "primary",
                        disabled: x.disabled,
                        error: x.error,
                        focused: x.focused,
                        formControl: w,
                        fullWidth: c,
                        hiddenLabel: x.hiddenLabel,
                        multiline: f,
                        size: x.size,
                        type: v
                    }), C = null != (r = null != (o = h.root) ? o : u.Root) ? r : Ea,
                    E = null != (a = null != (i = h.input) ? i : u.Input) ? a : Pa;
                return (0, S.jsx)(ra, (0, b.Z)({
                    slots: {root: C, input: E},
                    renderSuffix: t => (0, S.jsx)(Za, {
                        ownerState: k,
                        className: y.notchedOutline,
                        label: null != p && "" !== p && x.required ? l || (l = (0, S.jsxs)(e.Fragment, {children: [p, " ", "*"]})) : p,
                        notched: void 0 !== m ? m : Boolean(t.startAdornment || t.filled || t.focused)
                    }),
                    fullWidth: c,
                    inputComponent: d,
                    multiline: f,
                    ref: n,
                    type: v
                }, g, {classes: (0, b.Z)({}, y, {notchedOutline: null})}))
            }));
        Ra.muiName = "Input";
        const Ta = Ra;

        function Oa(e) {
            return (0, ft.Z)("MuiFormLabel", e)
        }

        const Ma = (0, Ge.Z)("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]),
            za = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"],
            Na = (0, ze.ZP)("label", {
                name: "MuiFormLabel",
                slot: "Root",
                overridesResolver: ({ownerState: e}, t) => (0, b.Z)({}, t.root, "secondary" === e.color && t.colorSecondary, e.filled && t.filled)
            })((({
                     theme: e,
                     ownerState: t
                 }) => (0, b.Z)({color: (e.vars || e).palette.text.secondary}, e.typography.body1, {
                lineHeight: "1.4375em",
                padding: 0,
                position: "relative",
                [`&.${Ma.focused}`]: {color: (e.vars || e).palette[t.color].main},
                [`&.${Ma.disabled}`]: {color: (e.vars || e).palette.text.disabled},
                [`&.${Ma.error}`]: {color: (e.vars || e).palette.error.main}
            }))), Ia = (0, ze.ZP)("span", {
                name: "MuiFormLabel",
                slot: "Asterisk",
                overridesResolver: (e, t) => t.asterisk
            })((({theme: e}) => ({[`&.${Ma.error}`]: {color: (e.vars || e).palette.error.main}}))),
            La = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiFormLabel"}), {
                    children: r,
                    className: o,
                    component: a = "label"
                } = n, i = (0, Re.Z)(n, za), l = Do({
                    props: n,
                    muiFormControl: Wo(),
                    states: ["color", "required", "focused", "disabled", "error", "filled"]
                }), s = (0, b.Z)({}, n, {
                    color: l.color || "primary",
                    component: a,
                    disabled: l.disabled,
                    error: l.error,
                    filled: l.filled,
                    focused: l.focused,
                    required: l.required
                }), u = (e => {
                    const {classes: t, color: n, focused: r, disabled: o, error: a, filled: i, required: l} = e, s = {
                        root: ["root", `color${(0, yt.Z)(n)}`, o && "disabled", a && "error", i && "filled", r && "focused", l && "required"],
                        asterisk: ["asterisk", a && "error"]
                    };
                    return (0, Oe.Z)(s, Oa, t)
                })(s);
                return (0, S.jsxs)(Na, (0, b.Z)({
                    as: a,
                    ownerState: s,
                    className: (0, Te.Z)(u.root, o),
                    ref: t
                }, i, {
                    children: [r, l.required && (0, S.jsxs)(Ia, {
                        ownerState: s,
                        "aria-hidden": !0,
                        className: u.asterisk,
                        children: [" ", "*"]
                    })]
                }))
            }));

        function _a(e) {
            return (0, ft.Z)("MuiInputLabel", e)
        }

        (0, Ge.Z)("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
        const Aa = ["disableAnimation", "margin", "shrink", "variant", "className"], $a = (0, ze.ZP)(La, {
            shouldForwardProp: e => (0, ze.FO)(e) || "classes" === e,
            name: "MuiInputLabel",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {ownerState: n} = e;
                return [{[`& .${Ma.asterisk}`]: t.asterisk}, t.root, n.formControl && t.formControl, "small" === n.size && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]]
            }
        })((({theme: e, ownerState: t}) => (0, b.Z)({
            display: "block",
            transformOrigin: "top left",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%"
        }, t.formControl && {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)"
        }, "small" === t.size && {transform: "translate(0, 17px) scale(1)"}, t.shrink && {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%"
        }, !t.disableAnimation && {
            transition: e.transitions.create(["color", "transform", "max-width"], {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
            })
        }, "filled" === t.variant && (0, b.Z)({
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)"
        }, "small" === t.size && {transform: "translate(12px, 13px) scale(1)"}, t.shrink && (0, b.Z)({
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)"
        }, "small" === t.size && {transform: "translate(12px, 4px) scale(0.75)"})), "outlined" === t.variant && (0, b.Z)({
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)"
        }, "small" === t.size && {transform: "translate(14px, 9px) scale(1)"}, t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 24px)",
            transform: "translate(14px, -9px) scale(0.75)"
        })))), Fa = e.forwardRef((function (e, t) {
            const n = (0, Ne.Z)({name: "MuiInputLabel", props: e}), {
                disableAnimation: r = !1,
                shrink: o,
                className: a
            } = n, i = (0, Re.Z)(n, Aa), l = Wo();
            let s = o;
            void 0 === s && l && (s = l.filled || l.focused || l.adornedStart);
            const u = Do({props: n, muiFormControl: l, states: ["size", "variant", "required"]}), c = (0, b.Z)({}, n, {
                disableAnimation: r,
                formControl: l,
                shrink: s,
                size: u.size,
                variant: u.variant,
                required: u.required
            }), d = (e => {
                const {
                    classes: t,
                    formControl: n,
                    size: r,
                    shrink: o,
                    disableAnimation: a,
                    variant: i,
                    required: l
                } = e, s = {
                    root: ["root", n && "formControl", !a && "animated", o && "shrink", "small" === r && "sizeSmall", i],
                    asterisk: [l && "asterisk"]
                }, u = (0, Oe.Z)(s, _a, t);
                return (0, b.Z)({}, t, u)
            })(c);
            return (0, S.jsx)($a, (0, b.Z)({
                "data-shrink": s,
                ownerState: c,
                ref: t,
                className: (0, Te.Z)(d.root, a)
            }, i, {classes: d}))
        }));
        var Da = o(8502);

        function ja(e) {
            return (0, ft.Z)("MuiFormControl", e)
        }

        (0, Ge.Z)("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
        const Wa = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"],
            Ba = (0, ze.ZP)("div", {
                name: "MuiFormControl",
                slot: "Root",
                overridesResolver: ({ownerState: e}, t) => (0, b.Z)({}, t.root, t[`margin${(0, yt.Z)(e.margin)}`], e.fullWidth && t.fullWidth)
            })((({ownerState: e}) => (0, b.Z)({
                display: "inline-flex",
                flexDirection: "column",
                position: "relative",
                minWidth: 0,
                padding: 0,
                margin: 0,
                border: 0,
                verticalAlign: "top"
            }, "normal" === e.margin && {marginTop: 16, marginBottom: 8}, "dense" === e.margin && {
                marginTop: 8,
                marginBottom: 4
            }, e.fullWidth && {width: "100%"}))), Ha = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiFormControl"}), {
                    children: o,
                    className: a,
                    color: i = "primary",
                    component: l = "div",
                    disabled: s = !1,
                    error: u = !1,
                    focused: c,
                    fullWidth: d = !1,
                    hiddenLabel: p = !1,
                    margin: f = "none",
                    required: m = !1,
                    size: h = "medium",
                    variant: v = "outlined"
                } = r, g = (0, Re.Z)(r, Wa), y = (0, b.Z)({}, r, {
                    color: i,
                    component: l,
                    disabled: s,
                    error: u,
                    fullWidth: d,
                    hiddenLabel: p,
                    margin: f,
                    required: m,
                    size: h,
                    variant: v
                }), w = (e => {
                    const {classes: t, margin: n, fullWidth: r} = e,
                        o = {root: ["root", "none" !== n && `margin${(0, yt.Z)(n)}`, r && "fullWidth"]};
                    return (0, Oe.Z)(o, ja, t)
                })(y), [x, k] = e.useState((() => {
                    let t = !1;
                    return o && e.Children.forEach(o, (e => {
                        if (!(0, Da.Z)(e, ["Input", "Select"])) return;
                        const n = (0, Da.Z)(e, ["Select"]) ? e.props.input : e;
                        n && n.props.startAdornment && (t = !0)
                    })), t
                })), [C, E] = e.useState((() => {
                    let t = !1;
                    return o && e.Children.forEach(o, (e => {
                        (0, Da.Z)(e, ["Input", "Select"]) && Ko(e.props, !0) && (t = !0)
                    })), t
                })), [Z, P] = e.useState(!1);
                s && Z && P(!1);
                const R = void 0 === c || s ? Z : c;
                let T;
                const O = e.useMemo((() => ({
                    adornedStart: x,
                    setAdornedStart: k,
                    color: i,
                    disabled: s,
                    error: u,
                    filled: C,
                    focused: R,
                    fullWidth: d,
                    hiddenLabel: p,
                    size: h,
                    onBlur: () => {
                        P(!1)
                    },
                    onEmpty: () => {
                        E(!1)
                    },
                    onFilled: () => {
                        E(!0)
                    },
                    onFocus: () => {
                        P(!0)
                    },
                    registerEffect: T,
                    required: m,
                    variant: v
                })), [x, i, s, u, C, R, d, p, T, m, h, v]);
                return (0, S.jsx)(jo.Provider, {
                    value: O,
                    children: (0, S.jsx)(Ba, (0, b.Z)({
                        as: l,
                        ownerState: y,
                        className: (0, Te.Z)(w.root, a),
                        ref: n
                    }, g, {children: o}))
                })
            }));

        function Va(e) {
            return (0, ft.Z)("MuiFormHelperText", e)
        }

        const Ua = (0, Ge.Z)("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
        var Ka;
        const qa = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"],
            Ya = (0, ze.ZP)("p", {
                name: "MuiFormHelperText", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, n.size && t[`size${(0, yt.Z)(n.size)}`], n.contained && t.contained, n.filled && t.filled]
                }
            })((({
                     theme: e,
                     ownerState: t
                 }) => (0, b.Z)({color: (e.vars || e).palette.text.secondary}, e.typography.caption, {
                textAlign: "left",
                marginTop: 3,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                [`&.${Ua.disabled}`]: {color: (e.vars || e).palette.text.disabled},
                [`&.${Ua.error}`]: {color: (e.vars || e).palette.error.main}
            }, "small" === t.size && {marginTop: 4}, t.contained && {marginLeft: 14, marginRight: 14}))),
            Xa = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiFormHelperText"}), {
                    children: r,
                    className: o,
                    component: a = "p"
                } = n, i = (0, Re.Z)(n, qa), l = Do({
                    props: n,
                    muiFormControl: Wo(),
                    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
                }), s = (0, b.Z)({}, n, {
                    component: a,
                    contained: "filled" === l.variant || "outlined" === l.variant,
                    variant: l.variant,
                    size: l.size,
                    disabled: l.disabled,
                    error: l.error,
                    filled: l.filled,
                    focused: l.focused,
                    required: l.required
                }), u = (e => {
                    const {
                            classes: t,
                            contained: n,
                            size: r,
                            disabled: o,
                            error: a,
                            filled: i,
                            focused: l,
                            required: s
                        } = e,
                        u = {root: ["root", o && "disabled", a && "error", r && `size${(0, yt.Z)(r)}`, n && "contained", l && "focused", i && "filled", s && "required"]};
                    return (0, Oe.Z)(u, Va, t)
                })(s);
                return (0, S.jsx)(Ya, (0, b.Z)({
                    as: a,
                    ownerState: s,
                    className: (0, Te.Z)(u.root, o),
                    ref: t
                }, i, {
                    children: " " === r ? Ka || (Ka = (0, S.jsx)("span", {
                        className: "notranslate",
                        children: "​"
                    })) : r
                }))
            }));
        o(9864);
        var Qa = o(8038);
        const Ga = e.createContext({});

        function Ja(e) {
            return (0, ft.Z)("MuiList", e)
        }

        (0, Ge.Z)("MuiList", ["root", "padding", "dense", "subheader"]);
        const ei = ["children", "className", "component", "dense", "disablePadding", "subheader"],
            ti = (0, ze.ZP)("ul", {
                name: "MuiList", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
                }
            })((({ownerState: e}) => (0, b.Z)({
                listStyle: "none",
                margin: 0,
                padding: 0,
                position: "relative"
            }, !e.disablePadding && {paddingTop: 8, paddingBottom: 8}, e.subheader && {paddingTop: 0}))),
            ni = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiList"}), {
                        children: o,
                        className: a,
                        component: i = "ul",
                        dense: l = !1,
                        disablePadding: s = !1,
                        subheader: u
                    } = r, c = (0, Re.Z)(r, ei), d = e.useMemo((() => ({dense: l})), [l]),
                    p = (0, b.Z)({}, r, {component: i, dense: l, disablePadding: s}), f = (e => {
                        const {classes: t, disablePadding: n, dense: r, subheader: o} = e,
                            a = {root: ["root", !n && "padding", r && "dense", o && "subheader"]};
                        return (0, Oe.Z)(a, Ja, t)
                    })(p);
                return (0, S.jsx)(Ga.Provider, {
                    value: d,
                    children: (0, S.jsxs)(ti, (0, b.Z)({
                        as: i,
                        className: (0, Te.Z)(f.root, a),
                        ref: n,
                        ownerState: p
                    }, c, {children: [u, o]}))
                })
            }));

        function ri(e) {
            const t = e.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        const oi = ri,
            ai = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];

        function ii(e, t, n) {
            return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild
        }

        function li(e, t, n) {
            return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild
        }

        function si(e, t) {
            if (void 0 === t) return !0;
            let n = e.innerText;
            return void 0 === n && (n = e.textContent), n = n.trim().toLowerCase(), 0 !== n.length && (t.repeating ? n[0] === t.keys[0] : 0 === n.indexOf(t.keys.join("")))
        }

        function ui(e, t, n, r, o, a) {
            let i = !1, l = o(e, t, !!t && n);
            for (; l;) {
                if (l === e.firstChild) {
                    if (i) return !1;
                    i = !0
                }
                const t = !r && (l.disabled || "true" === l.getAttribute("aria-disabled"));
                if (l.hasAttribute("tabindex") && si(l, a) && !t) return l.focus(), !0;
                l = o(e, l, n)
            }
            return !1
        }

        const ci = e.forwardRef((function (t, n) {
            const {
                    actions: r,
                    autoFocus: o = !1,
                    autoFocusItem: a = !1,
                    children: i,
                    className: l,
                    disabledItemsFocusable: s = !1,
                    disableListWrap: u = !1,
                    onKeyDown: c,
                    variant: d = "selectedMenu"
                } = t, p = (0, Re.Z)(t, ai), f = e.useRef(null),
                m = e.useRef({keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null});
            (0, Bo.Z)((() => {
                o && f.current.focus()
            }), [o]), e.useImperativeHandle(r, (() => ({
                adjustStyleForScrollbar: (e, t) => {
                    const n = !f.current.style.width;
                    if (e.clientHeight < f.current.clientHeight && n) {
                        const n = `${oi((0, Qa.Z)(e))}px`;
                        f.current.style["rtl" === t.direction ? "paddingLeft" : "paddingRight"] = n, f.current.style.width = `calc(100% + ${n})`
                    }
                    return f.current
                }
            })), []);
            const h = (0, Ie.Z)(f, n);
            let v = -1;
            e.Children.forEach(i, ((t, n) => {
                e.isValidElement(t) && (t.props.disabled || ("selectedMenu" === d && t.props.selected || -1 === v) && (v = n))
            }));
            const g = e.Children.map(i, ((t, n) => {
                if (n === v) {
                    const n = {};
                    return a && (n.autoFocus = !0), void 0 === t.props.tabIndex && "selectedMenu" === d && (n.tabIndex = 0), e.cloneElement(t, n)
                }
                return t
            }));
            return (0, S.jsx)(ni, (0, b.Z)({
                role: "menu", ref: h, className: l, onKeyDown: e => {
                    const t = f.current, n = e.key, r = (0, Qa.Z)(t).activeElement;
                    if ("ArrowDown" === n) e.preventDefault(), ui(t, r, u, s, ii); else if ("ArrowUp" === n) e.preventDefault(), ui(t, r, u, s, li); else if ("Home" === n) e.preventDefault(), ui(t, null, u, s, ii); else if ("End" === n) e.preventDefault(), ui(t, null, u, s, li); else if (1 === n.length) {
                        const o = m.current, a = n.toLowerCase(), i = performance.now();
                        o.keys.length > 0 && (i - o.lastTime > 500 ? (o.keys = [], o.repeating = !0, o.previousKeyMatched = !0) : o.repeating && a !== o.keys[0] && (o.repeating = !1)), o.lastTime = i, o.keys.push(a);
                        const l = r && !o.repeating && si(r, o);
                        o.previousKeyMatched && (l || ui(t, r, !1, s, ii, o)) ? e.preventDefault() : o.previousKeyMatched = !1
                    }
                    c && c(e)
                }, tabIndex: o ? 0 : -1
            }, p, {children: g}))
        })), di = e => {
            let t;
            return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2)
        };

        function pi(e) {
            return (0, ft.Z)("MuiPaper", e)
        }

        (0, Ge.Z)("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
        const fi = ["className", "component", "elevation", "square", "variant"], mi = (0, ze.ZP)("div", {
            name: "MuiPaper", slot: "Root", overridesResolver: (e, t) => {
                const {ownerState: n} = e;
                return [t.root, t[n.variant], !n.square && t.rounded, "elevation" === n.variant && t[`elevation${n.elevation}`]]
            }
        })((({theme: e, ownerState: t}) => {
            var n;
            return (0, b.Z)({
                backgroundColor: (e.vars || e).palette.background.paper,
                color: (e.vars || e).palette.text.primary,
                transition: e.transitions.create("box-shadow")
            }, !t.square && {borderRadius: e.shape.borderRadius}, "outlined" === t.variant && {border: `1px solid ${(e.vars || e).palette.divider}`}, "elevation" === t.variant && (0, b.Z)({boxShadow: (e.vars || e).shadows[t.elevation]}, !e.vars && "dark" === e.palette.mode && {backgroundImage: `linear-gradient(${(0, Me.Fq)("#fff", di(t.elevation))}, ${(0, Me.Fq)("#fff", di(t.elevation))})`}, e.vars && {backgroundImage: null == (n = e.vars.overlays) ? void 0 : n[t.elevation]}))
        })), hi = e.forwardRef((function (e, t) {
            const n = (0, Ne.Z)({props: e, name: "MuiPaper"}), {
                    className: r,
                    component: o = "div",
                    elevation: a = 1,
                    square: i = !1,
                    variant: l = "elevation"
                } = n, s = (0, Re.Z)(n, fi), u = (0, b.Z)({}, n, {component: o, elevation: a, square: i, variant: l}),
                c = (e => {
                    const {square: t, elevation: n, variant: r, classes: o} = e,
                        a = {root: ["root", r, !t && "rounded", "elevation" === r && `elevation${n}`]};
                    return (0, Oe.Z)(a, pi, o)
                })(u);
            return (0, S.jsx)(mi, (0, b.Z)({as: o, ownerState: u, className: (0, Te.Z)(c.root, r), ref: t}, s))
        }));
        var vi = o(7144), gi = o(5340), bi = o(3633), yi = o(9064);

        function wi(e, t) {
            t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
        }

        function xi(e) {
            return parseInt((0, No.Z)(e).getComputedStyle(e).paddingRight, 10) || 0
        }

        function Si(e, t, n, r, o) {
            const a = [t, n, ...r];
            [].forEach.call(e.children, (e => {
                const t = -1 === a.indexOf(e), n = !function (e) {
                    const t = -1 !== ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName),
                        n = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
                    return t || n
                }(e);
                t && n && wi(e, o)
            }))
        }

        function ki(e, t) {
            let n = -1;
            return e.some(((e, r) => !!t(e) && (n = r, !0))), n
        }

        const Ci = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

        function Ei(e) {
            const t = [], n = [];
            return Array.from(e.querySelectorAll(Ci)).forEach(((e, r) => {
                const o = function (e) {
                    const t = parseInt(e.getAttribute("tabindex") || "", 10);
                    return Number.isNaN(t) ? "true" === e.contentEditable || ("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex") ? 0 : e.tabIndex : t
                }(e);
                -1 !== o && function (e) {
                    return !(e.disabled || "INPUT" === e.tagName && "hidden" === e.type || function (e) {
                        if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
                        if (!e.name) return !1;
                        const t = t => e.ownerDocument.querySelector(`input[type="radio"]${t}`);
                        let n = t(`[name="${e.name}"]:checked`);
                        return n || (n = t(`[name="${e.name}"]`)), n !== e
                    }(e))
                }(e) && (0 === o ? t.push(e) : n.push({documentOrder: r, tabIndex: o, node: e}))
            })), n.sort(((e, t) => e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex)).map((e => e.node)).concat(t)
        }

        function Zi() {
            return !0
        }

        const Pi = function (t) {
            const {
                    children: n,
                    disableAutoFocus: r = !1,
                    disableEnforceFocus: o = !1,
                    disableRestoreFocus: a = !1,
                    getTabbable: i = Ei,
                    isEnabled: l = Zi,
                    open: s
                } = t, u = e.useRef(!1), c = e.useRef(null), d = e.useRef(null), p = e.useRef(null), f = e.useRef(null),
                m = e.useRef(!1), h = e.useRef(null), v = (0, Ut.Z)(n.ref, h), g = e.useRef(null);
            e.useEffect((() => {
                s && h.current && (m.current = !r)
            }), [r, s]), e.useEffect((() => {
                if (!s || !h.current) return;
                const e = (0, qt.Z)(h.current);
                return h.current.contains(e.activeElement) || (h.current.hasAttribute("tabIndex") || h.current.setAttribute("tabIndex", "-1"), m.current && h.current.focus()), () => {
                    a || (p.current && p.current.focus && (u.current = !0, p.current.focus()), p.current = null)
                }
            }), [s]), e.useEffect((() => {
                if (!s || !h.current) return;
                const e = (0, qt.Z)(h.current), t = t => {
                    const {current: n} = h;
                    if (null !== n) if (e.hasFocus() && !o && l() && !u.current) {
                        if (!n.contains(e.activeElement)) {
                            if (t && f.current !== t.target || e.activeElement !== f.current) f.current = null; else if (null !== f.current) return;
                            if (!m.current) return;
                            let o = [];
                            if (e.activeElement !== c.current && e.activeElement !== d.current || (o = i(h.current)), o.length > 0) {
                                var r, a;
                                const e = Boolean((null == (r = g.current) ? void 0 : r.shiftKey) && "Tab" === (null == (a = g.current) ? void 0 : a.key)),
                                    t = o[0], n = o[o.length - 1];
                                "string" != typeof t && "string" != typeof n && (e ? n.focus() : t.focus())
                            } else n.focus()
                        }
                    } else u.current = !1
                }, n = t => {
                    g.current = t, !o && l() && "Tab" === t.key && e.activeElement === h.current && t.shiftKey && (u.current = !0, d.current && d.current.focus())
                };
                e.addEventListener("focusin", t), e.addEventListener("keydown", n, !0);
                const r = setInterval((() => {
                    e.activeElement && "BODY" === e.activeElement.tagName && t(null)
                }), 50);
                return () => {
                    clearInterval(r), e.removeEventListener("focusin", t), e.removeEventListener("keydown", n, !0)
                }
            }), [r, o, a, l, s, i]);
            const b = e => {
                null === p.current && (p.current = e.relatedTarget), m.current = !0
            };
            return (0, S.jsxs)(e.Fragment, {
                children: [(0, S.jsx)("div", {
                    tabIndex: s ? 0 : -1,
                    onFocus: b,
                    ref: c,
                    "data-testid": "sentinelStart"
                }), e.cloneElement(n, {
                    ref: v, onFocus: e => {
                        null === p.current && (p.current = e.relatedTarget), m.current = !0, f.current = e.target;
                        const t = n.props.onFocus;
                        t && t(e)
                    }
                }), (0, S.jsx)("div", {tabIndex: s ? 0 : -1, onFocus: b, ref: d, "data-testid": "sentinelEnd"})]
            })
        };

        function Ri(e) {
            return (0, ft.Z)("MuiModal", e)
        }

        (0, Ge.Z)("MuiModal", ["root", "hidden"]);
        const Ti = ["children", "classes", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"],
            Oi = new class {
                constructor() {
                    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
                }

                add(e, t) {
                    let n = this.modals.indexOf(e);
                    if (-1 !== n) return n;
                    n = this.modals.length, this.modals.push(e), e.modalRef && wi(e.modalRef, !1);
                    const r = function (e) {
                        const t = [];
                        return [].forEach.call(e.children, (e => {
                            "true" === e.getAttribute("aria-hidden") && t.push(e)
                        })), t
                    }(t);
                    Si(t, e.mount, e.modalRef, r, !0);
                    const o = ki(this.containers, (e => e.container === t));
                    return -1 !== o ? (this.containers[o].modals.push(e), n) : (this.containers.push({
                        modals: [e],
                        container: t,
                        restore: null,
                        hiddenSiblings: r
                    }), n)
                }

                mount(e, t) {
                    const n = ki(this.containers, (t => -1 !== t.modals.indexOf(e))), r = this.containers[n];
                    r.restore || (r.restore = function (e, t) {
                        const n = [], r = e.container;
                        if (!t.disableScrollLock) {
                            if (function (e) {
                                const t = (0, qt.Z)(e);
                                return t.body === e ? (0, No.Z)(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
                            }(r)) {
                                const e = ri((0, qt.Z)(r));
                                n.push({
                                    value: r.style.paddingRight,
                                    property: "padding-right",
                                    el: r
                                }), r.style.paddingRight = `${xi(r) + e}px`;
                                const t = (0, qt.Z)(r).querySelectorAll(".mui-fixed");
                                [].forEach.call(t, (t => {
                                    n.push({
                                        value: t.style.paddingRight,
                                        property: "padding-right",
                                        el: t
                                    }), t.style.paddingRight = `${xi(t) + e}px`
                                }))
                            }
                            let e;
                            if (r.parentNode instanceof DocumentFragment) e = (0, qt.Z)(r).body; else {
                                const t = r.parentElement, n = (0, No.Z)(r);
                                e = "HTML" === (null == t ? void 0 : t.nodeName) && "scroll" === n.getComputedStyle(t).overflowY ? t : r
                            }
                            n.push({value: e.style.overflow, property: "overflow", el: e}, {
                                value: e.style.overflowX,
                                property: "overflow-x",
                                el: e
                            }, {value: e.style.overflowY, property: "overflow-y", el: e}), e.style.overflow = "hidden"
                        }
                        return () => {
                            n.forEach((({value: e, el: t, property: n}) => {
                                e ? t.style.setProperty(n, e) : t.style.removeProperty(n)
                            }))
                        }
                    }(r, t))
                }

                remove(e, t = !0) {
                    const n = this.modals.indexOf(e);
                    if (-1 === n) return n;
                    const r = ki(this.containers, (t => -1 !== t.modals.indexOf(e))), o = this.containers[r];
                    if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(n, 1), 0 === o.modals.length) o.restore && o.restore(), e.modalRef && wi(e.modalRef, t), Si(o.container, e.mount, e.modalRef, o.hiddenSiblings, !1), this.containers.splice(r, 1); else {
                        const e = o.modals[o.modals.length - 1];
                        e.modalRef && wi(e.modalRef, !1)
                    }
                    return n
                }

                isTopModal(e) {
                    return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
                }
            }, Mi = e.forwardRef((function (t, n) {
                var r, o;
                const {
                        children: a,
                        classes: i,
                        closeAfterTransition: l = !1,
                        component: s,
                        container: u,
                        disableAutoFocus: c = !1,
                        disableEnforceFocus: d = !1,
                        disableEscapeKeyDown: p = !1,
                        disablePortal: f = !1,
                        disableRestoreFocus: m = !1,
                        disableScrollLock: h = !1,
                        hideBackdrop: v = !1,
                        keepMounted: g = !1,
                        manager: y = Oi,
                        onBackdropClick: w,
                        onClose: x,
                        onKeyDown: k,
                        open: C,
                        onTransitionEnter: E,
                        onTransitionExited: Z,
                        slotProps: P = {},
                        slots: R = {}
                    } = t, T = (0, Re.Z)(t, Ti), [O, M] = e.useState(!C), z = e.useRef({}), N = e.useRef(null),
                    I = e.useRef(null), L = (0, Ut.Z)(I, n), _ = function (e) {
                        return !!e && e.props.hasOwnProperty("in")
                    }(a), A = null == (r = t["aria-hidden"]) || r,
                    $ = () => (z.current.modalRef = I.current, z.current.mountNode = N.current, z.current), F = () => {
                        y.mount($(), {disableScrollLock: h}), I.current && (I.current.scrollTop = 0)
                    }, D = (0, bi.Z)((() => {
                        const e = function (e) {
                            return "function" == typeof e ? e() : e
                        }(u) || (0, qt.Z)(N.current).body;
                        y.add($(), e), I.current && F()
                    })), j = e.useCallback((() => y.isTopModal($())), [y]), W = (0, bi.Z)((e => {
                        N.current = e, e && I.current && (C && j() ? F() : wi(I.current, A))
                    })), B = e.useCallback((() => {
                        y.remove($(), A)
                    }), [y, A]);
                e.useEffect((() => () => {
                    B()
                }), [B]), e.useEffect((() => {
                    C ? D() : _ && l || B()
                }), [C, B, _, l, D]);
                const H = (0, b.Z)({}, t, {
                    classes: i,
                    closeAfterTransition: l,
                    disableAutoFocus: c,
                    disableEnforceFocus: d,
                    disableEscapeKeyDown: p,
                    disablePortal: f,
                    disableRestoreFocus: m,
                    disableScrollLock: h,
                    exited: O,
                    hideBackdrop: v,
                    keepMounted: g
                }), V = (e => {
                    const {open: t, exited: n, classes: r} = e,
                        o = {root: ["root", !t && n && "hidden"], backdrop: ["backdrop"]};
                    return (0, Oe.Z)(o, Ri, r)
                })(H), U = {};
                void 0 === a.props.tabIndex && (U.tabIndex = "-1"), _ && (U.onEnter = (0, yi.Z)((() => {
                    M(!1), E && E()
                }), a.props.onEnter), U.onExited = (0, yi.Z)((() => {
                    M(!0), Z && Z(), l && B()
                }), a.props.onExited));
                const K = null != (o = null != s ? s : R.root) ? o : "div", q = br({
                    elementType: K,
                    externalSlotProps: P.root,
                    externalForwardedProps: T,
                    additionalProps: {
                        ref: L, role: "presentation", onKeyDown: e => {
                            k && k(e), "Escape" === e.key && j() && (p || (e.stopPropagation(), x && x(e, "escapeKeyDown")))
                        }
                    },
                    className: V.root,
                    ownerState: H
                }), Y = R.backdrop, X = br({
                    elementType: Y,
                    externalSlotProps: P.backdrop,
                    additionalProps: {
                        "aria-hidden": !0, onClick: e => {
                            e.target === e.currentTarget && (w && w(e), x && x(e, "backdropClick"))
                        }, open: C
                    },
                    className: V.backdrop,
                    ownerState: H
                });
                return g || C || _ && !O ? (0, S.jsx)(fr, {
                    ref: W,
                    container: u,
                    disablePortal: f,
                    children: (0, S.jsxs)(K, (0, b.Z)({}, q, {
                        children: [!v && Y ? (0, S.jsx)(Y, (0, b.Z)({}, X)) : null, (0, S.jsx)(Pi, {
                            disableEnforceFocus: d,
                            disableAutoFocus: c,
                            disableRestoreFocus: m,
                            isEnabled: j,
                            open: C,
                            children: e.cloneElement(a, U)
                        })]
                    }))
                }) : null
            })),
            zi = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
            Ni = {entering: {opacity: 1}, entered: {opacity: 1}}, Ii = e.forwardRef((function (t, n) {
                const r = Rt(), o = {
                    enter: r.transitions.duration.enteringScreen,
                    exit: r.transitions.duration.leavingScreen
                }, {
                    addEndListener: a,
                    appear: i = !0,
                    children: l,
                    easing: s,
                    in: u,
                    onEnter: c,
                    onEntered: d,
                    onEntering: p,
                    onExit: f,
                    onExited: m,
                    onExiting: h,
                    style: v,
                    timeout: g = o,
                    TransitionComponent: y = At
                } = t, w = (0, Re.Z)(t, zi), x = e.useRef(null), k = (0, Ie.Z)(x, l.ref, n), C = e => t => {
                    if (e) {
                        const n = x.current;
                        void 0 === t ? e(n) : e(n, t)
                    }
                }, E = C(p), Z = C(((e, t) => {
                    $t(e);
                    const n = Ft({style: v, timeout: g, easing: s}, {mode: "enter"});
                    e.style.webkitTransition = r.transitions.create("opacity", n), e.style.transition = r.transitions.create("opacity", n), c && c(e, t)
                })), P = C(d), R = C(h), T = C((e => {
                    const t = Ft({style: v, timeout: g, easing: s}, {mode: "exit"});
                    e.style.webkitTransition = r.transitions.create("opacity", t), e.style.transition = r.transitions.create("opacity", t), f && f(e)
                })), O = C(m);
                return (0, S.jsx)(y, (0, b.Z)({
                    appear: i,
                    in: u,
                    nodeRef: x,
                    onEnter: Z,
                    onEntered: P,
                    onEntering: E,
                    onExit: T,
                    onExited: O,
                    onExiting: R,
                    addEndListener: e => {
                        a && a(x.current, e)
                    },
                    timeout: g
                }, w, {
                    children: (t, n) => e.cloneElement(l, (0, b.Z)({
                        style: (0, b.Z)({
                            opacity: 0,
                            visibility: "exited" !== t || u ? void 0 : "hidden"
                        }, Ni[t], v, l.props.style), ref: k
                    }, n))
                }))
            }));

        function Li(e) {
            return (0, ft.Z)("MuiBackdrop", e)
        }

        (0, Ge.Z)("MuiBackdrop", ["root", "invisible"]);
        const _i = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "slotProps", "slots", "transitionDuration", "TransitionComponent"],
            Ai = (0, ze.ZP)("div", {
                name: "MuiBackdrop", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, n.invisible && t.invisible]
                }
            })((({ownerState: e}) => (0, b.Z)({
                position: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                WebkitTapHighlightColor: "transparent"
            }, e.invisible && {backgroundColor: "transparent"}))), $i = e.forwardRef((function (e, t) {
                var n, r, o;
                const a = (0, Ne.Z)({props: e, name: "MuiBackdrop"}), {
                    children: i,
                    component: l = "div",
                    components: s = {},
                    componentsProps: u = {},
                    className: c,
                    invisible: d = !1,
                    open: p,
                    slotProps: f = {},
                    slots: m = {},
                    transitionDuration: h,
                    TransitionComponent: v = Ii
                } = a, g = (0, Re.Z)(a, _i), y = (0, b.Z)({}, a, {component: l, invisible: d}), w = (e => {
                    const {classes: t, invisible: n} = e, r = {root: ["root", n && "invisible"]};
                    return (0, Oe.Z)(r, Li, t)
                })(y), x = null != (n = f.root) ? n : u.root;
                return (0, S.jsx)(v, (0, b.Z)({
                    in: p,
                    timeout: h
                }, g, {
                    children: (0, S.jsx)(Ai, (0, b.Z)({"aria-hidden": !0}, x, {
                        as: null != (r = null != (o = m.root) ? o : s.Root) ? r : l,
                        className: (0, Te.Z)(w.root, c, null == x ? void 0 : x.className),
                        ownerState: (0, b.Z)({}, y, null == x ? void 0 : x.ownerState),
                        classes: w,
                        ref: t,
                        children: i
                    }))
                }))
            })),
            Fi = ["BackdropComponent", "BackdropProps", "closeAfterTransition", "children", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "slotProps", "slots", "theme"],
            Di = (0, ze.ZP)("div", {
                name: "MuiModal", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, !n.open && n.exited && t.hidden]
                }
            })((({theme: e, ownerState: t}) => (0, b.Z)({
                position: "fixed",
                zIndex: (e.vars || e).zIndex.modal,
                right: 0,
                bottom: 0,
                top: 0,
                left: 0
            }, !t.open && t.exited && {visibility: "hidden"}))), ji = (0, ze.ZP)($i, {
                name: "MuiModal",
                slot: "Backdrop",
                overridesResolver: (e, t) => t.backdrop
            })({zIndex: -1}), Wi = e.forwardRef((function (t, n) {
                var r, o, a, i, l, s;
                const u = (0, Ne.Z)({name: "MuiModal", props: t}), {
                        BackdropComponent: c = ji,
                        BackdropProps: d,
                        closeAfterTransition: p = !1,
                        children: f,
                        component: m,
                        components: h = {},
                        componentsProps: v = {},
                        disableAutoFocus: g = !1,
                        disableEnforceFocus: y = !1,
                        disableEscapeKeyDown: w = !1,
                        disablePortal: x = !1,
                        disableRestoreFocus: k = !1,
                        disableScrollLock: C = !1,
                        hideBackdrop: E = !1,
                        keepMounted: Z = !1,
                        slotProps: P,
                        slots: R,
                        theme: T
                    } = u, O = (0, Re.Z)(u, Fi), [M, z] = e.useState(!0), N = {
                        closeAfterTransition: p,
                        disableAutoFocus: g,
                        disableEnforceFocus: y,
                        disableEscapeKeyDown: w,
                        disablePortal: x,
                        disableRestoreFocus: k,
                        disableScrollLock: C,
                        hideBackdrop: E,
                        keepMounted: Z
                    }, I = (0, b.Z)({}, u, N, {exited: M}), L = (e => e.classes)(I),
                    _ = null != (r = null != (o = null == R ? void 0 : R.root) ? o : h.Root) ? r : Di,
                    A = null != (a = null != (i = null == R ? void 0 : R.backdrop) ? i : h.Backdrop) ? a : c,
                    $ = null != (l = null == P ? void 0 : P.root) ? l : v.root,
                    F = null != (s = null == P ? void 0 : P.backdrop) ? s : v.backdrop;
                return (0, S.jsx)(Mi, (0, b.Z)({
                    slots: {root: _, backdrop: A},
                    slotProps: {
                        root: () => (0, b.Z)({}, vr($, I), !Et(_) && {as: m, theme: T}),
                        backdrop: () => (0, b.Z)({}, d, vr(F, I))
                    },
                    onTransitionEnter: () => z(!1),
                    onTransitionExited: () => z(!0),
                    ref: n
                }, O, {classes: L}, N, {children: f}))
            }));

        function Bi(e) {
            return (0, ft.Z)("MuiPopover", e)
        }

        (0, Ge.Z)("MuiPopover", ["root", "paper"]);
        const Hi = ["onEntering"],
            Vi = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];

        function Ui(e, t) {
            let n = 0;
            return "number" == typeof t ? n = t : "center" === t ? n = e.height / 2 : "bottom" === t && (n = e.height), n
        }

        function Ki(e, t) {
            let n = 0;
            return "number" == typeof t ? n = t : "center" === t ? n = e.width / 2 : "right" === t && (n = e.width), n
        }

        function qi(e) {
            return [e.horizontal, e.vertical].map((e => "number" == typeof e ? `${e}px` : e)).join(" ")
        }

        function Yi(e) {
            return "function" == typeof e ? e() : e
        }

        const Xi = (0, ze.ZP)(Wi, {name: "MuiPopover", slot: "Root", overridesResolver: (e, t) => t.root})({}),
            Qi = (0, ze.ZP)(hi, {
                name: "MuiPopover",
                slot: "Paper",
                overridesResolver: (e, t) => t.paper
            })({
                position: "absolute",
                overflowY: "auto",
                overflowX: "hidden",
                minWidth: 16,
                minHeight: 16,
                maxWidth: "calc(100% - 32px)",
                maxHeight: "calc(100% - 32px)",
                outline: 0
            }), Gi = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiPopover"}), {
                        action: o,
                        anchorEl: a,
                        anchorOrigin: i = {vertical: "top", horizontal: "left"},
                        anchorPosition: l,
                        anchorReference: s = "anchorEl",
                        children: u,
                        className: c,
                        container: d,
                        elevation: p = 8,
                        marginThreshold: f = 16,
                        open: m,
                        PaperProps: h = {},
                        transformOrigin: v = {vertical: "top", horizontal: "left"},
                        TransitionComponent: g = Vt,
                        transitionDuration: y = "auto",
                        TransitionProps: {onEntering: w} = {}
                    } = r, x = (0, Re.Z)(r.TransitionProps, Hi), k = (0, Re.Z)(r, Vi), C = e.useRef(), E = (0, Ie.Z)(C, h.ref),
                    Z = (0, b.Z)({}, r, {
                        anchorOrigin: i,
                        anchorReference: s,
                        elevation: p,
                        marginThreshold: f,
                        PaperProps: h,
                        transformOrigin: v,
                        TransitionComponent: g,
                        transitionDuration: y,
                        TransitionProps: x
                    }), P = (e => {
                        const {classes: t} = e;
                        return (0, Oe.Z)({root: ["root"], paper: ["paper"]}, Bi, t)
                    })(Z), R = e.useCallback((() => {
                        if ("anchorPosition" === s) return l;
                        const e = Yi(a), t = (e && 1 === e.nodeType ? e : (0, Qa.Z)(C.current).body).getBoundingClientRect();
                        return {top: t.top + Ui(t, i.vertical), left: t.left + Ki(t, i.horizontal)}
                    }), [a, i.horizontal, i.vertical, l, s]), T = e.useCallback((e => ({
                        vertical: Ui(e, v.vertical),
                        horizontal: Ki(e, v.horizontal)
                    })), [v.horizontal, v.vertical]), O = e.useCallback((e => {
                        const t = {width: e.offsetWidth, height: e.offsetHeight}, n = T(t);
                        if ("none" === s) return {top: null, left: null, transformOrigin: qi(n)};
                        const r = R();
                        let o = r.top - n.vertical, i = r.left - n.horizontal;
                        const l = o + t.height, u = i + t.width, c = (0, gi.Z)(Yi(a)), d = c.innerHeight - f,
                            p = c.innerWidth - f;
                        if (o < f) {
                            const e = o - f;
                            o -= e, n.vertical += e
                        } else if (l > d) {
                            const e = l - d;
                            o -= e, n.vertical += e
                        }
                        if (i < f) {
                            const e = i - f;
                            i -= e, n.horizontal += e
                        } else if (u > p) {
                            const e = u - p;
                            i -= e, n.horizontal += e
                        }
                        return {top: `${Math.round(o)}px`, left: `${Math.round(i)}px`, transformOrigin: qi(n)}
                    }), [a, s, R, T, f]), [M, z] = e.useState(m), N = e.useCallback((() => {
                        const e = C.current;
                        if (!e) return;
                        const t = O(e);
                        null !== t.top && (e.style.top = t.top), null !== t.left && (e.style.left = t.left), e.style.transformOrigin = t.transformOrigin, z(!0)
                    }), [O]);
                e.useEffect((() => {
                    m && N()
                })), e.useImperativeHandle(o, (() => m ? {
                    updatePosition: () => {
                        N()
                    }
                } : null), [m, N]), e.useEffect((() => {
                    if (!m) return;
                    const e = (0, vi.Z)((() => {
                        N()
                    })), t = (0, gi.Z)(a);
                    return t.addEventListener("resize", e), () => {
                        e.clear(), t.removeEventListener("resize", e)
                    }
                }), [a, m, N]);
                let I = y;
                "auto" !== y || g.muiSupportAuto || (I = void 0);
                const L = d || (a ? (0, Qa.Z)(Yi(a)).body : void 0);
                return (0, S.jsx)(Xi, (0, b.Z)({
                    BackdropProps: {invisible: !0},
                    className: (0, Te.Z)(P.root, c),
                    container: L,
                    open: m,
                    ref: n,
                    ownerState: Z
                }, k, {
                    children: (0, S.jsx)(g, (0, b.Z)({
                        appear: !0, in: m, onEntering: (e, t) => {
                            w && w(e, t), N()
                        }, onExited: () => {
                            z(!1)
                        }, timeout: I
                    }, x, {
                        children: (0, S.jsx)(Qi, (0, b.Z)({elevation: p}, h, {
                            ref: E,
                            className: (0, Te.Z)(P.paper, h.className)
                        }, M ? void 0 : {style: (0, b.Z)({}, h.style, {opacity: 0})}, {ownerState: Z, children: u}))
                    }))
                }))
            })), Ji = Gi;

        function el(e) {
            return (0, ft.Z)("MuiMenu", e)
        }

        (0, Ge.Z)("MuiMenu", ["root", "paper", "list"]);
        const tl = ["onEntering"],
            nl = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"],
            rl = {vertical: "top", horizontal: "right"}, ol = {vertical: "top", horizontal: "left"},
            al = (0, ze.ZP)(Ji, {
                shouldForwardProp: e => (0, ze.FO)(e) || "classes" === e,
                name: "MuiMenu",
                slot: "Root",
                overridesResolver: (e, t) => t.root
            })({}), il = (0, ze.ZP)(hi, {
                name: "MuiMenu",
                slot: "Paper",
                overridesResolver: (e, t) => t.paper
            })({maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch"}),
            ll = (0, ze.ZP)(ci, {name: "MuiMenu", slot: "List", overridesResolver: (e, t) => t.list})({outline: 0}),
            sl = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiMenu"}), {
                        autoFocus: o = !0,
                        children: a,
                        disableAutoFocusItem: i = !1,
                        MenuListProps: l = {},
                        onClose: s,
                        open: u,
                        PaperProps: c = {},
                        PopoverClasses: d,
                        transitionDuration: p = "auto",
                        TransitionProps: {onEntering: f} = {},
                        variant: m = "selectedMenu"
                    } = r, h = (0, Re.Z)(r.TransitionProps, tl), v = (0, Re.Z)(r, nl), g = Rt(), y = "rtl" === g.direction,
                    w = (0, b.Z)({}, r, {
                        autoFocus: o,
                        disableAutoFocusItem: i,
                        MenuListProps: l,
                        onEntering: f,
                        PaperProps: c,
                        transitionDuration: p,
                        TransitionProps: h,
                        variant: m
                    }), x = (e => {
                        const {classes: t} = e;
                        return (0, Oe.Z)({root: ["root"], paper: ["paper"], list: ["list"]}, el, t)
                    })(w), k = o && !i && u, C = e.useRef(null);
                let E = -1;
                return e.Children.map(a, ((t, n) => {
                    e.isValidElement(t) && (t.props.disabled || ("selectedMenu" === m && t.props.selected || -1 === E) && (E = n))
                })), (0, S.jsx)(al, (0, b.Z)({
                    onClose: s,
                    anchorOrigin: {vertical: "bottom", horizontal: y ? "right" : "left"},
                    transformOrigin: y ? rl : ol,
                    PaperProps: (0, b.Z)({component: il}, c, {classes: (0, b.Z)({}, c.classes, {root: x.paper})}),
                    className: x.root,
                    open: u,
                    ref: n,
                    transitionDuration: p,
                    TransitionProps: (0, b.Z)({
                        onEntering: (e, t) => {
                            C.current && C.current.adjustStyleForScrollbar(e, g), f && f(e, t)
                        }
                    }, h),
                    ownerState: w
                }, v, {
                    classes: d, children: (0, S.jsx)(ll, (0, b.Z)({
                        onKeyDown: e => {
                            "Tab" === e.key && (e.preventDefault(), s && s(e, "tabKeyDown"))
                        }, actions: C, autoFocus: o && (-1 === E || i), autoFocusItem: k, variant: m
                    }, l, {className: (0, Te.Z)(x.list, l.className), children: a}))
                }))
            }));

        function ul(e) {
            return (0, ft.Z)("MuiNativeSelect", e)
        }

        const cl = (0, Ge.Z)("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]),
            dl = ["className", "disabled", "IconComponent", "inputRef", "variant"],
            pl = ({ownerState: e, theme: t}) => (0, b.Z)({
                MozAppearance: "none",
                WebkitAppearance: "none",
                userSelect: "none",
                borderRadius: 0,
                cursor: "pointer",
                "&:focus": (0, b.Z)({}, t.vars ? {backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`} : {backgroundColor: "light" === t.palette.mode ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"}, {borderRadius: 0}),
                "&::-ms-expand": {display: "none"},
                [`&.${cl.disabled}`]: {cursor: "default"},
                "&[multiple]": {height: "auto"},
                "&:not([multiple]) option, &:not([multiple]) optgroup": {backgroundColor: (t.vars || t).palette.background.paper},
                "&&&": {paddingRight: 24, minWidth: 16}
            }, "filled" === e.variant && {"&&&": {paddingRight: 32}}, "outlined" === e.variant && {
                borderRadius: (t.vars || t).shape.borderRadius,
                "&:focus": {borderRadius: (t.vars || t).shape.borderRadius},
                "&&&": {paddingRight: 32}
            }), fl = (0, ze.ZP)("select", {
                name: "MuiNativeSelect",
                slot: "Select",
                shouldForwardProp: ze.FO,
                overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.select, t[n.variant], {[`&.${cl.multiple}`]: t.multiple}]
                }
            })(pl), ml = ({ownerState: e, theme: t}) => (0, b.Z)({
                position: "absolute",
                right: 0,
                top: "calc(50% - .5em)",
                pointerEvents: "none",
                color: (t.vars || t).palette.action.active,
                [`&.${cl.disabled}`]: {color: (t.vars || t).palette.action.disabled}
            }, e.open && {transform: "rotate(180deg)"}, "filled" === e.variant && {right: 7}, "outlined" === e.variant && {right: 7}),
            hl = (0, ze.ZP)("svg", {
                name: "MuiNativeSelect", slot: "Icon", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.icon, n.variant && t[`icon${(0, yt.Z)(n.variant)}`], n.open && t.iconOpen]
                }
            })(ml), vl = e.forwardRef((function (t, n) {
                const {className: r, disabled: o, IconComponent: a, inputRef: i, variant: l = "standard"} = t,
                    s = (0, Re.Z)(t, dl), u = (0, b.Z)({}, t, {disabled: o, variant: l}), c = (e => {
                        const {classes: t, variant: n, disabled: r, multiple: o, open: a} = e, i = {
                            select: ["select", n, r && "disabled", o && "multiple"],
                            icon: ["icon", `icon${(0, yt.Z)(n)}`, a && "iconOpen", r && "disabled"]
                        };
                        return (0, Oe.Z)(i, ul, t)
                    })(u);
                return (0, S.jsxs)(e.Fragment, {
                    children: [(0, S.jsx)(fl, (0, b.Z)({
                        ownerState: u,
                        className: (0, Te.Z)(c.select, r),
                        disabled: o,
                        ref: i || n
                    }, s)), t.multiple ? null : (0, S.jsx)(hl, {as: a, ownerState: u, className: c.icon})]
                })
            }));

        function gl(e) {
            return (0, ft.Z)("MuiSelect", e)
        }

        const bl = (0, Ge.Z)("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
        var yl;
        const wl = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"],
            xl = (0, ze.ZP)("div", {
                name: "MuiSelect", slot: "Select", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [{[`&.${bl.select}`]: t.select}, {[`&.${bl.select}`]: t[n.variant]}, {[`&.${bl.multiple}`]: t.multiple}]
                }
            })(pl, {
                [`&.${bl.select}`]: {
                    height: "auto",
                    minHeight: "1.4375em",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                }
            }), Sl = (0, ze.ZP)("svg", {
                name: "MuiSelect", slot: "Icon", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.icon, n.variant && t[`icon${(0, yt.Z)(n.variant)}`], n.open && t.iconOpen]
                }
            })(ml), kl = (0, ze.ZP)("input", {
                shouldForwardProp: e => (0, ze.Dz)(e) && "classes" !== e,
                name: "MuiSelect",
                slot: "NativeInput",
                overridesResolver: (e, t) => t.nativeInput
            })({
                bottom: 0,
                left: 0,
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                width: "100%",
                boxSizing: "border-box"
            });

        function Cl(e, t) {
            return "object" == typeof t && null !== t ? e === t : String(e) === String(t)
        }

        function El(e) {
            return null == e || "string" == typeof e && !e.trim()
        }

        const Zl = e.forwardRef((function (t, n) {
            const {
                    "aria-describedby": r,
                    "aria-label": o,
                    autoFocus: a,
                    autoWidth: i,
                    children: l,
                    className: s,
                    defaultOpen: u,
                    defaultValue: c,
                    disabled: d,
                    displayEmpty: p,
                    IconComponent: f,
                    inputRef: m,
                    labelId: h,
                    MenuProps: v = {},
                    multiple: g,
                    name: y,
                    onBlur: w,
                    onChange: x,
                    onClose: k,
                    onFocus: C,
                    onOpen: E,
                    open: Z,
                    readOnly: P,
                    renderValue: R,
                    SelectDisplayProps: T = {},
                    tabIndex: O,
                    value: M,
                    variant: z = "standard"
                } = t, N = (0, Re.Z)(t, wl), [I, L] = (0, Or.Z)({
                    controlled: M,
                    default: c,
                    name: "Select"
                }), [_, A] = (0, Or.Z)({controlled: Z, default: u, name: "Select"}), $ = e.useRef(null),
                F = e.useRef(null), [D, j] = e.useState(null), {current: W} = e.useRef(null != Z), [B, H] = e.useState(),
                V = (0, Ie.Z)(n, m), U = e.useCallback((e => {
                    F.current = e, e && j(e)
                }), []), K = null == D ? void 0 : D.parentNode;
            e.useImperativeHandle(V, (() => ({
                focus: () => {
                    F.current.focus()
                }, node: $.current, value: I
            })), [I]), e.useEffect((() => {
                u && _ && D && !W && (H(i ? null : K.clientWidth), F.current.focus())
            }), [D, i]), e.useEffect((() => {
                a && F.current.focus()
            }), [a]), e.useEffect((() => {
                if (!h) return;
                const e = (0, Qa.Z)(F.current).getElementById(h);
                if (e) {
                    const t = () => {
                        getSelection().isCollapsed && F.current.focus()
                    };
                    return e.addEventListener("click", t), () => {
                        e.removeEventListener("click", t)
                    }
                }
            }), [h]);
            const q = (e, t) => {
                e ? E && E(t) : k && k(t), W || (H(i ? null : K.clientWidth), A(e))
            }, Y = e.Children.toArray(l), X = e => t => {
                let n;
                if (t.currentTarget.hasAttribute("tabindex")) {
                    if (g) {
                        n = Array.isArray(I) ? I.slice() : [];
                        const t = I.indexOf(e.props.value);
                        -1 === t ? n.push(e.props.value) : n.splice(t, 1)
                    } else n = e.props.value;
                    if (e.props.onClick && e.props.onClick(t), I !== n && (L(n), x)) {
                        const r = t.nativeEvent || t, o = new r.constructor(r.type, r);
                        Object.defineProperty(o, "target", {writable: !0, value: {value: n, name: y}}), x(o, e)
                    }
                    g || q(!1, t)
                }
            }, Q = null !== D && _;
            let G, J;
            delete N["aria-invalid"];
            const ee = [];
            let te = !1, ne = !1;
            (Ko({value: I}) || p) && (R ? G = R(I) : te = !0);
            const re = Y.map(((t, n, r) => {
                var o, a, i, l;
                if (!e.isValidElement(t)) return null;
                let s;
                if (g) {
                    if (!Array.isArray(I)) throw new Error((0, zo.Z)(2));
                    s = I.some((e => Cl(e, t.props.value))), s && te && ee.push(t.props.children)
                } else s = Cl(I, t.props.value), s && te && (J = t.props.children);
                return s && (ne = !0), void 0 === t.props.value ? e.cloneElement(t, {
                    "aria-readonly": !0,
                    role: "option"
                }) : e.cloneElement(t, {
                    "aria-selected": s ? "true" : "false",
                    onClick: X(t),
                    onKeyUp: e => {
                        " " === e.key && e.preventDefault(), t.props.onKeyUp && t.props.onKeyUp(e)
                    },
                    role: "option",
                    selected: void 0 === (null == (o = r[0]) || null == (a = o.props) ? void 0 : a.value) || !0 === (null == (i = r[0]) || null == (l = i.props) ? void 0 : l.disabled) ? (() => {
                        if (I) return s;
                        const e = r.find((e => {
                            var t;
                            return void 0 !== (null == e || null == (t = e.props) ? void 0 : t.value) && !0 !== e.props.disabled
                        }));
                        return t === e || s
                    })() : s,
                    value: void 0,
                    "data-value": t.props.value
                })
            }));
            te && (G = g ? 0 === ee.length ? null : ee.reduce(((e, t, n) => (e.push(t), n < ee.length - 1 && e.push(", "), e)), []) : J);
            let oe, ae = B;
            !i && W && D && (ae = K.clientWidth), oe = void 0 !== O ? O : d ? null : 0;
            const ie = T.id || (y ? `mui-component-select-${y}` : void 0),
                le = (0, b.Z)({}, t, {variant: z, value: I, open: Q}), se = (e => {
                    const {classes: t, variant: n, disabled: r, multiple: o, open: a} = e, i = {
                        select: ["select", n, r && "disabled", o && "multiple"],
                        icon: ["icon", `icon${(0, yt.Z)(n)}`, a && "iconOpen", r && "disabled"],
                        nativeInput: ["nativeInput"]
                    };
                    return (0, Oe.Z)(i, gl, t)
                })(le);
            return (0, S.jsxs)(e.Fragment, {
                children: [(0, S.jsx)(xl, (0, b.Z)({
                    ref: U,
                    tabIndex: oe,
                    role: "button",
                    "aria-disabled": d ? "true" : void 0,
                    "aria-expanded": Q ? "true" : "false",
                    "aria-haspopup": "listbox",
                    "aria-label": o,
                    "aria-labelledby": [h, ie].filter(Boolean).join(" ") || void 0,
                    "aria-describedby": r,
                    onKeyDown: e => {
                        P || -1 !== [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(e.key) && (e.preventDefault(), q(!0, e))
                    },
                    onMouseDown: d || P ? null : e => {
                        0 === e.button && (e.preventDefault(), F.current.focus(), q(!0, e))
                    },
                    onBlur: e => {
                        !Q && w && (Object.defineProperty(e, "target", {
                            writable: !0,
                            value: {value: I, name: y}
                        }), w(e))
                    },
                    onFocus: C
                }, T, {
                    ownerState: le,
                    className: (0, Te.Z)(T.className, se.select, s),
                    id: ie,
                    children: El(G) ? yl || (yl = (0, S.jsx)("span", {className: "notranslate", children: "​"})) : G
                })), (0, S.jsx)(kl, (0, b.Z)({
                    value: Array.isArray(I) ? I.join(",") : I,
                    name: y,
                    ref: $,
                    "aria-hidden": !0,
                    onChange: e => {
                        const t = Y.map((e => e.props.value)).indexOf(e.target.value);
                        if (-1 === t) return;
                        const n = Y[t];
                        L(n.props.value), x && x(e, n)
                    },
                    tabIndex: -1,
                    disabled: d,
                    className: se.nativeInput,
                    autoFocus: a,
                    ownerState: le
                }, N)), (0, S.jsx)(Sl, {
                    as: f,
                    className: se.icon,
                    ownerState: le
                }), (0, S.jsx)(sl, (0, b.Z)({
                    id: `menu-${y || ""}`,
                    anchorEl: K,
                    open: Q,
                    onClose: e => {
                        q(!1, e)
                    },
                    anchorOrigin: {vertical: "bottom", horizontal: "center"},
                    transformOrigin: {vertical: "top", horizontal: "center"}
                }, v, {
                    MenuListProps: (0, b.Z)({
                        "aria-labelledby": h,
                        role: "listbox",
                        disableListWrap: !0
                    }, v.MenuListProps),
                    PaperProps: (0, b.Z)({}, v.PaperProps, {style: (0, b.Z)({minWidth: ae}, null != v.PaperProps ? v.PaperProps.style : null)}),
                    children: re
                }))]
            })
        }));
        var Pl = o(5949);
        const Rl = (0, Pl.Z)((0, S.jsx)("path", {d: "M7 10l5 5 5-5z"}), "ArrowDropDown");
        var Tl, Ol;
        const Ml = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"],
            zl = {
                name: "MuiSelect",
                overridesResolver: (e, t) => t.root,
                shouldForwardProp: e => (0, ze.FO)(e) && "variant" !== e,
                slot: "Root"
            }, Nl = (0, ze.ZP)(ca, zl)(""), Il = (0, ze.ZP)(Ta, zl)(""), Ll = (0, ze.ZP)(ga, zl)(""),
            _l = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({name: "MuiSelect", props: t}), {
                        autoWidth: o = !1,
                        children: a,
                        classes: i = {},
                        className: l,
                        defaultOpen: s = !1,
                        displayEmpty: u = !1,
                        IconComponent: c = Rl,
                        id: d,
                        input: p,
                        inputProps: f,
                        label: m,
                        labelId: h,
                        MenuProps: v,
                        multiple: g = !1,
                        native: y = !1,
                        onClose: w,
                        onOpen: x,
                        open: k,
                        renderValue: C,
                        SelectDisplayProps: E,
                        variant: Z = "outlined"
                    } = r, P = (0, Re.Z)(r, Ml), R = y ? vl : Zl,
                    T = Do({props: r, muiFormControl: Wo(), states: ["variant"]}).variant || Z, O = p || {
                        standard: Tl || (Tl = (0, S.jsx)(Nl, {})),
                        outlined: (0, S.jsx)(Il, {label: m}),
                        filled: Ol || (Ol = (0, S.jsx)(Ll, {}))
                    }[T], M = (e => {
                        const {classes: t} = e;
                        return t
                    })((0, b.Z)({}, r, {variant: T, classes: i})), z = (0, Ie.Z)(n, O.ref);
                return (0, S.jsx)(e.Fragment, {
                    children: e.cloneElement(O, (0, b.Z)({
                        inputComponent: R,
                        inputProps: (0, b.Z)({
                            children: a,
                            IconComponent: c,
                            variant: T,
                            type: void 0,
                            multiple: g
                        }, y ? {id: d} : {
                            autoWidth: o,
                            defaultOpen: s,
                            displayEmpty: u,
                            labelId: h,
                            MenuProps: v,
                            onClose: w,
                            onOpen: x,
                            open: k,
                            renderValue: C,
                            SelectDisplayProps: (0, b.Z)({id: d}, E)
                        }, f, {classes: f ? (0, Mo.Z)(M, f.classes) : M}, p ? p.props.inputProps : {})
                    }, g && y && "outlined" === T ? {notched: !0} : {}, {
                        ref: z,
                        className: (0, Te.Z)(O.props.className, l)
                    }, !p && {variant: T}, P))
                })
            }));
        _l.muiName = "Select";
        const Al = _l;

        function $l(e) {
            return (0, ft.Z)("MuiTextField", e)
        }

        (0, Ge.Z)("MuiTextField", ["root"]);
        const Fl = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"],
            Dl = {standard: ca, filled: ga, outlined: Ta},
            jl = (0, ze.ZP)(Ha, {name: "MuiTextField", slot: "Root", overridesResolver: (e, t) => t.root})({}),
            Wl = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiTextField"}), {
                    autoComplete: r,
                    autoFocus: o = !1,
                    children: a,
                    className: i,
                    color: l = "primary",
                    defaultValue: s,
                    disabled: u = !1,
                    error: c = !1,
                    FormHelperTextProps: d,
                    fullWidth: p = !1,
                    helperText: f,
                    id: m,
                    InputLabelProps: h,
                    inputProps: v,
                    InputProps: g,
                    inputRef: y,
                    label: w,
                    maxRows: x,
                    minRows: k,
                    multiline: C = !1,
                    name: E,
                    onBlur: Z,
                    onChange: P,
                    onFocus: R,
                    placeholder: T,
                    required: O = !1,
                    rows: M,
                    select: z = !1,
                    SelectProps: N,
                    type: I,
                    value: L,
                    variant: _ = "outlined"
                } = n, A = (0, Re.Z)(n, Fl), $ = (0, b.Z)({}, n, {
                    autoFocus: o,
                    color: l,
                    disabled: u,
                    error: c,
                    fullWidth: p,
                    multiline: C,
                    required: O,
                    select: z,
                    variant: _
                }), F = (e => {
                    const {classes: t} = e;
                    return (0, Oe.Z)({root: ["root"]}, $l, t)
                })($), D = {};
                "outlined" === _ && (h && void 0 !== h.shrink && (D.notched = h.shrink), D.label = w), z && (N && N.native || (D.id = void 0), D["aria-describedby"] = void 0);
                const j = (0, Oo.Z)(m), W = f && j ? `${j}-helper-text` : void 0, B = w && j ? `${j}-label` : void 0,
                    H = Dl[_], V = (0, S.jsx)(H, (0, b.Z)({
                        "aria-describedby": W,
                        autoComplete: r,
                        autoFocus: o,
                        defaultValue: s,
                        fullWidth: p,
                        multiline: C,
                        name: E,
                        rows: M,
                        maxRows: x,
                        minRows: k,
                        type: I,
                        value: L,
                        id: j,
                        inputRef: y,
                        onBlur: Z,
                        onChange: P,
                        onFocus: R,
                        placeholder: T,
                        inputProps: v
                    }, D, g));
                return (0, S.jsxs)(jl, (0, b.Z)({
                    className: (0, Te.Z)(F.root, i),
                    disabled: u,
                    error: c,
                    fullWidth: p,
                    ref: t,
                    required: O,
                    color: l,
                    variant: _,
                    ownerState: $
                }, A, {
                    children: [null != w && "" !== w && (0, S.jsx)(Fa, (0, b.Z)({
                        htmlFor: j,
                        id: B
                    }, h, {children: w})), z ? (0, S.jsx)(Al, (0, b.Z)({
                        "aria-describedby": W,
                        id: j,
                        labelId: B,
                        value: L,
                        input: V
                    }, N, {children: a})) : V, f && (0, S.jsx)(Xa, (0, b.Z)({id: W}, d, {children: f}))]
                }))
            }));

        function Bl(e) {
            return (0, ft.Z)("MuiDialog", e)
        }

        const Hl = (0, Ge.Z)("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]),
            Vl = (0, e.createContext)({}),
            Ul = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"],
            Kl = (0, ze.ZP)($i, {name: "MuiDialog", slot: "Backdrop", overrides: (e, t) => t.backdrop})({zIndex: -1}),
            ql = (0, ze.ZP)(Wi, {
                name: "MuiDialog",
                slot: "Root",
                overridesResolver: (e, t) => t.root
            })({"@media print": {position: "absolute !important"}}), Yl = (0, ze.ZP)("div", {
                name: "MuiDialog", slot: "Container", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.container, t[`scroll${(0, yt.Z)(n.scroll)}`]]
                }
            })((({ownerState: e}) => (0, b.Z)({
                height: "100%",
                "@media print": {height: "auto"},
                outline: 0
            }, "paper" === e.scroll && {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }, "body" === e.scroll && {
                overflowY: "auto",
                overflowX: "hidden",
                textAlign: "center",
                "&:after": {content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0"}
            }))), Xl = (0, ze.ZP)(hi, {
                name: "MuiDialog", slot: "Paper", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.paper, t[`scrollPaper${(0, yt.Z)(n.scroll)}`], t[`paperWidth${(0, yt.Z)(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen]
                }
            })((({theme: e, ownerState: t}) => (0, b.Z)({
                margin: 32,
                position: "relative",
                overflowY: "auto",
                "@media print": {overflowY: "visible", boxShadow: "none"}
            }, "paper" === t.scroll && {
                display: "flex",
                flexDirection: "column",
                maxHeight: "calc(100% - 64px)"
            }, "body" === t.scroll && {
                display: "inline-block",
                verticalAlign: "middle",
                textAlign: "left"
            }, !t.maxWidth && {maxWidth: "calc(100% - 64px)"}, "xs" === t.maxWidth && {
                maxWidth: "px" === e.breakpoints.unit ? Math.max(e.breakpoints.values.xs, 444) : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
                [`&.${Hl.paperScrollBody}`]: {[e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {maxWidth: "calc(100% - 64px)"}}
            }, t.maxWidth && "xs" !== t.maxWidth && {
                maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
                [`&.${Hl.paperScrollBody}`]: {[e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 64)]: {maxWidth: "calc(100% - 64px)"}}
            }, t.fullWidth && {width: "calc(100% - 64px)"}, t.fullScreen && {
                margin: 0,
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                maxHeight: "none",
                borderRadius: 0,
                [`&.${Hl.paperScrollBody}`]: {margin: 0, maxWidth: "100%"}
            }))), Ql = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiDialog"}), o = Rt(), a = {
                        enter: o.transitions.duration.enteringScreen,
                        exit: o.transitions.duration.leavingScreen
                    }, {
                        "aria-describedby": i,
                        "aria-labelledby": l,
                        BackdropComponent: s,
                        BackdropProps: u,
                        children: c,
                        className: d,
                        disableEscapeKeyDown: p = !1,
                        fullScreen: f = !1,
                        fullWidth: m = !1,
                        maxWidth: h = "sm",
                        onBackdropClick: v,
                        onClose: g,
                        open: y,
                        PaperComponent: w = hi,
                        PaperProps: x = {},
                        scroll: k = "paper",
                        TransitionComponent: C = Ii,
                        transitionDuration: E = a,
                        TransitionProps: Z
                    } = r, P = (0, Re.Z)(r, Ul),
                    R = (0, b.Z)({}, r, {disableEscapeKeyDown: p, fullScreen: f, fullWidth: m, maxWidth: h, scroll: k}),
                    T = (e => {
                        const {classes: t, scroll: n, maxWidth: r, fullWidth: o, fullScreen: a} = e, i = {
                            root: ["root"],
                            container: ["container", `scroll${(0, yt.Z)(n)}`],
                            paper: ["paper", `paperScroll${(0, yt.Z)(n)}`, `paperWidth${(0, yt.Z)(String(r))}`, o && "paperFullWidth", a && "paperFullScreen"]
                        };
                        return (0, Oe.Z)(i, Bl, t)
                    })(R), O = e.useRef(), M = (0, Oo.Z)(l), z = e.useMemo((() => ({titleId: M})), [M]);
                return (0, S.jsx)(ql, (0, b.Z)({
                    className: (0, Te.Z)(T.root, d),
                    closeAfterTransition: !0,
                    components: {Backdrop: Kl},
                    componentsProps: {backdrop: (0, b.Z)({transitionDuration: E, as: s}, u)},
                    disableEscapeKeyDown: p,
                    onClose: g,
                    open: y,
                    ref: n,
                    onClick: e => {
                        O.current && (O.current = null, v && v(e), g && g(e, "backdropClick"))
                    },
                    ownerState: R
                }, P, {
                    children: (0, S.jsx)(C, (0, b.Z)({
                        appear: !0,
                        in: y,
                        timeout: E,
                        role: "presentation"
                    }, Z, {
                        children: (0, S.jsx)(Yl, {
                            className: (0, Te.Z)(T.container),
                            onMouseDown: e => {
                                O.current = e.target === e.currentTarget
                            },
                            ownerState: R,
                            children: (0, S.jsx)(Xl, (0, b.Z)({
                                as: w,
                                elevation: 24,
                                role: "dialog",
                                "aria-describedby": i,
                                "aria-labelledby": M
                            }, x, {
                                className: (0, Te.Z)(T.paper, x.className),
                                ownerState: R,
                                children: (0, S.jsx)(Vl.Provider, {value: z, children: c})
                            }))
                        })
                    }))
                }))
            }));

        function Gl(e) {
            return (0, ft.Z)("MuiDialogContent", e)
        }

        (0, Ge.Z)("MuiDialogContent", ["root", "dividers"]);
        const Jl = (0, Ge.Z)("MuiDialogTitle", ["root"]), es = ["className", "dividers"], ts = (0, ze.ZP)("div", {
            name: "MuiDialogContent", slot: "Root", overridesResolver: (e, t) => {
                const {ownerState: n} = e;
                return [t.root, n.dividers && t.dividers]
            }
        })((({theme: e, ownerState: t}) => (0, b.Z)({
            flex: "1 1 auto",
            WebkitOverflowScrolling: "touch",
            overflowY: "auto",
            padding: "20px 24px"
        }, t.dividers ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`
        } : {[`.${Jl.root} + &`]: {paddingTop: 0}}))), ns = e.forwardRef((function (e, t) {
            const n = (0, Ne.Z)({props: e, name: "MuiDialogContent"}), {className: r, dividers: o = !1} = n,
                a = (0, Re.Z)(n, es), i = (0, b.Z)({}, n, {dividers: o}), l = (e => {
                    const {classes: t, dividers: n} = e, r = {root: ["root", n && "dividers"]};
                    return (0, Oe.Z)(r, Gl, t)
                })(i);
            return (0, S.jsx)(ts, (0, b.Z)({className: (0, Te.Z)(l.root, r), ownerState: i, ref: t}, a))
        }));
        var rs = o(8010);
        const os = ["sx"];

        function as(e) {
            return (0, ft.Z)("MuiTypography", e)
        }

        (0, Ge.Z)("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
        const is = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
            ls = (0, ze.ZP)("span", {
                name: "MuiTypography", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, n.variant && t[n.variant], "inherit" !== n.align && t[`align${(0, yt.Z)(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph]
                }
            })((({
                     theme: e,
                     ownerState: t
                 }) => (0, b.Z)({margin: 0}, t.variant && e.typography[t.variant], "inherit" !== t.align && {textAlign: t.align}, t.noWrap && {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }, t.gutterBottom && {marginBottom: "0.35em"}, t.paragraph && {marginBottom: 16}))), ss = {
                h1: "h1",
                h2: "h2",
                h3: "h3",
                h4: "h4",
                h5: "h5",
                h6: "h6",
                subtitle1: "h6",
                subtitle2: "h6",
                body1: "p",
                body2: "p",
                inherit: "p"
            }, us = {
                primary: "primary.main",
                textPrimary: "text.primary",
                secondary: "secondary.main",
                textSecondary: "text.secondary",
                error: "error.main"
            }, cs = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiTypography"}), r = (e => us[e] || e)(n.color), o = function (e) {
                    const {sx: t} = e, n = (0, Re.Z)(e, os), {systemProps: r, otherProps: o} = (e => {
                        var t, n;
                        const r = {systemProps: {}, otherProps: {}},
                            o = null != (t = null == e || null == (n = e.theme) ? void 0 : n.unstable_sxConfig) ? t : rs.Z;
                        return Object.keys(e).forEach((t => {
                            o[t] ? r.systemProps[t] = e[t] : r.otherProps[t] = e[t]
                        })), r
                    })(n);
                    let a;
                    return a = Array.isArray(t) ? [r, ...t] : "function" == typeof t ? (...e) => {
                        const n = t(...e);
                        return (0, Mo.P)(n) ? (0, b.Z)({}, r, n) : r
                    } : (0, b.Z)({}, r, t), (0, b.Z)({}, o, {sx: a})
                }((0, b.Z)({}, n, {color: r})), {
                    align: a = "inherit",
                    className: i,
                    component: l,
                    gutterBottom: s = !1,
                    noWrap: u = !1,
                    paragraph: c = !1,
                    variant: d = "body1",
                    variantMapping: p = ss
                } = o, f = (0, Re.Z)(o, is), m = (0, b.Z)({}, o, {
                    align: a,
                    color: r,
                    className: i,
                    component: l,
                    gutterBottom: s,
                    noWrap: u,
                    paragraph: c,
                    variant: d,
                    variantMapping: p
                }), h = l || (c ? "p" : p[d] || ss[d]) || "span", v = (e => {
                    const {align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: a, classes: i} = e,
                        l = {root: ["root", a, "inherit" !== e.align && `align${(0, yt.Z)(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]};
                    return (0, Oe.Z)(l, as, i)
                })(m);
                return (0, S.jsx)(ls, (0, b.Z)({as: h, ref: t, ownerState: m, className: (0, Te.Z)(v.root, i)}, f))
            }));

        function ds(e) {
            return (0, ft.Z)("MuiFormControlLabel", e)
        }

        const ps = (0, Ge.Z)("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error"]),
            fs = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "slotProps", "value"],
            ms = (0, ze.ZP)("label", {
                name: "MuiFormControlLabel", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [{[`& .${ps.label}`]: t.label}, t.root, t[`labelPlacement${(0, yt.Z)(n.labelPlacement)}`]]
                }
            })((({theme: e, ownerState: t}) => (0, b.Z)({
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                verticalAlign: "middle",
                WebkitTapHighlightColor: "transparent",
                marginLeft: -11,
                marginRight: 16,
                [`&.${ps.disabled}`]: {cursor: "default"}
            }, "start" === t.labelPlacement && {
                flexDirection: "row-reverse",
                marginLeft: 16,
                marginRight: -11
            }, "top" === t.labelPlacement && {
                flexDirection: "column-reverse",
                marginLeft: 16
            }, "bottom" === t.labelPlacement && {
                flexDirection: "column",
                marginLeft: 16
            }, {[`& .${ps.label}`]: {[`&.${ps.disabled}`]: {color: (e.vars || e).palette.text.disabled}}}))),
            hs = e.forwardRef((function (t, n) {
                var r;
                const o = (0, Ne.Z)({props: t, name: "MuiFormControlLabel"}), {
                    className: a,
                    componentsProps: i = {},
                    control: l,
                    disabled: s,
                    disableTypography: u,
                    label: c,
                    labelPlacement: d = "end",
                    slotProps: p = {}
                } = o, f = (0, Re.Z)(o, fs), m = Wo();
                let h = s;
                void 0 === h && void 0 !== l.props.disabled && (h = l.props.disabled), void 0 === h && m && (h = m.disabled);
                const v = {disabled: h};
                ["checked", "name", "onChange", "value", "inputRef"].forEach((e => {
                    void 0 === l.props[e] && void 0 !== o[e] && (v[e] = o[e])
                }));
                const g = Do({props: o, muiFormControl: m, states: ["error"]}),
                    y = (0, b.Z)({}, o, {disabled: h, labelPlacement: d, error: g.error}), w = (e => {
                        const {classes: t, disabled: n, labelPlacement: r, error: o} = e, a = {
                            root: ["root", n && "disabled", `labelPlacement${(0, yt.Z)(r)}`, o && "error"],
                            label: ["label", n && "disabled"]
                        };
                        return (0, Oe.Z)(a, ds, t)
                    })(y), x = null != (r = p.typography) ? r : i.typography;
                let k = c;
                return null == k || k.type === cs || u || (k = (0, S.jsx)(cs, (0, b.Z)({component: "span"}, x, {
                    className: (0, Te.Z)(w.label, null == x ? void 0 : x.className),
                    children: k
                }))), (0, S.jsxs)(ms, (0, b.Z)({
                    className: (0, Te.Z)(w.root, a),
                    ownerState: y,
                    ref: n
                }, f, {children: [e.cloneElement(l, v), k]}))
            }));

        function vs(e) {
            return (0, ft.Z)("PrivateSwitchBase", e)
        }

        (0, Ge.Z)("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
        const gs = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"],
            bs = (0, ze.ZP)(bt)((({ownerState: e}) => (0, b.Z)({
                padding: 9,
                borderRadius: "50%"
            }, "start" === e.edge && {marginLeft: "small" === e.size ? -3 : -12}, "end" === e.edge && {marginRight: "small" === e.size ? -3 : -12}))),
            ys = (0, ze.ZP)("input")({
                cursor: "inherit",
                position: "absolute",
                opacity: 0,
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
                zIndex: 1
            }), ws = e.forwardRef((function (e, t) {
                const {
                    autoFocus: n,
                    checked: r,
                    checkedIcon: o,
                    className: a,
                    defaultChecked: i,
                    disabled: l,
                    disableFocusRipple: s = !1,
                    edge: u = !1,
                    icon: c,
                    id: d,
                    inputProps: p,
                    inputRef: f,
                    name: m,
                    onBlur: h,
                    onChange: v,
                    onFocus: g,
                    readOnly: y,
                    required: w = !1,
                    tabIndex: x,
                    type: k,
                    value: C
                } = e, E = (0, Re.Z)(e, gs), [Z, P] = (0, Or.Z)({
                    controlled: r,
                    default: Boolean(i),
                    name: "SwitchBase",
                    state: "checked"
                }), R = Wo();
                let T = l;
                R && void 0 === T && (T = R.disabled);
                const O = "checkbox" === k || "radio" === k,
                    M = (0, b.Z)({}, e, {checked: Z, disabled: T, disableFocusRipple: s, edge: u}), z = (e => {
                        const {classes: t, checked: n, disabled: r, edge: o} = e,
                            a = {root: ["root", n && "checked", r && "disabled", o && `edge${(0, yt.Z)(o)}`], input: ["input"]};
                        return (0, Oe.Z)(a, vs, t)
                    })(M);
                return (0, S.jsxs)(bs, (0, b.Z)({
                    component: "span",
                    className: (0, Te.Z)(z.root, a),
                    centerRipple: !0,
                    focusRipple: !s,
                    disabled: T,
                    tabIndex: null,
                    role: void 0,
                    onFocus: e => {
                        g && g(e), R && R.onFocus && R.onFocus(e)
                    },
                    onBlur: e => {
                        h && h(e), R && R.onBlur && R.onBlur(e)
                    },
                    ownerState: M,
                    ref: t
                }, E, {
                    children: [(0, S.jsx)(ys, (0, b.Z)({
                        autoFocus: n,
                        checked: r,
                        defaultChecked: i,
                        className: z.input,
                        disabled: T,
                        id: O && d,
                        name: m,
                        onChange: e => {
                            if (e.nativeEvent.defaultPrevented) return;
                            const t = e.target.checked;
                            P(t), v && v(e, t)
                        },
                        readOnly: y,
                        ref: f,
                        required: w,
                        ownerState: M,
                        tabIndex: x,
                        type: k
                    }, "checkbox" === k && void 0 === C ? {} : {value: C}, p)), Z ? o : c]
                }))
            }));

        function xs(e) {
            return (0, ft.Z)("MuiSwitch", e)
        }

        const Ss = (0, Ge.Z)("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]),
            ks = ["className", "color", "edge", "size", "sx"], Cs = (0, ze.ZP)("span", {
                name: "MuiSwitch", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, n.edge && t[`edge${(0, yt.Z)(n.edge)}`], t[`size${(0, yt.Z)(n.size)}`]]
                }
            })((({ownerState: e}) => (0, b.Z)({
                display: "inline-flex",
                width: 58,
                height: 38,
                overflow: "hidden",
                padding: 12,
                boxSizing: "border-box",
                position: "relative",
                flexShrink: 0,
                zIndex: 0,
                verticalAlign: "middle",
                "@media print": {colorAdjust: "exact"}
            }, "start" === e.edge && {marginLeft: -8}, "end" === e.edge && {marginRight: -8}, "small" === e.size && {
                width: 40,
                height: 24,
                padding: 7,
                [`& .${Ss.thumb}`]: {width: 16, height: 16},
                [`& .${Ss.switchBase}`]: {padding: 4, [`&.${Ss.checked}`]: {transform: "translateX(16px)"}}
            }))), Es = (0, ze.ZP)(ws, {
                name: "MuiSwitch", slot: "SwitchBase", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.switchBase, {[`& .${Ss.input}`]: t.input}, "default" !== n.color && t[`color${(0, yt.Z)(n.color)}`]]
                }
            })((({theme: e}) => ({
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                color: e.vars ? e.vars.palette.Switch.defaultColor : `${"light" === e.palette.mode ? e.palette.common.white : e.palette.grey[300]}`,
                transition: e.transitions.create(["left", "transform"], {duration: e.transitions.duration.shortest}),
                [`&.${Ss.checked}`]: {transform: "translateX(20px)"},
                [`&.${Ss.disabled}`]: {color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${"light" === e.palette.mode ? e.palette.grey[100] : e.palette.grey[600]}`},
                [`&.${Ss.checked} + .${Ss.track}`]: {opacity: .5},
                [`&.${Ss.disabled} + .${Ss.track}`]: {opacity: e.vars ? e.vars.opacity.switchTrackDisabled : "" + ("light" === e.palette.mode ? .12 : .2)},
                [`& .${Ss.input}`]: {left: "-100%", width: "300%"}
            })), (({
                       theme: e,
                       ownerState: t
                   }) => (0, b.Z)({
                "&:hover": {
                    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, Me.Fq)(e.palette.action.active, e.palette.action.hoverOpacity),
                    "@media (hover: none)": {backgroundColor: "transparent"}
                }
            }, "default" !== t.color && {
                [`&.${Ss.checked}`]: {
                    color: (e.vars || e).palette[t.color].main,
                    "&:hover": {
                        backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, Me.Fq)(e.palette[t.color].main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {backgroundColor: "transparent"}
                    },
                    [`&.${Ss.disabled}`]: {color: e.vars ? e.vars.palette.Switch[`${t.color}DisabledColor`] : `${"light" === e.palette.mode ? (0, Me.$n)(e.palette[t.color].main, .62) : (0, Me._j)(e.palette[t.color].main, .55)}`}
                }, [`&.${Ss.checked} + .${Ss.track}`]: {backgroundColor: (e.vars || e).palette[t.color].main}
            }))), Zs = (0, ze.ZP)("span", {
                name: "MuiSwitch",
                slot: "Track",
                overridesResolver: (e, t) => t.track
            })((({theme: e}) => ({
                height: "100%",
                width: "100%",
                borderRadius: 7,
                zIndex: -1,
                transition: e.transitions.create(["opacity", "background-color"], {duration: e.transitions.duration.shortest}),
                backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${"light" === e.palette.mode ? e.palette.common.black : e.palette.common.white}`,
                opacity: e.vars ? e.vars.opacity.switchTrack : "" + ("light" === e.palette.mode ? .38 : .3)
            }))), Ps = (0, ze.ZP)("span", {
                name: "MuiSwitch",
                slot: "Thumb",
                overridesResolver: (e, t) => t.thumb
            })((({theme: e}) => ({
                boxShadow: (e.vars || e).shadows[1],
                backgroundColor: "currentColor",
                width: 20,
                height: 20,
                borderRadius: "50%"
            }))), Rs = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiSwitch"}), {
                    className: r,
                    color: o = "primary",
                    edge: a = !1,
                    size: i = "medium",
                    sx: l
                } = n, s = (0, Re.Z)(n, ks), u = (0, b.Z)({}, n, {color: o, edge: a, size: i}), c = (e => {
                    const {classes: t, edge: n, size: r, color: o, checked: a, disabled: i} = e, l = {
                        root: ["root", n && `edge${(0, yt.Z)(n)}`, `size${(0, yt.Z)(r)}`],
                        switchBase: ["switchBase", `color${(0, yt.Z)(o)}`, a && "checked", i && "disabled"],
                        thumb: ["thumb"],
                        track: ["track"],
                        input: ["input"]
                    }, s = (0, Oe.Z)(l, xs, t);
                    return (0, b.Z)({}, t, s)
                })(u), d = (0, S.jsx)(Ps, {className: c.thumb, ownerState: u});
                return (0, S.jsxs)(Cs, {
                    className: (0, Te.Z)(c.root, r),
                    sx: l,
                    ownerState: u,
                    children: [(0, S.jsx)(Es, (0, b.Z)({
                        type: "checkbox",
                        icon: d,
                        checkedIcon: d,
                        ref: t,
                        ownerState: u
                    }, s, {classes: (0, b.Z)({}, c, {root: c.switchBase})})), (0, S.jsx)(Zs, {
                        className: c.track,
                        ownerState: u
                    })]
                })
            }));

        function Ts(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == typeof t ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        class Os extends e.Component {
            constructor(...e) {
                super(...e), Ts(this, "handleUseSwitch", (e => {
                    const t = this.props.data;
                    if (t) {
                        if (e.target.checked) {
                            if (!t.baidu?.cookie) return this.props.showMessage("请先配置好Cookie:https://ai.baidu.com/tech/ocr/general", "error");
                            t.use = "baidu"
                        } else t.use = null;
                        this.forceUpdate()
                    }
                })), Ts(this, "handleResultNoWrapSwitch", (e => {
                    const t = this.props.data;
                    t && (t.resultNoWrap = e.target.checked, this.forceUpdate())
                })), Ts(this, "handleInputCookieChange", (e => {
                    const t = this.props.data;
                    t && (t.resultNoWrap = e.target.checked, this.forceUpdate())
                    t && (t.baidu || (t.baidu = {}), t.baidu.cookie = e.target.value.trim(), t.baidu.cookie || "baidu" !== t.use || (t.use = null), this.forceUpdate())
                }))
            }

            render() {
                const {data: t, onClose: n} = this.props;
                return e.createElement(Ql, {
                    open: !0,
                    onClose: n
                }, e.createElement(ns, {className: "settings-content"}, e.createElement("h3", null, "OCR 识别结果自动去除换行符"), e.createElement("div", null, e.createElement(hs, {
                    control: e.createElement(Rs, {
                        onChange: this.handleResultNoWrapSwitch,
                        checked: t.resultNoWrap
                    }), label: "开启去除"
                })), e.createElement("h3", null, "自定义识别源(https://ai.baidu.com/tech/ocr/general)"), e.createElement(Wl, {
                    label: "Cookie",
                    fullWidth: !0,
                    variant: "standard",
                    value: t.baidu?.cookie,
                    onChange: this.handleInputCookieChange
                }), e.createElement(hs, {
                    control: e.createElement(Rs, {
                        onChange: this.handleUseSwitch,
                        checked: "baidu" === t.use
                    }), label: "开启使用"
                })))
            }
        }

        function Ms(e) {
            return e.substring(2).toLowerCase()
        }

        const zs = function (t) {
            const {
                children: n,
                disableReactTree: r = !1,
                mouseEvent: o = "onClick",
                onClickAway: a,
                touchEvent: i = "onTouchEnd"
            } = t, l = e.useRef(!1), s = e.useRef(null), u = e.useRef(!1), c = e.useRef(!1);
            e.useEffect((() => (setTimeout((() => {
                u.current = !0
            }), 0), () => {
                u.current = !1
            })), []);
            const d = (0, Ut.Z)(n.ref, s), p = (0, bi.Z)((e => {
                const t = c.current;
                c.current = !1;
                const n = (0, qt.Z)(s.current);
                if (!u.current || !s.current || "clientX" in e && function (e, t) {
                    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
                }(e, n)) return;
                if (l.current) return void (l.current = !1);
                let o;
                o = e.composedPath ? e.composedPath().indexOf(s.current) > -1 : !n.documentElement.contains(e.target) || s.current.contains(e.target), o || !r && t || a(e)
            })), f = e => t => {
                c.current = !0;
                const r = n.props[e];
                r && r(t)
            }, m = {ref: d};
            return !1 !== i && (m[i] = f(i)), e.useEffect((() => {
                if (!1 !== i) {
                    const e = Ms(i), t = (0, qt.Z)(s.current), n = () => {
                        l.current = !0
                    };
                    return t.addEventListener(e, p), t.addEventListener("touchmove", n), () => {
                        t.removeEventListener(e, p), t.removeEventListener("touchmove", n)
                    }
                }
            }), [p, i]), !1 !== o && (m[o] = f(o)), e.useEffect((() => {
                if (!1 !== o) {
                    const e = Ms(o), t = (0, qt.Z)(s.current);
                    return t.addEventListener(e, p), () => {
                        t.removeEventListener(e, p)
                    }
                }
            }), [p, o]), (0, S.jsx)(e.Fragment, {children: e.cloneElement(n, m)})
        };

        function Ns(e) {
            return (0, ft.Z)("MuiSnackbarContent", e)
        }

        (0, Ge.Z)("MuiSnackbarContent", ["root", "message", "action"]);
        const Is = ["action", "className", "message", "role"], Ls = (0, ze.ZP)(hi, {
                name: "MuiSnackbarContent",
                slot: "Root",
                overridesResolver: (e, t) => t.root
            })((({theme: e}) => {
                const t = "light" === e.palette.mode ? .8 : .98, n = (0, Me._4)(e.palette.background.default, t);
                return (0, b.Z)({}, e.typography.body2, {
                    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
                    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "6px 16px",
                    borderRadius: (e.vars || e).shape.borderRadius,
                    flexGrow: 1,
                    [e.breakpoints.up("sm")]: {flexGrow: "initial", minWidth: 288}
                })
            })), _s = (0, ze.ZP)("div", {
                name: "MuiSnackbarContent",
                slot: "Message",
                overridesResolver: (e, t) => t.message
            })({padding: "8px 0"}), As = (0, ze.ZP)("div", {
                name: "MuiSnackbarContent",
                slot: "Action",
                overridesResolver: (e, t) => t.action
            })({display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8}),
            $s = e.forwardRef((function (e, t) {
                const n = (0, Ne.Z)({props: e, name: "MuiSnackbarContent"}), {
                    action: r,
                    className: o,
                    message: a,
                    role: i = "alert"
                } = n, l = (0, Re.Z)(n, Is), s = n, u = (e => {
                    const {classes: t} = e;
                    return (0, Oe.Z)({root: ["root"], action: ["action"], message: ["message"]}, Ns, t)
                })(s);
                return (0, S.jsxs)(Ls, (0, b.Z)({
                    role: i,
                    square: !0,
                    elevation: 6,
                    className: (0, Te.Z)(u.root, o),
                    ownerState: s,
                    ref: t
                }, l, {
                    children: [(0, S.jsx)(_s, {
                        className: u.message,
                        ownerState: s,
                        children: a
                    }), r ? (0, S.jsx)(As, {className: u.action, ownerState: s, children: r}) : null]
                }))
            }));

        function Fs(e) {
            return (0, ft.Z)("MuiSnackbar", e)
        }

        (0, Ge.Z)("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
        const Ds = ["onEnter", "onExited"],
            js = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"],
            Ws = (0, ze.ZP)("div", {
                name: "MuiSnackbar", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, t[`anchorOrigin${(0, yt.Z)(n.anchorOrigin.vertical)}${(0, yt.Z)(n.anchorOrigin.horizontal)}`]]
                }
            })((({theme: e, ownerState: t}) => (0, b.Z)({
                zIndex: (e.vars || e).zIndex.snackbar,
                position: "fixed",
                display: "flex",
                left: 8,
                right: 8,
                justifyContent: "center",
                alignItems: "center"
            }, "top" === t.anchorOrigin.vertical ? {top: 8} : {bottom: 8}, "left" === t.anchorOrigin.horizontal && {justifyContent: "flex-start"}, "right" === t.anchorOrigin.horizontal && {justifyContent: "flex-end"}, {
                [e.breakpoints.up("sm")]: (0, b.Z)({}, "top" === t.anchorOrigin.vertical ? {top: 24} : {bottom: 24}, "center" === t.anchorOrigin.horizontal && {
                    left: "50%",
                    right: "auto",
                    transform: "translateX(-50%)"
                }, "left" === t.anchorOrigin.horizontal && {
                    left: 24,
                    right: "auto"
                }, "right" === t.anchorOrigin.horizontal && {right: 24, left: "auto"})
            }))), Bs = e.forwardRef((function (t, n) {
                const r = (0, Ne.Z)({props: t, name: "MuiSnackbar"}), o = Rt(), a = {
                        enter: o.transitions.duration.enteringScreen,
                        exit: o.transitions.duration.leavingScreen
                    }, {
                        action: i,
                        anchorOrigin: {vertical: l, horizontal: s} = {vertical: "bottom", horizontal: "left"},
                        autoHideDuration: u = null,
                        children: c,
                        className: d,
                        ClickAwayListenerProps: p,
                        ContentProps: f,
                        disableWindowBlurListener: m = !1,
                        message: h,
                        onBlur: v,
                        onClose: g,
                        onFocus: y,
                        onMouseEnter: w,
                        onMouseLeave: x,
                        open: k,
                        resumeHideDuration: C,
                        TransitionComponent: E = Vt,
                        transitionDuration: Z = a,
                        TransitionProps: {onEnter: P, onExited: R} = {}
                    } = r, T = (0, Re.Z)(r.TransitionProps, Ds), O = (0, Re.Z)(r, js),
                    M = (0, b.Z)({}, r, {anchorOrigin: {vertical: l, horizontal: s}}), z = (e => {
                        const {classes: t, anchorOrigin: n} = e,
                            r = {root: ["root", `anchorOrigin${(0, yt.Z)(n.vertical)}${(0, yt.Z)(n.horizontal)}`]};
                        return (0, Oe.Z)(r, Fs, t)
                    })(M), N = e.useRef(), [I, L] = e.useState(!0), _ = (0, Le.Z)(((...e) => {
                        g && g(...e)
                    })), A = (0, Le.Z)((e => {
                        g && null != e && (clearTimeout(N.current), N.current = setTimeout((() => {
                            _(null, "timeout")
                        }), e))
                    }));
                e.useEffect((() => (k && A(u), () => {
                    clearTimeout(N.current)
                })), [k, u, A]);
                const $ = () => {
                    clearTimeout(N.current)
                }, F = e.useCallback((() => {
                    null != u && A(null != C ? C : .5 * u)
                }), [u, C, A]);
                return e.useEffect((() => {
                    if (!m && k) return window.addEventListener("focus", F), window.addEventListener("blur", $), () => {
                        window.removeEventListener("focus", F), window.removeEventListener("blur", $)
                    }
                }), [m, F, k]), e.useEffect((() => {
                    if (k) return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    };

                    function e(e) {
                        e.defaultPrevented || "Escape" !== e.key && "Esc" !== e.key || g && g(e, "escapeKeyDown")
                    }
                }), [I, k, g]), !k && I ? null : (0, S.jsx)(zs, (0, b.Z)({
                    onClickAway: e => {
                        g && g(e, "clickaway")
                    }
                }, p, {
                    children: (0, S.jsx)(Ws, (0, b.Z)({
                        className: (0, Te.Z)(z.root, d), onBlur: e => {
                            v && v(e), F()
                        }, onFocus: e => {
                            y && y(e), $()
                        }, onMouseEnter: e => {
                            w && w(e), $()
                        }, onMouseLeave: e => {
                            x && x(e), F()
                        }, ownerState: M, ref: n, role: "presentation"
                    }, O, {
                        children: (0, S.jsx)(E, (0, b.Z)({
                            appear: !0,
                            in: k,
                            timeout: Z,
                            direction: "top" === l ? "down" : "up",
                            onEnter: (e, t) => {
                                L(!1), P && P(e, t)
                            },
                            onExited: e => {
                                L(!0), R && R(e)
                            }
                        }, T, {children: c || (0, S.jsx)($s, (0, b.Z)({message: h, action: i}, f))}))
                    }))
                }))
            }));

        function Hs(e) {
            return (0, ft.Z)("MuiAlert", e)
        }

        const Vs = (0, Ge.Z)("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]),
            Us = (0, Pl.Z)((0, S.jsx)("path", {d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}), "SuccessOutlined"),
            Ks = (0, Pl.Z)((0, S.jsx)("path", {d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}), "ReportProblemOutlined"),
            qs = (0, Pl.Z)((0, S.jsx)("path", {d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}), "ErrorOutline"),
            Ys = (0, Pl.Z)((0, S.jsx)("path", {d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}), "InfoOutlined"),
            Xs = (0, Pl.Z)((0, S.jsx)("path", {d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}), "Close"),
            Qs = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"],
            Gs = (0, ze.ZP)(hi, {
                name: "MuiAlert", slot: "Root", overridesResolver: (e, t) => {
                    const {ownerState: n} = e;
                    return [t.root, t[n.variant], t[`${n.variant}${(0, yt.Z)(n.color || n.severity)}`]]
                }
            })((({theme: e, ownerState: t}) => {
                const n = "light" === e.palette.mode ? Me._j : Me.$n, r = "light" === e.palette.mode ? Me.$n : Me._j,
                    o = t.color || t.severity;
                return (0, b.Z)({}, e.typography.body2, {
                    backgroundColor: "transparent",
                    display: "flex",
                    padding: "6px 16px"
                }, o && "standard" === t.variant && {
                    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, .6),
                    backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, .9),
                    [`& .${Vs.icon}`]: e.vars ? {color: e.vars.palette.Alert[`${o}IconColor`]} : {color: e.palette[o].main}
                }, o && "outlined" === t.variant && {
                    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, .6),
                    border: `1px solid ${(e.vars || e).palette[o].light}`,
                    [`& .${Vs.icon}`]: e.vars ? {color: e.vars.palette.Alert[`${o}IconColor`]} : {color: e.palette[o].main}
                }, o && "filled" === t.variant && (0, b.Z)({fontWeight: e.typography.fontWeightMedium}, e.vars ? {
                    color: e.vars.palette.Alert[`${o}FilledColor`],
                    backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
                } : {
                    backgroundColor: "dark" === e.palette.mode ? e.palette[o].dark : e.palette[o].main,
                    color: e.palette.getContrastText(e.palette[o].main)
                }))
            })), Js = (0, ze.ZP)("div", {
                name: "MuiAlert",
                slot: "Icon",
                overridesResolver: (e, t) => t.icon
            })({marginRight: 12, padding: "7px 0", display: "flex", fontSize: 22, opacity: .9}), eu = (0, ze.ZP)("div", {
                name: "MuiAlert",
                slot: "Message",
                overridesResolver: (e, t) => t.message
            })({padding: "8px 0", minWidth: 0, overflow: "auto"}), tu = (0, ze.ZP)("div", {
                name: "MuiAlert",
                slot: "Action",
                overridesResolver: (e, t) => t.action
            })({display: "flex", alignItems: "flex-start", padding: "4px 0 0 16px", marginLeft: "auto", marginRight: -8}),
            nu = {
                success: (0, S.jsx)(Us, {fontSize: "inherit"}),
                warning: (0, S.jsx)(Ks, {fontSize: "inherit"}),
                error: (0, S.jsx)(qs, {fontSize: "inherit"}),
                info: (0, S.jsx)(Ys, {fontSize: "inherit"})
            }, ru = e.forwardRef((function (e, t) {
                var n, r, o, a, i, l;
                const s = (0, Ne.Z)({props: e, name: "MuiAlert"}), {
                        action: u,
                        children: c,
                        className: d,
                        closeText: p = "Close",
                        color: f,
                        components: m = {},
                        componentsProps: h = {},
                        icon: v,
                        iconMapping: g = nu,
                        onClose: y,
                        role: w = "alert",
                        severity: x = "success",
                        slotProps: k = {},
                        slots: C = {},
                        variant: E = "standard"
                    } = s, Z = (0, Re.Z)(s, Qs), P = (0, b.Z)({}, s, {color: f, severity: x, variant: E}), R = (e => {
                        const {variant: t, color: n, severity: r, classes: o} = e, a = {
                            root: ["root", `${t}${(0, yt.Z)(n || r)}`, `${t}`],
                            icon: ["icon"],
                            message: ["message"],
                            action: ["action"]
                        };
                        return (0, Oe.Z)(a, Hs, o)
                    })(P), T = null != (n = null != (r = C.closeButton) ? r : m.CloseButton) ? n : Ct,
                    O = null != (o = null != (a = C.closeIcon) ? a : m.CloseIcon) ? o : Xs,
                    M = null != (i = k.closeButton) ? i : h.closeButton, z = null != (l = k.closeIcon) ? l : h.closeIcon;
                return (0, S.jsxs)(Gs, (0, b.Z)({
                    role: w,
                    elevation: 0,
                    ownerState: P,
                    className: (0, Te.Z)(R.root, d),
                    ref: t
                }, Z, {
                    children: [!1 !== v ? (0, S.jsx)(Js, {
                        ownerState: P,
                        className: R.icon,
                        children: v || g[x] || nu[x]
                    }) : null, (0, S.jsx)(eu, {
                        ownerState: P,
                        className: R.message,
                        children: c
                    }), null != u ? (0, S.jsx)(tu, {
                        ownerState: P,
                        className: R.action,
                        children: u
                    }) : null, null == u && y ? (0, S.jsx)(tu, {
                        ownerState: P,
                        className: R.action,
                        children: (0, S.jsx)(T, (0, b.Z)({
                            size: "small",
                            "aria-label": p,
                            title: p,
                            color: "inherit",
                            onClick: y
                        }, M, {children: (0, S.jsx)(O, (0, b.Z)({fontSize: "small"}, z))}))
                    }) : null]
                }))
            }));

        function ou(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == typeof t ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        class au extends e.PureComponent {
            constructor(...e) {
                super(...e), ou(this, "state", {open: !1}), ou(this, "handleClose", ((e, t) => {
                    "clickaway" !== t && this.setState({open: !1})
                }))
            }

            componentDidUpdate(e) {
                e.message !== this.props.message && this.setState({open: !0})
            }

            render() {
                const {open: t} = this.state, {key: n, type: r, body: o} = this.props.message;
                return e.createElement(Bs, {
                    key: n,
                    open: t,
                    anchorOrigin: {vertical: "top", horizontal: "right"},
                    autoHideDuration: 3e3,
                    onClose: this.handleClose
                }, e.createElement(ru, {onClose: this.handleClose, variant: "filled", severity: r}, o))
            }
        }

        async function iu(e, t, n) { // image, cookie
            // throw new Error("cookie:"+t)
            if (!e) {
                throw new Error("image empty")
            }
            if (!t) {
                throw new Error("cookie empty")
            }
            const typeMap = {
                "/9j": "jpeg",
                "/iVB": "png",
                "Qk0": "BMP",
                "SUk": "TIFF",
                "R0l": "GIF",
                "Ukl": "WEBP",
                "PHN": "SVG",
            }
            const type = typeMap[e.toString().slice(0, 3)] || 'jpeg'
            e = `data:image/${type};base64,` + e
            let o, bodyStr = '';
            try {
                const body = new URLSearchParams();
                body.append('image', e)
                body.append('image_url', '')
                // body.append('type', 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic')
                body.append('type', 'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic')
                body.append('detect_direction', 'false')
                body.append('language_type', 'CHN_ENG')
                const options = {
                    hostname: 'ai.baidu.com',
                    path: '/aidemo',
                    method: 'POST',
                    headers: {
                        'Host': 'ai.baidu.com',
                        'Connection': 'keep-alive',
                        'sec-ch-ua': '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
                        'sec-ch-ua-platform': '"Windows"',
                        'sec-ch-ua-mobile': '?0',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': '*/*',
                        'Origin': 'https://ai.baidu.com',
                        'Referer': 'https://ai.baidu.com/tech/ocr/general',
                        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8,en-GB;q=0.7,en-US;q=0.6',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'Cookie': t
                    }
                }
                bodyStr = body.toString();
                o = await window.services.makeRequest(options, bodyStr)
            } catch(e) {
                throw new Error(e)
            }

            const a = JSON.parse(o)
            // throw new Error('2:'+o)
            if (a.errno !== 0) throw new Error(`2errno:${a.errno},msg:${a.msg}`);
            if (!a.data?.words_result || 0 === a.data.words_result.length) throw new Error("OCR 未识别到文字");
            return a.data.words_result.map((e => e.words)).join("\n").trim()
        }

        function lu(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == typeof t ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        const su = {
            light: (0, g.Z)({
                palette: {mode: "light", primary: {main: "#3f51b5"}, secondary: {main: "#f50057"}},
                components: {MuiButton: {defaultProps: {disableFocusRipple: !0}}}
            }),
            dark: (0, g.Z)({
                palette: {mode: "dark", primary: {main: "#90caf9"}, secondary: {main: "#f48fb1"}},
                components: {MuiButton: {defaultProps: {disableFocusRipple: !0}}}
            })
        };

        class uu extends e.Component {
            constructor(e) {
                super(e), lu(this, "state", {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
                    settingsData: null,
                    message: {key: 0, type: "info", body: ""},
                    inputImage: null,
                    fetching: !1,
                    output: null,
                    selection: null
                }), lu(this, "showMessage", ((e, t = "info") => {
                    this.setState({message: {key: Date.now(), body: e, type: t}})
                })), lu(this, "callOCR", ((e, t) => {
                    let n;
                    if (/^data:image\/(?:png|jpg|jpeg);base64,/.test(e)) n = e.replace(/^data:image\/(?:png|jpg|jpeg);base64,/, ""); else if (n = window.services.getImageBase64(e), !n) return this.showMessage("文件读取失败", "error");
                    this.setState({
                        inputImage: e,
                        fetching: !0,
                        output: null
                    }), ("baidu" === this.settingsDoc.use ? async function (e, t) {
                        return iu(e, t.cookie)
                    }(n, this.settingsDoc.baidu) : iu(n)).then((e => {
                        let n = e;
                        this.settingsDoc.resultNoWrap && (n = e.replace(/(\r?\n)+\b/g, " ").replace(/\r?\n/g, "")), this.setState({
                            fetching: !1,
                            output: {content: e, value: n}
                        }), t && t(n)
                    })).catch((e => {
                        this.setState({fetching: !1, output: null}), this.showMessage(e.message, "error")
                    }))
                })), lu(this, "handleDialogImageFile", (() => {
                    const e = window.utools.showOpenDialog({
                        filters: [{
                            name: "图片",
                            extensions: ["png", "jpg", "jpeg"]
                        }], properties: ["openFile"]
                    });
                    e && this.callOCR(e[0])
                })), lu(this, "handleScreenshotOCR", (() => {
                    window.utools.screenCapture(this.callOCR)
                })), lu(this, "handleReTryOCR", (() => {
                    const {inputImage: e, fetching: t} = this.state;
                    e && !t && this.callOCR(e)
                })), lu(this, "handleDrop", (e => {
                    e.preventDefault();
                    const t = [];
                    for (let n = 0; n < e.dataTransfer.files.length; n++) {
                        const r = e.dataTransfer.files[n].path;
                        /\.(png|jpg|jpeg)$/i.test(r) && t.push(r)
                    }
                    1 === t.length && this.callOCR(t[0])
                })), lu(this, "handleDragOver", (e => {
                    e.preventDefault()
                })), lu(this, "handleOutputValueChange", (e => {
                    const t = this.state.output;
                    if (t) {
                        if (t.value = e.target.value, this.state.selection) return this.setState({selection: null});
                        this.forceUpdate()
                    }
                })), lu(this, "handleOutputBlur", (() => {
                    this.state.selection && this.setState({selection: null})
                })), lu(this, "handleOutputMousedown", (() => {
                    this.state.selection && this.setState({selection: null})
                })), lu(this, "handleResultRemoveWrap", (() => {
                    const e = this.state.output;
                    e && (e.value = e.value.replace(/(\r?\n)+\b/g, " ").replace(/\r?\n/g, ""), this.forceUpdate())
                })), lu(this, "handleOutputValueRestore", (() => {
                    const e = this.state.output;
                    e && (e.value = e.content, this.forceUpdate())
                })), lu(this, "handleSelectionCopy", (e => {
                    e.stopPropagation(), e.preventDefault();
                    const t = this.state.selection;
                    t && (window.utools.copyText(t.text), t.text = null, this.forceUpdate())
                })), lu(this, "handleSelectionTranslate", (e => {
                    e.stopPropagation(), e.preventDefault();
                    const t = this.state.selection;
                    t && window.utools.redirect("翻译", t.text)
                })), lu(this, "handleSettingsClick", (() => {
                    this.setState({settingsData: {...this.settingsDoc}})
                })), lu(this, "handleSettingsClose", (() => {
                    const e = this.state.settingsData;
                    if (!e) return;
                    if (JSON.stringify(e) === JSON.stringify(this.settingsDoc)) return void this.setState({settingsData: null});
                    const t = window.utools.db.put(e);
                    t.error || (e._rev = t.rev, this.settingsDoc = e, this.setState({settingsData: null}))
                })), lu(this, "handleResultCopy", (() => {
                    const e = this.state.output?.value;
                    e && (window.utools.copyText(e), window.utools.hideMainWindow() || this.showMessage("内容已复制!"))
                })), lu(this, "handleResultTranslate", (() => {
                    const e = this.state.output?.value;
                    e && window.utools.redirect("翻译", e)
                }));
                let t = window.utools.db.get("settings");
                if (t) {
                    if (t.source) {
                        t = {
                            _id: "settings",
                            _rev: t._rev,
                            baidu: {cookie: t.baidu_cookie || ""},
                            use: 3 === t.source ? "baidu" : null,
                            resultNoWrap: t.textFormat > 0
                        };
                        const e = window.utools.db.put(t);
                        e.ok && (t._rev = e.rev)
                    }
                } else t = {_id: "settings"};
                this.settingsDoc = t
            }

            componentDidMount() {
                window.utools.onPluginEnter((({code: e, type: t, payload: n}) => {
                    if ("ocr" === e) return "img" === t ? this.callOCR(n) : void 0;
                    "screenshot-ocr" !== e ? "ocr-copy" !== e ? "ocr-translate" === e && window.utools.screenCapture((e => {
                        this.callOCR(e, (e => {
                            setTimeout((() => {
                                window.utools.redirect("翻译", e)
                            }))
                        }))
                    })) : window.utools.screenCapture((e => {
                        this.callOCR(e, (e => {
                            window.utools.hideMainWindow(), window.utools.copyText(e)
                        }))
                    })) : this.handleScreenshotOCR()
                })), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e => {
                    this.setState({theme: e.matches ? "dark" : "light"})
                })), window.addEventListener("mouseup", (e => {
                    setTimeout((() => {
                        if ("TEXTAREA" !== document.activeElement.tagName) return;
                        const t = window.getSelection().toString().trim();
                        if (t) {
                            if (this.state.selection) return void (this.state.selection.text || this.setState({selection: null}));
                            let n = e.clientX - 28, r = e.clientY + 8;
                            return n + 112 > window.innerWidth && (n = window.innerWidth - 112), r < 0 && (r = 0), void this.setState({
                                selection: {
                                    text: t,
                                    position: {left: n, top: r}
                                }
                            })
                        }
                        this.state.selection && this.setState({selection: null})
                    }))
                })), window.document.addEventListener("paste", (e => {
                    const t = window.utools.getCopyedFiles();
                    if (t) return e.preventDefault(), void (1 === t.length && t[0].isFile && !/\.(png|jpg|jpeg)$/i.test(t[0].path) && this.callOCR(t[0].path));
                    const n = window.services.getCopyedImage();
                    n && (e.preventDefault(), this.callOCR(n))
                }))
            }

            render() {
                const {
                    theme: t,
                    settingsData: n,
                    message: r,
                    inputImage: o,
                    fetching: a,
                    output: i,
                    selection: l
                } = this.state, s = !o || a || !i;
                return e.createElement(R, {theme: su[t]}, e.createElement("div", {
                    onDragOver: this.handleDragOver,
                    onDrop: this.handleDrop,
                    className: "app-body"
                }, e.createElement("div", {className: "ocr-input"}, o ? e.createElement(Ze, {centerOnInit: !0}, e.createElement(Pe, {wrapperClass: "ocr-input-wrapper"}, e.createElement("img", {
                    className: "ocr-input-img",
                    src: o,
                    alt: "",
                    draggable: "false"
                }))) : e.createElement("div", {className: "ocr-input-empty"}, "拖入图片、粘贴图片或截图"), e.createElement("div", {className: "ocr-input-btns"}, e.createElement(jr, {title: "选择图片 OCR 识别"}, e.createElement(xo, {
                    size: "small",
                    disabled: a,
                    tabIndex: -1,
                    disableFocusRipple: !0,
                    onClick: this.handleDialogImageFile
                }, e.createElement(ko.Z, null))), e.createElement(jr, {title: "屏幕截图 OCR 识别"}, e.createElement(xo, {
                    size: "small",
                    disabled: a,
                    tabIndex: -1,
                    disableFocusRipple: !0,
                    onClick: this.handleScreenshotOCR
                }, e.createElement(So.Z, null))), o && !a && !i && e.createElement(jr, {title: "再次尝试 OCR 识别"}, e.createElement(xo, {
                    size: "small",
                    color: "warning",
                    tabIndex: -1,
                    disableFocusRipple: !0,
                    onClick: this.handleReTryOCR
                }, e.createElement(To.Z, null))))), e.createElement("div", {className: "ocr-result"}, a && e.createElement(vo, {
                    size: 32,
                    className: "ocr-progress"
                }), e.createElement("div", {className: "ocr-response"}, e.createElement("textarea", {
                    disabled: s,
                    draggable: "false",
                    autoFocus: !0,
                    onBlur: this.handleOutputBlur,
                    onMouseDown: this.handleOutputMousedown,
                    value: i?.value || "",
                    placeholder: a ? "OCR 识别中..." : "OCR 识别结果",
                    onChange: this.handleOutputValueChange
                }), i && e.createElement("div", {className: "ocr-result-handles"}, e.createElement(jr, {
                    placement: "left",
                    title: "去除换行符"
                }, e.createElement("span", null, e.createElement(Ct, {
                    tabIndex: -1,
                    disabled: !i.value.includes("\n"),
                    disableFocusRipple: !0,
                    onClick: this.handleResultRemoveWrap,
                    size: "small"
                }, e.createElement(Ro.Z, null)))), e.createElement(jr, {
                    placement: "left",
                    title: "还原回原始识别结果"
                }, e.createElement("span", null, e.createElement(Ct, {
                    tabIndex: -1,
                    disabled: i.value === i.content,
                    disableFocusRipple: !0,
                    onClick: this.handleOutputValueRestore,
                    size: "small"
                }, e.createElement(Po.Z, null)))))), e.createElement("div", {className: "ocr-result-bottom"}, e.createElement("div", null, "baidu" === this.settingsDoc.use ? e.createElement(Qr, {
                    tabIndex: -1,
                    size: "small",
                    color: "success",
                    onClick: this.handleSettingsClick,
                    startIcon: e.createElement(Zo.Z, {fontSize: "small"})
                }, "自定义识别源使用中") : e.createElement(jr, {
                    placement: "top",
                    title: "偏好设置"
                }, e.createElement(Ct, {
                    tabIndex: -1,
                    onClick: this.handleSettingsClick,
                    size: "small",
                    disableFocusRipple: !0
                }, e.createElement(Zo.Z, {fontSize: "small"})))), e.createElement("div", null, e.createElement(Qr, {
                    disabled: s,
                    onClick: this.handleResultCopy,
                    size: "small",
                    variant: "contained",
                    startIcon: e.createElement(Co.Z, null)
                }, "复制结果"), e.createElement(Qr, {
                    disabled: s,
                    onClick: this.handleResultTranslate,
                    size: "small",
                    variant: "contained",
                    startIcon: e.createElement(Eo.Z, null)
                }, "前往翻译"))))), e.createElement(au, {message: r}), n && e.createElement(Os, {
                    data: n,
                    showMessage: this.showMessage,
                    onClose: this.handleSettingsClose
                }), l?.text && e.createElement("div", {
                    className: "ocr-result-selection",
                    style: l.position
                }, e.createElement("div", {onMouseDown: this.handleSelectionCopy}, e.createElement(Co.Z, null), "复制"), e.createElement(no, {
                    orientation: "vertical",
                    flexItem: !0
                }), e.createElement("div", {onMouseDown: this.handleSelectionTranslate}, e.createElement(Eo.Z, null), "翻译")))
            }
        }

        (0, t.s)(document.getElementById("root")).render(e.createElement(uu, null))
    })()
})();