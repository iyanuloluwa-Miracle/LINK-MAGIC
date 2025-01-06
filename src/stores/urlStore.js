import { defineStore } from "pinia";

export const useUrlStore = defineStore("url", {
  state: () => ({
    originalUrl: "",
    shortenedUrl: "",
    fetchedOriginalUrl: "",
    isLoading: false,
    error: "",
    copied: false,
  }),

  actions: {
    // Shorten a URL
    async shortenUrl(url) {
      this.isLoading = true;
      this.error = "";
      this.originalUrl = url;

      try {
        const response = await fetch(
          "https://link-magic-backend.onrender.com/url/shorten",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ longUrl: url }),
          }
        );

        const data = await response.json();
        if (!data.success) throw new Error(data.message);

        // Construct the shortened URL using Vercel domain
        const shortCode = data.shortUrl.split("/").pop(); // Get the code from the backend URL
        this.shortenedUrl = `https://link-magic.vercel.app/${shortCode}`;

      } catch (err) {
        this.error = err.message || "Failed to shorten URL";
        this.shortenedUrl = "";
      } finally {
        this.isLoading = false;
      }
    },

    // Get the original URL from a shortened code
    async getOriginalUrl(shortCode) {
      this.isLoading = true;
      this.error = "";

      try {
        const response = await fetch(
          `https://link-magic-backend.onrender.com/url/${shortCode}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();
        if (!data.success) throw new Error(data.message);

        // Set the fetched original URL
        this.fetchedOriginalUrl = data.longUrl;
      } catch (err) {
        this.error = err.message || "Failed to fetch original URL";
        this.fetchedOriginalUrl = "";
      } finally {
        this.isLoading = false;
      }
    },

    // Copy the shortened URL to the clipboard
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.shortenedUrl);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch {
        this.error = "Failed to copy URL to clipboard.";
      }
    },

    // Reset all state
    reset() {
      this.originalUrl = "";
      this.shortenedUrl = "";
      this.fetchedOriginalUrl = "";
      this.error = "";
      this.isLoading = false;
      this.copied = false;
    },
  },
});
