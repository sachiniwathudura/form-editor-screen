// /** @type {import('tailwindcss').Types.Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: '#f0f9ff',
//           100: '#e0f2fe',
//           500: '#0ea5e9',
//           600: '#0284c7',
//           700: '#0369a1',
//           900: '#0c4a6e',
//         }
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 🔹 Existing Primary (Keep this)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },

        // 💜 New SONOLA Theme Colors
        background: {
          light: '#F9FAFB',
          dark: '#0C0E1A',
        },
        sidebar: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          light: '#1E293B',
          dark: '#E2E8F0',
        },
        border: {
          light: '#E5E7EB',
          dark: '#374151',
        },

        // 💜 SONOLA Brand Colors
        accent: {
          light: '#8A5BFF',   // main purple tone
          dark: '#B18CFF',    // lighter purple for dark mode
        },
        blueviolet: '#3C4CFF', // deep blue shade
      },

      // ✨ SONOLA Gradient (purple → blue)
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #826BFF 0%, #3A4CFF 100%)',
      },
    },
  },
  plugins: [],
}
