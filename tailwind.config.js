/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "vazir": ["vazir", "ui-sans-serif", "system-ui", "ui-serif"],
        "dana": "Dana",
        "Danamedium": "Dana medium",
        "DanaDemiBold" : "Dana DemiBold",
      },
      colors: {
        'body' : "#f0f0f0",
        'dark-blue' : "#24416b",
        'light-blue' : "#3b82f680",
        'charcoal' : "#343a40",
        'cherry' : "#dc3545",
      },
      backgroundImage: {
        'bg-header' : "url('./src/assets/images/jpg/bg-header.jpg')"
      },
      container: {
        center: true,
      },
      boxShadow: {
        "4xl": "rgba(36,65,107) 0px 0px 33px",
      }
    },
  },
  plugins: [],
};
