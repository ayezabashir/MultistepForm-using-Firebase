const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step => step.classList.contains('active'));
if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep();
}

multiStepForm.addEventListener('click', (e) => {
    const inputs = [...formSteps[currentStep].querySelectorAll('input')];
    const isValid = inputs.every(input => input.reportValidity());
    if (e.target.matches("[data-next]")) {
        if (isValid) {
            currentStep += 1;
        }
        showCurrentStep();
    } else if (e.target.matches("[data-prev]")) {
        currentStep -= 1;
        showCurrentStep();
    }
    // reportValidity() checks for the validation, and returns boolean if the REQUIRED feilds are filled or not

})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    })
}