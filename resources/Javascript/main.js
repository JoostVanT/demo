var errorMsg = "Not all mandatory fields are filled in";
var aabComConfig = {
	i8n : {
		abbreviatedInclude : 'Include abbreviated (ABN AMRO Bank N.V.) reports',
		abbreviatedExclude : 'Exclude abbreviated (ABN AMRO Bank N.V.) reports',
		showFullTable: '+ Show full list',
		hideFullTable: '- Hide full list',
		closeMobileSearch : 'Close',
		newsFilterFrom : 'From',
		newsFilterTill : 'till'
	}
};//framekiller
if (top != self) top.location = self.location;

(function() {
	var
		cfg = window.aabComConfig || { i8n : {} },
		oldJQuery = window.jQuery,
		old$ = window.$,
	// Wrong jquery version, so multiple versions were loaded in the page,
	// temporarily remove wrong version and place back at end
		jQueryConflict = jQuery().jquery !== '2.1.4';
	jQuery.noConflict(jQueryConflict);
	window.aabJQuery = jQuery;
	// @TODO recurse noconflicts and storing of jQueries
	// Make sure $ refers to 'our' jQuery
	var
		$ = jQuery,
		base = $('base');

	cfg.jsIncludes = cfg.jsIncludes || (base.length ? base.attr('href') : '') + $('script').last().attr('src').replace(/[^\\^\/]*$/, '');

	// minification of r10939 of plugin.js from lib
	(function(b){var r=function(a){var c={},d,f;b((a||"").split(" ")).each(function(a,b){d=b.split("-");f=d.shift();c[f]=d.join("-")});return c},t=function(a,c){if(!a||!c.length)return{};var d={},f=r(a);b.each(c,function(a,b){a in f&&(d[b]=f[a])});return d},u=function(){var a=Array.prototype.shift.call(arguments),c=a.name,d=a.methods[arguments[0]]?Array.prototype.shift.call(arguments):a.create,f=arguments[0];arguments[0]&&"object"!==typeof arguments[0]&&b.error("Method "+arguments[0]+" does not exist for plugin '"+c+"' or plugin options were not passed as an object.");return this.each(function(){var k=b(this),e=k.data(c),g=!!e;if(d==a.create&&g&&!a.control.creation||d==a.destroy&&!g&&!a.control.destruction)return!0;var h=t(k.attr("class"),a.parse),e=g?b.extend(!0,e.options,f):b.extend(!0,{plugin:c},b.fn[c].defaults,f);d!=a.create||g||k.data(c,{target:k,name:c,options:e});a.methods[d].apply(k,[e].concat(h,Array.prototype.slice.call(arguments,1)));d==a.destroy&&g&&k.removeData(c)})},p=function(){var a="innerWidth"in
	window;return(a?window:document.documentElement||document.body)[(a?"inner":"client")+"Width"]},n=/MSIE [789]\./.test(navigator.appVersion),q=function(a,c,d,f){if("string"===typeof a){if(!f)b(a)[c]()}else b.each(a,function(a,e){var g,h,l,m=b(a);if(m.length){for(g in e)break;(g=parseInt(g))&&!n&&(l=m.data(c),b.each(e,function(a){h=a;if(a>d)return!1}),e=d>h?e[h][">"]||"destroy":e[h]["<="]||e[h],l=l?l.lastBreakPoint:0);if("destroy"==e||g&&l!==h||!f&&!n||n&&!f&&!g)m[c](e),g&&"destroy"!==e&&m.data(c)&&
	(m.data(c).lastBreakPoint=h)}})};b.plugin=function(a){a=b.extend(!0,{},b.plugin.defaults,a);b.fn[a.name]=b.extend(!0,function(){Array.prototype.unshift.call(arguments,a);return u.apply(this,arguments)},{defaults:a.defaults,on:a.on});b(function(){q(a.on,a.name,p())});b(window).on("resize orientationchange",function(b){q(a.on,a.name,p(),!0)})};b.plugin.defaults={name:"myPlugin",create:"init",destroy:"destroy",control:{creation:!0,destruction:!1},defaults:{},parse:{},methods:{init:b.noop,destroy:b.noop},
	on:{}};b.plugins=function(a){b.each(a,function(a,d){d.name=a;b.plugin(d)})}})(jQuery);

	/*
	 *	jQuery dotdotdot 1.7.2
	 *
	 *	Copyright (c) Fred Heusschen
	 *	www.frebsite.nl
	 *
	 *	Plugin website:
	 *	dotdotdot.frebsite.nl
	 *
	 *	Licensed under the MIT license.
	 *	http://en.wikipedia.org/wiki/MIT_License
	 */
	!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),!l||h.is(d.after)||h.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":" ",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=f.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=i(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);

	/* ! jquery.cookie v1.4.1 | MIT */
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

	/*! jQuery UI - v1.11.4 - 2015-05-04
	* http://jqueryui.com
	* Includes: core.js, datepicker.js, effect.js
	* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
	(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(h.inline?h.dpDiv.parent()[0]:h.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}},e.extend(e.ui,{datepicker:{version:"1.11.4"}});var h;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),h===n&&(h=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,h=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,N,M,C,P,A,I,H,z,F,E,W,O,L,j=new Date,R=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),Y=this._get(e,"isRTL"),J=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),U=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),G=1!==V[0]||1!==V[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-U,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-V[0]*V[1]+1,$.getDate())),t=Q&&Q>t?Q:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-q,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+q,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:R,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=J?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;V[0]>w;w++){for(k="",this.maxRows=4,T=0;V[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",N="",G){if(N+="<div class='ui-datepicker-group",V[1]>1)switch(T){case 0:N+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");
	break;case V[1]-1:N+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:N+=" ui-datepicker-group-middle",S=""}N+="'>"}for(N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,Q,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,M+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[C]+"'>"+p[C]+"</span></th>";for(N+=M+"</tr></thead><tbody>",P=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,P)),A=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((A+P)/7),H=G?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-A)),F=0;H>F;F++){for(N+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)W=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],O=z.getMonth()!==Z,L=O&&!y||!W[0]||Q&&Q>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!v?"":" "+W[1]+(z.getTime()===X.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(O&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(O&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===X.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);N+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),N+="</tbody></table>"+(G?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=N}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker;var l="ui-effects-",u=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(u),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(u.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(l+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(l+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects});

	/*
	 * ! jQuery Mobile v1.3.2 | Copyright 2010, 2013 jQuery Foundation, Inc. |
	 * jquery.org/license
	 */
	/* touch events */
	(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function x(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function T(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=x(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function N(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function C(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function k(){g=!1}function L(){g=!0}function A(){E=0,v.length=0,m=!1,L()}function O(){k()}function M(){_(),c=setTimeout(function(){c=0,A()},e.vmouse.resetTimerDuration)}function _(){c&&(clearTimeout(c),c=0)}function D(t,n,r){var i;if(r&&r[t]||!r&&C(n.target,t))i=T(n,t),e(n.target).trigger(i);return i}function P(t){var n=e.data(t.target,s);if(!m&&(!E||E!==n)){var r=D("v"+t.type,t);r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function H(t){var n=x(t).touches,r,i;if(n&&n.length===1){r=t.target,i=N(r);if(i.hasVirtualBinding){E=w++,e.data(r,s,E),_(),O(),d=!1;var o=x(t).touches[0];h=o.pageX,p=o.pageY,D("vmouseover",t,i),D("vmousedown",t,i)}}}function B(e){if(g)return;d||D("vmousecancel",e,N(e.target)),d=!0,M()}function j(t){if(g)return;var n=x(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=N(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&D("vmousecancel",t,s),D("vmousemove",t,s),M()}function F(e){if(g)return;L();var t=N(e.target),n;D("vmouseup",e,t);if(!d){var r=D("vclick",e,t);r&&r.isDefaultPrevented()&&(n=x(e).changedTouches[0],v.push({touchID:E,x:n.clientX,y:n.clientY}),m=!0)}D("vmouseout",e,t),d=!1,M()}function I(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function q(){}function R(t){var n=t.substr(1);return{setup:function(r,s){I(this)||e.data(this,i,{});var o=e.data(this,i);o[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,P),e(this).bind(n,q),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",H).bind("touchend",F).bind("touchmove",j).bind("scroll",B))},teardown:function(r,s){--l[t],l[t]||b.unbind(n,P),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",H).unbind("touchmove",j).unbind("touchend",F).unbind("scroll",B));var o=e(this),u=e.data(this,i);u&&(u[t]=!1),o.unbind(n,q),I(this)||o.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<o.length;U++)e.event.special[o[U]]=R(o[U]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,r){var i=r.type;r.type=n,e.event.dispatch.call(t,r),r.type=i}var i=e(n);e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)});var s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var t=this,n=e(t);n.bind("vmousedown",function(r){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),s===e.target&&l(t,"tap",e)}if(r.which&&r.which!==1)return!1;var s=r.target,o=r.originalEvent,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){l(t,"taphold",e.Event("taphold",{target:s}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[n.pageX,n.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,n){n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&t.origin.trigger("swipe").trigger(t.coords[0]>n.coords[0]?"swipeleft":"swiperight")},setup:function(){var t=this,n=e(t);n.bind(u,function(t){function o(t){if(!i)return;s=e.event.special.swipe.stop(t),Math.abs(i.coords[0]-s.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()}var i=e.event.special.swipe.start(t),s;n.bind(f,o).one(a,function(){n.unbind(f,o),i&&s&&e.event.special.swipe.handleSwipe(i,s),i=s=r})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(e,this)});

	/**
	 * Reusable ABN AMRO plugins
	 */

	/*
	 * CSSMap plugin version: 4.4.5 web: http://cssmapsplugin.com email:
	 * support@cssmapsplugin.com author: { Winston_Wolf } license:
	 * http://cssmapsplugin.com/license
	 */
	(function(a){a.fn.cssMap=function(h){var g={size:"850",tooltips:true,tooltipArrowHeight:5,cities:false,visibleList:false,loadingText:"Loading ...",multipleClick:false,searchUrl:"search.php",searchLink:"Search",searchLinkVar:"region",searchLinkSeparator:"|",clicksLimit:0,clicksLimitAlert:"You can select only %d region! || regions!",agentsListId:"",agentsListSpeed:0,agentsListOnHover:false,onHover:function(d){},onClick:function(d){},onLoad:function(d){}};if(h){var c=a.extend(true,g,h),f=a(window).width(),b=a(window).height();a(window).resize(function(){f=a(window).width();b=a(window).height()});return this.each(function(m){if(!a(this).attr("id")){a(this).attr("id","css-map"+(m+1))}var j="#"+a(this).attr("id"),d=a(j).find("ul").eq(0),i=a(d).attr("class"),q=a(d).find("li"),l=0,p=false,k="",r="",o=c.tooltips.toString(),n={init:function(){n.clearMap();a(j).addClass("css-map-container m"+c.size);var s=d.css("background-image").replace(/^url\("?([^\"\))]+)"?\)$/i,"$1");this.loader(s)},loader:function(u){var t=new Image(),s=a("<span />",{"class":"map-loader",text:c.loadingText}).appendTo(a(j));s.css({left:a(j).outerWidth()/2,"margin-left":s.outerWidth()/-2,"margin-top":s.outerHeight()/-2,top:a(j).outerHeight()/2});a(j).addClass("m"+c.size);a(d).addClass("css-map");a(c.agentsListId).find("li").hide();a(t).load(function(){if(a.browser.msie&&parseInt(a.browser.version)<=7){var v=true}if(c.cities&&!v){a(j).append('<span class="cities '+i+'-cities" />')}if(v){a(j).addClass("ie")}n.regions.init();if(a(c.agentsListId).length){n.agentslist.init()}if(c.multipleClick){n.searchButton()}s.fadeOut("slow");c.onLoad(a(j))}).error(function(){s.fadeOut();a(d).removeClass()}).attr("src",u)},regions:{init:function(){var s=n.regions;s.hideTooltips();q.each(function(){var v=a(this),w=v.attr("class").split(" ")[0],x=v.children("a").eq(0),u=a(x).attr("href");if(typeof u=="undefined"||u.length<2){a(v).remove()}s.copyList(a(v),w,x,u);s.createSpans(a(v),w);n.selectRegion.init(a(v),w,x)});if(c.visibleList){s.createList(k);n.selectRegion.initVisibleList()}s.autoSelectRegion()},createSpans:function(u,w){var t='<span class="m">',x=[],B="",y=u.children("a"),z=a('<span class="tooltip-arrow" />').appendTo(y);switch(i){case"argentina":B="ar";x=[3,18,18,17,12,17,15,14,21,13,12,17,18,8,19,22,22,17,11,20,20,12,10,9,2];break;case"australia":B="au";x=[3,21,5,15,8,6,15,13];break;case"austria":case"osterreich":B="at";x=[15,18,30,25,24,28,22,8,4];break;case"belgium":B="be";x=[13,6,19,28,25,29,22,29,24,16,23];break;case"brazil":case"brasil":B="br";x=[12,8,11,34,28,13,3,5,22,19,23,18,30,34,9,11,19,17,9,10,15,13,14,12,21,6,23];break;case"canada":B="ca";x=[8,11,10,3,19,20,6,31,17,2,21,3,12];break;case"chile":B="cl";x=[11,4,10,13,9,8,12,7,9,7,20,7,11,7,9];break;case"colombia":B="co";x=[22,30,8,5,6,21,21,11,30,18,23,13,23,12,17,18,16,18,11,14,23,15,12,15,5,6,2,16,11,13,14,21,14];break;case"continents":B="c";x=[12,23,11,18,21,10,3];break;case"cuba":B="cu";x=[8,20,18,7,12,10,4,16,9,12,11,5,14,15,11,15];break;case"czech-republic":case"cesko":B="cs";x=[5,15,21,10,18,16,12,16,25,19,14,28,14,15];break;case"denmark":case"danmark":B="dk";x=[15,40,37,24,30,2];break;case"danmarks-kommuner":B="dkk";x=[9,5,14,14,10,9,7,7,6,14,16,9,8,7,9,8,8,7,7,8,6,12,11,23,11,13,7,16,6,16,16,18,25,18,17,21,11,23,5,15,24,10,19,13,18,12,24,23,24,14,26,16,18,8,16,11,18,19,17,13,5,17,14,21,6,11,18,14,12,8,11,14,5,10,9,19,11,17,12,13,22,6,9,17,22,15,18,13,10,14,13,12,11,16,16,27,20,25];break;case"europe":B="eu";x=[5,2,9,10,5,6,7,10,4,9,9,5,15,22,7,14,12,8,7,7,2,24,2,7,2,7,2,4,3,7,2,4,8,30,12,4,11,42,6,5,5,11,26,6,10,20,17,10,2,6,9,3];break;case"europe-russia":B="euru";x=[4,2,8,14,8,7,8,13,3,10,8,6,21,20,9,14,10,10,4,6,21,5,8,2,7,2,4,2,9,2,5,5,27,14,7,12,82,2,9,8,4,18,21,8,14,25,14,6,10,45,16,32,14,18,28];break;case"finland":B="fi";x=[8,22,28,22,26,14,15,29,15,43,21,23,28,48,24,18,15,19,18];break;case"france":B="fr";x=[13,25,25,14,27,14,25,21,8,19,12,13,28,15,18,27,11,26,17,25,24,34,2,2,2,2,2];break;case"france-departments":case"departements-francais":B="frd";x=[10,8,9,11,9,8,11,8,9,8,11,9,7,7,7,9,15,10,9,7,7,8,7,7,10,11,8,9,10,5,13,16,11,15,10,8,9,10,12,9,10,12,10,9,11,10,10,8,7,9,8,9,10,9,11,7,7,8,9,10,5,10,8,9,6,10,5,8,6,7,8,12,9,12,7,9,9,7,5,8,7,7,8,8,7,10,10,9,10,12,3,4,9,10,10,4,2,2,2,2,2];break;case"germany":case"deutschland":B="de";x=[31,41,7,38,6,8,38,25,64,37,24,9,25,31,20,33];break;case"baden-wurttemberg":B="dea";x=[26,8,25,16,17,29,17,14,18,13,7,15,12,6,11,25,5,18,21,6,14,11,18,13,5,16,19,15,6,21,19,14,19,20,15,16,18,22,9,14,16,7,13,15];break;case"bayern":B="deb";x=[8,8,16,3,17,5,10,3,9,6,10,11,17,3,17,4,9,11,12,3,9,11,7,13,14,8,14,7,2,14,8,10,9,7,6,3,8,8,13,13,4,5,2,4,12,10,6,9,10,15,4,7,4,12,4,10,7,12,13,6,6,8,14,11,15,6,12,11,19,14,3,10,11,15,3,8,16,2,14,12,3,13,14,4,6,4,14,9,14,14,4,14,11,6,14,4];break;case"berlin":B="dec";x=[18,15,21,15,17,18,19,17,22,16,17,25];break;case"brandenburg":B="ded";x=[16,11,8,31,16,3,16,18,20,18,25,22,4,28,15,20,23,18];break;case"bremen":B="dee";x=[14,11,12,8,8,17,7,12,18,14,7,31,11,11,11,8,6,12,9,10,9,8,12,8];break;case"hamburg":B="def";x=[14,21,17,24,23,36,23];break;case"hessen":B="deg";x=[13,6,14,13,14,16,12,19,13,19,4,17,12,19,10,18,8,4,9,11,21,22,15,14,21,6];break;case"mecklenburg-vorpommern":B="deh";x=[28,26,15,29,8,5,19,16];break;case"niedersachsen":B="dei";x=[10,11,4,13,14,13,3,17,4,18,11,12,11,7,9,10,9,17,10,10,13,12,11,14,13,13,12,2,15,3,9,7,9,21,17,6,8,15,11,10,9,8,3,10,12,4];break;case"nordrhein-westfalen":B="dej";x=[12,6,5,4,15,5,16,7,6,13,6,10,7,11,4,15,7,6,10,9,4,15,12,15,9,4,5,14,12,14,8,7,4,9,12,3,12,15,16,3,13,12,18,13,11,12,6,14,11,14,14,19,7];break;case"rheinland-pfalz":B="dek";x=[16,17,20,16,19,21,16,16,16,16,4,11,19,8,5,13,7,6,7,21,27,5,14,4,19,16,15,4,23,20,9,26,17,19,6,4];break;case"saarland":B="del";x=[21,22,26,28,29,19];break;case"sachsen":B="dem";x=[24,8,9,23,19,17,8,17,27,14,18,15,17];break;case"sachsen-anhalt":B="den";x=[20,25,26,14,11,6,17,19,7,21,23,23,28,12];break;case"schleswig-holstein":B="deo";x=[14,4,20,8,9,5,15,18,12,14,24,26,22,12,15];break;case"thuringen":B="dep";x=[8,10,5,10,6,20,21,18,15,5,19,8,16,14,21,17,10,17,8,17,21,5,17];break;case"greece":B="gr";x=[13,24,17,13,15,16,14,5,8,16,27,21,18,13];break;case"haiti":B="ht";x=[31,22,14,14,23,13,15,37,16,22];break;case"hungary":B="hu";x=[26,12,18,19,5,11,15,15,16,18,21,9,11,27,15,19,16,13,15,12];break;case"ireland":B="ie";x=[44,12,44,43,49,43,29,41];break;case"ireland-counties":B="iec";x=[14,19,19,30,2,13,5,2,11,27,2,17,16,18,14,16,17,2,15,10,21,21,13,20,21,20,17,5,18,16,2,18,13,15];break;case"italy":case"italia":B="it";x=[16,12,13,18,29,10,24,16,27,15,12,22,23,9,27,28,15,14,6,24];break;case"mexico":B="mx";x=[3,9,10,10,12,16,13,5,3,13,7,10,7,16,7,7,4,8,12,11,8,5,7,11,13,11,11,12,3,15,8,14];break;case"netherlands":case"nederland":B="nl";x=[23,18,23,34,20,16,23,22,25,23,15,24];break;case"norway":case"norge":B="no";x=[10,10,14,14,13,10,13,12,19,17,3,7,10,13,16,16,9,18,7,4];break;case"norway-divided":case"norge-delt":B="nod";x=[15,19,21,14,23,16,17,17,21,25,3,9,15,18,26,13,15,19,12,4];break;case"poland":case"polska":B="pl";x=[31,31,28,25,36,22,47,22,28,30,30,27,24,29,46,26];break;case"portugal":B="pt";x=[17,28,16,15,23,26,28,15,27,23,13,24,14,32,23,8,17,22,5,3];break;case"romania":B="ro";x=[20,22,17,16,23,13,16,16,13,6,21,23,17,21,22,16,18,19,13,16,16,23,17,15,27,14,21,25,20,23,26,12,19,18,14,18,12,31,14,20,11,14];break;case"slovakia":case"slovensko":B="sk";x=[33,16,29,32,27,29,32,25];break;case"south-africa":B="za";x=[20,19,11,14,14,21,34,24,24];break;case"spain":case"espana":B="es";x=[18,11,12,16,14,16,23,9,12,24,12,16,2,21,19,21,15,17,11,16,17,7,12,18,14,10,13,8,19,14,14,20,2,13,12,17,11,15,8,15,7,13,18,15,11,21,25,15,14,8,12,28];break;case"spain-autonomies":case"espana-autonomias":B="esa";x=[24,30,12,7,12,11,48,57,17,2,24,27,14,11,16,2,18,16,12];break;case"sweden":case"sverige":B="se";x=[7,30,20,6,13,39,14,17,13,30,11,15,7,9,11,10,19,34,28,10,18];break;case"switzerland":B="ch";x=[27,12,7,22,4,61,34,11,14,35,17,24,17,12,12,10,15,31,28,22,19,16,31,47,6,20];break;case"turkey":case"turkiye":B="tr";x=[16,8,12,12,7,11,19,17,7,7,9,12,5,10,6,6,8,10,8,10,10,8,9,13,13,13,6,7,10,10,18,8,11,9,10,6,6,4,11,9,13,10,8,14,8,10,13,4,6,8,9,7,23,10,12,11,9,12,13,10,7,10,8,6,8,6,10,12,8,7,16,7,8,10,6,8,6,8,3,10,5];break;case"united-kingdom":B="uk";x=[31,23,10,18,24,28,30,31,24,9,8,9,10,12,12,14,17,8,16,23,11,6,14,17,7,28,19,14,19,20,4];break;case"uruguay":B="uy";x=[17,13,25,12,28,15,21,23,17,5,22,21,22,23,20,17,21,30,20];break;case"usa":B="usa";x=[5,6,8,6,18,2,4,5,10,9,5,11,11,4,5,5,12,6,7,9,6,9,14,7,10,10,5,14,6,7,3,10,10,3,7,6,4,5,4,8,3,6,15,3,5,10,5,3,11,8,2,2];break;case"venezuela":B="ve";x=[20,17,19,8,19,29,2,4,9,18,11,5,18,15,11,6,12,3,11,8,7,6,4,8,23];break}for(var v=0;v<x.length;v++){var A=v+1;if(w==B+A){for(var C=1;C<x[v];C++){t+='<span class="s'+C+'" />'}break}}t+="</span>";u.prepend(t).append('<span class="bg" />')},showTooltip:function(u){var w=d.find(u).children("a")[0];if(o=="true"||o=="sticky"){var t=d.outerWidth(),x=Math.ceil(a(w).outerHeight()*-1)-c.tooltipArrowHeight,A=Math.ceil(a(w).outerWidth()/-2),z=a(w).position().left,v=a(w).position().top;if((A*-1)>z){a(w).addClass("tooltip-left").css("left",0);A=0}if((A*-1)+z>t){a(w).addClass("tooltip-right");A=0}if((x*-1)>v){a(w).addClass("tooltip-top");x=c.tooltipArrowHeight}if(a(w).hasClass("tooltip-middle")){x=a(w).outerHeight()/-2}w.style.marginLeft=A+"px";w.style.marginTop=x+"px"}else{if(o!="false"){var s=a(w).html(),y=a("<div />",{id:"map-tooltip",html:s}).appendTo("body")}}},hideTooltips:function(){if(o=="true"||o=="sticky"){for(var s=0;s<d.find("a").length;s++){d.find("a")[s].style.marginTop="-9999px"}}else{if(o.split("-")[0]=="floating"){a("#map-tooltip").remove()}}},copyList:function(t,u,v,s){var w=v.html();if(typeof s!="undefined"&&s.length>=2){k+='<li class="'+u+'"><a href="'+s+'">'+w+"</a></li>"}},createList:function(s){a(d).after('<ul class="map-visible-list">'+s+"</ul>")},autoSelectRegion:function(){var s=a(j).find(".active-region"),t=j+" ."+s.parent("li").attr("class");if(s.length){n.selectRegion.activated(a(t))}}},selectRegion:{init:function(s,t,x){var v=n.selectRegion,t=j+" ."+t,w=a(t).children("span").eq(0),u=null;v.autoSelect(x);w.hover(function(){v.onHover(a(t))},function(){v.unHover(a(t))}).mousemove(function(y){if(o.split("-")[0]=="floating"){v.onMouseMove(a(t),y)}}).click(function(y){v.clicked(a(t));y.preventDefault()});a(x).focus(function(){v.onHover(a(t))}).blur(function(){v.unHover(a(t))}).keypress(function(y){u=(y.keyCode?y.keyCode:y.which);if(u===13){v.clicked(a(t))}}).click(function(y){v.clicked(a(t));y.preventDefault()})},initVisibleList:function(){var t=n.selectRegion,s=a(j+" .map-visible-list").find("li");s.each(function(){var v=a(this).children("a"),u=j+" ."+a(this).attr("class");v.hover(function(){t.onHover(a(u))},function(){t.unHover(a(u))}).focus(function(){t.onHover(a(u))}).blur(function(){t.unHover(a(u))}).click(function(){t.clicked(a(u));return false}).keypress(function(){code=(e.keyCode?e.keyCode:e.which);if(code===13){t.clicked(a(u));return false}})})},onHover:function(t){var s=t.children("a").eq(0).attr("href");n.regions.hideTooltips();n.regions.showTooltip(t);t.addClass("focus");c.onHover(t);if(c.agentsListOnHover){n.agentslist.showAgent(s)}},onMouseMove:function(x,y){var B=a("#map-tooltip").eq(0),v=c.tooltipArrowHeight,s=10,A=15+v,w=a(B).outerHeight(),C=a(B).outerWidth(),t=a(window).scrollTop(),u=y.pageY-w-v,z=y.pageX-(C/2);if(v<3){v=3}switch(o){case"floating-left":case"floating-left-top":case"floating-top-left":if(y.clientX-C<=s){z=y.pageX+s}else{z=y.pageX-C-s}break;case"floating-right":case"floating-right-top":case"floating-top-right":if(f<=y.clientX+C+s){z=y.pageX-C-s}else{z=y.pageX+s}break;case"floating-middle":case"floating-middle-right":case"floating-right-middle":if(f<=y.clientX+C+s){z=y.pageX-C-s}else{z=y.pageX+s}if(t>=y.pageY-(w/2)-v){u=y.pageY+A-v}else{if(y.clientY+(w/2)>=b){u=y.pageY-w-v}else{u=y.pageY-(w/2)}}break;case"floating-middle-left":case"floating-left-middle":if(y.clientX-C<=s){z=y.pageX+s}else{z=y.pageX-C-s}if(t>=y.pageY-(w/2)-v){u=y.pageY+A-v}else{if(y.clientY+(w/2)>=b){u=y.pageY-w-v}else{u=y.pageY-(w/2)}}break;case"floating-bottom-left":case"floating-left-bottom":if(y.clientX-C<s){z=y.pageX+s}else{z=y.pageX-C-s}u=y.pageY+A;break;case"floating-bottom":case"floating-bottom-center":case"floating-center-bottom":if(y.clientX-(C/2)+s<=s){z=y.pageX+s}else{if(f<=y.clientX+(C/2)){z=y.pageX-C-s}else{z=y.pageX-(C/2)}}u=y.pageY+A;break;case"floating-bottom-right":case"floating-right-bottom":if(f<=y.clientX+C+s){z=y.pageX-C-s}else{z=y.pageX+s}u=y.pageY+A;break;default:if(y.clientX-(C/2)+s<=s){z=y.pageX+s}else{if(f<=y.clientX+(C/2)){z=y.pageX-C-s}else{z=y.pageX-(C/2)}}}if(t>=y.pageY-w-v){u=y.pageY+A}if(y.clientY+w+A>=b){u=y.pageY-w-v}B.css({left:z+"px",top:u+"px"})},unHover:function(t){var s=t.children("a").eq(0).attr("href");n.regions.hideTooltips();t.removeClass("focus");if(c.agentsListOnHover){n.agentslist.hideAgents(s);a(d).find(".active-region").each(function(){var u=a(this).children("a").eq(0).attr("href");n.agentslist.showAgent(u)})}},activated:function(x){var w=c.clicksLimitAlert.split(" %d ")[0],u=c.clicksLimitAlert.split(" %d ")[1],v=x.children("a"),s=v.attr("href"),t="";if(c.clicksLimit==0||!c.multipleClick){c.clicksLimit=Infinity}if(c.clicksLimit==1){t=u.split(" || ")[0]}else{t=u.split(" || ")[1]}if(x.hasClass("active-region")){n.agentslist.hideAgents(s);x.removeClass("active-region");l--;p=false}else{if(!c.multipleClick){a(j).find(".active-region").removeClass("active-region")}if(l<c.clicksLimit){if(a(c.agentsListId).length&&s.charAt(0)=="#"){n.agentslist.showAgent(s)}x.addClass("active-region");l++}else{alert(w+" "+c.clicksLimit+" "+t);p=true}}},clicked:function(w){var u=w.children("a"),t=u.attr("href"),v=u.attr("target"),s=u.attr("rel");n.selectRegion.activated(w);if(p==false){c.onClick(w);if(typeof v!=="undefined"&&v!==false){window.open(t,v)}else{if(t!==undefined&&t.charAt(0)=="#"){if(a(c.agentsListId).length||c.multipleClick){return false}else{if(s!="nofollow"){window.location.hash=t}}}else{if(s!="nofollow"){window.location.href=t}else{return false}}}}},multiple:function(){var s=[],t=a(j).find(".map-search-link");q.each(function(){var w=a(this).children("a"),v=w.attr("href"),u;if(v!==undefined&&v.charAt(0)=="#"){u=v.slice(1)}else{if(/&/i.test(v)){u=v.slice(v.indexOf("?")+(c.searchLinkVar.length)+2,v.indexOf("&"))}else{u=v.slice(v.indexOf("?")+(c.searchLinkVar.length)+2)}}if(a(this).hasClass("active-region")){s.push(u)}});if(s.length){t.attr("href",c.searchUrl+"?"+c.searchLinkVar+"="+s.join(c.searchLinkSeparator))}else{t.attr("href",c.searchUrl)}},autoSelect:function(u){var t=u.attr("href"),s=window.location.hash;if(t!==undefined&&t.charAt(0)=="#"&&t==s){u.addClass("active-region");return false}}},searchButton:function(){var s=n.selectRegion,t=a("<a />",{href:c.searchUrl,"class":"map-search-link",text:c.searchLink});a(d).after(t);t.hover(function(){s.multiple()}).focus(function(){s.multiple()}).click(function(){s.multiple()}).keypress(function(){code=(e.keyCode?e.keyCode:e.which);if(code==13){s.multiple()}})},agentslist:{init:function(){a(d).find(".active-region").each(function(){var s=a(this).children("a").eq(0).attr("href");n.agentslist.showAgent(s)})},showAgent:function(s){if(!c.multipleClick){a(c.agentsListId).find("li").hide()}if(!c.agentsListOnHover){a(s+","+s+" li").fadeIn(c.agentsListSpeed)}else{a(s+","+s+" li").show()}},hideAgents:function(s){if(!c.agentsListOnHover){a(s+","+s+" li").fadeOut(c.agentsListSpeed)}else{a(s+","+s+" li").hide()}}},clearMap:function(){for(var s=100;s<2050;s+=5){r+=" m"+s}a(j).removeClass(r).removeClass("css-map-container");a(d).removeClass("css-map");a(j).find("span, .map-visible-list, .map-search-link").remove();a(j).find("li").removeClass("focus").removeClass("active-region")}};n.init()})}else{return this.html("<b>Error:</b> map size must be set!")}}})(jQuery);

// minification of r10401 of jquery-ui.aab.datepicker.js from lib
	(function(a){a.plugin({name:"aabDatePicker",methods:{init:function(c,b){var e=this,d=b&&b.lang?b.lang:this.attr("xml:lang")?this.attr("xml:lang"):a("html").attr("lang")?a("html").attr("lang"):c.lang,d=a.extend(!0,{beforeShow:function(){a(window).on("resize.aabDatePicker orientationchange.aabDatePicker",function(){e.aabDatePicker("position",c)})},onClose:function(){a(window).off("resize.aabDatePicker orientationchange.aabDatePicker")}},a.fn.aabDatePicker.defaults.regional[d],c,b);e.datepicker(d).datepicker("widget").click(function(a){a.stopPropagation()})},position:function(a){a=this.offset();this.datepicker("widget").css({left:a.left,top:a.top+this.outerHeight()})}},parse:{mode:"showOn",min:"minDate",max:"maxDate",format:"dateFormat",changeMonth:"changeMonth",changeYear:"changeYear",lang:"lang"},defaults:{lang:"nl",displayOn:"focus",dateFormat:"dd-mm-yy",changeMonth:!0,changeYear:!0,firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",weekHeader:"Wk",regional:{nl:{buttonText:"Open kalender",closeText:"Sluiten",prevText:"Vorige",nextText:"Volgende",currentText:"Vandaag",monthNames:"januari februari maart april mei juni juli augustus september oktober november december".split(" "),monthNamesShort:"jan feb maa apr mei jun jul aug sep okt nov dec".split(" "),dayNames:"zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),dayNamesShort:"zon maa din woe don vri zat".split(" "),dayNamesMin:"zo ma di wo di vr za".split(" ")},en:{buttonText:"Open calendar",closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:"January February March April May June July August September October November December".split(" "),monthNamesShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),dayNamesShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),dayNamesMin:"Su Mo Tu We Th Fr Sa".split(" ")},fr:{buttonText:"Calendrier ouverte",closeText:"Fermer",prevText:"&#x3c;Pr&#233;c",nextText:"Suiv&#x3e;",currentText:"Courant",monthNames:"Janvier F&#233;vrier Mars Avril Mai Juin Juillet Ao&#251;t Septembre Octobre Novembre D&#233;cembre".split(" "),monthNamesShort:"Jan F&#233;v Mar Avr Mai Jun Jul Ao&#251; Sep Oct Nov D&#233;c".split(" "),dayNames:"Dimanche Lundi Mardi Mercredi Jeudi Vendredi Samedi".split(" "),dayNamesShort:"Dim Lun Mar Mer Jeu Ven Sam".split(" "),dayNamesMin:"Di Lu Ma Me Je Ve Sa".split(" "),weekHeader:"Sm"},it:{buttonText:"Calendario aperto",closeText:"Chiudi",prevText:"&#x3c;Prec",nextText:"Succ&#x3e;",currentText:"Oggi",monthNames:"Gennaio Febbraio Marzo Aprile Maggio Giugno Luglio Agosto Settembre Ottobre Novembre Dicembre".split(" "),monthNamesShort:"Gen Feb Mar Apr Mag Giu Lug Ago Set Ott Nov Dic".split(" "),dayNames:"Domenica Luned&#236 Marted&#236 Mercoled&#236 Gioved&#236 Venerd&#236 Sabato".split(" "),dayNamesShort:"Dom Lun Mar Mer Gio Ven Sab".split(" "),dayNamesMin:"Do Lu Ma Me Gi Ve Sa".split(" "),weekHeader:"Sm"},de:{buttontext:"&Ouml;ffnen Kalender",closeText:"schlie&szlig;en",prevText:"Ehem",nextText:"N&auml;chst",currentText:"Heute",monthNames:"Januar Frebuar M&auml;rz April Mai Juni Juli August September Oktober November Dezember".split(" "),monthNamesShort:"Jan Febr M&auml;rz Apr Mai Juni Juli Aug Sept Okt Nov Dez".split(" "),dayNames:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),dayNamesShort:"Son Mon Die Mit Don Fre Sam".split(" "),dayNamesMin:"So Mo Di Mi Do Fr Sa".split(" "),weekHeader:"Sm"},pt:{buttonText:"Calend&aacute;rio aberto",closeText:"pr&Oacute;ximo",prevText:"anterior",nextText:"pr&Oacute;ximo",currentText:"Hoje",monthNames:"Janeiro Fevereiro Mar&Ccedil;o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),monthNamesShort:"Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),dayNames:"Domingo Segunda-Feira Ter&Ccedil;a-Feira Quarta-Feira Quinta-Feira Sexta-Feira S&aacute;bado".split(" "),dayNamesShort:"Dom Seg Ter&Ccedil; Qua Qui Sex S&aacute;b".split(" "),dayNamesMin:"Do Se Te Qa Qi Sx Sa".split(" "),weekHeader:"Sm"}}},on:".aab-date"})})(jQuery);
	
// r5404 of accordeon plugin from lib
	$.plugin({name:"accordeon",methods:{init:function(a){var b=$(a.head,this).addClass("head"),c=$(a.section,this).addClass("section");b.click(function(){var b=$(this).next();c.not(b).slideUp(a.time,a.easing);b.stop(!0,!0).slideToggle(a.time,a.easing).add(this).toggleClass(a.classes.open)});c.slideUp(0).eq(a.open).slideDown(0).add(b.eq(a.open)).addClass(a.classes.open)}},defaults:{head:"h2",section:"div",time:400,easing:"swing",open:!1,classes:{open:"open"}},on:".accordeon"});

// newWindow plugin from lib
	(function(d){var e=function(a){var c=[];d.each(a,function(a,b){-1!=="width height scrollbars toolbar location directories status menubar resizable fullscreen copyhistory".indexOf(a)&&c.push(a+"="+b)});return c};d.plugin({name:"newWindow",defaults:{name:!1,openClass:""},methods:{init:function(a,c){a=d.extend(!0,{},a,c);this.bind("click.newWindow",function(c){d(this).newWindow("show",a);c.preventDefault()})},show:function(a){var c=this,d=e(a),b=this.data("newWindow").window;if(!b||b.closed){try{b=window.open(this[0].href,
		a.name||"_blank",d.join())}catch(g){b=window.open(this[0].href,"_blank",d.join())}if(a.openClass){this.addClass(a.openClass);var f=setInterval(function(){b&&b.closed&&(c.removeClass(a.openClass),clearInterval(f))},100)}this.data("newWindow",{window:b})}b&&b.focus()},destroy:function(a){this.unbind("click.newWindow")}},parse:{width:"width",height:"height"},on:"a.new-window[href]"})})(jQuery);

	(function($) {
		var
			isIE9 = navigator.appVersion.indexOf("MSIE 9.") !== -1,
			jsPath = $('script[src$="main.js"]').attr('src').replace(/(.*\/).*?$/, '$1');
		// get svg4everybody only for IE9, 10, 11 and ms edge (and old webkit browsers)
		if ( /Trident\/[567]\b/.test(navigator.userAgent) || /Edge\/12\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537 ) {
			$.getScript( jsPath + 'ie/svg4everybody.min.js' );
		}

		$.parseURL = function(href) {
			var
				a = document.createElement('a');
			a.href = href;
			return a;
		}

		/**
		 * Execute a function only if selected elements exist
		 */
		$.fn.exists = function(ifExists) {
			return this.length ? ifExists(this) : this;
		};

		/**
		 * Execute a function now and on events
		 */
		$.fn.onAndNow = function() {
			arguments[arguments.length - 1].call(this);
			return $.fn.on.apply(this, arguments);
		};

		/**
		 * Custom selector for mandatory fields
		 */
		$.expr[':'].mandatory = function(element, index, meta, stack) {
			var
				field = $(element),
				label = field.prevAll('label:first'),
				form = field.closest('form'),
				usesRequiredIndicator = form.find('label:contains(*)').length,
				usesOptionalIndicator = form.find('.optional').length;
			return usesOptionalIndicator && !usesRequiredIndicator ?
				!label.find('.optional').length :
				label.text().indexOf(meta[3] || '*') !== -1;
		};

		$.ajaxSetup({
			cache: true
		});

		$('object[type="application/x-shockwave-flash"]').exists(function() {
			/*
			 * SWFObject v2.2 <http://code.google.com/p/swfobject/> is released under the
			 * MIT License <http://www.opensource.org/licenses/mit-license.php>
			 */
			var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
		});

		$('.twitter-teaser').exists(function() {
			// Twitter timeline plugin
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		});

		$('.facebook-teaser').exists(function() {
			!function (e, n, t) {
				var o, c = e.getElementsByTagName(n)[0];
				e.getElementById(t) || (o = e.createElement(n), o.id = t, o.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.4", c.parentNode.insertBefore(o, c))
			}(document, "script", "facebook-jssdk");
		});

		// Instagram feed by instansive.com
		$('.instagram-teaser').exists(function() {
			$.getScript('//instansive.com/widget/js/instansive.js');
		});

		/**
		 * Market access tool
		 */
		$('.market-access').exists(function(){
			$.getScript(jsPath + 'market-access-tool.js');
		});

		/**
		 * Period filter selected date range
		 */
		$('.news-search').exists(function(newsSearch) {
			var
				appendPeriod = function(isFrom) {
					var
						date = newsSearch.find('input.aab-date[name="' + (isFrom ? 'from' : 'until') + '"]').val();
					if(date) { 
						newsSearch
							.find('.news-period .method, .news-period .type')
							.empty()
							.filter('.type')
								.after("<span>" + cfg.i8n['newsFilter' + (isFrom ? 'From' : 'Till')] + "</span> <time datetime=" + date + ">" + date + "</time> ");
					}
				};
			appendPeriod();
			appendPeriod(true);
		});

		$.plugins({
			/**
			 * Poll results bar
			 */
			bar : {
				defaults : {
					startDelay : 1000, // ms
					duration : 3000, // ms
					interval : 100
				},
				methods : {
					init : function(options) {
						var
						 	barWidth = this.css('width').replace("px", "") * 1,
						 	progressElement = this.find('.progress').css('max-width', '100%'),
						 	progressWidth = progressElement.css('width').replace("px", "") * 1,
						 	endPerc = (progressWidth / barWidth) * 100,
						 	start = new Date().setTime(new Date().getTime() + options.startDelay),
						 	interval = setInterval(function() {
								var
									elapsed = new Date() - start, // elapsed time in ms
									perc = elapsed / options.duration * 100; // percentages
	                            progressElement.css('width', perc + '%');
								// display current positions and progress in case of Finish
								if (perc >= endPerc) {
									clearInterval(interval);
								}
							}, options.interval);
						progressElement.width(0);
					}
				},
				on : '.bar'
			},
			Overview : {
				defaults : {
					interval : 100,
					speedOut: 500,
					speedIn: 100,
					opacity: .5,
					opacityText: .8,
					easing: 'swing'
				},
				methods : {
					init : function(options) {
						var
							collegas = this.children('.collega'),
							width = collegas.width(),
							height = collegas.height(),
							maxZIndex = 1,
							maxHeight = height*2+10,
							maxWidth = width*2+10;

						collegas.wrapInner('<div>');
						collegas.find('p, h3').css('cursor', 'pointer').click(function(){
							$(this).parent().children('a')[0].click();
						});
						collegas.children('div').css({
							position : 'absolute',
							width : width,
							height : height
						}).mouseenter(function(event) {
							collegas.stop(true).fadeTo(options.speedOut, options.opacity, options.easing);
							var collega = $(this),
								columnCnt = (function() {
									var
										collegaNr = 0,
										top = collegas.eq(0).offset().top;
									while(collegas.eq(collegaNr).offset().top == top) {
										collegaNr++;
									}
									return collegaNr;
								})(),
								isLastCol = (collega.parent().prevAll().length + 1) % columnCnt == 0,
								rowNr = Math.ceil((collega.parent().prevAll().length + 1)/ columnCnt),
								nrOfRows = Math.ceil((collega.parent().parent().children().length)/ columnCnt),
								isLastRow = rowNr == nrOfRows;
							collega.stop(true).animate({width: maxWidth, height: maxHeight})
								.css(isLastCol ? 'right' : 'left', 0)
								.css(isLastRow ? 'bottom' : 'top', 0)
								.parent().stop(true).css('z-index', maxZIndex++).animate({opacity: 1}, function(){
									collega.find('p, h3')
										.animate({opacity: options.opacityText},options.speedOut).show();
								});
						}).mouseleave(function() {
							collegas.stop(true).fadeTo(options.speedIn, 1, options.easing);
							var collega = $(this);
							collega.stop(true).find('p, h3')
								.animate({opacity: 0},options.speedIn).hide().parent()
								.animate({width: width, height: height}).parent().stop(true)
								.animate({opacity: 1}, function() {
									collega.css('z-index', 0);
								});
						});
					}
				},
				on : '.collegas'
			},

			/**
			* Carousel
			*/
			carousel : {
				defaults : {
					transitionDuration : 1000,
					slideNr : 0,
					elementsPerSlide : 4,
					controls : {
						elements : false,
						events : { // event mapping for controls
							click : 'show'
						}
					}
				},
				methods : {
					init : function(options) {
						if(!this.find('.carousel-wrapper').length) {
							var
								ul = this.find('ul').eq(0).wrap('<div class="carousel-wrapper"><div class="next-previous-wrapper"><div class="slides-wrapper"></div></div></div>'),
								testStyle = ul[0].style;
							$.extend(this.addClass('carousel').data('carousel'), {
								ul : ul,
								elements : ul.children('li'),
								transitionSupport : ul[0].style.transition !== 'undefined' && typeof ul[0].style.transform !== 'undefined'
							});
						}
						this
							.carousel('resize', options)
							.find('.carousel-wrapper').append(this.find('a.more'));
					},
					show : function(options) {
						var
							dat = this.data('carousel'),
							slideNr = options.slideNr;
						if(dat.currentSlideNr !== slideNr) {
							if(dat.transitionSupport) {
								dat.ul.css({
									transition : 'transform ' + options.transitionDuration / 1000 + 's cubic-bezier(.7, .05, .3, .95)',
									transform : 'translateX(-' + 100 * slideNr / dat.nrOfSlides + '%)'
								})
							} else {
								dat.ul
									.animate({
										left : -100 * slideNr + '%'
									}, {
										duration : options.transitionDuration,
										easing : 'easeInOutCubic'
									});
							}
							dat.controls
								.removeClass('current')
								.eq(slideNr)
								.addClass('current');
							dat.currentSlideNr = slideNr;
							this.find('a.previous').toggleClass('disabled', dat.currentSlideNr == 0);
							this.find('a.next').toggleClass('disabled', dat.currentSlideNr + 1 == dat.nrOfSlides);
						}
					},
					previous : function(options) {
						if (this.data('carousel').currentSlideNr > 0) {
							this.carousel('show', $.extend(options, {slideNr : this.data('carousel').currentSlideNr - 1}));
						}
					},
					next : function(options) {
						if (this.data('carousel').currentSlideNr + 1 < this.data('carousel').nrOfSlides) {
							this.carousel('show', $.extend(options, {slideNr : this.data('carousel').currentSlideNr + 1}));
						}
					},
					resize : function(options) {
						if(!this.find('.carousel-wrapper').length) {
							this.carousel(options);
						}
						var
							dat = this.data('carousel'),
							nrOfSlides = Math.ceil(dat.elements.length / options.elementsPerSlide);
						if( nrOfSlides > 1 ) {
							var
								self = this,
								mapEvents = function(element, eventMapping, slideNr) {
									$.each(eventMapping, function(eventName, method) {
										if(element[eventName]) {
											element[eventName](function(event) {
												event.preventDefault();
												self.carousel(method, $.extend(true, options, {slideNr : slideNr}));
											});
										}
									});
								};
							// Map slide nr in old situation to slide nr in new sitation
							if( dat.nrOfSlides ) {
								var
									factor = dat.currentSlideNr * nrOfSlides / dat.nrOfSlides;
								options.slideNr = dat.nrOfSlides > nrOfSlides ? Math.floor(factor) : Math.ceil(factor);
							}
							if( options.elementsPerSlide != dat.elementsPerSlide ) {
								var
									controls,
									controlUl = $('<ul class="slide-controls">');
								dat.elements
									.css({
										width : 100 / (options.elementsPerSlide * nrOfSlides) + '%'
									});				
								dat.ul.css($.extend({
										width : 100 * nrOfSlides + '%'
									},
									dat.transitionSupport ? {
										transition : 'none',
										transform : 'translateX(-' + 100 * options.slideNr / nrOfSlides + '%)'
									} : {
										left : -100 * options.slideNr + '%'
									}));
								for(var controlNr = 0; controlNr < nrOfSlides; controlNr++) {
									$('<li><a href="#">' + (controlNr + 1) + '</a></li>').appendTo(controlUl);
								}
								this
									.find('.previous, .next, .slide-controls').remove().end()
									.find('.carousel-wrapper').append(controlUl);
								controls = controlUl.children();
								controls
									.each(function(slideNr) {
										mapEvents($(this), options.controls.events, slideNr );
									})
									.eq(options.slideNr)
									.addClass('current');
								$.each('previous next'.split(' '), function(index, method) {
									self
										.find('.slides-wrapper')
										.after($('<a href="#" class="' + method + ( method == 'previous' && options.slideNr == 0 || method == 'next' && options.slideNr + 1 == nrOfSlides ? ' disabled' : '') + '"></a>')
											.click(function(event) {
												self.carousel(method, options);
												event.preventDefault();
											}));
								});
								dat.controls = controls;
								dat.nrOfSlides = nrOfSlides;
								dat.currentSlideNr = options.slideNr;
								dat.elementsPerSlide = options.elementsPerSlide;
							}
						} else {
							this.carousel('destroy');
						}
					},
					destroy : function() {
						var
							dat = this.removeClass('carousel').data('carousel');
						this.find('.next, .previous, .slide-controls').remove();
						dat.ul
							.unwrap().unwrap().unwrap()
							.css({
								left : '',
								width : ''
							});
						dat.elements.css('width', '');
					}
				},
				on : {
					'.no-sidenav .calendar, .no-sidenav .related-articles, .no-sidenav .headlines' : {
						530 : {
							elementsPerSlide : 1
						},
						768 : {
							elementsPerSlide : 2
						},
						992 : {
							elementsPerSlide : 3
						},
						9999 : {
							elementsPerSlide : 4
						}
					},
					'body:not(.no-sidenav) .calendar, body:not(.no-sidenav) .headlines' : {
						530 : {
							elementsPerSlide : 1
						},
						992 : {
							elementsPerSlide : 2
						},
						9999 : {
							elementsPerSlide : 3
						}
					},
					'body:not(.no-sidenav) .related-articles' : {
						480 : {
							elementsPerSlide : 1
						},
						768 : {
							elementsPerSlide : 2
						},
						9999 : {
							elementsPerSlide : 3
						}
					},
					'.image-gallery' : {
						9999 : {
							elementsPerSlide : 1
						}
					}
				}
			},

			/**
			* selectmenu Instantiates a dropdown.
			* The selectmenu will be hidden and a dropdown list
			* (ul->li) will be generated
			*/
			selectmenu : {
				defaults : {
					animate : false
				},
				methods : {
					init : function(options) {
						var
							self = this.hide(),
							selectOptions = self.find('option'),
							elementFor = self.attr('name').replace(/\s/g, '_'),
							container = $('<ul class="dropdown"/>').attr('data-for', elementFor);
						selectOptions.each(function() {
							var
								selectOption = $(this),
								selectOptionText = selectOption.text(),
								listItem = $('<li/>')
									.addClass(selectOption.attr('class'))
									.appendTo(container);
							if(selectOption.filter('[disabled]').length) {
								listItem
									.addClass('disabled')
									.text(selectOptionText);
							} else {
								$('<a href="#"></a>')
									.text(selectOptionText)
									.appendTo(listItem)
									.attr('data-key', elementFor)
									.click(function(event) {
										if ( !$(this).hasClass('trigger') ) {
											$('a[data-key=' + elementFor + '].trigger').text(selectOptionText);
											self.val(selectOption.val()).change();
										}
										event.preventDefault();
									});
							}
						});
						self.after(container);
					}
				},
				on : 'select'
			},

			/**
			* dropdown Instantiates a dropdown on an ul or an element with an ul
			* descendant. The ul will be wrapped in a div if the element is an ul If
			* no trigger is provided, the trigger will be created from the contents
			* of li.active
			*/
			dropdown : {
				defaults : {
					dropdownClass : 'dropdown',
					listClass : 'dropdown-list',
					disableForSingleOption : false, // If this is true, a dropdown with only one option will be disabled,
													// the trigger class will be 'disabled-trigger'
					collapseOnBlur : true,
					collapseOnSelect : true,
					triggerSelector : '.selected > *, .trigger',
					setTriggerWidth : true,
					disabled : false,
					setParentToActive : false, //if this is true the container of the dropdown will get a class active.
					hiddenCSS : {
						height : 0,
						paddingTop : 0,
						paddingBottom : 0
					},
					// What list positioning should be handled by the plugin
					position : {
						top : true,
						width : true,
						left : true,
						right : false
					},
					removeFirst : true,
					done : function(trigger, list) {}
				},
				methods : {
					init : function(options) {
						var dropdown, list, trigger, widest,
							self = this;
						if(this.is('ul') || this.is('ol')) {
							// If this is a list, we create a div wrapper
							list = this;
						} else {
							// This is not a list, so wrap all children so we have a
							// container to hide these children
							list = this.children().wrapAll('<div></div>').parent('div');
						}
						dropdown = list.addClass(options.listClass).wrap('<div></div>').parent('div').addClass(options.dropdownClass);

						trigger = $(options.triggerSelector, list);
						trigger = trigger.length ? trigger : $(':first', list); // Fallback if no trigger found
						if (trigger.has('a').length){
							trigger = trigger.find('a');
						} else {
							trigger.hide();
							trigger = trigger.clone().wrapInner('<a href="#"></a>').find('a');
						}
						trigger.addClass('trigger');
						var listWidthBeforeRemoval = list.outerWidth(false);
						var dropdownWidthBeforeTrigger = dropdown.outerWidth(false);
						trigger = trigger.prependTo(dropdown);
						var dropdownWidthAfterTrigger = dropdown.outerWidth(false);
						// if dropdown width did not change, assume that width is
						// static/defined in CSS rule or large enough to contain
						// trigger
						if (dropdownWidthBeforeTrigger == dropdownWidthAfterTrigger) {
							if(options.setTriggerWidth) {
								trigger.parent('div').width(dropdownWidthAfterTrigger);
							}
							list.width(Math.max(dropdownWidthAfterTrigger, listWidthBeforeRemoval));
						} else {
							// dropdown is not large enough
							widest = Math.max(dropdownWidthAfterTrigger, listWidthBeforeRemoval);
							list.width(widest);
							if(options.setTriggerWidth) {
								dropdown.width(widest);
							}
						}
						list.appendTo('body');

						if (options.removeFirst){list.children(':first').remove();}
						$.extend(this.data('dropdown'), {
							dropdown : dropdown,
							list : list,
							trigger : trigger,
							toListHeight : list.css('height'),
							toListPadddingTop : list.css('padding-top'),
							toListPaddingBottom : list.css('padding-bottom')
						});
						if(typeof dropdown.data('dropdown') == 'undefined') dropdown.data('dropdown', this.data('dropdown'));
						var mouseover = false;
						list.css(options.hiddenCSS)
							.mouseover(function() {mouseover = true;})
							.mouseout(function() {mouseover = false;})
							.click(function() {
								if(options.collapseOnSelect) {
									self.dropdown('collapse');
								}
							});
						trigger
							// Stop link from losing focus in Webkit browsers
							.mousedown(function(event) {event.preventDefault();})
							.click(function(event) {
								event.preventDefault();
								event.stopPropagation();
								trigger.focus();
								self.dropdown(dropdown.is('.has-active-dropdown') ? 'collapse' : 'expand', options);
							});
						if(options.collapseOnBlur) {
							trigger
								.blur(function() {
									if(mouseover) return false; else self.dropdown('collapse');
								});
						}
						$(document).click(function() {
							if(!mouseover) {
								self.dropdown('collapse');
							}
						});
						if(options.disableForSingleOption && $('li', list).length==1 || options.disabled) {
							this.dropdown('disable');
						} else {
							this.data('dropdown').disabled = false;
						}
						options.done.call(this, trigger, list, this);
						return this;
					},
					expand : function(options) {
						var
							self = this,
							data = this.data('dropdown'),
							dropdown = data.dropdown,
							list = data.list,
							trigger = data.trigger;
						$('.has-active-dropdown').dropdown('collapse');
						this.dropdown('position', options);
						$(window).on('resize.dropdown orientationchange.dropdown', function() {self.dropdown('position', options);});
						dropdown.addClass('has-active-dropdown').add(trigger).add(list).addClass('hover');
						list
							.animate({
								height : data.toListHeight,
								'padding-top' : data.toListPadddingTop,
								'padding-bottom' : data.toListPaddingBottom
							}, 60);
						if(options.setParentToActive) {
							self.addClass('active');
						}
					},
					position : function(options) {
						var
							data = this.data('dropdown'),
							trigger = data.trigger,
							pos = options.position;
						data.list
							.css({
								top : pos.top ? trigger.offset().top + trigger.outerHeight(false) + 'px' : '',
								width : pos.width ? trigger.outerWidth(false) + 'px' : '',
								left : pos.left ? trigger.offset().left + 'px' : '',
								right : pos.right ? $(window).width() - 1 - trigger.outerWidth(false) - trigger.offset().left + 'px' : ''
							});
					},
					collapse : function(options) {
						var
							self = this,
							data = this.data('dropdown'),
							dropdown = data.dropdown,
							list = data.list,
							trigger = data.trigger;
						$(window).off('resize.dropdown orientationchange.dropdown');
						list.animate(options.hiddenCSS, 100, function() {
							list.clearQueue();
							dropdown.removeClass('has-active-dropdown').add(trigger).add(list).removeClass('hover');
						});
						if(options.setParentToActive) {
							self.removeClass('active');
						}
					},
					disable : function() {
						var
							data = this.data('dropdown'),
							disabledTrigger = data.trigger.next('span.trigger');
						if(!data.disabled) {
							data.dropdown.addClass('disabled');
							data.trigger.hide();
							if(disabledTrigger.length) {
								disabledTrigger.show();
							} else {
								data.trigger.after($('<span class="trigger"></span>').html(data.trigger.html())); // replace a with span
							}
							data.disabled = true;
						}
					},
					enable : function() {
						var
							data = this.data('dropdown');
						if(data.disabled) {
							data.dropdown.removeClass('disabled');
							data.trigger.show();
							data.trigger.next('span.trigger').hide();
							data.disabled = false;
						}
					},
					destroy : function() {
						if ( this.data('dropdown') !== undefined ) {
							var data = this.data('dropdown'),
								dropdown = data.dropdown,
								list = data.list,
								trigger = data.trigger,
								firstDropdownItem = dropdown.contents();
							trigger.off('click');
							firstDropdownItem.removeClass('trigger');
							list.find('li:first-child').append( firstDropdownItem );
							list
								.appendTo( dropdown.parent() )
								.removeAttr('style')
								.removeClass('dropdown-list');
							dropdown.remove();
						}
					}
				},
				on : {
					'.dropdown' : {},
					'.news-filter' : {
						setTriggerWidth : false,
						setParentToActive : true,
						position : {
							left : false,
							width : false
						},
						listClass : 'dropdown-list filter news-filter-list'
					},
					'.news-period' : {
						setTriggerWidth : false,
						/* collapseOnBlur : false,*/
						collapseOnSelect : false,
						setParentToActive: true,
						position : {
							left : false,
							width : false
						},
						listClass : 'dropdown-list filter news-period-list'
					},
					'.vacancy-search .filter' : {
						setTriggerWidth : false,
						setParentToActive : true,
						position : {
							left : false,
							width : false
						},
						listClass : 'dropdown-list filter vacancy-search'
					},
					'.share' : {
						dropdownClass : 'sharing dropdown',
						position : {
							left : false,
							right : true,
							width : false
						}
					},
					'.results-per-page, .sorting' : {
						dropdownClass : 'dropdown vacancy-list-dropdown'
					},
					'.related-links.reports ul' : {
						setTriggerWidth : false,
						done : function(trigger) {
							trigger.closest('.related-links').addClass('dropdowns-added');
						}
					}
				}
			},

			/**
			* Horizontally scroll an element with a left and right button.
			*
			* Used for years scrolling of annual & quarterly results selector for
			* financial archive.
			*/
			horizontalScroll : {
				defaults : {
					animationDuration : 500,
					stepSize : 100
				},
				methods : {
					init : function(options) {
						var
							scroller = this
								.wrap('<div class="wrapper horizontalScroll"></div>')
								.after($('<span class="controller left"></span><span class="controller right"></span>')
									.click(function() {
										scroller
											.stop(true)
											.animate(
											{ left : ($(this).hasClass('left') ? '-' : '+') + '=' + options.stepSize + 'px' },
											options.animationDuration,
											function() {
												var
													overflow = scroller.width() - wrapper.width(),
													scrollerLeft = scroller.position().left,
													minLeft = -overflow - options.stepSize + scroller.children().last().outerWidth(false);
												scroller.animate({
														left : overflow < 0 || scrollerLeft > 0 ?
															15 :
														(scrollerLeft < minLeft ? minLeft : scrollerLeft) + 'px'
													},
													options.animationDuration
												);
											}
										);
									})
							),
							wrapper = scroller.parent('.wrapper');
					}
				},
				on : '.period.nav .year'
			},

			/**
			* Add google maps to the page with custom markers
			*/
			googleMaps : {
				methods : {
					init : function(options) {
						var
							data = this.data(),
							map = new google.maps.Map(this[0], {
								center: new google.maps.LatLng(data.lat || 52.2129919, data.lng || 5.2793703),
								zoom: data.zoom || 7,
								styles: [
									{
										"featureType": "road",
										"stylers": [
											{ "lightness": 50 },
											{ "saturation": 1 },
											{ "visibility": "off" }
										]
									}, {
										"featureType": "administrative",
										"stylers" : [{ "weight": 2 }]
									}, {
										"featureType": "transit",
										"stylers": [{ "visibility":"off" }]
									}
								],
								disableDefaultUI: true,
								zoomControl: true
							}),
							markerNormal = data.markernormal || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAArCAYAAADsQwGHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0U1NTM0NkNCNzQ4MTFFMzhDRkY5MzAwNTM1MEM4OUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0U1NTM0NkRCNzQ4MTFFMzhDRkY5MzAwNTM1MEM4OUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RTU1MzQ2QUI3NDgxMUUzOENGRjkzMDA1MzUwQzg5RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RTU1MzQ2QkI3NDgxMUUzOENGRjkzMDA1MzUwQzg5RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsADWHgAAAReSURBVHja7JlvSBt3GMefi5eYP67Nq1roC62jMBgpfWGhYYJO2YuwlmYwKBS2jhbxbUWsRQulLwr6Yv3DpKUqjFk6wqCoiC20+0eRIW6tsS4yTfxTi0krStVEoya56/OcueOSXKJJNMk2H/j6u7tfTj7Pc8899/zuGDh5ErJpfG9v0ueo4F9oIvRnqEVyPNNiTp3yor5IBfoWan+WAleAupPMCWx4PER/3tlsYDQYMkqMUabh4P8mp/eg96D/K9Bssid829UFP/X3w+v5edin04GltBSunT0L+/T63ISu7eiAWz090r4HNTY7C7+PjMDQ7du5mR5yYLnZJycF8L2c3on0mJ6bS2p+ZW0Nfh4eFkZTURGYiouzAP32bVLzZQ0NQtqI1tXUBNYTJzKbHsWFhVB84IDiHPUrFSZTTJ4n2s8MNAJfxdKmZBRBObQS4PDUVHZuxG+qquBYSUnM8XjO5Ez1UGpdo9OGHCMH5Xazujrz0N0DA/BpY6NiPT584YJQwxdXVqRjX5aVRTgR735IqQcPL2xpqbVfvgggAALtQRGoHCiRUX6fRtF499EjaOzslK6G1WyGc5WVESkWXgTQApdJC3p5dRWKzp/fNmi8NHrZ2gqf1NcLfYrcvkbwH2prU4ZWTI+ndntawOKVuvf4MdRYLDFzvYODsdFjmG1LEXpwfHxHcu/vV6/gKD4JtRqNJDINy6b1fxXPfu5y7Qj0M4cDuq9cAf/Dh7vfexi0Wjh+5IhwKVK19UAACo3GVCsZr/QyKiF0D0YnR1ZRvGxkxH0WcsfYBMARyiVodRxoLrzNicoZ6JaWlg9pbGtr80xMTARlkRVhQ6IzOQNtNpsb1Go1lJeXA8dx/o2NDY/P55vqR2tubn4ji35kpCc8nqxBr+EKB2FBg7VcpVLptFptCclqtVahI30Wi0VcoDIi9Cg5Wxp+tGbajDqdbxVbB4LmeV4Az8vLk+YLCgo+pp4tOj1qUN/B5mvXrfsVgI9QiV50BDWBgBfrPM+oVKCiRy+OjDiGj9G+mmVDZ0wmO0ETsChKFRI6smy32+/LcluCpn6zIongVKJ+iTf5weTkH0av163T6UCv10syYBNlEEeZaG4FexWKtKhgMLi8sLDwxGaz/Ybyy25Gnk3mm4fYkaH9iupDfR7zm6UlNz8z417Nz5cAQqFQBFA8IagXb74X6MBfdXV1o1HVg4+OdCp2ETY/e2ikIxwX5IeG/lxfX1eEksPTNorDKjGGoON4I75sb2+flsPFUzrQ1FXdQF2WjszMOMDn8wcEfi4iRzdheQKdQ6dGvF6vw+32jLlcTj9s/W1m694jCbuO+gro84ffPw8Oxz/iBEWSIo7A07jtDAQCTgR1YZ4ubgOOT9Q8pQvtQ11CPYDR0QEkpKg5qeSTMLpOvOwbqO1EkE/Q4e0oNNmPCJsPHs/T8ItUJqzoPiJlyN2AprXS9zLQeE24AIdlkM/HyoJPO9qGqRRe4rwXYAAxunSBtDY7hAAAAABJRU5ErkJggg==",
							markerActive = data.markeractive || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAArCAYAAADsQwGHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0U1NTM0NjhCNzQ4MTFFMzhDRkY5MzAwNTM1MEM4OUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0U1NTM0NjlCNzQ4MTFFMzhDRkY5MzAwNTM1MEM4OUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMUFCOENFMUI3MkUxMUUzOENGRjkzMDA1MzUwQzg5RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMUFCOENFMkI3MkUxMUUzOENGRjkzMDA1MzUwQzg5RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuEg9dkAAARBSURBVHja7JlfSFtXHMd/NyRNYuzmQ2g3pLja0hWs1TKQCqXKWh/6JxgRtqe1LwUpCG0Rur2VQhVDYQ4Ggxpqu5aKD33oKCOwou2DXQVlDQ1K26iJPiRVKqQmJpo/9+73i57L0dxEE1Nzt/qDL+fce26Sz/md3/mdc3IFOHsWCmnS48dZf0YD/0Fj0A2oAHV8qyVYLEFUUy7Qv6A+L5DjilG/5QJdWuAR/+KTielt6G3o/wu0NtsPtDU1wXfHjsEesxnmIxFwjIzAtd5emA+H1QnddeECXG5slK+/RH1dWgr1lZVw5NIldYYHD8xbdXl5Enw7pvMRHl/t2pVVu8lggJNVVcnSNTUFLq+3ANC7d2fVPmizJcOGWVN7OzwaGtra8PDOzIB3dlaxLbCwAM9crpQ4z3S9NdAIfB1Tm5KRB3loJcCqvXsLMxHv9veDc3Iy5X66zqgme1AoKI0Cb9Qx6iBvV+z2rYe2Hj0KTzs6FPOx5/btZA4vMZnkew8HB1d1It18yMWElYNtYO3JhQAItBFFoDxQJqP4/gNF5cXTp6Hj3Dl5NB69eAG/DwwohhgecIVNQX9WVARTPT0bBk0XRodbW+H5zZvJfQpv9xD8fFdXztCK4dFQXb0pYDZSLadOwS2HI6XNUlOT6j1B2LAUoWsOHMhL7B0qK4NXuBIuRqOyyKLxeP5XxG/2788L9PGKCrDeuAHG5uaPv/dYWFyEYbcbJEnK+Yv1Oh3MBAK5ZjKlH5YyQjeid1RyipK4UmDXWlCPaTMAr5KaoHVpoMWVusikGmibzbaPyu7ubv/ExESc8yyDTbDOqAa6trb2Rx1O3rq6OhBFMRKNRv2hUMgziNbZ2fmO876omuPWImaspaUlAgaNRmM0GAzlZrP5hNVqveZwOPg/0QUGPVZI4BKjMRQOh2XwRCKxqr24uLiCn5gsPFpQv8Ly367r71cADqKKMjwT3xGLBXHJlQSNBjS09GIpsHLlHl3rtNrE95WVToKmdYGJQoWEnp93Op33udiWoenYUZ+Fc75F9adr3Dk5+XdJMOgzGo1QhJsvJhPuR0ys5ERtC7jBotBgisfj83Nzc3/19fU9RUW4yShps3nnIVgsrDqA+hN1JuWZDx980vS0L6zXywA03DxQOiFoECffP9iBkba2trE12UNa6+lc7DIsv/bYId8Rxbj08uUwm1BrxcNTHSVilniDoG8xnl/Z7XYvD5dOm4EeR/2M+km+Mz09CqFQJJbkF1fF6DKsRKCz2ClXMBgc9fn8b8bH3RFY/93M+nuPLKwd9QPQ649I5D2Mjr5mDeRJ8jgCe7HujsVibgQdxzgNbABOyrR52ix0CHUV9QDGxoaQkLzmRk2Q0LtuHPYoaiMelDLs8PIKTdaLsHrw+59g3b+SEgWFfUTOkB8Dms5KdzjQdGe9JBymQUmPmQVXPKqDx+PJ+uf+FWAAsttrc8Sxe2cAAAAASUVORK5CYII=",
							markers = this.parent().find('.location-data');
						markers.each(function(){
							var
								isActive = false,
								placeData = $(this).clone(),
								latitude = placeData.find('meta[itemprop=latitude]').attr("content"),
								longitude = placeData.find('meta[itemprop=longitude]').attr("content"),
								marker = new google.maps.Marker({
									position: new google.maps.LatLng(latitude, longitude),
									title: placeData.find('h2').text(),
									map: map,
									icon: markerNormal
								}),
								infoWindow = new google.maps.InfoWindow({
									content: placeData[0]
								});
							google.maps.event.addListener(marker, 'click', function(){
								isActive = !isActive;
								if (isActive){
									infoWindow.open(map, marker);
									marker.setIcon(markerActive);
								} else {
									infoWindow.close(map, marker);
									marker.setIcon(markerNormal);
								}
							});
							google.maps.event.addListener(marker, 'mouseover', function(){
								if (!isActive){marker.setIcon(markerActive);}
							});
							google.maps.event.addListener(marker, 'mouseout', function(){
								if (!isActive){marker.setIcon(markerNormal);}
							});
							google.maps.event.addListener(infoWindow,'closeclick',function(){
								marker.setIcon(markerNormal);
								isActive = false;
							});
						});
					}
				},
				on : 'div#map-canvas'
			},

			/**
			* FAQ
			*/
			faq : {
				defaults : {
					animationDuration : 500
				},
				methods : {
					init : function(options) {
						var
							answers = this.find('.answer')
								.hide(),
							questions = this.find('.question')
								.removeClass('no-icon')
								.click(function() {
									var
										question = $(this),
										answer = question.next(),
										delay = questions.is('.expanded') ? options.animationDuration : 0; // If any answer is already expanded, delay collapsing
									questions.removeClass('expanded');
									answers.slideUp(options.animationDuration);
									if(answer.is(':hidden')) {
										answer.delay(delay).slideDown(options.animationDuration);
										question.addClass('expanded');
									}
								});
					}
				},
				on : '.faq'
			},

			/**
			* Expand table
			*/
			expand : {
				methods : {
					init : function(options) {
						var
							trToggled = this.find('tbody tr').slice(2).hide(),
							thAmount = this.find('thead tr th').length,
							button = $('<td colspan="' + thAmount + '" class="expand">' + cfg.i8n.showFullTable + '</td>').click(function() {
								trToggled.stop(true, false).slideToggle();
								button.text(cfg.i8n.showFullTable == button.text() ? cfg.i8n.hideFullTable : cfg.i8n.showFullTable);
							});
						this.find('tbody').append(button.wrap('<tr></tr>').parent());
					}
				},
				on : '.table-general-collapsible, .financial-long'
			},

			/**
			* Form validator
			*/
			validator : {
				defaults : {
					errorClass : 'error',
					includeFields : ':visible',
					validators : {
						// Validation selectors and associated functions, returning true means valid
						'[id^=e-mail], [id^=email], [class^=e-mail], [class^=email]' : function(value) {
							return value.length && /^([\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4})?$/.test(value);
						},
						'[id^=e-mail-confirmation], [id^=email-confirmation], [class^=e-mail-confirmation], [class^=email-confirmation]' : function(value) {
							return value == this.prevUntil('[id^=e-mail], [id^=email], [class^=e-mail], [class^=email]').last().prev().val();
						},
						'#account_number' : function(value) {
							var
								elevenTest = function(value) {
									var
										length = value.length,
										sum = 0;
									for (var i = 0; i < length; i++) {
										sum += value.charAt(i) * (length - i);
									}
									return sum % 11 == 0;
								};
							if (value.length < 9 || (value.length == 9 && value.charAt(0) == "0")) {
								return false;
							}
							return elevenTest(value);
						},
						':mandatory' : $.trim,
						':text, textarea' : function(value) {
							return value.length <= 1000;
						}
					}
				},
				methods : {
					init : function(options) {
						var
							form = this;
						fields = form.find(':input, textarea').on('focus.validator', function() {
							$(this).removeClass(options.errorClass);
						});
						form.on('submit.validator', function() {
							var
								hasError = fields
									.filter(options.includeFields)
									.filter(function() {
										var
											hasError = false,
											field = $(this);
										$.each(options.validators, function(selector, valid) {
											if(field.is(selector) && !valid.call(field, field.val())) {
												hasError = true;
												return false;
											}
										});
										field.toggleClass(options.errorClass, hasError);
										return hasError;
									})
									.length;
							form.triggerHandler(hasError ? 'invalid' : 'valid');
							return !hasError;
						});
					},
					destroy : function(options) {
						$(this)
							.off('submit.validator')
							.find(':input')
							.off('focus.validator')
							.removeClass(options.errorClass);
					}
				},
				on : 'form#contact'
			},

			/**
			* Scales images and click areas in an image map
			*/
			scalableImgMap : {
				methods : {
					init : function() {
						var
							self = this,
							areas = $('map[name=' + this.attr('usemap').replace('#', '') + ']').find('area');
						areas.each(function() {
							var
								area = $(this);
							area.data('originalCoords', area.attr('coords').split(','));
						});
						self.data('scalableImgMap', {
							areas : areas,
							originalWidth : $(new Image()).attr('src', this[0].src)[0].width
						});
						$(window).on('resize.scalableImgMap', function() {
							self.scalableImgMap('resize');
						});
						self.scalableImgMap('resize');
					},
					resize : function(options) {
						if(typeof this.data('scalableImgMap') == 'undefined') {
							this.scalableImgMap();
						}
						var
							scale = options.scale || this.width() / this.data('scalableImgMap').originalWidth;
						this.data('scalableImgMap').areas.each(function() {
							var
								area = $(this);
							area.attr('coords', $.map(area.data('originalCoords'), function(coord) {
								return coord * scale;
							}).toString());
						});
					},
					destroy : function() {
						this.scalableImgMap('resize', { scale : 1 });
						$(window).off('resize.scalableImgMap');
					}
				},
				on : 'img[usemap]:visible'
			},

			/**
			* Show a native browser select for smaller screen sizes
			*/
			nativeSelect : {
				defaults : {
					parentActiveClass : '',
					multiple : false
				},
				methods : {
					init : function(options) {
						this.not('select + *').filter(':visible').each(function() {
							var
								self = $(this),
								trigger = self.find('.trigger'),
								optionElements = options.multiple ? '' : '<option value="' + self.attr('href') + '">' + ( trigger.has('.type').length ? trigger.find('.type').text() : trigger.text() ) + '</option>',
								select = $('<select></select>');
							self.before(trigger.find('.method').clone()).data('dropdown').list.find('a').each(function() {
								var
									a = $(this);
								optionElements += '<option value="' + a.attr('href') + '"' + (a.parent().is('.filtered') ? ' selected="selected"': '') + '>' + a.text() + '</option>';
							});

							//Set active class on native select container
							if ( options.parentActiveClass ) {
								select.on({
									focus: function () {
										select.parent().addClass(options.parentActiveClass);
									},
									'blur change': function () {
										select.parent().removeClass(options.parentActiveClass);
									}
								});
							}
							if ( options.multiple ) {
								var
									isAndroid = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
								select.attr('multiple', 'multiple')[isAndroid ? 'change' : 'blur'](function() {
									if(!select.val()) {
										return;
									}
									// Assume only query strings differ for multiple
									var
										urlStart = '',
										queryParts = [];
									$.each(select.val(), function() {
										if(this != 'undefined') {
											queryParts = queryParts.concat(
												this.split('?')[1].split('&')
											);
											if(!urlStart) {
												urlStart = this.split('?')[0];
											}
										}
									});
									if(queryParts.length) {
										document.location.href = urlStart + '?' + $.unique(queryParts).join('&');
									}
								});
							} else {
								select.change(function() {
									if(select.val() !== 'undefined') {
										document.location.href = select.val();
									}
								})
							}
							self.before(select.append(optionElements));
							if(options.multiple) {
								select.before('<label class="native-select">' + trigger.text() + '</label>');
							}
						});
						this.hide().prev('select').show().prev('label.native-select').show();
					},
					destroy : function() {
						this.show().prev('select').hide().prev('label.native-select').hide();
					}
				},
				on : {
					'div.dropdown:not(.sharing, header .dropdown, .news-period .dropdown, .news-filter .dropdown, .vacancy-search .dropdown)': {
						767: {}
					},
					'.news-filter .dropdown': {
						767: {
							parentActiveClass : 'mobile-active'
						}
					},
					'.vacancy-search .dropdown': {
						767: {
							multiple : true
						}
					}
				}
			},

			/**
			* Make tabs of h3 headings and a tab page of the contents
			*/
			tabbed : {
				defaults : {
					includeTabsUntil : ':not(.rating)'
				},
				methods : {
					init : function(options) {
						var
							ratings = this.nextUntil(options.includeTabsUntil).hide().add(this),
							h3s = ratings.children('h3'),
							tabs = h3s.find('a');
						ratings.wrapAll('<div class="tab" />').parent().before(h3s);
						h3s.wrapAll('<div class="tabs" />');
						tabs
							.each(function(index) {
								ratings.eq(index).find('ul').prepend($(this).clone(true).wrap('<li></li>').parent());
							})
							.on('click.tabbed', function(e){
								e.preventDefault();
								tabs.removeClass('selected').filter(this).addClass('selected');
								ratings.hide().eq(tabs.index(this)).show();
							})
							.removeClass('selected').first().addClass('selected');
					},
					destroy : function() {
						var
							self = $(this),
							ratings = self.siblings().add(self).show();
						self.unwrap().prev('.tabs').find('h3').each(function(index) {
							ratings.eq(index).prepend(this);
						}).find('a')
							.removeClass('selected')
							.off('click.tabbed').end().end().remove();
						ratings.find('ul li:first-child').remove();
					}
				},
				on : {
					'.rating:first-child' : {
						479 : {}
					}
				}
			},

			/**tabbedTable
			* Make tabs of the table headings and a tab page of the columns
			*/
			tabbedTable : {
				methods : {
					init : function() {
						var
							th = this.find('th'),
							linksTr = $('<tr></tr>'),
							firstTds = this.find('tr:first-child td'),
							tabs = th.find('a'),
							expandButtonTr = this.find('tr:has(td.expand)'),
							empty = function() {
								var
									self = $(this);
								return $.trim(self.text() + 'blah') == 'blah' && self.children().length == 0;
							},
							hasContents = function() {
								var
									self = $(this);
								return $.trim(self.text() + 'blah') !== 'blah' && self.children().length !== 0;
							};

						tabs.each(function(index) {
							linksTr.append(tabs.eq(index).clone().wrap('<td class="url"></td>').parent());


						});
						this.find('tbody').prepend(linksTr);
						var
							td = this.find('td');
						td
							.attr('colspan',4)
							.filter(':not(:first-child)')
							.hide()
							.end()
							.filter(empty)
							.hide();
						tabs
							.on('click.tabbed', function(e){
								var
									columnIndex = tabs.index(this) + 1,
									contentTds = td
										.filter(':not(.expand)')
										.hide()
										.filter(':nth-child(' + columnIndex + ')')
										.filter(hasContents)
										.show();
								expandButtonTr.toggle(contentTds.length > 3);
								th.removeClass('selected');
								$(this).closest('th').addClass('selected');
								e.preventDefault();
							})
							.closest('th')
							.removeClass('selected')
							.first()
							.addClass('selected');
					},
					destroy : function() {
						this.find('td')
							.show()
							.filter(':not(.expand)')
							.attr('colspan', 1);
						this.find('tbody tr:first-child').remove();
						this.find('th a').off('click.tabbed');
					}
				},
				on : {
					/*'table.financial, table.financial-long' : {
						450 : {}
					}*/
				}
			},

			/**
			 * Adjust page title width to make space for share page button
			 */
			shareThisPageButton : {
				methods : {
					init : function() {
						var
							shareThisPageTextWidth = this.find('.trigger').outerWidth(false) + 20;
						this.css('width', shareThisPageTextWidth);
						$('main > h1.general-title, main > article.general > h1:first-child, main > span > h1.general-title, main > span > article.general > h1:first-child').eq(0)
							.css({
								'width' : 'calc(100% - ' + (shareThisPageTextWidth) + 'px)',
								'display' : 'inline-block'
							});
					},
				},
				on : {
					'.sharing' : {
						768 : {},
						9999: {}
					}
				}
			},

			/**
			 * Newsroom search
			 */
			newsroomSearchCollapse : {
				methods : {
					init : function() {
						var
							self = this;
						self.find('button').on('click.addExpanded', function() {
							self.toggleClass('collapsed');
							$(this).html() == 'Open search' ? $(this).html('Close search') : $(this).html('Open search');
						});
						self.find('.news-filter select').click(function() {
							self.toggleClass('active');
						})
					},
					destroy : function() {
						var
							button = this.find('button');
						button.off('click.addExpanded');
						this.removeClass('collapsed');
						$(button).html('Open search');
					}
				},
				on : {
					'.news-filters' : {
						768 : {}
					}
				}
			},

			/**
			 * Collapse subnav
			 */
			collapseSideNav : {
				methods : {
					init : function() {
						this.on('click.collapseSideNav', function(event) {
							event.stopPropagation();
							if(event.target == this) {
								$(this).toggleClass('expanded')
									.siblings().removeClass('expanded');
							}
						});
					},
					destroy : function() {
						this.off('click.collapseSideNav');
					}
				},
				on : {
					'.site-nav li.has-subnav' : {
						9999 : {}
					}
				}
			},

			/**
			* Set height of <main>
			*/
			setMainHeight : {
				defaults : {
					mobile : true
				},
				methods : {
					init : function(options) {
						this.setMainHeight(options.mobile ? 'mobile' : 'desktop');
					},
					mobile : function() {
						var
							main = $('main'),
							mainHeight = main.height(),
							mainNav = $('.main-nav'),
							navHeight = mainNav.height(),
							setMainMaxHeight = function() {
								main.css({
									'height' : navHeight - $('body > header').height() - $('body > nav.breadcrumbs').height() - $('body > footer').height() - 34,
									'overflow': 'hidden',
									'min-height': '0'
								});
								mainNav.show();
							};

						if (!$('body').hasClass('no-sidenav')) {
							main.css({
								'min-height': '0'
							});
						}

						mainNav.find('.site-nav li').click(function(){
							if(window.location.hash == '#body' ) {
								navHeight = mainNav.height();
								setMainMaxHeight();
							}
						});

						$('.header-content .skip').click(function(){
							setMainMaxHeight();
						});

						$('.related-sites .close').click(function(){
							main
								.css('height', 'auto')
								.css('min-height', '0');
						});

						if(window.location.hash == '#body' ) {
							setMainMaxHeight();
						} else {
							mainNav.hide();
						}
					},
					desktop : function() {
						var
							mainNav = $('.main-nav'),
							nav = $('.site-nav'),
							main = $('main'),

							setMainMinHeight = function() {
								navHeight = nav.find('> ul > li.has-subnav.active > ul').height();
								main.css({
									'min-height' :  navHeight + 22,
									'height' : 'auto',
									'overflow' : 'visible'
								});
							};
						mainNav.show();
						main.css('height', 'auto');
						if (!$('body').hasClass('no-sidenav')) {
							setMainMinHeight();
						}

						$('.site-nav ul').find('li').click(function(){
							setMainMinHeight();
						});

						$('.close').click(function(){
							setTimeout(function() {
								mainNav.show();
							}, 300);
							setMainMinHeight();
						});
					}
				},
				on : {
					'nav.main-nav' : {
						992 : {
							mobile : true
						},
						9999 : {
							mobile: false
						}
					}
				}
			},
			
			/**
			 * Play a linked video in an element
			 */
			embedVideo : {
				methods : {
					init : function() {
						var
							self = this,
							clicked = false;
						this.on('click.embedVideo', function(event) {
							event.preventDefault();
							if(!clicked) {
								clicked = true;
								$.get(this.href, function(data) {
									var
										videoHTML = $(data).find('.quadia-player, .youtube-responsive-wrapper');
									if(videoHTML.length) {
										self
											.removeAttr('href')
											.find('img').after($('<div class="video-embed-container"></div>').append($('<div class="video-embed-content"></div>').append(videoHTML)));
										self.find('noscript.quadia-player').exists(enableVideoEnlarge);
									}
								});
							}
						});
					},
					destroy : function() {
						this.off('click.embedVideo');
					}
				},
				on : {
					'.spotlights h2:first-child a.video.embed' : {},
					'.spotlights h2 + h2 a.video.embed' : {
						767 : {
							'<=' : 'destroy',
							'>' : 'init'
						}
					}
				}
			},

			/**
			 * Expand and collapse messages
			 */
			collapsibleMessage : {
				defaults : {
					expandedClass : 'expanded',
					cookiePrefix : 'collapsibleMessageCollapsed'
				},
				methods : {
					init : function(options) {
						var
							self = this,
							collapsible = this.find('.more-info'),
							cookieName = options.cookiePrefix + '-' + this.data('id'),
							expanded = !!($.cookie(cookieName) || typeof $.cookie(cookieName) == 'undefined'), 
							setMaxHeight = function() {
								collapsible.css({
									'max-height' : self.hasClass(options.expandedClass) ? 
										collapsible.children().outerHeight() + 'px' :
										0
								});
							};
						collapsible.css('transition', 'none');
						this.toggleClass(options.expandedClass, expanded);
						setMaxHeight();
						// trigger reflow
						collapsible[0].offsetHeight;
						collapsible.css('transition', '');
						this.find('.alert').click(function() {
							self.toggleClass(options.expandedClass);
							$.cookie(
								cookieName,
								self.hasClass(options.expandedClass) ? options.expandedClass : '', {
									expires : 31
								}
							);
							setMaxHeight();
						});
					}
				},
				on : '.collapsible-message-container'
			},


			/**
			 * Dropbox upload
			 */
			droupload : {
				defaults : {
					appKey : cfg.dropBoxAPIKey || 'oe781djrkvjp0on',
					scriptSrc : 'https://www.dropbox.com/static/api/2/dropins.js'
				},
				methods : {
					init : function(options) {
						var
							self = this,
							updateFileName = function(fileName, display) {
								fileName = fileName.replace(/[&;<>"'\/=]/g, '');
								display
									.find('.file-name').text(fileName).end()
									.find('.file-info').attr('class', 'file-info ' + fileName.replace(/.*[\.]/, '')).end()
									.show();
							},
							promise = $('body').data(options.plugin) || (function() {
								var
									deferred = $.Deferred(function() {
										document.getElementsByTagName('head')[0].appendChild($('<script></script>')
											.load($.proxy(this.resolve))
											.attr({
												'data-app-key' : options.appKey,
												id : 'dropboxjs',
												src : options.scriptSrc
											})[0]);
									});
								$('body').data(options.plugin, deferred);
								return deferred;
							})();
						promise.done(
							function() {
								var
									hiddenField = $('<input type="hidden" name="' + self.attr('name') + '-dropbox"/>'),
									fileDisplay = $('<div class="file-wrapper"><div class="file"><span class="file-name"></span><span class="file-info"></span></div></div>').hide(),
									buttons = $('<div class="buttons"></div>');
								self
									.wrap('<div class="dropbox-wrapper"></div>')
									.hide()
									.change(function() {
										updateFileName(this.value.replace(/.*[\/\\]/, ''), fileDisplay);
										hiddenField.val('');
									})
									.after(fileDisplay)
									.after(hiddenField)
									.after(buttons
										.append($('<a href="#" class="button">' + cfg.i8n.upload + '</a>').click(function() {
											self.click();
											return false;
										}))
										.append(' ' + cfg.i8n.or + ' ')
										.append($('<a href="#" class="button">' + cfg.i8n.dropbox + '</a>').click(function(event) {
											event.preventDefault();
											Dropbox.choose({
												success : function(files) {
													var
														file = files[0];
													hiddenField
														.val(file.link)
														.trigger('change');
													updateFileName(file.name, fileDisplay);
													self.val('');
												},
												linkType : "direct"
											});
										}))
									);
								fileDisplay.css('left', buttons.width());
							}
						);
					}
				},
				on : '#disabled-vacancy-apply input[type=file]'
			}
		});

		/**
		 * Scroll to an element in the page.
		 */
		(function() {
			var
				scrollThis = $('html, body'),
				userEvents = 'scroll mousedown DOMMouseScroll mousewheel keyup',
			// Allow user to cancel scrolling
				stopScrolling = function(event) {
					if( event.which > 0 || event.type === 'mousedown' || event.type === 'mousewheel' ) {
						scrollThis.stop().unbind(userEvents, stopScrolling);
					}
				};

			$.plugin({
				name : 'scrollTo',
				methods : {
					init : function(options) {
						var
							self = this;
						scrollThis.animate({
							scrollTop : this.offset().top
						}, {
							duration : options.duration,
							easing : options.easing,
							complete : function() {
								scrollThis.unbind(userEvents, stopScrolling);
							},
							step : function(now, fx) {
								// recalibrate endpoint: may change due to
								// collapsing or expanding content
								fx.end = self.offset().top;
							}
						});
						scrollThis.bind(userEvents, stopScrolling);
					}
				},
				defaults : {
					easing : 'easeOutQuad',
					duration : 600
				},
				control : {
					creation : true
				}
			});
		})();

	})(jQuery);

	/**
	 * Initialize the page, adding behaviour to various elements.
	 */
	jQuery(function($) {
		var
			isIE9 = navigator.appVersion.indexOf("MSIE 9.") !== -1;

		$('nav .language-list').exists(function(languageList) {
			var
				isHomepage = $('#main-nav .site-nav > ul > li:first-child').hasClass('selected'),
				currentLanguage = languageList.find('.active a').attr('lang'),
				preferredLanguage = $.cookie('preferredLanguage'),
				referrerHostname = document.referrer ? $.parseURL(document.referrer).hostname : '';
			if(	isHomepage &&
				preferredLanguage && preferredLanguage !== currentLanguage && 
				document.location.hostname !== referrerHostname) {
				// redirect to the proper language home page
				var
					linkToPreferredLanguage = languageList.find('a[lang="' + preferredLanguage + '"]');
				if(linkToPreferredLanguage.length) {
					document.location.replace(linkToPreferredLanguage[0].href);
				} else {
					// force reload the homepage so the server redirects to the correct language
					document.location.reload(true);
				}
			}
			languageList.find('a').click(function() {
				$.cookie('preferredLanguage', $(this).attr('lang'), { path: '/', expires : 3650 });
			});
			var
				languageListClone = languageList.clone(true).appendTo('.header-content');
			if ( languageListClone.children('li').length > 2 ) {
				languageListClone.addClass('dropdown').dropdown();
			}
		});

		/**
		 * dotdotdot plugin for multiple line ellipsis
		 */
		$('.teaser-list h3, .news-teaser p[itemprop="description"]').dotdotdot({
			watch: 'window',
			callback: function(isTruncated) {
				$(this).toggleClass('dotdotdot', isTruncated);
			}
		});

		/**
		 * Breadcrumb added
		 */
		$('.vacancy').exists(function() {
			var lastBreadcrumb = $('.breadcrumbs div:last-child a span');
			lastBreadcrumb.contents().remove();
			var breadcrumb =  $('.vacancy > h1').text();
			lastBreadcrumb.html(breadcrumb);
		});

		/**
		 * Disclaimer script
		 */
		$('main .disclaimer').exists(function($disclaimer) {
			var
				disclaimerId = $.trim($disclaimer.find('.hide-disclaimer-type').text()),
				disclaimer = 'Disclaimer_' + disclaimerId;
			if ($.cookie(disclaimer)!==disclaimerId) {
				$disclaimer
					.siblings().hide().end().show()
					.find('#disclaimer-agree')
					.attr('href', window.location.href)
					.click(function(event) {
						$.cookie(disclaimer, disclaimerId, { path: '/' });
						// If the agree button link contains a hash, the page won't
						// reload, so force it to reload
						if(window.location.href.indexOf('#')>-1) {
							window.location.reload();
							event.preventDefault();
						}
					});
			}
		});

		$('.dropdown.hidden-block').show();

		$('body.news').exists(function(news) {
			var applyForm = $('#column-apply', news);
			var authForm = $('#column-auth', news);
			var  disableSubmit = function(form){
				$('input[type=submit]', form).attr('disabled', 'disabled');
			},enableSubmit = function(form){
				$('input[type=submit]', form).removeAttr('disabled');
			},hideError = function(elementName, form){
				$('input[name='+elementName+']', form).removeClass('error');
				$('p[data-for='+elementName+']', form).hide();
			},showError = function(elementName, form){
				$('input[name='+elementName+']', form).addClass('error');
				$('p[data-for='+elementName+']', form).show();
			};
			if(isIE9) {
				applyForm.closest('div.wide').css({display:'block'});
			}
			$('input[type=submit]', applyForm).attr('disabled', 'disabled');
			$('input[type=submit]', authForm).attr('disabled', 'disabled');
			$('input, textarea', applyForm).bind('change keyup focusout', function(event, originalEvent){

				if (!originalEvent){
					originalEvent=event;
				}

				var formError = false;

				$('input[data-required=true], textarea[data-required=true]', applyForm).each(function(){

					var element  = $(this),
						name  = $(element).attr('name'),
						value  = $(element).val(),
						isEmpty = ($.trim(value)=='');
					if (isEmpty){
						showError(name, applyForm);
						formError = true;
					}else{
						hideError(name, applyForm)
					}
				});


				$('input[data-regex], textarea[data-regex]', applyForm).each(function(){

					var element  = $(this),
						name  = $(element).attr('name'),
						value  = $(element).val(),
						regex = new RegExp($(element).attr('data-regex')),
						success = regex.test(value);
					if (success){
						hideError(name, applyForm)
					}else{
						showError(name, applyForm);
						formError = true;
					}
				});

				if (formError){
					disableSubmit(applyForm);
				}else{
					enableSubmit(applyForm);
				}
			});

			$('input, textarea', authForm).bind('change keyup focusout', function(event, originalEvent){
				if (!originalEvent){
					originalEvent=event;
				}

				var formError = false;

				$('input[data-required=true], textarea[data-required=true]', authForm).each(function(){

					var element  = $(this),
						name  = $(element).attr('name'),
						value  = $(element).val(),
						isEmpty = ($.trim(value)=='');
					if (isEmpty){
						showError(name, authForm);
						formError = true;
					}else{
						hideError(name, authForm)
					}
				});

				if (formError){
					disableSubmit(authForm);
				}else{
					enableSubmit(authForm);
				}
			});
		});

		$('#vacancy-apply').exists(function() {
			var
				emailReg= /^([\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4})?$/,
				phoneReg= /^(\+)?(\d|\s|\(|\)){10,20}$/,
				disableSubmit = function(){
					$('#vacancy-apply input[type=submit]').prop('disabled', true);
				},
				enableSubmit = function(){
					$('#vacancy-apply input[type=submit]').prop('disabled', false);
				},
				hideError = function(elementName){
					$('#vacancy-apply input[name='+elementName+']').removeClass('error');
					$('#vacancy-apply p[data-for='+elementName+']').hide();
					$('#vacancy-apply input[name=' + elementName + ']').addClass('successful');
				},
				showError = function(elementName) {
					$('#vacancy-apply input[name=' + elementName + ']').addClass('error');
					$('#vacancy-apply p[data-for=' + elementName + ']').show();
					$('#vacancy-apply input[name=' + elementName + ']').removeClass('successful');
				},
				fixRadios=function(formJSON) {
					var temp = [];
					$.each(formJSON, function(key, item){
						var
							name = item.name,
							value = item.value,
							isDupe = false;

						$.each(temp, function(tempKey, tempItem){
							var
								tempName  = tempItem.name,
								tempValue  = tempItem.value;
							if(tempName==name){
								if ($.trim(tempValue)!='' && $.trim(value)=='' ){
									isDupe=true;
								}
							}
						});
						if(!isDupe){
							temp.push(item);
						}
					});
					return temp;
				};
			if (typeof String.prototype.endsWith !== 'function') {
			    String.prototype.endsWith = function(strEnd) {
			        return this.indexOf(strEnd, this.length - strEnd.length) !== -1;
			    };
			}
			$('#vacancy-apply input[type!="file"]').on('focusout', function(event) {
				event.preventDefault();
				$(this).trigger('change', [event]);
			});
			$('#vacancy-apply').find('input[type=submit]').prop('disabled', true);
			$('body').on('change', '#vacancy-apply input', function(event, originalEvent){
				if (!originalEvent){
					originalEvent=event;
				}

				var
					form = $(this).closest('#vacancy-apply'),
					isMouseLeave = (originalEvent.type=='mouseleave'),
					element = $(this),
					elementName = element.attr('name'),
					formError = false,
					formJSON = form.serializeArray();

				formJSON = formJSON.concat(
					$('#vacancy-apply input[type=checkbox]:not(:checked)').map(function() {
						return {'name': this.name, 'value': ''}
					}).get()
				);
				formJSON = formJSON.concat(
					$('#vacancy-apply input[type=radio]:not(:checked)').map(function() {
						return {'name': this.name, 'value': ''}
					}).get()
				);
				formJSON = formJSON.concat(
					$('#vacancy-apply input[type=file]').map(function() {
						return {'name': this.name, 'value': this.value}
					}).get()
				);
				formJSON = fixRadios(formJSON);

				$.each(formJSON, function(key, item){
					var
						name  = item.name,
						value  = item.value,
						isCurrentElement = (elementName==name),
						isEmpty = ($.trim(value)=='');
					if ($.trim(name)==''){
						return;
					}
					if (isEmpty){
						if (isCurrentElement && !isMouseLeave){
							showError(name);
						}
						if(	name.endsWith('-dropbox') && 
							form.find('input[name="' + name.replace(/-dropbox$/, '') + '"]').val() !== '' ||
							form.find('input[name="' + name + '-dropbox"]').length && 
							form.find('input[name="' + name + '-dropbox"]').val() !== '' ) {
						} else {
							formError = true;
						}
					}else{
						if (name=='email'){
							if(!emailReg.test(value)){
								if (isCurrentElement && !isMouseLeave){
									showError(name);
								}
								formError = true;
							}else{
								hideError(name);
							}
						}else if(name=='phone'){
							if(!phoneReg.test(value)){
								if (isCurrentElement && !isMouseLeave){
									showError(name);
								}
								formError = true;
							}else{
								hideError(name);
							}
						}else{
							hideError(name.replace(/-dropbox$/, ''));
						}
					}
				});

				if (formError){
					disableSubmit();
				}else{
					enableSubmit();
				}
			});
		});

		// Enable or disable the search submit button depending on entered search
		// value
		$('#query').keyup(function() {
			if($.trim(this.value)=='') {
				$('input[type=submit]', this.form).attr('disabled', 'disabled');
			} else {
				if($.trim(this.value)!='') $('input[type=submit]', this.form).removeAttr('disabled');
			}
		});

		$('table.data-folding').exists(function(accordion) {
			accordion.find('thead').find('th').each(function(index){
				var $this = $(this);
				$this.prepend('<span class="arrow"></span>');
			});

			accordion.find('tbody').each(function(index){
				var $this = $(this);
				$this.data("body", index);
				$this.addClass("body-"+index);
				$this.slideUp(400);

			});
			accordion.find('thead').each(function(index){
				var $this = $(this);
				$this.data("title", index);
				$this.addClass("title-"+index);
				$this.css("cursor", "pointer");
			});
			accordion.find('thead').each(function(index){
				var $this = $(this);
				$this.click(function(){
					// hide all
					var title = $this.data("title");
					accordion.find('tbody').each(function(index){
						var $body = $(this);
						if (title == index){
							if ($body.hasClass("open")){
								$body.stop(true, true).slideUp(400).removeClass("open");

							}else{
								$body.stop(true, true).slideDown(400).addClass("open");
							}
						}else{
							$body.stop(true, true).slideUp(400).removeClass("open");
						}
					});
				});
			});
			accordion.find(".body-0").slideDown(400).addClass("open");
		});

		// TODO: replace with placeholder
		$('.search #query').blur(function() {
			$(this).siblings('.placeholder').toggle(!this.value);
		}).focus(function() {
			$(this).siblings('.placeholder').hide();
		}).siblings('.placeholder').toggle(!$('.search #query').val());
		if(!('placeholder' in document.createElement('textarea'))) {
			// @todo: This should be made into generic placeholder emulation code
			// (for all textareas and inputs)
			(function() {
				// refactor to simply do this for all textareas
				var question = $('#contact #question'),
					placeholder = question.attr('placeholder');
				question.val(placeholder);
				question
					.blur(function() {
						if(question.val()=='') question.val(placeholder);
					})
					.focus(function() {
						if(question.val()==placeholder) question.val('');
					});
			})();
		}

		window.enableVideoEnlarge = (function() {
			var
				videoIds = 0;
			return function (quadias) {
				$.getScript('https://quadia.webtvframework.com/abnamro/_app/player/tools/enlarge/enlarge.min.js', function() {
					quadias.each(function() {
						var
							id = 'video-' + videoIds;
						enlarge.iframe($(this).before('<div class="quadia-player" id="' + id + '"></div>').data().src, {
							style :'bottom_right(0,0,44px,44px)',
							container : id
						});
						$(this).parent().addClass('has-quadia-iframe');
					});
					videoIds++;
				});
			}
		})();
		$('noscript.quadia-player').exists(enableVideoEnlarge);

		$('a.rss-subscribe').click(function() {
			var link =$(this);
			link.colorbox({
				href : $(this).attr('href') + ' .content .content',
				onComplete: function(){
					var
						form = $('.filter-rss form');
					form.find('input[type=submit]').click(function(){
						form.sayt({'savenow': true});
						$.colorbox.close();
					});
					var  form = $('.filter-rss form'),
						newsroomContentTypes = form.find('input[name=newsItemType]');
					// events: checkboxes (check all and others on or off)
					form.find('input#newsItemTypeAll').click(function(){
						newsroomContentTypes.attr('checked', this.checked);
					});
					// checkboxes (check one, and all on or off)
					form.find('input[name=newsItemType]').not('#newsItemTypeAll').click(function(){
						var allCount=newsroomContentTypes.not('#newsItemTypeAll').length,
							allCountChecked=form.find('input[name=newsItemType]:checked').not('#newsItemTypeAll').length;
						if (allCount === allCountChecked){
							form.find('input#newsItemTypeAll').prop('checked', true);
						} else{
							form.find('input#newsItemTypeAll').prop('checked', false);
						}
					});
					// events: reset checks all filters (not view)
					form.find('input[type=reset]').click(function(eventObject){
						newsroomContentTypes.prop('checked', true);
					});
				}
			});
		});

		$('.aside .social-bookmark ul.social').append(
			$('<li><a class="print" href="#" title="Print">Print</a></li>')
				.click(function() { print(); })
		);

		$('.generation-next ul li').exists(function(nextGenItems) {
			var fadeDuration = 1000;
			nextGenItems.hide().eq(0).show();
			if(isIE9) {
				$('#generation-next-map area').hover(
					function(){
						$(document.body).css('cursor','pointer');
					}, function(){
						$(document.body).css('cursor','auto');
					}
				);

				$('#generation-next-map area').focus(function(){
					$(this).blur();
				});
				fadeDuration = 0;
			}
			$('#generation-next-map area').click(function(event) {
				nextGenItems.hide().filter('.' + $(this).attr('id')).show()
					.find('h2, div').hide().fadeIn(fadeDuration);
				event.preventDefault();
			});
		});

		$('#disqus_thread').exists(function(disqus) {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = 'https://' + disqus.data('shortname') + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		});

		/**
		 * Return last instance with data
		 */
		$.fn.lastData = function(key) {
			var
				value;
			this.each(function() {
				var
					possibleValue = $(this).data(key);
				if(typeof possibleValue !== 'undefined') {
					value = possibleValue;
				}
			});
			return value;
		};

		// Google Custom search
		$('.google-search-box-header, .google-search-box').exists(function(googlesearch) {
			window.__gcse = {
				parsetags : 'explicit',
				callback : function() {
					$(function() {
						googlesearch.each(function() {
							var
								self = $(this);
							google.search.cse.element.render({
								div : this.id,
								tag : self.data('tag') ? self.data('tag') : (self.is('.google-search-box-header') || self.is('.news-search') ? 'searchbox-only' : 'search'),
								attributes : {
									newWindow : false,
									resultsUrl : self.data('resultsurl') ? self.data('resultsurl') : googlesearch.lastData('resultsurl')
								}
							});
							self.find('.gsc-input').attr('placeholder', self.data('placeholdertext') ? self.data('placeholdertext') : googlesearch.lastData('placeholdertext'));
							var
								btnText = self.data('buttontext') ? self.data('buttontext') : googlesearch.lastData('buttontext');
							self.find('.gsc-search-button').attr({ 
								title : btnText, 
								value : btnText 
							});													
						});
					});
				}
			};
			(function () {
				var cx = googlesearch.lastData('account'); // Insert your own Custom Search engine ID here
				var gcse = document.createElement('script');
				gcse.type = 'text/javascript';
				gcse.async = true;
				gcse.src = (document.location.protocol.indexOf('https')!==-1 ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx;
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(gcse, s);
			})();
		});

		// Move share button next to first h1 on the page
		$('main > h1.general-title, main > article.general > h1:first-child, main > span > h1.general-title, main > span > article.general > h1:first-child').eq(0).after($('.sharing'));

		// LinkedIn ABN AMRO connections
		$('.abn-amro.linked-in.connections').exists(function(linkedin) {
			linkedin.find('.login').append('<script type="IN/Login"></script>');
			$.getScript('//platform.linkedin.com/in.js?async=true', function() {
				window.__LinkedInABNAMROConnectionsOnload = function() {
					IN.Event.onOnce(IN, 'systemReady', function() {
						if(!IN.User.isAuthorized()) {
							linkedin.find('.login').show();
						}
					});
					IN.Event.onOnce(IN, 'auth', function() {
						var
							resultList = $('<ul>'),
							imgCnt = 0,
							moreResults = true,
							params = {
								"company-name" : "ABN AMRO",
								"current-company" : true,
								"count" : 25,
								"start" : 0
							};
						function getResults() {
							IN.API.PeopleSearch()
								.fields("id", "firstName", "lastName", "pictureUrl", "siteStandardProfileRequest", "relation-to-viewer")
								.params(params)
								.result(function(result, metadata) {
									var
										people = result.people;
									$.each(people.values, function(index, person) {
										if(person.relationToViewer && person.relationToViewer.distance == 0) return true;
										if(person.pictureUrl) {
											var
												li = $('<li><a title="' + person.firstName + ' ' + person.lastName
												+ '" href="' + person.siteStandardProfileRequest.url
												+ '"><img src="' + person.pictureUrl + '" /></a></li>');
											resultList.append(li);
											imgCnt++;
											if(imgCnt % 4 == 0) li.addClass('fourth');
										}
										if(imgCnt == 12 || (params.start + index + 1) == people._total) {
											moreResults = false;
											linkedin.find('h2').after(resultList.find('a').end().fadeIn('swing'))
												.end().find('.login').css({'position' : 'absolute', top : 0}).fadeOut('swing');
											return false;
										}
									});
									if(moreResults)	{
										params.start += params.count;
										getResults();
									}
								});
						}
						getResults();
					});
				};
				IN.init({
					onLoad : '__LinkedInABNAMROConnectionsOnload',
					api_key : cfg.linkedInAPIKey,
					authorize : true,
					scope : 'r_network'
				});
			});
		});

		$('#map-continents').cssMap({
			'tooltips' : 'floating-bottom-right',
			'size' : 430,
			'onClick' : function(listItem) {
				var
					lang = $('html').attr('lang'),
					mapping = lang == 'nl' ? {
						'c1' : 'accordeon-item1',
						'c2' : 'accordeon-item3',
						'c3' : 'accordeon-item2',
						'c4' : 'accordeon-item4',
						'c5' : 'accordeon-item5',
						'c6' : 'accordeon-item6'
					} : {
						'c1' : 'accordeon-item1',
						'c2' : 'accordeon-item2',
						'c3' : 'accordeon-item3',
						'c4' : 'accordeon-item4',
						'c5' : 'accordeon-item5',
						'c6' : 'accordeon-item6'
					},
					selectedContinent = $(listItem).attr('class'),
					mappedAccordeon = mapping[selectedContinent.match(/c[0-9]{1}/g)];
				if (mappedAccordeon) $('.accordeon .head.' + mappedAccordeon).click().scrollTo({ duration: 1000, easing: 'swing' });
			}
		});

		$.fn.highest = function(checkFunction, options) {
			var
				height = 0,
				highest = this.eq(0),
				checkFunction = checkFunction || 'height';
			this.each(function() {
				var
					$this = $(this),
					currentHeight = typeof options == 'undefined' ? $this[checkFunction]() : $this[checkFunction](options);
				if(currentHeight > height) {
					highest = $this;
					height = currentHeight;
				}
			});
			return highest;
		};

		$('body > .content > .nav.tags > .button').exists(function(buttons) {
			var
				tabs = buttons.last().nextAll(),
				showTab = function(button) {
					tabs.hide().eq(buttons.index(button)).show();
				};
			buttons.attr('href', '#').click(function(event) {
				var
					self = $(this);
				event.preventDefault();
				if(self.is(':not(.checked)')) {
					buttons.removeClass('checked');
					self.addClass('checked');
					showTab(self);
				}
			});
			showTab(buttons.filter('.checked'));
		});

		// Scroll to the location of a hashlink instead of directly jumping to it
		$("main a[href^='#']").click(function(event) {
			var
				chunks = $(this).attr('href').split('#'),
				id = chunks.pop();
			event.preventDefault();
			$('#' + id).scrollTo();
		});

		$.fn.aabAutocomplete.on = {
			'#search-vacancies #keywords' : {
				gsaSource : 'autocomplete',
				autoSubmit : false,
				minLength : 2
			}
		};

		$('ul.images.download').find('li a').each(function(){
			$(this).attr('href', $(this).attr('href') + '?download=true');
		});

		// Open pin lightbox on click of pinterest share button
		$('.share .pinterest, .share-article .pinterest').find('a').click(function(event) {
			$('.pinterest-pin-script').remove();
			$('body').append('<script class="pinterest-pin-script" charset="UTF-8" src="//assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999 + '">');
			event.preventDefault();
		});

		/* Custom activelink for the period nav, consisting of year and quarter */
		$('.period.nav .year a').exists(function(years) {
			var
				getYear = function(search){
					var match = search.match(new RegExp('from=([^&]+)', 'i'));
					return match && match[1] ? match[1].split('-').pop() : null;
				},
				currentYear = getYear(location.search.substring(1));
			years.each(function() {
				var $this = $(this);
				if(currentYear && currentYear == $this.text()) {
					$this.parent().addClass('selected');
					return false;
				}
			});
		});

		$('.gateway').exists(function(gateway) {
			var
				fieldsets = gateway.find('form > fieldset'),
				accessDenied = gateway.find('.access-denied'),
				continueButton = gateway.find('input[type="submit"]'),
				checkForm = function() {
					var
						isPrecedingFilledIn = true,
						isPrecedingDisabled = false;
					continueButton.hide();
					fieldsets.each(function(index) {
						var
							fieldset = $(this),
							filledIn = fieldset.find('option:selected:not(:first-child), input:checked'),
							names = (function() {
								var
									names = [ ];
								fieldset.find('select, input, textarea').each(function() {
									if($.inArray(this.name, names) === -1) {
										names.push(this.name);
									}
								});
								return names;
							})(),
							isFilledIn = filledIn.length == names.length;
						if(isPrecedingDisabled || !isPrecedingFilledIn) {
							fieldset.addClass('disabled').attr('disabled', 'disabled').show();
							fieldset.find('> .dropdown').dropdown('disable');
							isPrecedingDisabled = true;
						} else {
							fieldset.removeClass('disabled').removeAttr('disabled').show();
							fieldset.find('> .dropdown').dropdown('enable');
							isPrecedingDisabled = false;
						}
						if(filledIn.filter('.disallowed').length && !fieldset.hasClass('disabled')) {
							accessDenied.show();
							fieldset.nextAll('fieldset').hide();
							return false;
						} else {
							accessDenied.hide();
							if(index + 1 == fieldsets.length && isFilledIn && !fieldset.hasClass('disabled')) {
								continueButton.show();
							}
						}
						isPrecedingFilledIn = isFilledIn;
					});
				};
			gateway.find('select, input[type="radio"]').change(checkForm);
			checkForm();
		});

		// Toggle abbreviated
		$('<a class= "toggle-abbreviated" href="#">'+cfg.i8n.abbreviatedInclude+'</a>')
			.insertBefore(".abbreviated")
			.click(function(e){
				e.preventDefault();
				var $this = $(this);
				$this.next().stop(true, false).slideToggle('slow', 'linear');
				$this.toggleClass('collapsed');
				$this.text($this.hasClass('collapsed') ? cfg.i8n.abbreviatedExclude : cfg.i8n.abbreviatedInclude);
			});
		$('.abbreviated').hide();

		// Financial reports
		$('body > .content > .content > .wide > .emphasis form.reports-filter > fieldset').find('input, select').change(function(){
			if($(this).attr('name') == 'year'){
				$("select[name=period]").val("") ;
				$("select[name=organization]").val("") ;
				$("input[name=IsAbbreviated]").val("false") ;
			}
			$(this).closest('form').submit();
		});

		// Contact form
		$('#contact').exists(function(form) {
			var
				hasErrorMsg = false;
			form.on('invalid', function() {
				if(!hasErrorMsg && typeof errorMsg !== 'undefined') {
					form.find('input[type=submit]').before('<p class="error">' + errorMsg + '</p>');
					hasErrorMsg = true;
				}
			});
			// Change the label of the textarea as per selected radio input
			form.find("#feedback1, #feedback2, #feedback3").click(function() {
				if($("#feedback1").is(':checked') && typeof strTextAreaLabel1 != 'undefined'){
					$("#your_question").html(strTextAreaLabel1);
				}
				else if($("#feedback2").is(':checked') && typeof strTextAreaLabel2 != 'undefined'){
					$("#your_question").html(strTextAreaLabel2);
				}
				else if($("#feedback3").is(':checked') && typeof strTextAreaLabel3 != 'undefined'){
					$("#your_question").html(strTextAreaLabel3);
				}
			});
		});

		/*
		 * Toggle related sites with related sites url
		 */
		$('.tools > li.websites > a').click(function(event) {
			event.preventDefault();
			document.location.hash = document.location.hash.indexOf('#body') === 0 ? '#' : '#body';
		});

		$('.site-nav li').mouseover(function(event) {
			event.stopPropagation();
			$(this).addClass('hover');
		}).mouseout(function() {
			$(this).removeClass('hover');
		});

		/*
		 * Cookie notice
		 */
		$('.cookie-notice').exists(function (cookieNotice) {
			if($.cookie('cookie-notice') == 1) {
				cookieNotice.hide();
			}
			cookieNotice.find('.button').click( function (event) {
				event.preventDefault();
				cookieNotice.animate({height: 0}, 500, function () {
					cookieNotice.remove();
					$.cookie('cookie-notice', 1, { path: '/', expires : 1000});
				});
			});
		});
		
		/*
		 * Add readonly attribute to datepickers
		 */
		$(".hasDatepicker").each(function() {
			this.setAttribute("readonly", "readonly");
		})
		
		/*
		 * Add active class to selected theme
		 */
		$('.filter ul.keywords a').each(function() {
			if(this.href == window.location) {
				$(this).parent().addClass('active');
			}
		});
		
		if($('base').length) {
			var
				url = document.location.href.match(/(^[^#]*)/)[0];
			$('a[href^="#"]').addClass('rewritten-for-base').each(function() {
				var
					link = $(this);
				link.attr('href', url + link.attr('href'));
			});
		}

		$('.news-filters, .vacancy-search .filters').addClass('dropdowns-added');

		$('body').on('swiperight', function(event) {
			$(event.target).closest('.carousel').find('.previous').click();
		});
		$('body').on('swipeleft', function(event) {
			$(event.target).closest('.carousel').find('.next').click();
		});
		$('body').on('.cbox .button-previous, .cbox .button-previous span, .cbox .button-closeCbox', 'click', function(event) {
			event.preventDefault();
			$.colorbox.close();
		});

		$('.application').newWindow({
			height:768,
			width:1024,
			toolbar:'no',
			location:'no',
			directories:'no',
			status:'yes',
			menubar:'no',
			scrollbars:'no',
			copyhistory:'no',
			resizable:'yes'
		});

		/*
		 * Measuring
		 */
		(function() {
			var
				track = function() {
					return typeof window.s_codeTrack == 'undefined' ? null : (window.s_codeTrack[Array.prototype.shift.call(arguments)] || $.noop).apply(this, arguments);
				};
			$('.follow li a').click(function() {
				track('social', this, 'follow', $(this).parent().attr('class'));
			});
			$('.share-article li a').click(function() {
				track('social', this, 'share', $(this).parent().attr('class'));
			});
			$(document).on('click.track', '.share li a', function() {
				track('social', this, 'share', $(this).parent().attr('class'));
			});
			$('.gateway').exists(function(gateway) {
				gateway
					.find('#country-of-residence')
					.onAndNow('change', function() {
						track('gatewayCountryOfResidence', $(this).find('option:selected').text());
					})
					.end()
					.find('#current-country')
					.onAndNow('change', function() {
						track('gatewayCountryOfPresence', $(this).find('option:selected').text());
					})
					.end()
					.onAndNow('change', function() {
						track('gatewayAccessDenied',
							$(this).find('.access-denied').is(':visible') ?
								'access-denied' :
								$(this).find('input[type=submit]').is(':visible') ?
									'access-granted' :
									'form-incomplete'
						);
					});
			});
			$('.faq .question').click(function() {
				var
					question = $(this),
					answer = question.next('.answer');
				if(!answer.is(':visible')) {
					track('faq', $.trim(question.text()));
				}
			});
			var questionForm = $('#contact:has(#yourQuestion)');
			questionForm.on('valid', function() {
				var
					subject = questionForm.find('.dropdown[data-for="1#Subject-type"] .dropdown a').text().substring(0, 18),
					yourQuestion = questionForm.find('textarea#yourQuestion').val().substring(0, 141),
					question = subject  + ';' + yourQuestion;
				track('yourQuestion', question);
			});
			$('.spotlights h2').click(function(){
				var
					self = $(this),
					trackedSpotlight = self.find('.description span:first-child').text();
				track('spotlight', trackedSpotlight);
			});
			$('.language-list li a').click(function(){
				var self = $(this),
					chosenLanguage = self.attr('lang');
				track('language', chosenLanguage);
			});
			$('.ib a').click(function(){
				track('onlineBanking');
			});
		})();

	});

// minification of r3399 of jquery.ui.aab.autocomplete.js from lib, placed here
// due to need to overwrite .on
	(function(b){b.plugin({name:"aabAutocomplete",methods:{init:function(a){a.gsaSource&&(a.source=function(c,d){b.getJSON(a.gsaSource,{q:c.term},function(a){d(b.map(a.results,function(a){return a.name}))})});this.autocomplete(a);a.autoSubmit&&this.bind("autocompleteselect",function(a,b){this.value=b.item.value;this.form.submit()})},destroy:function(){this.autocomplete("destroy")}},defaults:{gsaSource:!1,autoSubmit:!0},on:{"#query":{gsaSource:'suggest'}}})})(jQuery);

	if(jQueryConflict) {
		// Reverse noConflict()
		window.jQuery = oldJQuery;
		window.$ = old$;
	}

})();

// code for input validation of the Poll functionality
function checkdata() {
	var noOfQuestions=1;
	if ($("input.radioCheck3").length != 0) {
		noOfQuestions=3;
	}
	else if ($("input.radioCheck2").length != 0) {
		noOfQuestions=2;
	}
	var success=false;
	for(var i=1;i<=noOfQuestions;i++) {
		var n = $("input.radioCheck"+[i]+":checked").length;
		if(n>0){
			success=true;}
		else{
			success=false;
			break;}
	}
	if (success==false) {
		$("label.errorMesg").text(validateMesg);
	}
	return success;
}