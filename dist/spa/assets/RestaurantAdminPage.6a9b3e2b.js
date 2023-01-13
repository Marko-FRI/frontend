import{f as p,Q as h}from"./QBtn.f20efc65.js";import{Q as O,a as V,b as j,c as z,d as L,e as F,f as S,g as N}from"./QDialog.876d3bb7.js";import{b as R}from"./QSeparator.b874be8f.js";import{C as w}from"./ClosePopup.e4beb4fb.js";import{u as $}from"./UserStore.0e76a966.js";import{api as g}from"./axios.817f73cc.js";import{_ as x,E as l,I as c,L as e,P as r,M as _,H as a,J as m,N as k,O as M,a6 as Q,G as d,q,R as I,S as D,F as A,K as P}from"./index.21c77581.js";import"./focus-manager.33224ae2.js";import"./use-timeout.9ede0bc3.js";import"./use-panel.348b8b63.js";import"./touch.70a9dd44.js";import"./selection.5cd546be.js";import"./use-dark.6a233e5d.js";const E={name:"AdminActiveReservationCard",props:["activeReservation"],data(){return{confirmDelete:!1,showMoreInfo:!1,totalPrice:0,time:"",date:""}},mounted(){const t=new Date(this.activeReservation.date_and_time_of_reservation.split(" "));this.date=t.getDate()+". "+(t.getMonth()+1)+". "+t.getFullYear(),this.time=t.getHours()+":"+t.getMinutes(),this.activeReservation.pickedMenus.forEach(s=>{this.totalPrice+=s.quantity*s.price})},methods:{deleteReservation(){this.$emit("deleteReservation",this.activeReservation.id_reservation)}}},y=t=>(I("data-v-30c4eef1"),t=t(),D(),t),B={class:"row wrap q-px-md self-stretch"},T={class:"col-8 text-h5"},U={class:"col-4 text-positive text-h5",style:{"text-align":"right"}},H={class:"col-12 custom-font-color text-h6 q-mb-md"},G={class:"col-12 text-h5 custom-font-color"},Y={class:"col-12 text-h5 custom-font-color"},J={class:"col-4 text-h5 custom-font-color"},K={class:"col-12 col-sm-8 text-h6 text-right custom-font-color"},W={key:0,class:"col-12 row wrap"},X=y(()=>e("div",{class:"text-h5 q-my-lg col-12",style:{"text-align":"center"}}," Naro\u010Dilo ",-1)),Z={class:"text-h6 col-10 custom-font-color q-mx-auto"},ee={class:"row no-wrap"},te={class:"col-8"},se={class:"col-4",style:{"text-align":"right"}},oe={class:"col-10 q-mx-auto"},ae={class:"col-10 q-mx-auto row no-wrap text-h6 custom-font-color"},ie=y(()=>e("span",{class:"col-8"},"Skupaj",-1)),ne={class:"col-4",style:{"text-align":"right"}},re={key:0,class:"col-10 q-mx-auto custom-font-color q-mt-md text-h6"},le=y(()=>e("span",{class:"text-h5"},"(",-1)),ce=y(()=>e("span",{class:"text-h5"},")",-1)),de={class:"col-10 q-mx-auto q-mt-lg text-right"},ve={class:"col-10 q-mx-auto q-mt-xl text-right",style:{"text-align":"right"}},me={class:"col-12",style:{"margin-left":"-1rem"}},ue=y(()=>e("span",{class:"q-ml-sm"},"Ali ste prepri\u010Dani, da \u017Eelite preklicati rezervacijo?",-1));function _e(t,s,i,b,o,v){return l(),c("div",null,[e("div",B,[e("div",T,r(i.activeReservation.userName)+" "+r(i.activeReservation.userSurname),1),e("div",U,r((Math.round(o.totalPrice*100)/100).toFixed(2))+" \u20AC ",1),e("div",H,r(i.activeReservation.userEmail),1),e("div",G,[_(r(i.activeReservation.number_of_personel)+" ",1),a(p,{name:"person",color:"positive"})]),e("div",Y,[_(r(o.date)+" ",1),a(p,{name:"event",color:"positive"})]),e("div",J,[_(r(o.time)+" ",1),a(p,{name:"schedule",color:"positive"})]),e("div",K,[o.showMoreInfo?m("",!0):(l(),c("span",{key:0,class:"info-button",onClick:s[0]||(s[0]=n=>o.showMoreInfo=!0)},"Ve\u010D informacij o naro\u010Dilu"))])]),o.showMoreInfo?(l(),c("div",W,[X,e("div",Z,[(l(!0),c(k,null,M(i.activeReservation.pickedMenus,n=>(l(),c("div",{key:n.id_menu},[e("div",ee,[e("span",te,r(n.name)+" "+r(n.quantity)+"x",1),e("span",se,r((Math.round(n.price*n.quantity*100)/100).toFixed(2))+" \u20AC",1)])]))),128))]),e("div",oe,[a(R,{color:"black",width:"100%",class:"q-my-md"})]),e("div",ae,[ie,e("span",ne,r((Math.round(o.totalPrice*100)/100).toFixed(2))+" \u20AC",1)]),i.activeReservation.note!==null?(l(),c("div",re,[le,_("Opomba: "+r(i.activeReservation.note),1),ce])):m("",!0),e("div",de,[a(h,{label:"Prekli\u010Di rezervacijo",color:"white",flat:"","no-caps":"",size:"1.15rem",class:"bg-red-8 border-rad button-float",onClick:s[1]||(s[1]=n=>o.confirmDelete=!0)})]),e("div",ve,[e("span",{class:"info-button text-h6 custom-font-color",onClick:s[2]||(s[2]=n=>o.showMoreInfo=!1)}," Manj informacij o naro\u010Dilu ")])])):m("",!0),e("div",me,[a(R,{color:"grey",width:"100%",inset:"",class:Q(o.showMoreInfo?"q-mt-md q-mb-xl":"q-mt-xl q-mb-xl")},null,8,["class"])]),a(z,{modelValue:o.confirmDelete,"onUpdate:modelValue":s[4]||(s[4]=n=>o.confirmDelete=n),persistent:""},{default:d(()=>[a(O,null,{default:d(()=>[a(V,{class:"row items-center text-h5 q-pa-xl"},{default:d(()=>[ue]),_:1}),a(j,{align:"right"},{default:d(()=>[q(a(h,{flat:"",label:"Ne",color:"primary","no-caps":"",style:{"font-size":"1rem"},class:"border-rad text-grey-7",onClick:s[3]||(s[3]=n=>o.confirmDelete=!1)},null,512),[[w]]),q(a(h,{flat:"",label:"Da",color:"white","no-caps":"",style:{"font-size":"1rem"},class:"bg-red-8 border-rad q-ma-sm",onClick:v.deleteReservation},null,8,["onClick"]),[[w]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var he=x(E,[["render",_e],["__scopeId","data-v-30c4eef1"]]);const fe={name:"AdminActiveReservations",components:{AdminActiveReservationCard:he},props:["activeReservations","numActiveReservations","loading"],methods:{deleteReservation(t){this.$emit("deleteReservation",t)},loadMoreActiveReservations(t){this.$emit("loadMoreActiveReservations",t)}}},pe={class:"row wrap"},ge={class:"col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"},Re={key:0,class:"text-h4 col-12 text-center"},xe={style:{"text-align":"center"},class:"col-12 q-my-xl"};function ye(t,s,i,b,o,v){const n=P("admin-active-reservation-card");return l(),c("div",pe,[e("div",ge,[(l(!0),c(k,null,M(i.activeReservations,u=>(l(),A(n,{key:u.id_reservation,"active-reservation":u,class:"col-6",onDeleteReservation:v.deleteReservation},null,8,["active-reservation","onDeleteReservation"]))),128)),i.activeReservations.length===0?(l(),c("div",Re," Ni nobenih aktivnih rezervacij! ")):m("",!0)]),e("div",xe,[i.activeReservations.length>0&&i.numActiveReservations>i.activeReservations.length?(l(),A(h,{key:0,label:"Nalo\u017Ei ve\u010D",color:"white",flat:"","no-caps":"",style:{"font-size":"1.3rem"},class:"bg-positive border-rad q-px-xl q-py-none",disable:i.loading,onClick:s[0]||(s[0]=u=>v.loadMoreActiveReservations(i.activeReservations.length))},null,8,["disable"])):m("",!0)])])}var be=x(fe,[["render",ye]]);const we={name:"AdminPastReservationCard",props:["pastReservation"],data(){return{confirmDelete:!1,showMoreInfo:!1,totalPrice:0,time:"",date:""}},mounted(){const t=new Date(this.pastReservation.date_and_time_of_reservation.split(" "));this.date=t.getDate()+". "+(t.getMonth()+1)+". "+t.getFullYear(),this.time=t.getHours()+":"+t.getMinutes(),this.pastReservation.pickedMenus.forEach(s=>{this.totalPrice+=s.quantity*s.price})},methods:{deleteReservation(){this.$emit("deleteReservation",this.pastReservation.id_reservation)}}},C=t=>(I("data-v-7acf9fa3"),t=t(),D(),t),qe={class:"row wrap q-px-md self-stretch"},Ae={class:"col-8 text-h5"},Pe={class:"col-4 text-positive text-h5",style:{"text-align":"right"}},ke={class:"col-12 custom-font-color text-h6 q-mb-md"},Me={class:"col-12 text-h5 custom-font-color"},Ce={class:"col-12 text-h5 custom-font-color"},Ie={class:"col-4 text-h5 custom-font-color"},De={class:"col-12 col-sm-8 text-h6 text-right custom-font-color"},Se={key:0,class:"col-12 row wrap"},Ne=C(()=>e("div",{class:"text-h5 q-my-lg col-12",style:{"text-align":"center"}}," Naro\u010Dilo ",-1)),Oe={class:"text-h6 col-10 custom-font-color q-mx-auto"},Ve={class:"row no-wrap"},je={class:"col-8"},ze={class:"col-4",style:{"text-align":"right"}},Qe={class:"col-10 q-mx-auto"},Le={class:"col-10 q-mx-auto row no-wrap text-h6 custom-font-color"},Fe=C(()=>e("span",{class:"col-8"},"Skupaj",-1)),$e={class:"col-4",style:{"text-align":"right"}},Ee={key:0,class:"col-10 q-mx-auto custom-font-color q-mt-md text-h6"},Be=C(()=>e("span",{class:"text-h5"},"(",-1)),Te=C(()=>e("span",{class:"text-h5"},")",-1)),Ue={class:"col-10 q-mx-auto q-mt-xl text-right",style:{"text-align":"right"}},He={class:"col-12",style:{"margin-left":"-1rem"}};function Ge(t,s,i,b,o,v){return l(),c("div",null,[e("div",qe,[e("div",Ae,r(i.pastReservation.userName)+" "+r(i.pastReservation.userSurname),1),e("div",Pe,r((Math.round(o.totalPrice*100)/100).toFixed(2))+" \u20AC ",1),e("div",ke,r(i.pastReservation.userEmail),1),e("div",Me,[_(r(i.pastReservation.number_of_personel)+" ",1),a(p,{name:"person",color:"positive"})]),e("div",Ce,[_(r(o.date)+" ",1),a(p,{name:"event",color:"positive"})]),e("div",Ie,[_(r(o.time)+" ",1),a(p,{name:"schedule",color:"positive"})]),e("div",De,[o.showMoreInfo?m("",!0):(l(),c("span",{key:0,class:"info-button",onClick:s[0]||(s[0]=n=>o.showMoreInfo=!0)},"Ve\u010D informacij o naro\u010Dilu"))])]),o.showMoreInfo?(l(),c("div",Se,[Ne,e("div",Oe,[(l(!0),c(k,null,M(i.pastReservation.pickedMenus,n=>(l(),c("div",{key:n.id_menu},[e("div",Ve,[e("span",je,r(n.name)+" "+r(n.quantity)+"x",1),e("span",ze,r((Math.round(n.price*n.quantity*100)/100).toFixed(2))+" \u20AC",1)])]))),128))]),e("div",Qe,[a(R,{color:"black",width:"100%",class:"q-my-md"})]),e("div",Le,[Fe,e("span",$e,r((Math.round(o.totalPrice*100)/100).toFixed(2))+" \u20AC",1)]),i.pastReservation.note!==null?(l(),c("div",Ee,[Be,_("Opomba: "+r(i.pastReservation.note),1),Te])):m("",!0),e("div",Ue,[e("span",{class:"info-button text-h6 custom-font-color",onClick:s[1]||(s[1]=n=>o.showMoreInfo=!1)}," Manj informacij o naro\u010Dilu ")])])):m("",!0),e("div",He,[a(R,{color:"grey",width:"100%",inset:"",class:Q(o.showMoreInfo?"q-mt-md q-mb-xl":"q-mt-xl q-mb-xl")},null,8,["class"])])])}var Ye=x(we,[["render",Ge],["__scopeId","data-v-7acf9fa3"]]);const Je={name:"AdminPastReservations",components:{AdminPastReservationCard:Ye},props:["pastReservations","numPastReservations","loading"],methods:{loadMorePastReservations(t){this.$emit("loadMorePastReservations",t)}}},Ke={class:"row wrap"},We={class:"col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"},Xe={key:0,class:"col-12 text-h4 text-center"},Ze={style:{"text-align":"center"},class:"col-12 q-my-xl"};function et(t,s,i,b,o,v){const n=P("admin-past-reservation-card");return l(),c("div",Ke,[e("div",We,[(l(!0),c(k,null,M(i.pastReservations,u=>(l(),A(n,{key:u.id_reservation,"past-reservation":u,class:"col-6"},null,8,["past-reservation"]))),128)),i.pastReservations.length===0?(l(),c("div",Xe," Ni nobenih preteklih rezervacij! ")):m("",!0)]),e("div",Ze,[i.pastReservations.length>9&&i.numPastReservations>i.pastReservations.length?(l(),A(h,{key:0,label:"Nalo\u017Ei ve\u010D",color:"white",flat:"","no-caps":"",style:{"font-size":"1.3rem"},class:"bg-positive border-rad q-px-xl q-py-none",disable:i.loading,onClick:s[0]||(s[0]=u=>v.loadMorePastReservations(i.pastReservations.length))},null,8,["disable"])):m("",!0)])])}var tt=x(Je,[["render",et]]);const st={name:"RestaurantAdminPage",components:{AdminActiveReservations:be,AdminPastReservations:tt},setup(){return{userStore:$()}},data(){return{tab:"active_reservations",headerImage:"",restaurantName:"Gostilna pri lipci",numPastReservations:0,pastReservations:[],currentPastReservationOffset:10,numActiveReservations:0,activeReservations:[],currentActiveReservationOffset:1,confirmLogout:!1,loading:!1}},mounted(){this.userStore.token===null&&this.$router.push("/"),this.getData()},methods:{async getData(){try{this.loading=!0,await g.get("/sanctum/csrf-cookie");const t=await g.get("/adminRestaurantData",{params:{reservationOffset:this.currentActiveReservationOffset,id_restaurant:this.userStore.data.id_restaurant}});this.userStore.data.is_user!==t.data.id_user&&this.$router.push("/"),this.headerImage=t.data.restaurant_header_image,this.restaurantName=t.data.restaurantName,this.activeReservations=t.data.activeReservations,this.numActiveReservations=t.data.numOfActiveReservations,this.pastReservations=t.data.pastReservations,this.numPastReservations=t.data.numOfPastReservations,this.loading=!1}catch{this.loading=!1,this.$router.push("/")}},async deleteReservation(t){try{this.loading=!0;const s=await g.delete("/deleteAdminReservation",{params:{id_reservation:t,id_restaurant:this.userStore.data.id_restaurant,reservationOffset:this.currentActiveReservationOffset}});this.activeReservations=s.data.activeReservations,this.numActiveReservations=s.data.numOfActiveReservations,this.loading=!1}catch{this.loading=!1}},async loadMoreActiveReservations(t){try{this.loading=!0,this.currentActiveReservationOffset=t+10;const s=await g.get("/moreAdminActiveReservations",{params:{id_restaurant:this.userStore.data.id_restaurant,reservationOffset:this.currentActiveReservationOffset}});this.activeReservations=s.data.activeReservations,this.loading=!1}catch{this.loading=!1}},async loadMorePastReservations(t){try{this.loading=!0,this.currentPastReservationOffset=t+10;const s=await g.get("/moreAdminPastReservations",{params:{id_restaurant:this.userStore.data.id_restaurant,reservationOffset:this.currentPastReservationOffset}});this.pastReservations=s.data.pastReservations,this.loading=!1}catch{this.loading=!1}}}},ot=t=>(I("data-v-31c8f1f6"),t=t(),D(),t),at=["src"],it={class:"row no-wrap change-position-top"},nt={class:"q-pl-xl col-8 custom-text"},rt={class:"col-4"},lt={class:"q-mt-xl"},ct=ot(()=>e("span",{class:"q-ml-sm"},"Ali ste prepri\u010Dani, da se \u017Eelite odjaviti?",-1));function dt(t,s,i,b,o,v){const n=P("admin-past-reservations"),u=P("admin-active-reservations");return l(),c("div",null,[e("img",{class:"header-img",src:o.headerImage,alt:"default"},null,8,at),e("div",it,[e("div",nt,r(o.restaurantName),1),e("div",rt,[a(h,{label:"Odjava",color:"white",flat:"","no-caps":"",size:"1.15rem",class:"bg-red-8 border-rad q-px-lg button-float q-mr-xl no-wrap",onClick:s[0]||(s[0]=f=>o.confirmLogout=!0)})])]),e("div",lt,[a(L,{modelValue:o.tab,"onUpdate:modelValue":s[1]||(s[1]=f=>o.tab=f),"inline-label":"","outside-arrows":"","mobile-arrows":"",align:"justify"},{default:d(()=>[a(S,{name:"past_reservations",label:"Pretekle rezervacije ("+o.numPastReservations+")","no-caps":""},null,8,["label"]),a(S,{name:"active_reservations",label:"Aktivne rezervacije ("+o.numActiveReservations+")","no-caps":""},null,8,["label"])]),_:1},8,["modelValue"]),a(R,{color:"grey",inset:"",class:"q-mx-lg"}),a(F,{modelValue:o.tab,"onUpdate:modelValue":s[2]||(s[2]=f=>o.tab=f),animated:"",class:"q-my-xl"},{default:d(()=>[a(N,{name:"past_reservations"},{default:d(()=>[a(n,{"past-reservations":o.pastReservations,"num-past-reservations":o.numPastReservations,loading:o.loading,onLoadMorePastReservations:v.loadMorePastReservations},null,8,["past-reservations","num-past-reservations","loading","onLoadMorePastReservations"])]),_:1}),a(N,{name:"active_reservations"},{default:d(()=>[a(u,{"active-reservations":o.activeReservations,"num-active-reservations":o.numActiveReservations,loading:o.loading,onLoadMoreActiveReservations:v.loadMoreActiveReservations,onDeleteReservation:v.deleteReservation},null,8,["active-reservations","num-active-reservations","loading","onLoadMoreActiveReservations","onDeleteReservation"])]),_:1})]),_:1},8,["modelValue"])]),a(z,{modelValue:o.confirmLogout,"onUpdate:modelValue":s[4]||(s[4]=f=>o.confirmLogout=f),persistent:""},{default:d(()=>[a(O,null,{default:d(()=>[a(V,{class:"row items-center text-h5 q-pa-xl"},{default:d(()=>[ct]),_:1}),a(j,{align:"right"},{default:d(()=>[q(a(h,{flat:"",label:"Ne",color:"primary","no-caps":"",style:{"font-size":"1rem"},class:"border-rad text-grey-7",onClick:s[3]||(s[3]=f=>o.confirmLogout=!1)},null,512),[[w]]),q(a(h,{flat:"",label:"Da",color:"white","no-caps":"",style:{"font-size":"1rem"},class:"bg-red-8 border-rad q-ma-sm",to:"/logout"},null,512),[[w]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var qt=x(st,[["render",dt],["__scopeId","data-v-31c8f1f6"]]);export{qt as default};
