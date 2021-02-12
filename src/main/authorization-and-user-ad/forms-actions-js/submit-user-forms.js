function submitUserForms(event) {
    const submittedForm = {};
    const formData = new FormData(event.target);

    formData.forEach((value, key) => submittedForm[key] = value);
    

    return submittedForm;
};

function submitUserAdForms(form) {
    return new FormData(form);
};

export { submitUserForms, submitUserAdForms };