document.addEventListener('DOMContentLoaded', function() {
    // Your app's App Store URLs
    const iPhoneAppStoreUrl = 'https://apps.apple.com/us/app/tailscale-for-iphone/id1470499037';  // Replace with your iPhone app's App Store URL
    const iPadAppStoreUrl = 'https://apps.apple.com/us/app/tailscale-for-ipad/id1470499037';  // Replace with your iPad app's App Store URL
    const macAppStoreUrl = 'https://apps.apple.com/us/app/tailscale-for-mac/id1475387142';  // Replace with your Mac app's App Store URL
    
    // Get the install link element
    const installLink = document.getElementById('Tailscale-link');
    
    // Determine the device type based on the User Agent string and navigator.platform
    let appStoreUrl;
    if (/iPad/.test(navigator.userAgent)) {
        // User is on an iPad
        appStoreUrl = iPadAppStoreUrl;
    } else if (/iPhone/.test(navigator.userAgent)) {
        // User is on an iPhone
        appStoreUrl = iPhoneAppStoreUrl;
    } else if (/Mac/.test(navigator.platform)) {
        // User is on a Mac
        appStoreUrl = macAppStoreUrl;
    } else {
        // User is on neither an iPhone, an iPad, nor a Mac; default to the iPhone version
        appStoreUrl = iPhoneAppStoreUrl;
    }
    
    // Add a click event handler to the link
    installLink.addEventListener('click', function() {
        window.open(appStoreUrl);
    });
});

