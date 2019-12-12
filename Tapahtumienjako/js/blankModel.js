'use strict';
const getFrontPage = function () {

        return "<!DOCTYPE html>\n" +
            "<html lang=\"fi\">\n" +
            "<head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <title>Jaa Tapahtuma</title>\n" +
            "    <link href=\"css/main.css\" rel=\"stylesheet\">\n" +
            "   <script src=\"public/jquerymin.js\"></script>" +
            "    <link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\n" +
            "</head>\n" +
            "\n" +
            "<body>\n" +
            "<img id=\"logo\" src=\"img/logo.png\">\n" +
            "<div id=\"main\">\n" +
            "    <!-- Kirjautumisformi -->\n" +
            "    <div id=\"first\">\n" +
            "        <form action=\"\" method=\"post\">\n" +
            "            <input type=\"text\" name=\"username\" placeholder=\"Käyttäjänimi\">\n" +
            "            <input type=\"password\" name=\"password\" placeholder=\"Salasana\">\n" +
            "            <button type=\"submit\">Kirjaudu</button>\n" +
            "            <p>Eikö sinulla ole käyttäjätunnusta? <a href=\"register\" id=\"signup\">Rekisteröidy</a></p>\n" +
            "        </form>\n" +
            "    </div>\n" +
            "    <!-- Rekisteröitymisformi -->\n" +
            "    <div id=\"second\">\n" +
            "        <form action=\"\" method=\"post\">\n" +
            "            <input type=\"text\" name=\"username\" pattern=\".{3,}\" placeholder=\"Käyttäjänimi\" required>\n" +
            "            <input type=\"text\" name=\"email\" placeholder=\"Sähköposti\" required>\n" +
            "            <input type=\"password\" name=\"password\" pattern=\"(?=.*[A-Z]).{8,}\" placeholder=\"Salasana\" required>\n" +
            "            <button type=\"submit\">Rekisteröidy</button>\n" +
            "            <p>Onko sinulla jo käyttäjätunnus? <a href=\".\" id=\"signin\">Kirjaudu</a></p>\n" +
            "        </form>\n" +
            "    </div>\n" +
            "</div>\n" +
            "<script src=\"public/jquerymin.js\"></script>\n" +
            "<script src=\"public/main.js\"></script>\n" +
            "</body>\n" +
            "</html>"
            ;

};
module.exports = {
   getFrontPage
};