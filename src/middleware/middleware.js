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
      window.location.replace("/");
      return;
    }

    const response = await fetch(
      `https://link-magic-backend.onrender.com/url/${shortCode}`
    );

    const data = await response.json();

    if (response.ok && data.success && data.longUrl) {
      // Use window.location.replace instead of window.location.href
      if (data.longUrl.startsWith('http://') || data.longUrl.startsWith('https://')) {
        window.location.replace(data.longUrl);
      } else {
        // Add protocol if missing
        window.location.replace(`https://${data.longUrl}`);
      }
    } else {
      console.error("Invalid short code, redirecting to home...");
      window.location.replace("/");
    }
  } catch (error) {
    console.error("Error resolving short URL:", error);
    window.location.replace("/");
  }
}