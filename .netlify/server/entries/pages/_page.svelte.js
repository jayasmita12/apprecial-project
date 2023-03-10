import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/index2.js";
import "../../chunks/ScrollSmoother.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-small 2xl:max-w-large mt-10 mb-14 px-4 flex flex-col gap-y-16 sm:gap-y-0 mx-auto"}"><div class="${"flex sm:flex-row flex-col justify-between items-center space-x-0 lg:space-x-10 gap-y-8 sm:gap-y-0"}"><div class="${"space-y-2 sm:space-y-5 w-full order-last sm:order-fast"}"><div class="${"flex"}">
				<h1 class="${"title text-secondary-content text-2xl lg:text-4xl xl:text-[50px] leading-normal lg:leading-relaxed font-bold xl:leading-normal "}"><span class="${"h-[30px] lg:h-[50px] self-center w-1 bg-secondary-content "}" id="${"cursor"}"></span></h1></div>
			<p class="${"text-secondary-content/60 text-base sm:text-lg font-normal "}">Apprecial creates innovative digital products that make your day-to-day life more
				manageable.
			</p>
			<button class="${"flex bg-primary-content px-4 py-[0.6rem] rounded-xl space-x-2 "}"><span><img src="${"hero/dashboard-white-logo.svg"}" class="${"mt-[7px]"}" alt="${""}"></span>
				<span class="${"text-white text-lg font-normal"}">Dashboard </span></button></div>
		<div class="${"flex justify-end order-fast sm:order-last "}">
			<video src="${"hero/Apprecialweb_animation_Light.mp4"}" type="${"video/mp4"}" class="${"w-[65rem] 2xl:w-[70rem] light-img"}" autoplay loop muted playsinline></video>
			
			<video src="${"hero/Apprecialweb_animation_Dark.mp4"}" type="${"video/mp4"}" class="${"w-[65rem] 2xl:w-[70rem] dark-img"}" autoplay loop muted playsinline></video></div></div>
	<a href="${"/"}"><center class="${"space-y-2"}"><img class="${"light-img animate animate-bounce w-8 sm:w-10"}" src="${"hero/explore.svg"}" alt="${""}">
			<img class="${"dark-img animate animate-bounce w-8 sm:w-10"}" src="${"hero/explore-white.svg"}" alt="${""}">
			<p class="${"text-secondary-content text-xs sm:text-sm"}">EXPLORE</p></center></a></div>`;
});
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap$2, _coreInitted$2, _win$1, _doc$1, _docEl$2, _body$2, _isTouch, _pointerType, ScrollTrigger$1, _root$1, _normalizer$1, _eventTypes, _getGSAP$2 = function _getGSAP() {
  return gsap$2 || typeof window !== "undefined" && (gsap$2 = window.gsap) && gsap$2.registerPlugin && gsap$2;
}, _startup$1 = 1, _observers = [], _scrollers = [], _proxies = [], _getTime$1 = Date.now, _bridge = function _bridge2(name, value) {
  return value;
}, _integrate = function _integrate2() {
  var core = ScrollTrigger$1.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;
  _bridge = function _bridge3(name, value) {
    return data[name](value);
  };
}, _getProxyProp = function _getProxyProp2(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
}, _isViewport$1 = function _isViewport(el) {
  return !!~_root$1.indexOf(el);
}, _addListener$1 = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
}, _removeListener$1 = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll$1 = function _onScroll() {
  return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++;
}, _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
  var cachingFunc = function cachingFunc2(value) {
    if (value || value === 0) {
      _startup$1 && (_win$1.history.scrollRestoration = "manual");
      var isNormalizing = _normalizer$1 && _normalizer$1.isPressed;
      value = cachingFunc2.v = Math.round(value) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0);
      f(value);
      cachingFunc2.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value);
    } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
      cachingFunc2.cacheID = _scrollers.cache;
      cachingFunc2.v = f();
    }
    return cachingFunc2.v + cachingFunc2.offset;
  };
  cachingFunc.offset = 0;
  return f && cachingFunc;
}, _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win$1.scrollTo(value, _vertical.sc()) : _win$1.pageXOffset || _doc$1[_scrollLeft] || _docEl$2[_scrollLeft] || _body$2[_scrollLeft] || 0;
  })
}, _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win$1.scrollTo(_horizontal.sc(), value) : _win$1.pageYOffset || _doc$1[_scrollTop] || _docEl$2[_scrollTop] || _body$2[_scrollTop] || 0;
  })
}, _getTarget = function _getTarget2(t) {
  return gsap$2.utils.toArray(t)[0] || (typeof t === "string" && gsap$2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, _getScrollFunc = function _getScrollFunc2(element, _ref) {
  var s = _ref.s, sc = _ref.sc;
  var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport$1(element) ? sc : _scrollCacheFunc(function(value) {
    return arguments.length ? element[s] = value : element[s];
  })));
}, _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
  var v1 = value, v2 = value, t1 = _getTime$1(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
    var t = _getTime$1();
    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value2;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value2;
    } else {
      v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
    }
  }, reset = function reset2() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  }, getVelocity = function getVelocity2(latestValue) {
    var tOld = t2, vOld = v2, t = _getTime$1();
    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
  };
  return {
    update,
    reset,
    getVelocity
  };
}, _getEvent = function _getEvent2(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
}, _getAbsoluteMax = function _getAbsoluteMax2(a) {
  var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
}, _setScrollTrigger = function _setScrollTrigger2() {
  ScrollTrigger$1 = gsap$2.core.globals().ScrollTrigger;
  ScrollTrigger$1 && ScrollTrigger$1.core && _integrate();
}, _initCore$1 = function _initCore(core) {
  gsap$2 = core || _getGSAP$2();
  if (gsap$2 && typeof document !== "undefined" && document.body) {
    _win$1 = window;
    _doc$1 = document;
    _docEl$2 = _doc$1.documentElement;
    _body$2 = _doc$1.body;
    _root$1 = [_win$1, _doc$1, _docEl$2, _body$2];
    gsap$2.utils.clamp;
    _pointerType = "onpointerenter" in _body$2 ? "pointer" : "mouse";
    _isTouch = Observer.isTouch = _win$1.matchMedia && _win$1.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$1 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$2 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl$2) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function() {
      return _startup$1 = 0;
    }, 500);
    _setScrollTrigger();
    _coreInitted$2 = 1;
  }
  return _coreInitted$2;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /* @__PURE__ */ function() {
  function Observer2(vars) {
    this.init(vars);
  }
  var _proto = Observer2.prototype;
  _proto.init = function init2(vars) {
    _coreInitted$2 || _initCore$1(gsap$2) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger$1 || _setScrollTrigger();
    var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl$2;
    this.vars = vars;
    ignore && (ignore = gsap$2.utils.toArray(ignore));
    tolerance = tolerance || 0;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win$1.getComputedStyle(_body$2).lineHeight) || 22);
    var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport$1(target), ownerDoc = target.ownerDocument || _doc$1, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
      return onClickTime = _getTime$1();
    }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    }, onStopFunc = function onStopFunc2() {
      self._vx.reset();
      self._vy.reset();
      onStopDelayedCall.pause();
      onStop && onStop(self);
    }, update = function update2() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }
      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }
      if (moved || dragged) {
        onMove && onMove(self);
        onLockAxis && locked && onLockAxis(self);
        if (dragged) {
          onDrag(self);
          dragged = false;
        }
        moved = locked = false;
      }
      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }
      id = 0;
    }, onDelta = function onDelta2(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;
      self._vx.update(x);
      self._vy.update(y);
      debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
      if (axis !== "y") {
        deltaX[2] += x;
        self._vx.update(x, true);
      }
      if (axis !== "x") {
        deltaY[2] += y;
        self._vy.update(y, true);
      }
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }
      debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, _onDrag = function _onDrag2(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
      self.x = x;
      self.y = y;
      if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
        onDrag && (dragged = true);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
        isDragging || onDragStart && onDragStart(self);
      }
    }, _onPress = self.onPress = function(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e);
      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;
      self._vx.reset();
      self._vy.reset();
      _addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    }, _onRelease = function _onRelease2(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
      var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
      if (!wasDragging) {
        self._vx.reset();
        self._vy.reset();
        if (preventDefault && allowClicks) {
          gsap$2.delayedCall(0.08, function() {
            if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }
      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, wasDragging);
    }, _onGestureStart = function _onGestureStart2(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    }, _onGestureEnd = function _onGestureEnd2() {
      return (self.isGesturing = false) || onGestureEnd(self);
    }, onScroll = function onScroll2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = scrollFuncX(), y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    }, _onWheel = function _onWheel2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$1.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    }, _onMove = function _onMove2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    }, _onHover = function _onHover2(e) {
      self.event = e;
      onHover(self);
    }, _onHoverEnd = function _onHoverEnd2(e) {
      self.event = e;
      onHoverEnd(self);
    }, _onClick = function _onClick2(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };
    onStopDelayedCall = self._dc = gsap$2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;
    self.enable = function(e) {
      if (!self.isEnabled) {
        _addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
        type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
        type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, preventDefault, capture);
        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener$1(target, _eventTypes[0], _onPress, preventDefault, capture);
          _addListener$1(ownerDoc, _eventTypes[2], _onRelease);
          _addListener$1(ownerDoc, _eventTypes[3], _onRelease);
          allowClicks && _addListener$1(target, "click", clickCapture, false, true);
          onClick && _addListener$1(target, "click", _onClick);
          onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener$1(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener$1(target, _pointerType + "move", _onMove);
        }
        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }
      return self;
    };
    self.disable = function() {
      if (self.isEnabled) {
        _observers.filter(function(o) {
          return o !== self && _isViewport$1(o.target);
        }).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
        if (self.isPressed) {
          self._vx.reset();
          self._vy.reset();
          _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }
        _removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
        _removeListener$1(target, "wheel", _onWheel, capture);
        _removeListener$1(target, _eventTypes[0], _onPress, capture);
        _removeListener$1(ownerDoc, _eventTypes[2], _onRelease);
        _removeListener$1(ownerDoc, _eventTypes[3], _onRelease);
        _removeListener$1(target, "click", clickCapture, true);
        _removeListener$1(target, "click", _onClick);
        _removeListener$1(ownerDoc, "gesturestart", _onGestureStart);
        _removeListener$1(ownerDoc, "gestureend", _onGestureEnd);
        _removeListener$1(target, _pointerType + "enter", _onHover);
        _removeListener$1(target, _pointerType + "leave", _onHoverEnd);
        _removeListener$1(target, _pointerType + "move", _onMove);
        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };
    self.kill = function() {
      self.disable();
      var i = _observers.indexOf(self);
      i >= 0 && _observers.splice(i, 1);
      _normalizer$1 === self && (_normalizer$1 = 0);
    };
    _observers.push(self);
    isNormalizer && _isViewport$1(target) && (_normalizer$1 = self);
    self.enable(event);
  };
  _createClass(Observer2, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);
  return Observer2;
}();
Observer.version = "3.10.4";
Observer.create = function(vars) {
  return new Observer(vars);
};
Observer.register = _initCore$1;
Observer.getAll = function() {
  return _observers.slice();
};
Observer.getById = function(id) {
  return _observers.filter(function(o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP$2() && gsap$2.registerPlugin(Observer);
/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap$1, _coreInitted$1, _win, _doc, _docEl$1, _body$1, _root, _resizeDelay, _toArray$1, _clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _limitCallbacks, _startup = 1, _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 0, _pointerDownHandler = function _pointerDownHandler2() {
  return _pointerIsDown = 1;
}, _pointerUpHandler = function _pointerUpHandler2() {
  return _pointerIsDown = 0;
}, _passThrough = function _passThrough2(v) {
  return v;
}, _round = function _round2(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _windowExists$1 = function _windowExists() {
  return typeof window !== "undefined";
}, _getGSAP$1 = function _getGSAP2() {
  return gsap$1 || _windowExists$1() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
}, _isViewport2 = function _isViewport3(e) {
  return !!~_root.indexOf(e);
}, _getBoundsFunc = function _getBoundsFunc2(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport2(element) ? function() {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _win.innerHeight;
    return _winOffsets;
  } : function() {
    return _getBounds(element);
  });
}, _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
  var d = _ref.d, d2 = _ref.d2, a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
    return a()[d];
  } : function() {
    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
  };
}, _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
    return _winOffsets;
  };
}, _maxScroll = function _maxScroll2(element, _ref2) {
  var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport2(element) ? (_docEl$1[s] || _body$1[s]) - (_win["inner" + d2] || _docEl$1["client" + d2] || _body$1["client" + d2]) : element[s] - element["offset" + d2];
}, _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
}, _isString$1 = function _isString(value) {
  return typeof value === "string";
}, _isFunction$1 = function _isFunction(value) {
  return typeof value === "function";
}, _isNumber = function _isNumber2(value) {
  return typeof value === "number";
}, _isObject = function _isObject2(value) {
  return typeof value === "object";
}, _callIfFunc = function _callIfFunc2(value) {
  return _isFunction$1(value) && value();
}, _combineFunc = function _combineFunc2(f1, f2) {
  return function() {
    var result1 = _callIfFunc(f1), result2 = _callIfFunc(f2);
    return function() {
      _callIfFunc(result1);
      _callIfFunc(result2);
    };
  };
}, _endAnimation = function _endAnimation2(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, _callback = function _callback2(self, func) {
  if (self.enabled) {
    var result = func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
}, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle2(element) {
  return _win.getComputedStyle(element);
}, _makePositionable = function _makePositionable2(element) {
  var position = _getComputedStyle(element).position;
  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, _setDefaults = function _setDefaults2(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }
  return obj;
}, _getBounds = function _getBounds2(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
}, _getSize = function _getSize2(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
}, _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
  var a = [], labels = timeline.labels, duration = timeline.duration(), p;
  for (p in labels) {
    a.push(labels[p] / duration);
  }
  return a;
}, _getClosestLabel = function _getClosestLabel2(animation) {
  return function(value) {
    return gsap$1.utils.snap(_getLabelRatioArray(animation), value);
  };
}, _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
  var snap = gsap$1.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
    return a2 - b;
  });
  return a ? function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var i;
    if (!direction) {
      return snap(value);
    }
    if (direction > 0) {
      value -= threshold;
      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }
      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;
      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }
    return a[0];
  } : function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
}, _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
  return function(value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
}, _multiListener = function _multiListener2(func, element, types, callback) {
  return types.split(",").forEach(function(type) {
    return func(element, type, callback);
  });
}, _addListener2 = function _addListener3(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
}, _removeListener2 = function _removeListener3(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _wheelListener = function _wheelListener2(func, el, scrollFunc) {
  return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
}, _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, _defaults = {
  toggleActions: "play",
  anticipatePin: 0
}, _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, _offsetToPx = function _offsetToPx2(value, size) {
  if (_isString$1(value)) {
    var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }
    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }
  return value;
}, _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
  var e = _doc.createElement("div"), useFixedPosition = _isViewport2(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body$1 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css2 = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  css2 += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css2 += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css2 += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css2;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];
  _positionMarker(e, 0, direction, isStart);
  return e;
}, _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap$1.set(marker, vars);
}, _triggers = [], _ids = {}, _rafID, _sync = function _sync2() {
  return _getTime() - _lastScrollTime > 34 && _updateAll();
}, _onScroll2 = function _onScroll3() {
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body$1.clientWidth) {
    _scrollers.cache++;
    _rafID || (_rafID = requestAnimationFrame(_updateAll));
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
}, _setBaseDimensions = function _setBaseDimensions2() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
}, _onResize = function _onResize2() {
  _scrollers.cache++;
  !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
}, _listeners = {}, _emptyArray = [], _media = [], _creatingMedia, _lastMediaTick, _onMediaChange = function _onMediaChange2(e) {
  var tick = gsap$1.ticker.frame, matches = [], i = 0, index;
  if (_lastMediaTick !== tick || _startup) {
    _revertAll();
    for (; i < _media.length; i += 4) {
      index = _win.matchMedia(_media[i]).matches;
      if (index !== _media[i + 3]) {
        _media[i + 3] = index;
        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction$1(_media[i + 2]) && _media[i + 2]();
      }
    }
    _revertRecorded();
    for (i = 0; i < matches.length; i++) {
      index = matches[i];
      _creatingMedia = _media[index];
      _media[index + 2] = _media[index + 1](e);
    }
    _creatingMedia = 0;
    _coreInitted$1 && _refreshAll(0, 1);
    _lastMediaTick = tick;
    _dispatch("matchMedia");
  }
}, _softRefresh = function _softRefresh2() {
  return _removeListener2(ScrollTrigger, "scrollEnd", _softRefresh2) || _refreshAll(true);
}, _dispatch = function _dispatch2(type) {
  return _listeners[type] && _listeners[type].map(function(f) {
    return f();
  }) || _emptyArray;
}, _savedStyles = [], _revertRecorded = function _revertRecorded2(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
}, _revertAll = function _revertAll2(kill2, media) {
  var trigger;
  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];
    if (!media || trigger.media === media) {
      if (kill2) {
        trigger.kill(1);
      } else {
        trigger.revert();
      }
    }
  }
  media && _revertRecorded(media);
  media || _dispatch("revert");
}, _clearScrollMemory = function _clearScrollMemory2() {
  return _scrollers.cache++ && _scrollers.forEach(function(obj) {
    return typeof obj === "function" && (obj.rec = 0);
  });
}, _refreshingAll, _refreshID = 0, _refreshAll = function _refreshAll2(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener2(ScrollTrigger, "scrollEnd", _softRefresh);
    return;
  }
  _refreshingAll = true;
  var refreshInits = _dispatch("refreshInit");
  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();
  _triggers.slice(0).forEach(function(t) {
    return t.refresh();
  });
  _triggers.forEach(function(t) {
    return t.vars.end === "max" && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
  });
  refreshInits.forEach(function(result) {
    return result && result.render && result.render(-1);
  });
  _clearScrollMemory();
  _resizeDelay.pause();
  _refreshID++;
  _refreshingAll = false;
  _dispatch("refresh");
}, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll2() {
  if (!_refreshingAll) {
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0);
    var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
    _direction = _lastScroll > scroll ? -1 : 1;
    _lastScroll = scroll;
    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;
        _dispatch("scrollEnd");
      }
      _time2 = _time1;
      _time1 = time;
    }
    if (_direction < 0) {
      _i = l;
      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
    ScrollTrigger.isUpdating = false;
  }
  _rafID = 0;
}, _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]), _swapPinOut = function _swapPinOut2(pin, spacer, state) {
  _setState(state);
  var cache = pin._gsap;
  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;
    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
}, _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }
    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
    _setState(spacerState);
    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
}, _capsExp = /([A-Z])/g, _setState = function _setState2(state) {
  if (state) {
    var style = state.t.style, l = state.length, i = 0, p, value;
    (state.t._gsap || gsap$1.core.getCache(state.t)).uncache = 1;
    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];
      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
}, _getState = function _getState2(element) {
  var l = _stateProps.length, style = element.style, state = [], i = 0;
  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }
  state.t = element;
  return state;
}, _copyState = function _copyState2(state, override, omitOffsets) {
  var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }
  result.t = state.t;
  return result;
}, _winOffsets = {
  left: 0,
  top: 0
}, _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
  _isFunction$1(value) && (value = value(self));
  if (_isString$1(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }
  var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
  containerAnimation && containerAnimation.seek(0);
  if (!_isNumber(value)) {
    _isFunction$1(trigger) && (trigger = trigger(self));
    var offsets = value.split(" "), bounds, localOffset, globalOffset, display;
    element = _getTarget(trigger) || _body$1;
    bounds = _getBounds(element) || {};
    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }
    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset;
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }
  if (marker) {
    var position = value + scrollerSize, isStart = marker._isStart;
    p1 = "scroll" + direction.d2;
    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$1[p1], _docEl$1[p1]) : marker.parentNode[p1]) <= position + 1);
    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }
  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }
  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
}, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent2(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style, p, cs;
    if (parent === _body$1) {
      element._stOrig = style.cssText;
      cs = _getComputedStyle(element);
      for (p in cs) {
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }
      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }
    gsap$1.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
}, _getTweenCreator = function _getTweenCreator2(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
    initialValue = initialValue || getScroll();
    change2 = change1 && change2 || 0;
    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    lastScroll1 = Math.round(initialValue);
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;
    modifiers[prop] = function(value) {
      value = _round(getScroll());
      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
        tween.kill();
        getTween2.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }
      lastScroll2 = lastScroll1;
      return lastScroll1 = _round(value);
    };
    vars.onComplete = function() {
      getTween2.tween = 0;
      onComplete && onComplete.call(tween);
    };
    tween = getTween2.tween = gsap$1.to(scroller, vars);
    return tween;
  };
  scroller[prop] = getScroll;
  getScroll.wheelHandler = function() {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };
  _addListener2(scroller, "wheel", getScroll.wheelHandler);
  return getTween;
};
var ScrollTrigger = /* @__PURE__ */ function() {
  function ScrollTrigger2(vars, animation) {
    _coreInitted$1 || ScrollTrigger2.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }
  var _proto = ScrollTrigger2.prototype;
  _proto.init = function init2(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true);
    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }
    vars = _setDefaults(_isString$1(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);
    var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win), scrollerCache = gsap$1.core.getCache(scroller), isViewport = _isViewport2(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
      return vars.onRefreshInit(self);
    }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
    self.media = _creatingMedia;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;
    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self);
    }
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    self.scrubDuration = function(value) {
      scrubSmooth = _isNumber(value) && value;
      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap$1.to(animation, {
          ease: "expo",
          totalProgress: "+=0.001",
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };
    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }
    _triggers.push(self);
    if (snap) {
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }
      "scrollBehavior" in _body$1.style && gsap$1.set(isViewport ? [_body$1, _docEl$1] : scroller, {
        scrollBehavior: "auto"
      });
      snapFunc = _isFunction$1(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap$1.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap$1.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
        var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1e3 || 0, change1 = gsap$1.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = _clamp(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              return;
            }
            if (snap.inertia === false) {
              change1 = endValue - progress;
            }
            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }
    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin);
    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : _getTarget(pin);
    _isString$1(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });
    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
      self.pin = pin;
      vars.force3D !== false && gsap$1.set(pin, {
        force3D: true
      });
      pinCache = gsap$1.core.getCache(pin);
      if (!pinCache.spacer) {
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }
        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap$1.getProperty(pin);
      pinSetter = gsap$1.quickSetter(pin, direction.a, _px);
      _swapPinIn(pin, spacer, cs);
      pinState = _getState(pin);
    }
    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap$1.quickSetter([markerStart, markerEnd], direction.a, _px));
      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body$1 : scroller);
        gsap$1.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap$1.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap$1.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function() {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(oldParams || []);
      });
    }
    self.previous = function() {
      return _triggers[_triggers.indexOf(self) - 1];
    };
    self.next = function() {
      return _triggers[_triggers.indexOf(self) + 1];
    };
    self.revert = function(revert) {
      var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
      if (r !== self.isReverted) {
        if (r) {
          self.scroll.rec || !_refreshing || !_refreshingAll || (self.scroll.rec = scrollFunc());
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r);
        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
        self.isReverted = r;
      }
    };
    self.refresh = function(soft, force) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }
      if (pin && soft && _lastScrollTime) {
        _addListener2(ScrollTrigger2, "scrollEnd", _softRefresh);
        return;
      }
      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = 1;
      lastRefresh = _getTime();
      if (tweenTo.tween) {
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }
      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.time(-0.01, true).invalidate();
      self.isReverted || self.revert();
      var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
      while (i--) {
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
        curPin = curTrigger.pin;
        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger);
          curTrigger.revert();
        }
        if (curTrigger !== _triggers[i]) {
          triggerIndex--;
          i--;
        }
      }
      _isFunction$1(parsedStart) && (parsedStart = parsedStart(self));
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
      _isFunction$1(parsedEnd) && (parsedEnd = parsedEnd(self));
      if (_isString$1(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString$1(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset2 = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString$1(parsedStart) ? parsedStart : start + offset2;
          parsedEndTrigger = trigger;
        }
      }
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
      change = end - start || (start -= 0.01) && 1e-3;
      offset2 = 0;
      i = triggerIndex;
      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;
        if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation && curTrigger.end > 0) {
          cs2 = curTrigger.end - curTrigger.start;
          if ((curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
            offset2 += cs2 * (1 - curTrigger.progress);
          }
          curPin === pin && (otherPinOffset += cs2);
        }
      }
      start += offset2;
      end += offset2;
      self._pinPush = otherPinOffset;
      if (markerStart && offset2) {
        cs2 = {};
        cs2[direction.a] = "+=" + offset2;
        pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
        gsap$1.set([markerStart, markerEnd], cs2);
      }
      if (pin) {
        cs2 = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc();
        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        !max && end > 1 && ((isViewport ? _body$1 : scroller).style["overflow-" + direction.a] = "scroll");
        _swapPinIn(pin, spacer, cs2);
        pinState = _getState(pin);
        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px);
          _setState(spacerState);
          useFixedPosition && scrollFunc(prevScroll);
        }
        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs2[_padding];
          override[_padding + _Top] = cs2[_padding + _Top];
          override[_padding + _Right] = cs2[_padding + _Right];
          override[_padding + _Bottom] = cs2[_padding + _Bottom];
          override[_padding + _Left] = cs2[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }
        if (animation) {
          initted = animation._initted;
          _suppressOverwrites(1);
          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2);
          animation.render(0, true, true);
          initted || animation.invalidate();
          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
      } else if (trigger && scrollFunc() && !containerAnimation) {
        bounds = trigger.parentNode;
        while (bounds && bounds !== _body$1) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }
          bounds = bounds.parentNode;
        }
      }
      revertedPins && revertedPins.forEach(function(t) {
        return t.revert(false);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = scrollFunc();
      if (!containerAnimation) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }
      self.revert(false);
      if (snapDelayedCall) {
        lastSnap = -1;
        self.isActive && scrollFunc(start + change * prevProgress);
        snapDelayedCall.restart(true);
      }
      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
      if (prevProgress !== self.progress || containerAnimation) {
        animation && !isToggle && animation.totalProgress(prevProgress, true);
        self.progress = prevProgress;
        self.update(0, 0, 1);
      }
      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      onRefresh && onRefresh(self);
    };
    self.getVelocity = function() {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1e3 || 0;
    };
    self.endAnimation = function() {
      _endAnimation(self.callbackAnimation);
      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };
    self.labelToScroll = function(label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };
    self.getTrailing = function(name) {
      var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString$1(name) ? a.filter(function(t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function(t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };
    self.update = function(reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }
      var scroll = self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;
        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      }
      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 1e-4);
      if (clipped !== prevProgress2 && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress2 && prevProgress2 < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress2;
        self.direction = clipped > prevProgress2 ? 1 : -1;
        self.progress = clipped;
        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }
        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction$1(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
          return t.endAnimation();
        }));
        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start);
            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }
        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true), _offset = scroll - start;
                _reparent(pin, _body$1, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }
            _setState(isActive || isAtMax ? pinActiveState : pinState);
            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }
        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray$1(toggleClass.targets).forEach(function(el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        });
        onUpdate && !isToggle && !reset && onUpdate(self);
        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }
            onUpdate && onUpdate(self);
          }
          if (toggled || !_limitCallbacks) {
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
            if (!toggled) {
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }
          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);
            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      }
      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }
      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };
    self.enable = function(reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;
        _addListener2(scroller, "resize", _onResize);
        _addListener2(isViewport ? _doc : scroller, "scroll", _onScroll2);
        onRefreshInit && _addListener2(ScrollTrigger2, "refreshInit", onRefreshInit);
        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }
        refresh !== false && self.refresh();
      }
    };
    self.getTween = function(snap3) {
      return snap3 && tweenTo ? tweenTo.tween : scrubTween;
    };
    self.setPositions = function(newStart, newEnd) {
      if (pin) {
        pinStart += newStart - start;
        pinChange += newEnd - newStart - change;
      }
      self.start = start = newStart;
      self.end = end = newEnd;
      change = newEnd - newStart;
      self.update();
    };
    self.disable = function(reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener2(ScrollTrigger2, "refreshInit", onRefreshInit);
        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }
        if (!isViewport) {
          var i = _triggers.length;
          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return;
            }
          }
          _removeListener2(scroller, "resize", _onResize);
          _removeListener2(scroller, "scroll", _onScroll2);
        }
      }
    };
    self.kill = function(revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];
      var i = _triggers.indexOf(self);
      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--;
      i = 0;
      _triggers.forEach(function(t) {
        return t.scroller === self.scroller && (i = 1);
      });
      i || (self.scroll.rec = 0);
      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }
      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);
      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;
        _triggers.forEach(function(t) {
          return t.pin === pin && i++;
        });
        i || (pinCache.spacer = 0);
      }
      vars.onKill && vars.onKill(self);
    };
    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    !animation || !animation.add || change ? self.refresh() : gsap$1.delayedCall(0.01, function() {
      return start || end || self.refresh();
    }) && (change = 0.01) && (start = end = 0);
  };
  ScrollTrigger2.register = function register2(core) {
    if (!_coreInitted$1) {
      gsap$1 = core || _getGSAP$1();
      _windowExists$1() && window.document && ScrollTrigger2.enable();
      _coreInitted$1 = _enabled;
    }
    return _coreInitted$1;
  };
  ScrollTrigger2.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }
    return _defaults;
  };
  ScrollTrigger2.disable = function disable(reset, kill2) {
    _enabled = 0;
    _triggers.forEach(function(trigger) {
      return trigger[kill2 ? "kill" : "disable"](reset);
    });
    _removeListener2(_win, "wheel", _onScroll2);
    _removeListener2(_doc, "scroll", _onScroll2);
    clearInterval(_syncInterval);
    _removeListener2(_doc, "touchcancel", _passThrough);
    _removeListener2(_body$1, "touchstart", _passThrough);
    _multiListener(_removeListener2, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
    _multiListener(_removeListener2, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
    _resizeDelay.kill();
    _iterateAutoRefresh(_removeListener2);
    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 1]);
      _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 2]);
    }
  };
  ScrollTrigger2.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl$1 = _doc.documentElement;
    _body$1 = _doc.body;
    if (gsap$1) {
      _toArray$1 = gsap$1.utils.toArray;
      _clamp = gsap$1.utils.clamp;
      _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough;
      gsap$1.core.globals("ScrollTrigger", ScrollTrigger2);
      if (_body$1) {
        _enabled = 1;
        Observer.register(gsap$1);
        ScrollTrigger2.isTouch = Observer.isTouch;
        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        _addListener2(_win, "wheel", _onScroll2);
        _root = [_win, _doc, _docEl$1, _body$1];
        ScrollTrigger2.matchMedia({
          // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
          "(orientation: portrait)": function orientationPortrait() {
            _setBaseDimensions();
            return _setBaseDimensions;
          }
        });
        _addListener2(_doc, "scroll", _onScroll2);
        var bodyStyle = _body$1.style, border = bodyStyle.borderTopStyle, bounds, i;
        bodyStyle.borderTopStyle = "solid";
        bounds = _getBounds(_body$1);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
        _syncInterval = setInterval(_sync, 250);
        gsap$1.delayedCall(0.5, function() {
          return _startup = 0;
        });
        _addListener2(_doc, "touchcancel", _passThrough);
        _addListener2(_body$1, "touchstart", _passThrough);
        _multiListener(_addListener2, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_addListener2, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
        _transformProp = gsap$1.utils.checkPrefix("transform");
        _stateProps.push(_transformProp);
        _coreInitted$1 = _getTime();
        _resizeDelay = gsap$1.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function() {
          var w = _win.innerWidth, h = _win.innerHeight;
          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];
        _iterateAutoRefresh(_addListener2);
        _triggers.forEach(function(trigger) {
          return trigger.enable(0, 1);
        });
        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 1]);
          _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 2]);
        }
      }
    }
  };
  ScrollTrigger2.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger2.isTouch === 1 && vars.ignoreMobileResize);
    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener2) || _iterateAutoRefresh(_addListener2, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };
  ScrollTrigger2.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport2(t);
    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }
    if (vars) {
      isViewport ? _proxies.unshift(_win, vars, _body$1, vars, _docEl$1, vars) : _proxies.unshift(t, vars);
    }
  };
  ScrollTrigger2.matchMedia = function matchMedia(vars) {
    var mq, p, i, func, result;
    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;
      if (p === "all") {
        func();
      } else {
        mq = _win.matchMedia(p);
        if (mq) {
          mq.matches && (result = func());
          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;
            _media.push(p, func, result);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
          _media[i + 3] = mq.matches;
        }
      }
      _creatingMedia = 0;
    }
    return _media;
  };
  ScrollTrigger2.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 4);
  };
  ScrollTrigger2.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString$1(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };
  ScrollTrigger2.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString$1(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };
  return ScrollTrigger2;
}();
ScrollTrigger.version = "3.10.4";
ScrollTrigger.saveStyles = function(targets) {
  return targets ? _toArray$1(targets).forEach(function(target) {
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5);
      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$1.core.getCache(target), _creatingMedia);
    }
  }) : _savedStyles;
};
ScrollTrigger.revert = function(soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger.create = function(vars, animation) {
  return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function(safe) {
  return safe ? _onResize() : (_coreInitted$1 || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = _updateAll;
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function(element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getScrollFunc = function(element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getById = function(id) {
  return _ids[id];
};
ScrollTrigger.getAll = function() {
  return _triggers.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
ScrollTrigger.isScrolling = function() {
  return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function(type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function(type, callback) {
  var a = _listeners[type], i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function(targets, vars) {
  var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
    var elements = [], triggers = [], delay = gsap$1.delayedCall(interval, function() {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function(self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  }, p;
  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction$1(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }
  if (_isFunction$1(batchMax)) {
    batchMax = batchMax();
    _addListener2(ScrollTrigger, "refresh", function() {
      return batchMax = vars.batchMax();
    });
  }
  _toArray$1(targets).forEach(function(target) {
    var config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });
  return result;
};
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, _allowNativePanning = function _allowNativePanning2(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
  }
  target === _docEl$1 && _allowNativePanning2(_body$1, direction);
}, _overflow = {
  auto: 1,
  scroll: 1
}, _nestedScroll = function _nestedScroll2(_ref5) {
  var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
  var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap$1.core.getCache(node), time = _getTime(), cs;
  if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
    while (node && node.scrollHeight <= node.clientHeight) {
      node = node.parentNode;
    }
    cache._isScroll = node && !_isViewport2(node) && node !== target && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }
  (cache._isScroll || axis === "x") && (event._gsapAllow = true);
}, _inputObserver = function _inputObserver2(target, type, inputs, nested) {
  return Observer.create({
    target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener2(_doc, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener2(_doc, Observer.eventTypes[0], _captureInputs, true);
    }
  });
}, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs2(e) {
  var isInput = _inputExp.test(e.target.tagName);
  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
}, _getScrollNormalizer = function _getScrollNormalizer2(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";
  var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self, maxY, target = _getTarget(vars.target) || _docEl$1, smoother = gsap$1.core.globals().ScrollSmoother, content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smoother && smoother.get() && smoother.get().content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction$1(momentum) ? function() {
    return momentum(self);
  } : function() {
    return momentum || 2.8;
  }, skipTouchMove, lastRefreshID, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
    return skipTouchMove = false;
  }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  }, ignoreDrag = function ignoreDrag2() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);
      var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;
        content.style.transform = "translateY(" + -scrollFuncY.offset + "px)";
        content._gsap && (content._gsap.y = -scrollFuncY.offset + "px");
        scrollFuncY.cacheID = _scrollers.cache;
        _updateAll();
      }
      return true;
    }
    if (content) {
      content.style.transform = "translateY(0px)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
      content._gsap && (content._gsap.y = "0px");
    }
    skipTouchMove = true;
  }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
    updateClamps();
    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };
  vars.ignoreCheck = function(e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };
  vars.onPress = function() {
    var prevScale = scale;
    scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    skipTouchMove = false;
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };
  vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
    if (content) {
      content.style.transform = "translateY(0px)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
      content._gsap && (content._gsap.y = "0px");
    }
    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _scrollers.cache++;
      var dur = resolveMomentumDuration(), currentScroll, endScroll;
      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }
      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);
      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        gsap$1.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }
  };
  vars.onWheel = function() {
    tween._ts && tween.pause();
    if (_getTime() - wheelRefresh > 1e3) {
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };
  vars.onChange = function(self2, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
    dy && scrollFuncY(scrollClampY(yArray[2] === dy ? startScrollY + (self2.startY - self2.y) : scrollFuncY() + dy - yArray[1]));
    _updateAll();
  };
  vars.onEnable = function() {
    _allowNativePanning(target, normalizeScrollX ? false : "x");
    _addListener2(_win, "resize", onResize);
    inputObserver.enable();
  };
  vars.onDisable = function() {
    _allowNativePanning(target, true);
    _removeListener2(_win, "resize", onResize);
    inputObserver.kill();
  };
  self = new Observer(vars);
  self.iOS = _fixIOSBug;
  _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
  onStopDelayedCall = self._dc;
  tween = gsap$1.to(self, {
    ease: "power4",
    paused: true,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    onComplete: onStopDelayedCall.vars.onComplete
  });
  return self;
};
ScrollTrigger.sort = function(func) {
  return _triggers.sort(func || function(a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger.observe = function(vars) {
  return new Observer(vars);
};
ScrollTrigger.normalizeScroll = function(vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }
  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }
  if (vars === false) {
    return _normalizer && _normalizer.kill();
  }
  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport2(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};
ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp,
  _inputObserver,
  _scrollers,
  _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP$1() && gsap$1.registerPlugin(ScrollTrigger);
const Werugo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".shadow.svelte-azpjp0{--tw-shadow:5px 5px 45px 10px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),\r\n			var(--tw-shadow)}",
  map: null
};
const Werugo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"max-w-small 2xl:max-w-large px-4 mx-auto lg:relative"}"><div class="${"flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-32 w-full py-0 lg:py-24"}"><div class="${"w-full lg:w-[59%] self-center flex justify-center lg:justify-start lg:self-end lg:relative"}"><img src="${"werugo/mobile2.png"}" class="${"w-[20rem] shadow relative -top-32 lg:absolute lg:-top-[42.6rem] bottom-0 border-4 border-black rounded-[2.5rem] outline outline-2 outline-offset-0 outline-white card-shadow svelte-azpjp0"}" alt="${""}"></div>
		<div class="${"space-y-5 w-full relative -top-20 lg:top-0 self-end "}"><div class="${"flex space-x-2 sm:space-x-4"}"><img src="${"werugo/werugo-logo.svg"}" class="${"w-8 sm:w-12"}" alt="${""}">
				<h1 class="${"text-white text-2xl sm:text-[42px] self-center font-semibold"}">Werugo</h1></div>
			<p class="${"quote3 text-white/70 font-normal text-sm sm:text-lg sm:w-[25rem]"}">A ground-breaking device tracker application for iOS and Android devices, Werugo offers
				advanced features such as voice-activated device location, real-time tracking, and remote
				control capabilities, making it reliable for ensuring security. It&#39;s like having a personal
				assistant for your devices, minus the coffee runs.
			</p>
			<button class="${"bg-primary-content px-4 py-[0.6rem] rounded-xl"}"><span class="${"text-white text-lg font-normal"}">Learn more</span></button>
			<div class="${"flex sm:flex-row flex-col space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 "}"><a href="${"/"}"><img src="${"werugo/playstore.svg"}" alt="${""}"></a>
				<a href="${"/"}"><button class="${"flex space-x-3 border-base-200 justify-center py-1 rounded-lg w-[11rem] border-[1.5px]"}"><div><img src="${"werugo/apple.svg"}" class="${"mt-1"}" alt="${""}"></div>
						<div class="${"text-white font-bold"}"><p class="${"text-xs font-thin"}">Download on the</p>
							<h3 class="${"text-xl"}">AppStore</h3></div></button></a>
				<a href="${"/"}"><button class="${"flex space-x-3 border-base-200 justify-center py-1 rounded-lg w-[11rem] border-[1.5px]"}"><div><img src="${"ourProduct/appreicial-icon.svg"}" class="${"mt-1"}" alt="${""}"></div>
						<div class="${"text-white text-left font-bold"}"><p class="${"text-xs font-thin"}">Manage on the</p>
							<h3 class="${"text-xl"}">Dashboard</h3></div></button></a></div></div></div>
</div>`;
});
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { category = "" } = $$props;
  let { product = "" } = $$props;
  let { iconPath = "" } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  if ($$props.iconPath === void 0 && $$bindings.iconPath && iconPath !== void 0)
    $$bindings.iconPath(iconPath);
  return `<div class="${"flex flex-col items-center"}"><div class="${"box h-[5.75rem] w-[15rem]"}"><p class="${"text-secondary-content/90 text-2xl font-medium"}">${escape(category)}</p></div>
	<div class="${"h-[23.313rem] w-1 bg-base-200"}"></div>
	<div class="${"product-icon card-shadow z-10"}"><img class="${escape(product == "Dashboard" ? "h-[2.75rem]" : "h-[3.7rem]", true) + " object-contain"}"${add_attribute("src", iconPath, 0)} alt="${""}"></div>
	<div class="${"w-[16.563rem] py-7 rounded-2xl border-2 border-base-200 text-center -mt-5 z-0 space-y-1"}"><p class="${"text-secondary-content text-2xl font-medium"}">${escape(product)}</p>
		<p class="${"text-secondary-content/50 text-sm font-medium"}">Product</p>
		<a class="${"text-secondary-content text-sm font-medium border-b border-secondary-content pb-0.5"}" href="${"/"}">Learn more below
		</a></div></div>`;
});
const Structure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-small 2xl:max-w-large mx-auto text-center mt-20 pb-20 hidden xl:flex xl:flex-col "}"><h2 class="${"text-heading-2 font-bold text-secondary-content"}">Company Structure</h2>
	<div class="${"w-[8.3rem] h-[5px] bg-primary-content rounded-3xl mt-1 mx-auto"}"></div>

	<div class="${"mt-14 flex justify-center"}">
		<section class="${"flex flex-col items-center -mr-[5.8rem]"}"><img class="${"mt-40 light-img"}" src="${"/images/top-left-line.svg"}" alt="${""}">
			<img class="${"mt-40 dark-img"}" src="${"/images/top-left-line-dark.svg"}" alt="${""}">
			<div class="${"flex -ml-14"}">
				<section><img class="${"light-img"}" src="${"/images/bottom-left-line.svg"}" alt="${""}">
					<img class="${"dark-img"}" src="${"/images/bottom-left-line-dark.svg"}" alt="${""}">
					<div class="${"-ml-40"}">${validate_component(Product, "Product").$$render(
    $$result,
    {
      category: "Mobile Products",
      product: "Werugo",
      iconPath: "/images/werugo.svg"
    },
    {},
    {}
  )}</div></section>

				
				<section><img class="${"light-img"}" src="${"/images/bottom-right-line.svg"}" alt="${""}">
					<img class="${"dark-img"}" src="${"/images/bottom-right-line-dark.svg"}" alt="${""}">
					${validate_component(Product, "Product").$$render(
    $$result,
    {
      category: "Web Products",
      product: "Dashboard",
      iconPath: "/images/dashboard.svg"
    },
    {},
    {}
  )}</section></div></section>

		
		<section class="${"flex flex-col items-center space-y-1 -mr-[7.2rem]"}"><div class="${"h-[7.625rem] w-[7.625rem] rounded-full bg-primary grid place-items-center card-shadow dark: -mb-5 z-10"}"><img class="${"h-[3.75rem] object-contain"}" src="${"/images/apprecial.svg"}" alt="${""}"></div>
			<div class="${"px-10 py-7 rounded-2xl border-2 border-base-200 text-center space-y-1"}"><p class="${"text-secondary-content text-2xl font-medium"}">Apprecial LTD.</p>
				<p class="${"text-secondary-content/50 text-sm font-medium"}">Parent company</p></div></section>

		
		<section class="${"flex flex-col items-center -mr-40"}"><img class="${"mt-40 light-img"}" src="${"/images/top-right-line.svg"}" alt="${""}">
			<img class="${"mt-40 dark-img"}" src="${"/images/top-right-line-dark.svg"}" alt="${""}">
			<div class="${"flex flex-col items-center -mr-80"}"><div class="${"box h-[5.75rem] w-[15rem]"}"><p class="${"text-secondary-content/90 text-2xl font-medium"}">Games</p></div>
				<div class="${"h-[4.375rem] w-1 bg-base-200"}"></div>
				<div class="${"product-icon card-shadow z-10"}"><img class="${"h-[3.75rem] object-contain"}" src="${"/images/playplix.svg"}" alt="${""}"></div></div>
			<div class="${"px-8 py-5 flex space-x-8 rounded-2xl border-2 border-base-200 w-[40rem] -mt-5 -ml-20"}"><p class="${"text-secondary-content/50 text-lg text-start flex-1"}">Apprecial’s subsidiary company, PlayPlix is a dedicated digital venue for mobile games. We
					aim to reinvent the future of gaming by bringing the innovative gaming ideas to life and
					introducing new levels of excitement.
				</p>
				<div class="${"h-full w-1 bg-base-200"}"></div>
				<div class="${"text-center w-[30%] space-y-1 mt-2"}"><p class="${"text-secondary-content text-2xl font-medium"}">PlayPlix</p>
					<p class="${"text-secondary-content/50 text-sm font-medium"}">SUBSIDIARY COMPANY</p>
					<div class="${"flex items-center justify-center space-x-1"}"><a class="${"text-secondary-content text-sm font-medium border-b border-secondary-content pb-0.5"}" href="${"/"}">Open website
						</a>
						<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-4 h-4 text-secondary-content"}"><path fill-rule="${"evenodd"}" d="${"M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"}" clip-rule="${"evenodd"}"></path></svg></div></div></div></section></div></div>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".ellipse.svelte-1u8yr0z{-webkit-clip-path:ellipse(145% 100% at 50% 100%);clip-path:ellipse(145% 100% at 50% 100%)}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const cards = [
    {
      title: "Mission",
      description: "To provide eclectic, energetic, efficacious digital products that empower people to improve their productivity, achieve their goals, and bolster both personal and business lives.",
      iconPath: "/images/mission.svg",
      iconPosition: "top-3 -left-12"
    },
    {
      title: "Vision",
      description: "To improve productivity and enhance connectivity worldwide by leveraging the power of the internet.",
      iconPath: "/images/vision.svg",
      iconPosition: "top-8 -left-5"
    },
    {
      title: "Our Values",
      description: "At Apprecial, we believe our users are our greatest asset. By providing exceptional service and embracing customer feedback, we prioritise what matters and hold the key to creating solutions that revolutionise online experiences.",
      iconPath: "/images/values.svg",
      iconPosition: "-top-3 -left-7"
    }
  ];
  $$result.css.add(css$1);
  return `<div class="${"bg-gradient-to-b from-secondary to-transparent mt-10 ellipse svelte-1u8yr0z"}"><section class="${"max-w-small 2xl:max-w-large mx-auto flex flex-col lg:flex-row lg:space-x-40 space-y-10 lg:space-y-0 pt-20 px-4"}"><img class="${"w-[24.5rem] object-contain self-center"}" src="${"images/about.svg"}" alt="${""}">
	
		
		<div class="${"box2 "}"><h2 class="${"text-2xl sm:text-heading-2 text-center sm:text-left font-bold text-secondary-content"}">What is Apprecial?</h2>
			<div class="${"flex justify-center sm:justify-start"}"><div class="${"w-[8.3rem] h-[5px] bg-primary-content rounded-3xl mt-3 flex "}"></div></div>
			<p class="${"quote1 text-base sm:text-lg font-normal text-center sm:text-left text-secondary-content/70 mt-4"}">Apprecial is a Software-As-A-Service (SAAS) internet company dedicated to developing
				innovative applications that make your everyday life easier and more enjoyable.
			</p>

			<p class="${"quote1 text-base sm:text-lg text-center sm:text-left text-secondary-content/60 mt-6"}">At Apprecial, we are pushing the boundaries of innovation with our cutting-edge applications
				designed to enhance your productivity. By fusing inspiration and dedication, we’re
				revolutionising the way you interact with the internet, taking your experience to new
				heights. With facility, faculty, and fecundity, our goal is to not only modernise your
				digital persona and presence, but also to inspire a positive change in your personal and
				professional competencies.
			</p></div></section>

	<section class="${"max-w-small 2xl:max-w-large mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-14 px-8 sm:px-4"}">${each(cards, (card) => {
    return `<div class="${"relative z-10 rounded-3xl bg-primary overflow-hidden text-center px-5 pt-5 card-shadow"}"><img class="${"absolute -z-10 w-[12.5rem] object-contain opacity-10 " + escape(card.iconPosition, true) + " svelte-1u8yr0z"}"${add_attribute("src", card.iconPath, 0)} alt="${""}">
				<h3 class="${"text-[20px] sm:text-heading-3 text-secondary-content font-medium"}">${escape(card.title)}</h3>
				<p class="${"text-base sm:text-lg text-secondary-content/60 mt-1 sm:mt-5 mb-5"}">${escape(card.description)}</p>
			</div>`;
  })}</section>
</div>`;
});
const OurProduct_svelte_svelte_type_style_lang = "";
const css = {
  code: ".shadow.svelte-cu8swg{--tw-shadow:12px 12px 35px 15px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),\r\n			var(--tw-shadow)}",
  map: null
};
const OurProduct = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"max-w-small 2xl:max-w-large mx-auto flex px-4"}"><div class="${"flex flex-row justify-between items-center pt-16 pb-56 lg:pb-80"}"><div class="${"flex flex-col space-y-10 sm:space-y-28 w-full"}"><div class="${"flex flex-col space-y-3"}"><h1 class="${"text-secondary-content text-2xl sm:text-[40px] font-bold"}">Our Products</h1>
				<span><img src="${"ourProduct/line.svg"}" class="${""}" alt="${""}"></span></div>

			<div class="${"flex sm:hidden h-[494px] relative"}"><img src="${"ourProduct/product-dashboard.png"}" class="${"absolute -right-4 h-[494px] w-full border-[6px] border-r-0 rounded-r-none border-black rounded-3xl outline outline-4 outline-offset-0 outline-white "}" alt="${""}"></div>

			<div class="${"space-y-6 box1"}"><div class="${"flex space-x-3 "}"><img src="${"nav/dasboard-icon.svg"}" class="${"w-9"}" alt="${""}">
					<h1 class="${"text-secondary-content text-2xl sm:text-[40px] font-bold"}">Dashboard</h1></div>
				<p class="${"quote2 text-secondary-content/70 font-normal text-base sm:text-lg sm:w-[28rem]"}">Unlock the full potential of Apprecial&#39;s mobile-based services with our intuitive and
					feature-rich dashboard. It allows you to stay in control by providing remote access so you
					can easily manage your subscriptions, track account activity, or connect with our support
					team, all from one convenient location.
				</p>
				<button class="${"bg-primary-content px-4 py-[0.6rem] rounded-xl"}"><span class="${"text-white text-lg font-normal"}">Learn more</span></button>
				<button class="${"flex space-x-3 border-primary-content justify-center py-1 rounded-lg w-[11rem] border-[1.5px]"}"><div><img src="${"ourProduct/appreicial-icon.svg"}" class="${"mt-1"}" alt="${""}"></div>
					<div class="${"text-secondary-content text-left font-bold"}"><p class="${"text-xs"}">Manage on the</p>
						<h3 class="${"text-xl"}">Dashboard</h3></div></button></div></div>
		<div class="${"lg:flex hidden"}"><img src="${"ourProduct/product-dashboard.png"}" class="${"absolute -right-[25%] xl:-right-0 top-20 border-[6px] border-r-0 rounded-r-none border-black rounded-[2.5rem] outline outline-4 outline-offset-0 outline-white shadow svelte-cu8swg"}" alt="${""}"></div></div>
