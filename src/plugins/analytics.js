import VueGtag from 'vue-gtag-next'

export function setupAnalytics(app) {
  app.use(VueGtag, {
    property: {
      id: 'G-2KT2M5Z3LB' // Replace with your Google Analytics Measurement ID
    }
  })
} 