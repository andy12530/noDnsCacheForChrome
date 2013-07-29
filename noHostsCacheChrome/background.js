var tabs = chrome.tabs;

chrome.browserAction.onClicked.addListener(function(){
    tabs.create({
        active : false,
        url: 'chrome://net-internals/#dns'
    }, function(tab) {
        console.log("create")
        setTimeout(function() {
            if (tab && tab.id) {
                tabs.remove(tab.id);
            }
        }, 300);
    });

    tabs.getSelected(null, function(tab){
        setTimeout(function() {
            tabs.reload(tab.id);
        }, 500)
    });
});