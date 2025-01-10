! function(i, e) {
    var t = "modal-open",
        o = "modal-backdrop",
        n = "data-modal-close",
        s = "data-modal-open";

    function r(e, t) {
        this._element = e, this._defaults = i.fn.modal.defaults, this.options = i.extend({}, this._defaults, t), this.init()
    }
    i.extend(r.prototype, {
        init: function() {
            this.buildCache(), this.initBackDrop(), this.bindEvents()
        },
        destroy: function() {
            this.unbindEvents(), this.$element.removeData()
        },
        buildCache: function() {
            this.$element = i(this._element), this.$closeButtons = this.$element.find("*[" + n + "]"), this.$openButtons = i("[" + s + "]")
        },
        bindEvents: function() {
            var e = this;
            this.trigger(), this.$backdrop.on("mousedown", function() {
                e.hide()
            }), this.$closeButtons.on("click", function() {
                e.hide()
            })
        },
        unbindEvents: function() {
            this.$openButtons.off("click"), this.$backdrop.off("mousedown"), this.$closeButtons.off("click")
        },
        trigger: function() {
            var e = this._element.id,
                t = this;
            this.$openButtons.each(function() {
                i(this).attr(s) === e && i(this).on("click", function() {
                    t.show()
                })
            })
        },
        show: function() {
            this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this.$backdrop.addClass("show"), e.body.classList.add(t), this.callback()
        },
        hide: function() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this.$backdrop.removeClass("show"), e.body.classList.remove(t), this.callback()
        },
        callback: function() {
            var e = this.options.onComplete;
            "function" == typeof e && e.call(this._element)
        },
        initBackDrop: function() {
            i(o).length || (this.$backdrop = i("<div>", {
                class: o
            }), this.$element.prepend(this.$backdrop))
        }
    }), i.fn.modal = function(e) {
        return this.each(function() {
            i.data(this, "plugin_modal") || i.data(this, "plugin_modal", new r(this, e))
        }), this
    }, i.fn.modal.defaults = {
        property: "value",
        onComplete: null
    }
}(jQuery, (window, document)),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var o, r = window.Slick || {};
    o = 0, (r = function(e, t) {
        var i = this;
        i.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, i.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, e = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, e), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
        var o = this;
        if ("boolean" == typeof t) i = t, t = null;
        else if (t < 0 || t >= o.slideCount) return !1;
        o.unload(), "number" == typeof t ? 0 === t && 0 === o.$slides.length ? c(e).appendTo(o.$slideTrack) : i ? c(e).insertBefore(o.$slides.eq(t)) : c(e).insertAfter(o.$slides.eq(t)) : !0 === i ? c(e).prependTo(o.$slideTrack) : c(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.animateHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.animate({
            height: e
        }, t.options.speed))
    }, r.prototype.animateSlide = function(e, t) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, t) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, t) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), c({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate(" + e + "px, 0px)" : i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i)
            },
            complete: function() {
                t && t.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(i), t && setTimeout(function() {
            o.disableTransition(), t.call()
        }, o.options.speed))
    }, r.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e = e && null !== e ? c(e).not(this.$slider) : e
    }, r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, r.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(i)
    }, r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0) && (e.direction = 1)), e.slideHandler(t))
    }, r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, r.prototype.buildRows = function() {
        var e, t, i, o = this,
            n = document.createDocumentFragment(),
            s = o.$slider.children();
        if (0 < o.options.rows) {
            for (i = o.options.slidesPerRow * o.options.rows, t = Math.ceil(s.length / i), e = 0; e < t; e++) {
                for (var r = document.createElement("div"), a = 0; a < o.options.rows; a++) {
                    for (var l = document.createElement("div"), c = 0; c < o.options.slidesPerRow; c++) {
                        var d = e * i + (a * o.options.slidesPerRow + c);
                        s.get(d) && l.appendChild(s.get(d))
                    }
                    r.appendChild(l)
                }
                n.appendChild(r)
            }
            o.$slider.empty().append(n), o.$slider.children().children().children().css({
                width: 100 / o.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function(e, t) {
        var i, o, n, s = this,
            r = !1,
            a = s.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === s.respondTo ? n = l : "slider" === s.respondTo ? n = a : "min" === s.respondTo && (n = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? n < s.breakpoints[i] && (o = s.breakpoints[i]) : n > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint && o === s.activeBreakpoint && !t || (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = o), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
        }
    }, r.prototype.changeSlide = function(e, t) {
        var i, o = this,
            n = c(e.currentTarget);
        switch (n.is("a") && e.preventDefault(), n.is("li") || (n = n.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 == i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 == i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, t);
                break;
            case "index":
                var s = 0 === e.data.index ? 0 : e.data.index || n.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(s), !1, t), n.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function(e) {
        var t = this.getNavigableIndexes(),
            i = 0;
        if (e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = i;
                    break
                }
                i = t[o]
            }
        return e
    }, r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility) && e.$dots.off("keydown.slick", e.keyHandler), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility) && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow) && e.$nextArrow.off("keydown.slick", e.keyHandler), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, r.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, r.prototype.cleanUpRows = function() {
        var e;
        0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow)) && t.$prevArrow.remove(), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow)) && t.$nextArrow.remove(), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, r.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    }, r.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, r.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(e) {
            var t = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && t.is(":focus") && (i.focussed = !0, i.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function(e) {
            c(this);
            i.options.pauseOnFocus && (i.focussed = !1, i.autoPlay())
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, r.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            o = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++o;
            else
                for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) o = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return o - 1
    }, r.prototype.getLeft = function(e) {
        var t, i, o = this,
            n = 0;
        return o.slideOffset = 0, t = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, i = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? i = -1.5 : 1 === o.options.slidesToShow && (i = -2)), n = t * o.options.slidesToShow * i), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (n = e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (e - o.slideCount)) * t * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * t * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, n = (e + o.options.slidesToShow - o.slideCount) * t), o.slideCount <= o.options.slidesToShow && (n = o.slideOffset = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), i = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * t * -1 + n, !0 === o.options.variableWidth && (t = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), i = !0 === o.options.rtl ? t[0] ? -1 * (o.$slideTrack.width() - t[0].offsetLeft - t.width()) : 0 : t[0] ? -1 * t[0].offsetLeft : 0, !0 === o.options.centerMode) && (t = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), i = !0 === o.options.rtl ? t[0] ? -1 * (o.$slideTrack.width() - t[0].offsetLeft - t.width()) : 0 : t[0] ? -1 * t[0].offsetLeft : 0, i += (o.$list.width() - t.outerWidth()) / 2), i
    }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, r.prototype.getNavigableIndexes = function() {
        for (var e = this, t = 0, i = 0, o = [], n = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < n;) o.push(t), t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, r.prototype.getSlick = function() {
        return this
    }, r.prototype.getSlideCount = function() {
        var n, s = this,
            e = !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0,
            r = -1 * s.swipeLeft + e;
        return !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(e, t) {
            var i = c(t).outerWidth(),
                o = t.offsetLeft;
            if (!0 !== s.options.centerMode && (o += i / 2), r < o + i) return n = t, !1
        }), Math.abs(c(n).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, r.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, r.prototype.initADA = function() {
        var i = this,
            o = Math.ceil(i.slideCount / i.options.slidesToShow),
            n = i.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = n.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + i.instanceUid + e,
                tabindex: -1
            }), -1 !== t && (e = "slick-slide-control" + i.instanceUid + t, c("#" + e).length) && c(this).attr({
                "aria-describedby": e
            })
        }), i.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = n[e];
            c(this).attr({
                role: "presentation"
            }), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + e,
                "aria-controls": "slick-slide" + i.instanceUid + t,
                "aria-label": e + 1 + " of " + o,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.options.focusOnChange ? i.$slides.eq(e).attr({
            tabindex: "0"
        }) : i.$slides.eq(e).removeAttr("tabindex");
        i.activateADA()
    }, r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility) && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler))
    }, r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility) && e.$dots.on("keydown.slick", e.keyHandler), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, r.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }, r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
    }, r.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, r.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function() {
        var e, t, i, s = this;

        function o(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this),
                    t = c(this).attr("data-lazy"),
                    i = c(this).attr("data-srcset"),
                    o = c(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (e.attr("srcset", i), o) && e.attr("sizes", o), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, t])
                    })
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t])
                }, n.src = t
            })
        }
        if (!0 === s.options.centerMode ? i = !0 === s.options.infinite ? (t = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (t = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (t = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, i = Math.ceil(t + s.options.slidesToShow), !0 === s.options.fade && (0 < t && t--, i <= s.slideCount) && i++), e = s.$slider.find(".slick-slide").slice(t, i), "anticipated" === s.options.lazyLoad)
            for (var n = t - 1, r = i, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) n < 0 && (n = s.slideCount - 1), e = (e = e.add(a.eq(n))).add(a.eq(r)), n--, r++;
        o(e), s.slideCount <= s.options.slidesToShow ? o(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? o(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && o(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, r.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, r.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange) && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus())
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, o, n, s = this,
            r = c("img[data-lazy]", s.$slider);
        r.length ? (t = r.first(), i = t.attr("data-lazy"), o = t.attr("data-srcset"), n = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            o && (t.attr("srcset", o), n) && t.attr("sizes", n), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, i]), s.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i]), s.progressiveLazyLoad())
        }, r.src = i) : s.$slider.trigger("allImagesLoaded", [s])
    }, r.prototype.refresh = function(e) {
        var t = this,
            i = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > i && (t.currentSlide = i), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), i = t.currentSlide, t.destroy(!0), c.extend(t, t.initials, {
            currentSlide: i
        }), t.init(), e || t.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function() {
        var e, t, i, o = this,
            n = o.options.responsive || null;
        if ("array" === c.type(n) && n.length) {
            for (e in o.respondTo = o.options.respondTo || "window", n)
                if (i = o.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; 0 <= i;) o.breakpoints[i] && o.breakpoints[i] === t && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(t), o.breakpointSettings[t] = n[e].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, r.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
        var o = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
        o.unload(), (!0 === i ? o.$slideTrack.children() : o.$slideTrack.children(this.options.slide).eq(e)).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.setCSS = function(e) {
        var t, i, o = this,
            n = {};
        !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", n[o.positionProp] = e, !1 !== o.transformsEnabled && (!(n = {}) === o.cssTransitions ? n[o.animType] = "translate(" + t + ", " + i + ")" : n[o.animType] = "translate3d(" + t + ", " + i + ", 0px)"), o.$slideTrack.css(n)
    }, r.prototype.setDimensions = function() {
        var e = this,
            t = (!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))), e.$slides.first().outerWidth(!0) - e.$slides.first().width());
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, r.prototype.setFade = function() {
        var i, o = this;
        o.$slides.each(function(e, t) {
            i = o.slideWidth * e * -1, !0 === o.options.rtl ? c(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.css("height", e))
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var e, t, i, o, n, s = this,
            r = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0], r = arguments[1], n = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) s.options[i] = o;
        else if ("multiple" === n) c.each(i, function(e, t) {
            s.options[e] = t
        });
        else if ("responsive" === n)
            for (t in o)
                if ("array" !== c.type(s.options.responsive)) s.options.responsive = [o[t]];
                else {
                    for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === o[t].breakpoint && s.options.responsive.splice(e, 1), e--;
                    s.options.responsive.push(o[t])
                }
        r && (s.unload(), s.reinit())
    }, r.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, r.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty) && void 0 === t.MozPerspective && (e.animType = !1), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform) && (e.animType = !1), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, r.prototype.setSlideClasses = function(e) {
        var t, i, o, n = this,
            s = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode ? (i = n.options.slidesToShow % 2 == 0 ? 1 : 0, o = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && ((o <= e && e <= n.slideCount - 1 - o ? n.$slides.slice(e - o + i, e + o + 1) : (t = n.options.slidesToShow + e, s.slice(t - o + 1 + i, t + o + 2))).addClass("slick-active").attr("aria-hidden", "false"), 0 === e ? s.eq(n.options.slidesToShow + n.slideCount + 1).addClass("slick-center") : e === n.slideCount - 1 && s.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : (0 <= e && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow) : s.length <= n.options.slidesToShow ? s : (i = n.slideCount % n.options.slidesToShow, t = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? s.slice(t - (n.options.slidesToShow - i), t + i) : s.slice(t, t + n.options.slidesToShow))).addClass("slick-active").attr("aria-hidden", "false"), "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, r.prototype.setupInfinite = function() {
        var e, t, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (t = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - i; --e) c(o.$slides[t = e - 1]).clone(!0).attr("id", "").attr("data-slick-index", t - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i + o.slideCount; e += 1) t = e, c(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, r.prototype.selectHandler = function(e) {
        e = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"), e = (e = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
    }, r.prototype.slideHandler = function(e, t, i) {
        var o, n, s, r = this;
        t = t || !1, !0 === r.animating && !0 === r.options.waitForAnimate || !0 === r.options.fade && r.currentSlide === e || (!1 === t && r.asNavFor(e), o = e, t = r.getLeft(o), s = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? s : r.swipeLeft, !1 === r.options.infinite && !1 === r.options.centerMode && (e < 0 || e > r.getDotCount() * r.options.slidesToScroll) || !1 === r.options.infinite && !0 === r.options.centerMode && (e < 0 || e > r.slideCount - r.options.slidesToScroll) ? !1 === r.options.fade && (o = r.currentSlide, !0 !== i && r.slideCount > r.options.slidesToShow ? r.animateSlide(s, function() {
            r.postSlide(o)
        }) : r.postSlide(o)) : (r.options.autoplay && clearInterval(r.autoPlayTimer), n = o < 0 ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + o : o >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : o - r.slideCount : o, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, n]), e = r.currentSlide, r.currentSlide = n, r.setSlideClasses(r.currentSlide), r.options.asNavFor && (s = (s = r.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), !0 === r.options.fade ? (!0 !== i ? (r.fadeSlideOut(e), r.fadeSlide(n, function() {
            r.postSlide(n)
        })) : r.postSlide(n), r.animateHeight()) : !0 !== i && r.slideCount > r.options.slidesToShow ? r.animateSlide(t, function() {
            r.postSlide(n)
        }) : r.postSlide(n)))
    }, r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function() {
        var e = this,
            t = e.touchObject.startX - e.touchObject.curX,
            i = e.touchObject.startY - e.touchObject.curY,
            i = Math.atan2(i, t),
            t = Math.round(180 * i / Math.PI);
        return (t = t < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function(e) {
        var t, i, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1;
        if (o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (i = o.swipeDirection()) {
                case "left":
                case "down":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != i && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, r.prototype.swipeMove = function(e) {
        var t, i, o = this,
            n = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!o.dragging || o.scrolling || n && 1 !== n.length) && (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, o.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2))), !o.options.verticalSwiping && !o.swiping && 4 < n ? !(o.scrolling = !0) : (!0 === o.options.verticalSwiping && (o.touchObject.swipeLength = n), n = o.swipeDirection(), void 0 !== e.originalEvent && 4 < o.touchObject.swipeLength && (o.swiping = !0, e.preventDefault()), e = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (e = o.touchObject.curY > o.touchObject.startY ? 1 : -1), i = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === n || o.currentSlide >= o.getDotCount() && "left" === n) && (i = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = t + i * e : o.swipeLeft = t + i * (o.$list.height() / o.listWidth) * e, !0 === o.options.verticalSwiping && (o.swipeLeft = t + i * e), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))))
    }, r.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2);
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function() {
        for (var e, t = this, i = arguments[0], o = Array.prototype.slice.call(arguments, 1), n = t.length, s = 0; s < n; s++)
            if ("object" == typeof i || void 0 === i ? t[s].slick = new r(t[s], i) : e = t[s].slick[i].apply(t[s].slick, o), void 0 !== e) return e;
        return t
    }
}),
function(i) {
    var o = {
        ajaxPostUrl: "ajax/save_product_rating.php",
        classNameResult: "product_rating_message",
        classNameSubmit: "product_rating_submit",
        classNameText: "product_rating_input",
        classNameStars: "product_rating_stars"
    };

    function t(e, t) {
        this._element = e, this._defaults = o, this.options = i.extend({}, this._defaults, t), this.init()
    }
    i.extend(t.prototype, {
        init: function() {
            this.buildCache(), this.bindEvents()
        },
        destroy: function() {
            this.unbindEvents()
        },
        buildCache: function() {
            this.$element = i(this._element), this.$result = this.$element.find("." + this.options.classNameResult), this.$submit = this.$element.find("." + this.options.classNameSubmit), this.$text = this.$element.find("." + this.options.classNameText), this.$label = this.$text.next(), this.$stars = this.$element.find("." + this.options.classNameStars), this.$icon = i("<i>")
        },
        bindEvents: function() {
            const t = this;
            this.$element.on("submit", function(e) {
                t.submit(e)
            })
        },
        unbindEvents: function() {
            this.$element.off("submit")
        },
        submit: function(e) {
            e.preventDefault();
            var o = this,
                e = new FormData(this._element);
            i.ajax({
                type: "POST",
                url: this.options.ajaxPostUrl,
                data: e,
                processData: !1,
                contentType: !1
            }).done(function(e) {
                o.successMessage(e.message)
            }).fail(function(e, t, i) {
                e = JSON.parse(e.responseText);
                o.$result.html(e.message).removeClass("success").addClass("error").prepend(o.$icon)
            })
        },
        successMessage: function(e) {
            this.$submit.remove(), this.$text.remove(), this.$label.remove(), this.$stars.addClass("disabled"), this.$result.html(e).removeClass("error").addClass("success").prepend(this.$icon)
        }
    }), i.fn.ratingForm = function(e) {
        return this.each(function() {
            i.data(this, "plugin_ratingForm") || i.data(this, "plugin_ratingForm", new t(this, e))
        }), this
    }, i.fn.ratingForm.defaults = {
        property: "value",
        onComplete: null
    }
}(jQuery, (window, document));
var none_swipe_interval_down, recognition, ShoppingCart = new function() {
        this.first_visible_row = 1, this.row_count = 0, this.timeout = null, this.last_push_timestamp = 0, this.generateScrollContainerForHeaderShoppingCart = function() {
            if (this.row_count = $(".compact_shopping_cart > tbody > tr.header_shopping_cart_row").length, 3 < this.row_count) {
                $(".compact_shopping_cart").before('<div id="header_shopping_cart_scroll_up" onclick="ShoppingCart.scrollHeaderShoppingCartUp();" /><div id="header_shopping_cart_divider_1" class="arrow_line" style="margin:0 5px;"> </div>'), $("#header_shopping_cart_divider_2").after('<div id="header_shopping_cart_scroll_down" onclick="ShoppingCart.scrollHeaderShoppingCartDown();"/>');
                for (var e = 4; e <= this.row_count; e++) $("#header_shopping_cart_row_" + e).hide()
            }
        }, this.scrollHeaderShoppingCartUp = function() {
            1 < this.first_visible_row && ($("#header_shopping_cart_row_" + (this.first_visible_row - 1)).show(), $("#header_shopping_cart_row_" + (this.first_visible_row + 2)).hide(), this.first_visible_row--)
        }, this.scrollHeaderShoppingCartDown = function() {
            $("#header_shopping_cart_row_" + (this.first_visible_row + 3)).length && ($("#header_shopping_cart_row_" + this.first_visible_row).hide(), $("#header_shopping_cart_row_" + (this.first_visible_row + 3)).show(), this.first_visible_row++)
        }, this.getHoverContentForHeaderShoppingCart = function() {
            var t = (new Date).getTime();
            $.ajax({
                url: "ajax/manage_shopping_cart.php",
                type: "GET",
                data: "",
                success: function(e) {
                    "" != e && "" != (e = JSON.parse(e)).cart_content_html && t > ShoppingCart.last_push_timestamp && (ShoppingCart.last_push_timestamp = t, ShoppingCart.changeHeaderInfos(e.products_in_order, e.order_total_amount), $("#header_shopping_cart_hover").html(e.cart_content_html), "function" == typeof initAmazon && initAmazon(), ShoppingCart.generateScrollContainerForHeaderShoppingCart(), -1 == window.location.href.indexOf("action=add_multiple_products") && -1 == window.location.href.indexOf("action=set_multiple_products") || -1 == window.location.href.indexOf("products=") || ShoppingCart.StartToShowShoppingCart())
                }
            })
        }, this.StartToShowShoppingCart = function() {
            $("#header_shopping_cart_hover").stop().slideDown("slow"), $("#header_shopping_cart").removeClass("hovered").addClass("hovered"), $("html, body").animate({
                scrollTop: 0
            }, "slow"), "ontouchstart" in window && ($("#header").css({
                zIndex: "99",
                position: "relative",
                background: "#FFF"
            }), $("#content_cover").show()), ShoppingCart.timeout = setTimeout(function() {
                $("#header_shopping_cart_hover").slideUp("slow"), $("#header_shopping_cart").removeClass("hovered"), "ontouchstart" in window && $("#content_cover").hide(), clearTimeout(ShoppingCart.timeout)
            }, 2500)
        }, this.addCartItem = function(e, t, i, o, n) {
            let s = "";
            ShoppingCart.timeout && clearTimeout(ShoppingCart.timeout);
            var r = (new Date).getTime();
            if (void 0 === i && (i = 2), void 0 === n) try {
                var a = new URL(window.location.href).searchParams.get("queryID");
                null !== a && (s = "&algolia_query_id=" + a)
            } catch (e) {
                console.error(e)
            } else s = "&algolia_query_id=" + n;
            $("body").append('<div id="add_to_cart_overlay_wait_box" class="add_to_cart_overlay_wait_box"><div class="add_to_cart_overlay_wait_box_inner"><img src="images/ajax-loader.gif" alt="" /></div></div>'), $.ajax({
                url: "ajax/manage_shopping_cart.php",
                type: "GET",
                data: "action=add_item&products_id=" + e + "&products_qty=" + t + "&prescription_type=" + i + s,
                success: function(e) {
                    var t;
                    "" == e || "" == (e = JSON.parse(e)).cart_content_html && "" == e.cart_overlay_html || (JavascriptCartTracking.addProduct(e.product_information), r > ShoppingCart.last_push_timestamp && (ShoppingCart.last_push_timestamp = r, "" != e.cart_overlay_html && ($("#add_to_cart_overlay, #add_to_cart_overlay_wait_box").remove(), $("body").append(e.cart_overlay_html), resizeSwipeBox("#add_to_cart_overlay_recommendation_wrap", ".add_to_cart_overlay_recommendation_boxes"), addEvent(window, "resize", function() {
                        resizeSwipeBox("#add_to_cart_overlay_recommendation_wrap", ".add_to_cart_overlay_recommendation_boxes")
                    }), (t = $("body").find("#add_to_cart_overlay.modal")).length) && (t.modal(), t.data("plugin_modal").show()), ShoppingCart.changeHeaderInfos(e.products_in_order, e.order_total_amount), "" != e.cart_content_html && $("#header_shopping_cart_hover").html(e.cart_content_html), "function" == typeof initAmazon && initAmazon(), ShoppingCart.generateScrollContainerForHeaderShoppingCart()))
                }
            })
        }, this.addWatchlistItem = function(e, t) {
            window.location = "https://" + location.host + location.pathname + "?action_watch_list=add_product&prd_id=" + e + "&prd_qty=" + t
        }, this.addTwoCartItems = function(e, t, i, o) {
            ShoppingCart.timeout && clearTimeout(ShoppingCart.timeout);
            var n = (new Date).getTime();
            $.ajax({
                url: "ajax/manage_shopping_cart.php",
                type: "GET",
                data: "action=add_two_items&products_id1=" + e + "&products_qty1=" + t + "&products_id2=" + i + "&products_qty2=" + o,
                success: function(e) {
                    "" != e && "" != (e = JSON.parse(e)).cart_content_html && (JavascriptCartTracking.addProduct(e.product_information), n > ShoppingCart.last_push_timestamp) && (ShoppingCart.last_push_timestamp = n, ShoppingCart.changeHeaderInfos(e.products_in_order, e.order_total_amount), $("#header_shopping_cart_hover").html(e.cart_content_html), "function" == typeof initAmazon && initAmazon(), ShoppingCart.generateScrollContainerForHeaderShoppingCart(), ShoppingCart.StartToShowShoppingCart())
                }
            })
        }, this.deleteCartItem = function(e) {
            var t = (new Date).getTime();
            $.ajax({
                url: "ajax/manage_shopping_cart.php",
                type: "GET",
                data: "action=delete_item&products_id=" + e,
                success: function(e) {
                    "" != e && "" != (e = JSON.parse(e)).cart_content_html && (JavascriptCartTracking.removeProduct(e.product_information), t > ShoppingCart.last_push_timestamp) && (ShoppingCart.last_push_timestamp = t, ShoppingCart.changeHeaderInfos(e.products_in_order, e.order_total_amount), $("#header_shopping_cart_hover").html(e.cart_content_html), "function" == typeof initAmazon && initAmazon(), ShoppingCart.generateScrollContainerForHeaderShoppingCart())
                }
            })
        }, this.decreaseCartItem = function(e, t) {
            var i = (new Date).getTime();
            $.ajax({
                url: "ajax/manage_shopping_cart.php",
                type: "GET",
                data: "action=decrease_item&products_id=" + e + "&products_qty=" + t,
                success: function(e) {
                    "" != e && "" != (e = JSON.parse(e)).cart_content_html && (JavascriptCartTracking.removeProduct(e.product_information), i > ShoppingCart.last_push_timestamp) && (ShoppingCart.last_push_timestamp = i, ShoppingCart.changeHeaderInfos(e.products_in_order, e.order_total_amount), $("#header_shopping_cart_hover").html(e.cart_content_html), "function" == typeof initAmazon && initAmazon(), ShoppingCart.generateScrollContainerForHeaderShoppingCart())
                }
            })
        }, this.changeHeaderInfos = function(e, t) {
            $("#header_shopping_cart #Amount").html(e), $("#header_shopping_cart #Price").html(t)
        }, this.openAndCloseShoppingCart = function(e) {
            0 == e ? ($("#header_shopping_cart_hover").hide(), $("#header_shopping_cart").removeClass("hovered"), setAndRemoveContentCover(!1, "shopping_cart")) : "0" != $("#header_shopping_cart #Amount").first().html() && ($("#header_shopping_cart_hover").show(), $("#header_shopping_cart").addClass("hovered"), setAndRemoveContentCover(!0, "shopping_cart"))
        }
    },
    SubscriptionShoppingCart = (0 < $("#header_shopping_cart").length && ($("#header_shopping_cart_hover").hide(), ShoppingCart.getHoverContentForHeaderShoppingCart(), $("#header_shopping_cart_top").click(function(e) {
        "ontouchstart" in window ? $("#header_shopping_cart").hasClass("hovered") ? ShoppingCart.openAndCloseShoppingCart(!1) : ShoppingCart.openAndCloseShoppingCart(!0) : document.location.href = "shopping_cart.php"
    }), $("#header_shopping_cart").mouseenter(function() {
        ShoppingCart.openAndCloseShoppingCart(!0)
    }), $("#header_shopping_cart").mouseleave(function() {
        ShoppingCart.openAndCloseShoppingCart(!1)
    }), $("#header_shopping_cart_hover").mouseenter(function() {
        ShoppingCart.timeout && clearTimeout(ShoppingCart.timeout)
    }), $("#header_shopping_cart_hover").click(function(e) {
        ShoppingCart.timeout && clearTimeout(ShoppingCart.timeout)
    })), new function() {
        this.row_count = 0, this.timeout = null, this.last_push_timestamp = 0, this.addCartItem = function(e) {
            var t = (new Date).getTime();
            $.ajax({
                url: "ajax/subscription_shopping_cart.php",
                type: "GET",
                data: "action=add_item&products_id=" + e,
                success: function(e) {
                    "" != e && "" != (e = JSON.parse(e)).subscription_shopping_cart_content_html && t > SubscriptionShoppingCart.last_push_timestamp && (SubscriptionShoppingCart.last_push_timestamp = t, $("body").append(e.subscription_shopping_cart_content_html))
                }
            })
        }, this.closeSubscriptionShoppingCartOverlay = function() {
            $("#subscription_shopping_cart_overlay").remove()
        }
    }),
    JavascriptCartTracking = new function() {
        this.addProduct = function(e) {
            if ("undefined" != typeof dataLayer)
                for (var t = 0; t < e.length; t++) JavascriptCartTracking.addProductByGoogleDataLayer(e[t].name, e[t].pzn, e[t].price, e[t].count, e[t].prescription_type);
            if ("undefined" != typeof DY)
                for (t = 0; t < e.length; t++) JavascriptCartTracking.addProductByDynamicYield(e[t].pzn, e[t].price, e[t].count)
        }, this.removeProduct = function(e) {
            if ("undefined" != typeof dataLayer)
                for (var t = 0; t < e.length; t++) JavascriptCartTracking.removeProductByGoogleDataLayer(e[t].name, e[t].pzn, e[t].price, e[t].count, e[t].prescription_type);
            if ("undefined" != typeof DY)
                for (t = 0; t < e.length; t++) JavascriptCartTracking.removeProductByDynamicYield(e[t].pzn, e[t].price, e[t].count)
        }, this.addProductToWatchlist = function(e) {
            if ("undefined" != typeof DY)
                for (var t = 0; t < Object.keys(e).length; t++) JavascriptCartTracking.addProductToWhishlistByDynamicYield(e[t].pzn)
        }, this.addProductByGoogleDataLayer = function(e, t, i, o, n) {
            dataLayer.push({
                event: "addToCart",
                ecommerce: {
                    add: {
                        products: [{
                            name: e,
                            id: t,
                            price: i,
                            brand: "",
                            category: "",
                            variant: "",
                            quantity: o,
                            prescriptionType: n
                        }]
                    }
                }
            })
        }, this.addProductByDynamicYield = function(e, t, i) {
            try {
                DY.API("event", {
                    name: "Add to Cart",
                    properties: {
                        dyType: "add-to-cart-v1",
                        value: t,
                        productId: e,
                        quantity: i
                    }
                })
            } catch (e) {
                console.log(e.message)
            }
        }, this.removeProductByGoogleDataLayer = function(e, t, i, o, n) {
            dataLayer.push({
                event: "removeFromCart",
                ecommerce: {
                    remove: {
                        products: [{
                            name: e,
                            id: t,
                            price: i,
                            brand: "",
                            category: "",
                            variant: "",
                            quantity: o,
                            prescriptionType: n
                        }]
                    }
                }
            })
        }, this.removeProductByDynamicYield = function(e, t, i) {
            try {
                DY.API("event", {
                    name: "Remove from Cart",
                    properties: {
                        dyType: "remove-from-cart-v1",
                        value: t,
                        productId: e,
                        quantity: i
                    }
                })
            } catch (e) {
                console.log(e.message)
            }
        }, this.addProductToWhishlistByDynamicYield = function(e) {
            try {
                DY.API("event", {
                    name: "Add to Wishlist",
                    properties: {
                        dyType: "add-to-wishlist-v1",
                        productId: e
                    }
                })
            } catch (e) {
                console.log(e.message)
            }
        }
    };

