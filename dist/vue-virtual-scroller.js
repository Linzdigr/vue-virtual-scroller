!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueVirtualScroller=factory():root.VueVirtualScroller=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports,__webpack_require__){(function(module){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};!function(root,factory){"object"==_typeof2(exports)&&"object"==_typeof2(module)?module.exports=factory():(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=factory,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}(0,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(obj){return void 0===obj?"undefined":_typeof2(obj)}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":void 0===obj?"undefined":_typeof2(obj)};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(5);var Component=__webpack_require__(6)(__webpack_require__(4),__webpack_require__(7),"data-v-6a22d6d2",null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("resize-observer",__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__);__webpack_require__.d(__webpack_exports__,"ResizeObserver",function(){return __WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a});var plugin={version:"0.1.4",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(0))},function(module,__webpack_exports__,__webpack_require__){"use strict";function getInternetExplorerVersion(){var ua=window.navigator.userAgent,msie=ua.indexOf("MSIE ");if(msie>0)return parseInt(ua.substring(msie+5,ua.indexOf(".",msie)),10);if(ua.indexOf("Trident/")>0){var rv=ua.indexOf("rv:");return parseInt(ua.substring(rv+3,ua.indexOf(".",rv)),10)}var edge=ua.indexOf("Edge/");return edge>0?parseInt(ua.substring(edge+5,ua.indexOf(".",edge)),10):-1}__webpack_exports__.a=getInternetExplorerVersion},function(module,__webpack_exports__,__webpack_require__){"use strict";function initCompat(){initCompat.init||(initCompat.init=!0,isIE=-1!==__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_compatibility__.a)())}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_compatibility__=__webpack_require__(3),isIE=void 0;__webpack_exports__.default={name:"resize-observer",methods:{notify:function(){this.$emit("notify")},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.notify),this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||this.notify()},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(!isIE&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.notify),delete this._resizeObject.onload)}},mounted:function(){var _this=this;initCompat(),this.$nextTick(function(){_this._w=_this.$el.offsetWidth,_this._h=_this.$el.offsetHeight});var object=document.createElement("object");this._resizeObject=object,object.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),object.onload=this.addResizeHandlers,object.type="text/html",isIE&&this.$el.appendChild(object),object.data="about:blank",isIE||this.$el.appendChild(object)},beforeDestroy:function(){this.removeResizeHandlers()}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=_typeof2(rawScriptExports.default);"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[]}}])})}).call(exports,__webpack_require__(1)(module))},function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),module.webpackPolyfill=1),module}},function(module,exports,__webpack_require__){(function(module){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};!function(root,factory){"object"==_typeof2(exports)&&"object"==_typeof2(module)?module.exports=factory():(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=factory,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}(0,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports,__webpack_require__){"use strict";function throwValueError(value){if(null!==value&&"function"!=typeof value)throw new Error("observe-visibility directive expects a function as the value")}exports.a={bind:function(el,_ref,vnode){var value=_ref.value;"undefined"==typeof IntersectionObserver?console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill"):function(){throwValueError(value),el._vue_visibilityCallback=value;var observer=el._vue_intersectionObserver=new IntersectionObserver(function(entries){var entry=entries[0];el._vue_visibilityCallback&&el._vue_visibilityCallback.call(null,entry.intersectionRatio>0,entry)});vnode.context.$nextTick(function(){observer.observe(el)})}()},update:function(el,_ref2){var value=_ref2.value;throwValueError(value),el._vue_visibilityCallback=value},unbind:function(el){el._vue_intersectionObserver&&(el._vue_intersectionObserver.disconnect(),delete el._vue_intersectionObserver,delete el._vue_visibilityCallback)}}},function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(obj){return void 0===obj?"undefined":_typeof2(obj)}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":void 0===obj?"undefined":_typeof2(obj)};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){"use strict";(function(global){function install(Vue){Vue.directive("observe-visibility",__WEBPACK_IMPORTED_MODULE_0__directives_observe_visibility__.a)}var __WEBPACK_IMPORTED_MODULE_0__directives_observe_visibility__=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__.d(exports,"ObserveVisibility",function(){return __WEBPACK_IMPORTED_MODULE_0__directives_observe_visibility__.a}),exports.install=install;var plugin={version:"0.1.3",install:install};exports.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}).call(exports,__webpack_require__(1))}])})}).call(exports,__webpack_require__(1)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";function install(Vue){Vue.component("virtual-scroller",__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue__.a)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.install=install,__webpack_require__.d(__webpack_exports__,"VirtualScroller",function(){return VirtualScroller});var __WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue__=__webpack_require__(4),VirtualScroller=__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue__.a;__webpack_exports__.default={version:"0.9.0",install:install}},function(module,__webpack_exports__,__webpack_require__){"use strict";function injectStyle(ssrContext){__webpack_require__(5)}var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VirtualScroller_vue__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_303cd025_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_VirtualScroller_vue__=__webpack_require__(12),normalizeComponent=__webpack_require__(6),__vue_styles__=injectStyle,Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VirtualScroller_vue__.a,__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_303cd025_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_VirtualScroller_vue__.a,__vue_styles__,"data-v-303cd025",null);__webpack_exports__.a=Component.exports},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,injectStyles,scopeId,moduleIdentifier){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId);var hook;if(moduleIdentifier?(hook=function(context){context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,context||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=injectStyles),hook){var functional=options.functional,existing=functional?options.render:options.beforeCreate;functional?options.render=function(h,context){return hook.call(context),existing(h,context)}:options.beforeCreate=existing?[].concat(existing,hook):[hook]}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_vue_resize__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_1_vue_observe_visibility__=__webpack_require__(10);__webpack_exports__.a={name:"virtual-scroller",components:{ResizeObserver:__WEBPACK_IMPORTED_MODULE_0_vue_resize__.ResizeObserver},directives:{ObserveVisibility:__WEBPACK_IMPORTED_MODULE_1_vue_observe_visibility__.ObserveVisibility},props:{items:{type:Array,required:!0},renderers:{default:null},typeField:{type:String,default:"type"},keyField:{type:String,default:"id"},heightField:{type:String,default:"height"},mainTag:{type:String,default:"div"},containerTag:{type:String,default:"div"},containerClass:{default:null},contentTag:{type:String,default:"div"},contentClass:{default:null},pageMode:{type:Boolean,default:!1},buffer:{type:[Number,String],default:1},poolSize:{type:[Number,String],default:1},prerender:{type:[Number,String],default:0},itemWidth:{type:[Number,String],default:null},itemHeight:{type:[Number,String],default:null}},data:function(){return{visibleItems:[],itemContainerStyle:null,itemsStyle:null,keysEnabled:!0}},computed:{cssClass:function(){return{"page-mode":this.pageMode}},heights:function(){if(null===this.itemHeight){for(var heights={},items=this.items,field=this.heightField,accumulator=0,i=0;i<items.length;i++)accumulator+=items[i][field],heights[i]=accumulator;return heights}}},watch:{items:{handler:function(){this.updateVisibleItems(!0)},deep:!0},pageMode:function(){this.applyPageMode(),this.updateVisibleItems(!0)}},methods:{getScroll:function(){var el=this.$el,scroll=void 0;if(this.pageMode){var rect=el.getBoundingClientRect(),top=-rect.top,height=window.innerHeight;top<0&&(height+=top,top=0),top+height>rect.height&&(height=rect.height-top),scroll={top:top,bottom:top+height}}else scroll={top:el.scrollTop,bottom:el.scrollTop+el.clientHeight};return scroll.bottom>=0&&scroll.top<=scroll.bottom?scroll:null},updateVisibleItems:function(){var force=arguments.length>0&&void 0!==arguments[0]&&arguments[0],l=this.items.length,scroll=this.getScroll(),items=this.items,itemsByRow=1;this.itemWidth&&(itemsByRow=~~(this.$refs.vscrollContainer.getBoundingClientRect().width/this.itemWidth));var itemHeight=Math.ceil(this.itemHeight/itemsByRow),containerHeight=void 0,offsetTop=void 0;if(scroll){var startIndex=-1,endIndex=-1;if(null===itemHeight){var heights=this.heights,h=void 0,a=0,b=l-1,i=~~(l/2),oldI=void 0;do{oldI=i,h=heights[i],h<scroll.top?a=i:i<l&&heights[i+1]>scroll.top&&(b=i),i=~~((a+b)/2)}while(i!==oldI);for(startIndex=i,offsetTop=i>0?heights[i-1]:0,containerHeight=heights[l-1],endIndex=i;endIndex<l&&heights[endIndex]<scroll.bottom;endIndex++);-1===endIndex?endIndex=items.length-1:endIndex++}else{var buffer=this.buffer*itemsByRow;startIndex=~~(scroll.top/itemHeight)-buffer,startIndex-=startIndex%itemsByRow,endIndex=Math.ceil(scroll.bottom/itemHeight)+buffer}if(startIndex<0&&(startIndex=0),endIndex>l&&(endIndex=l),null!==itemHeight){var nbRow=Math.ceil(l/itemsByRow);offsetTop=nbRow*itemHeight,containerHeight=nbRow*this.itemHeight}(force||startIndex!==this._startIndex||endIndex!==this._endIndex||l!==this._length)&&(this.keysEnabled=!(startIndex>this._endIndex||endIndex<this._startIndex),this._startIndex=startIndex,this._endIndex=endIndex,this._length=l,this.visibleItems=items.slice(startIndex,endIndex),this.itemContainerStyle={height:containerHeight+"px"},this.itemsStyle={marginTop:offsetTop+"px"})}},scrollToItem:function(index){var scrollTop=void 0;scrollTop=null===this.itemHeight?index>0?this.heights[index-1]:0:index*this.itemHeight,this.$el.scrollTop=scrollTop},applyPageMode:function(){this.pageMode?this.addWindowScroll():this.removeWindowScroll()},addWindowScroll:function(){window.addEventListener("scroll",this.handleScroll,!0),window.addEventListener("resize",this.handleResize)},removeWindowScroll:function(){window.removeEventListener("scroll",this.handleScroll,!0),window.removeEventListener("resize",this.handleResize)},handleScroll:function(){this.updateVisibleItems()},handleResize:function(){this._ready&&this.updateVisibleItems()},handleVisibilityChange:function(isVisible,entry){var _this=this;this._ready&&(isVisible||0!==entry.boundingClientRect.width||0!==entry.boundingClientRect.height)&&this.$nextTick(function(){_this.updateVisibleItems()})}},created:function(){this._ready=!1,this._startIndex=0;var prerender=parseInt(this.prerender);prerender>0?(this.visibleItems=this.items.slice(0,prerender),this._length=this.visibleItems.length,this._endIndex=this._length-1):(this._endIndex=0,this._length=0)},mounted:function(){var _this2=this;this.applyPageMode(),this.$nextTick(function(){_this2.updateVisibleItems(),_this2._ready=!0,_this2.$nextTick(_this2.updateVisibleItems)})},beforeDestroy:function(){this.removeWindowScroll()}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__=__webpack_require__(0);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__);__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__,"ResizeObserver")&&__webpack_require__.d(__webpack_exports__,"ResizeObserver",function(){return __WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__.ResizeObserver});var __WEBPACK_IMPORTED_MODULE_1__dist_vue_resize_css__=__webpack_require__(9);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_vue_resize_css__)},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__=__webpack_require__(2);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__);__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__,"ObserveVisibility")&&__webpack_require__.d(__webpack_exports__,"ObserveVisibility",function(){return __WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__.ObserveVisibility});var __WEBPACK_IMPORTED_MODULE_1__dist_vue_observe_visibility_css__=__webpack_require__(11);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_vue_observe_visibility_css__)},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c(_vm.mainTag,{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:_vm.handleVisibilityChange,expression:"handleVisibilityChange"}],ref:"vscrollContainer",tag:"component",staticClass:"virtual-scroller",class:_vm.cssClass,on:{scroll:_vm.handleScroll}},[_vm._t("before-container"),_vm._v(" "),_c(_vm.containerTag,{tag:"component",staticClass:"item-container",class:_vm.containerClass,style:_vm.itemContainerStyle},[_vm._t("before-content"),_vm._v(" "),_c(_vm.contentTag,{tag:"component",staticClass:"items",class:_vm.contentClass,style:_vm.itemsStyle},[_vm.renderers?_vm._l(_vm.visibleItems,function(item,index){return _c(_vm.renderers[item[_vm.typeField]],{key:_vm.keysEnabled&&item[_vm.keyField]||"",tag:"component",staticClass:"item",attrs:{item:item,"item-index":_vm._startIndex+index}})}):[_vm._l(_vm.visibleItems,function(item,index){return _vm._t("default",null,{item:item,itemIndex:_vm._startIndex+index,itemKey:_vm.keysEnabled&&item[_vm.keyField]||""})})]],2),_vm._v(" "),_vm._t("after-content")],2),_vm._v(" "),_vm._t("after-container"),_vm._v(" "),_c("resize-observer",{on:{notify:_vm.handleResize}})],2)},staticRenderFns=[],esExports={render:render,staticRenderFns:staticRenderFns};__webpack_exports__.a=esExports}])});