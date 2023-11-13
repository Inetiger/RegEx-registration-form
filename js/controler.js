"use strict";

function checkValidation(input) {

    const errorMesseges = model.input.errorMesseges;

    const inputValue = input.value;
    const inputName = input.name;

    const capitalRegex = /^[A-Z]/;
    const numberRegex = /[0-9]/;
    const spaceRegex = /[\s]/;

    if (inputName === 'fname') {

        const firstNameRegex = /^[A-Z][a-z]+$/;

        if (!capitalRegex.test(inputValue)) {
            errorMesseges.firstName = 'Must include a capital letter';
            //Must Inclue a capital letter
        } else if (numberRegex.test(inputValue)) {
            errorMesseges.firstName = 'Must not inclue numbers';
            //Must not inclue numbers
        } else if (spaceRegex.test(inputValue)) {
            errorMesseges.firstName = 'Must not Include spaces';
            //if true it includes spaces
        } else {
            firstNameRegex.test(inputValue) ? errorMesseges.firstName = '' : errorMesseges.firstName = 'Not a valid name';
        }

    } else if (inputName === 'lname') {

        const lastNameRegex = /^[A-Z][a-z]+$/;

        if (!capitalRegex.test(inputValue)) {
            errorMesseges.lastName = 'Must include a capital letter';
            //Must Inclue a capital letter
        } else if (numberRegex.test(inputValue)) {
            errorMesseges.lastName = 'Must not inclue numbers';
            //Must not inclue numbers
        } else if (spaceRegex.test(inputValue)) {
            errorMesseges.lastName = 'Must not Include spaces';
            //if true it includes spaces
        } else {
            lastNameRegex.test(inputValue) ? errorMesseges.lastName = '' : errorMesseges.lastName = 'Not a valid name';
        }

    } else if (inputName === 'email') {

        const mailRegex = /^[a-zA-Z0-9]+[._-]?[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;

        if (spaceRegex.test(inputValue)) {
            errorMesseges.email = 'Must not Include spaces'
            //if true it includes spaces
        } else {
            mailRegex.test(inputValue) ? errorMesseges.email = '' : errorMesseges.email = 'Mail not found';
            //Mail not found
        }

    } else if (inputName === 'pasw') {

        const passwordRegex = /^[A-Z](?=.*\d)[a-zA-Z0-9]{7,}/;

        if (!capitalRegex.test(inputValue)) {
            errorMesseges.password = 'Must include a capital letter';
            model.input.passwordSafety = 'Weak';
            //Must include a capital letter
        } else if (!numberRegex.test(inputValue)) {
            errorMesseges.password = 'Must include atleast 1 number';
            model.input.passwordSafety = 'Good';
            //Must include atleast 1 number
        } else if (spaceRegex.test(inputValue)) {
            errorMesseges.password = 'Must not include spaces'
            model.input.passwordSafety = 'Good';
            //If true it includes spaces
        } else {
            passwordRegex.test(inputValue) ? errorMesseges.password = '' : errorMesseges.password = 'Must include atleast 8 characters';
            passwordRegex.test(inputValue) ? model.input.passwordSafety = 'Great' : model.input.passwordSafety = 'Good';
            //Must be atleast 8 characters
        }

    } else {

        if (model.input.logInDetails.password === inputValue) {
            errorMesseges.confirmPassword = '';
        } else {
            errorMesseges.confirmPassword = 'Does not match';
        }

        if (errorMesseges.firstName === '' && errorMesseges.lastName === '' && errorMesseges.email === '' && errorMesseges.password === '' && errorMesseges.confirmPassword === '') {
            model.input.submitButtonActivation = '';
        } else {
            model.input.submitButtonActivation = 'disabled';
        }

    }

    if (model.input.passwordSafety === 'Weak') {
        model.data.strengthClass = 'red';
    } else if (model.input.passwordSafety === 'Good') {
        model.data.strengthClass = 'lightGreen';
    } else {
        model.data.strengthClass = 'green';
    }

    updateView();
}