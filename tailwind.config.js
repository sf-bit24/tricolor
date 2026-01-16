/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#002395', // Deep French Blue
                secondary: '#ED2939', // French Red
                dark: '#0A0A0A', // Black
                charcoal: '#1A1A1A', // Soft Black for text
                'off-white': '#FAFAFA', // Premium background
                'pearl': '#F5F5F7', // Slightly darker off-white for sections
                'glass-white': 'rgba(255, 255, 255, 0.1)',
                'glass-dark': 'rgba(10, 10, 10, 0.7)',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
