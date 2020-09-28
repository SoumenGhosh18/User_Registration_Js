const result = require('./Implementation');
class main {
    main() {
        console.log("Welcome to User Validation");
        console.log("1.FirstName 2.LastName 3.Email 4.PhoneNo 5.Password ");
        var readline = require('readline');
        var input = readline.createInterface(process.stdin, process.stdout);
        input.question("Enter Choice :", function (option) {
            switch (option) {
                case "1":
                    input.question("Enter First Name: ", function (firstName) {
                        result.firstNameValidator(firstName);
                        process.exit();
                    })
                    break;
                case "2":
                    input.question("Enter Last Name: ", function (lastName) {
                        result.firstNameValidator(lastName);
                        process.exit();
                    })
                case "3":
                    input.question("Enter Email Address: ", function (email) {
                        result.emailValidator(email);
                       process.exit();
                        })
                    break;
                case "4":
                    input.question("Enter Phone Number: ", function (phoneNumber) {
                        result.phoneNumberValidator(phoneNumber);
                       process.exit();
                        })
                    break;
                case "5":
                        input.question("Enter Password with Min 8 Char,One uppercase, one numeric and one spl char: ", function (password) {
                            result.passwordValidator(password);
                        })
                        break;    
                default:
                    console.log("Enter Valid option");
                    process.exit();
                    break;
            }
        }) 
    }
}
const obj = new main();
obj.main();