let t="";chrome.runtime.onMessage.addListener((e,T,E)=>{if(e.type==="TEXT_SELECTED"&&(t=e.text),e.type==="GET_LAST_SELECTED_TEXT")return E({text:t}),!0});
