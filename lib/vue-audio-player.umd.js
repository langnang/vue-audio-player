(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-audio-player"] = factory(require("vue"));
	else
		root["vue-audio-player"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c876":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_0_4_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fa0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_0_4_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_0_4_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fa0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/audio-player/index.vue?vue&type=template&id=3578bac2&bindings={"src":"props","loop":"props","srcList":"props","srcKey":"props","showPrev":"props","showNext":"props","showMode":"props","isPlaying":"data","currentIndex":"data","volume":"data","currentTime":"data","duration":"data","playMode":"data","percentage":"options","isList":"options","isShowPrev":"options","isShowNext":"options","isSingleLoop":"options","source":"options","onChangeVolume":"options","onChangeProgress":"options","onCickPLayMode":"options","mm_ss":"options","onPlayPrev":"options","onPlayNext":"options","onPlay":"options","onPlaying":"options","onPause":"options","onProgress":"options","onCanPlayThrough":"options","onEnded":"options"}

var _hoisted_1 = {
  class: "audio-player"
};
var _hoisted_2 = {
  class: "audio-controls"
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  t: "1604247544322",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "927",
  width: "200",
  height: "200"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.368z",
  "p-id": "928"
})], -1);

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  t: "1604403365290",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3249",
  width: "200",
  height: "200"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M512 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0.1-239.2-193.9-433.2-433.2-433.2z m183.3 447.9L455.1 720c-12.3 9.9-30.5 1.1-30.5-14.6V318.7c0-15.7 18.2-24.5 30.5-14.6l240.2 193.4c9.4 7.5 9.4 21.7 0 29.2z",
  "p-id": "3250"
})], -1);

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  t: "1604247561230",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1072",
  width: "200",
  height: "200"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M680 160h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H680c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z m-464 0h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H216c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z",
  "p-id": "1073"
})], -1);

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  t: "1604247579325",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1217",
  width: "200",
  height: "200"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M817 160h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56zM648.314 546.191l-422.304 303.4c-32.294 23.201-77.282 15.83-100.484-16.464A72 72 0 0 1 112 791.117V232.064c0-39.764 32.235-72 72-72a72 72 0 0 1 39.95 12.1l422.762 281.959c25.73 17.16 32.677 51.93 15.517 77.66a56 56 0 0 1-13.915 14.368z",
  "p-id": "1218"
})], -1);

var _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M773.597867 203.776l-0.273067 0.443733a33.621333 33.621333 0 0 0-20.343467-6.485333c-18.978133 0.785067-33.723733 16.725333-32.9728 35.771733a33.826133 33.826133 0 0 0 15.633067 26.794667l-0.1024 0.170667a375.227733 375.227733 0 0 1 166.2976 311.876266c0 207.018667-168.448 375.466667-375.466667 375.466667-27.818667 0-27.818667 0-54.340266-2.901333-90.453333-9.898667-152.610133-58.9824-155.5456-61.201067a375.330133 375.330133 0 0 1-165.5808-311.364267c0-201.4208 159.5392-365.841067 358.843733-374.647466l-41.984 40.823466 0.8192 0.853334a33.860267 33.860267 0 0 0-15.2576 29.218133c0.750933 18.978133 16.725333 33.757867 35.669333 33.041067a33.792 33.792 0 0 0 26.0096-14.472534l0.3072 0.341334 128.648534-124.996267L515.6864 34.0992l-0.4096 0.4096a33.6896 33.6896 0 0 0-26.3168-11.400533c-18.944 0.750933-33.6896 16.725333-32.9728 35.703466a33.8944 33.8944 0 0 0 13.038933 25.156267l45.226667 45.2608C275.182933 135.714133 82.602667 331.741867 82.602667 572.347733c0 147.626667 73.1136 285.149867 193.194666 366.114134 3.072 2.56 77.550933 62.190933 188.757334 74.308266 29.422933 3.208533 31.1296 3.310933 61.781333 3.310934 244.667733 0 443.733333-199.0656 443.733333-443.733334A443.392 443.392 0 0 0 773.597867 203.776",
  "p-id": "12645"
}, null, -1);