function popupWindow(e, t, i) {
    t = t || "100", i = i || "100", window.open(e, "popupWindow", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=" + t + ",height=" + i + ",screenX=150,screenY=150,top=150,left=150")
}

function addEvent(e, t, i) {
    null != e && (e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i))
}

function resizeSwipeBox(e, t) {
    var i = $(t).width(),
        o = $(e).width(),
        t = $(e + " " + t).length,
        n = $(this).parent().children("div").first().children();
    o < i * t && !("ontouchstart" in window) ? ($(e + " .none_swipe_next," + e + " .none_swipe_prev").show(), $(e + " .none_swipe_next_info_banner," + e + " .none_swipe_prev_info_banner").show(), $(e + " .none_swipe_next_products_slider," + e + " .none_swipe_prev_products_slider").show()) : ($(e + " .none_swipe_next," + e + " .none_swipe_prev").hide(), $(e + " .none_swipe_next_info_banner," + e + " .none_swipe_prev_info_banner").hide(), $(e + " .none_swipe_next_products_slider," + e + " .none_swipe_prev_products_slider").hide()), null == n.scrollLeft() && ($(e + " .none_swipe_prev").hide(), $(e + " .none_swipe_prev_info_banner").hide(), $(e + " .none_swipe_prev_products_slider").hide())
}

function scrollNoneSwipe(e, t, i) {
    e.preventDefault();
    var o = i.scrollLeft();
    none_swipe_interval_down = setInterval(function() {
        t ? o += 30 : o -= 30, i.scrollLeft(o)
    }, 20)
}

