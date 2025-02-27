  browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
      id: "search-gmgn",
      title: "Search on GMGN.ai",
      contexts: ["link"]
    });
  });
  
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "search-gmgn") {
      const link = info.linkUrl;
      const solscanPattern = /https:\/\/solscan\.io\/account\/([^\/]+)/;
      const match = link.match(solscanPattern);
      
      if (match) {
        const walletAddress = match[1];
        
        browser.tabs.create({
          url: `https://gmgn.ai/sol/address/${walletAddress}`,
          active: false
        });
      }
    }
  });