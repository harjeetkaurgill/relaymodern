module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/application.js":
/*!*******************************!*\
  !*** ./config/application.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

/**
 * Basic settings for running the app are in here.
 * Do not put anything sensitive (API Keys, Passwords, etc)
 * in this file.
 */

var SERVER_PORT = '3000';
var GAPI_PATH = 'http://devgapi.enetdefender.com/graphql';

module.exports = {
  SERVER_PORT: SERVER_PORT,
  GAPI_PATH: GAPI_PATH
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SERVER_PORT, 'SERVER_PORT', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/application.js');
  reactHotLoader.register(GAPI_PATH, 'GAPI_PATH', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/application.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./config/development.js":
/*!*******************************!*\
  !*** ./config/development.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

/**
 * Rename this file to `development.js`
 * Then place custom settings for local dev in here
 */

var application = __webpack_require__(/*! ./application */ "./config/application.js");

var APP_SECRET = '8FkWJamYmNgHLYDfEs,VjxUp';
var FACEBOOK_APP_ID = 'n/a';
var FACEBOOK_APP_SECRET = 'n/a';
var PAYPAL_ACCESS_TOKEN = 'n/a';
var CLOUDFRONT_IMG_ENDPOINT = 'n/a';
var AWS_BUCKET = 'n/a';
var AWS_IMG_ENDPOINT = 'n/a';
var AWS_IMG_BUCKET = 'n/a';
var AWS_IMG_LAMDA = 'n/a';
var AWS_IMG_LAMDA_FN = 'n/a';
var AWS_REGION = 'n/a';
var AWS_CLOUDFRONT_ID = 'n/a';
var AWS_ACCESS_KEY_ID = 'n/a';
var AWS_SECRET_ACCESS_KEY = 'n/a';
var SENDGRID_API_KEY = 'n/a';

module.exports = Object.assign({}, application, {
  APP_SECRET: APP_SECRET,
  FACEBOOK_APP_ID: FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: FACEBOOK_APP_SECRET,
  PAYPAL_ACCESS_TOKEN: PAYPAL_ACCESS_TOKEN,
  CLOUDFRONT_IMG_ENDPOINT: CLOUDFRONT_IMG_ENDPOINT,
  AWS_BUCKET: AWS_BUCKET,
  AWS_IMG_ENDPOINT: AWS_IMG_ENDPOINT,
  AWS_IMG_BUCKET: AWS_IMG_BUCKET,
  AWS_IMG_LAMDA: AWS_IMG_LAMDA,
  AWS_IMG_LAMDA_FN: AWS_IMG_LAMDA_FN,
  AWS_REGION: AWS_REGION,
  AWS_CLOUDFRONT_ID: AWS_CLOUDFRONT_ID,
  AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY,
  SENDGRID_API_KEY: SENDGRID_API_KEY
});
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(APP_SECRET, 'APP_SECRET', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(FACEBOOK_APP_ID, 'FACEBOOK_APP_ID', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(FACEBOOK_APP_SECRET, 'FACEBOOK_APP_SECRET', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(PAYPAL_ACCESS_TOKEN, 'PAYPAL_ACCESS_TOKEN', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(CLOUDFRONT_IMG_ENDPOINT, 'CLOUDFRONT_IMG_ENDPOINT', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_BUCKET, 'AWS_BUCKET', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_IMG_ENDPOINT, 'AWS_IMG_ENDPOINT', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_IMG_BUCKET, 'AWS_IMG_BUCKET', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_IMG_LAMDA, 'AWS_IMG_LAMDA', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_IMG_LAMDA_FN, 'AWS_IMG_LAMDA_FN', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_REGION, 'AWS_REGION', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_CLOUDFRONT_ID, 'AWS_CLOUDFRONT_ID', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_ACCESS_KEY_ID, 'AWS_ACCESS_KEY_ID', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(AWS_SECRET_ACCESS_KEY, 'AWS_SECRET_ACCESS_KEY', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  reactHotLoader.register(SENDGRID_API_KEY, 'SENDGRID_API_KEY', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/config/development.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/entries.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/entries.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/entries */ "./node_modules/core-js/library/fn/object/entries.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/values.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/values.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/set-immediate.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/set-immediate.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/set-immediate */ "./node_modules/core-js/library/fn/set-immediate.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncGenerator.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncGenerator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new _promise2.default(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          _promise2.default.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof _symbol2.default === "function" && _symbol2.default.asyncIterator) {
    AsyncGenerator.prototype[_symbol2.default.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function wrap(fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function _await(value) {
      return new AwaitValue(value);
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncIterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncIterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (iterable) {
  if (typeof _symbol2.default === "function") {
    if (_symbol2.default.asyncIterator) {
      var method = iterable[_symbol2.default.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (_iterator2.default) {
      return (0, _getIterator3.default)(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/entries.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/library/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set-immediate.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/set-immediate.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/library/modules/web.immediate.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").setImmediate;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.entries.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.entries.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.immediate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.immediate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/dom-helpers/events/off.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/events/off.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var off = function off() {};
if (_inDOM2.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

exports.default = off;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/events/on.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-helpers/events/on.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on() {};
if (_inDOM2.default) {
  on = function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

exports.default = on;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/util/inDOM.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/ActionTypes.js":
/*!***********************************************!*\
  !*** ./node_modules/farce/lib/ActionTypes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  INIT: '@@farce/INIT',
  PUSH: '@@farce/PUSH',
  REPLACE: '@@farce/REPLACE',
  TRANSITION: '@@farce/TRANSITION',
  GO: '@@farce/GO',
  CREATE_HREF: '@@farce/CREATE_HREF',
  CREATE_LOCATION: '@@farce/CREATE_LOCATION',
  UPDATE_LOCATION: '@@farce/UPDATE_LOCATION',
  DISPOSE: '@@farce/DISPOSE'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/Actions.js":
/*!*******************************************!*\
  !*** ./node_modules/farce/lib/Actions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ActionTypes = __webpack_require__(/*! ./ActionTypes */ "./node_modules/farce/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  init: function init() {
    return {
      type: _ActionTypes2.default.INIT
    };
  },

  push: function push(location) {
    return {
      type: _ActionTypes2.default.PUSH,
      payload: location
    };
  },

  replace: function replace(location) {
    return {
      type: _ActionTypes2.default.REPLACE,
      payload: location
    };
  },

  go: function go(delta) {
    return {
      type: _ActionTypes2.default.GO,
      payload: delta
    };
  },

  dispose: function dispose() {
    return {
      type: _ActionTypes2.default.DISPOSE
    };
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/ServerProtocol.js":
/*!**************************************************!*\
  !*** ./node_modules/farce/lib/ServerProtocol.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createPath = __webpack_require__(/*! ./utils/createPath */ "./node_modules/farce/lib/utils/createPath.js");

var _createPath2 = _interopRequireDefault(_createPath);

var _ensureLocation = __webpack_require__(/*! ./utils/ensureLocation */ "./node_modules/farce/lib/utils/ensureLocation.js");

var _ensureLocation2 = _interopRequireDefault(_ensureLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function noop() {}

var ServerProtocol = function () {
  function ServerProtocol(url) {
    _classCallCheck(this, ServerProtocol);

    this._location = (0, _ensureLocation2.default)(url);
  }

  ServerProtocol.prototype.init = function init() {
    return _extends({
      action: 'POP'
    }, this._location);
  };

  ServerProtocol.prototype.subscribe = function subscribe() {
    // Server protocol emits no events.
    return noop;
  };

  ServerProtocol.prototype.createHref = function createHref(location) {
    return (0, _createPath2.default)(location);
  };

  // The other methods are not implemented, because ServerProtocol instances
  // cannot navigate.


  return ServerProtocol;
}();

exports.default = ServerProtocol;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/createHistoryEnhancer.js":
/*!*********************************************************!*\
  !*** ./node_modules/farce/lib/createHistoryEnhancer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createHistoryEnhancer;

var _redux = __webpack_require__(/*! redux */ "redux");

var _ActionTypes = __webpack_require__(/*! ./ActionTypes */ "./node_modules/farce/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _createHistoryMiddleware = __webpack_require__(/*! ./createHistoryMiddleware */ "./node_modules/farce/lib/createHistoryMiddleware.js");

var _createHistoryMiddleware2 = _interopRequireDefault(_createHistoryMiddleware);

var _createTransitionHookMiddleware = __webpack_require__(/*! ./createTransitionHookMiddleware */ "./node_modules/farce/lib/createTransitionHookMiddleware.js");

var _createTransitionHookMiddleware2 = _interopRequireDefault(_createTransitionHookMiddleware);

var _ensureLocationMiddleware = __webpack_require__(/*! ./ensureLocationMiddleware */ "./node_modules/farce/lib/ensureLocationMiddleware.js");

var _ensureLocationMiddleware2 = _interopRequireDefault(_ensureLocationMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createHref(location) {
  return {
    type: _ActionTypes2.default.CREATE_HREF,
    payload: location
  };
}

function createLocation(location) {
  return {
    type: _ActionTypes2.default.CREATE_LOCATION,
    payload: location
  };
}

function createHistoryEnhancer(_ref) {
  var protocol = _ref.protocol,
      _ref$middlewares = _ref.middlewares,
      middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares,
      useBeforeUnload = _ref.useBeforeUnload;

  return function historyEnhancer(createStore) {
    return function () {
      var transitionHookMiddleware = (0, _createTransitionHookMiddleware2.default)({
        useBeforeUnload: useBeforeUnload
      });

      var middlewareEnhancer = _redux.applyMiddleware.apply(undefined, [_ensureLocationMiddleware2.default, transitionHookMiddleware].concat(middlewares, [(0, _createHistoryMiddleware2.default)(protocol)], [].concat(middlewares).reverse(), [transitionHookMiddleware]));

      var store = middlewareEnhancer(createStore).apply(undefined, arguments);
      var boundActionCreators = (0, _redux.bindActionCreators)({ createHref: createHref, createLocation: createLocation }, store.dispatch);

      return _extends({}, store, {
        farce: _extends({}, boundActionCreators, {
          addTransitionHook: transitionHookMiddleware.addHook
        })
      });
    };
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/createHistoryMiddleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/farce/lib/createHistoryMiddleware.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createHistoryMiddleware;

var _ActionTypes = __webpack_require__(/*! ./ActionTypes */ "./node_modules/farce/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateLocation(location) {
  return {
    type: _ActionTypes2.default.UPDATE_LOCATION,
    payload: location
  };
}

function createHistoryMiddleware(protocol) {
  return function historyMiddleware() {
    return function (next) {
      var dispose = protocol.subscribe(function (location) {
        next(updateLocation(location));
      });

      return function (action) {
        var type = action.type,
            payload = action.payload;


        switch (type) {
          case _ActionTypes2.default.INIT:
            return next(updateLocation(protocol.init()));
          case _ActionTypes2.default.TRANSITION:
            return next(updateLocation(protocol.transition(payload)));
          case _ActionTypes2.default.GO:
            protocol.go(payload);
            return null;
          case _ActionTypes2.default.CREATE_HREF:
            return protocol.createHref(payload);
          case _ActionTypes2.default.CREATE_LOCATION:
            return payload;
          case _ActionTypes2.default.DISPOSE:
            dispose();
            return null;
          default:
            return next(action);
        }
      };
    };
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/createLocationMiddleware.js":
/*!************************************************************!*\
  !*** ./node_modules/farce/lib/createLocationMiddleware.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createLocationMiddleware;

var _ActionTypes = __webpack_require__(/*! ./ActionTypes */ "./node_modules/farce/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createLocationMiddleware(_ref) {
  var makeLocationDescriptor = _ref.makeLocationDescriptor,
      makeLocation = _ref.makeLocation;

  return function locationMiddleware() {
    return function (next) {
      return function (action) {
        var type = action.type,
            payload = action.payload;


        switch (type) {
          case _ActionTypes2.default.TRANSITION:
          case _ActionTypes2.default.CREATE_HREF:
            return next({ type: type, payload: makeLocationDescriptor(payload) });
          case _ActionTypes2.default.CREATE_LOCATION:
            return makeLocation(next({ type: type, payload: makeLocationDescriptor(payload) }));
          case _ActionTypes2.default.UPDATE_LOCATION:
            return next({ type: type, payload: makeLocation(payload) });
          default:
            return next(action);
        }
      };
    };
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/createQueryMiddleware.js":
/*!*********************************************************!*\
  !*** ./node_modules/farce/lib/createQueryMiddleware.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createQueryMiddleware;

var _createLocationMiddleware = __webpack_require__(/*! ./createLocationMiddleware */ "./node_modules/farce/lib/createLocationMiddleware.js");

var _createLocationMiddleware2 = _interopRequireDefault(_createLocationMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createQueryMiddleware(_ref) {
  var parse = _ref.parse,
      stringify = _ref.stringify;

  return (0, _createLocationMiddleware2.default)({
    makeLocationDescriptor: function makeLocationDescriptor(location) {
      var query = location.query;

      if (query === undefined) {
        return location;
      }

      var queryString = stringify(query);
      var search = queryString ? '?' + queryString : '';

      return _extends({}, location, { search: search });
    },
    makeLocation: function makeLocation(location) {
      if (location.query !== undefined) {
        return location;
      }

      var query = void 0;
      try {
        query = parse(location.search.slice(1));
      } catch (e) {
        query = null;
      }

      return _extends({}, location, { query: query });
    }
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/createTransitionHookMiddleware.js":
/*!******************************************************************!*\
  !*** ./node_modules/farce/lib/createTransitionHookMiddleware.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createTransitionHookMiddleware;

var _off = __webpack_require__(/*! dom-helpers/events/off */ "./node_modules/dom-helpers/events/off.js");

var _off2 = _interopRequireDefault(_off);

var _on = __webpack_require__(/*! dom-helpers/events/on */ "./node_modules/dom-helpers/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _isPromise = __webpack_require__(/*! is-promise */ "is-promise");

var _isPromise2 = _interopRequireDefault(_isPromise);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/farce/lib/Actions.js");

var _Actions2 = _interopRequireDefault(_Actions);

var _ActionTypes = __webpack_require__(/*! ./ActionTypes */ "./node_modules/farce/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function runHook(hook, location, callback) {
  var result = void 0;
  try {
    result = hook(location);
  } catch (e) {
     true ? (0, _warning2.default)(false, 'Ignoring transition hook `%s` that failed with `%s`.', hook.name, e) : undefined;

    result = null;
  }

  if (!(0, _isPromise2.default)(result)) {
    return callback(result);
  }

  result.catch(function (e) {
     true ? (0, _warning2.default)(false, 'Ignoring transition hook `%s` that failed with `%s`.', hook.name, e) : undefined;

    return null;
  }).then(callback);

  return undefined;
}

function runHooks(hooks, location, callback) {
  if (!hooks.length) {
    return callback(true);
  }

  return runHook(hooks[0], location, function (result) {
    return result != null ? callback(result) : runHooks(hooks.slice(1), location, callback);
  });
}

function maybeConfirm(result) {
  if (typeof result === 'boolean') {
    return result;
  }

  return window.confirm(result); // eslint-disable-line no-alert
}

function runAllowTransition(hooks, location, callback) {
  return runHooks(hooks, location, function (result) {
    return callback(maybeConfirm(result));
  });
}

function createTransitionHookMiddleware(_ref) {
  var _ref$useBeforeUnload = _ref.useBeforeUnload,
      useBeforeUnload = _ref$useBeforeUnload === undefined ? false : _ref$useBeforeUnload;

  var nextStep = null;
  var hooks = [];

  function addHook(hook) {
    hooks.push(hook);

    return function () {
      hooks = hooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var onBeforeUnload = null;

  function transitionHookMiddleware(_ref2) {
    var dispatch = _ref2.dispatch;

    return function (next) {
      return function (action) {
        var type = action.type,
            payload = action.payload;


        if (nextStep && type === _ActionTypes2.default.UPDATE_LOCATION) {
          var step = nextStep;
          nextStep = null;
          return step(next, action);
        }

        switch (type) {
          case _ActionTypes2.default.INIT:
            // Only attach this listener once.
            if (useBeforeUnload && !onBeforeUnload) {
              /* istanbul ignore next: not testable with Karma */
              onBeforeUnload = function onBeforeUnload(event) {
                var syncResult = runHooks(hooks, null, function (result) {
                  return result;
                });

                if (syncResult === true || syncResult === undefined) {
                  // An asynchronous transition hook usually means there will be
                  // a custom confirm dialog. However, we'll already be showing
                  // the before unload dialog, and there's no way to prevent the
                  // custom dialog from showing. In such cases, the application
                  // code will need to explicitly handle the null location
                  // anyway, so don't potentially show two confirmation dialogs.
                  return undefined;
                }

                var resultSafe = syncResult || '';

                event.returnValue = resultSafe; // eslint-disable-line no-param-reassign
                return resultSafe;
              };

              (0, _on2.default)(window, 'beforeunload', onBeforeUnload);
            }

            return next(action);
          case _ActionTypes2.default.TRANSITION:
            return runAllowTransition(hooks, payload, function (allowTransition) {
              if (!allowTransition) {
                return null;
              }

              // Skip the repeated transition hook check on UPDATE_LOCATION.
              nextStep = function nextStep(nextNext, nextAction) {
                return nextNext(nextAction);
              };

              return next(action);
            });
          case _ActionTypes2.default.UPDATE_LOCATION:
            {
              // No transition hooks to run.
              if (!hooks.length) {
                return next(action);
              }

              // This is the initial load. It doesn't make sense to block this
              // transition.
              if (payload.delta === 0) {
                return next(action);
              }

              // Without delta, we can't restore the location.
              if (payload.delta == null) {
                return runAllowTransition(hooks, payload, function (allowTransition) {
                  return allowTransition ? next(action) : null;
                });
              }

              var finishRunAllowTransition = function finishRunAllowTransition(result) {
                if (!maybeConfirm(result)) {
                  return null;
                }

                // Release the original UPDATE_LOCATION when the un-rewind
                // happens. We need to do so here to maintain the invariant that
                // the store location only updates after the window location.
                nextStep = function nextStep() {
                  return next(action);
                };

                dispatch(_Actions2.default.go(payload.delta));
                return undefined;
              };

              var sync = true;
              var rewindDone = false;

              var syncResult = runHooks(hooks, payload, function (result) {
                if (sync) {
                  return result;
                }

                if (!rewindDone) {
                  // The rewind hasn't finished yet. Replace the next step hook so
                  // we finish running when that happens.
                  nextStep = function nextStep() {
                    return finishRunAllowTransition(result);
                  };
                  return undefined;
                }

                return finishRunAllowTransition(result);
              });

              sync = false;

              switch (syncResult) {
                case true:
                  // The transition was synchronously allowed, so skip the rewind.
                  return next(action);
                case false:
                  // We're done as soon as the rewind finishes.
                  nextStep = function nextStep() {};
                  break;
                case undefined:
                  // Let the callback from runHooks take care of things.
                  nextStep = function nextStep() {
                    rewindDone = true;
                  };
                  break;
                default:
                  // Show the confirm dialog after the rewind.
                  nextStep = function nextStep() {
                    return finishRunAllowTransition(syncResult);
                  };
              }

              dispatch(_Actions2.default.go(-payload.delta));
              return undefined;
            }
          case _ActionTypes2.default.DISPOSE:
            if (onBeforeUnload) {
              (0, _off2.default)(window, 'beforeunload', onBeforeUnload);
              onBeforeUnload = null;
            }

            return next(action);
          default:
            return next(action);
        }
      };
    };
  }

  transitionHookMiddleware.addHook = addHook;
  return transitionHookMiddleware;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/ensureLocationMiddleware.js":
/*!************************************************************!*\
  !*** ./node_modules/farce/lib/ensureLocationMiddleware.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ensureLocationMiddleware;

var _ActionTypes = __webpack_require__(/*! ./ActionTypes */ "./node_modules/farce/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _ensureLocation = __webpack_require__(/*! ./utils/ensureLocation */ "./node_modules/farce/lib/utils/ensureLocation.js");

var _ensureLocation2 = _interopRequireDefault(_ensureLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureLocationMiddleware() {
  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload;


      switch (type) {
        case _ActionTypes2.default.PUSH:
          return next({
            type: _ActionTypes2.default.TRANSITION,
            payload: _extends({}, (0, _ensureLocation2.default)(payload), { action: 'PUSH' })
          });
        case _ActionTypes2.default.REPLACE:
          return next({
            type: _ActionTypes2.default.TRANSITION,
            payload: _extends({}, (0, _ensureLocation2.default)(payload), { action: 'REPLACE' })
          });
        case _ActionTypes2.default.CREATE_HREF:
        case _ActionTypes2.default.CREATE_LOCATION:
          return next({
            type: type,
            payload: (0, _ensureLocation2.default)(payload)
          });
        default:
          return next(action);
      }
    };
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/queryMiddleware.js":
/*!***************************************************!*\
  !*** ./node_modules/farce/lib/queryMiddleware.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _queryString = __webpack_require__(/*! query-string */ "query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _createQueryMiddleware = __webpack_require__(/*! ./createQueryMiddleware */ "./node_modules/farce/lib/createQueryMiddleware.js");

var _createQueryMiddleware2 = _interopRequireDefault(_createQueryMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createQueryMiddleware2.default)(_queryString2.default);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/farce/lib/utils/createPath.js":
/*!****************************************************!*\
  !*** ./node_modules/farce/lib/utils/createPath.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createPath;
function createPath(_ref) {
  var pathname = _ref.pathname,
      search = _ref.search,
      hash = _ref.hash;

  return "" + pathname + search + hash;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/farce/lib/utils/ensureLocation.js":
/*!********************************************************!*\
  !*** ./node_modules/farce/lib/utils/ensureLocation.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = ensureLocation;
function ensureLocation(location) {
  if ((typeof location === 'undefined' ? 'undefined' : _typeof(location)) === 'object') {
    // Set default values for fields other than pathname.
    return _extends({
      search: '',
      hash: ''
    }, location);
  }

  var remainingPath = location;

  var hashIndex = remainingPath.indexOf('#');
  var hash = void 0;
  if (hashIndex !== -1) {
    hash = remainingPath.slice(hashIndex);
    remainingPath = remainingPath.slice(0, hashIndex);
  } else {
    hash = '';
  }

  var searchIndex = remainingPath.indexOf('?');
  var search = void 0;
  if (searchIndex !== -1) {
    search = remainingPath.slice(searchIndex);
    remainingPath = remainingPath.slice(0, searchIndex);
  } else {
    search = '';
  }

  return {
    pathname: remainingPath,
    search: search,
    hash: hash
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/ActionTypes.js":
/*!***********************************************!*\
  !*** ./node_modules/found/lib/ActionTypes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  UPDATE_MATCH: '@@found/UPDATE_MATCH',
  RESOLVE_MATCH: '@@found/RESOLVE_MATCH'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/BaseLink.js":
/*!********************************************!*\
  !*** ./node_modules/found/lib/BaseLink.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = __webpack_require__(/*! prop-types-extra/lib/elementType */ "./node_modules/prop-types-extra/lib/elementType.js");

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _PropTypes = __webpack_require__(/*! ./PropTypes */ "./node_modules/found/lib/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  Component: _elementType2.default,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  match: _propTypes2.default.object.isRequired,
  activeClassName: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  activePropName: _propTypes2.default.string,
  router: _PropTypes.routerShape.isRequired,
  exact: _propTypes2.default.bool,
  target: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  childProps: _propTypes2.default.object // In case of name conflicts here.
};

var defaultProps = {
  Component: 'a',
  exact: false
};

var BaseLink = function (_React$Component) {
  (0, _inherits3.default)(BaseLink, _React$Component);

  function BaseLink() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BaseLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          target = _this$props.target,
          router = _this$props.router,
          to = _this$props.to;


      if (onClick) {
        onClick(event);
      }

      // Don't do anything if the user's onClick handler prevented default.
      // Otherwise, let the browser handle the link with the computed href if the
      // event wasn't an unmodified left click, or if the link has a target.
      if (event.defaultPrevented || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || event.button !== 0 || target) {
        return;
      }

      event.preventDefault();

      // FIXME: When clicking on a link to the same location in the browser, the
      // actual becomes a replace rather than a push. We may want the same
      // handling – perhaps implemented in the Farce protocol.
      router.push(to);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  BaseLink.prototype.render = function render() {
    var _props = this.props,
        Component = _props.Component,
        to = _props.to,
        match = _props.match,
        activeClassName = _props.activeClassName,
        activeStyle = _props.activeStyle,
        activePropName = _props.activePropName,
        router = _props.router,
        exact = _props.exact,
        childProps = _props.childProps,
        props = (0, _objectWithoutProperties3.default)(_props, ['Component', 'to', 'match', 'activeClassName', 'activeStyle', 'activePropName', 'router', 'exact', 'childProps']);


    if ("development" !== 'production' && props.component) {
       true ? (0, _warning2.default)(typeof Component === 'function', 'Link to %s with `component` prop `%s` has an element type that ' + 'is not a component. The expected prop for the link component is ' + '`Component`.', (0, _stringify2.default)(to), props.component.displayName || props.component.name) : undefined;
    }

    if (activeClassName || activeStyle || activePropName) {
      var toLocation = router.createLocation(to);
      var active = router.isActive(match, toLocation, { exact: exact });

      if (active) {
        if (activeClassName) {
          props.className = props.className ? props.className + ' ' + activeClassName : activeClassName;
        }

        if (activeStyle) {
          props.style = (0, _extends3.default)({}, props.style, activeStyle);
        }
      }

      if (activePropName) {
        props[activePropName] = active;
      }
    }

    return _react2.default.createElement(Component, (0, _extends3.default)({}, props, childProps, {
      href: router.createHref(to),
      onClick: this.onClick // This overrides props.onClick.
    }));
  };

  return BaseLink;
}(_react2.default.Component);

BaseLink.propTypes = propTypes;
BaseLink.defaultProps = defaultProps;

exports.default = BaseLink;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/ElementsRenderer.js":
/*!****************************************************!*\
  !*** ./node_modules/found/lib/ElementsRenderer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _entries = __webpack_require__(/*! babel-runtime/core-js/object/entries */ "./node_modules/babel-runtime/core-js/object/entries.js");

var _entries2 = _interopRequireDefault(_entries);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  elements: _propTypes2.default.arrayOf(
  // This should be an object of this same type, but recursive checks would
  // probably be too messy.
  _propTypes2.default.object, _propTypes2.default.element).isRequired
};

function accumulateElement(children, element) {
  if (!children) {
    return element;
  }

  if (!element) {
    return children;
  }

  if (!_react2.default.isValidElement(children)) {
    // Children come from named child routes.
    var groups = {};
    (0, _entries2.default)(children).forEach(function (_ref) {
      var groupName = _ref[0],
          groupElements = _ref[1];

      groups[groupName] = groupElements.reduceRight(accumulateElement, null);
    });

    return _react2.default.cloneElement(element, groups);
  }

  return _react2.default.cloneElement(element, { children: children });
}

function ElementsRenderer(_ref2) {
  var elements = _ref2.elements;

  return elements.reduceRight(accumulateElement, null);
}

ElementsRenderer.propTypes = propTypes;

exports.default = ElementsRenderer;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/HttpError.js":
/*!*********************************************!*\
  !*** ./node_modules/found/lib/HttpError.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HttpError = function HttpError(status, data) {
  (0, _classCallCheck3.default)(this, HttpError);

  this.status = status;
  this.data = data;
};

exports.default = HttpError;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/found/lib/Link.js":
/*!****************************************!*\
  !*** ./node_modules/found/lib/Link.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createConnectedLink = __webpack_require__(/*! ./createConnectedLink */ "./node_modules/found/lib/createConnectedLink.js");

var _createConnectedLink2 = _interopRequireDefault(_createConnectedLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = (0, _createConnectedLink2.default)();
Link.displayName = 'Link';

exports.default = Link;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/Matcher.js":
/*!*******************************************!*\
  !*** ./node_modules/found/lib/Matcher.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _entries = __webpack_require__(/*! babel-runtime/core-js/object/entries */ "./node_modules/babel-runtime/core-js/object/entries.js");

var _entries2 = _interopRequireDefault(_entries);

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "path-to-regexp");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Matcher = function () {
  function Matcher(routeConfig) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$matchStemRoutes = _ref.matchStemRoutes,
        matchStemRoutes = _ref$matchStemRoutes === undefined ? true : _ref$matchStemRoutes;

    (0, _classCallCheck3.default)(this, Matcher);

    this.routeConfig = routeConfig;

    this.matchStemRoutes = matchStemRoutes;

    // Overly-aggressive deduplication of packages can lead to the wrong
    // version of path-to-regexp getting bundled. This is a common enough
    // failure mode that it's worthwhile to add a dev-only warning here.
     true ? (0, _warning2.default)(typeof _pathToRegexp2.default.compile === 'function', 'Incorrect version of path-to-regexp imported. If this is running ' + 'from a client bundle, check your bundler settings.') : undefined;
  }

  Matcher.prototype.match = function match(_ref2) {
    var pathname = _ref2.pathname;

    var matches = this.matchRoutes(this.routeConfig, pathname);
    if (!matches) {
      return null;
    }

    return this.makePayload(matches);
  };

  Matcher.prototype.getRoutes = function getRoutes(_ref3) {
    var routeIndices = _ref3.routeIndices;

    if (!routeIndices) {
      return null;
    }

    return this.getRoutesFromIndices(routeIndices, this.routeConfig);
  };

  Matcher.prototype.joinPaths = function joinPaths(basePath, path) {
    if (!path) {
      return basePath;
    }

    if (basePath.charAt(basePath.length - 1) === '/') {
      // eslint-disable-next-line no-param-reassign
      basePath = basePath.slice(0, -1);
    }

    return '' + basePath + this.getCanonicalPattern(path);
  };

  Matcher.prototype.isActive = function isActive(_ref4, location) {
    var matchLocation = _ref4.location;

    var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        exact = _ref5.exact;

    return this.isPathnameActive(matchLocation.pathname, location.pathname, exact) && this.isQueryActive(matchLocation.query, location.query);
  };

  Matcher.prototype.format = function format(pattern, params) {
    return _pathToRegexp2.default.compile(pattern)(params);
  };

  Matcher.prototype.matchRoutes = function matchRoutes(routeConfig, pathname) {
    for (var index = 0; index < routeConfig.length; ++index) {
      var route = routeConfig[index];

      var match = this.matchRoute(route, pathname);
      if (!match) {
        continue; // eslint-disable-line no-continue
      }

      var params = match.params,
          remaining = match.remaining;
      var children = route.children;


      if (children) {
        if (Array.isArray(children)) {
          var childMatches = this.matchRoutes(children, remaining);
          if (childMatches) {
            return [{ index: index, params: params }].concat(childMatches);
          }
        } else {
          var groups = this.matchGroups(children, remaining);
          if (groups) {
            return [{ index: index, params: params }, { groups: groups }];
          }
        }
      }

      if (!remaining) {
        if (this.matchStemRoutes || !children) {
          return [{ index: index, params: params }];
        }
      }
    }

    return null;
  };

  Matcher.prototype.matchRoute = function matchRoute(route, pathname) {
    var routePath = route.path;
    if (!routePath) {
      return {
        params: {},
        remaining: pathname
      };
    }

    var pattern = this.getCanonicalPattern(routePath);
    var keys = [];
    var regexp = (0, _pathToRegexp2.default)(pattern, keys, { end: false });

    var match = regexp.exec(pathname);
    if (match === null) {
      return null;
    }

    var params = (0, _create2.default)(null);
    keys.forEach(function (_ref6, index) {
      var name = _ref6.name;

      var value = match[index + 1];
      params[name] = value && decodeURIComponent(value);
    });

    return {
      params: params,
      remaining: pathname.slice(match[0].length)
    };
  };

  Matcher.prototype.getCanonicalPattern = function getCanonicalPattern(pattern) {
    return pattern.charAt(0) === '/' ? pattern : '/' + pattern;
  };

  Matcher.prototype.matchGroups = function matchGroups(routeGroups, pathname) {
    var groups = {};

    for (var _iterator = (0, _entries2.default)(routeGroups), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref8;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref8 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref8 = _i.value;
      }

      var _ref7 = _ref8;
      var groupName = _ref7[0];
      var routes = _ref7[1];

      var groupMatch = this.matchRoutes(routes, pathname);
      if (!groupMatch) {
        return null;
      }

      groups[groupName] = groupMatch;
    }

    return groups;
  };

  Matcher.prototype.makePayload = function makePayload(matches) {
    var _this = this;

    var routeMatch = matches[0];

    if (routeMatch.groups) {
       true ? (0, _warning2.default)(matches.length === 1, 'Route match with groups %s has children, which are ignored.', (0, _keys2.default)(routeMatch.groups).join(', ')) : undefined;

      var routeIndices = {};
      var routeParams = [];
      var _params = {};

      (0, _entries2.default)(routeMatch.groups).forEach(function (_ref9) {
        var groupName = _ref9[0],
            groupMatches = _ref9[1];

        var groupPayload = _this.makePayload(groupMatches);

        // Retain the nested group structure for route indices so we can
        // reconstruct the element tree from flattened route elements.
        routeIndices[groupName] = groupPayload.routeIndices;

        // Flatten route groups for route params matching getRoutesFromIndices
        // below.
        routeParams.push.apply(routeParams, groupPayload.routeParams);

        // Just merge all the params depth-first; it's the easiest option.
        (0, _assign2.default)(_params, groupPayload.params);
      });

      return { routeIndices: routeIndices, routeParams: routeParams, params: _params };
    }

    var index = routeMatch.index,
        params = routeMatch.params;


    if (matches.length === 1) {
      return {
        routeIndices: [index],
        routeParams: [params],
        params: params
      };
    }

    var childPayload = this.makePayload(matches.slice(1));
    return {
      routeIndices: [index].concat(childPayload.routeIndices),
      routeParams: [params].concat(childPayload.routeParams),
      params: (0, _extends3.default)({}, params, childPayload.params)
    };
  };

  Matcher.prototype.getRoutesFromIndices = function getRoutesFromIndices(routeIndices, routeConfigOrGroups) {
    var _this2 = this;

    var routeIndex = routeIndices[0];

    if ((typeof routeIndex === 'undefined' ? 'undefined' : (0, _typeof3.default)(routeIndex)) === 'object') {
      // Flatten route groups to save resolvers from having to explicitly
      // handle them.
      var groupRoutes = [];
      (0, _entries2.default)(routeIndex).forEach(function (_ref10) {
        var groupName = _ref10[0],
            groupRouteIndices = _ref10[1];

        groupRoutes.push.apply(groupRoutes, _this2.getRoutesFromIndices(groupRouteIndices, routeConfigOrGroups[groupName]));
      });

      return groupRoutes;
    }

    var route = routeConfigOrGroups[routeIndex];

    if (routeIndices.length === 1) {
      return [route];
    }

    return [route].concat(this.getRoutesFromIndices(routeIndices.slice(1), route.children));
  };

  Matcher.prototype.isPathnameActive = function isPathnameActive(matchPathname, pathname, exact) {
    if (pathname === matchPathname) {
      return true;
    }

    if (exact) {
      // The above condition is necessary for an exact match.
      return false;
    }

    // Require that a partial match be followed by a path separator.
    var pathnameWithSeparator = pathname.slice(-1) !== '/' ? pathname + '/' : pathname;

    // Can't use startsWith, as that requires a polyfill.
    return matchPathname.indexOf(pathnameWithSeparator) === 0;
  };

  Matcher.prototype.isQueryActive = function isQueryActive(matchQuery, query) {
    if (!query) {
      return true;
    }

    return (0, _entries2.default)(query).every(function (_ref11) {
      var key = _ref11[0],
          value = _ref11[1];
      return Object.prototype.hasOwnProperty.call(matchQuery, key) ? (0, _isEqual2.default)(matchQuery[key], value) : value === undefined;
    });
  };

  Matcher.prototype.replaceRouteConfig = function replaceRouteConfig(routeConfig) {
    this.routeConfig = routeConfig;
  };

  return Matcher;
}();

exports.default = Matcher;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/PropTypes.js":
/*!*********************************************!*\
  !*** ./node_modules/found/lib/PropTypes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.routerShape = exports.matcherShape = exports.matchShape = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The shape might be different with a custom matcher or history enhancer, but
// the default matcher assumes and provides this shape. As such, this validator
// is purely for user convenience and should not be used internally.
var matchShape = exports.matchShape = _propTypes2.default.shape({
  location: _propTypes2.default.shape({
    pathname: _propTypes2.default.string.isRequired,
    query: _propTypes2.default.object.isRequired
  }).isRequired,
  params: _propTypes2.default.object.isRequired
});

// User code generally shouldn't need this, but it doesn't hurt to export here,
// since we use it for routerShape below.
var matcherShape = exports.matcherShape = _propTypes2.default.shape({
  match: _propTypes2.default.func.isRequired,
  getRoutes: _propTypes2.default.func.isRequired,
  isActive: _propTypes2.default.func.isRequired,
  format: _propTypes2.default.func.isRequired
});

var routerShape = exports.routerShape = _propTypes2.default.shape({
  push: _propTypes2.default.func.isRequired,
  replace: _propTypes2.default.func.isRequired,
  go: _propTypes2.default.func.isRequired,

  createHref: _propTypes2.default.func.isRequired,
  createLocation: _propTypes2.default.func.isRequired,
  isActive: _propTypes2.default.func.isRequired,
  matcher: matcherShape.isRequired,

  addTransitionHook: _propTypes2.default.func.isRequired
});

/***/ }),

/***/ "./node_modules/found/lib/RedirectException.js":
/*!*****************************************************!*\
  !*** ./node_modules/found/lib/RedirectException.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This isn't really an error.
var RedirectException = function RedirectException(location) {
  (0, _classCallCheck3.default)(this, RedirectException);

  this.location = location;
};

exports.default = RedirectException;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/found/lib/ResolverUtils.js":
/*!*************************************************!*\
  !*** ./node_modules/found/lib/ResolverUtils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _values = __webpack_require__(/*! babel-runtime/core-js/object/values */ "./node_modules/babel-runtime/core-js/object/values.js");

var _values2 = _interopRequireDefault(_values);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _setImmediate2 = __webpack_require__(/*! babel-runtime/core-js/set-immediate */ "./node_modules/babel-runtime/core-js/set-immediate.js");

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.checkResolved = checkResolved;
exports.isResolved = isResolved;
exports.accumulateRouteValues = accumulateRouteValues;
exports.getRouteMatches = getRouteMatches;
exports.getRouteValue = getRouteValue;
exports.getRouteValues = getRouteValues;
exports.getComponents = getComponents;

var _isPromise = __webpack_require__(/*! is-promise */ "is-promise");

var _isPromise2 = _interopRequireDefault(_isPromise);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNRESOLVED = {};

function checkResolved(value) {
  if (!(0, _isPromise2.default)(value)) {
    return value;
  }

  return _promise2.default.race([value, new _promise2.default(function (resolve) {
    (0, _setImmediate3.default)(resolve, UNRESOLVED);
  })]);
}

function isResolved(value) {
  return value !== UNRESOLVED;
}

function accumulateRouteValuesImpl(routeValues, routeIndices, callback, initialValue) {
  var accumulated = [];
  var value = initialValue;

  for (var _iterator = routeIndices, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var routeIndex = _ref;

    if ((typeof routeIndex === 'undefined' ? 'undefined' : (0, _typeof3.default)(routeIndex)) === 'object') {
      // eslint-disable-next-line no-loop-func
      (0, _values2.default)(routeIndex).forEach(function (groupRouteIndices) {
        accumulated.push.apply(accumulated, accumulateRouteValuesImpl(routeValues, groupRouteIndices, callback, value));
      });
    } else {
      value = callback(value, routeValues.shift());
      accumulated.push(value);
    }
  }

  return accumulated;
}

function accumulateRouteValues(routeValues, routeIndices, callback, initialValue) {
  return accumulateRouteValuesImpl([].concat(routeValues), routeIndices, callback, initialValue);
}

function getRouteMatches(match) {
  return match.routes.map(function (route, i) {
    return (0, _extends3.default)({}, match, {
      route: route,
      routeParams: match.routeParams[i]
    });
  });
}

function getRouteValue(match, getGetter, getValue) {
  var route = match.route;

  var getter = getGetter(route);
  return getter ? getter.call(route, match) : getValue(route);
}

// This is a little more versatile than if we only passed in keys.
function getRouteValues(routeMatches, getGetter, getValue) {
  return routeMatches.map(function (match) {
    return getRouteValue(match, getGetter, getValue);
  });
}

function getRouteGetComponent(route) {
  return route.getComponent;
}

function getRouteComponent(route) {
  if ("development" !== 'production' && route.component) {
     true ? (0, _warning2.default)(route.Component, 'Route with `component` property `%s` has no `Component` ' + 'property. The expected property for the route component ' + 'is `Component`.', route.component.displayName || route.component.name) : undefined;
  }

  return route.Component;
}

// This should be common to most resolvers, so make it available here.
function getComponents(routeMatches) {
  return getRouteValues(routeMatches, getRouteGetComponent, getRouteComponent);
}

/***/ }),

/***/ "./node_modules/found/lib/Route.js":
/*!*****************************************!*\
  !*** ./node_modules/found/lib/Route.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convenience class for creating normal routes with JSX. When not using JSX,
 * use a POJSO instead of this class.
 */
var Route = function Route(props) {
  (0, _classCallCheck3.default)(this, Route);

  (0, _assign2.default)(this, props);
};

exports.default = Route;


if (true) {
  // Workaround to make React Proxy give me the original class, to allow
  // makeRouteConfig to get the actual class, when using JSX for routes.
  Route.prototype.isReactComponent = {};
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/found/lib/createConnectedLink.js":
/*!*******************************************************!*\
  !*** ./node_modules/found/lib/createConnectedLink.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createConnectedLink;

var _BaseLink = __webpack_require__(/*! ./BaseLink */ "./node_modules/found/lib/BaseLink.js");

var _BaseLink2 = _interopRequireDefault(_BaseLink);

var _createWithRouter = __webpack_require__(/*! ./createWithRouter */ "./node_modules/found/lib/createWithRouter.js");

var _createWithRouter2 = _interopRequireDefault(_createWithRouter);

var _withRouter = __webpack_require__(/*! ./withRouter */ "./node_modules/found/lib/withRouter.js");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createConnectedLink(options) {
  var withRouter = options ? (0, _createWithRouter2.default)(options) : _withRouter2.default;

  var ConnectedLink = withRouter(_BaseLink2.default);
  ConnectedLink.displayName = 'ConnectedLink';

  return ConnectedLink;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/createElements.js":
/*!**************************************************!*\
  !*** ./node_modules/found/lib/createElements.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createElements;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _ResolverUtils = __webpack_require__(/*! ./ResolverUtils */ "./node_modules/found/lib/ResolverUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElements(routeMatches, Components, matchData) {
  return routeMatches.map(function (match, i) {
    var route = match.route;


    var Component = Components[i];
    var data = matchData[i];

    var isComponentResolved = (0, _ResolverUtils.isResolved)(Component);
    var areDataResolved = (0, _ResolverUtils.isResolved)(data);

    if (route.render) {
      // Perhaps undefined here would be more correct for "not ready", but
      // Relay uses null in RelayReadyStateRenderer, so let's follow that
      // convention.
      return route.render({
        match: match,
        Component: isComponentResolved ? Component : null,
        props: areDataResolved ? (0, _extends3.default)({}, match, { data: data }) : null,
        data: areDataResolved ? data : null
      });
    }

    if (!isComponentResolved || !areDataResolved) {
      // Can't render.
      return undefined;
    }

    if (!Component) {
      // Note this check would be wrong on potentially unresolved data.
       true ? (0, _warning2.default)(data === undefined, 'Route %s with data has no render method or component.', i) : undefined;

      // Nothing to render.
      return null;
    }

    return _react2.default.createElement(Component, (0, _extends3.default)({}, match, { data: data }));
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/createMatchEnhancer.js":
/*!*******************************************************!*\
  !*** ./node_modules/found/lib/createMatchEnhancer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createMatchEnhancer;

var _ActionTypes = __webpack_require__(/*! farce/lib/ActionTypes */ "./node_modules/farce/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _redux = __webpack_require__(/*! redux */ "redux");

var _ActionTypes3 = __webpack_require__(/*! ./ActionTypes */ "./node_modules/found/lib/ActionTypes.js");

var _ActionTypes4 = _interopRequireDefault(_ActionTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMatchMiddleware(matcher) {
  return function matchMiddleware() {
    return function (next) {
      return function (action) {
        var type = action.type,
            payload = action.payload;

        if (type !== _ActionTypes2.default.UPDATE_LOCATION) {
          return next(action);
        }

        return next({
          type: _ActionTypes4.default.UPDATE_MATCH,
          payload: (0, _extends3.default)({
            location: payload
          }, matcher.match(payload))
        });
      };
    };
  };
}

function createMatchEnhancer(matcher) {
  var getFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_ref) {
    var found = _ref.found;
    return found;
  };

  return function matchEnhancer(createStore) {
    return function () {
      var middlewareEnhancer = (0, _redux.applyMiddleware)(createMatchMiddleware(matcher));

      var store = middlewareEnhancer(createStore).apply(undefined, arguments);

      function replaceRouteConfig(routeConfig) {
        matcher.replaceRouteConfig(routeConfig);

        store.dispatch({
          type: _ActionTypes2.default.UPDATE_LOCATION,
          payload: getFound(store.getState()).match.location
        });
      }

      return (0, _extends3.default)({}, store, {
        found: { matcher: matcher, replaceRouteConfig: replaceRouteConfig }
      });
    };
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/createRender.js":
/*!************************************************!*\
  !*** ./node_modules/found/lib/createRender.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createRender;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactStaticContainer = __webpack_require__(/*! react-static-container */ "react-static-container");

var _reactStaticContainer2 = _interopRequireDefault(_reactStaticContainer);

var _ElementsRenderer = __webpack_require__(/*! ./ElementsRenderer */ "./node_modules/found/lib/ElementsRenderer.js");

var _ElementsRenderer2 = _interopRequireDefault(_ElementsRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// These are intentionally not renderLoading, renderFetched, and renderFailure
// from Relay, because these don't quite correspond to those conditions.
function createRender(_ref) {
  var renderPending = _ref.renderPending,
      renderReady = _ref.renderReady,
      renderError = _ref.renderError;

  return function render(renderArgs) {
    var error = renderArgs.error,
        elements = renderArgs.elements;

    var element = void 0;

    if (error) {
      element = renderError ? renderError(renderArgs) : null;
    } else if (!elements) {
      element = renderPending ? renderPending(renderArgs) : undefined;
    } else if (renderReady) {
      element = renderReady(renderArgs);
    } else {
      element = _react2.default.createElement(_ElementsRenderer2.default, { elements: elements });
    }

    var hasElement = element !== undefined;

    return _react2.default.createElement(
      _reactStaticContainer2.default,
      { shouldUpdate: hasElement },
      hasElement ? element : null
    );
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/createWithRouter.js":
/*!****************************************************!*\
  !*** ./node_modules/found/lib/createWithRouter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createWithRouter;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _PropTypes = __webpack_require__(/*! ./PropTypes */ "./node_modules/found/lib/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerContextTypes = {
  router: _PropTypes.routerShape.isRequired
};

function createWithRouter(_ref) {
  var _ref$getFound = _ref.getFound,
      getFound = _ref$getFound === undefined ? function (_ref2) {
    var found = _ref2.found;
    return found;
  } : _ref$getFound,
      _ref$matchKey = _ref.matchKey,
      matchKey = _ref$matchKey === undefined ? 'resolvedMatch' : _ref$matchKey;

  var withMatch = (0, _reactRedux.connect)(function (state) {
    return { match: getFound(state)[matchKey] };
  }, null, function (stateProps, dispatchProps, ownProps) {
    return (0, _extends3.default)({}, ownProps, stateProps);
  },
  // This needs to be pure, to avoid rerendering on changes to other matchKey
  // values in the store.
  {
    getDisplayName: function getDisplayName(name) {
      return 'withRouter(' + name + ')';
    }
  });

  return function withRouter(Component) {
    var ConnectedComponent = withMatch(Component);

    // Yes, this is pretty gross. It's the simplest way to inject router as
    // a prop without adding yet another wrapper component, though.
    ConnectedComponent.contextTypes = (0, _extends3.default)({}, ConnectedComponent.contextTypes, routerContextTypes);

    // TODO: Use connectAdvanced.
    // Overwriting the method instead of extending the class is used to avoid
    // issues with compatibility on IE <= 10.
    var baseAddExtraProps = ConnectedComponent.prototype.addExtraProps;

    function addExtraProps(props) {
      return (0, _extends3.default)({}, baseAddExtraProps.call(this, props), {

        // It's safe to read from the context because the router context
        // methods should never change. With the default implementation, they
        // in fact can't change.
        router: this.context.router
      });
    }

    ConnectedComponent.prototype.addExtraProps = addExtraProps;

    return ConnectedComponent;
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/foundReducer.js":
/*!************************************************!*\
  !*** ./node_modules/found/lib/foundReducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = foundReducer;

var _ActionTypes = __webpack_require__(/*! ./ActionTypes */ "./node_modules/found/lib/ActionTypes.js");

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function foundReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case _ActionTypes2.default.UPDATE_MATCH:
      // For the initial match, set resolvedMatch too. There's no previous
      // result to keep rendered, plus this simplifies server rendering.
      return {
        match: payload,
        resolvedMatch: state ? state.resolvedMatch : payload
      };
    case _ActionTypes2.default.RESOLVE_MATCH:
      // It doesn't make sense to resolve a match if there wasn't already an
      // unresolved match.
      return state && {
        match: state.match,
        resolvedMatch: payload
      };
    default:
      return state;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/getRenderArgs.js":
/*!*************************************************!*\
  !*** ./node_modules/found/lib/getRenderArgs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncIterator2 = __webpack_require__(/*! babel-runtime/helpers/asyncIterator */ "./node_modules/babel-runtime/helpers/asyncIterator.js");

var _asyncIterator3 = _interopRequireDefault(_asyncIterator2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _resolveRenderArgs = __webpack_require__(/*! ./utils/resolveRenderArgs */ "./node_modules/found/lib/utils/resolveRenderArgs.js");

var _resolveRenderArgs2 = _interopRequireDefault(_resolveRenderArgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var elements, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            elements = void 0;

            // ESLint doesn't handle for-await yet.
            // eslint-disable-next-line semi

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = (0, _asyncIterator3.default)((0, _resolveRenderArgs2.default)(props));

          case 6:
            _context.next = 8;
            return _iterator.next();

          case 8:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 12;
            return _step.value;

          case 12:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 18;
              break;
            }

            elements = _value;

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context['catch'](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator.return)) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return _iterator.return();

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(24);

          case 34:
            return _context.abrupt('return', elements);

          case 35:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 20, 24, 34], [25,, 29, 33]]);
  }));

  function getRenderArgs(_x) {
    return _ref.apply(this, arguments);
  }

  return getRenderArgs;
}();

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/getStoreRenderArgs.js":
/*!******************************************************!*\
  !*** ./node_modules/found/lib/getStoreRenderArgs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getStoreRenderArgs;

var _getRenderArgs = __webpack_require__(/*! ./getRenderArgs */ "./node_modules/found/lib/getRenderArgs.js");

var _getRenderArgs2 = _interopRequireDefault(_getRenderArgs);

var _createStoreRouterObject = __webpack_require__(/*! ./utils/createStoreRouterObject */ "./node_modules/found/lib/utils/createStoreRouterObject.js");

var _createStoreRouterObject2 = _interopRequireDefault(_createStoreRouterObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function returns a promise. It doesn't need to be an async function
// because it doesn't use the promise's value.
function getStoreRenderArgs(_ref) {
  var store = _ref.store,
      _ref$getFound = _ref.getFound,
      getFound = _ref$getFound === undefined ? function (_ref2) {
    var found = _ref2.found;
    return found;
  } : _ref$getFound,
      matchContext = _ref.matchContext,
      resolver = _ref.resolver;

  var router = (0, _createStoreRouterObject2.default)(store);
  var match = getFound(store.getState()).resolvedMatch;

  return (0, _getRenderArgs2.default)({
    router: router,
    match: match,
    matchContext: matchContext,
    resolver: resolver
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/makeRouteConfig.js":
/*!***************************************************!*\
  !*** ./node_modules/found/lib/makeRouteConfig.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _entries = __webpack_require__(/*! babel-runtime/core-js/object/entries */ "./node_modules/babel-runtime/core-js/object/entries.js");

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = makeRouteConfig;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildRouteConfig(node, routeConfig) {
  _react2.default.Children.forEach(node, function (child) {
    if (!_react2.default.isValidElement(child)) {
      return;
    }

    var Type = child.type;
    var _child$props = child.props,
        children = _child$props.children,
        props = (0, _objectWithoutProperties3.default)(_child$props, ['children']);


    if (Type === _react2.default.Fragment) {
      buildRouteConfig(children, routeConfig);
      return;
    }

    if (true) {
      if (Type.prototype.constructor !== Type) {
        // Unwrap proxies from react-proxy. This isn't strictly necessary.
        // eslint-disable-next-line no-param-reassign
        Type = Type.prototype.constructor;
      } else if (
      // eslint-disable-next-line no-underscore-dangle
      Type.__reactstandin__getCurrent) {
        // Unwrap proxies from react-stand-in.
        // eslint-disable-next-line no-param-reassign
        Type = (0, _getPrototypeOf2.default)(Type);
      }
    }

    var route = new Type(props);

    if (children) {
      if (_react2.default.isValidElement(children) || Array.isArray(children)) {
        // eslint-disable-next-line no-use-before-define
        route.children = makeRouteConfig(children);
      } else {
        var routeGroups = {};
        (0, _entries2.default)(children).forEach(function (_ref) {
          var groupName = _ref[0],
              groupRoutes = _ref[1];

          // eslint-disable-next-line no-use-before-define
          routeGroups[groupName] = makeRouteConfig(groupRoutes);
        });

        route.children = routeGroups;
      }
    }

    routeConfig.push(route);
  });

  return routeConfig;
}

/**
 * Create a route configuration from JSX configuration elements.
 */
function makeRouteConfig(node) {
  return buildRouteConfig(node, []);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/resolver.js":
/*!********************************************!*\
  !*** ./node_modules/found/lib/resolver.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _asyncGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncGenerator */ "./node_modules/babel-runtime/helpers/asyncGenerator.js");

var _asyncGenerator3 = _interopRequireDefault(_asyncGenerator2);

var _isPromise = __webpack_require__(/*! is-promise */ "is-promise");

var _isPromise2 = _interopRequireDefault(_isPromise);

var _createElements = __webpack_require__(/*! ./createElements */ "./node_modules/found/lib/createElements.js");

var _createElements2 = _interopRequireDefault(_createElements);

var _ResolverUtils = __webpack_require__(/*! ./ResolverUtils */ "./node_modules/found/lib/ResolverUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRouteGetData(route) {
  return route.getData;
}

function getRouteData(route) {
  return route.data;
}

exports.default = {
  resolveElements: function resolveElements(match) {
    var _this = this;

    return _asyncGenerator3.default.wrap( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var routeMatches, Components, data, earlyComponents, earlyData, fetchedComponents, fetchedData, pendingElements;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              routeMatches = (0, _ResolverUtils.getRouteMatches)(match);
              Components = (0, _ResolverUtils.getComponents)(routeMatches);
              data = _this.getData(match, routeMatches);

              if (!Components.some(_isPromise2.default)) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return _asyncGenerator3.default.await(_promise2.default.all(Components.map(_ResolverUtils.checkResolved)));

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = Components;

            case 10:
              earlyComponents = _context.t0;

              if (!data.some(_isPromise2.default)) {
                _context.next = 17;
                break;
              }

              _context.next = 14;
              return _asyncGenerator3.default.await(_promise2.default.all(data.map(_ResolverUtils.checkResolved)));

            case 14:
              _context.t1 = _context.sent;
              _context.next = 18;
              break;

            case 17:
              _context.t1 = data;

            case 18:
              earlyData = _context.t1;
              fetchedComponents = void 0;
              fetchedData = void 0;

              if (!(!earlyComponents.every(_ResolverUtils.isResolved) || !earlyData.every(_ResolverUtils.isResolved))) {
                _context.next = 33;
                break;
              }

              pendingElements = (0, _createElements2.default)(routeMatches, earlyComponents, earlyData);
              _context.next = 25;
              return pendingElements.every(function (element) {
                return element !== undefined;
              }) ? pendingElements : undefined;

            case 25:
              _context.next = 27;
              return _asyncGenerator3.default.await(_promise2.default.all(Components));

            case 27:
              fetchedComponents = _context.sent;
              _context.next = 30;
              return _asyncGenerator3.default.await(_promise2.default.all(data));

            case 30:
              fetchedData = _context.sent;
              _context.next = 35;
              break;

            case 33:
              fetchedComponents = earlyComponents;
              fetchedData = earlyData;

            case 35:
              _context.next = 37;
              return (0, _createElements2.default)(routeMatches, fetchedComponents, fetchedData);

            case 37:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },


  /**
   * Generate route data according to their getters, respecting the order of
   * promises per the `defer` flag on routes.
   */
  getData: function getData(match, routeMatches) {
    return (0, _ResolverUtils.accumulateRouteValues)(routeMatches, match.routeIndices, function (_ref, routeMatch) {
      var ancestorRouteData = _ref.ancestorRouteData,
          prevParentPromise = _ref.prevParentPromise;

      // For a deferred route, the parent promise is the previous promise.
      // Otherwise, it's the previous parent promise.
      var parentPromise = routeMatch.route.defer ? _promise2.default.all(ancestorRouteData) : prevParentPromise;

      // If there is a parent promise, execute after it resolves.
      var routeData = parentPromise ? parentPromise.then(function () {
        return (0, _ResolverUtils.getRouteValue)(routeMatch, getRouteGetData, getRouteData);
      }) : (0, _ResolverUtils.getRouteValue)(routeMatch, getRouteGetData, getRouteData);

      return {
        routeData: routeData,
        ancestorRouteData: [].concat(ancestorRouteData, [routeData]),
        prevParentPromise: parentPromise
      };
    }, {
      routeData: null,
      ancestorRouteData: [],
      prevParentPromise: null
    }).map(function (_ref2) {
      var routeData = _ref2.routeData;
      return routeData;
    });
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/server/RouterProvider.js":
/*!*********************************************************!*\
  !*** ./node_modules/found/lib/server/RouterProvider.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(/*! ../PropTypes */ "./node_modules/found/lib/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  router: _PropTypes.routerShape.isRequired,
  children: _propTypes2.default.element.isRequired
};

var childContextTypes = {
  router: _PropTypes.routerShape.isRequired
};

var RouterProvider = function (_React$Component) {
  (0, _inherits3.default)(RouterProvider, _React$Component);

  function RouterProvider() {
    (0, _classCallCheck3.default)(this, RouterProvider);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  RouterProvider.prototype.getChildContext = function getChildContext() {
    return {
      router: this.props.router
    };
  };

  // This doesn't need the logic for changes to the router object; it's only
  // used for server-side rendering and should only render once.

  RouterProvider.prototype.render = function render() {
    return this.props.children;
  };

  return RouterProvider;
}(_react2.default.Component);

RouterProvider.propTypes = propTypes;
RouterProvider.childContextTypes = childContextTypes;

exports.default = RouterProvider;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/server/getFarceResult.js":
/*!*********************************************************!*\
  !*** ./node_modules/found/lib/server/getFarceResult.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Actions = __webpack_require__(/*! farce/lib/Actions */ "./node_modules/farce/lib/Actions.js");

var _Actions2 = _interopRequireDefault(_Actions);

var _ServerProtocol = __webpack_require__(/*! farce/lib/ServerProtocol */ "./node_modules/farce/lib/ServerProtocol.js");

var _ServerProtocol2 = _interopRequireDefault(_ServerProtocol);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _getStoreRenderArgs = __webpack_require__(/*! ../getStoreRenderArgs */ "./node_modules/found/lib/getStoreRenderArgs.js");

var _getStoreRenderArgs2 = _interopRequireDefault(_getStoreRenderArgs);

var _RedirectException = __webpack_require__(/*! ../RedirectException */ "./node_modules/found/lib/RedirectException.js");

var _RedirectException2 = _interopRequireDefault(_RedirectException);

var _resolver = __webpack_require__(/*! ../resolver */ "./node_modules/found/lib/resolver.js");

var _resolver2 = _interopRequireDefault(_resolver);

var _createFarceStore = __webpack_require__(/*! ../utils/createFarceStore */ "./node_modules/found/lib/utils/createFarceStore.js");

var _createFarceStore2 = _interopRequireDefault(_createFarceStore);

var _RouterProvider = __webpack_require__(/*! ./RouterProvider */ "./node_modules/found/lib/server/RouterProvider.js");

var _RouterProvider2 = _interopRequireDefault(_RouterProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var url = _ref2.url,
        historyMiddlewares = _ref2.historyMiddlewares,
        historyOptions = _ref2.historyOptions,
        routeConfig = _ref2.routeConfig,
        matchContext = _ref2.matchContext,
        _ref2$resolver = _ref2.resolver,
        resolver = _ref2$resolver === undefined ? _resolver2.default : _ref2$resolver,
        render = _ref2.render;
    var store, renderArgs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = (0, _createFarceStore2.default)({
              historyProtocol: new _ServerProtocol2.default(url),
              historyMiddlewares: historyMiddlewares,
              historyOptions: historyOptions,
              routeConfig: routeConfig
            });
            renderArgs = void 0;
            _context.prev = 2;
            _context.next = 5;
            return (0, _getStoreRenderArgs2.default)({
              store: store,
              matchContext: matchContext,
              resolver: resolver
            });

          case 5:
            renderArgs = _context.sent;
            _context.next = 13;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);

            if (!(_context.t0 instanceof _RedirectException2.default)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', {
              redirect: {
                url: store.farce.createHref(_context.t0.location)
              }
            });

          case 12:
            throw _context.t0;

          case 13:
            _context.prev = 13;

            // This is a no-op with ServerProtocol, but it doesn't hurt.
            store.dispatch(_Actions2.default.dispose());
            return _context.finish(13);

          case 16:
            return _context.abrupt('return', {
              status: renderArgs.error ? renderArgs.error.status : 200,
              element: _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(
                  _RouterProvider2.default,
                  { router: renderArgs.router },
                  render(renderArgs)
                )
              )
            });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8, 13, 16]]);
  }));

  function getFarceResult(_x) {
    return _ref.apply(this, arguments);
  }

  return getFarceResult;
}();

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/server/index.js":
/*!************************************************!*\
  !*** ./node_modules/found/lib/server/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RouterProvider = exports.getFarceResult = undefined;

var _getFarceResult2 = __webpack_require__(/*! ./getFarceResult */ "./node_modules/found/lib/server/getFarceResult.js");

var _getFarceResult3 = _interopRequireDefault(_getFarceResult2);

var _RouterProvider2 = __webpack_require__(/*! ./RouterProvider */ "./node_modules/found/lib/server/RouterProvider.js");

var _RouterProvider3 = _interopRequireDefault(_RouterProvider2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getFarceResult = _getFarceResult3.default;
exports.RouterProvider = _RouterProvider3.default;

/***/ }),

/***/ "./node_modules/found/lib/utils/createFarceStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/found/lib/utils/createFarceStore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createFarceStore;

var _Actions = __webpack_require__(/*! farce/lib/Actions */ "./node_modules/farce/lib/Actions.js");

var _Actions2 = _interopRequireDefault(_Actions);

var _createHistoryEnhancer = __webpack_require__(/*! farce/lib/createHistoryEnhancer */ "./node_modules/farce/lib/createHistoryEnhancer.js");

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(/*! farce/lib/queryMiddleware */ "./node_modules/farce/lib/queryMiddleware.js");

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _redux = __webpack_require__(/*! redux */ "redux");

var _createMatchEnhancer = __webpack_require__(/*! ../createMatchEnhancer */ "./node_modules/found/lib/createMatchEnhancer.js");

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _foundReducer = __webpack_require__(/*! ../foundReducer */ "./node_modules/found/lib/foundReducer.js");

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Matcher = __webpack_require__(/*! ../Matcher */ "./node_modules/found/lib/Matcher.js");

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFarceStore(_ref) {
  var historyProtocol = _ref.historyProtocol,
      historyMiddlewares = _ref.historyMiddlewares,
      historyOptions = _ref.historyOptions,
      routeConfig = _ref.routeConfig,
      matcherOptions = _ref.matcherOptions;

  var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    found: _foundReducer2.default
  }), (0, _redux.compose)((0, _createHistoryEnhancer2.default)((0, _extends3.default)({}, historyOptions, {
    protocol: historyProtocol,
    middlewares: historyMiddlewares || [_queryMiddleware2.default]
  })), (0, _createMatchEnhancer2.default)(new _Matcher2.default(routeConfig, matcherOptions))));

  store.dispatch(_Actions2.default.init());

  return store;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/utils/createStoreRouterObject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/found/lib/utils/createStoreRouterObject.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createStoreRouterObject;

var _Actions = __webpack_require__(/*! farce/lib/Actions */ "./node_modules/farce/lib/Actions.js");

var _Actions2 = _interopRequireDefault(_Actions);

var _redux = __webpack_require__(/*! redux */ "redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAVIGATION_ACTION_CREATORS = {
  push: _Actions2.default.push,
  replace: _Actions2.default.replace,
  go: _Actions2.default.go
};

function createStoreRouterObject(store) {
  var farce = store.farce,
      found = store.found;
  var matcher = found.matcher;


  return (0, _extends3.default)({}, (0, _redux.bindActionCreators)(NAVIGATION_ACTION_CREATORS, store.dispatch), farce, found, {

    // Expose isActive from matcher directly for convenience. This pattern is
    // faster than using matcher.isActive.bind(matcher).
    isActive: function isActive(match, location, options) {
      return matcher.isActive(match, location, options);
    }
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/utils/resolveRenderArgs.js":
/*!***********************************************************!*\
  !*** ./node_modules/found/lib/utils/resolveRenderArgs.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncIterator2 = __webpack_require__(/*! babel-runtime/helpers/asyncIterator */ "./node_modules/babel-runtime/helpers/asyncIterator.js");

var _asyncIterator3 = _interopRequireDefault(_asyncIterator2);

var _asyncGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncGenerator */ "./node_modules/babel-runtime/helpers/asyncGenerator.js");

var _asyncGenerator3 = _interopRequireDefault(_asyncGenerator2);

var _entries = __webpack_require__(/*! babel-runtime/core-js/object/entries */ "./node_modules/babel-runtime/core-js/object/entries.js");

var _entries2 = _interopRequireDefault(_entries);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _HttpError = __webpack_require__(/*! ../HttpError */ "./node_modules/found/lib/HttpError.js");

var _HttpError2 = _interopRequireDefault(_HttpError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function foldElements(elementsRaw, routeIndices) {
  var elements = [];

  for (var _iterator = routeIndices, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var routeIndex = _ref;

    if ((typeof routeIndex === 'undefined' ? 'undefined' : (0, _typeof3.default)(routeIndex)) === 'object') {
      (function () {
        // Reshape the next elements in the elements array to match the nested
        // tree structure corresponding to the route groups.
        var groupElements = {};
        (0, _entries2.default)(routeIndex).forEach(function (_ref2) {
          var groupName = _ref2[0],
              groupRouteIndices = _ref2[1];

          groupElements[groupName] = foldElements(elementsRaw, groupRouteIndices);
        });

        elements.push(groupElements);
      })();
    } else {
      // We intentionally modify elementsRaw, to make it easier to recursively
      // handle groups.
      elements.push(elementsRaw.shift());
    }
  }

  return elements;
}

exports.default = function () {
  var _ref3 = _asyncGenerator3.default.wrap( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref4) {
    var router = _ref4.router,
        match = _ref4.match,
        matchContext = _ref4.matchContext,
        resolver = _ref4.resolver;

    var routes, augmentedMatch, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator2, _step, _value, elements;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            routes = router.matcher.getRoutes(match);
            augmentedMatch = (0, _extends3.default)({}, match, {
              routes: routes,
              match: match, // For symmetry with withRouter.
              router: router, // Convenience access for route components.
              context: matchContext
            });

            if (routes) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return (0, _extends3.default)({}, augmentedMatch, { error: new _HttpError2.default(404) });

          case 5:
            return _context.abrupt('return');

          case 6:
            _context.prev = 6;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator2 = (0, _asyncIterator3.default)(resolver.resolveElements(augmentedMatch));

          case 12:
            _context.next = 14;
            return _asyncGenerator3.default.await(_iterator2.next());

          case 14:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 18;
            return _asyncGenerator3.default.await(_step.value);

          case 18:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 26;
              break;
            }

            elements = _value;
            _context.next = 23;
            return (0, _extends3.default)({}, augmentedMatch, {
              elements: elements && foldElements([].concat(elements), match.routeIndices)
            });

          case 23:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 26:
            _context.next = 32;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context['catch'](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 32:
            _context.prev = 32;
            _context.prev = 33;

            if (!(!_iteratorNormalCompletion && _iterator2.return)) {
              _context.next = 37;
              break;
            }

            _context.next = 37;
            return _asyncGenerator3.default.await(_iterator2.return());

          case 37:
            _context.prev = 37;

            if (!_didIteratorError) {
              _context.next = 40;
              break;
            }

            throw _iteratorError;

          case 40:
            return _context.finish(37);

          case 41:
            return _context.finish(32);

          case 42:
            _context.next = 51;
            break;

          case 44:
            _context.prev = 44;
            _context.t1 = _context['catch'](6);

            if (!(_context.t1 instanceof _HttpError2.default)) {
              _context.next = 50;
              break;
            }

            _context.next = 49;
            return (0, _extends3.default)({}, augmentedMatch, { error: _context.t1 });

          case 49:
            return _context.abrupt('return');

          case 50:
            throw _context.t1;

          case 51:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 44], [10, 28, 32, 42], [33,, 37, 41]]);
  }));

  function resolveRenderArgs(_x) {
    return _ref3.apply(this, arguments);
  }

  return resolveRenderArgs;
}();

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/found/lib/withRouter.js":
/*!**********************************************!*\
  !*** ./node_modules/found/lib/withRouter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createWithRouter = __webpack_require__(/*! ./createWithRouter */ "./node_modules/found/lib/createWithRouter.js");

var _createWithRouter2 = _interopRequireDefault(_createWithRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createWithRouter2.default)({});
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
/*!**********************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/elementType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(/*! react-is */ "react-is");

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-relay-network-modern-ssr/lib/server.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-relay-network-modern-ssr/lib/server.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = __webpack_require__(/*! util */ "util");

var _RelayResponse = _interopRequireDefault(__webpack_require__(/*! react-relay-network-modern/lib/RelayResponse */ "./node_modules/react-relay-network-modern/lib/RelayResponse.js"));

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-relay-network-modern-ssr/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

class RelayServerSSR {
  constructor() {
    this.cache = new Map();
  }

  getMiddleware(args) {
    var _this = this;

    return next =>
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (r) {
        const req = r;
        const cacheKey = (0, _utils.getCacheKey)(req.operation.name, req.variables);

        const cachedResponse = _this.cache.get(cacheKey);

        if (cachedResponse) {
          _this.log('Get graphql query from cache', cacheKey);

          return _RelayResponse.default.createFromGraphQL((yield cachedResponse));
        }

        _this.log('Run graphql query', cacheKey);

        const graphqlArgs = (0, _utils.isFunction)(args) ? yield args() : args;
        const hasSchema = graphqlArgs && graphqlArgs.schema;
        const gqlResponse = new Promise(
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(function* (resolve, reject) {
            setTimeout(() => {
              reject(new Error('RelayRequest timeout'));
            }, 30000);
            let payload = null;

            if (hasSchema) {
              payload = yield (0, _graphql.graphql)(_objectSpread({}, graphqlArgs, {
                source: req.getQueryString(),
                variableValues: req.getVariables()
              }));
            } else {
              payload = yield next(r);
            }

            resolve(payload);
          });

          return function (_x2, _x3) {
            return _ref2.apply(this, arguments);
          };
        }());

        _this.cache.set(cacheKey, gqlResponse);

        const res = yield gqlResponse;

        _this.log('Recieved response for', cacheKey, (0, _util.inspect)(res, {
          colors: true,
          depth: 4
        }));

        return _RelayResponse.default.createFromGraphQL(res);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  getCache() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.log('Call getCache() method'); // ensure that async resolution in Routes completes


      yield new Promise(resolve => {
        setTimeout(resolve, 0);
      });
      const arr = [];
      const keys = Array.from(_this2.cache.keys());

      for (let i = 0; i < keys.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        const payload = yield _this2.cache.get(keys[i]);
        arr.push([keys[i], payload]);
      } // ensure that async resolution inside of QueryRenderer completes


      yield new Promise(resolve => {
        setTimeout(resolve, 0);
      });

      _this2.log('Recieved all payloads', arr.length);

      return arr;
    })();
  }

  log(...args) {
    if (this.debug) {
      console.log('[RelayServerSSR]:', ...args);
    }
  }

}

exports.default = RelayServerSSR;

/***/ }),

/***/ "./node_modules/react-relay-network-modern-ssr/lib/utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-relay-network-modern-ssr/lib/utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
exports.stableCopy = stableCopy;
exports.getCacheKey = getCacheKey;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable  */
function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function stableCopy(value) {
  if (!value || _typeof(value) !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(stableCopy);
  }

  var keys = Object.keys(value).sort();
  var stable = {};

  for (var i = 0; i < keys.length; i++) {
    stable[keys[i]] = stableCopy(value[keys[i]]);
  }

  return stable;
}

function getCacheKey(queryID, variables) {
  return JSON.stringify(stableCopy({
    queryID: queryID,
    variables: variables
  }));
}

/***/ }),

/***/ "./node_modules/react-relay-network-modern/lib/RelayResponse.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-relay-network-modern/lib/RelayResponse.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RelayResponse = function () {
  function RelayResponse() {
    _classCallCheck(this, RelayResponse);
  }

  _createClass(RelayResponse, [{
    key: 'processJsonData',
    value: function processJsonData(json) {
      this.json = json;
      if (json) {
        if (json.data) this.data = json.data;
        if (json.errors) this.errors = json.errors;
      }
    }
  }, {
    key: 'clone',
    value: function clone() {
      // $FlowFixMe
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return ['Response:', '   Url: ' + (this.url || ''), '   Status code: ' + (this.status || ''), '   Status text: ' + (this.statusText || ''), '   Response headers: ' + JSON.stringify(this.headers), '   Response body: ' + JSON.stringify(this.json)].join('\n');
    }
  }], [{
    key: 'createFromFetch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
        var r;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                r = new RelayResponse();

                r._res = res;
                r.ok = res.ok;
                r.status = res.status;
                r.url = res.url;
                r.headers = res.headers;

                if (!(res.status < 200 || res.status >= 300)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 9;
                return res.text();

              case 9:
                r.text = _context.sent;
                _context.next = 17;
                break;

              case 12:
                _context.t0 = r;
                _context.next = 15;
                return res.json();

              case 15:
                _context.t1 = _context.sent;

                _context.t0.processJsonData.call(_context.t0, _context.t1);

              case 17:
                return _context.abrupt('return', r);

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createFromFetch(_x) {
        return _ref.apply(this, arguments);
      }

      return createFromFetch;
    }() // response from low-level method, eg. fetch

  }, {
    key: 'createFromGraphQL',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
        var r;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                r = new RelayResponse();

                r._res = res;
                r.ok = true;
                r.status = 200;
                r.data = res.data;
                r.errors = res.errors;

                return _context2.abrupt('return', r);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createFromGraphQL(_x2) {
        return _ref2.apply(this, arguments);
      }

      return createFromGraphQL;
    }()
  }]);

  return RelayResponse;
}();

