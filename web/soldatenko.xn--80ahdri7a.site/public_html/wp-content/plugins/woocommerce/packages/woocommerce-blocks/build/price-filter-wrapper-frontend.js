(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[69],{110:function(e,t,n){"use strict";var r=n(13),c=n.n(r),i=n(0),o=n(145),a=n(5),u=n.n(a);n(211);const l=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:n,value:r,currency:a,onValueChange:s,displayType:b="text",...p}=e;const d="string"==typeof r?parseInt(r,10):r;if(!Number.isFinite(d))return null;const m=d/10**a.minorUnit;if(!Number.isFinite(m))return null;const f=u()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",n),O=null!==(t=p.decimalScale)&&void 0!==t?t:null==a?void 0:a.minorUnit,j={...p,...l(a),decimalScale:O,value:void 0,currency:void 0,onValueChange:void 0},g=s?e=>{const t=+e.value*10**a.minorUnit;s(t)}:()=>{};return Object(i.createElement)(o.a,c()({className:f,displayType:b},j,{value:m,onValueChange:g}))}},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(26),c=n(20);const i=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(82),i=n(4),o=n(27),a=n(20),u=n(31),l=n(52),s=n(24);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:p,queryState:d,productIds:m,isEditor:f=!1}=e,O=Object(s.a)();O+="-collection-data";const[j]=Object(u.a)(O),[g,_]=Object(u.b)("calculate_attribute_counts",[],O),[v,w]=Object(u.b)("calculate_price_range",null,O),[h,y]=Object(u.b)("calculate_stock_status_counts",null,O),[E,k]=Object(u.b)("calculate_rating_counts",null,O),x=Object(o.a)(t||{}),N=Object(o.a)(n),C=Object(o.a)(b),S=Object(o.a)(p);Object(r.useEffect)(()=>{"object"==typeof x&&Object.keys(x).length&&(g.find(e=>Object(a.b)(x,"taxonomy")&&e.taxonomy===x.taxonomy)||_([...g,x]))},[x,g,_]),Object(r.useEffect)(()=>{v!==N&&void 0!==N&&w(N)},[N,w,v]),Object(r.useEffect)(()=>{h!==C&&void 0!==C&&y(C)},[C,y,h]),Object(r.useEffect)(()=>{E!==S&&void 0!==S&&k(S)},[S,k,E]);const[F,R]=Object(r.useState)(f),[U]=Object(c.a)(F,200);F||R(!0);const L=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(i.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(j),[j]);return Object(l.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(i.isEmpty)(m)&&{include:m},...L},shouldSelect:U})}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(26),c=n(151);const i=e=>({heading:Object(r.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(r.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||c.attributes.headingLevel.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showInputFields:"false"!==(null==e?void 0:e.showInputFields),inlineInput:"true"===(null==e?void 0:e.inlineInput)})},151:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},153:function(e,t,n){"use strict";var r=n(0),c=n(53),i=n(31),o=n(129),a=n(13),u=n.n(a),l=n(1),s=n(5),b=n.n(s),p=n(110),d=n(20),m=n(51);n(220);const f=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[i,o]=e;const a=e=>Number.isFinite(e);return a(i)||(i=t||0),a(o)||(o=n||r),a(t)&&t>i&&(i=t),a(n)&&n<=i&&(i=n-r),a(t)&&t>=o&&(o=t+r),a(n)&&n<o&&(o=n),!c&&i>=o&&(i=o-r),c&&o<=i&&(o=i+r),[i,o]};var O=n(61);const j=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},g=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var _=n(60),v=e=>{let{minPrice:t,maxPrice:n,minConstraint:c,maxConstraint:i,onChange:o,step:a,currency:s,showInputFields:v=!0,showFilterButton:w=!1,inlineInput:h=!0,isLoading:y=!1,isUpdating:E=!1,isEditor:k=!1,onSubmit:x=(()=>{})}=e;const N=Object(r.useRef)(null),C=Object(r.useRef)(null),S=a||10**s.minorUnit,[F,R]=Object(r.useState)(t),[U,L]=Object(r.useState)(n),T=Object(r.useRef)(null),[I,A]=Object(r.useState)(0);Object(r.useEffect)(()=>{R(t)},[t]),Object(r.useEffect)(()=>{L(n)},[n]),Object(r.useLayoutEffect)(()=>{var e;h&&T.current&&A(null===(e=T.current)||void 0===e?void 0:e.offsetWidth)},[h,A]);const P=Object(r.useMemo)(()=>isFinite(c)&&isFinite(i),[c,i]),M=Object(r.useMemo)(()=>isFinite(t)&&isFinite(n)&&P?{"--low":Math.round((t-c)/(i-c)*100)-.5+"%","--high":Math.round((n-c)/(i-c)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,c,i,P]),q=Object(r.useCallback)(e=>{if(y||!P||!N.current||!C.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=N.current.offsetWidth,c=+N.current.value,o=C.current.offsetWidth,a=+C.current.value,u=r*(c/i),l=o*(a/i);Math.abs(n-u)>Math.abs(n-l)?(N.current.style.zIndex="20",C.current.style.zIndex="21"):(N.current.style.zIndex="21",C.current.style.zIndex="20")},[y,i,P]),B=Object(r.useCallback)(e=>{const r=e.target.classList.contains("wc-block-price-filter__range-input--min"),a=+e.target.value,u=r?[Math.round(a/S)*S,n]:[t,Math.round(a/S)*S],l=f(u,c,i,S,r);o(l)},[o,t,n,c,i,S]),V=Object(r.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(F>=U){const e=f([0,U],null,null,S,t);return o([parseInt(e[0],10),parseInt(e[1],10)])}const n=f([F,U],null,null,S,t);o(n)},[o,S,F,U]),W=Object(m.a)(x,600),D=b()("wc-block-price-filter","wc-block-components-price-slider",v&&"wc-block-price-filter--has-input-fields",v&&"wc-block-components-price-slider--has-input-fields",w&&"wc-block-price-filter--has-filter-button",w&&"wc-block-components-price-slider--has-filter-button",!P&&"is-disabled",(h||I<=300)&&"wc-block-components-price-slider--is-input-inline"),Q=Object(d.a)(N.current)?N.current.ownerDocument.activeElement:void 0,Y=Q&&Q===N.current?S:1,K=Q&&Q===C.current?S:1,z=String(F/10**s.minorUnit),J=String(U/10**s.minorUnit),$=h&&I>300,X=Object(r.createElement)("div",{className:b()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":y&&E}),onMouseMove:q,onFocus:q},P&&Object(r.createElement)("div",{"aria-hidden":v},Object(r.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:M}),Object(r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(l.__)("Filter products by minimum price","woocommerce"),"aria-valuetext":z,value:Number.isFinite(t)?t:c,onChange:B,step:Y,min:c,max:i,ref:N,disabled:y&&!P,tabIndex:v?-1:0}),Object(r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(l.__)("Filter products by maximum price","woocommerce"),"aria-valuetext":J,value:Number.isFinite(n)?n:i,onChange:B,step:K,min:c,max:i,ref:C,disabled:y,tabIndex:v?-1:0}))),G=e=>`wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,H={currency:s,decimalScale:0},Z={...H,displayType:"input",allowNegative:!1,disabled:y||!P,onBlur:V};return Object(r.createElement)("div",{className:D,ref:T},(!$||!v)&&X,v&&Object(r.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},E?Object(r.createElement)("div",{className:"input-loading"}):Object(r.createElement)(p.a,u()({},Z,{className:G("min"),"aria-label":Object(l.__)("Filter products by minimum price","woocommerce"),isAllowed:g({minConstraint:c,minorUnit:s.minorUnit,currentMaxValue:U}),onValueChange:e=>{e!==F&&R(e)},value:F})),$&&X,E?Object(r.createElement)("div",{className:"input-loading"}):Object(r.createElement)(p.a,u()({},Z,{className:G("max"),"aria-label":Object(l.__)("Filter products by maximum price","woocommerce"),isAllowed:j({maxConstraint:i,minorUnit:s.minorUnit}),onValueChange:e=>{e!==U&&L(e)},value:U}))),!v&&!E&&Number.isFinite(t)&&Number.isFinite(n)&&Object(r.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(r.createElement)(p.a,u()({},H,{value:t})),Object(r.createElement)(p.a,u()({},H,{value:n}))),Object(r.createElement)("div",{className:"wc-block-components-price-slider__actions"},(k||!E&&(t!==c||n!==i))&&Object(r.createElement)(_.a,{onClick:()=>{o([c,i]),W()},screenReaderLabel:Object(l.__)("Reset price filter","woocommerce")}),w&&Object(r.createElement)(O.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:E,disabled:y||!P,onClick:x,screenReaderLabel:Object(l.__)("Apply price filter","woocommerce")})))},w=n(59),h=n(41),y=n(2),E=n(15),k=n(66),x=n(71),N=n(26);const C=(e,t,n)=>{const r=10*10**t;let i=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?i=Math.ceil(o/r)*r:"ROUND_DOWN"===n&&(i=Math.floor(o/r)*r));const a=Object(c.a)(i,Number.isFinite);return Number.isFinite(i)?i:a};n(219);var S=n(43);function F(e,t){return Number(e)*10**t}t.a=e=>{let{attributes:t,isEditor:n=!1}=e;const a=Object(S.b)(),u=Object(y.getSettingWithCoercion)("has_filterable_products",!1,x.a),l=Object(y.getSettingWithCoercion)("is_rendering_php_template",!1,x.a),s=n?[]:Object(y.getSettingWithCoercion)("product_ids",[],Array.isArray),[b,p]=Object(r.useState)(!1),f=Object(k.d)("min_price"),O=Object(k.d)("max_price"),[j]=Object(i.a)(),{results:g,isLoading:_}=Object(o.a)({queryPrices:!0,queryState:j,productIds:s,isEditor:n}),R=Object(h.getCurrencyFromPriceResponse)(Object(d.b)(g,"price_range")?g.price_range:void 0),[U,L]=Object(i.b)("min_price"),[T,I]=Object(i.b)("max_price"),[A,P]=Object(r.useState)(F(f,R.minorUnit)||null),[M,q]=Object(r.useState)(F(O,R.minorUnit)||null),{minConstraint:B,maxConstraint:V}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:C(t||"",r,"ROUND_DOWN"),maxConstraint:C(n||"",r,"ROUND_UP")}})({minPrice:Object(d.b)(g,"price_range")&&Object(d.b)(g.price_range,"min_price")&&Object(N.a)(g.price_range.min_price)?g.price_range.min_price:void 0,maxPrice:Object(d.b)(g,"price_range")&&Object(d.b)(g.price_range,"max_price")&&Object(N.a)(g.price_range.max_price)?g.price_range.max_price:void 0,minorUnit:R.minorUnit});Object(r.useEffect)(()=>{b||(L(F(f,R.minorUnit)),I(F(O,R.minorUnit)),p(!0))},[R.minorUnit,b,O,f,I,L]);const[W,D]=Object(r.useState)(_),Q=Object(r.useCallback)((e,t)=>{const n=t>=Number(V)?void 0:t,r=e<=Number(B)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(E.removeQueryArgs)(e,...Object.keys(t));return Object(E.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**R.minorUnit,max_price:n/10**R.minorUnit});window.location.href!==e&&Object(k.c)(e)}L(r),I(n)},[B,V,L,I,R.minorUnit]),Y=Object(m.a)(Q,500),K=Object(r.useCallback)(e=>{D(!0),e[0]!==A&&P(e[0]),e[1]!==M&&q(e[1]),l&&b&&!t.showFilterButton&&Y(e[0],e[1])},[A,M,P,q,l,b,Y,t.showFilterButton]);Object(r.useEffect)(()=>{t.showFilterButton||l||Y(A,M)},[A,M,t.showFilterButton,Y,l]);const z=Object(c.a)(U),J=Object(c.a)(T),$=Object(c.a)(B),X=Object(c.a)(V);if(Object(r.useEffect)(()=>{(!Number.isFinite(A)||U!==z&&U!==A||B!==$&&B!==A)&&P(Number.isFinite(U)?U:B),(!Number.isFinite(M)||T!==J&&T!==M||V!==X&&V!==M)&&q(Number.isFinite(T)?T:V)},[A,M,U,T,B,V,$,X,z,J]),!u)return a(!1),null;if(!_&&(null===B||null===V||B===V))return a(!1),null;const G="h"+t.headingLevel;a(!0),!_&&W&&D(!1);const H=Object(r.createElement)(G,{className:"wc-block-price-filter__title"},t.heading),Z=_&&W?Object(r.createElement)(w.a,null,H):H;return Object(r.createElement)(r.Fragment,null,!n&&t.heading&&Z,Object(r.createElement)("div",{className:"wc-block-price-slider"},Object(r.createElement)(v,{minConstraint:B,maxConstraint:V,minPrice:A,maxPrice:M,currency:R,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:K,onSubmit:()=>Q(A,M),isLoading:_,isUpdating:W,isEditor:n})))}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},21:function(e,t,n){"use strict";var r=n(0),c=n(5),i=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:o,wrapperProps:a={}}=e;const u=null!=n,l=null!=c;return!u&&l?(t=o||"span",a={...a,className:i()(a.className,"screen-reader-text")},Object(r.createElement)(t,a,c)):(t=o||r.Fragment,u&&l&&n!==c?Object(r.createElement)(t,a,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,a,n))}},211:function(e,t){},219:function(e,t){},220:function(e,t){},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);const c=Object(r.createContext)("page"),i=()=>Object(r.useContext)(c);c.Provider},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=n(14),i=n.n(c);function o(e){const t=Object(r.useRef)(e);return i()(e,t.current)||(t.current=e),t.current}},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(57),c=n(20),i=n(111);const o=e=>{const t=Object(c.a)(e)?e:{},n=Object(i.a)(t.style);return Object(r.__experimentalUseColorProps)({...t,style:n})}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(3),c=n(6),i=n(0),o=n(14),a=n.n(o),u=n(27),l=n(53),s=n(24);const b=e=>{const t=Object(s.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:o}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(i.useCallback)(t=>{o(e,t)},[e,o])]},p=(e,t,n)=>{const o=Object(s.a)();n=n||o;const a=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:u}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[a,Object(i.useCallback)(t=>{u(n,e,t)},[n,e,u])]},d=(e,t)=>{const n=Object(s.a)();t=t||n;const[r,c]=b(t),o=Object(u.a)(r),p=Object(u.a)(e),d=Object(l.a)(p),m=Object(i.useRef)(!1);return Object(i.useEffect)(()=>{a()(d,p)||(c(Object.assign({},o,p)),m.current=!0)},[o,p,d,c]),m.current?[r,c]:[e,c]}},481:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(282),i=n(26),o=n(153),a=n(150);t.default=e=>{const t=Object(c.a)(e);return Object(r.createElement)("div",{className:Object(i.a)(e.className)?e.className:"",style:{...t.style}},Object(r.createElement)(o.a,{isEditor:!1,attributes:Object(a.a)(e)}))}},5:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=c.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8);function c(e,t,n){var c=this,i=Object(r.useRef)(null),o=Object(r.useRef)(0),a=Object(r.useRef)(null),u=Object(r.useRef)([]),l=Object(r.useRef)(),s=Object(r.useRef)(),b=Object(r.useRef)(e),p=Object(r.useRef)(!0);b.current=e;var d=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var m=!!(n=n||{}).leading,f=!("trailing"in n)||!!n.trailing,O="maxWait"in n,j=O?Math.max(+n.maxWait||0,t):null;return Object(r.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]),Object(r.useMemo)((function(){var e=function(e){var t=u.current,n=l.current;return u.current=l.current=null,o.current=e,s.current=b.current.apply(n,t)},n=function(e,t){d&&cancelAnimationFrame(a.current),a.current=d?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!p.current)return!1;var n=e-i.current,r=e-o.current;return!i.current||n>=t||n<0||O&&r>=j},g=function(t){return a.current=null,f&&u.current?e(t):(u.current=l.current=null,s.current)},_=function(){var e=Date.now();if(r(e))return g(e);if(p.current){var c=e-i.current,a=e-o.current,u=t-c,l=O?Math.min(u,j-a):u;n(_,l)}},v=function(){for(var b=[],d=0;d<arguments.length;d++)b[d]=arguments[d];var f=Date.now(),j=r(f);if(u.current=b,l.current=c,i.current=f,j){if(!a.current&&p.current)return o.current=i.current,n(_,t),m?e(i.current):s.current;if(O)return n(_,t),e(i.current)}return a.current||n(_,t),s.current};return v.cancel=function(){a.current&&(d?cancelAnimationFrame(a.current):clearTimeout(a.current)),o.current=0,u.current=i.current=l.current=a.current=null},v.isPending=function(){return!!a.current},v.flush=function(){return a.current?g(Date.now()):s.current},v}),[m,O,t,j,f,d])}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),c=n(6),i=n(0),o=n(27);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:u={},shouldSelect:l=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const s=Object(i.useRef)({results:[],isLoading:!0}),b=Object(o.a)(u),p=Object(o.a)(a),d=(()=>{const[,e]=Object(i.useState)();return Object(i.useCallback)(t=>{e(()=>{throw t})},[])})(),m=Object(c.useSelect)(e=>{if(!l)return null;const c=e(r.COLLECTIONS_STORE_KEY),i=[t,n,b,p],o=c.getCollectionError(...i);if(o){if(!(o instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");d(o)}return{results:c.getCollection(...i),isLoading:!c.hasFinishedResolution("getCollection",i)}},[t,n,p,b,l]);return null!==m&&(s.current=m),s.current}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},59:function(e,t,n){"use strict";var r=n(0);n(86),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},60:function(e,t,n){"use strict";var r=n(0),c=n(1),i=n(5),o=n.n(i),a=n(21);n(87),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woocommerce"),onClick:i,screenReaderLabel:u=Object(c.__)("Reset filter","woocommerce")}=e;return Object(r.createElement)("button",{className:o()("wc-block-components-filter-reset-button",t),onClick:i},Object(r.createElement)(a.a,{label:n,screenReaderLabel:u}))}},61:function(e,t,n){"use strict";var r=n(0),c=n(1),i=n(5),o=n.n(i),a=n(21);n(88),t.a=e=>{let{className:t,isLoading:n,disabled:i,label:
/* translators: Submit button text for filters. */
u=Object(c.__)("Apply","woocommerce"),onClick:l,screenReaderLabel:s=Object(c.__)("Apply filter","woocommerce")}=e;return Object(r.createElement)("button",{type:"submit",className:o()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:i,onClick:l},Object(r.createElement)(a.a,{label:u,screenReaderLabel:s}))}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return b}));var r=n(15),c=n(2),i=n(71);const o=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,i.a),a="query_type_",u="filter_";function l(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function s(e){o?window.location.href=e:window.history.replaceState({},"",e)}const b=e=>{const t=Object(r.getQueryArgs)(e);return Object(r.addQueryArgs)(e,t)}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8),c=n(51);function i(e,t){return e===t}function o(e){return"function"==typeof e?function(){return e}:e}function a(e,t,n){var a=n&&n.equalityFn||i,u=function(e){var t=Object(r.useState)(o(e)),n=t[0],c=t[1];return[n,Object(r.useCallback)((function(e){return c(o(e))}),[])]}(e),l=u[0],s=u[1],b=Object(c.a)(Object(r.useCallback)((function(e){return s(e)}),[s]),t,n),p=Object(r.useRef)(e);return a(p.current,e)||(b(e),p.current=e),[l,b]}},86:function(e,t){},87:function(e,t){},88:function(e,t){}}]);