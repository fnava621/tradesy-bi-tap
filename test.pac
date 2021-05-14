function FindProxyForURL(url, host) {

    const allowedUrlPatterns = ["dev.tradesy.com", "dev-images-endpoint.tradesy.com", "dev-tradesy.recycledmediainc.com"];

    let direct = false;
    for (let i in allowedUrlPatterns) {
        if (url.includes(allowedUrlPatterns[i])) {
            return "DIRECT"; // not-blocked
        }
    }
    
    return "PROXY 127.0.0.1:9876"; // blocked (bad proxy)
}