exports.default = RelayResponse;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/report-chunks.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/report-chunks.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$":
/*!***************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById sync ^.*$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index.js": "./node_modules/react-universal-component/dist/requireById/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$";

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireById/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-universal-component/dist/utils.js");

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__("./node_modules/react-universal-component/dist/requireById sync recursive ^.*$")('' + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireUniversalModule.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireUniversalModule.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = requireUniversalModule;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-universal-component/dist/utils.js");

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;
          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }
    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),

/***/ "./node_modules/react-universal-component/dist/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(/*! ./requireById */ "./node_modules/react-universal-component/dist/requireById/index.js");

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isTest = exports.isTest = "development" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (true) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, { error: error }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),

/***/ "./node_modules/react-universal-component/server.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-universal-component/server.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  flushModuleIds: __webpack_require__(/*! ./dist/requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js").flushModuleIds,
  flushChunkNames: __webpack_require__(/*! ./dist/requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js").flushChunkNames,
  clearChunks: __webpack_require__(/*! ./dist/requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js").clearChunks,
  ReportChunks: __webpack_require__(/*! ./dist/report-chunks */ "./node_modules/react-universal-component/dist/report-chunks.js").default
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/webpack-flush-chunks/dist/createApiWithCss.js":
/*!*******************************************************!*\
  !*** (webpack)-flush-chunks/dist/createApiWithCss.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssHash = exports.stylesAsString = exports.isCss = exports.isJs = exports.getJsFileRegex = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEV = "development" === 'development';

/** CREATE API WITH CSS */

