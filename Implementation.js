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
}
module.exports = new Implementation();