const SITES_TO_BLOCK = ["youtube.com", "instagram.com", "mail.google.com", "facebook.com"];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request.action); // This will appear in your Console tab

  if (request.action === "enableFocus") {
    const rules = SITES_TO_BLOCK.map((site, index) => ({
      id: index + 1,
      priority: 1,
      action: { 
        type: "redirect", 
        redirect: { extensionPath: "/Blocked.html" } 
      },
      condition: { urlFilter: site, resourceTypes: ["main_frame"] }
    }));

    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: SITES_TO_BLOCK.map((_, i) => i + 1), // Remove existing rules
      addRules: rules // Add new rules
    }, () => {
      console.log("Focus Rules Applied!");
      sendResponse({ status: "Focus Mode Enabled" }); // Respond to the sender
    });
    return true; // Indicate that sendResponse will be called asynchronously

  } else if (request.action === "disableFocus") {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: SITES_TO_BLOCK.map((_, i) => i + 1) // Remove all rules
    }, () => {
      console.log("Focus Rules Removed.");
      sendResponse({ status: "Focus Mode Disabled" }); // Respond to the sender
    });
    return true; // Indicate that sendResponse will be called asynchronously
  }
});
