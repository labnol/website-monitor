function onOpen() {
}
function showSidebar() {
}
function uninstall() {
}
function trigger_WebsiteMonitor() {
}
function include() {
}
function saveSettings() {
}(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);




/**   Website Monitor 6.0 by Digital Inspiration    * */

/**   ==========================================    * */

/**   Published by Amit Agarwal on 02/14/2013       * */

/**   Last updated by @labnol on 01/08/2019         * */

/**   Details at http://labnol.org/?p=21060         * */

/**   Support: amit@labnol.org   twitter: @labnol   * */

global.onOpen = _ui__WEBPACK_IMPORTED_MODULE_0__["onOpen"];
global.showSidebar = _ui__WEBPACK_IMPORTED_MODULE_0__["showSidebar"];
global.uninstall = _ui__WEBPACK_IMPORTED_MODULE_0__["removeWebsiteMonitor"];
global.trigger_WebsiteMonitor = _main__WEBPACK_IMPORTED_MODULE_1__["default"];
global.include = _utils__WEBPACK_IMPORTED_MODULE_2__["include"];
global.saveSettings = _server__WEBPACK_IMPORTED_MODULE_3__["saveSettings"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onOpen", function() { return onOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSidebar", function() { return showSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWebsiteMonitor", function() { return removeWebsiteMonitor; });
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


var onOpen = function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var menu = [{
    name: 'Configure',
    functionName: 'showSidebar'
  }, null, {
    name: '✖ Uninstall',
    functionName: 'uninstall'
  }];
  sheet.addMenu('➪ Website Monitor', menu);
};
var showSidebar = function showSidebar() {
  var html = HtmlService.createTemplateFromFile('sidebar');

  var _getSettings = Object(_server__WEBPACK_IMPORTED_MODULE_1__["getSettings"])(),
      _getSettings$site = _getSettings.site,
      site = _getSettings$site === void 0 ? '' : _getSettings$site,
      _getSettings$email = _getSettings.email,
      email = _getSettings$email === void 0 ? '' : _getSettings$email,
      _getSettings$ga = _getSettings.ga,
      ga = _getSettings$ga === void 0 ? '' : _getSettings$ga;

  html.site = site;
  html.email = email;
  html.ga = ga;
  html.sheet = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var sidebar = html.evaluate().setTitle('Website Monitor');
  SpreadsheetApp.getUi().showSidebar(sidebar);
};
var removeWebsiteMonitor = function removeWebsiteMonitor() {
  Object(_trigger__WEBPACK_IMPORTED_MODULE_0__["deleteTrigger"])();
  SpreadsheetApp.getActiveSpreadsheet().toast('Website Monitor stopped!');
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTrigger", function() { return deleteTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrigger", function() { return createTrigger; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var TRIGGER = 'trigger_WebsiteMonitor';

var toggleTrigger = function toggleTrigger(enableTrigger) {
  var triggerList = {};
  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    if (enableTrigger) {
      triggerList[trigger.getHandlerFunction()] = true;
    } else {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["expBackoff"])(function () {
        return ScriptApp.deleteTrigger(trigger);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])();
    }
  });

  if (enableTrigger) {
    if (!triggerList[TRIGGER]) {
      ScriptApp.newTrigger(TRIGGER).timeBased().everyMinutes(10).create();
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])();
    }
  }
};

