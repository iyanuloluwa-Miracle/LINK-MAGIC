import { defineStore } from "pinia";
import { ref } from "vue";

export const useUrlStore = defineStore("url", () => {
  const originalUrl = ref("");
  const shortenedUrl = ref("");
  const isLoading = ref(false);
  const error = ref(null);
  const copied = ref(false);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const shortenUrl = async (url) => {
    try {
      if (!isValidUrl(url)) {
        throw new Error("Please enter a valid URL");
      }

      isLoading.value = true;
      error.value = null;
      originalUrl.value = url;

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
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to shorten URL");
      }

      if (data.result_url) {
        shortenedUrl.value = data.result_url;
      } else {
        throw new Error("Invalid response from URL shortener");
      }
    } catch (err) {
      error.value = err.message || "Failed to shorten URL. Please try again.";
      shortenedUrl.value = "";
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

  return {
    originalUrl,
    shortenedUrl,
    isLoading,
    error,
    copied,
    shortenUrl,
    copyToClipboard
  };
});