exports.default = function (files, filesOrderedForCss, stats, outputPath) {
  var publicPath = stats.publicPath.replace(/\/$/, '');
  var regex = getJsFileRegex(files);
  var scripts = files.filter(function (file) {
    return isJs(regex, file);
  });
  var stylesheets = filesOrderedForCss.filter(isCss);
  var cssHashRaw = createCssHash(stats);

  var api = {
    // 1) Use as React components using ReactDOM.renderToStaticMarkup, eg:
    // <html><Styles /><Js /><html>
    Js: function Js() {
      return _react2.default.createElement(
        'span',
        null,
        scripts.map(function (file, key) {
          return _react2.default.createElement('script', {
            type: 'text/javascript',
            src: publicPath + '/' + file,
            key: key,
            defer: true
          });
        })
      );
    },
    Styles: function Styles() {
      return _react2.default.createElement(
        'span',
        null,
        stylesheets.map(function (file, key) {
          return _react2.default.createElement('link', { rel: 'stylesheet', href: publicPath + '/' + file, key: key });
        })
      );
    },

    // 2) Use as string, eg: `${styles} ${js}`
    js: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          scripts.map(function (file) {
            return '<script type=\'text/javascript\' src=\'' + publicPath + '/' + file + '\' defer=\'defer\'></script>';
          }).join('\n')
        );
      }
    },
    styles: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          stylesheets.map(function (file) {
            return '<link rel=\'stylesheet\' href=\'' + publicPath + '/' + file + '\' />';
          }).join('\n')
        );
      }
    },

    // 3) Embed the raw css without needing to load another file.
    // Use as a React component (<Css />) or a string (`${css}`):
    // NOTE: during development, HMR requires stylesheets.
    Css: function Css() {
      return DEV ? api.Styles() : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'style',
          null,
          stylesAsString(stylesheets, outputPath)
        )
      );
    },
    css: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          DEV ? api.styles.toString() : '<style>' + stylesAsString(stylesheets, outputPath) + '</style>'
        );
      }
    },

    // 4) names of files without publicPath or outputPath prefixed:
    scripts: scripts,
    stylesheets: stylesheets,

    // 5) for completeness provide the paths even though they were inputs:
    publicPath: publicPath,
    outputPath: outputPath,

    // 6) special goodness for dual-file import()
    cssHashRaw: cssHashRaw,
    CssHash: function CssHash() {
      return _react2.default.createElement('script', {
        type: 'text/javascript',
        dangerouslySetInnerHTML: {
          __html: 'window.__CSS_CHUNKS__ = ' + JSON.stringify(cssHashRaw)
        }
      });
    },
    cssHash: {
      toString: function toString() {
        return '<script type=\'text/javascript\'>window.__CSS_CHUNKS__= ' + JSON.stringify(cssHashRaw) + '</script>';
      }
    }
  };

  return api;
};

