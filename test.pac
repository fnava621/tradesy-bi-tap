function FindProxyForURL(url, host) {
    if (host.toLowerCase() === "https://dev.tradesy.com/"){
      return "DIRECT"; // whitelisted
    }
  
  return "PROXY 127.0.0.1:9876"; // blocked (bad proxy)
}
