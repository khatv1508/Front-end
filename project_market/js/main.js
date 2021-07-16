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
