import{s as ft,e as r,a as D,t as Z,h as ht,c as d,f as h,b as w,j as k,g as q,d as K,k as s,l as e,i as O,m as H,o as at,p as R,q as mt,n as dt,r as pt,u as vt}from"../chunks/scheduler.bxoOVpJS.js";import{S as gt,i as _t}from"../chunks/index.7me9d-2N.js";function ut(o){let a,i,t;return{c(){a=r("div"),i=Z(o[3]),t=Z(" days to go"),this.h()},l(l){a=d(l,"DIV",{class:!0});var c=k(a);i=K(c,o[3]),t=K(c," days to go"),c.forEach(h),this.h()},h(){s(a,"class","text-sm font-medium text-black mt-4 text-center")},m(l,c){O(l,a,c),e(a,i),e(a,t)},p(l,c){c&8&&mt(i,l[3])},d(l){l&&h(a)}}}function ct(o){let a,i="PAYDAY!!!";return{c(){a=r("div"),a.textContent=i,this.h()},l(t){a=d(t,"DIV",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-bfc7fl"&&(a.textContent=i),this.h()},h(){s(a,"class","text-sm font-medium text-black mt-4 text-center")},m(t,l){O(t,a,l)},d(t){t&&h(a)}}}function yt(o){let a,i,t,l,c='<span class="mx-auto italic leading-8 text-white text-6xl font-comic-sans drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">wotigot</span>',T,C,n,I,B="Daily spend until payday?",_,v,y,L="Payday",G,M,g,J,E,V,lt="Amount left",Q,P,x,W,A,X,N,$,F,Y,S,st="Save",tt,nt,m=(o[3]||0)>0&&ut(o),f=o[3]===0&&ct();return{c(){a=r("link"),i=D(),t=r("div"),l=r("div"),l.innerHTML=c,T=D(),C=r("div"),n=r("div"),I=r("div"),I.textContent=B,_=D(),v=r("div"),y=r("label"),y.textContent=L,G=D(),M=r("div"),g=r("input"),J=D(),E=r("div"),V=r("label"),V.textContent=lt,Q=D(),P=r("div"),x=r("input"),W=D(),A=r("div"),X=Z("Daily Budget: "),N=Z(o[2]),$=D(),m&&m.c(),F=D(),f&&f.c(),Y=D(),S=r("button"),S.textContent=st,this.h()},l(u){const b=ht("svelte-cpyz3c",document.head);a=d(b,"LINK",{rel:!0,href:!0}),b.forEach(h),i=w(u),t=d(u,"DIV",{class:!0});var z=k(t);l=d(z,"DIV",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-1vc643z"&&(l.innerHTML=c),T=w(z),C=d(z,"DIV",{class:!0});var it=k(C);n=d(it,"DIV",{class:!0});var p=k(n);I=d(p,"DIV",{class:!0,"data-svelte-h":!0}),q(I)!=="svelte-221pzc"&&(I.textContent=B),_=w(p),v=d(p,"DIV",{class:!0});var U=k(v);y=d(U,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(y)!=="svelte-vke249"&&(y.textContent=L),G=w(U),M=d(U,"DIV",{class:!0});var ot=k(M);g=d(ot,"INPUT",{type:!0,min:!0,max:!0,class:!0}),ot.forEach(h),U.forEach(h),J=w(p),E=d(p,"DIV",{class:!0});var j=k(E);V=d(j,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(V)!=="svelte-1q8sy78"&&(V.textContent=lt),Q=w(j),P=d(j,"DIV",{class:!0});var rt=k(P);x=d(rt,"INPUT",{type:!0,class:!0}),rt.forEach(h),j.forEach(h),W=w(p),A=d(p,"DIV",{class:!0});var et=k(A);X=K(et,"Daily Budget: "),N=K(et,o[2]),et.forEach(h),$=w(p),m&&m.l(p),F=w(p),f&&f.l(p),Y=w(p),S=d(p,"BUTTON",{class:!0,"data-svelte-h":!0}),q(S)!=="svelte-1gpl9m4"&&(S.textContent=st),p.forEach(h),it.forEach(h),z.forEach(h),this.h()},h(){s(a,"rel","manifest"),s(a,"href","/wotigot-manifest.json"),s(l,"class","w-100 text-center p-8 rotate-6 transition ease-in-out delay-150 hover:-rotate-6"),s(I,"class","text-xl font-medium text-black mt-4 mb-7"),s(y,"for","email"),s(y,"class","block text-sm font-medium leading-6 text-gray-900"),s(g,"type","number"),s(g,"min","1"),s(g,"max","31"),g.required=!0,s(g,"class","block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-md"),s(M,"class","mt-2"),s(v,"class","mt-4"),s(V,"for","email"),s(V,"class","block text-sm font-medium leading-6 text-gray-900"),s(x,"type","number"),x.required=!0,s(x,"class","block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-md"),s(P,"class","mt-2"),s(E,"class","mt-4"),s(A,"class","text-lg font-medium text-black mt-8 text-center"),s(S,"class","border-0 my-6 p-4 w-full bg-white rounded-xl drop-shadow-md"),s(n,"class","mx-auto"),s(C,"class","p-6 max-w-sm mx-auto bg-white/70 rounded-xl shadow-lg flex items-center space-x-4 border-2"),s(t,"class","w-screen min-h-screen bg-gradient-to-r from-blue-400 to-red-400 p-8 select-none")},m(u,b){e(document.head,a),O(u,i,b),O(u,t,b),e(t,l),e(t,T),e(t,C),e(C,n),e(n,I),e(n,_),e(n,v),e(v,y),e(v,G),e(v,M),e(M,g),H(g,o[1]),e(n,J),e(n,E),e(E,V),e(E,Q),e(E,P),e(P,x),H(x,o[0]),e(n,W),e(n,A),e(A,X),e(A,N),e(n,$),m&&m.m(n,null),e(n,F),f&&f.m(n,null),e(n,Y),e(n,S),tt||(nt=[at(g,"input",o[5]),at(x,"input",o[6]),at(S,"click",o[4])],tt=!0)},p(u,[b]){b&2&&R(g.value)!==u[1]&&H(g,u[1]),b&1&&R(x.value)!==u[0]&&H(x,u[0]),b&4&&mt(N,u[2]),(u[3]||0)>0?m?m.p(u,b):(m=ut(u),m.c(),m.m(n,F)):m&&(m.d(1),m=null),u[3]===0?f||(f=ct(),f.c(),f.m(n,Y)):f&&(f.d(1),f=null)},i:dt,o:dt,d(u){u&&(h(i),h(t)),h(a),m&&m.d(),f&&f.d(),tt=!1,pt(nt)}}}function xt(o,a,i){let t="",l="",c="0.00",T=null;vt(()=>{i(0,t=localStorage.getItem("amount")||""),i(1,l=localStorage.getItem("payday")||""),n()});function C(){localStorage.setItem("amount",t),localStorage.setItem("payday",l),n()}function n(){const _=new Date;let v=new Date(_.getFullYear(),_.getMonth(),l);v<_&&(v=new Date(_.getFullYear(),_.getMonth()+1,l));const y=Math.abs(v-_),L=Math.ceil(y/(1e3*60*60*24));t>0&&L>0?(i(3,T=L),i(2,c=(t/L).toFixed(2))):i(2,c="0.00"),console.log(T),i(2,c=new Intl.NumberFormat("en-ZA",{style:"currency",currency:"ZAR"}).format(c))}function I(){l=R(this.value),i(1,l)}function B(){t=R(this.value),i(0,t)}return o.$$.update=()=>{o.$$.dirty&3&&t&&l&&n()},[t,l,c,T,C,I,B]}class wt extends gt{constructor(a){super(),_t(this,a,xt,yt,ft,{})}}export{wt as component};
