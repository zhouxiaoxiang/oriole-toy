var c = chrome.runtime,
  n = "eric_button";

$("#eric_button").click(function () {
  c.sendMessage({
    evt: n
  });
});