var _hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M542.071467 400.827733a33.28 33.28 0 0 0-17.134934 6.075734l-0.170666-0.3072-106.8032 69.700266 0.170666 0.273067a33.9968 33.9968 0 0 0-15.837866 29.696c0.750933 18.944 16.725333 33.723733 35.669333 32.9728a33.109333 33.109333 0 0 0 17.1008-6.0416l0.2048 0.273067 53.998933-35.259734v249.856h0.034134c0 0.477867-0.238933 0.887467-0.2048 1.365334a34.2016 34.2016 0 1 0 68.4032-1.365334h0.034133v-0.170666c0-0.4096 0.2048-0.750933 0.2048-1.160534 0-0.273067-0.170667-0.477867-0.2048-0.785066V435.2c0-0.477867 0.2048-0.887467 0.2048-1.3312a34.4064 34.4064 0 0 0-35.669333-33.041067",
  "p-id": "12646"
}, null, -1);

var _hoisted_9 = {
  key: 1,
  t: "1604306527698",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "13436",
  width: "200",
  height: "200",
  title: "列表播放"
};

var _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M832 832a32 32 0 0 1 3.744 63.776L832 896H192a32 32 0 0 1-3.744-63.776L192 832h640z m0-304a32 32 0 0 1 3.744 63.776L832 592H192a32 32 0 0 1-3.744-63.776L192 528h640zM224.256 128.544a64 64 0 0 1 26.816 5.888L256 136.96l127.488 72.832a64 64 0 0 1 4.832 108.096l-4.8 3.04L256 393.824a64 64 0 0 1-95.52-50.016l-0.224-5.568V192.544a64 64 0 0 1 64-64z m0 64v145.696l127.488-72.864-127.488-72.832zM832 224a32 32 0 0 1 3.744 63.776L832 288H496a32 32 0 0 1-3.744-63.776L496 224H832z",
  "p-id": "13437"
}, null, -1);

var _hoisted_11 = {
  key: 2,
  t: "1604306395716",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7277",
  width: "200",
  height: "200",
  title: "列表循环"
};

var _hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M64.532459 511.40739a63.893258 63.893258 0 0 0 63.893259-63.893258V383.620873a63.893258 63.893258 0 0 1 63.893258-63.893258h612.736347l-83.061236 82.422303a63.893258 63.893258 0 0 0 0 90.728427 63.893258 63.893258 0 0 0 90.728427 0l191.679775-191.679775a63.893258 63.893258 0 0 0 0-90.728427l-191.679775-191.679775a63.893258 63.893258 0 0 0-90.728427 90.728427L805.055323 191.941098H192.318976a191.679775 191.679775 0 0 0-191.679775 191.679775v63.893259a63.893258 63.893258 0 0 0 63.893258 63.893258z",
  fill: "#383B48",
  "p-id": "7278"
}, null, -1);

var _hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M959.038076 511.40739a63.893258 63.893258 0 0 0-63.893258 63.893258v63.893259a63.893258 63.893258 0 0 1-63.893259 63.893258H218.515212l83.061236-81.783371a63.893258 63.893258 0 0 0 0-90.089494 63.893258 63.893258 0 0 0-90.728427 0l-191.679775 191.679775a63.893258 63.893258 0 0 0 0 90.728427l191.679775 191.679775a63.893258 63.893258 0 0 0 90.728427-91.36736L218.515212 830.873682H831.251559a191.679775 191.679775 0 0 0 191.679775-191.679775V575.300648a63.893258 63.893258 0 0 0-63.893258-63.893258z",
  fill: "#383B48",
  "p-id": "7279"
}, null, -1);

var _hoisted_14 = {
  key: 3,
  t: "1604300800668",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "5233",
  width: "200",
  height: "200",
  title: "随机播放"
};