/** HELPERS */

var getJsFileRegex = exports.getJsFileRegex = function getJsFileRegex(files) {
  var isUsingExtractCssChunk = !!files.find(function (file) {
    return file.includes('no_css');
  });
  return isUsingExtractCssChunk ? /\.no_css\.js$/ : /\.js$/;
};

var isJs = exports.isJs = function isJs(regex, file) {
  return regex.test(file) && !/\.hot-update\.js$/.test(file);
};

var isCss = exports.isCss = function isCss(file) {
  return (/\.css$/.test(file)
  );
};

var stylesAsString = exports.stylesAsString = function stylesAsString(stylesheets, outputPath) {
  if (!outputPath) {
    throw new Error('No `outputPath` was provided as an option to `flushChunks`.\n      Please provide one so stylesheets can be read from the\n      file system since you\'re embedding the css as a string.');
  }

  var path = outputPath.replace(/\/$/, '');

  return stylesheets.map(function (file) {
    var filePath = path + '/' + file;
    return _fs2.default.readFileSync(filePath, 'utf8');
  }).join('\n').replace(/\/\*# sourceMappingURL=.+\*\//g, ''); // hide prod sourcemap err
};

var createCssHash = exports.createCssHash = function createCssHash(_ref) {
  var assetsByChunkName = _ref.assetsByChunkName,
      publicPath = _ref.publicPath;
  return Object.keys(assetsByChunkName).reduce(function (hash, name) {
    if (!assetsByChunkName[name] || !assetsByChunkName[name].find) return hash;
    var file = assetsByChunkName[name].find(function (file) {
      return file.endsWith('.css');
    });
    if (file) hash[name] = '' + publicPath + file;
    return hash;
  }, {});
};

/***/ }),

/***/ "./node_modules/webpack-flush-chunks/dist/flushChunks.js":
/*!**************************************************!*\
  !*** (webpack)-flush-chunks/dist/flushChunks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesFromChunks = exports.concatFilesAtKeys = exports.normalizePath = exports.isUnique = exports.createFilesByModuleId = exports.createFilesByPath = exports.flushWebpack = exports.flushBabel = exports.flush = exports.flushFilesPure = exports.flushFiles = exports.flushChunks = undefined;

var _createApiWithCss = __webpack_require__(/*! ./createApiWithCss */ "./node_modules/webpack-flush-chunks/dist/createApiWithCss.js");

var _createApiWithCss2 = _interopRequireDefault(_createApiWithCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filesByPath = null;
var filesByModuleId = null;

var IS_WEBPACK = typeof __webpack_require__ !== 'undefined';
var IS_TEST = "development" === 'test';
var defaults = {
  before: ['bootstrap', 'vendor'],
  after: ['main']
};

/** PUBLIC API */

exports.default = function (stats, opts) {
  return flushChunks(stats, IS_WEBPACK, opts);
};

var flushChunks = function flushChunks(stats, isWebpack) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var beforeEntries = opts.before || defaults.before;
  var ffc = function ffc(assets, isWebpack) {
    return filesFromChunks(assets, stats, isWebpack);
  };

  var jsBefore = ffc(beforeEntries);

  var files = opts.chunkNames ? ffc(opts.chunkNames, true) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var afterEntries = opts.after || defaults.after;
  var jsAfter = ffc(afterEntries);

  return (0, _createApiWithCss2.default)([].concat(_toConsumableArray(jsBefore), _toConsumableArray(files), _toConsumableArray(jsAfter)).filter(isUnique), [].concat(_toConsumableArray(jsBefore), _toConsumableArray(jsAfter.reverse()), _toConsumableArray(files)).filter(isUnique), stats, opts.outputPath);
};

var flushFiles = function flushFiles(stats, opts) {
  return flushFilesPure(stats, IS_WEBPACK, opts);
};

var flushFilesPure = function flushFilesPure(stats, isWebpack, opts) {
  var files = opts.chunkNames ? filesFromChunks(opts.chunkNames, stats) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var filter = opts.filter;

  if (filter) {
    if (typeof filter === 'function') {
      return files.filter(filter);
    }

    var regex = filter instanceof RegExp ? filter : new RegExp('.' + filter + '$');
    return files.filter(function (file) {
      return regex.test(file);
    });
  }

  return files;
};

/** BABEL VS. WEBPACK FLUSHING */

var flush = function flush(moduleIds, stats, rootDir, isWebpack) {
  return !isWebpack ? flushBabel(moduleIds, stats, rootDir).filter(isUnique) : flushWebpack(moduleIds, stats).filter(isUnique);
};

var flushBabel = function flushBabel(paths, stats, rootDir) {
  if (!rootDir) {
    throw new Error('No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks.');
  }

  var dir = rootDir; // satisfy flow

  filesByPath = filesByPath && !IS_TEST ? filesByPath // cached
  : createFilesByPath(stats);

  return concatFilesAtKeys(filesByPath, paths.map(function (p) {
    return normalizePath(p, dir);
  }));
};

var flushWebpack = function flushWebpack(ids, stats) {
  filesByModuleId = filesByModuleId && !IS_TEST ? filesByModuleId // cached
  : createFilesByModuleId(stats);

  return concatFilesAtKeys(filesByModuleId, ids);
};

/** CREATE FILES MAP */
var filesByChunk = function filesByChunk(chunks) {
  return chunks.reduce(function (chunks, chunk) {
    chunks[chunk.id] = chunk.files;
    return chunks;
  }, {});
};

var createFilesByPath = function createFilesByPath(_ref) {
  var chunks = _ref.chunks,
      modules = _ref.modules;

  var chunkedFiles = filesByChunk(chunks);
  return modules.reduce(function (filesByPath, module) {
    var filePath = module.name;
    var files = concatFilesAtKeys(chunkedFiles, module.chunks);

    filesByPath[filePath] = files.filter(isUnique);
    return filesByPath;
  }, {});
};

var createFilesByModuleId = function createFilesByModuleId(stats) {
  var filesByPath = createFilesByPath(stats);

  return stats.modules.reduce(function (filesByModuleId, module) {
    var filePath = module.name;
    var id = module.id;

    filesByModuleId[id] = filesByPath[filePath];
    return filesByModuleId;
  }, {});
};

var findChunkById = function findChunkById(_ref2) {
  var chunks = _ref2.chunks;

  if (!chunks) {
    return {};
  }
  return filesByChunk(chunks);
};

/** HELPERS */

var isUnique = function isUnique(v, i, self) {
  return self.indexOf(v) === i;
};

var normalizePath = function normalizePath(path, rootDir) {
  return path.replace(rootDir, '.').replace(/\.js$/, '') + '.js';
};

var concatFilesAtKeys = function concatFilesAtKeys(inputFilesMap, pathsOrIdsOrChunks) {
  return pathsOrIdsOrChunks.reduce(function (files, key) {
    return files.concat(inputFilesMap[key] || []);
  }, []);
};

var filesByChunkName = function filesByChunkName(name, namedChunkGroups) {
  if (!namedChunkGroups || !namedChunkGroups[name]) {
    return [name];
  }

  return namedChunkGroups[name].chunks;
};

var hasChunk = function hasChunk(entry, assets, checkChunkNames) {
  var result = !!(assets[entry] || assets[entry + '-']);
  if (!result && checkChunkNames) {
    console.warn('[FLUSH CHUNKS]: Unable to find ' + entry + ' in Webpack chunks. Please check usage of Babel plugin.');
  }

  return result;
};

var chunksToResolve = function chunksToResolve(_ref3) {
  var chunkNames = _ref3.chunkNames,
      stats = _ref3.stats,
      checkChunkNames = _ref3.checkChunkNames;
  return chunkNames.reduce(function (names, name) {
    if (!hasChunk(name, stats.assetsByChunkName, checkChunkNames)) {
      return names;
    }
    var files = filesByChunkName(name, stats.namedChunkGroups);
    names.push.apply(names, _toConsumableArray(files));
    return names;
  }, []).filter(isUnique);
};

var filesFromChunks = function filesFromChunks(chunkNames, stats, checkChunkNames) {
  var _ref4;

  var chunksByID = findChunkById(stats);

  var entryToFiles = function entryToFiles(entry) {
    if (typeof entry === 'number') {
      return chunksByID[entry];
    }
    return stats.assetsByChunkName[entry] || stats.assetsByChunkName[entry + '-'];
  };

  var chunksWithAssets = chunksToResolve({
    chunkNames: chunkNames,
    stats: stats,
    checkChunkNames: checkChunkNames
  });

  return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(chunksWithAssets.map(entryToFiles))).filter(function (chunk) {
    return chunk;
  });
};

/** EXPORTS FOR TESTS */

exports.flushChunks = flushChunks;
exports.flushFiles = flushFiles;
exports.flushFilesPure = flushFilesPure;
exports.flush = flush;
exports.flushBabel = flushBabel;
exports.flushWebpack = flushWebpack;
exports.createFilesByPath = createFilesByPath;
exports.createFilesByModuleId = createFilesByModuleId;
exports.isUnique = isUnique;
exports.normalizePath = normalizePath;
exports.concatFilesAtKeys = concatFilesAtKeys;
exports.filesFromChunks = filesFromChunks;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _server = __webpack_require__(/*! found/lib/server */ "./node_modules/found/lib/server/index.js");

var _foundRelay = __webpack_require__(/*! found-relay */ "found-relay");

var _server2 = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server3 = _interopRequireDefault(_server2);

var _server4 = __webpack_require__(/*! react-relay-network-modern-ssr/lib/server */ "./node_modules/react-relay-network-modern-ssr/lib/server.js");

var _server5 = _interopRequireDefault(_server4);

var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _createRelayEnvironment = __webpack_require__(/*! ../src/createRelayEnvironment */ "./src/createRelayEnvironment.js");

var _createRelayEnvironment2 = _interopRequireDefault(_createRelayEnvironment);

var _router = __webpack_require__(/*! ../src/router */ "./src/router.js");

var _server6 = __webpack_require__(/*! react-universal-component/server */ "./node_modules/react-universal-component/server.js");

var _webpackFlushChunks = __webpack_require__(/*! webpack-flush-chunks */ "./node_modules/webpack-flush-chunks/dist/flushChunks.js");

var _webpackFlushChunks2 = _interopRequireDefault(_webpackFlushChunks);

var _development = __webpack_require__(/*! ../config/development */ "./config/development.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _default = function _default(_ref) {
  var clientStats = _ref.clientStats;
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var chunkNames, _flushChunks, js, styles, cssHash, scripts, stylesheets, relaySsr, _ref3, redirect, status, element, relayData, Head, regexp, title, meta, script;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              chunkNames = (0, _server6.flushChunkNames)();
              _flushChunks = (0, _webpackFlushChunks2.default)(clientStats, { chunkNames: chunkNames }), js = _flushChunks.js, styles = _flushChunks.styles, cssHash = _flushChunks.cssHash, scripts = _flushChunks.scripts, stylesheets = _flushChunks.stylesheets;


              console.log('PATH', req.path);
              console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames);
              console.log('SCRIPTS SERVED', scripts);
              console.log('STYLESHEETS SERVED', stylesheets);
              console.log('STYLES SERVED', styles);
              console.log('JS SERVED', js);
              console.log('CSSHASH SERVED', cssHash);

              relaySsr = new _server5.default();
              _context.next = 12;
              return (0, _server.getFarceResult)({
                url: req.url,
                historyMiddlewares: _router.historyMiddlewares,
                routeConfig: _router.routeConfig,
                resolver: new _foundRelay.Resolver((0, _createRelayEnvironment2.default)(relaySsr, _development.GAPI_PATH)),
                render: _router.render
              });

            case 12:
              _ref3 = _context.sent;
              redirect = _ref3.redirect;
              status = _ref3.status;
              element = _ref3.element;

              if (!redirect) {
                _context.next = 19;
                break;
              }

              res.redirect(302, redirect.url);
              return _context.abrupt('return');

            case 19:
              _context.next = 21;
              return relaySsr.getCache();

            case 21:
              relayData = _context.sent;
              Head = _reactHelmet2.default.rewind();
              regexp = / data-react-helmet="true"/g;
              title = Head.title.toString().replace(regexp, '');
              meta = Head.meta.toString().replace(regexp, '');
              script = Head.script.toString().replace(regexp, '');

              res.status(status).send('\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      ' + title + '\n      ' + meta + '\n      ' + script + '\n      ' + styles + '\n\n      <link rel="stylesheet" href="/public/css/slick.css"></link>\n\n\n      <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900,900i" rel="stylesheet">\n\n      <script src="/public/javascript/jquery-1.11.1.min.js"></script>\n      <style>\n        button{\n          background-color: transparent;\n        }\n      </style>\n\n    </head>\n    <body>\n    <div id="root">' + _server3.default.renderToString(element) + '</div>\n    <script>\n    window.__RELAY_PAYLOADS__ = ' + (0, _serializeJavascript2.default)(JSON.stringify(relayData), {
                isJSON: true
              }) + ';\n    </script>\n    ' + cssHash + '\n    ' + js + '\n    </body>\n\n    </html>\n  ');

            case 28:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/server/render.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/__generated__/router_App_Query.graphql.js":
/*!*******************************************************!*\
  !*** ./src/__generated__/router_App_Query.graphql.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/**
 * 
 * @relayHash afb2eba875900eb40ae9cd3e98d3ffb9
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_store$ref = any;
export type router_App_QueryVariables = {||};
export type router_App_QueryResponse = {|
  +store: {|
    +$fragmentRefs: App_store$ref
  |}
|};
export type router_App_Query = {|
  variables: router_App_QueryVariables,
  response: router_App_QueryResponse,
|};
*/

/*
query router_App_Query {
  store {
    ...App_store
  }
}

fragment App_store on Store {
  idQuery
}
*/

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_App_Query",
  "id": null,
  "text": "query router_App_Query {\n  store {\n    ...App_store\n  }\n}\n\nfragment App_store on Store {\n  idQuery\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_App_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "store",
      "storageKey": null,
      "args": null,
      "concreteType": "Store",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "App_store",
        "args": null
      }]
    }]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_App_Query",
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "store",
      "storageKey": null,
      "args": null,
      "concreteType": "Store",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "idQuery",
        "args": null,
        "storageKey": null
      }]
    }]
  }
};
// prettier-ignore
node /*: any*/.hash = '7a6db36864f7d0fd6ad67fea4fe65d39';
module.exports = node;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(node, "node", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/__generated__/router_App_Query.graphql.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/CategoryWidget.js":
/*!*************************************************!*\
  !*** ./src/components/common/CategoryWidget.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryWidget = function (_React$Component) {
  _inherits(CategoryWidget, _React$Component);

  function CategoryWidget() {
    var _temp, _this, _ret;

    _classCallCheck(this, CategoryWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      isHover: false
    }, _this.handleMouseHover = function () {
      console.log('in handle');
      _this.setState(_this.toggleHoverState);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CategoryWidget.prototype.toggleHoverState = function toggleHoverState(state) {
    return { isHover: !state.isHover };
  };

  CategoryWidget.prototype.render = function render() {
    var _props = this.props,
        imagesrc = _props.imagesrc,
        heading = _props.heading,
        hoverlistarray = _props.hoverlistarray;

    return _react2.default.createElement(
      'div',
      { className: 'categoty-box' },
      _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('cb-inner', this.state.isHover ? 'open' : ''),
          onMouseEnter: this.handleMouseHover,
          onMouseLeave: this.handleMouseHover
        },
        _react2.default.createElement('img', { src: imagesrc, alt: 'categoryimage' }),
        _react2.default.createElement(
          'p',
          null,
          heading
        ),
        _react2.default.createElement(
          'ul',
          null,
          hoverlistarray.map(function (name) {
            return _react2.default.createElement(
              'li',
              { key: name },
              _react2.default.createElement(
                _Link2.default,
                { to: '/' },
                name
              )
            );
          })
        )
      )
    );
  };

  // @ts-ignore
  CategoryWidget.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return CategoryWidget;
}(_react2.default.Component);

CategoryWidget.propTypes = {
  imagesrc: _propTypes2.default.string.isRequired,
  heading: _propTypes2.default.string.isRequired,
  hoverlistarray: _propTypes2.default.instanceOf(Array).isRequired
};

var _default = CategoryWidget;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CategoryWidget, 'CategoryWidget', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/CategoryWidget.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/CategoryWidget.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/ClickAwayListener.js":
/*!****************************************************!*\
  !*** ./src/components/common/ClickAwayListener.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component that alerts if you click outside of it
 */
var ClickAwayListener = function (_Component) {
  _inherits(ClickAwayListener, _Component);

  function ClickAwayListener(props) {
    _classCallCheck(this, ClickAwayListener);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.setWrapperRef = _this.setWrapperRef.bind(_this);
    _this.onClickAway = _this.onClickAway.bind(_this);
    return _this;
  }

  ClickAwayListener.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('mousedown', this.onClickAway);
  };

  ClickAwayListener.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClickAway);
  };

  /**
   * Alert if clicked on outside of element
   */


  ClickAwayListener.prototype.onClickAway = function onClickAway(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickAway();
    }
  };

  /**
   * Set the wrapper ref
   */


  ClickAwayListener.prototype.setWrapperRef = function setWrapperRef(node) {
    this.wrapperRef = node;
  };

  ClickAwayListener.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { ref: this.setWrapperRef },
      this.props.children
    );
  };

  // @ts-ignore
  ClickAwayListener.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ClickAwayListener;
}(_react.Component);

var _default = ClickAwayListener;
exports.default = _default;


ClickAwayListener.propTypes = {
  children: _propTypes2.default.element.isRequired
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClickAwayListener, 'ClickAwayListener', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/ClickAwayListener.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/ClickAwayListener.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/FitmentSearchInput.js":
/*!*****************************************************!*\
  !*** ./src/components/common/FitmentSearchInput.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var FitmentSearchInput = function FitmentSearchInput(_ref) {
  var value = _ref.value,
      buttonlabel = _ref.buttonlabel,
      placeholder = _ref.placeholder;

  return _react2.default.createElement(
    'div',
    { className: 'input-wrapper' },
    _react2.default.createElement(
      'div',
      { className: 'fitment-input' },
      _react2.default.createElement('input', { type: 'text', placeholder: placeholder, value: value })
    ),
    _react2.default.createElement(
      'div',
      { className: 'fitment-input-button-container' },
      _react2.default.createElement(
        'button',
        { className: 'button-fit-search button-vin-search' },
        buttonlabel
      )
    )
  );
};

FitmentSearchInput.propTypes = {
  value: _propTypes2.default.string.isRequired,
  buttonlabel: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string.isRequired
};

var _default = FitmentSearchInput;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FitmentSearchInput, 'FitmentSearchInput', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/FitmentSearchInput.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/FitmentSearchInput.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/ProductCard.js":
/*!**********************************************!*\
  !*** ./src/components/common/ProductCard.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductCard = function (_React$Component) {
  _inherits(ProductCard, _React$Component);

  function ProductCard() {
    var _temp, _this, _ret;

    _classCallCheck(this, ProductCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      isHover: false
    }, _this.handleMouseHover = function () {
      console.log('in handle');
      _this.setState(_this.toggleHoverState);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ProductCard.prototype.toggleHoverState = function toggleHoverState(state) {
    return { isHover: !state.isHover };
  };

  ProductCard.prototype.render = function render() {
    var _props = this.props,
        imagesrc = _props.imagesrc,
        title = _props.title,
        price = _props.price,
        linkvalue = _props.linkvalue,
        className = _props.className;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('product-card', className) },
      _react2.default.createElement(
        'div',
        { className: 'product-img' },
        _react2.default.createElement('img', { src: imagesrc, alt: 'product' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'product-body' },
        _react2.default.createElement(
          'h3',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          price
        ),
        _react2.default.createElement(
          _Link2.default,
          { to: '/' },
          linkvalue
        )
      )
    );
  };

  // @ts-ignore
  ProductCard.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ProductCard;
}(_react2.default.Component);

ProductCard.propTypes = {
  imagesrc: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  price: _propTypes2.default.string.isRequired,
  linkvalue: _propTypes2.default.string,
  className: _propTypes2.default.string
};

var _default = ProductCard;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductCard, 'ProductCard', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/ProductCard.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/ProductCard.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/SliderWidget.js":
/*!***********************************************!*\
  !*** ./src/components/common/SliderWidget.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ../pages/home/Widgets/widget.scss */ "./src/components/pages/home/Widgets/widget.scss");

var _ProductCard = __webpack_require__(/*! ./ProductCard */ "./src/components/common/ProductCard.js");

