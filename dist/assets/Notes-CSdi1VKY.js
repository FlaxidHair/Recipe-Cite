import{k as J,i as K,u as O,l as r,r as s,e as o,c as g,a as e,w as l,h as B,b as i,o as f,n as j,p as A,f as u,g as E,F as I,d as G,t as v,m as L}from"./index-hN9xAWAW.js";const H={key:0,class:"main d-flex flex-column align-center"},Q=i("h2",{class:"mt-10 mb-5"},"Добавить заметку",-1),X={class:"w-50 mr-auto ml-auto border-thin mb-5"},Y={class:"d-flex"},Z={class:"d-flex flex-column align-center"},ee={class:"d-flex ga-5 justify-center flex-wrap"},te=["onClick","item"],le={class:"d-flex mt-1"},se={__name:"Notes",setup(oe){const p=J();K(()=>{n.getNotes});const n=O(),b=r(null),k=r(""),w=r("");let c=r(!1);const U=r([]),q=r({required:_=>!!_||"Необходимо заполнить поле!"});function F(){c&&fetch("https://script.google.com/macros/s/AKfycbwf7Ty0tbwPJJbm3gb9FRW0wk0kMRoyqCNeK9xMB9n4a0pfWktu3eiWnbB2dzeLHrcO/exec",{method:"POST",body:new FormData(b.value)}).then(_=>{_.status==200&&(this.vform2.reset(),n.getNotes(),alert("Заметка добавлена"))})}return(_,t)=>{const M=s("v-text-field"),m=s("v-btn"),R=s("v-tooltip"),D=s("v-textarea"),P=s("v-form"),V=s("v-card-title"),h=s("v-card-text"),x=s("v-card"),W=s("v-hover"),N=s("v-spacer"),y=s("v-card-actions"),C=s("v-dialog"),$=s("v-divider"),z=s("v-container");return o(n).loading?B("",!0):(f(),g("div",H,[Q,e(z,null,{default:l(()=>[i("div",X,[e(P,{ref_key:"vform2",ref:U,modelValue:o(c),"onUpdate:modelValue":t[4]||(t[4]=a=>j(c)?c.value=a:c=a)},{default:l(()=>[i("form",{ref_key:"forma",ref:b,onSubmit:t[3]||(t[3]=A(()=>{},["prevent"]))},[i("div",Y,[e(M,{required:"",rules:[q.value.required],name:"Title",modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=a=>k.value=a),label:"Введите заголовок",tile:"",variant:"solo","hide-details":"",class:""},null,8,["rules","modelValue"]),i("div",null,[e(m,{onClick:t[1]||(t[1]=a=>F()),disabled:!o(p).isLogin,class:"elevation-2",type:"submit",width:"120px",tile:"",height:"56px",flat:""},{default:l(()=>[u("Добавить")]),_:1},8,["disabled"]),o(p).isLogin?B("",!0):(f(),E(R,{key:0,activator:"parent",location:"end"},{default:l(()=>[u("Войдите что бы добавить!")]),_:1}))])]),e(D,{modelValue:w.value,"onUpdate:modelValue":t[2]||(t[2]=a=>w.value=a),name:"Subtitle",label:"Введите заметку","no-resize":"","max-rows":"10",tile:"",variant:"filled","hide-details":"",class:""},null,8,["modelValue"])],544)]),_:1},8,["modelValue"])]),i("div",Z,[e(C,{"max-width":"800"},{activator:l(({props:a})=>[i("div",ee,[(f(!0),g(I,null,G(o(n).getterNotes,d=>(f(),g("div",{key:d,class:"d-flex ga-5 mb-7"},[e(W,{"open-delay":"50"},{default:l(({isHovering:S,props:T})=>[i("div",L({onClick:()=>{o(n).selectNote=d},item:d,class:"w-100 cursor-pointer d-flex",ref_for:!0},a),[e(x,L({class:["d-flex flex-column align-center",S,T],"min-width":"300px",height:"200px",ref_for:!0},T,{elevation:S?8:2}),{default:l(()=>[e(V,{class:"mr-auto ml-auto"},{default:l(()=>[u(v(d.Title),1)]),_:2},1024),e(h,{class:"h-25 text-caption"},{default:l(()=>[u(v(d.Subtitle),1)]),_:2},1024)]),_:2},1040,["class","elevation"])],16,te)]),_:2},1024)]))),128))])]),default:l(({isActive:a})=>[e(x,{class:"d-flex flex-column"},{default:l(()=>[i("div",le,[e(V,null,{default:l(()=>[u(v(o(n).selectNote.Title),1)]),_:1}),e(y,{class:"ml-auto align-end mr-2"},{default:l(()=>[e(N),e(m,{text:"Закрыть",onClick:d=>a.value=!1},null,8,["onClick"])]),_:2},1024)]),e(h,null,{default:l(()=>[u(v(o(n).selectNote.Subtitle),1)]),_:1}),e(m,{disabled:!o(p).isLogin,width:"150px",class:"ml-auto mr-5 bg-red my-2 mb-5",text:"Удалить",onClick:t[5]||(t[5]=d=>o(n).dialog=!0)},null,8,["disabled"])]),_:2},1024)]),_:1})]),e(C,{modelValue:o(n).dialog,"onUpdate:modelValue":t[8]||(t[8]=a=>o(n).dialog=a),"max-width":"300"},{default:l(()=>[e(x,{title:"Удалить заметку?"},{default:l(()=>[e(y,null,{default:l(()=>[e(m,{text:"Да",class:"bg-red",variant:"text",onClick:t[6]||(t[6]=()=>{o(n).deleteNote(o(n).selectNote.ID)})}),e(N),e(m,{text:"Нет",variant:"text",onClick:t[7]||(t[7]=a=>o(n).dialog=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e($)]),_:1})]))}}};export{se as default};
