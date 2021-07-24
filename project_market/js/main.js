(function ($) {
    $(function (){ 
        $(".star-rating").starRating({
            totalStars: 5,
            initialRating: 4,
            strokeColor: '#894A00',
            strokeWidth: 10,
            starSize: 20,
            emptyColor: 'lightgray',
            hoverColor: 'orange',
            activeColor: 'gold',
            ratedColors: ['#FDCC0D', '#FDCC0D', '#FDCC0D', '#FDCC0D', '#FDCC0D'],
            starShape: 'straight'
        });
    });
})(jQuery);

function openNav() {
    $("#mySidenav").children().show();
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    $("#mySidenav").children().hide("slow");
    setTimeout(
        function(){ 
            document.getElementById("mySidenav").style.width = "0"; 
        },
        100 );
}
