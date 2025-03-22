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
        
        if (!response.ok) {
          throw new Error(data.message || "Failed to shorten URL");
        }

        if (!data.success) {
          throw new Error("URL shortening was not successful");
        }

        // Use the shortUrl directly from the backend response
        this.shortenedUrl = data.shortUrl;
        this.originalUrl = data.originalUrl;
      } catch (err) {
        this.error = err.message || "Failed to shorten URL";
        this.shortenedUrl = "";
      } finally {
        this.isLoading = false;
      }
    },

    async getOriginalUrl(shortCode) {
      this.isLoading = true;
      this.error = "";

      try {
        const response = await fetch(
          `https://link-magic-backend.onrender.com/url/${shortCode}`
        );

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || "Failed to retrieve URL");
        }

        if (!data.success) {
          throw new Error("URL retrieval was not successful");
        }

        this.fetchedOriginalUrl = data.longUrl;
        return data.longUrl;
      } catch (err) {
        this.error = err.message || "Failed to fetch original URL";
        this.fetchedOriginalUrl = "";
        throw err;
      } finally {
        this.isLoading = false;
      }
    },

    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.shortenedUrl);
        this.copied = true;
        setTimeout(() => (this.copied = false), 2000);
      } catch {
        this.error = "Failed to copy URL to clipboard.";
      }
    },

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