(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js
  var require_smooth_scroll_polyfills_min = __commonJS({
    "node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js"(exports, module) {
      window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
        var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
        do {
          for (t = n.length; 0 <= --t && n.item(t) !== o; )
            ;
        } while (t < 0 && (o = o.parentElement));
        return o;
      }), function() {
        if ("function" == typeof window.CustomEvent)
          return;
        function e(e2, t) {
          t = t || { bubbles: false, cancelable: false, detail: void 0 };
          var n = document.createEvent("CustomEvent");
          return n.initCustomEvent(e2, t.bubbles, t.cancelable, t.detail), n;
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e;
      }(), function() {
        for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t)
          window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e2, t2) {
          var n = (/* @__PURE__ */ new Date()).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout(function() {
            e2(n + o);
          }, o);
          return r = n + o, a;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e2) {
          clearTimeout(e2);
        });
      }(), function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
          return t(e);
        }) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e);
      }("undefined" != typeof global ? global : "undefined" != typeof window ? window : exports, function(M) {
        "use strict";
        var q = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: true, speed: 500, speedAsDuration: false, durationMax: null, durationMin: null, clip: true, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: true, popstate: true, emitEvents: true }, I = function() {
          var n = {};
          return Array.prototype.forEach.call(arguments, function(e) {
            for (var t in e) {
              if (!e.hasOwnProperty(t))
                return;
              n[t] = e[t];
            }
          }), n;
        }, r = function(e) {
          "#" === e.charAt(0) && (e = e.substr(1));
          for (var t, n = String(e), o = n.length, a = -1, r2 = "", i = n.charCodeAt(0); ++a < o; ) {
            if (0 === (t = n.charCodeAt(a)))
              throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r2 += "\\" + t.toString(16) + " " : r2 += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
          }
          return "#" + r2;
        }, F = function() {
          return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        }, L = function(e) {
          return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
          var t;
        }, x = function(e, t, n) {
          0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
        }, H = function(e, t, n, o) {
          if (t.emitEvents && "function" == typeof M.CustomEvent) {
            var a = new CustomEvent(e, { bubbles: true, detail: { anchor: n, toggle: o } });
            document.dispatchEvent(a);
          }
        };
        return function(o, e) {
          var b, a, A, O, C = {};
          C.cancelScroll = function(e2) {
            cancelAnimationFrame(O), O = null, e2 || H("scrollCancel", b);
          }, C.animateScroll = function(a2, r2, e2) {
            C.cancelScroll();
            var i = I(b || q, e2 || {}), c = "[object Number]" === Object.prototype.toString.call(a2), t2 = c || !a2.tagName ? null : a2;
            if (c || t2) {
              var s = M.pageYOffset;
              i.header && !A && (A = document.querySelector(i.header));
              var n2, o2, u, l, m, d, f, h, p = L(A), g = c ? a2 : function(e3, t3, n3, o3) {
                var a3 = 0;
                if (e3.offsetParent)
                  for (; a3 += e3.offsetTop, e3 = e3.offsetParent; )
                    ;
                return a3 = Math.max(a3 - t3 - n3, 0), o3 && (a3 = Math.min(a3, F() - M.innerHeight)), a3;
              }(t2, p, parseInt("function" == typeof i.offset ? i.offset(a2, r2) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n2 = y, u = (o2 = i).speedAsDuration ? o2.speed : Math.abs(n2 / 1e3 * o2.speed), o2.durationMax && u > o2.durationMax ? o2.durationMax : o2.durationMin && u < o2.durationMin ? o2.durationMin : parseInt(u, 10)), E = function(e3) {
                var t3, n3, o3;
                l || (l = e3), w += e3 - l, d = s + y * (n3 = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, "easeInQuad" === (t3 = i).easing && (o3 = n3 * n3), "easeOutQuad" === t3.easing && (o3 = n3 * (2 - n3)), "easeInOutQuad" === t3.easing && (o3 = n3 < 0.5 ? 2 * n3 * n3 : (4 - 2 * n3) * n3 - 1), "easeInCubic" === t3.easing && (o3 = n3 * n3 * n3), "easeOutCubic" === t3.easing && (o3 = --n3 * n3 * n3 + 1), "easeInOutCubic" === t3.easing && (o3 = n3 < 0.5 ? 4 * n3 * n3 * n3 : (n3 - 1) * (2 * n3 - 2) * (2 * n3 - 2) + 1), "easeInQuart" === t3.easing && (o3 = n3 * n3 * n3 * n3), "easeOutQuart" === t3.easing && (o3 = 1 - --n3 * n3 * n3 * n3), "easeInOutQuart" === t3.easing && (o3 = n3 < 0.5 ? 8 * n3 * n3 * n3 * n3 : 1 - 8 * --n3 * n3 * n3 * n3), "easeInQuint" === t3.easing && (o3 = n3 * n3 * n3 * n3 * n3), "easeOutQuint" === t3.easing && (o3 = 1 + --n3 * n3 * n3 * n3 * n3), "easeInOutQuint" === t3.easing && (o3 = n3 < 0.5 ? 16 * n3 * n3 * n3 * n3 * n3 : 1 + 16 * --n3 * n3 * n3 * n3 * n3), t3.customEasing && (o3 = t3.customEasing(n3)), o3 || n3), M.scrollTo(0, Math.floor(d)), function(e4, t4) {
                  var n4 = M.pageYOffset;
                  if (e4 == t4 || n4 == t4 || (s < t4 && M.innerHeight + n4) >= v)
                    return C.cancelScroll(true), x(a2, t4, c), H("scrollStop", i, a2, r2), !(O = l = null);
                }(d, g) || (O = M.requestAnimationFrame(E), l = e3);
              };
              0 === M.pageYOffset && M.scrollTo(0, 0), f = a2, h = i, c || history.pushState && h.updateURL && history.pushState({ smoothScroll: JSON.stringify(h), anchor: f.id }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a2, Math.floor(g), false) : (H("scrollStart", i, a2, r2), C.cancelScroll(true), M.requestAnimationFrame(E));
            }
          };
          var t = function(e2) {
            if (!e2.defaultPrevented && !(0 !== e2.button || e2.metaKey || e2.ctrlKey || e2.shiftKey) && "closest" in e2.target && (a = e2.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e2.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
              var t2, n2;
              try {
                t2 = r(decodeURIComponent(a.hash));
              } catch (e3) {
                t2 = r(a.hash);
              }
              if ("#" === t2) {
                if (!b.topOnEmptyHash)
                  return;
                n2 = document.documentElement;
              } else
                n2 = document.querySelector(t2);
              (n2 = n2 || "#top" !== t2 ? n2 : document.documentElement) && (e2.preventDefault(), function(e3) {
                if (history.replaceState && e3.updateURL && !history.state) {
                  var t3 = M.location.hash;
                  t3 = t3 || "", history.replaceState({ smoothScroll: JSON.stringify(e3), anchor: t3 || M.pageYOffset }, document.title, t3 || M.location.href);
                }
              }(b), C.animateScroll(n2, a));
            }
          }, n = function(e2) {
            if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
              var t2 = history.state.anchor;
              "string" == typeof t2 && t2 && !(t2 = document.querySelector(r(history.state.anchor))) || C.animateScroll(t2, null, { updateURL: false });
            }
          };
          C.destroy = function() {
            b && (document.removeEventListener("click", t, false), M.removeEventListener("popstate", n, false), C.cancelScroll(), O = A = a = b = null);
          };
          return function() {
            if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype))
              throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, document.addEventListener("click", t, false), b.updateURL && b.popstate && M.addEventListener("popstate", n, false);
          }(), C;
        };
      });
    }
  });

  // node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.js
  var require_accessible_autocomplete_min = __commonJS({
    "node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.js"(exports, module) {
      (function webpackUniversalModuleDefinition(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["accessibleAutocomplete"] = t() : e["accessibleAutocomplete"] = t();
      })(window, function() {
        return function(n) {
          var r = {};
          function o(e) {
            if (r[e])
              return r[e].exports;
            var t = r[e] = { i: e, l: false, exports: {} };
            return n[e].call(t.exports, t, t.exports, o), t.l = true, t.exports;
          }
          return o.m = n, o.c = r, o.d = function(e, t, n2) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: n2 });
          }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
          }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e)
              return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
              return t;
            var n2 = /* @__PURE__ */ Object.create(null);
            if (o.r(n2), Object.defineProperty(n2, "default", { enumerable: true, value: t }), 2 & e && "string" != typeof t)
              for (var r2 in t)
                o.d(n2, r2, function(e2) {
                  return t[e2];
                }.bind(null, r2));
            return n2;
          }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
              return e["default"];
            } : function() {
              return e;
            };
            return o.d(t, "a", t), t;
          }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, o.p = "/", o(o.s = 37);
        }([function(e, t, n) {
          var m = n(1), v = n(6), y = n(7), g = n(16), _3 = n(18), b = "prototype", w = function(e2, t2, n2) {
            var r, o, i, u, a = e2 & w.F, s = e2 & w.G, l = e2 & w.S, c = e2 & w.P, p = e2 & w.B, f = s ? m : l ? m[t2] || (m[t2] = {}) : (m[t2] || {})[b], d = s ? v : v[t2] || (v[t2] = {}), h = d[b] || (d[b] = {});
            for (r in s && (n2 = t2), n2)
              i = ((o = !a && f && f[r] !== void 0) ? f : n2)[r], u = p && o ? _3(i, m) : c && "function" == typeof i ? _3(Function.call, i) : i, f && g(f, r, i, e2 & w.U), d[r] != i && y(d, r, u), c && h[r] != i && (h[r] = i);
          };
          m.core = v, w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, e.exports = w;
        }, function(e, t) {
          var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = n);
        }, function(e, t) {
          e.exports = function(e2) {
            return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
          };
        }, function(e, t, n) {
          e.exports = !n(4)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e, t) {
          e.exports = function(e2) {
            try {
              return !!e2();
            } catch (t2) {
              return true;
            }
          };
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "h", function() {
            return r;
          }), n.d(t, "createElement", function() {
            return r;
          }), n.d(t, "cloneElement", function() {
            return i;
          }), n.d(t, "Component", function() {
            return g;
          }), n.d(t, "render", function() {
            return _3;
          }), n.d(t, "rerender", function() {
            return f;
          }), n.d(t, "options", function() {
            return E;
          });
          var s = function s2() {
          }, E = {}, l = [], c = [];
          function r(e2, t2) {
            var n2, r2, o2, i2, u2 = c;
            for (i2 = arguments.length; 2 < i2--; )
              l.push(arguments[i2]);
            for (t2 && null != t2.children && (l.length || l.push(t2.children), delete t2.children); l.length; )
              if ((r2 = l.pop()) && r2.pop !== void 0)
                for (i2 = r2.length; i2--; )
                  l.push(r2[i2]);
              else
                "boolean" == typeof r2 && (r2 = null), (o2 = "function" != typeof e2) && (null == r2 ? r2 = "" : "number" == typeof r2 ? r2 = String(r2) : "string" != typeof r2 && (o2 = false)), o2 && n2 ? u2[u2.length - 1] += r2 : u2 === c ? u2 = [r2] : u2.push(r2), n2 = o2;
            var a2 = new s();
            return a2.nodeName = e2, a2.children = u2, a2.attributes = null == t2 ? void 0 : t2, a2.key = null == t2 ? void 0 : t2.key, E.vnode !== void 0 && E.vnode(a2), a2;
          }
          function M(e2, t2) {
            for (var n2 in t2)
              e2[n2] = t2[n2];
            return e2;
          }
          var o = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
          function i(e2, t2) {
            return r(e2.nodeName, M(M({}, e2.attributes), t2), 2 < arguments.length ? [].slice.call(arguments, 2) : e2.children);
          }
          var p = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, u = [];
          function a(e2) {
            !e2._dirty && (e2._dirty = true) && 1 == u.push(e2) && (E.debounceRendering || o)(f);
          }
          function f() {
            var e2, t2 = u;
            for (u = []; e2 = t2.pop(); )
              e2._dirty && V(e2);
          }
          function N(e2, t2) {
            return e2.normalizedNodeName === t2 || e2.nodeName.toLowerCase() === t2.toLowerCase();
          }
          function I(e2) {
            var t2 = M({}, e2.attributes);
            t2.children = e2.children;
            var n2 = e2.nodeName.defaultProps;
            if (n2 !== void 0)
              for (var r2 in n2)
                t2[r2] === void 0 && (t2[r2] = n2[r2]);
            return t2;
          }
          function k(e2) {
            var t2 = e2.parentNode;
            t2 && t2.removeChild(e2);
          }
          function v(e2, t2, n2, r2, o2) {
            if ("className" === t2 && (t2 = "class"), "key" === t2)
              ;
            else if ("ref" === t2)
              n2 && n2(null), r2 && r2(e2);
            else if ("class" !== t2 || o2)
              if ("style" === t2) {
                if (r2 && "string" != typeof r2 && "string" != typeof n2 || (e2.style.cssText = r2 || ""), r2 && "object" == typeof r2) {
                  if ("string" != typeof n2)
                    for (var i2 in n2)
                      i2 in r2 || (e2.style[i2] = "");
                  for (var i2 in r2)
                    e2.style[i2] = "number" == typeof r2[i2] && false === p.test(i2) ? r2[i2] + "px" : r2[i2];
                }
              } else if ("dangerouslySetInnerHTML" === t2)
                r2 && (e2.innerHTML = r2.__html || "");
              else if ("o" == t2[0] && "n" == t2[1]) {
                var u2 = t2 !== (t2 = t2.replace(/Capture$/, ""));
                t2 = t2.toLowerCase().substring(2), r2 ? n2 || e2.addEventListener(t2, d, u2) : e2.removeEventListener(t2, d, u2), (e2._listeners || (e2._listeners = {}))[t2] = r2;
              } else if ("list" !== t2 && "type" !== t2 && !o2 && t2 in e2) {
                try {
                  e2[t2] = null == r2 ? "" : r2;
                } catch (s2) {
                }
                null != r2 && false !== r2 || "spellcheck" == t2 || e2.removeAttribute(t2);
              } else {
                var a2 = o2 && t2 !== (t2 = t2.replace(/^xlink:?/, ""));
                null == r2 || false === r2 ? a2 ? e2.removeAttributeNS("http://www.w3.org/1999/xlink", t2.toLowerCase()) : e2.removeAttribute(t2) : "function" != typeof r2 && (a2 ? e2.setAttributeNS("http://www.w3.org/1999/xlink", t2.toLowerCase(), r2) : e2.setAttribute(t2, r2));
              }
            else
              e2.className = r2 || "";
          }
          function d(e2) {
            return this._listeners[e2.type](E.event && E.event(e2) || e2);
          }
          var A = [], P = 0, j = false, L = false;
          function T() {
            for (var e2; e2 = A.pop(); )
              E.afterMount && E.afterMount(e2), e2.componentDidMount && e2.componentDidMount();
          }
          function B(e2, t2, n2, r2, o2, i2) {
            P++ || (j = null != o2 && o2.ownerSVGElement !== void 0, L = null != e2 && !("__preactattr_" in e2));
            var u2 = D(e2, t2, n2, r2, i2);
            return o2 && u2.parentNode !== o2 && o2.appendChild(u2), --P || (L = false, i2 || T()), u2;
          }
          function D(e2, t2, n2, r2, o2) {
            var i2 = e2, u2 = j;
            if (null != t2 && "boolean" != typeof t2 || (t2 = ""), "string" == typeof t2 || "number" == typeof t2)
              return e2 && e2.splitText !== void 0 && e2.parentNode && (!e2._component || o2) ? e2.nodeValue != t2 && (e2.nodeValue = t2) : (i2 = document.createTextNode(t2), e2 && (e2.parentNode && e2.parentNode.replaceChild(i2, e2), F(e2, true))), i2["__preactattr_"] = true, i2;
            var a2 = t2.nodeName;
            if ("function" == typeof a2)
              return function d2(e3, t3, n3, r3) {
                var o3 = e3 && e3._component, i3 = o3, u3 = e3, a3 = o3 && e3._componentConstructor === t3.nodeName, s3 = a3, l3 = I(t3);
                for (; o3 && !s3 && (o3 = o3._parentComponent); )
                  s3 = o3.constructor === t3.nodeName;
                o3 && s3 && (!r3 || o3._component) ? (U(o3, l3, 3, n3, r3), e3 = o3.base) : (i3 && !a3 && (q(i3), e3 = u3 = null), o3 = R(t3.nodeName, l3, n3), e3 && !o3.nextBase && (o3.nextBase = e3, u3 = null), U(o3, l3, 1, n3, r3), e3 = o3.base, u3 && e3 !== u3 && (u3._component = null, F(u3, false)));
                return e3;
              }(e2, t2, n2, r2);
            if (j = "svg" === a2 || "foreignObject" !== a2 && j, a2 = String(a2), (!e2 || !N(e2, a2)) && (i2 = function h2(e3, t3) {
              var n3 = t3 ? document.createElementNS("http://www.w3.org/2000/svg", e3) : document.createElement(e3);
              return n3.normalizedNodeName = e3, n3;
            }(a2, j), e2)) {
              for (; e2.firstChild; )
                i2.appendChild(e2.firstChild);
              e2.parentNode && e2.parentNode.replaceChild(i2, e2), F(e2, true);
            }
            var s2 = i2.firstChild, l2 = i2["__preactattr_"], c2 = t2.children;
            if (null == l2) {
              l2 = i2["__preactattr_"] = {};
              for (var p2 = i2.attributes, f2 = p2.length; f2--; )
                l2[p2[f2].name] = p2[f2].value;
            }
            return !L && c2 && 1 === c2.length && "string" == typeof c2[0] && null != s2 && s2.splitText !== void 0 && null == s2.nextSibling ? s2.nodeValue != c2[0] && (s2.nodeValue = c2[0]) : (c2 && c2.length || null != s2) && function S(e3, t3, n3, r3, o3) {
              var i3, u3, a3, s3, l3, c3 = e3.childNodes, p3 = [], f3 = {}, d2 = 0, h2 = 0, m2 = c3.length, v2 = 0, y2 = t3 ? t3.length : 0;
              if (0 !== m2)
                for (var g2 = 0; g2 < m2; g2++) {
                  var _4 = c3[g2], b2 = _4["__preactattr_"], w = y2 && b2 ? _4._component ? _4._component.__key : b2.key : null;
                  null != w ? (d2++, f3[w] = _4) : (b2 || (_4.splitText !== void 0 ? !o3 || _4.nodeValue.trim() : o3)) && (p3[v2++] = _4);
                }
              if (0 !== y2)
                for (var g2 = 0; g2 < y2; g2++) {
                  s3 = t3[g2], l3 = null;
                  var w = s3.key;
                  if (null != w)
                    d2 && f3[w] !== void 0 && (l3 = f3[w], f3[w] = void 0, d2--);
                  else if (h2 < v2) {
                    for (i3 = h2; i3 < v2; i3++)
                      if (p3[i3] !== void 0 && (x = u3 = p3[i3], C = o3, "string" == typeof (O = s3) || "number" == typeof O ? x.splitText !== void 0 : "string" == typeof O.nodeName ? !x._componentConstructor && N(x, O.nodeName) : C || x._componentConstructor === O.nodeName)) {
                        l3 = u3, p3[i3] = void 0, i3 === v2 - 1 && v2--, i3 === h2 && h2++;
                        break;
                      }
                  }
                  l3 = D(l3, s3, n3, r3), a3 = c3[g2], l3 && l3 !== e3 && l3 !== a3 && (null == a3 ? e3.appendChild(l3) : l3 === a3.nextSibling ? k(a3) : e3.insertBefore(l3, a3));
                }
              var x, O, C;
              if (d2)
                for (var g2 in f3)
                  f3[g2] !== void 0 && F(f3[g2], false);
              for (; h2 <= v2; )
                (l3 = p3[v2--]) !== void 0 && F(l3, false);
            }(i2, c2, n2, r2, L || null != l2.dangerouslySetInnerHTML), function m2(e3, t3, n3) {
              var r3;
              for (r3 in n3)
                t3 && null != t3[r3] || null == n3[r3] || v(e3, r3, n3[r3], n3[r3] = void 0, j);
              for (r3 in t3)
                "children" === r3 || "innerHTML" === r3 || r3 in n3 && t3[r3] === ("value" === r3 || "checked" === r3 ? e3[r3] : n3[r3]) || v(e3, r3, n3[r3], n3[r3] = t3[r3], j);
            }(i2, t2.attributes, l2), j = u2, i2;
          }
          function F(e2, t2) {
            var n2 = e2._component;
            n2 ? q(n2) : (null != e2["__preactattr_"] && e2["__preactattr_"].ref && e2["__preactattr_"].ref(null), false !== t2 && null != e2["__preactattr_"] || k(e2), h(e2));
          }
          function h(e2) {
            for (e2 = e2.lastChild; e2; ) {
              var t2 = e2.previousSibling;
              F(e2, true), e2 = t2;
            }
          }
          var m = [];
          function R(e2, t2, n2) {
            var r2, o2 = m.length;
            for (e2.prototype && e2.prototype.render ? (r2 = new e2(t2, n2), g.call(r2, t2, n2)) : ((r2 = new g(t2, n2)).constructor = e2, r2.render = y); o2--; )
              if (m[o2].constructor === e2)
                return r2.nextBase = m[o2].nextBase, m.splice(o2, 1), r2;
            return r2;
          }
          function y(e2, t2, n2) {
            return this.constructor(e2, n2);
          }
          function U(e2, t2, n2, r2, o2) {
            e2._disable || (e2._disable = true, e2.__ref = t2.ref, e2.__key = t2.key, delete t2.ref, delete t2.key, "undefined" == typeof e2.constructor.getDerivedStateFromProps && (!e2.base || o2 ? e2.componentWillMount && e2.componentWillMount() : e2.componentWillReceiveProps && e2.componentWillReceiveProps(t2, r2)), r2 && r2 !== e2.context && (e2.prevContext || (e2.prevContext = e2.context), e2.context = r2), e2.prevProps || (e2.prevProps = e2.props), e2.props = t2, e2._disable = false, 0 !== n2 && (1 !== n2 && false === E.syncComponentUpdates && e2.base ? a(e2) : V(e2, 1, o2)), e2.__ref && e2.__ref(e2));
          }
          function V(e2, t2, n2, r2) {
            if (!e2._disable) {
              var o2, i2, u2, a2 = e2.props, s2 = e2.state, l2 = e2.context, c2 = e2.prevProps || a2, p2 = e2.prevState || s2, f2 = e2.prevContext || l2, d2 = e2.base, h2 = e2.nextBase, m2 = d2 || h2, v2 = e2._component, y2 = false, g2 = f2;
              if (e2.constructor.getDerivedStateFromProps && (s2 = M(M({}, s2), e2.constructor.getDerivedStateFromProps(a2, s2)), e2.state = s2), d2 && (e2.props = c2, e2.state = p2, e2.context = f2, 2 !== t2 && e2.shouldComponentUpdate && false === e2.shouldComponentUpdate(a2, s2, l2) ? y2 = true : e2.componentWillUpdate && e2.componentWillUpdate(a2, s2, l2), e2.props = a2, e2.state = s2, e2.context = l2), e2.prevProps = e2.prevState = e2.prevContext = e2.nextBase = null, e2._dirty = false, !y2) {
                o2 = e2.render(a2, s2, l2), e2.getChildContext && (l2 = M(M({}, l2), e2.getChildContext())), d2 && e2.getSnapshotBeforeUpdate && (g2 = e2.getSnapshotBeforeUpdate(c2, p2));
                var _4, b2, w = o2 && o2.nodeName;
                if ("function" == typeof w) {
                  var x = I(o2);
                  (i2 = v2) && i2.constructor === w && x.key == i2.__key ? U(i2, x, 1, l2, false) : (_4 = i2, e2._component = i2 = R(w, x, l2), i2.nextBase = i2.nextBase || h2, i2._parentComponent = e2, U(i2, x, 0, l2, false), V(i2, 1, n2, true)), b2 = i2.base;
                } else
                  u2 = m2, (_4 = v2) && (u2 = e2._component = null), (m2 || 1 === t2) && (u2 && (u2._component = null), b2 = function B2(t3, n3, r3, o3, i3, u3) {
                    P++ || (j = null != i3 && i3.ownerSVGElement !== void 0, L = null != t3 && !("__preactattr_" in t3));
                    var a3 = D(t3, n3, r3, o3, u3);
                    return i3 && a3.parentNode !== i3 && i3.appendChild(a3), --P || (L = false, u3 || T()), a3;
                  }(u2, o2, l2, n2 || !d2, m2 && m2.parentNode, true));
                if (m2 && b2 !== m2 && i2 !== v2) {
                  var O = m2.parentNode;
                  O && b2 !== O && (O.replaceChild(b2, m2), _4 || (m2._component = null, F(m2, false)));
                }
                if (_4 && q(_4), (e2.base = b2) && !r2) {
                  for (var C = e2, S = e2; S = S._parentComponent; )
                    (C = S).base = b2;
                  b2._component = C, b2._componentConstructor = C.constructor;
                }
              }
              for (!d2 || n2 ? A.unshift(e2) : y2 || (e2.componentDidUpdate && e2.componentDidUpdate(c2, p2, g2), E.afterUpdate && E.afterUpdate(e2)); e2._renderCallbacks.length; )
                e2._renderCallbacks.pop().call(e2);
              P || r2 || T();
            }
          }
          function q(e2) {
            E.beforeUnmount && E.beforeUnmount(e2);
            var t2 = e2.base;
            e2._disable = true, e2.componentWillUnmount && e2.componentWillUnmount(), e2.base = null;
            var n2 = e2._component;
            n2 ? q(n2) : t2 && (t2["__preactattr_"] && t2["__preactattr_"].ref && t2["__preactattr_"].ref(null), k(e2.nextBase = t2), m.push(e2), h(t2)), e2.__ref && e2.__ref(null);
          }
          function g(e2, t2) {
            this._dirty = true, this.context = t2, this.props = e2, this.state = this.state || {}, this._renderCallbacks = [];
          }
          function _3(e2, t2, n2) {
            return B(n2, e2, {}, false, t2, false);
          }
          M(g.prototype, { setState: function(e2, t2) {
            this.prevState || (this.prevState = this.state), this.state = M(M({}, this.state), "function" == typeof e2 ? e2(this.state, this.props) : e2), t2 && this._renderCallbacks.push(t2), a(this);
          }, forceUpdate: function(e2) {
            e2 && this._renderCallbacks.push(e2), V(this, 2);
          }, render: function _4() {
          } });
          var b = { h: r, createElement: r, cloneElement: i, Component: g, render: _3, rerender: f, options: E };
          t["default"] = b;
        }, function(e, t) {
          var n = e.exports = { version: "2.5.7" };
          "number" == typeof __e && (__e = n);
        }, function(e, t, n) {
          var r = n(8), o = n(40);
          e.exports = n(3) ? function(e2, t2, n2) {
            return r.f(e2, t2, o(1, n2));
          } : function(e2, t2, n2) {
            return e2[t2] = n2, e2;
          };
        }, function(e, t, n) {
          var o = n(9), i = n(38), u = n(39), a = Object.defineProperty;
          t.f = n(3) ? Object.defineProperty : function(e2, t2, n2) {
            if (o(e2), t2 = u(t2, true), o(n2), i)
              try {
                return a(e2, t2, n2);
              } catch (r) {
              }
            if ("get" in n2 || "set" in n2)
              throw TypeError("Accessors not supported!");
            return "value" in n2 && (e2[t2] = n2.value), e2;
          };
        }, function(e, t, n) {
          var r = n(2);
          e.exports = function(e2) {
            if (!r(e2))
              throw TypeError(e2 + " is not an object!");
            return e2;
          };
        }, function(e, t) {
          var n = 0, r = Math.random();
          e.exports = function(e2) {
            return "Symbol(".concat(e2 === void 0 ? "" : e2, ")_", (++n + r).toString(36));
          };
        }, function(e, t, n) {
          var r = n(22);
          e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e2) {
            return "String" == r(e2) ? e2.split("") : Object(e2);
          };
        }, function(e, t) {
          e.exports = function(e2) {
            if (e2 == void 0)
              throw TypeError("Can't call method on  " + e2);
            return e2;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(4);
          e.exports = function(e2, t2) {
            return !!e2 && r(function() {
              t2 ? e2.call(null, function() {
              }, 1) : e2.call(null);
            });
          };
        }, function(e, t, n) {
          var r = n(0);
          r(r.S + r.F, "Object", { assign: n(41) });
        }, function(e, t, n) {
          var r = n(2), o = n(1).document, i = r(o) && r(o.createElement);
          e.exports = function(e2) {
            return i ? o.createElement(e2) : {};
          };
        }, function(e, t, n) {
          var i = n(1), u = n(7), a = n(17), s = n(10)("src"), r = "toString", o = Function[r], l = ("" + o).split(r);
          n(6).inspectSource = function(e2) {
            return o.call(e2);
          }, (e.exports = function(e2, t2, n2, r2) {
            var o2 = "function" == typeof n2;
            o2 && (a(n2, "name") || u(n2, "name", t2)), e2[t2] !== n2 && (o2 && (a(n2, s) || u(n2, s, e2[t2] ? "" + e2[t2] : l.join(String(t2)))), e2 === i ? e2[t2] = n2 : r2 ? e2[t2] ? e2[t2] = n2 : u(e2, t2, n2) : (delete e2[t2], u(e2, t2, n2)));
          })(Function.prototype, r, function() {
            return "function" == typeof this && this[s] || o.call(this);
          });
        }, function(e, t) {
          var n = {}.hasOwnProperty;
          e.exports = function(e2, t2) {
            return n.call(e2, t2);
          };
        }, function(e, t, n) {
          var i = n(19);
          e.exports = function(r, o, e2) {
            if (i(r), o === void 0)
              return r;
            switch (e2) {
              case 1:
                return function(e3) {
                  return r.call(o, e3);
                };
              case 2:
                return function(e3, t2) {
                  return r.call(o, e3, t2);
                };
              case 3:
                return function(e3, t2, n2) {
                  return r.call(o, e3, t2, n2);
                };
            }
            return function() {
              return r.apply(o, arguments);
            };
          };
        }, function(e, t) {
          e.exports = function(e2) {
            if ("function" != typeof e2)
              throw TypeError(e2 + " is not a function!");
            return e2;
          };
        }, function(e, t, n) {
          var r = n(42), o = n(28);
          e.exports = Object.keys || function(e2) {
            return r(e2, o);
          };
        }, function(e, t, n) {
          var r = n(11), o = n(12);
          e.exports = function(e2) {
            return r(o(e2));
          };
        }, function(e, t) {
          var n = {}.toString;
          e.exports = function(e2) {
            return n.call(e2).slice(8, -1);
          };
        }, function(e, t, n) {
          var s = n(21), l = n(24), c = n(43);
          e.exports = function(a) {
            return function(e2, t2, n2) {
              var r, o = s(e2), i = l(o.length), u = c(n2, i);
              if (a && t2 != t2) {
                for (; u < i; )
                  if ((r = o[u++]) != r)
                    return true;
              } else
                for (; u < i; u++)
                  if ((a || u in o) && o[u] === t2)
                    return a || u || 0;
              return !a && -1;
            };
          };
        }, function(e, t, n) {
          var r = n(25), o = Math.min;
          e.exports = function(e2) {
            return 0 < e2 ? o(r(e2), 9007199254740991) : 0;
          };
        }, function(e, t) {
          var n = Math.ceil, r = Math.floor;
          e.exports = function(e2) {
            return isNaN(e2 = +e2) ? 0 : (0 < e2 ? r : n)(e2);
          };
        }, function(e, t, n) {
          var r = n(27)("keys"), o = n(10);
          e.exports = function(e2) {
            return r[e2] || (r[e2] = o(e2));
          };
        }, function(e, t, n) {
          var r = n(6), o = n(1), i = "__core-js_shared__", u = o[i] || (o[i] = {});
          (e.exports = function(e2, t2) {
            return u[e2] || (u[e2] = t2 !== void 0 ? t2 : {});
          })("versions", []).push({ version: r.version, mode: n(44) ? "pure" : "global", copyright: "\xA9 2018 Denis Pushkarev (zloirock.ru)" });
        }, function(e, t) {
          e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, function(e, t, n) {
          var r = n(12);
          e.exports = function(e2) {
            return Object(r(e2));
          };
        }, function(e, t, n) {
          var r = n(8).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
          "name" in o || n(3) && r(o, "name", { configurable: true, get: function() {
            try {
              return ("" + this).match(i)[1];
            } catch (e2) {
              return "";
            }
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), o = n(32)(1);
          r(r.P + r.F * !n(13)([].map, true), "Array", { map: function(e2) {
            return o(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          var _3 = n(18), b = n(11), w = n(29), x = n(24), r = n(47);
          e.exports = function(p, e2) {
            var f = 1 == p, d = 2 == p, h = 3 == p, m = 4 == p, v = 6 == p, y = 5 == p || v, g = e2 || r;
            return function(e3, t2, n2) {
              for (var r2, o, i = w(e3), u = b(i), a = _3(t2, n2, 3), s = x(u.length), l = 0, c = f ? g(e3, s) : d ? g(e3, 0) : void 0; l < s; l++)
                if ((y || l in u) && (o = a(r2 = u[l], l, i), p)) {
                  if (f)
                    c[l] = o;
                  else if (o)
                    switch (p) {
                      case 3:
                        return true;
                      case 5:
                        return r2;
                      case 6:
                        return l;
                      case 2:
                        c.push(r2);
                    }
                  else if (m)
                    return false;
                }
              return v ? -1 : h || m ? m : c;
            };
          };
        }, function(e, t, n) {
          var r = n(22);
          e.exports = Array.isArray || function(e2) {
            return "Array" == r(e2);
          };
        }, function(e, t, n) {
          var r = n(27)("wks"), o = n(10), i = n(1).Symbol, u = "function" == typeof i;
          (e.exports = function(e2) {
            return r[e2] || (r[e2] = u && i[e2] || (u ? i : o)("Symbol." + e2));
          }).store = r;
        }, function(e, t, n) {
          "use strict";
          var r = n(0), o = n(23)(false), i = [].indexOf, u = !!i && 1 / [1].indexOf(1, -0) < 0;
          r(r.P + r.F * (u || !n(13)(i)), "Array", { indexOf: function(e2) {
            return u ? i.apply(this, arguments) || 0 : o(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Object", { create: n(52) });
        }, function(e, t, n) {
          "use strict";
          t.__esModule = true, t["default"] = void 0, n(14), n(30), n(31), n(35), n(49), n(50);
          var r = n(5), o = function s(e2) {
            return e2 && e2.__esModule ? e2 : { "default": e2 };
          }(n(51));
          function i(e2) {
            if (!e2.element)
              throw new Error("element is not defined");
            if (!e2.id)
              throw new Error("id is not defined");
            if (!e2.source)
              throw new Error("source is not defined");
            Array.isArray(e2.source) && (e2.source = u(e2.source)), (0, r.render)((0, r.createElement)(o["default"], e2), e2.element);
          }
          var u = function u2(n2) {
            return function(t2, e2) {
              e2(n2.filter(function(e3) {
                return -1 !== e3.toLowerCase().indexOf(t2.toLowerCase());
              }));
            };
          };
          i.enhanceSelectElement = function(n2) {
            if (!n2.selectElement)
              throw new Error("selectElement is not defined");
            if (!n2.source) {
              var e2 = [].filter.call(n2.selectElement.options, function(e3) {
                return e3.value || n2.preserveNullOptions;
              });
              n2.source = e2.map(function(e3) {
                return e3.textContent || e3.innerText;
              });
            }
            if (n2.onConfirm = n2.onConfirm || function(t3) {
              var e3 = [].filter.call(n2.selectElement.options, function(e4) {
                return (e4.textContent || e4.innerText) === t3;
              })[0];
              e3 && (e3.selected = true);
            }, n2.selectElement.value || n2.defaultValue === void 0) {
              var t2 = n2.selectElement.options[n2.selectElement.options.selectedIndex];
              n2.defaultValue = t2.textContent || t2.innerText;
            }
            n2.name === void 0 && (n2.name = ""), n2.id === void 0 && (n2.selectElement.id === void 0 ? n2.id = "" : n2.id = n2.selectElement.id), n2.autoselect === void 0 && (n2.autoselect = true);
            var r2 = document.createElement("div");
            n2.selectElement.parentNode.insertBefore(r2, n2.selectElement), i(Object.assign({}, n2, { element: r2 })), n2.selectElement.style.display = "none", n2.selectElement.id = n2.selectElement.id + "-select";
          };
          var a = i;
          t["default"] = a;
        }, function(e, t, n) {
          e.exports = !n(3) && !n(4)(function() {
            return 7 != Object.defineProperty(n(15)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e, t, n) {
          var o = n(2);
          e.exports = function(e2, t2) {
            if (!o(e2))
              return e2;
            var n2, r;
            if (t2 && "function" == typeof (n2 = e2.toString) && !o(r = n2.call(e2)))
              return r;
            if ("function" == typeof (n2 = e2.valueOf) && !o(r = n2.call(e2)))
              return r;
            if (!t2 && "function" == typeof (n2 = e2.toString) && !o(r = n2.call(e2)))
              return r;
            throw TypeError("Can't convert object to primitive value");
          };
        }, function(e, t) {
          e.exports = function(e2, t2) {
            return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
          };
        }, function(e, t, n) {
          "use strict";
          var f = n(20), d = n(45), h = n(46), m = n(29), v = n(11), o = Object.assign;
          e.exports = !o || n(4)(function() {
            var e2 = {}, t2 = {}, n2 = Symbol(), r = "abcdefghijklmnopqrst";
            return e2[n2] = 7, r.split("").forEach(function(e3) {
              t2[e3] = e3;
            }), 7 != o({}, e2)[n2] || Object.keys(o({}, t2)).join("") != r;
          }) ? function(e2, t2) {
            for (var n2 = m(e2), r = arguments.length, o2 = 1, i = d.f, u = h.f; o2 < r; )
              for (var a, s = v(arguments[o2++]), l = i ? f(s).concat(i(s)) : f(s), c = l.length, p = 0; p < c; )
                u.call(s, a = l[p++]) && (n2[a] = s[a]);
            return n2;
          } : o;
        }, function(e, t, n) {
          var u = n(17), a = n(21), s = n(23)(false), l = n(26)("IE_PROTO");
          e.exports = function(e2, t2) {
            var n2, r = a(e2), o = 0, i = [];
            for (n2 in r)
              n2 != l && u(r, n2) && i.push(n2);
            for (; t2.length > o; )
              u(r, n2 = t2[o++]) && (~s(i, n2) || i.push(n2));
            return i;
          };
        }, function(e, t, n) {
          var r = n(25), o = Math.max, i = Math.min;
          e.exports = function(e2, t2) {
            return (e2 = r(e2)) < 0 ? o(e2 + t2, 0) : i(e2, t2);
          };
        }, function(e, t) {
          e.exports = false;
        }, function(e, t) {
          t.f = Object.getOwnPropertySymbols;
        }, function(e, t) {
          t.f = {}.propertyIsEnumerable;
        }, function(e, t, n) {
          var r = n(48);
          e.exports = function(e2, t2) {
            return new (r(e2))(t2);
          };
        }, function(e, t, n) {
          var r = n(2), o = n(33), i = n(34)("species");
          e.exports = function(e2) {
            var t2;
            return o(e2) && ("function" != typeof (t2 = e2.constructor) || t2 !== Array && !o(t2.prototype) || (t2 = void 0), r(t2) && null === (t2 = t2[i]) && (t2 = void 0)), t2 === void 0 ? Array : t2;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(0), o = n(32)(2);
          r(r.P + r.F * !n(13)([].filter, true), "Array", { filter: function(e2) {
            return o(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Array", { isArray: n(33) });
        }, function(e, t, n) {
          "use strict";
          t.__esModule = true, t["default"] = void 0, n(14), n(36), n(30), n(31), n(35), n(55), n(58);
          var $ = n(5), J = o(n(60)), r = o(n(61));
          function o(e2) {
            return e2 && e2.__esModule ? e2 : { "default": e2 };
          }
          function X() {
            return (X = Object.assign || function(e2) {
              for (var t2 = 1; t2 < arguments.length; t2++) {
                var n2 = arguments[t2];
                for (var r2 in n2)
                  Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
              }
              return e2;
            }).apply(this, arguments);
          }
          function i(e2) {
            if (void 0 === e2)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e2;
          }
          var u = { 13: "enter", 27: "escape", 32: "space", 38: "up", 40: "down" };
          function Y() {
            return "undefined" != typeof navigator && !(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || !navigator.userAgent.match(/AppleWebKit/g));
          }
          var a = function(n2) {
            function e2(e3) {
              var t3;
              return (t3 = n2.call(this, e3) || this).elementReferences = {}, t3.state = { focused: null, hovered: null, menuOpen: false, options: e3.defaultValue ? [e3.defaultValue] : [], query: e3.defaultValue, validChoiceMade: false, selected: null, ariaHint: true }, t3.handleComponentBlur = t3.handleComponentBlur.bind(i(i(t3))), t3.handleKeyDown = t3.handleKeyDown.bind(i(i(t3))), t3.handleUpArrow = t3.handleUpArrow.bind(i(i(t3))), t3.handleDownArrow = t3.handleDownArrow.bind(i(i(t3))), t3.handleEnter = t3.handleEnter.bind(i(i(t3))), t3.handlePrintableKey = t3.handlePrintableKey.bind(i(i(t3))), t3.handleListMouseLeave = t3.handleListMouseLeave.bind(i(i(t3))), t3.handleOptionBlur = t3.handleOptionBlur.bind(i(i(t3))), t3.handleOptionClick = t3.handleOptionClick.bind(i(i(t3))), t3.handleOptionFocus = t3.handleOptionFocus.bind(i(i(t3))), t3.handleOptionMouseDown = t3.handleOptionMouseDown.bind(i(i(t3))), t3.handleOptionMouseEnter = t3.handleOptionMouseEnter.bind(i(i(t3))), t3.handleInputBlur = t3.handleInputBlur.bind(i(i(t3))), t3.handleInputChange = t3.handleInputChange.bind(i(i(t3))), t3.handleInputFocus = t3.handleInputFocus.bind(i(i(t3))), t3.pollInputElement = t3.pollInputElement.bind(i(i(t3))), t3.getDirectInputChanges = t3.getDirectInputChanges.bind(i(i(t3))), t3;
            }
            (function r2(e3, t3) {
              e3.prototype = Object.create(t3.prototype), (e3.prototype.constructor = e3).__proto__ = t3;
            })(e2, n2);
            var t2 = e2.prototype;
            return t2.isQueryAnOption = function(e3, t3) {
              var n3 = this;
              return -1 !== t3.map(function(e4) {
                return n3.templateInputValue(e4).toLowerCase();
              }).indexOf(e3.toLowerCase());
            }, t2.componentDidMount = function() {
              this.pollInputElement();
            }, t2.componentWillUnmount = function() {
              clearTimeout(this.$pollInput);
            }, t2.pollInputElement = function() {
              var e3 = this;
              this.getDirectInputChanges(), this.$pollInput = setTimeout(function() {
                e3.pollInputElement();
              }, 100);
            }, t2.getDirectInputChanges = function() {
              var e3 = this.elementReferences[-1];
              e3 && e3.value !== this.state.query && this.handleInputChange({ target: { value: e3.value } });
            }, t2.componentDidUpdate = function(e3, t3) {
              var n3 = this.state.focused, r2 = null === n3, o2 = t3.focused !== n3;
              o2 && !r2 && this.elementReferences[n3].focus();
              var i2 = -1 === n3, u2 = o2 && null === t3.focused;
              if (i2 && u2) {
                var a2 = this.elementReferences[n3];
                a2.setSelectionRange(0, a2.value.length);
              }
            }, t2.hasAutoselect = function() {
              return !Y() && this.props.autoselect;
            }, t2.templateInputValue = function(e3) {
              var t3 = this.props.templates && this.props.templates.inputValue;
              return t3 ? t3(e3) : e3;
            }, t2.templateSuggestion = function(e3) {
              var t3 = this.props.templates && this.props.templates.suggestion;
              return t3 ? t3(e3) : e3;
            }, t2.handleComponentBlur = function(e3) {
              var t3, n3 = this.state, r2 = n3.options, o2 = n3.query, i2 = n3.selected;
              this.props.confirmOnBlur ? (t3 = e3.query || o2, this.props.onConfirm(r2[i2])) : t3 = o2, this.setState({ focused: null, menuOpen: e3.menuOpen || false, query: t3, selected: null, validChoiceMade: this.isQueryAnOption(t3, r2) });
            }, t2.handleListMouseLeave = function(e3) {
              this.setState({ hovered: null });
            }, t2.handleOptionBlur = function(e3, t3) {
              var n3 = this.state, r2 = n3.focused, o2 = n3.menuOpen, i2 = n3.options, u2 = n3.selected, a2 = null === e3.relatedTarget, s = e3.relatedTarget === this.elementReferences[-1], l = r2 !== t3 && -1 !== r2;
              if (!l && a2 || !(l || s)) {
                var c = o2 && Y();
                this.handleComponentBlur({ menuOpen: c, query: this.templateInputValue(i2[u2]) });
              }
            }, t2.handleInputBlur = function(e3) {
              var t3 = this.state, n3 = t3.focused, r2 = t3.menuOpen, o2 = t3.options, i2 = t3.query, u2 = t3.selected;
              if (!(-1 !== n3)) {
                var a2 = r2 && Y(), s = Y() ? i2 : this.templateInputValue(o2[u2]);
                this.handleComponentBlur({ menuOpen: a2, query: s });
              }
            }, t2.handleInputChange = function(e3) {
              var n3 = this, t3 = this.props, r2 = t3.minLength, o2 = t3.source, i2 = t3.showAllValues, u2 = this.hasAutoselect(), a2 = e3.target.value, s = 0 === a2.length, l = this.state.query.length !== a2.length, c = a2.length >= r2;
              this.setState({ query: a2, ariaHint: s }), i2 || !s && l && c ? o2(a2, function(e4) {
                var t4 = 0 < e4.length;
                n3.setState({ menuOpen: t4, options: e4, selected: u2 && t4 ? 0 : -1, validChoiceMade: false });
              }) : !s && c || this.setState({ menuOpen: false, options: [] });
            }, t2.handleInputClick = function(e3) {
              this.handleInputChange(e3);
            }, t2.handleInputFocus = function(e3) {
              var t3 = this.state, n3 = t3.query, r2 = t3.validChoiceMade, o2 = t3.options, i2 = this.props.minLength, u2 = !r2 && n3.length >= i2 && 0 < o2.length;
              u2 ? this.setState(function(e4) {
                var t4 = e4.menuOpen;
                return { focused: -1, menuOpen: u2 || t4, selected: -1 };
              }) : this.setState({ focused: -1 });
            }, t2.handleOptionFocus = function(e3) {
              this.setState({ focused: e3, hovered: null, selected: e3 });
            }, t2.handleOptionMouseEnter = function(e3, t3) {
              Y() || this.setState({ hovered: t3 });
            }, t2.handleOptionClick = function(e3, t3) {
              var n3 = this.state.options[t3], r2 = this.templateInputValue(n3);
              this.props.onConfirm(n3), this.setState({ focused: -1, hovered: null, menuOpen: false, query: r2, selected: -1, validChoiceMade: true }), this.forceUpdate();
            }, t2.handleOptionMouseDown = function(e3) {
              e3.preventDefault();
            }, t2.handleUpArrow = function(e3) {
              e3.preventDefault();
              var t3 = this.state, n3 = t3.menuOpen, r2 = t3.selected;
              -1 !== r2 && n3 && this.handleOptionFocus(r2 - 1);
            }, t2.handleDownArrow = function(e3) {
              var t3 = this;
              if (e3.preventDefault(), this.props.showAllValues && false === this.state.menuOpen)
                e3.preventDefault(), this.props.source("", function(e4) {
                  t3.setState({ menuOpen: true, options: e4, selected: 0, focused: 0, hovered: null });
                });
              else if (true === this.state.menuOpen) {
                var n3 = this.state, r2 = n3.menuOpen, o2 = n3.options, i2 = n3.selected;
                i2 !== o2.length - 1 && r2 && this.handleOptionFocus(i2 + 1);
              }
            }, t2.handleSpace = function(e3) {
              var t3 = this;
              this.props.showAllValues && false === this.state.menuOpen && "" === this.state.query && (e3.preventDefault(), this.props.source("", function(e4) {
                t3.setState({ menuOpen: true, options: e4 });
              })), -1 !== this.state.focused && (e3.preventDefault(), this.handleOptionClick(e3, this.state.focused));
            }, t2.handleEnter = function(e3) {
              this.state.menuOpen && (e3.preventDefault(), 0 <= this.state.selected && this.handleOptionClick(e3, this.state.selected));
            }, t2.handlePrintableKey = function(e3) {
              var t3 = this.elementReferences[-1];
              e3.target === t3 || t3.focus();
            }, t2.handleKeyDown = function(e3) {
              switch (u[e3.keyCode]) {
                case "up":
                  this.handleUpArrow(e3);
                  break;
                case "down":
                  this.handleDownArrow(e3);
                  break;
                case "space":
                  this.handleSpace(e3);
                  break;
                case "enter":
                  this.handleEnter(e3);
                  break;
                case "escape":
                  this.handleComponentBlur({ query: this.state.query });
                  break;
                default:
                  (function t3(e4) {
                    return 47 < e4 && e4 < 58 || 32 === e4 || 8 === e4 || 64 < e4 && e4 < 91 || 95 < e4 && e4 < 112 || 185 < e4 && e4 < 193 || 218 < e4 && e4 < 223;
                  })(e3.keyCode) && this.handlePrintableKey(e3);
              }
            }, t2.render = function() {
              var e3, i2 = this, t3 = this.props, n3 = t3.cssNamespace, r2 = t3.displayMenu, u2 = t3.id, o2 = t3.minLength, a2 = t3.name, s = t3.placeholder, l = t3.required, c = t3.showAllValues, p = t3.tNoResults, f = t3.tStatusQueryTooShort, d = t3.tStatusNoResults, h = t3.tStatusSelectedOption, m = t3.tStatusResults, v = t3.tAssistiveHint, y = t3.dropdownArrow, g = this.state, _3 = g.focused, b = g.hovered, w = g.menuOpen, x = g.options, O = g.query, C = g.selected, S = g.ariaHint, E = g.validChoiceMade, M = this.hasAutoselect(), N = -1 === _3, I = 0 === x.length, k = 0 !== O.length, A = O.length >= o2, P = this.props.showNoOptionsFound && N && I && k && A, j = n3 + "__wrapper", L = n3 + "__input", T = null !== _3 ? " " + L + "--focused" : "", B = this.props.showAllValues ? " " + L + "--show-all-values" : " " + L + "--default", D = n3 + "__dropdown-arrow-down", F = -1 !== _3 && null !== _3, R = n3 + "__menu", U = R + "--" + r2, V = R + "--" + (w || P ? "visible" : "hidden"), q = n3 + "__option", W = n3 + "__hint", H = this.templateInputValue(x[C]), K = H && 0 === H.toLowerCase().indexOf(O.toLowerCase()) && M ? O + H.substr(O.length) : "", Q = u2 + "__assistiveHint", z = S ? { "aria-describedby": Q } : null;
              return c && "string" == typeof (e3 = y({ className: D })) && (e3 = (0, $.createElement)("div", { className: n3 + "__dropdown-arrow-down-wrapper", dangerouslySetInnerHTML: { __html: e3 } })), (0, $.createElement)("div", { className: j, onKeyDown: this.handleKeyDown }, (0, $.createElement)(J["default"], { id: u2, length: x.length, queryLength: O.length, minQueryLength: o2, selectedOption: this.templateInputValue(x[C]), selectedOptionIndex: C, validChoiceMade: E, isInFocus: null !== this.state.focused, tQueryTooShort: f, tNoResults: d, tSelectedOption: h, tResults: m }), K && (0, $.createElement)("span", null, (0, $.createElement)("input", { className: W, readonly: true, tabIndex: "-1", value: K })), (0, $.createElement)("input", X({ "aria-expanded": w ? "true" : "false", "aria-activedescendant": !!F && u2 + "__option--" + _3, "aria-owns": u2 + "__listbox", "aria-autocomplete": this.hasAutoselect() ? "both" : "list" }, z, { autoComplete: "off", className: "" + L + T + B, id: u2, onClick: function(e4) {
                return i2.handleInputClick(e4);
              }, onBlur: this.handleInputBlur }, /* @__PURE__ */ function G(e4) {
                return { onInput: e4 };
              }(this.handleInputChange), { onFocus: this.handleInputFocus, name: a2, placeholder: s, ref: function(e4) {
                i2.elementReferences[-1] = e4;
              }, type: "text", role: "combobox", required: l, value: O })), e3, (0, $.createElement)("ul", { className: R + " " + U + " " + V, onMouseLeave: function(e4) {
                return i2.handleListMouseLeave(e4);
              }, id: u2 + "__listbox", role: "listbox" }, x.map(function(e4, t4) {
                var n4 = (-1 === _3 ? C === t4 : _3 === t4) && null === b ? " " + q + "--focused" : "", r3 = t4 % 2 ? " " + q + "--odd" : "", o3 = Y() ? "<span id=" + u2 + "__option-suffix--" + t4 + ' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> ' + (t4 + 1) + " of " + x.length + "</span>" : "";
                return (0, $.createElement)("li", { "aria-selected": _3 === t4 ? "true" : "false", className: "" + q + n4 + r3, dangerouslySetInnerHTML: { __html: i2.templateSuggestion(e4) + o3 }, id: u2 + "__option--" + t4, key: t4, onBlur: function(e5) {
                  return i2.handleOptionBlur(e5, t4);
                }, onClick: function(e5) {
                  return i2.handleOptionClick(e5, t4);
                }, onMouseDown: i2.handleOptionMouseDown, onMouseEnter: function(e5) {
                  return i2.handleOptionMouseEnter(e5, t4);
                }, ref: function(e5) {
                  i2.elementReferences[t4] = e5;
                }, role: "option", tabIndex: "-1", "aria-posinset": t4 + 1, "aria-setsize": x.length });
              }), P && (0, $.createElement)("li", { className: q + " " + q + "--no-results" }, p())), (0, $.createElement)("span", { id: Q, style: { display: "none" } }, v()));
            }, e2;
          }($.Component);
          (t["default"] = a).defaultProps = { autoselect: false, cssNamespace: "autocomplete", defaultValue: "", displayMenu: "inline", minLength: 0, name: "input-autocomplete", placeholder: "", onConfirm: function() {
          }, confirmOnBlur: true, showNoOptionsFound: true, showAllValues: false, required: false, tNoResults: function() {
            return "No results found";
          }, tAssistiveHint: function() {
            return "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.";
          }, dropdownArrow: r["default"] };
        }, function(e, t, r) {
          var o = r(9), i = r(53), u = r(28), a = r(26)("IE_PROTO"), s = function() {
          }, l = "prototype", c = function() {
            var e2, t2 = r(15)("iframe"), n = u.length;
            for (t2.style.display = "none", r(54).appendChild(t2), t2.src = "javascript:", (e2 = t2.contentWindow.document).open(), e2.write("<script>document.F=Object<\/script>"), e2.close(), c = e2.F; n--; )
              delete c[l][u[n]];
            return c();
          };
          e.exports = Object.create || function(e2, t2) {
            var n;
            return null !== e2 ? (s[l] = o(e2), n = new s(), s[l] = null, n[a] = e2) : n = c(), t2 === void 0 ? n : i(n, t2);
          };
        }, function(e, t, n) {
          var u = n(8), a = n(9), s = n(20);
          e.exports = n(3) ? Object.defineProperties : function(e2, t2) {
            a(e2);
            for (var n2, r = s(t2), o = r.length, i = 0; i < o; )
              u.f(e2, n2 = r[i++], t2[n2]);
            return e2;
          };
        }, function(e, t, n) {
          var r = n(1).document;
          e.exports = r && r.documentElement;
        }, function(e, t, n) {
          var r = n(0);
          r(r.P, "Function", { bind: n(56) });
        }, function(e, t, n) {
          "use strict";
          var i = n(19), u = n(2), a = n(57), s = [].slice, l = {};
          e.exports = Function.bind || function(t2) {
            var n2 = i(this), r = s.call(arguments, 1), o = function() {
              var e2 = r.concat(s.call(arguments));
              return this instanceof o ? function(e3, t3, n3) {
                if (!(t3 in l)) {
                  for (var r2 = [], o2 = 0; o2 < t3; o2++)
                    r2[o2] = "a[" + o2 + "]";
                  l[t3] = Function("F,a", "return new F(" + r2.join(",") + ")");
                }
                return l[t3](e3, n3);
              }(n2, e2.length, e2) : a(n2, e2, t2);
            };
            return u(n2.prototype) && (o.prototype = n2.prototype), o;
          };
        }, function(e, t) {
          e.exports = function(e2, t2, n) {
            var r = n === void 0;
            switch (t2.length) {
              case 0:
                return r ? e2() : e2.call(n);
              case 1:
                return r ? e2(t2[0]) : e2.call(n, t2[0]);
              case 2:
                return r ? e2(t2[0], t2[1]) : e2.call(n, t2[0], t2[1]);
              case 3:
                return r ? e2(t2[0], t2[1], t2[2]) : e2.call(n, t2[0], t2[1], t2[2]);
              case 4:
                return r ? e2(t2[0], t2[1], t2[2], t2[3]) : e2.call(n, t2[0], t2[1], t2[2], t2[3]);
            }
            return e2.apply(n, t2);
          };
        }, function(e, t, n) {
          n(59)("match", 1, function(r, o, e2) {
            return [function(e3) {
              "use strict";
              var t2 = r(this), n2 = e3 == void 0 ? void 0 : e3[o];
              return n2 !== void 0 ? n2.call(e3, t2) : new RegExp(e3)[o](String(t2));
            }, e2];
          });
        }, function(e, t, n) {
          "use strict";
          var a = n(7), s = n(16), l = n(4), c = n(12), p = n(34);
          e.exports = function(t2, e2, n2) {
            var r = p(t2), o = n2(c, r, ""[t2]), i = o[0], u = o[1];
            l(function() {
              var e3 = {};
              return e3[r] = function() {
                return 7;
              }, 7 != ""[t2](e3);
            }) && (s(String.prototype, t2, i), a(RegExp.prototype, r, 2 == e2 ? function(e3, t3) {
              return u.call(e3, this, t3);
            } : function(e3) {
              return u.call(e3, this);
            }));
          };
        }, function(e, t, n) {
          "use strict";
          t.__esModule = true, t["default"] = void 0, n(36);
          var _3 = n(5);
          var r = function r2(o2, i, u) {
            var a;
            return function() {
              var e2 = this, t2 = arguments, n2 = function n3() {
                a = null, u || o2.apply(e2, t2);
              }, r3 = u && !a;
              clearTimeout(a), a = setTimeout(n2, i), r3 && o2.apply(e2, t2);
            };
          }, o = function(o2) {
            function e2() {
              for (var e3, t3 = arguments.length, n2 = new Array(t3), r2 = 0; r2 < t3; r2++)
                n2[r2] = arguments[r2];
              return (e3 = o2.call.apply(o2, [this].concat(n2)) || this).state = { bump: false, debounced: false }, e3;
            }
            (function n2(e3, t3) {
              e3.prototype = Object.create(t3.prototype), (e3.prototype.constructor = e3).__proto__ = t3;
            })(e2, o2);
            var t2 = e2.prototype;
            return t2.componentWillMount = function() {
              var e3 = this;
              this.debounceStatusUpdate = r(function() {
                if (!e3.state.debounced) {
                  var t3 = !e3.props.isInFocus || e3.props.validChoiceMade;
                  e3.setState(function(e4) {
                    return { bump: !e4.bump, debounced: true, silenced: t3 };
                  });
                }
              }, 1400);
            }, t2.componentWillReceiveProps = function(e3) {
              e3.queryLength;
              this.setState({ debounced: false });
            }, t2.render = function() {
              var e3 = this.props, t3 = e3.id, n2 = e3.length, r2 = e3.queryLength, o3 = e3.minQueryLength, i = e3.selectedOption, u = e3.selectedOptionIndex, a = e3.tQueryTooShort, s = e3.tNoResults, l = e3.tSelectedOption, c = e3.tResults, p = this.state, f = p.bump, d = p.debounced, h = p.silenced, m = r2 < o3, v = 0 === n2, y = i ? l(i, n2, u) : "", g = null;
              return g = m ? a(o3) : v ? s() : c(n2, y), this.debounceStatusUpdate(), (0, _3.createElement)("div", { style: { border: "0", clip: "rect(0 0 0 0)", height: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", padding: "0", position: "absolute", whiteSpace: "nowrap", width: "1px" } }, (0, _3.createElement)("div", { id: t3 + "__status--A", role: "status", "aria-atomic": "true", "aria-live": "polite" }, !h && d && f ? g : ""), (0, _3.createElement)("div", { id: t3 + "__status--B", role: "status", "aria-atomic": "true", "aria-live": "polite" }, h || !d || f ? "" : g));
            }, e2;
          }(_3.Component);
          (t["default"] = o).defaultProps = { tQueryTooShort: function(e2) {
            return "Type in " + e2 + " or more characters for results";
          }, tNoResults: function() {
            return "No search results";
          }, tSelectedOption: function(e2, t2, n2) {
            return e2 + " " + (n2 + 1) + " of " + t2 + " is highlighted";
          }, tResults: function(e2, t2) {
            return e2 + " " + (1 === e2 ? "result" : "results") + " " + (1 === e2 ? "is" : "are") + " available. " + t2;
          } };
        }, function(e, t, n) {
          "use strict";
          t.__esModule = true, t["default"] = void 0;
          var r = n(5), o = function i(e2) {
            var t2 = e2.className;
            return (0, r.createElement)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", className: t2, focusable: "false" }, (0, r.createElement)("g", { stroke: "none", fill: "none", "fill-rule": "evenodd" }, (0, r.createElement)("polygon", { fill: "#000000", points: "0 0 22 0 11 17" })));
          };
          t["default"] = o;
        }])["default"];
      });
    }
  });

  // _data/contacts.json
  var require_contacts = __commonJS({
    "_data/contacts.json"(exports, module) {
      module.exports = [
        {
          agency: "General Services Administration",
          short: "GSA",
          office: "Regulatory Secretariat Division",
          website: "https://www.gsa.gov/about-us/organization/office-of-governmentwide-policy/office-of-acquisition-policy/governmentwide-acq-policy/regulatory-secretariat-division",
          phone: "202-501-4755",
          email: "GSARegSec@gsa.gov"
        },
        {
          agency: "U.S. Department of the Treasury",
          short: "USDT",
          office: "Office of Privacy, Transparency and Records (PTR) under the Assistant Secretary for Management",
          website: "https://www.treasury.gov/about/organizational-structure/offices/Pages/Office-of-Privacy,-Transparency-and-Records.aspx",
          email: "PRA@treasury.gov"
        },
        {
          agency: "Board of Governors of the Federal Reserve System",
          office: "Information Collection Coordination Section under the Office of the Chief Data Officer",
          phone: "202-452-3829",
          email: "OCDO-ICC@frb.gov"
        },
        {
          agency: "U.S. Department of State",
          office: "Bureau of Administration, Global Information Services, Office of Directives Management",
          email: "eRegs@state.gov"
        },
        {
          agency: "Federal Energy Regulatory Commission",
          short: "FERC",
          office: "Information Collection Management Team, IT Policy and Resources Management Div., Office of the Chief Information Officer, in the Office of the Executive Director",
          website: "https://www.ferc.gov/docs-filing/info-collections.asp",
          email: "DataClearance@ferc.gov"
        },
        {
          agency: "U.S. Department of Education",
          office: "Office of the Chief Information Officer",
          website: "https://www2.ed.gov/policy/gen/leg/pra.html",
          email: "ICDocketMgr@ed.gov"
        },
        {
          agency: "U.S. Office of Government Ethics",
          short: "OGE",
          office: "The Legal, External Affairs and Performance Branch within the Program Counsel Division",
          website: "https://www.oge.gov/Web/OGE.nsf/Organization/Program%20Counsel%20Division",
          email: "usoge@oge.gov",
          phone: "202-482-9300"
        },
        {
          agency: "U.S. Department of Commerce",
          short: "DOC",
          office: "Office of the Chief Information Officer",
          email: "docpra@doc.gov"
        },
        {
          agency: "National Aeronautics Space Administration",
          short: "NASA",
          office: "Enterprise Services and Integration Division (ESID) within the Office of the CIO",
          website: "https://www.nasa.gov/content/nasa-s-paper-reduction-act-pra-program",
          email: "HQ-OCIO-PRA-Program@mail.nasa.gov"
        },
        {
          agency: "U.S. Department of Health and Human Services",
          short: "HHS",
          office: "Office of the Chief Information Officer",
          email: "PRA@hhs.gov"
        },
        {
          agency: "U.S. Department of Justice",
          short: "DOJ",
          office: "Office of the Chief Information Officer",
          email: "PRAInbox@jmd.usdoj.gov"
        },
        {
          agency: "Federal Trade Commission",
          short: "FTC",
          office: "Office of the General Counsel",
          email: "PRA@ftc.gov"
        },
        {
          agency: "Department of the Interior",
          short: "DOI",
          office: "Office of the Secretary, Office of the Chief Information Officer, Planning and Performance Management Division",
          website: "https://www.doi.gov/ocio/pra_contacts",
          email: "doi-pra@ios.doi.gov",
          phone: "202-208-7072"
        },
        {
          agency: "National Credit Union Administration",
          short: "NCUA",
          office: "Information & Access Law Division (IAL), Office of General Counsel",
          email: "PRAComments@NCUA.gov"
        },
        {
          agency: "U.S. Department of Agriculture",
          short: "USDA",
          office: "Office of the Chief Information Officer, Information Resource Management Center",
          email: "USDA.PRA@usda.gov"
        },
        {
          agency: "Federal Deposit Insurance Corporation",
          short: "FDIC",
          office: "Legal Division",
          phone: "202-898-3767",
          email: "PRA@fdic.gov"
        },
        {
          agency: "Department of Homeland Security",
          short: "DHS",
          office: "Office of the Chief Information Officer",
          email: "dhs.pra@hq.dhs.gov"
        },
        {
          agency: "Food and Drug Administration",
          short: "FDA",
          office: "Office of Information Management and Technology",
          email: "PRAStaff@fda.hhs.gov"
        },
        {
          agency: "Federal Communications Commission",
          short: "FCC",
          office: "Office of Managing Director - Performance Evaluation and Records Management",
          email: "PRA@fcc.gov"
        },
        {
          agency: "Health Resources and Services Administration",
          short: "HRSA",
          office: "Office of Planning, Analysis and Evaluation",
          email: "InfoCollectOfficer@hrsa.gov"
        },
        {
          agency: "National Institutes of Health",
          short: "NIH",
          office: "Office of Policy for Extramural Research Administration, Project Clearance Branch",
          email: "projectclearancebranch@mail.nih.gov"
        },
        {
          agency: "National Archives & Records Administration",
          short: "NARA",
          office: "Office of the Chief of Management and Administration",
          email: "surveys@nara.gov"
        }
      ];
    }
  });

  // _js/contacts.js
  var require_contacts2 = __commonJS({
    "_js/contacts.js"() {
      var accessibleAutocomplete = require_accessible_autocomplete_min();
      var contacts = require_contacts();
      var container = document.querySelector("#contacts-search-container");
      var results = document.querySelector("#contacts-results");
      function clearInput(input) {
        input.value = "";
        results.classList.add("display-none");
        results.innerHTML = "";
      }
      function suggestions(query, populateResults) {
        query = query.toLowerCase();
        const suggestions2 = contacts.filter((n) => {
          if (n.agency.toLowerCase().includes(query) || n.short && n.short.toLowerCase().includes(query)) {
            return true;
          }
          return false;
        });
        suggestions2.sort((a, b) => a.agency > b.agency ? 1 : -1);
        populateResults(suggestions2);
      }
      if (container) {
        accessibleAutocomplete({
          element: container,
          id: "contacts-search",
          source: suggestions,
          autoselect: true,
          confirmOnBlur: false,
          onConfirm: (result2) => {
            results.classList.remove("display-none");
            results.innerHTML = `
        <div class="bg-base-lightest padding-2 border-bottom border-base">
          <h4 class="margin-y-0 font-serif-sm">${result2.agency}</h4>
        </div>
        <div class="padding-2">
          ${result2.office ? `<p>PRA requests are handled by the ${result2.office}.</p>` : ""}
          <p>Here is how you can contact this office:</p>
          <ul class="add-list-reset">
          ${result2.website ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Online:</h5><span><a href="${result2.website}" class="usa-link--external">Visit website</a></span></li>` : ""}
          ${result2.internal ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Online:</h5><span><a href="${result2.internal}" class="usa-link--external">Visit website (internal)</a></span></li>` : ""}
          ${result2.phone ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Phone:</h5><span>${result2.phone}</span></li>` : ""}
          ${result2.email ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Email:</h5><span><a href="mailto:${result2.email}">${result2.email}</a></span></li>` : ""}
          </ul>
        </div>
      `;
          },
          templates: {
            inputValue: (result2) => {
              return result2 && `${result2.agency} ${result2.short ? `(${result2.short})` : ""}`;
            },
            suggestion: (result2) => {
              return result2 && `${result2.agency} ${result2.short ? `(${result2.short})` : ""}`;
            }
          },
          tNoResults: () => {
            return `We don't have a listing for this agency yet. Often, the Office of the Chief Information Officer can point you in the right direction.`;
          }
        });
        container.addEventListener("click", function(e) {
          if (e.target && e.target.nodeName == "INPUT") {
            clearInput(e.target);
          }
        });
      }
    }
  });

  // node_modules/underscore/modules/_setup.js
  var VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX;
  var init_setup = __esm({
    "node_modules/underscore/modules/_setup.js"() {
      VERSION = "1.13.6";
      root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
      ArrayProto = Array.prototype;
      ObjProto = Object.prototype;
      SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
      push = ArrayProto.push;
      slice = ArrayProto.slice;
      toString = ObjProto.toString;
      hasOwnProperty = ObjProto.hasOwnProperty;
      supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
      supportsDataView = typeof DataView !== "undefined";
      nativeIsArray = Array.isArray;
      nativeKeys = Object.keys;
      nativeCreate = Object.create;
      nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
      _isNaN = isNaN;
      _isFinite = isFinite;
      hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
      nonEnumerableProps = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString"
      ];
      MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    }
  });

  // node_modules/underscore/modules/restArguments.js
  function restArguments(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
      for (; index < length; index++) {
        rest2[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0:
          return func.call(this, rest2);
        case 1:
          return func.call(this, arguments[0], rest2);
        case 2:
          return func.call(this, arguments[0], arguments[1], rest2);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest2;
      return func.apply(this, args);
    };
  }
  var init_restArguments = __esm({
    "node_modules/underscore/modules/restArguments.js"() {
    }
  });

  // node_modules/underscore/modules/isObject.js
  function isObject(obj) {
    var type = typeof obj;
    return type === "function" || type === "object" && !!obj;
  }
  var init_isObject = __esm({
    "node_modules/underscore/modules/isObject.js"() {
    }
  });

  // node_modules/underscore/modules/isNull.js
  function isNull(obj) {
    return obj === null;
  }
  var init_isNull = __esm({
    "node_modules/underscore/modules/isNull.js"() {
    }
  });

  // node_modules/underscore/modules/isUndefined.js
  function isUndefined(obj) {
    return obj === void 0;
  }
  var init_isUndefined = __esm({
    "node_modules/underscore/modules/isUndefined.js"() {
    }
  });

  // node_modules/underscore/modules/isBoolean.js
  function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
  }
  var init_isBoolean = __esm({
    "node_modules/underscore/modules/isBoolean.js"() {
      init_setup();
    }
  });

  // node_modules/underscore/modules/isElement.js
  function isElement(obj) {
    return !!(obj && obj.nodeType === 1);
  }
  var init_isElement = __esm({
    "node_modules/underscore/modules/isElement.js"() {
    }
  });

  // node_modules/underscore/modules/_tagTester.js
  function tagTester(name) {
    var tag = "[object " + name + "]";
    return function(obj) {
      return toString.call(obj) === tag;
    };
  }
  var init_tagTester = __esm({
    "node_modules/underscore/modules/_tagTester.js"() {
      init_setup();
    }
  });

  // node_modules/underscore/modules/isString.js
  var isString_default;
  var init_isString = __esm({
    "node_modules/underscore/modules/isString.js"() {
      init_tagTester();
      isString_default = tagTester("String");
    }
  });

  // node_modules/underscore/modules/isNumber.js
  var isNumber_default;
  var init_isNumber = __esm({
    "node_modules/underscore/modules/isNumber.js"() {
      init_tagTester();
      isNumber_default = tagTester("Number");
    }
  });

  // node_modules/underscore/modules/isDate.js
  var isDate_default;
  var init_isDate = __esm({
    "node_modules/underscore/modules/isDate.js"() {
      init_tagTester();
      isDate_default = tagTester("Date");
    }
  });

  // node_modules/underscore/modules/isRegExp.js
  var isRegExp_default;
  var init_isRegExp = __esm({
    "node_modules/underscore/modules/isRegExp.js"() {
      init_tagTester();
      isRegExp_default = tagTester("RegExp");
    }
  });

  // node_modules/underscore/modules/isError.js
  var isError_default;
  var init_isError = __esm({
    "node_modules/underscore/modules/isError.js"() {
      init_tagTester();
      isError_default = tagTester("Error");
    }
  });

  // node_modules/underscore/modules/isSymbol.js
  var isSymbol_default;
  var init_isSymbol = __esm({
    "node_modules/underscore/modules/isSymbol.js"() {
      init_tagTester();
      isSymbol_default = tagTester("Symbol");
    }
  });

  // node_modules/underscore/modules/isArrayBuffer.js
  var isArrayBuffer_default;
  var init_isArrayBuffer = __esm({
    "node_modules/underscore/modules/isArrayBuffer.js"() {
      init_tagTester();
      isArrayBuffer_default = tagTester("ArrayBuffer");
    }
  });

  // node_modules/underscore/modules/isFunction.js
  var isFunction, nodelist, isFunction_default;
  var init_isFunction = __esm({
    "node_modules/underscore/modules/isFunction.js"() {
      init_tagTester();
      init_setup();
      isFunction = tagTester("Function");
      nodelist = root.document && root.document.childNodes;
      if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
        isFunction = function(obj) {
          return typeof obj == "function" || false;
        };
      }
      isFunction_default = isFunction;
    }
  });

  // node_modules/underscore/modules/_hasObjectTag.js
  var hasObjectTag_default;
  var init_hasObjectTag = __esm({
    "node_modules/underscore/modules/_hasObjectTag.js"() {
      init_tagTester();
      hasObjectTag_default = tagTester("Object");
    }
  });

  // node_modules/underscore/modules/_stringTagBug.js
  var hasStringTagBug, isIE11;
  var init_stringTagBug = __esm({
    "node_modules/underscore/modules/_stringTagBug.js"() {
      init_setup();
      init_hasObjectTag();
      hasStringTagBug = supportsDataView && hasObjectTag_default(new DataView(new ArrayBuffer(8)));
      isIE11 = typeof Map !== "undefined" && hasObjectTag_default(/* @__PURE__ */ new Map());
    }
  });

  // node_modules/underscore/modules/isDataView.js
  function ie10IsDataView(obj) {
    return obj != null && isFunction_default(obj.getInt8) && isArrayBuffer_default(obj.buffer);
  }
  var isDataView, isDataView_default;
  var init_isDataView = __esm({
    "node_modules/underscore/modules/isDataView.js"() {
      init_tagTester();
      init_isFunction();
      init_isArrayBuffer();
      init_stringTagBug();
      isDataView = tagTester("DataView");
      isDataView_default = hasStringTagBug ? ie10IsDataView : isDataView;
    }
  });

  // node_modules/underscore/modules/isArray.js
  var isArray_default;
  var init_isArray = __esm({
    "node_modules/underscore/modules/isArray.js"() {
      init_setup();
      init_tagTester();
      isArray_default = nativeIsArray || tagTester("Array");
    }
  });

  // node_modules/underscore/modules/_has.js
  function has(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
  var init_has = __esm({
    "node_modules/underscore/modules/_has.js"() {
      init_setup();
    }
  });

  // node_modules/underscore/modules/isArguments.js
  var isArguments, isArguments_default;
  var init_isArguments = __esm({
    "node_modules/underscore/modules/isArguments.js"() {
      init_tagTester();
      init_has();
      isArguments = tagTester("Arguments");
      (function() {
        if (!isArguments(arguments)) {
          isArguments = function(obj) {
            return has(obj, "callee");
          };
        }
      })();
      isArguments_default = isArguments;
    }
  });

  // node_modules/underscore/modules/isFinite.js
  function isFinite2(obj) {
    return !isSymbol_default(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
  }
  var init_isFinite = __esm({
    "node_modules/underscore/modules/isFinite.js"() {
      init_setup();
      init_isSymbol();
    }
  });

  // node_modules/underscore/modules/isNaN.js
  function isNaN2(obj) {
    return isNumber_default(obj) && _isNaN(obj);
  }
  var init_isNaN = __esm({
    "node_modules/underscore/modules/isNaN.js"() {
      init_setup();
      init_isNumber();
    }
  });

  // node_modules/underscore/modules/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var init_constant = __esm({
    "node_modules/underscore/modules/constant.js"() {
    }
  });

  // node_modules/underscore/modules/_createSizePropertyCheck.js
  function createSizePropertyCheck(getSizeProperty) {
    return function(collection) {
      var sizeProperty = getSizeProperty(collection);
      return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
    };
  }
  var init_createSizePropertyCheck = __esm({
    "node_modules/underscore/modules/_createSizePropertyCheck.js"() {
      init_setup();
    }
  });

  // node_modules/underscore/modules/_shallowProperty.js
  function shallowProperty(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  }
  var init_shallowProperty = __esm({
    "node_modules/underscore/modules/_shallowProperty.js"() {
    }
  });

  // node_modules/underscore/modules/_getByteLength.js
  var getByteLength_default;
  var init_getByteLength = __esm({
    "node_modules/underscore/modules/_getByteLength.js"() {
      init_shallowProperty();
      getByteLength_default = shallowProperty("byteLength");
    }
  });

  // node_modules/underscore/modules/_isBufferLike.js
  var isBufferLike_default;
  var init_isBufferLike = __esm({
    "node_modules/underscore/modules/_isBufferLike.js"() {
      init_createSizePropertyCheck();
      init_getByteLength();
      isBufferLike_default = createSizePropertyCheck(getByteLength_default);
    }
  });

  // node_modules/underscore/modules/isTypedArray.js
  function isTypedArray(obj) {
    return nativeIsView ? nativeIsView(obj) && !isDataView_default(obj) : isBufferLike_default(obj) && typedArrayPattern.test(toString.call(obj));
  }
  var typedArrayPattern, isTypedArray_default;
  var init_isTypedArray = __esm({
    "node_modules/underscore/modules/isTypedArray.js"() {
      init_setup();
      init_isDataView();
      init_constant();
      init_isBufferLike();
      typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
      isTypedArray_default = supportsArrayBuffer ? isTypedArray : constant(false);
    }
  });

  // node_modules/underscore/modules/_getLength.js
  var getLength_default;
  var init_getLength = __esm({
    "node_modules/underscore/modules/_getLength.js"() {
      init_shallowProperty();
      getLength_default = shallowProperty("length");
    }
  });

  // node_modules/underscore/modules/_collectNonEnumProps.js
  function emulatedSet(keys2) {
    var hash = {};
    for (var l = keys2.length, i = 0; i < l; ++i)
      hash[keys2[i]] = true;
    return {
      contains: function(key) {
        return hash[key] === true;
      },
      push: function(key) {
        hash[key] = true;
        return keys2.push(key);
      }
    };
  }
  function collectNonEnumProps(obj, keys2) {
    keys2 = emulatedSet(keys2);
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = isFunction_default(constructor) && constructor.prototype || ObjProto;
    var prop = "constructor";
    if (has(obj, prop) && !keys2.contains(prop))
      keys2.push(prop);
    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
        keys2.push(prop);
      }
    }
  }
  var init_collectNonEnumProps = __esm({
    "node_modules/underscore/modules/_collectNonEnumProps.js"() {
      init_setup();
      init_isFunction();
      init_has();
    }
  });

  // node_modules/underscore/modules/keys.js
  function keys(obj) {
    if (!isObject(obj))
      return [];
    if (nativeKeys)
      return nativeKeys(obj);
    var keys2 = [];
    for (var key in obj)
      if (has(obj, key))
        keys2.push(key);
    if (hasEnumBug)
      collectNonEnumProps(obj, keys2);
    return keys2;
  }
  var init_keys = __esm({
    "node_modules/underscore/modules/keys.js"() {
      init_isObject();
      init_setup();
      init_has();
      init_collectNonEnumProps();
    }
  });

  // node_modules/underscore/modules/isEmpty.js
  function isEmpty(obj) {
    if (obj == null)
      return true;
    var length = getLength_default(obj);
    if (typeof length == "number" && (isArray_default(obj) || isString_default(obj) || isArguments_default(obj)))
      return length === 0;
    return getLength_default(keys(obj)) === 0;
  }
  var init_isEmpty = __esm({
    "node_modules/underscore/modules/isEmpty.js"() {
      init_getLength();
      init_isArray();
      init_isString();
      init_isArguments();
      init_keys();
    }
  });

  // node_modules/underscore/modules/isMatch.js
  function isMatch(object2, attrs) {
    var _keys = keys(attrs), length = _keys.length;
    if (object2 == null)
      return !length;
    var obj = Object(object2);
    for (var i = 0; i < length; i++) {
      var key = _keys[i];
      if (attrs[key] !== obj[key] || !(key in obj))
        return false;
    }
    return true;
  }
  var init_isMatch = __esm({
    "node_modules/underscore/modules/isMatch.js"() {
      init_keys();
    }
  });

  // node_modules/underscore/modules/underscore.js
  function _(obj) {
    if (obj instanceof _)
      return obj;
    if (!(this instanceof _))
      return new _(obj);
    this._wrapped = obj;
  }
  var init_underscore = __esm({
    "node_modules/underscore/modules/underscore.js"() {
      init_setup();
      _.VERSION = VERSION;
      _.prototype.value = function() {
        return this._wrapped;
      };
      _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
      _.prototype.toString = function() {
        return String(this._wrapped);
      };
    }
  });

  // node_modules/underscore/modules/_toBufferView.js
  function toBufferView(bufferSource) {
    return new Uint8Array(
      bufferSource.buffer || bufferSource,
      bufferSource.byteOffset || 0,
      getByteLength_default(bufferSource)
    );
  }
  var init_toBufferView = __esm({
    "node_modules/underscore/modules/_toBufferView.js"() {
      init_getByteLength();
    }
  });

  // node_modules/underscore/modules/isEqual.js
  function eq(a, b, aStack, bStack) {
    if (a === b)
      return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null)
      return false;
    if (a !== a)
      return b !== b;
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
      return false;
    return deepEq(a, b, aStack, bStack);
  }
  function deepEq(a, b, aStack, bStack) {
    if (a instanceof _)
      a = a._wrapped;
    if (b instanceof _)
      b = b._wrapped;
    var className = toString.call(a);
    if (className !== toString.call(b))
      return false;
    if (hasStringTagBug && className == "[object Object]" && isDataView_default(a)) {
      if (!isDataView_default(b))
        return false;
      className = tagDataView;
    }
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a)
          return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
      case "[object Symbol]":
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
      case "[object ArrayBuffer]":
      case tagDataView:
        return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
    }
    var areArrays = className === "[object Array]";
    if (!areArrays && isTypedArray_default(a)) {
      var byteLength = getByteLength_default(a);
      if (byteLength !== getByteLength_default(b))
        return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
        return true;
      areArrays = true;
    }
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object")
        return false;
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction_default(aCtor) && aCtor instanceof aCtor && isFunction_default(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
        return false;
      }
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a)
        return bStack[length] === b;
    }
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
      length = a.length;
      if (length !== b.length)
        return false;
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack))
          return false;
      }
    } else {
      var _keys = keys(a), key;
      length = _keys.length;
      if (keys(b).length !== length)
        return false;
      while (length--) {
        key = _keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
          return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }
  function isEqual(a, b) {
    return eq(a, b);
  }
  var tagDataView;
  var init_isEqual = __esm({
    "node_modules/underscore/modules/isEqual.js"() {
      init_underscore();
      init_setup();
      init_getByteLength();
      init_isTypedArray();
      init_isFunction();
      init_stringTagBug();
      init_isDataView();
      init_keys();
      init_has();
      init_toBufferView();
      tagDataView = "[object DataView]";
    }
  });

  // node_modules/underscore/modules/allKeys.js
  function allKeys(obj) {
    if (!isObject(obj))
      return [];
    var keys2 = [];
    for (var key in obj)
      keys2.push(key);
    if (hasEnumBug)
      collectNonEnumProps(obj, keys2);
    return keys2;
  }
  var init_allKeys = __esm({
    "node_modules/underscore/modules/allKeys.js"() {
      init_isObject();
      init_setup();
      init_collectNonEnumProps();
    }
  });

  // node_modules/underscore/modules/_methodFingerprint.js
  function ie11fingerprint(methods) {
    var length = getLength_default(methods);
    return function(obj) {
      if (obj == null)
        return false;
      var keys2 = allKeys(obj);
      if (getLength_default(keys2))
        return false;
      for (var i = 0; i < length; i++) {
        if (!isFunction_default(obj[methods[i]]))
          return false;
      }
      return methods !== weakMapMethods || !isFunction_default(obj[forEachName]);
    };
  }
  var forEachName, hasName, commonInit, mapTail, mapMethods, weakMapMethods, setMethods;
  var init_methodFingerprint = __esm({
    "node_modules/underscore/modules/_methodFingerprint.js"() {
      init_getLength();
      init_isFunction();
      init_allKeys();
      forEachName = "forEach";
      hasName = "has";
      commonInit = ["clear", "delete"];
      mapTail = ["get", hasName, "set"];
      mapMethods = commonInit.concat(forEachName, mapTail);
      weakMapMethods = commonInit.concat(mapTail);
      setMethods = ["add"].concat(commonInit, forEachName, hasName);
    }
  });

  // node_modules/underscore/modules/isMap.js
  var isMap_default;
  var init_isMap = __esm({
    "node_modules/underscore/modules/isMap.js"() {
      init_tagTester();
      init_stringTagBug();
      init_methodFingerprint();
      isMap_default = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
    }
  });

  // node_modules/underscore/modules/isWeakMap.js
  var isWeakMap_default;
  var init_isWeakMap = __esm({
    "node_modules/underscore/modules/isWeakMap.js"() {
      init_tagTester();
      init_stringTagBug();
      init_methodFingerprint();
      isWeakMap_default = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
    }
  });

  // node_modules/underscore/modules/isSet.js
  var isSet_default;
  var init_isSet = __esm({
    "node_modules/underscore/modules/isSet.js"() {
      init_tagTester();
      init_stringTagBug();
      init_methodFingerprint();
      isSet_default = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
    }
  });

  // node_modules/underscore/modules/isWeakSet.js
  var isWeakSet_default;
  var init_isWeakSet = __esm({
    "node_modules/underscore/modules/isWeakSet.js"() {
      init_tagTester();
      isWeakSet_default = tagTester("WeakSet");
    }
  });

  // node_modules/underscore/modules/values.js
  function values(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var values2 = Array(length);
    for (var i = 0; i < length; i++) {
      values2[i] = obj[_keys[i]];
    }
    return values2;
  }
  var init_values = __esm({
    "node_modules/underscore/modules/values.js"() {
      init_keys();
    }
  });

  // node_modules/underscore/modules/pairs.js
  function pairs(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var pairs2 = Array(length);
    for (var i = 0; i < length; i++) {
      pairs2[i] = [_keys[i], obj[_keys[i]]];
    }
    return pairs2;
  }
  var init_pairs = __esm({
    "node_modules/underscore/modules/pairs.js"() {
      init_keys();
    }
  });

  // node_modules/underscore/modules/invert.js
  function invert(obj) {
    var result2 = {};
    var _keys = keys(obj);
    for (var i = 0, length = _keys.length; i < length; i++) {
      result2[obj[_keys[i]]] = _keys[i];
    }
    return result2;
  }
  var init_invert = __esm({
    "node_modules/underscore/modules/invert.js"() {
      init_keys();
    }
  });

  // node_modules/underscore/modules/functions.js
  function functions(obj) {
    var names = [];
    for (var key in obj) {
      if (isFunction_default(obj[key]))
        names.push(key);
    }
    return names.sort();
  }
  var init_functions = __esm({
    "node_modules/underscore/modules/functions.js"() {
      init_isFunction();
    }
  });

  // node_modules/underscore/modules/_createAssigner.js
  function createAssigner(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults)
        obj = Object(obj);
      if (length < 2 || obj == null)
        return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
        for (var i = 0; i < l; i++) {
          var key = keys2[i];
          if (!defaults || obj[key] === void 0)
            obj[key] = source[key];
        }
      }
      return obj;
    };
  }
  var init_createAssigner = __esm({
    "node_modules/underscore/modules/_createAssigner.js"() {
    }
  });

  // node_modules/underscore/modules/extend.js
  var extend_default;
  var init_extend = __esm({
    "node_modules/underscore/modules/extend.js"() {
      init_createAssigner();
      init_allKeys();
      extend_default = createAssigner(allKeys);
    }
  });

  // node_modules/underscore/modules/extendOwn.js
  var extendOwn_default;
  var init_extendOwn = __esm({
    "node_modules/underscore/modules/extendOwn.js"() {
      init_createAssigner();
      init_keys();
      extendOwn_default = createAssigner(keys);
    }
  });

  // node_modules/underscore/modules/defaults.js
  var defaults_default;
  var init_defaults = __esm({
    "node_modules/underscore/modules/defaults.js"() {
      init_createAssigner();
      init_allKeys();
      defaults_default = createAssigner(allKeys, true);
    }
  });

  // node_modules/underscore/modules/_baseCreate.js
  function ctor() {
    return function() {
    };
  }
  function baseCreate(prototype) {
    if (!isObject(prototype))
      return {};
    if (nativeCreate)
      return nativeCreate(prototype);
    var Ctor = ctor();
    Ctor.prototype = prototype;
    var result2 = new Ctor();
    Ctor.prototype = null;
    return result2;
  }
  var init_baseCreate = __esm({
    "node_modules/underscore/modules/_baseCreate.js"() {
      init_isObject();
      init_setup();
    }
  });

  // node_modules/underscore/modules/create.js
  function create(prototype, props) {
    var result2 = baseCreate(prototype);
    if (props)
      extendOwn_default(result2, props);
    return result2;
  }
  var init_create = __esm({
    "node_modules/underscore/modules/create.js"() {
      init_baseCreate();
      init_extendOwn();
    }
  });

  // node_modules/underscore/modules/clone.js
  function clone(obj) {
    if (!isObject(obj))
      return obj;
    return isArray_default(obj) ? obj.slice() : extend_default({}, obj);
  }
  var init_clone = __esm({
    "node_modules/underscore/modules/clone.js"() {
      init_isObject();
      init_isArray();
      init_extend();
    }
  });

  // node_modules/underscore/modules/tap.js
  function tap(obj, interceptor) {
    interceptor(obj);
    return obj;
  }
  var init_tap = __esm({
    "node_modules/underscore/modules/tap.js"() {
    }
  });

  // node_modules/underscore/modules/toPath.js
  function toPath(path) {
    return isArray_default(path) ? path : [path];
  }
  var init_toPath = __esm({
    "node_modules/underscore/modules/toPath.js"() {
      init_underscore();
      init_isArray();
      _.toPath = toPath;
    }
  });

  // node_modules/underscore/modules/_toPath.js
  function toPath2(path) {
    return _.toPath(path);
  }
  var init_toPath2 = __esm({
    "node_modules/underscore/modules/_toPath.js"() {
      init_underscore();
      init_toPath();
    }
  });

  // node_modules/underscore/modules/_deepGet.js
  function deepGet(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null)
        return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  }
  var init_deepGet = __esm({
    "node_modules/underscore/modules/_deepGet.js"() {
    }
  });

  // node_modules/underscore/modules/get.js
  function get(object2, path, defaultValue) {
    var value = deepGet(object2, toPath2(path));
    return isUndefined(value) ? defaultValue : value;
  }
  var init_get = __esm({
    "node_modules/underscore/modules/get.js"() {
      init_toPath2();
      init_deepGet();
      init_isUndefined();
    }
  });

  // node_modules/underscore/modules/has.js
  function has2(obj, path) {
    path = toPath2(path);
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (!has(obj, key))
        return false;
      obj = obj[key];
    }
    return !!length;
  }
  var init_has2 = __esm({
    "node_modules/underscore/modules/has.js"() {
      init_has();
      init_toPath2();
    }
  });

  // node_modules/underscore/modules/identity.js
  function identity(value) {
    return value;
  }
  var init_identity = __esm({
    "node_modules/underscore/modules/identity.js"() {
    }
  });

  // node_modules/underscore/modules/matcher.js
  function matcher(attrs) {
    attrs = extendOwn_default({}, attrs);
    return function(obj) {
      return isMatch(obj, attrs);
    };
  }
  var init_matcher = __esm({
    "node_modules/underscore/modules/matcher.js"() {
      init_extendOwn();
      init_isMatch();
    }
  });

  // node_modules/underscore/modules/property.js
  function property(path) {
    path = toPath2(path);
    return function(obj) {
      return deepGet(obj, path);
    };
  }
  var init_property = __esm({
    "node_modules/underscore/modules/property.js"() {
      init_deepGet();
      init_toPath2();
    }
  });

  // node_modules/underscore/modules/_optimizeCb.js
  function optimizeCb(func, context, argCount) {
    if (context === void 0)
      return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function(value) {
          return func.call(context, value);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function() {
      return func.apply(context, arguments);
    };
  }
  var init_optimizeCb = __esm({
    "node_modules/underscore/modules/_optimizeCb.js"() {
    }
  });

  // node_modules/underscore/modules/_baseIteratee.js
  function baseIteratee(value, context, argCount) {
    if (value == null)
      return identity;
    if (isFunction_default(value))
      return optimizeCb(value, context, argCount);
    if (isObject(value) && !isArray_default(value))
      return matcher(value);
    return property(value);
  }
  var init_baseIteratee = __esm({
    "node_modules/underscore/modules/_baseIteratee.js"() {
      init_identity();
      init_isFunction();
      init_isObject();
      init_isArray();
      init_matcher();
      init_property();
      init_optimizeCb();
    }
  });

  // node_modules/underscore/modules/iteratee.js
  function iteratee(value, context) {
    return baseIteratee(value, context, Infinity);
  }
  var init_iteratee = __esm({
    "node_modules/underscore/modules/iteratee.js"() {
      init_underscore();
      init_baseIteratee();
      _.iteratee = iteratee;
    }
  });

  // node_modules/underscore/modules/_cb.js
  function cb(value, context, argCount) {
    if (_.iteratee !== iteratee)
      return _.iteratee(value, context);
    return baseIteratee(value, context, argCount);
  }
  var init_cb = __esm({
    "node_modules/underscore/modules/_cb.js"() {
      init_underscore();
      init_baseIteratee();
      init_iteratee();
    }
  });

  // node_modules/underscore/modules/mapObject.js
  function mapObject(obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context);
    var _keys = keys(obj), length = _keys.length, results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = _keys[index];
      results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
    }
    return results;
  }
  var init_mapObject = __esm({
    "node_modules/underscore/modules/mapObject.js"() {
      init_cb();
      init_keys();
    }
  });

  // node_modules/underscore/modules/noop.js
  function noop() {
  }
  var init_noop = __esm({
    "node_modules/underscore/modules/noop.js"() {
    }
  });

  // node_modules/underscore/modules/propertyOf.js
  function propertyOf(obj) {
    if (obj == null)
      return noop;
    return function(path) {
      return get(obj, path);
    };
  }
  var init_propertyOf = __esm({
    "node_modules/underscore/modules/propertyOf.js"() {
      init_noop();
      init_get();
    }
  });

  // node_modules/underscore/modules/times.js
  function times(n, iteratee2, context) {
    var accum = Array(Math.max(0, n));
    iteratee2 = optimizeCb(iteratee2, context, 1);
    for (var i = 0; i < n; i++)
      accum[i] = iteratee2(i);
    return accum;
  }
  var init_times = __esm({
    "node_modules/underscore/modules/times.js"() {
      init_optimizeCb();
    }
  });

  // node_modules/underscore/modules/random.js
  function random(min2, max2) {
    if (max2 == null) {
      max2 = min2;
      min2 = 0;
    }
    return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
  }
  var init_random = __esm({
    "node_modules/underscore/modules/random.js"() {
    }
  });

  // node_modules/underscore/modules/now.js
  var now_default;
  var init_now = __esm({
    "node_modules/underscore/modules/now.js"() {
      now_default = Date.now || function() {
        return (/* @__PURE__ */ new Date()).getTime();
      };
    }
  });

  // node_modules/underscore/modules/_createEscaper.js
  function createEscaper(map2) {
    var escaper = function(match) {
      return map2[match];
    };
    var source = "(?:" + keys(map2).join("|") + ")";
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, "g");
    return function(string) {
      string = string == null ? "" : "" + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  }
  var init_createEscaper = __esm({
    "node_modules/underscore/modules/_createEscaper.js"() {
      init_keys();
    }
  });

  // node_modules/underscore/modules/_escapeMap.js
  var escapeMap_default;
  var init_escapeMap = __esm({
    "node_modules/underscore/modules/_escapeMap.js"() {
      escapeMap_default = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
    }
  });

  // node_modules/underscore/modules/escape.js
  var escape_default;
  var init_escape = __esm({
    "node_modules/underscore/modules/escape.js"() {
      init_createEscaper();
      init_escapeMap();
      escape_default = createEscaper(escapeMap_default);
    }
  });

  // node_modules/underscore/modules/_unescapeMap.js
  var unescapeMap_default;
  var init_unescapeMap = __esm({
    "node_modules/underscore/modules/_unescapeMap.js"() {
      init_invert();
      init_escapeMap();
      unescapeMap_default = invert(escapeMap_default);
    }
  });

  // node_modules/underscore/modules/unescape.js
  var unescape_default;
  var init_unescape = __esm({
    "node_modules/underscore/modules/unescape.js"() {
      init_createEscaper();
      init_unescapeMap();
      unescape_default = createEscaper(unescapeMap_default);
    }
  });

  // node_modules/underscore/modules/templateSettings.js
  var templateSettings_default;
  var init_templateSettings = __esm({
    "node_modules/underscore/modules/templateSettings.js"() {
      init_underscore();
      templateSettings_default = _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
    }
  });

  // node_modules/underscore/modules/template.js
  function escapeChar(match) {
    return "\\" + escapes[match];
  }
  function template(text, settings, oldSettings) {
    if (!settings && oldSettings)
      settings = oldSettings;
    settings = defaults_default({}, settings, _.templateSettings);
    var matcher2 = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join("|") + "|$", "g");
    var index = 0;
    var source = "__p+='";
    text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;
      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      return match;
    });
    source += "';\n";
    var argument = settings.variable;
    if (argument) {
      if (!bareIdentifier.test(argument))
        throw new Error(
          "variable is not a bare identifier: " + argument
        );
    } else {
      source = "with(obj||{}){\n" + source + "}\n";
      argument = "obj";
    }
    source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
    var render;
    try {
      render = new Function(argument, "_", source);
    } catch (e) {
      e.source = source;
      throw e;
    }
    var template2 = function(data) {
      return render.call(this, data, _);
    };
    template2.source = "function(" + argument + "){\n" + source + "}";
    return template2;
  }
  var noMatch, escapes, escapeRegExp, bareIdentifier;
  var init_template = __esm({
    "node_modules/underscore/modules/template.js"() {
      init_defaults();
      init_underscore();
      init_templateSettings();
      noMatch = /(.)^/;
      escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
      bareIdentifier = /^\s*(\w|\$)+\s*$/;
    }
  });

  // node_modules/underscore/modules/result.js
  function result(obj, path, fallback) {
    path = toPath2(path);
    var length = path.length;
    if (!length) {
      return isFunction_default(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length;
      }
      obj = isFunction_default(prop) ? prop.call(obj) : prop;
    }
    return obj;
  }
  var init_result = __esm({
    "node_modules/underscore/modules/result.js"() {
      init_isFunction();
      init_toPath2();
    }
  });

  // node_modules/underscore/modules/uniqueId.js
  function uniqueId(prefix) {
    var id = ++idCounter + "";
    return prefix ? prefix + id : id;
  }
  var idCounter;
  var init_uniqueId = __esm({
    "node_modules/underscore/modules/uniqueId.js"() {
      idCounter = 0;
    }
  });

  // node_modules/underscore/modules/chain.js
  function chain(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  }
  var init_chain = __esm({
    "node_modules/underscore/modules/chain.js"() {
      init_underscore();
    }
  });

  // node_modules/underscore/modules/_executeBound.js
  function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc))
      return sourceFunc.apply(context, args);
    var self2 = baseCreate(sourceFunc.prototype);
    var result2 = sourceFunc.apply(self2, args);
    if (isObject(result2))
      return result2;
    return self2;
  }
  var init_executeBound = __esm({
    "node_modules/underscore/modules/_executeBound.js"() {
      init_baseCreate();
      init_isObject();
    }
  });

  // node_modules/underscore/modules/partial.js
  var partial, partial_default;
  var init_partial = __esm({
    "node_modules/underscore/modules/partial.js"() {
      init_restArguments();
      init_executeBound();
      init_underscore();
      partial = restArguments(function(func, boundArgs) {
        var placeholder = partial.placeholder;
        var bound = function() {
          var position = 0, length = boundArgs.length;
          var args = Array(length);
          for (var i = 0; i < length; i++) {
            args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
          }
          while (position < arguments.length)
            args.push(arguments[position++]);
          return executeBound(func, bound, this, this, args);
        };
        return bound;
      });
      partial.placeholder = _;
      partial_default = partial;
    }
  });

  // node_modules/underscore/modules/bind.js
  var bind_default;
  var init_bind = __esm({
    "node_modules/underscore/modules/bind.js"() {
      init_restArguments();
      init_isFunction();
      init_executeBound();
      bind_default = restArguments(function(func, context, args) {
        if (!isFunction_default(func))
          throw new TypeError("Bind must be called on a function");
        var bound = restArguments(function(callArgs) {
          return executeBound(func, bound, context, this, args.concat(callArgs));
        });
        return bound;
      });
    }
  });

  // node_modules/underscore/modules/_isArrayLike.js
  var isArrayLike_default;
  var init_isArrayLike = __esm({
    "node_modules/underscore/modules/_isArrayLike.js"() {
      init_createSizePropertyCheck();
      init_getLength();
      isArrayLike_default = createSizePropertyCheck(getLength_default);
    }
  });

  // node_modules/underscore/modules/_flatten.js
  function flatten(input, depth, strict, output) {
    output = output || [];
    if (!depth && depth !== 0) {
      depth = Infinity;
    } else if (depth <= 0) {
      return output.concat(input);
    }
    var idx = output.length;
    for (var i = 0, length = getLength_default(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike_default(value) && (isArray_default(value) || isArguments_default(value))) {
        if (depth > 1) {
          flatten(value, depth - 1, strict, output);
          idx = output.length;
        } else {
          var j = 0, len = value.length;
          while (j < len)
            output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  }
  var init_flatten = __esm({
    "node_modules/underscore/modules/_flatten.js"() {
      init_getLength();
      init_isArrayLike();
      init_isArray();
      init_isArguments();
    }
  });

  // node_modules/underscore/modules/bindAll.js
  var bindAll_default;
  var init_bindAll = __esm({
    "node_modules/underscore/modules/bindAll.js"() {
      init_restArguments();
      init_flatten();
      init_bind();
      bindAll_default = restArguments(function(obj, keys2) {
        keys2 = flatten(keys2, false, false);
        var index = keys2.length;
        if (index < 1)
          throw new Error("bindAll must be passed function names");
        while (index--) {
          var key = keys2[index];
          obj[key] = bind_default(obj[key], obj);
        }
        return obj;
      });
    }
  });

  // node_modules/underscore/modules/memoize.js
  function memoize(func, hasher) {
    var memoize2 = function(key) {
      var cache = memoize2.cache;
      var address = "" + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address))
        cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize2.cache = {};
    return memoize2;
  }
  var init_memoize = __esm({
    "node_modules/underscore/modules/memoize.js"() {
      init_has();
    }
  });

  // node_modules/underscore/modules/delay.js
  var delay_default;
  var init_delay = __esm({
    "node_modules/underscore/modules/delay.js"() {
      init_restArguments();
      delay_default = restArguments(function(func, wait, args) {
        return setTimeout(function() {
          return func.apply(null, args);
        }, wait);
      });
    }
  });

  // node_modules/underscore/modules/defer.js
  var defer_default;
  var init_defer = __esm({
    "node_modules/underscore/modules/defer.js"() {
      init_partial();
      init_delay();
      init_underscore();
      defer_default = partial_default(delay_default, _, 1);
    }
  });

  // node_modules/underscore/modules/throttle.js
  function throttle(func, wait, options) {
    var timeout, context, args, result2;
    var previous = 0;
    if (!options)
      options = {};
    var later = function() {
      previous = options.leading === false ? 0 : now_default();
      timeout = null;
      result2 = func.apply(context, args);
      if (!timeout)
        context = args = null;
    };
    var throttled = function() {
      var _now = now_default();
      if (!previous && options.leading === false)
        previous = _now;
      var remaining = wait - (_now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = _now;
        result2 = func.apply(context, args);
        if (!timeout)
          context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result2;
    };
    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };
    return throttled;
  }
  var init_throttle = __esm({
    "node_modules/underscore/modules/throttle.js"() {
      init_now();
    }
  });

  // node_modules/underscore/modules/debounce.js
  function debounce(func, wait, immediate) {
    var timeout, previous, args, result2, context;
    var later = function() {
      var passed = now_default() - previous;
      if (wait > passed) {
        timeout = setTimeout(later, wait - passed);
      } else {
        timeout = null;
        if (!immediate)
          result2 = func.apply(context, args);
        if (!timeout)
          args = context = null;
      }
    };
    var debounced = restArguments(function(_args) {
      context = this;
      args = _args;
      previous = now_default();
      if (!timeout) {
        timeout = setTimeout(later, wait);
        if (immediate)
          result2 = func.apply(context, args);
      }
      return result2;
    });
    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = args = context = null;
    };
    return debounced;
  }
  var init_debounce = __esm({
    "node_modules/underscore/modules/debounce.js"() {
      init_restArguments();
      init_now();
    }
  });

  // node_modules/underscore/modules/wrap.js
  function wrap(func, wrapper) {
    return partial_default(wrapper, func);
  }
  var init_wrap = __esm({
    "node_modules/underscore/modules/wrap.js"() {
      init_partial();
    }
  });

  // node_modules/underscore/modules/negate.js
  function negate(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  }
  var init_negate = __esm({
    "node_modules/underscore/modules/negate.js"() {
    }
  });

  // node_modules/underscore/modules/compose.js
  function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result2 = args[start].apply(this, arguments);
      while (i--)
        result2 = args[i].call(this, result2);
      return result2;
    };
  }
  var init_compose = __esm({
    "node_modules/underscore/modules/compose.js"() {
    }
  });

  // node_modules/underscore/modules/after.js
  function after(times2, func) {
    return function() {
      if (--times2 < 1) {
        return func.apply(this, arguments);
      }
    };
  }
  var init_after = __esm({
    "node_modules/underscore/modules/after.js"() {
    }
  });

  // node_modules/underscore/modules/before.js
  function before(times2, func) {
    var memo;
    return function() {
      if (--times2 > 0) {
        memo = func.apply(this, arguments);
      }
      if (times2 <= 1)
        func = null;
      return memo;
    };
  }
  var init_before = __esm({
    "node_modules/underscore/modules/before.js"() {
    }
  });

  // node_modules/underscore/modules/once.js
  var once_default;
  var init_once = __esm({
    "node_modules/underscore/modules/once.js"() {
      init_partial();
      init_before();
      once_default = partial_default(before, 2);
    }
  });

  // node_modules/underscore/modules/findKey.js
  function findKey(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = keys(obj), key;
    for (var i = 0, length = _keys.length; i < length; i++) {
      key = _keys[i];
      if (predicate(obj[key], key, obj))
        return key;
    }
  }
  var init_findKey = __esm({
    "node_modules/underscore/modules/findKey.js"() {
      init_cb();
      init_keys();
    }
  });

  // node_modules/underscore/modules/_createPredicateIndexFinder.js
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength_default(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array))
          return index;
      }
      return -1;
    };
  }
  var init_createPredicateIndexFinder = __esm({
    "node_modules/underscore/modules/_createPredicateIndexFinder.js"() {
      init_cb();
      init_getLength();
    }
  });

  // node_modules/underscore/modules/findIndex.js
  var findIndex_default;
  var init_findIndex = __esm({
    "node_modules/underscore/modules/findIndex.js"() {
      init_createPredicateIndexFinder();
      findIndex_default = createPredicateIndexFinder(1);
    }
  });

  // node_modules/underscore/modules/findLastIndex.js
  var findLastIndex_default;
  var init_findLastIndex = __esm({
    "node_modules/underscore/modules/findLastIndex.js"() {
      init_createPredicateIndexFinder();
      findLastIndex_default = createPredicateIndexFinder(-1);
    }
  });

  // node_modules/underscore/modules/sortedIndex.js
  function sortedIndex(array, obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context, 1);
    var value = iteratee2(obj);
    var low = 0, high = getLength_default(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee2(array[mid]) < value)
        low = mid + 1;
      else
        high = mid;
    }
    return low;
  }
  var init_sortedIndex = __esm({
    "node_modules/underscore/modules/sortedIndex.js"() {
      init_cb();
      init_getLength();
    }
  });

  // node_modules/underscore/modules/_createIndexFinder.js
  function createIndexFinder(dir, predicateFind, sortedIndex2) {
    return function(array, item, idx) {
      var i = 0, length = getLength_default(array);
      if (typeof idx == "number") {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex2 && idx && length) {
        idx = sortedIndex2(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), isNaN2);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item)
          return idx;
      }
      return -1;
    };
  }
  var init_createIndexFinder = __esm({
    "node_modules/underscore/modules/_createIndexFinder.js"() {
      init_getLength();
      init_setup();
      init_isNaN();
    }
  });

  // node_modules/underscore/modules/indexOf.js
  var indexOf_default;
  var init_indexOf = __esm({
    "node_modules/underscore/modules/indexOf.js"() {
      init_sortedIndex();
      init_findIndex();
      init_createIndexFinder();
      indexOf_default = createIndexFinder(1, findIndex_default, sortedIndex);
    }
  });

  // node_modules/underscore/modules/lastIndexOf.js
  var lastIndexOf_default;
  var init_lastIndexOf = __esm({
    "node_modules/underscore/modules/lastIndexOf.js"() {
      init_findLastIndex();
      init_createIndexFinder();
      lastIndexOf_default = createIndexFinder(-1, findLastIndex_default);
    }
  });

  // node_modules/underscore/modules/find.js
  function find(obj, predicate, context) {
    var keyFinder = isArrayLike_default(obj) ? findIndex_default : findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1)
      return obj[key];
  }
  var init_find = __esm({
    "node_modules/underscore/modules/find.js"() {
      init_isArrayLike();
      init_findIndex();
      init_findKey();
    }
  });

  // node_modules/underscore/modules/findWhere.js
  function findWhere(obj, attrs) {
    return find(obj, matcher(attrs));
  }
  var init_findWhere = __esm({
    "node_modules/underscore/modules/findWhere.js"() {
      init_find();
      init_matcher();
    }
  });

  // node_modules/underscore/modules/each.js
  function each(obj, iteratee2, context) {
    iteratee2 = optimizeCb(iteratee2, context);
    var i, length;
    if (isArrayLike_default(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee2(obj[i], i, obj);
      }
    } else {
      var _keys = keys(obj);
      for (i = 0, length = _keys.length; i < length; i++) {
        iteratee2(obj[_keys[i]], _keys[i], obj);
      }
    }
    return obj;
  }
  var init_each = __esm({
    "node_modules/underscore/modules/each.js"() {
      init_optimizeCb();
      init_isArrayLike();
      init_keys();
    }
  });

  // node_modules/underscore/modules/map.js
  function map(obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context);
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      results[index] = iteratee2(obj[currentKey], currentKey, obj);
    }
    return results;
  }
  var init_map = __esm({
    "node_modules/underscore/modules/map.js"() {
      init_cb();
      init_isArrayLike();
      init_keys();
    }
  });

  // node_modules/underscore/modules/_createReduce.js
  function createReduce(dir) {
    var reducer = function(obj, iteratee2, memo, initial2) {
      var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
      if (!initial2) {
        memo = obj[_keys ? _keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = _keys ? _keys[index] : index;
        memo = iteratee2(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };
    return function(obj, iteratee2, memo, context) {
      var initial2 = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
    };
  }
  var init_createReduce = __esm({
    "node_modules/underscore/modules/_createReduce.js"() {
      init_isArrayLike();
      init_keys();
      init_optimizeCb();
    }
  });

  // node_modules/underscore/modules/reduce.js
  var reduce_default;
  var init_reduce = __esm({
    "node_modules/underscore/modules/reduce.js"() {
      init_createReduce();
      reduce_default = createReduce(1);
    }
  });

  // node_modules/underscore/modules/reduceRight.js
  var reduceRight_default;
  var init_reduceRight = __esm({
    "node_modules/underscore/modules/reduceRight.js"() {
      init_createReduce();
      reduceRight_default = createReduce(-1);
    }
  });

  // node_modules/underscore/modules/filter.js
  function filter(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate(value, index, list))
        results.push(value);
    });
    return results;
  }
  var init_filter = __esm({
    "node_modules/underscore/modules/filter.js"() {
      init_cb();
      init_each();
    }
  });

  // node_modules/underscore/modules/reject.js
  function reject(obj, predicate, context) {
    return filter(obj, negate(cb(predicate)), context);
  }
  var init_reject = __esm({
    "node_modules/underscore/modules/reject.js"() {
      init_filter();
      init_negate();
      init_cb();
    }
  });

  // node_modules/underscore/modules/every.js
  function every(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj))
        return false;
    }
    return true;
  }
  var init_every = __esm({
    "node_modules/underscore/modules/every.js"() {
      init_cb();
      init_isArrayLike();
      init_keys();
    }
  });

  // node_modules/underscore/modules/some.js
  function some(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj))
        return true;
    }
    return false;
  }
  var init_some = __esm({
    "node_modules/underscore/modules/some.js"() {
      init_cb();
      init_isArrayLike();
      init_keys();
    }
  });

  // node_modules/underscore/modules/contains.js
  function contains(obj, item, fromIndex, guard) {
    if (!isArrayLike_default(obj))
      obj = values(obj);
    if (typeof fromIndex != "number" || guard)
      fromIndex = 0;
    return indexOf_default(obj, item, fromIndex) >= 0;
  }
  var init_contains = __esm({
    "node_modules/underscore/modules/contains.js"() {
      init_isArrayLike();
      init_values();
      init_indexOf();
    }
  });

  // node_modules/underscore/modules/invoke.js
  var invoke_default;
  var init_invoke = __esm({
    "node_modules/underscore/modules/invoke.js"() {
      init_restArguments();
      init_isFunction();
      init_map();
      init_deepGet();
      init_toPath2();
      invoke_default = restArguments(function(obj, path, args) {
        var contextPath, func;
        if (isFunction_default(path)) {
          func = path;
        } else {
          path = toPath2(path);
          contextPath = path.slice(0, -1);
          path = path[path.length - 1];
        }
        return map(obj, function(context) {
          var method = func;
          if (!method) {
            if (contextPath && contextPath.length) {
              context = deepGet(context, contextPath);
            }
            if (context == null)
              return void 0;
            method = context[path];
          }
          return method == null ? method : method.apply(context, args);
        });
      });
    }
  });

  // node_modules/underscore/modules/pluck.js
  function pluck(obj, key) {
    return map(obj, property(key));
  }
  var init_pluck = __esm({
    "node_modules/underscore/modules/pluck.js"() {
      init_map();
      init_property();
    }
  });

  // node_modules/underscore/modules/where.js
  function where(obj, attrs) {
    return filter(obj, matcher(attrs));
  }
  var init_where = __esm({
    "node_modules/underscore/modules/where.js"() {
      init_filter();
      init_matcher();
    }
  });

  // node_modules/underscore/modules/max.js
  function max(obj, iteratee2, context) {
    var result2 = -Infinity, lastComputed = -Infinity, value, computed;
    if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
      obj = isArrayLike_default(obj) ? obj : values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result2) {
          result2 = value;
        }
      }
    } else {
      iteratee2 = cb(iteratee2, context);
      each(obj, function(v, index, list) {
        computed = iteratee2(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
          result2 = v;
          lastComputed = computed;
        }
      });
    }
    return result2;
  }
  var init_max = __esm({
    "node_modules/underscore/modules/max.js"() {
      init_isArrayLike();
      init_values();
      init_cb();
      init_each();
    }
  });

  // node_modules/underscore/modules/min.js
  function min(obj, iteratee2, context) {
    var result2 = Infinity, lastComputed = Infinity, value, computed;
    if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
      obj = isArrayLike_default(obj) ? obj : values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result2) {
          result2 = value;
        }
      }
    } else {
      iteratee2 = cb(iteratee2, context);
      each(obj, function(v, index, list) {
        computed = iteratee2(v, index, list);
        if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
          result2 = v;
          lastComputed = computed;
        }
      });
    }
    return result2;
  }
  var init_min = __esm({
    "node_modules/underscore/modules/min.js"() {
      init_isArrayLike();
      init_values();
      init_cb();
      init_each();
    }
  });

  // node_modules/underscore/modules/toArray.js
  function toArray(obj) {
    if (!obj)
      return [];
    if (isArray_default(obj))
      return slice.call(obj);
    if (isString_default(obj)) {
      return obj.match(reStrSymbol);
    }
    if (isArrayLike_default(obj))
      return map(obj, identity);
    return values(obj);
  }
  var reStrSymbol;
  var init_toArray = __esm({
    "node_modules/underscore/modules/toArray.js"() {
      init_isArray();
      init_setup();
      init_isString();
      init_isArrayLike();
      init_map();
      init_identity();
      init_values();
      reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    }
  });

  // node_modules/underscore/modules/sample.js
  function sample(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike_default(obj))
        obj = values(obj);
      return obj[random(obj.length - 1)];
    }
    var sample2 = toArray(obj);
    var length = getLength_default(sample2);
    n = Math.max(Math.min(n, length), 0);
    var last2 = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = random(index, last2);
      var temp = sample2[index];
      sample2[index] = sample2[rand];
      sample2[rand] = temp;
    }
    return sample2.slice(0, n);
  }
  var init_sample = __esm({
    "node_modules/underscore/modules/sample.js"() {
      init_isArrayLike();
      init_values();
      init_getLength();
      init_random();
      init_toArray();
    }
  });

  // node_modules/underscore/modules/shuffle.js
  function shuffle(obj) {
    return sample(obj, Infinity);
  }
  var init_shuffle = __esm({
    "node_modules/underscore/modules/shuffle.js"() {
      init_sample();
    }
  });

  // node_modules/underscore/modules/sortBy.js
  function sortBy(obj, iteratee2, context) {
    var index = 0;
    iteratee2 = cb(iteratee2, context);
    return pluck(map(obj, function(value, key, list) {
      return {
        value,
        index: index++,
        criteria: iteratee2(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0)
          return 1;
        if (a < b || b === void 0)
          return -1;
      }
      return left.index - right.index;
    }), "value");
  }
  var init_sortBy = __esm({
    "node_modules/underscore/modules/sortBy.js"() {
      init_cb();
      init_pluck();
      init_map();
    }
  });

  // node_modules/underscore/modules/_group.js
  function group(behavior, partition) {
    return function(obj, iteratee2, context) {
      var result2 = partition ? [[], []] : {};
      iteratee2 = cb(iteratee2, context);
      each(obj, function(value, index) {
        var key = iteratee2(value, index, obj);
        behavior(result2, value, key);
      });
      return result2;
    };
  }
  var init_group = __esm({
    "node_modules/underscore/modules/_group.js"() {
      init_cb();
      init_each();
    }
  });

  // node_modules/underscore/modules/groupBy.js
  var groupBy_default;
  var init_groupBy = __esm({
    "node_modules/underscore/modules/groupBy.js"() {
      init_group();
      init_has();
      groupBy_default = group(function(result2, value, key) {
        if (has(result2, key))
          result2[key].push(value);
        else
          result2[key] = [value];
      });
    }
  });

  // node_modules/underscore/modules/indexBy.js
  var indexBy_default;
  var init_indexBy = __esm({
    "node_modules/underscore/modules/indexBy.js"() {
      init_group();
      indexBy_default = group(function(result2, value, key) {
        result2[key] = value;
      });
    }
  });

  // node_modules/underscore/modules/countBy.js
  var countBy_default;
  var init_countBy = __esm({
    "node_modules/underscore/modules/countBy.js"() {
      init_group();
      init_has();
      countBy_default = group(function(result2, value, key) {
        if (has(result2, key))
          result2[key]++;
        else
          result2[key] = 1;
      });
    }
  });

  // node_modules/underscore/modules/partition.js
  var partition_default;
  var init_partition = __esm({
    "node_modules/underscore/modules/partition.js"() {
      init_group();
      partition_default = group(function(result2, value, pass) {
        result2[pass ? 0 : 1].push(value);
      }, true);
    }
  });

  // node_modules/underscore/modules/size.js
  function size(obj) {
    if (obj == null)
      return 0;
    return isArrayLike_default(obj) ? obj.length : keys(obj).length;
  }
  var init_size = __esm({
    "node_modules/underscore/modules/size.js"() {
      init_isArrayLike();
      init_keys();
    }
  });

  // node_modules/underscore/modules/_keyInObj.js
  function keyInObj(value, key, obj) {
    return key in obj;
  }
  var init_keyInObj = __esm({
    "node_modules/underscore/modules/_keyInObj.js"() {
    }
  });

  // node_modules/underscore/modules/pick.js
  var pick_default;
  var init_pick = __esm({
    "node_modules/underscore/modules/pick.js"() {
      init_restArguments();
      init_isFunction();
      init_optimizeCb();
      init_allKeys();
      init_keyInObj();
      init_flatten();
      pick_default = restArguments(function(obj, keys2) {
        var result2 = {}, iteratee2 = keys2[0];
        if (obj == null)
          return result2;
        if (isFunction_default(iteratee2)) {
          if (keys2.length > 1)
            iteratee2 = optimizeCb(iteratee2, keys2[1]);
          keys2 = allKeys(obj);
        } else {
          iteratee2 = keyInObj;
          keys2 = flatten(keys2, false, false);
          obj = Object(obj);
        }
        for (var i = 0, length = keys2.length; i < length; i++) {
          var key = keys2[i];
          var value = obj[key];
          if (iteratee2(value, key, obj))
            result2[key] = value;
        }
        return result2;
      });
    }
  });

  // node_modules/underscore/modules/omit.js
  var omit_default;
  var init_omit = __esm({
    "node_modules/underscore/modules/omit.js"() {
      init_restArguments();
      init_isFunction();
      init_negate();
      init_map();
      init_flatten();
      init_contains();
      init_pick();
      omit_default = restArguments(function(obj, keys2) {
        var iteratee2 = keys2[0], context;
        if (isFunction_default(iteratee2)) {
          iteratee2 = negate(iteratee2);
          if (keys2.length > 1)
            context = keys2[1];
        } else {
          keys2 = map(flatten(keys2, false, false), String);
          iteratee2 = function(value, key) {
            return !contains(keys2, key);
          };
        }
        return pick_default(obj, iteratee2, context);
      });
    }
  });

  // node_modules/underscore/modules/initial.js
  function initial(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  }
  var init_initial = __esm({
    "node_modules/underscore/modules/initial.js"() {
      init_setup();
    }
  });

  // node_modules/underscore/modules/first.js
  function first(array, n, guard) {
    if (array == null || array.length < 1)
      return n == null || guard ? void 0 : [];
    if (n == null || guard)
      return array[0];
    return initial(array, array.length - n);
  }
  var init_first = __esm({
    "node_modules/underscore/modules/first.js"() {
      init_initial();
    }
  });

  // node_modules/underscore/modules/rest.js
  function rest(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  }
  var init_rest = __esm({
    "node_modules/underscore/modules/rest.js"() {
      init_setup();
    }
  });

  // node_modules/underscore/modules/last.js
  function last(array, n, guard) {
    if (array == null || array.length < 1)
      return n == null || guard ? void 0 : [];
    if (n == null || guard)
      return array[array.length - 1];
    return rest(array, Math.max(0, array.length - n));
  }
  var init_last = __esm({
    "node_modules/underscore/modules/last.js"() {
      init_rest();
    }
  });

  // node_modules/underscore/modules/compact.js
  function compact(array) {
    return filter(array, Boolean);
  }
  var init_compact = __esm({
    "node_modules/underscore/modules/compact.js"() {
      init_filter();
    }
  });

  // node_modules/underscore/modules/flatten.js
  function flatten2(array, depth) {
    return flatten(array, depth, false);
  }
  var init_flatten2 = __esm({
    "node_modules/underscore/modules/flatten.js"() {
      init_flatten();
    }
  });

  // node_modules/underscore/modules/difference.js
  var difference_default;
  var init_difference = __esm({
    "node_modules/underscore/modules/difference.js"() {
      init_restArguments();
      init_flatten();
      init_filter();
      init_contains();
      difference_default = restArguments(function(array, rest2) {
        rest2 = flatten(rest2, true, true);
        return filter(array, function(value) {
          return !contains(rest2, value);
        });
      });
    }
  });

  // node_modules/underscore/modules/without.js
  var without_default;
  var init_without = __esm({
    "node_modules/underscore/modules/without.js"() {
      init_restArguments();
      init_difference();
      without_default = restArguments(function(array, otherArrays) {
        return difference_default(array, otherArrays);
      });
    }
  });

  // node_modules/underscore/modules/uniq.js
  function uniq(array, isSorted, iteratee2, context) {
    if (!isBoolean(isSorted)) {
      context = iteratee2;
      iteratee2 = isSorted;
      isSorted = false;
    }
    if (iteratee2 != null)
      iteratee2 = cb(iteratee2, context);
    var result2 = [];
    var seen = [];
    for (var i = 0, length = getLength_default(array); i < length; i++) {
      var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
      if (isSorted && !iteratee2) {
        if (!i || seen !== computed)
          result2.push(value);
        seen = computed;
      } else if (iteratee2) {
        if (!contains(seen, computed)) {
          seen.push(computed);
          result2.push(value);
        }
      } else if (!contains(result2, value)) {
        result2.push(value);
      }
    }
    return result2;
  }
  var init_uniq = __esm({
    "node_modules/underscore/modules/uniq.js"() {
      init_isBoolean();
      init_cb();
      init_getLength();
      init_contains();
    }
  });

  // node_modules/underscore/modules/union.js
  var union_default;
  var init_union = __esm({
    "node_modules/underscore/modules/union.js"() {
      init_restArguments();
      init_uniq();
      init_flatten();
      union_default = restArguments(function(arrays) {
        return uniq(flatten(arrays, true, true));
      });
    }
  });

  // node_modules/underscore/modules/intersection.js
  function intersection(array) {
    var result2 = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength_default(array); i < length; i++) {
      var item = array[i];
      if (contains(result2, item))
        continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!contains(arguments[j], item))
          break;
      }
      if (j === argsLength)
        result2.push(item);
    }
    return result2;
  }
  var init_intersection = __esm({
    "node_modules/underscore/modules/intersection.js"() {
      init_getLength();
      init_contains();
    }
  });

  // node_modules/underscore/modules/unzip.js
  function unzip(array) {
    var length = array && max(array, getLength_default).length || 0;
    var result2 = Array(length);
    for (var index = 0; index < length; index++) {
      result2[index] = pluck(array, index);
    }
    return result2;
  }
  var init_unzip = __esm({
    "node_modules/underscore/modules/unzip.js"() {
      init_max();
      init_getLength();
      init_pluck();
    }
  });

  // node_modules/underscore/modules/zip.js
  var zip_default;
  var init_zip = __esm({
    "node_modules/underscore/modules/zip.js"() {
      init_restArguments();
      init_unzip();
      zip_default = restArguments(unzip);
    }
  });

  // node_modules/underscore/modules/object.js
  function object(list, values2) {
    var result2 = {};
    for (var i = 0, length = getLength_default(list); i < length; i++) {
      if (values2) {
        result2[list[i]] = values2[i];
      } else {
        result2[list[i][0]] = list[i][1];
      }
    }
    return result2;
  }
  var init_object = __esm({
    "node_modules/underscore/modules/object.js"() {
      init_getLength();
    }
  });

  // node_modules/underscore/modules/range.js
  function range(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range2 = Array(length);
    for (var idx = 0; idx < length; idx++, start += step) {
      range2[idx] = start;
    }
    return range2;
  }
  var init_range = __esm({
    "node_modules/underscore/modules/range.js"() {
    }
  });

  // node_modules/underscore/modules/chunk.js
  function chunk(array, count) {
    if (count == null || count < 1)
      return [];
    var result2 = [];
    var i = 0, length = array.length;
    while (i < length) {
      result2.push(slice.call(array, i, i += count));
    }
    return result2;
  }
  var init_chunk = __esm({
    "node_modules/underscore/modules/chunk.js"() {
      init_setup();
    }
  });

  // node_modules/underscore/modules/_chainResult.js
  function chainResult(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  }
  var init_chainResult = __esm({
    "node_modules/underscore/modules/_chainResult.js"() {
      init_underscore();
    }
  });

  // node_modules/underscore/modules/mixin.js
  function mixin(obj) {
    each(functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  }
  var init_mixin = __esm({
    "node_modules/underscore/modules/mixin.js"() {
      init_underscore();
      init_each();
      init_functions();
      init_setup();
      init_chainResult();
    }
  });

  // node_modules/underscore/modules/underscore-array-methods.js
  var underscore_array_methods_default;
  var init_underscore_array_methods = __esm({
    "node_modules/underscore/modules/underscore-array-methods.js"() {
      init_underscore();
      init_each();
      init_setup();
      init_chainResult();
      each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
          var obj = this._wrapped;
          if (obj != null) {
            method.apply(obj, arguments);
            if ((name === "shift" || name === "splice") && obj.length === 0) {
              delete obj[0];
            }
          }
          return chainResult(this, obj);
        };
      });
      each(["concat", "join", "slice"], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
          var obj = this._wrapped;
          if (obj != null)
            obj = method.apply(obj, arguments);
          return chainResult(this, obj);
        };
      });
      underscore_array_methods_default = _;
    }
  });

  // node_modules/underscore/modules/index.js
  var modules_exports = {};
  __export(modules_exports, {
    VERSION: () => VERSION,
    after: () => after,
    all: () => every,
    allKeys: () => allKeys,
    any: () => some,
    assign: () => extendOwn_default,
    before: () => before,
    bind: () => bind_default,
    bindAll: () => bindAll_default,
    chain: () => chain,
    chunk: () => chunk,
    clone: () => clone,
    collect: () => map,
    compact: () => compact,
    compose: () => compose,
    constant: () => constant,
    contains: () => contains,
    countBy: () => countBy_default,
    create: () => create,
    debounce: () => debounce,
    default: () => underscore_array_methods_default,
    defaults: () => defaults_default,
    defer: () => defer_default,
    delay: () => delay_default,
    detect: () => find,
    difference: () => difference_default,
    drop: () => rest,
    each: () => each,
    escape: () => escape_default,
    every: () => every,
    extend: () => extend_default,
    extendOwn: () => extendOwn_default,
    filter: () => filter,
    find: () => find,
    findIndex: () => findIndex_default,
    findKey: () => findKey,
    findLastIndex: () => findLastIndex_default,
    findWhere: () => findWhere,
    first: () => first,
    flatten: () => flatten2,
    foldl: () => reduce_default,
    foldr: () => reduceRight_default,
    forEach: () => each,
    functions: () => functions,
    get: () => get,
    groupBy: () => groupBy_default,
    has: () => has2,
    head: () => first,
    identity: () => identity,
    include: () => contains,
    includes: () => contains,
    indexBy: () => indexBy_default,
    indexOf: () => indexOf_default,
    initial: () => initial,
    inject: () => reduce_default,
    intersection: () => intersection,
    invert: () => invert,
    invoke: () => invoke_default,
    isArguments: () => isArguments_default,
    isArray: () => isArray_default,
    isArrayBuffer: () => isArrayBuffer_default,
    isBoolean: () => isBoolean,
    isDataView: () => isDataView_default,
    isDate: () => isDate_default,
    isElement: () => isElement,
    isEmpty: () => isEmpty,
    isEqual: () => isEqual,
    isError: () => isError_default,
    isFinite: () => isFinite2,
    isFunction: () => isFunction_default,
    isMap: () => isMap_default,
    isMatch: () => isMatch,
    isNaN: () => isNaN2,
    isNull: () => isNull,
    isNumber: () => isNumber_default,
    isObject: () => isObject,
    isRegExp: () => isRegExp_default,
    isSet: () => isSet_default,
    isString: () => isString_default,
    isSymbol: () => isSymbol_default,
    isTypedArray: () => isTypedArray_default,
    isUndefined: () => isUndefined,
    isWeakMap: () => isWeakMap_default,
    isWeakSet: () => isWeakSet_default,
    iteratee: () => iteratee,
    keys: () => keys,
    last: () => last,
    lastIndexOf: () => lastIndexOf_default,
    map: () => map,
    mapObject: () => mapObject,
    matcher: () => matcher,
    matches: () => matcher,
    max: () => max,
    memoize: () => memoize,
    methods: () => functions,
    min: () => min,
    mixin: () => mixin,
    negate: () => negate,
    noop: () => noop,
    now: () => now_default,
    object: () => object,
    omit: () => omit_default,
    once: () => once_default,
    pairs: () => pairs,
    partial: () => partial_default,
    partition: () => partition_default,
    pick: () => pick_default,
    pluck: () => pluck,
    property: () => property,
    propertyOf: () => propertyOf,
    random: () => random,
    range: () => range,
    reduce: () => reduce_default,
    reduceRight: () => reduceRight_default,
    reject: () => reject,
    rest: () => rest,
    restArguments: () => restArguments,
    result: () => result,
    sample: () => sample,
    select: () => filter,
    shuffle: () => shuffle,
    size: () => size,
    some: () => some,
    sortBy: () => sortBy,
    sortedIndex: () => sortedIndex,
    tail: () => rest,
    take: () => first,
    tap: () => tap,
    template: () => template,
    templateSettings: () => templateSettings_default,
    throttle: () => throttle,
    times: () => times,
    toArray: () => toArray,
    toPath: () => toPath,
    transpose: () => unzip,
    unescape: () => unescape_default,
    union: () => union_default,
    uniq: () => uniq,
    unique: () => uniq,
    uniqueId: () => uniqueId,
    unzip: () => unzip,
    values: () => values,
    where: () => where,
    without: () => without_default,
    wrap: () => wrap,
    zip: () => zip_default
  });
  var init_modules = __esm({
    "node_modules/underscore/modules/index.js"() {
      init_setup();
      init_restArguments();
      init_isObject();
      init_isNull();
      init_isUndefined();
      init_isBoolean();
      init_isElement();
      init_isString();
      init_isNumber();
      init_isDate();
      init_isRegExp();
      init_isError();
      init_isSymbol();
      init_isArrayBuffer();
      init_isDataView();
      init_isArray();
      init_isFunction();
      init_isArguments();
      init_isFinite();
      init_isNaN();
      init_isTypedArray();
      init_isEmpty();
      init_isMatch();
      init_isEqual();
      init_isMap();
      init_isWeakMap();
      init_isSet();
      init_isWeakSet();
      init_keys();
      init_allKeys();
      init_values();
      init_pairs();
      init_invert();
      init_functions();
      init_extend();
      init_extendOwn();
      init_defaults();
      init_create();
      init_clone();
      init_tap();
      init_get();
      init_has2();
      init_mapObject();
      init_identity();
      init_constant();
      init_noop();
      init_toPath();
      init_property();
      init_propertyOf();
      init_matcher();
      init_times();
      init_random();
      init_now();
      init_escape();
      init_unescape();
      init_templateSettings();
      init_template();
      init_result();
      init_uniqueId();
      init_chain();
      init_iteratee();
      init_partial();
      init_bind();
      init_bindAll();
      init_memoize();
      init_delay();
      init_defer();
      init_throttle();
      init_debounce();
      init_wrap();
      init_negate();
      init_compose();
      init_after();
      init_before();
      init_once();
      init_findKey();
      init_findIndex();
      init_findLastIndex();
      init_sortedIndex();
      init_indexOf();
      init_lastIndexOf();
      init_find();
      init_findWhere();
      init_each();
      init_map();
      init_reduce();
      init_reduceRight();
      init_filter();
      init_reject();
      init_every();
      init_some();
      init_contains();
      init_invoke();
      init_pluck();
      init_where();
      init_max();
      init_min();
      init_shuffle();
      init_sample();
      init_sortBy();
      init_groupBy();
      init_indexBy();
      init_countBy();
      init_partition();
      init_toArray();
      init_size();
      init_pick();
      init_omit();
      init_first();
      init_initial();
      init_last();
      init_rest();
      init_compact();
      init_flatten2();
      init_without();
      init_uniq();
      init_union();
      init_intersection();
      init_difference();
      init_unzip();
      init_zip();
      init_object();
      init_range();
      init_chunk();
      init_mixin();
      init_underscore_array_methods();
    }
  });

  // node_modules/underscore/modules/index-default.js
  var _2, index_default_default;
  var init_index_default = __esm({
    "node_modules/underscore/modules/index-default.js"() {
      init_modules();
      init_modules();
      _2 = mixin(modules_exports);
      _2._ = _2;
      index_default_default = _2;
    }
  });

  // node_modules/underscore/modules/index-all.js
  var index_all_exports = {};
  __export(index_all_exports, {
    VERSION: () => VERSION,
    after: () => after,
    all: () => every,
    allKeys: () => allKeys,
    any: () => some,
    assign: () => extendOwn_default,
    before: () => before,
    bind: () => bind_default,
    bindAll: () => bindAll_default,
    chain: () => chain,
    chunk: () => chunk,
    clone: () => clone,
    collect: () => map,
    compact: () => compact,
    compose: () => compose,
    constant: () => constant,
    contains: () => contains,
    countBy: () => countBy_default,
    create: () => create,
    debounce: () => debounce,
    default: () => index_default_default,
    defaults: () => defaults_default,
    defer: () => defer_default,
    delay: () => delay_default,
    detect: () => find,
    difference: () => difference_default,
    drop: () => rest,
    each: () => each,
    escape: () => escape_default,
    every: () => every,
    extend: () => extend_default,
    extendOwn: () => extendOwn_default,
    filter: () => filter,
    find: () => find,
    findIndex: () => findIndex_default,
    findKey: () => findKey,
    findLastIndex: () => findLastIndex_default,
    findWhere: () => findWhere,
    first: () => first,
    flatten: () => flatten2,
    foldl: () => reduce_default,
    foldr: () => reduceRight_default,
    forEach: () => each,
    functions: () => functions,
    get: () => get,
    groupBy: () => groupBy_default,
    has: () => has2,
    head: () => first,
    identity: () => identity,
    include: () => contains,
    includes: () => contains,
    indexBy: () => indexBy_default,
    indexOf: () => indexOf_default,
    initial: () => initial,
    inject: () => reduce_default,
    intersection: () => intersection,
    invert: () => invert,
    invoke: () => invoke_default,
    isArguments: () => isArguments_default,
    isArray: () => isArray_default,
    isArrayBuffer: () => isArrayBuffer_default,
    isBoolean: () => isBoolean,
    isDataView: () => isDataView_default,
    isDate: () => isDate_default,
    isElement: () => isElement,
    isEmpty: () => isEmpty,
    isEqual: () => isEqual,
    isError: () => isError_default,
    isFinite: () => isFinite2,
    isFunction: () => isFunction_default,
    isMap: () => isMap_default,
    isMatch: () => isMatch,
    isNaN: () => isNaN2,
    isNull: () => isNull,
    isNumber: () => isNumber_default,
    isObject: () => isObject,
    isRegExp: () => isRegExp_default,
    isSet: () => isSet_default,
    isString: () => isString_default,
    isSymbol: () => isSymbol_default,
    isTypedArray: () => isTypedArray_default,
    isUndefined: () => isUndefined,
    isWeakMap: () => isWeakMap_default,
    isWeakSet: () => isWeakSet_default,
    iteratee: () => iteratee,
    keys: () => keys,
    last: () => last,
    lastIndexOf: () => lastIndexOf_default,
    map: () => map,
    mapObject: () => mapObject,
    matcher: () => matcher,
    matches: () => matcher,
    max: () => max,
    memoize: () => memoize,
    methods: () => functions,
    min: () => min,
    mixin: () => mixin,
    negate: () => negate,
    noop: () => noop,
    now: () => now_default,
    object: () => object,
    omit: () => omit_default,
    once: () => once_default,
    pairs: () => pairs,
    partial: () => partial_default,
    partition: () => partition_default,
    pick: () => pick_default,
    pluck: () => pluck,
    property: () => property,
    propertyOf: () => propertyOf,
    random: () => random,
    range: () => range,
    reduce: () => reduce_default,
    reduceRight: () => reduceRight_default,
    reject: () => reject,
    rest: () => rest,
    restArguments: () => restArguments,
    result: () => result,
    sample: () => sample,
    select: () => filter,
    shuffle: () => shuffle,
    size: () => size,
    some: () => some,
    sortBy: () => sortBy,
    sortedIndex: () => sortedIndex,
    tail: () => rest,
    take: () => first,
    tap: () => tap,
    template: () => template,
    templateSettings: () => templateSettings_default,
    throttle: () => throttle,
    times: () => times,
    toArray: () => toArray,
    toPath: () => toPath,
    transpose: () => unzip,
    unescape: () => unescape_default,
    union: () => union_default,
    uniq: () => uniq,
    unique: () => uniq,
    uniqueId: () => uniqueId,
    unzip: () => unzip,
    values: () => values,
    where: () => where,
    without: () => without_default,
    wrap: () => wrap,
    zip: () => zip_default
  });
  var init_index_all = __esm({
    "node_modules/underscore/modules/index-all.js"() {
      init_index_default();
      init_modules();
    }
  });

  // node_modules/list.js/src/utils/get-by-class.js
  var require_get_by_class = __commonJS({
    "node_modules/list.js/src/utils/get-by-class.js"(exports, module) {
      module.exports = function() {
        if (document.getElementsByClassName) {
          return function(container, className, single) {
            if (single) {
              return container.getElementsByClassName(className)[0];
            } else {
              return container.getElementsByClassName(className);
            }
          };
        } else if (document.querySelector) {
          return function(container, className, single) {
            className = "." + className;
            if (single) {
              return container.querySelector(className);
            } else {
              return container.querySelectorAll(className);
            }
          };
        } else {
          return function(container, className, single) {
            var classElements = [], tag = "*";
            if (container === null) {
              container = document;
            }
            var els = container.getElementsByTagName(tag);
            var elsLen = els.length;
            var pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");
            for (var i = 0, j = 0; i < elsLen; i++) {
              if (pattern.test(els[i].className)) {
                if (single) {
                  return els[i];
                } else {
                  classElements[j] = els[i];
                  j++;
                }
              }
            }
            return classElements;
          };
        }
      }();
    }
  });

  // node_modules/list.js/src/utils/extend.js
  var require_extend = __commonJS({
    "node_modules/list.js/src/utils/extend.js"(exports, module) {
      module.exports = function extend(object2) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, source; source = args[i]; i++) {
          if (!source)
            continue;
          for (var property2 in source) {
            object2[property2] = source[property2];
          }
        }
        return object2;
      };
    }
  });

  // node_modules/list.js/src/utils/index-of.js
  var require_index_of = __commonJS({
    "node_modules/list.js/src/utils/index-of.js"(exports, module) {
      var indexOf = [].indexOf;
      module.exports = function(arr, obj) {
        if (indexOf)
          return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i] === obj)
            return i;
        }
        return -1;
      };
    }
  });

  // node_modules/list.js/src/utils/to-array.js
  var require_to_array = __commonJS({
    "node_modules/list.js/src/utils/to-array.js"(exports, module) {
      module.exports = function toArray2(collection) {
        if (typeof collection === "undefined")
          return [];
        if (collection === null)
          return [null];
        if (collection === window)
          return [window];
        if (typeof collection === "string")
          return [collection];
        if (isArray(collection))
          return collection;
        if (typeof collection.length != "number")
          return [collection];
        if (typeof collection === "function" && collection instanceof Function)
          return [collection];
        var arr = [];
        for (var i = 0; i < collection.length; i++) {
          if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) {
            arr.push(collection[i]);
          }
        }
        if (!arr.length)
          return [];
        return arr;
      };
      function isArray(arr) {
        return Object.prototype.toString.call(arr) === "[object Array]";
      }
    }
  });

  // node_modules/list.js/src/utils/events.js
  var require_events = __commonJS({
    "node_modules/list.js/src/utils/events.js"(exports) {
      var bind = window.addEventListener ? "addEventListener" : "attachEvent";
      var unbind = window.removeEventListener ? "removeEventListener" : "detachEvent";
      var prefix = bind !== "addEventListener" ? "on" : "";
      var toArray2 = require_to_array();
      exports.bind = function(el, type, fn, capture) {
        el = toArray2(el);
        for (var i = 0; i < el.length; i++) {
          el[i][bind](prefix + type, fn, capture || false);
        }
      };
      exports.unbind = function(el, type, fn, capture) {
        el = toArray2(el);
        for (var i = 0; i < el.length; i++) {
          el[i][unbind](prefix + type, fn, capture || false);
        }
      };
    }
  });

  // node_modules/list.js/src/utils/to-string.js
  var require_to_string = __commonJS({
    "node_modules/list.js/src/utils/to-string.js"(exports, module) {
      module.exports = function(s) {
        s = s === void 0 ? "" : s;
        s = s === null ? "" : s;
        s = s.toString();
        return s;
      };
    }
  });

  // node_modules/list.js/src/utils/natural-sort.js
  var require_natural_sort = __commonJS({
    "node_modules/list.js/src/utils/natural-sort.js"(exports, module) {
      module.exports = function(a, b, opts) {
        var re = /(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g, sre = /^\s+|\s+$/g, snre = /\s+/g, dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, hre = /^0x[0-9a-f]+$/i, ore = /^0/, options = opts || {}, i = function(s) {
          return (options.insensitive && ("" + s).toLowerCase() || "" + s).replace(sre, "");
        }, x = i(a), y = i(b), xN = x.replace(re, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), yN = y.replace(re, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), xD = parseInt(x.match(hre), 16) || xN.length !== 1 && Date.parse(x), yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null, normChunk = function(s, l) {
          return (!s.match(ore) || l == 1) && parseFloat(s) || s.replace(snre, " ").replace(sre, "") || 0;
        }, oFxNcL, oFyNcL;
        if (yD) {
          if (xD < yD) {
            return -1;
          } else if (xD > yD) {
            return 1;
          }
        }
        for (var cLoc = 0, xNl = xN.length, yNl = yN.length, numS = Math.max(xNl, yNl); cLoc < numS; cLoc++) {
          oFxNcL = normChunk(xN[cLoc] || "", xNl);
          oFyNcL = normChunk(yN[cLoc] || "", yNl);
          if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
            return isNaN(oFxNcL) ? 1 : -1;
          }
          if (/[^\x00-\x80]/.test(oFxNcL + oFyNcL) && oFxNcL.localeCompare) {
            var comp = oFxNcL.localeCompare(oFyNcL);
            return comp / Math.abs(comp);
          }
          if (oFxNcL < oFyNcL) {
            return -1;
          } else if (oFxNcL > oFyNcL) {
            return 1;
          }
        }
        return 0;
      };
    }
  });

  // node_modules/list.js/src/utils/classes.js
  var require_classes = __commonJS({
    "node_modules/list.js/src/utils/classes.js"(exports, module) {
      var index = require_index_of();
      var re = /\s+/;
      var toString2 = Object.prototype.toString;
      module.exports = function(el) {
        return new ClassList(el);
      };
      function ClassList(el) {
        if (!el || !el.nodeType) {
          throw new Error("A DOM element reference is required");
        }
        this.el = el;
        this.list = el.classList;
      }
      ClassList.prototype.add = function(name) {
        if (this.list) {
          this.list.add(name);
          return this;
        }
        var arr = this.array();
        var i = index(arr, name);
        if (!~i)
          arr.push(name);
        this.el.className = arr.join(" ");
        return this;
      };
      ClassList.prototype.remove = function(name) {
        if ("[object RegExp]" == toString2.call(name)) {
          return this.removeMatching(name);
        }
        if (this.list) {
          this.list.remove(name);
          return this;
        }
        var arr = this.array();
        var i = index(arr, name);
        if (~i)
          arr.splice(i, 1);
        this.el.className = arr.join(" ");
        return this;
      };
      ClassList.prototype.removeMatching = function(re2) {
        var arr = this.array();
        for (var i = 0; i < arr.length; i++) {
          if (re2.test(arr[i])) {
            this.remove(arr[i]);
          }
        }
        return this;
      };
      ClassList.prototype.toggle = function(name, force) {
        if (this.list) {
          if ("undefined" !== typeof force) {
            if (force !== this.list.toggle(name, force)) {
              this.list.toggle(name);
            }
          } else {
            this.list.toggle(name);
          }
          return this;
        }
        if ("undefined" !== typeof force) {
          if (!force) {
            this.remove(name);
          } else {
            this.add(name);
          }
        } else {
          if (this.has(name)) {
            this.remove(name);
          } else {
            this.add(name);
          }
        }
        return this;
      };
      ClassList.prototype.array = function() {
        var className = this.el.getAttribute("class") || "";
        var str = className.replace(/^\s+|\s+$/g, "");
        var arr = str.split(re);
        if ("" === arr[0])
          arr.shift();
        return arr;
      };
      ClassList.prototype.has = ClassList.prototype.contains = function(name) {
        return this.list ? this.list.contains(name) : !!~index(this.array(), name);
      };
    }
  });

  // node_modules/list.js/src/utils/get-attribute.js
  var require_get_attribute = __commonJS({
    "node_modules/list.js/src/utils/get-attribute.js"(exports, module) {
      module.exports = function(el, attr) {
        var result2 = el.getAttribute && el.getAttribute(attr) || null;
        if (!result2) {
          var attrs = el.attributes;
          var length = attrs.length;
          for (var i = 0; i < length; i++) {
            if (attr[i] !== void 0) {
              if (attr[i].nodeName === attr) {
                result2 = attr[i].nodeValue;
              }
            }
          }
        }
        return result2;
      };
    }
  });

  // node_modules/list.js/src/item.js
  var require_item = __commonJS({
    "node_modules/list.js/src/item.js"(exports, module) {
      module.exports = function(list) {
        return function(initValues, element, notCreate) {
          var item = this;
          this._values = {};
          this.found = false;
          this.filtered = false;
          var init = function(initValues2, element2, notCreate2) {
            if (element2 === void 0) {
              if (notCreate2) {
                item.values(initValues2, notCreate2);
              } else {
                item.values(initValues2);
              }
            } else {
              item.elm = element2;
              var values2 = list.templater.get(item, initValues2);
              item.values(values2);
            }
          };
          this.values = function(newValues, notCreate2) {
            if (newValues !== void 0) {
              for (var name in newValues) {
                item._values[name] = newValues[name];
              }
              if (notCreate2 !== true) {
                list.templater.set(item, item.values());
              }
            } else {
              return item._values;
            }
          };
          this.show = function() {
            list.templater.show(item);
          };
          this.hide = function() {
            list.templater.hide(item);
          };
          this.matching = function() {
            return list.filtered && list.searched && item.found && item.filtered || list.filtered && !list.searched && item.filtered || !list.filtered && list.searched && item.found || !list.filtered && !list.searched;
          };
          this.visible = function() {
            return item.elm && item.elm.parentNode == list.list ? true : false;
          };
          init(initValues, element, notCreate);
        };
      };
    }
  });

  // node_modules/list.js/src/add-async.js
  var require_add_async = __commonJS({
    "node_modules/list.js/src/add-async.js"(exports, module) {
      module.exports = function(list) {
        var addAsync = function(values2, callback, items) {
          var valuesToAdd = values2.splice(0, 50);
          items = items || [];
          items = items.concat(list.add(valuesToAdd));
          if (values2.length > 0) {
            setTimeout(function() {
              addAsync(values2, callback, items);
            }, 1);
          } else {
            list.update();
            callback(items);
          }
        };
        return addAsync;
      };
    }
  });

  // node_modules/list.js/src/parse.js
  var require_parse = __commonJS({
    "node_modules/list.js/src/parse.js"(exports, module) {
      module.exports = function(list) {
        var Item = require_item()(list);
        var getChildren = function(parent) {
          var nodes = parent.childNodes, items = [];
          for (var i = 0, il = nodes.length; i < il; i++) {
            if (nodes[i].data === void 0) {
              items.push(nodes[i]);
            }
          }
          return items;
        };
        var parse = function(itemElements, valueNames) {
          for (var i = 0, il = itemElements.length; i < il; i++) {
            list.items.push(new Item(valueNames, itemElements[i]));
          }
        };
        var parseAsync = function(itemElements, valueNames) {
          var itemsToIndex = itemElements.splice(0, 50);
          parse(itemsToIndex, valueNames);
          if (itemElements.length > 0) {
            setTimeout(function() {
              parseAsync(itemElements, valueNames);
            }, 1);
          } else {
            list.update();
            list.trigger("parseComplete");
          }
        };
        list.handlers.parseComplete = list.handlers.parseComplete || [];
        return function() {
          var itemsToIndex = getChildren(list.list), valueNames = list.valueNames;
          if (list.indexAsync) {
            parseAsync(itemsToIndex, valueNames);
          } else {
            parse(itemsToIndex, valueNames);
          }
        };
      };
    }
  });

  // node_modules/list.js/src/templater.js
  var require_templater = __commonJS({
    "node_modules/list.js/src/templater.js"(exports, module) {
      var Templater = function(list) {
        var itemSource, templater = this;
        var init = function() {
          itemSource = templater.getItemSource(list.item);
          if (itemSource) {
            itemSource = templater.clearSourceItem(itemSource, list.valueNames);
          }
        };
        this.clearSourceItem = function(el, valueNames) {
          for (var i = 0, il = valueNames.length; i < il; i++) {
            var elm;
            if (valueNames[i].data) {
              for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
                el.setAttribute("data-" + valueNames[i].data[j], "");
              }
            } else if (valueNames[i].attr && valueNames[i].name) {
              elm = list.utils.getByClass(el, valueNames[i].name, true);
              if (elm) {
                elm.setAttribute(valueNames[i].attr, "");
              }
            } else {
              elm = list.utils.getByClass(el, valueNames[i], true);
              if (elm) {
                elm.innerHTML = "";
              }
            }
            elm = void 0;
          }
          return el;
        };
        this.getItemSource = function(item) {
          if (item === void 0) {
            var nodes = list.list.childNodes, items = [];
            for (var i = 0, il = nodes.length; i < il; i++) {
              if (nodes[i].data === void 0) {
                return nodes[i].cloneNode(true);
              }
            }
          } else if (/<tr[\s>]/g.exec(item)) {
            var tbody = document.createElement("tbody");
            tbody.innerHTML = item;
            return tbody.firstChild;
          } else if (item.indexOf("<") !== -1) {
            var div = document.createElement("div");
            div.innerHTML = item;
            return div.firstChild;
          } else {
            var source = document.getElementById(list.item);
            if (source) {
              return source;
            }
          }
          return void 0;
        };
        this.get = function(item, valueNames) {
          templater.create(item);
          var values2 = {};
          for (var i = 0, il = valueNames.length; i < il; i++) {
            var elm;
            if (valueNames[i].data) {
              for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
                values2[valueNames[i].data[j]] = list.utils.getAttribute(item.elm, "data-" + valueNames[i].data[j]);
              }
            } else if (valueNames[i].attr && valueNames[i].name) {
              elm = list.utils.getByClass(item.elm, valueNames[i].name, true);
              values2[valueNames[i].name] = elm ? list.utils.getAttribute(elm, valueNames[i].attr) : "";
            } else {
              elm = list.utils.getByClass(item.elm, valueNames[i], true);
              values2[valueNames[i]] = elm ? elm.innerHTML : "";
            }
            elm = void 0;
          }
          return values2;
        };
        this.set = function(item, values2) {
          var getValueName = function(name) {
            for (var i = 0, il = list.valueNames.length; i < il; i++) {
              if (list.valueNames[i].data) {
                var data = list.valueNames[i].data;
                for (var j = 0, jl = data.length; j < jl; j++) {
                  if (data[j] === name) {
                    return { data: name };
                  }
                }
              } else if (list.valueNames[i].attr && list.valueNames[i].name && list.valueNames[i].name == name) {
                return list.valueNames[i];
              } else if (list.valueNames[i] === name) {
                return name;
              }
            }
          };
          var setValue = function(name, value) {
            var elm;
            var valueName = getValueName(name);
            if (!valueName)
              return;
            if (valueName.data) {
              item.elm.setAttribute("data-" + valueName.data, value);
            } else if (valueName.attr && valueName.name) {
              elm = list.utils.getByClass(item.elm, valueName.name, true);
              if (elm) {
                elm.setAttribute(valueName.attr, value);
              }
            } else {
              elm = list.utils.getByClass(item.elm, valueName, true);
              if (elm) {
                elm.innerHTML = value;
              }
            }
            elm = void 0;
          };
          if (!templater.create(item)) {
            for (var v in values2) {
              if (values2.hasOwnProperty(v)) {
                setValue(v, values2[v]);
              }
            }
          }
        };
        this.create = function(item) {
          if (item.elm !== void 0) {
            return false;
          }
          if (itemSource === void 0) {
            throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
          }
          var newItem = itemSource.cloneNode(true);
          newItem.removeAttribute("id");
          item.elm = newItem;
          templater.set(item, item.values());
          return true;
        };
        this.remove = function(item) {
          if (item.elm.parentNode === list.list) {
            list.list.removeChild(item.elm);
          }
        };
        this.show = function(item) {
          templater.create(item);
          list.list.appendChild(item.elm);
        };
        this.hide = function(item) {
          if (item.elm !== void 0 && item.elm.parentNode === list.list) {
            list.list.removeChild(item.elm);
          }
        };
        this.clear = function() {
          if (list.list.hasChildNodes()) {
            while (list.list.childNodes.length >= 1) {
              list.list.removeChild(list.list.firstChild);
            }
          }
        };
        init();
      };
      module.exports = function(list) {
        return new Templater(list);
      };
    }
  });

  // node_modules/list.js/src/search.js
  var require_search = __commonJS({
    "node_modules/list.js/src/search.js"(exports, module) {
      module.exports = function(list) {
        var item, text, columns, searchString, customSearch;
        var prepare = {
          resetList: function() {
            list.i = 1;
            list.templater.clear();
            customSearch = void 0;
          },
          setOptions: function(args) {
            if (args.length == 2 && args[1] instanceof Array) {
              columns = args[1];
            } else if (args.length == 2 && typeof args[1] == "function") {
              columns = void 0;
              customSearch = args[1];
            } else if (args.length == 3) {
              columns = args[1];
              customSearch = args[2];
            } else {
              columns = void 0;
            }
          },
          setColumns: function() {
            if (list.items.length === 0)
              return;
            if (columns === void 0) {
              columns = list.searchColumns === void 0 ? prepare.toArray(list.items[0].values()) : list.searchColumns;
            }
          },
          setSearchString: function(s) {
            s = list.utils.toString(s).toLowerCase();
            s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
            searchString = s;
          },
          toArray: function(values2) {
            var tmpColumn = [];
            for (var name in values2) {
              tmpColumn.push(name);
            }
            return tmpColumn;
          }
        };
        var search = {
          list: function() {
            for (var k = 0, kl = list.items.length; k < kl; k++) {
              search.item(list.items[k]);
            }
          },
          item: function(item2) {
            item2.found = false;
            for (var j = 0, jl = columns.length; j < jl; j++) {
              if (search.values(item2.values(), columns[j])) {
                item2.found = true;
                return;
              }
            }
          },
          values: function(values2, column) {
            if (values2.hasOwnProperty(column)) {
              text = list.utils.toString(values2[column]).toLowerCase();
              if (searchString !== "" && text.search(searchString) > -1) {
                return true;
              }
            }
            return false;
          },
          reset: function() {
            list.reset.search();
            list.searched = false;
          }
        };
        var searchMethod = function(str) {
          list.trigger("searchStart");
          prepare.resetList();
          prepare.setSearchString(str);
          prepare.setOptions(arguments);
          prepare.setColumns();
          if (searchString === "") {
            search.reset();
          } else {
            list.searched = true;
            if (customSearch) {
              customSearch(searchString, columns);
            } else {
              search.list();
            }
          }
          list.update();
          list.trigger("searchComplete");
          return list.visibleItems;
        };
        list.handlers.searchStart = list.handlers.searchStart || [];
        list.handlers.searchComplete = list.handlers.searchComplete || [];
        list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), "keyup", function(e) {
          var target = e.target || e.srcElement, alreadyCleared = target.value === "" && !list.searched;
          if (!alreadyCleared) {
            searchMethod(target.value);
          }
        });
        list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), "input", function(e) {
          var target = e.target || e.srcElement;
          if (target.value === "") {
            searchMethod("");
          }
        });
        return searchMethod;
      };
    }
  });

  // node_modules/list.js/src/filter.js
  var require_filter = __commonJS({
    "node_modules/list.js/src/filter.js"(exports, module) {
      module.exports = function(list) {
        list.handlers.filterStart = list.handlers.filterStart || [];
        list.handlers.filterComplete = list.handlers.filterComplete || [];
        return function(filterFunction) {
          list.trigger("filterStart");
          list.i = 1;
          list.reset.filter();
          if (filterFunction === void 0) {
            list.filtered = false;
          } else {
            list.filtered = true;
            var is = list.items;
            for (var i = 0, il = is.length; i < il; i++) {
              var item = is[i];
              if (filterFunction(item)) {
                item.filtered = true;
              } else {
                item.filtered = false;
              }
            }
          }
          list.update();
          list.trigger("filterComplete");
          return list.visibleItems;
        };
      };
    }
  });

  // node_modules/list.js/src/sort.js
  var require_sort = __commonJS({
    "node_modules/list.js/src/sort.js"(exports, module) {
      module.exports = function(list) {
        list.sortFunction = list.sortFunction || function(itemA, itemB, options) {
          options.desc = options.order == "desc" ? true : false;
          return list.utils.naturalSort(itemA.values()[options.valueName], itemB.values()[options.valueName], options);
        };
        var buttons = {
          els: void 0,
          clear: function() {
            for (var i = 0, il = buttons.els.length; i < il; i++) {
              list.utils.classes(buttons.els[i]).remove("asc");
              list.utils.classes(buttons.els[i]).remove("desc");
            }
          },
          getOrder: function(btn) {
            var predefinedOrder = list.utils.getAttribute(btn, "data-order");
            if (predefinedOrder == "asc" || predefinedOrder == "desc") {
              return predefinedOrder;
            } else if (list.utils.classes(btn).has("desc")) {
              return "asc";
            } else if (list.utils.classes(btn).has("asc")) {
              return "desc";
            } else {
              return "asc";
            }
          },
          getInSensitive: function(btn, options) {
            var insensitive = list.utils.getAttribute(btn, "data-insensitive");
            if (insensitive === "false") {
              options.insensitive = false;
            } else {
              options.insensitive = true;
            }
          },
          setOrder: function(options) {
            for (var i = 0, il = buttons.els.length; i < il; i++) {
              var btn = buttons.els[i];
              if (list.utils.getAttribute(btn, "data-sort") !== options.valueName) {
                continue;
              }
              var predefinedOrder = list.utils.getAttribute(btn, "data-order");
              if (predefinedOrder == "asc" || predefinedOrder == "desc") {
                if (predefinedOrder == options.order) {
                  list.utils.classes(btn).add(options.order);
                }
              } else {
                list.utils.classes(btn).add(options.order);
              }
            }
          }
        };
        var sort = function() {
          list.trigger("sortStart");
          var options = {};
          var target = arguments[0].currentTarget || arguments[0].srcElement || void 0;
          if (target) {
            options.valueName = list.utils.getAttribute(target, "data-sort");
            buttons.getInSensitive(target, options);
            options.order = buttons.getOrder(target);
          } else {
            options = arguments[1] || options;
            options.valueName = arguments[0];
            options.order = options.order || "asc";
            options.insensitive = typeof options.insensitive == "undefined" ? true : options.insensitive;
          }
          buttons.clear();
          buttons.setOrder(options);
          options.sortFunction = options.sortFunction || list.sortFunction;
          list.items.sort(function(a, b) {
            var mult = options.order === "desc" ? -1 : 1;
            return options.sortFunction(a, b, options) * mult;
          });
          list.update();
          list.trigger("sortComplete");
        };
        list.handlers.sortStart = list.handlers.sortStart || [];
        list.handlers.sortComplete = list.handlers.sortComplete || [];
        buttons.els = list.utils.getByClass(list.listContainer, list.sortClass);
        list.utils.events.bind(buttons.els, "click", sort);
        list.on("searchStart", buttons.clear);
        list.on("filterStart", buttons.clear);
        return sort;
      };
    }
  });

  // node_modules/list.js/index.js
  var require_list = __commonJS({
    "node_modules/list.js/index.js"(exports, module) {
      (function(window2, undefined2) {
        "use strict";
        var document2 = window2.document, getByClass = require_get_by_class(), extend = require_extend(), indexOf = require_index_of(), events = require_events(), toString2 = require_to_string(), naturalSort = require_natural_sort(), classes = require_classes(), getAttribute = require_get_attribute(), toArray2 = require_to_array();
        var List = function(id, options, values2) {
          var self2 = this, init, Item = require_item()(self2), addAsync = require_add_async()(self2);
          init = {
            start: function() {
              self2.listClass = "list";
              self2.searchClass = "search";
              self2.sortClass = "sort";
              self2.page = 1e4;
              self2.i = 1;
              self2.items = [];
              self2.visibleItems = [];
              self2.matchingItems = [];
              self2.searched = false;
              self2.filtered = false;
              self2.searchColumns = undefined2;
              self2.handlers = { "updated": [] };
              self2.plugins = {};
              self2.valueNames = [];
              self2.utils = {
                getByClass,
                extend,
                indexOf,
                events,
                toString: toString2,
                naturalSort,
                classes,
                getAttribute,
                toArray: toArray2
              };
              self2.utils.extend(self2, options);
              self2.listContainer = typeof id === "string" ? document2.getElementById(id) : id;
              if (!self2.listContainer) {
                return;
              }
              self2.list = getByClass(self2.listContainer, self2.listClass, true);
              self2.parse = require_parse()(self2);
              self2.templater = require_templater()(self2);
              self2.search = require_search()(self2);
              self2.filter = require_filter()(self2);
              self2.sort = require_sort()(self2);
              this.handlers();
              this.items();
              self2.update();
              this.plugins();
            },
            handlers: function() {
              for (var handler in self2.handlers) {
                if (self2[handler]) {
                  self2.on(handler, self2[handler]);
                }
              }
            },
            items: function() {
              self2.parse(self2.list);
              if (values2 !== undefined2) {
                self2.add(values2);
              }
            },
            plugins: function() {
              for (var i = 0; i < self2.plugins.length; i++) {
                var plugin = self2.plugins[i];
                self2[plugin.name] = plugin;
                plugin.init(self2, List);
              }
            }
          };
          this.reIndex = function() {
            self2.items = [];
            self2.visibleItems = [];
            self2.matchingItems = [];
            self2.searched = false;
            self2.filtered = false;
            self2.parse(self2.list);
          };
          this.toJSON = function() {
            var json = [];
            for (var i = 0, il = self2.items.length; i < il; i++) {
              json.push(self2.items[i].values());
            }
            return json;
          };
          this.add = function(values3, callback) {
            if (values3.length === 0) {
              return;
            }
            if (callback) {
              addAsync(values3, callback);
              return;
            }
            var added = [], notCreate = false;
            if (values3[0] === undefined2) {
              values3 = [values3];
            }
            for (var i = 0, il = values3.length; i < il; i++) {
              var item = null;
              notCreate = self2.items.length > self2.page ? true : false;
              item = new Item(values3[i], undefined2, notCreate);
              self2.items.push(item);
              added.push(item);
            }
            self2.update();
            return added;
          };
          this.show = function(i, page) {
            this.i = i;
            this.page = page;
            self2.update();
            return self2;
          };
          this.remove = function(valueName, value, options2) {
            var found = 0;
            for (var i = 0, il = self2.items.length; i < il; i++) {
              if (self2.items[i].values()[valueName] == value) {
                self2.templater.remove(self2.items[i], options2);
                self2.items.splice(i, 1);
                il--;
                i--;
                found++;
              }
            }
            self2.update();
            return found;
          };
          this.get = function(valueName, value) {
            var matchedItems = [];
            for (var i = 0, il = self2.items.length; i < il; i++) {
              var item = self2.items[i];
              if (item.values()[valueName] == value) {
                matchedItems.push(item);
              }
            }
            return matchedItems;
          };
          this.size = function() {
            return self2.items.length;
          };
          this.clear = function() {
            self2.templater.clear();
            self2.items = [];
            return self2;
          };
          this.on = function(event, callback) {
            self2.handlers[event].push(callback);
            return self2;
          };
          this.off = function(event, callback) {
            var e = self2.handlers[event];
            var index = indexOf(e, callback);
            if (index > -1) {
              e.splice(index, 1);
            }
            return self2;
          };
          this.trigger = function(event) {
            var i = self2.handlers[event].length;
            while (i--) {
              self2.handlers[event][i](self2);
            }
            return self2;
          };
          this.reset = {
            filter: function() {
              var is = self2.items, il = is.length;
              while (il--) {
                is[il].filtered = false;
              }
              return self2;
            },
            search: function() {
              var is = self2.items, il = is.length;
              while (il--) {
                is[il].found = false;
              }
              return self2;
            }
          };
          this.update = function() {
            var is = self2.items, il = is.length;
            self2.visibleItems = [];
            self2.matchingItems = [];
            self2.templater.clear();
            for (var i = 0; i < il; i++) {
              if (is[i].matching() && (self2.matchingItems.length + 1 >= self2.i && self2.visibleItems.length < self2.page)) {
                is[i].show();
                self2.visibleItems.push(is[i]);
                self2.matchingItems.push(is[i]);
              } else if (is[i].matching()) {
                self2.matchingItems.push(is[i]);
                is[i].hide();
              } else {
                is[i].hide();
              }
            }
            self2.trigger("updated");
            return self2;
          };
          init.start();
        };
        if (typeof define === "function" && define.amd) {
          define(function() {
            return List;
          });
        }
        module.exports = List;
        window2.List = List;
      })(window);
    }
  });

  // node_modules/aria-accordion/src/util.js
  var require_util = __commonJS({
    "node_modules/aria-accordion/src/util.js"(exports, module) {
      var extend = function(out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
          if (!arguments[i])
            continue;
          for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
              out[key] = arguments[i][key];
            }
          }
        }
        return out;
      };
      module.exports = {
        extend
      };
    }
  });

  // node_modules/aria-accordion/src/accordion.js
  var require_accordion = __commonJS({
    "node_modules/aria-accordion/src/accordion.js"(exports, module) {
      "use strict";
      var extend = require_util().extend;
      var defaultOpts = {
        collapseOthers: false,
        customHiding: false,
        contentPrefix: "accordion",
        openFirst: false
      };
      var defaultSelectors = {
        trigger: "button"
      };
      var Accordion = function(elm, selectors, opts) {
        this.elm = elm;
        this.selectors = extend({}, defaultSelectors, selectors);
        this.opts = extend({}, defaultOpts, opts);
        this.triggers = this.findTriggers();
        this.listeners = [];
        this.addEventListener(this.elm, "click", this.handleClickElm.bind(this));
        if (this.opts.openFirst) {
          this.expand(this.triggers[0]);
        }
      };
      Accordion.prototype.handleClickElm = function(e) {
        if (this.triggers.indexOf(e.target) > -1) {
          this.toggle(e.target);
        } else {
          var self2 = this;
          this.triggers.forEach(function(trigger) {
            if (e.target.parentElement === trigger) {
              self2.toggle(trigger);
            }
          });
        }
      };
      Accordion.prototype.findTriggers = function() {
        var self2 = this;
        var triggers = [].slice.call(this.elm.querySelectorAll(this.selectors.trigger));
        triggers.forEach(function(trigger, index) {
          self2.setAria(trigger, index);
        });
        return triggers;
      };
      Accordion.prototype.setAria = function(trigger, index) {
        var content = trigger.nextElementSibling;
        var contentID;
        if (content.hasAttribute("id")) {
          contentID = content.getAttribute("id");
        } else {
          contentID = this.opts.contentPrefix + "-content-" + index;
          content.setAttribute("id", contentID);
        }
        trigger.setAttribute("aria-controls", contentID);
        trigger.setAttribute("aria-expanded", "false");
        content.setAttribute("aria-hidden", "true");
        this.setStyles(content);
      };
      Accordion.prototype.toggle = function(elm) {
        var f = elm.getAttribute("aria-expanded") === "true" ? this.collapse : this.expand;
        f.call(this, elm);
      };
      Accordion.prototype.expand = function(button) {
        if (this.opts.collapseOthers) {
          this.collapseAll();
        }
        var content = document.getElementById(button.getAttribute("aria-controls"));
        button.setAttribute("aria-expanded", "true");
        content.setAttribute("aria-hidden", "false");
        this.setStyles(content);
      };
      Accordion.prototype.collapse = function(button) {
        var content = document.getElementById(button.getAttribute("aria-controls"));
        button.setAttribute("aria-expanded", "false");
        content.setAttribute("aria-hidden", "true");
        this.setStyles(content);
      };
      Accordion.prototype.collapseAll = function() {
        var self2 = this;
        this.triggers.forEach(function(trigger) {
          self2.collapse(trigger);
        });
      };
      Accordion.prototype.expandAll = function() {
        var self2 = this;
        this.triggers.forEach(function(trigger) {
          self2.expand(trigger);
        });
      };
      Accordion.prototype.setStyles = function(content) {
        var prop = content.getAttribute("aria-hidden") === "true" ? "none" : "block";
        if (!this.opts.customHiding) {
          content.style.display = prop;
        }
      };
      Accordion.prototype.addEventListener = function(elm, event, callback) {
        if (elm) {
          elm.addEventListener(event, callback);
          this.listeners.push({
            elm,
            event,
            callback
          });
        }
      };
      Accordion.prototype.destroy = function() {
        this.listeners.forEach(function(listener) {
          listener.elm.removeEventListener(listener.event, listener.callback);
        });
      };
      module.exports = { Accordion };
    }
  });

  // node_modules/glossary-panel/src/glossary.js
  var require_glossary = __commonJS({
    "node_modules/glossary-panel/src/glossary.js"(exports, module) {
      "use strict";
      var _3 = (init_index_all(), __toCommonJS(index_all_exports));
      var List = require_list();
      var Accordion = require_accordion().Accordion;
      var KEYCODE_ENTER = 13;
      var KEYCODE_ESC = 27;
      function selectorMatches(el, selector) {
        var p = Element.prototype;
        var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
          return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
      }
      function forEach(values2, callback) {
        return [].forEach.call(values2, callback);
      }
      var itemTemplate = _3.template(
        '<li class="{{ glossaryItemClass }}"><button class="data-glossary-term {{ termClass }}">{{ term }}</button><div class="{{ definitionClass }}">{{ definition }}</div></li>',
        { interpolate: /\{\{(.+?)\}\}/g }
      );
      var defaultSelectors = {
        glossaryID: "#glossary",
        toggle: ".js-glossary-toggle",
        close: ".js-glossary-close",
        listClass: ".js-glossary-list",
        searchClass: ".js-glossary-search"
      };
      var defaultClasses = {
        definitionClass: "glossary__definition",
        glossaryItemClass: "glossary__item",
        highlightedTerm: "term--highlight",
        termClass: "glossary__term"
      };
      function removeTabindex(elm) {
        var elms = getTabIndex(elm);
        forEach(elms, function(elm2) {
          elm2.setAttribute("tabIndex", "-1");
        });
      }
      function restoreTabindex(elm) {
        var elms = getTabIndex(elm);
        forEach(elms, function(elm2) {
          elm2.setAttribute("tabIndex", "0");
        });
      }
      function getTabIndex(elm) {
        return elm.querySelectorAll("a, button, input, [tabindex]");
      }
      function Glossary(terms, selectors, classes) {
        this.terms = terms;
        this.selectors = _3.extend({}, defaultSelectors, selectors);
        this.classes = _3.extend({}, defaultClasses, classes);
        this.body = document.querySelector(this.selectors.glossaryID);
        this.toggleBtn = document.querySelector(this.selectors.toggle);
        this.closeBtn = document.querySelector(this.selectors.close);
        this.search = this.body.querySelector(this.selectors.searchClass);
        this.listElm = this.body.querySelector(this.selectors.listClass);
        this.selectedTerm = this.toggleBtn;
        this.isOpen = false;
        this.populate();
        this.initList();
        this.linkTerms();
        removeTabindex(this.body);
        this.accordion = new Accordion(this.listElm, null, { contentPrefix: "glossary" });
        this.listeners = [];
        this.addEventListener(this.toggleBtn, "click", this.toggle.bind(this));
        this.addEventListener(this.closeBtn, "click", this.hide.bind(this));
        this.addEventListener(this.search, "input", this.handleInput.bind(this));
        this.addEventListener(document.body, "keyup", this.handleKeyup.bind(this));
      }
      Glossary.prototype.populate = function() {
        this.terms.forEach(function(term) {
          var opts = {
            term: term.term,
            definition: term.definition,
            definitionClass: this.classes.definitionClass,
            glossaryItemClass: this.classes.glossaryItemClass,
            termClass: this.classes.termClass
          };
          this.listElm.insertAdjacentHTML("beforeend", itemTemplate(opts));
        }, this);
      };
      Glossary.prototype.initList = function() {
        var glossaryId = this.selectors.glossaryID.slice(1);
        var listClass = this.selectors.listClass.slice(1);
        var searchClass = this.selectors.searchClass.slice(1);
        var options = {
          valueNames: ["data-glossary-term"],
          listClass,
          searchClass
        };
        this.list = new List(glossaryId, options);
        this.list.sort("data-glossary-term", { order: "asc" });
      };
      Glossary.prototype.linkTerms = function() {
        var terms = document.querySelectorAll("[data-term]");
        forEach(terms, function(term) {
          term.setAttribute("title", "Click to define");
          term.setAttribute("tabIndex", 0);
          term.setAttribute("data-term", (term.getAttribute("data-term") || "").toLowerCase());
        });
        document.body.addEventListener("click", this.handleTermTouch.bind(this));
        document.body.addEventListener("keyup", this.handleTermTouch.bind(this));
      };
      Glossary.prototype.handleTermTouch = function(e) {
        if (e.which === KEYCODE_ENTER || e.type === "click") {
          if (selectorMatches(e.target, "[data-term]")) {
            this.show(e);
            this.selectedTerm = e.target;
            this.findTerm(e.target.getAttribute("data-term"));
          } else {
            this.selectedTerm = this.toggleBtn;
          }
        }
      };
      Glossary.prototype.findTerm = function(term) {
        this.search.value = term;
        var highlightClass = this.classes.highlightedTerm;
        forEach(this.body.querySelectorAll("." + highlightClass), function(term2) {
          term2.classList.remove(highlightClass);
        });
        forEach(this.body.querySelectorAll('span[data-term="' + term + '"]'), function(term2) {
          term2.classList.add(highlightClass);
        });
        this.list.filter(function(item) {
          return item._values["data-glossary-term"].toLowerCase() === term;
        });
        this.list.search();
        var button = this.list.visibleItems[0].elm.querySelector("button");
        this.accordion.expand(button);
      };
      Glossary.prototype.toggle = function() {
        var method = this.isOpen ? this.hide : this.show;
        method.apply(this);
      };
      Glossary.prototype.show = function() {
        this.body.setAttribute("aria-hidden", "false");
        this.toggleBtn.setAttribute("aria-expanded", "true");
        this.search.focus();
        this.isOpen = true;
        restoreTabindex(this.body);
      };
      Glossary.prototype.hide = function() {
        this.body.setAttribute("aria-hidden", "true");
        this.toggleBtn.setAttribute("aria-expanded", "false");
        this.selectedTerm.focus();
        this.isOpen = false;
        removeTabindex(this.body);
      };
      Glossary.prototype.handleInput = function() {
        if (this.list.filtered) {
          this.list.filter();
        }
      };
      Glossary.prototype.handleKeyup = function(e) {
        if (e.keyCode == KEYCODE_ESC) {
          if (this.isOpen) {
            this.hide();
          }
        }
      };
      Glossary.prototype.addEventListener = function(elm, event, callback) {
        if (elm) {
          elm.addEventListener(event, callback);
          this.listeners.push({
            elm,
            event,
            callback
          });
        }
      };
      Glossary.prototype.destroy = function() {
        this.accordion.destroy();
        this.listeners.forEach(function(listener) {
          listener.elm.removeEventListener(listener.event, listener.callback);
        });
      };
      module.exports = Glossary;
    }
  });

  // _data/terms.json
  var require_terms = __commonJS({
    "_data/terms.json"(exports, module) {
      module.exports = [
        {
          term: "annualized cost",
          definition: "Cost per year with one-off costs distributed over the duration of the information collection."
        },
        {
          term: "burden",
          definition: "Time, effort, or financial resources required to generate, maintain, or provide information for a collection."
        },
        {
          term: "capital cost",
          definition: "A one-time expense to buy something needed to answer an information collection request."
        },
        {
          term: "contractor",
          definition: "Federal contractors are considered members of the public under the PRA."
        },
        {
          term: "clearance",
          definition: "Permission to collect a specific set of data from the American public."
        },
        {
          term: "control number",
          definition: "Two four-digit numbers separated by a hyphen. The first four digits identify the sponsoring agency and bureau, and the last four identify the particular collection."
        },
        {
          term: "de minimis",
          definition: "Changes that are purely cosmetic in nature."
        },
        {
          term: "desk officer",
          definition: "The OIRA staff member reviewing an information collection request."
        },
        {
          term: "exempt",
          definition: "Status for collections that do not require OMB approval under specific statutory reasons, despite otherwise meeting the criteria."
        },
        {
          term: "extension request",
          definition: "A request to extend the approval of a currently approved collection without making any material changes."
        },
        {
          term: "fast-track",
          definition: "The process for approval for a collection already covered by an existing generic clearance."
        },
        {
          term: "Federal Register",
          definition: "The daily journal of the United States government. Its use is required by the PRA to gather comments from the public during the 60- and 30-day comment periods. https://www.federalregister.gov/"
        },
        {
          term: "generic clearance",
          definition: "A broad type of standard clearance issued in advance for a group of similar, low-burden collections. A good fit for surveys."
        },
        {
          term: "IC",
          definition: "A proposal and process for requesting information. PRA approval is granted to collections."
        },
        {
          term: "ICB",
          definition: "OIRA's annual report sent to Congress summarizing the major activies under PRA, and the total burden of information collection"
        },
        {
          term: "ICR",
          definition: "Details about a proposed collection to be reviewed by the agency, public, and OIRA desk officers."
        },
        {
          term: "information collection",
          definition: "A proposal and process for requesting information. PRA approval is granted to collections."
        },
        {
          term: "information collection request",
          definition: "Details about a proposed collection to be reviewed by the agency, public, and OIRA desk officers."
        },
        {
          term: "non-substantive change",
          definition: "A change made to an information collection that requires OIRA review and approval but does not require public comment."
        },
        {
          term: "OIRA",
          definition: "Office of Information and Regulatory Affairs, part of the Office of Management and Budget"
        },
        {
          term: "OMB",
          definition: "Office of Management and Budget"
        },
        {
          term: "person",
          definition: "For purposes regarding the Paperwork Reduction Act, a person can be an individual, individuals representing a partnership, association, corporation, legal representative\u2014or any combination of these. Also includes state, territorial, tribal, or local governments."
        },
        {
          term: "PRA",
          definition: "The Paperwork Reduction Act. A law governing how federal agencies collect information from the American public."
        },
        {
          term: "PII",
          definition: "Personally Identifiable Information. Information that can be used to distinguish or trace an individual\u2019s identity, either alone or when combined with other information that is linked or linkable to a specific individual"
        },
        {
          term: "the public",
          definition: "People or groups outside of the federal government. Federal employees and military personnel are not considered the public under the PRA."
        },
        {
          term: "recordkeeping",
          definition: "The practice and process of organizing and maintaining information, documents, or data as required by an agency's guidelines."
        },
        {
          term: "reinstatement request",
          definition: "A request for OMB approval of a previously approved collection that either was discontinued or expired."
        },
        {
          term: "revision request",
          definition: "A request to materially change a currently approved collection, such as updating the collection instrument, instructions, or its frequency. Also requests to extend the approval period."
        },
        {
          term: "ROCIS",
          definition: "Regulatory Information Service Center (RISC) RISC/OIRA Combined Information System (ROCIS) is the digital platform used by agencies to submit PRA clearance requests to OIRA."
        },
        {
          term: "sponsor",
          definition: "To cause or trigger the collection of information. Agencies sponsor collections."
        }
      ];
    }
  });

  // _js/glossary.js
  var require_glossary2 = __commonJS({
    "_js/glossary.js"() {
      var Glossary = require_glossary();
      var terms = require_terms();
      var body = document.querySelectorAll(
        ".usa-layout__docs-main.usa-prose p, .usa-layout__docs-main.usa-prose li"
      );
      if (body) {
        Object.keys(terms).forEach(function(key) {
          var term = terms[key].term;
          var re = new RegExp("(\\b" + term + "\\b)(?![^<]*>|[^<>]*</)", "i");
          for (var i = 0; i < body.length; i++) {
            var match = re.exec(body[i].innerHTML);
            if (match) {
              body[i].innerHTML = body[i].innerHTML.replace(
                re,
                `<span data-term="${term}">${match[0]}</span>`
              );
              break;
            }
          }
        });
      }
      function decorator(glossary) {
        var accordion = glossary.accordion;
        accordion.opts.collapseOthers = true;
        accordion.collapse = function(button) {
          var content = document.getElementById(button.getAttribute("aria-controls"));
          if (!content)
            return;
          button.setAttribute("aria-expanded", "false");
          content.setAttribute("aria-hidden", "true");
          this.setStyles(content);
        };
      }
      var g = new Glossary(terms);
      decorator(g);
    }
  });

  // _js/index.js
  var SmoothScroll = require_smooth_scroll_polyfills_min();
  require_contacts2();
  require_glossary2();
  new SmoothScroll('a[href*="#"]');
})();
/*! Bundled license information:

smooth-scroll/dist/smooth-scroll.polyfills.min.js:
  (*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll *)
*/
