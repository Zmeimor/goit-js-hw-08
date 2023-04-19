const feedbackForm = document.querySelector(".feedback-form");

importToFormStorage();


feedbackForm.addEventListener('submit', validDateTest);
feedbackForm.addEventListener('input',  _.throttle(formLocalStorage,500));

function importToFormStorage() {
    const dataStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(dataStorage);
    if (!dataStorage) {
        return
};

//test na object:

const keys = Object.keys(dataStorage);
console.log(keys);
     
for (const key in dataStorage) {
  feedbackForm[key].value = dataStorage[key];
  feedbackForm[key].textContent = feedbackForm[key].value
  console.log(dataStorage[key])
  // console.log(feedbackForm[key].name)
  console.log(feedbackForm[key].value)
  console.log(feedbackForm[key].textContent)
}
    }

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
