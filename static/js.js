var makeBSS=function(a,b){var c=document.querySelectorAll(a),d={},e={init:function(a,b){this.counter=0,this.el=a,this.$items=a.querySelectorAll("figure"),this.numItems=this.$items.length,b=b||{},b.auto=b.auto||!1,this.opts={auto:"undefined"==typeof b.auto?!1:b.auto,speed:"undefined"==typeof b.auto.speed?1500:b.auto.speed,pauseOnHover:"undefined"==typeof b.auto.pauseOnHover?!1:b.auto.pauseOnHover,fullScreen:"undefined"==typeof b.fullScreen?!1:b.fullScreen,swipe:"undefined"==typeof b.swipe?!1:b.swipe},this.$items[0].classList.add("bss-show"),this.injectControls(a),this.addEventListeners(a),this.opts.auto&&this.autoCycle(this.el,this.opts.speed,this.opts.pauseOnHover),this.opts.fullScreen&&this.addFullScreen(this.el),this.opts.swipe&&this.addSwipe(this.el)},showCurrent:function(a){this.counter=a>0?this.counter+1===this.numItems?0:this.counter+1:this.counter-1<0?this.numItems-1:this.counter-1,[].forEach.call(this.$items,function(a){a.classList.remove("bss-show")}),this.$items[this.counter].classList.add("bss-show")},injectControls:function(a){var b=document.createElement("span"),c=document.createElement("span"),d=document.createDocumentFragment();b.classList.add("bss-prev"),c.classList.add("bss-next"),b.innerHTML="&laquo;",c.innerHTML="&raquo;",d.appendChild(b),d.appendChild(c),a.appendChild(d)},addEventListeners:function(a){var b=this;a.querySelector(".bss-next").addEventListener("click",function(){b.showCurrent(1)},!1),a.querySelector(".bss-prev").addEventListener("click",function(){b.showCurrent(-1)},!1),a.onkeydown=function(a){a=a||window.event,37===a.keyCode?b.showCurrent(-1):39===a.keyCode&&b.showCurrent(1)}},autoCycle:function(a,b,c){var d=this,e=window.setInterval(function(){d.showCurrent(1)},b);c&&(a.addEventListener("mouseover",function(){e=clearInterval(e)},!1),a.addEventListener("mouseout",function(){e=window.setInterval(function(){d.showCurrent(1)},b)},!1))},addFullScreen:function(a){var b=this,c=document.createElement("span");c.classList.add("bss-fullscreen"),a.appendChild(c),a.querySelector(".bss-fullscreen").addEventListener("click",function(){b.toggleFullScreen(a)},!1)},addSwipe:function(a){var b=this,c=new Hammer(a);c.on("swiperight",function(){b.showCurrent(-1)}),c.on("swipeleft",function(){b.showCurrent(1)})},toggleFullScreen:function(a){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?a.requestFullscreen():document.documentElement.msRequestFullscreen?a.msRequestFullscreen():document.documentElement.mozRequestFullScreen?a.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&a.webkitRequestFullscreen(a.ALLOW_KEYBOARD_INPUT)}};[].forEach.call(c,function(a){d=Object.create(e),d.init(a,b)})};

function search(e,inputid,news_category_id){
	var n=document.getElementById(inputid).value;
	url = 'index.php?route=product/search&search='+n;
	if(news_category_id){
		var nci=document.getElementById(news_category_id).value;
		url += '&news_category_id='+nci;
	}
	
	13==e.keyCode&&(window.location.href= url)};

function searchDesk(inputid,news_category_id){
	search = document.getElementById(inputid).value;
	
	url = 'index.php?route=product/search';
	if (search) {
		url += '&search=' + encodeURIComponent(search);
	}
	if (news_category_id) {
		news_category_id = document.getElementById(news_category_id).value;
		url += '&news_category_id=' + encodeURIComponent(news_category_id);
	}
	location = url;	

}
function showMenu(){
var element=document.getElementById("mobile-menu");
element.classList.add("fixedmenu");
}
function hideMenu(){
var element=document.getElementById("mobile-menu");
element.classList.remove("fixedmenu");
}