class Implementation {
    firstNameValidator(name) {
        let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (FIRST_NAME_PATTERN.test(name)) {
            console.log("Thank you its valid");
        }
        else {
            console.log("sorry its invalid");
        }
    }
    
}
module.exports = new Implementation();