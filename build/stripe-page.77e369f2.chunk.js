"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[1092],{70621:(R,m,t)=>{t.r(m),t.d(m,{default:()=>U});var e=t(67294),n=t(86896),g=t(64593),r=t(52861),i=t(64289),y=t(17034),f=t(185),p=t(53979),v=t(29728),O=t(49066),E=t(41580),b=t(11276),h=t(74571),a=t(16364),l=t(48302),s=t(82562),o=t(75515),u=t(23620),x=t(85018);const T=[{value:"text-davinci-003",label:"higher quality, longer output, better instruction following"},{value:"text-curie-001",label:"faster and lower cost, suited for Q&A, translation, service bot"}],I=()=>{const{formatMessage:Z}=(0,n.Z)(),A=(0,i.lm)(),[k,C]=(0,e.useState)(!1),M=(0,e.useRef)(""),B=(0,e.useRef)("text-davinci-003"),L=(0,e.useRef)(2048),G=r.default.create({baseURL:"",headers:{Authorization:`Bearer ${i.I8.getToken()}`,"Content-Type":"application/json"}}),[P,K]=(0,e.useState)({apiKey:"",modelName:"text-davinci-003",maxTokens:2048}),W=c=>{K(c),M.current=c.apiKey,B.current=c.modelName,L.current=c.maxTokens},N=c=>d=>{switch(console.log("key",d),K(c==="modelName"?{...P,[c]:d}:{...P,[c]:d.target.value}),c){case"apiKey":M.current=d.target.value;break;case"modelName":B.current=d;break;case"maxTokens":L.current=d.target.value;break;default:break}};(0,e.useEffect)(()=>{C(!0),(async()=>{try{const{data:d}=await G.get("/strapi-chatgpt/config");W(d)}catch(d){console.log(d),A({type:"warning",message:{id:"chatgpt-config-fetch-error",defaultMessage:"Error while fetching the chatGPT configurations"}})}})(),C(!1)},[]);const j=async()=>{if(!{apiKey:M.current,modelName:B.current,maxTokens:L.current}.apiKey){A({type:"warning",message:{id:"chatgpt-config-api-key-required",defaultMessage:"Please enter the api key"}});return}C(!0);try{const{data:d}=await G.post("/strapi-chatgpt/config/update",{...P});d&&d.value&&W(JSON.parse(d.value)),C(!1),A({type:"success",message:{id:"chatgpt-config-save-success",defaultMessage:"ChatGPT configurations saved successfully"}})}catch(d){C(!1),console.log(d),A({type:"warning",message:{id:"chatgpt-config-save-error",defaultMessage:"Error while saving the chatGPT configurations"}})}};return e.createElement(y.A,null,e.createElement(g.q,{title:"Strapi ChatGPT Configuration"}),e.createElement(f.o,{"aria-busy":!1},e.createElement(p.T,{title:"ChatGPT Configurations",subtitle:Z({id:"chatgpt-config-headder",defaultMessage:"Configure the api key, model name and other parameters"}),primaryAction:e.createElement(v.z,{startIcon:e.createElement(x.Z,null),onClick:j,loading:k},"Save")}),e.createElement(O.D,null,e.createElement(E.x,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0},e.createElement(b.r,{gap:6},e.createElement(h.P,{col:6},e.createElement(a.o,{type:"text",id:"apiKey",name:"apiKey",placeholder:"sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",label:"API Key",refs:M,value:P.apiKey,onChange:N("apiKey")})),e.createElement(h.P,{col:6},e.createElement(a.o,{type:"text",id:"maxTokens",name:"maxTokens",label:"Max Tokens",placeholder:"2048",refs:L,value:P.maxTokens,onChange:N("maxTokens")})),e.createElement(h.P,null,e.createElement(l.P,{name:"modelName",id:"modelName",label:"Model Name",placeholder:"Select a model",refs:B,value:P.modelName,onChange:N("modelName")},T.map(c=>e.createElement(s.W,{key:c.value,value:c.value},c.value," - ",c.label))))),e.createElement(E.x,{paddingTop:5},e.createElement(o.Z,null,"You can set additional parameters"," (",e.createElement("span",null,e.createElement(u.r,{href:"https://platform.openai.com/docs/api-reference/completions",target:"_blank"},"ChatGPT doc")),") ","with the API Integration, available from Plugin > ChatGPT menu."))))))},U=()=>e.createElement(I,null)},49066:(R,m,t)=>{t.d(m,{D:()=>r});var e=t(67294),n=t(45697),g=t(41580);const r=({children:i})=>e.createElement(g.x,{paddingLeft:10,paddingRight:10},i);r.propTypes={children:n.node.isRequired}},53979:(R,m,t)=>{t.d(m,{T:()=>E});var e=t(67294),n=t(45697),g=t(46449),r=t(41580),i=t(11047);const y=a=>{const l=(0,e.useRef)(null),[s,o]=(0,e.useState)(!0),u=([x])=>{o(x.isIntersecting)};return(0,e.useEffect)(()=>{const x=l.current,T=new IntersectionObserver(u,a);return x&&T.observe(l.current),()=>{x&&T.disconnect()}},[l,a]),[l,s]};var f=t(95355);const p=(a,l)=>{const s=(0,f.W)(l);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(s);return Array.isArray(a)?a.forEach(u=>{u.current&&o.observe(u.current)}):a.current&&o.observe(a.current),()=>{o.disconnect()}},[a,s])};var v=t(75515);const O=()=>{const a=(0,e.useRef)(null),[l,s]=(0,e.useState)(null),[o,u]=y({root:null,rootMargin:"0px",threshold:0});return p(o,()=>{o.current&&s(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{a.current&&s(a.current.getBoundingClientRect())},[a]),{containerRef:o,isVisible:u,baseHeaderLayoutRef:a,headerSize:l}},E=a=>{const{containerRef:l,isVisible:s,baseHeaderLayoutRef:o,headerSize:u}=O();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:u?.height},ref:l},s&&e.createElement(h,{ref:o,...a})),!s&&e.createElement(h,{...a,sticky:!0,width:u?.width}))};E.displayName="HeaderLayout";const b=(0,g.ZP)(r.x)`
  width: ${a=>a.width}px;
`,h=e.forwardRef(({navigationAction:a,primaryAction:l,secondaryAction:s,subtitle:o,title:u,sticky:x,width:T,...D},I)=>{const S=typeof o=="string";return x?e.createElement(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:T,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(i.k,{justifyContent:"space-between"},e.createElement(i.k,null,a&&e.createElement(r.x,{paddingRight:3},a),e.createElement(r.x,null,e.createElement(v.Z,{variant:"beta",as:"h1",...D},u),S?e.createElement(v.Z,{variant:"pi",textColor:"neutral600"},o):o),s?e.createElement(r.x,{paddingLeft:4},s):null),e.createElement(i.k,null,l?e.createElement(r.x,{paddingLeft:2},l):void 0))):e.createElement(r.x,{ref:I,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0},a?e.createElement(r.x,{paddingBottom:2},a):null,e.createElement(i.k,{justifyContent:"space-between"},e.createElement(i.k,{minWidth:0},e.createElement(v.Z,{as:"h1",variant:"alpha",...D},u),s?e.createElement(r.x,{paddingLeft:4},s):null),l),S?e.createElement(v.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});h.displayName="BaseHeaderLayout",h.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},h.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,sticky:n.bool,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired,width:n.number},E.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},E.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired}},17034:(R,m,t)=>{t.d(m,{A:()=>f});var e=t(67294),n=t(45697),g=t(46449),r=t(41580);const i=(0,g.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:p})=>p?"auto 1fr":"1fr"};
`,y=(0,g.ZP)(r.x)`
  overflow-x: hidden;
`,f=({sideNav:p,children:v})=>e.createElement(i,{hasSideNav:Boolean(p)},p,e.createElement(y,{paddingBottom:10},v));f.defaultProps={sideNav:void 0},f.propTypes={children:n.node.isRequired,sideNav:n.node}},185:(R,m,t)=>{t.d(m,{o:()=>i});var e=t(67294),n=t(45697),g=t(46449);const r=g.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:y,...f})=>{const p=y||"main-content-title";return e.createElement(r,{"aria-labelledby":p,id:"main-content",tabIndex:-1,...f})};i.defaultProps={labelledBy:void 0},i.propTypes={labelledBy:n.string}}}]);
