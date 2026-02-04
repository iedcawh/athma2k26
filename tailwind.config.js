/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                athma: {
                    orange: '#F24E1E', // Vibrant Orange from poster
                    black: '#0A0A0A',
                    white: '#F5F5F5',
                    gray: '#1A1A1A'
                },
                // Keeping "void" as a dark text color alias
                void: '#050505',
                chrome: '#E0E0E0',
            },
            fontFamily: {
                glitch: ['"Orbitron"', 'sans-serif'],
                tech: ['"Audiowide"', 'sans-serif'],
                wide: ['"Syncopate"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/poster.jpg')",
                'noise': "url('https://grainy-gradients.vercel.app/noise.svg')"
            }
        },
    },
    plugins: [],
}
