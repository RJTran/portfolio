let section=document.querySelectorAll(".section");function isVisible(a){return a.getBoundingClientRect().top-window.innerHeight<-100||window.innerHeight+window.scrollY>=document.body.offsetHeight}function scanDocument(){document.querySelectorAll(".hidden").forEach((function(a){isVisible(a)&&(a.classList.remove("hidden"),a.querySelector(".inner").classList.add("slide"))}))}function throttle(a,e){var t=Date.now();return function(){t+e-Date.now()<0&&(a(),t=Date.now())}}window.addEventListener("scroll",throttle(scanDocument,50)),$("#cres").on("click",()=>{$("#tab1").hasClass("animateAppear")||($("#tab1").css("display","block"),setTimeout(()=>{$("#tab2, #tab3").css("display","none")},250),$("#aqi, #cpp").parent().removeClass("tab-active"),$("#cres").parent().addClass("tab-active"),$("#tab2, #tab3").removeClass("animateAppear").addClass("animateDisappear tab-hidden"),$("#tab1").removeClass("animateDisappear").addClass("animateAppear"))}),$("#aqi").on("click",()=>{$("#tab2").hasClass("animateAppear")||($("#tab2").css("display","block"),setTimeout(()=>{$("#tab1, #tab3").css("display","none")},250),$("#cres, #cpp").parent().removeClass("tab-active"),$("#aqi").parent().addClass("tab-active"),$("#tab1, #tab3").removeClass("animateAppear").addClass("animateDisappear tab-hidden"),$("#tab2").removeClass("animateDisappear").addClass("animateAppear"))}),$("#cpp").on("click",()=>{$("#tab3").hasClass("animateAppear")||($("#tab3").css("display","block"),setTimeout(()=>{$("#tab1, #tab2").css("display","none")},250),$("#cres, #aqi").parent().removeClass("tab-active"),$("#cpp").parent().addClass("tab-active"),$("#tab1, #tab2").removeClass("animateAppear").addClass("animateDisappear tab-hidden"),$("#tab3").removeClass("animateDisappear").addClass("animateAppear"))}),$("#work").on("click",(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var a=$(this.hash);if((a=a.length?a:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}));