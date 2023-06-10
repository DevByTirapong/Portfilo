$('.btn-send').click(function () {
    var recipient = "test";
    var at = String.fromCharCode(64);
    var dotcom = "tirapong_ice@hotmail.com";
    var mail = "mailto:";
    // window.open(mail + recipient + at + dotcom);

    window.open('mailto:' + dotcom + '?subject=' + $('#subject').val() + '&body=' + $('#message').val());

})