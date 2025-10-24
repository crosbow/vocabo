(function(){document.addEventListener("mouseup",()=>{const e=window.getSelection().toString().trim();e&&chrome.runtime.sendMessage({type:"TEXT_SELECTED",text:e})});
})()
