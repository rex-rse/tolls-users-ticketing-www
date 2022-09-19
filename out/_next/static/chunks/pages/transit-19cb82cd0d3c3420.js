(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{9233:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transit",function(){return n(4185)}])},1508:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(1664)),o=n.n(a),s=n(169);t.Z=function(e){var t=e.title,n=e.data,a=e.icon,l=e.moreInfo;return(0,r.jsxs)("div",{className:"h-36 rounded-xl shadow-md",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-6  bg-white px-6 ".concat(l?"h-4/6 rounded-t-xl":"h-full rounded-xl"),children:[a,(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-gray-600 ".concat(l?"text-md":"text-lg"),children:t}),(0,r.jsx)("h2",{className:"font-medium ".concat(l?"text-xl":"text-2xl"),children:n})]})]}),l?(0,r.jsx)(o(),{href:"/recharges",children:(0,r.jsxs)("div",{className:"flex h-2/6 items-center rounded-b-xl bg-gray-100 px-6 text-emerald-600 decoration-emerald-600 decoration-2 hover:underline",children:[(0,r.jsx)("h4",{className:"text-sm font-normal",children:"M\xe1s informaci\xf3n"}),(0,r.jsx)(s.Z,{className:"h-4 w-4"})]})}):(0,r.jsx)(r.Fragment,{})]})}},9599:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7294),a=n(7345),o=n(3774),s=n(5882),l=function(){var e=(0,a.T)(),t=(0,a.C)(o.pH).loggedIn;(0,r.useEffect)((function(){!t&&e((0,s.bA)())}),[t])}},4185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),a=n(7294),o=n(915),s=n(8232);var l=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}))})),i=n(8866),c=n(6707),u=n(3390),d=n(9599),f=n(1508),m=n(8767),h=n(7345),p=n(2601),v=n(2719),g=n(9473),x=function(){(0,d.z)();var e=(0,h.T)(),t=(0,g.v9)((function(e){var t,n;return null===(t=e.loginUser)||void 0===t||null===(n=t.user_info)||void 0===n?void 0:n.account_number})),n=(0,m.useMutation)((function(e){return(0,p.L)({method:"POST",data:e,url:"/transit-detail/get/"})}),{onError:function(t){e((0,v.bA)({text:t.response.statusText,type:"error"}))}}),o=n.mutate,x=n.data,w=n.isLoading,E=(0,a.useState)([]),k=E[0],y=E[1];a.useEffect((function(){o({account_number:t,per_page:200})}),[t,o]),(0,a.useEffect)((function(){if(x){var e=x.data.data.map((function(e){var t=e.id,n=e.moment,a=e.collected_amount,o=e.vehicle_category,s=e.tag_id,i=e.registered_vehicle,c=e.site;return{collected_amount:a,vehicle_category:o.title,tag_id:s.tag_serial,registered_vehicle:i.license_plate,site:c.name,moment:new Date(n).toLocaleDateString("es-VE"),actions:(0,r.jsx)("button",{className:"ml-8","tag-id":t,children:(0,r.jsx)(l,{className:"h-6 cursor-pointer text-emerald-700/50 transition-all duration-150 hover:text-emerald-500"})})}}));y(e)}}),[x]);var b=k.map((function(e){return Number(e.collected_amount)})).reduce((function(e,t){return e+t}),0);return(0,r.jsxs)("div",{className:"mt-24 w-full",children:[(0,r.jsxs)("div",{className:"mb-10 space-y-8",children:[(0,r.jsx)("h2",{className:"text-3xl tracking-wide text-gray-800",children:"Historial de Tr\xe1nsitos"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)(f.Z,{title:"Tr\xe1nsitos",data:"1270",icon:(0,r.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/30",children:(0,r.jsx)(i.Z,{className:"h-9 w-9 text-amber-600"})}),moreInfo:!1}),(0,r.jsx)(f.Z,{title:"Total consumido",data:b.toString(),icon:(0,r.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/30",children:(0,r.jsx)(c.Z,{className:"h-9 w-9 text-emerald-600"})}),moreInfo:!1}),(0,r.jsx)(f.Z,{title:"\xdaltimo peaje",data:"Punta Piedra",icon:(0,r.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/30",children:(0,r.jsx)(u.Z,{className:"h-9 w-9 rotate-90 text-indigo-600"})}),moreInfo:!1})]})]}),(0,r.jsx)(s.Z,{headers:[{id:"1",key:"moment",header:"Fecha"},{id:"2",key:"collected_amount",header:"Monto"},{id:"3",key:"vehicle_category",header:"Veh\xedculo"},{id:"4",key:"registered_vehicle",header:"Placa"},{id:"5",key:"tag_id",header:"Tag"},{id:"6",key:"site",header:"Peaje"}],data:k,isLoading:w})]})};x.getLayout=function(e){return(0,r.jsx)(o.Z,{children:e})};var w=x},2601:function(e,t,n){"use strict";n.d(t,{L:function(){return a}});var r=n(9669),a=n.n(r)().create({withCredentials:!0,baseURL:"http://api.user-toll-qa.local:10088/api/",headers:{}})},9855:function(e,t,n){"use strict";n.d(t,{p:function(){return N}});var r=n(7294),a=n(2984),o=n(2351),s=n(3784),l=n(9946),i=n(1363),c=n(4103),u=n(6567),d=n(6723);function f(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function m(e,t){let[n,a]=(0,r.useState)((()=>f(e)));return(0,d.e)((()=>{a(f(e))}),[e.type,e.as]),(0,d.e)((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[n,t]),n}var h,p,v=n(5466),g=n(3781),x=((p=x||{})[p.Open=0]="Open",p[p.Closed=1]="Closed",p),w=((h=w||{})[h.ToggleDisclosure=0]="ToggleDisclosure",h[h.CloseDisclosure=1]="CloseDisclosure",h[h.SetButtonId=2]="SetButtonId",h[h.SetPanelId=3]="SetPanelId",h[h.LinkPanel=4]="LinkPanel",h[h.UnlinkPanel=5]="UnlinkPanel",h);let E={0:e=>({...e,disclosureState:(0,a.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},k=(0,r.createContext)(null);function y(e){let t=(0,r.useContext)(k);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,y),t}return t}k.displayName="DisclosureContext";let b=(0,r.createContext)(null);function j(e){let t=(0,r.useContext)(b);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}b.displayName="DisclosureAPIContext";let P=(0,r.createContext)(null);function R(e,t){return(0,a.E)(t.type,E,e,t)}P.displayName="DisclosurePanelContext";let M=r.Fragment,C=(0,o.yV)((function(e,t){let{defaultOpen:n=!1,...i}=e,c=`headlessui-disclosure-button-${(0,l.M)()}`,d=`headlessui-disclosure-panel-${(0,l.M)()}`,f=(0,r.useRef)(null),m=(0,s.T)(t,(0,s.h)((e=>{f.current=e}),void 0===e.as||e.as===r.Fragment)),h=(0,r.useRef)(null),p=(0,r.useRef)(null),x=(0,r.useReducer)(R,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:p,panelRef:h,buttonId:c,panelId:d}),[{disclosureState:w},E]=x;(0,r.useEffect)((()=>E({type:2,buttonId:c})),[c,E]),(0,r.useEffect)((()=>E({type:3,panelId:d})),[d,E]);let y=(0,g.z)((e=>{E({type:1});let t=(0,v.r)(f);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(c):t.getElementById(c);null==n||n.focus()})),j=(0,r.useMemo)((()=>({close:y})),[y]),P=(0,r.useMemo)((()=>({open:0===w,close:y})),[w,y]),C={ref:m};return r.createElement(k.Provider,{value:x},r.createElement(b.Provider,{value:j},r.createElement(u.up,{value:(0,a.E)(w,{0:u.ZM.Open,1:u.ZM.Closed})},(0,o.sY)({ourProps:C,theirProps:i,slot:P,defaultTag:M,name:"Disclosure"}))))})),S=(0,o.yV)((function(e,t){let[n,a]=y("Disclosure.Button"),l=(0,r.useContext)(P),u=null!==l&&l===n.panelId,d=(0,r.useRef)(null),f=(0,s.T)(d,t,u?null:n.buttonRef),h=(0,g.z)((e=>{var t;if(u){if(1===n.disclosureState)return;switch(e.key){case i.R.Space:case i.R.Enter:e.preventDefault(),e.stopPropagation(),a({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case i.R.Space:case i.R.Enter:e.preventDefault(),e.stopPropagation(),a({type:0})}})),p=(0,g.z)((e=>{if(e.key===i.R.Space)e.preventDefault()})),v=(0,g.z)((t=>{var r;(0,c.P)(t.currentTarget)||e.disabled||(u?(a({type:0}),null==(r=n.buttonRef.current)||r.focus()):a({type:0}))})),x=(0,r.useMemo)((()=>({open:0===n.disclosureState})),[n]),w=m(e,d),E=e,k=u?{ref:f,type:w,onKeyDown:h,onClick:v}:{ref:f,id:n.buttonId,type:w,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:h,onKeyUp:p,onClick:v};return(0,o.sY)({ourProps:k,theirProps:E,slot:x,defaultTag:"button",name:"Disclosure.Button"})})),L=o.AN.RenderStrategy|o.AN.Static,_=(0,o.yV)((function(e,t){let[n,a]=y("Disclosure.Panel"),{close:l}=j("Disclosure.Panel"),i=(0,s.T)(t,n.panelRef,(()=>{n.linkedPanel||a({type:4})})),c=(0,u.oJ)(),d=null!==c?c===u.ZM.Open:0===n.disclosureState;(0,r.useEffect)((()=>()=>a({type:5})),[a]),(0,r.useEffect)((()=>{var t;1===n.disclosureState&&(null==(t=e.unmount)||t)&&a({type:5})}),[n.disclosureState,e.unmount,a]);let f=(0,r.useMemo)((()=>({open:0===n.disclosureState,close:l})),[n,l]),m=e,h={ref:i,id:n.panelId};return r.createElement(P.Provider,{value:n.panelId},(0,o.sY)({ourProps:h,theirProps:m,slot:f,defaultTag:"div",features:L,visible:d,name:"Disclosure.Panel"}))})),N=Object.assign(C,{Button:S,Panel:_})},169:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}))}));t.Z=a},6707:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}))}));t.Z=a},4935:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}))}));t.Z=a},9065:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))}));t.Z=a},3390:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"}))}));t.Z=a},8866:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{d:"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"}))}));t.Z=a},7481:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),r.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}))}));t.Z=a},4845:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",clipRule:"evenodd"}))}));t.Z=a},8163:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=a}},function(e){e.O(0,[669,664,915,232,774,888,179],(function(){return t=9233,e(e.s=t);var t}));var t=e.O();_N_E=t}]);