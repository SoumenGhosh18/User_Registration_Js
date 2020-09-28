class Implementation {
    firstNameValidator = (input) => {
        let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (FIRST_NAME_PATTERN.test(input)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    lastNameValidator = (input) => {
        let LAST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (LAST_NAME_PATTERN.test(input)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    emailValidator = (input) => {
        let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");

        if (EMAIL_PATTERN.test(input)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    phoneNumberValidator = (input) => {
        let PHONE_NUMBER_PATTERN = new RegExp("^([0-9]{2}[ ]+)?[0-9]{10}$");

        if (PHONE_NUMBER_PATTERN.test(input)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    passwordValidator = (input) => {
        let PASSWORD_PATTERN = new RegExp("(?=.*[0-9])(?=.*[@]{1})(?=.*[A-Z])(?=.*[a-z])(.{8,15})$");

        if (PASSWORD_PATTERN.test(input)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    
}
module.exports = new Implementation();