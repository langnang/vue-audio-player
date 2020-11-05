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
/******/ 	return __webpack_require__(__webpack_require__.s = "5cd8");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5cd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.8@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
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

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d1d0a16a-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/audio-player/index.vue?vue&type=template&id=93510a14&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"audio-player"},[_c('div',{staticClass:"audio-controls"},[(_vm.isShowPrev)?_c('div',{staticClass:"audio-controls__previous",attrs:{"title":"上一首"},on:{"click":_vm.onPlayPrev}},[_c('svg',{staticClass:"icon",attrs:{"t":"1604247544322","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"927","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.368z","p-id":"928"}})])]):_vm._e(),(!_vm.isPlaying)?_c('div',{staticClass:"audio-controls__start",attrs:{"title":"播放"},on:{"click":function($event){return _vm.onPlay(_vm.currentIndex)}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1604403365290","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"3249","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M512 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0.1-239.2-193.9-433.2-433.2-433.2z m183.3 447.9L455.1 720c-12.3 9.9-30.5 1.1-30.5-14.6V318.7c0-15.7 18.2-24.5 30.5-14.6l240.2 193.4c9.4 7.5 9.4 21.7 0 29.2z","p-id":"3250"}})])]):_vm._e(),(_vm.isPlaying)?_c('div',{staticClass:"audio-controls__pause",attrs:{"title":"暂停"},on:{"click":_vm.onPause}},[_c('svg',{staticClass:"icon",attrs:{"t":"1604247561230","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1072","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M680 160h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H680c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z m-464 0h128c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56H216c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56z","p-id":"1073"}})])]):_vm._e(),(_vm.isShowNext)?_c('div',{staticClass:"audio-controls__next",attrs:{"title":"下一首"},on:{"click":_vm.onPlayNext}},[_c('svg',{staticClass:"icon",attrs:{"t":"1604247579325","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1217","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M817 160h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56zM648.314 546.191l-422.304 303.4c-32.294 23.201-77.282 15.83-100.484-16.464A72 72 0 0 1 112 791.117V232.064c0-39.764 32.235-72 72-72a72 72 0 0 1 39.95 12.1l422.762 281.959c25.73 17.16 32.677 51.93 15.517 77.66a56 56 0 0 1-13.915 14.368z","p-id":"1218"}})])]):_vm._e(),(_vm.showMode)?_c('div',{staticClass:"audio-controls__mode",on:{"click":_vm.onCickPLayMode}},[(_vm.playMode == 'single' || _vm.playMode == 'single-loop')?_c('svg',{staticClass:"icon",class:{
          inactive: _vm.playMode == 'single',
        },attrs:{"t":"1604496141856","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"12644","width":"200","height":"200","title":"单曲循环"}},[_c('path',{attrs:{"d":"M773.597867 203.776l-0.273067 0.443733a33.621333 33.621333 0 0 0-20.343467-6.485333c-18.978133 0.785067-33.723733 16.725333-32.9728 35.771733a33.826133 33.826133 0 0 0 15.633067 26.794667l-0.1024 0.170667a375.227733 375.227733 0 0 1 166.2976 311.876266c0 207.018667-168.448 375.466667-375.466667 375.466667-27.818667 0-27.818667 0-54.340266-2.901333-90.453333-9.898667-152.610133-58.9824-155.5456-61.201067a375.330133 375.330133 0 0 1-165.5808-311.364267c0-201.4208 159.5392-365.841067 358.843733-374.647466l-41.984 40.823466 0.8192 0.853334a33.860267 33.860267 0 0 0-15.2576 29.218133c0.750933 18.978133 16.725333 33.757867 35.669333 33.041067a33.792 33.792 0 0 0 26.0096-14.472534l0.3072 0.341334 128.648534-124.996267L515.6864 34.0992l-0.4096 0.4096a33.6896 33.6896 0 0 0-26.3168-11.400533c-18.944 0.750933-33.6896 16.725333-32.9728 35.703466a33.8944 33.8944 0 0 0 13.038933 25.156267l45.226667 45.2608C275.182933 135.714133 82.602667 331.741867 82.602667 572.347733c0 147.626667 73.1136 285.149867 193.194666 366.114134 3.072 2.56 77.550933 62.190933 188.757334 74.308266 29.422933 3.208533 31.1296 3.310933 61.781333 3.310934 244.667733 0 443.733333-199.0656 443.733333-443.733334A443.392 443.392 0 0 0 773.597867 203.776","p-id":"12645"}}),_c('path',{attrs:{"d":"M542.071467 400.827733a33.28 33.28 0 0 0-17.134934 6.075734l-0.170666-0.3072-106.8032 69.700266 0.170666 0.273067a33.9968 33.9968 0 0 0-15.837866 29.696c0.750933 18.944 16.725333 33.723733 35.669333 32.9728a33.109333 33.109333 0 0 0 17.1008-6.0416l0.2048 0.273067 53.998933-35.259734v249.856h0.034134c0 0.477867-0.238933 0.887467-0.2048 1.365334a34.2016 34.2016 0 1 0 68.4032-1.365334h0.034133v-0.170666c0-0.4096 0.2048-0.750933 0.2048-1.160534 0-0.273067-0.170667-0.477867-0.2048-0.785066V435.2c0-0.477867 0.2048-0.887467 0.2048-1.3312a34.4064 34.4064 0 0 0-35.669333-33.041067","p-id":"12646"}})]):_vm._e(),(_vm.playMode == 'list')?_c('svg',{staticClass:"icon",attrs:{"t":"1604306527698","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"13436","width":"200","height":"200","title":"列表播放"}},[_c('path',{attrs:{"d":"M832 832a32 32 0 0 1 3.744 63.776L832 896H192a32 32 0 0 1-3.744-63.776L192 832h640z m0-304a32 32 0 0 1 3.744 63.776L832 592H192a32 32 0 0 1-3.744-63.776L192 528h640zM224.256 128.544a64 64 0 0 1 26.816 5.888L256 136.96l127.488 72.832a64 64 0 0 1 4.832 108.096l-4.8 3.04L256 393.824a64 64 0 0 1-95.52-50.016l-0.224-5.568V192.544a64 64 0 0 1 64-64z m0 64v145.696l127.488-72.864-127.488-72.832zM832 224a32 32 0 0 1 3.744 63.776L832 288H496a32 32 0 0 1-3.744-63.776L496 224H832z","p-id":"13437"}})]):_vm._e(),(_vm.playMode == 'list-loop')?_c('svg',{staticClass:"icon",attrs:{"title":"列表循环","t":"1604563821277","viewBox":"0 0 1092 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"6511","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M887.466667 1024H204.8a204.8 204.8 0 0 1-204.8-204.8V409.6a204.8 204.8 0 0 1 204.8-204.8 68.266667 68.266667 0 0 1 0 136.533333 68.266667 68.266667 0 0 0-68.266667 68.266667v409.6a68.266667 68.266667 0 0 0 68.266667 68.266667h682.666667a68.266667 68.266667 0 0 0 68.266666-68.266667V409.6a68.266667 68.266667 0 0 0-68.266666-68.266667H574.122667l88.746666 88.064a68.266667 68.266667 0 0 1-96.938666 96.938667l-204.8-204.8a68.266667 68.266667 0 0 1 0-96.938667l204.8-204.8a68.266667 68.266667 0 1 1 96.938666 96.938667L574.122667 204.8H887.466667a204.8 204.8 0 0 1 204.8 204.8v409.6a204.8 204.8 0 0 1-204.8 204.8z","fill":"#383B48","p-id":"6512"}})]):_vm._e(),(_vm.playMode == 'random')?_c('svg',{staticClass:"icon",attrs:{"t":"1604300800668","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5233","width":"200","height":"200","title":"随机播放"}},[_c('path',{attrs:{"d":"M912 311.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2-2.8-2.8-4.2-6.2-4.2-10v-85.7H626.3c-14.3 0-27.2 2.3-38.9 6.7-11.6 4.5-21.9 11.2-30.8 20.1-8.9 8.9-16.5 18.1-22.7 27.4-6.3 9.4-13 20.9-20.1 34.6-9.5 18.5-21.1 43.9-34.8 76.3-8.6 19.6-16 36.2-22.1 49.6-6.1 13.4-14.2 29-24.1 46.9s-19.5 32.8-28.5 44.6c-9.1 11.9-20.1 24.2-33.1 37.1-13 12.8-26.4 23-40.2 30.6-13.8 7.6-29.7 13.8-47.5 18.8-17.8 4.9-36.9 7.3-57.2 7.3h-100c-4.1 0-7.6-1.3-10.2-4-2.7-2.6-4-6-4-10.1v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c14.3 0 27.2-2.3 38.9-6.7 11.6-4.5 21.9-11.2 30.8-20.1 8.9-8.9 16.5-18.1 22.7-27.4 6.3-9.4 13-20.9 20.1-34.6 9.5-18.4 21.1-43.9 34.8-76.3 8.6-19.6 16-36.2 22.1-49.6 6.1-13.4 14.2-29 24.1-46.9 10-17.8 19.5-32.8 28.5-44.6 9.1-11.9 20.1-24.2 33.1-37.1 13-12.8 26.4-23 40.2-30.6 13.8-7.6 29.7-13.8 47.5-18.8 17.8-4.9 36.9-7.3 57.2-7.3h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 301.9c2.7 2.4 4 5.9 4 10z m-502.7 43.3c-17.8 27.4-38.2 68-61.1 121.9-6.6-13.4-12-24.1-16.5-32.4-4.5-8.2-10.5-17.7-18.1-28.4-7.6-10.7-15.2-19.2-22.7-25.3-7.6-6.1-17-11.3-28.2-15.6-11.2-4.3-23.3-6.5-36.4-6.5h-99.9c-4.1 0-7.6-1.3-10.2-4-2.7-2.7-4-6.1-4-10.2V269c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c74.2-0.1 135.3 33.4 182.9 100.4zM912 711.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2s-4.2-6.2-4.2-10v-85.7c-9.5 0-22.2 0.1-37.9 0.2-15.8 0.2-27.8 0.3-36.2 0.5-8.4 0.2-19.2 0-32.6-0.5s-23.9-1.2-31.7-2.3c-7.7-1-17.3-2.6-28.5-4.7-11.3-2.1-20.7-4.8-28.2-8.3-7.4-3.4-16.1-7.7-25.9-12.8-9.9-5.1-18.6-11-26.4-17.8-7.7-6.9-16-14.8-24.6-23.8-8.6-9.1-17-19.4-25-31 17.6-27.7 37.8-68.3 60.8-121.9 6.6 13.4 12 24.2 16.5 32.4s10.5 17.7 18.1 28.4c7.6 10.7 15.2 19.2 22.7 25.3 7.6 6.1 17 11.4 28.2 15.6 11.2 4.3 23.3 6.5 36.4 6.5h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 702c2.7 2.3 4 5.8 4 9.9z","p-id":"5234"}})]):_vm._e()]):_vm._e(),_c('div',{staticClass:"audio-controls__time"},[_vm._v(" "+_vm._s(_vm.mm_ss(_vm.currentTime))+" / "+_vm._s(_vm.mm_ss(_vm.duration))+" ")]),_c('AudioProgress',{style:({
        width: ("calc(100% - " + (320 +
          (_vm.isShowPrev ? 36 : 0) +
          (_vm.isShowNext ? 36 : 0) +
          (_vm.showMode ? 36 : 0)) + "px)"),
      }),attrs:{"percent":_vm.percentage},on:{"change":_vm.onChangeProgress}}),_c('AudioVolume',{ref:"volume",attrs:{"title":"音量","volume":_vm.volume},on:{"change":_vm.onChangeVolume}})],1),_c('audio',{ref:"audio",staticClass:"audio-player__audio",attrs:{"src":_vm.source},on:{"progress":_vm.onProgress,"canplaythrough":_vm.onCanPlayThrough,"ended":_vm.onEnded,"timeupdate":_vm.onPlaying}},[_vm._v(" 您的浏览器不支持 audio 标签。 ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/audio-player/index.vue?vue&type=template&id=93510a14&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d1d0a16a-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/audio-progress/index.vue?vue&type=template&id=db51c508&
var audio_progressvue_type_template_id_db51c508_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"audio-controls__progress",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.onClick($event)}}},[(false)?undefined:_vm._e(),_c('div',{ref:"progress",staticClass:"audio-controls__progress-outer",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.onClick($event)}}},[_c('div',{staticClass:"audio-controls__progress-inner",style:({ width: _vm.percent + '%' }),on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.onClick($event)}}}),_c('div',{staticClass:"audio-controls__progress-point",style:({ left: _vm.percent + '%' })})])])}
var audio_progressvue_type_template_id_db51c508_staticRenderFns = []


