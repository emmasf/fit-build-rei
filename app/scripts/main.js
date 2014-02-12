$('.jcarousel')
    .jcarousel({
        wrap: 'circular',
        list: '> ul'
    })
    .jcarousel({
        vertical: true,
        list: '> ul > li > ul'
    });


$('.jcarousel-vertical-control-prev')
    .jcarouselControl({
        target: '-=1'
    });

$('.jcarousel-vertical-control-next')
    .jcarouselControl({
        target: '+=1'
    });