</div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"py-14 sm:py-20 "}"><div class="${"flex flex-col justify-center items-center mb-16"}"><h1 class="${"text-secondary-content text-2xl sm:text-4xl font-bold"}">Timeline</h1>
		<div class="${"w-[5rem] rounded-full border-primary-content border-2 mt-2"}"></div></div>

	<div class="${"h-auto w-full flex justify-center items-center text-center "}"><div class="${"max-w-small 2xl:max-w-large mx-auto w-full md:grid md:grid-cols-9 px-2"}">
			<div class="${"md:relative md:col-span-4 col-span-0 w-full h-full flex justify-center rounded-2xl "}"><div class="${"w-[80%] h-full md:flex md:flex-col justify-center hidden bg-primary text-secondary-content rounded-3xl pr-3 md:pl-4 timeline-shadow mt-5"}"><h1 class="${"text-3xl bg-primary-content/10 rounded-lg font-medium py-2"}">The Journey Begins
					</h1>
					<p class="${"text-lg font-normal leading-snug text-secondary-content/70 pt-6 pb-3 px-5"}">The moment we realised the world needed a company that would create useful digital
						products to solve everyday problems, Apprecial was born.
					</p></div>
				<div class="${"hidden md:flex"}"><img src="${"timeline/timeline.svg"}" class="${"absolute top-14 w-[6rem] light-img"}" alt="${""}">
					<img src="${"timeline/timeline-dark.svg"}" class="${"absolute top-14 w-[6rem] dark-img"}" alt="${""}"></div></div>
			<div class="${"md:relative col-span-1 w-full h-full flex flex-col justify-center items-center"}"><div class="${"md:absolute top-0 rounded-full bg-base-300 border-[3px] border-base-content w-20 h-20 md:w-28 md:h-28 flex items-center justify-center z-10 text-secondary-content/50 text-center text-2xl font-medium"}">2015
				</div>
				<div class="${"h-[10vh] md:h-full w-[8px] timeline-hr"}"></div></div>
			<div class="${"md:col-span-4 col-span-2 w-full h-full flex justify-center"}"><div class="${"w-[80%] h-full md:hidden visible bg-primary text-secondary-content rounded-3xl p-2 md:pl-4 timeline-shadow"}"><h1 class="${"sm:text-3xl text-xl bg-error/10 rounded-xl font-medium py-2"}">The Journey Begins
					</h1>
					<p class="${"text-base sm:text-lg font-normal leading-snug text-secondary-content/70 pt-5 pb-3 px-5"}">The moment we realised the world needed a company that would create useful digital
						products to solve everyday problems, Apprecial was born.
					</p></div></div>





			
			<div class="${"md:col-span-4 col-span-0 md:flex hidden "}"></div>
			<div class="${"md:relative col-span-1 w-full h-full flex flex-col justify-center items-center"}"><div class="${"h-[10vh] md:h-full flex w-[8px] timeline-hr"}"></div>
				<div class="${"md:absolute top-0 rounded-full bg-base-300 border-[3px] border-base-content h-20 w-20 flex items-center justify-center z-10 text-secondary-content/50 text-center text-2xl font-medium"}">2016
				</div>
				<div class="${"h-[10vh] md:h-full flex w-[8px] timeline-hr"}"></div></div>

			<div class="${"relative md:col-span-4 col-span-2 w-full h-full flex justify-center rounded-2xl "}"><div class="${"hidden md:flex"}"><img src="${"timeline/timeline.svg"}" class="${"absolute top-10 -left-10 w-[4.8rem] lg:w-[6rem] light-img"}" alt="${""}">
					<img src="${"timeline/timeline-dark.svg"}" class="${"absolute top-10 -left-10 w-[4.8rem] lg:w-[6rem] dark-img"}" alt="${""}"></div>
				<div class="${"w-[80%] h-full bg-primary text-secondary-content rounded-3xl p-2 md:pl-4 timeline-shadow "}"><h1 class="${"sm:text-3xl text-xl bg-[#E95E64]/10 rounded-xl font-medium py-2"}">Gaming</h1>
					<p class="${"text-base sm:text-lg font-normal leading-snug text-secondary-content/70 pt-5 pb-3 px-5"}">With most mobile games being repetitive and filled with ads, it was time for a change.
						Apprecial’s subsidiary company, PlayPlix, was established with the aim of creating fun
						and innovative mobile games.
					</p></div></div>


			
			<div class="${"md:relative md:col-span-4 col-span-0 w-full h-full flex justify-center rounded-2xl "}"><div class="${"w-[80%] h-full md:flex md:flex-col hidden bg-primary text-secondary-content rounded-3xl p-2 md:pl-4 timeline-shadow mt-2"}"><h1 class="${"text-3xl bg-[#6289CD]/10 rounded-xl font-medium py-2"}">The Planning Process
					</h1>
					<p class="${"text-lg font-normal leading-snug text-secondary-content/70 pt-5 pb-3 px-5"}">To ensure everything runs smoothly, the planning process has been evolving for a couple
						of years. Within that time, all of the documentation and future plans have been drafted,
						and we are now proud to announce the commencement of our products.
					</p></div>
				<div class="${"hidden md:flex"}"><img src="${"timeline/timeline.svg"}" class="${"absolute top-10 w-[6.2rem] light-img"}" alt="${""}">
					<img src="${"timeline/timeline-dark.svg"}" class="${"absolute top-10 w-[6.2rem] dark-img"}" alt="${""}"></div></div>
			<div class="${"md:relative col-span-1 w-full h-full flex flex-col justify-center items-center"}"><div class="${"h-[10vh] md:h-full w-[8px] timeline-hr"}"></div>
				<div class="${"md:absolute top-0 rounded-full bg-base-300 border-[3px] border-base-content h-20 w-20 flex items-center justify-center text-2xl font-medium z-10 text-secondary-content/50 text-center"}">2017+
				</div>
				<div class="${"h-[10vh] md:h-full w-[8px] timeline-hr"}"></div></div>
			<div class="${"md:col-span-4 col-span-2 w-full h-full flex justify-center"}"><div class="${"w-[80%] h-full md:hidden visible bg-primary text-secondary-content rounded-3xl p-2 md:pl-4 timeline-shadow"}"><h1 class="${"sm:text-3xl text-xl bg-info/20 rounded-xl font-medium py-2"}">The Planning Process
					</h1>
					<p class="${"text-base sm:text-lg font-normal leading-snug text-secondary-content/70 pt-5 pb-3 px-5"}">To ensure everything runs smoothly, the planning process has been evolving for a couple
						of years. Within that time, all of the documentation and future plans have been drafted,
						and we are now proud to announce the commencement of our products.
					</p></div></div>

			
			<div class="${"col-span-4 w-full h-full"}"></div>
			<div class="${"md:relative col-span-1 w-full h-full flex flex-col justify-center items-center"}"><div class="${"h-[10vh] md:h-full w-[8px] timeline-hr"}"></div>
				<div class="${"md:absolute top-0 rounded-full bg-base-300 border-[3px] border-base-content h-20 w-20 flex items-center justify-center text-2xl font-medium z-10 text-secondary-content/50 text-center"}">2023
				</div>
				<div class="${"h-[10vh] md:h-full w-[8px] timeline-hr"}"></div></div>
			<div class="${"md:relative md:col-span-4 col-span-2 w-full h-full flex flex-col justify-center rounded-2xl "}"><div class="${"hidden md:flex"}"><img src="${"timeline/timeline.svg"}" class="${"absolute top-10 -left-10 w-[4.8rem] lg:w-[6rem] light-img"}" alt="${""}">
					<img src="${"timeline/timeline-dark.svg"}" class="${"absolute top-10 -left-10 w-[4.8rem] lg:w-[6rem] dark-img"}" alt="${""}"></div>

					<div class="${"relative w-[80%] h-full self-center bg-primary text-secondary-content rounded-3xl p-2 md:pl-4 timeline-shadow"}"><h1 class="${"sm:text-3xl text-xl bg-[#6DC56A]/10 rounded-xl font-medium py-2"}">Our First Mobile App
						</h1>
						<p class="${"text-base sm:text-lg font-normal leading-snug text-secondary-content/70 pt-5 pb-3 px-5"}">Werugo, our first mobile App for Android and iOS devices, is currently in the last phase
							of the development process and will be available for download in the upcoming weeks.
						</p></div>
					<div class="${"flex justify-center"}"><div class="${"h-[20vh] md:hidden w-[8px] timeline-hr"}"></div></div></div></div></div></div>`;
});
/*!
 * ScrollToPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap, _coreInitted, _window, _docEl, _body, _toArray, _config, _windowExists2 = function _windowExists3() {
  return typeof window !== "undefined";
}, _getGSAP3 = function _getGSAP4() {
  return gsap || _windowExists2() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isString2 = function _isString3(value) {
  return typeof value === "string";
}, _isFunction2 = function _isFunction3(value) {
  return typeof value === "function";
}, _max = function _max2(element, axis) {
  var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
}, _buildGetter = function _buildGetter2(e, axis) {
  var p = "scroll" + (axis === "x" ? "Left" : "Top");
  if (e === _window) {
    if (e.pageXOffset != null) {
      p = "page" + axis.toUpperCase() + "Offset";
    } else {
      e = _docEl[p] != null ? _docEl : _body;
    }
  }
  return function() {
    return e[p];
  };
}, _clean = function _clean2(value, index, target, targets) {
  _isFunction2(value) && (value = value(index, target, targets));
  if (typeof value !== "object") {
    return _isString2(value) && value !== "max" && value.charAt(1) !== "=" ? {
      x: value,
      y: value
    } : {
      y: value
    };
  } else if (value.nodeType) {
    return {
      y: value,
      x: value
    };
  } else {
    var result = {}, p;
    for (p in value) {
      result[p] = p !== "onAutoKill" && _isFunction2(value[p]) ? value[p](index, target, targets) : value[p];
    }
    return result;
  }
}, _getOffset = function _getOffset2(element, container) {
  element = _toArray(element)[0];
  if (!element || !element.getBoundingClientRect) {
    return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
  }
  var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body, cRect = isRoot ? {
    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
  } : container.getBoundingClientRect(), offsets = {
    x: rect.left - cRect.left,
    y: rect.top - cRect.top
  };
  if (!isRoot && container) {
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }
  return offsets;
}, _parseVal = function _parseVal2(value, target, axis, currentVal, offset) {
  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString2(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
}, _initCore2 = function _initCore3() {
  gsap = _getGSAP3();
  if (_windowExists2() && gsap && document.body) {
    _window = window;
    _body = document.body;
    _docEl = document.documentElement;
    _toArray = gsap.utils.toArray;
    gsap.config({
      autoKillThreshold: 7
    });
    _config = gsap.config();
    _coreInitted = 1;
  }
};
var ScrollToPlugin = {
  version: "3.10.4",
  name: "scrollTo",
  rawVars: 1,
  register: function register(core) {
    gsap = core;
    _initCore2();
  },
  init: function init(target, value, tween, index, targets) {
    _coreInitted || _initCore2();
    var data = this, snapType = gsap.getProperty(target, "scrollSnapType");
    data.isWin = target === _window;
    data.target = target;
    data.tween = tween;
    value = _clean(value, index, target, targets);
    data.vars = value;
    data.autoKill = !!value.autoKill;
    data.getX = _buildGetter(target, "x");
    data.getY = _buildGetter(target, "y");
    data.x = data.xPrev = data.getX();
    data.y = data.yPrev = data.getY();
    if (snapType && snapType !== "none") {
      data.snap = 1;
      data.snapInline = target.style.scrollSnapType;
      target.style.scrollSnapType = "none";
    }
    if (value.x != null) {
      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
      data._props.push("scrollTo_x");
    } else {
      data.skipX = 1;
    }
    if (value.y != null) {
      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
      data._props.push("scrollTo_y");
    } else {
      data.skipY = 1;
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
    x = isWin || !data.skipX ? data.getX() : xPrev;
    y = isWin || !data.skipY ? data.getY() : yPrev;
    yDif = y - yPrev;
    xDif = x - xPrev;
    threshold = _config.autoKillThreshold;
    if (data.x < 0) {
      data.x = 0;
    }
    if (data.y < 0) {
      data.y = 0;
    }
    if (autoKill) {
      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
        data.skipX = 1;
      }
      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
        data.skipY = 1;
      }
      if (data.skipX && data.skipY) {
        tween.kill();
        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
      }
    }
    if (isWin) {
      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
    } else {
      data.skipY || (target.scrollTop = data.y);
      data.skipX || (target.scrollLeft = data.x);
    }
    if (snap && (ratio === 1 || ratio === 0)) {
      y = target.scrollTop;
      x = target.scrollLeft;
      snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
      target.scrollTop = y + 1;
      target.scrollLeft = x + 1;
      target.scrollTop = y;
      target.scrollLeft = x;
    }
    data.xPrev = data.x;
    data.yPrev = data.y;
  },
  kill: function kill(property) {
    var both = property === "scrollTo";
    if (both || property === "scrollTo_x") {
      this.skipX = 1;
    }
    if (both || property === "scrollTo_y") {
      this.skipY = 1;
    }
  }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
_getGSAP3() && gsap.registerPlugin(ScrollToPlugin);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-primary min-h-screen"}" id="${"smooth-wrapper"}"><div id="${"smooth-content"}"><div>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</div>
	
		<div class="${"relative z-10 "}">${validate_component(About, "About").$$render($$result, {}, {}, {})}
			${validate_component(Structure, "Structure").$$render($$result, {}, {}, {})}
	
			<div class="${"absolute -z-10 top-[32%] h-[38rem] w-full bg-gradient-to-b from-primary-content/10 to-transparent"}"></div></div>
		<div class="${"bg-secondary relative overflow-hidden"}">${validate_component(OurProduct, "OurProduct").$$render($$result, {}, {}, {})}</div>
		<div style="${"background: linear-gradient(101.14deg, #000000 0%, rgba(0, 0, 0, 0.83) 100%);"}">${validate_component(Werugo, "Werugo").$$render($$result, {}, {}, {})}</div>
	
		<div class="${"bg-secondary sectiontime"}">${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
