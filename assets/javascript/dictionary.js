$(function () {
   var dict= {
       "Request news": {
           pol: "Subskrybować"
       },
       Cooperation: {
           pol: "Współpraca"
       },
       "My shipping location:": {
           pol: "Moje miejsce dostawy:"
       },

       Outdoor: {
           pol: "Na Zewnątrz"
       },

       Indoor: {
           pol: "Wewnątrz"
       },

       "For People": {
           pol: "Twój Wygląd"
       },

       "Your Hobby": {
           pol: "Twoje Hobby"
       },
       Gift: {
           pol: "Prezent"
       },
       Books: {
           pol: "Książki"
       },
       Creative: {
           pol: "Creative"
       },
       "Hi-tech" : {
           pol: "Hi-tech"
    },
       "Wish List":{
           pol: "Lista Życzeń"
       },
       "Order Status": {
           pol: "Status Zamówienia"
       },
       "Cart (0) items": {
            pol: "Koszyk (0 produktów)"
       },
        EXTENDED: {
            pol: "PRZEDŁUŻONY"
        },
       "TWO DAY": {
            pol: "TYLKO NA"
       },
       ONLY: {
            pol: "DWA DNI"
       },
       "25% OFF":{
            pol: "RABATY"
       },
       "25%": {
            pol: "25%"
       },
       "New Items": {
         pol: "Nowości"
       },
       "Digital <br> Catalog": {
            pol: "Katalog"
       },
       "Read Our <br> Blog": {
            pol: "Czytaj <br> Blog "
       },
       "SIGN UP": {
            pol: "Zaloguj się"
       },
       "ABOUT HANKITE": {
           pol: "O NAS"
       },
       "HELP & INFORMATION": {
           pol: "POMÓC & INFORMACJA"
       },
       "Condition of Use": {
           pol: "Warunki Korzystania"
       },
       "Popular Searchers": {
           pol: "Popularne Wyszukiwania"
       },
       "Privacy & Security": {
           pol: "Prywatność & Bezpieczeństwo "
       },
       "Light": {
            pol: "Światło"
       },
       "Mailbox": {
            pol: "Skrzynka <br> pocztowa"
       },
       "For Pets": {
            pol: "Dla <br> zwierząt"
       }
   };

   var trans= $('body').translate({lang: "en", t: dict});

   $('.lanSelector').click(function(event) {
      var lang=$(this).attr('data-value');
      trans.lang(lang);
      console.log(lang);
      event.preventDefault();
   });


});
