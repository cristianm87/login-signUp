function setFormMessage(formElement, type, text) {
    const messageElement = formElement.find('.form-message')
    messageElement.html(text)
    messageElement.removeClass('form-message-success', 'form-message-error')
    messageElement.addClass(`form-message-${type}`)
}

function setInputError(inputElement, message) {
    inputElement.addClass('form-input-error');
    inputElement.parent().find('.form-input-error-message').html(message)
}

function clearInputError(inputElement) {
    inputElement.removeClass('form-input-error');
    inputElement.parent().find('.form-input-error-message').html('')
}

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = $('#login');
    const createAccountForm = $('#createAccount');

    $('#linkCreateAccount').click( e => {
        loginForm.hide();
        if ($('#createAccount').css('display') == 'none') {
            $('#createAccount').show()
        }
    })

    $('#linkLogin').click( e => {
        createAccountForm.hide()
        if ($('#login').css("display") == 'none') {
            $('#login').show()
        }
    })

    $('#login').submit( e => {
        e.preventDefault()
        // Add AJax...
        setFormMessage(loginForm, 'error', 'Invalida username/password combination')
    })

    // Input verification

    $('.form-input').blur( e => {
        if (e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError($(e.target), 'Username must be at least 10 characters in length')
        }
        if (e.target.id === 'signupPassword' && e.target.value.length > 0 && e.target.value.length < 8) {
            setInputError($(e.target), 'Email must be at least 8 characters in length')
        }
    });

    $('.form-input').on('input', function(e) {
        clearInputError($(e.target))
    })
});