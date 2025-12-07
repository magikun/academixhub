// EmailJS Configuration
// Get these from https://dashboard.emailjs.com/
// See EMAIL_SETUP_GUIDE.md for detailed setup instructions

// Option 1: Use environment variables (recommended for production)
// Create a .env file and add your keys there
// Or Option 2: Replace the values directly here

export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_pilrpuo',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_eherxw9',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ja4udg9WWN4TSRij1'
}

// Check if email is configured
export const isEmailConfigured = () => {
  return (
    EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAIL_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
    EMAIL_CONFIG.SERVICE_ID !== '' &&
    EMAIL_CONFIG.TEMPLATE_ID !== '' &&
    EMAIL_CONFIG.PUBLIC_KEY !== ''
  )
}

