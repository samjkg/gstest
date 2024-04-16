import{r as $e,s as Me,a as Te,n as be,o as ze,e as Oe,u as qe,g as Ue,f as He}from"../chunks/scheduler.BfJEPAwo.js";import{q as ie,S as Ce,i as Be,e as E,s as C,A as H,c as N,b as y,d as g,a as B,g as ke,B as P,f as e,h as Q,j as d,l as K,t as te,k as le,m as se,C as je,w as Pe,x as Re,y as Ge,o as ye,z as Ye}from"../chunks/index.BKH2UFYu.js";function R(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function we(r,t){r.d(1),t.delete(r.key)}function xe(r,t,s,a,n,l,i,f,o,A,M,v){let b=r.length,I=l.length,D=b;const _={};for(;D--;)_[r[D].key]=D;const S=[],T=new Map,V=new Map,u=[];for(D=I;D--;){const m=v(n,l,D),L=s(m);let w=i.get(L);w?a&&u.push(()=>w.p(m,t)):(w=A(L,m),w.c()),T.set(L,S[D]=w),L in _&&V.set(L,Math.abs(D-_[L]))}const h=new Set,p=new Set;function c(m){ie(m,1),m.m(f,M),i.set(m.key,m),M=m.first,I--}for(;b&&I;){const m=S[I-1],L=r[b-1],w=m.key,j=L.key;m===L?(M=m.first,b--,I--):T.has(j)?!i.has(w)||h.has(w)?c(m):p.has(j)?b--:V.get(w)>V.get(j)?(p.add(w),c(m)):(h.add(j),b--):(o(L,i),b--)}for(;b--;){const m=r[b];T.has(m.key)||o(m,i)}for(;I;)c(S[I-1]);return $e(u),S}const Fe=""+new URL("../assets/favicon.Dxine1b7.png",import.meta.url).href;function Ee(r,t,s){const a=r.slice();return a[14]=t[s],a[16]=s,a}function Ne(r,t,s){const a=r.slice();return a[17]=t[s],a}function Ae(r,t,s){const a=r.slice();return a[14]=t[s],a[16]=s,a}function Le(r,t,s){const a=r.slice();return a[17]=t[s],a}function Ie(r){let t,s=r[17].Name+"",a,n,l,i;return{c(){t=E("a"),a=te(s),this.h()},l(f){t=N(f,"A",{href:!0,class:!0,role:!0,tabindex:!0,id:!0});var o=y(t);a=le(o,s),o.forEach(g),this.h()},h(){e(t,"href",n=r[17].Link),e(t,"class","text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"),e(t,"role","menuitem"),e(t,"tabindex","-1"),e(t,"id","menu-item-0")},m(f,o){Q(f,t,o),d(t,a),l||(i=K(t,"click",r[7]),l=!0)},p(f,o){o&2&&s!==(s=f[17].Name+"")&&se(a,s),o&2&&n!==(n=f[17].Link)&&e(t,"href",n)},d(f){f&&g(t),l=!1,i()}}}function De(r,t){let s,a,n,l=t[14].Name+"",i,f,o,A,M,v,b,I,D,_,S;function T(){return t[6](t[16])}let V=R(t[14].Sub),u=[];for(let h=0;h<V.length;h+=1)u[h]=Ie(Le(t,V,h));return{key:r,first:null,c(){s=E("div"),a=E("div"),n=E("button"),i=te(l),f=C(),o=H("svg"),A=H("path"),M=C(),v=E("div"),b=E("div");for(let h=0;h<u.length;h+=1)u[h].c();D=C(),this.h()},l(h){s=N(h,"DIV",{class:!0});var p=y(s);a=N(p,"DIV",{});var c=y(a);n=N(c,"BUTTON",{type:!0,class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var m=y(n);i=le(m,l),f=B(m),o=P(m,"svg",{class:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var L=y(o);A=P(L,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),y(A).forEach(g),L.forEach(g),m.forEach(g),c.forEach(g),M=B(p),v=N(p,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0});var w=y(v);b=N(w,"DIV",{class:!0,role:!0});var j=y(b);for(let O=0;O<u.length;O+=1)u[O].l(j);j.forEach(g),w.forEach(g),D=B(p),p.forEach(g),this.h()},h(){e(A,"fill-rule","evenodd"),e(A,"d","M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"),e(A,"clip-rule","evenodd"),e(o,"class","-mr-1 h-5 w-5 text-gray-400"),e(o,"viewBox","0 0 20 20"),e(o,"fill","currentColor"),e(o,"aria-hidden","true"),e(n,"type","button"),e(n,"class","inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"),e(n,"id","menu-button"),e(n,"aria-expanded","true"),e(n,"aria-haspopup","true"),e(b,"class","py-1"),e(b,"role","none"),v.hidden=I=!t[14].Active,e(v,"class","absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),e(v,"role","menu"),e(v,"aria-orientation","vertical"),e(v,"aria-labelledby","menu-button"),e(v,"tabindex","-1"),e(s,"class","mt-3 relative inline-block text-left"),this.first=s},m(h,p){Q(h,s,p),d(s,a),d(a,n),d(n,i),d(n,f),d(n,o),d(o,A),d(s,M),d(s,v),d(v,b);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(b,null);d(s,D),_||(S=K(n,"click",T),_=!0)},p(h,p){if(t=h,p&2&&l!==(l=t[14].Name+"")&&se(i,l),p&18){V=R(t[14].Sub);let c;for(c=0;c<V.length;c+=1){const m=Le(t,V,c);u[c]?u[c].p(m,p):(u[c]=Ie(m),u[c].c(),u[c].m(b,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=V.length}p&2&&I!==(I=!t[14].Active)&&(v.hidden=I)},d(h){h&&g(s),je(u,h),_=!1,S()}}}function Ve(r){let t,s=r[17].Name+"",a,n,l,i;return{c(){t=E("a"),a=te(s),this.h()},l(f){t=N(f,"A",{href:!0,class:!0,role:!0,tabindex:!0,id:!0});var o=y(t);a=le(o,s),o.forEach(g),this.h()},h(){e(t,"href",n=r[17].Link),e(t,"class","text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"),e(t,"role","menuitem"),e(t,"tabindex","-1"),e(t,"id","menu-item-0")},m(f,o){Q(f,t,o),d(t,a),l||(i=K(t,"click",r[9]),l=!0)},p(f,o){o&2&&s!==(s=f[17].Name+"")&&se(a,s),o&2&&n!==(n=f[17].Link)&&e(t,"href",n)},d(f){f&&g(t),l=!1,i()}}}function Se(r,t){let s,a,n,l=t[14].Name+"",i,f,o,A,M,v,b,I,D,_,S;function T(){return t[8](t[16])}let V=R(t[14].Sub),u=[];for(let h=0;h<V.length;h+=1)u[h]=Ve(Ne(t,V,h));return{key:r,first:null,c(){s=E("div"),a=E("div"),n=E("button"),i=te(l),f=C(),o=H("svg"),A=H("path"),M=C(),v=E("div"),b=E("div");for(let h=0;h<u.length;h+=1)u[h].c();D=C(),this.h()},l(h){s=N(h,"DIV",{class:!0});var p=y(s);a=N(p,"DIV",{});var c=y(a);n=N(c,"BUTTON",{type:!0,class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var m=y(n);i=le(m,l),f=B(m),o=P(m,"svg",{class:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var L=y(o);A=P(L,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),y(A).forEach(g),L.forEach(g),m.forEach(g),c.forEach(g),M=B(p),v=N(p,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0});var w=y(v);b=N(w,"DIV",{class:!0,role:!0});var j=y(b);for(let O=0;O<u.length;O+=1)u[O].l(j);j.forEach(g),w.forEach(g),D=B(p),p.forEach(g),this.h()},h(){e(A,"fill-rule","evenodd"),e(A,"d","M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"),e(A,"clip-rule","evenodd"),e(o,"class","-mr-1 h-5 w-5 text-gray-400"),e(o,"viewBox","0 0 20 20"),e(o,"fill","currentColor"),e(o,"aria-hidden","true"),e(n,"type","button"),e(n,"class","inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"),e(n,"id","menu-button"),e(n,"aria-expanded","true"),e(n,"aria-haspopup","true"),e(b,"class","py-1"),e(b,"role","none"),v.hidden=I=!t[14].Active,e(v,"class","absolute content-center z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),e(v,"role","menu"),e(v,"aria-orientation","vertical"),e(v,"aria-labelledby","menu-button"),e(v,"tabindex","-1"),e(s,"class","mt-3 relative inline-block text-left"),this.first=s},m(h,p){Q(h,s,p),d(s,a),d(a,n),d(n,i),d(n,f),d(n,o),d(o,A),d(s,M),d(s,v),d(v,b);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(b,null);d(s,D),_||(S=K(n,"click",T),_=!0)},p(h,p){if(t=h,p&2&&l!==(l=t[14].Name+"")&&se(i,l),p&18){V=R(t[14].Sub);let c;for(c=0;c<V.length;c+=1){const m=Ne(t,V,c);u[c]?u[c].p(m,p):(u[c]=Ve(m),u[c].c(),u[c].m(b,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=V.length}p&2&&I!==(I=!t[14].Active)&&(v.hidden=I)},d(h){h&&g(s),je(u,h),_=!1,S()}}}function Je(r){let t,s,a,n,l,i,f,o,A="Open main menu",M,v,b,I,D,_,S,T,V,u,h,p,c,m,L,w=[],j=new Map,O,G,re="",ae,q,Y,z=[],oe=new Map,W,ne,ce,X=R(r[1]);const ue=k=>k[16];for(let k=0;k<X.length;k+=1){let x=Ae(r,X,k),$=ue(x);j.set($,w[k]=De($,x))}let Z=R(r[1]);const de=k=>k[16];for(let k=0;k<Z.length;k+=1){let x=Ee(r,Z,k),$=de(x);oe.set($,z[k]=Se($,x))}return{c(){t=E("nav"),s=E("div"),a=E("div"),n=E("div"),l=E("button"),i=E("span"),f=C(),o=E("span"),o.textContent=A,M=C(),v=H("svg"),b=H("path"),D=C(),_=H("svg"),S=H("path"),V=C(),u=E("div"),h=E("div"),p=E("img"),m=C(),L=E("div");for(let k=0;k<w.length;k+=1)w[k].c();O=C(),G=E("div"),G.innerHTML=re,ae=C(),q=E("div"),Y=E("div");for(let k=0;k<z.length;k+=1)z[k].c();this.h()},l(k){t=N(k,"NAV",{class:!0});var x=y(t);s=N(x,"DIV",{class:!0});var $=y(s);a=N($,"DIV",{class:!0});var J=y(a);n=N(J,"DIV",{class:!0});var he=y(n);l=N(he,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var U=y(l);i=N(U,"SPAN",{class:!0}),y(i).forEach(g),f=B(U),o=N(U,"SPAN",{class:!0,"data-svelte-h":!0}),ke(o)!=="svelte-1bvqpab"&&(o.textContent=A),M=B(U),v=P(U,"svg",{class:!0,display:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,"aria-hidden":!0});var fe=y(v);b=P(fe,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),y(b).forEach(g),fe.forEach(g),D=B(U),_=P(U,"svg",{display:!0,class:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,"aria-hidden":!0});var ve=y(_);S=P(ve,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),y(S).forEach(g),ve.forEach(g),U.forEach(g),he.forEach(g),V=B(J),u=N(J,"DIV",{class:!0});var ee=y(u);h=N(ee,"DIV",{class:!0});var _e=y(h);p=N(_e,"IMG",{class:!0,src:!0,alt:!0}),_e.forEach(g),m=B(ee),L=N(ee,"DIV",{class:!0});var me=y(L);for(let F=0;F<w.length;F+=1)w[F].l(me);me.forEach(g),ee.forEach(g),O=B(J),G=N(J,"DIV",{class:!0,"data-svelte-h":!0}),ke(G)!=="svelte-1cvvy29"&&(G.innerHTML=re),J.forEach(g),$.forEach(g),ae=B(x),q=N(x,"DIV",{class:!0,id:!0});var pe=y(q);Y=N(pe,"DIV",{class:!0});var ge=y(Y);for(let F=0;F<z.length;F+=1)z[F].l(ge);ge.forEach(g),pe.forEach(g),x.forEach(g),this.h()},h(){e(i,"class","absolute -inset-0.5"),e(o,"class","sr-only"),e(b,"stroke-linecap","round"),e(b,"stroke-linejoin","round"),e(b,"d","M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"),e(v,"class","block h-6 w-6"),e(v,"display",I=r[0]?"hidden":"block"),e(v,"fill","none"),e(v,"viewBox","0 0 24 24"),e(v,"stroke-width","1.5"),e(v,"stroke","currentColor"),e(v,"aria-hidden","true"),e(S,"stroke-linecap","round"),e(S,"stroke-linejoin","round"),e(S,"d","M6 18L18 6M6 6l12 12"),e(_,"display",T=r[0]?"block":"hidden"),e(_,"class","hidden h-6 w-6"),e(_,"fill","none"),e(_,"viewBox","0 0 24 24"),e(_,"stroke-width","1.5"),e(_,"stroke","currentColor"),e(_,"aria-hidden","true"),e(l,"type","button"),e(l,"class","relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"),e(l,"aria-controls","mobile-menu"),e(l,"aria-expanded","false"),e(n,"class","absolute inset-y-0 left-0 flex items-center sm:hidden"),e(p,"class","h-12 w-auto hover:cursor-pointer"),Te(p.src,c=Fe)||e(p,"src",c),e(p,"alt","Your Company"),e(h,"class","flex flex-shrink-0 items-center"),e(L,"class","hidden sm:ml-6 sm:flex sm:space-x-8"),e(u,"class","flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"),e(G,"class","absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"),e(a,"class","relative flex h-16 justify-between"),e(s,"class","mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"),e(Y,"class","space-y-1 pb-4 pt-2"),q.hidden=W=!r[0],e(q,"class","sm:hidden"),e(q,"id","mobile-menu"),e(t,"class","bg-white shadow sticky top-0 z-50")},m(k,x){Q(k,t,x),d(t,s),d(s,a),d(a,n),d(n,l),d(l,i),d(l,f),d(l,o),d(l,M),d(l,v),d(v,b),d(l,D),d(l,_),d(_,S),d(a,V),d(a,u),d(u,h),d(h,p),d(u,m),d(u,L);for(let $=0;$<w.length;$+=1)w[$]&&w[$].m(L,null);d(a,O),d(a,G),d(t,ae),d(t,q),d(q,Y);for(let $=0;$<z.length;$+=1)z[$]&&z[$].m(Y,null);ne||(ce=[K(l,"click",r[2]),K(p,"click",r[5])],ne=!0)},p(k,[x]){x&1&&I!==(I=k[0]?"hidden":"block")&&e(v,"display",I),x&1&&T!==(T=k[0]?"block":"hidden")&&e(_,"display",T),x&26&&(X=R(k[1]),w=xe(w,x,ue,1,k,X,j,L,we,De,null,Ae)),x&26&&(Z=R(k[1]),z=xe(z,x,de,1,k,Z,oe,Y,we,Se,null,Ee)),x&1&&W!==(W=!k[0])&&(q.hidden=W)},i:be,o:be,d(k){k&&g(t);for(let x=0;x<w.length;x+=1)w[x].d();for(let x=0;x<z.length;x+=1)z[x].d();ne=!1,$e(ce)}}}function Ke(r,t,s){let a=!1;const n=()=>{s(0,a=!a),console.log("test")};let l=[{Name:"Accueil",Link:"/",Active:!1,Sub:[{Name:"Notre mission",Link:"/#mission"},{Name:"Nos services",Link:"/#accompagnements"}]},{Name:"Nos Services RSE",Link:"/team",Active:!1,Sub:[{Name:"Notre offre start-up",Link:"/services/offrestartup"},{Name:"Nos offres moyennes et grandes entreprises",Link:"/services/offremoyennegrande"},{Name:"Nos services à la demande",Link:"/services/servicealademande"}]},{Name:"Nous Contacter",Link:"/contact",Active:!1,Sub:[{Name:"Contact",Link:"/contact"}]}],i=null;const f=_=>{o(),i===_?(s(1,l[_].Active=!1,l),l[_].Active||(i=null)):(i=_,s(1,l[_].Active=!l[_].Active,l))},o=()=>{for(let _ in l)s(1,l[_].Active=!1,l)},A=()=>{o(),i=null};return ze(()=>{}),[a,l,n,f,A,()=>window.location.href="/",_=>f(_),()=>A(),_=>f(_),()=>A()]}class Qe extends Ce{constructor(t){super(),Be(this,t,Ke,Je,Me,{})}}function We(r){let t,s,a;t=new Qe({});const n=r[1].default,l=Oe(n,r,r[0],null);return{c(){Pe(t.$$.fragment),s=C(),l&&l.c()},l(i){Re(t.$$.fragment,i),s=B(i),l&&l.l(i)},m(i,f){Ge(t,i,f),Q(i,s,f),l&&l.m(i,f),a=!0},p(i,[f]){l&&l.p&&(!a||f&1)&&qe(l,n,i,i[0],a?He(n,i[0],f,null):Ue(i[0]),null)},i(i){a||(ie(t.$$.fragment,i),ie(l,i),a=!0)},o(i){ye(t.$$.fragment,i),ye(l,i),a=!1},d(i){i&&g(s),Ye(t,i),l&&l.d(i)}}}function Xe(r,t,s){let{$$slots:a={},$$scope:n}=t;return r.$$set=l=>{"$$scope"in l&&s(0,n=l.$$scope)},[n,a]}class tt extends Ce{constructor(t){super(),Be(this,t,Xe,We,Me,{})}}export{tt as component};