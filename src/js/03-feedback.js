const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener('input', absorbDateForm);
feedbackForm.addEventListener('submit', absorbDateForm);
function absorbDateForm(ev) {
    ev.preventDefault();
    console.log("kkjj")
    const {
        elements: { email, message }
    } = ev.currentTarget;
    console.log(elements);
    localStorage.setItem("feedback-form-state", JSON.stringify(ev.currentTarget));
}