var _ProductCard2 = _interopRequireDefault(_ProductCard);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSlick = __webpack_require__(/*! react-slick */ "react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var SliderWidget = function SliderWidget(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  var Productdata = props.Productdata,
      label = props.label;

  return _react2.default.createElement(
    'div',
    { className: 'widget' },
    _react2.default.createElement(
      'div',
      { className: 'widget-header' },
      label
    ),
    _react2.default.createElement(
      'div',
      { className: 'widget-body' },
      _react2.default.createElement(
        _reactSlick2.default,
        settings,
        Productdata.map(function (value) {
          return _react2.default.createElement(_ProductCard2.default, {
            imagesrc: value.imagesrc,
            title: value.title,
            price: value.price,
            linkvalue: value.linkvalue
          });
        })
      )
    )
  );
};
SliderWidget.propTypes = {
  label: _propTypes2.default.string.isRequired,
  Productdata: _propTypes2.default.instanceOf(Array).isRequired
};

var _default = SliderWidget;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SliderWidget, 'SliderWidget', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/SliderWidget.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/SliderWidget.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/Tabs/Tab.js":
/*!*******************************************!*\
  !*** ./src/components/common/Tabs/Tab.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onClick = function () {
      var _this$props = _this.props,
          label = _this$props.label,
          onClick = _this$props.onClick;

      onClick(label);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tab.prototype.render = function render() {
    var onClick = this.onClick,
        _props = this.props,
        activeTab = _props.activeTab,
        label = _props.label;
    var classvalue = this.props.classvalue;

    var className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return _react2.default.createElement(
      'li',
      {
        className: (0, _classnames2.default)(className, classvalue),
        onClick: onClick,
        role: 'presentation'
      },
      label
    );
  };

  // @ts-ignore
  Tab.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Tab;
}(_react.Component);

Tab.propTypes = {
  activeTab: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  classvalue: _propTypes2.default.string
};
var _default = Tab;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tab, 'Tab', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/Tabs/Tab.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/Tabs/Tab.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/Tabs/Tabs.scss":
/*!**********************************************!*\
  !*** ./src/components/common/Tabs/Tabs.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/common/Tabs/index.js":
/*!*********************************************!*\
  !*** ./src/components/common/Tabs/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tab = __webpack_require__(/*! ./Tab */ "./src/components/common/Tabs/Tab.js");

var _Tab2 = _interopRequireDefault(_Tab);

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./Tabs.scss */ "./src/components/common/Tabs/Tabs.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onClickTabItem = function (tab) {
      _this.setState({ activeTab: tab });
    };

    _this.state = {
      activeTab: _this.props.children[0].props.label
    };
    return _this;
  }

  Tabs.prototype.render = function render() {
    var onClickTabItem = this.onClickTabItem,
        children = this.props.children,
        activeTab = this.state.activeTab;
    var className = this.props.className;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('tabs-wrap', className) },
      _react2.default.createElement(
        'ol',
        { className: 'tab-list' },
        children.map(function (child) {
          var _child$props = child.props,
              label = _child$props.label,
              classvalue = _child$props.classvalue;


          return _react2.default.createElement(_Tab2.default, {
            activeTab: activeTab,
            key: label,
            label: label,
            onClick: onClickTabItem,
            classvalue: classvalue
          });
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'tab-content' },
        children.map(function (child) {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })
      )
    );
  };

  // @ts-ignore
  Tabs.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes2.default.instanceOf(Array).isRequired,
  className: _propTypes2.default.string
};
var _default = Tabs;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tabs, 'Tabs', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/Tabs/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/Tabs/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/WidgetHeading.js":
/*!************************************************!*\
  !*** ./src/components/common/WidgetHeading.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var WidgetHeading = function WidgetHeading(_ref) {
  var label = _ref.label;
  return _react2.default.createElement(
    'div',
    { className: 'widget-header' },
    label
  );
};

WidgetHeading.propTypes = {
  label: _propTypes2.default.string.isRequired
};

var _default = WidgetHeading;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WidgetHeading, 'WidgetHeading', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/WidgetHeading.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/WidgetHeading.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/fitmentselectinput.js":
/*!*****************************************************!*\
  !*** ./src/components/common/fitmentselectinput.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ClickAwayListener = __webpack_require__(/*! ./ClickAwayListener */ "./src/components/common/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FitmentInput = function (_React$Component) {
  _inherits(FitmentInput, _React$Component);

  function FitmentInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, FitmentInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false,
      metaopen: false,
      value: _this.props.value
    }, _this.handleToggle = function () {
      console.log('in handle');
      _this.setState(function (state) {
        return { open: !state.open };
      });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _this.choosetext = function (event) {
      console.log('this', event.target.innerHTML);
      _this.props.onChange();
      _this.setState({
        open: false,
        value: event.target.innerHTML,
        metaopen: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FitmentInput.prototype.render = function render() {
    var _props = this.props,
        label = _props.label,
        optionsArray = _props.optionsArray;
    var _state = this.state,
        open = _state.open,
        value = _state.value,
        metaopen = _state.metaopen;

    var self = this;
    return _react2.default.createElement(
      'div',
      { className: 'fitment-input' },
      _react2.default.createElement(
        'div',
        {
          className: 'select-text',
          onClick: this.handleToggle,
          role: 'presentation'
        },
        _react2.default.createElement(
          'span',
          {
            className: 'meta',
            style: { display: metaopen ? 'block' : 'none' }
          },
          label
        ),
        _react2.default.createElement(
          'span',
          null,
          value
        ),
        _react2.default.createElement(
          'span',
          { className: 'right-arrow' },
          '\u25BE'
        )
      ),
      _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClose },
        _react2.default.createElement(
          'div',
          {
            className: 'dropdown',
            style: { display: open ? 'block' : 'none' }
          },
          _react2.default.createElement(
            'ul',
            null,
            optionsArray.map(function (name) {
              return _react2.default.createElement(
                'li',
                { key: name, onClick: self.choosetext, role: 'presentation' },
                name
              );
            })
          )
        )
      )
    );
  };

  // @ts-ignore
  FitmentInput.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return FitmentInput;
}(_react2.default.Component);

FitmentInput.propTypes = {
  value: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  optionsArray: _propTypes2.default.instanceOf(Array).isRequired,
  onChange: _propTypes2.default.func
};

var _default = FitmentInput;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FitmentInput, 'FitmentInput', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/fitmentselectinput.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/fitmentselectinput.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/footer/footer.scss":
/*!**************************************************!*\
  !*** ./src/components/common/footer/footer.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/common/footer/index.js":
/*!***********************************************!*\
  !*** ./src/components/common/footer/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

__webpack_require__(/*! ./footer.scss */ "./src/components/common/footer/footer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Footer = function Footer() {
  return _react2.default.createElement(
    'footer',
    null,
    _react2.default.createElement(
      'div',
      { className: 'footer-container' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-auto' },
            _react2.default.createElement(
              'h4',
              null,
              'Information'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/' },
                  'About Us '
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/' },
                  'FAQs'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/' },
                  'Contact Us'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-auto' },
            _react2.default.createElement(
              'h4',
              null,
              'SERVICES'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/' },
                  'Terms & Conditions'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/' },
                  'Shipping Rates Policies'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/' },
                  'Returns and Refunds Policies'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-auto' },
            _react2.default.createElement(
              'h4',
              null,
              'Secured with'
            ),
            _react2.default.createElement('img', { src: '/public/images/footer-security.png', alt: 'security' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-auto' },
            _react2.default.createElement(
              'h4',
              null,
              'Payment Acceptance'
            ),
            _react2.default.createElement('img', { src: '/public/images/footer-payment.png', alt: 'payment' })
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-bottom' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-auto left' },
            'Copyright \xA9 2009-2018 The Auto Parts Shop. All Rights Reserved.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-auto right' },
            _react2.default.createElement(
              _Link2.default,
              { to: '/' },
              'Privacy Policies'
            ),
            ' | ',
            _react2.default.createElement(
              _Link2.default,
              { to: '/' },
              'Sitemaps'
            )
          )
        )
      )
    )
  );
};

var _default = Footer;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, 'Footer', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/footer/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/footer/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/category/index.js":
/*!********************************************************!*\
  !*** ./src/components/common/header/category/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ClickAwayListener = __webpack_require__(/*! ../../ClickAwayListener */ "./src/components/common/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopByCategory = function (_React$Component) {
  _inherits(ShopByCategory, _React$Component);

  function ShopByCategory() {
    var _temp, _this, _ret;

    _classCallCheck(this, ShopByCategory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleToggle = function () {
      console.log('in handle');
      _this.setState(function (state) {
        return { open: !state.open };
      });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ShopByCategory.prototype.render = function render() {
    var open = this.state.open;


    return _react2.default.createElement(
      'div',
      { className: 'category' },
      _react2.default.createElement(
        'div',
        { className: 'dropdown' },
        _react2.default.createElement(
          'button',
          { className: 'button-outlined', onClick: this.handleToggle },
          _react2.default.createElement(
            'span',
            { className: 'label_wrapper' },
            _react2.default.createElement(
              'span',
              { className: 'lbl1' },
              'Shop by'
            ),
            _react2.default.createElement(
              'span',
              { className: 'lbl2' },
              'Category'
            )
          )
        ),
        _react2.default.createElement(
          _ClickAwayListener2.default,
          { onClickAway: this.handleClose },
          _react2.default.createElement(
            'div',
            {
              className: 'dropdown-menu',
              style: { display: open ? 'flex' : 'none' }
            },
            _react2.default.createElement(
              'div',
              { className: 'category-left' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/' },
                    'Accessories and Fluids'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/' },
                    'Accessories and Fluids'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/' },
                    'Accessories and Fluids'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/' },
                    'Accessories and Fluids'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/' },
                    'Accessories and Fluids'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/' },
                    'Accessories and Fluids'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'category-center' },
              _react2.default.createElement(
                'h2',
                null,
                'Accessories and Fluids'
              ),
              _react2.default.createElement(
                'div',
                { className: 'sub-cat-list-container' },
                _react2.default.createElement(
                  'ul',
                  { className: 'sub-cat-list' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _Link2.default,
                      { to: '/' },
                      'Functional Fluid, Lubricant, Grease (including Additives)'
                    )
                  )
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'sub-cat-list' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _Link2.default,
                      { to: '/' },
                      'Crankcase Ventilation System'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'category-right' },
              _react2.default.createElement(
                _Link2.default,
                { to: '/', className: 'product-img' },
                _react2.default.createElement('img', { src: '/public/images/sub-cat.png', alt: '' })
              ),
              _react2.default.createElement(
                _Link2.default,
                { to: '/', className: 'product-img' },
                _react2.default.createElement('img', { src: '/public/images/sub-cat.png', alt: '' })
              )
            )
          )
        )
      )
    );
  };

  // @ts-ignore
  ShopByCategory.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ShopByCategory;
}(_react2.default.Component);

var _default = ShopByCategory;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ShopByCategory, 'ShopByCategory', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/category/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/category/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/header-dropdown.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/header/header-dropdown.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/common/header/header.scss":
/*!**************************************************!*\
  !*** ./src/components/common/header/header.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/common/header/index.js":
/*!***********************************************!*\
  !*** ./src/components/common/header/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _logo = __webpack_require__(/*! ./logo */ "./src/components/common/header/logo.js");

var _logo2 = _interopRequireDefault(_logo);

var _category = __webpack_require__(/*! ./category */ "./src/components/common/header/category/index.js");

var _category2 = _interopRequireDefault(_category);

var _searchbar = __webpack_require__(/*! ./searchbar/ */ "./src/components/common/header/searchbar/index.js");

var _searchbar2 = _interopRequireDefault(_searchbar);

var _navigation = __webpack_require__(/*! ./navigation */ "./src/components/common/header/navigation/index.js");

var _navigation2 = _interopRequireDefault(_navigation);

__webpack_require__(/*! ./header.scss */ "./src/components/common/header/header.scss");

__webpack_require__(/*! ./header-dropdown.scss */ "./src/components/common/header/header-dropdown.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'head-wrapper' },
    _react2.default.createElement(
      'header',
      { className: 'header' },
      _react2.default.createElement(_logo2.default, null),
      _react2.default.createElement(_category2.default, null),
      _react2.default.createElement(_searchbar2.default, null),
      _react2.default.createElement(_navigation2.default, null)
    )
  );
};

