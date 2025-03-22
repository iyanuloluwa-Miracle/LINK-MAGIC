import { defineStore } from "pinia";
import { ref } from "vue";

export const useUrlStore = defineStore("url", () => {
  const originalUrl = ref("");
  const shortenedUrl = ref("");
  const fetchedOriginalUrl = ref("");
  const isLoading = ref(false);
  const error = ref(null);
  const copied = ref(false);

  const shortenUrl = async (url) => {
    try {
      isLoading.value = true;
      error.value = null;
      originalUrl.value = url;

      // Using Cleanuri API (most straightforward to implement)
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: url
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      shortenedUrl.value = data.result_url;
    } catch (err) {
      error.value = err.message || "Failed to shorten URL";
      shortenedUrl.value = "";
    } finally {
      isLoading.value = false;
    }
  };

  const getOriginalUrl = async (shortCode) => {
    try {
      isLoading.value = true;
      error.value = "";

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

      fetchedOriginalUrl.value = data.longUrl;
      return data.longUrl;
    } catch (err) {
      error.value = err.message || "Failed to fetch original URL";
      fetchedOriginalUrl.value = "";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl.value);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    } catch (err) {
      error.value = "Failed to copy to clipboard";
    }
  };

  const reset = () => {
    originalUrl.value = "";
    shortenedUrl.value = "";
    fetchedOriginalUrl.value = "";
    error.value = "";
    isLoading.value = false;
    copied.value = false;
  };

  return {
    originalUrl,
    shortenedUrl,
    fetchedOriginalUrl,
    isLoading,
    error,
    copied,
    shortenUrl,
    getOriginalUrl,
    copyToClipboard,
    reset
  };
});