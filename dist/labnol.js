!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return logException;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return expBackoff;
    }), __webpack_require__.d(__webpack_exports__, "e", function() {
        return sleep;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return include;
    }), __webpack_require__.d(__webpack_exports__, "a", function() {
        return TITLE;
    });
    var logException = function logException(e) {
        console.error(e);
    }, expBackoff = function expBackoff(func) {
        for (var max = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : 6, n = 0; n < max; n += 1) try {
            return func();
        } catch (e) {
            if (n === max - 1) throw logException(e), e;
            Utilities.sleep(1e3 * Math.pow(2, n) + Math.round(1e3 * Math.random()));
        }
        return null;
    }, sleep = function sleep() {
        var seconds = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : 1;
        Utilities.sleep(1e3 * seconds);
    }, include = function include(filename) {
        return HtmlService.createHtmlOutputFromFile(filename).getContent();
    }, TITLE = "Website Monitor";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    var src_cache = new (function() {
        function Cache() {
            !function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }(this, Cache), this.userCache = null, this.docCache = null;
        }
        return function _createClass(Constructor, protoProps, staticProps) {
            return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), 
            Constructor;
        }(Cache, [ {
            key: "getUserCache",
            value: function() {
                if (null === this.userCache) try {
                    this.userCache = Object(utils["b"])(function() {
                        return CacheService.getUserCache();
                    });
                } catch (f) {
                    this.userCache = !1;
                }
                return this.userCache;
            }
        }, {
            key: "getUserCacheValue",
            value: function(key) {
                var json = 1 < arguments.length && arguments[1] !== undefined && arguments[1];
                if (!this.getUserCache()) return null;
                try {
                    var value = this.getUserCache().get(key);
                    if (value) return json ? JSON.parse(value) : value;
                } catch (f) {}
                return null;
            }
        }, {
            key: "setUserCacheValue",
            value: function(key, value) {
                var json = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
                if (this.getUserCache()) try {
                    if (!value || json && !Object.keys(value).length) return void this.deleteUserCacheValue(key);
                    this.getUserCache().put(key, json ? JSON.stringify(value) : value, 21600);
                } catch (f) {}
            }
        }, {
            key: "deleteUserCacheValue",
            value: function(key) {
                this.getUserCache() && this.getUserCache().remove(key);
            }
        } ]), Cache;
    }())();
    function props_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    var props = new (function() {
        function Properties() {
            !function props_classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }(this, Properties), this.userProps = null;
        }
        return function props_createClass(Constructor, protoProps, staticProps) {
            return protoProps && props_defineProperties(Constructor.prototype, protoProps), 
            staticProps && props_defineProperties(Constructor, staticProps), Constructor;
        }(Properties, [ {
            key: "getUserProps",
            value: function() {
                if (null === this.userProps) try {
                    this.userProps = Object(utils["b"])(function() {
                        return PropertiesService.getUserProperties();
                    });
                } catch (f) {
                    this.userProps = !1;
                }
                return this.userProps;
            }
        }, {
            key: "getUserProperty",
            value: function(key) {
                var json = 1 < arguments.length && arguments[1] !== undefined && arguments[1];
                if (!this.getUserProps()) return null;
                var value = src_cache.getUserCacheValue("user".concat(key)) || this.getUserProps().getProperty(key);
                return json ? JSON.parse(value || "{}") : value;
            }
        }, {
            key: "getUserProperties",
            value: function() {
                return this.getUserProps() ? this.getUserProps().getProperties() : {};
            }
        }, {
            key: "setUserProperty",
            value: function(key, value) {
                var json = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
                if (this.getUserProps()) {
                    var save = json ? JSON.stringify(value) : value;
                    src_cache.setUserCacheValue("user".concat(key), save), this.getUserProps().setProperty(key, save);
                }
            }
        }, {
            key: "deleteUserProperty",
            value: function(key) {
                this.getUserProps() && (src_cache.deleteUserCacheValue("user".concat(key)), this.getUserProps().deleteProperty(key));
            }
        }, {
            key: "deleteUserProperties",
            value: function() {
                this.getUserProps() && this.getUserProps().deleteAllProperties();
            }
        } ]), Properties;
    }())(), trigger = __webpack_require__(2);
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return server_saveSettings;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return server_getSettings;
    }), __webpack_require__.d(__webpack_exports__, "a", function() {
        return server_getLastStatus;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return server_setLastStatus;
    });
    var server_saveSettings = function(value) {
        return props.setUserProperty("settings", value), Object(trigger["a"])(), SpreadsheetApp.getActiveSpreadsheet().toast("".concat(utils["a"], " is now running!")), 
        "Settings updated!";
    }, server_getSettings = function() {
        return props.getUserProperty("settings", !0) || {};
    }, server_getLastStatus = function() {
        return +(props.getUserProperty("status") || 200);
    }, server_setLastStatus = function(status) {
        props.setUserProperty("status", status);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return deleteTrigger;
    }), __webpack_require__.d(__webpack_exports__, "a", function() {
        return createTrigger;
    });
    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), TRIGGER = "trigger_WebsiteMonitor", toggleTrigger = function toggleTrigger(enableTrigger) {
        var triggerList = {};
        ScriptApp.getProjectTriggers().forEach(function(trigger) {
            enableTrigger ? triggerList[trigger.getHandlerFunction()] = !0 : (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["b"])(function() {
                return ScriptApp.deleteTrigger(trigger);
            }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["e"])());
        }), enableTrigger && (triggerList[TRIGGER] || (ScriptApp.newTrigger(TRIGGER).timeBased().everyMinutes(5).create(), 
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["e"])()));
    }, deleteTrigger = function deleteTrigger() {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["b"])(function() {
            return toggleTrigger(!1);
        });
    }, createTrigger = function createTrigger() {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["b"])(function() {
            return toggleTrigger(!0);
        });
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return onOpen;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return showSidebar;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return removeWebsiteMonitor;
    });
    var _trigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2), _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1), _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0), onOpen = function onOpen() {
        SpreadsheetApp.getActiveSpreadsheet().addMenu("➪ ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["a"]), [ {
            name: "Configure",
            functionName: "showSidebar"
        }, null, {
            name: "✖ Uninstall",
            functionName: "uninstall"
        } ]);
    }, showSidebar = function showSidebar() {
        var html = HtmlService.createTemplateFromFile("sidebar"), _getSettings = Object(_server__WEBPACK_IMPORTED_MODULE_1__["b"])(), _getSettings$site = _getSettings.site, site = void 0 === _getSettings$site ? "" : _getSettings$site, _getSettings$email = _getSettings.email, email = void 0 === _getSettings$email ? "" : _getSettings$email, _getSettings$ga = _getSettings.ga, ga = void 0 === _getSettings$ga ? "" : _getSettings$ga;
        html.site = site, html.email = email, html.ga = ga, html.sheet = SpreadsheetApp.getActiveSpreadsheet().getUrl();
        var sidebar = html.evaluate().setTitle(_utils__WEBPACK_IMPORTED_MODULE_2__["a"]);
        SpreadsheetApp.getUi().showSidebar(sidebar);
    }, removeWebsiteMonitor = function removeWebsiteMonitor() {
        Object(_trigger__WEBPACK_IMPORTED_MODULE_0__["b"])(), SpreadsheetApp.getActiveSpreadsheet().toast("".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["a"], " stopped!"));
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var server = __webpack_require__(1), utils = __webpack_require__(0), connect = function() {
        var url = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "";
        try {
            return "https://www.labnol.org" === url ? [ 200, 403, 404, 99 ][(4 * Math.random()).toFixed()] : function(func) {
                for (var n = 0; n < 3; n += 1) try {
                    return func();
                } catch (e) {
                    if (2 === n) throw Object(utils["d"])(e), e;
                    Utilities.sleep(2e4 * Math.pow(2, n) + Math.round(1e3 * Math.random()));
                }
                return null;
            }(function() {
                return UrlFetchApp.fetch(url, {
                    validateHttpsCertificates: !1,
                    followRedirects: !0,
                    muteHttpExceptions: !1
                });
            }).getResponseCode();
        } catch (f) {
            return Object(utils["d"])(f), 99;
        }
    }, s4 = function s4() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }, guid = function guid() {
        return "".concat(s4() + s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4()).concat(s4()).concat(s4());
    }, analytics = function(id, site, status) {
        if (id) try {
            var request = [ "https://ssl.google-analytics.com/collect?v=1", "t=event", "ec=".concat(encodeURIComponent(utils["a"])), "tid=".concat(id), "z=".concat(Math.round(new Date().getTime() / 1e3).toString()), "cid=".concat(guid()), "ea=".concat(encodeURIComponent(site)), "el=".concat(status) ].join("&");
            UrlFetchApp.fetch(request, {
                muteHttpExceptions: !0
            });
        } catch (e) {
            Object(utils["d"])(e);
        }
    }, mail = function(settings, status) {
        try {
            var site = settings.site, _settings$email = settings.email, email = void 0 === _settings$email ? "" : _settings$email, _settings$sheet = settings.sheet, sheet = void 0 === _settings$sheet ? "" : _settings$sheet, subject = "Website ".concat(status, " Alert - ").concat(site);
            if (1 < Object(utils["b"])(function() {
                return MailApp.getRemainingDailyQuota();
            })) {
                var html = HtmlService.createTemplateFromFile("email");
                html.site = site, html.status = status.toLowerCase(), html.sheet = sheet, MailApp.sendEmail(email, subject, "".concat(site, " is ").concat(status), {
                    htmlBody: html.evaluate().getContent(),
                    name: utils["a"],
                    replyTo: "amit@labnol.org"
                });
            }
        } catch (f) {
            Object(utils["d"])(f);
        }
    }, writeToGoogleSheet = function writeToGoogleSheet(message) {
        try {
            SpreadsheetApp.getActiveSheet().appendRow([ new Date(), message ]);
        } catch (f) {}
    }, log = function(settings, status) {
        try {
            var site = settings.site, _settings$ga = settings.ga, ga = void 0 === _settings$ga ? "" : _settings$ga;
            writeToGoogleSheet([ site, "is", status ].join(" ")), analytics(ga, site, status), 
            mail(settings, status);
        } catch (f) {
            Object(utils["d"])(f);
        }
    };
    __webpack_exports__["a"] = function() {
        try {
            var settings = Object(server["b"])();
            if (settings.site) {
                var newStatus = connect(settings.site), oldStatus = Object(server["a"])();
                oldStatus !== newStatus && (Object(server["d"])(newStatus), 200 === newStatus ? log(settings, "Up") : 200 === oldStatus && log(settings, "Down"));
            }
        } catch (f) {
            Object(utils["d"])(f);
        }
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), function(global) {
        var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3), _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4), _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0), _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
        global.onOpen = _ui__WEBPACK_IMPORTED_MODULE_0__["a"], global.showSidebar = _ui__WEBPACK_IMPORTED_MODULE_0__["c"], 
        global.uninstall = _ui__WEBPACK_IMPORTED_MODULE_0__["b"], global.trigger_WebsiteMonitor = _main__WEBPACK_IMPORTED_MODULE_1__["a"], 
        global.include = _utils__WEBPACK_IMPORTED_MODULE_2__["c"], global.saveSettings = _server__WEBPACK_IMPORTED_MODULE_3__["c"];
    }.call(this, __webpack_require__(6));
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
} ]));