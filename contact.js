document.getElementById('send-button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var mailtoLink = 'mailto:fortwawa@gmail.com?subject=' + encodeURIComponent('Nouveau message de ' + name) +
                     '&body=' + encodeURIComponent('Email: ' + email + '\n\nMessage: ' + message);

    window.location.href = mailtoLink;
});