"use strict";(self.webpackChunkroles_permissions=self.webpackChunkroles_permissions||[]).push([[297],{6695:function(t,e,n){function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return r(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function i(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(r(1,arguments),!a(t)&&"number"!=typeof t)return!1;var e=i(t);return!isNaN(Number(e))}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(t,e){r(2,arguments);var n=i(t).getTime(),a=u(e);return new Date(n+a)}function d(t,e){r(2,arguments);var n=u(e);return s(t,-n)}n.d(e,{Z:function(){return ut}});var l=864e5;function c(t){r(1,arguments);var e=1,n=i(t),a=n.getUTCDay(),o=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function h(t){r(1,arguments);var e=i(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=c(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=c(u);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function f(t){r(1,arguments);var e=h(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=c(n);return a}var m=6048e5,g={};function v(){return g}function w(t,e){var n,a,o,s,d,l,c,h;r(1,arguments);var f=v(),m=u(null!==(n=null!==(a=null!==(o=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:f.weekStartsOn)&&void 0!==a?a:null===(c=f.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=i(t),w=g.getUTCDay(),b=(w<m?7:0)+w-m;return g.setUTCDate(g.getUTCDate()-b),g.setUTCHours(0,0,0,0),g}function b(t,e){var n,a,o,s,d,l,c,h;r(1,arguments);var f=i(t),m=f.getUTCFullYear(),g=v(),b=u(null!==(n=null!==(a=null!==(o=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==a?a:null===(c=g.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==n?n:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(m+1,0,b),y.setUTCHours(0,0,0,0);var p=w(y,e),T=new Date(0);T.setUTCFullYear(m,0,b),T.setUTCHours(0,0,0,0);var C=w(T,e);return f.getTime()>=p.getTime()?m+1:f.getTime()>=C.getTime()?m:m-1}function y(t,e){var n,a,i,o,s,d,l,c;r(1,arguments);var h=v(),f=u(null!==(n=null!==(a=null!==(i=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(s=e.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==i?i:h.firstWeekContainsDate)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=b(t,e),g=new Date(0);g.setUTCFullYear(m,0,f),g.setUTCHours(0,0,0,0);var y=w(g,e);return y}var p=6048e5;function T(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var C=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===e?r%100:r,e.length)},M=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):T(n+1,2)},D=function(t,e){return T(t.getUTCDate(),e.length)},k=function(t,e){return T(t.getUTCHours()%12||12,e.length)},x=function(t,e){return T(t.getUTCHours(),e.length)},U=function(t,e){return T(t.getUTCMinutes(),e.length)},P=function(t,e){return T(t.getUTCSeconds(),e.length)},S=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),e.length)},W={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return C(t,e)},Y:function(t,e,n,r){var a=b(t,r),i=a>0?a:1-a;return"YY"===e?T(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):T(i,e.length)},R:function(t,e){return T(h(t),e.length)},u:function(t,e){return T(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=function(t,e){r(1,arguments);var n=i(t),a=w(n,e).getTime()-y(n,e).getTime();return Math.round(a/p)+1}(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):T(o,e.length)},I:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t),n=c(e).getTime()-f(e).getTime();return Math.round(n/m)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):T(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):D(t,e)},D:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),o=n-a;return Math.floor(o/l)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):T(a,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return T(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return T(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return T(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return k(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):x(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):U(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):P(t,e)},S:function(t,e){return S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return E(a);case"XXXX":case"XX":return N(a);default:return N(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return E(a);case"xxxx":case"xx":return N(a);default:return N(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Y(a,":");default:return"GMT"+N(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Y(a,":");default:return"GMT"+N(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return T(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return T((r._originalDate||t).getTime(),e.length)}};function Y(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+T(i,2)}function E(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):N(t,e)}function N(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+T(Math.floor(a/60),2)+n+T(a%60,2)}var O=W,q=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},F=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},j={p:F,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return q(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",q(a,e)).replace("{{time}}",F(i,e))}};function H(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var z=["D","DD"],A=["YY","YYYY"];function L(t){return-1!==z.indexOf(t)}function Q(t){return-1!==A.indexOf(t)}function G(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var R={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function X(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var B={date:X({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:X({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:X({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},J={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var Z={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function I(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?V(s,(function(t){return t.test(u)})):$(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(u.length);return{value:o,rest:l}}}function $(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function V(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var K,tt={ordinalNumber:(K={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(K.matchPattern);if(!n)return null;var r=n[0],a=t.match(K.parsePattern);if(!a)return null;var i=K.valueCallback?K.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:I({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:I({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:I({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:I({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:I({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},et={code:"en-US",formatDistance:function(t,e,n){var r,a=R[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:B,formatRelative:function(t,e,n,r){return J[t]},localize:Z,match:tt,options:{weekStartsOn:0,firstWeekContainsDate:1}},nt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,at=/^'([^]*?)'?$/,it=/''/g,ot=/[a-zA-Z]/;function ut(t,e,n){var a,s,l,c,h,f,m,g,w,b,y,p,T,C,M,D,k,x;r(2,arguments);var U=String(e),P=v(),S=null!==(a=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:P.locale)&&void 0!==a?a:et,W=u(null!==(l=null!==(c=null!==(h=null!==(f=null==n?void 0:n.firstWeekContainsDate)&&void 0!==f?f:null==n||null===(m=n.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==h?h:P.firstWeekContainsDate)&&void 0!==c?c:null===(w=P.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==l?l:1);if(!(W>=1&&W<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=u(null!==(y=null!==(p=null!==(T=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(M=n.locale)||void 0===M||null===(D=M.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==T?T:P.weekStartsOn)&&void 0!==p?p:null===(k=P.locale)||void 0===k||null===(x=k.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==y?y:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var E=i(t);if(!o(E))throw new RangeError("Invalid time value");var N=H(E),q=d(E,N),F={firstWeekContainsDate:W,weekStartsOn:Y,locale:S,_originalDate:E},z=U.match(rt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,j[e])(t,S.formatLong):t})).join("").match(nt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return st(r);var i=O[a];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!Q(r)||G(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!L(r)||G(r,e,String(t)),i(q,r,S.localize,F);if(a.match(ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return z}function st(t){var e=t.match(at);return e?e[1].replace(it,"'"):t}},79471:function(t,e,n){n.d(e,{o:function(){return s}});var r=n(70655);function a(t){return t.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function u(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function s(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,r=void 0===n?i:n,s=e.stripRegexp,d=void 0===s?o:s,l=e.transform,c=void 0===l?a:l,h=e.delimiter,f=void 0===h?" ":h,m=u(u(t,r,"$1\0$2"),d,"\0"),g=0,v=m.length;"\0"===m.charAt(g);)g++;for(;"\0"===m.charAt(v-1);)v--;return m.slice(g,v).split("\0").map(c).join(f)}(t,(0,r.pi)({delimiter:"."},e))}(t,(0,r.pi)({delimiter:"-"},e))}}}]);
//# sourceMappingURL=297.pulse-portal-roles-permissions.js.map