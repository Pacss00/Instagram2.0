const emailErrors = {
    uppercase: { regex: /[A-Z]/, description: 'La email deve contenere almeno una lettera maiuscola' },
    lowercase: { regex: /[a-z]/, description: 'La email deve contenere almeno una lettera minuscola' },
    special: { regex: /[^A-Za-z0-9]/, description: 'La email deve contenere almeno un carattere speciale' },
  };

  const passErrors = {
    uppercase: { regex: /[A-Z]/, description: 'La password deve contenere almeno una lettera maiuscola' },
    lowercase: { regex: /[a-z]/, description: 'La password deve contenere almeno una lettera minuscola' },
    digit: { regex: /[0-9]/, description: 'La password deve contenere almeno un numero' },
    special: { regex: /[^A-Za-z0-9]/, description: 'La password deve contenere almeno un carattere speciale' },
    length: { test: password => password.length >= 8, description: 'La password deve essere di almeno 8 caratteri' },
  };

  const usernameErrors = {
    uppercase: { regex: /[A-Z]/, description: 'Lo username deve contenere almeno una lettera maiuscola' },
    lowercase: { regex: /[a-z]/, description: 'Lo username deve contenere almeno una lettera minuscola' },
    digit: { regex: /[0-9]/, description: 'Lo username deve contenere almeno un numero' },
    length: { test: password => password.length >= 8, description: 'Lo username deve essere di almeno 8 caratteri' },
  };

const Validation = {

    isValidEmail(email) {
        return Object.entries(emailErrors).flatMap(([name, { test, regex, description }]) => {
            const isValid = test ? test(email) : regex.test(email);
            return isValid ? [] : { description, name };
        });
    },

    isValidPassword(password) {
        return Object.entries(passErrors).flatMap(([name, { test, regex, description }]) => {
            const isValid = test ? test(password) : regex.test(password);
            return isValid ? [] : { description, name };
        });
    },

    isValidUsername(username) {
        return Object.entries(usernameErrors).flatMap(([name, { test, regex, description }]) => {
          const isValid = test ? test(username) : regex.test(username);
          return isValid ? [] : { description, name };
        });
      }

}
  
 
  module.exports = Validation;