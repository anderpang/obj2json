/*! <anderpang@foxmail.com> */
"use strict";(function(){var e=document.querySelector(".obj2json-form"),t=e.querySelector(".upload-area"),r=t.querySelector("span"),n=r.innerHTML,a=e.elements;var i={status:"READY",list:[]};a["precision"].addEventListener("change",function(){var e=this.selectedIndex,t=this.nextElementSibling;if(e===0){t.textContent="Default"}else{var n=Math.pow(10,e-1);t.textContent=1/n}},false);s(t);function s(e){e.addEventListener("dragover",function(e){e.preventDefault()},false);e.addEventListener("drop",function(e){e.preventDefault();var t=e.dataTransfer.files;f(t)},false)}a["files"].addEventListener("change",function(){f(this.files)},false);function l(e,t){var n=new FileReader;var s={name:e.name};n.onerror=function(e){alert(e)};n.onload=function(e){s.text=e.target.result;i.list.push(s);t()};n.readAsText(e)}function f(e){var t=e.length,n=0,s;if(t>0){s=function(){if(n===t){i.status="LOADED";r.innerHTML="Ready!"}else{l(e[n],s)}n++};i.list.length=0;i.status="LOADING";r.innerHTML="Reading files...";s()}}e.addEventListener("reset",function(e){i.status="READY";r.innerHTML=n;i.list.length=0;a["result"].style.display="";a["files"].value=""},false);e.addEventListener("submit",function(e){e.preventDefault();if(i.status==="READY"){alert("File not uploaded");return}else if(i.status==="LOADING"){alert("Files reading...\ntry it laster");return}var t={},n={},s=false;i.list.forEach(function(e){if(!s&&e.name.toLowerCase().indexOf(".obj")!==-1){s=true}n[e.name]=e.text});if(!s){alert("Need .obj file");return}t.files=n;t.scale=a["scale"].value*1;t.reverse=a["reverse"].checked;t.precision=a["precision"].selectedIndex-1;var r=obj2json(t);a["result"].value=JSON.stringify(r);a["result"].style.display="block"},false)})();
