// 当插件图标被点击后，将调用这个方法
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.tabs.create( { url: 'https://code.ftqq.com' } );
});



