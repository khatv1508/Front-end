(function ($) {
    $(function (){ 
        $(".star-rating").starRating({
            totalStars: 5,
            initialRating: 4,
            strokeColor: '#894A00',
            strokeWidth: 10,
            starSize: 25,
            emptyColor: 'lightgray',
            hoverColor: 'orange',
            activeColor: 'gold',
            ratedColors: 'gold',
            starShape: 'straight'
        });
    });
})(jQuery);
