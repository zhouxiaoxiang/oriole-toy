var n = "eric_button",
    c = chrome.runtime.onMessage,
    t = chrome.tabs;

c.addListener(function (request, sender, sendResponse) {
    if (request.evt === n) {
        t.query({
            active: true,
            currentWindow: true
        }, function (ts) {
            if (ts.length) {
                var activeTab = ts[0],
                    tabId = activeTab.id,
                    current = activeTab.index;

                t.query({
                    currentWindow: true
                }, function (ts) {
                    var num = ts.length;
                    t.query({
                        index: (current + 1) % num
                    }, function (ts) {
                        if (ts.length) {
                            var next = ts[0],
                                tabToActivate_Id = next.id;
                            t.update(tabToActivate_Id, {
                                active: true
                            });
                        }
                    });
                });
            }
        });
    }
});