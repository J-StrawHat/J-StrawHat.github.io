for(var parentNodes=document.querySelectorAll("ul.category-list>li.category-list-item"),i=0;i<parentNodes.length;i++){var iNode=document.createElement("i"),btnNode=document.createElement("i");iNode.classList.add("far","fa-folder","category-folder-icon"),btnNode.classList.add("fas","fa-angle-left","category-trigger"),parentNodes[i].prepend(iNode),parentNodes[i].insertBefore(btnNode,parentNodes[i].childNodes[3]),parentNodes[i].childNodes[4].style.display="none"}var clkBtnArr=document.querySelectorAll("i.category-trigger");clkBtnArr.forEach((e=>{e.addEventListener("click",(function(){this.classList.toggle("fa-angle-left"),this.classList.toggle("fa-angle-down"),this.parentNode.childNodes[0].classList.toggle("fa-folder-open"),this.parentNode.childNodes[0].classList.toggle("fa-folder");var e=this.parentNode.childNodes[4];console.log(e.style.display),null==e.style.display||"none"!=e.style.display?e.style.display="none":e.style.display=null}))}));