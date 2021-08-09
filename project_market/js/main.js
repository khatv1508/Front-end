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

        // Carousel Left
        // new bootstrap.Carousel(document.querySelector('#myCarousel'), {
        //     interval: 2000,
        //     wrap: true,
        // })

        // // Carousel right
        // new bootstrap.Carousel(document.querySelector('#myCarousel1'), {
        //     interval: 2000,
        //     wrap: true,
        // })

        // new bootstrap.Carousel(document.querySelector('#myCarousel2'), {
        //     interval: 2000,
        //     wrap: true,
        // })

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            navigation: {
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              },
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