var _default = Header;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/logo.js":
/*!**********************************************!*\
  !*** ./src/components/common/header/logo.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Logo = function Logo() {
  return _react2.default.createElement(
    'div',
    { className: 'logo' },
    _react2.default.createElement(
      _Link2.default,
      { to: '/' },
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', viewBox: '0 0 1004.91 260.67' },
          _react2.default.createElement(
            'title',
            null,
            'theautopartsshop.com'
          ),
          _react2.default.createElement('path', {
            fill: '#ff0',
            d: 'M231.67,154.11',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#ff0',
            d: 'M259.25,150.17',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#d9433e',
            d: 'M327.3,76.1h86.6V87.9H376.66V191.22H364.95V87.9H327.3Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#d9433e',
            d: 'M431.62,76h12.2v33.85q8.8-5.33,15.59-5.33h31.1q10.58,0,20.92,10.66,6.87,7.35,6.87,23.59v52.43H506.5V137.58q0-16.07-12.12-20.12l-5.33-.73H461.67q-13.81,0-17.53,12.93l-.32,2.67v58.89h-12.2Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#d9433e',
            d: 'M564.53,104.46h28.19q20.2,0,28.2,21.65l.73,5.74v3.39q0,14.46-16.32,24.4A35.87,35.87,0,0,1,592,162.3H547.08V163q0,11.47,13.33,15.59l7.59.81h20.92q15.83,0,20.12-11.39a34.07,34.07,0,0,0,1.54-6.14h11.07q0,20.76-22.46,28.6l-6.46.73h-24.4q-24.16,0-31.91-19.39a43.41,43.41,0,0,1-1.53-10.66V134.11q0-19.63,19-27.79A26.84,26.84,0,0,1,564.53,104.46Zm-17.85,33.85v12.2h41.12q17,0,20.52-10.34a15.89,15.89,0,0,0,1.54-7.19q0-7-6.06-12.52-4.2-4.2-15.27-4.2H568.73q-12.52,0-16.72,4.93Q546.68,125.38,546.68,138.31Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#d9433e',
            d: 'M983.65,273.4a6.78,6.78,0,0,1-2.56,5.6,11.11,11.11,0,0,1-7.12,2,16.71,16.71,0,0,1-7.43-1.58V274.3A30.63,30.63,0,0,0,971,276a13.3,13.3,0,0,0,3.37.49,4.79,4.79,0,0,0,2.81-.7,2.4,2.4,0,0,0,1-2.08,2.3,2.3,0,0,0-.43-1.37,4.81,4.81,0,0,0-1.27-1.16,32.89,32.89,0,0,0-3.4-1.78,16.1,16.1,0,0,1-3.61-2.17,8.15,8.15,0,0,1-1.92-2.42,6.91,6.91,0,0,1-.72-3.23,6.78,6.78,0,0,1,2.36-5.47,9.8,9.8,0,0,1,6.53-2,15.4,15.4,0,0,1,3.9.48,26.89,26.89,0,0,1,3.89,1.36l-1.79,4.33a26.36,26.36,0,0,0-3.47-1.2,11.18,11.18,0,0,0-2.7-.34,3.57,3.57,0,0,0-2.42.74,2.42,2.42,0,0,0-.84,1.92,2.38,2.38,0,0,0,.34,1.28,3.74,3.74,0,0,0,1.09,1.06,33.55,33.55,0,0,0,3.53,1.84,14,14,0,0,1,5,3.53A6.89,6.89,0,0,1,983.65,273.4Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#d9433e',
            d: 'M1006.43,280.69H1001V269q0-4.34-3.23-4.34a3.67,3.67,0,0,0-3.32,1.56,9.53,9.53,0,0,0-1,5.06v9.44H987.9V252.75h5.48v5.69q0,.67-.13,3.12l-.12,1.62h.29a6.34,6.34,0,0,1,5.82-2.94,7.11,7.11,0,0,1,5.37,1.9,7.56,7.56,0,0,1,1.83,5.46Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#d9433e',
            d: 'M1030.23,270.62q0,4.9-2.58,7.67a9.37,9.37,0,0,1-7.2,2.76,10.07,10.07,0,0,1-5.1-1.27,8.41,8.41,0,0,1-3.39-3.64,12.21,12.21,0,0,1-1.19-5.53q0-4.92,2.57-7.65a9.43,9.43,0,0,1,7.22-2.73,10.13,10.13,0,0,1,5.1,1.26,8.39,8.39,0,0,1,3.39,3.61A12.1,12.1,0,0,1,1030.23,270.62Zm-13.88,0a8.42,8.42,0,0,0,1,4.51,3.5,3.5,0,0,0,3.19,1.53,3.44,3.44,0,0,0,3.15-1.52,8.54,8.54,0,0,0,1-4.51,8.29,8.29,0,0,0-1-4.47,4.12,4.12,0,0,0-6.34,0A8.28,8.28,0,0,0,1016.35,270.62Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#d9433e',
            d: 'M1045.7,281a6.65,6.65,0,0,1-5.55-2.57h-.29q.29,2.51.29,2.91v8.13h-5.48v-28.9h4.45l.77,2.6h.25a6.33,6.33,0,0,1,5.69-3,6.51,6.51,0,0,1,5.57,2.75q2,2.75,2,7.63a15.07,15.07,0,0,1-.94,5.58,7.83,7.83,0,0,1-2.68,3.61A6.88,6.88,0,0,1,1045.7,281Zm-1.62-16.43a3.46,3.46,0,0,0-3,1.25,7.16,7.16,0,0,0-1,4.12v.59a8.45,8.45,0,0,0,1,4.63,3.43,3.43,0,0,0,3,1.4q3.68,0,3.68-6.07a8.67,8.67,0,0,0-.91-4.44A3.09,3.09,0,0,0,1044.09,264.62Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M363.38,284.2h-16.7V251.25a79.65,79.65,0,0,1,1.21-14.73A20.87,20.87,0,0,1,353,226q3.88-4.2,11.12-6.34t19.2-2.14a168.44,168.44,0,0,1,20.76,1.21q9.69,1.21,17.19,1.92V284.2H404.64V258.48H363.47Zm41.25-51.52q-4.82-.36-10.22-.58t-11.3-.22a39.21,39.21,0,0,0-9.46.94,14.28,14.28,0,0,0-5.8,2.77,10.42,10.42,0,0,0-3.08,4.38,21.9,21.9,0,0,0-1.21,5.76h41.07Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M459.73,285.27a67,67,0,0,1-11.92-.94,19.65,19.65,0,0,1-8.57-3.57,16,16,0,0,1-5.18-7.28,34.9,34.9,0,0,1-1.74-12.05V238.57H449v22.86a14,14,0,0,0,.63,4.55,6.31,6.31,0,0,0,1.92,2.86,7.71,7.71,0,0,0,3.3,1.52,22.7,22.7,0,0,0,4.87.45q1.69,0,3.13,0t3-.18l3.39-.27q1.83-.13,4.42-.4V238.57h16.61v43.57q-3.39.45-6.79,1t-7.1,1q-3.71.45-7.77.76T459.73,285.27Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M533.48,250.36H518.93V284.2h-16.7V222.59l16.7-4.29v19.29h14.55Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M576.87,237.59a117.41,117.41,0,0,1,16.21.94,26.66,26.66,0,0,1,10.67,3.57,14.69,14.69,0,0,1,5.89,7.28,41.59,41.59,0,0,1,0,24.11,14.68,14.68,0,0,1-5.89,7.28,26.63,26.63,0,0,1-10.67,3.57,140.93,140.93,0,0,1-32.46,0A26.3,26.3,0,0,1,550,280.76a14.73,14.73,0,0,1-5.85-7.28,41.58,41.58,0,0,1,0-24.11A14.75,14.75,0,0,1,550,242.1a26.33,26.33,0,0,1,10.67-3.57A118.41,118.41,0,0,1,576.87,237.59Zm0,33.21q5.09,0,8.39-.31a14.21,14.21,0,0,0,5.18-1.29,5.5,5.5,0,0,0,2.63-2.81,13.24,13.24,0,0,0,.76-5,13.61,13.61,0,0,0-.76-5,5.48,5.48,0,0,0-2.63-2.86,14.27,14.27,0,0,0-5.18-1.29q-3.3-.31-8.39-.31t-8.39.31a14.7,14.7,0,0,0-5.22,1.29,5.24,5.24,0,0,0-2.63,2.86,14.34,14.34,0,0,0-.71,5,14,14,0,0,0,.71,5,5.26,5.26,0,0,0,2.63,2.81,14.64,14.64,0,0,0,5.22,1.29Q571.78,270.81,576.87,270.81Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M672.05,218.21a57.24,57.24,0,0,1,13.71,1.38,23.44,23.44,0,0,1,8.79,4,14.2,14.2,0,0,1,4.69,6.34,24.65,24.65,0,0,1,1.38,8.57,28.61,28.61,0,0,1-1.29,9.11,13,13,0,0,1-4.51,6.29,22,22,0,0,1-8.75,3.66,67.6,67.6,0,0,1-14,1.21H638.66V284.2H622.05v-66h50Zm0,27.77a43.81,43.81,0,0,0,5.67-.31,11.57,11.57,0,0,0,3.88-1.12,5,5,0,0,0,2.23-2.28,8.72,8.72,0,0,0,.71-3.79,8.11,8.11,0,0,0-.8-3.88,5.48,5.48,0,0,0-2.37-2.28,11.43,11.43,0,0,0-3.93-1.07,48.49,48.49,0,0,0-5.4-.27H638.66v15Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M744.11,237.59a113.36,113.36,0,0,1,12.5.71q6.43.72,11.88,1.52,6.25,1,12.41,2.14V284.2H768.84L766.79,282a54.66,54.66,0,0,1-9.6,2.32,80.48,80.48,0,0,1-13.08,1,118.41,118.41,0,0,1-16.25-.94,26.68,26.68,0,0,1-10.71-3.57,14.66,14.66,0,0,1-5.89-7.28,41.57,41.57,0,0,1,0-24.11,14.67,14.67,0,0,1,5.89-7.28,26.71,26.71,0,0,1,10.71-3.57A118.41,118.41,0,0,1,744.11,237.59Zm0,33.21q1.69,0,4.15-.09t5.18-.22l5.54-.27q2.81-.13,5.31-.31V252.86q-2.5-.09-5.31-.27t-5.54-.31q-2.72-.13-5.18-.22t-4.15-.09q-5.09,0-8.39.31a14.7,14.7,0,0,0-5.22,1.29,5.24,5.24,0,0,0-2.63,2.86,14.33,14.33,0,0,0-.71,5,13.94,13.94,0,0,0,.71,5,5.26,5.26,0,0,0,2.63,2.81,14.64,14.64,0,0,0,5.22,1.29Q739,270.81,744.11,270.81Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M801.17,239.33q4.46-.58,9.2-1t9.64-.58q4.91-.18,9.64-.18v12q-5.09.27-8.79.71t-6.29.89q-2.95.54-5.09,1.07v32H792.86V240.72Q796.7,239.91,801.17,239.33Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M871.52,250.36H857V284.2h-16.7V222.59L857,218.3v19.29h14.55Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M943.67,270.9a12.91,12.91,0,0,1-1.74,6.92,11.93,11.93,0,0,1-5.8,4.51,38.31,38.31,0,0,1-10.71,2.37,144.32,144.32,0,0,1-16.56.49q-3.75-.09-7.68-.4t-7.41-.76q-3.48-.45-6.29-.89l-4.42-.71V271.88q5.44.27,10.45.45,4.28.18,8.66.31t7,.13q5.44.18,8.79.13a40.62,40.62,0,0,0,5.13-.31,5.15,5.15,0,0,0,2.37-.76,1.9,1.9,0,0,0,.67-1.29,1.21,1.21,0,0,0-.36-1.12,3.88,3.88,0,0,0-1.7-.67,28.45,28.45,0,0,0-3.44-.45l-5.58-.45q-10.72-.8-17.41-2a40.1,40.1,0,0,1-10.45-3,10.28,10.28,0,0,1-5-4.51,14.65,14.65,0,0,1-1.29-6.43,12.16,12.16,0,0,1,1.74-6.61,12.55,12.55,0,0,1,5.8-4.55,37.81,37.81,0,0,1,10.71-2.54,129.93,129.93,0,0,1,16.56-.58q4.37.09,8.75.54t7.86,1q4.11.63,7.77,1.34v10.89q-2.32-.27-5.67-.49t-6.83-.4q-3.48-.18-6.7-.31l-5.45-.22q-5.54-.09-8.84,0a46.56,46.56,0,0,0-5.13.36,5.23,5.23,0,0,0-2.41.76,1.52,1.52,0,0,0-.58,1.21,1.45,1.45,0,0,0,.36,1.07,3.35,3.35,0,0,0,1.52.63,24.73,24.73,0,0,0,3.35.45l5.85.45q10.8.8,17.5,2a40.41,40.41,0,0,1,10.4,3,10.31,10.31,0,0,1,5,4.51A14.66,14.66,0,0,1,943.67,270.9Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#58585a',
            d: 'M246.48,147.78a4.09,4.09,0,0,0,4.09-4.09v-2.74a2.07,2.07,0,0,0-2.3-2.06l-18,2-2.48-3.84-10-15.38a7.11,7.11,0,0,0-6-3.25H140.45a6.18,6.18,0,0,0-5.33,3L126,137l-2.35,4-16.24-1.91a3.32,3.32,0,0,0-3.71,3.3v1.77a3.65,3.65,0,0,0,3.65,3.65h12.29l-2.76,4.69-6,3.33-6,3.33a3.32,3.32,0,0,0-1.7,2.9v37.46a2.66,2.66,0,0,0,2.14,2.61l1.74,1,1.74,1a3,3,0,0,1,2.4,2.91l0,5.4,0,8a2.1,2.1,0,0,0,2.36,2.07l1.59-.19,1.59-.19h17.6a1.83,1.83,0,0,0,1.83-1.83V206.72h80.39v13.5a1.92,1.92,0,0,0,1.92,1.92h22a1.91,1.91,0,0,0,1.91-1.91V207.06a3.22,3.22,0,0,1,1.37-2.64l2-1,2-1a3.32,3.32,0,0,0,1.83-1,2.86,2.86,0,0,0,.77-1.9V161.24a3.28,3.28,0,0,0-1.74-2.9l-5.53-2.94-5.53-2.94-4.12-6.37,1.39,1.68ZM137.42,123h77.66l18.27,27.41H121.43Zm104.14,52.61a3.58,3.58,0,0,1,3.58,3.58v5.37a3.24,3.24,0,0,1-3.24,3.24h-30a3.59,3.59,0,0,0-3,1.69l-.3.48-.3.48a3.41,3.41,0,0,1-2.89,1.6H150.66a3.15,3.15,0,0,1-2.67-1.48l-.32-.51-.32-.51a3.75,3.75,0,0,0-3.18-1.76H111.57a3.37,3.37,0,0,1-3.37-3.37v-5.52a3.3,3.3,0,0,1,3.3-3.3h15a3.45,3.45,0,0,1,3.41,2.89l.22,1,.22,1a2.37,2.37,0,0,0,2.32,1.86h85.46a2.53,2.53,0,0,0,2.52-2.52v-.31a3.94,3.94,0,0,1,3.94-3.94h17Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#58585a',
            d: 'M147.65,44.92V39.66l-18.16,5.68a2.82,2.82,0,0,0-1.8,3.68l2.89,7.71-14.44,7.88-5.7-8a1.51,1.51,0,0,0-2.09-.36L93.76,67.68a1.51,1.51,0,0,0-.37,2.12l5.67,6.63L87.25,88.25l-6.61-5.78a1.51,1.51,0,0,0-2.07.46L67,97.63a1.51,1.51,0,0,0,.3,2l6.85,5.71-6.57,13.13-9-2.26a1.51,1.51,0,0,0-1.83,1.1l-4.53,18.13a1.51,1.51,0,0,0,1.05,1.82L61,139.46l-2,15.1H50a1.51,1.51,0,0,0-1.51,1.51v18A1.51,1.51,0,0,0,50,175.57h9l1.31,17.07L52.42,196a1.51,1.51,0,0,0-.84,1.87l5.67,17a1.51,1.51,0,0,0,1.85,1l7.8-2.23,7.88,14.44-7.93,5.67a1.51,1.51,0,0,0-.33,2.13l10,13.38a1.51,1.51,0,0,0,2,.35l8-4.46L98.41,257l-5.55,6.66a1.51,1.51,0,0,0,.25,2.17L106.65,276a1.51,1.51,0,0,0,1.87,0l7-5.8,13.13,6.57-3.29,7.68a1.51,1.51,0,0,0,.91,2l18.14,6-11.82-21s-52.52-15.76-67-85.35c0,0-17.07-84,69.59-124.74C135.18,61.33,139.12,50.83,147.65,44.92Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M182.26,96.67,171.12,78.25l8.44-20,28.33-2.17A38.73,38.73,0,0,0,140,62.58l0,1.65c-17.78,9.3-53.1,34.1-63,75.89,0,0-10.77,44,7.45,79.68,0,0,12,27.32,52.1,42l.88-29.77-1.25-2.58a6.82,6.82,0,0,0-4.09-1.36H116.16a7.85,7.85,0,0,1-5.55-2.3,2.62,2.62,0,0,1-.77-1.85V212.75a5.15,5.15,0,0,0-1.51-3.65l-9.23-7.91a5.2,5.2,0,0,1-1.52-3.68v-33a12.31,12.31,0,0,1,1.3-5.51l1.1-2.21a6.26,6.26,0,0,0,.66-2.8l.31-13.75s1.81-5,4-5h2.11c1.87,0,4.62-8.24,5.66-9.8,3.1-4.63,18.15-19,30.25-28.8l.32,2.38a38.73,38.73,0,0,0,67.23-4.46Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#3d5b99',
            d: 'M277.2,145.8c-11.37-54.92-57.36-72.24-57.36-72.24L215,101.14c12.35,7.41,24.69,24.76,29,31.23a5.6,5.6,0,0,0,4.66,2.49h2.11c2.23,0,4,.5,4,2.73l-1.31,22.06a6.26,6.26,0,0,0,.66,2.8l1.1,2.21a12.31,12.31,0,0,1,1.3,5.51v33a5.2,5.2,0,0,1-1.52,3.68l-7.91,6.6a5.16,5.16,0,0,0-1.51,3.65v6a2.62,2.62,0,0,1-.77,1.85c-1.47,1.47-3.47,3.61-5.55,3.61H223.43a6.82,6.82,0,0,0-4.09,1.36L208,236.67a37.94,37.94,0,0,0-61.74,6l27.82-.07,9.65,18.9-9.56,18.9-27.82.07a38,38,0,0,0,66.1-.4l.5-7.91,2.73-3.69c37.06-22.67,47.55-45.64,47.55-45.64C284.21,197.23,277.2,145.8,277.2,145.8Z',
            transform: 'translate(-48.51 -38.87)'
          }),
          _react2.default.createElement('path', {
            fill: '#58585a',
            d: 'M207.4,46.23V41l15.54,5.68a2.82,2.82,0,0,1,1.8,3.68L224.47,58l11.82,7.88,5.7-8a1.51,1.51,0,0,1,2.09-.36L258.66,69a1.51,1.51,0,0,1,.37,2.12l-5.67,6.63,11.82,11.82,6.61-5.78a1.51,1.51,0,0,1,2.07.46l11.6,14.69a1.51,1.51,0,0,1-.3,2l-8.17,4.4,7.88,14.44,9-2.26a1.51,1.51,0,0,1,1.83,1.1l4.53,18.13a1.51,1.51,0,0,1-1.05,1.82l-6.47,2.22.66,15.1h9a1.51,1.51,0,0,1,1.51,1.51v18a1.51,1.51,0,0,1-1.51,1.51h-9L290.78,194,300,196a1.51,1.51,0,0,1,.84,1.87l-5.67,18.32a1.51,1.51,0,0,1-1.85,1L284.21,215l-7.88,13.13,7.93,5.67a1.51,1.51,0,0,1,.33,2.13l-11.35,14.69a1.51,1.51,0,0,1-2,.35l-6.69-4.46L252.7,258.29l5.55,5.34a1.51,1.51,0,0,1-.25,2.17l-13.53,11.46a1.51,1.51,0,0,1-1.87,0l-5.65-8.43-13.13,7.88.67,9a1.51,1.51,0,0,1-.91,2l-15.51,4.73,13.13-22.32S269.11,257,285.52,188.7c0,0,21-84-65.65-124.74C219.87,64,215.93,52.14,207.4,46.23Z',
            transform: 'translate(-48.51 -38.87)'
          })
        )
      )
    )
  );
};

var _default = Logo;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Logo, 'Logo', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/logo.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/logo.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/chat.js":
/*!*********************************************************!*\
  !*** ./src/components/common/header/navigation/chat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Chat = function Chat() {
  return _react2.default.createElement(
    "li",
    { className: "chat-button" },
    _react2.default.createElement(
      "div",
      { className: "wrap" },
      _react2.default.createElement(
        "span",
        { className: "nav-icon" },
        _react2.default.createElement(
          "svg",
          { x: "0px", y: "0px", viewBox: "0 0 302.44 200.25" },
          _react2.default.createElement("path", {
            fill: "none",
            stroke: "#000",
            strokeMiterlimit: "7",
            strokeWidth: "7px",
            d: "M429.6,256.57c11.66-15.16,17.15-33.37,13.69-51.59-4.09-21.56-19.77-38.5-41.06-47.81a86.29,86.29,0,0,1,5.6,18c9.25,48.74-24.42,97.23-77.25,116.29a104.92,104.92,0,0,0,74.6-13.31l26,10Z",
            transform: "translate(-146.87 -98.22)"
          }),
          _react2.default.createElement("path", {
            fill: "none",
            stroke: "#000",
            strokeMiterlimit: "7",
            strokeWidth: "7px",
            d: "M212.68,276.41c10.9,1.68,45.31,4.84,53.83,4.84,64.32,0,114.68-39.1,114.68-89,0-49.09-51.42-89-114.68-89s-114.64,39.91-114.64,89c0,22.84,11.52,44.92,31.8,61.45l-10,30.56Z",
            transform: "translate(-146.87 -98.22)"
          })
        )
      )
    )
  );
};

var _default = Chat;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Chat, "Chat", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/chat.js");
  reactHotLoader.register(_default, "default", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/chat.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/help.js":
/*!*********************************************************!*\
  !*** ./src/components/common/header/navigation/help.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ClickAwayListener = __webpack_require__(/*! ../../ClickAwayListener */ "./src/components/common/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Help = function (_React$Component) {
  _inherits(Help, _React$Component);

  function Help() {
    var _temp, _this, _ret;

    _classCallCheck(this, Help);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleToggle = function () {
      console.log('in handle');
      _this.setState(function (state) {
        return { open: !state.open };
      });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Help.prototype.render = function render() {
    var open = this.state.open;

    return _react2.default.createElement(
      'li',
      { className: 'help-button' },
      _react2.default.createElement(
        'div',
        { className: 'wrap', onClick: this.handleToggle, role: 'presentation' },
        _react2.default.createElement(
          'span',
          { className: 'nav-icon' },
          _react2.default.createElement(
            'svg',
            {
              x: '0px',
              y: '0px',
              viewBox: '0 0 52 52',
              style: { enableBackground: 'new 0 0 52 52' },
              xmlSpace: 'preserve'
            },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', {
                d: 'M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'
              }),
              _react2.default.createElement('path', { d: 'M26,37c-0.553,0-1,0.447-1,1v2c0,0.553,0.447,1,1,1s1-0.447,1-1v-2C27,37.447,26.553,37,26,37z' }),
              _react2.default.createElement('path', {
                d: 'M26.113,9.001C26.075,9.001,26.037,9,25.998,9c-2.116,0-4.106,0.815-5.615,2.304C18.847,12.819,18,14.842,18,17 c0,0.553,0.447,1,1,1s1-0.447,1-1c0-1.618,0.635-3.136,1.787-4.272c1.153-1.137,2.688-1.765,4.299-1.727 c3.161,0.044,5.869,2.752,5.913,5.913c0.029,2.084-0.999,4.002-2.751,5.132C26.588,23.762,25,26.794,25,30.158V33 c0,0.553,0.447,1,1,1s1-0.447,1-1v-2.842c0-2.642,1.276-5.105,3.332-6.432c2.335-1.506,3.706-4.063,3.667-6.84 C33.939,12.599,30.401,9.061,26.113,9.001z'
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClose },
        _react2.default.createElement(
          'div',
          {
            className: 'dropdown-menu',
            style: { display: open ? 'block' : 'none' }
          },
          _react2.default.createElement(
            'ul',
            { className: 'help-list' },
            _react2.default.createElement(
              'li',
              { className: 'list-content' },
              _react2.default.createElement(
                _Link2.default,
                { to: '/' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Easy Returns'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'right-icon' },
                  _react2.default.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      xmlnsXlink: 'http://www.w3.org/1999/xlink',
                      version: '1.1',
                      id: 'Capa_1',
                      x: '0px',
                      y: '0px',
                      viewBox: '0 0 512 512',
                      style: { enableBackground: 'new 0 0 512 512' },
                      xmlSpace: 'preserve',
                      width: '512px',
                      height: '512px'
                    },
                    _react2.default.createElement(
                      'g',
                      null,
                      _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('rect', {
                          x: '222.8',
                          width: '66.4',
                          height: '128.53',
                          fill: '#587aaf'
                        })
                      )
                    ),
                    _react2.default.createElement(
                      'g',
                      null,
                      _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', {
                          d: 'M497,0H319.201v143.533c0,8.284-6.717,15-15,15h-96.4c-8.283,0-15-6.716-15-15V0H15C6.716,0,0,6.717,0,15v482    c0,8.284,6.716,15,15,15h482c8.285,0,15-6.716,15-15V15C512,6.717,505.285,0,497,0z M352.4,391.5h-96.398c-8.283,0-15-6.716-15-15    c0-8.283,6.717-15,15-15H352.4c18.307,0,33.199-14.894,33.199-33.199c0-18.308-14.893-33.201-33.199-33.201H147.613l22.594,22.594    c5.857,5.857,5.857,15.355,0,21.213c-2.93,2.929-6.77,4.395-10.607,4.395c-3.84,0-7.678-1.465-10.607-4.395l-48.199-48.2    c-2.813-2.813-4.393-6.628-4.393-10.606c0-3.979,1.58-7.794,4.393-10.606l48.203-48.199c5.857-5.858,15.355-5.858,21.213,0    c5.858,5.858,5.857,15.355,0,21.213L147.615,265.1H352.4c34.848,0,63.199,28.352,63.199,63.201    C415.6,363.148,387.248,391.5,352.4,391.5z',
                          fill: '#587aaf'
                        })
                      )
                    ),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null)
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'list-content' },
              _react2.default.createElement(
                _Link2.default,
                { to: '/' },
                _react2.default.createElement(
                  'span',
                  null,
                  ' FAQ'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'right-icon' },
                  _react2.default.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      xmlnsXlink: 'http://www.w3.org/1999/xlink',
                      version: '1.1',
                      id: 'Capa_1',
                      x: '0px',
                      y: '0px',
                      width: '512px',
                      height: '512px',
                      viewBox: '0 0 510 510',
                      style: { enableBackground: 'new 0 0 510 510' },
                      xmlSpace: 'preserve'
                    },
                    _react2.default.createElement(
                      'g',
                      null,
                      _react2.default.createElement(
                        'g',
                        { id: 'help' },
                        _react2.default.createElement('path', {
                          d: 'M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M280.5,433.5h-51v-51h51V433.5z     M334.05,237.15L311.1,260.1c-20.399,17.851-30.6,33.15-30.6,71.4h-51v-12.75c0-28.05,10.2-53.55,30.6-71.4L290.7,214.2    c10.2-7.65,15.3-20.4,15.3-35.7c0-28.05-22.95-51-51-51s-51,22.95-51,51h-51c0-56.1,45.9-102,102-102c56.1,0,102,45.9,102,102    C357,201.45,346.8,221.85,334.05,237.15z',
                          fill: '#587aaf'
                        })
                      )
                    ),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null)
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'list-content' },
              _react2.default.createElement(
                _Link2.default,
                { to: '/' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Contact US'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'right-icon' },
                  _react2.default.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      xmlnsXlink: 'http://www.w3.org/1999/xlink',
                      version: '1.1',
                      id: 'Capa_1',
                      x: '0px',
                      y: '0px',
                      width: '512px',
                      height: '512px',
                      viewBox: '0 0 511.626 511.626',
                      style: { enableBackground: 'new 0 0 511.626 511.626' },
                      xmlSpace: 'preserve'
                    },
                    _react2.default.createElement(
                      'g',
                      null,
                      _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', {
                          d: 'M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099    c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277    c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569    c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852    c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116    c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679    c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974    C26.169,159.743,37.307,170.736,49.106,178.729z',
                          fill: '#587aaf'
                        }),
                        _react2.default.createElement('path', {
                          d: 'M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699    c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287    c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699    c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265    c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265    V184.437C503.441,193.569,493.927,201.854,483.072,209.275z',
                          fill: '#587aaf'
                        })
                      )
                    ),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null),
                    _react2.default.createElement('g', null)
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  // @ts-ignore
  Help.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Help;
}(_react2.default.Component);

var _default = Help;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Help, 'Help', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/help.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/help.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/index.js":
/*!**********************************************************!*\
  !*** ./src/components/common/header/navigation/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ShoppingCart = __webpack_require__(/*! ./shoppingcart/ShoppingCart */ "./src/components/common/header/navigation/shoppingcart/ShoppingCart.js");

var _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);

var _chat = __webpack_require__(/*! ./chat */ "./src/components/common/header/navigation/chat.js");

var _chat2 = _interopRequireDefault(_chat);

var _trackorder = __webpack_require__(/*! ./trackorder */ "./src/components/common/header/navigation/trackorder/index.js");

var _trackorder2 = _interopRequireDefault(_trackorder);

var _help = __webpack_require__(/*! ./help */ "./src/components/common/header/navigation/help.js");

var _help2 = _interopRequireDefault(_help);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Navigation = function Navigation() {
  return _react2.default.createElement(
    'div',
    { className: 'cart-buttons' },
    _react2.default.createElement(
      'div',
      { className: 'buttons-list' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(_ShoppingCart2.default, null),
        _react2.default.createElement(_chat2.default, null),
        _react2.default.createElement(_trackorder2.default, null),
        _react2.default.createElement(_help2.default, null)
      )
    )
  );
};

var _default = Navigation;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, 'Navigation', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/shoppingcart/ShoppingCart.js":
/*!******************************************************************************!*\
  !*** ./src/components/common/header/navigation/shoppingcart/ShoppingCart.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _cartdropdown = __webpack_require__(/*! ./cartdropdown */ "./src/components/common/header/navigation/shoppingcart/cartdropdown.js");

var _cartdropdown2 = _interopRequireDefault(_cartdropdown);