var _hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M912 311.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2-2.8-2.8-4.2-6.2-4.2-10v-85.7H626.3c-14.3 0-27.2 2.3-38.9 6.7-11.6 4.5-21.9 11.2-30.8 20.1-8.9 8.9-16.5 18.1-22.7 27.4-6.3 9.4-13 20.9-20.1 34.6-9.5 18.5-21.1 43.9-34.8 76.3-8.6 19.6-16 36.2-22.1 49.6-6.1 13.4-14.2 29-24.1 46.9s-19.5 32.8-28.5 44.6c-9.1 11.9-20.1 24.2-33.1 37.1-13 12.8-26.4 23-40.2 30.6-13.8 7.6-29.7 13.8-47.5 18.8-17.8 4.9-36.9 7.3-57.2 7.3h-100c-4.1 0-7.6-1.3-10.2-4-2.7-2.6-4-6-4-10.1v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c14.3 0 27.2-2.3 38.9-6.7 11.6-4.5 21.9-11.2 30.8-20.1 8.9-8.9 16.5-18.1 22.7-27.4 6.3-9.4 13-20.9 20.1-34.6 9.5-18.4 21.1-43.9 34.8-76.3 8.6-19.6 16-36.2 22.1-49.6 6.1-13.4 14.2-29 24.1-46.9 10-17.8 19.5-32.8 28.5-44.6 9.1-11.9 20.1-24.2 33.1-37.1 13-12.8 26.4-23 40.2-30.6 13.8-7.6 29.7-13.8 47.5-18.8 17.8-4.9 36.9-7.3 57.2-7.3h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 301.9c2.7 2.4 4 5.9 4 10z m-502.7 43.3c-17.8 27.4-38.2 68-61.1 121.9-6.6-13.4-12-24.1-16.5-32.4-4.5-8.2-10.5-17.7-18.1-28.4-7.6-10.7-15.2-19.2-22.7-25.3-7.6-6.1-17-11.3-28.2-15.6-11.2-4.3-23.3-6.5-36.4-6.5h-99.9c-4.1 0-7.6-1.3-10.2-4-2.7-2.7-4-6.1-4-10.2V269c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c74.2-0.1 135.3 33.4 182.9 100.4zM912 711.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2s-4.2-6.2-4.2-10v-85.7c-9.5 0-22.2 0.1-37.9 0.2-15.8 0.2-27.8 0.3-36.2 0.5-8.4 0.2-19.2 0-32.6-0.5s-23.9-1.2-31.7-2.3c-7.7-1-17.3-2.6-28.5-4.7-11.3-2.1-20.7-4.8-28.2-8.3-7.4-3.4-16.1-7.7-25.9-12.8-9.9-5.1-18.6-11-26.4-17.8-7.7-6.9-16-14.8-24.6-23.8-8.6-9.1-17-19.4-25-31 17.6-27.7 37.8-68.3 60.8-121.9 6.6 13.4 12 24.2 16.5 32.4s10.5 17.7 18.1 28.4c7.6 10.7 15.2 19.2 22.7 25.3 7.6 6.1 17 11.4 28.2 15.6 11.2 4.3 23.3 6.5 36.4 6.5h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 702c2.7 2.3 4 5.8 4 9.9z",
  "p-id": "5234"
}, null, -1);