// CONCATENATED MODULE: ./packages/audio-progress/index.vue?vue&type=template&id=db51c508&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/audio-progress/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var audio_progressvue_type_script_lang_js_ = ({
  name: "AudioProgress",
  props: {
    percent: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      selfPercent: this.percent ? this.percent : 0,
    };
  },
  methods: {
    onClick: function(e) {
      this.selfPercent = (e.offsetX / this.$refs.progress.offsetWidth) * 100;
      this.$emit("change", this.selfPercent);
    },
  },
});

// CONCATENATED MODULE: ./packages/audio-progress/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_audio_progressvue_type_script_lang_js_ = (audio_progressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/audio-progress/index.vue





/* normalize component */

var component = normalizeComponent(
  packages_audio_progressvue_type_script_lang_js_,
  audio_progressvue_type_template_id_db51c508_render,
  audio_progressvue_type_template_id_db51c508_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var audio_progress = (component.exports);
// CONCATENATED MODULE: ./packages/audio-progress/index.js
// 导入组件，组件必须声明 name


// 为组件添加 install 方法，用于按需引入
audio_progress.install = function(Vue) {
  Vue.component(audio_progress.name, audio_progress);
};

/* harmony default export */ var packages_audio_progress = (audio_progress);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d1d0a16a-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/audio-volume/index.vue?vue&type=template&id=143193d0&
var audio_volumevue_type_template_id_143193d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"audio-controls__volume"},[(!_vm.selfMuted)?_c('svg',{staticClass:"icon",attrs:{"t":"1604492613740","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1682","width":"200","height":"200"},on:{"click":_vm.mute}},[_c('path',{attrs:{"d":"M596 139c16.71 16.242 26 38.634 26 62v624c0 48.608-39.423 88-88 88-23.423 0-45.833-9.282-62-26L312.059 727.059A48 48 0 0 0 278.118 713H216c-70.657 0.295-128-57.003-128-128V441c0-70.338 57.343-127.636 128-128h61.198a48 48 0 0 0 33.844-13.962L472 139c34.021-34.576 89.774-34.604 124 0z m219.153 132.989C883.63 332.312 924 422.217 924 518.999c0 96.784-40.37 186.689-108.847 247.012-13.262 11.683-33.482 10.403-45.165-2.859-11.682-13.261-10.402-33.482 2.86-45.164C827.493 669.849 860 597.455 860 519s-32.507-150.85-87.152-198.988c-13.262-11.682-14.542-31.903-2.86-45.164 11.683-13.262 31.903-14.542 45.165-2.86z m-95.508 93.39C760.867 403.048 785 458.494 785 517.973c0 59.513-24.161 114.988-65.425 152.659-13.052 11.915-33.292 10.994-45.208-2.058-11.796-12.922-11.011-32.888 1.67-44.848l0.388-0.36 0.834-0.768C704.657 597.13 721 559.193 721 517.974c0-41.613-16.656-79.88-44.53-105.352-13.045-11.922-13.956-32.163-2.034-45.209 11.922-13.046 32.163-13.957 45.209-2.035z","fill":"#333333","p-id":"1683"}})]):_vm._e(),(_vm.selfMuted)?_c('svg',{staticClass:"icon",attrs:{"t":"1604492655584","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1814","width":"200","height":"200"},on:{"click":_vm.mute}},[_c('path',{attrs:{"d":"M596.194 138.74A87.977 87.977 0 0 1 622 200.984v624.03C622 873.608 582.6 913 534 913a88.008 88.008 0 0 1-62.257-25.801l-160.029-160.16a48 48 0 0 0-33.955-14.073l-61.759 0.001c-70.692 0-128-57.297-128-127.978V441.015c0-70.68 57.308-127.978 128-127.978h61.755a48 48 0 0 0 33.955-14.073L471.743 138.8c34.35-34.377 90.068-34.405 124.451-0.062z m342.693 241.925c12.517 12.517 12.517 32.811 0 45.329l-88.283 88.281 88.283 88.283c12.517 12.517 12.517 32.811 0 45.329-12.518 12.517-32.812 12.517-45.33 0l-88.282-88.283-88.281 88.283c-12.518 12.517-32.812 12.517-45.33 0-12.517-12.518-12.517-32.812 0-45.33l88.282-88.282-88.281-88.281c-12.518-12.518-12.518-32.812 0-45.33 12.517-12.517 32.811-12.517 45.329 0l88.281 88.282 88.283-88.281c12.517-12.518 32.811-12.518 45.329 0z","fill":"#333333","p-id":"1815"}})]):_vm._e(),_c('div',{ref:"volume",staticClass:"audio-controls__volume-wrapper",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.onClick($event)}}},[_c('div',{staticClass:"audio-controls__volume-outer",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.onClick($event)}}},[_c('div',{staticClass:"audio-controls__volume-inner",style:({ width: _vm.selfMuted ? 0 : _vm.selfVolume + '%' }),on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.onClick($event)}}}),_c('div',{staticClass:"audio-controls__volume-point",style:({ left: _vm.selfMuted ? 0 : _vm.selfVolume + '%' }),attrs:{"title":_vm.selfMuted ? 0 : _vm.selfVolume}})])])])}
var audio_volumevue_type_template_id_143193d0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/audio-volume/index.vue?vue&type=template&id=143193d0&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/audio-volume/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var audio_volumevue_type_script_lang_js_ = ({
  name: "AudioVolume",
  props: {
    volume: {
      type: Number,
      default: null,
    },
    muted: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selfMuted: this.muted ? this.muted : false,
      selfVolume: this.volume ? this.volume : 50,
    };
  },
  methods: {
    mute: function() {
      this.selfMuted = !this.selfMuted;
      if (this.selfMuted) {
        this.$emit("change", 0);
      } else {
        this.$emit("change", this.selfVolume);
      }
    },
    onClick: function(e) {
      this.selfVolume = (e.offsetX / this.$refs.volume.offsetWidth) * 100;
      this.$emit("change", this.selfVolume);
    },
  },
});

