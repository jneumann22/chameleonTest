var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([9],{

/***/ "../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/domains/meditation/meditation-card.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MeditationCard = function MeditationCard() {
  _classCallCheck(this, MeditationCard);

  this.methods = {
    pressActionButton: function pressActionButton() {
      console.log("handing this event hasnt been implemented");
    },
    notImplemented: function notImplemented() {
      console.log("Handling this event hasn't been implemented");
    }
  };
  this.computed = {
    getImages: function getImages() {
      return this.fit_urls.length + " ? " + this.fit_urls + " : " + this.img_urls;
    },

    getTime: function getTime() {
      return this.time !== 0 ? this.time + " Minutes" : '';
    },
    getFirstSuggestion: function getFirstSuggestion() {
      return this.suggestions && this.suggestions.length ? this.suggestions[0] : null;
    },
    getSecondSuggestion: function getSecondSuggestion() {
      return this.suggestions && this.suggestions.length > 1 ? this.suggestions[1] : null;
    },
    getFocus: function getFocus() {
      return this.focus ? this.focus : '';
    }
  };
}

/*components: {
  OtherOptions,
  ActionButton,
  Footer,
  RowButton,
  Thumbnail,
  Gallery,
  HeaderIconButtons,
  ImageIconButtons,
  StarRating,
  Suggestion
};*/
;

exports.default = new MeditationCard();

// import ActionButton from '@/components/ActionButton/ActionButton'
/*import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import HeaderIconButtons from '@/components/HeaderIconButtons'
import ImageIconButtons from '@/components/ImageIconButtons'
import RowButton from '@/components/RowButton'
import StarRating from '@/components/StarRating'
import Thumbnail from '@/components/Thumbnail'
import OtherOptions from '@/components/OtherOptions'
import Suggestion from '@/components/Suggestion'*/

module.exports = function () {
  _chameleonRuntime2.default.createComponent(exports.default).getOptions();
};

/***/ }),

/***/ "../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/domains/meditation/meditation-card.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/domains/meditation/meditation-card.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/domains/meditation/meditation-card.cml");
var __cml__script = __webpack_require__("../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/domains/meditation/meditation-card.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['domains/meditation/meditation-card'] = __cml__script;


/***/ })

},["./src/domains/meditation/meditation-card.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['domains/meditation/meditation-card'];