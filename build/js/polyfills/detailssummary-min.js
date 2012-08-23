/*! http://mths.be/details v0.0.6 by @mathias | includes http://mths.be/noselect v1.0.3 */
(function(a,f){var e=f.fn,d,c=Object.prototype.toString.call(window.opera)=="[object Opera]",g=(function(l){var j=l.createElement("details"),i,h,k;if(!("open" in j)){return false}h=l.body||(function(){var m=l.documentElement;i=true;return m.insertBefore(l.createElement("body"),m.firstElementChild||m.firstChild)}());j.innerHTML="<summary>a</summary>b";j.style.display="block";h.appendChild(j);k=j.offsetHeight;j.open=true;k=k!=j.offsetHeight;h.removeChild(j);if(i){h.parentNode.removeChild(h)}return k}(a)),b=function(i,l,k,h){var j=typeof i.attr("open")=="string",m=j&&h||!j&&!h;if(m){i.removeClass("open").prop("open",false).attr("aria-hidden","true").triggerHandler("close.details");l.attr("aria-pressed","false");k.hide()}else{i.addClass("open").prop("open",true).attr("aria-hidden","false").triggerHandler("open.details");l.attr("aria-pressed","true");k.show()}};e.noSelect=function(){var h="none";return this.bind("selectstart dragstart mousedown",function(){return false}).css({MozUserSelect:h,msUserSelect:h,webkitUserSelect:h,userSelect:h})};if(g){d=e.details=function(){return this.each(function(j){var i=f(this),h=f("summary",i).first();i.attr({"aria-hidden":!i.prop("open"),id:"details-"+j});h.attr({role:"button","aria-pressed":i.prop("open"),"aria-controls":"details-"+j}).on("click",function(){var k=i.prop("open");i.attr("aria-hidden",!k);h.attr("aria-pressed",k);i.triggerHandler((k?"close":"open")+".details")})})};d.support=g}else{d=e.details=function(){return this.each(function(i){var h=f(this),k=f("summary",h).first(),j=h.children(":not(summary)"),l=h.contents(":not(summary)");if(!k.length){k=f("<summary>").text("Details").prependTo(h)}if(j.length!=l.length){l.filter(function(){return this.nodeType==3&&/[^ \t\n\f\r]/.test(this.data)}).wrap("<span>");j=h.children(":not(summary)")}b(h,k,j);k.attr({role:"button","aria-controls":"details-"+i}).noSelect().prop("tabIndex",0).on("click",function(){k.focus();b(h,k,j,true)}).keyup(function(m){if(32==m.keyCode||(13==m.keyCode&&!c)){m.preventDefault();k.click()}})})};d.support=g}f("details").details()}(document,jQuery));