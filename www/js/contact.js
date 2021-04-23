$(document).ready(function () {

    var $nom = $('#nom'),
        $prenom = $('#prenom'),
        $subject = $('#subject'),
        $loginButton = $('#loginButton'),
        $refreshButton = $('#refreshButton'),
        $erreur = $('#erreur'),
        $champ = $('.form-control');

    $erreur.hide();

    $champ.keyup(function () {
        if ($(this).val().length < 5) {
            $(this).css({
                borderColor: 'red',
                color: 'red'
            });
        }
        else {
            $(this).css({
                borderColor: 'green',
                color: 'green'
            });
        }
    });

    $refreshButton.click(function () {
        $champ.css({
            borderColor: '#ccc',
            color: '#555'
        });
        $erreur.css('display', 'none');
    });

    function verifier(champ) {
        if (champ.val() == "") {
            $erreur.css('display', 'block');
            champ.css({
                borderColor: 'red',
                color: 'red'
            });

        }

    }
    $loginButton.click(function (e) {
        e.preventDefault();
        verifier($nom);
        verifier($prenom);
        verifier($subject);
    });
});