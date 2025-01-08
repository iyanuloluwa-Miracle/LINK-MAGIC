export async function handleShortUrl() {
  const path = window.location.pathname;

  if (path === "/" || path.startsWith("/components")) return;

  const shortCode = path.slice(1);

  try {
    const response = await fetch(
      `https://link-magic-backend.onrender.com/url/${shortCode}`
    );

    const data = await response.json();

    if (response.ok && data.success && data.longUrl) {
      window.location.href = data.longUrl;
    } else {
      console.error("Invalid short code, redirecting to home...");
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Error resolving short URL:", error);
    window.location.href = "/";
  }
}
