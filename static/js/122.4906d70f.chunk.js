"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{9122:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),o=t(2791),s=t(7689),i=t(7596),p=t(299),f=t(184),h=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],h=(0,o.useState)(null),v=(0,a.Z)(h,2),l=v[0],d=v[1],g=(0,s.UO)().movieId;return(0,o.useEffect)((function(){d(!1);var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Hx)(g);case 3:n=e.sent,u(n),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),d(!0),console.error(e.t0.message),i.Am.error("Oops! Something went wrong. Please, reload the page and try again.");case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,f.jsxs)("div",{children:[l&&(0,f.jsx)("h3",{children:"Oops..."}),t.length>0?(0,f.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:"Author: ".concat(t)}),(0,f.jsx)("p",{children:r})]},n)}))}):(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})]})}},299:function(e,n,t){t.d(n,{Hx:function(){return h},bI:function(){return i},eP:function(){return p},uV:function(){return f},wr:function(){return s}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="bb962418f002b21b8e856f495cf1a622",s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.Z.get("/trending/movie/day?api_key=".concat(o,"&page=").concat(n));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,s,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,r=new URLSearchParams({api_key:o,language:"en-US",page:t,include_adult:!1,query:n}),e.next=4,c.Z.get("/search/movie?".concat(r));case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=122.4906d70f.chunk.js.map