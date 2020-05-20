var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([12],{

/***/ "../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/components/ImageIconButtons/ImageIconButtons.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageIconButtons = function ImageIconButtons() {
  _classCallCheck(this, ImageIconButtons);

  this.props = {
    domain: { type: String, default: "test" },
    itemID: { type: String, default: "test" }
  };
  this.computed = {
    likeIconButton: function likeIconButton() {
      return "icon-button " + this.likeIconColor;
    },
    dislikeIconButton: function dislikeIconButton() {
      return "icon-button " + this.dislikeIconColor;
    },
    shareIconButton: function shareIconButton() {
      return "icon-button " + this.shareIconColor;
    }
  };
  this.data = {

    isLiked: false,
    isDisliked: false,
    likeIconColor: 'black',
    dislikeIconColor: 'black',
    shareIconColor: 'black'
  };
  this.methods = {
    onLikeClick: function onLikeClick() {
      console.log('like button clicked');
      // if (weex.config.env.platform === 'Web') {
      if (this.isLiked) {
        // if it's already rated, undo rating first
        this.isLiked = false;
        this.likeIconColor = 'black';
      } else if (this.isDisliked) {
        this.isDisliked = false;
        this.isLiked = true;
        this.dislikeIconColor = 'black';
        this.likeIconColor = 'red';
      } else {
        this.isLiked = true;
        this.likeIconColor = 'red';
      }
    },

    // } else {
    //   const userAction = weex.requireModule('UserAction')
    //   if (this.isLiked) { // if it's already rated, undo rating first
    //     this.isLiked = false
    //     this.likeIconColor = 'black'
    //     userAction.rateItem(this.domain, this.itemID, true, false)
    //   } else if (this.isDisliked) {
    //     this.isDisliked = false
    //     this.isLiked = true
    //     this.dislikeIconColor = 'black'
    //     this.likeIconColor = 'red'
    //     userAction.rateItem(this.domain, this.itemID, false, false)
    //     userAction.rateItem(this.domain, this.itemID, true, true)
    //   } else {
    //     this.isLiked = true
    //     this.likeIconColor = 'red'
    //     userAction.rateItem(this.domain, this.itemID, true, true)
    //   }
    // }


    onDislikeClick: function onDislikeClick() {
      // if (this.museDislikeHandler) {
      //   this.museDislikeHandler()
      // } else {
      //   console.log('museDislike Handler undefined')
      // }
      // if (weex.config.env.platform === 'Web') {
      if (this.isDisliked) {
        // if it's already rated, undo rating first
        this.isDisliked = false;
        this.dislikeIconColor = 'black';
      } else if (this.isLiked) {
        this.isLiked = false;
        this.isDisliked = true;
        this.likeIconColor = 'black';
        this.dislikeIconColor = 'blue';
      } else {
        this.isDisliked = true;
        this.dislikeIconColor = 'blue';
      }
      // } else {
      //   const userAction = weex.requireModule('UserAction')
      //   if (this.isDisliked) { // if it's already rated, undo rating first
      //     this.isDisliked = false
      //     this.dislikeIconColor = 'black'
      //     userAction.rateItem(this.domain, this.itemID, false, false)
      //   } else if (this.isLiked) {
      //     this.isLiked = false
      //     this.isDisliked = true
      //     this.likeIconColor = 'black'
      //     this.dislikeIconColor = 'blue'
      //     userAction.rateItem(this.domain, this.itemID, true, false)
      //     userAction.rateItem(this.domain, this.itemID, false, true)
      //   } else {
      //     this.isDisliked = true
      //     this.dislikeIconColor = 'blue'
      //     userAction.rateItem(this.domain, this.itemID, false, true)
      //   }
      // }
    },
    onShareClick: function onShareClick() {
      // if (weex.config.env.platform === 'Web') {
      this.shareIconColor = 'grey';
      this.$cmlEmit('Shared item');
      // } else {
      //   this.shareIconColor = 'grey'
      //   const userAction = weex.requireModule('UserAction')
      //   userAction.shareItem(this.domain, this.itemID)
      // }
    },
    shareIconRevertColor: function shareIconRevertColor() {
      this.shareIconColor = 'black';
    }
  };
};

exports.default = new ImageIconButtons();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/components/ImageIconButtons/ImageIconButtons.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/ImageIconButtons/ImageIconButtons.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/components/ImageIconButtons/ImageIconButtons.cml");
var __cml__script = __webpack_require__("../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=false&check={\"enable\":true,\"enableTypes\":[]}!./src/components/ImageIconButtons/ImageIconButtons.cml");


/***/ })

},["./src/components/ImageIconButtons/ImageIconButtons.cml"]);