var _hoisted_16 = {
  class: "audio-controls__time"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AudioProgress = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("AudioProgress");

  var _component_AudioVolume = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("AudioVolume");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [$options.isShowPrev ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "audio-controls__previous",
    title: "上一首",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.onPlayPrev.apply($options, arguments);
    })
  }, [_hoisted_3])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$data.isPlaying ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 1,
    class: "audio-controls__start",
    title: "播放",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.onPlay($data.currentIndex);
    })
  }, [_hoisted_4])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.isPlaying ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 2,
    class: "audio-controls__pause",
    title: "暂停",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.onPause.apply($options, arguments);
    })
  }, [_hoisted_5])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.isShowNext ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 3,
    class: "audio-controls__next",
    title: "下一首",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.onPlayNext.apply($options, arguments);
    })
  }, [_hoisted_6])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.showMode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 4,
    class: "audio-controls__mode",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.onCickPLayMode.apply($options, arguments);
    })
  }, [$data.playMode == 'single' || $data.playMode == 'single-loop' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    key: 0,
    class: [{
      inactive: $data.playMode == 'single'
    }, "icon"],
    t: "1604496141856",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "12644",
    width: "200",
    height: "200",
    title: "单曲循环"
  }, [_hoisted_7, _hoisted_8], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.playMode == 'list' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", _hoisted_9, [_hoisted_10])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.playMode == 'list-loop' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", _hoisted_11, [_hoisted_12, _hoisted_13])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.playMode == 'random' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", _hoisted_14, [_hoisted_15])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.mm_ss($data.currentTime)) + " / " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.mm_ss($data.duration)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_AudioProgress, {
    style: {
      width: "calc(100% - ".concat(320 + ($options.isShowPrev ? 36 : 0) + ($options.isShowNext ? 36 : 0) + ($props.showMode ? 36 : 0), "px)")
    },
    percent: $options.percentage,
    onChange: $options.onChangeProgress
  }, null, 8, ["style", "percent", "onChange"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_AudioVolume, {
    ref: "volume",
    title: "音量",
    volume: $data.volume,
    onChange: $options.onChangeVolume
  }, null, 8, ["volume", "onChange"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("audio", {
    ref: "audio",
    class: "audio-player__audio",
    src: $options.source,
    onProgress: _cache[6] || (_cache[6] = function () {
      return $options.onProgress.apply($options, arguments);
    }),
    onCanplaythrough: _cache[7] || (_cache[7] = function () {
      return $options.onCanPlayThrough.apply($options, arguments);
    }),
    onEnded: _cache[8] || (_cache[8] = function () {
      return $options.onEnded.apply($options, arguments);
    }),
    onTimeupdate: _cache[9] || (_cache[9] = function () {
      return $options.onPlaying.apply($options, arguments);
    })
  }, " 您的浏览器不支持 audio 标签。 ", 40, ["src"])]);
}
// CONCATENATED MODULE: ./src/audio-player/index.vue?vue&type=template&id=3578bac2&bindings={"src":"props","loop":"props","srcList":"props","srcKey":"props","showPrev":"props","showNext":"props","showMode":"props","isPlaying":"data","currentIndex":"data","volume":"data","currentTime":"data","duration":"data","playMode":"data","percentage":"options","isList":"options","isShowPrev":"options","isShowNext":"options","isSingleLoop":"options","source":"options","onChangeVolume":"options","onChangeProgress":"options","onCickPLayMode":"options","mm_ss":"options","onPlayPrev":"options","onPlayNext":"options","onPlay":"options","onPlaying":"options","onPause":"options","onProgress":"options","onCanPlayThrough":"options","onEnded":"options"}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/audio-player/progress/index.vue?vue&type=template&id=1bebd28d&bindings={"percent":"props","selfPercent":"data","onClick":"options"}

var progressvue_type_template_id_1bebd28d_bindings_percent_props_selfPercent_data_onClick_options_hoisted_1 = {
  key: 0,
  class: "audio-loading"
};

