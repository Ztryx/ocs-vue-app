(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c84f645a"],{"0d0f":function(t,e,a){},2689:function(t,e,a){},"2d8c":function(t,e,a){"use strict";var r=a("2689"),s=a.n(r);s.a},"615b":function(t,e,a){},"6ece":function(t,e,a){},9561:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loaded?a("v-container",{attrs:{id:"athletes-view"}},[a("v-row",{staticClass:"page-title"},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-2"},[t._v(" Olympic Athletes ")])])],1),a("div",{staticClass:"view-divider"}),a("div",{staticClass:"content"},[a("AthleteList",{attrs:{athletes:t.athletes}})],1),!this.last_page_number||this.page_number<=this.last_page_number?a("v-row",[a("v-col",{staticClass:"more-container",attrs:{cols:"12"}},[a("button",{on:{click:function(e){return t.loadMore()}}},[t._v(" MORE! ")])])],1):t._e()],1):t._e()},s=[],i=(a("99af"),a("2909")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",t._l(t.athletes,(function(e){return a("v-row",{key:e.game_id},[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",[a("div",{staticClass:"game-headline"},[a("h2",{staticClass:"display-1"},[t._v(" "+t._s(e.city)+" "+t._s(e.year)+" ")])])])],1),a("v-row",{staticClass:"horizontal-scrolling"},t._l(e.athletes,(function(t){return a("v-col",{key:t.name,attrs:{xs:"12",sm:"3",md:"3"}},[a("AthleteThumbnail",{attrs:{id:t.id,photo:t.photo,name:t.name,surname:t.surname}})],1)})),1)],1)],1)})),1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{attrs:{to:"/athletes/"+t.id}},[a("v-card",{staticClass:"d-inline-block mx-auto athlete-card-border athlete-card-shadow"},[a("v-img",{attrs:{height:"200",width:"200",src:t.photo,transition:"scale-transition"}}),a("v-card-text",{staticClass:"text--primary athlete-bottom-card"},[a("span",{staticClass:"title"},[t._v(" "+t._s(t.name)+" "+t._s(t.surname)+" ")])])],1)],1)},c=[],d={name:"AthleteList",props:{id:String,photo:String,name:String,surname:String}},u=d,h=(a("a752"),a("2877")),g=a("6544"),m=a.n(g),f=a("b0af"),p=a("99d9"),v=a("adda"),_=Object(h["a"])(u,l,c,!1,null,null,null),b=_.exports;m()(_,{VCard:f["a"],VCardText:p["a"],VImg:v["a"]});var y={name:"AthleteList",components:{AthleteThumbnail:b},props:{athletes:Array}},C=y,B=(a("2d8c"),a("62ad")),k=a("a523"),O=a("0fd9"),j=Object(h["a"])(C,n,o,!1,null,null,null),w=j.exports;m()(j,{VCol:B["a"],VContainer:k["a"],VRow:O["a"]});var z=a("bc3a"),V={name:"AthletesView",components:{AthleteList:w},data:function(){return{loaded:!1,page_size:5,page_number:1,athletes:[],last_page_number:null}},created:function(){this.loadMore()},methods:{loadMore:function(){var t=this;(!this.last_page_number||this.page_number<=this.last_page_number)&&z.get("".concat("http://localhost:3000","/api/athletes"),{params:{page_number:this.page_number,page_size:this.page_size}}).then((function(e){t.athletes=[].concat(Object(i["a"])(t.athletes),Object(i["a"])(e.data.data)),t.last_page_number=e.data.last_page_number,t.page_number+=1,t.loaded=!0}))}}},x=V,$=(a("f029"),Object(h["a"])(x,r,s,!1,null,null,null));e["default"]=$.exports;m()($,{VCol:B["a"],VContainer:k["a"],VRow:O["a"]})},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var r=a("b0af"),s=a("80d2"),i=Object(s["g"])("v-card__actions"),n=Object(s["g"])("v-card__subtitle"),o=Object(s["g"])("v-card__text"),l=Object(s["g"])("v-card__title");r["a"]},a752:function(t,e,a){"use strict";var r=a("ab08"),s=a.n(r);s.a},ab08:function(t,e,a){},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var r=a("5530"),s=(a("615b"),a("10d2")),i=a("2b0e"),n=(a("c7cd"),a("ade3")),o=(a("6ece"),a("0789")),l=a("a9ad"),c=a("fe6c"),d=a("a452"),u=a("7560"),h=a("80d2"),g=a("58df"),m=Object(g["a"])(l["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),d["a"],u["a"]),f=m.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(n["a"])(t,this.$vuetify.rtl?"right":"left",Object(h["f"])(this.normalizedValue,"%")),Object(n["a"])(t,"width",Object(h["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(h["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(h["j"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),a=e.width;this.internalValue=t.offsetX/a*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=f,v=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),_=a("1c87");e["a"]=Object(g["a"])(v,_["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},_["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=v.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},f029:function(t,e,a){"use strict";var r=a("0d0f"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-c84f645a.ce10950b.js.map