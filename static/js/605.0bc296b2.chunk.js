"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[605],{274:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,c,i,u,o,s=t(5861),p=t(9439),f=t(4687),l=t.n(f),x=t(2791),d=t(7689),h=t(7596),g=t(299),v=t(168),m=t(5706),b=m.Z.ul(r||(r=(0,v.Z)(["\n  display: grid;\n  max-width: calc(100vw - 20px);\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  grid-gap: 16px;  \n  padding: 20px 0;  \n  "]))),w=m.Z.li(a||(a=(0,v.Z)(["\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    box-shadow: rgb(158, 158, 158) 0px 4px 10px 4px;\n  }\n"]))),Z=m.Z.img(c||(c=(0,v.Z)(["\n  width: 100%;\n  height: 210px;\n  object-fit: cover;\n"]))),k=m.Z.h4(i||(i=(0,v.Z)(["\n  margin: 5px 15px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1.1;\n  letter-spacing: 0.03em;\n  color: #3f51b5;\n"]))),y=m.Z.p(u||(u=(0,v.Z)(["\n  margin: 5px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.1;\n  color: #212121;\n"]))),_=m.Z.p(o||(o=(0,v.Z)(["\n  margin: 0 auto;\n  padding: 24px;\n  text-align: center;\n  color: #3f51b5;\n  font-size: 28px;\n  font-weight: 500;\n"]))),j=t.p+"static/media/no-image.12e64bc7efc49e58e460.png",S=t(184),U=function(){var n=(0,x.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(null),c=(0,p.Z)(a,2),i=c[0],u=c[1],o=(0,d.UO)().movieId;return(0,x.useEffect)((function(){u(!1);var n=function(){var n=(0,s.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.uV)(o);case 3:e=n.sent,r(e),n.next=12;break;case 7:n.prev=7,n.t0=n.catch(0),u(!0),console.error(n.t0.message),h.Am.error("Oops! Something went wrong. Please, reload the page and try again.");case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[o]),(0,S.jsx)("div",{children:!i&&t&&t.length>0?(0,S.jsx)(b,{children:t.map((function(n){var e=n.id,t=n.profile_path,r=n.name,a=n.character;return(0,S.jsxs)(w,{children:[(0,S.jsx)(Z,{src:t?"https://image.tmdb.org/t/p/w300/"+t:j,alt:r,loading:"lazy",width:"120"}),(0,S.jsx)(k,{children:r}),(0,S.jsx)(y,{children:a})]},e)}))}):(0,S.jsx)(_,{children:"We don't have information about the cast of this movie"})})}},299:function(n,e,t){t.d(e,{Hx:function(){return l},bI:function(){return s},eP:function(){return p},uV:function(){return f},wr:function(){return o}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="bb962418f002b21b8e856f495cf1a622",o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,i.Z.get("/trending/movie/day?api_key=".concat(u,"&page=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,o,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r=new URLSearchParams({api_key:u,language:"en-US",page:t,include_adult:!1,query:e}),n.next=4,i.Z.get("/search/movie?".concat(r));case 4:return a=n.sent,o=a.data,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=605.0bc296b2.chunk.js.map