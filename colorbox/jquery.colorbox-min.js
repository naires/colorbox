(function(u){var G,z,r,E,a,c,J,e,t,g,A,D,F,n,h,y,i,f,H,I,b,m,x,d,v,j,B,o,q;function s(){x.css({position:"absolute",width:F.width(),height:F.height(),top:F.scrollTop(),left:F.scrollLeft()})}function l(){var K;function L(){D.text(G.slideshowStop).bind("cbox_complete",function(){A=setTimeout(u.fn.colorbox.next,G.slideshowSpeed)}).bind("cbox_load",function(){clearTimeout(A)}).one("click",function(){K();u(this).removeClass("hover")});H.removeClass("cboxSlideshow_off").addClass("cboxSlideshow_on")}K=function(){clearTimeout(A);D.text(G.slideshowStart).unbind("cbox_complete cbox_load").one("click",function(){L();A=setTimeout(u.fn.colorbox.next,G.slideshowSpeed);u(this).removeClass("hover")});H.removeClass("cboxSlideshow_on").addClass("cboxSlideshow_off")};if(G.slideshow!==false&&g.length>1){if(G.slideshowAuto===true){L()}else{K()}}}function k(){if(u("#cboxInlineTemp").length>0){v.children().insertAfter("#cboxInlineTemp")}}function C(K){if(K.keyCode==37){K.preventDefault();y.click()}else{if(K.keyCode==39){K.preventDefault();h.click()}}}function w(K,L){L=L=="x"?document.documentElement.clientWidth:document.documentElement.clientHeight;return(typeof K=="string")?(K.match(/%/)?(L/100)*parseInt(K,10):parseInt(K,10)):K}function p(K){return K.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(.*))?$/i)}u(function(){u.fn.colorbox.init()});u.fn.colorbox=function(L,K){u(this).unbind("click.colorbox").bind("click.colorbox",function(N){this.blur();G=u.extend({},u.fn.colorbox.settings,L);if(K){var M=this;z=function(){u(M).each(K)}}else{z=function(){}}if(G.width){G.width=w(G.width,"x")}if(G.height){G.height=w(G.height,"y")}if(this.rel&&"nofollow"!=this.rel){g=u("a[rel='"+this.rel+"']");t=u(g).index(this)}else{g=u(this);t=0}if(H.data("open")!==true){u.event.trigger("cbox_open");n.html(G.close);x.css({opacity:G.opacity}).show();H.data("open",true);u.fn.colorbox.position(w(G.initialWidth,"x"),w(G.initialHeight,"y"),0);if(u.browser.msie&&u.browser.version<7){F.bind("resize scroll",s)}}l();u.fn.colorbox.load();if(G.overlayClose===true){x.css({cursor:"pointer"}).click(u.fn.colorbox.close)}N.preventDefault()});if(L&&L.open&&H.data("open")!==true){u(this).triggerHandler("click.colorbox")}return this.each(function(){})};u.fn.colorbox.init=function(){F=u(window);u("body").prepend(x=u('<div id="cboxOverlay" />').hide(),H=u('<div id="colorbox" />'));I=u('<div id="cboxWrapper" />').appendTo(H).append(u("<div/>").append(u('<div id="cboxTopLeft"/>'),j=u('<div id="cboxTopCenter"/>'),u('<div id="cboxTopRight"/>')),B=u('<div id="cboxMiddleLeft" />'),d=u('<div id="cboxContent" />'),o=u('<div id="cboxMiddleRight" />'),u("<div/>").append(u('<div id="cboxBottomLeft"/>'),q=u('<div id="cboxBottomCenter"/>'),u('<div id="cboxBottomRight"/>')));I.find("[id]").css({"float":"left"});d.append(v=u('<div id="cboxLoadedContent" />'),b=u('<div id="cboxLoadingOverlay" />'),m=u('<div id="cboxLoadingGraphic" />'),f=u('<div id="cboxTitle" />'),i=u('<div id="cboxCurrent" />'),D=u('<div id="cboxSlideshow" />'),h=u('<div id="cboxNext" />').click(u.fn.colorbox.next),y=u('<div id="cboxPrevious" />').click(u.fn.colorbox.prev),n=u('<div id="cboxClose" />').click(u.fn.colorbox.close));d.children().addClass("hover").mouseover(function(){u(this).addClass("hover")}).mouseout(function(){u(this).removeClass("hover")}).hide();J=j.height()+q.height()+d.outerHeight(true)-d.height();e=B.width()+o.width()+d.outerWidth(true)-d.width();c=v.outerHeight(true);a=v.outerWidth(true);H.css({"padding-bottom":J,"padding-right":e}).hide();u().bind("keydown.cbox_close",function(K){if(K.keyCode==27){K.preventDefault();n.click()}});d.children().removeClass("hover")};u.fn.colorbox.next=function(){t=t<g.length-1?t+1:0;u.fn.colorbox.load()};u.fn.colorbox.prev=function(){t=t>0?t-1:g.length-1;u.fn.colorbox.load()};u.fn.colorbox.position=function(N,M,L,O){var P=document.documentElement.clientHeight;var R=P/2-M/2;var Q=document.documentElement.clientWidth/2-N/2;if(M>P){R-=(M-P)}if(R<0){R=0}if(Q<0){Q=0}R+=F.scrollTop();Q+=F.scrollLeft();N=N-e;M=M-J;I[0].style.width=I[0].style.height="9999px";function S(T){j[0].style.width=q[0].style.width=d[0].style.width=T.style.width;m[0].style.height=b[0].style.height=d[0].style.height=B[0].style.height=o[0].style.height=T.style.height}var K=(H.width()===N&&H.height()===M)?0:L;H.dequeue().animate({height:M,width:N,top:R,left:Q},{duration:K,complete:function(){S(this);I[0].style.width=(N+e)+"px";I[0].style.height=(M+J)+"px";if(O){O()}if(u.browser.msie&&u.browser.version<7){s()}},step:function(){S(this)}})};u.fn.colorbox.dimensions=function(N){F.unbind("resize.cbox_resize");if(H.data("open")!==true){return false}var Q=G.transition=="none"?0:G.speed;v.remove();v=u(N);function K(){var S=G.width?G.width-a-e:v.width();if(r&&r<S){S=r}return S}function R(){var S=G.height?G.height-c-J:v.height();if(E&&E<S){S=E}return S}v.hide().appendTo("body").css({width:K()}).css({height:R()}).attr({id:"cboxLoadedContent"}).prependTo(d);if(u.browser.msie&&u.browser.version<7){u("select").not(u("#colorbox select")).css({visibility:"hidden"})}if(u("#cboxPhoto").length>0&&G.height){var M=(v.height()-parseInt(u("#cboxPhoto")[0].style.height,10))/2;u("#cboxPhoto").css({marginTop:(M>0?M:0)})}function L(T){var S=v.width()+a+e;var U=v.height()+c+J;u.fn.colorbox.position(S,U,T,function(){if(H.data("open")!==true){return false}d.children().show();b.hide();m.hide();D.hide();f.html(G.title?G.title:g[t].title);if(g.length>1){i.html(G.current.replace(/\{current\}/,t+1).replace(/\{total\}/,g.length));h.html(G.next);y.html(G.previous);u().unbind("keydown",C).one("keydown",C);if(G.slideshow!==false){D.show()}}else{i.add(h).add(y).hide()}u("#cboxIframe").attr("src",u("#cboxIframe").attr("src"));u.event.trigger("cbox_complete");z();if(G.transition==="fade"){H.fadeTo(Q,1)}F.bind("resize.cbox_resize",function(){u.fn.colorbox.position(S,U,0)});return true})}if(G.transition=="fade"){H.fadeTo(Q,0,function(){L(0)})}else{L(Q)}if(G.preloading!==false&&g.length>1&&p(g[t].href)){var P,O;P=t>0?g[t-1].href:g[g.length-1].href;O=t<g.length-1?g[t+1].href:g[0].href;return[u("<img />").attr("src",O),u("<img />").attr("src",P)]}return true};u.fn.colorbox.load=function(){u.event.trigger("cbox_load");b.show();m.show();n.show();k();r=G.maxWidth?w(G.maxWidth,"x")-a-e:false;E=G.maxHeight?w(G.maxHeight,"y")-c-J:false;var K=G.href?G.href:g[t].href;if(G.inline){u('<div id="cboxInlineTemp" />').hide().insertBefore(u(K)[0]);u.fn.colorbox.dimensions(u(K).wrapAll("<div />").parent())}else{if(G.iframe){u.fn.colorbox.dimensions(u("<div><iframe id='cboxIframe' name='iframe_"+new Date().getTime()+"' frameborder=0 src='"+K+"' /></div>"))}else{if(p(K)){var L=new Image();L.onload=function(){L.onload=null;if(E||r){var O=this.width;var M=this.height;var Q=0;var P=this;function N(){M+=M*Q;O+=O*Q;P.height=M;P.width=O}if(r&&O>r){Q=(r-O)/O;N()}if(E&&M>E){Q=(E-M)/M;N()}}u.fn.colorbox.dimensions(u("<div />").css({width:this.width,height:this.height}).append(u(this).css({width:this.width,height:this.height,display:"block",margin:"auto"}).attr("id","cboxPhoto")));if(g.length>1){u(this).css({cursor:"pointer"}).click(u.fn.colorbox.next)}};L.src=K}else{u("<div />").load(K,function(M,N){if(N=="success"){u.fn.colorbox.dimensions(u(this))}else{u.fn.colorbox.dimensions(u("<p>Request unsuccessful.</p>"))}})}}}};u.fn.colorbox.close=function(){clearTimeout(A);F.unbind("resize.cbox_resize");D.unbind("cbox_complete cbox_load click");k();x.css({cursor:"auto"}).fadeOut("fast").unbind("click",u.fn.colorbox.close);u().unbind("keydown",C);if(u.browser.msie&&u.browser.version<7){u("select").css({visibility:"inherit"});F.unbind("resize scroll",s)}d.children().hide();H.stop(true,false).removeClass().fadeOut("fast",function(){v.remove();H.removeData("open").css({opacity:1});u.event.trigger("cbox_closed")})};u.fn.colorbox.settings={transition:"elastic",speed:350,width:false,height:false,initialWidth:"400",initialHeight:"400",maxWidth:false,maxHeight:false,resize:true,inline:false,iframe:false,href:false,title:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,overlayClose:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow"}})(jQuery);