var _reactRelay = __webpack_require__(/*! react-relay */ "react-relay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoppingCartQuery = function ShoppingCartQuery() {
  var node = __webpack_require__(/*! ./__generated__/ShoppingCartQuery.graphql */ "./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCartQuery.graphql.js");

  if (node.hash && node.hash !== '8ecfb14a9b03eed4bc58699dfd51cbed') {
    console.error('The definition of \'ShoppingCartQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(/*! ./__generated__/ShoppingCartQuery.graphql */ "./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCartQuery.graphql.js");
};

var ShoppingCart = function (_React$Component) {
  _inherits(ShoppingCart, _React$Component);

  function ShoppingCart() {
    var _temp, _this, _ret;

    _classCallCheck(this, ShoppingCart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleToggle = function () {
      console.log('in handle');
      _this.setState(function (state) {
        return { open: !state.open };
      });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ShoppingCart.prototype.render = function render() {
    var open = this.state.open;
    var _props = this.props,
        cart = _props.cart,
        items = _props.items,
        environment = _props.environment;

    return _react2.default.createElement(
      'li',
      { className: 'full-cart' },
      _react2.default.createElement(
        'div',
        { className: 'wrap', onClick: this.handleToggle, role: 'presentation' },
        _react2.default.createElement(
          'span',
          { className: 'nav-icon' },
          _react2.default.createElement(
            'svg',
            { x: '0px', y: '0px', viewBox: '0 0 323.99 282.77' },
            _react2.default.createElement('path', {
              fill: 'none',
              stroke: '#000',
              strokeMiterlimit: '7',
              strokeWidth: '7px',
              d: 'M136.48,61.62h40.28a14,14,0,0,1,13.78,11.53L225.08,266a14,14,0,0,0,13.78,11.53H426.14l-188.07.08a14,14,0,0,1-13.78-11.5l-5.15-33.83H424.48a14,14,0,0,0,13.83-11.85l17-109.34a14,14,0,0,0-13.83-16.15H229.81',
              transform: 'translate(-136.48 -56.62)'
            }),
            items.length > 0 ? _react2.default.createElement('circle', { fill: '#3d5b99', cx: '186.19', cy: '107.57', r: '30' }) : null,
            _react2.default.createElement('circle', {
              fill: 'none',
              stroke: '#000',
              strokeMiterlimit: '7',
              strokeWidth: '7px',
              cx: '286.39',
              cy: '253.87',
              r: '23.5'
            }),
            _react2.default.createElement('circle', {
              fill: 'none',
              stroke: '#000',
              strokeMiterlimit: '7',
              strokeWidth: '7px',
              cx: '107.86',
              cy: '254.27',
              r: '23.5'
            })
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'meta' },
          items
        )
      ),
      _react2.default.createElement(_cartdropdown2.default, {
        handleClose: this.handleClose,
        environment: environment,
        cart: cart,
        open: open
      })
    );
  };

  // @ts-ignore
  ShoppingCart.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ShoppingCart;
}(_react2.default.Component);

var Cart = function Cart(parentprops) {
  return _react2.default.createElement(_reactRelay.QueryRenderer, {
    environment: parentprops.environment,
    query: ShoppingCartQuery,
    variables: {
      brand: '',
      partType: 'wheel',
      cart_id: '40d7b87c-6570-48f0-ad4b-f7a7c0a5a2ad',
      user_id: '3a0b42b5-bca7-4e34-9754-be909795aad4',
      sku_id: '1',
      quantity: '1',
      price: '1',
      operation: 'GETCART',
      title: 'title',
      imageUrl: 'imageUrl',
      core_deposit: '30',
      product_url: 'test',
      fitmentuid: '30',
      distributor_group: 'lkq',
      category: 'category'
    },
    render: function render(_ref) {
      var error = _ref.error,
          props = _ref.props;

      var emptyCart = [];
      console.log(props);
      if (error) {
        return _react2.default.createElement(
          'div',
          null,
          error.message
        );
      } else if (props) {
        return _react2.default.createElement(ShoppingCart, {
          items: props.store.outerCart.cart.totalNumberOfItems,
          cart: props.store.outerCart.cart.cart_entry,
          environment: parentprops.environment
        });
      }
      return _react2.default.createElement(ShoppingCart, {
        cart: emptyCart,
        items: 0,
        environment: parentprops.environment
      });
    }
  });
};

var CartContainer = function CartContainer(props) {
  return _react2.default.createElement(Cart, { environment: props.relay.environment });
};

var _default = (0, _reactRelay.createFragmentContainer)(CartContainer, {
  store: function store() {
    var node = __webpack_require__(/*! ./__generated__/ShoppingCart_store.graphql */ "./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCart_store.graphql.js");

    if (node.hash && node.hash !== '8a31e2a39a61fcbb9f2e1529e9a8f7a0') {
      console.error('The definition of \'ShoppingCart_store\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(/*! ./__generated__/ShoppingCart_store.graphql */ "./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCart_store.graphql.js");
  }
});

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ShoppingCartQuery, 'ShoppingCartQuery', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/ShoppingCart.js');
  reactHotLoader.register(ShoppingCart, 'ShoppingCart', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/ShoppingCart.js');
  reactHotLoader.register(Cart, 'Cart', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/ShoppingCart.js');
  reactHotLoader.register(CartContainer, 'CartContainer', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/ShoppingCart.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/ShoppingCart.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCartQuery.graphql.js":
/*!*********************************************************************************************************!*\
  !*** ./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCartQuery.graphql.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/**
 * 
 * @relayHash 388b9ede9a991464ce346ab20978a9b7
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingCartQueryVariables = {|
  brand: string,
  partType: string,
  cart_id: string,
  user_id: string,
  sku_id: string,
  quantity: string,
  price: string,
  operation: string,
  title: string,
  imageUrl: string,
  core_deposit: string,
  product_url: string,
  fitmentuid: string,
  distributor_group: string,
  category: string,
|};
export type ShoppingCartQueryResponse = {|
  +store: {|
    +outerCart: {|
      +id: string,
      +cart: {|
        +id: string,
        +user_id: string,
        +cart_id: string,
        +cart_total: string,
        +core_deposit_total: string,
        +totalNumberOfItems: string,
        +cart_entry: $ReadOnlyArray<{|
          +title: string,
          +imageUrl: string,
          +price: number,
          +quantity: number,
          +sku_id: string,
          +core_deposit: number,
          +product_url: string,
          +fitmentuid: string,
          +distributor_group: string,
          +brand: string,
          +category: string,
          +partType: string,
        |}>,
      |},
    |}
  |}
|};
export type ShoppingCartQuery = {|
  variables: ShoppingCartQueryVariables,
  response: ShoppingCartQueryResponse,
|};
*/

/*
query ShoppingCartQuery(
  $brand: String!
  $partType: String!
  $cart_id: String!
  $user_id: String!
  $sku_id: String!
  $quantity: String!
  $price: String!
  $operation: String!
  $title: String!
  $imageUrl: String!
  $core_deposit: String!
  $product_url: String!
  $fitmentuid: String!
  $distributor_group: String!
  $category: String!
) {
  store {
    outerCart(brand: $brand, partType: $partType, cart_id: $cart_id, user_id: $user_id, sku_id: $sku_id, quantity: $quantity, price: $price, operation: $operation, title: $title, imageUrl: $imageUrl, core_deposit: $core_deposit, product_url: $product_url, fitmentuid: $fitmentuid, distributor_group: $distributor_group, category: $category) {
      id
      cart {
        id
        user_id
        cart_id
        cart_total
        core_deposit_total
        totalNumberOfItems
        cart_entry {
          title
          imageUrl
          price
          quantity
          sku_id
          core_deposit
          product_url
          fitmentuid
          distributor_group
          brand
          category
          partType
        }
      }
    }
  }
}
*/

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "brand",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "partType",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "cart_id",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "user_id",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "sku_id",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "quantity",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "price",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "operation",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "imageUrl",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "core_deposit",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "product_url",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "fitmentuid",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "distributor_group",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "category",
    "type": "String!",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "store",
    "storageKey": null,
    "args": null,
    "concreteType": "Store",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "outerCart",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "brand",
        "variableName": "brand",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "cart_id",
        "variableName": "cart_id",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "category",
        "variableName": "category",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "core_deposit",
        "variableName": "core_deposit",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "distributor_group",
        "variableName": "distributor_group",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "fitmentuid",
        "variableName": "fitmentuid",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "imageUrl",
        "variableName": "imageUrl",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "operation",
        "variableName": "operation",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "partType",
        "variableName": "partType",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "price",
        "variableName": "price",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "product_url",
        "variableName": "product_url",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "quantity",
        "variableName": "quantity",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "sku_id",
        "variableName": "sku_id",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "title",
        "variableName": "title",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "user_id",
        "variableName": "user_id",
        "type": "String!"
      }],
      "concreteType": "OuterCartType",
      "plural": false,
      "selections": [v1, {
        "kind": "LinkedField",
        "alias": null,
        "name": "cart",
        "storageKey": null,
        "args": null,
        "concreteType": "CartType",
        "plural": false,
        "selections": [v1, {
          "kind": "ScalarField",
          "alias": null,
          "name": "user_id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "cart_id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "cart_total",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "core_deposit_total",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "totalNumberOfItems",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "cart_entry",
          "storageKey": null,
          "args": null,
          "concreteType": "CartEntry",
          "plural": true,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageUrl",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "quantity",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "sku_id",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "core_deposit",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "product_url",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "fitmentuid",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "distributor_group",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "brand",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "category",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "partType",
            "args": null,
            "storageKey": null
          }]
        }]
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "ShoppingCartQuery",
    "id": null,
    "text": "query ShoppingCartQuery(\n  $brand: String!\n  $partType: String!\n  $cart_id: String!\n  $user_id: String!\n  $sku_id: String!\n  $quantity: String!\n  $price: String!\n  $operation: String!\n  $title: String!\n  $imageUrl: String!\n  $core_deposit: String!\n  $product_url: String!\n  $fitmentuid: String!\n  $distributor_group: String!\n  $category: String!\n) {\n  store {\n    outerCart(brand: $brand, partType: $partType, cart_id: $cart_id, user_id: $user_id, sku_id: $sku_id, quantity: $quantity, price: $price, operation: $operation, title: $title, imageUrl: $imageUrl, core_deposit: $core_deposit, product_url: $product_url, fitmentuid: $fitmentuid, distributor_group: $distributor_group, category: $category) {\n      id\n      cart {\n        id\n        user_id\n        cart_id\n        cart_total\n        core_deposit_total\n        totalNumberOfItems\n        cart_entry {\n          title\n          imageUrl\n          price\n          quantity\n          sku_id\n          core_deposit\n          product_url\n          fitmentuid\n          distributor_group\n          brand\n          category\n          partType\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ShoppingCartQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v2
    },
    "operation": {
      "kind": "Operation",
      "name": "ShoppingCartQuery",
      "argumentDefinitions": v0,
      "selections": v2
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '8ecfb14a9b03eed4bc58699dfd51cbed';
module.exports = node;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(node, "node", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCartQuery.graphql.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCart_store.graphql.js":
/*!**********************************************************************************************************!*\
  !*** ./src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCart_store.graphql.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ShoppingCart_store$ref: FragmentReference;
export type ShoppingCart_store = {|
  +idQuery: ?number,
  +$refType: ShoppingCart_store$ref,
|};
*/

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ShoppingCart_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "idQuery",
    "args": null,
    "storageKey": null
  }]
};
// prettier-ignore
node /*: any*/.hash = '8a31e2a39a61fcbb9f2e1529e9a8f7a0';
module.exports = node;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(node, "node", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/__generated__/ShoppingCart_store.graphql.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/shoppingcart/cartdropdown.js":
/*!******************************************************************************!*\
  !*** ./src/components/common/header/navigation/shoppingcart/cartdropdown.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ClickAwayListener = __webpack_require__(/*! ../../../ClickAwayListener */ "./src/components/common/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _RemoveFromCartMutation = __webpack_require__(/*! ../../../../../mutations/RemoveFromCartMutation */ "./src/mutations/RemoveFromCartMutation.js");

var _RemoveFromCartMutation2 = _interopRequireDefault(_RemoveFromCartMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoppingCartDropdown = function (_React$Component) {
  _inherits(ShoppingCartDropdown, _React$Component);

  function ShoppingCartDropdown() {
    var _temp, _this, _ret;

    _classCallCheck(this, ShoppingCartDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleItemRemove = function (item) {
      var data = {
        cart_id: '40d7b87c-6570-48f0-ad4b-f7a7c0a5a2ad',
        user_id: '3a0b42b5-bca7-4e34-9754-be909795aad4',
        sku_id: item.sku_id,
        brand: item.brand,
        quantity: item.quantity.toString(),
        title: item.title,
        price: item.price.toString(),
        imageUrl: item.imageUrl,
        core_deposit: item.core_deposit.toString(),
        operation: 'REMOVESKUFROMCART',
        product_url: item.product_url,
        fitmentuid: item.fitmentuid,
        distributor_group: item.distributor_group,
        category: item.category,
        partType: item.partType
      };
      _RemoveFromCartMutation2.default.commit(_this.props.environment, data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ShoppingCartDropdown.prototype.render = function render() {
    var _this2 = this;

    var cart = this.props.cart;


    return _react2.default.createElement(
      _ClickAwayListener2.default,
      { onClickAway: this.props.handleClose },
      _react2.default.createElement(
        'div',
        {
          className: 'dropdown-menu',
          style: { display: this.props.open ? 'block' : 'none' }
        },
        _react2.default.createElement(
          'div',
          { className: 'items-list' },
          cart.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { className: 'item-row', key: index },
              _react2.default.createElement(
                'div',
                { className: 'item-image' },
                _react2.default.createElement('img', { src: item.imageUrl, alt: 'item1' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'item-content' },
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/' },
                  item.title
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'item-price' },
                  '$',
                  item.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'item-qty' },
                  'Qty: ',
                  item.quantity
                ),
                _react2.default.createElement(
                  'button',
                  {
                    className: 'item-remove button-outlined',
                    onClick: _this2.handleItemRemove.bind(_this2, item)
                  },
                  'Remove'
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'list-buttons' },
          _react2.default.createElement(
            _Link2.default,
            { to: '/', className: 'button-blue-line' },
            'View Cart'
          ),
          _react2.default.createElement(
            _Link2.default,
            { to: '/', className: 'button-red-solid' },
            'Checkout'
          )
        )
      )
    );
  };

  // @ts-ignore
  ShoppingCartDropdown.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ShoppingCartDropdown;
}(_react2.default.Component);

var _default = ShoppingCartDropdown;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ShoppingCartDropdown, 'ShoppingCartDropdown', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/cartdropdown.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/shoppingcart/cartdropdown.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/trackorder/index.js":
/*!*********************************************************************!*\
  !*** ./src/components/common/header/navigation/trackorder/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _trackorderdropdown = __webpack_require__(/*! ./trackorderdropdown */ "./src/components/common/header/navigation/trackorder/trackorderdropdown.js");

var _trackorderdropdown2 = _interopRequireDefault(_trackorderdropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trackorder = function (_React$Component) {
  _inherits(Trackorder, _React$Component);

  function Trackorder() {
    var _temp, _this, _ret;

    _classCallCheck(this, Trackorder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleToggle = function () {
      console.log('in handle');
      _this.setState(function (state) {
        return { open: !state.open };
      });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Trackorder.prototype.render = function render() {
    var open = this.state.open;

    return _react2.default.createElement(
      'li',
      { className: 'track-button' },
      _react2.default.createElement(
        'div',
        { className: 'wrap', onClick: this.handleToggle, role: 'presentation' },
        _react2.default.createElement(
          'span',
          { className: 'nav-icon' },
          _react2.default.createElement(
            'svg',
            {
              x: '0px',
              y: '0px',
              viewBox: '0 0 321.6 321.6',
              style: { enableBackground: 'new 0 0 321.6 321.6' },
              xmlSpace: 'preserve'
            },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement(
                  'g',
                  null,
                  _react2.default.createElement('path', {
                    d: 'M52.8,55.6c-14.4,0-26,11.6-26,26c0,14.4,11.6,26,26,26c14,0,26-11.6,26-26C78.8,67.2,67.2,55.6,52.8,55.6z M52.4,97.2 c-8.4,0-15.6-6.8-15.6-15.6S44,66,52.4,66C61.2,66,68,73.2,68,81.6C68,90.4,60.8,97.2,52.4,97.2z'
                  }),
                  _react2.default.createElement('path', {
                    d: 'M283.6,68.4c-10.8,0-19.6,8.8-19.6,19.6s8.8,19.6,19.6,19.6s19.6-8.8,19.6-19.6C303.2,77.2,294.4,68.4,283.6,68.4z M283.6,97.2c-5.2,0-9.2-4-9.2-9.2c0-5.2,4-9.2,9.2-9.2s9.2,4,9.2,9.2C292.8,93.2,288.8,97.2,283.6,97.2z'
                  }),
                  _react2.default.createElement('path', {
                    d: 'M321.6,88.4c0-21.2-17.2-38-38-38c-20.8,0-38,16.8-38,38c0,18.8,22.8,50.8,31.2,61.6L154,272.8c-6,6-14,9.2-22.8,9.2 c-8.4,0-16.4-3.2-22.8-9.2c-12.4-12.4-12.4-32.8,0-45.2l104.8-105.2c16.4-16.4,16.4-43.2,0-60c-16.4-16.4-43.2-16.4-60,0 l-66.8,67.2c10-17.2,18.4-35.2,18.4-48c0-28.8-23.6-52.4-52.4-52.4C23.6,29.2,0,52.8,0,81.6c0,30.8,46.4,90,48.4,92.4l4,5.2 l3.6-4.4L160.8,69.6c6-6,14-9.2,22.8-9.2c8.4,0,16.4,3.2,22.8,9.2c6,6,9.2,14,9.2,22.8c0,8.4-3.2,16.4-9.2,22.8L101.6,220 c-16.4,16.4-16.4,43.2,0,60c8,8,18.8,12.4,30,12.4c11.2,0,22-4.4,30-12.4l122-122l0.4,0.4l2-2.4l1.6-1.6l-0.4-0.4l0.8-0.8 C291.6,148.8,321.6,108.8,321.6,88.4z M52.4,162.4c-14.4-19.6-42-60-42-80.8c0-23.2,18.8-42,42-42c23.2,0,42,18.8,42,42 C94.4,101.2,66.8,142.4,52.4,162.4z M283.6,141.2c-10.4-14-27.6-40-27.6-53.2c0-15.2,12.4-27.6,27.6-27.6s27.6,12.4,27.6,27.6 C311.2,100.8,294,127.2,283.6,141.2z'
                  })
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(_trackorderdropdown2.default, { handleClose: this.handleClose, open: open })
    );
  };

  // @ts-ignore
  Trackorder.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Trackorder;
}(_react2.default.Component);

var _default = Trackorder;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Trackorder, 'Trackorder', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/trackorder/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/trackorder/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/navigation/trackorder/trackorderdropdown.js":
/*!**********************************************************************************!*\
  !*** ./src/components/common/header/navigation/trackorder/trackorderdropdown.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ClickAwayListener = __webpack_require__(/*! ../../../ClickAwayListener */ "./src/components/common/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var TrackOrderDropdown = function TrackOrderDropdown(props) {
  return _react2.default.createElement(
    _ClickAwayListener2.default,
    { onClickAway: props.handleClose },
    _react2.default.createElement(
      'div',
      {
        className: 'dropdown-menu',
        style: { display: props.open ? 'block' : 'none' }
      },
      _react2.default.createElement(
        'div',
        { className: 'track-text' },
        _react2.default.createElement(
          'p',
          null,
          'Please enter tracking number.'
        ),
        _react2.default.createElement(
          'span',
          null,
          '( Tracking number has been sent to you in the email.)'
        )
      ),
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'div',
          { className: 'track-input' },
          _react2.default.createElement('input', { type: 'text' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'track-button' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'button-blue-solid' },
            'Track Order'
          )
        )
      )
    )
  );
};

var _default = TrackOrderDropdown;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TrackOrderDropdown, 'TrackOrderDropdown', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/trackorder/trackorderdropdown.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/navigation/trackorder/trackorderdropdown.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/common/header/searchbar/index.js":
/*!*********************************************************!*\
  !*** ./src/components/common/header/searchbar/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = __webpack_require__(/*! react-autosuggest */ "react-autosuggest");

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var languages = [{
  name: 'C',
  year: 1972
}, {
  name: 'C#',
  year: 2000
}, {
  name: 'C++',
  year: 1983
}, {
  name: 'Clojure',
  year: 2007
}, {
  name: 'Elm',
  year: 2012
}, {
  name: 'Go',
  year: 2009
}, {
  name: 'Haskell',
  year: 1990
}, {
  name: 'Java',
  year: 1995
}, {
  name: 'Javascript',
  year: 1995
}, {
  name: 'Perl',
  year: 1987
}, {
  name: 'PHP',
  year: 1995
}, {
  name: 'Python',
  year: 1991
}, {
  name: 'Ruby',
  year: 1995
}, {
  name: 'Scala',
  year: 2003
}];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  var escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  var regex = new RegExp('^ ' + escapedValue, 'i');

  return languages.filter(function (language) {
    return regex.test(language.name);
  });
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return _react2.default.createElement(
    'span',
    null,
    suggestion.name
  );
}

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.onChange = function (event, _ref) {
      var newValue = _ref.newValue;

      _this.setState({
        value: newValue
      });
    };

    _this.onSuggestionsFetchRequested = function (_ref2) {
      var value = _ref2.value;

      _this.setState({
        suggestions: getSuggestions(value)
      });
    };

    _this.onSuggestionsClearRequested = function () {
      _this.setState({
        suggestions: []
      });
    };

    _this.state = {
      value: '',
      suggestions: []
    };
    return _this;
  }

  SearchBar.prototype.render = function render() {
    var _state = this.state,
        value = _state.value,
        suggestions = _state.suggestions;

    var inputProps = {
      placeholder: 'Search by Make Model Year, Product Type, Part Number, or Brand...',
      value: value,
      onChange: this.onChange
    };

    return _react2.default.createElement(
      'div',
      { className: 'searchbar' },
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'div',
          { className: 'form-group-wrapper' },
          _react2.default.createElement(_reactAutosuggest2.default, {
            suggestions: suggestions,
            onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.onSuggestionsClearRequested,
            getSuggestionValue: getSuggestionValue,
            renderSuggestion: renderSuggestion,
            inputProps: inputProps
          }),
          _react2.default.createElement(
            'div',
            { className: 'search-icon' },
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  'svg',
                  {
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 52.966 52.966',
                    style: { enableBackground: 'new 0 0 52.966 52.966' },
                    xmlSpace: 'preserve'
                  },
                  ' ',
                  _react2.default.createElement('path', {
                    d: 'M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21 c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279 C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19 S32.459,40,21.983,40z',
                    fill: '#FFFFFF'
                  })
                )
              )
            )
          )
        )
      )
    );
  };

  // @ts-ignore
  SearchBar.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return SearchBar;
}(_react2.default.Component);

var _default = SearchBar;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(languages, 'languages', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/searchbar/index.js');
  reactHotLoader.register(escapeRegexCharacters, 'escapeRegexCharacters', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/searchbar/index.js');
  reactHotLoader.register(getSuggestions, 'getSuggestions', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/searchbar/index.js');
  reactHotLoader.register(getSuggestionValue, 'getSuggestionValue', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/searchbar/index.js');
  reactHotLoader.register(renderSuggestion, 'renderSuggestion', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/searchbar/index.js');
  reactHotLoader.register(SearchBar, 'SearchBar', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/searchbar/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/common/header/searchbar/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/Productdata.json":
/*!****************************************************!*\
  !*** ./src/components/pages/home/Productdata.json ***!
  \****************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = [{"title":"Oxygen Sensor Rear (Delphi)","imagesrc":"/public/images/product1.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Air / Fuel Ratio Sensor Upstream (DENSO Auto Parts)","imagesrc":"/public/images/product2.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Mass Air Flow Sensor (Hitachi Automotive)","imagesrc":"/public/images/product3.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Oxygen Sensor Downstream (Bosch)","imagesrc":"/public/images/product4.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Aluminum Wheels-Alloy 20 Wheel","imagesrc":"/public/images/product5.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Oxygen Sensor Rear (Delphi)","imagesrc":"/public/images/product1.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Air / Fuel Ratio Sensor Upstream (DENSO Auto Parts)","imagesrc":"/public/images/product2.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Mass Air Flow Sensor (Hitachi Automotive)","imagesrc":"/public/images/product3.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Oxygen Sensor Downstream (Bosch)","imagesrc":"/public/images/product4.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Aluminum Wheels-Alloy 20 Wheel","imagesrc":"/public/images/product5.png","price":"$136.58","linkvalue":"Shop now >"}];

/***/ }),

/***/ "./src/components/pages/home/Widgets/DiagramWidget.js":
/*!************************************************************!*\
  !*** ./src/components/pages/home/Widgets/DiagramWidget.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./widget.scss */ "./src/components/pages/home/Widgets/widget.scss");

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var DiagramWidget = function DiagramWidget() {
  return _react2.default.createElement(
    'div',
    { className: 'diagramWidget' },
    _react2.default.createElement(
      'div',
      { className: 'diagramWidget-content' },
      _react2.default.createElement(
        'h2',
        null,
        'Find Parts on a Diagram'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Shop for car parts for models made from 1995 to today.'
      ),
      _react2.default.createElement(
        _Link2.default,
        { to: '/' },
        'Find Now'
      )
    )
  );
};

var _default = DiagramWidget;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DiagramWidget, 'DiagramWidget', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/DiagramWidget.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/DiagramWidget.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/Widgets/FeaturedCategoriesWidget.js":
/*!***********************************************************************!*\
  !*** ./src/components/pages/home/Widgets/FeaturedCategoriesWidget.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./widget.scss */ "./src/components/pages/home/Widgets/widget.scss");

var _WidgetHeading = __webpack_require__(/*! ../../../common/WidgetHeading */ "./src/components/common/WidgetHeading.js");

var _WidgetHeading2 = _interopRequireDefault(_WidgetHeading);

var _CategoryWidget = __webpack_require__(/*! ../../../common/CategoryWidget */ "./src/components/common/CategoryWidget.js");

var _CategoryWidget2 = _interopRequireDefault(_CategoryWidget);

var _data = __webpack_require__(/*! ../data.json */ "./src/components/pages/home/data.json");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var FeaturedCategoriesWidget = function FeaturedCategoriesWidget() {
  var firstfive = 5;
  var nextfive = 10;
  return _react2.default.createElement(
    'div',
    { className: 'widget' },
    _react2.default.createElement(_WidgetHeading2.default, { label: 'Featured Categories' }),
    _react2.default.createElement(
      'div',
      { className: 'widget-body' },
      _react2.default.createElement(
        'div',
        { className: 'featured-category-container' },
        _data2.default.slice(0, firstfive).map(function (value) {
          return _react2.default.createElement(_CategoryWidget2.default, {
            imagesrc: value.imagesrc,
            heading: value.heading,
            hoverlistarray: value.listarray
          });
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'featured-category-container' },
        _data2.default.slice(5, nextfive).map(function (value) {
          return _react2.default.createElement(_CategoryWidget2.default, {
            imagesrc: value.imagesrc,
            heading: value.heading,
            hoverlistarray: value.listarray
          });
        })
      )
    )
  );
};

var _default = FeaturedCategoriesWidget;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FeaturedCategoriesWidget, 'FeaturedCategoriesWidget', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/FeaturedCategoriesWidget.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/FeaturedCategoriesWidget.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/Widgets/OtherViewedWidget.js":
/*!****************************************************************!*\
  !*** ./src/components/pages/home/Widgets/OtherViewedWidget.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./widget.scss */ "./src/components/pages/home/Widgets/widget.scss");

var _viewed = __webpack_require__(/*! ../viewed.json */ "./src/components/pages/home/viewed.json");

var _viewed2 = _interopRequireDefault(_viewed);

var _SliderWidget = __webpack_require__(/*! ../../../common/SliderWidget */ "./src/components/common/SliderWidget.js");

var _SliderWidget2 = _interopRequireDefault(_SliderWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var OtherViewedWidget = function OtherViewedWidget() {
  return _react2.default.createElement(_SliderWidget2.default, { label: 'Other Viewed', Productdata: _viewed2.default });
};

var _default = OtherViewedWidget;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OtherViewedWidget, 'OtherViewedWidget', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/OtherViewedWidget.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/OtherViewedWidget.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/Widgets/RecentlyViewedWidget.js":
/*!*******************************************************************!*\
  !*** ./src/components/pages/home/Widgets/RecentlyViewedWidget.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./widget.scss */ "./src/components/pages/home/Widgets/widget.scss");

var _Productdata = __webpack_require__(/*! ../Productdata.json */ "./src/components/pages/home/Productdata.json");

var _Productdata2 = _interopRequireDefault(_Productdata);

var _SliderWidget = __webpack_require__(/*! ../../../common/SliderWidget */ "./src/components/common/SliderWidget.js");

var _SliderWidget2 = _interopRequireDefault(_SliderWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var RecentlyViewedWidget = function RecentlyViewedWidget() {
  return _react2.default.createElement(_SliderWidget2.default, { label: 'Recently Viewed', Productdata: _Productdata2.default });
};

var _default = RecentlyViewedWidget;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RecentlyViewedWidget, 'RecentlyViewedWidget', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/RecentlyViewedWidget.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/RecentlyViewedWidget.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/Widgets/Recommended.js":
/*!**********************************************************!*\
  !*** ./src/components/pages/home/Widgets/Recommended.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./widget.scss */ "./src/components/pages/home/Widgets/widget.scss");

var _Productdata = __webpack_require__(/*! ../Productdata.json */ "./src/components/pages/home/Productdata.json");

var _Productdata2 = _interopRequireDefault(_Productdata);

var _SliderWidget = __webpack_require__(/*! ../../../common/SliderWidget */ "./src/components/common/SliderWidget.js");

var _SliderWidget2 = _interopRequireDefault(_SliderWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Recommended = function Recommended() {
  return _react2.default.createElement(_SliderWidget2.default, { label: 'Recommended', Productdata: _Productdata2.default });
};

var _default = Recommended;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Recommended, 'Recommended', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/Recommended.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/Widgets/Recommended.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/Widgets/widget.scss":
/*!*******************************************************!*\
  !*** ./src/components/pages/home/Widgets/widget.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/home/banner/banner.scss":
/*!******************************************************!*\
  !*** ./src/components/pages/home/banner/banner.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/home/banner/index.js":
/*!***************************************************!*\
  !*** ./src/components/pages/home/banner/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./banner.scss */ "./src/components/pages/home/banner/banner.scss");

var _reactSlick = __webpack_require__(/*! react-slick */ "react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Banner = function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return _react2.default.createElement(
    _reactSlick2.default,
    _extends({}, settings, { className: 'homeslider' }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('img', { src: '/public/images/slider.jpg', alt: 'banner' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('img', { src: '/public/images/slider.jpg', alt: 'banner' })
    )
  );
};

var _default = Banner;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Banner, 'Banner', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/banner/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/banner/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/data.json":
/*!*********************************************!*\
  !*** ./src/components/pages/home/data.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = [{"heading":"Emission Control","imagesrc":"/public/images/emission.png","listarray":["Crankcase Ventilation System","Evaporative System","Sensors","View all >"]},{"heading":"Steering","imagesrc":"/public/images/steering.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Wiper and Washer","imagesrc":"/public/images/wiper.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Brake","imagesrc":"/public/images/brake.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Driveline and Axles","imagesrc":"/public/images/axles.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Accessories and Fluids","imagesrc":"/public/images/fluids.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Belts and Cooling","imagesrc":"/public/images/cooling.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Body","imagesrc":"/public/images/body.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Engine","imagesrc":"/public/images/engine.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]},{"heading":"Ignition","imagesrc":"/public/images/ignition.png","listarray":["Functional Fluid","Hardware","Control Cables","View all >"]}];

/***/ }),

/***/ "./src/components/pages/home/home.scss":
/*!*********************************************!*\
  !*** ./src/components/pages/home/home.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/home/index.js":
/*!********************************************!*\
  !*** ./src/components/pages/home/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./home.scss */ "./src/components/pages/home/home.scss");

var _banner = __webpack_require__(/*! ./banner */ "./src/components/pages/home/banner/index.js");

var _banner2 = _interopRequireDefault(_banner);

var _shopbytabs = __webpack_require__(/*! ./shopbytabs */ "./src/components/pages/home/shopbytabs/index.js");

var _shopbytabs2 = _interopRequireDefault(_shopbytabs);

var _FeaturedCategoriesWidget = __webpack_require__(/*! ./Widgets/FeaturedCategoriesWidget */ "./src/components/pages/home/Widgets/FeaturedCategoriesWidget.js");

var _FeaturedCategoriesWidget2 = _interopRequireDefault(_FeaturedCategoriesWidget);

var _RecentlyViewedWidget = __webpack_require__(/*! ./Widgets/RecentlyViewedWidget */ "./src/components/pages/home/Widgets/RecentlyViewedWidget.js");

var _RecentlyViewedWidget2 = _interopRequireDefault(_RecentlyViewedWidget);

var _DiagramWidget = __webpack_require__(/*! ./Widgets/DiagramWidget */ "./src/components/pages/home/Widgets/DiagramWidget.js");

var _DiagramWidget2 = _interopRequireDefault(_DiagramWidget);

var _OtherViewedWidget = __webpack_require__(/*! ./Widgets/OtherViewedWidget */ "./src/components/pages/home/Widgets/OtherViewedWidget.js");

var _OtherViewedWidget2 = _interopRequireDefault(_OtherViewedWidget);

var _Recommended = __webpack_require__(/*! ./Widgets/Recommended */ "./src/components/pages/home/Widgets/Recommended.js");

var _Recommended2 = _interopRequireDefault(_Recommended);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Home = function Home() {
  return _react2.default.createElement(
    'section',
    { className: 'wrapper' },
    _react2.default.createElement(_banner2.default, null),
    _react2.default.createElement(_shopbytabs2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'body-container' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_FeaturedCategoriesWidget2.default, null),
        _react2.default.createElement(_RecentlyViewedWidget2.default, null),
        _react2.default.createElement(_Recommended2.default, null),
        _react2.default.createElement(_DiagramWidget2.default, null),
        _react2.default.createElement(_OtherViewedWidget2.default, null)
      )
    )
  );
};

var _default = Home;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/shopbytabs/Makes.js":
/*!*******************************************************!*\
  !*** ./src/components/pages/home/shopbytabs/Makes.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.FitElementMake = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _fitmentselectinput = __webpack_require__(/*! ../../../common/fitmentselectinput */ "./src/components/common/fitmentselectinput.js");

var _fitmentselectinput2 = _interopRequireDefault(_fitmentselectinput);

var _reactRelay = __webpack_require__(/*! react-relay */ "react-relay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Makes = function Makes() {
  var node = __webpack_require__(/*! ./__generated__/MakesQuery.graphql */ "./src/components/pages/home/shopbytabs/__generated__/MakesQuery.graphql.js");

  if (node.hash && node.hash !== '2b8245d4c8dca99e6c8fd3d21473713f') {
    console.error('The definition of \'MakesQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(/*! ./__generated__/MakesQuery.graphql */ "./src/components/pages/home/shopbytabs/__generated__/MakesQuery.graphql.js");
};

var FitElementMake = exports.FitElementMake = function FitElementMake(props) {
  return _react2.default.createElement(_fitmentselectinput2.default, {
    label: 'Make',
    value: 'Select Make',
    optionsArray: props.optionsArray
  });
};

var ShopByMake = function ShopByMake(parentprops) {
  return _react2.default.createElement(_reactRelay.QueryRenderer, {
    environment: parentprops.environment,
    query: Makes,
    variables: { year: '2018' },
    render: function render(_ref) {
      var error = _ref.error,
          props = _ref.props;

      var emptyMakes = [];
      console.log('here are the props ****** ' + props);
      if (error) {
        return _react2.default.createElement(
          'div',
          null,
          error.message
        );
      } else if (props) {
        return _react2.default.createElement(FitElementMake, { optionsArray: props.value });
      }
      return _react2.default.createElement(FitElementMake, { optionsArray: emptyMakes });
    }
  });
};

var MakeContainer = function MakeContainer(props) {
  return _react2.default.createElement(ShopByMake, { environment: props.relay.environment });
};

var _default = (0, _reactRelay.createFragmentContainer)(MakeContainer, {
  store: function store() {
    var node = __webpack_require__(/*! ./__generated__/Makes_store.graphql */ "./src/components/pages/home/shopbytabs/__generated__/Makes_store.graphql.js");

    if (node.hash && node.hash !== 'b49f099f36569b4f6c2a7b3bc2b5b38f') {
      console.error('The definition of \'Makes_store\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(/*! ./__generated__/Makes_store.graphql */ "./src/components/pages/home/shopbytabs/__generated__/Makes_store.graphql.js");
  }
});

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Makes, 'Makes', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/Makes.js');
  reactHotLoader.register(FitElementMake, 'FitElementMake', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/Makes.js');
  reactHotLoader.register(ShopByMake, 'ShopByMake', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/Makes.js');
  reactHotLoader.register(MakeContainer, 'MakeContainer', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/Makes.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/Makes.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/shopbytabs/__generated__/MakesQuery.graphql.js":
/*!**********************************************************************************!*\
  !*** ./src/components/pages/home/shopbytabs/__generated__/MakesQuery.graphql.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/**
 * 
 * @relayHash 4dadfcd04bd70fa99b34e71fd2518cab
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MakesQueryVariables = {|
  year: string
|};
export type MakesQueryResponse = {|
  +store: {|
    +makes: $ReadOnlyArray<{|
      +key: string,
      +value: string,
    |}>
  |}
|};
export type MakesQuery = {|
  variables: MakesQueryVariables,
  response: MakesQueryResponse,
|};
*/

/*
query MakesQuery(
  $year: String!
) {
  store {
    makes(year: $year) {
      key
      value
    }
  }
}
*/

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "year",
    "type": "String!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "store",
    "storageKey": null,
    "args": null,
    "concreteType": "Store",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "makes",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "year",
        "variableName": "year",
        "type": "String!"
      }],
      "concreteType": "item",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "key",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "MakesQuery",
    "id": null,
    "text": "query MakesQuery(\n  $year: String!\n) {\n  store {\n    makes(year: $year) {\n      key\n      value\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "MakesQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "MakesQuery",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '2b8245d4c8dca99e6c8fd3d21473713f';
module.exports = node;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(node, "node", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/__generated__/MakesQuery.graphql.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/shopbytabs/__generated__/Makes_store.graphql.js":
/*!***********************************************************************************!*\
  !*** ./src/components/pages/home/shopbytabs/__generated__/Makes_store.graphql.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Makes_store$ref: FragmentReference;
export type Makes_store = {|
  +idQuery: ?number,
  +$refType: Makes_store$ref,
|};
*/

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Makes_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "idQuery",
    "args": null,
    "storageKey": null
  }]
};
// prettier-ignore
node /*: any*/.hash = 'b49f099f36569b4f6c2a7b3bc2b5b38f';
module.exports = node;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(node, "node", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/__generated__/Makes_store.graphql.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/shopbytabs/index.js":
/*!*******************************************************!*\
  !*** ./src/components/pages/home/shopbytabs/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./tabs.scss */ "./src/components/pages/home/shopbytabs/tabs.scss");

var _Tabs = __webpack_require__(/*! ../../../common/Tabs */ "./src/components/common/Tabs/index.js");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _fitmentselectinput = __webpack_require__(/*! ../../../common/fitmentselectinput */ "./src/components/common/fitmentselectinput.js");

var _fitmentselectinput2 = _interopRequireDefault(_fitmentselectinput);

var _FitmentSearchInput = __webpack_require__(/*! ../../../common/FitmentSearchInput */ "./src/components/common/FitmentSearchInput.js");

var _FitmentSearchInput2 = _interopRequireDefault(_FitmentSearchInput);

var _Makes = __webpack_require__(/*! ./Makes */ "./src/components/pages/home/shopbytabs/Makes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopByTabs = function (_React$Component) {
  _inherits(ShopByTabs, _React$Component);

  function ShopByTabs() {
    var _temp, _this, _ret;

    _classCallCheck(this, ShopByTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      vinValue: '',
      partValue: '',
      selectedYear: ''
    }, _this.handleChange = function () {
      _this.setState(function () {
        return {
          selectedYear: '2018'
        };
      });
      console.log('state is changed ' + _this.state.selectedYear);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ShopByTabs.prototype.render = function render() {
    var year = ['2018', '2017', '2016', '2015', '2014'];
    var model = ['A3', 'A3 Quattro', 'A4', 'A4 Quattro', 'A5', 'A5 Quattro'];
    var submodel = ['Premium', 'Premium Plus', 'Prestige', 'TDI Premium', 'TDI Premium Plus'];
    var engine = ['1.8L 4cyl', '2.0L 4cyl'];

    return _react2.default.createElement(
      'section',
      { className: 'tabs' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'tabs-wrapper' },
          _react2.default.createElement(
            _Tabs2.default,
            { className: 'tabs-main' },
            _react2.default.createElement(
              'div',
              { label: 'Shop By Vehicle', classvalue: 'tabs-button' },
              _react2.default.createElement(
                'div',
                { className: 'form-wrapper' },
                _react2.default.createElement(_fitmentselectinput2.default, {
                  label: 'Year',
                  value: 'Select Year',
                  optionsArray: year,
                  onChange: this.handleChange
                }),
                _react2.default.createElement(_Makes.FitElementMake, null),
                _react2.default.createElement(_fitmentselectinput2.default, {
                  label: 'Model',
                  value: 'Select Model',
                  optionsArray: model
                }),
                _react2.default.createElement(_fitmentselectinput2.default, {
                  label: 'Submodel',
                  value: 'Select Submodel',
                  optionsArray: submodel
                }),
                _react2.default.createElement(_fitmentselectinput2.default, {
                  label: 'Engine',
                  value: 'Select Engine',
                  optionsArray: engine
                }),
                _react2.default.createElement(
                  'div',
                  { className: 'fitment-input' },
                  _react2.default.createElement(
                    'button',
                    { className: 'button-fit-search' },
                    'Shop now'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { label: 'Shop By VIN', classvalue: 'tabs-button' },
              _react2.default.createElement(
                'div',
                { className: 'form-wrapper' },
                _react2.default.createElement(
                  'form',
                  null,
                  _react2.default.createElement(_FitmentSearchInput2.default, {
                    value: this.state.vinValue,
                    placeholder: 'Search By VIN Number',
                    buttonlabel: 'Search'
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { label: 'Shop By Part', classvalue: 'tabs-button' },
              _react2.default.createElement(
                'div',
                { className: 'form-wrapper' },
                _react2.default.createElement(
                  'form',
                  null,
                  _react2.default.createElement(_FitmentSearchInput2.default, {
                    value: this.state.partValue,
                    placeholder: 'Search By Keyword and Part Number',
                    buttonlabel: 'Search'
                  })
                )
              )
            )
          )
        )
      )
    );
  };

  // @ts-ignore
  ShopByTabs.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ShopByTabs;
}(_react2.default.Component);

var _default = ShopByTabs;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ShopByTabs, 'ShopByTabs', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/index.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/components/pages/home/shopbytabs/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/pages/home/shopbytabs/tabs.scss":
/*!********************************************************!*\
  !*** ./src/components/pages/home/shopbytabs/tabs.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/home/viewed.json":
/*!***********************************************!*\
  !*** ./src/components/pages/home/viewed.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = [{"title":"Oxygen Sensor Rear (Delphi)","imagesrc":"/public/images/viewed1.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Air / Fuel Ratio Sensor Upstream (DENSO Auto Parts)","imagesrc":"/public/images/viewed2.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Mass Air Flow Sensor (Hitachi Automotive)","imagesrc":"/public/images/viewed3.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Oxygen Sensor Downstream (Bosch)","imagesrc":"/public/images/viewed4.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Aluminum Wheels-Alloy 20 Wheel","imagesrc":"/public/images/viewed5.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Oxygen Sensor Rear (Delphi)","imagesrc":"/public/images/viewed1.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Air / Fuel Ratio Sensor Upstream (DENSO Auto Parts)","imagesrc":"/public/images/viewed2.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Mass Air Flow Sensor (Hitachi Automotive)","imagesrc":"/public/images/viewed3.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Oxygen Sensor Downstream (Bosch)","imagesrc":"/public/images/viewed4.png","price":"$136.58","linkvalue":"Shop now >"},{"title":"Aluminum Wheels-Alloy 20 Wheel","imagesrc":"/public/images/viewed5.png","price":"$136.58","linkvalue":"Shop now >"}];

/***/ }),

/***/ "./src/createRelayEnvironment.js":
/*!***************************************!*\
  !*** ./src/createRelayEnvironment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = createRelayEnvironment;

var _reactRelayNetworkModern = __webpack_require__(/*! react-relay-network-modern */ "react-relay-network-modern");

var _relayRuntime = __webpack_require__(/*! relay-runtime */ "relay-runtime");

var _setSubscription = __webpack_require__(/*! ./setSubscription */ "./src/setSubscription.js");

var _setSubscription2 = _interopRequireDefault(_setSubscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function createRelayEnvironment(relaySsr, url) {
  var subscription = { subscribeFn: _setSubscription2.default }; // optional advanced options
  return new _relayRuntime.Environment({
    network: new _reactRelayNetworkModern.RelayNetworkLayer([relaySsr.getMiddleware(), (0, _reactRelayNetworkModern.urlMiddleware)({ url: url })], subscription),
    store: new _relayRuntime.Store(new _relayRuntime.RecordSource())
  });
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createRelayEnvironment, 'createRelayEnvironment', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/createRelayEnvironment.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/mutations/RemoveFromCartMutation.js":
/*!*************************************************!*\
  !*** ./src/mutations/RemoveFromCartMutation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _reactRelay = __webpack_require__(/*! react-relay */ "react-relay");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * This file provided by Facebook is for non-commercial testing and evaluation
       * purposes only.  Facebook reserves all rights not expressly granted.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
       * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
       * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
       * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       */

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/RemoveFromCartMutation.graphql */ "./src/mutations/__generated__/RemoveFromCartMutation.graphql.js");

  if (node.hash && node.hash !== 'a36fcd6c17f6df27d290342faa437412') {
    console.error('The definition of \'RemoveFromCartMutation\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(/*! ./__generated__/RemoveFromCartMutation.graphql */ "./src/mutations/__generated__/RemoveFromCartMutation.graphql.js");
};

function commit(environment, props) {
  return (0, _reactRelay.commitMutation)(environment, {
    mutation: mutation,
    variables: {
      input: {
        cart_id: props.cart_id,
        user_id: props.user_id,
        sku_id: props.sku_id,
        quantity: props.quantity,
        price: props.price,
        operation: props.operation,
        title: props.title,
        imageUrl: props.imageUrl,
        core_deposit: props.core_deposit,
        product_url: props.product_url,
        fitmentuid: props.fitmentuid,
        brand: props.brand,
        distributor_group: props.distributor_group,
        category: props.category,
        partType: props.partType
      }
    },
    onCompleted: function onCompleted(response, errors) {
      console.log('Response received from server.', response);
      console.log('Error received from server.', errors);
    },
    onError: function onError(err) {
      return console.error(err);
    }
  });
}

var _default = {
  commit: commit
};
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mutation, 'mutation', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/mutations/RemoveFromCartMutation.js');
  reactHotLoader.register(commit, 'commit', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/mutations/RemoveFromCartMutation.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/mutations/RemoveFromCartMutation.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/mutations/__generated__/RemoveFromCartMutation.graphql.js":
/*!***********************************************************************!*\
  !*** ./src/mutations/__generated__/RemoveFromCartMutation.graphql.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/**
 * 
 * @relayHash 5a345dd396f1448ea6c98841fea4cf0a
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CartOperationInput = {
  cart_id: string,
  user_id: string,
  sku_id: string,
  quantity: string,
  price: string,
  operation: string,
  title: string,
  core_deposit: string,
  imageUrl: string,
  product_url: string,
  distributor_group: string,
  fitmentuid: string,
  brand: string,
  category: string,
  partType: string,
  clientMutationId?: ?string,
};
export type RemoveFromCartMutationVariables = {|
  input: CartOperationInput
|};
export type RemoveFromCartMutationResponse = {|
  +cartOperation: ?{|
    +cart: ?{|
      +id: string,
      +cart_id: string,
      +cart_total: string,
      +core_deposit_total: string,
      +totalNumberOfItems: string,
      +cart_entry: $ReadOnlyArray<{|
        +price: number,
        +sku_id: string,
        +brand: string,
        +quantity: number,
        +title: string,
        +imageUrl: string,
        +core_deposit: number,
        +product_url: string,
        +fitmentuid: string,
        +distributor_group: string,
        +category: string,
        +partType: string,
      |}>,
    |}
  |}
|};
export type RemoveFromCartMutation = {|
  variables: RemoveFromCartMutationVariables,
  response: RemoveFromCartMutationResponse,
|};
*/

/*
mutation RemoveFromCartMutation(
  $input: CartOperationInput!
) {
  cartOperation(input: $input) {
    cart {
      id
      cart_id
      cart_total
      core_deposit_total
      totalNumberOfItems
      cart_entry {
        price
        sku_id
        brand
        quantity
        title
        imageUrl
        core_deposit
        product_url
        fitmentuid
        distributor_group
        category
        partType
      }
    }
  }
}
*/

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "CartOperationInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "cartOperation",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "CartOperationInput!"
    }],
    "concreteType": "CartOperationPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "cart",
      "storageKey": null,
      "args": null,
      "concreteType": "CartType",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "cart_id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "cart_total",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "core_deposit_total",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "totalNumberOfItems",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "cart_entry",
        "storageKey": null,
        "args": null,
        "concreteType": "CartEntry",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "price",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "sku_id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "brand",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "quantity",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "imageUrl",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "core_deposit",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "product_url",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "fitmentuid",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "distributor_group",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "category",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "partType",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "RemoveFromCartMutation",
    "id": null,
    "text": "mutation RemoveFromCartMutation(\n  $input: CartOperationInput!\n) {\n  cartOperation(input: $input) {\n    cart {\n      id\n      cart_id\n      cart_total\n      core_deposit_total\n      totalNumberOfItems\n      cart_entry {\n        price\n        sku_id\n        brand\n        quantity\n        title\n        imageUrl\n        core_deposit\n        product_url\n        fitmentuid\n        distributor_group\n        category\n        partType\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "RemoveFromCartMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "RemoveFromCartMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = 'a36fcd6c17f6df27d290342faa437412';
module.exports = node;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(node, "node", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/mutations/__generated__/RemoveFromCartMutation.graphql.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.render = exports.routeConfig = exports.historyMiddlewares = undefined;

var _queryMiddleware = __webpack_require__(/*! farce/lib/queryMiddleware */ "./node_modules/farce/lib/queryMiddleware.js");

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createRender = __webpack_require__(/*! found/lib/createRender */ "./node_modules/found/lib/createRender.js");

var _createRender2 = _interopRequireDefault(_createRender);

var _makeRouteConfig = __webpack_require__(/*! found/lib/makeRouteConfig */ "./node_modules/found/lib/makeRouteConfig.js");

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(/*! found/lib/Route */ "./node_modules/found/lib/Route.js");

var _Route2 = _interopRequireDefault(_Route);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _home = __webpack_require__(/*! ./components/pages/home/ */ "./src/components/pages/home/index.js");

var _home2 = _interopRequireDefault(_home);

var _reactRelay = __webpack_require__(/*! react-relay */ "react-relay");

var _App = __webpack_require__(/*! ./shared/App */ "./src/shared/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var historyMiddlewares = exports.historyMiddlewares = [_queryMiddleware2.default];

var AppQuery = function AppQuery() {
  var node = __webpack_require__(/*! ./__generated__/router_App_Query.graphql */ "./src/__generated__/router_App_Query.graphql.js");

  if (node.hash && node.hash !== '7a6db36864f7d0fd6ad67fea4fe65d39') {
    console.error('The definition of \'router_App_Query\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(/*! ./__generated__/router_App_Query.graphql */ "./src/__generated__/router_App_Query.graphql.js");
};

var routeConfig = exports.routeConfig = (0, _makeRouteConfig2.default)(_react2.default.createElement(
  _Route2.default,
  { path: '/', Component: _App2.default, query: AppQuery },
  _react2.default.createElement(_Route2.default, { path: '/', Component: _home2.default })
));

var render = exports.render = (0, _createRender2.default)({
  renderError: function renderError(_ref) {
    var error = _ref.error;
    return _react2.default.createElement(
      'div',
      null,
      error.status === 404 ? _react2.default.createElement(
        'div',
        { className: 'agileinfo-row' },
        _react2.default.createElement(
          'h2',
          null,
          '404'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'This page was Swollen By Blackhole',
          _react2.default.createElement(
            'a',
            { href: '/' },
            'Back to home'
          )
        )
      ) : 'Error'
    );
  }
});
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(historyMiddlewares, 'historyMiddlewares', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/router.js');
  reactHotLoader.register(AppQuery, 'AppQuery', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/router.js');
  reactHotLoader.register(routeConfig, 'routeConfig', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/router.js');
  reactHotLoader.register(render, 'render', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/router.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/setSubscription.js":
/*!********************************!*\
  !*** ./src/setSubscription.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = sendSubscription;

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _socket = __webpack_require__(/*! socket.io-client */ "socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var socket = (0, _socket2.default)('http://ecom.enetdefender.com/');
var requests = Object.create(null);
socket.on('connect', function () {
  //  console.log('connected');
});

function sendSubscription(operation, variables, cacheConfig, observer) {
  //  console.log(observer);
  var id = 0;
  requests[id] = observer;
  //  console.log(operation);
  // console.log("getting sendSubscription", {
  //  id,
  //  query: operation.text,
  //  variables: variables,
  //  });

  socket.emit('subscribe', {
    id: id,
    query: operation.text,
    variables: variables
  });

  socket.on('subscription update', function (_ref) {
    var id = _ref.id,
        data = _ref.data,
        errors = _ref.errors;

    //  console.log("subscription processed");
    var request = requests[id];
    if (!request) {
      return;
    }

    if (errors) {
      //  console.log('subscription error', errors);
      request.onError(errors);
    } else {
      //  console.log("subscription frowarding");
      //  console.log(data);
      request.onNext({ data: data });
    }
  });

  socket.on('subscription closed', function (id) {
    var request = requests[id];
    if (!request) {
      return;
    }
    //  console.log(`Subscription ${id} is completed`);
    request.onCompleted();
    delete requests[id];
  });

  socket.on('error', function (error) {
    Object.values(requests).forEach(function (request) {
      request.onError(error);
    });
  });

  return {
    dispose: function dispose() {
      //  console.log(`disposing`);
      socket.emit('unsubscribe', id);
    }
  };
}

// this method should be used on the right place
/*  function disconnect() {
  socket.disconnect();
  requests.forEach(request => {
    request.onCompleted();
  });
} */

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(socket, 'socket', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/setSubscription.js');
  reactHotLoader.register(requests, 'requests', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/setSubscription.js');
  reactHotLoader.register(sendSubscription, 'sendSubscription', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/setSubscription.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(/*! found/lib/Link */ "./node_modules/found/lib/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _reactRelay = __webpack_require__(/*! react-relay */ "react-relay");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _header = __webpack_require__(/*! ../components/common/header */ "./src/components/common/header/index.js");

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(/*! ../components/common/footer */ "./src/components/common/footer/index.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var App = function App(props) {
  var children = props.children;

  return _react2.default.createElement(
    'div',
    { id: 'mcont' },
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement('html', { lang: 'en' }),
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', { name: 'application-name', content: 'modern relay poc' }),
      _react2.default.createElement('meta', { name: 'description', content: 'modern relay poc' }),
      _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      _react2.default.createElement(
        'title',
        null,
        'The Autoparts Shop'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(
        'main',
        null,
        children
      ),
      _react2.default.createElement(_footer2.default, null)
    )
  );
};

var _default = (0, _reactRelay.createFragmentContainer)(App, {
  store: function store() {
    var node = __webpack_require__(/*! ./__generated__/App_store.graphql */ "./src/shared/__generated__/App_store.graphql.js");

    if (node.hash && node.hash !== '7ecfc1a7cf619a6889e86add89fb18c3') {
      console.error('The definition of \'App_store\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(/*! ./__generated__/App_store.graphql */ "./src/shared/__generated__/App_store.graphql.js");
  }
});

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/shared/App.js');
  reactHotLoader.register(_default, 'default', '/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/shared/App.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/shared/__generated__/App_store.graphql.js":
/*!*******************************************************!*\
  !*** ./src/shared/__generated__/App_store.graphql.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_store$ref: FragmentReference;
export type App_store = {|
  +idQuery: ?number,
  +$refType: App_store$ref,
|};
*/

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "App_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "idQuery",
    "args": null,
    "storageKey": null
  }]
};
// prettier-ignore
node /*: any*/.hash = '7ecfc1a7cf619a6889e86add89fb18c3';
module.exports = node;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(node, "node", "/home/spineor/Documents/taps-modern-relay/relay-modern-poc/src/shared/__generated__/App_store.graphql.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi regenerator-runtime/runtime.js ./server/render.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime.js */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! /home/spineor/Documents/taps-modern-relay/relay-modern-poc/server/render.js */"./server/render.js");


/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "found-relay":
/*!******************************!*\
  !*** external "found-relay" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("found-relay");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "is-promise":
/*!*****************************!*\
  !*** external "is-promise" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-promise");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-autosuggest":
/*!************************************!*\
  !*** external "react-autosuggest" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-relay":
/*!******************************!*\
  !*** external "react-relay" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "react-relay-network-modern":
/*!*********************************************!*\
  !*** external "react-relay-network-modern" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-relay-network-modern");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-static-container":
/*!*****************************************!*\
  !*** external "react-static-container" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-static-container");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "relay-runtime":
/*!********************************!*\
  !*** external "relay-runtime" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map