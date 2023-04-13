const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener('submit', validDateTest);
feedbackForm.addEventListener('input',  _.throttle(formLocalStorage,300));

importToFormStorage();

function importToFormStorage() {
    const dataStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(dataStorage);
    if (dataStorage) {
        for (key in dataStorage) {
            feedbackForm[key].value = dataStorage[key];
        }
    }
};

function formLocalStorage(event) {
    event.preventDefault();
    const {
            elements: {email, message}
          } = event.currentTarget;
  // inputDataForm[event.target.name] = event.target.value;
  try {
    const inputDataForm = JSON.stringify(
      { email: email.value, message: message.value });

    console.log(inputDataForm);
    localStorage.setItem("feedback-form-state", inputDataForm); 
    } catch (error) { console.log("error") }
};

function validDateTest (event) {
    event.preventDefault();
    const isValidForm = [...event.target.elements]
    .filter((elements) => elements.tagName === "INPUT")
    .some((elements)=> elements.value === "");
      
    if (isValidForm) {
        alert("Усі поля мають бути заповнені.");
        return
      }
        const {
            elements: {email, message}
          } = event.currentTarget;

        const resultForm = {email: email.value, message: message.value};
    console.log(resultForm);
    feedbackForm.reset();
    localStorage.removeItem("feedback-form-state");
return;
  }; 