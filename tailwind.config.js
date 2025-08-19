const plugin = require('tailwindcss-pseudo-elements');
module.exports = {
  content: ["./views/**/*.ejs", "./public/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        // 'dark-circle': 'radial-gradient(circle at center, #000000, #111111 40%, #1a1a1a 70%, #cccccc)',
        'dark-circle': 'radial-gradient(circle at 100% 120%, #cccccc 0%, #1a1a1a 45%, #111111 50%, #000000 100%)',
        'metallic': 'linear-gradient(145deg, #f2f2f2 0%, #bbbbbb 20%, #e5e5e5 40%, #999999 60%, #dcdcdc 80%, #ffffff 100%)',
        'metallic-glare': 'linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
        'gold-soft': 'radial-gradient(circle at 30% 30%, #fdf6e3, #f5c877 40%, #d8a842 50%, #b88a2c 65%, #f5c877 90%, #fdf6e3)',
        'gold-soft-text': 'radial-gradient(circle at 30% 30%, #fdf6e3, #f5c877 30%, #d8a842 50%, #b88a2c 65%, #f5c877 90%, #fdf6e3)',
        'gold-soft-texto': 'radial-gradient(circle at 30% 30%, #f5c877, #d8a842 30%, #b88a2c 60%, #a0781f 90%)',
        'dark-smooth': 'linear-gradient(to bottom right, #0D0D0D, #111111, #0D0D0D)',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
        'gold-pulse': 'goldPulse 2.5s ease-in-out infinite',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.8s ease-out forwards',
        'shine': 'shine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        goldPulse: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  plugins: [plugin],
  corePlugins: {
    preflight: true,
  }
}
