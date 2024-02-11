const STORAGE_KEY = "feedback-form-state";

const formElem = document.querySelector(".feedback-form");
formElem.addEventListener("input", onFormInput);
formElem.addEventListener("submit", onFormSubmit);
init();

function onFormInput() {
    const email = formElem.elements.email.value.trim();
    const message = formElem.elements.message.value.trim();
    const data = {
        email,
        message,
    };
    saveToLS(STORAGE_KEY, data)
}
function saveToLS(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}
function loadFromLS(key) {
    const zip = localStorage.getItem(key);
    try {
        return JSON.parse(zip);
    } catch {
        return zip;
    } 
}
function init() {
    const data = loadFromLS(STORAGE_KEY) || {};
    formElem.elements.email.value = data.email || "";
    formElem.elements.message.value = data.message || "";
}
function onFormSubmit(event) {
    event.preventDefault();
    const email = formElem.elements.email.value.trim();
    const message = formElem.elements.message.value.trim();
    if (email === "" || message === "") {
        alert("All form fields must be filled in");
    } else {
        const data = {
            email,
            message,
        };
        formElem.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(data);
    }
}