var deleteTrigger = function deleteTrigger() {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["expBackoff"])(function () {
    return toggleTrigger(false);
  });
};
var createTrigger = function createTrigger() {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["expBackoff"])(function () {
    return toggleTrigger(true);
  });
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expBackoff", function() { return expBackoff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "include", function() { return include; });
var logException = function logException(e) {
  console.error(e);
};
var expBackoff = function expBackoff(func) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

  for (var n = 0; n < max; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === max - 1) {
        logException(e);
        throw e;
      }

      Utilities.sleep(Math.pow(2, n) * 1000 + Math.round(Math.random() * 1000));
    }
  }

  return null;
};
var sleep = function sleep() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  Utilities.sleep(seconds * 1000);
};
var include = function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSettings", function() { return saveSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastStatus", function() { return getLastStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLastStatus", function() { return setLastStatus; });
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var SETTINGS = 'settings';
var LAST_STATUS = 'last';
var saveSettings = function saveSettings(value) {
  _props__WEBPACK_IMPORTED_MODULE_0__["default"].setUserProperty(SETTINGS, value);
  Object(_trigger__WEBPACK_IMPORTED_MODULE_1__["createTrigger"])();
  SpreadsheetApp.getActiveSpreadsheet().toast('Website Monitor is now running!');
  return 'Settings updated!';
};
var getSettings = function getSettings() {
  return _props__WEBPACK_IMPORTED_MODULE_0__["default"].getUserProperty(SETTINGS, true) || {};
};
var getLastStatus = function getLastStatus() {
  var lastStatus = _props__WEBPACK_IMPORTED_MODULE_0__["default"].getUserProperty(LAST_STATUS) || 200;
  return +lastStatus;
};
var setLastStatus = function setLastStatus(status) {
  _props__WEBPACK_IMPORTED_MODULE_0__["default"].setUserProperty(LAST_STATUS, status);
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Properties =
/*#__PURE__*/
function () {
  function Properties() {
    _classCallCheck(this, Properties);

    this.userProps = null;
  }

  _createClass(Properties, [{
    key: "getUserProps",
    value: function getUserProps() {
      if (this.userProps === null) {
        try {
          this.userProps = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["expBackoff"])(function () {
            return PropertiesService.getUserProperties();
          });
        } catch (f) {
          this.userProps = false;
        }
      }

      return this.userProps;
    }
  }, {
    key: "getUserProperty",
    value: function getUserProperty(key) {
      var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.getUserProps()) return null;
      var value = _cache__WEBPACK_IMPORTED_MODULE_1__["default"].getUserCacheValue("user".concat(key)) || this.getUserProps().getProperty(key);
      return json ? JSON.parse(value || '{}') : value;
    }
  }, {
    key: "getUserProperties",
    value: function getUserProperties() {
      if (this.getUserProps()) {
        return this.getUserProps().getProperties();
      }

      return {};
    }
  }, {
    key: "setUserProperty",
    value: function setUserProperty(key, value) {
      var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.getUserProps()) {
        var save = json ? JSON.stringify(value) : value;
        _cache__WEBPACK_IMPORTED_MODULE_1__["default"].setUserCacheValue("user".concat(key), save);
        this.getUserProps().setProperty(key, save);
      }
    }
  }, {
    key: "deleteUserProperty",
    value: function deleteUserProperty(key) {
      if (this.getUserProps()) {
        _cache__WEBPACK_IMPORTED_MODULE_1__["default"].deleteUserCacheValue("user".concat(key));
        this.getUserProps().deleteProperty(key);
      }
    }
  }, {
    key: "deleteUserProperties",
    value: function deleteUserProperties() {
      if (this.getUserProps()) {
        this.getUserProps().deleteAllProperties();
      }
    }
  }]);

  return Properties;
}();

var properties = new Properties();
/* harmony default export */ __webpack_exports__["default"] = (properties);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cache =
/*#__PURE__*/
function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this.userCache = null;
    this.docCache = null;
  }

  _createClass(Cache, [{
    key: "getUserCache",
    value: function getUserCache() {
      if (this.userCache === null) {
        try {
          this.userCache = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["expBackoff"])(function () {
            return CacheService.getUserCache();
          });
        } catch (f) {
          this.userCache = false;
        }
      }

      return this.userCache;
    }
  }, {
    key: "getUserCacheValue",
    value: function getUserCacheValue(key) {
      var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.getUserCache()) return null;

      try {
        var value = this.getUserCache().get(key);

        if (value) {
          return json ? JSON.parse(value) : value;
        }
      } catch (f) {// do nothing
      }

      return null;
    }
  }, {
    key: "setUserCacheValue",
    value: function setUserCacheValue(key, value) {
      var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!this.getUserCache()) return;

      try {
        if (!value || json && !Object.keys(value).length) {
          this.deleteUserCacheValue(key);
          return;
        }

        this.getUserCache().put(key, json ? JSON.stringify(value) : value, 21600);
      } catch (f) {// do nothing
      }
    }
  }, {
    key: "deleteUserCacheValue",
    value: function deleteUserCacheValue(key) {
      if (this.getUserCache()) this.getUserCache().remove(key);
    }
  }]);

  return Cache;
}();

