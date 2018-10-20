if (localStorage.getItem('language')) {
    var language = localStorage.getItem('language');
    changeLanguage(language);
} else {
    changeLanguage('en');
}


function attr() {
    lang = document.getElementsByClassName("sell__location__flag")[0].getAttribute("data-value");
    if (lang === "pol") {
        changeLanguage('en');
    } else {
        changeLanguage('pol');
    }
}

function changeLanguage(language) {
    document.getElementsByClassName("sell__location__flag")[0].setAttribute("data-value", language);
    document.getElementsByClassName("sell__location__flag")[0].setAttribute("src", "assets/images/icons/" + language + ".png")
    localStorage.setItem('language', language);
}