function addParameterToURLAndRedirectCustomer(e, t) {
    e += (e.split("?")[1] ? "&" : "?") + "email_address=" + $(t).val(), window.location.href = e
}
$(document).ready(function() {
        if ("undefined" != typeof javascript_tracking_product_information) {
            var e = javascript_tracking_product_information;
            if ("undefined" != typeof dataLayer)
                for (var t = 0; t < e.length; t++) "ADD" === e[t].type ? JavascriptCartTracking.addProductByGoogleDataLayer(e[t].name, e[t].pzn, e[t].price, e[t].count, e[t].prescription_type) : "REMOVE" === e[t].type && JavascriptCartTracking.removeProductByGoogleDataLayer(e[t].name, e[t].pzn, e[t].price, e[t].count, e[t].prescription_type);
            if ("undefined" != typeof DY)
                for (t = 0; t < e.length; t++) "ADD" === e[t].type ? JavascriptCartTracking.addProductByDynamicYield(e[t].pzn, e[t].price, e[t].count) : "REMOVE" === e[t].type ? JavascriptCartTracking.removeProductByDynamicYield(e[t].pzn, e[t].price, e[t].count) : "ADD_WATCHLIST" === e[t].type && JavascriptCartTracking.addProductToWhishlistByDynamicYield(e[t].pzn);
            $("#javascript_tracking_product_information_tag").remove()
        }
    }),
    function(a) {
        var n, s = {},
            r = !1,
            l = {
                ellipsis: "...",
                setTitle: "never",
                live: !1
            };

        function c(o, n) {
            var s = (o.data("jqae") || {}).wrapperElement,
                e = (s = s || o.wrapInner("<div/>").find(">div")).data("jqae"),
                t = (e = e || {}).originalContent,
                r = (t ? s = e.originalContent.clone(!0).data("jqae", {
                    originalContent: t
                }).replaceAll(s) : s.data("jqae", {
                    originalContent: s.clone(!0)
                }), o.data("jqae", {
                    wrapperElement: s,
                    containerWidth: o.innerWidth(),
                    containerHeight: o.innerHeight()
                }), !1),
                e = s;
            (e = n.selector ? a(s.find(n.selector).get().reverse()) : e).each(function() {
                var e = a(this),
                    t = e.text(),
                    i = !1;
                if (s.innerHeight() - e.innerHeight() > o.innerHeight()) e.remove();
                else if (u(e), e.contents().length) {
                    for (r && (d(e).get(0).nodeValue += n.ellipsis, r = !1); s.innerHeight() > o.innerHeight();) {
                        if (!(i = function(e) {
                                e = d(e); {
                                    var t, i;
                                    if (e.length) return t = e.get(0).nodeValue, -1 < (i = t.lastIndexOf(" ")) ? (t = a.trim(t.substring(0, i)), e.get(0).nodeValue = t) : e.get(0).nodeValue = "", !0
                                }
                                return !1
                            }(e))) {
                            r = !0, e.remove();
                            break
                        }
                        if (u(e), !e.contents().length) {
                            r = !0, e.remove();
                            break
                        }
                        d(e).get(0).nodeValue += n.ellipsis
                    }
                    "onEllipsis" == n.setTitle && i || "always" == n.setTitle ? e.attr("title", t) : "never" != n.setTitle && e.removeAttr("title")
                }
            })
        }

        function d(e) {
            var t, i;
            return e.contents().length ? (t = (i = e.contents()).eq(i.length - 1)).filter(o).length ? t : d(t) : (e.append(""), (i = e.contents()).eq(i.length - 1))
        }

        function u(e) {
            if (e.contents().length) {
                var e = e.contents(),
                    t = e.eq(e.length - 1);
                if (t.filter(o).length) return e = t.get(0).nodeValue, "" == (e = a.trim(e)) && (t.remove(), 1);
                for (; u(t););
                return !t.contents().length && (t.remove(), 1)
            }
        }

        function o() {
            return 3 === this.nodeType
        }
        a.fn.ellipsis = function(e, t) {
            var i, o = a(this);
            return "string" != typeof e && (t = e, e = void 0), (i = a.extend({}, l, t)).selector = e, o.each(function() {
                c(a(this), i)
            }), i.live ? (t = o.selector, e = i, s[t] = e, n = n || window.setInterval(function() {
                if (!r) {
                    for (var i in r = !0, s) a(i).each(function() {
                        var e = a(this),
                            t = e.data("jqae");
                        t.containerWidth == e.innerWidth() && t.containerHeight == e.innerHeight() || c(e, s[i])
                    });
                    r = !1
                }
            }, 200)) : (t = o.selector, s[t] && (delete s[t], s.length || n && (window.clearInterval(n), n = void 0))), this
        }
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? e(require("jquery")) : e(jQuery)
    }(function(r) {
        var e, t = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
            i = "placeholder" in document.createElement("input") && !t && !0,
            t = "placeholder" in document.createElement("textarea") && !t && !0,
            o = r.valHooks,
            n = r.propHooks,
            a = {};

        function l(e, t) {
            var i = r(this);
            if (this.value === i.attr("placeholder") && i.hasClass(a.customClass))
                if (this.value = "", i.removeClass(a.customClass), i.data("placeholder-password")) {
                    if (i = i.hide().nextAll('input[type="password"]:first').show().attr("id", i.removeAttr("id").data("placeholder-id")), !0 === e) return i[0].value = t;
                    i.focus()
                } else this == c() && this.select()
        }

        function s(t) {
            var i, o, n, e = r(this),
                s = this.id;
            if (!t || "blur" !== t.type || !e.hasClass(a.customClass))
                if ("" === this.value) {
                    if ("password" === this.type) {
                        if (!e.data("placeholder-textinput")) {
                            try {
                                i = e.clone().prop({
                                    type: "text"
                                })
                            } catch (e) {
                                i = r("<input>").attr(r.extend((t = this, o = {}, n = /^jQuery\d+$/, r.each(t.attributes, function(e, t) {
                                    t.specified && !n.test(t.name) && (o[t.name] = t.value)
                                }), o), {
                                    type: "text"
                                }))
                            }
                            i.removeAttr("name").data({
                                "placeholder-enabled": !0,
                                "placeholder-password": e,
                                "placeholder-id": s
                            }).bind("focus.placeholder", l), e.data({
                                "placeholder-textinput": i,
                                "placeholder-id": s
                            }).before(i)
                        }
                        this.value = "", e = e.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", e.data("placeholder-id")).show()
                    } else {
                        t = e.data("placeholder-password");
                        t && (t[0].value = "", e.attr("id", e.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                    }
                    e.addClass(a.customClass), e[0].value = e.attr("placeholder")
                } else e.removeClass(a.customClass)
        }

        function c() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        i && t ? ((e = r.fn.placeholder = function() {
            return this
        }).input = !0, e.textarea = !0) : ((e = r.fn.placeholder = function(e) {
            return a = r.extend({}, {
                customClass: "placeholder"
            }, e), this.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + a.customClass).not(":radio, :checkbox, [type=hidden]").bind({
                "focus.placeholder": l,
                "blur.placeholder": s
            }).data("placeholder-enabled", !0).trigger("blur.placeholder")
        }).input = i, e.textarea = t, e = {
            get: function(e) {
                var t = r(e),
                    i = t.data("placeholder-password");
                return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass(a.customClass) ? "" : e.value
            },
            set: function(e, t) {
                var i, o, n = r(e);
                return "" !== t && (i = n.data("placeholder-textinput"), o = n.data("placeholder-password"), i ? (l.call(i[0], !0, t) || (e.value = t), i[0].value = t) : o && (l.call(e, !0, t) || (o[0].value = t), e.value = t)), n.data("placeholder-enabled") ? "" === t ? (e.value = t, e != c() && s.call(e)) : (n.hasClass(a.customClass) && l.call(e), e.value = t) : e.value = t, n
            }
        }, i || (o.input = e, n.value = e), t || (o.textarea = e, n.value = e), r(function() {
            r(document).delegate("form", "submit.placeholder", function() {
                var e = r("." + a.customClass, this).each(function() {
                    l.call(this, !0, "")
                });
                setTimeout(function() {
                    e.each(s)
                }, 10)
            })
        }), r(window).bind("beforeunload.placeholder", function() {
            var e = !0;
            try {
                "javascript:void(0)" === document.activeElement.toString() && (e = !1)
            } catch (e) {}
            e && r("." + a.customClass).each(function() {
                this.value = ""
            })
        }))
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(o, t) {
        var l = 6,
            a = o.event.add,
            n = o.event.remove,
            c = function(e, t, i) {
                o.event.trigger(t, i, e)
            },
            s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                return window.setTimeout(function() {
                    e()
                }, 25)
            },
            i = {
                textarea: !0,
                input: !0,
                select: !0,
                button: !0
            },
            d = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            u = "touchmove",
            r = "touchend",
            e = "touchend";

        function p(e) {
            var i = e,
                o = !1,
                n = !1;

            function t(e) {
                o ? (i(), s(t), o = !(n = !0)) : n = !1
            }
            this.kick = function(e) {
                o = !0, n || t()
            }, this.end = function(e) {
                var t = i;
                e && (n ? (i = o ? function() {
                    t(), e()
                } : e, o = !0) : e())
            }
        }

        function h() {
            return !0
        }

        function f() {
            return !1
        }

        function _(e) {
            e.preventDefault()
        }

        function g(e) {
            i[e.target.tagName.toLowerCase()] || e.preventDefault()
        }

        function m(e, t) {
            var i, o;
            if (e.identifiedTouch) return e.identifiedTouch(t);
            for (i = -1, o = e.length; ++i < o;)
                if (e[i].identifier === t) return e[i]
        }

        function v(e, t) {
            e = m(e.changedTouches, t.identifier);
            if (e && (e.pageX !== t.pageX || e.pageY !== t.pageY)) return e
        }

        function w(e) {
            T(e, e.data, e, b)
        }

        function y(e) {
            b()
        }

        function b() {
            n(document, d.move, w), n(document, d.cancel, y)
        }

        function $(e) {
            var t = e.data,
                i = v(e, t);
            i && T(e, t, i, C)
        }

        function k(e) {
            var t = e.data;
            m(e.changedTouches, t.identifier) && C(t.identifier)
        }

        function C(e) {
            n(document, "." + e, $), n(document, "." + e, k)
        }

        function T(e, t, i, o) {
            var n, s, r = i.pageX - t.startX,
                a = i.pageY - t.startY;
            r * r + a * a < l * l || (n = e, e = i, i = r, r = a, a = o, (o = t).target, t = n.targetTouches, s = n.timeStamp - o.timeStamp, o.type = "movestart", o.distX = i, o.distY = r, o.deltaX = i, o.deltaY = r, o.pageX = e.pageX, o.pageY = e.pageY, o.velocityX = i / s, o.velocityY = r / s, o.targetTouches = t, o.finger = t ? t.length : 1, o._handled = S, o._preventTouchmoveDefault = function() {
                n.preventDefault()
            }, c(o.target, o), a(o.identifier))
        }

        function S() {
            return this._handled = h, !1
        }

        function O(e) {
            e._handled()
        }

        function x(e) {
            var t = e.data.timer;
            (e.data.touch = e).data.timeStamp = e.timeStamp, t.kick()
        }

        function E(e) {
            var t = e.data.event,
                e = e.data.timer;
            n(document, d.move, x), n(document, d.end, E), I(t, e, function() {
                setTimeout(function() {
                    n(t.target, "click", f)
                }, 0)
            })
        }

        function P(e) {
            var t = e.data.event,
                i = e.data.timer,
                o = v(e, t);
            o && (e.preventDefault(), t.targetTouches = e.targetTouches, e.data.touch = o, e.data.timeStamp = e.timeStamp, i.kick())
        }

        function A(e) {
            var t = e.data.event,
                i = e.data.timer;
            m(e.changedTouches, t.identifier) && (e = t, n(document, "." + e.identifier, P), n(document, "." + e.identifier, A), I(t, i))
        }

        function I(e, t, i) {
            t.end(function() {
                return e.type = "moveend", c(e.target, e), i && i()
            })
        }
        if (o.event.special.movestart = {
                setup: function(e, t, i) {
                    return a(this, "movestart.move", O), !0
                },
                teardown: function(e) {
                    return n(this, "dragstart drag", _), n(this, "mousedown touchstart", g), n(this, "movestart", O), !0
                },
                add: function(e) {
                    "move" !== e.namespace && "moveend" !== e.namespace && (a(this, "dragstart." + e.guid + " drag." + e.guid, _, t, e.selector), a(this, "mousedown." + e.guid, g, t, e.selector))
                },
                remove: function(e) {
                    "move" !== e.namespace && "moveend" !== e.namespace && (n(this, "dragstart." + e.guid + " drag." + e.guid), n(this, "mousedown." + e.guid))
                },
                _default: function(n) {
                    var s, r;
                    n._handled() && (s = {
                        target: n.target,
                        startX: n.startX,
                        startY: n.startY,
                        pageX: n.pageX,
                        pageY: n.pageY,
                        distX: n.distX,
                        distY: n.distY,
                        deltaX: n.deltaX,
                        deltaY: n.deltaY,
                        velocityX: n.velocityX,
                        velocityY: n.velocityY,
                        timeStamp: n.timeStamp,
                        identifier: n.identifier,
                        targetTouches: n.targetTouches,
                        finger: n.finger
                    }, r = {
                        event: s,
                        timer: new p(function(e) {
                            var t, i, o;
                            t = s, i = r.touch, o = r.timeStamp, o -= t.timeStamp, t.type = "move", t.distX = i.pageX - t.startX, t.distY = i.pageY - t.startY, t.deltaX = i.pageX - t.pageX, t.deltaY = i.pageY - t.pageY, t.velocityX = .3 * t.velocityX + .7 * t.deltaX / o, t.velocityY = .3 * t.velocityY + .7 * t.deltaY / o, t.pageX = i.pageX, t.pageY = i.pageY, c(n.target, s)
                        }),
                        touch: t,
                        timeStamp: t
                    }, n.identifier === t ? (a(n.target, "click", f), a(document, d.move, x, r), a(document, d.end, E, r)) : (n._preventTouchmoveDefault(), a(document, u + "." + n.identifier, P, r), a(document, e + "." + n.identifier, A, r)))
                }
            }, o.event.special.move = {
                setup: function() {
                    a(this, "movestart.move", o.noop)
                },
                teardown: function() {
                    n(this, "movestart.move", o.noop)
                }
            }, o.event.special.moveend = {
                setup: function() {
                    a(this, "movestart.moveend", o.noop)
                },
                teardown: function() {
                    n(this, "movestart.moveend", o.noop)
                }
            }, a(document, "mousedown.move", function(e) {
                var t;
                1 !== (t = e).which || t.ctrlKey || t.altKey || (t = {
                    target: e.target,
                    startX: e.pageX,
                    startY: e.pageY,
                    timeStamp: e.timeStamp
                }, a(document, d.move, w, t), a(document, d.cancel, y, t))
            }), a(document, "touchstart.move", function(e) {
                var t;
                i[e.target.tagName.toLowerCase()] || (e = {
                    target: (t = e.changedTouches[0]).target,
                    startX: t.pageX,
                    startY: t.pageY,
                    timeStamp: e.timeStamp,
                    identifier: t.identifier
                }, a(document, u + "." + t.identifier, $, e), a(document, r + "." + t.identifier, k, e))
            }), "function" == typeof Array.prototype.indexOf)
            for (var D = o, L = ["changedTouches", "targetTouches"], j = L.length; j--;) - 1 === D.event.props.indexOf(L[j]) && D.event.props.push(L[j])
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && null !== module && module.exports ? module.exports = e : e(jQuery)
    }(function(o, e) {
        function n(e, t, i) {
            o.event.trigger(t, i, e)
        }
        var s = o.event.add,
            t = o.event.remove,
            r = {
                threshold: .1,
                sensitivity: 100
            };

        function a(e) {
            var t = e.currentTarget.offsetWidth,
                i = e.currentTarget.offsetHeight,
                o = {
                    distX: e.distX,
                    distY: e.distY,
                    velocityX: e.velocityX,
                    velocityY: e.velocityY,
                    finger: e.finger
                };
            e.distX > e.distY ? e.distX > -e.distY ? (e.distX / t > r.threshold || 1 < e.velocityX * e.distX / t * r.sensitivity) && (o.type = "swiperight", n(e.currentTarget, o)) : (-e.distY / i > r.threshold || 1 < e.velocityY * e.distY / t * r.sensitivity) && (o.type = "swipeup", n(e.currentTarget, o)) : e.distX > -e.distY ? (e.distY / i > r.threshold || 1 < e.velocityY * e.distY / t * r.sensitivity) && (o.type = "swipedown", n(e.currentTarget, o)) : (-e.distX / t > r.threshold || 1 < e.velocityX * e.distX / t * r.sensitivity) && (o.type = "swipeleft", n(e.currentTarget, o))
        }

        function l(e) {
            var t = o.data(e, "event_swipe");
            return t || o.data(e, "event_swipe", t = {
                count: 0
            }), t
        }
        o.event.special.swipe = o.event.special.swipeleft = o.event.special.swiperight = o.event.special.swipeup = o.event.special.swipedown = {
            setup: function(e, t, i) {
                e = l(this);
                if (!(0 < e.count++)) return s(this, "moveend", a), !0
            },
            teardown: function() {
                var e = l(this);
                if (!(0 < --e.count)) return t(this, "moveend", a), !0
            },
            settings: r
        }
    }),
    function(d, u, p) {
        var h, f, _, g, B, F, Y, W, m, v, w, y, q, U, a, e, s, r, V, X, b, $, k, C, T, S, O, x, E, P, G, A, n, o = {
                html: !1,
                photo: !1,
                iframe: !1,
                inline: !1,
                transition: "elastic",
                speed: 300,
                fadeOut: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scalePhotos: !0,
                scrolling: !0,
                opacity: .9,
                preloading: !0,
                className: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                top: !1,
                bottom: !1,
                left: !1,
                right: !1,
                fixed: !1,
                data: void 0,
                closeButton: !0,
                fastIframe: !0,
                open: !1,
                reposition: !0,
                loop: !0,
                slideshow: !1,
                slideshowAuto: !0,
                slideshowSpeed: 2500,
                slideshowStart: "start slideshow",
                slideshowStop: "stop slideshow",
                photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
                retinaImage: !1,
                retinaUrl: !1,
                retinaSuffix: "@2x.$1",
                current: "image {current} of {total}",
                previous: "previous",
                next: "next",
                close: "close",
                xhrError: "This content failed to load.",
                imgError: "This image failed to load.",
                returnFocus: !0,
                trapFocus: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                rel: function() {
                    return this.rel
                },
                href: function() {
                    return d(this).attr("href")
                },
                title: function() {
                    return this.title
                },
                createImg: function() {
                    var i = new Image,
                        e = d(this).data("cbox-img-attrs");
                    return "object" == typeof e && d.each(e, function(e, t) {
                        i[e] = t
                    }), i
                },
                createIframe: function() {
                    var i = u.createElement("iframe"),
                        e = d(this).data("cbox-iframe-attrs");
                    return "object" == typeof e && d.each(e, function(e, t) {
                        i[e] = t
                    }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i
                }
            },
            I = "colorbox",
            D = "cbox",
            L = D + "Element",
            J = D + "_open",
            K = D + "_load",
            l = D + "_complete",
            c = D + "_cleanup",
            Q = D + "_closed",
            Z = D + "_purge",
            j = d("<a/>"),
            M = "div",
            ee = 0,
            te = {};

        function H(e, t, i) {
            e = u.createElement(e);
            return t && (e.id = D + t), i && (e.style.cssText = i), d(e)
        }

        function ie() {
            return p.innerHeight || d(p).height()
        }

        function oe(e, i) {
            i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function(e) {
                var t;
                return void 0 === this.cache[e] && (void 0 !== (t = d(this.el).attr("data-cbox-" + e)) ? this.cache[e] = t : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== o[e] && (this.cache[e] = o[e])), this.cache[e]
            }, this.get = function(e) {
                e = this.value(e);
                return d.isFunction(e) ? e.call(this.el, this) : e
            }
        }

        function ne(e) {
            var t = m.length,
                e = (S + e) % t;
            return e < 0 ? t + e : e
        }

        function R(e, t) {
            return Math.round((/%/.test(e) ? ("x" === t ? v.width() : ie()) / 100 : 1) * parseInt(e, 10))
        }

        function se(e, t) {
            return e.get("photo") || e.get("photoRegex").test(t)
        }

        function re(e, t) {
            return e.get("retinaUrl") && 1 < p.devicePixelRatio ? t.replace(e.get("photoRegex"), e.get("retinaSuffix")) : t
        }

        function ae(e) {
            "contains" in f[0] && !f[0].contains(e.target) && e.target !== h[0] && (e.stopPropagation(), f.focus())
        }

        function N(e) {
            N.str !== e && (f.add(h).removeClass(N.str).addClass(e), N.str = e)
        }

        function z(e) {
            d(u).trigger(e), j.triggerHandler(e)
        }
        t = D + "Slideshow_", de = "click." + D;
        var le, ce, t, de, ue = function() {
            le ? b.get("slideshow") || (j.unbind(c, _e), _e()) : b.get("slideshow") && m[1] && (le = !0, j.one(c, _e), (b.get("slideshowAuto") ? he : fe)(), e.show())
        };

        function i() {
            clearTimeout(ce)
        }

        function pe() {
            (b.get("loop") || m[S + 1]) && (i(), ce = setTimeout(A.next, b.get("slideshowSpeed")))
        }

        function he() {
            e.html(b.get("slideshowStop")).unbind(de).one(de, fe), j.bind(l, pe).bind(K, i), f.removeClass(t + "off").addClass(t + "on")
        }

        function fe() {
            i(), j.unbind(l, pe).unbind(K, i), e.html(b.get("slideshowStart")).unbind(de).one(de, function() {
                A.next(), he()
            }), f.removeClass(t + "on").addClass(t + "off")
        }

        function _e() {
            le = !1, e.hide(), i(), j.unbind(l, pe).unbind(K, i), f.removeClass(t + "off " + t + "on")
        }

        function ge(e) {
            var t, i, o, n, s, r, a, l, c;
            P || (i = d(e).data(I), b = new oe(e, i), c = b.get("rel"), S = 0, c && !1 !== c && "nofollow" !== c ? (m = d("." + L).filter(function() {
                return new oe(this, d.data(this, I)).get("rel") === c
            }), -1 === (S = m.index(b.el)) && (m = m.add(b.el), S = m.length - 1)) : m = d(b.el), x || (x = E = !0, N(b.get("className")), f.css({
                visibility: "hidden",
                display: "block",
                opacity: ""
            }), w = H(M, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), g.css({
                width: "",
                height: ""
            }).append(w), $ = B.height() + W.height() + g.outerHeight(!0) - g.height(), k = F.width() + Y.width() + g.outerWidth(!0) - g.width(), C = w.outerHeight(!0), T = w.outerWidth(!0), e = R(b.get("initialWidth"), "x"), i = R(b.get("initialHeight"), "y"), o = b.get("maxWidth"), t = b.get("maxHeight"), b.w = Math.max((!1 !== o ? Math.min(e, R(o, "x")) : e) - T - k, 0), b.h = Math.max((!1 !== t ? Math.min(i, R(t, "y")) : i) - C - $, 0), w.css({
                width: "",
                height: b.h
            }), A.position(), z(J), b.get("onOpen"), X.add(U).hide(), f.focus(), b.get("trapFocus") && u.addEventListener && (u.addEventListener("focus", ae, !0), j.one(Q, function() {
                u.removeEventListener("focus", ae, !0)
            })), b.get("returnFocus") && j.one(Q, function() {
                d(b.el).focus()
            })), o = parseFloat(b.get("opacity")), h.css({
                opacity: o == o ? o : "",
                cursor: b.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(), b.get("closeButton") ? V.html(b.get("close")).appendTo(g) : V.appendTo("<div/>"), a = A.prep, l = ++ee, O = !(E = !0), z(Z), z(K), b.get("onLoad"), b.h = b.get("height") ? R(b.get("height"), "y") - C - $ : b.get("innerHeight") && R(b.get("innerHeight"), "y"), b.w = b.get("width") ? R(b.get("width"), "x") - T - k : b.get("innerWidth") && R(b.get("innerWidth"), "x"), b.mw = b.w, b.mh = b.h, b.get("maxWidth") && (b.mw = R(b.get("maxWidth"), "x") - T - k, b.mw = b.w && b.w < b.mw ? b.w : b.mw), b.get("maxHeight") && (b.mh = R(b.get("maxHeight"), "y") - C - $, b.mh = b.h && b.h < b.mh ? b.h : b.mh), e = b.get("href"), G = setTimeout(function() {
                q.show()
            }, 100), b.get("inline") ? (n = d(e), r = d("<div>").hide().insertBefore(n), j.one(Z, function() {
                r.replaceWith(n)
            }), a(n)) : b.get("iframe") ? a(" ") : b.get("html") ? a(b.get("html")) : se(b, e) ? (e = re(b, e), O = b.get("createImg"), d(O).addClass(D + "Photo").bind("error." + D, function() {
                a(H(M, "Error").html(b.get("imgError")))
            }).one("load", function() {
                l === ee && setTimeout(function() {
                    var e;
                    b.get("retinaImage") && 1 < p.devicePixelRatio && (O.height = O.height / p.devicePixelRatio, O.width = O.width / p.devicePixelRatio), b.get("scalePhotos") && (s = function() {
                        O.height -= O.height * e, O.width -= O.width * e
                    }, b.mw && O.width > b.mw && (e = (O.width - b.mw) / O.width, s()), b.mh) && O.height > b.mh && (e = (O.height - b.mh) / O.height, s()), b.h && (O.style.marginTop = Math.max(b.mh - O.height, 0) / 2 + "px"), m[1] && (b.get("loop") || m[S + 1]) && (O.style.cursor = "pointer", d(O).bind("click." + D, function() {
                        A.next()
                    })), O.style.width = O.width + "px", O.style.height = O.height + "px", a(O)
                }, 1)
            }), O.src = e) : e && y.load(e, b.get("data"), function(e, t) {
                l === ee && a("error" === t ? H(M, "Error").html(b.get("xhrError")) : d(this).contents())
            }))
        }

        function me() {
            f || (n = !1, v = d(p), f = H(M).attr({
                id: I,
                class: !1 === d.support.opacity ? D + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), h = H(M, "Overlay").hide(), q = d([H(M, "LoadingOverlay")[0], H(M, "LoadingGraphic")[0]]), _ = H(M, "Wrapper"), g = H(M, "Content").append(U = H(M, "Title"), a = H(M, "Current"), r = d('<button type="button"/>').attr({
                id: D + "Previous"
            }), s = d('<button type="button"/>').attr({
                id: D + "Next"
            }), e = d('<button type="button"/>').attr({
                id: D + "Slideshow"
            }), q), V = d('<button type="button"/>').attr({
                id: D + "Close"
            }), _.append(H(M).append(H(M, "TopLeft"), B = H(M, "TopCenter"), H(M, "TopRight")), H(M, !1, "clear:left").append(F = H(M, "MiddleLeft"), g, Y = H(M, "MiddleRight")), H(M, !1, "clear:left").append(H(M, "BottomLeft"), W = H(M, "BottomCenter"), H(M, "BottomRight"))).find("div div").css({
                float: "left"
            }), y = H(M, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), X = s.add(r).add(a).add(e)), u.body && !f.parent().length && d(u.body).append(h, f.append(_, y))
        }
        d[I] || (d(me), (A = d.fn[I] = d[I] = function(t, e) {
            var i = this;
            return t = t || {}, d.isFunction(i) && (i = d("<a/>"), t.open = !0), i[0] && (me(), f) && (n || (n = !0, s.click(function() {
                A.next()
            }), r.click(function() {
                A.prev()
            }), V.click(function() {
                A.close()
            }), h.click(function() {
                b.get("overlayClose") && A.close()
            }), d(u).bind("keydown." + D, function(e) {
                var t = e.keyCode;
                x && b.get("escKey") && 27 === t && (e.preventDefault(), A.close()), x && b.get("arrowKey") && m[1] && !e.altKey && (37 === t ? (e.preventDefault(), r.click()) : 39 === t && (e.preventDefault(), s.click()))
            }), d.isFunction(d.fn.on) ? d(u).on("click." + D, "." + L, o) : d("." + L).live("click." + D, o)), 1) && (e && (t.onComplete = e), i.each(function() {
                var e = d.data(this, I) || {};
                d.data(this, I, d.extend(e, t))
            }).addClass(L), new oe(i[0], t).get("open") && ge(i[0])), i;

            function o(e) {
                1 < e.which || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), ge(this))
            }
        }).position = function(t, e) {
            var i, o, n, s, r = 0,
                a = 0,
                l = f.offset();

            function c() {
                B[0].style.width = W[0].style.width = g[0].style.width = parseInt(f[0].style.width, 10) - k + "px", g[0].style.height = F[0].style.height = Y[0].style.height = parseInt(f[0].style.height, 10) - $ + "px"
            }
            v.unbind("resize." + D), f.css({
                top: -9e4,
                left: -9e4
            }), o = v.scrollTop(), n = v.scrollLeft(), b.get("fixed") ? (l.top -= o, l.left -= n, f.css({
                position: "fixed"
            })) : (r = o, a = n, f.css({
                position: "absolute"
            })), !1 !== b.get("right") ? a += Math.max(v.width() - b.w - T - k - R(b.get("right"), "x"), 0) : !1 !== b.get("left") ? a += R(b.get("left"), "x") : a += Math.round(Math.max(v.width() - b.w - T - k, 0) / 2), !1 !== b.get("bottom") ? r += Math.max(ie() - b.h - C - $ - R(b.get("bottom"), "y"), 0) : !1 !== b.get("top") ? r += R(b.get("top"), "y") : r += Math.round(Math.max(ie() - b.h - C - $, 0) / 2), f.css({
                top: l.top,
                left: l.left,
                visibility: "visible"
            }), _[0].style.width = _[0].style.height = "9999px", i = {
                width: b.w + T + k,
                height: b.h + C + $,
                top: r,
                left: a
            }, t && (s = 0, d.each(i, function(e) {
                i[e] !== te[e] && (s = t)
            }), t = s), te = i, t || f.css(i), f.dequeue().animate(i, {
                duration: t || 0,
                complete: function() {
                    c(), E = !1, _[0].style.width = b.w + T + k + "px", _[0].style.height = b.h + C + $ + "px", b.get("reposition") && setTimeout(function() {
                        v.bind("resize." + D, A.position)
                    }, 1), d.isFunction(e) && e()
                },
                step: c
            })
        }, A.resize = function(e) {
            var t;
            x && ((e = e || {}).width && (b.w = R(e.width, "x") - T - k), e.innerWidth && (b.w = R(e.innerWidth, "x")), w.css({
                width: b.w
            }), e.height && (b.h = R(e.height, "y") - C - $), e.innerHeight && (b.h = R(e.innerHeight, "y")), e.innerHeight || e.height || (t = w.scrollTop(), w.css({
                height: "auto"
            }), b.h = w.height()), w.css({
                height: b.h
            }), t && w.scrollTop(t), A.position("none" === b.get("transition") ? 0 : b.get("speed")))
        }, A.prep = function(e) {
            var t, n;
            x && (n = "none" === b.get("transition") ? 0 : b.get("speed"), w.remove(), (w = H(M, "LoadedContent").append(e)).hide().appendTo(y.show()).css({
                width: (b.w = b.w || w.width(), b.w = b.mw && b.mw < b.w ? b.mw : b.w, b.w),
                overflow: b.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: (b.h = b.h || w.height(), b.h = b.mh && b.mh < b.h ? b.mh : b.h, b.h)
            }).prependTo(g), y.hide(), d(O).css({
                float: "none"
            }), N(b.get("className")), t = function() {
                var e, t, i = m.length;

                function o() {
                    !1 === d.support.opacity && f[0].style.removeAttribute("filter")
                }
                x && (t = function() {
                    clearTimeout(G), q.hide(), z(l), b.get("onComplete")
                }, U.html(b.get("title")).show(), w.show(), 1 < i ? ("string" == typeof b.get("current") && a.html(b.get("current").replace("{current}", S + 1).replace("{total}", i)).show(), s[b.get("loop") || S < i - 1 ? "show" : "hide"]().html(b.get("next")), r[b.get("loop") || S ? "show" : "hide"]().html(b.get("previous")), ue(), b.get("preloading") && d.each([ne(-1), ne(1)], function() {
                    var e = m[this],
                        e = new oe(e, d.data(e, I)),
                        t = e.get("href");
                    t && se(e, t) && (t = re(e, t), u.createElement("img").src = t)
                })) : X.hide(), b.get("iframe") ? (e = b.get("createIframe"), b.get("scrolling") || (e.scrolling = "no"), d(e).attr({
                    src: b.get("href"),
                    class: D + "Iframe"
                }).one("load", t).appendTo(w), j.one(Z, function() {
                    e.src = "//about:blank"
                }), b.get("fastIframe") && d(e).trigger("load")) : t(), "fade" === b.get("transition") ? f.fadeTo(n, 1, o) : o())
            }, "fade" === b.get("transition") ? f.fadeTo(n, 0, function() {
                A.position(0, t)
            }) : A.position(n, t))
        }, A.next = function() {
            !E && m[1] && (b.get("loop") || m[S + 1]) && (S = ne(1), ge(m[S]))
        }, A.prev = function() {
            !E && m[1] && (b.get("loop") || S) && (S = ne(-1), ge(m[S]))
        }, A.close = function() {
            x && !P && (x = !(P = !0), z(c), b.get("onCleanup"), v.unbind("." + D), h.fadeTo(b.get("fadeOut") || 0, 0), f.stop().fadeTo(b.get("fadeOut") || 0, 0, function() {
                f.hide(), h.hide(), z(Z), w.remove(), setTimeout(function() {
                    P = !1, z(Q), b.get("onClosed")
                }, 1)
            }))
        }, A.remove = function() {
            f && (f.stop(), d[I].close(), f.stop(!1, !0).remove(), h.remove(), P = !1, f = null, d("." + L).removeData(I).removeClass(L), d(u).unbind("click." + D).unbind("keydown." + D))
        }, A.element = function() {
            return d(b.el)
        }, A.settings = o)
    }(jQuery, document, window),
    function(p) {
        p.fn.collapser = function(i, t, o) {
            var n, s, r, a, i = p.extend({
                target: "next",
                targetOnly: null,
                effect: "slide",
                changeText: !0,
                expandHtml: "Expand",
                collapseHtml: "Collapse",
                expandClass: "",
                collapseClass: ""
            }, i);

            function l(e) {
                void 0 !== t && t.apply(e)
            }

            function c(e) {
                void 0 !== o && o.apply(e)
            }

            function d(e, t) {
                l(e), (1 == t ? e[i.target](i.targetOnly) : p(document).find(i.target))[a](), e.html(n), e.removeClass(i.collapseClass), e.addClass(i.expandClass), c(e)
            }

            function u(e, t) {
                l(e), (1 == t ? e[i.target](i.targetOnly) : p(document).find(i.target))[r](), e.html(s), e.removeClass(i.expandClass), e.addClass(i.collapseClass), c(e)
            }

            function e(e, t) {
                1 == t ? (e[i.target](i.targetOnly).is(":visible") ? d : u)(e, 1) : (p(document).find(i.target).is(":visible") ? d : u)(e, 2)
            }
            return a = "slide" == i.effect ? (r = "slideDown", "slideUp") : (r = "fadeIn", "fadeOut"), 1 == i.changeText && (n = i.expandHtml, s = i.collapseHtml), this.each(function() {
                p.fn[i.target] && p(this)[i.target]() ? p(this).toggle(function() {
                    e(p(this), 1)
                }, function() {
                    e(p(this), 1)
                }) : p(this).toggle(function() {
                    e(p(this), 2)
                }, function() {
                    e(p(this), 2)
                }), p.fn[i.target] && p(this)[i.target]() ? p(this)[i.target]().is(":hidden") ? (p(this).html(n), p(this).removeClass(i.collapseClass), p(this).addClass(i.expandClass)) : (p(this).html(s), p(this).removeClass(i.expandClass), p(this).addClass(i.collapseClass)) : p(document).find(i.target).is(":hidden") ? p(this).html(n) : p(this).html(s)
            })
        }
    }(jQuery), $(document).ready(function() {
        var e;
        !1 === (e = !!navigator.cookieEnabled, void 0 !== navigator.cookieEnabled || e || (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie"), document.cookie = "testcookie; expires=Thu, 01-Jan-1970 00:00:01 GMT"), e) && "/cookie_usage.php" != window.location.pathname && $("body").append('<div class="cookie_usage_bar"><span>Ihr Browser erlaubt keine Cookies</span><a href="cookie_usage.php">Details</a></div>')
    }), $(document).on("mouseup", ".none_swipe_next", function(e) {
        e.preventDefault();
        var e = $(this).parent().children("div").first().children(),
            t = $(this).parent().parent().attr("id"),
            i = e.outerWidth(),
            o = e.scrollLeft(),
            n = e.get(0).scrollWidth;
        e.scrollLeft() === n - i ? $("#" + t + " .none_swipe_prev").hide() : $("#" + t + " .none_swipe_prev").show(), n - o == i ? e.animate({
            scrollLeft: "0"
        }, 600) : (t = e.find("a").first().width(), e.animate({
            scrollLeft: "+=" + 3 * t
        }, 600))
    }), $(document).on("mouseup", ".none_swipe_next_info_banner", function(e) {
        e.preventDefault();
        var e = $(this).parent().children("div").first().children(),
            t = e.outerWidth(),
            i = e.scrollLeft(),
            o = e.get(0).scrollWidth;
        e.scrollLeft() === o - t ? $(".none_swipe_prev_info_banner").hide() : $(".none_swipe_prev_info_banner").show(), o - i == t ? e.animate({
            scrollLeft: "0"
        }, 600) : (o = e.find("a").first().width(), e.animate({
            scrollLeft: "+=" + (o + 24)
        }, 600))
    }), $(document).on("mouseup", ".none_swipe_next_products_slider", function(e) {
        e.preventDefault();
        var e = $(this).parent().children("div").first().children(),
            t = e.outerWidth(),
            i = e.scrollLeft(),
            o = e.get(0).scrollWidth;
        e.scrollLeft() === o - t ? $(".none_swipe_prev_products_slider").hide() : $(".none_swipe_prev_products_slider").show(), o - i == t ? e.animate({
            scrollLeft: "0"
        }, 600) : (o = e.find("a").first().width(), e.animate({
            scrollLeft: "+=" + (o + 24)
        }, 600))
    }), $(document).on("mouseup", ".none_swipe_prev", function(e) {
        e.preventDefault();
        var e = $(this).parent().children("div").first().children(),
            t = $(this).parent().parent().attr("id"),
            i = e.find("a").first().width();
        e.animate({
            scrollLeft: "-=" + 3 * i
        }, 600), 0 == e.scrollLeft() ? $("#" + t + " .none_swipe_prev").hide() : $("#" + t + " .none_swipe_prev").show()
    }), $(document).on("mouseup", ".none_swipe_prev_info_banner", function(e) {
        e.preventDefault();
        var e = $(this).parent().children("div").first().children(),
            t = e.find("a").first().width();
        e.animate({
            scrollLeft: "-=" + (t + 24)
        }, 600), 0 == e.scrollLeft() ? $(".none_swipe_prev_info_banner").hide() : $(".none_swipe_prev_info_banner").show()
    }), $(document).on("mouseup", ".none_swipe_prev_products_slider", function(e) {
        e.preventDefault();
        var e = $(this).parent().children("div").first().children(),
            t = e.find("a").first().width();
        e.animate({
            scrollLeft: "-=" + (t + 24)
        }, 600), 0 == e.scrollLeft() ? $(".none_swipe_prev_products_slider").hide() : $(".none_swipe_prev_products_slider").show()
    }), $(document).on("touchstart", ".none_swipe_next", function(e) {
        clearInterval(none_swipe_interval_down), scrollNoneSwipe(e, !0, $(this).parent().children("div").first().children())
    }), $(document).on("touchstart", ".none_swipe_prev", function(e) {
        clearInterval(none_swipe_interval_down), scrollNoneSwipe(e, !1, $(this).parent().children("div").first().children())
    }), $(document).on("touchend", ".none_swipe_next", function(e) {
        clearInterval(none_swipe_interval_down)
    }), $(document).on("touchend", ".none_swipe_prev", function(e) {
        clearInterval(none_swipe_interval_down)
    }), $(window).load(function() {
        $.each(["highlights_of_the_week", "bestseller_of_the_week", "topseller_of_the_week_0", "topseller_of_the_week_1", "topseller_of_the_week_2", "topseller_of_the_week_3", "topseller_of_the_week_4", "topseller_of_the_week_5", "topseller_of_the_week_6", "topseller_of_the_week_7", "topseller_of_the_week_8", "topseller_of_the_week_9", "labels_apo", "best_sellers_new", "best_sellers_bottom", "shopping_cart_cross_sellers", "cross_selling", "predictive_intent", "add_to_cart_overlay_recommendation", "subscriptions", "slider_1", "slider_2", "slider_3", "slider_4", "slider_5", "info_banner"], function(e, t) {
            0 < $("#" + t + "_wrap").length && (resizeSwipeBox("#" + t + "_wrap", "." + t + "_boxes"), addEvent(window, "resize", function() {
                resizeSwipeBox("#" + t + "_wrap", "." + t + "_boxes")
            }))
        }), $(".hotw_highlights").ellipsis(), $(".product_listing_highlights").ellipsis()
    }), $(".colorbox_image").colorbox({
        fixed: "true",
        initialWidth: "500px",
        initialHeight: "530px",
        opacity: "0.75"
    }), $(".colorbox_popup").colorbox({
        maxWidth: "700px",
        opacity: "0.75"
    }), $(".colorbox_popup_website").colorbox({
        iframe: "true",
        maxWidth: "700px",
        maxHeight: "80%",
        opacity: "0.75",
        innerWidth: "700px",
        innerHeight: "80%"
    }), "webkitSpeechRecognition" in window && ($("#search_field").append('<div id="web_kit_speech_recognition" ><div class="microphone"></div></div>'), (recognition = new webkitSpeechRecognition).lang = "de-DE", recognition.continuous = !1, recognition.interimResults = !1, $("#web_kit_speech_recognition").click(function() {
        recognition.start()
    }), recognition.onstart = function() {
        $("#web_kit_speech_recognition div").addClass("blink"), $("#web_kit_speech_recognition div").addClass("microphone_color")
    }, recognition.onresult = function(e) {
        for (var t = "", i = e.resultIndex; i < e.results.length; ++i) e.results[i].isFinal && (t += e.results[i][0].transcript);
        "" != t && ($("#idOfSearchfield").val(t), $("#quick_find").submit())
    }, recognition.onend = function() {
        $("#web_kit_speech_recognition div").removeClass("blink"), $("#web_kit_speech_recognition div").removeClass("microphone_color")
    }), $("input, textarea").placeholder(), jQuery.fn.tclick = function(t) {
        return this.bind("ontouchstart" in document.documentElement ? "touchstart" : "mousedown", function(e) {
            t.call(this, e), e.stopPropagation(), e.preventDefault()
        }), this.bind("click", function(e) {
            t.call(this, e)
        }), this
    }, $("#quick_find").submit(function(e) {
        return 0 != $.trim($("#idOfSearchfield").val()).length || (e.preventDefault(), !1)
    }), $(".product_status_box").click(function() {
        var e = $(this).find(".product_status_info_box");
        1 == e.is(":visible") ? e.hide("slow") : ($(".product_status_info_box").hide("slow"), $("body").width() > $(this).find(".product_status_link").offset().left + e.outerWidth() ? e.css({
            left: "0",
            right: ""
        }) : e.css({
            right: "0",
            left: ""
        }), 0 < $(this).find(".product_status_info_box_block").length && e.css("top", "-" + e.outerHeight() + "px"), e.show("slow"))
    }), $("a, :button, :submit").click(function(e) {
        var t = $.data(this, "lastClicked"),
            i = (new Date).getTime();
        t && i - t < 1e3 ? e.preventDefault() : $.data(this, "lastClicked", i)
    }), $(document).ready(function() {
        $("img[data-src]").unveil()
    }), $("#back_to_mobile_switch_link").click(function(e) {
        e.preventDefault();
        e = window.location.href;
        e += 0 < e.indexOf("?") ? "&" : "?", window.location.href = e + "comesFrom=mobile"
    });
var stepper_submit_timeout, BuyNowStepper, page_up_button_timeout = null,
    getCookie = ($(document).scroll(function(e) {
        1200 < window.pageYOffset ? (clearTimeout(page_up_button_timeout), $("#page_up_button").fadeIn(500), page_up_button_timeout = setTimeout(function() {
            $("#page_up_button").fadeOut(500)
        }, 2e3)) : $("#page_up_button").fadeOut(500)
    }), $("#page_up_button").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    }), function(e) {
        e = document.cookie.match(new RegExp(e + "=([^;]+)"));
        return e ? e[1] : null
    });
$(document).on("touchstart", "#content_cover", function(e) {
    e.stopPropagation(), e.preventDefault(), setAndRemoveContentCover(!1, "category_navigation"), $("#CategoryBoxCollapser, #NavigationList").removeClass("active"), setAndRemoveContentCover(!1, "account_hover"), $("#account_hover").removeClass("hovered"), setAndRemoveContentCover(!1, "shopping_cart"), $("#header_shopping_cart_hover").slideUp("slow"), $("#header_shopping_cart").removeClass("hovered")
}), $(document).on("keyup", ".input_date_check", function(e) {
    var t = e.target.selectionStart,
        i = $(this).val().replace(/[^0-9]/g, ""),
        o = i.length;
    2 <= i.length && (8 !== e.keyCode || 2 !== t) && (i = i.substr(0, 2) + "." + i.substr(2, i.length - 2), 2 === t && 2 === o || 3 === t && 3 === o) && 37 !== e.keyCode && t++, 5 <= i.length && (8 !== e.keyCode || 5 !== t) && (i = i.substr(0, 5) + "." + i.substr(5, i.length - 5), 5 === t && 4 === o || 6 === t && 5 === o) && 37 !== e.keyCode && t++, 0 === i.length ? i = "" : i.length < 10 ? i += "TT.MM.JJJJ".substring(i.length, 10) : i = i.substring(0, 10), $(this).val(i), this.setSelectionRange(t, t)
});
const showPhotoUploadModal = () => {
        $("body").find("#uploadPhotoModal.modal").modal().data("plugin_modal").show()
    },
    showPrescriptionUploadOverlay = () => {
        0 < $("#uploadPhotoModal").length ? showPhotoUploadModal() : $.get("ajax/get_overlay.php", {
            overlay: "prescription_upload"
        }, e => {
            var t;
            void 0 !== e && (t = (e = JSON.parse(e)).overlay_html.replace(/<script(.*?)>(.*?)<\/script>/gi, ""), $("body").append(t), $(e.overlay_html).filter("script").each(function() {
                var e;
                void 0 !== $(this).attr("src") && ((e = document.createElement("script")).type = "text/javascript", e.src = $(this).attr("src"), document.body.appendChild(e)), void 0 !== $(this).html() && "" != $(this).html() && ((e = document.createElement("script")).type = "text/javascript", e.innerHTML = $(this).html(), document.body.appendChild(e))
            }), showPhotoUploadModal())
        })
    };
$("#messageStackModal").length && $("body").find("#messageStackModal.modal").modal().data("plugin_modal").show(), "undefined" != typeof jQuery && (stepper_submit_timeout = null, BuyNowStepper = new function() {
        this.steppUp = function(e, t) {
            clearTimeout(stepper_submit_timeout);
            var i = this.getCurrentQuantity(e) + 1,
                o = this.getMaxQuantity(e);
            this.setNewQuantity(e, i = o < i ? o : i), !0 === t && this.sendForm(e)
        }, this.steppDown = function(e, t) {
            clearTimeout(stepper_submit_timeout);
            var i = this.getCurrentQuantity(e) - 1;
            this.setNewQuantity(e, i = i < 1 ? 1 : i), !0 === t && this.sendForm(e)
        }, this.getCurrentQuantity = function(e) {
            e = $(e).val();
            return !0 === isNaN(e) && (e = 1), parseInt(e)
        }, this.getMaxQuantity = function(e) {
            e = parseInt($(e).attr("max"));
            return e = !0 === isNaN(e) ? 20 : e
        }, this.setNewQuantity = function(e, t) {
            $(e).val(t)
        }, this.sendForm = function(e) {
            stepper_submit_timeout = setTimeout(function() {
                $("#page_waiting_image").show(), setTimeout(function() {
                    $(e).closest("form").submit()
                }, 300)
            }, 1e3)
        }
    }),
    function(m) {
        function e(t, o) {
            function e(e) {
                clearTimeout(r), clearTimeout(n), f = null, n = setTimeout(function() {
                    var e;
                    t.addClass("active"), o.addClass("active"), setAndRemoveContentCover(!0, "category_navigation"), l.button = _(t), l.dropdown = _(o), c || (e = o.height() - 1, o.find("> li > .submenu").css("height", e + "px"), c = !0)
                }, 100)
            }

            function s(i) {
                m.each(o.find("> li > a"), function() {
                    var e = m(this),
                        t = e.next();
                    e.removeClass("active"), t && t.removeClass("active"), i && this === i && (e.addClass("active"), t) && t.addClass("active")
                }), m("img[data-src]").unveil()
            }

            function i(e) {
                clearTimeout(r),
                    function(e) {
                        var t, i = !1;
                        for (t in l)
                            if (i = g(e, l[t])) break;
                        return i
                    }({
                        x: e.pageX,
                        y: e.pageY
                    }) || (clearTimeout(n), r = setTimeout(function() {
                        t.removeClass("active"), o.removeClass("active"), setAndRemoveContentCover(!1, "category_navigation"), s()
                    }, 500))
            }
            var n, r, a, l = {},
                c = !1,
                d = {
                    x: 0,
                    y: 0
                },
                u = {
                    x: 0,
                    y: 0
                },
                p = {
                    x: 0,
                    y: 0
                },
                h = "",
                f = null,
                _ = function(e) {
                    var t = e.offset(),
                        i = e.outerHeight(),
                        e = e.outerWidth();
                    return {
                        x1: t.left,
                        x2: t.left + e,
                        y1: t.top,
                        y2: t.top + i
                    }
                },
                g = function(e, t) {
                    return e.x > t.x1 && e.x < t.x2 && e.y > t.y1 && e.y < t.y2
                };
            t.bind("mouseenter", e), o.bind("mouseenter", e), t.bind("mouseleave", i), o.bind("mouseleave", i), o.bind("mousemove", function(e) {
                u.x = e.pageX, u.y = e.pageY
            }), o.find("> li > a").bind("mouseenter", function(n) {
                var e = (new Date).getTime();
                h != n.target && ("ontouchstart" in window || e < f + 500) ? (h = n.target, f = (new Date).getTime(), s(n.target)) : (clearTimeout(a), d.x = u.x, d.y = u.y, p.x = d.x, p.y = d.y, function o() {
                    a = setTimeout(function() {
                        var e = m(n.target).offset(),
                            t = m(n.target).outerHeight(),
                            i = {
                                x: u.x,
                                y: u.y
                            };
                        g(i, {
                            x1: p.x - 1,
                            x2: p.x + 1,
                            y1: e.top - 1,
                            y2: e.top + t + 1
                        }) ? s(n.target) : (p.x = i.x, p.y = i.y, o())
                    }, 20)
                }())
            }).bind("mouseleave", function(e) {
                clearTimeout(a)
            }), t.bind("click", function() {
                t.hasClass("active") ? (t.removeClass("active"), o.removeClass("active"), setAndRemoveContentCover(!1, "category_navigation")) : (t.addClass("active"), o.addClass("active"), setAndRemoveContentCover(!0, "category_navigation"))
            })
        }
        m(function() {
            e(m("#CategoryBoxCollapser"), m("#NavigationList"))
        });
        var o, n = {},
            s = {};

        function r() {
            m("#categories_sub_tab_line")[0].scrollWidth > m("#categories_sub").width() ? 0 <= m("#categories_sub_tab_line").position().left ? (m("#categories_sub .categories_sub_none_swipe_prev").hide(), m("#categories_sub .categories_sub_none_swipe_next").show(), clearInterval(o)) : m("#categories_sub_tab_line")[0].scrollWidth + m("#categories_sub_tab_line").position().left <= m("#categories_sub").width() ? (m("#categories_sub .categories_sub_none_swipe_prev").show(), m("#categories_sub .categories_sub_none_swipe_next").hide(), clearInterval(o)) : m("#categories_sub .categories_sub_none_swipe_next, #categories_sub .categories_sub_none_swipe_prev").show() : m("#categories_sub .categories_sub_none_swipe_next, #categories_sub .categories_sub_none_swipe_prev").hide()
        }

        function t(e, t) {
            c(m("#categories_sub_tab_line .categories_sub_tab_active"));
            var i = t.scrollLeft();
            o = setInterval(function() {
                e ? i += 9 : i -= 9, t.scrollLeft(i), r()
            }, 20)
        }

        function a(e) {
            var t, i;
            0 < e.find(".categories_sub_tab_page").length && (t = e.children()[0].getBoundingClientRect().width, i = m(window).width(), e.position().left + t > i ? m("#categories_sub_scroll").animate({
                scrollLeft: -1 * (m("#categories_sub_tab_line").position().left + i - e.position().left - t - 1) + "px"
            }, 10, function() {
                l(e, t)
            }) : l(e, t))
        }

        function l(e, t) {
            e.find("a").css({
                left: e.position().left
            }), e.addClass("categories_sub_tab_active"), m(".categories_sub_tab").eq(e.index() + 1).children().css({
                "margin-left": t
            }), m("#categories_sub_scroll").css({
                "overflow-x": "hidden"
            }), m("img[data-src]").unveil()
        }

        function c(e) {
            m("#categories_sub_scroll").css({
                "overflow-x": "scroll"
            }), e.find("a").css({
                left: "0"
            }), e.removeClass("categories_sub_tab_active"), m(".categories_sub_tab").eq(e.index() + 1).children().css({
                "margin-left": "0"
            })
        }
        0 < m("#categories_sub").length && (r(), addEvent(window, "resize", function() {
            r()
        })), m(document).on("mousedown touchstart", ".categories_sub_none_swipe_next", function(e) {
            e.preventDefault(), clearInterval(o), t(!0, m(this).parent().children("div").first().children())
        }), m(document).on("mousedown touchstart", ".categories_sub_none_swipe_prev", function(e) {
            e.preventDefault(), clearInterval(o), t(!1, m(this).parent().children("div").first().children())
        }), m(document).on("mouseup touchend", ".categories_sub_none_swipe_next", function(e) {
            e.preventDefault(), clearInterval(o)
        }), m(document).on("mouseup touchend", ".categories_sub_none_swipe_prev", function(e) {
            e.preventDefault(), clearInterval(o)
        }), m(".categories_sub_tab > a").click(function(e) {
            var t = m(this).parent();
            "ontouchstart" in window && 0 < t.find(".categories_sub_tab_page").length && (e.preventDefault(), e = !1, t.hasClass("categories_sub_tab_active") && (e = !0), m(".categories_sub_tab_active").each(function() {
                c(m(this))
            }), 0 == e) && a(t)
        }), m(".categories_sub_tab").mouseenter(function(e) {
            var t = m(this),
                i = t.attr("id").toString();
            null != s[i] && clearTimeout(s[i]), n[i] = setTimeout(function() {
                a(t)
            }, 200)
        }), m(".categories_sub_tab").mouseleave(function(e) {
            var t = m(this),
                i = t.attr("id").toString();
            null != n[i] && clearTimeout(n[i]), s[i] = setTimeout(function() {
                c(t)
            }, 200)
        })
    }(jQuery), $(document).ready(function() {
        $(".submenu_banner").find("img").unveil(null, function() {
            $(this).load(function() {
                var e = $(this),
                    t = $(e).parent().data("banner-name"),
                    i = $(e).parent().data("banner-img");
                !(e = $(e).parent().data("banner-id")) || null != getCookie("category_navigation_banner_track_view") && -1 !== getCookie("category_navigation_banner_track_view").indexOf(e) || ("undefined" != typeof dataLayer && dataLayer.push({
                    ecommerce: {
                        promoView: {
                            promotions: [{
                                id: e,
                                name: t,
                                creative: i,
                                position: "Startseite-Navigationsbanner"
                            }]
                        }
                    }
                }), $.ajax({
                    type: "POST",
                    data: "action=addViews&banner_schedule_id=" + e,
                    url: "/ajax/category_navigation_banner_tracking.php"
                }))
            })
        }), $(".submenu_banner").on("click", function(e) {
            e.preventDefault();
            var t = $(this),
                e = t,
                i = function() {
                    window.location = $(t).attr("href")
                },
                o = $(e).data("banner-id"),
                n = $(e).data("banner-name"),
                e = $(e).data("banner-img");
            !o || null != getCookie("category_navigation_banner_track_click") && -1 !== getCookie("category_navigation_banner_track_click").indexOf(o) ? i() : "undefined" != typeof dataLayer ? dataLayer.push({
                event: "promotionClick",
                ecommerce: {
                    promoClick: {
                        promotions: [{
                            id: o,
                            name: n,
                            creative: e,
                            position: "Startseite-Navigationsbanner"
                        }]
                    }
                },
                eventCallback: function() {
                    $.ajax({
                        type: "POST",
                        data: "action=addClicks&banner_schedule_id=" + o,
                        url: "/ajax/category_navigation_banner_tracking.php",
                        success: function() {
                            return i()
                        }
                    })
                }
            }) : $.ajax({
                type: "POST",
                data: "action=addClicks&banner_schedule_id=" + o,
                url: "/ajax/category_navigation_banner_tracking.php",
                success: function() {
                    return i()
                }
            })
        })
    }),
    function() {
        var e = document.createElement("div"),
            e = (e.id = "megamenu_cover", e.style.display = "none", e.setAttribute("onclick", ""), document.body.appendChild(e), document.querySelectorAll("#megamenu-container .mm-mainitem.mm-mainitem-menu"));
        [].slice.call(e).forEach(function(e) {
            var t = e.querySelector(".mm-close a");
            t && t.addEventListener("click", function() {
                e.classList.remove("hover"), $("#megamenu_cover").hide()
            })
        }), $(".mm-mainitem.mm-mainitem-menu > a").click(function() {
            $(this).parent().hasClass("hover") ? ($(this).parent().toggleClass("hover"), $(this).parent().find(".active").toggleClass("active"), $("#megamenu_cover").hide()) : ($(this).parents().find(".mm-mainitem.mm-mainitem-menu.hover").toggleClass("hover"), $(this).parent().toggleClass("hover"), $(this).parent().find(".active").toggleClass("active"), $("#megamenu_cover").show())
        }), $(document).on("click", function(e) {
            $(e.target).closest(".mm-v").length || ($(".mm-v").find(".hover").toggleClass("hover"), $("#megamenu_cover").hide())
        }), $(".mm-more-button").click(function() {
            $(this).parent().parent().hasClass("active") || $(this).parents().find(".mm-more.active").toggleClass("active"), $(this).parent().parent().toggleClass("active")
        })
    }();
var content_cover_set_from = [];

function setAndRemoveContentCover(e, t) {
    0 == e ? (delete content_cover_set_from[t], 0 == Object.keys(content_cover_set_from).length && $("#content_cover").stop().hide()) : 1 == e && (content_cover_set_from[t] = "show", $("#header").css({
        zIndex: "99",
        position: "relative",
        background: "#FFF"
    }), $("#content_cover").stop().show())
}

function openAndCloseAccountHover(e) {
    0 == e ? ($("#account_hover").removeClass("hovered"), setAndRemoveContentCover(!1, "account_hover")) : ($("#account_hover").addClass("hovered"), $("img[data-src]").unveil(), setAndRemoveContentCover(!0, "account_hover"))
}
$("#account_information_header a").click(function(e) {
    "ontouchstart" in window && (e.stopPropagation(), e.preventDefault(), $("#account_hover").hasClass("hovered") ? openAndCloseAccountHover(!1) : openAndCloseAccountHover(!0))
}), $("#account_information").mouseenter(function(e) {
    "ontouchstart" in window && (e.stopPropagation(), e.preventDefault()), openAndCloseAccountHover(!0)
}), $("#account_information").mouseleave(function(e) {
    "ontouchstart" in window && (e.stopPropagation(), e.preventDefault()), "input" != e.target.tagName.toLowerCase() && openAndCloseAccountHover(!1)
}), $("#header_prescription_scan_wrapper").on("click", () => showPrescriptionUploadOverlay()), $(function() {
    var n, s = 0,
        r = 0;
    $("#idOfSearchfield").keyup(function(e) {
        var t, i = $("#idOfSearchfield").val(),
            o = (new Date).getTime();
        (40 == e.keyCode || 38 == e.keyCode) && 0 < $("#autosuggest_wrapper").length ? (t = $("#autosuggest a").index($("#autosuggest .hover")), $("#autosuggest a").removeClass("hover"), r = (new Date).getTime(), (40 == e.keyCode ? $("#autosuggest a").eq(t + 1) : $("#autosuggest a").eq(t - 1)).addClass("hover")) : "" != i ? $.ajax({
            url: "ajax/auto_suggest.php",
            type: "POST",
            data: {
                input: i
            },
            success: function(e) {
                null != e && s < o && (s = o, $("#autosuggest_wrapper").remove(), clearInterval(n), $("#search_field").append(e), $("#autosuggest_wrapper").on("mouseleave", function(e) {
                    $("#autosuggest_wrapper").remove()
                }), $("#autosuggest a").on("mouseover", function(e) {
                    $("#autosuggest a").removeClass("hover"), $(this).addClass("hover")
                }), r = (new Date).getTime(), n = setInterval(function() {
                    r + 1e4 - (new Date).getTime() < 0 && (!1 === $("#autosuggest_wrapper").is(":hover") && $("#autosuggest_wrapper").remove(), clearInterval(n))
                }, 500))
            }
        }) : (s = o, $("#autosuggest_wrapper").remove(), clearInterval(n))
    }), $("#idOfSearchfield").keydown(function(e) {
        if (13 == e.keyCode && 0 < $("#autosuggest_wrapper").length) {
            e = $("#autosuggest a").index($("#autosuggest .hover"));
            if (0 <= e) return $(location).attr("href", $("#autosuggest a").eq(e).attr("href")), !1
        }
    })
});
var input, Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t, i, o, n, s, r, a = "",
            l = 0;
        for (e = Base64._utf8_encode(e); l < e.length;) o = (t = e.charCodeAt(l++)) >> 2, n = (3 & t) << 4 | (t = e.charCodeAt(l++)) >> 4, s = (15 & t) << 2 | (i = e.charCodeAt(l++)) >> 6, r = 63 & i, isNaN(t) ? s = r = 64 : isNaN(i) && (r = 64), a = a + this._keyStr.charAt(o) + this._keyStr.charAt(n) + this._keyStr.charAt(s) + this._keyStr.charAt(r);
        return a
    },
    decode: function(e) {
        var t, i, o, n, s, r, a = "",
            l = 0;
        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) o = this._keyStr.indexOf(e.charAt(l++)), t = (15 & (n = this._keyStr.indexOf(e.charAt(l++)))) << 4 | (s = this._keyStr.indexOf(e.charAt(l++))) >> 2, i = (3 & s) << 6 | (r = this._keyStr.indexOf(e.charAt(l++))), a += String.fromCharCode(o << 2 | n >> 4), 64 != s && (a += String.fromCharCode(t)), 64 != r && (a += String.fromCharCode(i));
        return a = Base64._utf8_decode(a)
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", i = 0; i < e.length; i++) {
            var o = e.charCodeAt(i);
            o < 128 ? t += String.fromCharCode(o) : t = 127 < o && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192)) + String.fromCharCode(63 & o | 128) : (t = (t += String.fromCharCode(o >> 12 | 224)) + String.fromCharCode(o >> 6 & 63 | 128)) + String.fromCharCode(63 & o | 128)
        }
        return t
    },
    _utf8_decode: function(e) {
        var t, i = "",
            o = 0;
        for (c1 = c2 = 0; o < e.length;)(t = e.charCodeAt(o)) < 128 ? (i += String.fromCharCode(t), o++) : 191 < t && t < 224 ? (c2 = e.charCodeAt(o + 1), i += String.fromCharCode((31 & t) << 6 | 63 & c2), o += 2) : (c2 = e.charCodeAt(o + 1), c3 = e.charCodeAt(o + 2), i += String.fromCharCode((15 & t) << 12 | (63 & c2) << 6 | 63 & c3), o += 3);
        return i
    }
};

