function FindProxyForURL(url, host) {
  

  if (url.includes("dev.tradesy.com")) {
      return "DIRECT"; // not-blocked
  }

  return "PROXY 127.0.0.1:9876"; // blocked (bad proxy)
}