var progressvue_type_template_id_1bebd28d_bindings_percent_props_selfPercent_data_onClick_options_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  t: "1604295649488",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "5200",
  width: "200",
  height: "200"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M782.065385 901.683615c10.892554 18.38743 4.796721 42.970626-14.290231 53.363521-18.687226 10.892554-42.470967 4.496926-53.063726-14.290232-11.392212-18.38743-4.796721-42.470967 13.690641-53.363521 19.386747-10.792622 42.770762-4.197131 53.663316 14.290232z m-230.342539 83.243095c0 21.285449-17.587977 39.07329-39.67288 39.07329-21.285449 0-39.07329-17.388114-39.07329-39.07329v-27.381282c0-21.785108 17.887772-39.173221 39.07329-39.173222 21.785108 0 39.67288 17.388114 39.67288 39.173222v27.381282z m-241.135162-44.169806c-11.092417 19.286816-35.175954 25.382649-53.663316 14.490095-18.987021-10.692691-25.682444-34.576364-14.490095-53.663316l29.080121-50.865229c11.192349-18.687226 35.175954-25.182785 54.162975-14.490094 18.38743 10.892554 25.182785 35.175954 13.990436 53.663316l-29.080121 50.865228zM123.415634 782.764907c-18.987021 10.592759-43.270421 4.197131-53.663316-14.490095-11.092417-18.38743-4.796721-42.770762 13.990436-53.663316l78.146579-45.269054c18.687226-10.392895 42.970626-4.496926 53.663317 14.490094 10.592759 18.38743 4.097199 42.770762-14.490095 53.663316l-77.646921 45.269055zM40.27247 551.822777c-21.785108 0-39.07329-17.587977-39.07329-39.073289 0-21.785108 17.288182-39.373085 39.07329-39.373085h121.716795c21.785108 0 39.07329 17.587977 39.07329 39.07329 0 21.785108-17.288182 39.373085-39.07329 39.373084H40.27247z m43.570216-241.534888c-18.987021-10.592759-25.182785-34.576364-13.990437-53.363521 10.392895-18.987021 34.576364-25.382649 53.663317-14.490095L255.82512 319.281741c18.687226 10.692691 24.88299 34.576364 14.490094 53.063726-11.092417 18.987021-35.175954 25.082854-53.563384 14.490095l-132.909144-76.547673z m158.591587-187.072119l92.137016 159.990632c11.192349 18.687226 35.175954 25.382649 53.86318 14.290231 18.687226-10.592759 24.88299-34.876159 13.990436-53.663316L309.888162 84.142481C299.295404 65.655119 275.311799 58.959696 256.824436 69.852249c-18.987021 10.892554-25.082854 34.976091-14.390163 53.363521z m230.642335-82.643505c0-21.285449 17.887772-39.373085 39.07329-39.373085 21.785108 0 39.67288 17.687909 39.672879 39.373085V224.846296c0 21.785108-17.587977 39.373085-39.672879 39.67288-21.285449 0-39.07329-17.288182-39.07329-39.67288V40.572265z m241.135161 43.570216c11.192349-18.987021 34.876159-25.182785 53.663316-14.490095 18.987021 10.592759 25.682444 34.576364 14.490095 53.663316l-92.336879 159.990632c-10.392895 18.687226-34.976091 25.282717-53.663316 14.490094-18.687226-10.892554-24.88299-35.175954-14.290231-53.963111l92.137015-159.690836z m187.671709 158.291792L741.692983 334.771153c-18.687226 10.592759-25.182785 34.576364-14.490094 53.663316 11.092417 18.38743 35.175954 24.583195 53.663316 14.290231l160.290426-92.336879c18.38743-10.592759 25.182785-34.576364 13.990436-53.363521-10.792622-18.987021-34.876159-25.782375-53.263589-14.590027z m82.34371 230.94213c21.984971 0 39.373085 17.587977 39.07329 39.373085 0 21.485313-16.988387 39.07329-39.07329 39.073289H799.753294c-21.285449 0-39.173221-17.587977-39.173222-39.373084 0-21.485313 17.887772-39.07329 39.173222-39.07329h184.473894z",
  fill: "#999999",
  "p-id": "5201"
})], -1);

var progressvue_type_template_id_1bebd28d_bindings_percent_props_selfPercent_data_onClick_options_hoisted_3 = {
  ref: "progress",
  class: "audio-controls__progress-outer"
};
function progressvue_type_template_id_1bebd28d_bindings_percent_props_selfPercent_data_onClick_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: "audio-controls__progress",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.onClick.apply($options, arguments);
    })
  }, [false ? (undefined) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", progressvue_type_template_id_1bebd28d_bindings_percent_props_selfPercent_data_onClick_options_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "audio-controls__progress-inner",
    style: {
      width: $props.percent + '%'
    }
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "audio-controls__progress-point",
    style: {
      left: $props.percent + '%'
    }
  }, null, 4)], 512)]);
}
// CONCATENATED MODULE: ./src/audio-player/progress/index.vue?vue&type=template&id=1bebd28d&bindings={"percent":"props","selfPercent":"data","onClick":"options"}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/audio-player/progress/index.vue?vue&type=script&lang=js

