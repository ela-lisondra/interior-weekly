$(document).on('scroll', function() {
    var pixelsFromTop = $(document).scrollTop()
    console.log(pixelsFromTop)

    $('div.progress div.bar').text(pixelsFromTop + ' pixels from top')

    if (pixelsFromTop > 50) {
        $('header').addClass('hidden')
    } else {
        $('header').removeClass('hidden')
    }


    if (pixelsFromTop < 600) {
        $('body').css('background-color', '#fff')
    } else if (pixelsFromTop < 1400) {
        $('body').css('background-color', '#a29c97')
    } else if (pixelsFromTop < 2200) {
        $('body').css('background-color', '#d9dfe4')
    } else if (pixelsFromTop < 3000) {
        $('body').css('background-color', '#fff0f0')
    } else {
        $('body').css('background-color', '#cdccc7')
    }


    var documentHeight = $(document).height()
    var windowHeight = $(window).height()

    var difference = documentHeight - windowHeight

    var percentage = 100 * pixelsFromTop / difference

    $('.bar').css('width', percentage + '%')

})
