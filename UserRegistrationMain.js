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
                default:
                    console.log("Enter Valid option");
                    break;
            }
        }) 
    }
}
const obj = new main();
obj.main();