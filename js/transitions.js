$(function() {
    var anchors_arr = ['main', 'collider', 'sell', 'price', 'received', 'report', 'criteria'];

    new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: anchors_arr,
        menu: '#page-switcher',
        scrollingSpeed: 1000
    });

    //make page-switcher blocks yellow when url changes
    if(window.location.hash == "") {
        $('#page-switcher').children().first().addClass('page-switcher-active');
        window.location.hash = anchors_arr[0];
    }

    $(window).on('hashchange', function() {
        $('#page-switcher').children().removeClass('page-switcher-active');
        $('#page-switcher a[href="' + window.location.hash + '"]').parent().addClass('page-switcher-active');
    });

    $('#arrow').on('click', function() {
        var hash = window.location.hash;
        for(let i = 0; i < anchors_arr.length; i++) {
            if (anchors_arr[i] == hash.substr(1, hash.length)) {
                window.location.hash = "#" + anchors_arr[i+1];
                if(i == anchors_arr.length-1) {
                    window.location.hash = "#" + anchors_arr[0];
                }
            }
        }
    });
});