$(document).on('scroll', function() {
    var pixelsFromTop = $(document).scrollTop()
    console.log(pixelsFromTop)

    $('.progress').text(pixelsFromTop + ' pixels from top')

    if (pixelsFromTop > 50) {
        $('header').addClass('hidden')
    } else {
        $('header').removeClass('hidden')
    }

})