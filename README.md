# pass-validator
simple password validation

<p>To use <b>Pass Validator</b> you must call the function <b>checkCharacter()</b>
    in a event, to do this you have to make two jQuery functions, one in password input and
    another in confirmation input, how to in this example:
</p>

<ol>
    <li>Call the function</li>
    <li>Pass the password input value, confirmation input avlue and your preference length</li>

</ol>
<p>Password input:</p>

```

$('#password_field').on('keyup', function () {

checkCharacters($('#password_field').val(),$('#confirm_field').val(), 8);

})

```

<p>Confirmation Password input:</p>

```

$('#confirm_field').on('keyup', function () {

checkCharacters($('#password_field').val(),$('#confirm_field').val(), 8);

})

```

<b>Thanks for using :)</b>
