import{r,h as t}from"./p-e8a5b1e5.js";const e=class{constructor(t){r(this,t),this.minimalNumber=0}handleKeyDown(r){const t=/^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(r.keyCode));if("ArrowUp"!==r.key&&"ArrowDown"!==r.key)return t?void 0:(r.preventDefault(),!1)}render(){return t("input",{pattern:"\\d*",type:"number",min:this.minimalNumber,placeholder:this.placeholder})}static get style(){return"input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"}};export{e as zui_number_input};