// CONCATENATED MODULE: ./packages/audio-volume/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_audio_volumevue_type_script_lang_js_ = (audio_volumevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/audio-volume/index.vue





/* normalize component */

var audio_volume_component = normalizeComponent(
  packages_audio_volumevue_type_script_lang_js_,
  audio_volumevue_type_template_id_143193d0_render,
  audio_volumevue_type_template_id_143193d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var audio_volume = (audio_volume_component.exports);
// CONCATENATED MODULE: ./packages/audio-volume/index.js
// 导入组件，组件必须声明 name


// 为组件添加 install 方法，用于按需引入
audio_volume.install = function(Vue) {
  Vue.component(audio_volume.name, audio_volume);
};

/* harmony default export */ var packages_audio_volume = (audio_volume);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/audio-player/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var audio_playervue_type_script_lang_js_ = ({
  name: "AudioPlayer",
  components: {
    AudioProgress: packages_audio_progress,
    AudioVolume: packages_audio_volume,
  },
  props: {
    // 音频播放源
    src: {
      type: String,
      default: null,
    },
    // 是否单曲循环播放
    loop: {
      type: Boolean,
      default: false,
    },
    // 播放列表
    srcList: {
      type: Array,
      default: null,
    },
    // 播放列表关键字
    srcKey: {
      type: String,
      default: null,
    },
    // 是否显示上一首按钮
    showPrev: {
      type: Boolean,
      default: false,
    },
    // 是否显示下一首按钮
    showNext: {
      type: Boolean,
      default: false,
    },
    // 是否显示播放模式按钮
    showMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPlaying: false, // 音频是否正在播放
      currentIndex: 0, // 当前播放的音频位置索引
      volume: 50, // 音频音量
      currentTime: 0, // 音频当前播放位置
      duration: 0, // 音频长度
      playMode: this.loop ? "single-loop" : "single", // 播放模式：单曲播放，单曲循环，顺序播放，循环播放，随机播放
    };
  },
  computed: {
    percentage: function() {
      return (this.currentTime / this.duration) * 100;
    },
    // 是否是多曲音频源
    isList: function() {
      return this.srcList ? true : false;
    },
    // 是否显示上一首按钮
    isShowPrev: function() {
      return this.showPrev || this.isList;
    },
    // 是否显示下一首按钮
    isShowNext: function() {
      return this.showNext || this.isList;
    },
    // 是否是单曲循环
    isSingleLoop: function() {
      return this.loop
        ? this.playMode == "single-loop"
        : this.playMode == "single";
    },
    // 音频源
    source: function() {
      if (this.isList) {
        return this.srcKey
          ? this.srcList[this.currentIndex][this.srcKey]
          : this.srcList[this.currentIndex];
      }
      return this.src;
    },
  },
  methods: {
    // 调整音量
    onChangeVolume(value) {
      this.$refs.audio.volume = value / 100;
      this.$emit("volume-change", value);
    },
    //调整进度
    onChangeProgress(value) {
      this.$refs.audio.currentTime = (value / 100) * this.duration;
      this.$emit("progress-change", value);
    },
    // 点击播放模式
    onCickPLayMode() {
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
    mm_ss(val) {
      return (
        ("00" + parseInt(val / 60)).slice(-2) +
        ":" +
        ("00" + parseInt(val % 60)).slice(-2)
      );
    },
    onPlayPrev() {
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
    onPlayNext() {
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
    onPlay(index) {
      this.currentIndex = index;
      if (!this.source) return;

      this.$refs.audio.play();
      this.isPlaying = true;
      this.$emit("play", this.currentIndex);
    },
    // 播放中
    onPlaying() {
      this.currentTime = this.$refs.audio.currentTime;
      this.$emit("playing", this.currentTime);
    },
    // 暂停
    onPause() {
      this.$refs.audio.pause();
      this.isPlaying = false;
      this.$emit("pause");
    },
    // 客户端正在请求数据，缓冲中
    onProgress() {
      this.duration = this.$refs.audio.duration;
    },
    // 歌曲已经载入完全
    onCanPlayThrough() {
      if (this.isPlaying) {
        this.$refs.audio.play();
      }
    },
    // 音频的播放是否已结束
    onEnded() {
      // 单曲播放
      if (this.playMode == "single") {
        this.isPlaying = false;
        this.$emit("ended");
        return;
      }
      // 单曲循环
      if (this.playMode == "single-loop") {
        this.$refs.audio.play();
        return;
      }
      // 顺序播放
      if (this.playMode == "list") {
        if (this.currentIndex != this.srcList.length - 1) {
          this.onPlayNext();
        } else {
          this.isPlaying = false;
          this.$emit("ended");
        }
        return;
      }
      // 循环播放
      if (this.playMode == "list-loop") {
        this.onPlayNext();
        return;
      }
      // 随机播放
      if (this.playMode == "random") {
        this.onPlayNext();
        return;
      }
    },
  },
});

// CONCATENATED MODULE: ./packages/audio-player/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_audio_playervue_type_script_lang_js_ = (audio_playervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/audio-player/index.vue?vue&type=style&index=0&lang=scss&
var audio_playervue_type_style_index_0_lang_scss_ = __webpack_require__("81d1");

// CONCATENATED MODULE: ./packages/audio-player/index.vue






/* normalize component */

var audio_player_component = normalizeComponent(
  packages_audio_playervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var audio_player = (audio_player_component.exports);
// CONCATENATED MODULE: ./packages/audio-player/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
audio_player.install = function(Vue) {
  Vue.component(audio_player.name, audio_player);
};

// 默认导出组件
/* harmony default export */ var packages_audio_player = (audio_player);

// CONCATENATED MODULE: ./packages/index.js
// 导入单个组件




// 以数组的结构保存组件，便于遍历
const components = [packages_audio_player, packages_audio_progress, packages_audio_volume];

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  // 遍历并注册全局组件
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components,
});

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.8@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "79e4":
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

/***/ "81d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_0_5_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d874");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_0_5_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_0_5_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d874":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=vue-audio-player.common.js.map