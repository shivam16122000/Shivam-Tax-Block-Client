(this["webpackJsonptax-block-client"]=this["webpackJsonptax-block-client"]||[]).push([[0],{112:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),o=(a(112),a(32)),s=a(11),m=a(15),l=a(213),j=a(101),d=a(223),b=a(217),u=a(18),h=a(212),O=a(222),g=a(216),x=a(215),p=a(51),f=Object(p.b)("main/fetchUsers",(function(e){var t=localStorage.getItem("token"),a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}};return fetch("https://blooming-journey-42211.herokuapp.com/userdata/".concat(e),a).then((function(e){return e.json()})).then((function(e){return console.log(e.data),localStorage.setItem("noOfLoans",e.data.length),e.data})).catch((function(e){return console.log("error in fetching"),[]}))})),v=Object(p.c)({name:"main",initialState:{post:[]},reducers:{onLogout:function(e){e.post=[]}},extraReducers:Object(m.a)({},f.fulfilled,(function(e,t){e.post=t.payload,e.post.reverse()}))}),w=v.actions.onLogout,S=v.reducer,N=a(26),y=a(13),I=a(1);function k(e){var t=e.children,a=Object(h.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:a?4:0})}var C=Object(l.a)((function(e){var t;return{toolbarMargin:Object(o.a)({},e.mixins.toolbar),tabContainer:Object(m.a)({width:"100vw",margin:"0.3rem"},e.breakpoints.down("xs"),{width:"90vw",marginLeft:"0.8rem"}),tabHome:{fontFamily:"Raleway",fontWeight:700,fontSize:"1rem",minWidth:10,marginRight:"auto",textTransform:"none"},tab:(t={fontFamily:"Raleway",fontWeight:700,fontSize:"1rem",minWidth:5,marginLeft:"15px"},Object(m.a)(t,e.breakpoints.down("xs"),{marginLeft:"0px"}),Object(m.a)(t,"textTransform","none"),t)}}));var L=function(e){var t=C(),a=Object(j.a)(),i=Object(u.b)(),c=Object(y.e)(),o=Object(x.a)(a.breakpoints.down("xs")),s=Object(I.jsx)(g.a,{className:t.tab,component:N.b,to:"/login",label:"Log-In"}),m=Object(I.jsx)(g.a,{className:t.tab,onClick:function(){e.handleLogin(!1),fetch("https://blooming-journey-42211.herokuapp.com/api/logout").then((function(e){return e.json()})).then((function(t){console.log(t.message),localStorage.setItem("token",""),localStorage.setItem("userId",""),localStorage.setItem("username",""),i(w()),c.push("/"),e.setValue(0)})).catch((function(e){return console.log("error occured in logout")}))},label:"Log-Out"}),l=Object(I.jsx)(g.a,{className:t.tab,component:N.b,to:"/signup",label:"Sign-Up"}),h=Object(I.jsx)(g.a,{className:t.tab,label:o?"Loans":"All Loans",component:N.b,to:"/view"});return Object(n.useEffect)((function(){"https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/"===window.location.href&&0!=e.value?e.setValue(0):"https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/signup"===window.location.href&&1!=e.value?e.setValue(1):"https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/login"===window.location.href&&2!=e.value?e.setValue(2):"https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/view"===window.location.href&&1!=e.value&&e.setValue(1)}),[e.value,e]),Object(I.jsxs)(r.a.Fragment,{children:[Object(I.jsx)(k,{children:Object(I.jsx)(d.a,{children:Object(I.jsx)(b.a,{children:Object(I.jsxs)(O.a,{className:t.tabContainer,onChange:function(t,a){e.setValue(a)},value:e.value,indicatorColor:"primary",children:[Object(I.jsx)(g.a,{className:t.tabHome,component:N.b,to:"/",label:"Tax-Block"}),e.login?h:l,e.login?m:s]})})})}),Object(I.jsx)("div",{className:t.toolbarMargin})," "]})},T=a(105),D="#0B72B9",F="#FFBA60",R=Object(T.a)({palette:{common:{blue:"".concat(D),orange:"".concat(F)},primary:{main:"".concat(D)},secondary:{main:"".concat(F)}},typography:{h2:{fontFamily:"Raleway",fontSize:"1.7rem",fontWeight:700,color:"".concat(D),lineHeight:1.5},h3:{fontSize:"1.9rem",color:D},h6:{fontSize:"1.3rem",color:"red"}}}),B=a(221),H=a(219),M=a(218),E=a(82),V=a.n(E),z=Object(l.a)((function(e){return{rootDiv:{width:"98vw"},root:Object(m.a)({width:"50vw",border:"0.5px solid grey",borderRadius:"1rem",padding:"0.8rem",marginTop:"1rem",overflowWrap:"break-word"},e.breakpoints.down("sm"),{width:"90vw",marginLeft:"0.0rem"}),grandChild:{margin:"0.5rem 0",overflowWrap:"break-word"},head:{marginTop:"3rem",textAlign:"center"}}}));var A=function(){var e=z(),t=Object(u.c)((function(e){return e.main.post})),a=t.length,r=Object(u.b)(),i=Object(I.jsxs)(M.a,{variant:"h3",className:e.head,children:["Welcome ",localStorage.getItem("username")," !"]}),c=Object(I.jsxs)(M.a,{variant:"h5",className:e.head,children:["You Have ",a," Loan"]}),o=t.map((function(t,a){return Object(I.jsx)(H.a,{item:!0,children:Object(I.jsxs)(H.a,{container:!0,direction:"column",alignItems:"center",className:e.root,children:[Object(I.jsxs)(H.a,{container:!0,direction:"column",justify:"space-between",className:e.grandChild,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{variant:"h6",children:"Name :"})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{children:t.name})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",justify:"space-between",className:e.grandChild,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{variant:"h6",children:"Address :"})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{children:t.address})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",justify:"space-between",className:e.grandChild,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{variant:"h6",children:"E-mail :"})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{children:t.email})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",justify:"space-between",className:e.grandChild,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{variant:"h6",children:"Loan Amount :"})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsxs)(M.a,{children:[t.loanAmount," Rs"]})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",justify:"space-between",className:e.grandChild,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{variant:"h6",children:"Loan Start Date :"})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{children:V()(t.startDate).format("MMMM Do YYYY")})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",justify:"space-between",className:e.grandChild,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{variant:"h6",children:"Loan Expiry Date :"})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{children:V()(t.expiryDate).format("MMMM Do YYYY")})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",justify:"space-between",className:e.grandChild,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(M.a,{variant:"h6",children:"EMI :"})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsxs)(M.a,{children:[t.monthlyInstallment," Rs"]})})]})]})})}));return Object(n.useEffect)((function(){if(localStorage.getItem("token")&&localStorage.getItem("token").length>2){var e=localStorage.getItem("userId");r(f(e))}}),[r]),Object(I.jsxs)("div",{className:e.rootDiv,children:[Object(I.jsx)("div",{children:i}),Object(I.jsx)("div",{children:0===t.length?void 0:c}),Object(I.jsx)(H.a,{container:!0,direction:"column",alignItems:"center",spacing:9,children:0===t.length?void 0:o})]})},q=a(220),W=(a(69),a(83)),Y=a.n(W),G=(a(70),Object(l.a)((function(e){return{main:{width:"100vw",margin:0},formItem:Object(m.a)({margin:"1.5rem 3rem",width:"80%"},e.breakpoints.down("xs"),{margin:"1.5rem 1rem"}),input:{padding:"0.8rem 1rem",margin:"0.5rem 0",width:"70vw",border:"1px solid orange",borderRadius:"0.5rem"},mainGrid:{},submit:{width:"9rem",marginTop:"1rem",padding:"0.6rem 1rem",border:"1px solid orange",borderRadius:"0.5rem",marginBottom:"1rem"},formHeading:Object(m.a)({marginTop:"2rem",marginBottom:"0rem",marginRight:"3rem",marginLeft:"3rem"},e.breakpoints.down("xs"),{fontSize:"1.4rem",marginTop:"2rem",marginBottom:"0rem",marginRight:"1rem",marginLeft:"1rem"}),errorHeading:{color:"red",fontSize:"1rem",margin:"1rem 3rem"}}})));var J=function(e){var t=G(),a=Object(y.e)(),r=Object(n.useState)(""),i=Object(s.a)(r,2),c=i[0],o=i[1],m=Object(u.c)((function(e){return e.main.post})),l=Object(u.b)(),j=Object(n.useState)(""),d=Object(s.a)(j,2),b=d[0],h=d[1],O=Object(n.useState)(""),g=Object(s.a)(O,2),x=g[0],p=g[1],v=Object(n.useState)(""),w=Object(s.a)(v,2),S=w[0],N=w[1],k=Object(n.useState)(0),C=Object(s.a)(k,2),L=C[0],T=C[1],D=Object(n.useState)(new Date),F=Object(s.a)(D,2),R=F[0],B=F[1],E=Object(n.useState)(new Date),V=Object(s.a)(E,2),z=V[0],A=V[1],W=Object(n.useState)(0),J=Object(s.a)(W,2),P=J[0],U=J[1],_=Object(n.useState)(0),K=Object(s.a)(_,2),Q=K[0],X=K[1];return Object(n.useEffect)((function(){if(localStorage.getItem("token")&&localStorage.getItem("token").length>2){var e=localStorage.getItem("userId");l(f(e))}}),[l]),Object(n.useEffect)((function(){new Date(R).getTime()>new Date(z).getTime()&&A(R);var e=Math.abs(z-R),t=Math.ceil(e/864e5),a=Math.ceil(t/30);X(a<2?L:Math.ceil(L/a)),U(Q)}),[R,z,L,Q,P]),Object(I.jsx)("div",{className:t.main,children:Object(I.jsxs)(H.a,{container:!0,direction:"column",spacing:3,className:t.mainGrid,children:[Object(I.jsxs)(H.a,{item:!0,children:[Object(I.jsx)(M.a,{className:t.formHeading,variant:"h2",children:"Loan Application Form"}),Object(I.jsx)(M.a,{className:t.errorHeading,variant:"h2",children:c})]}),Object(I.jsx)(H.a,{item:!0,className:t.box,children:Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:localStorage.getItem("userId"),name:b,address:x,email:S,loanAmount:L,startDate:R,expiryDate:z,monthlyInstallments:P})};fetch("https://blooming-journey-42211.herokuapp.com/api/postloandata",n).then((function(e){return e.json()})).then((function(t){if(void 0!==t.message.errors)o(t.message.errors[0].msg);else{console.log(t.message);var n=localStorage.getItem("userId");l(f(n)),console.log("after dispatching formlist is ".concat(m)),h(""),p(""),N(""),T(0),B(new Date),A(new Date),U(0),a.push("/view"),e.setValue(1)}})).catch((function(e){return console.log("error occured")}))},children:[Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"name",children:Object(I.jsx)(M.a,{children:"Full Name"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"name",type:"text",name:"name",value:b,onChange:function(e){h(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"address",children:Object(I.jsx)(M.a,{children:"Address"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"address",type:"text",name:"address",value:x,onChange:function(e){p(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"email",children:Object(I.jsx)(M.a,{children:"E-mail"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"email",type:"email",name:"email",value:S,onChange:function(e){N(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"loan",children:Object(I.jsx)(M.a,{children:"Loan Amount (Rupee)"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"loan",type:"number",name:"loan",min:"0",value:L,onChange:function(e){T(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"loanstartdate",children:Object(I.jsx)(M.a,{children:"Loan Start Date"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(Y.a,{selected:R,startDate:R,onChange:function(e){B(e)},className:t.input,minDate:R})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"loanexpirydate",children:Object(I.jsx)(M.a,{children:"Loan Expiry Date"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(Y.a,{selected:z,startDate:R,onChange:function(e){A(e)},className:t.input,minDate:R})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"emi",children:Object(I.jsx)(M.a,{children:"EMI (Rupee)"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"emi",type:"number",name:"emi",step:"100",min:"".concat(Q),max:"".concat(L),value:P,onChange:function(e){U(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsx)(H.a,{container:!0,direction:"column",className:t.formItem,children:Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(q.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,disabled:!e.login,children:"Submit"})})})]})})]})})},P=Object(l.a)((function(e){return{main:{width:"100vw",margin:0},formItem:Object(m.a)({margin:"1.5rem 3rem",width:"80%"},e.breakpoints.down("xs"),{margin:"1.5rem 1rem"}),input:{padding:"0.8rem 1rem",margin:"0.5rem 0",width:"70vw",border:"1px solid orange",borderRadius:"0.5rem"},mainGrid:{},submit:{width:"9rem",marginTop:"1rem",padding:"0.6rem 1rem",border:"1px solid orange",borderRadius:"1rem"},formHeading:Object(m.a)({marginTop:"2rem",marginBottom:"0rem",marginRight:"3rem",marginLeft:"3rem"},e.breakpoints.down("xs"),{fontSize:"1.4rem",marginTop:"2rem",marginBottom:"0rem",marginRight:"1rem",marginLeft:"1rem"}),errorHeading:{color:"red",fontSize:"1rem",margin:"1rem 3rem"}}}));var U=function(e){var t=P(),a=Object(y.e)(),r=Object(n.useState)(""),i=Object(s.a)(r,2),c=i[0],o=i[1],m=Object(n.useState)(""),l=Object(s.a)(m,2),j=l[0],d=l[1],b=Object(n.useState)(""),u=Object(s.a)(b,2),h=u[0],O=u[1],g=Object(n.useState)(""),x=Object(s.a)(g,2),p=x[0],f=x[1];return Object(I.jsx)("div",{className:t.main,children:Object(I.jsxs)(H.a,{container:!0,direction:"column",spacing:3,className:t.mainGrid,children:[Object(I.jsxs)(H.a,{item:!0,children:[Object(I.jsx)(M.a,{className:t.formHeading,variant:"h2",children:"Sign Up Form"}),Object(I.jsx)(M.a,{className:t.errorHeading,variant:"h2",children:p})]}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,name:j,password:h})};fetch("https://blooming-journey-42211.herokuapp.com/api/signup",n).then((function(e){return e.json()})).then((function(t){void 0!==t.message.errors?f(t.message.errors[0].msg):"email taken"===t.message?f("Email Taken !"):(a.push("/login"),e.setValue(2))})).catch((function(e){return console.log("error occured")}))},children:[Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"username",children:Object(I.jsx)(M.a,{children:"Email"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"username",type:"email",name:"username",value:c,onChange:function(e){o(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"name",children:Object(I.jsx)(M.a,{children:"UserName"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"name",type:"text",name:"name",value:j,onChange:function(e){d(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"password",children:Object(I.jsx)(M.a,{children:"Password"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"password",type:"password",name:"password",value:h,onChange:function(e){O(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsx)(H.a,{container:!0,direction:"column",className:t.formItem,children:Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(q.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,children:"Sign-in"})})})]})})]})})},_=Object(l.a)((function(e){return{main:{width:"100vw",margin:0},formItem:Object(m.a)({margin:"1.5rem 3rem",width:"80%"},e.breakpoints.down("xs"),{margin:"1rem 1rem"}),input:{padding:"0.8rem 1rem",margin:"0.5rem 0",width:"70vw",border:"1px solid orange",borderRadius:"0.5rem"},mainGrid:{},submit:{width:"9rem",marginTop:"1rem",padding:"0.6rem 1rem",border:"1px solid orange",marginBottom:"1rem",borderRadius:"0.5rem"},formHeading:Object(m.a)({marginTop:"2rem",marginBottom:"0rem",marginRight:"3rem",marginLeft:"3rem"},e.breakpoints.down("xs"),{fontSize:"1.4rem",marginTop:"2rem",marginBottom:"0rem",marginRight:"1rem",marginLeft:"1rem"}),errorHeading:{color:"red",fontSize:"1rem",margin:"1rem 3rem"}}}));var K=function(e){var t=_(),a=Object(u.b)(),r=Object(y.e)(),i=Object(n.useState)(""),c=Object(s.a)(i,2),o=c[0],m=c[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),d=j[0],b=j[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),g=O[0],x=O[1];return Object(I.jsx)("div",{className:t.main,children:Object(I.jsxs)(H.a,{container:!0,direction:"column",spacing:3,className:t.mainGrid,children:[Object(I.jsxs)(H.a,{item:!0,children:[Object(I.jsx)(M.a,{className:t.formHeading,variant:"h2",children:"Login Form"}),Object(I.jsx)(M.a,{className:t.errorHeading,variant:"h2",children:g})]}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:d})};fetch("https://blooming-journey-42211.herokuapp.com/api/login",n).then((function(e){return e.json()})).then((function(t){if(!1!==t.user){var n=t.token,i=t.user._id,c=t.user.name;localStorage.setItem("username",c),localStorage.setItem("token",n),localStorage.setItem("userId",i),e.handleLogin(!0);var o=localStorage.getItem("userId");a(f(o)),r.push("/"),e.setValue(0)}else x("Wrong Credentials !")})).catch((function(e){return console.log("error occured")}))},children:[Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"username",children:Object(I.jsx)(M.a,{children:"Email"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"username",type:"email",name:"username",value:o,onChange:function(e){m(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsxs)(H.a,{container:!0,direction:"column",className:t.formItem,children:[Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("label",{htmlFor:"password",children:Object(I.jsx)(M.a,{children:"Password"})})}),Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)("input",{id:"password",type:"password",name:"password",value:d,onChange:function(e){b(e.target.value)},required:!0,className:t.input})})]}),Object(I.jsx)(H.a,{container:!0,direction:"column",className:t.formItem,children:Object(I.jsx)(H.a,{item:!0,children:Object(I.jsx)(q.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,children:"Log-in"})})})]})})]})})};a(183);var Q=function(){var e,t=localStorage.getItem("token");e=!!(t&&t.length>2);var a=Object(n.useState)(e),r=Object(s.a)(a,2),i=r[0],c=r[1],m=Object(n.useState)(0),l=Object(s.a)(m,2),j=l[0],d=l[1],b=function(e){c(e)};return Object(I.jsx)(B.a,{theme:R,children:Object(I.jsxs)(N.a,{children:[Object(I.jsx)(L,{login:i,handleLogin:b,value:j,setValue:d}),Object(I.jsx)(y.a,{exact:!0,path:"/",render:function(e){return Object(I.jsx)(J,Object(o.a)(Object(o.a)({},e),{},{login:i,handleLogin:b,value:j,setValue:d}))}}),Object(I.jsx)(y.a,{exact:!0,path:"/signup",render:function(e){return Object(I.jsx)(U,Object(o.a)(Object(o.a)({},e),{},{login:i,handleLogin:b,value:j,setValue:d}))}}),Object(I.jsx)(y.a,{exact:!0,path:"/view",component:A}),Object(I.jsx)(y.a,{exact:!0,path:"/login",render:function(e){return Object(I.jsx)(K,Object(o.a)(Object(o.a)({},e),{},{login:i,handleLogin:b,value:j,setValue:d}))}})]})})},X=Object(p.a)({reducer:{main:S}});c.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(u.a,{store:X,children:Object(I.jsx)(Q,{})})}),document.getElementById("root"))},69:function(e,t,a){}},[[184,1,2]]]);
//# sourceMappingURL=main.173a7582.chunk.js.map