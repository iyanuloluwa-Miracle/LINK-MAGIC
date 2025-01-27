export async function handleShortUrl() {
  // Get the current path
  const path = window.location.pathname;

  // Exclude home page and component routes
  if (path === "/" || path.startsWith("/components")) return;

  // Get the short code from the URL
  const shortCode = path.slice(1);

  try {
    // Add error handling for empty shortCode
    if (!shortCode) {
      console.error("Invalid short code");
      window.location.href = "/";
      return;
    }

    const response = await fetch(
      `https://link-magic-backend.onrender.com/url/${shortCode}`
    );

    const data = await response.json();

    if (response.ok && data.success && data.longUrl) {
      // Properly handle the URL redirection
      const targetUrl = data.longUrl.startsWith('http://') || data.longUrl.startsWith('https://')
        ? data.longUrl
        : `https://${data.longUrl}`;
      
      // Use window.location.href for better browser compatibility
      window.location.href = targetUrl;
    } else {
      console.error("Invalid short code, redirecting to home...");
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Error resolving short URL:", error);
    window.location.href = "/";
  }
}