/* harmony default export */ var progressvue_type_script_lang_js = ({
  name: "AudioProgress",
  props: {
    percent: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      selfPercent: this.percent ? this.percent : 0
    };
  },
  methods: {
    onClick: function onClick(e) {
      this.selfPercent = e.offsetX / this.$refs.progress.offsetWidth * 100;
      this.$emit("change", this.selfPercent);
    }
  }
});
// CONCATENATED MODULE: ./src/audio-player/progress/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/audio-player/progress/index.vue



progressvue_type_script_lang_js.render = progressvue_type_template_id_1bebd28d_bindings_percent_props_selfPercent_data_onClick_options_render

/* harmony default export */ var progress = (progressvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/audio-player/volume/index.vue?vue&type=template&id=fef762e0&bindings={"volume":"props","muted":"props","selfMuted":"data","selfVolume":"data","mute":"options","onClick":"options"}

var volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_1 = {
  class: "audio-controls__volume"
};

var volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M596 139c16.71 16.242 26 38.634 26 62v624c0 48.608-39.423 88-88 88-23.423 0-45.833-9.282-62-26L312.059 727.059A48 48 0 0 0 278.118 713H216c-70.657 0.295-128-57.003-128-128V441c0-70.338 57.343-127.636 128-128h61.198a48 48 0 0 0 33.844-13.962L472 139c34.021-34.576 89.774-34.604 124 0z m219.153 132.989C883.63 332.312 924 422.217 924 518.999c0 96.784-40.37 186.689-108.847 247.012-13.262 11.683-33.482 10.403-45.165-2.859-11.682-13.261-10.402-33.482 2.86-45.164C827.493 669.849 860 597.455 860 519s-32.507-150.85-87.152-198.988c-13.262-11.682-14.542-31.903-2.86-45.164 11.683-13.262 31.903-14.542 45.165-2.86z m-95.508 93.39C760.867 403.048 785 458.494 785 517.973c0 59.513-24.161 114.988-65.425 152.659-13.052 11.915-33.292 10.994-45.208-2.058-11.796-12.922-11.011-32.888 1.67-44.848l0.388-0.36 0.834-0.768C704.657 597.13 721 559.193 721 517.974c0-41.613-16.656-79.88-44.53-105.352-13.045-11.922-13.956-32.163-2.034-45.209 11.922-13.046 32.163-13.957 45.209-2.035z",
  fill: "#333333",
  "p-id": "1683"
}, null, -1);

var volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M596.194 138.74A87.977 87.977 0 0 1 622 200.984v624.03C622 873.608 582.6 913 534 913a88.008 88.008 0 0 1-62.257-25.801l-160.029-160.16a48 48 0 0 0-33.955-14.073l-61.759 0.001c-70.692 0-128-57.297-128-127.978V441.015c0-70.68 57.308-127.978 128-127.978h61.755a48 48 0 0 0 33.955-14.073L471.743 138.8c34.35-34.377 90.068-34.405 124.451-0.062z m342.693 241.925c12.517 12.517 12.517 32.811 0 45.329l-88.283 88.281 88.283 88.283c12.517 12.517 12.517 32.811 0 45.329-12.518 12.517-32.812 12.517-45.33 0l-88.282-88.283-88.281 88.283c-12.518 12.517-32.812 12.517-45.33 0-12.517-12.518-12.517-32.812 0-45.33l88.282-88.282-88.281-88.281c-12.518-12.518-12.518-32.812 0-45.33 12.517-12.517 32.811-12.517 45.329 0l88.281 88.282 88.283-88.281c12.517-12.518 32.811-12.518 45.329 0z",
  fill: "#333333",
  "p-id": "1815"
}, null, -1);

var volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_4 = {
  class: "audio-controls__volume-outer"
};
function volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_1, [!$data.selfMuted ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    key: 0,
    t: "1604492613740",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "1682",
    width: "200",
    height: "200",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.mute.apply($options, arguments);
    })
  }, [volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_2])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.selfMuted ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    key: 1,
    t: "1604492655584",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "1814",
    width: "200",
    height: "200",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.mute.apply($options, arguments);
    })
  }, [volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_3])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    ref: "volume",
    class: "audio-controls__volume-wrapper",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.onClick.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "audio-controls__volume-inner",
    style: {
      width: $data.selfMuted ? 0 : $data.selfVolume + '%'
    }
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "audio-controls__volume-point",
    style: {
      left: $data.selfMuted ? 0 : $data.selfVolume + '%'
    },
    title: $data.selfMuted ? 0 : $data.selfVolume
  }, null, 12, ["title"])])], 512)]);
}
// CONCATENATED MODULE: ./src/audio-player/volume/index.vue?vue&type=template&id=fef762e0&bindings={"volume":"props","muted":"props","selfMuted":"data","selfVolume":"data","mute":"options","onClick":"options"}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/audio-player/volume/index.vue?vue&type=script&lang=js

/* harmony default export */ var volumevue_type_script_lang_js = ({
  name: "AudioVolume",
  props: {
    volume: {
      type: Number,
      default: null
    },
    muted: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      selfMuted: this.muted ? this.muted : false,
      selfVolume: this.volume ? this.volume : 50
    };
  },
  methods: {
    mute: function mute() {
      this.selfMuted = !this.selfMuted;

      if (this.selfMuted) {
        this.$emit("change", 0);
      } else {
        this.$emit("change", this.selfVolume);
      }
    },
    onClick: function onClick(e) {
      this.selfVolume = e.offsetX / this.$refs.volume.offsetWidth * 100;
    }
  }
});
// CONCATENATED MODULE: ./src/audio-player/volume/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/audio-player/volume/index.vue



volumevue_type_script_lang_js.render = volumevue_type_template_id_fef762e0_bindings_volume_props_muted_props_selfMuted_data_selfVolume_data_mute_options_onClick_options_render

