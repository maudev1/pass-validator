    /**
     * ******************************************************************************
     * 
     * 
     * Pass Validator - Author: Maurício PS Júnior <mauriciojr.dev@gmail.com>
     * 
     * 
     * ******************************************************************************
     * 
     * 
     * 
     *To use Pass Validator you must call the function checkCharacter()
     *in a event, to do this you have to make two jQuery functions, 
     *one in password input and another in confirmation input, how to in this example:
     *Call the function Pass the password input value, confirmation input avlue and 
     *your preference length
     *
     * Password input:
     * 
     *  $('#password_field').on('keyup', function () {
     *     
     *     checkCharacters($('#password_field').val(),$('#confirm_field').val(), 8);   
     * 
     *  })
     * 
     * Confirmation Password input:
     * 
     *  $('#confirm_field').on('keyup', function () {
     * 
     *   checkCharacters($('#password_field').val(),$('#confirm_field').val(), 8);
     *
     * 
     *   })
     * 
     * 
     * Thanks for using :)
     * 
     * 
     * ******************************************************************************
     *
     * @param {*} input Value of input field. 
     * @param {*} inputconfirm  Value of confirmation input field.
     * @param {*} size  Text size defined.
     * 
     */

     function checkCharacters(input, inputconfirm, size) {

        let uppercase = /[A-Z]/gm.test(input) ? true : false;
        let lowercase = /[a-z]/gm.test(input) ? true : false;
        let numbers = /[0-9]/gm.test(input) ? true : false;
        let specialChars = /[!@#$%*()_+^&{}}:;?.]/gm.test(input) ? true : false;
        let textlength = input.length >= size ? true : false;
        
        let confirm = match(input, inputconfirm);

        let aprove = check(uppercase, lowercase, numbers, specialChars, textlength, confirm);

        if (aprove != true) {
            console.log('Your password was not approved!');
        } else {
            console.log('Your password was approved!');
        }
    }

    /**
     * 
     * @param {*} a check if it is a uppercase character.
     * @param {*} b check if it is a lowercase character.
     * @param {*} c check if it is a number character.
     * @param {*} d check it is a special character.
     * @param {*} e check character length.
     * @returns     returns a bol true or false
     */


    function check(a, b, c, d, e, f) {

        let aprove = false;

        if (a == true && b == true && c == true && d == true && e == true && f == true) {
            aprove = true;
        }

        return aprove;
    }
    /**
     * 
     * @param {*} a Value of input field.
     * @param {*} b Value of confirmation input field.
     * @returns Bolean True of False 
     */

    function match(a, b) {

        let confirmation = false;

        if (a === b) {

            confirmation = true;

            console.log('Password confirmation Match');
        } else {
            console.log('Password confirmation no Match');

        }

        return confirmation;
    }

