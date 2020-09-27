class Implementation {
    firstNameValidator(firstName) {
        let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (FIRST_NAME_PATTERN.test(firstName)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    lastNameValidator(lastName) {
        let LAST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (LAST_NAME_PATTERN.test(lastName)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    emailAddressValidator(email) {
        let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");

        if (EMAIL_PATTERN.test(email)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    phoneNumberValidator(phoneNumber) {
        let PHONE_NUMBER_PATTERN = new RegExp("^([0-9]{2}[ ]+)?[0-9]{10}$");

        if (PHONE_NUMBER_PATTERN.test(phoneNumber)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
}
module.exports = new Implementation();