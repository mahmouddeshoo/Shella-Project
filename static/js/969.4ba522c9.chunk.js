"use strict";(self.webpackChunkshella=self.webpackChunkshella||[]).push([[969],{541:(e,i,s)=>{s.r(i),s.d(i,{default:()=>o});var a=s(453),r=s(825),l=s(635),d=s(180),n=s(43);const c=s.p+"static/media/deliveryman.8b1078a89a8fa09cdae6.webp",t=s.p+"static/media/bickedriver.8f757cc8ed5cb171956c.webp";var m=s(579);const o=function(){const[e,i]=(0,n.useState)({firstName:"",familyName:"",email:"",driverType:"",area:"",vehicleType:"",idType:"",idNumber:""}),[s,o]=(0,n.useState)({firstName:"",familyName:"",email:"",driverType:"",area:"",vehicleType:"",idType:"",idNumber:""}),[p,h]=(0,n.useState)(null),[x,j]=(0,n.useState)(!1),v=e=>{const{name:s,value:a}=e.target;console.log(`Updating ${s} to ${a}`),i((e=>({...e,[s]:a}))),o((e=>({...e,[s]:""})))},u=()=>{i({firstName:"",familyName:"",email:"",driverType:"",area:"",vehicleType:"",idType:"",idNumber:""}),o({firstName:"",familyName:"",email:"",driverType:"",area:"",vehicleType:"",idType:"",idNumber:""}),h(null),j(!1)};return(0,m.jsxs)("section",{className:"join-as-driver",children:[(0,m.jsx)(a.A,{}),(0,m.jsxs)("div",{className:"join-as-driver-container",children:[(0,m.jsx)("div",{className:"join-as-driver-content",children:(0,m.jsx)("div",{className:"join-as-driver-hero"})}),(0,m.jsxs)("div",{className:"join-as-driver-main-content",children:[(0,m.jsx)("div",{className:"join-as-driver-form-title",children:(0,m.jsx)("h1",{children:"\u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0643\u0639\u0627\u0645\u0644 \u062a\u0648\u0635\u064a\u0644 "})}),(0,m.jsxs)("div",{className:"join-as-driver-form",children:[(0,m.jsxs)("form",{className:"main-form",onSubmit:i=>{i.preventDefault();const s=(()=>{const i={};let s=!0;return Object.keys(e).forEach((a=>{e[a]||(i[a]="\u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",s=!1)})),e.email&&!/\S+@\S+\.\S+/.test(e.email)&&(i.email="\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d",s=!1),o(i),s})();x?s&&(console.log("Form submitted:",e),alert("\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0646\u0645\u0648\u0632\u062c \u0628\u0646\u062c\u0627\u062d!"),u()):alert("\u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645!")},children:[(0,m.jsx)("div",{className:"main-form-description",children:(0,m.jsx)("p",{children:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a  \u0639\u0627\u0645\u0644 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 "})}),(0,m.jsx)("div",{className:"form-fields",children:(0,m.jsxs)("div",{className:"field-group",children:[(0,m.jsxs)("div",{className:"field-group-items",children:[(0,m.jsxs)("div",{className:"field-group-name",children:[(0,m.jsx)("label",{children:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 "}),(0,m.jsx)("input",{type:"text",className:s.firstName?"error-border":"",name:"firstName",value:e.firstName,onChange:v,placeholder:"\u0627\u062d\u0645\u062f",required:!0}),s.firstName&&(0,m.jsx)("span",{className:"error",children:s.firstName})]}),(0,m.jsxs)("div",{className:"field-group-family",children:[(0,m.jsx)("label",{children:"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 "}),(0,m.jsx)("input",{type:"text",className:s.familyName?"error-border":"",name:"familyName",placeholder:"\u062e\u0644\u0641",value:e.familyName,onChange:v,required:!0}),s.familyName&&(0,m.jsx)("span",{className:"error",children:s.familyName})]})]}),(0,m.jsxs)("div",{className:"field-group-items",children:[(0,m.jsxs)("div",{className:"field-group-email",children:[(0,m.jsx)("label",{children:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a "}),(0,m.jsx)("input",{type:"email",className:s.email?"error-border":"",name:"email",placeholder:"ex@example.com",value:e.email,onChange:v,required:!0}),s.email&&(0,m.jsx)("span",{className:"error",children:s.email})]}),(0,m.jsxs)("div",{className:"field-group-driver",children:[(0,m.jsx)("label",{children:"\u0646\u0648\u0639 \u0645\u0646\u062f\u0648\u0628 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 "}),(0,m.jsx)("div",{className:"select-warpper",children:(0,m.jsxs)("select",{className:"field-group-driver-type "+(s.driverType?"error-border":""),name:"driverType",value:e.driverType,onChange:v,required:!0,children:[(0,m.jsx)("option",{value:"independent",defaultValue:"",children:"\u0645\u0633\u062a\u0642\u0644"}),(0,m.jsx)("option",{value:"independent",children:"\u0645\u0633\u062a\u0642\u0644"}),(0,m.jsx)("option",{value:"partner",children:"\u0634\u0631\u064a\u0643"}),(0,m.jsx)("option",{value:"employee",children:"\u062a\u0627\u062c\u0631"})]})}),s.driverType&&(0,m.jsx)("span",{className:"error",children:s.driverType})]})]}),(0,m.jsxs)("div",{className:"field-group-items",children:[(0,m.jsxs)("div",{className:"field-group-erea",children:[(0,m.jsx)("label",{children:"\u0627\u0644\u0645\u0646\u0637\u0642\u0629 "}),(0,m.jsx)("input",{type:"text",className:s.area?"error-border":"",name:"area",placeholder:"\u062c\u062f\u0629",value:e.area,onChange:v,required:!0}),s.area&&(0,m.jsx)("span",{className:"error",children:s.area})]}),(0,m.jsxs)("div",{className:"field-group-car",children:[(0,m.jsx)("label",{children:"\u0646\u0648\u0639 \u0627\u0644\u0645\u0631\u0643\u0628\u0629 "}),(0,m.jsx)("div",{className:"select-warpper",children:(0,m.jsxs)("select",{className:"field-group-vehicle-type "+(s.vehicleType?"error-border":""),name:"vehicleType",value:e.vehicleType,onChange:v,required:!0,children:[(0,m.jsx)("option",{value:"motorcycle",defaultValue:"",children:"\u062f\u0631\u0627\u062c\u0629 \u0646\u0627\u0631\u064a\u0629"}),(0,m.jsx)("option",{value:"motorcycle",children:"\u062f\u0631\u0627\u062c\u0629 \u0646\u0627\u0631\u064a\u0629"}),(0,m.jsx)("option",{value:"bicycle",children:"\u062f\u0631\u0627\u062c\u0629 \u0647\u0648\u0627\u0626\u064a\u0629"}),(0,m.jsx)("option",{value:"car",children:"\u0633\u064a\u0627\u0631\u0629"})]})}),s.vehicleType&&(0,m.jsx)("span",{className:"error",children:s.vehicleType})]})]}),(0,m.jsxs)("div",{className:"field-group-items",children:[(0,m.jsxs)("div",{className:"field-group-id",children:[(0,m.jsx)("label",{children:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0648\u064a\u0629 "}),(0,m.jsx)("div",{className:"select-warpper",children:(0,m.jsxs)("select",{className:"field-group-id-type "+(s.idType?"error-border":""),name:"idType",value:e.idType,onChange:v,required:!0,children:[(0,m.jsx)("option",{value:"passport",defaultValue:"",children:"\u062c\u0648\u0627\u0632 \u0633\u0641\u0631"}),(0,m.jsx)("option",{value:"passport",children:"\u062c\u0648\u0627\u0632 \u0633\u0641\u0631"}),(0,m.jsx)("option",{value:"idCard",children:"\u0628\u0637\u0627\u0642\u0629 \u0634\u062e\u0635\u064a\u0629"}),(0,m.jsx)("option",{value:"license",children:"\u0631\u062e\u0635\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629"}),(0,m.jsx)("option",{value:"residence",children:"\u0625\u0642\u0627\u0645\u0629"})]})}),s.idType&&(0,m.jsx)("span",{className:"error",children:s.idType})]}),(0,m.jsxs)("div",{className:"field-group-id-num",children:[(0,m.jsx)("label",{children:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0634\u062e\u0635\u064a\u0629 "}),(0,m.jsx)("input",{type:"text",name:"idNumber",placeholder:"EX: xxxxx-xxxxxxxx-x",value:e.idNumber,onChange:v,className:s.idNumber?"error-border":"",required:!0}),s.idNumber&&(0,m.jsx)("span",{className:"error",children:s.idNumber})]})]})]})}),(0,m.jsxs)("div",{className:"form-upload",children:[p&&(0,m.jsx)("img",{id:"imagePreview",src:p,alt:"Preview"}),(0,m.jsx)("img",{id:"imagePreview",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBrVTLbYNAEN3FSL744BKcDvDNNiCZDpIO4gpMKrBTQaCCuASnApD4XekASuCM+ORNQiRiM1hRPNJq2Xm8t7PzFqQYiTiOM0yLASjdbDZLjqdwQJIkB5qrqnqq69rqD6TnURQdOa4cSnqet5hOp1nbtjtd10+XeBAE28lk4gFfAk+vRLHjs5Ty/QqQ8rRer3eCCfAcvLO/zFMhqvjuWYpjvfTB2WyWipEoy/Koquq5n0P1b6SndlUVpmn6Q2SYRdXY3ea5oijOarVyLcsqsP7FgQ8FKuWN6gRpZ7tpGpcMAuEVz3aXZ0PlAPRMI0Gc4sEwjLxXjQ/xDGZ9cKcbq/QRgj7MyvvJbp2ifxpHZEVRDfVnPoSRBxx2S5Tc1+jO9vO0BrbF45njsj2lfqGvLj4CDzMZlKNCDe7vIeoOXfqbohQg2mEY0jU6oIcLpHIMEnTGeKOiFHCeBBzxh/gSpabT9yz+GT/mkWiOodEPQtwn3E/PgbjRrwbGKAAAAABJRU5ErkJggg==",alt:"Preview"}),(0,m.jsx)("input",{type:"file",id:"imageUpload",name:"imageUpload",accept:"image/*",onChange:e=>{const i=e.target.files[0];if(i){const e=new FileReader;e.onloadend=()=>{h(e.result)},e.readAsDataURL(i)}}}),(0,m.jsx)("label",{htmlFor:"imageUpload",children:"\u062a\u062d\u0645\u064a\u0644 \u0635\u0648\u0631\u0629 \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"})]}),(0,m.jsx)("div",{className:"extra-info",children:(0,m.jsx)("h3",{children:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0636\u0627\u0641\u064a\u0629"})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"form-agreement",children:[(0,m.jsx)("input",{type:"checkbox",id:"terms",name:"terms",checked:x,onChange:e=>j(e.target.checked)}),(0,m.jsxs)("label",{htmlFor:"terms",children:[" \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u062c\u0645\u064a\u0639 ",(0,m.jsx)("span",{children:"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645"})]})]}),(0,m.jsxs)("div",{className:"form-actions",children:[(0,m.jsx)("button",{type:"reset",className:"btn btn-reset",onClick:u,children:"\u0625\u0639\u0627\u062f\u0629 \u0636\u064a\u0637 "}),(0,m.jsx)("button",{type:"submit",className:"btn btn-submit",disabled:!x,children:"\u0627\u0631\u0633\u0627\u0644"})]})]})]}),(0,m.jsxs)("div",{className:"driver-benefits",children:[(0,m.jsx)("div",{className:"benefits-title",children:(0,m.jsxs)("h2",{children:["\u0641\u0648\u0627\u0626\u062f \u0627\u0644\u0625\u0646\u0636\u0645\u0627\u0645 \u0643\u0639\u0627\u0645\u0644 \u062a\u0648\u0635\u064a\u0644 \u0641\u064a ",(0,m.jsx)("span",{children:"\u0634\u0644\u0629"})]})}),(0,m.jsxs)("div",{className:"benefits-list",children:[(0,m.jsxs)("div",{className:"benefit-item right",children:[(0,m.jsx)("img",{src:c,alt:"Always Connected",loading:"lazy"}),(0,m.jsxs)("div",{className:"benefit-item-description",children:[(0,m.jsx)("h3",{children:"\u0645\u062a\u0635\u0644 \u0641\u064a \u0627\u064a \u0648\u0642\u062a "}),(0,m.jsx)("p",{children:"\u0627\u0644\u062a\u0645\u062a\u0639 \u0628\u062d\u0631\u064a\u0629 \u0627\u0644\u0639\u0645\u0644 \u0641\u064a \u0627\u0644\u0627\u0648\u0642\u0627\u062a \u0627\u0644\u0645\u0644\u0627\u0626\u0645\u0629 \u0644\u0643 \u0643\u0645\u0627 \u0633\u0648\u0641 \u062a\u062a\u0645\u0643\u0646 \u0645\u0646 \u0639\u0645\u0644\u0643 \u0648\u0645\u0633\u0624\u0648\u0644\u064a\u0627\u062a\u0643 \u0627\u0644\u0627\u062e\u0631\u0649 "})]})]}),(0,m.jsxs)("div",{className:"benefit-item left",children:[(0,m.jsx)("img",{src:t,alt:"Competitive Rates",loading:"lazy"}),(0,m.jsxs)("div",{className:"benefit-item-description",children:[(0,m.jsx)("h3",{children:"\u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0631\u0633\u0648\u0645 \u062e\u062f\u0645\u0629 \u062a\u0646\u0627\u0641\u0633\u064a\u0629"}),(0,m.jsx)("p",{children:"\u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0631\u0633\u0648\u0645 \u062a\u0648\u0635\u064a\u0644 \u062a\u0646\u0627\u0641\u0633\u064a\u0629 \u0639\u0646\u062f \u062a\u0648\u0635\u064a\u0644 \u0643\u0644 \u0637\u0644\u0628 \u0648\u0627\u062e\u062a\u0631 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0642\u0631\u064a\u0628\u0629 \u0645\u0646\u0643"})]})]})]})]})]})]}),(0,m.jsx)(r.A,{}),(0,m.jsx)(l.A,{}),(0,m.jsx)(d.A,{})]})]})}}}]);
//# sourceMappingURL=969.4ba522c9.chunk.js.map