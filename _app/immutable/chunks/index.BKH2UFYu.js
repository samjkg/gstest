var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,h as w,i as B,j as S,k as I,l as b,m as L,p as P,q as N,v as T,w as q,x as H}from"./scheduler.BfJEPAwo.js";let $=!1;function M(){$=!0}function O(){$=!1}function z(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function D(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(s>0&&t[n[s]].claim_order<=a?s+1:z(1,s,_=>t[n[_]].claim_order,a))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,s=Math.max(u,s)}const f=[],l=[];let c=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(f.push(t[r-1]);c>=r;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);f.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<f.length&&l[r].claim_order>=f[a].claim_order;)a++;const o=a<f.length?f[a]:null;e.insertBefore(l[r],o)}}function R(e,t){if($){for(D(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function ae(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function le(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,s=!1){G(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function E(e,t,n,i){return A(e,s=>s.nodeName===t,s=>{const f=[];for(let l=0;l<s.attributes.length;l++){const c=s.attributes[l];n[c.name]||f.push(c.name)}f.forEach(l=>s.removeAttribute(l))},()=>i(t))}function ce(e,t,n){return E(e,t,n,V)}function fe(e,t,n){return E(e,t,n,W)}function J(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return J(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function _e(e,t){return new e(t)}const m=new Set;let d;function me(){d={r:0,c:[],p:d}}function he(){d.r||h(d.c),d=d.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function $e(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function pe(e){e&&e.c()}function ye(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),b(()=>{const f=e.$$.on_mount.map(T).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),s.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(q.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,i,s,f,l=null,c=[-1]){const r=P;N(e);const a=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:s,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(u,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&s(a.ctx[u],a.ctx[u]=v)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](v),o&&Y(e,u)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){M();const u=F(t.target);a.fragment&&a.fragment.l(u),u.forEach(U)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),O(),B()}N(r)}class ge{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{W as A,fe as B,ne as C,ge as S,ue as a,F as b,ce as c,U as d,V as e,le as f,se as g,te as h,xe as i,R as j,J as k,ae as l,oe as m,re as n,$e as o,he as p,K as q,de as r,ie as s,x as t,me as u,_e as v,pe as w,ye as x,Q as y,X as z};
