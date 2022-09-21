//function to validate form
function validateForm() {
	//constant that stores form element of name messageForm
	const formClass = document.forms['messageForm'];

	//constant that stores the value of full name
	const fullName = formClass['fullName'].value;

	//constant that stores the value email
	const email = formClass['email'].value;

	//constant that stores the value gender
	const gender = formClass['gender'].value;

	//constant that stores the value of message
	const message = formClass['message'].value;

	//condition to check whether fullName, email , message is empty or not and alert appropriate message accordingly
	if (fullName == '' || email == '' || message == '') {
		alert('Empty fields found, Please fill up the form properly');
	} else {
		alert('Form submitted! Thank you for the feedback');
	}
}
