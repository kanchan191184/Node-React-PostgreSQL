(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(4),o=n.n(s),r=(n(9),n(2)),u=n.p+"static/media/logo.6ce24c58.svg",i=(n(10),n(1));var l=function(){var t=a.a.useState(""),e=Object(r.a)(t,2),n=e[0],s=e[1],o=a.a.useState(""),l=Object(r.a)(o,2),h=l[0],f=l[1],p=a.a.useState(),j=Object(r.a)(p,2),b=j[0],d=j[1];return console.log("pgdb data"+b),a.a.useEffect((function(){fetch("http://localhost:9000/testAPI").then((function(t){return t.text()})).then((function(t){return s(t)}))}),[]),a.a.useEffect((function(){fetch("http://localhost:9000/users").then((function(t){return t.text()})).then((function(t){return f(t)}))}),[]),a.a.useEffect((function(){fetch("http://localhost:9000/pgDatabase").then((function(t){return t.text()})).then((function(t){return d(t)}))}),[]),console.log("Hello pgdbData from client"+b),Object(i.jsx)(c.Fragment,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("p",{children:n}),Object(i.jsx)("p",{children:h}),Object(i.jsx)("p",{children:b}),Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)("img",{src:u,className:"App-logo",alt:"logo"})})]})})};o.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.60a213f8.chunk.js.map