"use strict";

function updateView() {

    const logInDetails = model.input.logInDetails;
    const errorMesseges = model.input.errorMesseges;
    
    let html = /*html*/ `
    <div class="container">
        <div class="content">
            <form action="test.html">
                <fieldset>
                    <p>Registration</p>
                    <input type="text" name="fname" placeholder="Enter your first name" value="${logInDetails.firstName}" onchange="checkValidation(this, model.input.logInDetails.firstName = this.value)">
                    <div>${errorMesseges.firstName}</div>
                    <input type="text" name="lname" placeholder="Enter your last name" value="${logInDetails.lastName}" onchange="checkValidation(this, model.input.logInDetails.lastName = this.value)">
                    <div>${errorMesseges.lastName}</div>
                    <input type="text" name="email" placeholder="Enter your email" value="${logInDetails.email}" onchange="checkValidation(this, model.input.logInDetails.email = this.value)">
                    <div>${errorMesseges.email}</div>
                    <input type="password" name="pasw" placeholder="Create a password" value="${logInDetails.password}" onchange="checkValidation(this, model.input.logInDetails.password = this.value)">
                    <div>${errorMesseges.password}<div class="${model.data.strengthClass}">${model.input.passwordSafety}</div></div>
                    <input type="password" name="conf" placeholder="Confirm a password" value="${logInDetails.confirmPassword}" onchange="checkValidation(this, model.input.logInDetails.confirmPassword = this.value)">
                    <div>${errorMesseges.confirmPassword}</div>
                    <input type="submit" ${model.input.submitButtonActivation} value="Register Now">
                </fieldset>            
            </form>            
        </div>
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}