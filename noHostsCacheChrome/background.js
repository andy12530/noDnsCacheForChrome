var tabs = chrome.tabs;

chrome.browserAction.onClicked.addListener(function(){
    tabs.create({
        active : false,
        url: 'chrome://net-internals/#dns'
    }, function(tab) {
        setTimeout(function() {
            if (tab && tab.id) {
                tabs.remove(tab.id);
            }
        }, 3000);
    });

    tabs.getSelected(null, function(tab){
        tabs.reload(tab.id)
    });
});