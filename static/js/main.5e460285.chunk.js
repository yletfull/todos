(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],[,,,,,,,,,function(t,e,n){},,function(t){t.exports=JSON.parse("[]")},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(1),a=n.n(c),r=n(10),u=n.n(r),s=(n(17),n(2)),i=n(3),p=(n(18),n(19),function(t){var e=t.logoText;return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{className:"header__logo-text",children:e})})}),d=n(4),l=function(t){var e=t.filter((function(t){return!0===t.checked})),n=t.filter((function(t){return!1===t.checked}));return[].concat(Object(d.a)(n),Object(d.a)(e))},j=a.a.createContext(),b=a.a.createContext(),f=n(5),O=(n(20),function(t){var e=new Date(t),n="".concat(e.getMonth()+1),o="".concat(e.getDate()),c=e.getFullYear();return n.length<2&&(n="0".concat(n)),o.length<2&&(o="0".concat(o)),[c,n,o].join("-")}),_=function(t){var e=t.isOpen,n=t.popupName,r=void 0===n?"addTodo":n,u=t.blockBackground,p=void 0===u||u,l=t.todoText,_=void 0===l?"":l,x=t.todoDate,h=void 0===x?new Date:x,m=a.a.useContext(b),N=Object(c.useContext)(j),g=Object(c.useState)({todoText:_,todoDate:h}),v=Object(i.a)(g,2),C=v[0],y=v[1],k=Object(c.useState)({todoTextErrorShow:!1,todoDateErrorShow:!1}),S=Object(i.a)(k,2),T=S[0],D=S[1],w=Object(c.useState)({requiredInputsCount:1,successInputsCount:0}),E=Object(i.a)(w,2),I=E[0],J=E[1],F=Object(c.useState)(!1),M=Object(i.a)(F,2),P=M[0],R=M[1],q=function(t){!function(t){var e=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e[0],c=e[1],a=o.target.name,r=o.target.value;(function(t){J((function(e){return Object(s.a)(Object(s.a)({},e),{},{requiredInputsCount:Number(t)})}))})(o.target.dataset.inputscount),y((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(f.a)({},a,r))})),D(c?function(t){return Object(s.a)(Object(s.a)({},t),{},Object(f.a)({},"".concat(a,"ErrorShow"),!1))}:function(t){return Object(s.a)(Object(s.a)({},t),{},Object(f.a)({},"".concat(a,"ErrorShow"),!0))})};switch(t.target.name){case"todoText":return t.target.value.length>=5&&/[\u0430-\u044f\u0451a-zA-Z1-9]/i.test(t.target.value)?e(t,!0):e(t,!1);case"todoDate":y((function(e){return Object(s.a)(Object(s.a)({},e),{},{todoDate:t.target.value})}))}}(t)},L=function(){m({isOpen:!1})};return Object(c.useEffect)((function(){var t=0;Object.values(T).forEach((function(e){if(!e)return t+=1})),J((function(e){return Object(s.a)(Object(s.a)({},e),{},{successInputsCount:t})}))}),[T]),Object(c.useEffect)((function(){var t=I.successInputsCount===I.requiredInputsCount;R(t)}),[I]),Object(c.useEffect)((function(){var t=setTimeout(R,0,!1);return function(){clearTimeout(t)}}),[]),Object(c.useEffect)((function(){y({todoText:_,todoDate:O(h)})}),[_]),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:e?"popup":"popup_hidden",style:function(){if(!p)return{zIndex:0,backgroundColor:"rgba(0, 0, 0, 0)"}}(),onClick:function(t){return"popup"===t.target.className&&L()},children:["addTodo"===r&&Object(o.jsxs)("div",{className:"popup__content",children:[Object(o.jsx)("h2",{className:"popup__title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(o.jsx)("div",{className:"popup__close",onClick:function(){return L()}}),Object(o.jsxs)("form",{className:"popup__form",children:[Object(o.jsx)("p",{className:"popup__input-descriptor",children:"\u0417\u0430\u0434\u0430\u0447\u0430"}),Object(o.jsx)("input",{name:"todoText","data-inputscount":"2",className:"input popup__input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:q,value:C.todoText}),T.todoTextErrorShow?Object(o.jsx)("p",{className:"popup__input-error",children:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442"}):Object(o.jsx)("p",{className:"popup__input-error popup__input-error_hidden",children:" "}),Object(o.jsx)("p",{className:"popup__input-descriptor",children:"\u0414\u0430\u0442\u0430"}),Object(o.jsx)("input",{name:"todoDate","data-inputscount":"2",className:"input popup__input",type:"date",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",onChange:q,value:C.todoDate}),T.todoDateErrorShow?Object(o.jsx)("p",{className:"popup__input-error",children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u0434\u0430\u0442\u0430"}):Object(o.jsx)("p",{className:"popup__input-error popup__input-error_hidden",children:" "}),Object(o.jsx)("button",{type:"button",className:P?"button popup__button popup__button_entry":"button popup__button popup__button_disable popup__button_entry",disabled:!P,onClick:function(){N((function(t){var e=t.map((function(t){return t.id})),n=Math.max.apply(Math,Object(d.a)(e).concat([0]))+1;return[{text:C.todoText,date:C.todoDate,checked:!1,id:n}].concat(Object(d.a)(t))})),L()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]}),"editTodo"===r&&Object(o.jsxs)("div",{className:"popup__content",children:[Object(o.jsx)("h2",{className:"popup__title",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(o.jsx)("div",{className:"popup__close",onClick:function(){return L()}}),Object(o.jsxs)("form",{className:"popup__form",children:[Object(o.jsx)("p",{className:"popup__input-descriptor",children:"\u0417\u0430\u0434\u0430\u0447\u0430"}),Object(o.jsx)("input",{name:"todoText","data-inputscount":"2",className:"input popup__input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:q,value:C.todoText}),T.todoTextErrorShow?Object(o.jsx)("p",{className:"popup__input-error",children:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442"}):Object(o.jsx)("p",{className:"popup__input-error popup__input-error_hidden",children:" "}),Object(o.jsx)("p",{className:"popup__input-descriptor",children:"\u0414\u0430\u0442\u0430"}),Object(o.jsx)("input",{name:"todoDate","data-inputscount":"2",className:"input popup__input",type:"date",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",onChange:q,value:C.todoDate}),T.todoDateErrorShow?Object(o.jsx)("p",{className:"popup__input-error",children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u0434\u0430\u0442\u0430"}):Object(o.jsx)("p",{className:"popup__input-error popup__input-error_hidden",children:" "}),Object(o.jsx)("button",{type:"button",className:P?"button popup__button popup__button_entry":"button popup__button popup__button_disable popup__button_entry",disabled:!P,onClick:function(){N((function(t){var e=t.findIndex((function(t){return t.text===_}));return t[e].text=C.todoText,t[e].date=C.todoDate,t})),L()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})]})})},x=n(11),h=(n(21),n(9),function(t){var e=t.todo,n="string"===typeof e.date?new Date(e.date):e.date,c=a.a.useRef(),r=a.a.useRef(),u=a.a.useRef(),s=a.a.useContext(b),i=a.a.useContext(j);return Object(o.jsxs)("div",{className:"todo-list__item",children:[Object(o.jsxs)("label",{className:"todo-list__label",htmlFor:e.id,children:[Object(o.jsx)("input",{type:"checkbox",id:e.id,className:"todo-list__checkbox",onChange:function(t){i((function(n){var o=n.findIndex((function(t){return t.text===e.text}));return n[o].checked=t.target.checked,n=l(n),Object(d.a)(n)}))},checked:e.checked}),Object(o.jsx)("span",{className:"todo-list__description",ref:c,children:e.text})]}),Object(o.jsx)("p",{className:"todo-list__remove-btn",onClick:function(t){t.stopPropagation(),confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443?")&&i((function(t){return t.filter((function(t){return t.id!==e.id}))}))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(o.jsx)("p",{className:"todo-list__edit-btn",onClick:function(t){t.stopPropagation(),s({isOpen:!0,popupName:"editTodo",todoText:c.current.textContent,todoDate:n})},ref:u,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(o.jsx)("span",{className:"todo-list__description_time",ref:r,children:n.toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})})]})}),m=function(t){var e=t.todos,n=a.a.useContext(b);return Object(o.jsxs)("section",{className:"todo",children:[Object(o.jsx)("button",{type:"button",className:"todo-list__add-button",onClick:function(){n({isOpen:!0,popupName:"addTodo"})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(o.jsx)("div",{className:"todo-list",children:e.length?e.map((function(t){return Object(o.jsx)(h,{todo:t},t.id)})):Object(o.jsx)("p",{className:"todo-list__epmty-text",children:"\u041d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"})})]})},N=function(t){var e=t.todos,n=a.a.useState(e),c=Object(i.a)(n,2),r=c[0],u=c[1],s=a.a.useState(e),p=Object(i.a)(s,2),l=p[0],j=p[1],b=a.a.useState(""),f=Object(i.a)(b,2),O=f[0],_=f[1],x=a.a.useState(["early!"]),h=Object(i.a)(x,2),N=h[0],g=h[1],v=a.a.useRef();a.a.useEffect((function(){u(e)}),[e]),a.a.useEffect((function(){j(r.filter((function(t){return-1!==t.text.toLowerCase().indexOf(O.toLowerCase())}))),-1!==N.indexOf("completed")?j((function(t){return t.filter((function(t){return!0===t.checked}))})):-1!==N.indexOf("completed!")?j((function(t){return t.filter((function(t){return!1===t.checked}))})):-1!==N.indexOf("early")?j((function(t){return t.sort((function(t,e){return t.date<e.date?1:t.date>e.date?-1:0}))})):-1!==N.indexOf("early!")&&j((function(t){return t.sort((function(t,e){return t.date<e.date?-1:t.date>e.date?1:0}))}))}),[O,r,N]);var C=function(t){-1!==N.indexOf(t.target.name)?g((function(e){return e.filter((function(e){return e!==t.target.name}))})):(g((function(e){return e.filter((function(e){return!e.startsWith(t.target.name.slice(0,-1))}))})),g((function(e){return[].concat(Object(d.a)(e),[t.target.name])})))},y=function(t){return-1!==N.indexOf(t)?"filter__button_enabled":"filter__button"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("section",{className:"filter",ref:v,children:[Object(o.jsx)("input",{className:"filter__input",name:"filterName",placeholder:"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443",onChange:function(t){_(t.target.value)}}),Object(o.jsx)("button",{className:y("completed"),type:"button",onClick:C,name:"completed",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435"}),Object(o.jsx)("button",{className:y("completed!"),type:"button",onClick:C,name:"completed!",children:"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435"}),Object(o.jsx)("button",{className:y("early!"),type:"button",onClick:C,name:"early!",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u043d\u043d\u0438\u0435"}),Object(o.jsx)("button",{className:y("early"),type:"button",onClick:C,name:"early",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u0437\u0434\u043d\u0438\u0435"})]}),Object(o.jsx)(m,{todos:l})]})};var g=function(){var t=l(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):x),e=a.a.useState(t),n=Object(i.a)(e,2),c=n[0],r=n[1],u=a.a.useState({isOpen:!1,popupName:"addTodo"}),d=Object(i.a)(u,2),f=d[0],O=d[1];return localStorage.setItem("todos",JSON.stringify(c)),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{logoText:"Todos list"}),Object(o.jsx)(j.Provider,{value:r,children:Object(o.jsxs)(b.Provider,{value:O,children:[Object(o.jsx)(N,{todos:c}),Object(o.jsx)(_,Object(s.a)({},f))]})})]})};u.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.5e460285.chunk.js.map