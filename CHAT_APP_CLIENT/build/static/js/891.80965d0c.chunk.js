"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[891],{56891:(e,t,n)=>{n.r(t),n.d(t,{Conversation:()=>q,default:()=>J});var i=n(46946),r=n(74600),o=n(65043),s=n(26240),a=n(31802),c=n(34535),l=n(69160),d=n(81045),x=n(85865),p=n(17392),u=n(39336),h=n(69555),g=n(56258),m=n(37970),j=n(2478),A=n(1606),b=n(68365),f=n(89453),k=n(14395),v=n(20765),w=n(79456),y=n(30199),C=n(77074),_=n(70579);const F=(0,c.Ay)(l.A)((e=>{let{theme:t}=e;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(t.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),I=[{title:"Contact info"},{title:"Mute notifications"},{title:"Clear messages"},{title:"Delete chat"}],S=()=>{const e=(0,w.wA)(),t=(0,k.A)("between","md","xs","sm"),n=(0,s.A)(),{current_conversation:a}=(0,w.d4)((e=>e.conversation.direct_chat)),[c,l]=o.useState(null),S=Boolean(c),R=()=>{l(null)};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(i.A,{p:2,width:"100%",sx:{backgroundColor:"light"===n.palette.mode?"#F8FAFF":n.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,_.jsxs)(r.A,{alignItems:"center",direction:"row",sx:{width:"100%",height:"100%"},justifyContent:"space-between",children:[(0,_.jsxs)(r.A,{onClick:()=>{e((0,v.fy)())},spacing:2,direction:"row",children:[(0,_.jsx)(i.A,{children:(0,_.jsx)(F,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,_.jsx)(d.A,{alt:null===a||void 0===a?void 0:a.name,src:null===a||void 0===a?void 0:a.img})})}),(0,_.jsxs)(r.A,{spacing:.2,children:[(0,_.jsx)(x.A,{variant:"subtitle2",children:null===a||void 0===a?void 0:a.name}),(0,_.jsx)(x.A,{variant:"caption",children:"Online"})]})]}),(0,_.jsxs)(r.A,{direction:"row",alignItems:"center",spacing:t?1:3,children:[(0,_.jsx)(p.A,{onClick:()=>{e((0,C.IG)(a.user_id))},children:(0,_.jsx)(j.A,{})}),(0,_.jsx)(p.A,{onClick:()=>{e((0,y.$Y)(a.user_id))},children:(0,_.jsx)(A.A,{})}),!t&&(0,_.jsx)(p.A,{children:(0,_.jsx)(b.A,{})}),(0,_.jsx)(u.A,{orientation:"vertical",flexItem:!0}),(0,_.jsx)(p.A,{id:"conversation-positioned-button","aria-controls":S?"conversation-positioned-menu":void 0,"aria-haspopup":"true","aria-expanded":S?"true":void 0,onClick:e=>{l(e.currentTarget)},children:(0,_.jsx)(f.A,{})}),(0,_.jsx)(h.A,{MenuListProps:{"aria-labelledby":"fade-button"},TransitionComponent:g.A,id:"conversation-positioned-menu","aria-labelledby":"conversation-positioned-button",anchorEl:c,open:S,onClose:R,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,_.jsx)(i.A,{p:1,children:(0,_.jsx)(r.A,{spacing:1,children:I.map((e=>(0,_.jsxs)(m.A,{onClick:R,children:[(0,_.jsx)(r.A,{sx:{minWidth:100},direction:"row",alignItems:"center",justifyContent:"space-between",children:(0,_.jsx)("span",{children:e.title})})," "]})))})})})]})]})})})};var R=n(84642),z=n(77739),M=n(24010),P=n(51787),E=n(94651),T=n(13689),B=n(52753),O=n(35164),L=n(72085),X=n(76528),H=n(27193),K=n(73381),V=n(59995),W=n(51842),D=n(28243);const G=(0,c.Ay)(R.A)((e=>{let{theme:t}=e;return{"& .MuiInputBase-input":{paddingTop:"12px !important",paddingBottom:"12px !important"}}})),Q=[{color:"#4da5fe",icon:(0,_.jsx)(E.A,{size:24}),y:102,title:"Photo/Video"},{color:"#1b8cfe",icon:(0,_.jsx)(T.A,{size:24}),y:172,title:"Stickers"},{color:"#0172e4",icon:(0,_.jsx)(B.A,{size:24}),y:242,title:"Image"},{color:"#0159b2",icon:(0,_.jsx)(O.A,{size:24}),y:312,title:"Document"},{color:"#013f7f",icon:(0,_.jsx)(L.A,{size:24}),y:382,title:"Contact"}],Y=e=>{let{openPicker:t,setOpenPicker:n,setValue:i,value:s,inputRef:a,handleSendMessage:c}=e;const[l,d]=o.useState(!1);return(0,_.jsx)(G,{inputRef:a,value:s,onChange:e=>{i(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&c()},fullWidth:!0,placeholder:"Write a message...",variant:"filled",InputProps:{disableUnderline:!0,startAdornment:(0,_.jsxs)(r.A,{sx:{width:"max-content"},children:[(0,_.jsx)(r.A,{sx:{position:"relative",display:l?"inline-block":"none"},children:Q.map((e=>(0,_.jsx)(z.A,{placement:"right",title:e.title,children:(0,_.jsx)(M.A,{onClick:()=>{d(!l)},sx:{position:"absolute",top:-e.y,backgroundColor:e.color},"aria-label":"add",children:e.icon})})))}),(0,_.jsx)(P.A,{children:(0,_.jsx)(p.A,{onClick:()=>{d(!l)},children:(0,_.jsx)(X.A,{})})})]}),endAdornment:(0,_.jsx)(r.A,{sx:{position:"relative"},children:(0,_.jsx)(P.A,{children:(0,_.jsx)(p.A,{onClick:()=>{n(!t)},children:(0,_.jsx)(H.A,{})})})})}})};function N(e){return/(https?:\/\/[^\s]+)/g.test(e)}const U=()=>{const e=(0,s.A)(),{current_conversation:t}=(0,w.d4)((e=>e.conversation.direct_chat)),n=window.localStorage.getItem("user_id"),a=(0,k.A)("between","md","xs","sm"),{sideBar:c,room_id:l}=(0,w.d4)((e=>e.app)),d=c&&c.open,[x,u]=o.useState(!1),[h,g]=(0,o.useState)(""),m=(0,o.useRef)(null);const j=()=>{var e;""!==h.trim()&&(D.s.emit("text_message",{message:(e=h,e.replace(/(https?:\/\/[^\s]+)/g,(e=>'<a href="'.concat(e,'" target="_blank">').concat(e,"</a>")))),conversation_id:l,from:n,to:t.user_id,type:N(h)?"Link":"Text"}),g(""))};return(0,_.jsx)(i.A,{sx:{position:"relative",backgroundColor:"transparent !important"},children:(0,_.jsx)(i.A,{p:a?1:2,width:"100%",sx:{backgroundColor:"light"===e.palette.mode?"#F8FAFF":e.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,_.jsxs)(r.A,{direction:"row",alignItems:"center",spacing:a?1:3,children:[(0,_.jsxs)(r.A,{sx:{width:"100%"},children:[(0,_.jsx)(i.A,{style:{zIndex:10,position:"fixed",display:x?"inline":"none",bottom:81,right:a?20:d?420:100},children:(0,_.jsx)(W.A,{theme:e.palette.mode,data:V,onEmojiSelect:e=>{!function(e){const t=m.current;if(t){const n=t.selectionStart,i=t.selectionEnd;g(h.substring(0,n)+e+h.substring(i)),t.selectionStart=t.selectionEnd=n+1}}(e.native)}})}),(0,_.jsx)(Y,{inputRef:m,value:h,setValue:g,openPicker:x,setOpenPicker:u,handleSendMessage:j})]}),(0,_.jsx)(i.A,{sx:{height:48,width:48,backgroundColor:e.palette.primary.main,borderRadius:1.5},children:(0,_.jsx)(r.A,{sx:{height:"100%"},alignItems:"center",justifyContent:"center",children:(0,_.jsxs)(p.A,{onClick:j,children:[" ",(0,_.jsx)(K.A,{color:"#ffffff"})]})})})]})})})};var Z=n(95767),$=n(61358);const q=e=>{let{isMobile:t,menu:n}=e;const s=(0,w.wA)(),{conversations:a,current_messages:c}=(0,w.d4)((e=>e.conversation.direct_chat)),{room_id:l}=(0,w.d4)((e=>e.app));return(0,o.useEffect)((()=>{const e=a.find((e=>(null===e||void 0===e?void 0:e.id)===l));D.s.emit("get_messages",{conversation_id:null===e||void 0===e?void 0:e.id},(e=>{console.log(e,"List of messages"),s((0,$.eM)({messages:e}))})),s((0,$.Z1)(e))}),[a,s,l]),(0,_.jsx)(i.A,{p:t?1:3,children:(0,_.jsx)(r.A,{spacing:3,children:c&&c.map(((e,t)=>{switch(e.type){case"divider":return(0,_.jsx)(Z.Kf,{el:e});case"msg":switch(e.subtype){case"img":return(0,_.jsx)(Z.wb,{el:e,menu:n});case"doc":return(0,_.jsx)(Z.Qk,{el:e,menu:n});case"Link":return(0,_.jsx)(Z.aF,{el:e,menu:n});case"reply":return(0,_.jsx)(Z.uI,{el:e,menu:n});default:return(0,_.jsx)(Z.p7,{el:e,menu:n})}default:return(0,_.jsx)(_.Fragment,{})}}))})})},J=()=>{const e=(0,k.A)("between","md","xs","sm"),t=(0,s.A)(),n=(0,o.useRef)(null),{current_messages:c}=(0,w.d4)((e=>e.conversation.direct_chat));return(0,o.useEffect)((()=>{n.current.scrollTop=n.current.scrollHeight}),[c]),(0,_.jsxs)(r.A,{height:"100%",maxHeight:"100vh",width:e?"100vw":"auto",children:[(0,_.jsx)(S,{}),(0,_.jsx)(i.A,{ref:n,width:"100%",sx:{position:"relative",flexGrow:1,height:"100%",overflowY:"scroll","::-webkit-scrollbar":{width:"1.5px"},"::-webkit-scrollbar-track ":{background:"light"===t.palette.mode?"#F8FAFF":t.palette.background.paper}," ::-webkit-scrollbar-thumb ":{background:"#888"},"::-webkit-scrollbar-thumb:hover":{background:"#555"},backgroundColor:"light"===t.palette.mode?"#F0F4FA":t.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,_.jsx)(a.N,{timeout:500,clickOnTrack:!1,children:(0,_.jsx)(q,{menu:!0,isMobile:e})})}),(0,_.jsx)(U,{})]})}},95767:(e,t,n)=>{n.d(t,{Kf:()=>y,Qk:()=>k,aF:()=>v,p7:()=>b,uI:()=>w,wb:()=>f});var i=n(65043),r=n(69555),o=n(74600),s=n(37970),a=n(46946),c=n(85865),l=n(17392),d=n(39336),x=n(26240),p=n(90310),u=n(83540),h=n(94651),g=n(98192),m=n(68399),j=n(70579);const A=()=>{const[e,t]=i.useState(null),n=Boolean(e),a=()=>{t(null)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.A,{size:20,id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:e=>{t(e.currentTarget)}}),(0,j.jsx)(r.A,{id:"basic-menu",anchorEl:e,open:n,onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},children:(0,j.jsx)(o.A,{spacing:1,px:1,children:m.zB.map((e=>(0,j.jsx)(s.A,{onClick:a,children:e.title})))})})]})},b=e=>{let{el:t,menu:n}=e;const i=(0,x.A)();return(0,j.jsxs)(o.A,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,j.jsx)(a.A,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.X4)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,j.jsx)(c.A,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.message})}),n&&(0,j.jsx)(A,{})]})},f=e=>{let{el:t,menu:n}=e;const i=(0,x.A)();return(0,j.jsxs)(o.A,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,j.jsx)(a.A,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.X4)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,j.jsxs)(o.A,{spacing:1,children:[(0,j.jsx)("img",{src:t.img,alt:t.message,style:{maxHeight:210,borderRadius:"10px"}}),(0,j.jsx)(c.A,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.message})]})}),n&&(0,j.jsx)(A,{})]})},k=e=>{let{el:t,menu:n}=e;const i=(0,x.A)();return(0,j.jsxs)(o.A,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,j.jsx)(a.A,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.X4)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,j.jsxs)(o.A,{spacing:2,children:[(0,j.jsxs)(o.A,{p:2,direction:"row",spacing:3,alignItems:"center",sx:{backgroundColor:i.palette.background.paper,borderRadius:1},children:[(0,j.jsx)(h.A,{size:48}),(0,j.jsx)(c.A,{variant:"caption",children:"Abstract.png"}),(0,j.jsx)(l.A,{children:(0,j.jsx)(g.A,{})})]}),(0,j.jsx)(c.A,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.message})]})}),n&&(0,j.jsx)(A,{})]})},v=e=>{let{el:t,menu:n}=e;const i=(0,x.A)();return(0,j.jsxs)(o.A,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,j.jsx)(a.A,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.X4)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,j.jsxs)(o.A,{spacing:2,children:[(0,j.jsx)(o.A,{p:2,direction:"column",spacing:3,alignItems:"start",sx:{backgroundColor:i.palette.background.paper,borderRadius:1},children:(0,j.jsx)(o.A,{direction:"column",spacing:2})}),(0,j.jsx)(c.A,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:(0,j.jsx)("div",{dangerouslySetInnerHTML:{__html:t.message}})})]})}),n&&(0,j.jsx)(A,{})]})},w=e=>{let{el:t,menu:n}=e;const i=(0,x.A)();return(0,j.jsxs)(o.A,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,j.jsx)(a.A,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.X4)(i.palette.background.paper,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,j.jsxs)(o.A,{spacing:2,children:[(0,j.jsx)(o.A,{p:2,direction:"column",spacing:3,alignItems:"center",sx:{backgroundColor:(0,p.X4)(i.palette.background.paper,1),borderRadius:1},children:(0,j.jsx)(c.A,{variant:"body2",color:i.palette.text,children:t.message})}),(0,j.jsx)(c.A,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.reply})]})}),n&&(0,j.jsx)(A,{})]})},y=e=>{let{el:t}=e;const n=(0,x.A)();return(0,j.jsxs)(o.A,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,j.jsx)(d.A,{width:"46%"}),(0,j.jsx)(c.A,{variant:"caption",sx:{color:n.palette.text},children:t.text}),(0,j.jsx)(d.A,{width:"46%"})]})}}}]);
//# sourceMappingURL=891.80965d0c.chunk.js.map