chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.syn.set({color:'#3aa757'},function() {
		console.log("The color is green.");
	});
});
