const emailBox = document.getElementById("emailBox");

const formSubmit = document.getElementById("formButton");

const errorSymbol = document.querySelector(".inputContainer > .error");

const inputBox = document.querySelector(".inputContainer");

const errorPara = document.querySelector(".errorPara");

console.log(formSubmit);

const emailVaildation = [/^\S+@\S+\.\S+$/];

formSubmit.addEventListener("click", (e) => {
    if (!(emailVaildation[0].test(emailBox.value))) {
        errorSymbol.style.visibility = "visible";
        inputBox.style.border = "1px solid var(--softRed)";
        errorPara.style.display = "block";
    }
})

