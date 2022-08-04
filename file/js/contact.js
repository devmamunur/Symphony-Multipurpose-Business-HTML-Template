
(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $(document).on('submit','#c-form',function(e){
            e.preventDefault();
            var name = $('#fname').val();
            var name = $('#lname').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var message = $('#message').val();

            if (!name) {
                 $('#fname').removeClass('error');
                 $('#fname').addClass('error').attr('placeholder','Please Enter Name');
             }else{
                 $('#fname').removeClass('error');
             }
            if (!name) {
                 $('#lname').removeClass('error');
                 $('#lname').addClass('error').attr('placeholder','Please Enter Name');
             }else{
                 $('#lname').removeClass('error');
             }
            if (!email) {
                 $('#email').removeClass('error');
                 $('#email').addClass('error').attr('placeholder','Please Enter Email')
             }else{
                 $('#email').removeClass('error');
             }
            if (!phone) {
                 $('#phone').removeClass('error');
                 $('#phone').addClass('error').attr('placeholder','Please Enter PHone')
             }else{
                 $('#phone').removeClass('error');
             }
            if (!message) {
                 $('#message').removeClass('error');
                 $('#message').addClass('error').attr('placeholder','Please Enter Your Message')
             }else{
                 $('#message').removeClass('error');
             }
             
            
            if ( name && email && message ) {
             	$.ajax({
	                 type: "POST",
	                 url:'contact.php',
	                 data:{
                         'fname': name,
                         'lname': name,
                         'email': email,
                         'message': message,
                         'phone': phone,
	                 },
	                 success:function(data){
                         $('#contact_form_submit').children('.email-success').remove();
                         $('#contact_form_submit').prepend('<div class="alert alert-success email-success">'+data+'</div>');
                         $('#fname').val('');
                         $('#lname').val('');
                         $('#email').val('');
                         $('#message').val('');
                         $('#phone').val('');
                         $('.email-success').fadeOut(3000);
                        
	                 },
	                 error:function(res){

	                 }
	             });
             }else{
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<div class="alert alert-danger email-success">somenthing is wrong</div>');
                $('.email-success').fadeOut(3000);
                
             }

            
            
        });
    })

}(jQuery));	
