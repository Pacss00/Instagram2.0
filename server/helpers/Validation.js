const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const usernameRegex = /^[A-Za-z\d]{4,12}/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;


const Validation = {

    isValidUsername(input) {
        return input.match(usernameRegex)
    },

    isValidEmail(input) {
        return input.match(emailRegex)
    },

    isValidPassword(input) {
        return input.match(passwordRegex)
    }
    
}

module.exports = Validation;