var cache = new Cache();
/* harmony default export */ __webpack_exports__["default"] = (cache);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





var main = function main() {
  try {
    var settings = Object(_server__WEBPACK_IMPORTED_MODULE_0__["getSettings"])();

    if (settings.site) {
      var newStatus = Object(_connect__WEBPACK_IMPORTED_MODULE_1__["default"])(settings.site);
      var oldStatus = Object(_server__WEBPACK_IMPORTED_MODULE_0__["getLastStatus"])();

      if (oldStatus !== newStatus) {
        Object(_server__WEBPACK_IMPORTED_MODULE_0__["setLastStatus"])(newStatus);

        if (newStatus === 200) {
          Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])(settings, 'Up'); // site is now up
        } else if (oldStatus === 200) {
          // site is down
          Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])(settings, 'Down');
        } else {// site continues to be down
          // do nothing
        }
      }
    }
  } catch (f) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["logException"])(f);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


var sitecall = function sitecall(func) {
  var MAX = 3;

  for (var n = 0; n < MAX; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === MAX - 1) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logException"])(e);
        throw e;
      }

      Utilities.sleep(Math.pow(2, n) * 20000 + Math.round(Math.random() * 1000));
    }
  }

  return null;
};

var getUpStatus = function getUpStatus() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  try {
    var response = sitecall(function () {
      return UrlFetchApp.fetch(url, {
        validateHttpsCertificates: false,
        followRedirects: true,
        muteHttpExceptions: false
      });
    });
    return response.getResponseCode();
  } catch (f) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logException"])(f);
    return 99;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getUpStatus);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var writeToGoogleSheet = function writeToGoogleSheet(message) {
  try {
    SpreadsheetApp.getActiveSheet().appendRow([new Date(), message]);
  } catch (f) {// do nothing
  }
};

var logEvent = function logEvent(settings, status) {
  try {
    var site = settings.site,
        _settings$ga = settings.ga,
        ga = _settings$ga === void 0 ? '' : _settings$ga;
    writeToGoogleSheet([site, 'is', status].join(' '));
    Object(_analytics__WEBPACK_IMPORTED_MODULE_0__["default"])(ga, site, status);
    Object(_mail__WEBPACK_IMPORTED_MODULE_1__["default"])(settings, status);
  } catch (f) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["logException"])(f);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (logEvent);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


var s4 = function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var guid = function guid() {
  return "".concat(s4() + s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4()).concat(s4()).concat(s4());
};

var writeToGoogleAnalytics = function writeToGoogleAnalytics(id, site, status) {
  if (id) {
    try {
      var request = ['https://ssl.google-analytics.com/collect?v=1', 't=event', "ec=".concat(encodeURIComponent('Website Monitor')), "tid=".concat(id), "z=".concat(Math.round(new Date().getTime() / 1000).toString()), "cid=".concat(guid()), "ea=".concat(encodeURIComponent(site)), "el=".concat(status)].join('&');
      UrlFetchApp.fetch(request, {
        muteHttpExceptions: true
      });
    } catch (e) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logException"])(e);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (writeToGoogleAnalytics);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


var sendEmailAlert = function sendEmailAlert(settings, status) {
  try {
    var site = settings.site,
        _settings$email = settings.email,
        email = _settings$email === void 0 ? '' : _settings$email,
        _settings$sheet = settings.sheet,
        sheet = _settings$sheet === void 0 ? '' : _settings$sheet;
    var subject = "Website ".concat(status, " Alert - ").concat(site);
    var quota = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["expBackoff"])(function () {
      return MailApp.getRemainingDailyQuota();
    });

    if (quota > 1) {
      var html = HtmlService.createTemplateFromFile('email');
      html.site = site;
      html.status = status.toLowerCase();
      html.sheet = sheet;
      MailApp.sendEmail(email, subject, "".concat(site, " is ").concat(status), {
        htmlBody: html.evaluate().getContent(),
        name: 'Website Monitor',
        replyTo: 'amit@labnol.org'
      });
    }
  } catch (f) {
    console.error(f);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sendEmailAlert);

/***/ })
/******/ ])));