/* harmony default export */ var volume = (volumevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/audio-player/index.vue?vue&type=script&lang=js



/* harmony default export */ var audio_playervue_type_script_lang_js = ({
  name: "AudioPlayer",
  components: {
    AudioProgress: progress,
    AudioVolume: volume
  },
  props: {
    // 音频播放源
    src: {
      type: String,
      default: null
    },
    // 是否单曲循环播放
    loop: {
      type: Boolean,
      default: false
    },
    // 播放列表
    srcList: {
      type: Array,
      default: null
    },
    // 播放列表关键字
    srcKey: {
      type: String,
      default: null
    },
    // 是否显示上一首按钮
    showPrev: {
      type: Boolean,
      default: false
    },
    // 是否显示下一首按钮
    showNext: {
      type: Boolean,
      default: false
    },
    // 是否显示播放模式按钮
    showMode: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isPlaying: false,
      // 音频是否正在播放
      currentIndex: 0,
      // 当前播放的音频位置索引
      volume: 50,
      // 音频音量
      currentTime: 0,
      // 音频当前播放位置
      duration: 0,
      // 音频长度
      playMode: "single" // 播放模式：单曲播放，单曲循环，顺序播放，循环播放，随机播放

    };
  },
  computed: {
    percentage: function percentage() {
      return this.currentTime / this.duration * 100;
    },
    // 是否是多曲音频源
    isList: function isList() {
      return this.srcList ? true : false;
    },
    // 是否显示上一首按钮
    isShowPrev: function isShowPrev() {
      return this.showPrev || this.isList;
    },
    // 是否显示下一首按钮
    isShowNext: function isShowNext() {
      return this.showNext || this.isList;
    },
    // 是否是单曲循环
    isSingleLoop: function isSingleLoop() {
      return this.loop ? this.playMode == "single-loop" : this.playMode == "single";
    },
    // 音频源
    source: function source() {
      if (this.isList) {
        return this.srcKey ? this.srcList[this.currentIndex][this.srcKey] : this.srcList[this.currentIndex];
      }

      return this.src;
    }
  },
  methods: {
    // 调整音量
    onChangeVolume: function onChangeVolume(value) {
      this.$refs.audio.volume = value / 100;
      this.$emit("volume-change", value);
    },
    //调整进度
    onChangeProgress: function onChangeProgress(value) {
      this.$refs.audio.currentTime = value / 100 * this.duration;
      this.$emit("progress-change", value);
    },
    // 点击播放模式
    onCickPLayMode: function onCickPLayMode() {
      if (this.playMode == "single") {
        this.playMode = "single-loop";
      } else if (this.playMode == "single-loop") {
        if (!this.isList) {
          this.playMode = "single";
        } else {
          this.playMode = "list";
        }
      } else if (this.playMode == "list") {
        this.playMode = "list-loop";
      } else if (this.playMode == "list-loop") {
        this.playMode = "random";
      } else if (this.playMode == "random") {
        this.playMode = "single";
      }

      this.$emit("mode-change", this.playMode);
    },
    // 秒转为分:秒
    mm_ss: function mm_ss(val) {
      return ("00" + parseInt(val / 60)).slice(-2) + ":" + ("00" + parseInt(val % 60)).slice(-2);
    },
    onPlayPrev: function onPlayPrev() {
      if (this.isList) {
        if (this.playMode == "random") {
          this.currentIndex = parseInt(this.srcList.length * Math.random());
        } else {
          if (this.currentIndex == 0) {
            this.currentIndex = this.srcList.length - 1;
          } else {
            this.currentIndex--;
          }
        }

        this.$emit("play-prev", this.currentIndex);
      } else {
        this.$emit("play-prev");
      }
    },
    onPlayNext: function onPlayNext() {
      if (this.isList) {
        if (this.playMode == "random") {
          this.currentIndex = parseInt(this.srcList.length * Math.random());
        } else {
          if (this.currentIndex == this.srcList.length - 1) {
            this.currentIndex = 0;
          } else {
            this.currentIndex++;
          }
        }

        this.$emit("play-next", this.currentIndex);
      } else {
        this.$emit("play-next");
      }
    },
    // 播放
    onPlay: function onPlay(index) {
      this.currentIndex = index;
      if (!this.source) return;
      this.$refs.audio.play();
      this.isPlaying = true;
      this.$emit("play", this.currentIndex);
    },
    // 播放中
    onPlaying: function onPlaying() {
      this.currentTime = this.$refs.audio.currentTime;
      this.$emit("playing", this.currentTime);
    },
    // 暂停
    onPause: function onPause() {
      this.$refs.audio.pause();
      this.isPlaying = false;
      this.$emit("pause");
    },
    // 客户端正在请求数据，缓冲中
    onProgress: function onProgress() {
      this.duration = this.$refs.audio.duration;
    },
    // 歌曲已经载入完全
    onCanPlayThrough: function onCanPlayThrough() {
      if (this.isPlaying) {
        this.$refs.audio.play();
      }
    },
    // 音频的播放是否已结束
    onEnded: function onEnded() {
      // 单曲播放
      if (this.playMode == "single") {
        this.isPlaying = false;
        this.$emit("ended");
        return;
      } // 单曲循环


      if (this.playMode == "single-loop") {
        this.$refs.audio.play();
        return;
      } // 顺序播放


      if (this.playMode == "list") {
        if (this.currentIndex != this.srcList.length - 1) {
          this.onPlayNext();
        } else {
          this.isPlaying = false;
          this.$emit("ended");
        }

        return;
      } // 循环播放


      if (this.playMode == "list-loop") {
        this.onPlayNext();
        return;
      } // 随机播放


      if (this.playMode == "random") {
        this.onPlayNext();
        return;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/audio-player/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/audio-player/index.vue?vue&type=style&index=0&lang=scss
var audio_playervue_type_style_index_0_lang_scss = __webpack_require__("c876");

// CONCATENATED MODULE: ./src/audio-player/index.vue





audio_playervue_type_script_lang_js.render = render

/* harmony default export */ var audio_player = (audio_playervue_type_script_lang_js);
// CONCATENATED MODULE: ./src/audio-player/index.js

 // 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('audio-player', audio_player);
} //这样就可以使用Vue.use进行全局安装了。


audio_player.install = function (Vue) {
  Vue.component(audio_player.name, audio_player);
};

/* harmony default export */ var src_audio_player = (audio_player);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_audio_player);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=vue-audio-player.umd.js.map