$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var firstname = $("input#firstname").val();
            var lastname = $("input#lastname").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var telephone = $("input#telephone").val();
            var country = $("input#country").val();
            var city = $("input#city").val();
            var innovator= $("input#innovator").is( ":checked")
            var investor = $("input#investor").is( ":checked")
            var startup = $("input#startup").is( ":checked")
            var spouse = $("input#spouse").is( ":checked")
            var skillwork = $("input#skillwork").is( ":checked")
            var temporarywork = $("input#temporarywork").is( ":checked")
            var student = $("input#student").is( ":checked")
            var euss = $("input#euss").is( ":checked")
            var hongkong = $("input#hongkong").is( ":checked")
            var other = $("input#other").is( ":checked")
            var yyyy = $("input#yyyy").val();
            var dd = $("input#dd").val();
            var mm = $("input#mm").val();
            var time = $("input#time").val();
            var ticketname = $("input#ticketname").val();
            var ticketdesc = $("input#ticketdesc").val();







            // var firstName = name; // For Success/Failure Message
            // // Check for white space in name for Success/Fail message
            // if (firstName.indexOf(' ') >= 0) {
            //     firstName = name.split(' ').slice(0, -1).join(' ');
            // }
            $.ajax({
                // url: "http://ec2-3-92-207-36.compute-1.amazonaws.com:8000/contactus/",
                url:'https://admin.nottinghilllaw.co.uk/contactus/',
                type: "POST",
                data: {
                    firstname: firstname,
                    lastname:lastname,
                    email: email,
                    telephone:telephone,
                    message: message,
                    country:country,
                    city:city,
                    innovator:innovator,
                    investor:investor,
                    startup:startup,
                    spouse:spouse,
                    skillwork:skillwork,
                    temporarywork:temporarywork,
                    student:student,
                    euss:euss,
                    hongkong:hongkong,
                    other:other,
                    yyyy:yyyy,
                    dd:dd,
                    mm:mm,
                    time:time,
                    ticketdesc:ticketdesc,
                    ticketname:ticketname
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
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
$('#name').focus(function() {
    $('#success').html('');
});
