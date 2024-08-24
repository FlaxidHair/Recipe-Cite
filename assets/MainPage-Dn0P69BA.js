import{u as N,r as a,o as m,c as f,a as e,w as t,b as n,F as S,d as T,e as l,m as w,f as c,t as o,g as L,h as B,i as D}from"./index-Dhj9FYjG.js";const M=n("h2",{class:"mb-10 align-self-center"},"Последние рецепты",-1),V={class:"d-flex ga-5"},j=["onClick","item"],F={class:"d-flex w-100 justify-center"},G={class:"border-thin ml-1 pa-1 align-self-center"},P={class:"border-thin mr-1 pa-1 align-self-center"},E=["src"],q={class:"d-flex mt-1"},z={class:"d-flex"},A=["src"],J={__name:"LastRecipe",setup($){const s=N();return(k,x)=>{const v=a("v-card-title"),d=a("v-card-subtitle"),i=a("v-card-text"),u=a("v-card"),g=a("v-hover"),b=a("v-spacer"),C=a("v-btn"),y=a("v-card-actions"),R=a("v-dialog"),h=a("v-container");return m(),f("div",null,[e(h,{class:"mt-15 w-100 d-flex bg-white elevation-3 flex-column"},{default:t(()=>[M,n("div",null,[e(R,{"max-width":"800"},{activator:t(({props:r})=>[n("div",V,[(m(!0),f(S,null,T(l(s).getterLastRecipies,_=>(m(),f("div",{ref_for:!0,ref:"recipe",key:_,class:"d-flex w-25 ga-5 mb-7"},[e(g,{"open-delay":"50"},{default:t(({isHovering:p,props:I})=>[n("div",w({onClick:()=>{l(s).selectRecipe=_},item:_,class:"w-100 cursor-pointer d-flex",ref_for:!0},r),[e(u,w({class:["d-flex flex-column align-center",p,I],height:"600",ref_for:!0},I,{elevation:p?8:2}),{default:t(()=>[e(v,{class:"mr-auto ml-auto"},{default:t(()=>[c(o(_.Name),1)]),_:2},1024),n("div",F,[n("div",G,o(_.Category),1),e(d,{class:"w-50 pa-1 align-self-center"},{default:t(()=>[c(o(_.Ingridients),1)]),_:2},1024),n("div",P,o(l(s).getTime(_.Time)),1)]),e(i,{class:"h-25 text-caption"},{default:t(()=>[c(o(_.Description),1)]),_:2},1024),n("img",{src:_.Image,class:"w-100 h-50",alt:"Тут могло быть изображения еды"},null,8,E)]),_:2},1040,["class","elevation"])],16,j)]),_:2},1024)]))),128))])]),default:t(({isActive:r})=>[e(u,{class:"d-flex flex-column"},{default:t(()=>[n("div",q,[e(v,null,{default:t(()=>[c(o(l(s).selectRecipe.Name),1)]),_:1}),e(y,{class:"ml-auto align-end mr-2"},{default:t(()=>[e(b),e(C,{text:"Закрыть",onClick:_=>r.value=!1},null,8,["onClick"])]),_:2},1024)]),n("div",z,[n("div",null,[e(i,{class:"border-thin py-2 px-1 ml-5 mr"},{default:t(()=>[c(o(l(s).selectRecipe.Category),1)]),_:1})]),e(d,{class:"ml-auto border-thin py-2 px-1 mr-5"},{default:t(()=>[c(o(l(s).getTime(l(s).selectRecipe.Time)),1)]),_:1})]),e(i,null,{default:t(()=>[c(o(l(s).selectRecipe.Ingridients),1)]),_:1}),e(i,null,{default:t(()=>[c(o(l(s).selectRecipe.Description),1)]),_:1}),n("img",{src:l(s).selectRecipe.Image,alt:"Изображение блюда"},null,8,A)]),_:2},1024)]),_:1})])]),_:1})])}}},K=n("h2",{class:"align-self-center"},"Что поесть?",-1),O={key:0,class:"d-flex w-75 mb-7 ga-10"},Q=["src"],U=["src"],W=["src"],X={__name:"RandomDish",setup($){const s=N();return(k,x)=>{const v=a("v-btn"),d=a("v-card-subtitle"),i=a("v-card-title"),u=a("v-card"),g=a("v-container");return m(),L(g,{class:"w-100 d-flex bg-white bg-white mt-15 flex-column align-center elevation-3"},{default:t(()=>[K,e(v,{class:"bg-red-accent-1 w-33 mb-15 mt-10 text-white",onClick:x[0]||(x[0]=b=>l(s).getRandom())},{default:t(()=>[c("Выбрать что поесть!")]),_:1}),l(s).randomState==1?(m(),f("div",O,[e(u,{height:"350",elevation:4,class:"w-33 d-flex flex-column align-center"},{default:t(()=>[e(d,{class:"mt-2"},{default:t(()=>[c("Мясное")]),_:1}),e(i,null,{default:t(()=>[c(o(l(s).getMeatName.name),1)]),_:1}),n("img",{src:l(s).getMeatName.image,alt:"Image of dish",class:"w-100 h-100"},null,8,Q)]),_:1}),e(u,{height:"350",elevation:4,class:"w-33 d-flex flex-column align-center"},{default:t(()=>[e(d,{class:"mt-2"},{default:t(()=>[c(o(l(s).getGarnishName.name),1)]),_:1}),e(i,null,{default:t(()=>[c("Макароны")]),_:1}),n("img",{src:l(s).getGarnishName.image,alt:"Image of dish",class:"w-100 h-100"},null,8,U)]),_:1}),e(u,{height:"350",elevation:4,class:"w-33 d-flex flex-column align-center"},{default:t(()=>[e(d,{class:"mt-2"},{default:t(()=>[c("Салат")]),_:1}),e(i,null,{default:t(()=>[c(o(l(s).getSaladName.name),1)]),_:1}),n("img",{src:l(s).getSaladName.image,class:"w-100 h-100",alt:"Image of dish"},null,8,W)]),_:1})])):B("",!0)]),_:1})}}},Y={class:"d-flex flex-column align-center"},Z=n("h2",{class:"mb-10 align-self-center"},"Последние заметки",-1),H={class:"d-flex ga-5 justify-center"},ee=["onClick","item"],te={class:"d-flex mt-1"},se={__name:"LastNotes",setup($){const s=N();return D(()=>{s.getNotes}),(k,x)=>{const v=a("v-card-title"),d=a("v-card-text"),i=a("v-card"),u=a("v-hover"),g=a("v-spacer"),b=a("v-btn"),C=a("v-card-actions"),y=a("v-dialog"),R=a("v-container");return m(),f("div",Y,[e(R,{class:"bg-white elevation-3 mt-15 w-75 d-flex flex-column"},{default:t(()=>[Z,e(y,{"max-width":"800"},{activator:t(({props:h})=>[n("div",H,[(m(!0),f(S,null,T(l(s).getterLastNotes,r=>(m(),f("div",{key:r,class:"d-flex ga-5 mb-7"},[e(u,{"open-delay":"50"},{default:t(({isHovering:_,props:p})=>[n("div",w({onClick:()=>{l(s).selectNote=r},item:r,class:"w-100 cursor-pointer d-flex",ref_for:!0},h),[e(i,w({class:["d-flex flex-column align-center",_,p],"min-width":"300px",height:"200px",ref_for:!0},p,{elevation:_?8:2}),{default:t(()=>[e(v,{class:"mr-auto ml-auto"},{default:t(()=>[c(o(r.Title),1)]),_:2},1024),e(d,{class:"h-25 text-caption"},{default:t(()=>[c(o(r.Subtitle),1)]),_:2},1024)]),_:2},1040,["class","elevation"])],16,ee)]),_:2},1024)]))),128))])]),default:t(({isActive:h})=>[e(i,{class:"d-flex flex-column"},{default:t(()=>[n("div",te,[e(v,null,{default:t(()=>[c(o(l(s).selectNote.Title),1)]),_:1}),e(C,{class:"ml-auto align-end mr-2"},{default:t(()=>[e(g),e(b,{text:"Закрыть",onClick:r=>h.value=!1},null,8,["onClick"])]),_:2},1024)]),e(d,null,{default:t(()=>[c(o(l(s).selectNote.Subtitle),1)]),_:1})]),_:2},1024)]),_:1})]),_:1})])}}},ae={class:"main"},ne={__name:"MainPage",setup($){return N(),(s,k)=>(m(),f("main",ae,[e(X),e(J),e(se)]))}};export{ne as default};
