jQuery(document).ready(function() {
    Oskari.app.loadAppSetup(ajaxUrl + 'action_route=GetAppSetup', window.controlParams, function() {
        jQuery('#mapdiv').append('Unable to start');
    }, function() {
        Oskari.app.playBundle({ bundlename: 'layerlist' });
        Oskari.app.playBundle({ bundlename: 'language-selector' });
    });
});