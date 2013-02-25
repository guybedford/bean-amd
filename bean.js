/*
 * bean.js bridge library for amdquery
 * https://github.com/guybedford/bean-amd
 *
 * Bean:
 * https://github.com/fat/bean
 * 
 * Inspiration - https://github.com/fat/bean/blob/master/src/ender.js
 * 
 */

define(['amdquery', 'bean-lib'], function($, bean) {

  var methodObj = {};

  // apply the given bean function over each item in the element
  // array given by the first argument to amdquery
  // effectively bean.on([elArray], ...) to bean.on(elNode, ...);
  var beanApply = function(name, evt) {
    var fn = bean[name];
    return function() {
      if (evt)
        Array.prototype.splice.call(arguments, 0, 0, evt);

      for (var i = 0, len = this.length; i < len; i++) {
        Array.prototype.unshift.call(arguments, this[i]);
        fn.apply(this, arguments);
      }
      // allow chaining
      return bean;
    }
  }

  // core methods
  var methods = ['on', 'one', 'off', 'clone', 'fire'];
  for (var i = 0; i < methods.length; i++)
    methodObj.prototype[methods[i]] = beanApply(methods[i]);

  // events to create shortcuts for
  var events = ['blur', 'change', 'click', 'dblclick', 'error', 'focus', 'focusin', 'focusout', 'keydown', 'keypress', 'keyup', 'load', 'mousedown', 'mouseenter', 'mouseleave', 'mouseout', 'mouseover', 'mouseup', 'mousemove', 'resize', 'scroll', 'select', 'submit', 'unload'];
  for (var i = 0; i < events.length; i++)
    methodObj.prototype[events[i]] = beanApply('on', events[i]);

  bean.setSelectorEngine($);

  return methodObj;
});