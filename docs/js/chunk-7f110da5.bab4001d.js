(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f110da5"],{"00ce":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goods"},[e("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:3e3}},t._l(t.goods.thumb,function(t){return e("van-swipe-item",{key:t},[e("img",{attrs:{src:t}})])}),1),e("van-cell-group",[e("van-cell",[e("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))]),e("div",{staticClass:"goods-price"},[t._v(t._s(t.formatPrice(t.goods.price)))])]),e("van-cell",{staticClass:"goods-express"},[e("van-col",{attrs:{span:"10"}},[t._v("运费："+t._s(t.goods.express))]),e("van-col",{attrs:{span:"14"}},[t._v("剩余："+t._s(t.goods.remain))])],1)],1),e("van-cell-group",{staticClass:"goods-cell-group"},[e("van-cell",{attrs:{value:"进入店铺",icon:"shop-o","is-link":""},on:{click:t.sorry}},[e("template",{slot:"title"},[e("span",{staticClass:"van-cell-text"},[t._v("有赞的店")]),e("van-tag",{staticClass:"goods-tag",attrs:{type:"danger"}},[t._v("官方")])],1)],2),e("van-cell",{attrs:{title:"线下门店",icon:"location-o","is-link":""},on:{click:t.sorry}})],1),e("van-cell-group",{staticClass:"goods-cell-group"},[e("van-cell",{attrs:{title:"查看商品详情","is-link":""},on:{click:t.sorry}})],1),e("van-goods-action",[e("van-goods-action-icon",{attrs:{icon:"chat-o"},on:{click:t.sorry}},[t._v("\n      客服\n    ")]),e("van-goods-action-icon",{attrs:{icon:"cart-o"},on:{click:t.onClickCart}},[t._v("\n      购物车\n    ")]),e("van-goods-action-button",{attrs:{type:"warning"},on:{click:t.sorry}},[t._v("\n      加入购物车\n    ")]),e("van-goods-action-button",{attrs:{type:"danger"},on:{click:t.sorry}},[t._v("\n      立即购买\n    ")])],1)],1)},s=[],a=(e("e7e5"),e("d399")),o=e("bd86"),c=(e("68ef"),e("09fe"),e("1175"),e("1988")),r=e("d282"),l=e("48f4"),h=e("9884"),u=e("b650"),d=Object(r["a"])("goods-action-button"),f=d[0],p=d[1],v=f({mixins:[Object(h["a"])("vanGoodsAction")],props:Object(c["a"])({},l["c"],{type:String,text:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(l["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(u["a"],{class:p([{first:this.isFirst,last:this.isLast},this.type]),attrs:{square:!0,size:"large",type:this.type,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),b=(e("80ee"),e("ad06")),g=Object(r["a"])("goods-action-icon"),m=g[0],w=g[1],y=m({mixins:[Object(h["a"])("vanGoodsAction")],props:Object(c["a"])({},l["c"],{text:String,icon:String,info:[Number,String],iconClass:null}),methods:{onClick:function(t){this.$emit("click",t),Object(l["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"button",tabindex:"0"},class:w(),on:{click:this.onClick}},[this.slots("icon")?t("div",{class:w("icon")},[this.slots("icon")]):t(b["a"],{class:[w("icon"),this.iconClass],attrs:{tag:"div",info:this.info,name:this.icon}}),this.slots()||this.text])}}),O=(e("4cf9"),Object(r["a"])("goods-action")),k=O[0],j=O[1],C=k({mixins:[Object(h["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:Boolean},render:function(){var t=arguments[0];return t("div",{class:j({"safe-area-inset-bottom":this.safeAreaInsetBottom})},[this.slots()])}}),S=(e("786d"),Object(r["a"])("swipe-item")),x=S[0],$=S[1],z=x({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],i=this.$parent,e=i.vertical,n=i.computedWidth,s=i.computedHeight,a={width:n+"px",height:e?s+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:$(),style:a,on:Object(c["a"])({},this.$listeners)},[this.slots()])}}),T=(e("8270"),e("1325")),_=e("3875");function B(t){function i(){this.binded||(t.call(this,T["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,T["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}var N=e("4598");function A(t,i,e){return Math.min(Math.max(t,i),e)}var P,I=Object(r["a"])("swipe"),D=I[0],M=I[1],E=D({mixins:[_["a"],B(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(T["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?A(i+t,-1,e):A(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=A(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,s=void 0===n?0:n,a=t.emitChange,o=this.loop,c=this.count,r=this.active,l=this.swipes,h=this.trackSize,u=this.minOffset;if(!(c<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,s);if(o){if(l[0]){var p=f<u;l[0].offset=p?h:0}if(l[c-1]){var v=f>0;l[c-1].offset=v?-h:0}}this.active=d,this.offset=f,a&&d!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(N["a"])(function(){e.move({pace:t%e.count-e.active,emitChange:!0}),i.immediate?Object(N["a"])(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(N["a"])(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:M("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,s){return i("i",{class:M("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})})]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:M()},[t("div",{ref:"track",style:this.trackStyle,class:M("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}}),q=(e("0653"),e("34e9")),F=(e("c194"),e("7744")),L=(e("c3a6"),e("81e6"),e("9ffb")),R=(e("9b7e"),e("a3e2")),X={components:(P={},Object(o["a"])(P,R["a"].name,R["a"]),Object(o["a"])(P,L["a"].name,L["a"]),Object(o["a"])(P,b["a"].name,b["a"]),Object(o["a"])(P,F["a"].name,F["a"]),Object(o["a"])(P,q["a"].name,q["a"]),Object(o["a"])(P,E.name,E),Object(o["a"])(P,z.name,z),Object(o["a"])(P,C.name,C),Object(o["a"])(P,y.name,y),Object(o["a"])(P,v.name,v),P),data:function(){return{goods:{title:"美国伽力果（约680g/3个）",price:2680,express:"免运费",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"]}}},methods:{formatPrice:function(){return"¥"+(this.goods.price/100).toFixed(2)},onClickCart:function(){this.$router.push("cart")},sorry:function(){Object(a["a"])("暂无后续逻辑~")}}},Y=X,H=(e("b2f1"),e("2877")),W=Object(H["a"])(Y,n,s,!1,null,null,null);i["default"]=W.exports},"0653":function(t,i,e){"use strict";e("68ef")},1175:function(t,i,e){},"34e9":function(t,i,e){"use strict";var n=e("2638"),s=e.n(n),a=e("d282"),o=e("ba31"),c=e("b1d2"),r=Object(a["a"])("cell-group"),l=r[0],h=r[1];function u(t,i,e,n){var a,r=t("div",s()([{class:[h(),(a={},a[c["b"]]=i.border,a)]},Object(o["b"])(n,!0)]),[e.default&&e.default()]);return i.title||e.title?t("div",[t("div",{class:h("title")},[e.title?e.title():i.title]),r]):r}u.props={title:String,border:{type:Boolean,default:!0}},i["a"]=l(u)},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",function(){return l});var n=e("a142"),s=Date.now();function a(t){var i=Date.now(),e=Math.max(0,16-(i-s)),n=setTimeout(t,e);return s=i+e,n}var o=n["d"]?t:window,c=o.requestAnimationFrame||a;o.cancelAnimationFrame||o.clearTimeout;function r(t){return c.call(o,t)}function l(t){r(function(){r(t)})}}).call(this,e("c8ba"))},"4cf9":function(t,i,e){},7744:function(t,i,e){"use strict";var n=e("1988"),s=e("2638"),a=e.n(s),o=e("d282"),c=e("a142"),r={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},l=e("ba31"),h=e("48f4"),u=e("ad06"),d=Object(o["a"])("cell"),f=d[0],p=d[1];function v(t,i,e,n){var s=i.icon,o=i.size,r=i.title,d=i.label,f=i.value,v=i.isLink,b=i.arrowDirection,g=e.title||Object(c["b"])(r),m=e.default||Object(c["b"])(f),w=e.label||Object(c["b"])(d),y=w&&t("div",{class:[p("label"),i.labelClass]},[e.label?e.label():d]),O=g&&t("div",{class:[p("title"),i.titleClass],style:i.titleStyle},[e.title?e.title():t("span",[r]),y]),k=m&&t("div",{class:[p("value",{alone:!e.title&&!r}),i.valueClass]},[e.default?e.default():t("span",[f])]),j=e.icon?e.icon():s&&t(u["a"],{class:p("left-icon"),attrs:{name:s}}),C=e["right-icon"],S=C?C():v&&t(u["a"],{class:p("right-icon"),attrs:{name:b?"arrow-"+b:"arrow"}});function x(t){Object(l["a"])(n,"click",t),Object(h["a"])(n)}var $={center:i.center,required:i.required,borderless:!i.border,clickable:v||i.clickable};return o&&($[o]=o),t("div",a()([{class:p($),on:{click:x}},Object(l["b"])(n)]),[j,O,k,S,e.extra&&e.extra()])}v.props=Object(n["a"])({},r,{},h["c"]);i["a"]=f(v)},"786d":function(t,i,e){},"7b0a":function(t,i,e){},"80ee":function(t,i,e){},"81e6":function(t,i,e){"use strict";e("68ef"),e("7b0a")},8270:function(t,i,e){},"9fa1":function(t,i,e){},"9ffb":function(t,i,e){"use strict";var n=e("d282"),s=Object(n["a"])("col"),a=s[0],o=s[1];i["a"]=a({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,i=arguments[0],e=this.span,n=this.offset;return i(this.tag,{style:this.style,class:o((t={},t[e]=e,t["offset-"+n]=n,t)),on:{click:this.onClick}},[this.slots()])}})},b2f1:function(t,i,e){"use strict";var n=e("9fa1"),s=e.n(n);s.a},c194:function(t,i,e){"use strict";e("68ef"),e("09fe")},c3a6:function(t,i,e){"use strict";e("68ef"),e("09fe")}}]);
//# sourceMappingURL=chunk-7f110da5.bab4001d.js.map