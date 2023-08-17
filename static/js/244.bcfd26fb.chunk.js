"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244],{6487:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a,i,o=t(168),c=t(5706),u=c.Z.div(r||(r=(0,o.Z)(["\n  max-width: 600px;\n  margin: 24px auto;\n"]))),s=c.Z.img(a||(a=(0,o.Z)(["\n  max-width: 100%;\n  object-fit: cover;\n  margin: 0 auto;\n"]))),p=c.Z.p(i||(i=(0,o.Z)(["\n  margin: 0 auto;\n  padding: 24px;\n  text-align: center;\n  color: #3f51b5;\n  font-size: 26px;\n  font-weight: 500;\n"]))),f=t(184),l=function(n){var e=n.imageURL,t=n.alt,r=n.width,a=n.message;return(0,f.jsxs)(u,{role:"alert",children:[(0,f.jsx)(s,{src:e,width:r,alt:t}),(0,f.jsx)(p,{children:a})]})}},6244:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,c,u=t(5861),s=t(9439),p=t(4687),f=t.n(p),l=t(2791),d=t(7689),g=t(7596),h=t(299),v=t(6487),m=t(6901),x=t(168),Z=t(5706),w=Z.Z.ul(r||(r=(0,x.Z)(["\n  display: grid;\n  gap: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 20px 0;\n  list-style: none;\n"]))),b=Z.Z.li(a||(a=(0,x.Z)(["\n  border-bottom: 1px solid 3f51b5;\n"]))),k=Z.Z.h4(i||(i=(0,x.Z)(["\n  margin-bottom: 15px;\n  font-size: 18px;\n  line-height: 1.1;\n  letter-spacing: 0.03em;\n  color: #3f51b5;\n"]))),y=Z.Z.p(o||(o=(0,x.Z)(["\n  font-size: 16px;\n  line-height: 1.1;\n  color: #212121;\n"]))),j=Z.Z.p(c||(c=(0,x.Z)(["\n  margin: 0 auto;\n  padding: 24px;\n  text-align: center;\n  color: #3f51b5;\n  font-size: 24px;\n  font-weight: 500;\n"]))),_=t(184),S=function(){var n=(0,l.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(null),i=(0,s.Z)(a,2),o=i[0],c=i[1],p=(0,d.UO)().movieId;return(0,l.useEffect)((function(){c(!1);var n=function(){var n=(0,u.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Hx)(p);case 3:0===(e=n.sent).length&&c(!0),r(e),n.next=14;break;case 8:n.prev=8,n.t0=n.catch(0),c(!0),r(null),console.error(n.t0.message),g.Am.error("Oops! Something went wrong. Please, reload the page and try again.");case 14:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[p]),(0,_.jsxs)("div",{children:[o&&null===t&&(0,_.jsx)(v.Z,{imageURL:m,alt:"Something went wrong",width:"600",message:"Please, reload the page and try again."}),o&&null!==t&&(0,_.jsx)(j,{children:"We don't have any reviews for this movie"}),!o&&t&&t.length>0&&(0,_.jsx)(w,{children:t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,_.jsxs)(b,{children:[(0,_.jsx)(k,{children:"Author: ".concat(t)}),(0,_.jsx)(y,{children:r})]},e)}))})]})}},299:function(n,e,t){t.d(e,{Hx:function(){return l},bI:function(){return s},eP:function(){return p},uV:function(){return f},wr:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="bb962418f002b21b8e856f495cf1a622",u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,o.Z.get("/trending/movie/day?api_key=".concat(c,"&page=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,u,s=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r=new URLSearchParams({api_key:c,language:"en-US",page:t,include_adult:!1,query:e}),n.next=4,o.Z.get("/search/movie?".concat(r));case 4:return a=n.sent,u=a.data,n.abrupt("return",u);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6901:function(n,e,t){n.exports=t.p+"static/media/error-oops.361f087c9e18dd48de3b.jpg"}}]);
//# sourceMappingURL=244.bcfd26fb.chunk.js.map