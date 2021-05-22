$(document).ready(function () {
    https://github.com/bigbite/macy.js
    var macy = Macy({
        container: '#macy-container',
        trueOrder: true,
        waitForImages: false,
        margin: 16,
        columns: 3,
        breakAt: {
            991: 1,
        }
    });

    http://www.jacklmoore.com/autosize/
    $('.textarea').each(function () {
        autosize(this);
    }).on('autosize:resized', function () {
        macy.recalculate(true);
    });
})
