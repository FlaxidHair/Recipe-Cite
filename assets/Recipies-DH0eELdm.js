import{u as V,k as T,r as a,o as g,c as w,a as e,w as o,i as k,b as n,t as d,e as t,f as c,v as C,F as D,d as U,m as N,q as j,h as A}from"./index-By1bP1cO.js";const B={class:"d-flex mt-1"},O={class:"d-flex border-thin pa-2"},q={class:""},E={class:"d-flex"},G={class:"d-flex mt-5"},P={class:"ml-auto d-flex border-thin py-1 px-1 mr-5"},z=["src"],J={__name:"DialogSearch",setup(I){const s=V(),i=T();return(y,l)=>{const v=a("v-btn"),m=a("v-icon"),h=a("v-card-title"),u=a("v-spacer"),p=a("v-card-actions"),b=a("v-card-text"),_=a("v-card-subtitle"),R=a("v-card"),$=a("v-dialog");return g(),w("template",null,[e($,{modelValue:t(s).isActive,"onUpdate:modelValue":l[6]||(l[6]=x=>t(s).isActive=x),"max-width":"800"},{default:o(()=>[k(e(R,{class:"d-flex flex-column"},{default:o(()=>[n("div",B,[e(h,{class:"d-flex"},{default:o(()=>[n("div",O,[n("h4",q,d(t(s).selectRecipe.Name),1)]),e(v,{width:"150px",class:"ml-5 mt-3 bg-red",text:"Удалить",onClick:l[0]||(l[0]=x=>t(s).dialog=!0),disabled:!t(i).isLogin},null,8,["disabled"]),e(v,{disabled:!t(i).isLogin,onClick:l[1]||(l[1]=()=>{t(s).patchFavoriteStatus(),t(s).selectRecipe.Favorite=!t(s).selectRecipe.Favorite}),class:"ml-5 align-self-end elevation-0 border-thin",width:"40px",height:"40px",icon:""},{default:o(()=>[e(m,{color:"yellow-darken-1"},{default:o(()=>[c(d(t(s).showFavoriteStatus(t(s).selectRecipe.Favorite)),1)]),_:1})]),_:1},8,["disabled"])]),_:1}),e(p,{class:"ml-auto mr-2"},{default:o(()=>[e(u),e(v,{text:"Закрыть",onClick:l[2]||(l[2]=x=>t(s).isActive=!1)})]),_:1})]),n("div",E,[n("div",G,[l[7]||(l[7]=n("h4",{class:"ml-5 align-self-center"},"Категория:",-1)),e(b,{class:"border-thin py-2 px-1 ml-1"},{default:o(()=>[c(d(t(s).selectRecipe.Category),1)]),_:1})]),n("div",P,[l[8]||(l[8]=n("h4",{class:"align-self-center mr-1"},"Время:",-1)),e(_,{class:"ma-0 pa-0 align-self-center"},{default:o(()=>[c(d(t(s).selectRecipe.Time),1)]),_:1})])]),l[9]||(l[9]=n("h4",{class:"ml-5 mt-5"},"Ингридиенты",-1)),e(b,null,{default:o(()=>[c(d(t(s).selectRecipe.Ingridients),1)]),_:1}),l[10]||(l[10]=n("h4",{class:"ml-5"},"Описание",-1)),e(b,null,{default:o(()=>[c(d(t(s).selectRecipe.Description),1)]),_:1}),n("img",{src:t(s).selectRecipe.Image,alt:"Изображение блюда"},null,8,z)]),_:1},512),[[C,t(s).dialog]]),e($,{modelValue:t(s).dialog,"onUpdate:modelValue":l[5]||(l[5]=x=>t(s).dialog=x),"max-width":"300"},{default:o(()=>[e(R,{title:"Удалить рецепт?"},{default:o(()=>[e(p,null,{default:o(()=>[e(v,{text:"Да",class:"bg-red",variant:"text",onClick:l[3]||(l[3]=()=>{t(s).deleteRecipe(t(s).selectRecipe.ID)})}),e(u),e(v,{text:"Нет",variant:"text",onClick:l[4]||(l[4]=x=>t(s).dialog=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}},K={class:"d-flex ga-5 flex-wrap justify-center"},M=["onClick","item"],Q={class:"d-flex w-100 justify-center"},W={class:"border-thin ml-1 pa-1 align-self-center"},X={class:"border-thin mr-1 pa-1 align-self-center"},Y=["src"],Z={class:"d-flex mt-1 flex-wrap w-100"},H={class:"w-xl-100 w-lg-100 w-md-100 w-sm-100 w-75 d-flex border-thin pa-2"},ee={class:"text-wrap"},te={class:"d-flex align-center mb-5 mr-5"},le={class:"d-flex flex-wrap"},se={class:"d-flex mt-5"},oe={class:"ml-xl-auto ml-lg-auto ml-md-auto ml-sm-auto ml-5 mt-5 d-flex mr-5"},ne=["src"],ie={__name:"FilterStart",setup(I){const s=V(),i=T();return(y,l)=>{const v=a("v-icon"),m=a("v-card-title"),h=a("v-card-subtitle"),u=a("v-card-text"),p=a("v-card"),b=a("v-hover"),_=a("v-btn"),R=a("v-spacer"),$=a("v-card-actions"),x=a("v-dialog"),L=a("v-divider");return g(),w(D,null,[e(x,{"max-width":"800"},{activator:o(({props:f})=>[n("div",K,[(g(!0),w(D,null,U(t(s).getterCategoryItems,r=>(g(),w("div",{key:r,class:"d-flex w-xl-25 w-lg-33 w-md-33 w-50 ga-5 mb-7 justify-center"},[e(b,{"open-delay":"50"},{default:o(({isHovering:F,props:S})=>[n("div",N({onClick:()=>{t(s).selectRecipe=r,t(s).dialogRecipe=!0,t(s).stat=r.Favorite},item:r,class:"w-xl-100 w-lg-100 w-md-100 w-sm-75 w-33 cursor-pointer d-flex",ref_for:!0},f),[e(p,N({class:["d-flex flex-column align-center",S],height:"600",ref_for:!0},S,{elevation:F?8:2}),{default:o(()=>[e(m,{class:"mr-auto ml-auto d-flex text-wrap"},{default:o(()=>[c(d(r.Name)+" ",1),e(v,{color:"yellow-darken-1 ml-2 align-self-center"},{default:o(()=>[c(d(t(s).showFavoriteStatus(r.Favorite)),1)]),_:2},1024)]),_:2},1024),n("div",Q,[n("div",W,d(r.Category),1),e(h,{class:"w-50 pa-1 align-self-center"},{default:o(()=>[c(d(r.Ingridients),1)]),_:2},1024),n("div",X,d(r.Time),1)]),e(u,{class:"h-25 text-caption"},{default:o(()=>[c(d(r.Description),1)]),_:2},1024),n("img",{src:r.Image,class:"w-100 h-50",alt:"Тут могло быть изображения еды"},null,8,Y)]),_:2},1040,["class","elevation"])],16,M)]),_:2},1024)]))),128))])]),default:o(({isActive:f})=>[k(e(p,{class:"d-flex flex-column"},{default:o(()=>[n("div",Z,[e(m,{class:"d-flex flex-wrap"},{default:o(()=>[n("div",H,[n("h4",ee,d(t(s).selectRecipe.Name),1)])]),_:1}),n("div",te,[e(_,{width:"150px",class:"ml-5 mt-3 bg-red align-self-start",disabled:!t(i).isLogin,text:"Удалить",onClick:l[0]||(l[0]=r=>t(s).dialog=!0)},null,8,["disabled"]),e(_,{disabled:!t(i).isLogin,onClick:l[1]||(l[1]=()=>{t(s).patchFavoriteStatus(),t(s).selectRecipe.Favorite=!t(s).selectRecipe.Favorite}),class:"ml-5 align-self-end mt-2 elevation-0 border-thin",width:"40px",height:"40px",icon:""},{default:o(()=>[e(v,{color:"yellow-darken-1"},{default:o(()=>[c(d(t(s).showFavoriteStatus(t(s).selectRecipe.Favorite)),1)]),_:1})]),_:1},8,["disabled"])]),e($,{class:"ml-xl-auto ml-lg-auto ml-md-auto ml-sm-1 ml-auto mr-2 order-xl-4 order-lg-4 order-md-4 order-sm-first order-first"},{default:o(()=>[e(R),e(_,{text:"Закрыть",onClick:r=>f.value=!1},null,8,["onClick"])]),_:2},1024)]),n("div",le,[n("div",se,[l[5]||(l[5]=n("h4",{class:"ml-5 align-self-center"},"Категория:",-1)),e(u,{class:"border-thin py-2 px-1 ml-1"},{default:o(()=>[c(d(t(s).selectRecipe.Category),1)]),_:1})]),n("div",oe,[l[6]||(l[6]=n("h4",{class:"align-self-center mr-1"},"Время:",-1)),e(h,{class:"ma-0 pa-0 align-self-center border-thin pa-1"},{default:o(()=>[c(d(t(s).selectRecipe.Time),1)]),_:1})])]),l[7]||(l[7]=n("h4",{class:"ml-5 mt-5"},"Ингридиенты",-1)),e(u,null,{default:o(()=>[c(d(t(s).selectRecipe.Ingridients),1)]),_:1}),l[8]||(l[8]=n("h4",{class:"ml-5"},"Описание",-1)),e(u,null,{default:o(()=>[c(d(t(s).selectRecipe.Description),1)]),_:1}),n("img",{src:t(s).selectRecipe.Image,alt:"Изображение блюда"},null,8,ne)]),_:2},1536),[[C,t(s).dialog]])]),_:1}),e(x,{modelValue:t(s).dialog,"onUpdate:modelValue":l[4]||(l[4]=f=>t(s).dialog=f),"max-width":"300"},{default:o(()=>[e(p,{title:"Удалить рецепт?"},{default:o(()=>[e($,null,{default:o(()=>[e(_,{text:"Да",class:"bg-red",variant:"text",onClick:l[2]||(l[2]=()=>{t(s).deleteRecipe(t(s).selectRecipe.ID)})}),e(R),e(_,{text:"Нет",variant:"text",onClick:l[3]||(l[3]=f=>t(s).dialog=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L),e(J)],64)}}},ae={class:"w-75 border-thin mb-10"},de={class:"d-flex w-75 w-xl-100 w-lg-100 w-md-100 w-sm-100"},re={__name:"FilterGroup",setup(I){const s=V();function i(y){s.startShow=y,s.showSearchResult=!1}return(y,l)=>{const v=a("v-progress-linear"),m=a("v-chip"),h=a("v-chip-group"),u=a("v-icon"),p=a("v-btn"),b=a("v-card-text");return g(),w("div",ae,[k(e(v,{indeterminate:"",color:"red-accent-1"},null,512),[[C,t(s).loadingRecipe]]),e(b,null,{default:o(()=>[l[9]||(l[9]=n("h2",{class:"text-h6 mb-2"},"Фильтр",-1)),n("div",de,[e(h,{modelValue:t(s).amenities,"onUpdate:modelValue":l[7]||(l[7]=_=>t(s).amenities=_),column:""},{default:o(()=>[e(m,{text:"Все",variant:"outlined",filter:"",onClick:l[0]||(l[0]=_=>i(0))}),e(m,{text:"Мясо",variant:"outlined",filter:"",onClick:l[1]||(l[1]=_=>i(1))}),e(m,{text:"Рыба",variant:"outlined",filter:"",onClick:l[2]||(l[2]=_=>i(2))}),e(m,{text:"Салаты",variant:"outlined",filter:"",onClick:l[3]||(l[3]=_=>i(3))}),e(m,{text:"Супы",variant:"outlined",filter:"",onClick:l[4]||(l[4]=_=>i(4))}),e(m,{text:"Десерт",variant:"outlined",filter:"",onClick:l[5]||(l[5]=_=>i(5))}),e(m,{text:"Гарнир",variant:"outlined",filter:"",onClick:l[6]||(l[6]=_=>i(6))})]),_:1},8,["modelValue"]),e(p,{class:"ml-5 bg-red-accent-1",icon:"mdi-refresh",width:"40px",height:"40px",onClick:t(s).getRecipiesNOLOAD},{default:o(()=>[e(u,{color:"white"},{default:o(()=>l[8]||(l[8]=[c("mdi-refresh")])),_:1})]),_:1},8,["onClick"])])]),_:1})])}}},ce={class:"d-flex ga-5 flex-wrap justify-center"},_e=["onClick","item"],me={class:"d-flex w-100 justify-center"},ue={class:"border-thin ml-1 pa-1 align-self-center"},ve={class:"border-thin mr-1 pa-1 align-self-center"},fe=["src"],pe={class:"d-flex mt-1"},xe={class:"d-flex border-thin pa-2"},ge={class:""},we={class:"d-flex"},he={class:"d-flex mt-5"},be={class:"ml-auto d-flex border-thin py-1 px-1 mr-5"},Re=["src"],$e={__name:"FilterSearch",setup(I){const s=T(),i=V();return(y,l)=>{const v=a("v-icon"),m=a("v-card-title"),h=a("v-card-subtitle"),u=a("v-card-text"),p=a("v-card"),b=a("v-hover"),_=a("v-btn"),R=a("v-spacer"),$=a("v-card-actions"),x=a("v-dialog"),L=a("v-divider");return g(),w(D,null,[e(x,{"max-width":"800"},{activator:o(({props:f})=>[n("div",ce,[(g(!0),w(D,null,U(t(i).getterShow,r=>(g(),w("div",{key:r,class:"d-flex w-25 ga-5 mb-7"},[e(b,{"open-delay":"50"},{default:o(({isHovering:F,props:S})=>[n("div",N({onClick:()=>{t(i).selectRecipe=r,t(i).dialogRecipe=!0,t(i).stat=r.Favorite},item:r,class:"w-100 cursor-pointer d-flex",ref_for:!0},f),[e(p,N({class:["d-flex flex-column align-center",S],height:"600",ref_for:!0},S,{elevation:F?8:2}),{default:o(()=>[e(m,{class:"mr-auto ml-auto d-flex"},{default:o(()=>[c(d(r.Name)+" ",1),e(v,{color:"yellow-darken-1 ml-2 align-self-center"},{default:o(()=>[c(d(t(i).showFavoriteStatus(r.Favorite)),1)]),_:2},1024)]),_:2},1024),n("div",me,[n("div",ue,d(r.Category),1),e(h,{class:"w-50 pa-1 align-self-center"},{default:o(()=>[c(d(r.Ingridients),1)]),_:2},1024),n("div",ve,d(r.Time),1)]),e(u,{class:"h-25 text-caption"},{default:o(()=>[c(d(r.Description),1)]),_:2},1024),n("img",{src:r.Image,class:"w-100 h-50",alt:"Тут могло быть изображения еды"},null,8,fe)]),_:2},1040,["class","elevation"])],16,_e)]),_:2},1024)]))),128))])]),default:o(({isActive:f})=>[k(e(p,{class:"d-flex flex-column"},{default:o(()=>[n("div",pe,[e(m,{class:"d-flex"},{default:o(()=>[n("div",xe,[n("h4",ge,d(t(i).selectRecipe.Name),1)]),e(_,{width:"150px",class:"ml-5 mt-3 bg-red",disabled:!t(s).isLogin,text:"Удалить",onClick:l[0]||(l[0]=r=>t(i).dialog=!0)},null,8,["disabled"]),e(_,{disabled:!t(s).isLogin,onClick:l[1]||(l[1]=()=>{t(i).patchFavoriteStatus(),t(i).selectRecipe.Favorite=!t(i).selectRecipe.Favorite}),class:"ml-5 align-self-end elevation-0 border-thin",width:"40px",height:"40px",icon:""},{default:o(()=>[e(v,{color:"yellow-darken-1"},{default:o(()=>[c(d(t(i).showFavoriteStatus(t(i).selectRecipe.Favorite)),1)]),_:1})]),_:1},8,["disabled"])]),_:1}),e($,{class:"ml-auto mr-2"},{default:o(()=>[e(R),e(_,{text:"Закрыть",onClick:r=>f.value=!1},null,8,["onClick"])]),_:2},1024)]),n("div",we,[n("div",he,[l[5]||(l[5]=n("h4",{class:"ml-5 align-self-center"},"Категория:",-1)),e(u,{class:"border-thin py-2 px-1 ml-1"},{default:o(()=>[c(d(t(i).selectRecipe.Category),1)]),_:1})]),n("div",be,[l[6]||(l[6]=n("h4",{class:"align-self-center mr-1"},"Время:",-1)),e(h,{class:"ma-0 pa-0 align-self-center"},{default:o(()=>[c(d(t(i).selectRecipe.Time),1)]),_:1})])]),l[7]||(l[7]=n("h4",{class:"ml-5 mt-5"},"Ингридиенты",-1)),e(u,null,{default:o(()=>[c(d(t(i).selectRecipe.Ingridients),1)]),_:1}),l[8]||(l[8]=n("h4",{class:"ml-5"},"Описание",-1)),e(u,null,{default:o(()=>[c(d(t(i).selectRecipe.Description),1)]),_:1}),n("img",{src:t(i).selectRecipe.Image,alt:"Изображение блюда"},null,8,Re)]),_:2},1536),[[C,t(i).dialog]])]),_:1}),e(x,{modelValue:t(i).dialog,"onUpdate:modelValue":l[4]||(l[4]=f=>t(i).dialog=f),"max-width":"300"},{default:o(()=>[e(p,{title:"Удалить рецепт?"},{default:o(()=>[e($,null,{default:o(()=>[e(_,{text:"Да",class:"bg-red",variant:"text",onClick:l[2]||(l[2]=()=>{t(i).deleteRecipe(t(i).selectRecipe.ID)})}),e(R),e(_,{text:"Нет",variant:"text",onClick:l[3]||(l[3]=f=>t(i).dialog=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L)],64)}}},ke={class:"main w-100 d-flex flex-column align-center mt-5 mb-5"},Ce={class:"mb-5 mt-5"},ye={key:0},Se={__name:"Recipies",setup(I){const s=V();return j(()=>s.inputText,i=>{i==""&&(s.showSearchResult=!1)}),(i,y)=>(g(),w("div",ke,[k(n("h2",Ce," Рецепты ",512),[[C,!t(s).loading]]),k(e(re,null,null,512),[[C,!t(s).loading]]),t(s).loading?A("",!0):(g(),w("div",ye,[k(n("div",null,[e(ie)],512),[[C,!t(s).showSearchResult]]),k(n("div",null,[e($e)],512),[[C,t(s).showSearchResult]])]))]))}};export{Se as default};
