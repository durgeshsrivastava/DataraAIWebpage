/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./views/**/*.{html,js,jsx,ts,tsx}",
    "./templates/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#059669',
        accent: '#f97316',
        dark: '#0f172a',
        darker: '#020617',
        light: '#f8fafc'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
  // Safelist only essential dynamic classes for optimal purging
  safelist: [
    // Add any dynamically generated classes here
  ],
  // Disable unused core plugins to reduce bundle size
  corePlugins: {
    // Uncomment any you don't use to reduce bundle size:
    // preflight: false, // Disables CSS reset (~4KB savings)
    // container: false, // Disables container utilities
    // accessibility: false, // Disables screen reader utilities
    // backdropBlur: false,
    // backdropBrightness: false,
    // backdropContrast: false,
    // backdropDropShadow: false,
    // backdropGrayscale: false,
    // backdropHueRotate: false,
    // backdropInvert: false,
    // backdropOpacity: false,
    // backdropSaturate: false,
    // backdropSepia: false,
  },
  // Future flags for performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
  },
}