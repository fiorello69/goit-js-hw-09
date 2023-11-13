const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.background=getConicGradient()}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.ee28bb94.js.map
