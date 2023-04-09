const e=document.querySelector(".feedback-form");function t(e){e.preventDefault(),console.log("kkjj");const{elements:{email:t,message:n}}=e.currentTarget;console.log(elements),localStorage.setItem("feedback-form-state",JSON.stringify(e.currentTarget))}e.addEventListener("input",t),e.addEventListener("submit",t);
//# sourceMappingURL=03-feedback.47550c38.js.map
