! function(x, T) {
    function O(e) {
        return N.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    function B(e) {
        var t, n, r;
        return dn[e] || (t = b.body, r = (n = N("<" + e + ">").appendTo(t)).css("display"), n.remove(), "none" !== r && "" !== r || (_ || ((_ = b.createElement("iframe")).frameBorder = _.width = _.height = 0), t.appendChild(_), H && _.createElement || ((H = (_.contentWindow || _.contentDocument).document).write((N.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), H.close()), n = H.createElement(e), H.body.appendChild(n), r = N.css(n, "display"), t.removeChild(_)), dn[e] = r), dn[e]
    }

    function s(e, t) {
        var n = {};
        return N.each(mn.concat.apply([], mn.slice(0, t)), function() {
            n[this] = e
        }), n
    }

    function P() {
        sn = T
    }

    function q() {
        return setTimeout(P, 0), sn = N.now()
    }

    function W() {
        try {
            return new x.XMLHttpRequest
        } catch (e) {}
    }

    function I(e, t) {
        var n, r, i = N.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== T && ((i[n] ? e : r = r || {})[n] = t[n]);
        r && N.extend(!0, e, r)
    }

    function w(e, t, n, r, i, o) {
        (o = o || {})[i = i || t.dataTypes[0]] = !0;
        for (var a, s = e[i], l = 0, u = s ? s.length : 0, c = e === nn; l < u && (c || !a); l++) "string" == typeof(a = s[l](t, n, r)) && (a = !c || o[a] ? T : (t.dataTypes.unshift(a), w(e, t, n, r, a, o)));
        return a = !c && a || o["*"] ? a : w(e, t, n, r, "*", o)
    }

    function $(s) {
        return function(e, t) {
            if ("string" != typeof e && (t = e, e = "*"), N.isFunction(t))
                for (var n, r, i = e.toLowerCase().split(Kt), o = 0, a = i.length; o < a; o++) n = i[o], (r = /^\+/.test(n)) && (n = n.substr(1) || "*"), (s[n] = s[n] || [])[r ? "unshift" : "push"](t)
        }
    }

    function R(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = "width" === t ? 1 : 0;
        if (0 < r) {
            if ("border" !== n)
                for (; i < 4; i += 2) n || (r -= parseFloat(N.css(e, "padding" + F[i])) || 0), "margin" === n ? r += parseFloat(N.css(e, n + F[i])) || 0 : r -= parseFloat(N.css(e, "border" + F[i] + "Width")) || 0
        } else {
            if (((r = A(e, t)) < 0 || null == r) && (r = e.style[t]), Bt.test(r)) return r;
            if (r = parseFloat(r) || 0, n)
                for (; i < 4; i += 2) r += parseFloat(N.css(e, "padding" + F[i])) || 0, "padding" !== n && (r += parseFloat(N.css(e, "border" + F[i] + "Width")) || 0), "margin" === n && (r += parseFloat(N.css(e, n + F[i])) || 0)
        }
        return r + "px"
    }

    function X(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? z(e) : "script" !== t && void 0 !== e.getElementsByTagName && N.grep(e.getElementsByTagName("input"), z)
    }

    function z(e) {
        "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
    }

    function l(e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function V(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), "object" === (n = t.nodeName.toLowerCase()) ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(N.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }

    function U(e, t) {
        if (1 === t.nodeType && N.hasData(e)) {
            var n, r, i, e = N._data(e),
                o = N._data(t, e),
                a = e.events;
            if (a)
                for (n in delete o.handle, o.events = {}, a)
                    for (r = 0, i = a[n].length; r < i; r++) N.event.add(t, n, a[n][r]);
            o.data && (o.data = N.extend({}, o.data))
        }
    }

    function G(e) {
        var t = bt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function Y(e, n, r) {
        if (n = n || 0, N.isFunction(n)) return N.grep(e, function(e, t) {
            return !!n.call(e, t, e) === r
        });
        if (n.nodeType) return N.grep(e, function(e, t) {
            return e === n === r
        });
        if ("string" == typeof n) {
            var t = N.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (mt.test(n)) return N.filter(n, t, !r);
            n = N.filter(n, t)
        }
        return N.grep(e, function(e, t) {
            return 0 <= N.inArray(e, n) === r
        })
    }

    function J(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function n() {
        return !0
    }

    function u() {
        return !1
    }

    function Q(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            o = t + "mark",
            a = N._data(e, r);
        !a || "queue" !== n && N._data(e, i) || "mark" !== n && N._data(e, o) || setTimeout(function() {
            N._data(e, i) || N._data(e, o) || (N.removeData(e, r, !0), a.fire())
        }, 0)
    }

    function K(e) {
        for (var t in e)
            if (("data" !== t || !N.isEmptyObject(e[t])) && "toJSON" !== t) return;
        return 1
    }

    function Z(e, t, n) {
        if (n === T && 1 === e.nodeType) {
            var r = "data-" + t.replace(je, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : N.isNumeric(n) ? +n : De.test(n) ? N.parseJSON(n) : n)
                } catch (e) {}
                N.data(e, t, n)
            } else n = T
        }
        return n
    }
    var ee, t, r, te, ne, re, ie, oe, ae, se, le, ue, ce, fe, de, pe, he, me, ge, ye, ve, i, o, a, be, xe, Te, b = x.document,
        e = x.navigator,
        we = x.location,
        N = (te = x.jQuery, ne = x.$, re = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ie = /\S/, oe = /^\s+/, ae = /\s+$/, se = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, le = /^[\],:{}\s]*$/, ue = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, ce = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, fe = /(?:^|:|,)(?:\s*\[)+/g, de = /(webkit)[ \/]([\w.]+)/, pe = /(opera)(?:.*version)?[ \/]([\w.]+)/, he = /(msie) ([\w.]+)/, me = /(mozilla)(?:.*? rv:([\w.]+))?/, ge = /-([a-z]|[0-9])/gi, ye = /^-ms-/, e = e.userAgent, ve = Object.prototype.toString, i = Object.prototype.hasOwnProperty, o = Array.prototype.push, a = Array.prototype.slice, be = String.prototype.trim, xe = Array.prototype.indexOf, Te = {}, (f.fn = f.prototype = {
            constructor: f,
            init: function(e, t, n) {
                var r, i, o;
                if (e)
                    if (e.nodeType) this.context = this[0] = e, this.length = 1;
                    else if ("body" === e && !t && b.body) this.context = b, this[0] = b.body, this.selector = e, this.length = 1;
                else {
                    if ("string" != typeof e) return f.isFunction(e) ? n.ready(e) : (e.selector !== T && (this.selector = e.selector, this.context = e.context), f.makeArray(e, this));
                    if (!(r = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? re.exec(e) : [null, e, null]) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                    if (r[1]) return o = (t = t instanceof f ? t[0] : t) ? t.ownerDocument || t : b, (i = se.exec(e)) ? f.isPlainObject(t) ? (e = [b.createElement(i[1])], f.fn.attr.call(e, t, !0)) : e = [o.createElement(i[1])] : e = ((i = f.buildFragment([r[1]], [o])).cacheable ? f.clone(i.fragment) : i.fragment).childNodes, f.merge(this, e);
                    if ((t = b.getElementById(r[2])) && t.parentNode) {
                        if (t.id !== r[2]) return n.find(e);
                        this.length = 1, this[0] = t
                    }
                    this.context = b, this.selector = e
                }
                return this
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return a.call(this, 0)
            },
            get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var r = this.constructor();
                return f.isArray(e) ? o.apply(r, e) : f.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
            },
            each: function(e, t) {
                return f.each(this, e, t)
            },
            ready: function(e) {
                return f.bindReady(), t.add(e), this
            },
            eq: function(e) {
                return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments), "slice", a.call(arguments).join(","))
            },
            map: function(n) {
                return this.pushStack(f.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: o,
            sort: [].sort,
            splice: [].splice
        }).init.prototype = f.fn, f.extend = f.fn.extend = function() {
            var e, t, n, r, i, o = arguments[0] || {},
                a = 1,
                s = arguments.length,
                l = !1;
            for ("boolean" == typeof o && (l = o, o = arguments[1] || {}, a = 2), "object" == typeof o || f.isFunction(o) || (o = {}), s === a && (o = this, --a); a < s; a++)
                if (null != (e = arguments[a]))
                    for (t in e) i = o[t], o !== (n = e[t]) && (l && n && (f.isPlainObject(n) || (r = f.isArray(n))) ? (i = r ? (r = !1, i && f.isArray(i) ? i : []) : i && f.isPlainObject(i) ? i : {}, o[t] = f.extend(l, i, n)) : n !== T && (o[t] = n));
            return o
        }, f.extend({
            noConflict: function(e) {
                return x.$ === f && (x.$ = ne), e && x.jQuery === f && (x.jQuery = te), f
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? f.readyWait++ : f.ready(!0)
            },
            ready: function(e) {
                if (!0 === e && !--f.readyWait || !0 !== e && !f.isReady) {
                    if (!b.body) return setTimeout(f.ready, 1);
                    (f.isReady = !0) !== e && 0 < --f.readyWait || (t.fireWith(b, [f]), f.fn.trigger && f(b).trigger("ready").off("ready"))
                }
            },
            bindReady: function() {
                if (!t) {
                    if (t = f.Callbacks("once memory"), "complete" === b.readyState) return setTimeout(f.ready, 1);
                    if (b.addEventListener) b.addEventListener("DOMContentLoaded", r, !1), x.addEventListener("load", f.ready, !1);
                    else if (b.attachEvent) {
                        b.attachEvent("onreadystatechange", r), x.attachEvent("onload", f.ready);
                        var e = !1;
                        try {
                            e = null == x.frameElement
                        } catch (e) {}
                        b.documentElement.doScroll && e && Ce()
                    }
                }
            },
            isFunction: function(e) {
                return "function" === f.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === f.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : Te[ve.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || "object" !== f.type(e) || e.nodeType || f.isWindow(e)) return !1;
                try {
                    if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (var t in e);
                return t === T || i.call(e, t)
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseJSON: function(e) {
                return "string" == typeof e && e ? (e = f.trim(e), x.JSON && x.JSON.parse ? x.JSON.parse(e) : le.test(e.replace(ue, "@").replace(ce, "]").replace(fe, "")) ? new Function("return " + e)() : void f.error("Invalid JSON: " + e)) : null
            },
            parseXML: function(e) {
                if ("string" != typeof e || !e) return null;
                var t;
                try {
                    x.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                } catch (e) {
                    t = T
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + e), t
            },
            noop: function() {},
            globalEval: function(e) {
                e && ie.test(e) && (x.execScript || function(e) {
                    x.eval.call(x, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(ye, "ms-").replace(ge, Ee)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            },
            each: function(e, t, n) {
                var r, i = 0,
                    o = e.length,
                    a = o === T || f.isFunction(e);
                if (n)
                    if (a) {
                        for (r in e)
                            if (!1 === t.apply(e[r], n)) break
                    } else
                        for (; i < o && !1 !== t.apply(e[i++], n););
                else if (a) {
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break
                } else
                    for (; i < o && !1 !== t.call(e[i], i, e[i++]););
                return e
            },
            trim: be ? function(e) {
                return null == e ? "" : be.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(oe, "").replace(ae, "")
            },
            makeArray: function(e, t) {
                var n, t = t || [];
                return null != e && (n = f.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || f.isWindow(e) ? o.call(t, e) : f.merge(t, e)), t
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (xe) return xe.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                var n = e.length,
                    r = 0;
                if ("number" == typeof t.length)
                    for (var i = t.length; r < i; r++) e[n++] = t[r];
                else
                    for (; t[r] !== T;) e[n++] = t[r++];
                return e.length = n, e
            },
            grep: function(e, t, n) {
                var r = [];
                n = !!n;
                for (var i = 0, o = e.length; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = [],
                    a = 0,
                    s = e.length;
                if (e instanceof f || s !== T && "number" == typeof s && (0 < s && e[0] && e[s - 1] || 0 === s || f.isArray(e)))
                    for (; a < s; a++) null != (r = t(e[a], a, n)) && (o[o.length] = r);
                else
                    for (i in e) r = t(e[i], i, n), null != r && (o[o.length] = r);
                return o.concat.apply([], o)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), f.isFunction(e) ? (n = a.call(arguments, 2), (r = function() {
                    return e.apply(t, n.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || r.guid || f.guid++, r) : T
            },
            access: function(e, t, n, r, i, o, a) {
                var s, l = null == n,
                    u = 0,
                    c = e.length;
                if (n && "object" == typeof n) {
                    for (u in n) f.access(e, t, u, n[u], 1, o, r);
                    i = 1
                } else if (r !== T) {
                    if (s = a === T && f.isFunction(r), t = l ? s ? (s = t, function(e, t, n) {
                            return s.call(f(e), n)
                        }) : (t.call(e, r), null) : t)
                        for (; u < c; u++) t(e[u], n, s ? r.call(e[u], u, t(e[u], n)) : r, a);
                    i = 1
                }
                return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(e) {
                e = e.toLowerCase();
                e = de.exec(e) || pe.exec(e) || he.exec(e) || e.indexOf("compatible") < 0 && me.exec(e) || [];
                return {
                    browser: e[1] || "",
                    version: e[2] || "0"
                }
            },
            sub: function() {
                function n(e, t) {
                    return new n.fn.init(e, t)
                }
                f.extend(!0, n, this), n.superclass = this, ((n.fn = n.prototype = this()).constructor = n).sub = this.sub, n.fn.init = function(e, t) {
                    return t && t instanceof f && !(t instanceof n) && (t = n(t)), f.fn.init.call(this, e, t, r)
                }, n.fn.init.prototype = n.fn;
                var r = n(b);
                return n
            },
            browser: {}
        }), f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            Te["[object " + t + "]"] = t.toLowerCase()
        }), (e = f.uaMatch(e)).browser && (f.browser[e.browser] = !0, f.browser.version = e.version), f.browser.webkit && (f.browser.safari = !0), ie.test(" ") && (oe = /^[\s\xA0]+/, ae = /[\s\xA0]+$/), ee = f(b), b.addEventListener ? r = function() {
            b.removeEventListener("DOMContentLoaded", r, !1), f.ready()
        } : b.attachEvent && (r = function() {
            "complete" === b.readyState && (b.detachEvent("onreadystatechange", r), f.ready())
        }), f),
        Ne = {};

    function Ce() {
        if (!f.isReady) {
            try {
                b.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(Ce, 1)
            }
            f.ready()
        }
    }

    function f(e, t) {
        return new f.fn.init(e, t, ee)
    }

    function Ee(e, t) {
        return (t + "").toUpperCase()
    }
    N.Callbacks = function(o) {
        o = o ? Ne[o] || function(e) {
            for (var t = Ne[e] = {}, n = 0, r = (e = e.split(/\s+/)).length; n < r; n++) t[e[n]] = !0;
            return t
        }(o) : {};

        function a(e) {
            for (var t, n, r = 0, i = e.length; r < i; r++) t = e[r], "array" === (n = N.type(t)) ? a(t) : "function" !== n || o.unique && p.has(t) || f.push(t)
        }

        function n(e, t) {
            for (t = t || [], r = !o.memory || [e, t], s = i = !0, c = l || 0, l = 0, u = f.length; f && c < u; c++)
                if (!1 === f[c].apply(e, t) && o.stopOnFalse) {
                    r = !0;
                    break
                }
            s = !1, f && (o.once ? !0 === r ? p.disable() : f = [] : d && d.length && (r = d.shift(), p.fireWith(r[0], r[1])))
        }
        var r, i, s, l, u, c, f = [],
            d = [],
            p = {
                add: function() {
                    var e;
                    return f && (e = f.length, a(arguments), s ? u = f.length : r && !0 !== r && (l = e, n(r[0], r[1]))), this
                },
                remove: function() {
                    if (f)
                        for (var e = arguments, t = 0, n = e.length; t < n; t++)
                            for (var r = 0; r < f.length && (e[t] !== f[r] || (s && r <= u && (u--, r <= c) && c--, f.splice(r--, 1), !o.unique)); r++);
                    return this
                },
                has: function(e) {
                    if (f)
                        for (var t = 0, n = f.length; t < n; t++)
                            if (e === f[t]) return !0;
                    return !1
                },
                empty: function() {
                    return f = [], this
                },
                disable: function() {
                    return f = d = r = T, this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return d = T, r && !0 !== r || p.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, t) {
                    return d && (s ? o.once || d.push([e, t]) : o.once && r || n(e, t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    };

    function ke(e) {
        return N.event.special.hover ? e : e.replace(Ie, "mouseenter$1 mouseleave$1")
    }
    var c, Se, Ae, Le = [].slice,
        De = (N.extend({
            Deferred: function(e) {
                var t, n = N.Callbacks("once memory"),
                    r = N.Callbacks("once memory"),
                    i = N.Callbacks("memory"),
                    o = "pending",
                    a = {
                        resolve: n,
                        reject: r,
                        notify: i
                    },
                    s = {
                        done: n.add,
                        fail: r.add,
                        progress: i.add,
                        state: function() {
                            return o
                        },
                        isResolved: n.fired,
                        isRejected: r.fired,
                        then: function(e, t, n) {
                            return l.done(e).fail(t).progress(n), this
                        },
                        always: function() {
                            return l.done.apply(l, arguments).fail.apply(l, arguments), this
                        },
                        pipe: function(e, t, n) {
                            return N.Deferred(function(o) {
                                N.each({
                                    done: [e, "resolve"],
                                    fail: [t, "reject"],
                                    progress: [n, "notify"]
                                }, function(e, t) {
                                    var n, r = t[0],
                                        i = t[1];
                                    N.isFunction(r) ? l[e](function() {
                                        (n = r.apply(this, arguments)) && N.isFunction(n.promise) ? n.promise().then(o.resolve, o.reject, o.notify) : o[i + "With"](this === l ? o : this, [n])
                                    }) : l[e](o[i])
                                })
                            }).promise()
                        },
                        promise: function(e) {
                            if (null == e) e = s;
                            else
                                for (var t in s) e[t] = s[t];
                            return e
                        }
                    },
                    l = s.promise({});
                for (t in a) l[t] = a[t].fire, l[t + "With"] = a[t].fireWith;
                return l.done(function() {
                    o = "resolved"
                }, r.disable, i.lock).fail(function() {
                    o = "rejected"
                }, n.disable, i.lock), e && e.call(l, l), l
            },
            when: function(e) {
                var n = Le.call(arguments, 0),
                    t = 0,
                    r = n.length,
                    i = Array(r),
                    o = r,
                    a = r <= 1 && e && N.isFunction(e.promise) ? e : N.Deferred(),
                    s = a.promise();
                if (1 < r) {
                    for (; t < r; t++) n[t] && n[t].promise && N.isFunction(n[t].promise) ? n[t].promise().then(function(t) {
                        return function(e) {
                            n[t] = 1 < arguments.length ? Le.call(arguments, 0) : e, --o || a.resolveWith(a, n)
                        }
                    }(t), a.reject, function(t) {
                        return function(e) {
                            i[t] = 1 < arguments.length ? Le.call(arguments, 0) : e, a.notifyWith(s, i)
                        }
                    }(t)) : --o;
                    o || a.resolveWith(a, n)
                } else a !== e && a.resolveWith(a, r ? [e] : []);
                return s
            }
        }), N.support = function() {
            var a, e, t, n, r, s, i, o, l, u = b.createElement("div");
            b.documentElement;
            if (u.setAttribute("className", "t"), u.innerHTML = " <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", e = u.getElementsByTagName("*"), r = u.getElementsByTagName("a")[0], !e || !e.length || !r) return {};
            t = (e = b.createElement("select")).appendChild(b.createElement("option")), n = u.getElementsByTagName("input")[0], a = {
                leadingWhitespace: 3 === u.firstChild.nodeType,
                tbody: !u.getElementsByTagName("tbody").length,
                htmlSerialize: !!u.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: "/a" === r.getAttribute("href"),
                opacity: /^0.55/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: "on" === n.value,
                optSelected: t.selected,
                getSetAttribute: "t" !== u.className,
                enctype: !!b.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== b.createElement("nav").cloneNode(!0).outerHTML,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                pixelMargin: !0
            }, N.boxModel = a.boxModel = "CSS1Compat" === b.compatMode, n.checked = !0, a.noCloneChecked = n.cloneNode(!0).checked, e.disabled = !0, a.optDisabled = !t.disabled;
            try {
                delete u.test
            } catch (e) {
                a.deleteExpando = !1
            }
            if (!u.addEventListener && u.attachEvent && u.fireEvent && (u.attachEvent("onclick", function() {
                    a.noCloneEvent = !1
                }), u.cloneNode(!0).fireEvent("onclick")), (n = b.createElement("input")).value = "t", n.setAttribute("type", "radio"), a.radioValue = "t" === n.value, n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), u.appendChild(n), (r = b.createDocumentFragment()).appendChild(u.lastChild), a.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, a.appendChecked = n.checked, r.removeChild(n), r.appendChild(u), u.attachEvent)
                for (o in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) i = "on" + o, l = i in u, l || (u.setAttribute(i, "return;"), l = "function" == typeof u[i]), a[o + "Bubbles"] = l;
            return r.removeChild(u), r = e = u = n = null, N(function() {
                var e, t, n, r, i, o = b.getElementsByTagName("body")[0];
                o && (r = (i = "padding:0;margin:0;border:") + "0;visibility:hidden;", n = "position:absolute;top:0;left:0;width:1px;height:1px;", (e = b.createElement("div")).style.cssText = r + "width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(e, o.firstChild), u = b.createElement("div"), e.appendChild(u), u.innerHTML = "<table><tr><td style='" + i + "0;display:none'></td><td>t</td></tr></table>", s = u.getElementsByTagName("td"), l = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", a.reliableHiddenOffsets = l && 0 === s[0].offsetHeight, x.getComputedStyle && (u.innerHTML = "", (t = b.createElement("div")).style.width = "0", t.style.marginRight = "0", u.style.width = "2px", u.appendChild(t), a.reliableMarginRight = 0 === (parseInt((x.getComputedStyle(t, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0)), void 0 !== u.style.zoom && (u.innerHTML = "", u.style.width = u.style.padding = "1px", u.style.border = 0, u.style.overflow = "hidden", u.style.display = "inline", u.style.zoom = 1, a.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.style.overflow = "visible", u.innerHTML = "<div style='width:5px;'></div>", a.shrinkWrapBlocks = 3 !== u.offsetWidth), u.style.cssText = n + r, u.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", n = (i = u.firstChild).firstChild, r = i.nextSibling.firstChild.firstChild, r = {
                    doesNotAddBorder: 5 !== n.offsetTop,
                    doesAddBorderForTableAndCells: 5 === r.offsetTop
                }, n.style.position = "fixed", n.style.top = "20px", r.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop, n.style.position = n.style.top = "", i.style.overflow = "hidden", i.style.position = "relative", r.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop, r.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, x.getComputedStyle && (u.style.marginTop = "1%", a.pixelMargin = "1%" !== (x.getComputedStyle(u, null) || {
                    marginTop: 0
                }).marginTop), void 0 !== e.style.zoom && (e.style.zoom = 1), o.removeChild(e), t = u = e = null, N.extend(a, r))
            }), a
        }(), /^(?:\{.*\}|\[.*\])$/),
        je = /([A-Z])/g,
        Fe = (N.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (N.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? N.cache[e[N.expando]] : e[N.expando]) && !K(e)
            },
            data: function(e, t, n, r) {
                if (N.acceptData(e)) {
                    var i, o = N.expando,
                        a = "string" == typeof t,
                        s = e.nodeType,
                        l = s ? N.cache : e,
                        u = s ? e[o] : e[o] && o,
                        c = "events" === t;
                    if (u && l[u] && (c || r || l[u].data) || !a || n !== T) return u || (s ? e[o] = u = ++N.uuid : u = o), l[u] || (l[u] = {}, s) || (l[u].toJSON = N.noop), "object" != typeof t && "function" != typeof t || (r ? l[u] = N.extend(l[u], t) : l[u].data = N.extend(l[u].data, t)), o = e = l[u], r || (e.data || (e.data = {}), e = e.data), n !== T && (e[N.camelCase(t)] = n), c && !e[t] ? o.events : (a ? null == (i = e[t]) && (i = e[N.camelCase(t)]) : i = e, i)
                }
            },
            removeData: function(e, t, n) {
                if (N.acceptData(e)) {
                    var r, i, o, a = N.expando,
                        s = e.nodeType,
                        l = s ? N.cache : e,
                        u = s ? e[a] : a;
                    if (l[u]) {
                        if (t && (r = n ? l[u] : l[u].data)) {
                            for ((i = 0, o = (t = N.isArray(t) ? t : t in r || (t = N.camelCase(t)) in r ? [t] : t.split(" ")).length); i < o; i++) delete r[t[i]];
                            if (!(n ? K : N.isEmptyObject)(r)) return
                        }(n || (delete l[u].data, K(l[u]))) && (N.support.deleteExpando || !l.setInterval ? delete l[u] : l[u] = null, s) && (N.support.deleteExpando ? delete e[a] : e.removeAttribute ? e.removeAttribute(a) : e[a] = null)
                    }
                }
            },
            _data: function(e, t, n) {
                return N.data(e, t, n, !0)
            },
            acceptData: function(e) {
                if (e.nodeName) {
                    var t = N.noData[e.nodeName.toLowerCase()];
                    if (t) return !0 !== t && e.getAttribute("classid") === t
                }
                return !0
            }
        }), N.fn.extend({
            data: function(n, e) {
                var r, i, t, o, a, s = this[0],
                    l = 0,
                    u = null;
                if (n !== T) return "object" == typeof n ? this.each(function() {
                    N.data(this, n)
                }) : ((r = n.split(".", 2))[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", N.access(this, function(t) {
                    if (t === T) return (u = this.triggerHandler("getData" + i, [r[0]])) === T && s && (u = N.data(s, n), u = Z(s, n, u)), u === T && r[1] ? this.data(r[0]) : u;
                    r[1] = t, this.each(function() {
                        var e = N(this);
                        e.triggerHandler("setData" + i, r), N.data(this, n, t), e.triggerHandler("changeData" + i, r)
                    })
                }, null, e, 1 < arguments.length, null, !1));
                if (this.length && (u = N.data(s), 1 === s.nodeType) && !N._data(s, "parsedAttrs")) {
                    for (a = (t = s.attributes).length; l < a; l++) 0 === (o = t[l].name).indexOf("data-") && (o = N.camelCase(o.substring(5)), Z(s, o, u[o]));
                    N._data(s, "parsedAttrs", !0)
                }
                return u
            },
            removeData: function(e) {
                return this.each(function() {
                    N.removeData(this, e)
                })
            }
        }), N.extend({
            _mark: function(e, t) {
                e && N._data(e, t = (t || "fx") + "mark", (N._data(e, t) || 0) + 1)
            },
            _unmark: function(e, t, n) {
                var r;
                !0 !== e && (n = t, t = e, e = !1), t && (r = (n = n || "fx") + "mark", (e = e ? 0 : (N._data(t, r) || 1) - 1) ? N._data(t, r, e) : (N.removeData(t, r, !0), Q(t, n, "mark")))
            },
            queue: function(e, t, n) {
                var r;
                if (e) return r = N._data(e, t = (t || "fx") + "queue"), n && (!r || N.isArray(n) ? r = N._data(e, t, N.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = N.queue(e, t),
                    r = n.shift(),
                    i = {};
                (r = "inprogress" === r ? n.shift() : r) && ("fx" === t && n.unshift("inprogress"), N._data(e, t + ".run", i), r.call(e, function() {
                    N.dequeue(e, t)
                }, i)), n.length || (N.removeData(e, t + "queue " + t + ".run", !0), Q(e, t, "queue"))
            }
        }), N.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? N.queue(this[0], t) : n === T ? this : this.each(function() {
                    var e = N.queue(this, t, n);
                    "fx" === t && "inprogress" !== e[0] && N.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    N.dequeue(this, e)
                })
            },
            delay: function(r, e) {
                return r = N.fx && N.fx.speeds[r] || r, this.queue(e = e || "fx", function(e, t) {
                    var n = setTimeout(e, r);
                    t.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function n() {
                    --s || i.resolveWith(o, [o])
                }
                "string" != typeof e && (t = e, e = T), e = e || "fx";
                for (var r, i = N.Deferred(), o = this, a = o.length, s = 1, l = e + "defer", u = e + "queue", c = e + "mark"; a--;)(r = N.data(o[a], l, T, !0) || (N.data(o[a], u, T, !0) || N.data(o[a], c, T, !0)) && N.data(o[a], l, N.Callbacks("once memory"), !0)) && (s++, r.add(n));
                return n(), i.promise(t)
            }
        }), /[\n\t\r]/g),
        d = /\s+/,
        Me = /\r/g,
        _e = /^(?:button|input)$/i,
        He = /^(?:button|input|object|select|textarea)$/i,
        Oe = /^a(?:rea)?$/i,
        Be = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Pe = N.support.getSetAttribute,
        qe = (N.fn.extend({
            attr: function(e, t) {
                return N.access(this, N.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    N.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return N.access(this, N.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return e = N.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = T, delete this[e]
                    } catch (e) {}
                })
            },
            addClass: function(t) {
                var e, n, r, i, o, a, s;
                if (N.isFunction(t)) return this.each(function(e) {
                    N(this).addClass(t.call(this, e, this.className))
                });
                if (t && "string" == typeof t)
                    for (e = t.split(d), n = 0, r = this.length; n < r; n++)
                        if (1 === (i = this[n]).nodeType)
                            if (i.className || 1 !== e.length) {
                                for (o = " " + i.className + " ", a = 0, s = e.length; a < s; a++) ~o.indexOf(" " + e[a] + " ") || (o += e[a] + " ");
                                i.className = N.trim(o)
                            } else i.className = t;
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s;
                if (N.isFunction(t)) return this.each(function(e) {
                    N(this).removeClass(t.call(this, e, this.className))
                });
                if (t && "string" == typeof t || t === T)
                    for (e = (t || "").split(d), n = 0, r = this.length; n < r; n++)
                        if (1 === (i = this[n]).nodeType && i.className)
                            if (t) {
                                for (o = (" " + i.className + " ").replace(Fe, " "), a = 0, s = e.length; a < s; a++) o = o.replace(" " + e[a] + " ", " ");
                                i.className = N.trim(o)
                            } else i.className = "";
                return this
            },
            toggleClass: function(o, a) {
                var s = typeof o,
                    l = "boolean" == typeof a;
                return N.isFunction(o) ? this.each(function(e) {
                    N(this).toggleClass(o.call(this, e, this.className, a), a)
                }) : this.each(function() {
                    if ("string" == s)
                        for (var e, t = 0, n = N(this), r = a, i = o.split(d); e = i[t++];) r = l ? r : !n.hasClass(e), n[r ? "addClass" : "removeClass"](e);
                    else "undefined" != s && "boolean" != s || (this.className && N._data(this, "__className__", this.className), this.className = !this.className && !1 !== o && N._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                    if (1 === this[n].nodeType && -1 < (" " + this[n].className + " ").replace(Fe, " ").indexOf(t)) return !0;
                return !1
            },
            val: function(n) {
                var r, e, i, t = this[0];
                return arguments.length ? (i = N.isFunction(n), this.each(function(e) {
                    var t = N(this);
                    1 === this.nodeType && (null == (e = i ? n.call(this, e, t.val()) : n) ? e = "" : "number" == typeof e ? e += "" : N.isArray(e) && (e = N.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })), (r = N.valHooks[this.type] || N.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, e, "value") !== T || (this.value = e))
                })) : t ? (r = N.valHooks[t.type] || N.valHooks[t.nodeName.toLowerCase()]) && "get" in r && (e = r.get(t, "value")) !== T ? e : "string" == typeof(e = t.value) ? e.replace(Me, "") : null == e ? "" : e : void 0
            }
        }), N.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.selectedIndex,
                            o = [],
                            a = e.options,
                            s = "select-one" === e.type;
                        if (i < 0) return null;
                        for (t = s ? i : 0, n = s ? i + 1 : a.length; t < n; t++)
                            if ((r = a[t]).selected && (N.support.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !N.nodeName(r.parentNode, "optgroup"))) {
                                if (r = N(r).val(), s) return r;
                                o.push(r)
                            }
                        return s && !o.length && a.length ? N(a[i]).val() : o
                    },
                    set: function(e, t) {
                        var n = N.makeArray(t);
                        return N(e).find("option").each(function() {
                            this.selected = 0 <= N.inArray(N(this).val(), n)
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function(e, t, n, r) {
                var i, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return r && t in N.attrFn ? N(e)[t](n) : void 0 === e.getAttribute ? N.prop(e, t, n) : ((r = 1 !== a || !N.isXMLDoc(e)) && (t = t.toLowerCase(), o = N.attrHooks[t] || (Be.test(t) ? Se : c)), n !== T ? null === n ? void N.removeAttr(e, t) : o && "set" in o && r && (i = o.set(e, n, t)) !== T ? i : (e.setAttribute(t, "" + n), n) : !(o && "get" in o && r && null !== (i = o.get(e, t))) && null === (i = e.getAttribute(t)) ? T : i)
            },
            removeAttr: function(e, t) {
                var n, r, i, o, a, s = 0;
                if (t && 1 === e.nodeType)
                    for (o = (r = t.toLowerCase().split(d)).length; s < o; s++)(i = r[s]) && (n = N.propFix[i] || i, (a = Be.test(i)) || N.attr(e, i, ""), e.removeAttribute(Pe ? i : n), a) && n in e && (e[n] = !1)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        var n;
                        if (_e.test(e.nodeName) && e.parentNode) N.error("type property can't be changed");
                        else if (!N.support.radioValue && "radio" === t && N.nodeName(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                    }
                },
                value: {
                    get: function(e, t) {
                        return c && N.nodeName(e, "button") ? c.get(e, t) : t in e ? e.value : null
                    },
                    set: function(e, t, n) {
                        if (c && N.nodeName(e, "button")) return c.set(e, t, n);
                        e.value = t
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !N.isXMLDoc(e)) && (t = N.propFix[t] || t, i = N.propHooks[t]), n !== T ? i && "set" in i && (r = i.set(e, n, t)) !== T ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = e.getAttributeNode("tabindex");
                        return t && t.specified ? parseInt(t.value, 10) : He.test(e.nodeName) || Oe.test(e.nodeName) && e.href ? 0 : T
                    }
                }
            }
        }), N.attrHooks.tabindex = N.propHooks.tabIndex, Se = {
            get: function(e, t) {
                var n = N.prop(e, t);
                return !0 === n || "boolean" != typeof n && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : T
            },
            set: function(e, t, n) {
                return !1 === t ? N.removeAttr(e, n) : ((t = N.propFix[n] || n) in e && (e[t] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, Pe || (Ae = {
            name: !0,
            id: !0,
            coords: !0
        }, c = N.valHooks.button = {
            get: function(e, t) {
                e = e.getAttributeNode(t);
                return e && (Ae[t] ? "" !== e.nodeValue : e.specified) ? e.nodeValue : T
            },
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = b.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
            }
        }, N.attrHooks.tabindex.set = c.set, N.each(["width", "height"], function(e, n) {
            N.attrHooks[n] = N.extend(N.attrHooks[n], {
                set: function(e, t) {
                    if ("" === t) return e.setAttribute(n, "auto"), t
                }
            })
        }), N.attrHooks.contenteditable = {
            get: c.get,
            set: function(e, t, n) {
                c.set(e, t = "" === t ? "false" : t, n)
            }
        }), N.support.hrefNormalized || N.each(["href", "src", "width", "height"], function(e, t) {
            N.attrHooks[t] = N.extend(N.attrHooks[t], {
                get: function(e) {
                    e = e.getAttribute(t, 2);
                    return null === e ? T : e
                }
            })
        }), N.support.style || (N.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || T
            },
            set: function(e, t) {
                return e.style.cssText = "" + t
            }
        }), N.support.optSelected || (N.propHooks.selected = N.extend(N.propHooks.selected, {
            get: function(e) {
                e = e.parentNode;
                return e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex, null
            }
        })), N.support.enctype || (N.propFix.enctype = "encoding"), N.support.checkOn || N.each(["radio", "checkbox"], function() {
            N.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), N.each(["radio", "checkbox"], function() {
            N.valHooks[this] = N.extend(N.valHooks[this], {
                set: function(e, t) {
                    if (N.isArray(t)) return e.checked = 0 <= N.inArray(N(e).val(), t)
                }
            })
        }), /^(?:textarea|input|select)$/i),
        We = /^([^\.]*)?(?:\.(.+))?$/,
        Ie = /(?:^|\s)hover(\.\S+)?\b/,
        $e = /^key/,
        Re = /^(?:mouse|contextmenu)|click/,
        Xe = /^(?:focusinfocus|focusoutblur)$/,
        ze = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/;

    function Ve(e, t, n, r, i, o) {
        for (var a = 0, s = r.length; a < s; a++)
            if (u = r[a]) {
                for (var l = !1, u = u[e]; u;) {
                    if (u[h] === n) {
                        l = r[u.sizset];
                        break
                    }
                    if (1 === u.nodeType)
                        if (o || (u[h] = n, u.sizset = a), "string" != typeof t) {
                            if (u === t) {
                                l = !0;
                                break
                            }
                        } else if (0 < y.filter(t, [u]).length) {
                        l = u;
                        break
                    }
                    u = u[e]
                }
                r[a] = l
            }
    }

    function Ue(e, t, n, r, i, o) {
        for (var a = 0, s = r.length; a < s; a++)
            if (u = r[a]) {
                for (var l = !1, u = u[e]; u;) {
                    if (u[h] === n) {
                        l = r[u.sizset];
                        break
                    }
                    if (1 !== u.nodeType || o || (u[h] = n, u.sizset = a), u.nodeName.toLowerCase() === t) {
                        l = u;
                        break
                    }
                    u = u[e]
                }
                r[a] = l
            }
    }

    function Ge(e, t) {
        return "\\" + (+t + 1)
    }
    N.event = {
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h;
            if (3 !== e.nodeType && 8 !== e.nodeType && t && n && (o = N._data(e)))
                for (n.handler && (n = (d = n).handler, i = d.selector), n.guid || (n.guid = N.guid++), (s = o.events) || (o.events = s = {}), (a = o.handle) || (o.handle = a = function(e) {
                        return void 0 === N || e && N.event.triggered === e.type ? T : N.event.dispatch.apply(a.elem, arguments)
                    }, a.elem = e), t = N.trim(ke(t)).split(" "), l = 0; l < t.length; l++) u = (f = We.exec(t[l]) || [])[1], c = (f[2] || "").split(".").sort(), h = N.event.special[u] || {}, u = (i ? h.delegateType : h.bindType) || u, h = N.event.special[u] || {}, f = N.extend({
                    type: u,
                    origType: f[1],
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    quick: i && function(e) {
                        e = ze.exec(e);
                        return e && (e[1] = (e[1] || "").toLowerCase(), e[3] = e[3] && new RegExp("(?:^|\\s)" + e[3] + "(?:\\s|$)")), e
                    }(i),
                    namespace: c.join(".")
                }, d), (p = s[u]) || ((p = s[u] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, r, c, a)) || (e.addEventListener ? e.addEventListener(u, a, !1) : e.attachEvent && e.attachEvent("on" + u, a)), h.add && (h.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, f) : p.push(f), N.event.global[u] = !0
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g = N.hasData(e) && N._data(e);
            if (g && (f = g.events)) {
                for (t = N.trim(ke(t || "")).split(" "), o = 0; o < t.length; o++)
                    if (a = s = (u = We.exec(t[o]) || [])[1], l = u[2], a) {
                        for (d = N.event.special[a] || {}, u = (h = f[a = (r ? d.delegateType : d.bindType) || a] || []).length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, c = 0; c < h.length; c++) m = h[c], !i && s !== m.origType || n && n.guid !== m.guid || l && !l.test(m.namespace) || r && r !== m.selector && ("**" !== r || !m.selector) || (h.splice(c--, 1), m.selector && h.delegateCount--, !d.remove) || d.remove.call(e, m);
                        0 === h.length && u !== h.length && (d.teardown && !1 !== d.teardown.call(e, l) || N.removeEvent(e, a, g.handle), delete f[a])
                    } else
                        for (a in f) N.event.remove(e, a + t[o], n, r, !0);
                N.isEmptyObject(f) && ((p = g.handle) && (p.elem = null), N.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(e, t, n, r) {
            if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                var i, o, a, s, l, u, c, f, d, p = e.type || e,
                    h = [];
                if (!Xe.test(p + N.event.triggered) && (0 <= p.indexOf("!") && (p = p.slice(0, -1), u = !0), 0 <= p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), n && !N.event.customEvent[p] || N.event.global[p]))
                    if ((e = "object" == typeof e ? e[N.expando] ? e : new N.Event(p, e) : new N.Event(p)).type = p, e.isTrigger = !0, e.exclusive = u, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = p.indexOf(":") < 0 ? "on" + p : "", n) {
                        if (e.result = T, e.target || (e.target = n), (t = null != t ? N.makeArray(t) : []).unshift(e), !(u = N.event.special[p] || {}).trigger || !1 !== u.trigger.apply(n, t)) {
                            if (f = [
                                    [n, u.bindType || p]
                                ], !r && !u.noBubble && !N.isWindow(n)) {
                                for (d = u.delegateType || p, a = Xe.test(d + p) ? n : n.parentNode, s = null; a; a = a.parentNode) f.push([a, d]), s = a;
                                s && s === n.ownerDocument && f.push([s.defaultView || s.parentWindow || x, d])
                            }
                            for (o = 0; o < f.length && !e.isPropagationStopped(); o++) a = f[o][0], e.type = f[o][1], (c = (N._data(a, "events") || {})[e.type] && N._data(a, "handle")) && c.apply(a, t), (c = l && a[l]) && N.acceptData(a) && !1 === c.apply(a, t) && e.preventDefault();
                            return e.type = p, !(r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(n.ownerDocument, t) || "click" === p && N.nodeName(n, "a")) && N.acceptData(n) && l && n[p] && ("focus" !== p && "blur" !== p || 0 !== e.target.offsetWidth) && !N.isWindow(n) && ((s = n[l]) && (n[l] = null), n[N.event.triggered = p](), N.event.triggered = T, s) && (n[l] = s), e.result
                        }
                    } else
                        for (o in i = N.cache) i[o].events && i[o].events[p] && N.event.trigger(e, t, i[o].handle.elem, !0)
            }
        },
        dispatch: function(e) {
            e = N.event.fix(e || x.event);
            var t, n, r, i, o, a, s, l, u, c, f, d, p, h = (N._data(this, "events") || {})[e.type] || [],
                m = h.delegateCount,
                g = [].slice.call(arguments, 0),
                y = !e.exclusive && !e.namespace,
                v = N.event.special[e.type] || {},
                b = [];
            if ((g[0] = e).delegateTarget = this, !v.preDispatch || !1 !== v.preDispatch.call(this, e)) {
                if (m && (!e.button || "click" !== e.type))
                    for ((i = N(this)).context = this.ownerDocument || this, r = e.target; r != this; r = r.parentNode || this)
                        if (!0 !== r.disabled) {
                            for (a = {}, l = [], i[0] = r, t = 0; t < m; t++) a[c = (u = h[t]).selector] === T && (a[c] = u.quick ? (f = r, d = u.quick, p = void 0, p = f.attributes || {}, (!d[1] || f.nodeName.toLowerCase() === d[1]) && (!d[2] || (p.id || {}).value === d[2]) && (!d[3] || d[3].test((p.class || {}).value))) : i.is(c)), a[c] && l.push(u);
                            l.length && b.push({
                                elem: r,
                                matches: l
                            })
                        }
                for (h.length > m && b.push({
                        elem: this,
                        matches: h.slice(m)
                    }), t = 0; t < b.length && !e.isPropagationStopped(); t++)
                    for (s = b[t], e.currentTarget = s.elem, n = 0; n < s.matches.length && !e.isImmediatePropagationStopped(); n++) u = s.matches[n], (y || !e.namespace && !u.namespace || e.namespace_re && e.namespace_re.test(u.namespace)) && (e.data = u.data, e.handleObj = u, (o = ((N.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, g)) !== T) && !1 === (e.result = o) && (e.preventDefault(), e.stopPropagation());
                return v.postDispatch && v.postDispatch.call(this, e), e.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = (r = e.target.ownerDocument || b).documentElement, r = r.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || i === T || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[N.expando]) return e;
            var t, n, r = e,
                i = N.event.fixHooks[e.type] || {},
                o = i.props ? this.props.concat(i.props) : this.props;
            for (e = N.Event(r), t = o.length; t;) e[n = o[--t]] = r[n];
            return e.target || (e.target = r.srcElement || b), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === T && (e.metaKey = e.ctrlKey), i.filter ? i.filter(e, r) : e
        },
        special: {
            ready: {
                setup: N.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    N.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            e = N.extend(new N.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? N.event.trigger(e, null, t) : N.event.dispatch.call(t, e), e.isDefaultPrevented() && n.preventDefault()
        }
    }, N.event.handle = N.event.dispatch, N.removeEvent = b.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, N.Event = function(e, t) {
        if (!(this instanceof N.Event)) return new N.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? n : u) : this.type = e, t && N.extend(this, t), this.timeStamp = e && e.timeStamp || N.now(), this[N.expando] = !0
    }, N.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = n;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = n;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = n, this.stopPropagation()
        },
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u
    }, N.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, i) {
        N.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                r.selector;
                return n && (n === this || N.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), N.support.submitBubbles || (N.event.special.submit = {
        setup: function() {
            if (N.nodeName(this, "form")) return !1;
            N.event.add(this, "click._submit keypress._submit", function(e) {
                e = e.target, e = N.nodeName(e, "input") || N.nodeName(e, "button") ? e.form : T;
                e && !e._submit_attached && (N.event.add(e, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), e._submit_attached = !0)
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode) && !e.isTrigger && N.event.simulate("submit", this.parentNode, e, !0)
        },
        teardown: function() {
            if (N.nodeName(this, "form")) return !1;
            N.event.remove(this, "._submit")
        }
    }), N.support.changeBubbles || (N.event.special.change = {
        setup: function() {
            if (qe.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (N.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), N.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1, N.event.simulate("change", this, e, !0))
            })), !1;
            N.event.add(this, "beforeactivate._change", function(e) {
                e = e.target;
                qe.test(e.nodeName) && !e._change_attached && (N.event.add(e, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || N.event.simulate("change", this.parentNode, e, !0)
                }), e._change_attached = !0)
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return N.event.remove(this, "._change"), qe.test(this.nodeName)
        }
    }), N.support.focusinBubbles || N.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(e) {
            N.event.simulate(t, e.target, N.event.fix(e), !0)
        }
        var r = 0;
        N.event.special[t] = {
            setup: function() {
                0 == r++ && b.addEventListener(e, n, !0)
            },
            teardown: function() {
                0 == --r && b.removeEventListener(e, n, !0)
            }
        }
    }), N.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof t && (n = n || t, t = T), e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = T) : null == r && ("string" == typeof t ? (r = n, n = T) : (r = n, n = t, t = T)), !1 === r) r = u;
            else if (!r) return this;
            return 1 === i && (o = r, (r = function(e) {
                return N().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = N.guid++)), this.each(function() {
                N.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r;
            if (e && e.preventDefault && e.handleObj) r = e.handleObj, N(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            else {
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = T), !1 === n && (n = u), this.each(function() {
                    N.event.remove(this, e, n, t)
                });
                for (var i in e) this.off(i, t, e[i])
            }
            return this
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return N(this.context).on(e, this.selector, t, n), this
        },
        die: function(e, t) {
            return N(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                N.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0]) return N.event.trigger(e, t, this[0], !0)
        },
        toggle: function(n) {
            function e(e) {
                var t = (N._data(this, "lastToggle" + n.guid) || 0) % i;
                return N._data(this, "lastToggle" + n.guid, 1 + t), e.preventDefault(), r[t].apply(this, arguments) || !1
            }
            var r = arguments,
                t = n.guid || N.guid++,
                i = 0;
            for (e.guid = t; i < r.length;) r[i++].guid = t;
            return this.click(e)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), N.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        N.fn[n] = function(e, t) {
            return null == t && (t = e, e = null), 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }, N.attrFn && (N.attrFn[n] = !0), $e.test(n) && (N.event.fixHooks[n] = N.event.keyHooks), Re.test(n) && (N.event.fixHooks[n] = N.event.mouseHooks)
    });
    var p, Ye = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        h = "sizcache" + (Math.random() + "").replace(".", ""),
        Je = 0,
        Qe = Object.prototype.toString,
        m = !1,
        Ke = !0,
        g = /\\/g,
        Ze = /\r\n/g,
        et = /\W/,
        y = ([0, 0].sort(function() {
            return Ke = !1, 0
        }), function(e, t, n, r) {
            n = n || [];
            var i = t = t || b;
            if (1 !== t.nodeType && 9 !== t.nodeType) return [];
            if (e && "string" == typeof e) {
                var o, a, s, l, u, c, f, d, p = !0,
                    h = y.isXML(t),
                    m = [],
                    g = e;
                do {
                    if (Ye.exec(""), (o = Ye.exec(g)) && (g = o[3], m.push(o[1]), o[2])) {
                        l = o[3];
                        break
                    }
                } while (o);
                if (1 < m.length && nt.exec(e))
                    if (2 === m.length && v.relative[m[0]]) a = ft(m[0] + m[1], t, r);
                    else
                        for (a = v.relative[m[0]] ? [t] : y(m.shift(), t); m.length;) e = m.shift(), v.relative[e] && (e += m.shift()), a = ft(e, a, r);
                else if (t = !r && 1 < m.length && 9 === t.nodeType && !h && v.match.ID.test(m[0]) && !v.match.ID.test(m[m.length - 1]) ? ((u = y.find(m.shift(), t, h)).expr ? y.filter(u.expr, u.set) : u.set)[0] : t)
                    for (a = (u = r ? {
                            expr: m.pop(),
                            set: k(r)
                        } : y.find(m.pop(), 1 !== m.length || "~" !== m[0] && "+" !== m[0] || !t.parentNode ? t : t.parentNode, h)).expr ? y.filter(u.expr, u.set) : u.set, 0 < m.length ? s = k(a) : p = !1; m.length;) f = c = m.pop(), v.relative[c] ? f = m.pop() : c = "", null == f && (f = t), v.relative[c](s, f, h);
                else s = m = [];
                if ((s = s || a) || y.error(c || e), "[object Array]" === Qe.call(s))
                    if (p)
                        if (t && 1 === t.nodeType)
                            for (d = 0; null != s[d]; d++) s[d] && (!0 === s[d] || 1 === s[d].nodeType && y.contains(t, s[d])) && n.push(a[d]);
                        else
                            for (d = 0; null != s[d]; d++) s[d] && 1 === s[d].nodeType && n.push(a[d]);
                else n.push.apply(n, s);
                else k(s, n);
                l && (y(l, i, n, r), y.uniqueSort(n))
            }
            return n
        }),
        tt = (y.uniqueSort = function(e) {
            if (rt && (m = Ke, e.sort(rt), m))
                for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }, y.matches = function(e, t) {
            return y(e, null, null, t)
        }, y.matchesSelector = function(e, t) {
            return 0 < y(t, null, null, [e]).length
        }, y.find = function(e, t, n) {
            var r, i, o, a, s, l;
            if (!e) return [];
            for (i = 0, o = v.order.length; i < o; i++)
                if (s = v.order[i], (a = v.leftMatch[s].exec(e)) && (l = a[1], a.splice(1, 1), "\\" !== l.substr(l.length - 1)) && (a[1] = (a[1] || "").replace(g, ""), null != (r = v.find[s](a, t, n)))) {
                    e = e.replace(v.match[s], "");
                    break
                }
            return {
                set: r = r || (void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : []),
                expr: e
            }
        }, y.filter = function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, f, d, p = e, h = [], m = t, g = t && t[0] && y.isXML(t[0]); e && t.length;) {
                for (a in v.filter)
                    if (null != (i = v.leftMatch[a].exec(e)) && i[2]) {
                        if (u = v.filter[a], c = i[1], o = !1, i.splice(1, 1), "\\" === c.substr(c.length - 1)) continue;
                        if (m === h && (h = []), v.preFilter[a])
                            if (i = v.preFilter[a](i, m, n, h, r, g)) {
                                if (!0 === i) continue
                            } else o = s = !0;
                        if (i)
                            for (f = 0; null != (l = m[f]); f++) l && (d = r ^ (s = u(l, i, f, m)), n && null != s ? d ? o = !0 : m[f] = !1 : d && (h.push(l), o = !0));
                        if (s !== T) {
                            if (n || (m = h), e = e.replace(v.match[a], ""), o) break;
                            return []
                        }
                    }
                if (e === p) {
                    if (null != o) break;
                    y.error(e)
                }
                p = e
            }
            return m
        }, y.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, y.getText = function(e) {
            var t, n, r = e.nodeType,
                i = "";
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    if ("string" == typeof e.innerText) return e.innerText.replace(Ze, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += tt(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (i += tt(n));
            return i
        }),
        v = y.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                class: "className",
                for: "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(e, t) {
                    var n = "string" == typeof t,
                        r = n && !et.test(t),
                        i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var o, a = 0, s = e.length; a < s; a++)
                        if (o = e[a]) {
                            for (;
                                (o = o.previousSibling) && 1 !== o.nodeType;);
                            e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                        }
                    i && y.filter(t, e, !0)
                },
                ">": function(e, t) {
                    var n, r, i = "string" == typeof t,
                        o = 0,
                        a = e.length;
                    if (i && !et.test(t))
                        for (t = t.toLowerCase(); o < a; o++)(r = e[o]) && (n = r.parentNode, e[o] = n.nodeName.toLowerCase() === t && n);
                    else {
                        for (; o < a; o++)(r = e[o]) && (e[o] = i ? r.parentNode : r.parentNode === t);
                        i && y.filter(t, e, !0)
                    }
                },
                "": function(e, t, n) {
                    var r, i = Je++,
                        o = Ve;
                    "string" != typeof t || et.test(t) || (r = t = t.toLowerCase(), o = Ue), o("parentNode", t, i, e, r, n)
                },
                "~": function(e, t, n) {
                    var r, i = Je++,
                        o = Ve;
                    "string" != typeof t || et.test(t) || (r = t = t.toLowerCase(), o = Ue), o("previousSibling", t, i, e, r, n)
                }
            },
            find: {
                ID: function(e, t, n) {
                    if (void 0 !== t.getElementById && !n) return (n = t.getElementById(e[1])) && n.parentNode ? [n] : []
                },
                NAME: function(e, t) {
                    if (void 0 !== t.getElementsByName) {
                        for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; i < o; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return 0 === n.length ? null : n
                    }
                },
                TAG: function(e, t) {
                    if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function(e, t, n, r, i, o) {
                    if (e = " " + e[1].replace(g, "") + " ", o) return e;
                    for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && 0 <= (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e)) ? n || r.push(a) : n && (t[s] = !1));
                    return !1
                },
                ID: function(e) {
                    return e[1].replace(g, "")
                },
                TAG: function(e, t) {
                    return e[1].replace(g, "").toLowerCase()
                },
                CHILD: function(e) {
                    var t;
                    return "nth" === e[1] ? (e[2] || y.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, ""), t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(("even" === e[2] ? "2n" : "odd" === e[2] && "2n+1") || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]), e[2] = +(t[1] + (t[2] || 1)), e[3] = +t[3]) : e[2] && y.error(e[0]), e[0] = Je++, e
                },
                ATTR: function(e, t, n, r, i, o) {
                    var a = e[1] = e[1].replace(g, "");
                    return !o && v.attrMap[a] && (e[1] = v.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(g, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                },
                PSEUDO: function(e, t, n, r, i) {
                    if ("not" === e[1]) {
                        if (!(1 < (Ye.exec(e[3]) || "").length || /^\w/.test(e[3]))) return i = y.filter(e[3], t, n, !0 ^ i), n || r.push.apply(r, i), !1;
                        e[3] = y(e[3], null, null, t)
                    } else if (v.match.POS.test(e[0]) || v.match.CHILD.test(e[0])) return !0;
                    return e
                },
                POS: function(e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function(e) {
                    return !1 === e.disabled && "hidden" !== e.type
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    return !0 === e.checked
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                parent: function(e) {
                    return !!e.firstChild
                },
                empty: function(e) {
                    return !e.firstChild
                },
                has: function(e, t, n) {
                    return !!y(n[3], e).length
                },
                header: function(e) {
                    return /h\d/i.test(e.nodeName)
                },
                text: function(e) {
                    var t = e.getAttribute("type"),
                        n = e.type;
                    return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                },
                radio: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                },
                checkbox: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                },
                file: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "file" === e.type
                },
                password: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "password" === e.type
                },
                submit: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "submit" === e.type
                },
                image: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "image" === e.type
                },
                reset: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "reset" === e.type
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function(e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, t) {
                    return 0 === t
                },
                last: function(e, t, n, r) {
                    return t === r.length - 1
                },
                even: function(e, t) {
                    return t % 2 == 0
                },
                odd: function(e, t) {
                    return t % 2 == 1
                },
                lt: function(e, t, n) {
                    return t < +n[3]
                },
                gt: function(e, t, n) {
                    return t > +n[3]
                },
                nth: function(e, t, n) {
                    return +n[3] === t
                },
                eq: function(e, t, n) {
                    return +n[3] === t
                }
            },
            filter: {
                PSEUDO: function(e, t, n, r) {
                    var i = t[1],
                        o = v.filters[i];
                    if (o) return o(e, n, t, r);
                    if ("contains" === i) return 0 <= (e.textContent || e.innerText || tt([e]) || "").indexOf(t[3]);
                    if ("not" === i) {
                        for (var a = t[3], s = 0, l = a.length; s < l; s++)
                            if (a[s] === e) return !1;
                        return !0
                    }
                    y.error(i)
                },
                CHILD: function(e, t) {
                    var n, r, i, o, a, s = t[1],
                        l = e;
                    switch (s) {
                        case "only":
                        case "first":
                            for (; l = l.previousSibling;)
                                if (1 === l.nodeType) return !1;
                            if ("first" === s) return !0;
                            l = e;
                        case "last":
                            for (; l = l.nextSibling;)
                                if (1 === l.nodeType) return !1;
                            return !0;
                        case "nth":
                            if (n = t[2], r = t[3], 1 === n && 0 === r) return !0;
                            if (i = t[0], (a = e.parentNode) && (a[h] !== i || !e.nodeIndex)) {
                                for (o = 0, l = a.firstChild; l; l = l.nextSibling) 1 === l.nodeType && (l.nodeIndex = ++o);
                                a[h] = i
                            }
                            return a = e.nodeIndex - r, 0 === n ? 0 == a : a % n == 0 && 0 <= a / n
                    }
                },
                ID: function(e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t
                },
                TAG: function(e, t) {
                    return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                },
                CLASS: function(e, t) {
                    return -1 < (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t)
                },
                ATTR: function(e, t) {
                    var n = t[1],
                        e = y.attr ? y.attr(e, n) : v.attrHandle[n] ? v.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                        n = e + "",
                        r = t[2],
                        t = t[4];
                    return null == e ? "!=" === r : !r && y.attr ? null != e : "=" === r ? n === t : "*=" === r ? 0 <= n.indexOf(t) : "~=" === r ? 0 <= (" " + n + " ").indexOf(t) : t ? "!=" === r ? n !== t : "^=" === r ? 0 === n.indexOf(t) : "$=" === r ? n.substr(n.length - t.length) === t : "|=" === r && (n === t || n.substr(0, t.length + 1) === t + "-") : n && !1 !== e
                },
                POS: function(e, t, n, r) {
                    var i = t[2],
                        i = v.setFilters[i];
                    if (i) return i(e, n, t, r)
                }
            }
        },
        nt = v.match.POS;
    for (p in v.match) v.match[p] = new RegExp(v.match[p].source + /(?![^\[]*\])(?![^\(]*\))/.source), v.leftMatch[p] = new RegExp(/(^(?:.|\r|\n)*?)/.source + v.match[p].source.replace(/\\(\d+)/g, Ge));
    v.match.globalPOS = nt;
    var rt, C, E, k = function(e, t) {
        return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
    };
    try {
        Array.prototype.slice.call(b.documentElement.childNodes, 0)[0].nodeType
    } catch (e) {
        k = function(e, t) {
            var n = 0,
                r = t || [];
            if ("[object Array]" === Qe.call(e)) Array.prototype.push.apply(r, e);
            else if ("number" == typeof e.length)
                for (var i = e.length; n < i; n++) r.push(e[n]);
            else
                for (; e[n]; n++) r.push(e[n]);
            return r
        }
    }
    if (b.documentElement.compareDocumentPosition ? rt = function(e, t) {
            return e === t ? (m = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : (rt = function(e, t) {
            if (e === t) return m = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n = [],
                r = [],
                i = e.parentNode,
                o = t.parentNode,
                a = i;
            if (i === o) return C(e, t);
            if (!i) return -1;
            if (!o) return 1;
            for (; a;) n.unshift(a), a = a.parentNode;
            for (a = o; a;) r.unshift(a), a = a.parentNode;
            for (var s = n.length, l = r.length, u = 0; u < s && u < l; u++)
                if (n[u] !== r[u]) return C(n[u], r[u]);
            return u === s ? C(e, r[u], -1) : C(n[u], t, 1)
        }, C = function(e, t, n) {
            if (e === t) return n;
            for (var r = e.nextSibling; r;) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }), e = b.createElement("div"), E = "script" + (new Date).getTime(), S = b.documentElement, e.innerHTML = "<a name='" + E + "'/>", S.insertBefore(e, S.firstChild), b.getElementById(E) && (v.find.ID = function(e, t, n) {
            if (void 0 !== t.getElementById && !n) return (n = t.getElementById(e[1])) ? n.id === e[1] || void 0 !== n.getAttributeNode && n.getAttributeNode("id").nodeValue === e[1] ? [n] : T : []
        }, v.filter.ID = function(e, t) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return 1 === e.nodeType && n && n.nodeValue === t
        }), S.removeChild(e), (E = b.createElement("div")).appendChild(b.createComment("")), 0 < E.getElementsByTagName("*").length && (v.find.TAG = function(e, t) {
            var n = t.getElementsByTagName(e[1]);
            if ("*" === e[1]) {
                for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                n = r
            }
            return n
        }), E.innerHTML = "<a href='#'></a>", E.firstChild && void 0 !== E.firstChild.getAttribute && "#" !== E.firstChild.getAttribute("href") && (v.attrHandle.href = function(e) {
            return e.getAttribute("href", 2)
        }), b.querySelectorAll) {
        var it = y,
            S = b.createElement("div");
        if (S.innerHTML = "<p class='TEST'></p>", !S.querySelectorAll || 0 !== S.querySelectorAll(".TEST").length)
            for (var ot in y = function(e, t, n, r) {
                    if (t = t || b, !r && !y.isXML(t)) {
                        var i = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
                        if (i && (1 === t.nodeType || 9 === t.nodeType)) {
                            if (i[1]) return k(t.getElementsByTagName(e), n);
                            if (i[2] && v.find.CLASS && t.getElementsByClassName) return k(t.getElementsByClassName(i[2]), n)
                        }
                        if (9 === t.nodeType) {
                            if ("body" === e && t.body) return k([t.body], n);
                            if (i && i[3]) {
                                var o = t.getElementById(i[3]);
                                if (!o || !o.parentNode) return k([], n);
                                if (o.id === i[3]) return k([o], n)
                            }
                            try {
                                return k(t.querySelectorAll(e), n)
                            } catch (e) {}
                        } else if (1 === t.nodeType && "object" !== t.nodeName.toLowerCase()) {
                            var i = t,
                                o = t.getAttribute("id"),
                                a = o || "__sizzle__",
                                s = t.parentNode,
                                l = /^\s*[+~]/.test(e);
                            o ? a = a.replace(/'/g, "\\$&") : t.setAttribute("id", a), l && s && (t = t.parentNode);
                            try {
                                if (!l || s) return k(t.querySelectorAll("[id='" + a + "'] " + e), n)
                            } catch (e) {} finally {
                                o || i.removeAttribute("id")
                            }
                        }
                    }
                    return it(e, t, n, r)
                }, it) y[ot] = it[ot]
    }
    var e = b.documentElement,
        at = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
    if (at) {
        var st = !at.call(b.createElement("div"), "div"),
            lt = !1;
        try {
            at.call(b.documentElement, "[test!='']:sizzle")
        } catch (e) {
            lt = !0
        }
        y.matchesSelector = function(e, t) {
            if (t = t.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !y.isXML(e)) try {
                if (lt || !v.match.PSEUDO.test(t) && !/!=/.test(t)) {
                    var n = at.call(e, t);
                    if (n || !st || e.document && 11 !== e.document.nodeType) return n
                }
            } catch (e) {}
            return 0 < y(t, null, null, [e]).length
        }
    }(E = b.createElement("div")).innerHTML = "<div class='test e'></div><div class='test'></div>", E.getElementsByClassName && 0 !== E.getElementsByClassName("e").length && (E.lastChild.className = "e", 1 !== E.getElementsByClassName("e").length) && (v.order.splice(1, 0, "CLASS"), v.find.CLASS = function(e, t, n) {
        if (void 0 !== t.getElementsByClassName && !n) return t.getElementsByClassName(e[1])
    }), b.documentElement.contains ? y.contains = function(e, t) {
        return e !== t && (!e.contains || e.contains(t))
    } : b.documentElement.compareDocumentPosition ? y.contains = function(e, t) {
        return !!(16 & e.compareDocumentPosition(t))
    } : y.contains = function() {
        return !1
    }, y.isXML = function(e) {
        e = (e ? e.ownerDocument || e : 0).documentElement;
        return !!e && "HTML" !== e.nodeName
    };
    var A, ut, ct, L, D, ft = function(e, t, n) {
            for (var r, i = [], o = "", a = t.nodeType ? [t] : t; r = v.match.PSEUDO.exec(e);) o += r[0], e = e.replace(v.match.PSEUDO, "");
            e = v.relative[e] ? e + "*" : e;
            for (var s = 0, l = a.length; s < l; s++) y(e, a[s], i, n);
            return y.filter(o, i)
        },
        dt = (y.attr = N.attr, y.selectors.attrMap = {}, N.find = y, N.expr = y.selectors, N.expr[":"] = N.expr.filters, N.unique = y.uniqueSort, N.text = y.getText, N.isXMLDoc = y.isXML, N.contains = y.contains, /Until$/),
        pt = /^(?:parents|prevUntil|prevAll)/,
        ht = /,/,
        mt = /^.[^:#\[\.,]*$/,
        gt = Array.prototype.slice,
        yt = N.expr.match.globalPOS,
        vt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        },
        bt = (N.fn.extend({
            find: function(e) {
                var t = this;
                if ("string" != typeof e) return N(e).filter(function() {
                    for (a = 0, s = t.length; a < s; a++)
                        if (N.contains(t[a], this)) return !0
                });
                for (var n, r, i, o = this.pushStack("", "find", e), a = 0, s = this.length; a < s; a++)
                    if (n = o.length, N.find(e, this[a], o), 0 < a)
                        for (r = n; r < o.length; r++)
                            for (i = 0; i < n; i++)
                                if (o[i] === o[r]) {
                                    o.splice(r--, 1);
                                    break
                                }
                return o
            },
            has: function(e) {
                var n = N(e);
                return this.filter(function() {
                    for (var e = 0, t = n.length; e < t; e++)
                        if (N.contains(this, n[e])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(Y(this, e, !1), "not", e)
            },
            filter: function(e) {
                return this.pushStack(Y(this, e, !0), "filter", e)
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? yt.test(e) ? 0 <= N(e, this.context).index(this[0]) : 0 < N.filter(e, this).length : 0 < this.filter(e).length)
            },
            closest: function(e, t) {
                var n = [],
                    r = this[0];
                if (N.isArray(e)) {
                    for (var i = 1; r && r.ownerDocument && r !== t;) {
                        for (a = 0; a < e.length; a++) N(r).is(e[a]) && n.push({
                            selector: e[a],
                            elem: r,
                            level: i
                        });
                        r = r.parentNode, i++
                    }
                    return n
                }
                for (var o = yt.test(e) || "string" != typeof e ? N(e, t || this.context) : 0, a = 0, s = this.length; a < s; a++)
                    for (r = this[a]; r;) {
                        if (o ? -1 < o.index(r) : N.find.matchesSelector(r, e)) {
                            n.push(r);
                            break
                        }
                        if (!(r = r.parentNode) || !r.ownerDocument || r === t || 11 === r.nodeType) break
                    }
                return n = 1 < n.length ? N.unique(n) : n, this.pushStack(n, "closest", e)
            },
            index: function(e) {
                return e ? "string" == typeof e ? N.inArray(this[0], N(e)) : N.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(e, t) {
                t = "string" == typeof e ? N(e, t) : N.makeArray(e && e.nodeType ? [e] : e), e = N.merge(this.get(), t);
                return this.pushStack(J(t[0]) || J(e[0]) ? e : N.unique(e))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }), N.each({
            parent: function(e) {
                e = e.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(e) {
                return N.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return N.dir(e, "parentNode", n)
            },
            next: function(e) {
                return N.nth(e, 2, "nextSibling")
            },
            prev: function(e) {
                return N.nth(e, 2, "previousSibling")
            },
            nextAll: function(e) {
                return N.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return N.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return N.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return N.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return N.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return N.sibling(e.firstChild)
            },
            contents: function(e) {
                return N.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : N.makeArray(e.childNodes)
            }
        }, function(r, i) {
            N.fn[r] = function(e, t) {
                var n = N.map(this, i, e);
                return (t = dt.test(r) ? t : e) && "string" == typeof t && (n = N.filter(t, n)), n = 1 < this.length && !vt[r] ? N.unique(n) : n, (1 < this.length || ht.test(t)) && pt.test(r) && (n = n.reverse()), this.pushStack(n, r, gt.call(arguments).join(","))
            }
        }), N.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? N.find.matchesSelector(t[0], e) ? [t[0]] : [] : N.find.matches(e, t)
            },
            dir: function(e, t, n) {
                for (var r = [], i = e[t]; i && 9 !== i.nodeType && (n === T || 1 !== i.nodeType || !N(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
                return r
            },
            nth: function(e, t, n, r) {
                t = t || 1;
                for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
                return e
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"),
        xt = / jQuery\d+="(?:\d+|null)"/g,
        Tt = /^\s+/,
        wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Nt = /<([\w:]+)/,
        Ct = /<tbody/i,
        Et = /<|&#?\w+;/,
        kt = /<(?:script|style)/i,
        St = /<(?:script|object|embed|option|style)/i,
        At = new RegExp("<(?:" + bt + ")[\\s/>]", "i"),
        Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /\/(java|ecma)script/i,
        jt = /^\s*<!(?:\[CDATA\[|\-\-)/,
        j = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ft = G(b),
        Mt = (j.optgroup = j.option, j.tbody = j.tfoot = j.colgroup = j.caption = j.thead, j.th = j.td, N.support.htmlSerialize || (j._default = [1, "div<div>", "</div>"]), N.fn.extend({
            text: function(e) {
                return N.access(this, function(e) {
                    return e === T ? N.text(this) : this.empty().append((this[0] && this[0].ownerDocument || b).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(t) {
                var e;
                return N.isFunction(t) ? this.each(function(e) {
                    N(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = N(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(n) {
                return N.isFunction(n) ? this.each(function(e) {
                    N(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = N(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = N.isFunction(t);
                return this.each(function(e) {
                    N(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    N.nodeName(this, "body") || N(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    1 === this.nodeType && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    1 === this.nodeType && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                var e;
                return this[0] && this[0].parentNode ? this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                }) : arguments.length ? ((e = N.clean(arguments)).push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)) : void 0
            },
            after: function() {
                var e;
                return this[0] && this[0].parentNode ? this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }) : arguments.length ? ((e = this.pushStack(this, "after", arguments)).push.apply(e, N.clean(arguments)), e) : void 0
            },
            remove: function(e, t) {
                for (var n, r = 0; null != (n = this[r]); r++) e && !N.filter(e, [n]).length || (t || 1 !== n.nodeType || (N.cleanData(n.getElementsByTagName("*")), N.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    for (1 === e.nodeType && N.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return N.clone(this, e, t)
                })
            },
            html: function(e) {
                return N.access(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === T) return 1 === t.nodeType ? t.innerHTML.replace(xt, "") : null;
                    if ("string" == typeof e && !kt.test(e) && (N.support.leadingWhitespace || !Tt.test(e)) && !j[(Nt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(wt, "<$1></$2>");
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (N.cleanData(t.getElementsByTagName("*")), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(r) {
                return this[0] && this[0].parentNode ? N.isFunction(r) ? this.each(function(e) {
                    var t = N(this),
                        n = t.html();
                    t.replaceWith(r.call(this, e, n))
                }) : ("string" != typeof r && (r = N(r).detach()), this.each(function() {
                    var e = this.nextSibling,
                        t = this.parentNode;
                    N(this).remove(), e ? N(e).before(r) : N(t).append(r)
                })) : this.length ? this.pushStack(N(N.isFunction(r) ? r() : r), "replaceWith", r) : this
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(n, r, i) {
                var e, t, o, a, s = n[0],
                    l = [];
                if (!N.support.checkClone && 3 === arguments.length && "string" == typeof s && Lt.test(s)) return this.each(function() {
                    N(this).domManip(n, r, i, !0)
                });
                if (N.isFunction(s)) return this.each(function(e) {
                    var t = N(this);
                    n[0] = s.call(this, e, r ? t.html() : T), t.domManip(n, r, i)
                });
                if (this[0]) {
                    if (o = s && s.parentNode, o = 1 === (t = (e = N.support.parentNode && o && 11 === o.nodeType && o.childNodes.length === this.length ? {
                            fragment: o
                        } : N.buildFragment(n, this, l)).fragment).childNodes.length ? t = t.firstChild : t.firstChild) {
                        r = r && N.nodeName(o, "tr");
                        for (var u = 0, c = this.length, f = c - 1; u < c; u++) i.call(r ? (a = this[u], N.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a) : this[u], e.cacheable || 1 < c && u < f ? N.clone(t, !0, !0) : t)
                    }
                    l.length && N.each(l, function(e, t) {
                        t.src ? N.ajax({
                            type: "GET",
                            global: !1,
                            url: t.src,
                            async: !1,
                            dataType: "script"
                        }) : N.globalEval((t.text || t.textContent || t.innerHTML || "").replace(jt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), N.buildFragment = function(e, t, n) {
            var r, i, o, a, s = e[0];
            return (a = t && t[0] ? t[0].ownerDocument || t[0] : a).createDocumentFragment || (a = b), (r = !(1 === e.length && "string" == typeof s && s.length < 512 && a === b && "<" === s.charAt(0)) || St.test(s) || !N.support.checkClone && Lt.test(s) || !N.support.html5Clone && At.test(s) || (i = !0, !(o = N.fragments[s])) || 1 === o ? r : o) || (r = a.createDocumentFragment(), N.clean(e, a, r, n)), i && (N.fragments[s] = o ? r : 1), {
                fragment: r,
                cacheable: i
            }
        }, N.fragments = {}, N.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, s) {
            N.fn[a] = function(e) {
                var t = [],
                    n = N(e),
                    e = 1 === this.length && this[0].parentNode;
                if (e && 11 === e.nodeType && 1 === e.childNodes.length && 1 === n.length) return n[s](this[0]), this;
                for (var r = 0, i = n.length; r < i; r++) {
                    var o = (0 < r ? this.clone(!0) : this).get();
                    N(n[r])[s](o), t = t.concat(o)
                }
                return this.pushStack(t, a, n.selector)
            }
        }), N.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s = N.support.html5Clone || N.isXMLDoc(e) || !At.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : (s = e, a = b.createElement("div"), Ft.appendChild(a), a.innerHTML = s.outerHTML, a.firstChild);
                if (!(N.support.noCloneEvent && N.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || N.isXMLDoc(e)))
                    for (V(e, s), r = l(e), i = l(s), o = 0; r[o]; ++o) i[o] && V(r[o], i[o]);
                if (t && (U(e, s), n))
                    for (r = l(e), i = l(s), o = 0; r[o]; ++o) U(r[o], i[o]);
                return r = i = null, s
            },
            clean: function(e, t, n, r) {
                var i, o = [];
                void 0 === (t = t || b).createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || b);
                for (var a, s = 0; null != (l = e[s]); s++)
                    if ("number" == typeof l && (l += ""), l) {
                        if ("string" == typeof l)
                            if (Et.test(l)) {
                                var l = l.replace(wt, "<$1></$2>"),
                                    u = (Nt.exec(l) || ["", ""])[1].toLowerCase(),
                                    c = j[u] || j._default,
                                    f = c[0],
                                    d = t.createElement("div"),
                                    p = Ft.childNodes;
                                for ((t === b ? Ft : G(t)).appendChild(d), d.innerHTML = c[1] + l + c[2]; f--;) d = d.lastChild;
                                if (!N.support.tbody)
                                    for (var h = Ct.test(l), m = "table" !== u || h ? "<table>" !== c[1] || h ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, g = m.length - 1; 0 <= g; --g) N.nodeName(m[g], "tbody") && !m[g].childNodes.length && m[g].parentNode.removeChild(m[g]);
                                !N.support.leadingWhitespace && Tt.test(l) && d.insertBefore(t.createTextNode(Tt.exec(l)[0]), d.firstChild), l = d.childNodes, d && (d.parentNode.removeChild(d), 0 < p.length) && (u = p[p.length - 1]) && u.parentNode && u.parentNode.removeChild(u)
                            } else l = t.createTextNode(l);
                        if (!N.support.appendChecked)
                            if (l[0] && "number" == typeof(a = l.length))
                                for (g = 0; g < a; g++) X(l[g]);
                            else X(l);
                        l.nodeType ? o.push(l) : o = N.merge(o, l)
                    }
                if (n)
                    for (i = function(e) {
                            return !e.type || Dt.test(e.type)
                        }, s = 0; o[s]; s++) {
                        var y, v = o[s];
                        r && N.nodeName(v, "script") && (!v.type || Dt.test(v.type)) ? r.push(v.parentNode ? v.parentNode.removeChild(v) : v) : (1 === v.nodeType && (y = N.grep(v.getElementsByTagName("script"), i), o.splice.apply(o, [s + 1, 0].concat(y))), n.appendChild(v))
                    }
                return o
            },
            cleanData: function(e) {
                for (var t, n, r, i = N.cache, o = N.event.special, a = N.support.deleteExpando, s = 0; null != (r = e[s]); s++)
                    if ((!r.nodeName || !N.noData[r.nodeName.toLowerCase()]) && (n = r[N.expando])) {
                        if ((t = i[n]) && t.events) {
                            for (var l in t.events) o[l] ? N.event.remove(r, l) : N.removeEvent(r, l, t.handle);
                            t.handle && (t.handle.elem = null)
                        }
                        a ? delete r[N.expando] : r.removeAttribute && r.removeAttribute(N.expando), delete i[n]
                    }
            }
        }), /alpha\([^)]*\)/i),
        _t = /opacity=([^)]*)/,
        Ht = /([A-Z]|^ms)/g,
        Ot = /^[\-+]?(?:\d*\.)?\d+$/i,
        Bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        Pt = /^([\-+])=([\-+.\de]+)/,
        qt = /^margin/,
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        F = ["Top", "Right", "Bottom", "Left"],
        It = (N.fn.css = function(e, t) {
            return N.access(this, function(e, t, n) {
                return n !== T ? N.style(e, t, n) : N.css(e, t)
            }, e, t, 1 < arguments.length)
        }, N.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        return t ? "" === (t = A(e, "opacity")) ? "1" : t : e.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: N.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o = N.camelCase(t),
                        a = e.style,
                        s = N.cssHooks[o];
                    if (t = N.cssProps[o] || o, n === T) return s && "get" in s && (i = s.get(e, !1, r)) !== T ? i : a[t];
                    if ("string" === (r = typeof n) && (i = Pt.exec(n)) && (n = +(i[1] + 1) * +i[2] + parseFloat(N.css(e, t)), r = "number"), !(null == n || "number" === r && isNaN(n)) && ("number" !== r || N.cssNumber[o] || (n += "px"), !(s && "set" in s && (n = s.set(e, n)) === T))) try {
                        a[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n) {
                var r;
                return t = N.camelCase(t), r = N.cssHooks[t], "cssFloat" === (t = N.cssProps[t] || t) && (t = "float"), r && "get" in r && (r = r.get(e, !0, n)) !== T ? r : A ? A(e, t) : void 0
            },
            swap: function(e, t, n) {
                var r, i = {};
                for (r in t) i[r] = e.style[r], e.style[r] = t[r];
                for (r in n = n.call(e), t) e.style[r] = i[r];
                return n
            }
        }), N.curCSS = N.css, b.defaultView && b.defaultView.getComputedStyle && (ut = function(e, t) {
            var n, r, i, o = e.style;
            return t = t.replace(Ht, "-$1").toLowerCase(), (i = e.ownerDocument.defaultView) && (r = i.getComputedStyle(e, null)) && "" === (n = r.getPropertyValue(t)) && !N.contains(e.ownerDocument.documentElement, e) && (n = N.style(e, t)), !N.support.pixelMargin && r && qt.test(t) && Bt.test(n) && (i = o.width, o.width = n, n = r.width, o.width = i), n
        }), b.documentElement.currentStyle && (ct = function(e, t) {
            var n, r, i = e.currentStyle && e.currentStyle[t],
                o = e.style;
            return null == i && o && (r = o[t]) && (i = r), Bt.test(i) && (r = o.left, (n = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = r, n) && (e.runtimeStyle.left = n), "" === i ? "auto" : i
        }), A = ut || ct, N.each(["height", "width"], function(e, r) {
            N.cssHooks[r] = {
                get: function(e, t, n) {
                    if (t) return 0 !== e.offsetWidth ? R(e, r, n) : N.swap(e, Wt, function() {
                        return R(e, r, n)
                    })
                },
                set: function(e, t) {
                    return Ot.test(t) ? t + "px" : t
                }
            }
        }), N.support.opacity || (N.cssHooks.opacity = {
            get: function(e, t) {
                return _t.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    e = e.currentStyle,
                    r = N.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    i = e && e.filter || n.filter || "";
                (n.zoom = 1) <= t && "" === N.trim(i.replace(Mt, "")) && (n.removeAttribute("filter"), e) && !e.filter || (n.filter = Mt.test(i) ? i.replace(Mt, r) : i + " " + r)
            }
        }), N(function() {
            N.support.reliableMarginRight || (N.cssHooks.marginRight = {
                get: function(e, t) {
                    return N.swap(e, {
                        display: "inline-block"
                    }, function() {
                        return t ? A(e, "margin-right") : e.style.marginRight
                    })
                }
            })
        }), N.expr && N.expr.filters && (N.expr.filters.hidden = function(e) {
            var t = e.offsetWidth,
                n = e.offsetHeight;
            return 0 === t && 0 === n || !N.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || N.css(e, "display"))
        }, N.expr.filters.visible = function(e) {
            return !N.expr.filters.hidden(e)
        }), N.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            N.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = "string" == typeof e ? e.split(" ") : [e], n = {}, r = 0; r < 4; r++) n[i + F[r] + o] = t[r] || t[r - 2] || t[0];
                    return n
                }
            }
        }), /%20/g),
        $t = /\[\]$/,
        Rt = /\r?\n/g,
        Xt = /#.*$/,
        zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ut = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Yt = /\?/,
        Jt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Qt = /^(?:select|textarea)/i,
        Kt = /\s+/,
        Zt = /([?&])_=[^&]*/,
        en = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        tn = N.fn.load,
        nn = {},
        rn = {},
        on = ["*/"] + ["*"];
    try {
        L = we.href
    } catch (e) {
        (L = b.createElement("a")).href = "", L = L.href
    }
    D = en.exec(L.toLowerCase()) || [], N.fn.extend({
        load: function(e, t, r) {
            var i, n, o;
            return "string" != typeof e && tn ? tn.apply(this, arguments) : (this.length && (0 <= (n = e.indexOf(" ")) && (i = e.slice(n, e.length), e = e.slice(0, n)), n = "GET", t && (N.isFunction(t) ? (r = t, t = T) : "object" == typeof t && (t = N.param(t, N.ajaxSettings.traditional), n = "POST")), o = this, N.ajax({
                url: e,
                type: n,
                dataType: "html",
                data: t,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e
                    }), o.html(i ? N("<div>").append(n.replace(Jt, "")).find(i) : n)), r && o.each(r, [n, t, e])
                }
            })), this)
        },
        serialize: function() {
            return N.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? N.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Qt.test(this.nodeName) || Vt.test(this.type))
            }).map(function(e, n) {
                var t = N(this).val();
                return null == t ? null : N.isArray(t) ? N.map(t, function(e, t) {
                    return {
                        name: n.name,
                        value: e.replace(Rt, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: t.replace(Rt, "\r\n")
                }
            }).get()
        }
    }), N.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        N.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), N.each(["get", "post"], function(e, i) {
        N[i] = function(e, t, n, r) {
            return N.isFunction(t) && (r = r || n, n = t, t = T), N.ajax({
                type: i,
                url: e,
                data: t,
                success: n,
                dataType: r
            })
        }
    }), N.extend({
        getScript: function(e, t) {
            return N.get(e, T, t, "script")
        },
        getJSON: function(e, t, n) {
            return N.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? I(e, N.ajaxSettings) : (t = e, e = N.ajaxSettings), I(e, t), e
        },
        ajaxSettings: {
            url: L,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(D[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": on
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": x.String,
                "text html": !0,
                "text json": N.parseJSON,
                "text xml": N.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: $(nn),
        ajaxTransport: $(rn),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                if (2 !== b) {
                    b = 2, f && clearTimeout(f), c = T, u = r || "", x.readyState = 0 < e ? 4 : 0;
                    var i, o, a, s, r = t,
                        n = n ? function(e, t, n) {
                            var r, i, o, a, s = e.contents,
                                l = e.dataTypes,
                                u = e.responseFields;
                            for (i in u) i in n && (t[u[i]] = n[i]);
                            for (;
                                "*" === l[0];) l.shift(), r === T && (r = e.mimeType || t.getResponseHeader("content-type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        l.unshift(i);
                                        break
                                    }
                            if (l[0] in n) o = l[0];
                            else {
                                for (i in n) {
                                    if (!l[0] || e.converters[i + " " + l[0]]) {
                                        o = i;
                                        break
                                    }
                                    a = a || i
                                }
                                o = o || a
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(p, x, n) : T;
                    if (200 <= e && e < 300 || 304 === e)
                        if (p.ifModified && ((s = x.getResponseHeader("Last-Modified")) && (N.lastModified[l] = s), s = x.getResponseHeader("Etag")) && (N.etag[l] = s), 304 === e) r = "notmodified", i = !0;
                        else try {
                            o = function(e, t) {
                                e.dataFilter && (t = e.dataFilter(t, e.dataType));
                                for (var n, r, i, o, a, s, l, u = e.dataTypes, c = {}, f = u.length, d = u[0], p = 1; p < f; p++) {
                                    if (1 === p)
                                        for (n in e.converters) "string" == typeof n && (c[n.toLowerCase()] = e.converters[n]);
                                    if (i = d, "*" === (d = u[p])) d = i;
                                    else if ("*" !== i && i !== d) {
                                        if (!(a = c[o = i + " " + d] || c["* " + d]))
                                            for (s in l = T, c)
                                                if (((r = s.split(" "))[0] === i || "*" === r[0]) && (l = c[r[1] + " " + d])) {
                                                    !0 === (s = c[s]) ? a = l : !0 === l && (a = s);
                                                    break
                                                }
                                        a || l || N.error("No conversion from " + o.replace(" ", " to ")), !0 !== a && (t = a ? a(t) : l(s(t)))
                                    }
                                }
                                return t
                            }(p, n), r = "success", i = !0
                        } catch (e) {
                            r = "parsererror", a = e
                        } else(a = r) && !e || (r = "error", e < 0 && (e = 0));
                    x.status = e, x.statusText = "" + (t || r), i ? g.resolveWith(h, [o, r, x]) : g.rejectWith(h, [x, r, a]), x.statusCode(v), v = T, d && m.trigger("ajax" + (i ? "Success" : "Error"), [x, p, i ? o : a]), y.fireWith(h, [x, r]), d && (m.trigger("ajaxComplete", [x, p]), --N.active || N.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (t = e, e = T);
            var l, u, r, c, f, d, i, o, p = N.ajaxSetup({}, t = t || {}),
                h = p.context || p,
                m = h !== p && (h.nodeType || h instanceof N) ? N(h) : N.event,
                g = N.Deferred(),
                y = N.Callbacks("once memory"),
                v = p.statusCode || {},
                a = {},
                s = {},
                b = 0,
                x = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        var n;
                        return b || (n = e.toLowerCase(), e = s[n] = s[n] || e, a[e] = t), this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? u : null
                    },
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!r)
                                for (r = {}; t = zt.exec(u);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return t === T ? null : t
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || "abort", c && c.abort(e), n(0, e), this
                    }
                };
            if (g.promise(x), x.success = x.done, x.error = x.fail, x.complete = y.add, x.statusCode = function(e) {
                    if (e)
                        if (b < 2)
                            for (var t in e) v[t] = [v[t], e[t]];
                        else t = e[x.status], x.then(t, t);
                    return this
                }, p.url = ((e || p.url) + "").replace(Xt, "").replace(Gt, D[1] + "//"), p.dataTypes = N.trim(p.dataType || "*").toLowerCase().split(Kt), null == p.crossDomain && (e = en.exec(p.url.toLowerCase()), p.crossDomain = !(!e || e[1] == D[1] && e[2] == D[2] && (e[3] || ("http:" === e[1] ? 80 : 443)) == (D[3] || ("http:" === D[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = N.param(p.data, p.traditional)), w(nn, p, t, x), 2 === b) return !1;
            for (i in d = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Ut.test(p.type), d && 0 == N.active++ && N.event.trigger("ajaxStart"), p.hasContent || (p.data && (p.url += (Yt.test(p.url) ? "&" : "?") + p.data, delete p.data), l = p.url, !1 === p.cache && (e = N.now(), o = p.url.replace(Zt, "$1_=" + e), p.url = o + (o === p.url ? (Yt.test(p.url) ? "&" : "?") + "_=" + e : ""))), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && x.setRequestHeader("Content-Type", p.contentType), p.ifModified && (l = l || p.url, N.lastModified[l] && x.setRequestHeader("If-Modified-Since", N.lastModified[l]), N.etag[l]) && x.setRequestHeader("If-None-Match", N.etag[l]), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + on + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, x, p) || 2 === b)) return x.abort(), !1;
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](p[i]);
            if (c = w(rn, p, t, x)) {
                x.readyState = 1, d && m.trigger("ajaxSend", [x, p]), p.async && 0 < p.timeout && (f = setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, c.send(a, n)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return x
        },
        param: function(e, t) {
            function n(e, t) {
                t = N.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }
            var r = [];
            if (t === T && (t = N.ajaxSettings.traditional), N.isArray(e) || e.jquery && !N.isPlainObject(e)) N.each(e, function() {
                n(this.name, this.value)
            });
            else
                for (var i in e) ! function n(r, e, i, o) {
                    if (N.isArray(e)) N.each(e, function(e, t) {
                        i || $t.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
                    });
                    else if (i || "object" !== N.type(e)) o(r, e);
                    else
                        for (var t in e) n(r + "[" + t + "]", e[t], i, o)
                }(i, e[i], t, n);
            return r.join("&").replace(It, "+")
        }
    }), N.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var M, _, H, an, sn, ln = N.now(),
        un = /(\=)\?(&|$)|\?\?/i,
        cn = (N.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return N.expando + "_" + ln++
            }
        }), N.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, a, s, l, u = "string" == typeof e.data && /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
            if ("jsonp" === e.dataTypes[0] || !1 !== e.jsonp && (un.test(e.url) || u && un.test(e.data))) return i = e.jsonpCallback = N.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o = x[i], a = e.url, s = e.data, l = "$1" + i + "$2", !1 !== e.jsonp && (a = a.replace(un, l), e.url === a) && (u && (s = s.replace(un, l)), e.data === s) && (a += (/\?/.test(a) ? "&" : "?") + e.jsonp + "=" + i), e.url = a, e.data = s, x[i] = function(e) {
                r = [e]
            }, n.always(function() {
                x[i] = o, r && N.isFunction(o) && x[i](r[0])
            }), e.converters["script json"] = function() {
                return r || N.error(i + " was not called"), r[0]
            }, e.dataTypes[0] = "json", "script"
        }), N.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(e) {
                    return N.globalEval(e), e
                }
            }
        }), N.ajaxPrefilter("script", function(e) {
            e.cache === T && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), N.ajaxTransport("script", function(t) {
            var r, i;
            if (t.crossDomain) return i = b.head || b.getElementsByTagName("head")[0] || b.documentElement, {
                send: function(e, n) {
                    (r = b.createElement("script")).async = "async", t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function(e, t) {
                        !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, i && r.parentNode && i.removeChild(r), r = T, t) || n(200, "success")
                    }, i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(0, 1)
                }
            }
        }), !!x.ActiveXObject && function() {
            for (var e in M) M[e](0, 1)
        }),
        fn = 0,
        dn = (N.ajaxSettings.xhr = x.ActiveXObject ? function() {
            return !this.isLocal && W() || function() {
                try {
                    return new x.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }()
        } : W, S = N.ajaxSettings.xhr(), N.extend(N.support, {
            ajax: !!S,
            cors: !!S && "withCredentials" in S
        }), N.support.ajax && N.ajaxTransport(function(c) {
            var f;
            if (!c.crossDomain || N.support.cors) return {
                send: function(e, s) {
                    var l, t, u = c.xhr();
                    if (c.username ? u.open(c.type, c.url, c.async, c.username, c.password) : u.open(c.type, c.url, c.async), c.xhrFields)
                        for (t in c.xhrFields) u[t] = c.xhrFields[t];
                    c.mimeType && u.overrideMimeType && u.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (t in e) u.setRequestHeader(t, e[t])
                    } catch (e) {}
                    u.send(c.hasContent && c.data || null), f = function(e, t) {
                        var n, r, i, o, a;
                        try {
                            if (f && (t || 4 === u.readyState))
                                if (f = T, l && (u.onreadystatechange = N.noop, cn) && delete M[l], t) 4 !== u.readyState && u.abort();
                                else {
                                    n = u.status, i = u.getAllResponseHeaders(), o = {}, (a = u.responseXML) && a.documentElement && (o.xml = a);
                                    try {
                                        o.text = u.responseText
                                    } catch (e) {}
                                    try {
                                        r = u.statusText
                                    } catch (e) {
                                        r = ""
                                    }
                                    n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                                }
                        } catch (e) {
                            t || s(-1, e)
                        }
                        o && s(n, r, o, i)
                    }, c.async && 4 !== u.readyState ? (l = ++fn, cn && (M || (M = {}, N(x).unload(cn)), M[l] = f), u.onreadystatechange = f) : f()
                },
                abort: function() {
                    f && f(0, 1)
                }
            }
        }), {}),
        pn = /^(?:toggle|show|hide)$/,
        hn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        mn = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    N.fn.extend({
        show: function(e, t, n) {
            var r, i;
            if (e || 0 === e) return this.animate(s("show", 3), e, t, n);
            for (var o = 0, a = this.length; o < a; o++)(r = this[o]).style && (i = r.style.display, "" === (i = N._data(r, "olddisplay") || "none" !== i ? i : r.style.display = "") && "none" === N.css(r, "display") || !N.contains(r.ownerDocument.documentElement, r)) && N._data(r, "olddisplay", B(r.nodeName));
            for (o = 0; o < a; o++) !(r = this[o]).style || "" !== (i = r.style.display) && "none" !== i || (r.style.display = N._data(r, "olddisplay") || "");
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e) return this.animate(s("hide", 3), e, t, n);
            for (var r, i, o = 0, a = this.length; o < a; o++)(r = this[o]).style && "none" !== (i = N.css(r, "display")) && !N._data(r, "olddisplay") && N._data(r, "olddisplay", i);
            for (o = 0; o < a; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: N.fn.toggle,
        toggle: function(t, e, n) {
            var r = "boolean" == typeof t;
            return N.isFunction(t) && N.isFunction(e) ? this._toggle.apply(this, arguments) : null == t || r ? this.each(function() {
                var e = r ? t : N(this).is(":hidden");
                N(this)[e ? "show" : "hide"]()
            }) : this.animate(s("toggle", 3), t, e, n), this
        },
        fadeTo: function(e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(p, e, t, n) {
            function r() {
                !1 === h.queue && N._mark(this);
                var e, t, n, r, i, o, a, s, l, u, c = N.extend({}, h),
                    f = 1 === this.nodeType,
                    d = f && N(this).is(":hidden");
                for (n in c.animatedProperties = {}, p)
                    if (n !== (e = N.camelCase(n)) && (p[e] = p[n], delete p[n]), (i = N.cssHooks[e]) && "expand" in i)
                        for (n in o = i.expand(p[e]), delete p[e], o) n in p || (p[n] = o[n]);
                for (e in p) {
                    if (t = p[e], N.isArray(t) ? (c.animatedProperties[e] = t[1], t = p[e] = t[0]) : c.animatedProperties[e] = c.specialEasing && c.specialEasing[e] || c.easing || "swing", "hide" === t && d || "show" === t && !d) return c.complete.call(this);
                    !f || "height" !== e && "width" !== e || (c.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" !== N.css(this, "display")) || "none" !== N.css(this, "float") || (N.support.inlineBlockNeedsLayout && "inline" !== B(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block")
                }
                for (n in null != c.overflow && (this.style.overflow = "hidden"), p) r = new N.fx(this, c, n), t = p[n], pn.test(t) ? (u = N._data(this, "toggle" + n) || ("toggle" === t ? d ? "show" : "hide" : 0), u ? (N._data(this, "toggle" + n, "show" === u ? "hide" : "show"), r[u]()) : r[t]()) : (u = hn.exec(t), a = r.cur(), u ? (s = parseFloat(u[2]), l = u[3] || (N.cssNumber[n] ? "" : "px"), "px" !== l && (N.style(this, n, (s || 1) + l), a = (s || 1) / r.cur() * a, N.style(this, n, a + l)), u[1] && (s = ("-=" === u[1] ? -1 : 1) * s + a), r.custom(a, s, l)) : r.custom(a, t, ""));
                return !0
            }
            var h = N.speed(e, t, n);
            return N.isEmptyObject(p) ? this.each(h.complete, [!1]) : (p = N.extend({}, p), !1 === h.queue ? this.each(r) : this.queue(h.queue, r))
        },
        stop: function(o, e, a) {
            return "string" != typeof o && (a = e, e = o, o = T), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                function e(e, t, n) {
                    t = t[n];
                    N.removeData(e, n, !0), t.stop(a)
                }
                var t, n = !1,
                    r = N.timers,
                    i = N._data(this);
                if (a || N._unmark(!0, this), null == o)
                    for (t in i) i[t] && i[t].stop && t.indexOf(".run") === t.length - 4 && e(this, i, t);
                else i[t = o + ".run"] && i[t].stop && e(this, i, t);
                for (t = r.length; t--;) r[t].elem !== this || null != o && r[t].queue !== o || (a ? r[t](!0) : r[t].saveState(), n = !0, r.splice(t, 1));
                a && n || N.dequeue(this, o)
            })
        }
    }), N.each({
        slideDown: s("show", 1),
        slideUp: s("hide", 1),
        slideToggle: s("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        N.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), N.extend({
        speed: function(e, t, n) {
            var r = e && "object" == typeof e ? N.extend({}, e) : {
                complete: n || !n && t || N.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !N.isFunction(t) && t
            };
            return r.duration = N.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in N.fx.speeds ? N.fx.speeds[r.duration] : N.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function(e) {
                N.isFunction(r.old) && r.old.call(this), r.queue ? N.dequeue(this, r.queue) : !1 !== e && N._unmark(this)
            }, r
        },
        easing: {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), N.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (N.fx.step[this.prop] || N.fx.step._default)(this)
        },
        cur: function() {
            var e, t;
            return null == this.elem[this.prop] || this.elem.style && null != this.elem.style[this.prop] ? (t = N.css(this.elem, this.prop), isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e) : this.elem[this.prop]
        },
        custom: function(e, t, n) {
            function r(e) {
                return i.step(e)
            }
            var i = this,
                o = N.fx;
            this.startTime = sn || q(), this.end = t, this.now = this.start = e, this.pos = this.state = 0, this.unit = n || this.unit || (N.cssNumber[this.prop] ? "" : "px"), r.queue = this.options.queue, r.elem = this.elem, r.saveState = function() {
                N._data(i.elem, "fxshow" + i.prop) === T && (i.options.hide ? N._data(i.elem, "fxshow" + i.prop, i.start) : i.options.show && N._data(i.elem, "fxshow" + i.prop, i.end))
            }, r() && N.timers.push(r) && !an && (an = setInterval(o.tick, o.interval))
        },
        show: function() {
            var e = N._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || N.style(this.elem, this.prop), this.options.show = !0, e !== T ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), N(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = N._data(this.elem, "fxshow" + this.prop) || N.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n = sn || q(),
                r = !0,
                i = this.elem,
                o = this.options;
            if (e || n >= o.duration + this.startTime) {
                for (t in this.now = this.end, this.pos = this.state = 1, this.update(), o.animatedProperties[this.prop] = !0, o.animatedProperties) !0 !== o.animatedProperties[t] && (r = !1);
                if (r) {
                    if (null == o.overflow || N.support.shrinkWrapBlocks || N.each(["", "X", "Y"], function(e, t) {
                            i.style["overflow" + t] = o.overflow[e]
                        }), o.hide && N(i).hide(), o.hide || o.show)
                        for (t in o.animatedProperties) N.style(i, t, o.orig[t]), N.removeData(i, "fxshow" + t, !0), N.removeData(i, "toggle" + t, !0);
                    (e = o.complete) && (o.complete = !1, e.call(i))
                }
                return !1
            }
            return o.duration == 1 / 0 ? this.now = n : (e = n - this.startTime, this.state = e / o.duration, this.pos = N.easing[o.animatedProperties[this.prop]](this.state, e, 0, 1, o.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, N.extend(N.fx, {
        tick: function() {
            for (var e, t = N.timers, n = 0; n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || N.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(an), an = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                N.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), N.each(mn.concat.apply([], mn), function(e, t) {
        t.indexOf("margin") && (N.fx.step[t] = function(e) {
            N.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }), N.expr && N.expr.filters && (N.expr.filters.animated = function(t) {
        return N.grep(N.timers, function(e) {
            return t === e.elem
        }).length
    });
    var gn = /^t(?:able|d|h)$/i,
        yn = /^(?:body|html)$/i,
        vn = "getBoundingClientRect" in b.documentElement ? function(e, t, n, r) {
            try {
                r = e.getBoundingClientRect()
            } catch (e) {}
            var i, o, a;
            return r && N.contains(n, e) ? (e = t.body, t = O(t), i = n.clientTop || e.clientTop || 0, o = n.clientLeft || e.clientLeft || 0, a = t.pageYOffset || N.support.boxModel && n.scrollTop || e.scrollTop, t = t.pageXOffset || N.support.boxModel && n.scrollLeft || e.scrollLeft, {
                top: r.top + a - i,
                left: r.left + t - o
            }) : r ? {
                top: r.top,
                left: r.left
            } : {
                top: 0,
                left: 0
            }
        } : function(e, t, n) {
            for (var r, i = e.offsetParent, o = t.body, a = t.defaultView, s = a ? a.getComputedStyle(e, null) : e.currentStyle, l = e.offsetTop, u = e.offsetLeft;
                (e = e.parentNode) && e !== o && e !== n && (!N.support.fixedPosition || "fixed" !== s.position);) r = a ? a.getComputedStyle(e, null) : e.currentStyle, l -= e.scrollTop, u -= e.scrollLeft, e === i && (l += e.offsetTop, u += e.offsetLeft, !N.support.doesNotAddBorder || N.support.doesAddBorderForTableAndCells && gn.test(e.nodeName) || (l += parseFloat(r.borderTopWidth) || 0, u += parseFloat(r.borderLeftWidth) || 0), i = e.offsetParent), N.support.subtractsBorderForOverflowNotVisible && "visible" !== r.overflow && (l += parseFloat(r.borderTopWidth) || 0, u += parseFloat(r.borderLeftWidth) || 0), s = r;
            return "relative" !== s.position && "static" !== s.position || (l += o.offsetTop, u += o.offsetLeft), N.support.fixedPosition && "fixed" === s.position && (l += Math.max(n.scrollTop, o.scrollTop), u += Math.max(n.scrollLeft, o.scrollLeft)), {
                top: l,
                left: u
            }
        };
    N.fn.offset = function(t) {
        var e, n;
        return arguments.length ? t === T ? this : this.each(function(e) {
            N.offset.setOffset(this, t, e)
        }) : (n = (e = this[0]) && e.ownerDocument) ? e === n.body ? N.offset.bodyOffset(e) : vn(e, n, n.documentElement) : null
    }, N.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return N.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(N.css(e, "marginTop")) || 0, n += parseFloat(N.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r, i = N.css(e, "position"),
                o = ("static" === i && (e.style.position = "relative"), N(e)),
                a = o.offset(),
                s = N.css(e, "top"),
                l = N.css(e, "left"),
                u = {},
                i = ("absolute" === i || "fixed" === i) && -1 < N.inArray("auto", [s, l]) ? (r = (i = o.position()).top, i.left) : (r = parseFloat(s) || 0, parseFloat(l) || 0);
            null != (t = N.isFunction(t) ? t.call(e, n, a) : t).top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + i), "using" in t ? t.using.call(e, u) : o.css(u)
        }
    }, N.fn.extend({
        position: function() {
            var e, t, n, r;
            return this[0] ? (e = this[0], t = this.offsetParent(), n = this.offset(), r = yn.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset(), n.top -= parseFloat(N.css(e, "marginTop")) || 0, n.left -= parseFloat(N.css(e, "marginLeft")) || 0, r.top += parseFloat(N.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(N.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }) : null
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || b.body; e && !yn.test(e.nodeName) && "static" === N.css(e, "position");) e = e.offsetParent;
                return e
            })
        }
    }), N.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        N.fn[t] = function(e) {
            return N.access(this, function(e, t, n) {
                var r = O(e);
                if (n === T) return r ? i in r ? r[i] : N.support.boxModel && r.document.documentElement[t] || r.document.body[t] : e[t];
                r ? r.scrollTo(o ? N(r).scrollLeft() : n, o ? n : N(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), N.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        var o = "client" + e,
            a = "scroll" + e,
            s = "offset" + e;
        N.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(N.css(e, n, "padding")) : this[n]() : null
        }, N.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(N.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }, N.fn[n] = function(e) {
            return N.access(this, function(e, t, n) {
                var r, i;
                return N.isWindow(e) ? (r = (i = e.document).documentElement[o], N.support.boxModel && r || i.body && i.body[o] || r) : 9 === e.nodeType ? (i = e.documentElement)[o] >= i[a] ? i[o] : Math.max(e.body[a], i[a], e.body[s], i[s]) : n === T ? (r = N.css(e, t), i = parseFloat(r), N.isNumeric(i) ? i : r) : void N(e).css(t, n)
            }, n, e, arguments.length, null)
        }
    }), x.jQuery = x.$ = N, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return N
    })
}(window);