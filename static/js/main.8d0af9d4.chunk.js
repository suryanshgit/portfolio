(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i(15),o=i.n(s),l=(i(26),i(9)),n=(i.p,i(27),i(4)),c=(i(28),i(20)),r=i.n(c),d=i(0),u=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),i=t[0],s=t[1],o=Object(a.useContext)(U);console.log("value of state in Header"),console.log(o),console.log(o.state),window.addEventListener("resize",(function(){window.innerWidth>768?document.querySelector(".menu-container").style.display="block":document.querySelector(".menu-container").style.display="none"}));var c=Object(a.useState)(window.innerWidth),u=Object(l.a)(c,2),m=(u[0],u[1],function(){s(!i),document.querySelector(".menu-container").style.display=1==i?"none":"block"});return o.state?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:" main-div",children:[Object(d.jsxs)("div",{className:" brand-name",children:[" ",Object(d.jsx)(n.b,{className:"navlink",to:"/portfolio/",children:"Foodpedia"})]}),Object(d.jsx)("div",{className:" menu-container ",children:Object(d.jsxs)("ul",{className:i?"mobile-view":"desktop-view",children:[Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink",activeClassName:"selected_class",to:"/portfolio/home",children:"Home"})}),Object(d.jsxs)("li",{className:"mainMenu",children:[Object(d.jsx)(n.c,{className:"navlink mainMenu-content ",activeClassName:"selected_class",to:"/portfolio/content",children:"Famous Food  "}),Object(d.jsxs)("ul",{className:"subMenu",children:[Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink ",to:"/portfolio/content/Maharashtra",children:"Maharashtra"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink ",to:"/portfolio/content/UP",children:"Uttar Pradesh"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink ",to:"/portfolio/content/Bihar",children:"Bihar"})})]})]}),Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink",activeClassName:"selected_class",to:"/portfolio/about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink",activeClassName:"selected_class",to:"/portfolio/logout",children:"Logout"})})]})}),Object(d.jsx)("div",{className:" hamburger ",children:Object(d.jsx)("button",{className:"bg-primary",onClick:m,style:{border:"none",color:"white"},children:Object(d.jsx)(r.a,{})})})]})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:" main-div",children:[Object(d.jsxs)("div",{className:" brand-name",children:[" ",Object(d.jsx)(n.b,{className:"navlink",to:"/",children:"Foodpedia"})]}),Object(d.jsx)("div",{className:" menu-container ",children:Object(d.jsxs)("ul",{className:i?"mobile-view":"desktop-view",children:[Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink",activeClassName:"selected_class",to:"/portfolio/home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink",activeClassName:"selected_class",to:"/portfolio/about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink",activeClassName:"selected_class",to:"/portfolio/login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.c,{className:"navlink",activeClassName:"selected_class",to:"/portfolio/register",children:"Register"})})]})}),Object(d.jsx)("div",{className:" hamburger ",children:Object(d.jsx)("button",{className:"bg-primary",onClick:m,style:{border:"none",color:"white"},children:Object(d.jsx)(r.a,{})})})]})})},m=(i(42),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("p",{children:"Created by @suryanshtiwary "})})})}),p=[{id:"1",state:"Maharashtra",images:["../Food_pics/Maharashtrian_food/puran_poli.jpg","../Food_pics/Maharashtrian_food/misal_pav.jpg","../Food_pics/Maharashtrian_food/modak.jpg","../Food_pics/Maharashtrian_food/pav_bhaji.jpeg","../Food_pics/Maharashtrian_food/vada_pav.jpg"],food:["Puran Poli","Misal Pav","Modak","Pav Bhaji","Vada Pav"]},{id:"2",state:"UP",images:["../Food_pics/Bengal_food/ghugani chat.jpg","../Food_pics/Bengal_food/jhalmuri.gif","../Food_pics/Bengal_food/Phuchaka.jpg"],food:["Puran Poli","Misal Pav","Modak","Pav Bhaji","Vada Pav"]},{id:"3",state:"Bihar",images:["../Food_pics/Bihar_food/khaja.jpeg","../Food_pics/Bihar_food/khurma.jpg","../Food_pics/Bihar_food/litti chokha.webp","../Food_pics/Bihar_food/Makhana-Kheer.jpg","../Food_pics/Bihar_food/pitha.png"],food:["Puran Poli","Misal Pav","Modak","Pav Bhaji","Vada Pav"]}],j=i(3),b=(i(43),function(e){var t=e.image,i=e.id;return console.log("Value of image is "),console.log(t),console.log("Valud of id is "),console.log(i),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"item-main-div",id:"item-main-div"+i,children:Object(d.jsxs)("div",{className:"item-container",id:"item-container"+i,children:[Object(d.jsx)("img",{className:"item-image",id:"item-image"+i,src:t,alt:"food item image"}),Object(d.jsxs)("div",{className:"item-description",id:"item-description"+i,children:["Sint tempor ut cupidatat nostrud nostrud aute excepteur. Adipisicing ut est aliqua qui ex sit nulla. ",Object(d.jsx)("span",{className:"dots"+i,children:"..."}),Object(d.jsx)("span",{className:"hidden-item-description"+i,style:{display:"none"},children:"Amet consectetur consequat nisi ex do sit irure do id et eu. Nisi consectetur officia qui consectetur consectetur culpa cupidatat ut nostrud exercitation. Excepteur minim do cupidatat laborum elit nulla reprehenderit commodo amet pariatur reprehenderit. Do sit officia mollit cupidatat minim adipisicing laboris reprehenderit ullamco elit. Ea in cillum voluptate cupidatat."}),Object(d.jsx)("button",{className:"btn"+i,onClick:function(){!function(e){console.log("value of id is"),console.log(e);var t=document.querySelector(".dots"+e),i=document.querySelector(".hidden-item-description"+e),a=document.querySelector(".btn"+e),s=document.querySelector("#item-main-div"+e),o=document.querySelector("#item-container"+e),l=document.querySelector("#item-image"+e),n=document.querySelector("#item-description"+e);window.matchMedia("(max-width:768px)").matches?"none"==document.querySelector(".hidden-item-description"+e).style.display?(i.style.display="inline",a.innerText="read less",s.style.width="80%",s.style.height="600px",o.style.height="500px",n.style.height="300px",l.style.width="80%",l.style.marginLeft="10%"):(t.style.display="inline",i.style.display="none",a.innerText="read more",s.style.width="40%",s.style.height="360px",o.style.height="360px",n.style.height="230px",l.style.width="100%",l.style.marginLeft="0"):"none"==i.style.display?(t.style.display="none",i.style.display="inline",a.innerText="read less",s.style.width="80%",l.style.width="25%",l.style.marginLeft="12.5%"):(t.style.display="inline",i.style.display="none",a.innerText="read more",s.style.width="40%",l.style.width="50%",l.style.marginLeft="0")}(i)},children:"read more"})]})]})})})}),h=(i(44),{minHeight:"81vh"}),x={color:"tomato",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"center"},g={display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"},v=function(e){var t=e.value;return console.log("Value of single object in Display is "),console.log(t),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:h,children:[Object(d.jsxs)("h5",{style:g,children:["Famous food of ",t.state," state"]}),Object(d.jsx)("div",{style:x,className:"main-display-container",children:t.images.map((function(e,t,i){return console.log("Value of image is"),console.log(e),Object(d.jsx)(b,{image:e,id:t})}))})]})})},O={},f=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide ","data-bs-ride":"carousel",style:O,children:[Object(d.jsxs)("div",{className:"carousel-indicators",children:[Object(d.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(d.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(d.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(d.jsxs)("div",{className:"carousel-inner",children:[Object(d.jsx)("div",{className:"carousel-item active",children:Object(d.jsx)("img",{src:"images/misal_pav.jpg",className:"d-block w-100 content-slider-image",height:"200px",alt:"misal pav",style:{opacity:"0.6"}})}),Object(d.jsx)("div",{className:"carousel-item",children:Object(d.jsx)("img",{src:"images/pav_bhaji.jpeg",className:"d-block w-100 content-slider-image",height:"200px",alt:"pav bhaji",style:{opacity:"0.6"}})}),Object(d.jsx)("div",{className:"carousel-item",children:Object(d.jsx)("img",{src:"images/vada_pav.jpg",className:"d-block w-100 content-slider-image",height:"200px",alt:"vada pav",style:{opacity:"0.6"}})})]}),Object(d.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(d.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(d.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(d.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})},y=(i(45),function(){var e=Object(j.g)().state;if(void 0==e)return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"content-main-div",children:[Object(d.jsx)("div",{children:Object(d.jsx)(f,{})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"text-center",children:"Welcome to the Foodpedia"}),Object(d.jsx)("p",{children:"Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit."})]})]})});switch(console.log(e),e){case"Maharashtra":return Object(d.jsx)(v,{value:p[0]});case"UP":return Object(d.jsx)(v,{value:p[1]});case"Bihar":return Object(d.jsx)(v,{value:p[2]})}}),N=i(13),q=i(14),w=(i(46),function(){var e=Object(a.useContext)(U),t=Object(j.f)(),i=Object(a.useState)({userName:"",password:""}),s=Object(l.a)(i,2),o=s[0],n=s[1],c=Object(a.useState)(),r=Object(l.a)(c,2),u=r[0],m=r[1],p=function(e){var t,i;t=e.target.name,i=e.target.value,n(Object(q.a)(Object(q.a)({},o),{},Object(N.a)({},t,i)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"login-div",children:Object(d.jsxs)("div",{className:"loginPage col-6",children:[Object(d.jsx)("h5",{className:"text-center mb-5",children:"Login"}),Object(d.jsx)("label",{for:"username",children:"Username"}),Object(d.jsx)("input",{onChange:p,type:"text",id:"username",name:"userName",value:o.userName}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{for:"pass",children:"Password"}),Object(d.jsx)("input",{onChange:p,type:"password",id:"pass",name:"password",value:o.password}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(i){console.log("Handling the login form"),0==o.password.localeCompare(sessionStorage.getItem(o.userName))?(console.log("Welcome ".concat(o.userName)),e.dispatch(),t.push("/home")):(console.log("Please enter valid credentials"),m("Please enter valid credentials"))},type:"button",className:"btn btn-primary",style:{width:"150px",height:"40px"},children:"Submit"}),Object(d.jsx)("p",{style:{color:"red",marginTop:"15px"},children:u})]})})})}),C=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{style:{color:"red",height:"80vh",backgroundColor:"lightpink"},children:Object(d.jsx)("p",{children:"This page does not exist!"})})})},_=(i(47),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{minHeight:"80vh"},children:[Object(d.jsx)("div",{className:"home-picture",children:Object(d.jsx)("img",{className:"pic image-fluid",src:"images/morning.jpg",width:"100%",height:"60%"})}),Object(d.jsxs)("div",{className:"home-description",children:[Object(d.jsx)("h5",{className:"text-center heading",children:"Welcome to the home page"}),Object(d.jsx)("p",{children:"Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi.Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi.Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi.Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi."})]})]})})}),F=(i(48),function(){var e=Object(a.useState)({userName:"",password:"",hobby:""}),t=Object(l.a)(e,2),i=t[0],s=t[1],o=Object(a.useState)(),n=Object(l.a)(o,2),c=n[0],r=n[1],u=function(e){s(Object(q.a)(Object(q.a)({},i),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"register-div",children:Object(d.jsxs)("div",{className:"container",style:{display:"flex",marginLeft:"25%",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"50%",padding:"25px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"},children:[Object(d.jsx)("h5",{style:{textAlign:"center"},children:"Enter your details"}),Object(d.jsx)("label",{className:"mt-2",for:"username",children:"Username"}),Object(d.jsx)("input",{onChange:u,className:"mt-2",name:"userName",id:"username",type:"text",value:i.userName}),Object(d.jsx)("label",{className:"mt-2",for:"password",children:"Password"}),Object(d.jsx)("input",{onChange:u,className:"mt-2",id:"password",name:"password",type:"password",value:i.password}),Object(d.jsx)("label",{className:"mt-2",for:"hobby",children:"Hobby"}),Object(d.jsx)("input",{onChange:u,className:"mt-2",id:"hobby",name:"hobby",type:"text",value:i.hobby}),Object(d.jsx)("button",{onClick:function(e){sessionStorage.setItem(i.userName,i.password),r("Your are registered successfully")},type:"button",style:{marginTop:"30px",marginBotton:"30px"},className:"btn btn-primary",children:"Submit"}),Object(d.jsx)("p",{style:{color:"green",marginTop:"15px"},children:c})]})})})}),k=(i(49),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"about-height-div",children:[Object(d.jsx)("h3",{className:"heading",children:" Welcome to About page"}),Object(d.jsx)("div",{className:"about-div",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("div",{className:"profileImage",children:Object(d.jsx)("img",{src:"images/Me.jpg",alt:"myself",width:"100%",height:"100%"})}),Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("h6",{children:"My name is Suryansh Tiwary"}),Object(d.jsx)("p",{className:"",children:"Est Lorem mollit tempor cillum elit laboris deserunt consequat non et aliquip. Proident nisi non sunt dolore cupidatat eiusmod et. Anim Lorem commodo est elit ad consequat laborum fugiat nostrud ex nulla do reprehenderit. Dolor ipsum dolore sunt duis exercitation excepteur qui. Laboris amet nisi id officia voluptate excepteur cillum esse excepteur excepteur.Est Lorem mollit tempor cillum elit laboris deserunt consequat non et aliquip. Proident nisi non sunt dolore cupidatat eiusmod et. AnimEst Lorem mollit tempor cillum elit laboris deserunt consequat non et aliquip. Proident nisi non sunt dolore cupidatat eiusmod et. Anim Lorem commodo est elit ad consequat laborum fugiat nostrud ex nulla do reprehenderit. Dolor ipsum dolore sunt duis exercitation excepteur qui. Laboris amet nisi id officia voluptate excepteur cillum esse excepteur excepteur.Est Lorem mollit tempor cillum elit laboris deserunt consequat non et aliquip. Proident nisi non sunt dolore cupidatat eiusmod et. Anim "})]})]})})]})})}),L=function(){var e=Object(j.f)(),t=Object(a.useContext)(U);return console.log("Value of obj in logout component"),console.log(t),t.dispatch(),Object(d.jsx)(d.Fragment,{children:e.push("/home")})},P=function(e,t){return console.log(e,t),!e},U=Object(a.createContext)();var S=function(e){return console.log("Value of login is "),console.log(e),console.log(e.value),e.value?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/",component:_}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/home",component:_}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/about",component:k}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/content",component:y}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/content/:state",component:y}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/logout",component:L}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/food",component:b}),Object(d.jsx)(j.a,{component:C})]})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/home",component:_}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/login",component:w}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/register",component:F}),Object(d.jsx)(j.a,{exact:!0,path:"/portfolio/about",component:k}),Object(d.jsx)(j.a,{component:C})]})})},M=function(){var e=Object(a.useReducer)(P,true),t=Object(l.a)(e,2),i=t[0],s=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(U.Provider,{value:{state:i,dispatch:s},children:[Object(d.jsx)(u,{}),Object(d.jsx)(S,{value:i})]}),Object(d.jsx)(m,{})]})},E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,63)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;i(e),a(e),s(e),o(e),l(e)}))};o.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),E()}},[[51,1,2]]]);
//# sourceMappingURL=main.8d0af9d4.chunk.js.map