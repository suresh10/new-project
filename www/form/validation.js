/* Slitters Enquiry Form 

$(document).ready(function(){*/
function initialize() 
{ 
     $('#refreshimg').click(); 
}

$(function(){
	$("body").on("click", "#refreshimg", function(){
		return false;
	});

			$("#contact_frm").validate({
			rules: {
				email: {
					required: false,
					email: true
				},
				contact: {
					required: false,
					minlength: 3,
					maxlength: 20,
					number: true
				},
				agree: "required"
				},

			messages: {
				name: "Please enter your name",
				age: "Please select your age range",
				gender: "Please select your gender",
				email: "Please enter a valid email address",
				contact: "Please enter your contact number",
				comments: "Please enter comments",
			}
		});
		
});

