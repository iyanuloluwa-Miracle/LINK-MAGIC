import { defineStore } from 'pinia';

export const useUrlStore = defineStore('url', {
  state: () => ({
    originalUrl: '',
    shortenedUrl: '',
    isLoading: false,
    error: '',
    copied: false
  }),
  
  actions: {
    async shortenUrl(url) {
      this.isLoading = true;
      this.error = '';
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
        
        this.shortenedUrl = data.shortUrl;
      } catch (err) {
        this.error = err.message || "Failed to shorten URL";
        this.shortenedUrl = '';
      } finally {
        this.isLoading = false;
      }
    },

    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.shortenedUrl);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch {
        this.error = "Failed to copy URL";
      }
    },

    reset() {
      this.originalUrl = '';
      this.shortenedUrl = '';
      this.error = '';
      this.isLoading = false;
      this.copied = false;
    }
  }
});