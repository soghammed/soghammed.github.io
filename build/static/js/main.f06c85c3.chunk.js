(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,t){e.exports=t(51)},51:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(32),l=t.n(r),c=t(7),o=t(8),s=t(10),m=t(9),d=t(11),u=t(4),p=t.n(u),v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={animationTrace:!1,firstNameAnimationSpeed:t.props.firstNameAnimationSpeed?t.props.firstNameAnimationSpeed:"slow",surenameAnimationSpeed:t.props.surenameAnimationSpeed?t.props.surenameAnimationSpeed:"slow"},t.events(),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"events",value:function(){var e=this;p()(document).ready(function(){e.animateFirstName(e.props.firstNameAnimationStyle),e.animateSurename(e.props.surenameAnimationStyle)})}},{key:"animateFirstName",value:function(e){p()(".headline-left").animate(e,this.state.firstNameAnimationSpeed)}},{key:"animateSurename",value:function(e){var a=this;p()(".headline-right").animate(e,this.state.surenameAnimationSpeed,function(){if(a.props.showArrow)if(a.props.repeatAnimation){var e=a.startHeadlineArrowAnimation();p()(".headline-arrow").hover(function(t){a.state.animationTrace&&a.stopHeadlineArrowAnimation(e)},function(){a.state.animationTrace&&(e=a.startHeadlineArrowAnimation())}),p()(".headline-arrow").on("click",function(){a.stopHeadlineArrowAnimation(e,!0),a.repositionDeveloperName()})}else setTimeout(a.animateHeadlineArrow,1100)})}},{key:"animateHeadlineArrow",value:function(){var e=p()(".headline-arrow");e.animate({fontSize:"+=20px"},150,function(){e.animate({fontSize:"-=20px"},150,function(){e.animate({fontSize:"+=20px"},150,function(){e.animate({fontSize:"-=20px"},150)})})})}},{key:"stopHeadlineArrowAnimation",value:function(e,a){clearInterval(e),a&&this.setState({animationTrace:!1})}},{key:"startHeadlineArrowAnimation",value:function(){return this.state.animationTrace||this.setState({animationTrace:!0}),setInterval(this.animateHeadlineArrow,1100)}},{key:"repositionDeveloperName",value:function(){p()(".cover-developer-name").animate({margin:"20px"},"slow"),p()(".headline-left").animate({lineHeight:"15px"},"fast"),p()(".headline").animate({fontSize:"20px"},"fast"),p()(".headline-right").animate({lineHeight:"20px"},"fast"),p()(".headline-right").animate({paddingLeft:"30px"}),p()(".headline-arrow").fadeOut("slow",function(){p()(".headline-code").fadeIn("slow")})}},{key:"render",value:function(){var e=this.props.showArrow?i.a.createElement("span",{class:"headline-arrow"},"\u203a"):"";return i.a.createElement("div",{class:"cover-developer-name"},i.a.createElement("div",{class:"headline headline-left"},"Mohammed"),i.a.createElement("div",{class:"headline headline-right"},"Hammed ",e,i.a.createElement("span",{class:"headline-code"},"</>")))}}]),a}(i.a.Component),f=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).events(),e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"events",value:function(){p()(document).ready(function(){})}},{key:"render",value:function(){return i.a.createElement("div",{class:"cover-container"},i.a.createElement("div",{class:"dim"}),i.a.createElement(v,{firstNameAnimationStyle:{lineHeight:"70px"},surenameAnimationStyle:{lineHeight:"70px",fontSize:"90px"},firstNameAnimationSpeed:"slow",surenameAnimationSpeed:"slow",repeatAnimation:!0,showArrow:!0}))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{class:"aboutme"},i.a.createElement("div",{class:"developer-about-me"},"I'm a passionate coder, looking to provide industry standard cross-platform software/web solutions aimed at enhancing humans quality of life and tackling real world issues."))}}]),a}(i.a.Component),E=t(21),g=t(33),b=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{class:"services"},i.a.createElement("h3",{class:"section-title"},"Services"),i.a.createElement("div",{class:"row services-list-containe",r:!0},i.a.createElement("div",{class:"col col-sm-12 col-md-4 col-lg-4 service service-one"},i.a.createElement("div",{class:"flip-card"},i.a.createElement("div",{class:"flip-card-inner"},i.a.createElement("div",{class:"flip-card-front"},i.a.createElement("div",{class:"flip-card-front-title"},"Web Development"),i.a.createElement("div",{class:"flip-card-front-content"},i.a.createElement(g.a,{size:80}),i.a.createElement(E.e,{size:80}))),i.a.createElement("div",{class:"flip-card-back"},i.a.createElement("div",{class:"flip-card-back-title"},"Web Development"),i.a.createElement("div",{class:"service-desc"},"Web Development from idea to final product in 4 weeks using the latest cutting edge tech."))))),i.a.createElement("div",{class:"col col-sm-12 col-md-4 col-lg-4 service service-two"},i.a.createElement("div",{class:"flip-card"},i.a.createElement("div",{class:"flip-card-inner"},i.a.createElement("div",{class:"flip-card-front"},i.a.createElement("div",{class:"flip-card-front-title"},"Application Development"),i.a.createElement("div",{class:"flip-card-front-content"},i.a.createElement(E.a,{size:80}),i.a.createElement(E.d,{size:80}))),i.a.createElement("div",{class:"flip-card-back"},i.a.createElement("div",{class:"flip-card-back-title"},"Application Development"),i.a.createElement("div",{class:"service-desc"},"Application Development scoping all platfroms from desktop to mobile devices."))))),i.a.createElement("div",{class:"col col-sm-12 col-md-4 col-lg-4 service service-three"},i.a.createElement("div",{class:"flip-card"},i.a.createElement("div",{class:"flip-card-inner"},i.a.createElement("div",{class:"flip-card-front"},i.a.createElement("div",{class:"flip-card-front-title"},"IT Support"),i.a.createElement("div",{class:"flip-card-front-content"},i.a.createElement(E.c,{size:80}),i.a.createElement(E.b,{size:80}))),i.a.createElement("div",{class:"flip-card-back"},i.a.createElement("div",{class:"flip-card-back-title"},"IT Support"),i.a.createElement("div",{class:"service-desc"},"Maintenance & consultation services with 24 hour support available at your fingertips, contact for details.")))))))}}]),a}(n.Component),w=t(12),j=t(22),A=function(e){function a(e){var t;return Object(c.a)(this,a),t=Object(s.a)(this,Object(m.a)(a).call(this)),p()(document).ready(function(){}),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=i.a.createElement(w.a,{prevIcon:i.a.createElement(j.b,{color:"lightblue",size:30}),nextIcon:i.a.createElement(j.c,{color:"lightblue",size:30})},i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/OnboardingSurvey.png",alt:"First slide"})),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/OnboardingSurvey1.png",alt:"First slide"})),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/OnboardingSurvey2.png",alt:"First slide"})),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/OnboardingSurvey3.png",alt:"First slide"})),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/ticketLightMode.jpg",alt:"First slide"}),i.a.createElement(w.a.Caption,null,i.a.createElement("h3",null,"Ticket System (Light mode)"),i.a.createElement("p",null,"React + Laravel & MYSQL."))),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/vueSample.png",alt:"VueApp"}),i.a.createElement(w.a.Caption,null,i.a.createElement("h3",null),i.a.createElement("p",null,"Vue + Node.js & MYSQL."))),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/reactnative2.png",alt:"ReactNativeApp"}),i.a.createElement(w.a.Caption,null,i.a.createElement("h3",null,"Community App"),i.a.createElement("p",null,"React Native, redux, laravel & MYSQL"))),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/ticketDarkMode.jpg",alt:"TicketSystem"}),i.a.createElement(w.a.Caption,null,i.a.createElement("h3",null,"Ticket System (Dark mode)"),i.a.createElement("p",null,"React + Laravel & MYSQL"))),i.a.createElement(w.a.Item,null,i.a.createElement("img",{className:"d-block h-500",src:"images/projects/reactnative.png",alt:"ReactNativeApp"}),i.a.createElement(w.a.Caption,null,i.a.createElement("h3",null,"Cash Flow"),i.a.createElement("p",null,"React Native, redux, Laravel & MYSQL"))));i.a.createElement("div",{class:"carousel"},i.a.createElement("a",{class:"carousel-item",href:"#one!"},i.a.createElement("img",{src:"images/projects/ticketLightMode.jpg"})),i.a.createElement("a",{class:"carousel-item",href:"#two!"},i.a.createElement("img",{src:"images/projects/vueSample.png"})),i.a.createElement("a",{class:"carousel-item",href:"#three!"},i.a.createElement("img",{src:"images/projects/reactnative2.png"})),i.a.createElement("a",{class:"carousel-item",href:"#four!"},i.a.createElement("img",{src:"images/projects/ticketDarkMode.jpg"})),i.a.createElement("a",{class:"carousel-item",href:"#five!"},i.a.createElement("img",{src:"images/projects/reactnative.png"})));return i.a.createElement("section",{class:"projects"},i.a.createElement("h3",{class:"section-title"},"Projects"),e)}}]),a}(n.Component),k=(i.a.Component,t(13)),O=t(17),y=t(26),S=t(24),N=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{class:"contactme"},i.a.createElement("h3",{class:"section-title"},"Contact Me"),i.a.createElement(k.a,null,i.a.createElement(k.a.Group,{as:y.a,controlId:"formHorizontalName"},i.a.createElement(k.a.Label,{column:!0,sm:2},"Name"),i.a.createElement(O.a,{sm:10},i.a.createElement(k.a.Control,{type:"text"}))),i.a.createElement(k.a.Row,null,i.a.createElement(O.a,{sm:6,md:6,lg:6},i.a.createElement(k.a.Check,{type:"radio",label:"I'm an Individual",name:"formHorizontalRadios",id:"formHorizontalRadios1"})),i.a.createElement(O.a,{sm:6,md:6,lg:6},i.a.createElement(k.a.Check,{type:"radio",label:"I'm an Organization/Company",name:"formHorizontalRadios",id:"formHorizontalRadios2"}))),i.a.createElement("br",null),i.a.createElement(k.a.Row,{as:y.a,controlId:"formHorizontalMessage"},i.a.createElement(k.a.Label,{column:!0,sm:1},"Message")),i.a.createElement(k.a.Row,null,i.a.createElement(O.a,{sm:12},i.a.createElement(k.a.Control,{as:"textarea",rows:"10"}))),i.a.createElement("br",null),i.a.createElement(S.a,{variant:"outline-light"},"Send")))}}]),a}(i.a.Component),I=(i.a.Component,function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{class:"chat-with-me-widget"},i.a.createElement(j.a,{size:this.props.size,color:this.props.color}))}}]),a}(i.a.Component)),H=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).state={current_view:"scover-page",showArrow:!0,headlineAnimationTrace:!0},e.events(),e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"events",value:function(){var e=this;p()(document).ready(function(){e.activateNavLinks(),e.animateFirstName(),e.animateSurename()})}},{key:"activateNavLinks",value:function(){console.log(p()(".nav-bar li")),p()(".nav-bar li").on("click",function(e){var a=e.target.className.split("-")[1];window.scrollMeTo(0,a)})}},{key:"animateFirstName",value:function(e){p()(".headline-left").animate({lineHeight:"70px"},"slow")}},{key:"animateSurename",value:function(e){var a=this;p()(".headline-right").animate({lineHeight:"70px",fontSize:"90px"},"slow",function(){if(a.state.showArrow){var e=a.startHeadlineArrowAnimation();p()(".headline-arrow").hover(function(t){a.state.headlineAnimationTrace&&a.stopHeadlineArrowAnimation(e)},function(){a.state.headlineAnimationTrace&&(e=a.startHeadlineArrowAnimation())}),p()(".headline-arrow").on("click",function(){a.stopHeadlineArrowAnimation(e,!0),a.repositionDeveloperName()})}})}},{key:"animateHeadlineArrow",value:function(){var e=p()(".headline-arrow");e.animate({fontSize:"+=20px"},150,function(){e.animate({fontSize:"-=20px"},150,function(){e.animate({fontSize:"+=20px"},150,function(){e.animate({fontSize:"-=20px"},150)})})})}},{key:"stopHeadlineArrowAnimation",value:function(e,a){clearInterval(e),a&&this.setState({animationTrace:!1})}},{key:"startHeadlineArrowAnimation",value:function(){return this.state.animationTrace||this.setState({animationTrace:!0}),setInterval(this.animateHeadlineArrow,1100)}},{key:"repositionDeveloperName",value:function(){var e=this;p()(".developer-name").animate({margin:"20px"},"slow"),p()(".developer-name-container").animate({width:"auto",height:"auto",zIndex:2},"slow"),p()(".headline-left").animate({lineHeight:"15px"},"fast"),p()(".headline").animate({fontSize:"20px"},"fast"),p()(".headline-right").animate({lineHeight:"20px",paddingLeft:"30px"},"fast"),p()(".headline-arrow").fadeOut("slow",function(){p()(".headline-code").fadeIn("slow",e.displayPortfolio)})}},{key:"displayPortfolio",value:function(){p()(".portfolio").animate({opacity:1},"slow")}},{key:"render",value:function(){var e=this.state.showArrow?i.a.createElement("span",{class:"headline-arrow"},"\u203a"):"",a=i.a.createElement(n.Fragment,null,i.a.createElement("div",{class:"homepage-container"},i.a.createElement("div",{class:"dim"}),i.a.createElement("div",{class:"developer-name-container"},i.a.createElement("div",{class:"developer-name"},i.a.createElement("div",{class:"headline headline-left"},"Mohammed"),i.a.createElement("div",{class:"headline headline-right"},"Hammed ",e,i.a.createElement("span",{class:"headline-code"},"</>")))),i.a.createElement("div",{class:"portfolio"},i.a.createElement("ul",{class:"nav-bar"},i.a.createElement("li",{class:"nav-aboutme"},"About Me"),i.a.createElement("li",{class:"nav-projects"},"Projects"),i.a.createElement("li",{class:"nav-services"},"Services"),i.a.createElement("li",{class:"nav-contactme"},"Contact Me")),i.a.createElement(h,null),i.a.createElement(A,null),i.a.createElement(b,null),i.a.createElement(N,null),i.a.createElement(I,{size:40,color:"white"})))),t="cover-page"===this.state.current_view?i.a.createElement(f,null):a;return i.a.createElement(n.Fragment,null,t)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(48);var x=t(16),z=t(35),T=t(37),C=t(20),L={isLoading:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;switch((arguments.length>1?arguments[1]:void 0).type){case"UI_START_LOADING":return Object(C.a)({},e,{isLoading:!0});case"UI_STOP_LOADING":return Object(C.a)({},e,{isLoading:!1});default:return e}},D={message:null,status:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_NOTIFICATION":return Object(C.a)({},e,{status:a.status,message:a.message});case"UNSET_NOTIFICATION":return Object(C.a)({},e,{status:0,message:null});default:return e}},F=Object(x.combineReducers)({ui:M,notifications:R}),_=Object(z.composeWithDevTools)({name:"Redux",realtime:!0,trace:!0,traceLimit:25}),W=function(){return Object(x.createStore)(F,_(Object(x.applyMiddleware)(T.a)))},P=t(38);document.getElementById("root")&&l.a.render(i.a.createElement(P.a,{store:W()},i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.f06c85c3.chunk.js.map