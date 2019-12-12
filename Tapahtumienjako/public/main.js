$(document).ready(function() {

    // Rekisteröidy linkki piilottaa kirjautumisformin ja näyttää rekisteröitymisformin
    $("#signup").click(function() {
        $("#first").slideUp("slow", function() {
            $("#second").slideDown("slow");
        });
    });

    // Kirjaudu linkki piilottaa rekisteröitymisformin ja näyttää kirjautumisformin
    $("#signin").click(function() {
        $("#second").slideUp("slow", function() {
            $("#first").slideDown("slow");
        });
    });

});
