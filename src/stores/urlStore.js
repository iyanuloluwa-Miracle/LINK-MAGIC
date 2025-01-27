import { defineStore } from "pinia";

export const useUrlStore = defineStore("url", {
  state: () => ({
    originalUrl: "",
    shortenedUrl: "",
    fetchedOriginalUrl: "",
    isLoading: false,
    error: "",
    copied: false,
    isRedirecting: false,
  }),

  actions: {
    async shortenUrl(url) {
      this.isLoading = true;
      this.error = "";
      this.originalUrl = url;

      try {
        // Validate URL before sending
        let validUrl = url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          validUrl = `https://${url}`;
        }

        const response = await fetch(
          "https://link-magic-backend.onrender.com/url/shorten",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ longUrl: validUrl }),
          }
        );

        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.message || "Shortening failed");
        }

        // Construct frontend shortened URL
        const shortCode = data.shortUrl.split("/").pop();
        this.shortenedUrl = `https://link-magic.vercel.app/${shortCode}`;
      } catch (err) {
        this.error = err.message || "Failed to shorten URL";
        this.shortenedUrl = "";
      } finally {
        this.isLoading = false;
      }
    }
  }
});
