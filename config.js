// Connect HTTPS form endpoints that accept JSON and return a successful HTTP status.
// Leave blank until your email/contact provider or backend is configured.
window.SABAN_CONFIG = {
  newsletterEndpoint: "",
  contactEndpoint: "",
  // Only publish approved, real customer quotes: { quote: "...", author: "..." }
  testimonials: [],
  // Populate only after confirming methods accepted by your checkout.
  paymentMethods: []
};
