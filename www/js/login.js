var personManager = {

    savePerson: function () {
        $.ajax({
            type: "POST",
            url: 'http://10.0.2.2:5556/personnes/',
            dataType: "json",
            data: personManager.collectFieldValues(),
            success: function (result) {
                if (result.errors)
                    alert(result.errors[0].message);
                else {
                    window.location.replace('login.html#user');
                }
            }
        });
    },

    login: function () {
        var email = $("#email2").val().trim();
        var mdp = $("#mdp2").val().trim();
        $.ajax({
            type: "GET",
            url: 'http://10.0.2.2:5556/personnes',
            dataType: "json",
            async: false,
            data: {
                email: email,
                mdp: mdp
            },
            success: function (data) {
                let msg = "";
                try {
                    if (data[0].email !== undefined && data[0].mdp !== undefined) {
                        window.location.replace('index.html');
                    }
                } catch (error) {
                    msg = "Invalid username and password!";
                }
                $("#message").html(msg);
            }
        });
    },

    collectFieldValues: function () {
        return {
            nom: $('#nom').val(),
            prenom: $('#prenom').val(),
            email: $("#email").val(),
            mdp: $("#mdp").val(),
        };
    },


};

$(document).ready(function () {

    var $nom = $('#nom'),
        $prenom = $('#prenom'),
        $email = $('#email'),
        $mdp = $('#mdp'),
        $confirmation = $('#confirmation'),
        $saveButton = $('#saveButton'),
        $refreshButton = $('#refreshButton'),
        $erreur = $('#erreur'),
        $champ = $('.form-control'),
        $form = $('#myformRegister')

    $erreur.hide();

    $form.on("blur", "input", () => {
        if ($prenom.valid() & $nom.valid() & $email.valid() & $mdp.valid() & $confirmation.valid()) {
            $saveButton.removeAttr("disabled");
        } else {
            $saveButton.attr("disabled", "disabled");
        }
    });

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

    $confirmation.keyup(function () {
        if ($(this).val() != $mdp.val()) {
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



    $('#loginButton').click(function (e) {
        e.preventDefault();
        personManager.login();
    });

    $('#saveButton').click(function (e) {
        e.preventDefault();
        personManager.savePerson();
    });


});

