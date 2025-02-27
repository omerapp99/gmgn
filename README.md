# GMGN.ai Search Firefox Extension

A Firefox extension that adds a context menu option to search cryptocurrency wallet addresses on gmgn.ai. This addon works with wallet addresses found on solscan.io and bullx.io.

## Features

- Right-click on links containing wallet addresses to search them on gmgn.ai
- Works with Solana wallet addresses from solscan.io and bullx.io
- Opens the search results in a new tab
- Lightweight and easy to use

## Requirements

- Firefox browser (version 48.0 or later)

## Installation

### Method 1: Temporary Installation (for Development/Testing)

1. **Download the extension files**
   - git clone https://github.com/omerapp99/gmgn into your desktop.

2. **Load the extension in Firefox**
   - Open Firefox
   - Type `about:debugging` in the address bar and press Enter
   - Click on "This Firefox" in the left sidebar
   - Click on "Load Temporary Add-on..."
   - Navigate to your extension folder and select the `manifest.json` file
   - The extension should now be loaded and active

### Method 2: Install from ZIP (for Personal Use)

1. **Create a ZIP file**
   - Create a ZIP file containing all the extension files (manifest.json, background.js, and icons)
   
2. **Install from Firefox**
   - Open Firefox
   - Type `about:addons` in the address bar and press Enter
   - Click the gear icon and select "Install Add-on From File..."
   - Select your ZIP file

## How to Use

1. **Finding wallet addresses**
   - Visit solscan.io or bullx.io
   - Locate a link containing a wallet address (like https://solscan.io/account/6TK6VAWvwfTswixnnrKViwo2mNdQqfVNoUYj2nhrH9Xv)
   - In bullx the links will be on the animal symbol next to the wallet name.

2. **Using the extension**
   - Right-click on the link containing the wallet address
   - Select "Search on GMGN.ai" from the context menu
   - A new tab will open, displaying the wallet information on gmgn.ai

## File Structure

```
extension-folder/
├── manifest.json        # Extension configuration
├── background.js        # Background script for handling context menu
├── icon48.png           # Small icon (48x48 pixels)
└── icon96.png           # Large icon (96x96 pixels)
```

## Troubleshooting

- **Extension doesn't appear in context menu**: Make sure the extension is properly installed and that you're right-clicking on a valid link.
- **No "Search on GMGN.ai" option appears**: Verify you're right-clicking on a link, not plain text or an image.
- **Extension isn't working on a specific site**: Check if the site's URL structure matches what the extension is designed to handle.

## License

This project is available for personal use.

## Support

For issues, questions, or contributions, please contact the extension developer.