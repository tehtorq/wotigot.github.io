import{s as $,n as W,r as tt,o as et}from"../chunks/scheduler.kAlY8CUs.js";import{S as at,i as st,e as n,s as w,t as X,c as r,f as b,g as q,a as E,d as h,h as Z,j as a,b as lt,k as t,l as L,m as O,n as A,o as nt}from"../chunks/index.SM3ftTgZ.js";function rt(u){let f,e,s,d="Daily spend until payday?",D,p,i,P="Payday",k,o,l,S,c,y,z="Amount",F,I,g,N,V,_,G="Save",U,C,R,B,Y,H;return{c(){f=n("div"),e=n("div"),s=n("div"),s.textContent=d,D=w(),p=n("div"),i=n("label"),i.textContent=P,k=w(),o=n("div"),l=n("input"),S=w(),c=n("div"),y=n("label"),y.textContent=z,F=w(),I=n("div"),g=n("input"),N=w(),V=n("p"),_=n("button"),_.textContent=G,U=w(),C=n("p"),R=X("Daily Budget: R"),B=X(u[2]),this.h()},l(m){f=r(m,"DIV",{class:!0});var x=b(f);e=r(x,"DIV",{});var v=b(e);s=r(v,"DIV",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-1huraqf"&&(s.textContent=d),D=E(v),p=r(v,"DIV",{class:!0});var M=b(p);i=r(M,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(i)!=="svelte-vke249"&&(i.textContent=P),k=E(M),o=r(M,"DIV",{class:!0});var J=b(o);l=r(J,"INPUT",{type:!0,min:!0,max:!0,class:!0}),J.forEach(h),M.forEach(h),S=E(v),c=r(v,"DIV",{class:!0});var T=b(c);y=r(T,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(y)!=="svelte-lo1ar5"&&(y.textContent=z),F=E(T),I=r(T,"DIV",{class:!0});var K=b(I);g=r(K,"INPUT",{type:!0,class:!0}),K.forEach(h),T.forEach(h),N=E(v),V=r(v,"P",{});var Q=b(V);_=r(Q,"BUTTON",{class:!0,"data-svelte-h":!0}),q(_)!=="svelte-1hyvgkl"&&(_.textContent=G),Q.forEach(h),U=E(v),C=r(v,"P",{class:!0});var j=b(C);R=Z(j,"Daily Budget: R"),B=Z(j,u[2]),j.forEach(h),v.forEach(h),x.forEach(h),this.h()},h(){a(s,"class","text-xl font-medium text-black"),a(i,"for","email"),a(i,"class","block text-sm font-medium leading-6 text-gray-900"),a(l,"type","number"),a(l,"min","1"),a(l,"max","31"),l.required=!0,a(l,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),a(o,"class","mt-2"),a(p,"class","mt-4"),a(y,"for","email"),a(y,"class","block text-sm font-medium leading-6 text-gray-900"),a(g,"type","number"),g.required=!0,a(g,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),a(I,"class","mt-2"),a(c,"class","mt-4"),a(_,"class","border-2 my-2"),a(C,"class","text-slate-500 mt-8"),a(f,"class","p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4")},m(m,x){lt(m,f,x),t(f,e),t(e,s),t(e,D),t(e,p),t(p,i),t(p,k),t(p,o),t(o,l),L(l,u[1]),t(e,S),t(e,c),t(c,y),t(c,F),t(c,I),t(I,g),L(g,u[0]),t(e,N),t(e,V),t(V,_),t(e,U),t(e,C),t(C,R),t(C,B),Y||(H=[O(l,"input",u[4]),O(g,"input",u[5]),O(_,"click",u[3])],Y=!0)},p(m,[x]){x&2&&A(l.value)!==m[1]&&L(l,m[1]),x&1&&A(g.value)!==m[0]&&L(g,m[0]),x&4&&nt(B,m[2])},i:W,o:W,d(m){m&&h(f),Y=!1,tt(H)}}}function ot(u,f,e){let s="",d="",D="0.00";et(()=>{e(0,s=localStorage.getItem("amount")||""),e(1,d=localStorage.getItem("payday")||""),i()});function p(){localStorage.setItem("amount",s),localStorage.setItem("payday",d),i()}function i(){const o=new Date;let l=new Date(o.getFullYear(),o.getMonth(),d);l<o&&(l=new Date(o.getFullYear(),o.getMonth()+1,d));const S=Math.abs(l-o),c=Math.ceil(S/(1e3*60*60*24));s>0&&c>0?e(2,D=(s/c).toFixed(2)):e(2,D="0.00")}function P(){d=A(this.value),e(1,d)}function k(){s=A(this.value),e(0,s)}return u.$$.update=()=>{u.$$.dirty&3&&s&&d&&i()},[s,d,D,p,P,k]}class dt extends at{constructor(f){super(),st(this,f,ot,rt,$,{})}}export{dt as component};
