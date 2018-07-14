module.exports.wantsClearscreen = function() { return false; };

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var px_1 = __webpack_require__(5);
exports.Display = px_1.Display;
exports.ObjectProps = px_1.ObjectProps;
exports.RectangleProps = px_1.RectangleProps;
exports.ImageProps = px_1.ImageProps;
exports.Image9Props = px_1.Image9Props;
exports.TextProps = px_1.TextProps;
exports.TextBoxProps = px_1.TextBoxProps;
exports.ResourceProps = px_1.ResourceProps;
exports.ImageResourceProps = px_1.ImageResourceProps;
exports.FontResourceProps = px_1.FontResourceProps;
exports.WaylandProps = px_1.WaylandProps;
exports.Animation = px_1.Animation;
exports.Stretch = px_1.Stretch;
exports.VerticalAlignment = px_1.VerticalAlignment;
exports.HorizontalAlignment = px_1.HorizontalAlignment;
exports.Truncation = px_1.Truncation;
var PxFontResource_1 = __webpack_require__(10);
exports.PxFontResource = PxFontResource_1.PxFontResource;
var PxImage_1 = __webpack_require__(11);
exports.PxImage = PxImage_1.PxImage;
var PxImage9_1 = __webpack_require__(12);
exports.PxImage9 = PxImage9_1.PxImage9;
var PxImageResource_1 = __webpack_require__(13);
exports.PxImageResource = PxImageResource_1.PxImageResource;
var PxObject_1 = __webpack_require__(1);
exports.PxObject = PxObject_1.PxObject;
var PxRectangle_1 = __webpack_require__(14);
exports.PxRectangle = PxRectangle_1.PxRectangle;
var PxResource_1 = __webpack_require__(3);
exports.PxResource = PxResource_1.PxResource;
var PxText_1 = __webpack_require__(6);
exports.PxText = PxText_1.PxText;
var PxTextBox_1 = __webpack_require__(15);
exports.PxTextBox = PxTextBox_1.PxTextBox;
var PxWayland_1 = __webpack_require__(16);
exports.PxWayland = PxWayland_1.PxWayland;
var Optimus_1 = __webpack_require__(17);
exports.ApplicationProps = Optimus_1.ApplicationProps;
exports.ApplicationState = Optimus_1.ApplicationState;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PxObject = /** @class */ (function () {
    function PxObject(scene, p) {
        p.t = this._type = p.t != null ? p.t : 'object';
        p.parent = p.parent instanceof PxObject ? p.parent.obj : p.parent;
        this._obj = (scene.create(p));
    }
    Object.defineProperty(PxObject.prototype, "obj", {
        get: function () { return this.obj; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "parent", {
        get: function () { return this.obj.parent; },
        set: function (p) { this.obj.parent = p; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "x", {
        get: function () { return this.obj.x; },
        set: function (x) { this.obj.x = x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "y", {
        get: function () { return this.obj.y; },
        set: function (y) { this.obj.y = y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "w", {
        get: function () { return this.obj.w; },
        set: function (w) { this.obj.w = w; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "h", {
        get: function () { return this.obj.h; },
        set: function (h) { this.obj.h = h; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "cx", {
        get: function () { return this.obj.cx; },
        set: function (cx) { this.obj.cx = cx; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "cy", {
        get: function () { return this.obj.cy; },
        set: function (cy) { this.obj.cy = cy; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "sx", {
        get: function () { return this.obj.sx; },
        set: function (sx) { this.obj.sx = sx; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "sy", {
        get: function () { return this.obj.sy; },
        set: function (sy) { this.obj.sy = sy; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "a", {
        get: function () { return this.obj.a; },
        set: function (a) { this.obj.a = a; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "r", {
        get: function () { return this.obj.r; },
        set: function (r) { this.obj.r = r; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "id", {
        get: function () { return this.obj.id; },
        set: function (id) { this.obj.id = id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "interactive", {
        get: function () { return this.obj.interactive; },
        set: function (interactive) { this.obj.interactive = interactive; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "painting", {
        get: function () { return this.obj.painting; },
        set: function (painting) { this.obj.painting = painting; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "clip", {
        get: function () { return this.obj.clip; },
        set: function (clip) { this.obj.clip = clip; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "mask", {
        get: function () { return this.obj.mask; },
        set: function (mask) { this.obj.mask = mask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "draw", {
        get: function () { return this.obj.draw; },
        set: function (draw) { this.obj.draw = draw; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "focus", {
        get: function () { return this.obj.focus; },
        set: function (focus) { this.obj.focus = focus; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "numChildren", {
        get: function () { return this.obj.numChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxObject.prototype, "children", {
        get: function () { return this.obj.children; },
        enumerable: true,
        configurable: true
    });
    PxObject.prototype.getChild = function (i) { return this.obj.getChild(i); };
    PxObject.prototype.remove = function () { this.obj.remove(); };
    PxObject.prototype.removeAll = function () { this.obj.removeAll(); };
    PxObject.prototype.moveToFront = function () { this.obj.moveToFront(); };
    PxObject.prototype.moveForward = function () { this.obj.moveForward(); };
    PxObject.prototype.moveToBack = function () { this.obj.moveToBack(); };
    PxObject.prototype.moveBackward = function () { this.obj.moveBackward(); };
    PxObject.prototype.animateTo = function (json, duration, tween, type, count) { return this.obj.animateTo(json, duration, tween, type, count); };
    PxObject.prototype.animate = function (json, duration, tween, type, count) { return this.obj.animate(json, duration, tween, type, count); };
    PxObject.prototype.on = function (eventName, callback) { this.obj.on(eventName, callback); };
    PxObject.prototype.delListener = function (eventName, callback) { this.obj.delListener(eventName, callback); };
    PxObject.prototype.getObjectById = function (id) { return this.obj.getObjectById(id); };
    return PxObject;
}());
exports.PxObject = PxObject;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// a definition file to keep the global objects
Object.defineProperty(exports, "__esModule", { value: true });
var globals = /** @class */ (function () {
    function globals() {
    }
    return globals;
}());
exports.globals = globals;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PxResource = /** @class */ (function () {
    function PxResource(scene, p) {
        p.t = p.t != null ? p.t : 'resource';
        this._res = (scene.create(p));
    }
    Object.defineProperty(PxResource.prototype, "res", {
        get: function () { return this.res; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxResource.prototype, "url", {
        get: function () { return this.res.url; },
        set: function (url) { this.res.url = url; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxResource.prototype, "proxy", {
        get: function () { return this.res.proxy; },
        set: function (proxy) { this.res.proxy = proxy; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxResource.prototype, "ready", {
        get: function () { return this.res.ready; },
        set: function (ready) { this.res.ready = ready; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxResource.prototype, "loadStatus", {
        get: function () { return this.res.loadStatus; },
        set: function (loadStatus) { this.res.loadStatus = loadStatus; },
        enumerable: true,
        configurable: true
    });
    return PxResource;
}());
exports.PxResource = PxResource;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spark_ts_1 = __webpack_require__(0);
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return View;
}(spark_ts_1.PxRectangle));
exports.View = View;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Properties that belong to an object that is displayed
 * These are shared properties between an pxscene object and an application created by optimus
 */
var Display = /** @class */ (function () {
    function Display() {
    }
    return Display;
}());
exports.Display = Display;
/**
 * Params that can be passed on instantiation
 */
var ObjectProps = /** @class */ (function (_super) {
    __extends(ObjectProps, _super);
    function ObjectProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ObjectProps;
}(Display));
exports.ObjectProps = ObjectProps;
var RectangleProps = /** @class */ (function (_super) {
    __extends(RectangleProps, _super);
    function RectangleProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RectangleProps;
}(ObjectProps));
exports.RectangleProps = RectangleProps;
var ImageProps = /** @class */ (function (_super) {
    __extends(ImageProps, _super);
    function ImageProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImageProps;
}(ObjectProps));
exports.ImageProps = ImageProps;
var Image9Props = /** @class */ (function (_super) {
    __extends(Image9Props, _super);
    function Image9Props() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Image9Props;
}(ObjectProps));
exports.Image9Props = Image9Props;
var TextProps = /** @class */ (function (_super) {
    __extends(TextProps, _super);
    function TextProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextProps;
}(ObjectProps));
exports.TextProps = TextProps;
var TextBoxProps = /** @class */ (function (_super) {
    __extends(TextBoxProps, _super);
    function TextBoxProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBoxProps;
}(TextProps));
exports.TextBoxProps = TextBoxProps;
var ResourceProps = /** @class */ (function () {
    function ResourceProps() {
    }
    return ResourceProps;
}());
exports.ResourceProps = ResourceProps;
var ImageResourceProps = /** @class */ (function (_super) {
    __extends(ImageResourceProps, _super);
    function ImageResourceProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImageResourceProps;
}(ResourceProps));
exports.ImageResourceProps = ImageResourceProps;
var FontResourceProps = /** @class */ (function (_super) {
    __extends(FontResourceProps, _super);
    function FontResourceProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FontResourceProps;
}(ResourceProps));
exports.FontResourceProps = FontResourceProps;
var WaylandProps = /** @class */ (function (_super) {
    __extends(WaylandProps, _super);
    function WaylandProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WaylandProps;
}(ObjectProps));
exports.WaylandProps = WaylandProps;
/** Constants */
var Animation;
(function (Animation) {
    Animation.TWEEN_LINEAR = 0;
    Animation.TWEEN_EXP1 = 1;
    Animation.TWEEN_EXP2 = 2;
    Animation.TWEEN_EXP3 = 3;
    Animation.TWEEN_STOP = 4;
    Animation.EASE_IN_QUAD = 5;
    Animation.EASE_IN_CUBIC = 6;
    Animation.EASE_IN_BACK = 7;
    Animation.EASE_IN_ELASTIC = 8;
    Animation.EASE_OUT_ELASTIC = 9;
    Animation.EASE_IN_BOUNCE = 10;
    Animation.OPTION_OSCILLATE = 1;
    Animation.OPTION_LOOP = 2;
    Animation.OPTION_FASTFORWARD = 8;
    Animation.OPTION_REWIND = 16;
    Animation.IDLE = 0;
    Animation.INPROGRESS = 1;
    Animation.CANCELLED = 2;
    Animation.ENDED = 3;
})(Animation = exports.Animation || (exports.Animation = {}));
var Stretch;
(function (Stretch) {
    Stretch.NONE = 0;
    Stretch.STRETCH = 1;
    Stretch.REPEAT = 2;
})(Stretch = exports.Stretch || (exports.Stretch = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment.TOP = 0;
    VerticalAlignment.CENTER = 1;
    VerticalAlignment.BOTTOM = 2;
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment.LEFT = 0;
    HorizontalAlignment.CENTER = 1;
    HorizontalAlignment.RIGHT = 2;
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
var Truncation;
(function (Truncation) {
    Truncation.NONE = 0;
    Truncation.TRUNCATE = 1;
    Truncation.TRUNCATE_AT_WORD = 2;
})(Truncation = exports.Truncation || (exports.Truncation = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxObject_1 = __webpack_require__(1);
var PxText = /** @class */ (function (_super) {
    __extends(PxText, _super);
    function PxText(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'text' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxText.prototype, "obj", {
        get: function () { return this._obj; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxText.prototype, "text", {
        get: function () { return this.obj.text; },
        set: function (text) { this.obj.text = text; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxText.prototype, "textColor", {
        get: function () { return this.obj.textColor; },
        set: function (textColor) { this.obj.textColor = textColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxText.prototype, "pixelSize", {
        get: function () { return this.obj.pixelSize; },
        set: function (pixelSize) { this.obj.pixelSize = pixelSize; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxText.prototype, "fontUrl", {
        get: function () { return this.obj.fontUrl; },
        set: function (fontUrl) { this.obj.fontUrl = fontUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxText.prototype, "ready", {
        get: function () { return this.obj.ready; },
        set: function (ready) { this.obj.ready = ready; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxText.prototype, "font", {
        get: function () { return this.obj.font; },
        set: function (font) { this.obj.font = font; },
        enumerable: true,
        configurable: true
    });
    return PxText;
}(PxObject_1.PxObject));
exports.PxText = PxText;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber(initialValue) {
        if (initialValue === void 0) { initialValue = ""; }
        this.value = "";
        this.value = initialValue.replace(/[^\d]/g, ""); // Strip all unnecessary chars
    }
    PhoneNumber.prototype.addCharacter = function (digit) {
        if (this.value.length < 10 && digit.length == 1 && /^\d$/.test(digit)) {
            this.value += digit;
            return true;
        }
        return false;
    };
    PhoneNumber.prototype.removeCharacter = function () {
        if (this.value.length > 0) {
            this.value = this.value.slice(0, -1);
            return true;
        }
        return false;
    };
    PhoneNumber.prototype.isEmpty = function () {
        return (this.value.length == 0);
    };
    PhoneNumber.prototype.isComplete = function () {
        return (this.value.length == 10);
    };
    PhoneNumber.prototype.getFormattedString = function () {
        console.log("[PhoneNumber] value = " + this.value);
        // Based upon the length of the string, we add formatting as necessary
        var input = this.value;
        var size = input.length;
        var returnValue;
        if (size == 0) {
            returnValue = input;
        }
        else if (size < 4) {
            returnValue = '(' + input;
        }
        else if (size < 7) {
            returnValue = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
        }
        else {
            returnValue = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
        }
        return returnValue;
    };
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RootPresentation_1 = __webpack_require__(9);
var globals_1 = __webpack_require__(2);
px.import({
    https: 'https',
    scene: "px:scene.1.js",
    keys: 'px:tools.keys.js'
}).then(function importsAreReady(imports) {
    globals_1.globals.keys = imports.keys;
    globals_1.globals.https = imports.https;
    new RootPresentation_1.RootPresentation(imports.scene);
}).catch(function importFailed(err) {
    console.error("Imports failed for Scene Manager: " + err);
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// RootPresentation covers the entire screen
// Has two areas: Presentation, and PivotArea below it
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// This class also holds presentation items that needs to be used in multiple screeens
// Logo
// FontResource Instance
// Static values
// etc...
var spark_ts_1 = __webpack_require__(0);
var FandangoGridView_1 = __webpack_require__(18);
var PhoneNumberEntryView_1 = __webpack_require__(20);
var MessageView_1 = __webpack_require__(22);
var PivotArea_1 = __webpack_require__(23);
var globals_1 = __webpack_require__(2);
var FandangoService_1 = __webpack_require__(25);
var ProfileService_1 = __webpack_require__(28);
var MessageService_1 = __webpack_require__(29);
var BACKGROUND_IMAGE_URL = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/Gradient_overlay_1px.png";
var ROUND_RECT_IMG_URL = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/GreyButton_active.png";
var RootPresentation = /** @class */ (function (_super) {
    __extends(RootPresentation, _super);
    function RootPresentation(scene, parent) {
        if (parent === void 0) { parent = scene.root; }
        var _this = _super.call(this, scene, {
            t: 'rect',
            x: 0,
            y: 0,
            w: parent.w,
            h: parent.h,
            parent: parent,
            fillColor: 0x00000000,
            id: "RootPresentation"
        }) || this;
        _this.views = [];
        _this.scene = scene;
        _this.fontResource = _this.scene.create({
            t: "fontResource",
            url: "https://px-apps.sys.comcast.net/pxscene-samples/examples/px-reference/fonts/XFINITYStandardTT.ttf"
        });
        _this.mediumFontResource = _this.scene.create({
            t: "fontResource",
            url: "https://px-apps.sys.comcast.net/pxscene-samples/examples/px-reference/fonts/XFINITYStandardTT-Medium.ttf"
        });
        _this.maskImageResource = _this.scene.create({
            t: 'imageResource',
            url: ROUND_RECT_IMG_URL
        });
        var backgroundImage = new spark_ts_1.PxImage(scene, {
            t: 'image',
            id: "RootPresentation" + "BackgroundImage",
            url: BACKGROUND_IMAGE_URL,
            parent: parent,
            stretchX: 1,
            stretchY: 1,
            x: 0,
            y: 0,
            w: parent.w,
            h: parent.h
        });
        backgroundImage.moveToBack();
        _this.createViews();
        _this.pivotArea = new PivotArea_1.PivotArea(scene, {
            parent: _this,
            font: _this.mediumFontResource,
            maskImage: _this.maskImageResource
        });
        _this.displayGrid();
        _this.on("onKeyDown", function (params) {
            _this.onKeyDown(params);
        });
        return _this;
    }
    RootPresentation.prototype.createViews = function () {
        var _this = this;
        var zipCode = px.appQueryParams.zipCode || "94105";
        var fandangoService = FandangoService_1.FandangoService.getService(globals_1.globals.https, zipCode, "Black Panther");
        var gridView = new FandangoGridView_1.FandangoGridView(this.scene, {
            parent: this,
            font: this.fontResource
        }, fandangoService, zipCode);
        this.views[0] = gridView;
        var accountId = px.appQueryParams.accoundId || "xbo account id";
        this.profileService = ProfileService_1.ProfileService.getService(globals_1.globals.https, accountId);
        var phoneNumberView = new PhoneNumberEntryView_1.PhoneNumberEntryView(this.scene, {
            parent: this,
            font: this.fontResource, maskImage: this.maskImageResource
        }, function (type, phoneNumber) {
            switch (type) {
                case PhoneNumberEntryView_1.EntryEvent.EDIT_COMPLETED:
                    // phone number entry is done
                    _this.pivotArea.getPivots()[0].enable();
                    _this.pivotArea.focus = true;
                    break;
                case PhoneNumberEntryView_1.EntryEvent.EDIT_STARTED:
                    // phone number entry started
                    if (_this.pivotArea.getPivots()[0].getText() != "Send Text") {
                        _this.pivotArea.removeAllPivots();
                        _this.addPivotToPivotArea(0, ["Send Text", "Cancel"]);
                    }
                    break;
            }
        });
        this.views[1] = phoneNumberView;
        this.messageService = MessageService_1.MessageService.getService();
        var messageView = new MessageView_1.MessageView(this.scene, { parent: this, font: this.fontResource });
        this.views[2] = messageView;
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            view.draw = false;
        }
    };
    RootPresentation.prototype.displayView = function (index) {
        for (var i in this.views) {
            if (Number(i) == index) {
                this.views[i].draw = true;
            }
            else {
                this.views[i].draw = false;
            }
        }
    };
    RootPresentation.prototype.displayGrid = function () {
        var _this = this;
        this.pivotArea.removeAllPivots();
        this.displayView(0);
        this.addPivotToPivotArea(0, ["Send to Mobile", "Extended Trailer"], function () {
            _this.pivotArea.focus = true;
        });
    };
    RootPresentation.prototype.displayPhoneNumberEntry = function () {
        var _this = this;
        console.log("[RootPresentation] displayPhoneNumberEntry " + this.pivotArea);
        this.pivotArea.removeAllPivots();
        this.displayView(1);
        var phoneNumberEntryView = this.views[1];
        var phoneNumbers = this.profileService.getFormattedPhoneNumbers();
        if (phoneNumbers.length > 1) {
            phoneNumberEntryView.clearPhoneNumber();
            this.addPivotToPivotArea(0, phoneNumbers, function () {
                _this.pivotArea.focus = true;
            });
        }
        else if (phoneNumbers.length == 1) {
            phoneNumberEntryView.setPhoneNumber(phoneNumbers[0]);
            this.addPivotToPivotArea(0, ["Send Text", "Cancel"], function () {
                _this.pivotArea.focus = true;
            });
        }
        else {
            this.addPivotToPivotArea(0, ["Send Text", "Cancel"], function () {
                _this.views[1].focus = true;
            });
        }
    };
    RootPresentation.prototype.displayConfirmation = function () {
        var _this = this;
        console.log("[RootPresentation] displayConfirmation ");
        this.pivotArea.removeAllPivots();
        var messageView = this.views[2];
        messageView.setTitle("Sending Movie Showtimes...");
        messageView.setDescription("");
        this.displayView(2);
        var phoneNumberEntryView = this.views[1];
        var phoneNumber = phoneNumberEntryView.getPhoneNumber();
        this.messageService.sendMessage(phoneNumber, "SMS content").then(function () {
            messageView.setTitle("Movie Showtimes sent.");
            messageView.setDescription("You will receive your movie times shortly.");
            _this.profileService.addPhoneNumber(phoneNumber);
            _this.addPivotToPivotArea(0, ["Exit"], function () {
                _this.pivotArea.focus = true;
            });
        });
    };
    RootPresentation.prototype.pivotSelected = function (pivot) {
        var _this = this;
        console.log("[RootPresentation] pivotSelected " + pivot);
        var text = pivot.getText();
        if (text == "Send to Mobile") {
            this.displayPhoneNumberEntry();
        }
        else if (text == "Cancel") {
            this.displayGrid();
        }
        else if (text == "Exit") {
            this.displayGrid(); // TODO: needs update
        }
        else if (text == "Send Text") {
            this.displayConfirmation();
        }
        else {
            if (this.views[1].draw == true) {
                var phoneNumberEntryView = this.views[1];
                phoneNumberEntryView.setPhoneNumber(text);
                this.pivotArea.removeAllPivots();
                this.addPivotToPivotArea(0, ["Send Text", "Cancel"], function () {
                    _this.pivotArea.focus = true;
                });
            }
        }
    };
    RootPresentation.prototype.addPivotToPivotArea = function (index, array, callback) {
        var _this = this;
        if (index < array.length) {
            this.pivotArea.addPivot(array[index], function (pivot) {
                _this.pivotSelected(pivot);
            }).then(function () {
                _this.addPivotToPivotArea(index + 1, array, callback);
            });
        }
        else {
            if (callback) {
                callback();
            }
        }
    };
    RootPresentation.prototype.onKeyDown = function (params) {
        console.log("[RootPresentation] onKeyDown " + params.keyCode);
        var _a = globals_1.globals.keys, LEFT = _a.LEFT, RIGHT = _a.RIGHT, UP = _a.UP, DOWN = _a.DOWN;
        var eventUsed = false;
        if (params.keyCode == LEFT || params.keyCode == RIGHT || params.keyCode == UP || params.keyCode == DOWN) {
            var focusedItem = this.scene.getFocus();
            if (focusedItem) {
                var id = focusedItem.id;
                console.log("[RootPresentation] onKeyDown focused item " + id);
                if (this.pivotArea.getObjectById(id)) {
                    for (var _i = 0, _b = this.views; _i < _b.length; _i++) {
                        var view = _b[_i];
                        if (view.draw == true && view.isFocusable()) {
                            view.focus = true;
                            eventUsed = true;
                            break;
                        }
                    }
                }
                else {
                    if (this.views[1].draw == true) {
                        var phoneNumberEntryView = this.views[1];
                        var phoneNumber = phoneNumberEntryView.getPhoneNumber();
                        if (phoneNumber.length < 10) {
                            var firstPivot = this.pivotArea.getPivots()[0];
                            if (firstPivot.getText() == "Send Text") {
                                firstPivot.disable();
                            }
                        }
                    }
                    console.log("[RootPresentation] onKeyDown moving focus to PivotArea");
                    this.pivotArea.focus = true;
                    eventUsed = true;
                }
            }
        }
        if (eventUsed) {
            params.stopPropagation();
        }
    };
    return RootPresentation;
}(spark_ts_1.PxRectangle));
exports.RootPresentation = RootPresentation;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxResource_1 = __webpack_require__(3);
var PxFontResource = /** @class */ (function (_super) {
    __extends(PxFontResource, _super);
    function PxFontResource(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'fontResource' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxFontResource.prototype, "res", {
        get: function () { return this._res; },
        enumerable: true,
        configurable: true
    });
    PxFontResource.prototype.getFontMetrics = function (pixelSize) { return this.res.getFontMetrics(pixelSize); };
    PxFontResource.prototype.measureText = function (pixelSize, textToMeasure) { return this.res.measureText(pixelSize, textToMeasure); };
    return PxFontResource;
}(PxResource_1.PxResource));
exports.PxFontResource = PxFontResource;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxObject_1 = __webpack_require__(1);
var PxImage = /** @class */ (function (_super) {
    __extends(PxImage, _super);
    function PxImage(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'image' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxImage.prototype, "obj", {
        get: function () { return this._obj; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage.prototype, "url", {
        get: function () { return this.obj.url; },
        set: function (url) { this.obj.url = url; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage.prototype, "stretchX", {
        get: function () { return this.obj.stretchX; },
        set: function (stretchX) { this.obj.stretchX = stretchX; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage.prototype, "stretchY", {
        get: function () { return this.obj.stretchY; },
        set: function (stretchY) { this.obj.stretchY = stretchY; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage.prototype, "ready", {
        get: function () { return this.obj.ready; },
        set: function (ready) { this.obj.ready = ready; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage.prototype, "resource", {
        get: function () { return this.obj.resource; },
        set: function (resource) { this.obj.resource = resource; },
        enumerable: true,
        configurable: true
    });
    return PxImage;
}(PxObject_1.PxObject));
exports.PxImage = PxImage;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxObject_1 = __webpack_require__(1);
var PxImage9 = /** @class */ (function (_super) {
    __extends(PxImage9, _super);
    function PxImage9(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'image9' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxImage9.prototype, "obj", {
        get: function () { return this._obj; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage9.prototype, "url", {
        get: function () { return this.obj.url; },
        set: function (url) { this.obj.url = url; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage9.prototype, "insetLeft", {
        get: function () { return this.obj.insetLeft; },
        set: function (insetLeft) { this.obj.insetLeft = insetLeft; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage9.prototype, "insetTop", {
        get: function () { return this.obj.insetTop; },
        set: function (insetTop) { this.obj.insetTop = insetTop; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage9.prototype, "insetRight", {
        get: function () { return this.obj.insetRight; },
        set: function (insetRight) { this.obj.insetRight = insetRight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage9.prototype, "insetBottom", {
        get: function () { return this.obj.insetBottom; },
        set: function (insetBottom) { this.obj.insetBottom = insetBottom; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage9.prototype, "ready", {
        get: function () { return this.obj.ready; },
        set: function (ready) { this.obj.ready = ready; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImage9.prototype, "resource", {
        get: function () { return this.obj.resource; },
        set: function (resource) { this.obj.resource = resource; },
        enumerable: true,
        configurable: true
    });
    return PxImage9;
}(PxObject_1.PxObject));
exports.PxImage9 = PxImage9;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxResource_1 = __webpack_require__(3);
var PxImageResource = /** @class */ (function (_super) {
    __extends(PxImageResource, _super);
    function PxImageResource(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'imageResource' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxImageResource.prototype, "res", {
        get: function () { return this._res; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImageResource.prototype, "w", {
        get: function () { return this.res.w; },
        set: function (w) { this.res.w = w; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxImageResource.prototype, "h", {
        get: function () { return this.res.h; },
        set: function (h) { this.res.h = h; },
        enumerable: true,
        configurable: true
    });
    return PxImageResource;
}(PxResource_1.PxResource));
exports.PxImageResource = PxImageResource;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxObject_1 = __webpack_require__(1);
var PxRectangle = /** @class */ (function (_super) {
    __extends(PxRectangle, _super);
    function PxRectangle(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'rect' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxRectangle.prototype, "obj", {
        get: function () { return this._obj; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxRectangle.prototype, "fillColor", {
        get: function () { return this.obj.fillColor; },
        set: function (fillColor) { this.obj.fillColor = fillColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxRectangle.prototype, "lineColor", {
        get: function () { return this.obj.lineColor; },
        set: function (lineColor) { this.obj.lineColor = lineColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxRectangle.prototype, "lineWidth", {
        get: function () { return this.obj.lineWidth; },
        set: function (lineWidth) { this.obj.lineWidth = lineWidth; },
        enumerable: true,
        configurable: true
    });
    return PxRectangle;
}(PxObject_1.PxObject));
exports.PxRectangle = PxRectangle;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxText_1 = __webpack_require__(6);
var PxTextBox = /** @class */ (function (_super) {
    __extends(PxTextBox, _super);
    function PxTextBox(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'textBox' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxTextBox.prototype, "obj", {
        get: function () { return this._obj; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "wordWrap", {
        get: function () { return this.obj.wordWrap; },
        set: function (wordWrap) { this.obj.wordWrap = wordWrap; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "xStartPos", {
        get: function () { return this.obj.xStartPos; },
        set: function (xStartPos) { this.obj.xStartPos = xStartPos; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "xStopPos", {
        get: function () { return this.obj.xStopPos; },
        set: function (xStopPos) { this.obj.xStopPos = xStopPos; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "ellipsis", {
        get: function () { return this.obj.ellipsis; },
        set: function (ellipsis) { this.obj.ellipsis = ellipsis; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "truncation", {
        get: function () { return this.obj.truncation; },
        set: function (truncation) { this.obj.truncation = truncation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "alignHorizontal", {
        get: function () { return this.obj.alignHorizontal; },
        set: function (alignHorizontal) { this.obj.alignHorizontal = alignHorizontal; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "alignVertical", {
        get: function () { return this.obj.alignVertical; },
        set: function (alignVertical) { this.obj.alignVertical = alignVertical; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxTextBox.prototype, "leading", {
        get: function () { return this.obj.leading; },
        set: function (leading) { this.obj.leading = leading; },
        enumerable: true,
        configurable: true
    });
    PxTextBox.prototype.measureText = function () { return this.obj.measureText(); };
    return PxTextBox;
}(PxText_1.PxText));
exports.PxTextBox = PxTextBox;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PxObject_1 = __webpack_require__(1);
var PxWayland = /** @class */ (function (_super) {
    __extends(PxWayland, _super);
    function PxWayland(scene, p) {
        var _this = this;
        p.t = p.t == null ? 'wayland' : p.t;
        _this = _super.call(this, scene, p) || this;
        return _this;
    }
    Object.defineProperty(PxWayland.prototype, "obj", {
        get: function () { return this._obj; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxWayland.prototype, "displayName", {
        get: function () { return this.obj.displayName; },
        set: function (displayName) { this.obj.displayName = displayName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxWayland.prototype, "cmd", {
        get: function () { return this.obj.cmd; },
        set: function (cmd) { this.obj.cmd = cmd; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxWayland.prototype, "remoteServer", {
        get: function () { return this.obj.remoteServer; },
        set: function (remoteServer) { this.obj.remoteServer = remoteServer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxWayland.prototype, "clientPID", {
        get: function () { return this.obj.clientPID; },
        set: function (clientPID) { this.obj.clientPID = clientPID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxWayland.prototype, "fillColor", {
        get: function () { return this.obj.fillColor; },
        set: function (fillColor) { this.obj.fillColor = fillColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxWayland.prototype, "hasApi", {
        get: function () { return this.obj.hasApi; },
        set: function (hasApi) { this.obj.hasApi = hasApi; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PxWayland.prototype, "remoteReady", {
        get: function () { return this.obj.remoteReady; },
        set: function (remoteReady) { this.obj.remoteReady = remoteReady; },
        enumerable: true,
        configurable: true
    });
    PxWayland.prototype.suspend = function (suspend) { return this.obj.suspend(suspend); };
    PxWayland.prototype.resume = function (resume) { return this.obj.resume(resume); };
    PxWayland.prototype.destroy = function (destroy) { return this.obj.destroy(destroy); };
    return PxWayland;
}(PxObject_1.PxObject));
exports.PxWayland = PxWayland;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var px_1 = __webpack_require__(5);
var ApplicationProps = /** @class */ (function (_super) {
    __extends(ApplicationProps, _super);
    function ApplicationProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApplicationProps;
}(px_1.Display));
exports.ApplicationProps = ApplicationProps;
var ApplicationState;
(function (ApplicationState) {
    ApplicationState.RUNNING = "RUNNING";
    ApplicationState.SUSPENDED = "SUSPENDED";
    ApplicationState.DESTROYED = "DESTROYED";
})(ApplicationState = exports.ApplicationState || (exports.ApplicationState = {}));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TheaterRow_1 = __webpack_require__(19);
var globals_1 = __webpack_require__(2);
var spark_ts_1 = __webpack_require__(0);
var View_1 = __webpack_require__(4);
var THUMBNAIL_IMAGE = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/JurassicWorldMovieArt.png";
var FANDANGO_LOGO = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/Fandango_logo200px.png";
var MOVIE_TITLE = "Jurassic World: Fallen Kingdom";
var FandangoGridView = /** @class */ (function (_super) {
    __extends(FandangoGridView, _super);
    function FandangoGridView(scene, props, fandangoService, zipCode) {
        var _this = _super.call(this, scene, {
            t: 'rect',
            x: 80,
            y: 0,
            w: props.parent.w - 160,
            h: props.parent.h,
            parent: props.parent,
            fillColor: 0x00000000,
            id: "FandangoGrid"
        }) || this;
        _this.keys = globals_1.globals.keys;
        _this.scene = scene;
        _this.zipCode = zipCode;
        _this.props = props;
        _this.createGrid(_this);
        fandangoService.dataUpdated(function (movieListing) {
            var showtime = Object.keys(movieListing.todayList).map(function (prop) { return movieListing.todayList[prop]; });
            _this.createShowtimeGrid(showtime);
        });
        return _this;
    }
    FandangoGridView.prototype.createGrid = function (parent) {
        var _this = this;
        this.fontResource = this.props.font;
        this.rootPanel = new spark_ts_1.PxRectangle(this.scene, {
            t: 'rect',
            x: 0,
            y: parent.h,
            w: parent.w,
            h: 400,
            fillColor: 0x00000000,
            parent: parent
        });
        this.posterImage = new spark_ts_1.PxImage(this.scene, {
            t: 'image',
            id: "moviePoster",
            url: THUMBNAIL_IMAGE,
            parent: this.rootPanel,
            stretchX: 1,
            stretchY: 1,
            x: 0,
            y: 10,
            w: 206,
            h: 260
        });
        var movieTitleText = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            alignHorizontal: 0,
            font: this.fontResource,
            pixelSize: 42,
            x: this.posterImage.x + this.posterImage.w + 20,
            y: 10,
            w: this.rootPanel.w - this.posterImage.x - this.posterImage.w - 20 - 130,
            h: 50,
            truncation: 1,
            ellipsis: true,
            parent: this.rootPanel,
            text: MOVIE_TITLE
        });
        var movieListingForZipText = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            alignHorizontal: 0,
            font: this.fontResource,
            pixelSize: 20,
            x: movieTitleText.x,
            y: 75,
            w: 600,
            h: 50,
            parent: this.rootPanel,
            textColor: 0xBBBBBBFF,
            text: "Movie Listing for Today near " + this.zipCode
        });
        var sponserLogo = new spark_ts_1.PxImage(this.scene, {
            t: 'image',
            url: FANDANGO_LOGO,
            stretchX: 1,
            stretchY: 1,
            x: this.rootPanel.w - 110,
            y: 20,
            w: 110,
            h: 61,
            parent: this.rootPanel
        });
        this.posterImage.ready.then(function () {
            _this.rootPanel.animateTo({ y: _this.scene.h - _this.rootPanel.h }, 0.3, 1 /* tween-exp1 */, 2 /*scene.animation.OPTION_LOOP*/, 1)
                .then(function () {
                console.log("[FandangoGrid] animation done");
            });
        });
    };
    FandangoGridView.prototype.isFocusable = function () {
        return false;
    };
    ;
    FandangoGridView.prototype.createShowtimeGrid = function (showtime) {
        var gridArea = new spark_ts_1.PxRectangle(this.scene, {
            t: 'rect',
            x: this.posterImage.x + this.posterImage.w + 20,
            y: 80,
            w: this.rootPanel.w - this.posterImage.x - this.posterImage.w - 20,
            h: 100,
            fillColor: 0x00000000,
            parent: this.rootPanel
        });
        var gridProps = {
            font: this.fontResource,
            pixelSize: 24,
            parent: gridArea,
            x: 0,
            y: 0,
            w: gridArea.w,
            h: 50
        };
        var i = 0;
        var _loop_1 = function () {
            var lists = showtime[i];
            var name_1 = lists[0].theaterName;
            var time = [];
            lists.forEach(function (list) {
                if (list.isToday()) {
                    time.push(list.displayTime);
                }
            });
            gridProps.y += 50;
            new TheaterRow_1.TheaterRow(this_1.scene, gridProps, name_1, time);
            // divider
            new spark_ts_1.PxRectangle(this_1.scene, {
                t: 'rect',
                x: 0,
                y: gridProps.y,
                w: gridProps.w,
                h: 1,
                fillColor: 0x22222288,
                parent: gridArea,
            });
        };
        var this_1 = this;
        for (i = 0; i < 3; i++) {
            _loop_1();
        }
    };
    FandangoGridView.prototype.log = function (msg) {
        console.log(msg);
    };
    return FandangoGridView;
}(View_1.View));
exports.FandangoGridView = FandangoGridView;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spark_ts_1 = __webpack_require__(0);
var TheaterRow = /** @class */ (function (_super) {
    __extends(TheaterRow, _super);
    function TheaterRow(scene, props, name, time) {
        var _this = this;
        console.log("TheaterRow constructor");
        var x = props.x, y = props.y, w = props.w, h = props.h, parent = props.parent;
        _this = _super.call(this, scene, {
            t: 'rect',
            fillColor: 0x00000000,
            x: x, y: y, w: w, h: h, parent: parent
        }) || this;
        _this.props = props;
        _this.scene = scene;
        _this.name = name;
        _this.time = time;
        _this.time.splice(3); // Max three items
        _this.createChildren();
        return _this;
    }
    TheaterRow.prototype.createChildren = function () {
        console.log("TheaterRow createChildren");
        var rootElement = this.obj;
        var _a = this.props, font = _a.font, pixelSize = _a.pixelSize;
        var theaterName = this.scene.create({
            t: 'textBox',
            parent: rootElement,
            font: font,
            pixelSize: pixelSize,
            x: 0,
            y: 0,
            w: rootElement.w - 300,
            h: 50,
            text: this.name,
            truncation: 1,
            ellipsis: true,
        });
        var showTime = this.scene.create({
            t: 'textBox',
            alignHorizontal: 2,
            parent: rootElement,
            font: font,
            pixelSize: 20,
            x: rootElement.w - 300,
            y: 0,
            w: 300,
            h: 50,
            text: this.time.join('   ')
        });
    };
    return TheaterRow;
}(spark_ts_1.PxRectangle));
exports.TheaterRow = TheaterRow;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneNumberTextBox_1 = __webpack_require__(21);
exports.EntryEvent = PhoneNumberTextBox_1.EntryEvent;
var View_1 = __webpack_require__(4);
var spark_ts_1 = __webpack_require__(0);
var FANDANGO_LOGO = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/Fandango_logo200px.png";
var TITLE = "Send Movie Showtimes";
var DESCRIPTION = "Enter a mobile number to get movie showtimes from Fandango.  Click `Send Text` to agree to receive an automated message at your mobile number below with this information.";
var HELP_TEXT = "Try using your voice.  Press and hold ";
var HELP_ICON_URL = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/Microphone.png";
var FONT_COLOR = 0xe8e8e8ff;
var PhoneNumberEntryView = /** @class */ (function (_super) {
    __extends(PhoneNumberEntryView, _super);
    function PhoneNumberEntryView(scene, props, callback) {
        var _this = _super.call(this, scene, {
            t: 'rect',
            x: 80,
            y: 0,
            w: props.parent.w - 160,
            h: props.parent.h,
            parent: props.parent,
            fillColor: 0x00000000,
            id: "PhoneNumberEntryView"
        }) || this;
        _this.scene = scene;
        _this.props = props;
        _this.callback = callback;
        _this.createChildren();
        _this.on("onFocus", function (params) {
            console.log("[PhoneNumberEntryView] onFocus");
            if (params.target.id == _this.id) {
                _this.phoneNumberTextBox.focus = true;
            }
        });
        return _this;
    }
    PhoneNumberEntryView.prototype.createChildren = function () {
        var _this = this;
        var font = this.props.font;
        this.rootPanel = new spark_ts_1.PxRectangle(this.scene, {
            t: 'rect',
            x: 0,
            y: this.h - 400,
            w: this.w,
            h: 400,
            fillColor: 0x00000000,
            parent: this,
        });
        var titleTextBox = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            alignHorizontal: 0,
            font: font,
            pixelSize: 42,
            alignVertical: 2,
            x: 0,
            y: 0,
            w: this.w - 140,
            h: 61,
            truncation: 1,
            ellipsis: true,
            parent: this.rootPanel,
            text: TITLE,
            textColor: FONT_COLOR
        });
        var sponserLogo = new spark_ts_1.PxImage(this.scene, {
            t: 'image',
            url: FANDANGO_LOGO,
            stretchX: 1,
            stretchY: 1,
            x: this.rootPanel.w - 110,
            y: 0,
            w: 110,
            h: 61,
            parent: this.rootPanel
        });
        var description = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            alignHorizontal: 0,
            font: font,
            pixelSize: 24,
            x: 0,
            y: 80,
            w: this.w,
            h: 70,
            parent: this.rootPanel,
            wordWrap: true,
            text: DESCRIPTION,
            textColor: FONT_COLOR
        });
        this.phoneNumberTextBox = new PhoneNumberTextBox_1.PhoneNumberTextBox(this.scene, {
            id: "PhoneNumberTextBox",
            x: 0, y: 170, w: 400, h: 60,
            parent: this.rootPanel, font: font,
            pixelSize: 28,
            maskImage: this.props.maskImage
        }, this.callback);
        var helpText = new spark_ts_1.PxText(this.scene, {
            t: 'text',
            font: font,
            pixelSize: 20,
            x: 0,
            y: 240,
            parent: this.rootPanel,
            text: HELP_TEXT,
            textColor: 0xd1d1d1ff
        });
        helpText.ready.then(function () {
            var voiceIcon = new spark_ts_1.PxImage(_this.scene, {
                t: 'image',
                url: HELP_ICON_URL,
                stretchX: 1,
                stretchY: 1,
                x: helpText.x + helpText.w + 5,
                y: helpText.y + 5,
                w: 12,
                h: helpText.h - 7,
                parent: _this.rootPanel
            });
        });
    };
    PhoneNumberEntryView.prototype.isFocusable = function () {
        return true;
    };
    ;
    PhoneNumberEntryView.prototype.setPhoneNumber = function (s) {
        this.phoneNumberTextBox.setPhoneNumber(s);
    };
    PhoneNumberEntryView.prototype.getPhoneNumber = function () {
        return this.phoneNumberTextBox.getPhoneNumber();
    };
    PhoneNumberEntryView.prototype.clearPhoneNumber = function () {
        this.setPhoneNumber('');
    };
    return PhoneNumberEntryView;
}(View_1.View));
exports.PhoneNumberEntryView = PhoneNumberEntryView;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var spark_ts_1 = __webpack_require__(0);
var globals_1 = __webpack_require__(2);
var PhoneNumber_1 = __webpack_require__(7);
var LEFT_PADDING = 20; // space between button outline and text
var FOCUSED_COLOR = 0x646a70ff;
var UNFOCUSED_COLOR = 0x2a2c2dff;
var FONT_COLOR = 0xe8e8e8ff;
var PLACEHOLDER_FONT_COLOR = 0xb8b8b8ff;
var EntryEvent;
(function (EntryEvent) {
    EntryEvent[EntryEvent["EDIT_STARTED"] = 0] = "EDIT_STARTED";
    EntryEvent[EntryEvent["EDIT_COMPLETED"] = 1] = "EDIT_COMPLETED";
})(EntryEvent || (EntryEvent = {}));
exports.EntryEvent = EntryEvent;
var PhoneNumberTextBox = /** @class */ (function (_super) {
    __extends(PhoneNumberTextBox, _super);
    function PhoneNumberTextBox(scene, props, callback) {
        var _this = _super.call(this, scene, __assign({ t: 'rect', fillColor: 0x00000000 }, props)) || this;
        _this.placeholder = "Mobile Number";
        _this.phoneNumber = new PhoneNumber_1.PhoneNumber();
        _this.props = props;
        _this.scene = scene;
        _this.callback = callback;
        _this.createChildren();
        _this.on("onKeyDown", function (params) {
            console.log("[PhoneNumberTextBox] onKeyDown");
            _this.onKeyDown(params);
        });
        _this.on("onFocus", function (params) {
            console.log("[PhoneNumberTextBox] onFocus");
            _this.backgroundRect.fillColor = FOCUSED_COLOR;
        });
        _this.on("onBlur", function (params) {
            console.log("[PhoneNumberTextBox] onBlur");
            _this.backgroundRect.fillColor = UNFOCUSED_COLOR;
        });
        return _this;
    }
    PhoneNumberTextBox.prototype.createChildren = function () {
        var _a = this.props, font = _a.font, pixelSize = _a.pixelSize, maskImage = _a.maskImage;
        this.backgroundRect = new spark_ts_1.PxRectangle(this.scene, {
            t: 'rect',
            fillColor: UNFOCUSED_COLOR,
            x: 0, y: 0, w: this.w, h: this.h, parent: this.obj
        });
        var maskImage9 = new spark_ts_1.PxImage9(this.scene, {
            t: 'image9',
            resource: maskImage,
            parent: this.obj,
            mask: true,
            draw: false,
            x: 0, y: 0, w: this.w, h: this.h,
            insetLeft: 10, insetRight: 10, insetTop: 10, insetBottom: 10
        });
        this.phoneNumberEntry = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            parent: this.backgroundRect,
            font: font,
            textColor: FONT_COLOR,
            pixelSize: pixelSize,
            alignHorizontal: 0,
            alignVertical: 1,
            x: LEFT_PADDING,
            y: 0,
            w: this.obj.w - LEFT_PADDING,
            h: this.obj.h,
            draw: false,
        });
        this.placeholderEntry = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            parent: this.backgroundRect,
            font: font,
            textColor: PLACEHOLDER_FONT_COLOR,
            pixelSize: pixelSize,
            alignHorizontal: 0,
            alignVertical: 1,
            x: LEFT_PADDING,
            y: 0,
            w: this.obj.w - LEFT_PADDING,
            h: this.obj.h,
            text: this.placeholder,
            draw: false
        });
        this.repaint();
    };
    PhoneNumberTextBox.prototype.onKeyDown = function (params) {
        console.log("[PhoneNumberTextBox] onKeyDown " + params.keyCode);
        var _a = globals_1.globals.keys, ZERO = _a.ZERO, ONE = _a.ONE, TWO = _a.TWO, THREE = _a.THREE, FOUR = _a.FOUR, FIVE = _a.FIVE, SIX = _a.SIX, SEVEN = _a.SEVEN, EIGHT = _a.EIGHT, NINE = _a.NINE, LEFT = _a.LEFT, BACKSPACE = _a.BACKSPACE;
        var eventUsed = false;
        var charToAppend = "";
        switch (params.keyCode) {
            case ZERO:
                charToAppend = "0";
                break;
            case ONE:
                charToAppend = "1";
                break;
            case TWO:
                charToAppend = "2";
                break;
            case THREE:
                charToAppend = "3";
                break;
            case FOUR:
                charToAppend = "4";
                break;
            case FIVE:
                charToAppend = "5";
                break;
            case SIX:
                charToAppend = "6";
                break;
            case SEVEN:
                charToAppend = "7";
                break;
            case EIGHT:
                charToAppend = "8";
                break;
            case NINE:
                charToAppend = "9";
                break;
            case LEFT:
            case BACKSPACE:
                eventUsed = this.phoneNumber.removeCharacter();
                break;
        }
        if (charToAppend != "") {
            eventUsed = this.phoneNumber.addCharacter(charToAppend);
        }
        if (eventUsed) {
            this.repaint();
            params.stopPropagation();
            if (this.phoneNumber.isComplete()) {
                this.callback(EntryEvent.EDIT_COMPLETED, this.phoneNumber.value);
            }
            else if (this.phoneNumber.value.length == 1 && charToAppend != "") {
                this.callback(EntryEvent.EDIT_STARTED, this.phoneNumber.value);
            }
        }
    };
    PhoneNumberTextBox.prototype.repaint = function () {
        if (this.phoneNumber.isEmpty()) {
            this.phoneNumberEntry.draw = false;
            this.placeholderEntry.draw = true;
        }
        else {
            this.placeholderEntry.draw = false;
            this.phoneNumberEntry.text = this.phoneNumber.getFormattedString();
            console.log("[PhoneNumberTextBox] phone number entry value " + this.phoneNumberEntry.text);
            this.phoneNumberEntry.draw = true;
            this.phoneNumberEntry.moveToFront();
        }
    };
    PhoneNumberTextBox.prototype.setPhoneNumber = function (s) {
        this.phoneNumber = new PhoneNumber_1.PhoneNumber(s);
        this.repaint();
    };
    PhoneNumberTextBox.prototype.getPhoneNumber = function () {
        return this.phoneNumber.value;
    };
    return PhoneNumberTextBox;
}(spark_ts_1.PxRectangle));
exports.PhoneNumberTextBox = PhoneNumberTextBox;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spark_ts_1 = __webpack_require__(0);
var View_1 = __webpack_require__(4);
var FANDANGO_LOGO = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/Fandango_logo200px.png";
var FONT_COLOR = 0xe8e8e8ff;
// A simple view that displays title and the message.
var MessageView = /** @class */ (function (_super) {
    __extends(MessageView, _super);
    function MessageView(scene, props) {
        var _this = _super.call(this, scene, {
            t: 'rect',
            x: 80,
            y: 0,
            w: props.parent.w - 160,
            h: props.parent.h,
            parent: props.parent,
            fillColor: 0x00000000,
            id: "MessageView"
        }) || this;
        _this.scene = scene;
        _this.props = props;
        _this.title = _this.props.title || "";
        _this.description = _this.props.descriptino || "";
        _this.createChildren();
        return _this;
    }
    MessageView.prototype.createChildren = function () {
        var font = this.props.font;
        var rootPanel = new spark_ts_1.PxRectangle(this.scene, {
            t: 'rect',
            x: 0,
            y: this.h - 400,
            w: this.w,
            h: 400,
            fillColor: 0x00000000,
            parent: this,
        });
        this.titleTextBox = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            alignHorizontal: 0,
            font: font,
            pixelSize: 42,
            alignVertical: 2,
            x: 0,
            y: 0,
            w: this.w - 140,
            h: 61,
            truncation: 1,
            ellipsis: true,
            parent: rootPanel,
            text: this.description,
            textColor: FONT_COLOR
        });
        var sponserLogo = new spark_ts_1.PxImage(this.scene, {
            t: 'image',
            url: FANDANGO_LOGO,
            stretchX: 1,
            stretchY: 1,
            x: rootPanel.w - 110,
            y: 0,
            w: 110,
            h: 61,
            parent: rootPanel
        });
        this.descriptionTextBox = new spark_ts_1.PxTextBox(this.scene, {
            t: 'textBox',
            alignHorizontal: 0,
            font: font,
            pixelSize: 24,
            x: 0,
            y: 80,
            w: this.w,
            h: 120,
            parent: rootPanel,
            wordWrap: true,
            text: this.title,
            textColor: FONT_COLOR
        });
    };
    MessageView.prototype.isFocusable = function () {
        return false;
    };
    MessageView.prototype.setTitle = function (title) {
        this.title = title;
        this.titleTextBox.text = title;
    };
    MessageView.prototype.setDescription = function (description) {
        this.description = description;
        this.descriptionTextBox.text = description;
    };
    return MessageView;
}(View_1.View));
exports.MessageView = MessageView;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spark_ts_1 = __webpack_require__(0);
var globals_1 = __webpack_require__(2);
var Pivot_1 = __webpack_require__(24);
// Pivot area on the bottom of the screen.
// Holds one or more buttons
// Uses button text as button's ID ... can't have more than one button with the same label
var PIVOT_SPACING = 20;
var PivotArea = /** @class */ (function (_super) {
    __extends(PivotArea, _super);
    function PivotArea(scene, props) {
        var _this = _super.call(this, scene, {
            t: 'rect',
            x: 0,
            y: props.parent.h - 98,
            w: props.parent.w,
            h: 98,
            fillColor: 0x2A2C2DF2,
            parent: props.parent,
            id: "PivotArea"
        }) || this;
        // pivot background: 1280x98
        // pivot display area: at the bottom of the screen, dimension 1120x48 (margins: left/right 80, top 20, bottom 30)
        // background #2A2C2D, opacity 95%
        // spacing between pivots 20px
        _this.pivots = [];
        _this.on("onFocus", function (params) {
            _this.onFocus(params);
        });
        _this.on("onKeyDown", function (params) {
            _this.onKeyDown(params);
        });
        _this.scene = scene;
        _this.props = props;
        return _this;
    }
    PivotArea.prototype.addPivot = function (text, callbackFunction) {
        var _a = this.props, font = _a.font, maskImage = _a.maskImage;
        var x = 80;
        var y = 20;
        var w = 0; // note: this is adjusted based on the text inside the pivot
        var h = 48;
        if (this.pivots.length > 0) {
            var lastPivot = this.pivots[this.pivots.length - 1];
            x = lastPivot.x + lastPivot.w + PIVOT_SPACING;
        }
        if (text) {
            var props = {
                id: text,
                x: x, y: y, w: w, h: h,
                parent: this, text: text, font: font,
                maskImage: maskImage,
                pixelSize: 24, disabled: false
            };
            var button = new Pivot_1.Pivot(this.scene, props, callbackFunction);
            this.pivots.push(button);
            return button.ready;
        }
        return undefined;
    };
    PivotArea.prototype.removeAllPivots = function () {
        if (this.pivots.length > 0) {
            this.pivots = [];
        }
        this.removeAll();
    };
    PivotArea.prototype.getPivots = function () {
        return this.pivots;
    };
    PivotArea.prototype.onFocus = function (params) {
        console.log("[PivotArea] onFocus");
        if (params.target.id == this.id) {
            this.focusNextPivot();
        }
    };
    PivotArea.prototype.onKeyDown = function (params) {
        console.log("[PivotArea] onKeyDown " + params.keyCode);
        var _a = globals_1.globals.keys, UP = _a.UP, DOWN = _a.DOWN, LEFT = _a.LEFT, RIGHT = _a.RIGHT, ENTER = _a.ENTER;
        var eventUsed = false;
        switch (params.keyCode) {
            //case UP:
            case LEFT:
                eventUsed = this.focusPreviousPivot();
                break;
            //case DOWN:
            case RIGHT:
                eventUsed = this.focusNextPivot();
                break;
            case ENTER:
                eventUsed = this.selectFocusedPivot();
                break;
        }
        if (eventUsed) {
            params.stopPropagation();
        }
    };
    PivotArea.prototype.focusNextPivot = function () {
        var button = this.getFocusedPivot();
        var nextIndex = 0;
        if (button) {
            var index = this.pivots.indexOf(button);
            nextIndex = index + 1;
        }
        while (nextIndex < this.pivots.length) {
            if (this.pivots[nextIndex].isEnabled()) {
                this.pivots[nextIndex].focus = true;
                return true;
            }
            else {
                nextIndex++;
            }
        }
        return false;
    };
    PivotArea.prototype.focusPreviousPivot = function () {
        var button = this.getFocusedPivot();
        var previousIndex = this.pivots.length - 1;
        if (button) {
            var index = this.pivots.indexOf(button);
            previousIndex = index - 1;
        }
        while (previousIndex >= 0) {
            if (this.pivots[previousIndex].isEnabled()) {
                this.pivots[previousIndex].focus = true;
                return true;
            }
            else {
                previousIndex--;
            }
        }
        return false;
    };
    PivotArea.prototype.selectFocusedPivot = function () {
        var button = this.getFocusedPivot();
        if (button) {
            var callback = button.getCallback();
            if (callback) {
                callback(button);
            }
            return true;
        }
        return false;
    };
    PivotArea.prototype.getFocusedPivot = function () {
        if (this.pivots.length > 0) {
            var focusedItem = this.scene.getFocus();
            if (focusedItem) {
                for (var _i = 0, _a = this.pivots; _i < _a.length; _i++) {
                    var button = _a[_i];
                    if (button.id == focusedItem.id) {
                        return button;
                    }
                }
            }
        }
        return undefined;
    };
    return PivotArea;
}(spark_ts_1.PxRectangle));
exports.PivotArea = PivotArea;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spark_ts_1 = __webpack_require__(0);
// Background image changes based on the focus status.
//const MASK_IMAGE_URL = "https://d243sour89mi5g.cloudfront.net/xre/pxscene/assets/GreyButton_active.png";
var LEFT_PADDING = 20; // space between button outline and text
var RIGHT_PADDING = 20; // space between button outline and text
var FOCUSED_COLOR = 0x646a70ff;
var UNFOCUSED_COLOR = 0x00000000;
var FOCUSED_FONT_COLOR = 0xfbfcfcff;
var UNFOCUSED_FONT_COLOR = 0xb1b9bfff;
var Pivot = /** @class */ (function (_super) {
    __extends(Pivot, _super);
    function Pivot(scene, props, callback) {
        var _this = this;
        var x = props.x, y = props.y, h = props.h, parent = props.parent, id = props.id;
        _this = _super.call(this, scene, {
            t: 'rect',
            fillColor: 0x00000000,
            x: x, y: y, w: 200, h: h, parent: parent, id: id
        }) || this;
        _this.props = props;
        _this.scene = scene;
        _this.callback = callback;
        _this.enabled = true;
        _this.createChildren();
        return _this;
    }
    Pivot.prototype.createChildren = function () {
        var _this = this;
        var _a = this.props, text = _a.text, font = _a.font, pixelSize = _a.pixelSize, maskImage = _a.maskImage;
        this.textComponent = this.scene.create({
            t: 'textBox',
            parent: this.obj,
            font: font,
            textColor: UNFOCUSED_FONT_COLOR,
            pixelSize: pixelSize,
            alignHorizontal: 1,
            alignVertical: 1,
            x: 0,
            y: 0,
            w: this.obj.w,
            h: this.obj.h,
            text: text,
            draw: false
        });
        this.maskImage = new spark_ts_1.PxImage9(this.scene, {
            t: 'image9',
            resource: maskImage,
            parent: this.obj,
            mask: true,
            draw: false,
            x: 0, y: 0, w: this.w, h: this.h,
            insetLeft: 10, insetRight: 10, insetTop: 10, insetBottom: 10
        });
        this.ready = Promise.all([this.textComponent.ready, this.maskImage.ready]);
        this.on('onFocus', function () {
            console.log("[" + _this.id + "] onFocus");
            if (_this.buttonRect) {
                _this.buttonRect.fillColor = FOCUSED_COLOR;
                _this.textComponent.textColor = FOCUSED_FONT_COLOR;
            }
        });
        this.on('onBlur', function () {
            console.log("[" + _this.id + "] onBlur");
            if (_this.buttonRect) {
                _this.buttonRect.fillColor = UNFOCUSED_COLOR;
                _this.textComponent.textColor = UNFOCUSED_FONT_COLOR;
            }
        });
        this.ready.then(function () {
            console.log("[Pivot] all promises ready");
            var measureObject = _this.textComponent.measureText(); // Adjust the button width based on the text inside
            var width = measureObject.bounds.x2 - measureObject.bounds.x1 + LEFT_PADDING + RIGHT_PADDING;
            console.log("[Pivot] width = " + width);
            _this.w = width;
            _this.textComponent.w = width;
            _this.maskImage.w = width;
            _this.buttonRect = new spark_ts_1.PxRectangle(_this.scene, {
                t: 'rect',
                parent: _this.obj,
                fillColor: UNFOCUSED_COLOR,
                x: 0, y: 0, w: _this.w, h: _this.h,
            });
            _this.textComponent.moveToFront();
            _this.textComponent.draw = true;
        });
    };
    Pivot.prototype.getCallback = function () {
        return this.callback;
    };
    Pivot.prototype.getText = function () {
        return this.props.text;
    };
    Pivot.prototype.isEnabled = function () {
        return this.enabled;
    };
    Pivot.prototype.enable = function () {
        this.enabled = true;
    };
    Pivot.prototype.disable = function () {
        this.enabled = false;
    };
    return Pivot;
}(spark_ts_1.PxRectangle));
exports.Pivot = Pivot;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hash_1 = __webpack_require__(26);
var Listing = __webpack_require__(27);
//let curiosityUrl = "https://d9pv7ijadtb2q.cloudfront.net/v3/airings/f88b687c-f67e-451d-92fe-7588a9088d32?key=P9XRPH8Y7YL";
//let bbbUrl = "https://d9pv7ijadtb2q.cloudfront.net/v3/airings/71c98e02-43d7-4870-ab6e-75d616d210cc?key=BRFZQ2SI3ZG";
var FandangoService = /** @class */ (function () {
    function FandangoService(zipCode, movieTitle) {
        this.apiKey = 't8sjvec6f3dmv8xe345pedw9';
        this.callbacks = []; // array of functions to callback when airing changes.
        this.zipCode = zipCode;
        this.movieTitle = movieTitle;
        this.hash = hash_1.hash();
    }
    FandangoService.getService = function (https, zipCode, movieTitle) {
        var fandangoService = new FandangoService(zipCode, movieTitle); // todo: save this against zip/title tuple?
        fandangoService.fetchListing(https);
        return fandangoService;
    };
    FandangoService.prototype.fetchListing = function (https) {
        var url = FandangoService.PROTOCOL + "://" + FandangoService.ENDPOINT + FandangoService.PATH +
            "?zipCode=" + this.zipCode + "&movieTitle=" + this.movieTitle + "&offset=0&limit=25" + "&api_key=" + this.apiKey +
            "&sig=" + this.hash;
        console.log("url=" + url);
        var self = this;
        https.get(url, function (res) {
            //console.log('statusCode:', res.statusCode);
            //console.log('headers:', res.headers);
            var body = '';
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                self.listing = new Listing.MovieListing(JSON.parse(body));
                self.notifyCallbacks.call(self);
            });
        }).on('error', function (e) {
            console.error(e);
        });
    };
    FandangoService.prototype.dataUpdated = function (callback) {
        if (this.callbacks) {
            this.callbacks.push(callback);
        }
    };
    FandangoService.prototype.notifyCallbacks = function () {
        if (this.callbacks) {
            var listing_1 = this.listing;
            this.callbacks.forEach(function (callback) {
                callback(listing_1);
            });
        }
    };
    FandangoService.PROTOCOL = 'https';
    FandangoService.ENDPOINT = 'api.fandango.com';
    FandangoService.PATH = '/showtimes/v2';
    return FandangoService;
}());
exports.FandangoService = FandangoService;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hash() {
    var api_key = 't8sjvec6f3dmv8xe345pedw9';
    var secret = 'c6kBMqXv5v';
    var time = new Date();
    var seconds = Math.round(time.getTime() / 1000);
    var hash = SHA256(api_key + secret + seconds);
    function SHA256(s) {
        var chrsz = 8;
        var hexcase = 0;
        function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }
        function S(X, n) {
            return (X >>> n) | (X << (32 - n));
        }
        function R(X, n) {
            return (X >>> n);
        }
        function Ch(x, y, z) {
            return ((x & y) ^ ((~x) & z));
        }
        function Maj(x, y, z) {
            return ((x & y) ^ (x & z) ^ (y & z));
        }
        function Sigma0256(x) {
            return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
        }
        function Sigma1256(x) {
            return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
        }
        function Gamma0256(x) {
            return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
        }
        function Gamma1256(x) {
            return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
        }
        function core_sha256(m, l) {
            var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
            var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
            var W = new Array(64);
            var a, b, c, d, e, f, g, h, i, j;
            var T1, T2;
            m[l >> 5] |= 0x80 << (24 - l % 32);
            m[((l + 64 >> 9) << 4) + 15] = l;
            var i = 0;
            for (i = 0; i < m.length; i += 16) {
                a = HASH[0];
                b = HASH[1];
                c = HASH[2];
                d = HASH[3];
                e = HASH[4];
                f = HASH[5];
                g = HASH[6];
                h = HASH[7];
                var j = 0;
                for (j = 0; j < 64; j++) {
                    if (j < 16)
                        W[j] = m[j + i];
                    else
                        W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
                    T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                    T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                    h = g;
                    g = f;
                    f = e;
                    e = safe_add(d, T1);
                    d = c;
                    c = b;
                    b = a;
                    a = safe_add(T1, T2);
                }
                HASH[0] = safe_add(a, HASH[0]);
                HASH[1] = safe_add(b, HASH[1]);
                HASH[2] = safe_add(c, HASH[2]);
                HASH[3] = safe_add(d, HASH[3]);
                HASH[4] = safe_add(e, HASH[4]);
                HASH[5] = safe_add(f, HASH[5]);
                HASH[6] = safe_add(g, HASH[6]);
                HASH[7] = safe_add(h, HASH[7]);
            }
            return HASH;
        }
        function str2binb(str) {
            var bin = Array();
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < str.length * chrsz; i += chrsz) {
                bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
            }
            return bin;
        }
        function Utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        }
        function binb2hex(binarray) {
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                    hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
            }
            return str;
        }
        s = Utf8Encode(s);
        return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
    }
    return hash;
}
exports.hash = hash;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MovieListing = /** @class */ (function () {
    function MovieListing(data) {
        var _this = this;
        this.showTime = [];
        this.todayList = {};
        console.log("MovieListing received data " + data);
        if (data && data.data && data.data.showtimes) {
            console.log("MovieListing creating Showtimes");
            data.data.showtimes.forEach(function (showtime) {
                _this.showTime.push(new Showtime(showtime));
            });
        }
        this.constructShowList();
    }
    MovieListing.prototype.constructShowList = function () {
        var tempMap = {};
        this.showTime.forEach(function (item) {
            if (item.isToday()) {
                var theaterId = item.theaterId;
                if (!tempMap[theaterId]) {
                    tempMap[theaterId] = [];
                }
                tempMap[theaterId].push(item);
            }
        });
        this.todayList = tempMap;
    };
    return MovieListing;
}());
exports.MovieListing = MovieListing;
var Showtime = /** @class */ (function () {
    function Showtime(showtime) {
        if (showtime && showtime.theaterId) {
            this.theaterId = showtime.theaterId;
            this.theaterName = showtime.theaterName;
            this.showDate = new Date(showtime.dateTime.local);
            this.displayTime = this.getDisplayTime();
        }
    }
    Showtime.prototype.getDisplayTime = function () {
        var date = this.showDate;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var returnValue = "";
        if (hours <= 12) {
            returnValue = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + "am";
        }
        else {
            returnValue = ("0" + (hours - 12)).slice(-2) + ":" + ("0" + minutes).slice(-2) + "pm";
        }
        return returnValue;
    };
    Showtime.prototype.isToday = function () {
        //return (new Date(Date.now() - (8 * 60 * 60 * 1000)).getDate() == this.showDate.getDate());
        return (new Date().getDate() == this.showDate.getDate());
    };
    return Showtime;
}());
exports.Showtime = Showtime;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Dummy service for the time being
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneNumber_1 = __webpack_require__(7);
var ProfileService = /** @class */ (function () {
    function ProfileService() {
        this.phoneNumbers = [];
    }
    ProfileService.getService = function (https, accountId) {
        var profileService = new ProfileService(); // todo: static
        return profileService;
    };
    ProfileService.prototype.addPhoneNumber = function (s) {
        var phoneNumber = new PhoneNumber_1.PhoneNumber(s);
        if (phoneNumber.isComplete() && !this.contains(phoneNumber)) {
            this.phoneNumbers.push(phoneNumber);
        }
    };
    ProfileService.prototype.getPhoneNumbers = function () {
        return this.phoneNumbers;
    };
    ProfileService.prototype.getFormattedPhoneNumbers = function () {
        var formattedNumbers = [];
        for (var _i = 0, _a = this.phoneNumbers; _i < _a.length; _i++) {
            var pn = _a[_i];
            formattedNumbers.push(pn.getFormattedString());
        }
        return formattedNumbers;
    };
    ProfileService.prototype.contains = function (phoneNumberToCheck) {
        for (var _i = 0, _a = this.phoneNumbers; _i < _a.length; _i++) {
            var phoneNumber = _a[_i];
            if (phoneNumber.value == phoneNumberToCheck.value) {
                return true;
            }
        }
        return false;
    };
    return ProfileService;
}());
exports.ProfileService = ProfileService;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Dummy service for the time being
Object.defineProperty(exports, "__esModule", { value: true });
var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    MessageService.getService = function () {
        var messageService = new MessageService(); // todo: static
        return messageService;
    };
    MessageService.prototype.sendMessage = function (phonenumber, message) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("[MessageService] sendMessage done");
                resolve();
            }, 2000);
        });
        return promise;
    };
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ })
/******/ ]);