var e=document.body,t=e.querySelectorAll(".field"),l=e.querySelectorAll(".field-text");t.forEach(function(e,t){var r=document.createElement("label"),a=l[t],c=l[t].getAttribute("name"),d=l[t].getAttribute("id");r.classList.add("field-label"),r.setAttribute("for",d),r.textContent=c,e.prepend(r),a.placeholder=c.slice(0,1).toUpperCase()+c.slice(1)});
//# sourceMappingURL=index.bb84b4e5.js.map
