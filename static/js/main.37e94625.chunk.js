(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{54:function(e,t,a){e.exports=a(69)},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(50),l=a.n(c),u=a(12),i=a(35),o=a(16),s=a(51),m=a(37);a(60),a(71),a(70);m.a.initializeApp({apiKey:"AIzaSyCEmhz5fiEULV_LQVkavYdll7QtiZ2_xaA",authDomain:"nwitter-93bb8.firebaseapp.com",projectId:"nwitter-93bb8",storageBucket:"nwitter-93bb8.appspot.com",messagingSenderId:"214947814821",appId:"1:214947814821:web:4ab3db70ef5db72180dc4c"});var p=m.a,f=m.a.auth(),d=m.a.firestore(),b=m.a.storage(),E=a(0),h=a.n(E),v=a(3),g=a(24),y=a(30),w=function(e){var t=e.nweet,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(t.text),m=Object(u.a)(s,2),p=m[0],f=m[1],E=function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ud574\ub2f9 \uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,d.doc("nweets/".concat(t.id)).delete();case 4:if(!t.attachmentUrl){e.next=7;break}return e.next=7,b.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return o(!i)},O=function(){var e=Object(v.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,d.doc("nweets/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:p,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:w,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:E},r.a.createElement(g.a,{icon:y.d})),r.a.createElement("span",{onClick:w},r.a.createElement(g.a,{icon:y.a})))))},O=a(73),j=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],p=s[1],f=function(){var e=Object(v.a)(h.a.mark((function e(a){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",!m){e.next=10;break}return r=b.ref().child("".concat(t.uid,"/").concat(Object(O.a)())),e.next=6,r.putString(m,"data_url");case 6:return c=e.sent,e.next=9,c.ref.getDownloadURL();case 9:n=e.sent;case 10:return e.next=12,d.collection("nweets").add({text:l,createAt:Date.now(),creatorId:t.uid,attachmentUrl:n});case 12:i(""),p("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:f,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(g.a,{icon:y.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;p(t)},a.readAsDataURL(t)},style:{opacity:0}}),m&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:m,style:{backgroundImage:m}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){p("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:y.c}))))},x=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){d.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(j,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(w,{key:e.id,nweet:e,isOwner:e.creatorId===t.uid})}))))},N=a(36),k=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),d=p[0],b=p[1],E=Object(n.useState)(!0),g=Object(u.a)(E,2),y=g[0],w=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!y){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message),b(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:y?"Create Account":"Log In"}),d&&r.a.createElement("span",{className:"authError"},d)),r.a.createElement("span",{onClick:function(){return w(!y)},className:"authSwitch"},y?"Log in":"Create Account"))},S=function(){var e=function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return("google"===(a=t.target.name)||"github"===a)&&(n=new p.auth.GoogleAuthProvider),e.next=4,f.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:N.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(k,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{name:"google",onClick:e,className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:N.b})),r.a.createElement("button",{name:"github",onClick:e,className:"authBtn"},"Continue with Github ",r.a.createElement(g.a,{icon:N.a}))))},I=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:N.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:y.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},C=function(e){var t=e.userObj,a=e.refreshUser,c=Object(o.f)(),l=Object(n.useState)(t.displayName),i=Object(u.a)(l,2),s=i[0],m=i[1],p=function(){var e=Object(v.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.collection("nweets").where("creatorId","==",t.uid).orderBy("createAt").get();case 2:a=e.sent,console.log(a.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);var b=function(){var e=Object(v.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:b,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;m(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Updata Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/")}},"Log Out"))},F=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,a&&r.a.createElement(I,{userObj:n}),r.a.createElement(o.c,null,r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(x,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(C,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(S,null))))))};var A=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(u.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)(null),p=Object(u.a)(m,2),d=p[0],b=p[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){e?(s(!0),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):s(!1),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(F,{refreshUser:function(){var e=f.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:o,userObj:d}):"Initializing....")};a(68);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.37e94625.chunk.js.map