function FadeBanner() {
    var t = this;

    function i() {
        var e = $("body").outerWidth();
        1500 < e ? $(t.fade_banner_wrapper).find(".fade_banner_hinweis").css({
            left: "0px"
        }) : $(t.fade_banner_wrapper).find(".fade_banner_hinweis").css({
            left: (1500 - e) / 2 + "px"
        })
    }

    function o() {
        null != t.change_banner_interval && clearInterval(t.change_banner_interval), t.change_banner_interval = setInterval(function() {
            t.mouse_over || "complete" === document.readyState && (t.fade_banner_current_count == t.fade_banner_count ? t.fade_banner_new_count = 0 : t.fade_banner_new_count = t.fade_banner_current_count + 1, n())
        }, "category" === $(t.fade_banner_wrapper).find(".fade_banner").data("banner-position") ? t.category_change_interval_in_milliseconds : t.change_interval_in_milliseconds)
    }

    function n() {
        t.fade_banner_current_count != t.fade_banner_new_count && ($(t.fade_banner_wrapper).find(" .fade_banner").eq(t.fade_banner_new_count).find("a img").trigger("unveil"), $(t.fade_banner_wrapper).find(".fade_banner").eq(t.fade_banner_current_count).fadeOut("slow"), $(t.fade_banner_wrapper).find(".fade_banner_control span").eq(t.fade_banner_current_count).css({
            "background-color": "#999999"
        }), $(t.fade_banner_wrapper).find(".fade_banner").eq(t.fade_banner_new_count).fadeIn("slow"), $(t.fade_banner_wrapper).find(".fade_banner_control span").eq(t.fade_banner_new_count).css({
            "background-color": "#ffba31"
        })), t.fade_banner_current_count = t.fade_banner_new_count
    }

    function s(e) {
        o(), t.fade_banner_new_count = $(e).index(), n()
    }

    function r(e) {
        var t = $(e).parent().parent().data("banner-name"),
            i = $(e).parent().parent().data("banner-img"),
            o = $(e).parent().parent().data("banner-id"),
            n = null,
            n = "category" !== $(e).parent().parent().data("banner-position") ? "Startseite-Fade-Banner-" + $(e).parent().parent().data("banner-position") : "Kategorieseite-Fade-Banner-header";
        "undefined" != typeof dataLayer && dataLayer.push({
            ecommerce: {
                promoView: {
                    promotions: [{
                        id: o,
                        name: t,
                        creative: i,
                        position: n
                    }]
                }
            }
        })
    }
    this.fade_banner_wrapper = null, this.fade_banner_count = 0, this.fade_banner_current_count = 0, this.fade_banner_new_count = 0, this.change_banner_interval = null, this.change_navigation_point_timeout = null, this.change_interval_in_milliseconds = 2e4, this.category_change_interval_in_milliseconds = 3e3, this.mouse_over = !1, this.create = function(e) {
        this.fade_banner_wrapper = $(e), this.fade_banner_count = $(this.fade_banner_wrapper).find(".fade_banner").length - 1, i(), o(), window.addEventListener("resize", function() {
            setTimeout(function() {
                i()
            }, 10)
        }), $(t.fade_banner_wrapper).find("img").unveil(null, function() {
            $(this).load(function() {
                r($(this))
            })
        }), $(t.fade_banner_wrapper).find(".fade_banner_control_tab").click(function() {
            s(this)
        }), $(t.fade_banner_wrapper).find(".fade_banner a").mouseover(function(e) {
            t.mouse_over = !0
        }), $(t.fade_banner_wrapper).find(".fade_banner a").mouseout(function(e) {
            t.mouse_over = !1
        }), $(t.fade_banner_wrapper).find(".fade_banner_control_tab").mouseover(function() {
            var e = this;
            null != t.change_navigation_point_timeout && clearTimeout(t.change_navigation_point_timeout), t.change_navigation_point_timeout = setTimeout(function() {
                $(t.fade_banner_wrapper).find(".fade_banner_control_tab").eq($(e).index()).is(":hover") && s(e)
            }, 300)
        }), $(t.fade_banner_wrapper).find("span.fade_banner_hinweis").on("click", function(e) {
            var t = $(this).parent().data("banner-id");
            return $.ajax({
                url: "ajax/get_banner_obligatory_text.php",
                type: "GET",
                data: "id=" + t,
                success: function(e) {
                    "" != e && new Overlay(JSON.parse(e).overlay_html).open()
                }
            }), !1
        }), $(t.fade_banner_wrapper).find(".fade_banner a").on("click", function(e) {
            e.preventDefault();
            var t = $(this).parent().data("banner-link-use-new-tab"),
                i = $(this).parent().data("banner-link-disabled"),
                o = $(this).parent().data("banner-link-is-video"),
                n = $(this);
            return function(e, t) {
                var i = $(e).parent().data("banner-id"),
                    o = $(e).parent().data("banner-name"),
                    n = $(e).parent().data("banner-img"),
                    s = null;
                s = "category" !== $(e).parent().data("banner-position") ? "Startseite-Fade-Banner-" + $(e).parent().data("banner-position") : "Kategorieseite-Fade-Banner-header"; {
                    if ("undefined" == typeof dataLayer) return t();
                    dataLayer.push({
                        event: "promotionClick",
                        ecommerce: {
                            promoClick: {
                                promotions: [{
                                    id: i,
                                    name: o,
                                    creative: n,
                                    position: s
                                }]
                            }
                        },
                        eventCallback: t,
                        eventTimeout: 2e3
                    })
                }
            }(n, function() {
                var e;
                o ? (e = $(n).attr("href"), $.colorbox({
                    open: !0,
                    fixed: !0,
                    html: '<video style="width: 100%; top: 50%; margin-top: -196px; position: absolute;" controls><source src="' + e + '.ogv" type="video/ogg" /><source src="' + e + '.mp4" type="video/mp4" /><source src="' + e + '.webm" type="video/webm" /></video>',
                    maxWidth: "700px",
                    maxHeight: "60%",
                    opacity: "0.75",
                    innerWidth: "100%",
                    innerHeight: "100%"
                })) : i || (e = $(n).attr("href"), 1 == t ? window.open(e, "_blank") : window.location = e)
            }), !1
        }), $(t.fade_banner_wrapper).find(".fade_banner").on("swiperight", function() {
            o(), 0 == t.fade_banner_current_count ? t.fade_banner_new_count = t.fade_banner_count : t.fade_banner_new_count = t.fade_banner_current_count - 1, n()
        }), $(t.fade_banner_wrapper).find(".fade_banner").on("swipeleft", function() {
            o(), t.fade_banner_current_count == t.fade_banner_count ? t.fade_banner_new_count = 0 : t.fade_banner_new_count = t.fade_banner_current_count + 1, n()
        }), $(t.fade_banner_wrapper).find(".prev").on("click", function() {
            o(), 0 == t.fade_banner_current_count ? t.fade_banner_new_count = t.fade_banner_count : t.fade_banner_new_count = t.fade_banner_current_count - 1, n()
        }), $(t.fade_banner_wrapper).find(".next").on("click", function() {
            o(), t.fade_banner_current_count == t.fade_banner_count ? t.fade_banner_new_count = 0 : t.fade_banner_new_count = t.fade_banner_current_count + 1, n()
        }), $(t.fade_banner_wrapper).find(".fade_banner").on("movestart", function(e) {
            (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault()
        })
    }, this.incrementBannerViewCount = function(e) {
        r(e)
    }
}

function BannerTracking() {
    const t = this;

    function i(e) {
        var t = $(e).parent().parent().data("banner-name"),
            i = $(e).parent().parent().data("banner-img"),
            o = $(e).parent().parent().data("banner-id"),
            n = null,
            n = "category" !== $(e).parent().parent().data("banner-position") ? "Startseite-Fade-Banner-" + $(e).parent().parent().data("banner-position") : "Kategorieseite-Fade-Banner-header";
        "undefined" != typeof dataLayer && dataLayer.push({
            ecommerce: {
                promoView: {
                    promotions: [{
                        id: o,
                        name: t,
                        creative: i,
                        position: n
                    }]
                }
            }
        })
    }
    this.banner_slider = null, this.init = function(e) {
        this.banner_slider = $(e), $(t.banner_slider).find("img").unveil(null, function() {
            $(this).load(function() {
                i($(this))
            })
        }), $(t.banner_slider).find(".banner-slider-text").on("click", function(e) {
            var t = $(this).parent().data("banner-id");
            return $.ajax({
                url: "ajax/get_banner_obligatory_text.php",
                type: "GET",
                data: "id=" + t,
                success: function(e) {
                    "" != e && new Overlay(JSON.parse(e).overlay_html).open()
                }
            }), !1
        }), $(t.banner_slider).find("a").on("click", function(e) {
            e.preventDefault();
            var t = $(this).parent().data("banner-link-use-new-tab"),
                i = $(this).parent().data("banner-link-disabled"),
                o = $(this).parent().data("banner-link-is-video"),
                n = $(this);
            return function(e, t) {
                var i = $(e).parent().data("banner-id"),
                    o = $(e).parent().data("banner-name"),
                    n = $(e).parent().data("banner-img"),
                    s = null;
                s = "category" !== $(e).parent().data("banner-position") ? "Startseite-Fade-Banner-" + $(e).parent().data("banner-position") : "Kategorieseite-Fade-Banner-header"; {
                    if ("undefined" == typeof dataLayer) return t();
                    dataLayer.push({
                        event: "promotionClick",
                        ecommerce: {
                            promoClick: {
                                promotions: [{
                                    id: i,
                                    name: o,
                                    creative: n,
                                    position: s
                                }]
                            }
                        },
                        eventCallback: t,
                        eventTimeout: 2e3
                    })
                }
            }(n, function() {
                var e;
                o ? (e = $(n).attr("href"), $.colorbox({
                    open: !0,
                    fixed: !0,
                    html: '<video style="width: 100%; top: 50%; margin-top: -196px; position: absolute;" controls><source src="' + e + '.ogv" type="video/ogg" /><source src="' + e + '.mp4" type="video/mp4" /><source src="' + e + '.webm" type="video/webm" /></video>',
                    maxWidth: "700px",
                    maxHeight: "60%",
                    opacity: "0.75",
                    innerWidth: "100%",
                    innerHeight: "100%"
                })) : i || (e = $(n).attr("href"), 1 == t ? window.open(e, "_blank") : window.location = e)
            }), !1
        }), $(this).find("img").each(function(e) {
            void 0 === $(this).attr("src") && i($(this))
        })
    }
}

function Overlay(e) {
    this.overlay_html = e, this.initEvents()
}

function Infobox(e, t, i, o) {
    this.source = $(e), this.target = $(t), this.anchor_position = o, this.info_icon = i, this.init()
}

function showAndHideFilter(e) {
    $(e.target).is("li") && ($(this).next().is(":visible") ? $(this).next().slideUp(function() {
        $(this).prev().removeClass("opened"), $(this).removeClass("opened"), $(this).prev().find("input").val(!1)
    }) : $(this).next().slideDown(function() {
        $(this).prev().addClass("opened"), $(this).addClass("opened"), $(this).prev().find("input").val(!0)
    }))
}

function onFilterChanged(e) {
    $(e).closest("form").attr("action", window.location.origin + window.location.pathname + window.location.hash), $(e).closest("form").submit()
}

function checkUncheckFilter(e) {
    $(e.target).is("input") || $(this).children().first().is('input[type="radio"]') && $(this).children().first().prop("checked") || $(this).children().first().prop("checked", !$(this).children().first().prop("checked")), $(this).children().first().prop("checked") ? ($(this).parent().is("ul#filter_s") && $(this).parent().find("li").removeClass("checked"), $(this).addClass("checked")) : $(this).removeClass("checked");
    var t = $(this);
    0 < $("#product_info_detail_view_wrapper .product_info_feedback_area").length && setTimeout(function() {
        onFilterChanged(t.children().first())
    }, 500)
}

function resetFilterItems() {
    $(this).parent().parent().next("li").find("input").prop("checked", !1), $(this).closest("form").attr("action", window.location.origin + window.location.pathname + window.location.hash), $(this).closest("form").submit()
}

function resetFilterAll() {
    $(this).parent().parent().find("input").prop("checked", !1), $(this).closest("form").attr("action", window.location.origin + window.location.pathname + window.location.hash), $(this).closest("form").submit()
}! function(l) {
    l.fn.unveil = function(e, t) {
        function i() {
            var e = a.filter(function() {
                var e, t, i, o = l(this);
                if (!o.is(":hidden")) return t = (e = n.scrollTop()) + n.height(), o = (i = o.offset().top) + o.height(), e - s <= o && i <= t + s
            });
            o = e.trigger("unveil"), a = a.not(o)
        }
        var o, n = l(window),
            s = e || 0,
            r = 1 < window.devicePixelRatio ? "data-src-retina" : "data-src",
            a = this;
        return this.one("unveil", function() {
            var e;
            (e = this.getAttribute(r) || this.getAttribute("data-src")) && (this.setAttribute("src", e), "function" == typeof t) && t.call(this)
        }), n.on("scroll.unveil resize.unveil lookup.unveil", i), i(), this
    }
}(window.jQuery || window.Zepto), $(document).ready(function() {
        $(".fade_banner_outer_wrapper").each(function() {
            var t = new FadeBanner;
            t.create($(this)), $(this).find("img").each(function(e) {
                void 0 === $(this).attr("data-src") && t.incrementBannerViewCount($(this))
            })
        })
    }), $(document).ready(function() {
        $(".banner-tracking").each(function() {
            (new BannerTracking).init($(this))
        })
    }), Overlay.close = function() {
        $("#overlay").remove()
    }, Overlay.prototype = {
        initEvents: function() {
            var e = this;
            $(window).on("resize", function() {
                setTimeout(function() {
                    return e.resizeOverlayHeight()
                }, 100)
            })
        },
        resizeOverlayHeight: function() {
            $("#overlay_body").css("max-height", $("#overlay").height() - 155 + "px")
        },
        open: function() {
            $("body").append(this.overlay_html), $("#overlay").show(), this.resizeOverlayHeight()
        }
    },
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.easydropdown = t() : e.easydropdown = t()
    }(window, function() {
        return i = [function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(8),
                i = i(3);
            t.ArrayStrategy = i.default, t.default = o.default
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            i = i(41);

            function o(e, t, i, o) {
                var e = e(o, i),
                    i = -1 < e.maxVisibleItemsOverride ? e.maxVisibleItemsOverride : i.behavior.maxVisibleItems,
                    n = o.item.length > i,
                    o = o.sumItemsHeight(i);
                t.open(o, e.type, n)
            }
            i = (t.dispatchOpen = o).bind(null, i.default);
            t.default = i
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return e.reduce(function(e, t) {
                    var i;
                    return "string" == typeof t ? e.push(t) : (i = t[0], t = t[1], i && e.push(t)), e
                }, []).join(" ")
            }
        }, function(e, t, i) {
            "use strict";
            var o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (n = o = o || {}).PUSH = "PUSH", n.REPLACE = "REPLACE", t.default = o
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, i) {
                var o = e.parentNode;
                if ((i = void 0 === i ? !1 : i) && e.matches(t)) return e;
                for (; o && o !== document.body;) {
                    if (o.matches && o.matches(t)) return o;
                    if (!o.parentNode) return null;
                    o = o.parentNode
                }
                return null
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OPTION = '[data-ref~="option"]'
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var i = t.actions,
                    t = t.timers;
                window.clearTimeout(t.keyingTimeoutId), i.keying(), t.keyingTimeoutId = window.setTimeout(function() {
                    return i.resetKeying()
                }, 100), e.disabled = !0, setTimeout(function() {
                    e.disabled = !1, e.focus()
                })
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = []
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = i(26),
                p = i(3),
                h = i(27),
                n = i(28),
                f = i(29),
                _ = i(9);

            function g(e, t, i) {
                void 0 === i && (i = null);
                var o = "undefined" != typeof window,
                    n = [],
                    s = i instanceof u.default ? i : new u.default;
                if ("boolean" == typeof i && !0 === i) s.deep = !0;
                else if (i && s !== i && "object" == typeof i && (g(s, i), [p.default.PUSH, p.default.REPLACE].indexOf(s.arrayStrategy) < 0)) throw RangeError(_.INVALID_ARRAY_STRATEGY(s.arrayStrategy));
                if (!e || "object" != typeof e) throw new TypeError(_.TYPE_ERROR_TARGET(e));
                if (!t || "object" != typeof t) throw new TypeError(_.TYPE_ERROR_SOURCE(t));
                if (Array.isArray(t)) {
                    if (s.arrayStrategy === p.default.PUSH) return e.push.apply(e, t), e;
                    for (var r = 0; r < t.length; r++) n.push(r.toString())
                } else n = Object.getOwnPropertyNames(t);
                for (var a = 0, l = n; a < l.length; a++) {
                    var c = l[a],
                        d = Object.getOwnPropertyDescriptor(t, c);
                    if (("function" != typeof d.get || d.set || s.includeReadOnly) && (d.enumerable || s.includeNonEmurable))
                        if (!s.deep || "object" != typeof t[c] || o && t[c] instanceof window.Node || o && t[c] === window.document.body || o && t[c] === window.document.documentElement || null === t[c] || Array.isArray(t[c]) && s.useReferenceIfArray || !e[c] && s.useReferenceIfTargetUnset) try {
                            e[c] = t[c]
                        } catch (t) {
                            f.default(t, e, c, s.errorMessage)
                        } else {
                            if (!Object.prototype.hasOwnProperty.call(e, c) || null === e[c]) try {
                                e[c] = Array.isArray(t[c]) ? [] : s.preserveTypeIfTargetUnset ? h.default(t[c]) : {}
                            } catch (t) {
                                f.default(t, e, c, s.errorMessage)
                            }
                            g(e[c], t[c], s)
                        }
                }
                return e
            }
            Object.keys(n.default.prototype).forEach(function(e) {
                return g[e] = (o = e, function() {
                    for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                    return (e = new n.default)[o].apply(e, t)
                });
                var o
            }), t.default = g
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MERGE_ERROR = function(e, t) {
                return 'Unknown property "' + e + '"' + ((t = void 0 === t ? "" : t) ? '. Did you mean "' + t + '"?' : "")
            }, t.TYPE_ERROR_TARGET = function(e) {
                return '[Helpful Merge] Target "' + e + '" must be a valid object'
            }, t.TYPE_ERROR_SOURCE = function(e) {
                return '[Helpful Merge] Source "' + e + '" must be a valid object'
            }, t.INVALID_ARRAY_STRATEGY = function(e) {
                return '[Helpful Merge] Invalid array strategy "' + e + '"'
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(30),
                n = i(31),
                s = i(32);
            t.default = function() {
                this.callbacks = new n.default, this.classNames = new s.default, this.behavior = new o.default, Object.seal(this)
            }
        }, function(e, t, i) {
            "use strict";
            var o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (n = o = o || {}).NONE = "NONE", n.TOP = "TOP", n.BOTTOM = "BOTTOM", t.default = o
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = /(ipad|iphone|ipod)/gi.test(e),
                    i = /android/gi.test(e),
                    o = /opera mini/gi.test(e),
                    e = /windows phone/gi.test(e);
                return !!(t || i || o || e)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UP = 38, t.DOWN = 40, t.SPACE = 32, t.ENTER = 13, t.ESC = 27
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var i = t.state,
                    o = t.actions,
                    t = t.dom;
                i.isOpen && (o.close(), t.select.blur())
            }
        }, function(e, t, i) {
            "use strict";
            var o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (n = o = o || {}).ADD = "ADD", n.EDIT = "EDIT", n.REMOVE = "REMOVE", t.default = o
        }, function(e, t, i) {
            "use strict";
            var o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (n = o = t.DomChangeType || (t.DomChangeType = {})).NONE = "NONE", n.FULL = "FULL", n.REPLACE = "REPLACE", n.INNER = "INNER", n.OUTER = "OUTER", t.default = o
        }, function(e, t, i) {
            "use strict";
            var o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (n = o = o || {}).CLOSED = "CLOSED", n.OPEN_ABOVE = "OPEN_ABOVE", n.OPEN_BELOW = "OPEN_BELOW", t.default = o
        }, function(e, t, i) {
            "use strict";
            var o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (n = o = o || {}).AT_TOP = "AT_TOP", n.SCROLLED = "SCROLLED", n.AT_BOTTOM = "AT_BOTTOM", t.default = o
        }, function(e, t, i) {
            "use strict";

            function o() {
                this.label = "", this.options = [], this.isDisabled = !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(o.prototype, "totalOptions", {
                get: function() {
                    return this.options.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(o.prototype, "hasLabel", {
                get: function() {
                    return "" !== this.label
                },
                enumerable: !0,
                configurable: !0
            }), t.default = o
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function() {
                this.label = "", this.value = "", this.isDisabled = !1
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(22), i(23);
            t = i(24);
            e.exports = t.default
        }, function(e, t) {
            if ("undefined" != typeof window) try {
                var i = new window.CustomEvent("test", {
                    cancelable: !0
                });
                if (i.preventDefault(), !0 !== i.defaultPrevented) throw new Error("Could not prevent default")
            } catch (i) {
                function o(e, t) {
                    var i, o;
                    return t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    }, (i = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o = i.preventDefault, i.preventDefault = function() {
                        o.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, i
                }
                o.prototype = window.Event.prototype, window.CustomEvent = o
            }
        }, function(e, t) {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector)
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i(7),
                a = i(25),
                l = i(72);

            function o(e, t) {
                void 0 === t && (t = {});
                var i = e;
                if (!((i = "string" == typeof e ? document.querySelector(e) : i) instanceof HTMLSelectElement)) throw new TypeError("[EasyDropDown] Invalid select element provided");
                if (i.multiple) throw new Error("[EasyDropDown] EasyDropDown does not support the `multiple` attribute on select elements.");
                for (var o = 0, n = r.default; o < n.length; o++) {
                    var s = n[o];
                    if (s.selectElement === i) return new l.default(s)
                }
                e = new a.default(i, t);
                return r.default.push(e), new l.default(e)
            }(i = o).all = function(t) {
                void 0 === t && (t = {});
                var e = document.querySelectorAll("select");
                Array.prototype.forEach.call(e, function(e) {
                    return o(e, t)
                })
            }, i.destroy = function() {
                r.default.slice().forEach(function(e) {
                    return e.destroy()
                })
            }, t.default = i
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0),
                n = i(10),
                s = i(33),
                r = i(50),
                a = i(1),
                l = i(63),
                c = i(64),
                d = i(65),
                u = i(66),
                p = i(67),
                h = i(69),
                f = i(7),
                _ = i(71);

            function g(e, t) {
                this.config = o.default(new n.default, t, !0), this.state = h.default.mapFromSelect(e, this.config), this.renderer = new r.default(this.config.classNames), this.dom = this.renderer.render(this.state, e), this.timers = new _.default, this.actions = p.default.proxyActions(this.state, {
                    closeOthers: d.default.bind(null, this, f.default),
                    scrollToView: u.default.bind(null, this.dom, this.timers)
                }, this.handleStateUpdate.bind(this)), this.eventBindings = s.default({
                    actions: this.actions,
                    config: this.config,
                    dom: this.dom,
                    state: this.state,
                    timers: this.timers
                }), this.timers.pollChangeIntervalId = l.default(this.dom.select, this.state, this.actions, this.config), this.config.behavior.liveUpdates && (this.timers.pollMutationIntervalId = c.default(this.dom.select, this.state, this.refresh.bind(this)))
            }
            Object.defineProperty(g.prototype, "selectElement", {
                get: function() {
                    return this.dom.select
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(g.prototype, "value", {
                get: function() {
                    return this.state.value
                },
                set: function(e) {
                    if ("string" != typeof e) throw new TypeError("[EasyDropDown] Provided value not a valid string");
                    this.dom.select.value = e
                },
                enumerable: !0,
                configurable: !0
            }), g.prototype.open = function() {
                a.default(this.actions, this.config, this.dom)
            }, g.prototype.close = function() {
                this.actions.close()
            }, g.prototype.refresh = function() {
                this.state = o.default(this.state, h.default.mapFromSelect(this.dom.select, this.config)), this.renderer.update(this.state), this.dom.group.length = this.dom.option.length = this.dom.item.length = 0, r.default.queryDomRefs(this.dom, ["group", "option", "item"])
            }, g.prototype.validate = function() {
                return !(this.state.isRequired && !this.state.hasValue && (this.actions.invalidate(), 1))
            }, g.prototype.destroy = function() {
                this.timers.clear(), this.eventBindings.forEach(function(e) {
                    return e.unbind()
                }), this.renderer.destroy();
                var e = f.default.indexOf(this);
                f.default.splice(e, 1)
            }, g.prototype.handleStateUpdate = function(e, t) {
                var i = this.config.callbacks;
                switch (this.renderer.update(e, t), t) {
                    case "bodyStatus":
                        var o = void 0;
                        "function" == typeof(o = e.isOpen ? i.onOpen : i.onClose) && o();
                        break;
                    case "selectedIndex":
                        "function" == typeof(o = i.onSelect) && o(e.value);
                        break;
                    case "isClickSelecting":
                        var n, o = i.onOptionClick;
                        !1 === e[t] && (n = e.getOptionFromIndex(e.focusedIndex).value, "function" == typeof o) && o(n)
                }
            }, t.default = g
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(3),
                n = i(9);
            t.default = function() {
                this.deep = !1, this.useReferenceIfTargetUnset = !1, this.useReferenceIfArray = !1, this.preserveTypeIfTargetUnset = !1, this.includeReadOnly = !1, this.includeNonEmurable = !1, this.arrayStrategy = o.default.REPLACE, this.errorMessage = n.MERGE_ERROR, Object.seal(this)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                e = e.constructor;
                return "function" == typeof e && e !== Object ? new e : {}
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(8);

            function n() {
                this.target = null, this.sources = [], this.config = {}
            }
            n.prototype.to = function(e) {
                return this.target = e, this
            }, n.prototype.from = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return this.sources = e, this
            }, n.prototype.with = function(e) {
                return this.config = e, this
            }, n.prototype.exec = function() {
                var i = this;
                return this.sources.reduce(function(e, t) {
                    return o.default(e, t, i.config)
                }, this.target || {})
            }, t.default = n
        }, function(e, t, i) {
            "use strict";

            function s(e, t) {
                for (var i = e.length > t.length ? e : t, o = i === e ? t : e, n = 0, s = 0, r = 0, a = -1; n < i.length; n++) {
                    for (; 0 === r && i[n] !== o[s] && s < o.length;) s++;
                    if (i[n] === o[s]) {
                        if (a !== n - 1 && (r = 0), a = n, s++, ++r === o.length) break
                    } else {
                        if (1 < r) break;
                        r = s = 0
                    }
                }
                for (var a = -1, l = 0, c = 0, d = 0, u = i.length - 1, p = o.length - 1; l < i.length - n; l++) {
                    for (; 0 === d && i[u - l] !== o[p - c] && c < o.length;) c++;
                    if (i[u - l] === o[p - c]) a !== l - 1 && (d = 0), a = l, d++, c++;
                    else {
                        if (1 < d) break;
                        d = c = 0
                    }
                }
                return Math.min(o.length, r + d)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getTotalMatching = s, t.default = function(e, t, i, o) {
                var n;
                if (!Object.hasOwnProperty.call(t, i) && Object.isSealed(t) && !Object.isExtensible(t) && e instanceof TypeError) throw n = function(e, t, i, o) {
                    return e = s(o.toLowerCase(), e), t = Math.abs(o.length - t.length), e > i.totalMatching || e === i.totalMatching && t < i.delta ? {
                        key: o,
                        delta: t,
                        totalMatching: e
                    } : i
                }.bind(null, i, i.toLowerCase()), n = (t = Object.keys(t).reduce(n, {
                    key: "",
                    delta: 1 / 0,
                    totalMatching: 0
                })) && 1 < t.totalMatching ? t.key : "", new TypeError(o(i, n));
                throw e
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function() {
                this.showPlaceholderWhenOpen = !1, this.openOnFocus = !1, this.closeOnSelect = !0, this.useNativeUiOnMobile = !0, this.loop = !1, this.clampMaxVisibleItems = !0, this.liveUpdates = !1, this.maxVisibleItems = 15, Object.seal(this)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function() {
                this.onOpen = null, this.onClose = null, this.onSelect = null, this.onOptionClick = null, Object.seal(this)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function() {
                this.root = "edd-root", this.rootOpen = "edd-root-open", this.rootOpenAbove = "edd-root-open-above", this.rootOpenBelow = "edd-root-open-below", this.rootDisabled = "edd-root-disabled", this.rootInvalid = "edd-root-invalid", this.rootFocused = "edd-root-focused", this.rootHasValue = "edd-root-has-value", this.rootNative = "edd-root-native", this.gradientTop = "edd-gradient-top", this.gradientBottom = "edd-gradient-bottom", this.head = "edd-head", this.value = "edd-value", this.arrow = "edd-arrow", this.select = "edd-select", this.body = "edd-body", this.bodyScrollable = "edd-body-scrollable", this.bodyAtTop = "edd-body-at-top", this.bodyAtBottom = "edd-body-at-bottom", this.itemsList = "edd-items-list", this.group = "edd-group", this.groupDisabled = "edd-group-disabled", this.groupHasLabel = "edd-group-has-label", this.groupLabel = "edd-group-label", this.option = "edd-option", this.optionDisabled = "edd-option-disabled", this.optionFocused = "edd-option-focused", this.optionSelected = "edd-option-selected", Object.seal(this)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(34),
                n = i(35),
                s = i(36);

            function r(t, e) {
                var i = new n.default(e);
                return i.target && (e = function(e) {
                    return i.handler(e, t)
                }, 0 < i.throttle ? i.boundHandler = o.default(e, i.throttle) : i.boundHandler = e, i.target.addEventListener(i.type, i.boundHandler)), i
            }
            t.bindEvent = r, t.default = function(e) {
                return s.default(e.dom).map(r.bind(null, e))
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(r, a) {
                var l = null,
                    c = -1 / 0;
                return function() {
                    for (var e = this, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];

                    function o() {
                        l = null, r.apply(e, t), c = n
                    }
                    var n = Date.now(),
                        s = n - c;
                    a <= s ? o() : (clearTimeout(l), l = setTimeout(o, a - s))
                }
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0);

            function n(e) {
                this.type = "", this.target = null, this.debounce = 0, this.throttle = 0, this.handler = null, this.boundHandler = null, this.passive = !1, o.default(this, e), Object.seal(this)
            }
            n.prototype.unbind = function() {
                this.target && this.target.removeEventListener(this.type, this.boundHandler)
            }, t.default = n
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(37),
                n = i(38),
                s = i(39),
                r = i(40),
                a = i(42),
                l = i(43),
                c = i(44),
                d = i(45),
                u = i(46),
                p = i(49),
                h = i(14),
                f = i(14);
            t.default = function(e) {
                return [{
                    target: e.head,
                    type: "click",
                    handler: r.default
                }, {
                    target: e.body,
                    type: "mousedown",
                    handler: n.default
                }, {
                    target: e.body,
                    type: "click",
                    handler: o.default
                }, {
                    target: e.body,
                    type: "mouseover",
                    handler: s.default
                }, {
                    target: e.itemsList,
                    type: "scroll",
                    handler: a.default
                }, {
                    target: e.select,
                    type: "keydown",
                    handler: u.default
                }, {
                    target: e.select,
                    type: "invalid",
                    handler: d.default
                }, {
                    target: e.select,
                    type: "keypress",
                    handler: p.default
                }, {
                    target: e.select,
                    type: "focus",
                    handler: c.default
                }, {
                    target: e.select,
                    type: "blur",
                    handler: l.default
                }, {
                    target: document.documentElement,
                    type: "click",
                    handler: h.default
                }, {
                    target: window,
                    type: "resize",
                    handler: f.default,
                    throttle: 100
                }]
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(4),
                s = i(5);
            t.default = function(e, t) {
                t.state;
                var i = t.actions,
                    o = t.dom,
                    t = t.config,
                    e = (e.stopPropagation(), n.default(e.target, s.OPTION, !0));
                e && (o = Array.prototype.indexOf.call(o.option, e), i.selectOption(o, t.behavior.closeOnSelect))
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(4),
                n = i(5);
            t.default = function(e, t) {
                t = t.actions;
                e.stopPropagation(), o.default(e.target, n.OPTION, !0) && t.startClickSelecting()
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(4),
                s = i(5);
            t.default = function(e, t) {
                var i = t.state,
                    o = t.actions,
                    t = t.dom,
                    e = (e.stopPropagation(), n.default(e.target, s.OPTION, !0));
                e && !i.isKeying && (i = Array.prototype.indexOf.call(t.option, e), o.focusOption(i))
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i(1),
                i = i(12);

            function o(e, t, i) {
                var o = i.state,
                    n = i.actions,
                    s = i.dom,
                    i = i.config;
                o.isUseNativeMode || (e = e(window.navigator.userAgent), t.stopPropagation(), o.isClosed ? (r.default(n, i, s), (e ? n : s.select).focus()) : n.close())
            }
            i = (t.handleHeadClick = o).bind(null, i.default);
            t.default = i
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i(11);

            function s(e, t, i, o) {
                var n, s = a.default.NONE,
                    r = -1;
                return e <= i && t <= i ? (n = Math.max(t, e), s = e < t ? a.default.TOP : a.default.BOTTOM, r = Math.floor(n / o)) : e <= i ? s = a.default.TOP : t <= i && (s = a.default.BOTTOM), {
                    type: s,
                    maxVisibleItemsOverride: r
                }
            }
            t.mapCollisionData = s, t.default = function(e, t) {
                var i = e.head.getBoundingClientRect(),
                    o = window.innerHeight,
                    n = i.top - 10,
                    o = o - i.bottom - 10;
                return e.option.length < 1 ? {
                    type: a.default.NONE,
                    maxVisibleItemsOverride: -1
                } : (i = Math.min(t.behavior.maxVisibleItems, e.item.length), s(n, o, e.sumItemsHeight(i), e.sumItemsHeight(1)))
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                t.state;
                var i = t.actions,
                    t = t.dom,
                    e = (e.stopPropagation(), t.itemsList),
                    t = e.offsetHeight,
                    o = e.scrollHeight,
                    e = e.scrollTop;
                0 === e ? i.topOut() : e === o - t ? i.bottomOut() : i.scroll()
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var i = t.actions,
                    o = t.state,
                    t = t.config;
                o.isKeying || (i.blur(), t.behavior.openOnFocus && !o.isClickSelecting && i.close())
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i(1);
            t.default = function(e, t) {
                var i = t.actions,
                    o = t.config,
                    n = t.dom,
                    t = t.state;
                i.focus(), o.behavior.openOnFocus && !t.isUseNativeMode && s.default(i, o, n)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var i = t.actions;
                t.config, t.dom, i.invalidate()
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = i(1),
                c = i(6),
                d = i(13),
                u = i(47),
                p = i(48);
            t.default = function(e, t) {
                var i = e.keyCode,
                    o = e.target,
                    n = t.state,
                    s = t.actions,
                    r = t.dom,
                    a = t.config;
                if (!n.isUseNativeMode && !n.isDisabled) switch (i) {
                    case d.DOWN:
                        u.default(e, t);
                        break;
                    case d.UP:
                        p.default(e, t);
                        break;
                    case d.SPACE:
                        if (n.isSearching) return void e.stopPropagation();
                    case d.ENTER:
                        e.stopPropagation(), e.preventDefault(), c.default(o, t), n.isOpen ? s.selectOption(n.focusedIndex, a.behavior.closeOnSelect) : l.default(s, a, r);
                        break;
                    case d.ESC:
                        s.close()
                }
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = i(1),
                p = i(6);
            t.default = function(e, t) {
                var i = e.metaKey,
                    o = e.target,
                    n = t.state,
                    s = t.dom,
                    r = t.actions,
                    a = t.config,
                    l = -1 < n.focusedIndex ? n.focusedIndex : n.selectedIndex,
                    c = 0,
                    d = 1;
                for (e.preventDefault(), p.default(o, t), i && (d = Math.round(Math.max(n.totalOptions / 2, a.behavior.maxVisibleItems))); l += d, d = 1, l >= n.totalOptions && (l = a.behavior.loop ? 0 : n.totalOptions - 1), r.focusOption(l, !0), c++, n.focusedOption && n.focusedOption.isDisabled && c <= n.totalOptions;);
                n.isClosed && u.default(r, a, s)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = i(1),
                p = i(6);
            t.default = function(e, t) {
                var i = e.metaKey,
                    o = e.target,
                    n = t.state,
                    s = t.config,
                    r = t.dom,
                    a = t.actions,
                    l = -1 < n.focusedIndex ? n.focusedIndex : n.selectedIndex,
                    c = 0,
                    d = 1;
                for (e.preventDefault(), p.default(o, t), i && (d = Math.round(Math.max(n.totalOptions / 2, s.behavior.maxVisibleItems))); l -= d, d = 1, l < 0 && (l = s.behavior.loop ? n.totalOptions - 1 : 0), a.focusOption(l, !0), c++, n.focusedOption && n.focusedOption.isDisabled && c < n.totalOptions;);
                n.isClosed && u.default(a, s, r)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i(13);
            t.default = function(e, t, i) {
                var e = e.keyCode,
                    o = t.actions,
                    n = t.timers;
                void 0 === i && (i = 1200), t.state.isUseNativeMode || [s.UP, s.DOWN].includes(e) || (window.clearTimeout(n.searchTimeoutId), o.search(), n.searchTimeoutId = window.setTimeout(function() {
                    return o.resetSearch()
                }, i))
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(51),
                n = i(58),
                s = i(59),
                r = i(60),
                a = i(62);

            function l(e) {
                this.dom = new s.default, this.classNames = e
            }
            l.prototype.render = function(e, t) {
                e = o.default(e, this.classNames), e = n.default(e);
                return this.dom = new s.default, this.dom.root = e, this.dom.option.length = this.dom.group.length = 0, l.queryDomRefs(this.dom), this.injectSelect(t), this.dom
            }, l.prototype.update = function(e, t) {
                var i = o.default(e, this.classNames),
                    i = n.default(i),
                    i = r.default(this.dom.root, i);
                a.default(this.dom.root, i), "selectedIndex" === t && this.syncSelectWithValue(e.value)
            }, l.prototype.destroy = function() {
                this.dom.select.classList.remove(this.classNames.select);
                try {
                    this.dom.root.parentElement.replaceChild(this.dom.select, this.dom.root)
                } catch (e) {}
            }, l.prototype.injectSelect = function(e) {
                var t = e.parentElement,
                    i = this.dom.select;
                if (!t) throw new Error("[EasyDropDown] The provided `<select>` element must exist within a document");
                t.replaceChild(this.dom.root, e), i.parentElement.replaceChild(e, i), e.className = this.classNames.select, e.setAttribute("aria-hidden", "true"), this.dom.select = e
            }, l.prototype.syncSelectWithValue = function(e) {
                var t;
                this.dom.select.value !== e && (t = new CustomEvent("change", {
                    bubbles: !0
                }), this.dom.select.value = e, this.dom.select.dispatchEvent(t))
            }, l.queryDomRefs = function(e, t) {
                return (t = void 0 === t ? Object.keys(e) : t).reduce(function(e, t) {
                    var i, o, n = e.root.querySelectorAll('[data-ref~="' + t + '"]');
                    return n.length < 1 || "root" === t || (i = n[0], null === (o = e[t]) ? e[t] = i : Array.isArray(o) && Array.prototype.push.apply(o, n)), e
                }, e)
            }, t.default = l
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(2),
                n = i(52),
                s = i(55);
            t.default = function(e, t) {
                return '\n        <div\n            class="' + o.default([t.root, [e.isDisabled, t.rootDisabled],
                    [e.isInvalid, t.rootInvalid],
                    [e.isOpen, t.rootOpen],
                    [e.isFocused, t.rootFocused],
                    [e.hasValue, t.rootHasValue],
                    [e.isOpenAbove, t.rootOpenAbove],
                    [e.isOpenBelow, t.rootOpenBelow],
                    [e.isUseNativeMode, t.rootNative]
                ]) + '"\n            role="widget combobox"\n            aria-haspopup="listbox"\n            ' + (e.isOpen ? 'aria-expanded="true"' : "") + "\n            " + (e.isRequired ? 'aria-required="true"' : "") + "\n            " + (e.isDisabled ? 'aria-disabled="true"' : "") + "\n            " + (e.isInvalid ? 'aria-invalid="true"' : "") + "\n        >\n            " + s.default(e, t) + "\n            " + (e.isUseNativeMode ? "" : n.default(e, t)) + "\n        </div>\n    "
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(2),
                s = i(53);
            t.default = function(t, i) {
                var e = n.default([i.body, [t.isAtTop, i.bodyAtTop],
                        [t.isAtBottom, i.bodyAtBottom],
                        [t.isScrollable, i.bodyScrollable]
                    ]),
                    o = t.isOpen ? 'style="max-height: ' + t.maxBodyHeight + 'px;"' : "";
                return '\n        <div\n            class="' + e + '"\n            data-ref="body"\n            role="listbox"\n            ' + (t.isOpen ? "" : "aria-hidden") + '\n        >\n            <div class="' + i.itemsList + '"\n                data-ref="itemsList"\n                ' + o + ">\n                " + t.groups.map(function(e) {
                    return s.default(e, t, i)
                }).join("") + "\n            </div>\n            <div class=" + i.gradientTop + ' role="presentation"></div>\n            <div class=' + i.gradientBottom + ' role="presentation"></div>\n        </div>\n    '
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(2),
                n = i(54);
            t.default = function(e, t, i) {
                return '\n        <div class="' + o.default([i.group, [e.isDisabled, i.groupDisabled],
                    [e.hasLabel, i.groupHasLabel]
                ]) + '" data-ref="group" role="group">\n            ' + (e.hasLabel ? '<div class="' + i.groupLabel + '" data-ref="item">' + e.label + "</div>" : "") + "\n            " + e.options.map(function(e) {
                    return n.default(e, t, i)
                }).join("") + "\n        </div>\n    "
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(2);
            t.default = function(e, t, i) {
                var o = t.selectedOption === e;
                return '\n        <div\n            class="' + n.default([i.option, [o, i.optionSelected],
                    [e === t.focusedOption, i.optionFocused],
                    [e.isDisabled, i.optionDisabled]
                ]) + '"\n            data-ref="option item"\n            role="option"\n            title="' + e.label + '"\n            ' + (o ? 'aria-selected="true"' : "") + "\n            " + (e.isDisabled ? 'aria-disabled="true"' : "") + "\n            >\n                " + e.label + "\n        </div>\n    "
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(56),
                n = i(57);
            t.default = function(e, t) {
                return '\n    <div class="' + t.head + '" data-ref="head">\n        ' + n.default(e, t) + "\n        " + o.default(e, t) + '\n        <select class="' + t.select + '" data-ref="select"></select>\n    </div>\n'
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return '<div class="' + t.arrow + '" role="presentation"></div>'
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return '\n        <div\n            class="' + t.value + '"\n            data-ref="value"\n            ' + (e.isPlaceholderShown ? 'aria-placeholder="' + e.humanReadableValue + '"' : "") + "\n        >\n            " + e.humanReadableValue + "\n        </div>\n    "
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.firstElementChild
            }
        }, function(e, t, i) {
            "use strict";

            function o() {
                this.select = null, this.root = null, this.head = null, this.value = null, this.body = null, this.arrow = null, this.itemsList = null, this.item = [], this.group = [], this.option = []
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o.prototype.sumItemsHeight = function(e) {
                void 0 === e && (e = 1 / 0);
                for (var t, i = 0, o = 0;
                    (t = this.item[o]) && o !== e; o++) i += t.offsetHeight;
                return i
            }, t.default = o
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i(0),
                u = i(15),
                p = i(16),
                l = i(61);

            function c(e, t) {
                for (var i = Math.max(e.attributes.length, t.attributes.length), o = {}, n = [], s = 0; s < i; s++) {
                    var r = e.attributes[s],
                        a = t.attributes[s];
                    r && void 0 === o[r.name] && (o[r.name] = []), a && void 0 === o[a.name] && (o[a.name] = []), r && (o[r.name][0] = r.value), a && (o[a.name][1] = a.value)
                }
                var l = Object.keys(o);
                1 < l.length && l.sort();
                for (s = 0; d = l[s]; s++) {
                    var c = o[d],
                        d = {
                            type: null,
                            name: d,
                            value: null
                        };
                    c[0] !== c[1] && (void 0 === c[0] ? (d.type = u.default.ADD, d.value = c[1]) : void 0 === c[1] ? (d.type = u.default.REMOVE, d.value = "") : (d.type = u.default.EDIT, d.value = c[1]), n.push(d))
                }
                return {
                    type: p.default.OUTER,
                    attributeChanges: n
                }
            }
            t.default = function e(t, i) {
                var o, n = new l.default;
                if (t instanceof HTMLSelectElement) n.type = p.default.NONE;
                else if (t instanceof Text && i instanceof Text) t.textContent === i.textContent ? n.type = p.default.NONE : (n.type = p.default.INNER, n.newTextContent = i.textContent);
                else if (t instanceof HTMLElement && i instanceof HTMLElement)
                    if (t.tagName !== i.tagName) n.type = p.default.REPLACE, n.newNode = i;
                    else if (t.outerHTML === i.outerHTML) n.type = p.default.NONE;
                else if (t.innerHTML === i.innerHTML) a.default(n, c(t, i));
                else if (a.default(n, c(t, i)), 0 < n.attributeChanges.length ? n.type = p.default.FULL : n.type = p.default.INNER, 0 < (o = t.childNodes.length) && o === i.childNodes.length)
                    for (var s, r = 0; s = t.childNodes[r]; r++) n.childCommands.push(e(s, i.childNodes[r]));
                else n.newInnerHtml = i.innerHTML;
                else n.type = p.default.REPLACE, n.newNode = i;
                return n
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function() {
                this.newNode = null, this.newInnerHtml = "", this.newTextContent = "", this.attributeChanges = [], this.childCommands = [], this.index = null
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(15),
                n = i(16);

            function s(t, e) {
                var i = window.requestAnimationFrame;
                e.forEach(function(e) {
                    i && -1 < ["class", "style"].indexOf(e.name) ? i(function() {
                        return r(t, e)
                    }) : r(t, e)
                })
            }

            function r(e, t) {
                switch (t.type) {
                    case o.default.ADD:
                    case o.default.EDIT:
                        e.setAttribute(t.name, t.value);
                        break;
                    case o.default.REMOVE:
                        e.removeAttribute(t.name)
                }
            }
            t.default = function i(o, e) {
                switch (e.type) {
                    case n.default.NONE:
                        return o;
                    case n.default.REPLACE:
                        return o.parentElement.replaceChild(e.newNode, o), e.newNode;
                    case n.default.INNER:
                        return o instanceof Text ? o.textContent = e.newTextContent : 0 < e.childCommands.length ? e.childCommands.forEach(function(e, t) {
                            return i(o.childNodes[t], e)
                        }) : o.innerHTML = e.newInnerHtml, o;
                    case n.default.OUTER:
                        return s(o, e.attributeChanges), o;
                    case n.default.FULL:
                        return 0 < e.childCommands.length ? e.childCommands.forEach(function(e, t) {
                            return i(o.childNodes[t], e)
                        }) : o.innerHTML = e.newInnerHtml, s(o, e.attributeChanges), o
                }
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(t, i, o, n) {
                var s = t.value;
                return window.setInterval(function() {
                    var e;
                    t.value !== s && (e = i.getOptionIndexFromValue(t.value), o.selectOption(e, n.behavior.closeOnSelect), o.focusOption(e, !0)), s = t.value
                }, 100)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(t, i, o) {
                var n = t.outerHTML;
                return window.setInterval(function() {
                    var e = t.outerHTML;
                    e === n || i.isKeying || o(), n = e
                }, 300)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                for (var i = 0, o = t; i < o.length; i++) {
                    var n = o[i];
                    n !== e && n.actions.close()
                }
            }
        }, function(e, t, i) {
            "use strict";

            function s(e, t, i, o, n) {
                return t < e ? t - n : 0 < (t = t + i - (e + o)) ? e + t + n : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getScrollTop = s, t.default = function(e, t, i, o) {
                void 0 === o && (o = !1);
                var n = Math.max(0, -1 < i.focusedIndex ? i.focusedIndex : i.selectedIndex),
                    n = e.option[n];
                n && (o = o ? i.maxBodyHeight / 2 - n.offsetHeight / 2 : 0, (n = s(e.itemsList.scrollTop, n.offsetTop, n.offsetHeight, i.maxBodyHeight, o)) !== e.itemsList.scrollTop) && (e.itemsList.scrollTop = n)
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0),
                n = i(68);

            function r() {}
            r.proxyActions = function(e, t, i) {
                e = r.createStateProxy(e, i), i = n.default(e);
                return o.default(i, t), i
            }, r.createStateProxy = function(e, t) {
                return Object.seal(r.getPropertyDescriptorsFromValue(e, t).reduce(function(e, t) {
                    var i = t.key,
                        o = t.get,
                        t = t.set;
                    return Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: o,
                        set: t
                    })
                }, {}))
            }, r.getPropertyDescriptorsFromValue = function(o, n) {
                var s = Object.getPrototypeOf(o);
                return Object.keys(o).concat(Object.keys(s)).reduce(function(e, t) {
                    var i = "function" == typeof(Object.getOwnPropertyDescriptor(o, t) || Object.getOwnPropertyDescriptor(s, t)).get;
                    return e.push({
                        get: r.readPropertyValue.bind(null, o, t),
                        set: i ? void 0 : r.updatePropertyValue.bind(null, o, t, n),
                        key: t
                    }), e
                }, [])
            }, r.readPropertyValue = function(e, t) {
                return e[t]
            }, r.updatePropertyValue = function(e, t, i, o) {
                e[t] !== o && (e[t] = o, i(e, t))
            }, t.default = r
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(11),
                s = i(17),
                r = i(18);
            t.default = function(o) {
                return {
                    focus: function() {
                        o.isFocused = !0
                    },
                    blur: function() {
                        o.isFocused = !1
                    },
                    invalidate: function() {
                        o.isInvalid = !0
                    },
                    validate: function() {
                        o.isInvalid = !1
                    },
                    topOut: function() {
                        o.scrollStatus = r.default.AT_TOP
                    },
                    bottomOut: function() {
                        o.scrollStatus = r.default.AT_BOTTOM
                    },
                    scroll: function() {
                        o.scrollStatus = r.default.SCROLLED
                    },
                    makeScrollable: function() {
                        o.isScrollable = !0
                    },
                    makeUnscrollable: function() {
                        o.isScrollable = !1
                    },
                    open: function(e, t, i) {
                        if (!o.isDisabled) {
                            switch (this.closeOthers(), t) {
                                case n.default.NONE:
                                case n.default.TOP:
                                    o.bodyStatus = s.default.OPEN_BELOW;
                                    break;
                                case n.default.BOTTOM:
                                    o.bodyStatus = s.default.OPEN_ABOVE
                            }
                            o.isScrollable = i, o.maxBodyHeight = e, this.scrollToView(o, !0)
                        }
                    },
                    close: function() {
                        o.bodyStatus = s.default.CLOSED, o.focusedIndex = -1, this.blur()
                    },
                    startClickSelecting: function() {
                        o.isClickSelecting = !0
                    },
                    selectOption: function(e, t) {
                        void 0 === t && (t = !0);
                        var i = o.getOptionFromIndex(e);
                        o.isClickSelecting = !1, -1 < e && (!i || i.isDisabled) || (o.selectedIndex = e, o.isInvalid && o.hasValue && this.validate(), o.isSearching ? this.scrollToView(o) : t && this.close())
                    },
                    focusOption: function(e, t) {
                        void 0 === t && (t = !1);
                        var i = 1 < Math.abs(e - o.focusedIndex);
                        o.focusedIndex = e, t && this.scrollToView(o, i)
                    },
                    search: function() {
                        o.isSearching = !0
                    },
                    resetSearch: function() {
                        o.isSearching = !1
                    },
                    keying: function() {
                        o.isKeying = !0
                    },
                    resetKeying: function() {
                        o.isKeying = !1
                    },
                    useNative: function() {
                        o.isUseNativeMode = !0
                    }
                }
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0),
                l = i(12),
                n = i(19),
                s = i(20),
                c = i(70);

            function d() {}
            d.mapFromSelect = function(e, t) {
                var i = new c.default(null, t),
                    o = !1;
                i.name = e.name, i.isDisabled = e.disabled, i.isRequired = e.required, i.isUseNativeMode = t.behavior.useNativeUiOnMobile && l.default(window.navigator.userAgent);
                for (var n = 0, s = void 0; s = e.children[n]; n++)
                    if (0 !== n || null === s.getAttribute("data-placeholder"))
                        if (s instanceof HTMLOptionElement) !1 === o && (i.groups.push(d.mapGroup()), o = !0), i.lastGroup.options.push(d.mapOption(s)), s.selected && (i.selectedIndex = i.totalOptions - 1);
                        else {
                            if (!(s instanceof HTMLOptGroupElement)) throw new TypeError('[EasyDropDown] Invalid child tag "' + s.tagName + '" found in provided `<select>` element');
                            o = !0, i.groups.push(d.mapGroup(s));
                            for (var r, a = 0; r = s.children[a]; a++) i.lastGroup.options.push(d.mapOption(r, s)), r.selected && (i.selectedIndex = i.totalOptions - 1);
                            o = !1
                        }
                else i.placeholder = s.textContent, s.value = "";
                return Object.seal(i)
            }, d.mapGroup = function(e) {
                return void 0 === e && (e = null), o.default(new n.default, {
                    label: e ? e.label : "",
                    isDisabled: !!e && e.disabled
                })
            }, d.mapOption = function(e, t) {
                if (void 0 === t && (t = null), e instanceof HTMLOptionElement) return t = null !== t && t.disabled, o.default(new s.default, {
                    label: e.textContent,
                    value: e.value,
                    isDisabled: e.disabled || t
                });
                throw new TypeError("[EasyDropDown] Invalid markup structure")
            }, t.default = d
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0),
                n = i(10),
                s = i(17),
                r = i(18),
                a = i(19),
                l = i(20);

            function c(e, t) {
                void 0 === e && (e = null), void 0 === t && (t = new n.default), this.groups = [], this.focusedIndex = -1, this.selectedIndex = -1, this.maxVisibleItemsOverride = -1, this.maxBodyHeight = -1, this.name = "", this.placeholder = "", this.scrollStatus = r.default.AT_TOP, this.bodyStatus = s.default.CLOSED, this.isDisabled = !1, this.isRequired = !1, this.isInvalid = !1, this.isFocused = !1, this.isUseNativeMode = !1, this.isScrollable = !1, this.isClickSelecting = !1, this.isSearching = !1, this.isKeying = !1, this.config = t, e && (o.default(this, e), this.groups = this.groups.map(function(e) {
                    e = o.default(new a.default, e);
                    return e.options = e.options.map(function(e) {
                        return o.default(new l.default, e)
                    }), e
                }))
            }
            Object.defineProperty(c.prototype, "totalGroups", {
                get: function() {
                    return this.groups.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "lastGroup", {
                get: function() {
                    return this.groups[this.groups.length - 1]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "totalOptions", {
                get: function() {
                    return this.groups.reduce(function(e, t) {
                        return e + t.totalOptions
                    }, 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "selectedOption", {
                get: function() {
                    return this.getOptionFromIndex(this.selectedIndex)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "focusedOption", {
                get: function() {
                    return this.getOptionFromIndex(this.focusedIndex)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "value", {
                get: function() {
                    return this.selectedOption ? this.selectedOption.value : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "humanReadableValue", {
                get: function() {
                    return !this.hasValue && this.hasPlaceholder || this.config.behavior.showPlaceholderWhenOpen && this.hasPlaceholder && this.isOpen ? this.placeholder : this.label
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "label", {
                get: function() {
                    return this.selectedOption ? this.selectedOption.label : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "hasPlaceholder", {
                get: function() {
                    return "" !== this.placeholder
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isPlaceholderShown", {
                get: function() {
                    return this.hasPlaceholder && !this.hasValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "hasValue", {
                get: function() {
                    return "" !== this.value
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isGrouped", {
                get: function() {
                    return Boolean(this.groups.find(function(e) {
                        return e.hasLabel
                    }))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isOpen", {
                get: function() {
                    return this.bodyStatus !== s.default.CLOSED
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isClosed", {
                get: function() {
                    return this.bodyStatus === s.default.CLOSED
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isOpenAbove", {
                get: function() {
                    return this.bodyStatus === s.default.OPEN_ABOVE
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isOpenBelow", {
                get: function() {
                    return this.bodyStatus === s.default.OPEN_BELOW
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isAtTop", {
                get: function() {
                    return this.scrollStatus === r.default.AT_TOP
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isAtBottom", {
                get: function() {
                    return this.scrollStatus === r.default.AT_BOTTOM
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.getOptionFromIndex = function(e) {
                for (var t = 0, i = 0, o = this.groups; i < o.length; i++) {
                    var n = o[i];
                    if (e < 0) break;
                    if (e <= Math.max(0, t + n.totalOptions - 1)) return n.options[e - t];
                    t += n.totalOptions
                }
                return null
            }, c.prototype.getOptionIndexFromValue = function(e) {
                for (var t = -1, i = 0, o = this.groups; i < o.length; i++)
                    for (var n = 0, s = o[i].options; n < s.length; n++)
                        if (t++, s[n].value === e) return t;
                return -1
            }, t.default = c
        }, function(e, t, i) {
            "use strict";

            function o() {}
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o.prototype.clear = function() {
                var t = this;
                Object.keys(this).forEach(function(e) {
                    return window.clearInterval(t[e])
                })
            }, t.default = o
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(t) {
                this.open = t.open.bind(t), this.close = t.close.bind(t), this.refresh = t.refresh.bind(t), this.destroy = t.destroy.bind(t), this.validate = t.validate.bind(t), Object.defineProperties(this, {
                    value: {
                        get: function() {
                            return t.value
                        },
                        set: function(e) {
                            return t.value = e
                        }
                    }
                })
            }
        }], o = {}, n.m = i, n.c = o, n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(i, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return i
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 21);

        function n(e) {
            var t;
            return (o[e] || (t = o[e] = {
                i: e,
                l: !1,
                exports: {}
            }, i[e].call(t.exports, t, t.exports, n), t.l = !0, t)).exports
        }
        var i, o
    }), Infobox.prototype = {
        init: function() {
            var e = this;
            this.target.off("click").on("click", {
                source: this.source
            }, this.show), this.source.find(".button_close").off("click").on("click", this.close), this.source.off("click").on("click", function(e) {
                e.stopPropagation()
            }), 1 == this.info_icon && (this.addInfoIcon(), this.target.hover(function() {
                e.target.find("span.infobox_info_icon_active").addClass("infobox_info_icon_hover")
            }, function() {
                e.target.find("span.infobox_info_icon_active").removeClass("infobox_info_icon_hover")
            })), this.setDefaultProperties(), $(window).on("resize", function() {
                setTimeout(function() {
                    return e.updatePosition()
                }, 100)
            })
        },
        addInfoIcon: function() {
            this.target.prepend('<span class="infobox_info_icon_active"></span>')
        },
        setDefaultProperties: function() {
            switch (this.target.css("cursor", "pointer"), this.anchor_position) {
                case "top":
                    this.source.toggleClass("infobox_before");
                    break;
                case "bottom":
                    this.source.toggleClass("infobox_after");
                    break;
                default:
                    this.source.toggleClass("infobox_before")
            }
            this.updatePosition()
        },
        updatePosition: function() {
            switch (this.source.css({
                left: this.target.offset().left - this.source.outerWidth() / 2 + 8
            }), this.anchor_position) {
                case "top":
                    this.source.css({
                        top: this.target.offset().top + this.target.outerHeight() + 5
                    });
                    break;
                case "bottom":
                    this.source.css({
                        top: this.target.offset().top - this.source.outerHeight() - 5
                    });
                    break;
                default:
                    this.source.css({
                        top: this.target.offset().top + this.target.outerHeight() + 5
                    })
            }
        },
        show: function(e) {
            e.stopPropagation(), -1 !== $(e.target).prop("className").indexOf("button_close") || e.data.source.is(":visible") || ($(".infobox").hide(), e.data.source.show(500), $(document).one("click", function() {
                e.data.source.hide(500)
            }))
        },
        close: function() {
            $(this).parent().is(":visible") && $(this).parent().hide(500)
        }
    },
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(y) {
        function e() {
            this.__$emitterPrivate = y({}), this.__$emitterPublic = y({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = b
        }
        var l = {
                animation: "fade",
                animationDuration: 350,
                content: null,
                contentAsHTML: !1,
                contentCloning: !1,
                debug: !0,
                delay: 300,
                delayTouch: [300, 500],
                functionInit: null,
                functionBefore: null,
                functionReady: null,
                functionAfter: null,
                functionFormat: null,
                IEmin: 6,
                interactive: !1,
                multiple: !1,
                parent: null,
                plugins: ["sideTip"],
                repositionOnScroll: !1,
                restoration: "none",
                selfDestruction: !0,
                theme: [],
                timer: 0,
                trackerInterval: 500,
                trackOrigin: !1,
                trackTooltip: !1,
                trigger: "hover",
                triggerClose: {
                    click: !1,
                    mouseleave: !1,
                    originClick: !1,
                    scroll: !1,
                    tap: !1,
                    touchleave: !1
                },
                triggerOpen: {
                    click: !1,
                    mouseenter: !1,
                    tap: !1,
                    touchstart: !1
                },
                updateAnimation: "rotate",
                zIndex: 9999999
            },
            n = "undefined" != typeof window ? window : null,
            b = {
                hasTouchCapability: !(!n || !("ontouchstart" in n || n.DocumentTouch && n.document instanceof n.DocumentTouch || n.navigator.maxTouchPoints)),
                hasTransitions: function() {
                    if (n) {
                        var e = (n.document.body || n.document.documentElement).style,
                            t = "transition",
                            i = ["Moz", "Webkit", "Khtml", "O", "ms"];
                        if ("string" == typeof e[t]) return !0;
                        t = t.charAt(0).toUpperCase() + t.substr(1);
                        for (var o = 0; o < i.length; o++)
                            if ("string" == typeof e[i[o] + t]) return !0
                    }
                    return !1
                }(),
                IE: !1,
                semVer: "4.2.8",
                window: n
            };

        function t(e) {
            this.$container, this.constraints = null, this.__$tooltip, this.__init(e)
        }

        function s(i, o) {
            var n = !0;
            return y.each(i, function(e, t) {
                if (void 0 === o[e] || i[e] !== o[e]) return n = !1
            }), n
        }

        function c(e) {
            var t = e.attr("id"),
                t = t ? b.window.document.getElementById(t) : null;
            return t ? t === e[0] : y.contains(b.window.document.body, e[0])
        }
        e.prototype = {
            __bridge: function(e, i, o) {
                var t, n;
                return i[o] || ((t = function() {}).prototype = e, (n = new t).__init && n.__init(i), y.each(e, function(e, t) {
                    0 != e.indexOf("__") && (i[e] ? l.debug && console.log("The " + e + " method of the " + o + " plugin conflicts with another plugin or native methods") : (i[e] = function() {
                        return n[e].apply(n, Array.prototype.slice.apply(arguments))
                    }, i[e].bridged = n))
                }), i[o] = n), this
            },
            __setWindow: function(e) {
                return b.window = e, this
            },
            _getRuler: function(e) {
                return new t(e)
            },
            _off: function() {
                return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
            },
            _on: function() {
                return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
            },
            _one: function() {
                return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
            },
            _plugin: function(e) {
                var i, o, t = this;
                if ("string" == typeof e) return o = null, 0 < (i = e).indexOf(".") ? o = t.__plugins[i] : y.each(t.__plugins, function(e, t) {
                    if (t.name.substring(t.name.length - i.length - 1) == "." + i) return o = t, !1
                }), o;
                if (e.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");
                return (t.__plugins[e.name] = e).core && t.__bridge(e.core, t, e.name), this
            },
            _trigger: function() {
                var e = Array.prototype.slice.apply(arguments);
                return "string" == typeof e[0] && (e[0] = {
                    type: e[0]
                }), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e), this
            },
            instances: function(e) {
                var o = [];
                return y(e || ".tooltipstered").each(function() {
                    var i = y(this),
                        e = i.data("tooltipster-ns");
                    e && y.each(e, function(e, t) {
                        o.push(i.data(t))
                    })
                }), o
            },
            instancesLatest: function() {
                return this.__instancesLatestArr
            },
            off: function() {
                return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            },
            on: function() {
                return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            },
            one: function() {
                return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            },
            origins: function(e) {
                return y((e ? e + " " : "") + ".tooltipstered").toArray()
            },
            setDefaults: function(e) {
                return y.extend(l, e), this
            },
            triggerHandler: function() {
                return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            }
        }, y.tooltipster = new e, y.Tooltipster = function(e, t) {
            this.__callbacks = {
                close: [],
                open: []
            }, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__$emitterPrivate = y({}), this.__$emitterPublic = y({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = {
                close: [],
                open: null
            }, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(e, t)
        }, y.Tooltipster.prototype = {
            __init: function(e, t) {
                var i, o = this;
                o._$origin = y(e), o.__options = y.extend(!0, {}, l, t), o.__optionsFormat(), !b.IE || b.IE >= o.__options.IEmin ? (e = null, void 0 === o._$origin.data("tooltipster-initialTitle") && (e = o._$origin.attr("title"), o._$origin.data("tooltipster-initialTitle", e = void 0 === e ? null : e)), null !== o.__options.content ? o.__contentSet(o.__options.content) : (i = (t = o._$origin.attr("data-tooltip-content")) ? y(t) : i) && i[0] ? o.__contentSet(i.first()) : o.__contentSet(e), o._$origin.removeAttr("title").addClass("tooltipstered"), o.__prepareOrigin(), o.__prepareGC(), y.each(o.__options.plugins, function(e, t) {
                    o._plug(t)
                }), b.hasTouchCapability && y(b.window.document.body).on("touchmove." + o.__namespace + "-triggerOpen", function(e) {
                    o._touchRecordEvent(e)
                }), o._on("created", function() {
                    o.__prepareTooltip()
                })._on("repositioned", function(e) {
                    o.__lastPosition = e.position
                })) : o.__options.disabled = !0
            },
            __contentInsert: function() {
                var e = this,
                    t = e._$tooltip.find(".tooltipster-content"),
                    i = e.__Content;
                return e._trigger({
                    type: "format",
                    content: e.__Content,
                    format: function(e) {
                        i = e
                    }
                }), "string" != typeof(i = e.__options.functionFormat ? e.__options.functionFormat.call(e, e, {
                    origin: e._$origin[0]
                }, e.__Content) : i) || e.__options.contentAsHTML ? t.empty().append(i) : t.text(i), e
            },
            __contentSet: function(e) {
                return e instanceof y && this.__options.contentCloning && (e = e.clone(!0)), this.__Content = e, this._trigger({
                    type: "updated",
                    content: e
                }), this
            },
            __destroyError: function() {
                throw new Error("This tooltip has been destroyed and cannot execute your method call.")
            },
            __geometry: function() {
                var e = this,
                    t = e._$origin,
                    i = e._$origin.is("area"),
                    o = (i && (o = e._$origin.parent().attr("name"), t = y('img[usemap="#' + o + '"]')), t[0].getBoundingClientRect()),
                    n = y(b.window.document),
                    s = y(b.window),
                    r = t,
                    a = {
                        available: {
                            document: null,
                            window: null
                        },
                        document: {
                            size: {
                                height: n.height(),
                                width: n.width()
                            }
                        },
                        window: {
                            scroll: {
                                left: b.window.scrollX || b.window.document.documentElement.scrollLeft,
                                top: b.window.scrollY || b.window.document.documentElement.scrollTop
                            },
                            size: {
                                height: s.height(),
                                width: s.width()
                            }
                        },
                        origin: {
                            fixedLineage: !1,
                            offset: {},
                            size: {
                                height: o.bottom - o.top,
                                width: o.right - o.left
                            },
                            usemapImage: i ? t[0] : null,
                            windowOffset: {
                                bottom: o.bottom,
                                left: o.left,
                                right: o.right,
                                top: o.top
                            }
                        }
                    };
                if (i) {
                    var n = e._$origin.attr("shape"),
                        l = e._$origin.attr("coords");
                    if (l && (l = l.split(","), y.map(l, function(e, t) {
                            l[t] = parseInt(e)
                        })), "default" != n) switch (n) {
                        case "circle":
                            var c = l[0],
                                d = l[1],
                                u = l[2],
                                d = d - u,
                                c = c - u;
                            a.origin.size.height = 2 * u, a.origin.size.width = a.origin.size.height, a.origin.windowOffset.left += c, a.origin.windowOffset.top += d;
                            break;
                        case "rect":
                            var u = l[0],
                                c = l[1],
                                d = l[2],
                                p = l[3];
                            a.origin.size.height = p - c, a.origin.size.width = d - u, a.origin.windowOffset.left += u, a.origin.windowOffset.top += c;
                            break;
                        case "poly":
                            for (var h = 0, f = 0, _ = 0, g = 0, m = "even", v = 0; v < l.length; v++) var w = l[v],
                                m = "even" == m ? (w < (h = _ < w && (_ = w, 0 === v) ? _ : h) && (h = w), "odd") : (w < (f = g < w && (g = w, 1 == v) ? g : f) && (f = w), "even");
                            a.origin.size.height = g - f, a.origin.size.width = _ - h, a.origin.windowOffset.left += h, a.origin.windowOffset.top += f
                    }
                }
                for (e._trigger({
                        type: "geometry",
                        edit: function(e) {
                            a.origin.size.height = e.height, a.origin.windowOffset.left = e.left, a.origin.windowOffset.top = e.top, a.origin.size.width = e.width
                        },
                        geometry: {
                            height: a.origin.size.height,
                            left: a.origin.windowOffset.left,
                            top: a.origin.windowOffset.top,
                            width: a.origin.size.width
                        }
                    }), a.origin.windowOffset.right = a.origin.windowOffset.left + a.origin.size.width, a.origin.windowOffset.bottom = a.origin.windowOffset.top + a.origin.size.height, a.origin.offset.left = a.origin.windowOffset.left + a.window.scroll.left, a.origin.offset.top = a.origin.windowOffset.top + a.window.scroll.top, a.origin.offset.bottom = a.origin.offset.top + a.origin.size.height, a.origin.offset.right = a.origin.offset.left + a.origin.size.width, a.available.document = {
                        bottom: {
                            height: a.document.size.height - a.origin.offset.bottom,
                            width: a.document.size.width
                        },
                        left: {
                            height: a.document.size.height,
                            width: a.origin.offset.left
                        },
                        right: {
                            height: a.document.size.height,
                            width: a.document.size.width - a.origin.offset.right
                        },
                        top: {
                            height: a.origin.offset.top,
                            width: a.document.size.width
                        }
                    }, a.available.window = {
                        bottom: {
                            height: Math.max(a.window.size.height - Math.max(a.origin.windowOffset.bottom, 0), 0),
                            width: a.window.size.width
                        },
                        left: {
                            height: a.window.size.height,
                            width: Math.max(a.origin.windowOffset.left, 0)
                        },
                        right: {
                            height: a.window.size.height,
                            width: Math.max(a.window.size.width - Math.max(a.origin.windowOffset.right, 0), 0)
                        },
                        top: {
                            height: Math.max(a.origin.windowOffset.top, 0),
                            width: a.window.size.width
                        }
                    };
                    "html" != r[0].tagName.toLowerCase();) {
                    if ("fixed" == r.css("position")) {
                        a.origin.fixedLineage = !0;
                        break
                    }
                    r = r.parent()
                }
                return a
            },
            __optionsFormat: function() {
                return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), null === this.__options.parent ? this.__options.parent = y(b.window.document.body) : "string" == typeof this.__options.parent && (this.__options.parent = y(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = {
                    mouseenter: !0,
                    touchstart: !0
                }, this.__options.triggerClose = {
                    mouseleave: !0,
                    originClick: !0,
                    touchleave: !0
                }) : "click" == this.__options.trigger && (this.__options.triggerOpen = {
                    click: !0,
                    tap: !0
                }, this.__options.triggerClose = {
                    click: !0,
                    tap: !0
                }), this._trigger("options"), this
            },
            __prepareGC: function() {
                var e = this;
                return e.__options.selfDestruction ? e.__garbageCollector = setInterval(function() {
                    var i = (new Date).getTime();
                    e.__touchEvents = y.grep(e.__touchEvents, function(e, t) {
                        return 6e4 < i - e.time
                    }), c(e._$origin) || e.close(function() {
                        e.destroy()
                    })
                }, 2e4) : clearInterval(e.__garbageCollector), e
            },
            __prepareOrigin: function() {
                var e, t = this;
                return t._$origin.off("." + t.__namespace + "-triggerOpen"), b.hasTouchCapability && t._$origin.on("touchstart." + t.__namespace + "-triggerOpen touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen", function(e) {
                    t._touchRecordEvent(e)
                }), (t.__options.triggerOpen.click || t.__options.triggerOpen.tap && b.hasTouchCapability) && (e = "", t.__options.triggerOpen.click && (e += "click." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.tap && b.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function(e) {
                    t._touchIsMeaningfulEvent(e) && t._open(e)
                })), (t.__options.triggerOpen.mouseenter || t.__options.triggerOpen.touchstart && b.hasTouchCapability) && (e = "", t.__options.triggerOpen.mouseenter && (e += "mouseenter." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.touchstart && b.hasTouchCapability && (e += "touchstart." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function(e) {
                    !t._touchIsTouchEvent(e) && t._touchIsEmulatedEvent(e) || (t.__pointerIsOverOrigin = !0, t._openShortly(e))
                })), (t.__options.triggerClose.mouseleave || t.__options.triggerClose.touchleave && b.hasTouchCapability) && (e = "", t.__options.triggerClose.mouseleave && (e += "mouseleave." + t.__namespace + "-triggerOpen "), t.__options.triggerClose.touchleave && b.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function(e) {
                    t._touchIsMeaningfulEvent(e) && (t.__pointerIsOverOrigin = !1)
                })), t
            },
            __prepareTooltip: function() {
                var i = this,
                    e = i.__options.interactive ? "auto" : "";
                return i._$tooltip.attr("id", i.__namespace).css({
                    "pointer-events": e,
                    zIndex: i.__options.zIndex
                }), y.each(i.__previousThemes, function(e, t) {
                    i._$tooltip.removeClass(t)
                }), y.each(i.__options.theme, function(e, t) {
                    i._$tooltip.addClass(t)
                }), i.__previousThemes = y.merge([], i.__options.theme), i
            },
            __scrollHandler: function(e) {
                var s, r, t, i, o = this;
                return o.__options.triggerClose.scroll ? o._close(e) : c(o._$origin) && c(o._$tooltip) && (s = null, e.target === b.window.document ? o.__Geometry.origin.fixedLineage || o.__options.repositionOnScroll && o.reposition(e) : (s = o.__geometry(), r = !1, "fixed" != o._$origin.css("position") && o.__$originParents.each(function(e, t) {
                    var i = y(t),
                        o = i.css("overflow-x"),
                        n = i.css("overflow-y");
                    if ("visible" != o || "visible" != n) {
                        t = t.getBoundingClientRect();
                        if ("visible" != o && (s.origin.windowOffset.left < t.left || s.origin.windowOffset.right > t.right)) return !(r = !0);
                        if ("visible" != n && (s.origin.windowOffset.top < t.top || s.origin.windowOffset.bottom > t.bottom)) return !(r = !0)
                    }
                    if ("fixed" == i.css("position")) return !1
                }), r ? o._$tooltip.css("visibility", "hidden") : (o._$tooltip.css("visibility", "visible"), o.__options.repositionOnScroll ? o.reposition(e) : (t = s.origin.offset.left - o.__Geometry.origin.offset.left, i = s.origin.offset.top - o.__Geometry.origin.offset.top, o._$tooltip.css({
                    left: o.__lastPosition.coord.left + t,
                    top: o.__lastPosition.coord.top + i
                })))), o._trigger({
                    type: "scroll",
                    event: e,
                    geo: s
                })), o
            },
            __stateSet: function(e) {
                return this.__state = e, this._trigger({
                    type: "state",
                    state: e
                }), this
            },
            __timeoutsClear: function() {
                return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, y.each(this.__timeouts.close, function(e, t) {
                    clearTimeout(t)
                }), this.__timeouts.close = [], this
            },
            __trackerStart: function() {
                var i = this,
                    o = i._$tooltip.find(".tooltipster-content");
                return i.__options.trackTooltip && (i.__contentBcr = o[0].getBoundingClientRect()), i.__tracker = setInterval(function() {
                    var e, t;
                    c(i._$origin) && c(i._$tooltip) ? (i.__options.trackOrigin && (e = !1, s((t = i.__geometry()).origin.size, i.__Geometry.origin.size) && (i.__Geometry.origin.fixedLineage ? s(t.origin.windowOffset, i.__Geometry.origin.windowOffset) && (e = !0) : s(t.origin.offset, i.__Geometry.origin.offset) && (e = !0)), e || (i.__options.triggerClose.mouseleave ? i._close() : i.reposition())), !i.__options.trackTooltip || (t = o[0].getBoundingClientRect()).height === i.__contentBcr.height && t.width === i.__contentBcr.width || (i.reposition(), i.__contentBcr = t)) : i._close()
                }, i.__options.trackerInterval), i
            },
            _close: function(i, e, t) {
                var o, n = this,
                    s = !0;
                return n._trigger({
                    type: "close",
                    event: i,
                    stop: function() {
                        s = !1
                    }
                }), (s || t) && (e && n.__callbacks.close.push(e), n.__callbacks.open = [], n.__timeoutsClear(), o = function() {
                    y.each(n.__callbacks.close, function(e, t) {
                        t.call(n, n, {
                            event: i,
                            origin: n._$origin[0]
                        })
                    }), n.__callbacks.close = []
                }, "closed" != n.__state ? (t = !0, e = (new Date).getTime() + n.__options.animationDuration[1], (t = "disappearing" == n.__state && e > n.__closingTime && 0 < n.__options.animationDuration[1] ? !1 : t) && (n.__closingTime = e, "disappearing" != n.__state && n.__stateSet("disappearing"), t = function() {
                    clearInterval(n.__tracker), n._trigger({
                        type: "closing",
                        event: i
                    }), n._$tooltip.off("." + n.__namespace + "-triggerClose").removeClass("tooltipster-dying"), y(b.window).off("." + n.__namespace + "-triggerClose"), n.__$originParents.each(function(e, t) {
                        y(t).off("scroll." + n.__namespace + "-triggerClose")
                    }), n.__$originParents = null, y(b.window.document.body).off("." + n.__namespace + "-triggerClose"), n._$origin.off("." + n.__namespace + "-triggerClose"), n._off("dismissable"), n.__stateSet("closed"), n._trigger({
                        type: "after",
                        event: i
                    }), n.__options.functionAfter && n.__options.functionAfter.call(n, n, {
                        event: i,
                        origin: n._$origin[0]
                    }), o()
                }, b.hasTransitions ? (n._$tooltip.css({
                    "-moz-animation-duration": n.__options.animationDuration[1] + "ms",
                    "-ms-animation-duration": n.__options.animationDuration[1] + "ms",
                    "-o-animation-duration": n.__options.animationDuration[1] + "ms",
                    "-webkit-animation-duration": n.__options.animationDuration[1] + "ms",
                    "animation-duration": n.__options.animationDuration[1] + "ms",
                    "transition-duration": n.__options.animationDuration[1] + "ms"
                }), n._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), 0 < n.__options.animationDuration[1] && n._$tooltip.delay(n.__options.animationDuration[1]), n._$tooltip.queue(t)) : n._$tooltip.stop().fadeOut(n.__options.animationDuration[1], t))) : o()), n
            },
            _off: function() {
                return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
            },
            _on: function() {
                return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
            },
            _one: function() {
                return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
            },
            _open: function(e, t) {
                var i, o, n, s, r, a = this;
                return a.__destroying || c(a._$origin) && a.__enabled && !(i = !0) !== (i = "closed" == a.__state && (a._trigger({
                    type: "before",
                    event: e,
                    stop: function() {
                        i = !1
                    }
                }), i) && a.__options.functionBefore ? a.__options.functionBefore.call(a, a, {
                    event: e,
                    origin: a._$origin[0]
                }) : i) && null !== a.__Content && (t && a.__callbacks.open.push(t), a.__callbacks.close = [], a.__timeoutsClear(), n = function() {
                    "stable" != a.__state && a.__stateSet("stable"), y.each(a.__callbacks.open, function(e, t) {
                        t.call(a, a, {
                            origin: a._$origin[0],
                            tooltip: a._$tooltip[0]
                        })
                    }), a.__callbacks.open = []
                }, "closed" !== a.__state ? (o = 0, "disappearing" === a.__state ? (a.__stateSet("appearing"), b.hasTransitions ? (a._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), 0 < a.__options.animationDuration[0] && a._$tooltip.delay(a.__options.animationDuration[0]), a._$tooltip.queue(n)) : a._$tooltip.stop().fadeIn(n)) : "stable" == a.__state && n()) : (a.__stateSet("appearing"), o = a.__options.animationDuration[0], a.__contentInsert(), a.reposition(e, !0), b.hasTransitions ? (a._$tooltip.addClass("tooltipster-" + a.__options.animation).addClass("tooltipster-initial").css({
                    "-moz-animation-duration": a.__options.animationDuration[0] + "ms",
                    "-ms-animation-duration": a.__options.animationDuration[0] + "ms",
                    "-o-animation-duration": a.__options.animationDuration[0] + "ms",
                    "-webkit-animation-duration": a.__options.animationDuration[0] + "ms",
                    "animation-duration": a.__options.animationDuration[0] + "ms",
                    "transition-duration": a.__options.animationDuration[0] + "ms"
                }), setTimeout(function() {
                    "closed" != a.__state && (a._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), 0 < a.__options.animationDuration[0] && a._$tooltip.delay(a.__options.animationDuration[0]), a._$tooltip.queue(n))
                }, 0)) : a._$tooltip.css("display", "none").fadeIn(a.__options.animationDuration[0], n), a.__trackerStart(), y(b.window).on("resize." + a.__namespace + "-triggerClose", function(e) {
                    var t = y(document.activeElement);
                    (t.is("input") || t.is("textarea")) && y.contains(a._$tooltip[0], t[0]) || a.reposition(e)
                }).on("scroll." + a.__namespace + "-triggerClose", function(e) {
                    a.__scrollHandler(e)
                }), a.__$originParents = a._$origin.parents(), a.__$originParents.each(function(e, t) {
                    y(t).on("scroll." + a.__namespace + "-triggerClose", function(e) {
                        a.__scrollHandler(e)
                    })
                }), (a.__options.triggerClose.mouseleave || a.__options.triggerClose.touchleave && b.hasTouchCapability) && (a._on("dismissable", function(e) {
                    e.dismissable ? e.delay ? (r = setTimeout(function() {
                        a._close(e.event)
                    }, e.delay), a.__timeouts.close.push(r)) : a._close(e) : clearTimeout(r)
                }), t = a._$origin, s = e = "", r = null, a.__options.interactive && (t = t.add(a._$tooltip)), a.__options.triggerClose.mouseleave && (e += "mouseenter." + a.__namespace + "-triggerClose ", s += "mouseleave." + a.__namespace + "-triggerClose "), a.__options.triggerClose.touchleave && b.hasTouchCapability && (e += "touchstart." + a.__namespace + "-triggerClose", s += "touchend." + a.__namespace + "-triggerClose touchcancel." + a.__namespace + "-triggerClose"), t.on(s, function(e) {
                    var t;
                    !a._touchIsTouchEvent(e) && a._touchIsEmulatedEvent(e) || (t = "mouseleave" == e.type ? a.__options.delay : a.__options.delayTouch, a._trigger({
                        delay: t[1],
                        dismissable: !0,
                        event: e,
                        type: "dismissable"
                    }))
                }).on(e, function(e) {
                    !a._touchIsTouchEvent(e) && a._touchIsEmulatedEvent(e) || a._trigger({
                        dismissable: !1,
                        event: e,
                        type: "dismissable"
                    })
                })), a.__options.triggerClose.originClick && a._$origin.on("click." + a.__namespace + "-triggerClose", function(e) {
                    a._touchIsTouchEvent(e) || a._touchIsEmulatedEvent(e) || a._close(e)
                }), (a.__options.triggerClose.click || a.__options.triggerClose.tap && b.hasTouchCapability) && setTimeout(function() {
                    var e, t;
                    "closed" != a.__state && (e = "", t = y(b.window.document.body), a.__options.triggerClose.click && (e += "click." + a.__namespace + "-triggerClose "), a.__options.triggerClose.tap && b.hasTouchCapability && (e += "touchend." + a.__namespace + "-triggerClose"), t.on(e, function(e) {
                        a._touchIsMeaningfulEvent(e) && (a._touchRecordEvent(e), a.__options.interactive && y.contains(a._$tooltip[0], e.target) || a._close(e))
                    }), a.__options.triggerClose.tap) && b.hasTouchCapability && t.on("touchstart." + a.__namespace + "-triggerClose", function(e) {
                        a._touchRecordEvent(e)
                    })
                }, 0), a._trigger("ready"), a.__options.functionReady && a.__options.functionReady.call(a, a, {
                    origin: a._$origin[0],
                    tooltip: a._$tooltip[0]
                })), 0 < a.__options.timer) && (r = setTimeout(function() {
                    a._close()
                }, a.__options.timer + o), a.__timeouts.close.push(r)), a
            },
            _openShortly: function(e) {
                var t, i = this,
                    o = !0;
                return "stable" == i.__state || "appearing" == i.__state || i.__timeouts.open || (i._trigger({
                    type: "start",
                    event: e,
                    stop: function() {
                        o = !1
                    }
                }), o && ((t = 0 == e.type.indexOf("touch") ? i.__options.delayTouch : i.__options.delay)[0] ? i.__timeouts.open = setTimeout(function() {
                    i.__timeouts.open = null, i.__pointerIsOverOrigin && i._touchIsMeaningfulEvent(e) ? (i._trigger("startend"), i._open(e)) : i._trigger("startcancel")
                }, t[0]) : (i._trigger("startend"), i._open(e)))), i
            },
            _optionsExtract: function(e, t) {
                var o = this,
                    i = y.extend(!0, {}, t),
                    n = o.__options[e];
                return n || (n = {}, y.each(t, function(e, t) {
                    var i = o.__options[e];
                    void 0 !== i && (n[e] = i)
                })), y.each(i, function(e, t) {
                    void 0 !== n[e] && ("object" != typeof t || t instanceof Array || null == t || "object" != typeof n[e] || n[e] instanceof Array || null == n[e] ? i[e] = n[e] : y.extend(i[e], n[e]))
                }), i
            },
            _plug: function(e) {
                var t = y.tooltipster._plugin(e);
                if (t) return t.instance && y.tooltipster.__bridge(t.instance, this, t.name), this;
                throw new Error('The "' + e + '" plugin is not defined')
            },
            _touchIsEmulatedEvent: function(e) {
                for (var t = !1, i = (new Date).getTime(), o = this.__touchEvents.length - 1; 0 <= o; o--) {
                    var n = this.__touchEvents[o];
                    if (!(i - n.time < 500)) break;
                    n.target === e.target && (t = !0)
                }
                return t
            },
            _touchIsMeaningfulEvent: function(e) {
                return this._touchIsTouchEvent(e) && !this._touchSwiped(e.target) || !this._touchIsTouchEvent(e) && !this._touchIsEmulatedEvent(e)
            },
            _touchIsTouchEvent: function(e) {
                return 0 == e.type.indexOf("touch")
            },
            _touchRecordEvent: function(e) {
                return this._touchIsTouchEvent(e) && (e.time = (new Date).getTime(), this.__touchEvents.push(e)), this
            },
            _touchSwiped: function(e) {
                for (var t = !1, i = this.__touchEvents.length - 1; 0 <= i; i--) {
                    var o = this.__touchEvents[i];
                    if ("touchmove" == o.type) {
                        t = !0;
                        break
                    }
                    if ("touchstart" == o.type && e === o.target) break
                }
                return t
            },
            _trigger: function() {
                var e = Array.prototype.slice.apply(arguments);
                return "string" == typeof e[0] && (e[0] = {
                    type: e[0]
                }), e[0].instance = this, e[0].origin = this._$origin ? this._$origin[0] : null, e[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e), y.tooltipster._trigger.apply(y.tooltipster, e), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e), this
            },
            _unplug: function(i) {
                var e, o = this;
                return o[i] && ((e = y.tooltipster._plugin(i)).instance && y.each(e.instance, function(e, t) {
                    o[e] && o[e].bridged === o[i] && delete o[e]
                }), o[i].__destroy && o[i].__destroy(), delete o[i]), o
            },
            close: function(e) {
                return this.__destroyed ? this.__destroyError() : this._close(null, e), this
            },
            content: function(e) {
                var t, i = this;
                return void 0 === e ? i.__Content : (i.__destroyed ? i.__destroyError() : (i.__contentSet(e), null !== i.__Content ? "closed" !== i.__state && (i.__contentInsert(), i.reposition(), i.__options.updateAnimation) && (b.hasTransitions ? (t = i.__options.updateAnimation, i._$tooltip.addClass("tooltipster-update-" + t), setTimeout(function() {
                    "closed" != i.__state && i._$tooltip.removeClass("tooltipster-update-" + t)
                }, 1e3)) : i._$tooltip.fadeTo(200, .5, function() {
                    "closed" != i.__state && i._$tooltip.fadeTo(200, 1)
                })) : i._close()), i)
            },
            destroy: function() {
                var e, t, i = this;
                return i.__destroyed ? i.__destroyError() : ("closed" != i.__state ? i.option("animationDuration", 0)._close(null, null, !0) : i.__timeoutsClear(), i._trigger("destroy"), i.__destroyed = !0, i._$origin.removeData(i.__namespace).off("." + i.__namespace + "-triggerOpen"), y(b.window.document.body).off("." + i.__namespace + "-triggerOpen"), (e = i._$origin.data("tooltipster-ns")) && (1 === e.length ? (t = null, "previous" == i.__options.restoration ? t = i._$origin.data("tooltipster-initialTitle") : "current" == i.__options.restoration && (t = "string" == typeof i.__Content ? i.__Content : y("<div></div>").append(i.__Content).html()), t && i._$origin.attr("title", t), i._$origin.removeClass("tooltipstered"), i._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")) : (e = y.grep(e, function(e, t) {
                    return e !== i.__namespace
                }), i._$origin.data("tooltipster-ns", e))), i._trigger("destroyed"), i._off(), i.off(), i.__Content = null, i.__$emitterPrivate = null, i.__$emitterPublic = null, i.__options.parent = null, i._$origin = null, i._$tooltip = null, y.tooltipster.__instancesLatestArr = y.grep(y.tooltipster.__instancesLatestArr, function(e, t) {
                    return i !== e
                }), clearInterval(i.__garbageCollector)), i
            },
            disable: function() {
                return this.__destroyed ? this.__destroyError() : (this._close(), this.__enabled = !1), this
            },
            elementOrigin: function() {
                if (!this.__destroyed) return this._$origin[0];
                this.__destroyError()
            },
            elementTooltip: function() {
                return this._$tooltip ? this._$tooltip[0] : null
            },
            enable: function() {
                return this.__enabled = !0, this
            },
            hide: function(e) {
                return this.close(e)
            },
            instance: function() {
                return this
            },
            off: function() {
                return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            },
            on: function() {
                return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            },
            one: function() {
                return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            },
            open: function(e) {
                return this.__destroyed ? this.__destroyError() : this._open(null, e), this
            },
            option: function(e, t) {
                return void 0 === t ? this.__options[e] : (this.__destroyed ? this.__destroyError() : (this.__options[e] = t, this.__optionsFormat(), 0 <= y.inArray(e, ["trigger", "triggerClose", "triggerOpen"]) && this.__prepareOrigin(), "selfDestruction" === e && this.__prepareGC()), this)
            },
            reposition: function(e, t) {
                var i = this;
                return i.__destroyed ? i.__destroyError() : "closed" != i.__state && c(i._$origin) && (t || c(i._$tooltip)) && (t || i._$tooltip.detach(), i.__Geometry = i.__geometry(), i._trigger({
                    type: "reposition",
                    event: e,
                    helper: {
                        geo: i.__Geometry
                    }
                })), i
            },
            show: function(e) {
                return this.open(e)
            },
            status: function() {
                return {
                    destroyed: this.__destroyed,
                    enabled: this.__enabled,
                    open: "closed" !== this.__state,
                    state: this.__state
                }
            },
            triggerHandler: function() {
                return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
            }
        }, y.fn.tooltipster = function() {
            var i, n, e, t, o, s, r = Array.prototype.slice.apply(arguments),
                a = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
            return 0 === this.length ? this : "string" == typeof r[0] ? (i = "#*$~&", this.each(function() {
                var e = y(this).data("tooltipster-ns"),
                    e = e ? y(this).data(e[0]) : null;
                if (!e) throw new Error("You called Tooltipster's \"" + r[0] + '" method on an uninitialized element');
                if ("function" != typeof e[r[0]]) throw new Error('Unknown method "' + r[0] + '"');
                1 < this.length && "content" == r[0] && (r[1] instanceof y || "object" == typeof r[1] && null != r[1] && r[1].tagName) && !e.__options.contentCloning && e.__options.debug && console.log(a);
                var t = e[r[0]](r[1], r[2]);
                if (t !== e || "instance" === r[0]) return i = t, !1
            }), "#*$~&" !== i ? i : this) : (y.tooltipster.__instancesLatestArr = [], e = r[0] && void 0 !== r[0].multiple, n = e && r[0].multiple || !e && l.multiple, e = (e = r[0] && void 0 !== r[0].content) && r[0].content || !e && l.content, t = (t = r[0] && void 0 !== r[0].contentCloning) && r[0].contentCloning || !t && l.contentCloning, o = r[0] && void 0 !== r[0].debug, s = o && r[0].debug || !o && l.debug, 1 < this.length && (e instanceof y || "object" == typeof e && null != e && e.tagName) && !t && s && console.log(a), this.each(function() {
                var e = !1,
                    t = y(this),
                    i = t.data("tooltipster-ns"),
                    o = null;
                !i || n ? e = !0 : s && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)), e && (o = new y.Tooltipster(this, r[0]), (i = i || []).push(o.__namespace), t.data("tooltipster-ns", i), t.data(o.__namespace, o), o.__options.functionInit && o.__options.functionInit.call(o, o, {
                    origin: this
                }), o._trigger("init")), y.tooltipster.__instancesLatestArr.push(o)
            }), this)
        }, t.prototype = {
            __init: function(e) {
                this.__$tooltip = e, this.__$tooltip.css({
                    left: 0,
                    overflow: "hidden",
                    position: "absolute",
                    top: 0
                }).find(".tooltipster-content").css("overflow", "auto"), this.$container = y('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(b.window.document.body)
            },
            __forceRedraw: function() {
                var e = this.__$tooltip.parent();
                this.__$tooltip.detach(), this.__$tooltip.appendTo(e)
            },
            constrain: function(e, t) {
                return this.constraints = {
                    width: e,
                    height: t
                }, this.__$tooltip.css({
                    display: "block",
                    height: "",
                    overflow: "auto",
                    width: e
                }), this
            },
            destroy: function() {
                this.__$tooltip.detach().find(".tooltipster-content").css({
                    display: "",
                    overflow: ""
                }), this.$container.remove()
            },
            free: function() {
                return this.constraints = null, this.__$tooltip.css({
                    display: "",
                    height: "",
                    overflow: "visible",
                    width: ""
                }), this
            },
            measure: function() {
                this.__forceRedraw();
                var e, t, i, o = this.__$tooltip[0].getBoundingClientRect(),
                    n = {
                        size: {
                            height: o.height || o.bottom - o.top,
                            width: o.width || o.right - o.left
                        }
                    };
                return this.constraints && (e = this.__$tooltip.find(".tooltipster-content"), i = this.__$tooltip.outerHeight(), t = e[0].getBoundingClientRect(), i = {
                    height: i <= this.constraints.height,
                    width: o.width <= this.constraints.width && t.width >= e[0].scrollWidth - 1
                }, n.fits = i.height && i.width), b.IE && b.IE <= 11 && n.size.width !== b.window.document.documentElement.clientWidth && (n.size.width = Math.ceil(n.size.width) + 1), n
            }
        };
        var i = navigator.userAgent.toLowerCase(); - 1 != i.indexOf("msie") ? b.IE = parseInt(i.split("msie")[1]) : -1 !== i.toLowerCase().indexOf("trident") && -1 !== i.indexOf(" rv:11") ? b.IE = 11 : -1 != i.toLowerCase().indexOf("edge/") && (b.IE = parseInt(i.toLowerCase().split("edge/")[1]));
        var o = "tooltipster.sideTip";
        return y.tooltipster._plugin({
            name: o,
            instance: {
                __defaults: function() {
                    return {
                        arrow: !0,
                        distance: 6,
                        functionPosition: null,
                        maxWidth: null,
                        minIntersection: 16,
                        minWidth: 0,
                        position: null,
                        side: "top",
                        viewportAware: !0
                    }
                },
                __init: function(e) {
                    var t = this;
                    t.__instance = e, t.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), t.__previousState = "closed", t.__options, t.__optionsFormat(), t.__instance._on("state." + t.__namespace, function(e) {
                        "closed" == e.state ? t.__close() : "appearing" == e.state && "closed" == t.__previousState && t.__create(), t.__previousState = e.state
                    }), t.__instance._on("options." + t.__namespace, function() {
                        t.__optionsFormat()
                    }), t.__instance._on("reposition." + t.__namespace, function(e) {
                        t.__reposition(e.event, e.helper)
                    })
                },
                __close: function() {
                    this.__instance.content() instanceof y && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null
                },
                __create: function() {
                    var e = y('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');
                    this.__options.arrow || e.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && e.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && e.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = e, this.__instance._trigger("created")
                },
                __destroy: function() {
                    this.__instance._off("." + self.__namespace)
                },
                __optionsFormat: function() {
                    var e = this;
                    e.__options = e.__instance._optionsExtract(o, e.__defaults()), e.__options.position && (e.__options.side = e.__options.position), "object" != typeof e.__options.distance && (e.__options.distance = [e.__options.distance]), e.__options.distance.length < 4 && (void 0 === e.__options.distance[1] && (e.__options.distance[1] = e.__options.distance[0]), void 0 === e.__options.distance[2] && (e.__options.distance[2] = e.__options.distance[0]), void 0 === e.__options.distance[3]) && (e.__options.distance[3] = e.__options.distance[1]), e.__options.distance = {
                        top: e.__options.distance[0],
                        right: e.__options.distance[1],
                        bottom: e.__options.distance[2],
                        left: e.__options.distance[3]
                    }, "string" == typeof e.__options.side && (e.__options.side = [e.__options.side, {
                        top: "bottom",
                        right: "left",
                        bottom: "top",
                        left: "right"
                    }[e.__options.side]], "left" == e.__options.side[0] || "right" == e.__options.side[0] ? e.__options.side.push("top", "bottom") : e.__options.side.push("right", "left")), 6 === y.tooltipster._env.IE && !0 !== e.__options.arrow && (e.__options.arrow = !1)
                },
                __reposition: function(l, c) {
                    var t, d = this,
                        u = d.__targetFind(c),
                        p = [],
                        i = (d.__instance._$tooltip.detach(), d.__instance._$tooltip.clone()),
                        h = y.tooltipster._getRuler(i),
                        f = !1,
                        e = d.__instance.option("animation");
                    switch (e && i.removeClass("tooltipster-" + e), y.each(["window", "document"], function(e, n) {
                        var s = null;
                        if (d.__instance._trigger({
                                container: n,
                                helper: c,
                                satisfied: f,
                                takeTest: function(e) {
                                    s = e
                                },
                                results: p,
                                type: "positionTest"
                            }), 1 == s || 0 != s && 0 == f && ("window" != n || d.__options.viewportAware))
                            for (e = 0; e < d.__options.side.length; e++) {
                                var r = {
                                        horizontal: 0,
                                        vertical: 0
                                    },
                                    a = d.__options.side[e];
                                "top" == a || "bottom" == a ? r.vertical = d.__options.distance[a] : r.horizontal = d.__options.distance[a], d.__sideChange(i, a), y.each(["natural", "constrained"], function(e, t) {
                                    if (s = null, d.__instance._trigger({
                                            container: n,
                                            event: l,
                                            helper: c,
                                            mode: t,
                                            results: p,
                                            satisfied: f,
                                            side: a,
                                            takeTest: function(e) {
                                                s = e
                                            },
                                            type: "positionTest"
                                        }), 1 == s || 0 != s && 0 == f) {
                                        var i = {
                                                container: n,
                                                distance: r,
                                                fits: null,
                                                mode: t,
                                                outerSize: null,
                                                side: a,
                                                size: null,
                                                target: u[a],
                                                whole: null
                                            },
                                            o = ("natural" == t ? h.free() : h.constrain(c.geo.available[n][a].width - r.horizontal, c.geo.available[n][a].height - r.vertical)).measure();
                                        if (i.size = o.size, i.outerSize = {
                                                height: o.size.height + r.vertical,
                                                width: o.size.width + r.horizontal
                                            }, "natural" == t ? c.geo.available[n][a].width >= i.outerSize.width && c.geo.available[n][a].height >= i.outerSize.height ? i.fits = !0 : i.fits = !1 : i.fits = o.fits, "window" == n && (i.whole = !!i.fits && ("top" == a || "bottom" == a ? c.geo.origin.windowOffset.right >= d.__options.minIntersection && c.geo.window.size.width - c.geo.origin.windowOffset.left >= d.__options.minIntersection : c.geo.origin.windowOffset.bottom >= d.__options.minIntersection && c.geo.window.size.height - c.geo.origin.windowOffset.top >= d.__options.minIntersection)), p.push(i), i.whole) f = !0;
                                        else if ("natural" == i.mode && (i.fits || i.size.width <= c.geo.available[n][a].width)) return !1
                                    }
                                })
                            }
                    }), d.__instance._trigger({
                        edit: function(e) {
                            p = e
                        },
                        event: l,
                        helper: c,
                        results: p,
                        type: "positionTested"
                    }), p.sort(function(e, t) {
                        var i, o;
                        return e.whole && !t.whole ? -1 : !e.whole && t.whole ? 1 : e.whole && t.whole ? (i = d.__options.side.indexOf(e.side)) < (o = d.__options.side.indexOf(t.side)) || !(o < i) && "natural" == e.mode ? -1 : 1 : e.fits && !t.fits ? -1 : !e.fits && t.fits ? 1 : e.fits && t.fits ? (i = d.__options.side.indexOf(e.side)) < (o = d.__options.side.indexOf(t.side)) || !(o < i) && "natural" == e.mode ? -1 : 1 : "document" == e.container && "bottom" == e.side && "natural" == e.mode ? -1 : 1
                    }), (t = p[0]).coord = {}, t.side) {
                        case "left":
                        case "right":
                            t.coord.top = Math.floor(t.target - t.size.height / 2);
                            break;
                        case "bottom":
                        case "top":
                            t.coord.left = Math.floor(t.target - t.size.width / 2)
                    }
                    switch (t.side) {
                        case "left":
                            t.coord.left = c.geo.origin.windowOffset.left - t.outerSize.width;
                            break;
                        case "right":
                            t.coord.left = c.geo.origin.windowOffset.right + t.distance.horizontal;
                            break;
                        case "top":
                            t.coord.top = c.geo.origin.windowOffset.top - t.outerSize.height;
                            break;
                        case "bottom":
                            t.coord.top = c.geo.origin.windowOffset.bottom + t.distance.vertical
                    }
                    "window" == t.container ? "top" == t.side || "bottom" == t.side ? t.coord.left < 0 ? 0 <= c.geo.origin.windowOffset.right - this.__options.minIntersection ? t.coord.left = 0 : t.coord.left = c.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : t.coord.left > c.geo.window.size.width - t.size.width && (c.geo.origin.windowOffset.left + this.__options.minIntersection <= c.geo.window.size.width ? t.coord.left = c.geo.window.size.width - t.size.width : t.coord.left = c.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - t.size.width) : t.coord.top < 0 ? 0 <= c.geo.origin.windowOffset.bottom - this.__options.minIntersection ? t.coord.top = 0 : t.coord.top = c.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : t.coord.top > c.geo.window.size.height - t.size.height && (c.geo.origin.windowOffset.top + this.__options.minIntersection <= c.geo.window.size.height ? t.coord.top = c.geo.window.size.height - t.size.height : t.coord.top = c.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - t.size.height) : (t.coord.left > c.geo.window.size.width - t.size.width && (t.coord.left = c.geo.window.size.width - t.size.width), t.coord.left < 0 && (t.coord.left = 0)), d.__sideChange(i, t.side), c.tooltipClone = i[0], c.tooltipParent = d.__instance.option("parent").parent[0], c.mode = t.mode, c.whole = t.whole, c.origin = d.__instance._$origin[0], c.tooltip = d.__instance._$tooltip[0], delete t.container, delete t.fits, delete t.mode, delete t.outerSize, delete t.whole, t.distance = t.distance.horizontal || t.distance.vertical;
                    var o, e = y.extend(!0, {}, t);
                    d.__instance._trigger({
                        edit: function(e) {
                            t = e
                        },
                        event: l,
                        helper: c,
                        position: e,
                        type: "position"
                    }), d.__options.functionPosition && (e = d.__options.functionPosition.call(d, d.__instance, c, e)) && (t = e), h.destroy(), e = "top" == t.side || "bottom" == t.side ? (o = {
                        prop: "left",
                        val: t.target - t.coord.left
                    }, t.size.width - this.__options.minIntersection) : (o = {
                        prop: "top",
                        val: t.target - t.coord.top
                    }, t.size.height - this.__options.minIntersection), o.val < this.__options.minIntersection ? o.val = this.__options.minIntersection : o.val > e && (o.val = e), e = c.geo.origin.fixedLineage ? c.geo.origin.windowOffset : {
                        left: c.geo.origin.windowOffset.left + c.geo.window.scroll.left,
                        top: c.geo.origin.windowOffset.top + c.geo.window.scroll.top
                    }, t.coord = {
                        left: e.left + (t.coord.left - c.geo.origin.windowOffset.left),
                        top: e.top + (t.coord.top - c.geo.origin.windowOffset.top)
                    }, d.__sideChange(d.__instance._$tooltip, t.side), c.geo.origin.fixedLineage ? d.__instance._$tooltip.css("position", "fixed") : d.__instance._$tooltip.css("position", ""), d.__instance._$tooltip.css({
                        left: t.coord.left,
                        top: t.coord.top,
                        height: t.size.height,
                        width: t.size.width
                    }).find(".tooltipster-arrow").css({
                        left: "",
                        top: ""
                    }).css(o.prop, o.val), d.__instance._$tooltip.appendTo(d.__instance.option("parent")), d.__instance._trigger({
                        type: "repositioned",
                        event: l,
                        position: t
                    })
                },
                __sideChange: function(e, t) {
                    e.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + t)
                },
                __targetFind: function(e) {
                    var t = {},
                        i = this.__instance._$origin[0].getClientRects();
                    return 1 < i.length && 1 == this.__instance._$origin.css("opacity") && (this.__instance._$origin.css("opacity", .99), i = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1)), i.length < 2 ? (t.top = Math.floor(e.geo.origin.windowOffset.left + e.geo.origin.size.width / 2), t.bottom = t.top, t.left = Math.floor(e.geo.origin.windowOffset.top + e.geo.origin.size.height / 2), t.right = t.left) : (e = i[0], t.top = Math.floor(e.left + (e.right - e.left) / 2), e = 2 < i.length ? i[Math.ceil(i.length / 2) - 1] : i[0], t.right = Math.floor(e.top + (e.bottom - e.top) / 2), e = i[i.length - 1], t.bottom = Math.floor(e.left + (e.right - e.left) / 2), e = 2 < i.length ? i[Math.ceil((i.length + 1) / 2) - 1] : i[i.length - 1], t.left = Math.floor(e.top + (e.bottom - e.top) / 2)), t
                }
            }
        }), y
    }), $(document).ready(function() {
        $(".filtersbox").length && ($(".filtersbox .heading > p > a").each(function() {
            this.addEventListener("click", resetFilterItems)
        }), $(".filtersbox button.reset_fb > a").each(function() {
            this.addEventListener("click", resetFilterAll)
        }), $(".filtersbox .heading").each(function() {
            this.addEventListener("click", showAndHideFilter)
        }), $(".filtersbox .filters > ul > li").each(function() {
            this.addEventListener("click", checkUncheckFilter)
        }))
    }), document.getElementById("input_search_manu") && ((input = document.getElementById("input_search_manu")).onkeyup = function() {
        for (var e = input.value.toUpperCase(), t = document.getElementsByClassName("list_search"), i = 0; i < t.length; i++) {
            var o = t[i].getElementsByClassName("name")[0].innerHTML;
            console.log(o), 0 == o.toUpperCase().indexOf(e) ? t[i].style.display = "list-item" : t[i].style.display = "none"
        }
    }), $(function() {
        var e = parseInt($("#minimum_price").val()),
            t = parseInt($("#maximum_price").val());
        $("#slider-range").slider({
            range: !0,
            min: e,
            max: t,
            values: [e, t],
            slide: function(e, t) {
                $("#amount").val(t.values[0] + "_" + t.values[1]), $("#amount_min").val("€ " + t.values[0]), $("#amount_max").val("€ " + t.values[1])
            }
        }), $("#amount_min").val("€ " + $("#slider-range").slider("values", 0)), $("#amount_max").val("€ " + $("#slider-range").slider("values", 1))
    }), $(document).on("click", ".voucher_advanced_input_closed", function() {
        $(".voucher_advanced_input_closed").hide(), $(".voucher_advanced_input_open").show()
    }), $(document).on("click", ".voucher_advanced_code_submit", function(e) {
        e.preventDefault(), $(".voucher_advanced_code_submit").attr("disabled", !0), VoucherAdvanced.stopKlarnaCheckout(), VoucherAdvanced.addVoucherCodeToOrder($(this).parent()), $(".voucher_advanced_code_submit").attr("disabled", !1)
    }), $(document).on("keypress", ".voucher_advanced_code_input", function(e) {
        if (13 == e.which) return $(".voucher_advanced_code_submit").attr("disabled", !0), VoucherAdvanced.stopKlarnaCheckout(), VoucherAdvanced.addVoucherCodeToOrder($(this).parent()), $(".voucher_advanced_code_submit").attr("disabled", !1), !1
    }), $(document).on("click", ".voucher_advanced_delete_code a", function(e) {
        e.preventDefault(), $(".voucher_advanced_delete_code a").attr("disabled", !0), VoucherAdvanced.stopKlarnaCheckout(), VoucherAdvanced.removeVoucherCodeToOrder($(this)), $(".voucher_advanced_delete_code a").attr("disabled", !1)
    });
var VoucherAdvanced = new function() {
        this.stopKlarnaCheckout = function() {
            "function" == typeof window._klarnaCheckout && window._klarnaCheckout(function(e) {
                $("#checkout_klarna_checkout_wrapper").append('<div class="checkout_klarna_payment_wait_overlay"></div>'), e.suspend()
            })
        }, this.refreshKlarnaCheckout = function() {
            "function" == typeof window._klarnaCheckout && window._klarnaCheckout(function(e) {
                e.resume(), $(".checkout_klarna_payment_wait_overlay").remove()
            })
        }, this.addVoucherCodeToOrder = function(e) {
            $(".box_voucher_advanced").fadeTo(500, .3), $.ajax({
                url: "ajax/validate_voucher.php",
                type: "POST",
                cache: !1,
                data: "add_voucher_advanced_code=" + e.children(".voucher_advanced_code_input").val(),
                success: function(e) {
                    VoucherAdvanced.processTheResponse(e, "add")
                },
                error: function() {
                    0 == VoucherAdvanced.checkToRefreshPage() && $(".box_voucher_advanced").fadeTo(500, 1)
                }
            })
        }, this.removeVoucherCodeToOrder = function(e) {
            $(".box_voucher_advanced").fadeTo(500, .3), $.ajax({
                url: "ajax/validate_voucher.php",
                type: "POST",
                cache: !1,
                data: "remove_voucher_advanced_code=" + e.attr("href"),
                success: function(e) {
                    VoucherAdvanced.processTheResponse(e, "remove")
                },
                error: function() {
                    0 == VoucherAdvanced.checkToRefreshPage() && $(".box_voucher_advanced").fadeTo(500, 1)
                }
            })
        }, this.refreshVoucherCodeInputHtml = function(e) {
            $(".box_voucher_advanced").fadeTo(500, .3), $.ajax({
                url: "ajax/validate_voucher.php",
                type: "POST",
                cache: !1,
                data: "refresh_voucher_advanced_code_html=true",
                success: function(e) {
                    if ("" != e) try {
                        var t = JSON.parse(e);
                        $(".box_voucher_advanced").replaceWith(t.html).fadeTo(500, 1)
                    } catch (e) {
                        0 == VoucherAdvanced.checkToRefreshPage() && $(".box_voucher_advanced").fadeTo(500, 1)
                    } else $(".box_voucher_advanced").fadeTo(500, 1)
                },
                error: function() {
                    0 == VoucherAdvanced.checkToRefreshPage() && $(".box_voucher_advanced").fadeTo(500, 1)
                }
            })
        }, this.processTheResponse = function(e, t) {
            if ("" != e) try {
                var i = JSON.parse(e);
                1 == i.refresh && 1 == VoucherAdvanced.checkToRefreshPage() ? window.location = window.location.href.split("?")[0] : 1 == i.refresh && 1 == VoucherAdvanced.checkToRefreshCheckoutProductBasket() ? VoucherAdvanced.refreshCheckoutProductBasket() : ($(".box_voucher_advanced").replaceWith(i.html).fadeTo(500, 1), ShoppingCart.getHoverContentForHeaderShoppingCart(), 1 == i.refresh && 1 === window.location.pathname.indexOf("checkout.php") && 1 == i.bonus_points && "function" == typeof BonusPointsRedeem.refreshBonusPointsRedeemInputHtml && BonusPointsRedeem.refreshBonusPointsRedeemInputHtml())
            } catch (e) {
                0 == VoucherAdvanced.checkToRefreshPage() && $(".box_voucher_advanced").fadeTo(500, 1)
            }
            VoucherAdvanced.refreshKlarnaCheckout()
        }, this.checkToRefreshPage = function() {
            return 1 === window.location.pathname.indexOf("shopping_cart.php")
        }, this.checkToRefreshCheckoutProductBasket = function() {
            return 1 === window.location.pathname.indexOf("checkout_confirmation.php")
        }, this.refreshCheckoutProductBasket = function() {
            $("#checkout_confirmation").append('<div id="checkout_confirmation_basket_wait_box"><div id="checkout_confirmation_basket_wait_box_inner"><img src="images/ajax-loader.gif" alt="" /><br>Bitte warten</div></div>'), $.ajax({
                url: "ajax/checkout_product_basket.php",
                type: "POST",
                success: function(e) {
                    e = $.parseJSON(e), $("#checkout_confirmation_basket").html(e.showBasket), $("img[data-src]").unveil(), $("#checkout_confirmation_basket_wait_box").remove()
                }
            })
        }
    },
    BonusPointsRedeem = ($(document).on("click", ".box_bonus_points_redeem_input_closed", function() {
        $(".box_bonus_points_redeem_input_closed").hide(), $(".box_bonus_points_redeem_input_open").show()
    }), $(document).on("click", ".box_bonus_points_redeem_spend_points_for_voucher button", function(e) {
        e.preventDefault(), $(this).disabled = !0, BonusPointsRedeem.stopKlarnaCheckout(), BonusPointsRedeem.addBonusPointsRedeemToOrder($(this).parent()), $(this).disabled = !1
    }), $(document).on("keyup", ".box_bonus_points_redeem_spend_points_for_voucher input", function(e) {
        return BonusPointsRedeem.calculatePossibleBonusPointsAmount($(this), !1), !1
    }), $(document).on("focusout", ".box_bonus_points_redeem_spend_points_for_voucher input", function(e) {
        return BonusPointsRedeem.calculatePossibleBonusPointsAmount($(this), !0), !1
    }), $(document).on("click", ".box_bonus_points_redeem_delete_code button", function(e) {
        e.preventDefault(), $(this).disabled = !0, BonusPointsRedeem.stopKlarnaCheckout(), BonusPointsRedeem.removeBonusPointsRedeemFromOrder($(this)), $(this).disabled = !1
    }), new function() {
        this.stopKlarnaCheckout = function() {
            "function" == typeof window._klarnaCheckout && window._klarnaCheckout(function(e) {
                $("#checkout_klarna_checkout_wrapper").append('<div class="checkout_klarna_payment_wait_overlay"></div>'), e.suspend()
            })
        }, this.refreshKlarnaCheckout = function() {
            "function" == typeof window._klarnaCheckout && window._klarnaCheckout(function(e) {
                e.resume(), $(".checkout_klarna_payment_wait_overlay").remove()
            })
        }, this.addBonusPointsRedeemToOrder = function(e) {
            $(".box_bonus_points_redeem").fadeTo(500, .3), $.ajax({
                url: "ajax/bonus_points_redeem.php",
                type: "POST",
                cache: !1,
                data: "add_bonus_points_redeem=" + e.find("input").val(),
                success: function(e) {
                    BonusPointsRedeem.processTheResponse(e, "add")
                },
                error: function() {
                    !1 === BonusPointsRedeem.checkToRefreshPage() && $(".box_bonus_points_redeem").fadeTo(500, 1)
                }
            })
        }, this.removeBonusPointsRedeemFromOrder = function(e) {
            $(".box_bonus_points_redeem").fadeTo(500, .3), $.ajax({
                url: "ajax/bonus_points_redeem.php",
                type: "POST",
                cache: !1,
                data: "remove_bonus_points_redeem=" + e.attr("href"),
                success: function(e) {
                    BonusPointsRedeem.processTheResponse(e, "remove")
                },
                error: function() {
                    !1 === BonusPointsRedeem.checkToRefreshPage() && $(".box_bonus_points_redeem").fadeTo(500, 1)
                }
            })
        }, this.refreshBonusPointsRedeemInputHtml = function(e) {
            $(".box_bonus_points_redeem").fadeTo(500, .3), $.ajax({
                url: "ajax/bonus_points_redeem.php",
                type: "POST",
                cache: !1,
                data: "refresh_bonus_points_redeem_html=true",
                success: function(e) {
                    if ("" != e) try {
                        var t = JSON.parse(e);
                        $(".box_bonus_points_redeem").replaceWith(t.html).fadeTo(500, 1)
                    } catch (e) {
                        !1 === BonusPointsRedeem.checkToRefreshPage() && $(".box_bonus_points_redeem").fadeTo(500, 1)
                    } else $(".box_bonus_points_redeem").fadeTo(500, 1)
                },
                error: function() {
                    !1 === BonusPointsRedeem.checkToRefreshPage() && $(".box_bonus_points_redeem").fadeTo(500, 1)
                }
            })
        }, this.processTheResponse = function(e, t) {
            if ("" != e) try {
                var i = JSON.parse(e);
                1 == i.refresh && !0 === BonusPointsRedeem.checkToRefreshPage() ? window.location = window.location.href.split("?")[0] : 1 == i.refresh && !0 === BonusPointsRedeem.checkToRefreshCheckoutProductBasket() ? BonusPointsRedeem.refreshCheckoutProductBasket() : ($(".box_bonus_points_redeem").replaceWith(i.html).fadeTo(500, 1), ShoppingCart.getHoverContentForHeaderShoppingCart(), 1 == i.refresh && 1 === window.location.pathname.indexOf("checkout.php") && ($("#checkout_klarna_checkout_wrapper .box_bonus_points_checkout_php, #checkout_klarna_checkout_v3_wrapper .box_bonus_points_checkout_php").remove(), 0 < i.bonus_points.length) && i.bonus_points.forEach(function(e) {
                    $("#checkout_klarna_checkout_wrapper .box_bonus_points_redeem_checkout_php, #checkout_klarna_checkout_v3_wrapper .box_bonus_points_redeem_checkout_php").after('<div class="box_bonus_points_checkout_php">' + e + "</div>")
                }))
            } catch (e) {
                !1 === BonusPointsRedeem.checkToRefreshPage() && $(".box_bonus_points_redeem").fadeTo(500, 1)
            }
            BonusPointsRedeem.refreshKlarnaCheckout()
        }, this.checkToRefreshPage = function() {
            return 1 === window.location.pathname.indexOf("shopping_cart.php")
        }, this.checkToRefreshCheckoutProductBasket = function() {
            return 1 === window.location.pathname.indexOf("checkout_confirmation.php")
        }, this.refreshCheckoutProductBasket = function() {
            $("#checkout_confirmation").append('<div id="checkout_confirmation_basket_wait_box"><div id="checkout_confirmation_basket_wait_box_inner"><img src="images/ajax-loader.gif" alt="" /><br>Bitte warten</div></div>'), $.ajax({
                url: "ajax/checkout_product_basket.php",
                type: "POST",
                success: function(e) {
                    e = $.parseJSON(e), $("#checkout_confirmation_basket").html(e.showBasket), $("img[data-src]").unveil(), $("#checkout_confirmation_basket_wait_box").remove()
                }
            })
        }, this.calculatePossibleBonusPointsAmount = function(e, t) {
            var i = parseInt(e.val().replace(/[^0-9]/g, "")),
                o = (isNaN(i) && (i = 0), parseInt(e.attr("data-min-bonus-points").replace(/[^0-9]/g, ""))),
                n = parseInt(e.attr("data-max-bonus-points").replace(/[^0-9]/g, "")),
                n = (n < i ? i = n : !0 === t && i < o && (i = o), (i * e.attr("data-conversion-value").replace(/[^0-9.]/g, "")).toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
            e.val(i), $(".box_bonus_points_redeem_possible_amount").html(n)
        }
    });

function DealOfTheWeek() {
    var t = this;

    function i() {
        null != t.deal_of_the_week_interval && clearInterval(t.deal_of_the_week_interval), t.deal_of_the_week_interval = setInterval(function() {
            "complete" === document.readyState && (t.deal_of_the_week_current_count == t.deal_of_the_week_count ? t.deal_of_the_week_new_count = 0 : t.deal_of_the_week_new_count = t.deal_of_the_week_current_count + 1, o())
        }, t.change_interval_in_milliseconds)
    }

    function o() {
        t.deal_of_the_week_current_count != t.deal_of_the_week_new_count && ($(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_area a").eq(t.deal_of_the_week_new_count).find("img").trigger("unveil"), $(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_area a").eq(t.deal_of_the_week_current_count).fadeOut("slow"), $(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_dots span").eq(t.deal_of_the_week_current_count).css({
            "background-color": "#CCC"
        }), $(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_area a").eq(t.deal_of_the_week_new_count).fadeIn("slow"), $(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_dots span").eq(t.deal_of_the_week_new_count).css({
            "background-color": "#666"
        })), t.deal_of_the_week_current_count = t.deal_of_the_week_new_count
    }

    function n(e) {
        i(), t.deal_of_the_week_new_count = $(e).index(), o()
    }
    this.deal_of_the_week_wrapper = null, this.deal_of_the_week_count = 0, this.deal_of_the_week_current_count = 0, this.deal_of_the_week_new_count = 0, this.deal_of_the_week_interval = null, this.deal_of_the_week_navigation_point_timeout = null, this.change_interval_in_milliseconds = 6e3, this.create = function(e) {
        this.deal_of_the_week_wrapper = $(e), this.deal_of_the_week_count = $(this.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_area a").length - 1, i(), $(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_dots span").click(function() {
            n(this)
        }), $(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_dots span").mouseover(function() {
            var e = this;
            null != t.deal_of_the_week_navigation_point_timeout && clearTimeout(t.deal_of_the_week_navigation_point_timeout), t.deal_of_the_week_navigation_point_timeout = setTimeout(function() {
                $(t.deal_of_the_week_wrapper).find(".deal_of_the_week_box_image_dots span").eq($(e).index()).is(":hover") && n(e)
            }, 300)
        }), $(t.deal_of_the_week_wrapper).on("swiperight", function() {
            i(), 0 == t.deal_of_the_week_current_count ? t.deal_of_the_week_new_count = t.deal_of_the_week_count : t.deal_of_the_week_new_count = t.deal_of_the_week_current_count - 1, o()
        }), $(t.deal_of_the_week_wrapper).on("swipeleft", function() {
            i(), t.deal_of_the_week_current_count == t.deal_of_the_week_count ? t.deal_of_the_week_new_count = 0 : t.deal_of_the_week_new_count = t.deal_of_the_week_current_count + 1, o()
        }), $(t.deal_of_the_week_wrapper).on("movestart", function(e) {
            (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault()
        })
    }
}
$(document).ready(function() {
    (new DealOfTheWeek).create($(".deal_of_the_week_box_image"))
}), $(document).ready(function() {
    var e;
    0 < $("#sponsored_product").length && "undefined" != typeof global_product_datasets && (e = {
        product_datasets: Base64.encode(JSON.stringify(global_product_datasets)),
        search_keyword: $("#sponsored_product").attr("data-search"),
        style: $("#sponsored_product").attr("data-style")
    }, $.ajax({
        url: "ajax/sponsored_product.php",
        type: "POST",
        data: e,
        success: function(t) {
            try {
                var e;
                0 < t.length && (e = JSON.parse(t), $(".product_listing_container>div").eq($("#sponsored_product").attr("data-position") - 1).before(e.html), $("img[data-src]").unveil())
            } catch (e) {
                console.log(t)
            }
        }
    }))
});
var $modal = $(".modal"),
    $banner_slider = $(".banner-slider"),
    Hyphenopoly = ($modal.length && $.isFunction(jQuery.fn.modal) && $modal.modal(), $banner_slider.length && $.isFunction(jQuery.fn.slick) && $banner_slider.slick({
        dots: !0,
        infinite: !0,
        speed: 500,
        fade: !0,
        cssEase: "linear",
        autoplay: !0,
        autoplaySpeed: 6e3,
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: !1
            }
        }]
    }), {
        require: {
            de: "Silbentrennungsalgorithmus"
        },
        paths: {
            patterndir: "./templates/apotheke_de/javascript/polyfill/Hyphenopoly/patterns/",
            maindir: "./templates/apotheke_de/javascript/polyfill/Hyphenopoly/"
        },
        setup: {
            dontHyphenate: {
                button: !1
            },
            selectors: {
                ".hyphenate": {}
            }
        },
        handleEvent: {
            error: function(e) {
                e.preventDefault()
            }
        }
    });
((o, n, s, r) => {
    "use strict";
    const e = e => new Map(e),
        t = (i, e) => i ? (r.entries(e).forEach(([e, t]) => {
            i[e] = i[e] || t
        }), i) : e,
        i = sessionStorage,
        a = "Hyphenopoly_Loader.js",
        l = e(),
        c = {
            ac: "appendChild",
            ce: "createElement",
            ct: "createTextNode"
        };
    s.cacheFeatureTests && i.getItem(a) ? (s.cf = JSON.parse(i.getItem(a)), s.cf.langs = e(s.cf.langs)) : s.cf = {
        langs: e(),
        pf: !1
    }, _ = (_ = n.currentScript.src).slice(0, _.lastIndexOf("/") + 1), m = _ + "patterns/", s.paths = t(s.paths, {
        maindir: _,
        patterndir: m
    }), s.s = t(s.setup, {
        CORScredentials: "include",
        hide: "all",
        selectors: {
            ".hyphenate": {}
        },
        timeout: 1e3
    }), s.s.hide = ["all", "element", "text"].indexOf(s.s.hide); {
        const v = e(r.entries(s.fallbacks || {}));
        r.entries(s.require).forEach(([e, t]) => {
            l.set(e.toLowerCase(), {
                fn: v.get(e) || e,
                wo: t
            })
        })
    }
    const d = () => {
        let i = null,
            o = null;
        var e = new Promise((e, t) => {
            i = e, o = t
        });
        return e.resolve = i, e.reject = o, e
    };
    let u = null;
    s.hide = (e, i) => {
        if (0 === e) u && u.remove();
        else {
            const o = "{visibility:hidden!important}";
            u = n[c.ce]("style");
            let t = "";
            0 === i ? t = "html" + o : r.keys(s.s.selectors).forEach(e => {
                t += 1 === i ? e + o : e + "{color:transparent!important}"
            }), u[c.ac](n[c.ct](t)), n.head[c.ac](u)
        }
    };
    const p = (() => {
            let o = null;
            return {
                ap: () => o ? (n.documentElement[c.ac](o), o) : null,
                cl: () => {
                    o && o.remove()
                },
                cr: e => {
                    var t, i;
                    s.cf.langs.has(e) || (o = o || n[c.ce]("body"), i = "hyphens:auto", (t = n[c.ce]("div")).lang = e, t.style.cssText = `visibility:hidden;-webkit-${i};-ms-${i};${i};width:48px;font-size:12px;line-height:12px;border:none;padding:0;word-wrap:normal`, t[c.ac](n[c.ct](l.get(e).wo.toLowerCase())), o[c.ac](t))
                }
            }
        })(),
        h = (s.res = {
            he: e()
        }, e()),
        f = e => {
            var t, i = l.get(e).fn + ".wasm";
            s.cf.pf = !0, s.cf.langs.set(e, "H9Y"), h.has(i) ? ((t = s.res.he.get(h.get(i))).c = !0, s.res.he.set(e, t)) : (s.res.he.set(e, {
                w: o.fetch(s.paths.patterndir + i, {
                    credentials: s.s.CORScredentials
                })
            }), h.set(i, e))
        };
    l.forEach((e, t) => {
        "FORCEHYPHENOPOLY" === e.wo || "H9Y" === s.cf.langs.get(t) ? f(t) : p.cr(t)
    });
    var _ = p.ap();
    _ && (_.querySelectorAll("div").forEach(e => {
        var t;
        "auto" === ((t = e.style).hyphens || t.webkitHyphens || t.msHyphens) && 12 < e.offsetHeight ? s.cf.langs.set(e.lang, "CSS") : f(e.lang)
    }), p.cl());
    const g = s.handleEvent;
    if (s.cf.pf) {
        s.res.DOM = new Promise(e => {
            "loading" === n.readyState ? n.addEventListener("DOMContentLoaded", e, {
                once: !0,
                passive: !0
            }) : e()
        });
        const w = s.s.hide;
        0 === w && s.hide(1, 0), -1 !== w && (s.timeOutHandler = o.setTimeout(() => {
            s.hide(0, null), console.info(a + " timed out.")
        }, s.s.timeout)), s.res.DOM.then(() => {
            0 < w && s.hide(1, w)
        });
        var m = n[c.ce]("script");
        m.src = s.paths.maindir + "Hyphenopoly.js", n.head[c.ac](m), s.hy6ors = e(), s.cf.langs.forEach((e, t) => {
            "H9Y" === e && s.hy6ors.set(t, d())
        }), s.hy6ors.set("HTML", d()), s.hyphenators = new Proxy(s.hy6ors, {
            get: (e, t) => e.get(t),
            set: () => !0
        }), g && g.polyfill && g.polyfill()
    } else g && g.tearDown && g.tearDown(), o.Hyphenopoly = null;
    s.cacheFeatureTests && i.setItem(a, JSON.stringify({
        langs: [...s.cf.langs.entries()],
        pf: s.cf.pf
    }))
})(window, document, Hyphenopoly, Object);
const ApoEvents = {
        PRODUCTSLIDER_HASVIDEO_INDEX_CHANGE: "PRODUCTSLIDER_HASVIDEO_INDEX_CHANGE",
        SELECTFIELD_OPTIONS_CHANGED: "SELECTFIELD_OPTIONS_CHANGED",
        DEFERRED_LIBRARY_LOADED: "DEFERRED_LIBRARY_LOADED",
        USERCENTRICS_CONSENT_STATUS_CHANGED: "USERCENTRICS_CONSENT_STATUS_CHANGED",
        USERCENTRICS_CONSENT_CHECKED: "USERCENTRICS_CONSENT_CHECKED",
        DY_API_AVAILABLE: "DY_API_AVAILABLE",
        DY_SLIDER_INIT: "DY_SLIDER_INIT",
        FIXED_PRODUCT_HEADER_VISIBILITY_CHANGE: "FIXED_PRODUCT_HEADER_VISIBILITY_CHANGE",
        PDP_NODE_CHANGE: "PDP_NODE_CHANGE",
        PRODUCTSLIDER_NODES_CHANGE: "PRODUCTSLIDER_NODES_CHANGE",
        DY_ABTEST_INIT: "DY_ABTEST_INIT",
        DYSLIDER_BY_TYPE_INIT: "dySliderByTypeInit"
    },
    ApoDynamicYieldController = () => {
        const i = "dy-dynamic";
        let o = 0,
            n = [];
        const s = e => {
                if ("dy-static" === e.detail.id || e.detail.id === i) {
                    if (o++, e.detail.id === i) {
                        var t = e.detail.id,
                            t = document.querySelector('*[data-deferscript="' + t + '"]');
                        n = JSON.parse(t.getAttribute("data-eventdata"))
                    }
                    2 === o && (document.removeEventListener(ApoEvents.DEFERRED_LIBRARY_LOADED, s), r(e.detail.isConsented))
                }
            },
            r = (e = !1) => {
                window.DY ? (window.DY.userActiveConsent = e ? {
                    accepted: !0
                } : {
                    accepted: !1
                }, n.forEach(e => {
                    window.DY.API("event", e)
                }), document.dispatchEvent(new CustomEvent(ApoEvents.DY_API_AVAILABLE))) : setTimeout(() => {
                    r(e)
                }, 100)
            };
        return document.addEventListener(ApoEvents.DEFERRED_LIBRARY_LOADED, s), this
    },
    CONSOLESTYLE_ALERT = (ApoDynamicYieldController(), ["background: #fff; color: #fc0000; font-size:13px", "background: #fc0000; color: #fff; font-size:13px"]),
    CONSOLESTYLE_INFO = ["background: #000; color: #00ff00; font-size:11px", "background: #00ff00; color: #000; font-size:11px"],
    ApoLibraryLoader = (document.addEventListener("DOMContentLoaded", () => {
        document.addEventListener(ApoEvents.USERCENTRICS_CONSENT_STATUS_CHANGED, ApoLibraryLoader.updateScriptTags)
    }), {
        _deferredScriptTags: document.querySelectorAll("[data-deferscript]"),
        _loggingDisabled: !0,
        updateScriptTags: e => {
            let o, t, i;
            e.type === ApoEvents.USERCENTRICS_CONSENT_STATUS_CHANGED && (o = e.detail.services, t = Array.from(ApoLibraryLoader._deferredScriptTags).filter(e => "usercentrics" === e.dataset.defercondition && void 0 !== e.dataset.forceload), i = Array.from(ApoLibraryLoader._deferredScriptTags).filter(e => "usercentrics" === e.dataset.defercondition && !e.dataset.loaded && void 0 === e.dataset.forceload), ApoLibraryLoader._loggingDisabled || (console.log("%c------------------------", CONSOLESTYLE_INFO[0]), console.log("%cupdateScriptTags : Consented Services = ", CONSOLESTYLE_INFO[0], o), console.log("%cupdateScriptTags : forceloadScriptTags = ", CONSOLESTYLE_INFO[0], t), console.log("%cupdateScriptTags : filteredScriptTags = ", CONSOLESTYLE_INFO[0], i), console.log("%c------------------------", CONSOLESTYLE_INFO[0])), i.forEach(t => {
                ApoLibraryLoader._loggingDisabled || (console.log("------------------------"), console.info("%cSearching for matching scriptTag.dataset.usercentricsId = %c " + t.dataset.usercentricsId, ...CONSOLESTYLE_ALERT));
                for (let e = 0; e < o.length; e++) {
                    var i = o[e];
                    if (ApoLibraryLoader._loggingDisabled || console.log("%cChecking consented service.id: %c " + i.id, ...CONSOLESTYLE_INFO), i.id === t.dataset.usercentricsId) {
                        ApoLibraryLoader._loggingDisabled || (console.log("%cSCRIPT ID MATCHED! Loading scriptTag => %c " + t.dataset.deferscript, ...CONSOLESTYLE_ALERT), console.log("%c------------------------", CONSOLESTYLE_INFO[0])), ApoLibraryLoader.activateDeferredScriptTag(t);
                        break
                    }
                }
            }), t.forEach(e => {
                ApoLibraryLoader._loggingDisabled || console.info("%cForce loading scriptTag => %c " + e.dataset.deferscript, ...CONSOLESTYLE_ALERT), ApoLibraryLoader.activateDeferredScriptTag(e, !1)
            }), ApoLibraryLoader._loggingDisabled || console.log("%c------------------------", CONSOLESTYLE_INFO[0]))
        },
        activateDeferredScriptTags: e => {
            e.forEach(e => {
                ApoLibraryLoader.activateDeferredScriptTag(e)
            })
        },
        activateDeferredScriptTag: (t, i = !0) => {
            t.onload = e => {
                e.currentTarget.dataset.loaded = "true", document.dispatchEvent(new CustomEvent(ApoEvents.DEFERRED_LIBRARY_LOADED, {
                    detail: {
                        id: t.dataset.deferscript,
                        isConsented: i
                    }
                }))
            }, t.src = t.dataset.src
        }
    });