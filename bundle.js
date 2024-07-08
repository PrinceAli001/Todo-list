(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>C});var d=n(601),i=n.n(d),a=n(314),r=n.n(a),o=n(417),s=n.n(o),l=new URL(n(421),n.b),p=new URL(n(552),n.b),c=new URL(n(93),n.b),u=new URL(n(476),n.b),m=r()(i()),h=s()(l),f=s()(p),x=s()(c),b=s()(u);m.push([e.id,`*{\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    box-sizing: border-box;\n}\n@font-face{\n    font-family: Dancing-Script;\n    src: url(${h});\n}\n@font-face {\n    font-family: Caveat;\n    src: url(${f});\n}\nbody{\n    background-image: url(${x});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\nimg{\n    width: 30px;\n    height: 30px;\n}\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nheader img{\n    width: 60px;\n    height: 60px;\n    text-align: center;\n}\nheader #first-span{\n    text-align: center;\n    font-size: 3.5rem;\n    margin: 20px 0 20px 10px;\n    font-family: Dancing-Script;\n}\nheader #second-span{\n    text-align: center;\n    font-size: 3.5rem;\n    margin: 20px 20px 20px 0;\n    font-family: Dancing-Script;\n    color: #22c55e;\n}\n#content{\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 20px;\n}\n#content > .todo-bg{\n    border: 1px solid ;\n    width: 300px;\n    height: 300px;\n    display: flex;\n    padding: 2px;\n    border-radius: 10px;\n    flex-direction: column;\n    background-image: url(${b});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n#svg-div,.sidebar,.first-sidebar{\n    display: none;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: flex-end;\n    gap: 10px;\n    margin-top: 36%;\n    background-color: rgba(0, 0, 0, 0.4);\n    height: 85px;\n    padding: 2px 2px 5px 2px;\n    width: fit-content;\n    margin-right: auto;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n}\n.sidebar{\n    margin-top: 31%;\n    height: 120px;\n}\n.close-and-edit{\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n}\n.close-and-edit img{\n    width: 22px;\n    height: 22px;\n}\n#content > div .title{\n    font-size: 1.5rem;\n    text-align: center;\n    margin-top: auto;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #ffffff;\n    border-top-left-radius: 35px;\n    border-top-right-radius: 35px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-left: 0;\n}\n#content #new-project,#content .new-project{\n    border: 1px solid #000000;\n    width: fit-content;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    background: none;\n}\n#content #new-project{\n    width: 80px;\n    align-self: center;\n}\n#content .back-div{\n    background: none;\n    flex-direction: row;\n    align-items: center;\n    height: 40px;\n    width: fit-content;\n    margin-bottom: 40px;\n}\n#content fieldset{\n    padding: 5px;\n    width: fit-content;\n    height: fit-content;\n    margin: 0 auto 0 auto;\n    background-image: linear-gradient(180deg,rgba(255,255,255,0.4),#0000ff,#0000ff);\n}\n#content .task-div{\n    background-color: #ffffff;\n    display: flex;\n    align-items: center;\n    flex: 2;\n    height: 90px;\n    padding: 0 10px 0 10px;\n    gap: 10px;\n    border-radius: 10px;\n    border-left: 10px solid #22c55e;\n    margin-left: 15px;\n}\n#content .task-div > img{\n    width: 25px;\n    height: 25px;\n}\nselect{\n    width: 60%;\n    height: 37px;\n    font-size: 1.3rem;\n    margin-bottom: 5px;\n}\ninput,textarea{\n    border-radius: 12px;\n    padding-left: 12px;\n    font-size: 1.3rem;\n    border: 1px solid #c0c0c0;\n    outline: #c0c0c0;\n}\ninput{\n    margin-bottom: 20px;\n    height: 37px;\n    width: 260px;\n}\ninput:focus{\n    border: 2px solid #000000;\n    outline: #000000;\n}\ntextarea:focus{\n    border: 2px solid #000000;\n    outline: #000000;\n}\n.save-btn{\n    margin: 5px auto 5px auto;\n    padding: 10px 30px 10px 30px;\n    color: #0000ff;\n    background-color: #ffffff;\n    border: 1px solid #ffffff;\n    font-size: 1.1rem;\n}\n.save-btn:active{\n    color: #ffffff;\n    background: none;\n}\ndialog{\n    margin: auto;\n    height: fit-content;\n    width: 285px;\n    padding: 10px 11px 2px 11px;\n    outline: none;\n    border-left: none;\n    border-right: none;\n    border-top: 10px solid #00008b;\n    border-bottom: 10px solid #00008b;\n    border-top-left-radius: 25px;\n    border-top-right-radius: 25px;\n    border-bottom-left-radius: 25px;\n    border-bottom-right-radius: 25px;\n}\nlabel{\n    font-size: 1.4rem;\n}\nbutton{\n    display: block;\n    padding: 10px 20px;\n    border: 1px solid #0000ff;\n    background-color: #ffffff;\n    color: #0000ff;\n    margin: 5px auto;\n    border-radius: 15px;\n    font-size: 1.2rem;\n}\n.para{\n    font-size: 1.7rem;\n    margin: 10px 0 10px 0;\n}\n.main-container{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    max-width: 1365px;\n    margin: 0 5% 50px 5%;\n}`,""]);const C=m},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",d=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),d&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),d&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,d,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(d)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);d&&r[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),t.push(p))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,d=0;d<t.length;d++)if(t[d].identifier===e){n=d;break}return n}function d(e,d){for(var a={},r=[],o=0;o<e.length;o++){var s=e[o],l=d.base?s[0]+d.base:s[0],p=a[l]||0,c="".concat(l," ").concat(p);a[l]=p+1;var u=n(c),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,d);d.byIndex=o,t.splice(o,0,{identifier:c,updater:h,references:1})}r.push(c)}return r}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=d(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var o=n(a[r]);t[o].references--}for(var s=d(e,i),l=0;l<a.length;l++){var p=n(a[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var d=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var d="";n.supports&&(d+="@supports (".concat(n.supports,") {")),n.media&&(d+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(d+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),d+=n.css,i&&(d+="}"),n.media&&(d+="}"),n.supports&&(d+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(d+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(d,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},552:(e,t,n)=>{e.exports=n.p+"31f0a02d84d42627c894.ttf"},421:(e,t,n)=>{e.exports=n.p+"d02a1ee17643667e9808.ttf"},93:(e,t,n)=>{e.exports=n.p+"22bd8f9e1208339345a4.jpeg"},476:(e,t,n)=>{e.exports=n.p+"43db35938502ca3e2115.jpg"}},t={};function n(d){var i=t[d];if(void 0!==i)return i.exports;var a=t[d]={id:d,exports:{}};return e[d](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var d=t.getElementsByTagName("script");if(d.length)for(var i=d.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=d[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),d=n(825),i=n.n(d),a=n(659),r=n.n(a),o=n(56),s=n.n(o),l=n(540),p=n.n(l),c=n(113),u=n.n(c),m=n(208),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f=n.p+"2e10368decb8abde955d.gif";function x(e,t,n,d,i){return{projectTitle:e,projectdescription:t,taskInput:n,taskDuedate:d,projectPriority:i}}const b=n.p+"08008b2c18303475d0f2.svg",C=n.p+"e10837f7ea7913e09ef1.svg",v=n.p+"8b3455d717d5c885f9af.svg",y=n.p+"bde675c38d54979f589e.svg",g=n.p+"8d317290131028fe10cf.svg";!function(){let e=document.querySelector("header"),t=document.createElement("img"),n=document.querySelector("#first-span"),d=document.querySelector("#second-span"),i=document.querySelector("#content"),a=document.querySelector("#new-project"),r=document.querySelector("#default-project"),o=document.querySelector("#default-title"),s=document.querySelector("#svg-div"),l=document.createElement("img"),p=document.createElement("img"),c=document.createElement("dialog"),u=document.createElement("div");const m=document.createElement("img"),h=document.createElement("img");let E=document.createElement("img"),k=document.createElement("label"),L=document.createElement("input"),T=document.createElement("label"),A=document.createElement("textarea"),j=document.createElement("button"),w=document.createElement("button"),$=document.createElement("button"),O=document.createElement("button"),S=document.createElement("button"),I=document.createElement("button"),M=document.createElement("p"),D=document.createElement("p"),z=document.createElement("p"),N=document.createElement("p"),P=document.createElement("p"),U=document.createElement("div"),q=document.createElement("img"),J=document.createElement("span"),R=document.createElement("fieldset"),_=document.createElement("legend"),F=document.createElement("p"),B=document.createElement("div"),H=document.createElement("fieldset"),Q=document.createElement("legend"),G=document.createElement("textarea"),K=document.createElement("button"),V=document.createElement("input"),W=document.createElement("label"),X=document.createElement("input"),Y=document.createElement("p"),Z=document.createElement("select"),ee=document.createElement("option"),te=document.createElement("option"),ne=document.createElement("option"),de=document.createElement("div"),ie="",ae=!1,re=[],oe=[],se=x(L,A,V,X,Z);function le(){let e=document.createElement("div");c.textContent="",m.src=g,m.style="display: none; pointer-events: none;",h.src=v,e.classList.add("close-and-edit"),k.textContent="Title",k.setAttribute("for","title"),k.style.cssText="font-family: Caveat; font-size: 2rem;",L.setAttribute("placeholder","Title..(Min text:3 , Max:20)"),L.setAttribute("type","text"),L.setAttribute("name","title"),L.setAttribute("id","title"),T.textContent="Description",T.setAttribute("for","description"),T.style.cssText="font-family: Caveat; font-size: 2rem;",A.setAttribute("rows","5"),A.setAttribute("cols","16"),A.setAttribute("placeholder","Anything you want to say.....(Text should be more than 3)"),A.setAttribute("name","description"),A.setAttribute("id","description"),j.textContent="Done",j.setAttribute("type","submit"),e.appendChild(m),e.appendChild(h),c.appendChild(e),c.appendChild(k),c.appendChild(L),c.appendChild(T),c.appendChild(A),c.appendChild(j),i.appendChild(c),c.showModal()}function pe(){if("Title"==o.textContent){let e=document.createElement("div"),t=x(L.value,A.value,V.value,X.value,Z.value);re.unshift(t),M.textContent=`${re[0].projectTitle}`,M.classList.add("para"),D.textContent=`${re[0].projectdescription}`,D.classList.add("para"),m.style="display: block; pointer-events: auto;",e.classList.remove("sidebar"),e.classList.toggle("close-and-edit"),o.textContent=`${re[0].projectTitle}`,a.setAttribute("style","pointer-events: auto;"),c.textContent="",e.appendChild(m),e.appendChild(h),c.appendChild(e),c.appendChild(k),c.appendChild(M),c.appendChild(T),c.appendChild(D),i.appendChild(c),c.showModal(),be()}else{let e=document.createElement("div");M.textContent=`${re[0].projectTitle}`,M.classList.add("para"),D.textContent=`${re[0].projectdescription}`,D.classList.add("para"),m.style="display: block; pointer-events: auto;",e.classList.remove("sidebar"),e.classList.toggle("close-and-edit"),o.textContent=`${re[0].projectTitle}`,c.textContent="",e.appendChild(m),e.appendChild(h),c.appendChild(e),c.appendChild(k),c.appendChild(M),c.appendChild(T),c.appendChild(D),i.appendChild(c),c.showModal(),be()}}function ce(){c.close()}function ue(){m.style="display: none; pointer-events: none;",u.classList.add("close-and-edit"),I.textContent="Done",c.textContent="",u.appendChild(m),u.appendChild(h),c.appendChild(u),c.appendChild(k),c.appendChild(L),c.appendChild(T),c.appendChild(A),c.appendChild(I),c.showModal()}function me(){if(n.textContent="Things",d.textContent="to do",i.textContent="",i.style.cssText="flex-direction: column; flex-wrap: no-wrap; justify-content: normal; padding-top: 5px;",q.src=C,J.textContent="Back",U.classList.add("back-div"),U.classList.add("todo-bg"),U.style="background-color: #ffffff;",R.style.cssText="width: 150px; text-align: center; border-radius: 20px;",_.textContent="Current Todo",_.style.cssText="font-family: Caveat; font-size: 1.5rem;",F.textContent=`${re[ie].projectTitle}`,F.style="color: #ffffff;",F.classList.add("para"),de.classList.add("main-container"),B.classList.add("new-project"),B.classList.add("todo-bg"),B.textContent="+ New Task",B.style.cssText="margin: 20px auto 0 auto; font-size: .9rem; height: 50px;",H.style="width: 50%;",Q.textContent="Notes",Q.style.cssText="font-family: Caveat; font-size: 2.3rem;",G.setAttribute("placeholder","Make a note if you don't want to forget"),G.setAttribute("cols","16"),G.setAttribute("rows","5"),G.style="width: 100%; min-width: 270px;",K.textContent="Save",K.classList.add("save-btn"),de.hasChildNodes()&&(ae=!1),localStorage.getItem("notes")&&(G.textContent=JSON.parse(localStorage.getItem("notes"))),1==ae&&localStorage.getItem("tasks"))for(let e=0;e<oe.length;e++){let t=document.createElement("div"),a=document.createElement("input"),r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("span"),l=document.createElement("span"),p=document.createElement("img"),m=document.createElement("img"),f=document.createElement("img"),v=x(oe[e].projectTitle,oe[e].projectdescription,oe[e].taskInput,oe[e].taskDuedate,oe[e].projectPriority);function E(){t.dataset.number=oe.indexOf(v),M.textContent=`${oe[t.dataset.number].taskInput}`,M.classList.add("para"),D.textContent=`${oe[t.dataset.number].projectdescription}`,D.classList.add("para"),z.textContent=`${oe[t.dataset.number].taskDuedate}`,z.classList.add("para"),N.textContent=`${oe[t.dataset.number].projectPriority}`,N.classList.add("para"),u.classList.add("close-and-edit"),c.textContent="",u.appendChild(h),c.appendChild(u),c.appendChild(k),c.appendChild(M),c.appendChild(T),c.appendChild(D),c.appendChild(W),c.appendChild(z),c.appendChild(Y),c.appendChild(N),i.appendChild(c),c.showModal()}function L(){c.textContent="",$.textContent="Done",u.appendChild(h),c.appendChild(u),c.appendChild(k),c.appendChild(V),c.appendChild(T),c.appendChild(A),c.appendChild(W),c.appendChild(X),c.appendChild(Y),c.appendChild(Z),c.appendChild($),i.appendChild(c),c.showModal()}function j(){t.dataset.number=oe.indexOf(v),s.setAttribute("data-number",`${oe.indexOf(v)}`),l.setAttribute("data-number",`${oe.indexOf(v)}`),oe[ie].taskInput=`${se.taskInput.value}`,oe[ie].taskDuedate=`${se.taskDuedate.value}`,oe[ie].projectdescription=`${se.projectdescription.value}`,oe[ie].projectPriority=`${se.projectPriority.value}`,s.dataset.number==ie&&l.dataset.number==ie&&(s.textContent=`${se.taskInput.value}`,l.textContent=`${se.taskDuedate.value}`,"Urgent"==se.projectPriority.value?r.style=" border-left: 10px solid #dc2626;":"Important"==se.projectPriority.value?r.style=" border-left: 10px solid #facc15;":r.style="border-left: 10px solid #22c55e;"),ce(),Ce()}function w(){t.dataset.number=oe.indexOf(v),r.style.cssText="border-left: none; color: #c0c0c0;",f.style="pointer-events: none;",p.style="pointer-events: none;",m.style="pointer-events: none;",setTimeout((()=>{de.removeChild(t)}),2e3),oe.splice(t.dataset.number,1),Ce()}function O(){t.dataset.number=oe.indexOf(v),de.removeChild(t),oe.splice(t.dataset.number,1),Ce()}oe.splice(e,1,v),t.style.cssText="display: flex; align-items: center; margin: 0;",t.setAttribute("data-number",`${oe.indexOf(v)}`),t.setAttribute("data-project",`${oe[e].projectTitle}`),a.setAttribute("type","checkbox"),a.style.cssText="margin-bottom: 0; width: 20px; font-size: 1rem;",r.classList.add("task-div"),s.textContent=oe[e].taskInput,s.setAttribute("data-number",`${oe.indexOf(v)}`),l.textContent=oe[e].taskDuedate,l.setAttribute("data-number",`${oe.indexOf(v)}`),o.style.cssText="flex: 2; display: flex; flex-wrap: wrap; gap: 40%; height: 40px; align-items: center;",f.src=g,p.src=b,m.src=y,"Urgent"==oe[e].projectPriority?r.style=" border-left: 10px solid #dc2626;":"Important"==oe[e].projectPriority?r.style=" border-left: 10px solid #facc15;":r.style="border-left: 10px solid #22c55e;",o.appendChild(s),o.appendChild(l),r.appendChild(o),r.appendChild(f),r.appendChild(p),r.appendChild(m),t.appendChild(a),t.appendChild(r),de.appendChild(t),t.addEventListener("click",(()=>{ie=`${t.dataset.number}`})),a.addEventListener("click",w),$.addEventListener("click",j),p.addEventListener("click",E),m.addEventListener("click",O),f.addEventListener("click",L),Ce()}if(de.hasChildNodes())for(let S=0;S<oe.length;S++)de.hasChildNodes()&&(de.childNodes[S].setAttribute("style","display: flex;"),de.childNodes[S].firstChild.setAttribute("style","margin-bottom: 0; width: 20px; font-size: 1rem; display: flex; align-self: center;"));if(de.hasChildNodes())for(let I=0;I<oe.length;I++)de.childNodes[I].dataset.project!==`${re[ie].projectTitle}`&&de.childNodes[I].setAttribute("style","display: none;");U.appendChild(q),U.appendChild(J),R.appendChild(_),R.appendChild(F),H.appendChild(Q),H.appendChild(G),H.appendChild(K),i.appendChild(U),i.appendChild(R),i.appendChild(de),i.appendChild(B),i.appendChild(H),xe()}function he(){let e=document.createElement("div");c.textContent="",m.src=g,m.style="display: none; pointer-events: none;",h.src=v,e.classList.add("close-and-edit"),k.textContent="Title",k.setAttribute("for","title"),k.style.cssText="font-family: Caveat; font-size: 2rem;",L.setAttribute("placeholder","Title..(Min text:3 , Max:20)"),L.setAttribute("type","text"),L.setAttribute("name","title"),L.setAttribute("id","title"),T.textContent="Description",T.setAttribute("for","description"),T.style.cssText="font-family: Caveat; font-size: 2rem;",A.setAttribute("rows","5"),A.setAttribute("cols","16"),A.setAttribute("placeholder","Anything you want to say.....(Text should be more than 3)"),A.setAttribute("name","description"),A.setAttribute("id","description"),O.textContent="Done",O.setAttribute("type","submit"),e.appendChild(m),e.appendChild(h),c.appendChild(e),c.appendChild(k),c.appendChild(L),c.appendChild(T),c.appendChild(A),c.appendChild(O),i.appendChild(c),c.showModal()}function fe(){let e=document.createElement("div");e.classList.add("close-and-edit"),c.textContent="",S.textContent="Done",e.appendChild(h),c.appendChild(e),c.appendChild(k),c.appendChild(L),c.appendChild(T),c.appendChild(A),c.appendChild(S),i.appendChild(c),c.showModal()}function xe(){E.src=g,E.style="display: none; pointer-events: none;",h.src=v,u.classList.add("close-and-edit"),k.textContent="TaskName",k.setAttribute("for","task"),k.style.cssText="font-family: Caveat; font-size: 2rem;",V.setAttribute("placeholder","Task..(Min text:3 , Max:20)"),V.setAttribute("type","text"),V.setAttribute("name","task"),V.setAttribute("id","task"),T.textContent="Description",T.setAttribute("for","description"),T.style.cssText="font-family: Caveat; font-size: 2rem;",A.setAttribute("rows","5"),A.setAttribute("cols","16"),A.setAttribute("placeholder","Anything you want to say.....(Text should be more than 3)"),A.setAttribute("name","description"),A.setAttribute("id","description"),W.textContent="Due-date",W.setAttribute("for","date"),W.style.cssText="font-family: Caveat; font-size: 2rem;",X.setAttribute("type","date"),X.setAttribute("name","date"),X.setAttribute("id","date"),Y.textContent="Priority",Y.setAttribute("for","priority"),Y.style.cssText="font-family: Caveat; font-size: 2rem;",Z.setAttribute("name","priority"),Z.setAttribute("id","priority"),ee.textContent="Urgent",te.textContent="Important",ne.textContent="Trivial",ne.setAttribute("selected",""),w.textContent="Done",w.setAttribute("type","submit"),u.textContent="",u.appendChild(E),u.appendChild(h),Z.appendChild(ee),Z.appendChild(te),Z.appendChild(ne),c.textContent="",c.appendChild(u),c.appendChild(k),c.appendChild(V),c.appendChild(T),c.appendChild(A),c.appendChild(W),c.appendChild(X),c.appendChild(Y),c.appendChild(Z),c.appendChild(w),i.appendChild(c),c.showModal()}function be(){localStorage.setItem("projects",JSON.stringify(re))}function Ce(){localStorage.setItem("tasks",JSON.stringify(oe))}function ve(){1==oe.length&&oe[ie].projectTitle==F.textContent&&0==oe[ie].dataset.number&&me()}r.setAttribute("data-number","0"),t.src=f,l.src=g,p.src=b,e.textContent="",e.appendChild(t),e.appendChild(n),e.appendChild(d),s.appendChild(l),s.appendChild(p),a.setAttribute("style","pointer-events: none;"),r.addEventListener("click",(()=>{ie=r.dataset.number,s.setAttribute("style","display: flex;"),setTimeout((()=>{s.setAttribute("style","display: none;")}),5e3)})),o.addEventListener("click",(()=>{"Title"==o.textContent?le():pe()})),l.addEventListener("click",(()=>{"Title"==o.textContent?le():ue()})),p.addEventListener("click",(()=>{"Title"==o.textContent?p.setAttribute("style","pointer-events: none;"):me()})),m.addEventListener("click",ue),h.addEventListener("click",ce),E.addEventListener("click",(function(){E.style="display: none; pointer-events: none;",c.removeChild(M),c.removeChild(T),c.removeChild(D),c.removeChild(W),c.removeChild(z),c.removeChild(Y),c.removeChild(N),c.appendChild(V),c.appendChild(T),c.appendChild(A),c.appendChild(W),c.appendChild(X),c.appendChild(Y),c.appendChild(Z),c.appendChild(w)})),j.addEventListener("click",(()=>{p.setAttribute("style","pointer-events: auto;"),ce(),pe()})),I.addEventListener("click",(()=>{ce(),re[0].projectTitle=`${se.projectTitle.value}`,re[0].projectdescription=`${se.projectdescription.value}`,r.dataset.number==ie&&(o.textContent=`${se.projectTitle.value}`),be(),ce()})),U.addEventListener("click",(function(){i.textContent="",i.style.cssText="flex-direction: row; flex-wrap: wrap; justify-content: center;",n.textContent="Todo",d.textContent="List";for(let e=0;e<re.length;e++){let t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),s=x(re[e].projectTitle,re[e].projectdescription,re[e].taskInput,re[e].taskDuedate,re[e].projectPriority),l=document.createElement("img"),p=document.createElement("img"),u=document.createElement("img");function m(){r.dataset.number=re.indexOf(s);let e=document.createElement("img"),t=document.createElement("div");k.textContent="Title",M.textContent=`${re[r.dataset.number].projectTitle}`,M.classList.add("para"),D.textContent=`${re[r.dataset.number].projectdescription}`,D.classList.add("para"),e.src=g,e.style.cssText="display: block; pointer-events: auto;",t.classList.add("close-and-edit"),e.addEventListener("click",(()=>{ce(),fe()})),c.textContent="",t.appendChild(e),t.appendChild(h),c.appendChild(t),c.appendChild(k),c.appendChild(M),c.appendChild(T),c.appendChild(D),i.appendChild(c),c.showModal()}function f(){r.dataset.number=re.indexOf(s),i.removeChild(r),re.splice(r.dataset.number,1),be()}re.splice(e,1,s),p.src=g,p.style.cssText="display: block; pointer-events: auto;",u.src=b,u.style.cssText="display: block; pointer-events: auto;",l.src=y,o.textContent=`${re[e].projectTitle}`,o.setAttribute("data-number",`${re.indexOf(s)}`),o.classList.add("title"),t.classList.add("sidebar"),0===e&&(t.classList.remove("sidebar"),t.classList.add("first-sidebar")),r.classList.add("todo-bg"),r.setAttribute("data-number",`${re.indexOf(s)}`),t.appendChild(p),t.appendChild(u),0!==e&&t.appendChild(l),r.appendChild(t),r.appendChild(o),i.appendChild(r),r.addEventListener("click",(()=>{r.setAttribute("data-number",`${re.indexOf(s)}`),ie=r.dataset.number,t.setAttribute("style","display: flex;"),setTimeout((()=>{t.setAttribute("style","display: none;")}),5e3),p.style.cssText="display: block; pointer-events: auto;",u.style.cssText="display: block; pointer-events: auto;"})),o.addEventListener("click",m),S.addEventListener("click",(()=>{ce(),r.dataset.number==ie&&(re[ie].projectTitle=`${se.projectTitle.value}`,re[ie].projectdescription=`${se.projectdescription.value}`,o.dataset.number==ie&&(o.textContent=`${se.projectTitle.value}`)),be(),ce()})),p.addEventListener("click",(()=>{ce(),fe()})),u.addEventListener("click",me),l.addEventListener("click",f)}i.appendChild(a)})),B.addEventListener("click",xe),K.addEventListener("click",(function(){localStorage.setItem("notes",JSON.stringify(G.value)),u.classList.add("close-and-edit"),c.textContent="",P.textContent="Note saved",P.style.cssText="font-size: 2rem; padding: 20px;",u.appendChild(h),c.appendChild(u),c.appendChild(P),i.appendChild(c),c.showModal()})),w.addEventListener("click",(()=>{ce(),function(e,t,n,d){let a=document.createElement("div"),r=document.createElement("input"),o=document.createElement("div"),s=document.createElement("div"),l=document.createElement("span"),p=document.createElement("span"),m=document.createElement("img"),f=document.createElement("img"),C=document.createElement("img"),v=x(re[ie].projectTitle,A.value,V.value,X.value,Z.value);oe.push(v),a.style.cssText="display: flex; align-items: center; margin: 0;",a.setAttribute("data-number",`${oe.indexOf(v)}`),a.setAttribute("data-project",`${re[ie].projectTitle}`),r.setAttribute("type","checkbox"),r.style.cssText="margin-bottom: 0; width: 20px; font-size: 1rem;",o.classList.add("task-div"),l.textContent=e,l.setAttribute("data-number",`${oe.indexOf(v)}`),p.textContent=t,p.setAttribute("data-number",`${oe.indexOf(v)}`),s.style.cssText="flex: 2; display: flex; flex-wrap: wrap; gap: 40%; height: 40px; align-items: center;",C.src=g,m.src=b,f.src=y,o.style="Urgent"==d?" border-left: 10px solid #dc2626;":"Important"==d?" border-left: 10px solid #facc15;":"border-left: 10px solid #22c55e;",s.appendChild(l),s.appendChild(p),o.appendChild(s),o.appendChild(C),o.appendChild(m),o.appendChild(f),a.appendChild(r),a.appendChild(o),de.appendChild(a),a.addEventListener("click",(()=>{ie=`${a.dataset.number}`})),r.addEventListener("click",(function(){a.dataset.number=oe.indexOf(v),o.style.cssText="border-left: none; color: #c0c0c0;",C.style="pointer-events: none;",m.style="pointer-events: none;",f.style="pointer-events: none;",setTimeout((()=>{de.removeChild(a)}),2e3),oe.splice(a.dataset.number,1),Ce(),ve()})),$.addEventListener("click",(function(){a.dataset.number=oe.indexOf(v),l.setAttribute("data-number",`${oe.indexOf(v)}`),p.setAttribute("data-number",`${oe.indexOf(v)}`),oe[ie].taskInput=`${se.taskInput.value}`,oe[ie].taskDuedate=`${se.taskDuedate.value}`,oe[ie].projectdescription=`${se.projectdescription.value}`,oe[ie].projectPriority=`${se.projectPriority.value}`,l.dataset.number==ie&&p.dataset.number==ie&&(l.textContent=`${se.taskInput.value}`,p.textContent=`${se.taskDuedate.value}`,"Urgent"==se.projectPriority.value?o.style=" border-left: 10px solid #dc2626;":"Important"==se.projectPriority.value?o.style=" border-left: 10px solid #facc15;":o.style="border-left: 10px solid #22c55e;"),ce(),Ce()})),m.addEventListener("click",(function(){a.dataset.number=oe.indexOf(v),M.textContent=`${oe[a.dataset.number].taskInput}`,M.classList.add("para"),D.textContent=`${oe[a.dataset.number].projectdescription}`,D.classList.add("para"),z.textContent=`${oe[a.dataset.number].taskDuedate}`,z.classList.add("para"),N.textContent=`${oe[a.dataset.number].projectPriority}`,N.classList.add("para"),u.classList.add("close-and-edit"),c.textContent="",u.appendChild(h),c.appendChild(u),c.appendChild(k),c.appendChild(M),c.appendChild(T),c.appendChild(D),c.appendChild(W),c.appendChild(z),c.appendChild(Y),c.appendChild(N),i.appendChild(c),c.showModal()})),f.addEventListener("click",(function(){a.dataset.number=oe.indexOf(v),de.removeChild(a),oe.splice(a.dataset.number,1),Ce(),ve()})),C.addEventListener("click",(function(){c.textContent="",$.textContent="Done",u.appendChild(h),c.appendChild(u),c.appendChild(k),c.appendChild(V),c.appendChild(T),c.appendChild(A),c.appendChild(W),c.appendChild(X),c.appendChild(Y),c.appendChild(Z),c.appendChild($),i.appendChild(c),c.showModal()})),Ce()}(se.taskInput.value,se.taskDuedate.value,0,se.projectPriority.value)})),O.addEventListener("click",(()=>{ce(),function(e){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),r=x(L.value,A.value,V.value,X.value,Z.value),o=document.createElement("img"),s=document.createElement("img"),l=document.createElement("img");"True"===e&&re.push(r),s.src=g,s.style.cssText="display: block; pointer-events: auto;",l.src=b,l.style.cssText="display: block; pointer-events: auto;",o.src=y,d.textContent=`${se.projectTitle.value}`,d.setAttribute("data-number",`${re.indexOf(r)}`),d.classList.add("title"),t.classList.add("sidebar"),n.classList.add("todo-bg"),n.setAttribute("data-number",`${re.indexOf(r)}`),t.appendChild(s),t.appendChild(l),t.appendChild(o),n.appendChild(t),n.appendChild(d),i.removeChild(a),i.appendChild(n),i.appendChild(a),be(),n.addEventListener("click",(()=>{n.setAttribute("data-number",`${re.indexOf(r)}`),ie=n.dataset.number,t.setAttribute("style","display: flex;"),setTimeout((()=>{t.setAttribute("style","display: none;")}),5e3),s.style.cssText="display: block; pointer-events: auto;",l.style.cssText="display: block; pointer-events: auto;"})),d.addEventListener("click",(function(){n.dataset.number=re.indexOf(r);let e=document.createElement("img"),t=document.createElement("div");M.textContent=`${re[n.dataset.number].projectTitle}`,M.classList.add("para"),D.textContent=`${re[n.dataset.number].projectdescription}`,D.classList.add("para"),e.src=g,e.style.cssText="display: block; pointer-events: auto;",t.classList.add("close-and-edit"),e.addEventListener("click",(()=>{ce(),fe()})),c.textContent="",t.appendChild(e),t.appendChild(h),c.appendChild(t),c.appendChild(k),c.appendChild(M),c.appendChild(T),c.appendChild(D),i.appendChild(c),c.showModal()})),S.addEventListener("click",(()=>{ce(),re[ie].projectTitle=`${se.projectTitle.value}`,re[ie].projectdescription=`${se.projectdescription.value}`,d.dataset.number==ie&&(d.textContent=`${se.projectTitle.value}`),be(),ce()})),s.addEventListener("click",(()=>{ce(),fe()})),l.addEventListener("click",me),o.addEventListener("click",(function(){i.removeChild(n),re.splice(n.dataset.number,1),n.setAttribute("data-number",`${re.indexOf(r)}`),be()}))}("True")})),a.addEventListener("click",he),function(){if(localStorage.length>=1){re=JSON.parse(localStorage.getItem("projects")),oe=JSON.parse(localStorage.getItem("tasks")),a.setAttribute("style","pointer-events: auto;"),ae=!0,i.removeChild(r),i.removeChild(a);for(let e=0;e<re.length;e++){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),o=x(re[e].projectTitle,re[e].projectdescription,re[e].taskInput,re[e].taskDuedate,re[e].projectPriority),s=document.createElement("img"),l=document.createElement("img"),p=document.createElement("img");function u(){n.dataset.number=re.indexOf(o);let e=document.createElement("img"),t=document.createElement("div");M.textContent=`${re[n.dataset.number].projectTitle}`,M.classList.add("para"),D.textContent=`${re[n.dataset.number].projectdescription}`,D.classList.add("para"),e.src=g,e.style.cssText="display: block; pointer-events: auto;",t.classList.add("close-and-edit"),e.addEventListener("click",(()=>{ce(),fe()})),c.textContent="",t.appendChild(e),t.appendChild(h),c.appendChild(t),c.appendChild(k),c.appendChild(M),c.appendChild(T),c.appendChild(D),i.appendChild(c),c.showModal()}function m(){n.dataset.number=re.indexOf(o),i.removeChild(n),re.splice(n.dataset.number,1),be()}re.splice(e,1,o),l.src=g,l.style.cssText="display: block; pointer-events: auto;",p.src=b,p.style.cssText="display: block; pointer-events: auto;",s.src=y,d.textContent=`${re[e].projectTitle}`,d.setAttribute("data-number",`${re.indexOf(o)}`),d.classList.add("title"),t.classList.add("sidebar"),0===e&&(t.classList.remove("sidebar"),t.classList.add("first-sidebar")),n.classList.add("todo-bg"),n.setAttribute("data-number",`${re.indexOf(o)}`),t.appendChild(l),t.appendChild(p),0!==e&&t.appendChild(s),n.appendChild(t),n.appendChild(d),i.appendChild(n),n.addEventListener("click",(()=>{n.setAttribute("data-number",`${re.indexOf(o)}`),ie=n.dataset.number,t.setAttribute("style","display: flex;"),setTimeout((()=>{t.setAttribute("style","display: none;")}),5e3),l.style.cssText="display: block; pointer-events: auto;",p.style.cssText="display: block; pointer-events: auto;"})),d.addEventListener("click",u),S.addEventListener("click",(()=>{ce(),n.dataset.number==ie&&(re[ie].projectTitle=`${se.projectTitle.value}`,re[ie].projectdescription=`${se.projectdescription.value}`,d.dataset.number==ie&&(d.textContent=`${se.projectTitle.value}`)),be(),ce()})),l.addEventListener("click",(()=>{ce(),fe()})),p.addEventListener("click",me),s.addEventListener("click",m)}i.appendChild(a),he()}}()}()})()})();