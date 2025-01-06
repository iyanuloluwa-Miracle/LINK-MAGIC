
export async function handleShortUrl() {
  // Get the path from the current URL
  const path = window.location.pathname;

  // Skip middleware for root path or known component paths
  if (path === "/" || path.startsWith("/components")) {
    return;
  }

  const shortCode = path.slice(1); // Remove leading slash

  try {
    const response = await fetch(
      `https://link-magic-backend.onrender.com/url/${shortCode}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    if (data.success && data.longUrl) {
      // Redirect to the original URL
      window.location.href = data.longUrl;
    } else {
      // Redirect to your home page or show an error
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Error fetching URL:", error);
    window.location.href = "/";
  }
}
