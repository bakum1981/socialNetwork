(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{12:function(e,t,n){e.exports={navbar:"Navbar_navbar__12vak",active:"Navbar_active__1xXSV",navMenu:"Navbar_navMenu__1TJmf",item:"Navbar_item__2aT1L",navLink:"Navbar_navLink__2hmGx",hamburger:"Navbar_hamburger__2pdnJ"}},130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(1),n(37)),c=n.n(r),s=n(6),i=n(72),o=n(16),u=n.n(o),l=n(95),j=n(29),b=n(23),d=n(35),O=n(70),f=n(14),m=Object(j.a)(50),p=Object(l.a)({form:"message"})((function(e){var t=Object(s.d)((function(e){return e.dialogs})).message;return Object(a.jsx)("form",{onSubmit:e.handleSubmit,children:Object(a.jsxs)("div",{className:c.a.addMessage,children:[Object(b.c)(null,"your message",b.b,"textarea",[j.b,m],{value:t,className:c.a.textarea}),Object(a.jsx)("div",{className:c.a.buttonWrap,children:Object(a.jsx)("button",{className:u()("button",c.a.button),children:"send"})})]})})}));t.default=function(e){var t=Object(s.d)((function(e){return e.dialogs})).messages,n=Object(s.d)((function(e){return e.auth})).isAuth,r=Object(s.c)();if(!n)return Object(a.jsx)(f.a,{to:"/login"});return Object(a.jsxs)("div",{className:u()("content",c.a.dialogsContent),children:[Object(a.jsxs)("div",{className:c.a.names,children:[Object(a.jsx)(d.a,{name:"Artem"}),Object(a.jsx)(d.a,{name:"Ludmila"}),Object(a.jsx)(d.a,{name:"Julia"}),Object(a.jsx)(d.a,{name:"Kesha"}),Object(a.jsx)(d.a,{name:"Rin"})]}),Object(a.jsxs)("div",{className:c.a.messages,children:[t.map((function(e,t){return Object(a.jsx)(O.a,{text:e},e+"_"+t)})),Object(a.jsx)(p,{onSubmit:function(e){r(Object(i.a)(e.textarea))}})]})]})}},136:function(e,t,n){e.exports={content:"DialogsItem_content__1FGMu",name:"DialogsItem_name__1oCOf",message:"DialogsItem_message__3oZir"}},137:function(e,t,n){e.exports={messages:"Message_messages__aZ8UW",message:"Message_message__1_SP_"}},168:function(e,t,n){},169:function(e,t,n){},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return f}));var a=n(4),r=n(30),c=n(76),s=n(0),i=(n(1),n(59)),o=n.n(i),u=n(16),l=n.n(u),j=n(94),b=(n(29),function(e){e.input;var t=e.meta,n=e.children,a=(Object(c.a)(e,["input","meta","children"]),t.touched&&t.error);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:l()(Object(r.a)({},o.a.error,a),o.a.formControls),children:n}),a&&Object(s.jsx)("p",{className:o.a.textError,children:t.error})]})}),d=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,["input","meta","children"]));return Object(s.jsx)(b,Object(a.a)(Object(a.a)({},e),{},{children:Object(s.jsx)("textarea",Object(a.a)(Object(a.a)({},t),n))}))},O=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,["input","meta","children"]));return Object(s.jsx)(b,Object(a.a)(Object(a.a)({className:o.a.formControlsInput},e),{},{children:Object(s.jsx)("input",Object(a.a)(Object(a.a)({},t),n))}))},f=function(e,t,n,r,c,i){return Object(s.jsx)(j.a,Object(a.a)({type:e,placeholder:t,component:n,name:r,validate:c},i))}},26:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__Jj8ax",userBlock:"Users_userBlock__3XBRv",page:"Users_page__3fOsF",active:"Users_active__2oskv",button:"Users_button__1e7Sq",after:"Users_after__5moqm",content:"Users_content__3BOzc"}},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(68),i=n.n(s),o=(n(168),n(169),n(14)),u=n(6),l=n(11),j=n.n(l),b=n(18),d=n(4),O=n(133).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"993c6968-c019-47b9-9dad-e50241ca39cc"}}),f={getUsers:function(e,t){return O.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},setUnfollow:function(e){return O.delete("follow/".concat(e)).then((function(e){return e.data}))},setFollow:function(e){return O.post("follow/".concat(e),{}).then((function(e){return e.data}))}},m=function(e){return O.get("profile/".concat(e)).then((function(e){return e.data}))},p=function(e){return O.get("/profile/status/".concat(e)).then((function(e){return e.data}))},h=function(e){return O.put("/profile/status",{status:e}).then((function(e){return e.data}))},_=function(){return O.get("auth/me").then((function(e){return e.data}))},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return O.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},x=function(){return O.delete("auth/login").then((function(e){return e.data}))},g=n(40),N="SET__USERS__DATA-socialNetwork",w={id:null,email:null,login:null,isAuth:!1},k=function(e,t,n,a){return{type:N,data:{id:e,email:t,login:n,isAuth:a}}},C=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,a=n.data,r=a.id,c=a.login,s=a.email,0===n.resultCode&&t(k(r,s,c,!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),t.data);default:return e}},S="INITIALIZED__SUCCESS-socialNetwork",y={initialized:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},F=n.p+"static/media/preloader.be520562.svg",L=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:F,alt:"Preloader"})})},T=n(13),B=n(48),I="ADD__POST-socialNetwork",U="CHANGE__VALUE-socialNetwork",A="SET__USER__PROFILE-socialNetwork",D="SET__STATUS-socialNetwork",M="DELETE__POST-socialNetwork",R={posts:[{post:"How, are you?",likes:20,id:1},{post:"Where are you?",likes:20,id:2}],profile:null,status:""},W=function(e){return{type:D,status:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var n={post:t.newPost,likes:20,id:3};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(B.a)(e.posts),[n])});case U:return Object(d.a)(Object(d.a)({},e),{},{newPost:t.newVal});case A:return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case D:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case M:return Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}},G=n(72),J=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(d.a)(Object(d.a)({},e),a):e}))},V="SET__CURRENT__PAGE-socialNetwork",z="SET__TOTAL__USERS__COUNT-socialNetwork",q="SET__USERS-socialNetwork",K="FOLLOW-socialNetwork",X="UNFOLLOW-socialNetwork",Z="SET__IS__FETCHING-socialNetwork",Q="TOGGLE__FOLLOWING__PROCESS-socialNetwork",Y={users:[],portionSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowing:[]},$=function(e){return{type:K,id:e}},ee=function(e){return{type:X,id:e}},te=function(e){return{type:Z,payload:e}},ne=function(e,t){return{type:Q,isFetching:e,id:t}},ae=function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(a){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(te(!0)),n.next=3,f.getUsers(e,t);case 3:r=n.sent,a((s=r.items,{type:q,users:s})),a((c=r.totalCount,{type:z,totalCount:c})),a(te(!1));case 7:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()},re=function(){var e=Object(b.a)(j.a.mark((function e(t,n,a,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(!0,r)),e.next=3,n(r);case 3:0==e.sent.resultCode&&t(a(r)),t(ne(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case Z:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.payload});case V:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case z:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.totalCount});case K:return Object(d.a)(Object(d.a)({},e),{},{users:J(e.users,t.id,"id",{followed:!0})});case X:return Object(d.a)(Object(d.a)({},e),{},{users:J(e.users,t.id,"id",{followed:!1})});case Q:return Object(d.a)(Object(d.a)({},e),{},{isFollowing:t.isFetching?[].concat(Object(B.a)(e.isFollowing),[t.id]):e.isFollowing.filter((function(e){return t.id!=e}))});default:return e}},se=n(134),ie=n(131),oe=Object(T.c)({profile:H,dialogs:G.b,users:ce,auth:P,form:ie.a,app:E}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,le=Object(T.e)(oe,ue(Object(T.a)(se.a)));window.store=le;var je=le,be=n(15),de=n(49),Oe=n.n(de),fe=n(16),me=n.n(fe),pe=function(){var e=Object(u.d)((function(e){return e.auth})),t=(e.id,e.email,e.login),n=e.isAuth,r=Object(u.c)();return Object(a.jsxs)("header",{className:Oe.a.header,children:[Object(a.jsx)("h1",{children:"HELLO, WORLD"}),Object(a.jsxs)("div",{className:Oe.a.loginWrap,children:[n&&Object(a.jsx)("button",{className:me()(Oe.a.buttonLogout,"button"),onClick:function(){r(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===e.sent.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"logout"}),Object(a.jsx)("div",{className:Oe.a.login,children:Object(a.jsx)(be.b,{to:"/login",children:n?t:"Login"})})]}),Object(a.jsxs)("h2",{className:Oe.a.logo,children:[Object(a.jsx)("span",{children:"Social"}),"Net"]})]})},he=n(30),_e=n(36),ve=n(12),xe=n.n(ve),ge=function(){var e=c.a.useState(!1),t=Object(_e.a)(e,2),n=t[0],r=t[1],s=c.a.useState(!1),i=Object(_e.a)(s,2),o=i[0],u=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:me()(Object(he.a)({},xe.a.active,n),xe.a.hamburger),onClick:function(){r(!n),u(!o)},children:Object(a.jsx)("span",{})}),Object(a.jsx)("div",{className:me()(Object(he.a)({},xe.a.active,n),xe.a.navbar),children:Object(a.jsx)("nav",{className:xe.a.nav,children:Object(a.jsxs)("ul",{className:xe.a.navMenu,children:[Object(a.jsx)("li",{className:xe.a.item,children:Object(a.jsx)(be.b,{className:xe.a.navLink,activeClassName:xe.a.active,to:"/profile",children:"Profile"})}),Object(a.jsx)("li",{className:xe.a.item,children:Object(a.jsx)(be.b,{className:xe.a.navLink,activeClassName:xe.a.active,to:"/dialogs",children:"Messages"})}),Object(a.jsx)("li",{className:xe.a.item,children:Object(a.jsx)(be.b,{className:xe.a.navLink,activeClassName:xe.a.active,to:"/users",children:"Users"})}),Object(a.jsx)("li",{className:xe.a.item,children:Object(a.jsx)(be.b,{className:xe.a.navLink,activeClassName:xe.a.active,to:"/login",children:"Login"})}),Object(a.jsx)("li",{className:xe.a.item,children:Object(a.jsx)(be.b,{className:xe.a.navLink,activeClassName:xe.a.active,to:"/news",children:"News"})}),Object(a.jsx)("li",{className:xe.a.item,children:Object(a.jsx)(be.b,{className:xe.a.navLink,activeClassName:xe.a.active,to:"/music",children:"Music"})})]})})})]})},Ne=n(8),we=n.n(Ne),ke=n.p+"static/media/header_images.86c54659.jpg",Ce=n.p+"static/media/userAvatar.e502ba51.png",Pe=function(e){var t=e.status,n=Object(r.useState)(!1),c=Object(_e.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(t),l=Object(_e.a)(o,2),d=l[0],O=l[1],f=Object(u.d)((function(e){return e.profile.profile})).userId,m=Object(u.d)((function(e){return e.auth})).id;Object(r.useEffect)((function(){O(t)}),[t]);var p=Object(u.c)();return Object(a.jsxs)("div",{children:[s&&Object(a.jsx)("div",{className:we.a.input,onBlur:function(e){i(!1),f===m&&p(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:0===t.sent.resultCode&&n(W(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e.target.value))},onChange:function(e){var t=e.target.value;O(t)},children:Object(a.jsx)("input",{type:"text",value:d,autoFocus:!0})}),!s&&Object(a.jsx)("span",{className:we.a.statusText,onDoubleClick:function(){i(!0)},children:t||"-----"})]})},Se=Object(T.d)(o.f)((function(e){var t=Object(u.d)((function(e){return e.profile})),n=t.profile,c=t.status,s=Object(u.d)((function(e){return e.auth})).isAuth,i=Object(u.d)((function(e){return e.auth.id})),l=e.match.params.userId;l||(l=i)||e.history.push("/login");var d=Object(u.c)();return Object(r.useEffect)((function(){d(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:a=t.sent,n({type:A,profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l)),d(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:a=t.sent,n(W(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l))}),[c]),s?n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:we.a.background,children:Object(a.jsx)("img",{className:we.a.image,src:ke,alt:"Phone"})}),Object(a.jsxs)("div",{className:we.a.description,children:[Object(a.jsx)("div",{className:me()(we.a.avatar,we.a.infoAvatar),children:Object(a.jsx)("img",{className:we.a.avatarImg,src:n.photos.small?n.photos.small:Ce,alt:"Avatar"})}),Object(a.jsx)(Pe,{status:c}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.aboutMe}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.facebook}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.website}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.vk}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.twitter}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.instagram}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.youtube}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.github}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.contacts.mainLink}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.lookingForAJob}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.lookingForAJobDescription}),Object(a.jsx)("div",{className:we.a.descriptionBlock,children:n.fullName})]})]}):Object(a.jsx)(L,{}):Object(a.jsx)(o.a,{to:"/login"})})),ye=n.p+"static/media/anonymous_steam_avatars-1-1.a585a8f0.jpg",Ee=n(95),Fe=n(29),Le=n(23),Te=Object(Fe.a)(10),Be=c.a.memo((function(e){var t=Object(u.d)((function(e){return e.profile.newPost})),n=Object(r.createRef)();return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{className:we.a.newPosts,children:Object(Le.c)(null,"your news",Le.b,"textarea",[Fe.b,Te],{value:t,className:we.a.textarea,ref:n})}),Object(a.jsx)("div",{className:we.a.buttonWrap,children:Object(a.jsx)("button",{className:me()("button",we.a.button),children:"send"})})]})})),Ie=Object(Ee.a)({form:"posts"})(Be),Ue=c.a.memo((function(e){var t=Object(u.d)((function(e){return e.profile.posts})),n=Object(u.c)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:we.a.posts,children:[Object(a.jsx)("h2",{children:"My posts"}),Object(a.jsx)(Ie,{onSubmit:function(e){var t;n((t=e.textarea,{type:I,newPost:t}))}}),t.map((function(e,t){return Object(a.jsxs)("div",{className:we.a.post,children:[Object(a.jsx)("div",{className:we.a.postImg,children:Object(a.jsx)("img",{src:ye,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})}),Object(a.jsx)("span",{className:we.a.postText,children:e.post}),Object(a.jsxs)("span",{className:we.a.likes,children:["Likes: ",e.likes]})]},t+"_"+e.id)}))]})})})),Ae=(n(130),n(35),n(70),n(26)),De=n.n(Ae),Me=n(42),Re=n.n(Me),We=n.p+"static/media/arrowRight.e9940b74.svg",He=n.p+"static/media/arrowLeft.e204da84.svg",Ge=function(e){for(var t=Object(u.d)((function(e){return e.users})),n=t.portionSize,c=t.totalUsersCount,s=t.currentPage,i=Object(u.c)(),o=[],l=Math.ceil(c/n),j=1;j<=l;j++)o.push(j);var b=l/10,d=Object(r.useState)(Math.ceil(s/10)),O=Object(_e.a)(d,2),f=O[0],m=O[1],p=10*(f-1)+1,h=10*f;console.log(f);var _=function(e){i(ae(n,e)),i(function(e){return{type:V,currentPage:e}}(e))};return Object(a.jsxs)("div",{className:Re.a.pagesRow,children:[f>1&&Object(a.jsx)("button",{className:Re.a.pageButton,onClick:function(){return m(f-1)},children:Object(a.jsx)("img",{src:He,alt:""})}),Object(a.jsx)("div",{className:Re.a.pages,children:o.filter((function(e){return e>=p&&e<=h})).map((function(e,t){return Object(a.jsx)("span",{onClick:function(){return _(e)},className:me()(Object(he.a)({},Re.a.active,e===s),Re.a.page),children:e},e+"_"+t)}))}),b>f&&Object(a.jsx)("button",{className:Re.a.pageButton,onClick:function(){return m(f+1)},children:Object(a.jsx)("img",{src:We,alt:""})})]})},Je=function(e){var t=e.name,n=e.age,r=e.status,c=e.photos,s=e.id,i=e.followed,o=e.isFollowing,l=Object(u.c)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(be.b,{to:"/profile/"+s,children:Object(a.jsx)("div",{className:De.a.userPhoto,children:Object(a.jsx)("img",{src:null!==c.small?c.small:Ce,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})})}),Object(a.jsx)("div",{className:De.a.userName,children:t}),Object(a.jsx)("div",{className:De.a.userAge,children:n}),Object(a.jsx)("div",{className:De.a.userStatus,children:r}),Object(a.jsx)("div",{className:De.a.userCountry,children:"user.location.country"}),Object(a.jsx)("div",{className:De.a.userCity,children:"user.location.city"}),Object(a.jsx)("button",{className:me()("button",De.a.button),disabled:o.some((function(e){return e===s})),onClick:function(){var e;l(ne(!0,s)),l(i?(e=s,function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=f.setUnfollow.bind(e),re(n,a,ee,e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=f.setFollow.bind(e),re(n,a,$,e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(s))},children:i?"follow":"unfollow"})]})},Ve=function(e){var t=Object(u.d)((function(e){return e.users})),n=t.users,c=t.portionSize,s=t.totalUsersCount,i=t.currentPage,o=t.isFetching,l=t.isFollowing,j=Object(u.c)();return Object(r.useEffect)((function(){j(ae(c,i))}),[]),Object(a.jsx)(a.Fragment,{children:o?Object(a.jsx)(L,{}):Object(a.jsxs)("div",{className:me()("content",De.a.content),children:[Object(a.jsx)(Ge,{totalUsersCount:s}),n.map((function(e,t){return Object(a.jsx)("div",{className:De.a.userBlock,children:Object(a.jsx)(Je,Object(d.a)(Object(d.a)({},e),{},{isFollowing:l}))},t+"_"+e.name)}))]})})},ze=n(75),qe=n.n(ze),Ke=Object(Ee.a)({form:"login"})((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:e.handleSubmit,className:qe.a.loginForm,children:[Object(a.jsx)("div",{className:"formInput",children:Object(Le.c)("text","Login",Le.a,"email",Fe.b)}),Object(a.jsx)("div",{className:"formInput",children:Object(Le.c)("password","Password",Le.a,"password",Fe.b)}),Object(a.jsx)("div",{children:Object(Le.c)("checkbox",null,"input","rememberMe",null,{className:"formCheckbox"})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button "+qe.a.loginButton,children:"Login"})}),e.error&&Object(a.jsx)("div",{className:qe.a.loginError,children:e.error})]})})})),Xe=function(e){var t=Object(u.d)((function(e){return e.auth})).isAuth,n=Object(u.c)();return t?Object(a.jsx)(o.a,{to:"/profile"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Login"}),Object(a.jsx)(Ke,{onSubmit:function(e){var t,a,r;n((t=e.email,a=e.password,r=e.rememberMe,function(){var e=Object(b.a)(j.a.mark((function e(n){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,a,r);case 2:0===(c=e.sent).resultCode?n(C()):(s=c.messages.length>0?c.messages[0]:"some Error",n(Object(g.a)("login",{_error:s})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})]})},Ze=function(e){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)(Se,{}),Object(a.jsx)(Ue,{})]})},Qe=c.a.lazy((function(){return Promise.resolve().then(n.bind(null,130))})),Ye=function(e){var t=Object(u.c)(),n=Object(u.d)((function(e){return e.app})).initialized;return Object(r.useEffect)((function(){t(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(C());case 2:n=e.sent,Promise.all([n]),t({type:S});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),n?Object(a.jsx)("div",{className:"appWrapper",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(pe,{}),Object(a.jsx)(ge,{}),Object(a.jsx)(o.b,{path:"/profile/:userId?",component:Ze}),Object(a.jsx)(o.b,{path:"/dialogs",render:function(){return Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(Qe,{})})}}),Object(a.jsx)(o.b,{path:"/users",component:Ve}),Object(a.jsx)(o.b,{path:"/login",component:Xe})]})}):Object(a.jsx)(L,{})},$e=function(e){return Object(a.jsx)(be.a,{children:Object(a.jsx)(u.a,{store:je,children:Object(a.jsx)(Ye,{})})})},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)($e,{}),document.getElementById("root")),et()},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Must be ".concat(e," characters or less")}}},35:function(e,t,n){"use strict";var a=n(0),r=(n(1),n(136)),c=n.n(r),s=n(15);t.a=function(e){var t=e.name,n=e.id;return Object(a.jsx)("div",{className:c.a.name,children:Object(a.jsx)(s.b,{to:"/dialogs/"+n,children:t})})}},37:function(e,t,n){e.exports={dialogsContent:"Dialogs_dialogsContent__1gCTC",name:"Dialogs_name__2pmV9",message:"Dialogs_message__1KQkI",addMessage:"Dialogs_addMessage__2xR0I",textarea:"Dialogs_textarea__3OD2t",buttonWrap:"Dialogs_buttonWrap__2n4UF",button:"Dialogs_button__1TNqY"}},42:function(e,t,n){e.exports={pagesRow:"Paginator_pagesRow__3rvQC",pages:"Paginator_pages__1UJwc",active:"Paginator_active__1N0uD",pageButton:"Paginator_pageButton__1N6W3"}},49:function(e,t,n){e.exports={header:"Header_header__2Looy",logo:"Header_logo__2hINE",login:"Header_login__1q58M",buttonLogout:"Header_buttonLogout__25pn8",hamburger:"Header_hamburger__2y2Bz"}},59:function(e,t,n){e.exports={formControlsInput:"FormControls_formControlsInput__3olgA",formControls:"FormControls_formControls__3sadh",error:"FormControls_error__HuO_3",textError:"FormControls_textError__aWBX0"}},70:function(e,t,n){"use strict";var a=n(0),r=(n(1),n(137)),c=n.n(r);t.a=function(e){var t=e.text;return Object(a.jsx)("div",{className:c.a.message,children:Object(a.jsx)("span",{children:t})})}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(48),r=n(4),c="ADD__MESSAGE-socialNetwork",s={messages:["hello","How, are you!","Hi","My name is Kesha!","I`m a cat"]},i=function(e){return{type:c,messageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[t.messageBody])});default:return e}}},75:function(e,t,n){e.exports={loginForm:"Login_loginForm__30Zhe",loginButton:"Login_loginButton__3sDbF",loginError:"Login_loginError__2P-JV"}},8:function(e,t,n){e.exports={background:"Profile_background__R8bc4",image:"Profile_image__22AcV",description:"Profile_description__82lQl",avatar:"Profile_avatar__Bq5Q_",infoAvatar:"Profile_infoAvatar__1nGVF",descriptionBlock:"Profile_descriptionBlock__1K_Zd",avatarImg:"Profile_avatarImg__3-K_T",textarea:"Profile_textarea__3_qSW",posts:"Profile_posts__1UofP",buttonWrap:"Profile_buttonWrap__2CgVb",post:"Profile_post__2rljv",postImg:"Profile_postImg__2YA38",postText:"Profile_postText__1GhrE",likes:"Profile_likes__1kVWH",statusText:"Profile_statusText__PWwPg",content:"Profile_content__1E9rW",button:"Profile_button__dncc8"}}},[[289,1,2]]]);
//# sourceMappingURL=main.6ff377d0.chunk.js.map