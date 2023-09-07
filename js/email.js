
/* Sending Email from Contact Section */
(function () {
    emailjs.init("YXYAUuDxQ_eEt87w7");
})();

function sendmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

        var contactParams = {
            to_name: name,
            to_email: email,
            message: message
        };

        emailjs.send('service_28tal6g', 'template_05n0gap', contactParams).then(function (res) {})

}

