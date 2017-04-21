function isEthereumOnline() {
    $.ajax('/api/status/isConnected')
    .done(function() {

    })
    .fail(function() {

    })
    .always(function() {
        
    });
}

$(function() {
    setTimeout(isEthereumOnline, 2000);
});