// Contact Form Scripts

$(function() {

    $("#contactFormm input,#contactFormm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#namee").val();
            var email = $("input#emaill").val();
            var phone = $("input#phonee").val();
            var message = $("textarea#messagee").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#successs').html("<div class='alert alert-success'>");
                    $('#successs > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#successs > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#successs > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactFormm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#successs').html("<div class='alert alert-danger'>");
                    $('#successs > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#successs > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#successs > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactFormm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#namee').focus(function() {
    $('#successs').html('');
});
