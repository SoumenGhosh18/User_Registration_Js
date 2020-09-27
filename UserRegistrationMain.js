const a = require('./Implementation');
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
                        a.firstNameValidator(firstName);
                    })
                    break;
                case "2":
                    input.question("Enter First Name: ", function (lastName) {
                        a.firstNameValidator(lastName);
                    })
                case "3":
                    input.question("Enter Email Address: ", function (email) {
                       a.emailValidator(email);
                        })
                    break;
                case "4":
                    input.question("Enter Phone Number: ", function (phoneNumber) {
                       a.phoneNumberValidator(phoneNumber);
                        })
                    break;
                    case "5":
                        input.question("Enter Password with Min 8 Character,One uppercase and numeric: ", function (password) {
                        a.passwordValidator(password);
                        })
                        break;    
                default:
                    console.log("Enter Valid option");
                    break;
            }
        }) 
    }
}
const obj = new main();
obj.main();