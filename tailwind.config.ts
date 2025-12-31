// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      clipPath: {
        // Efek potongan sudut khas desain tech/military
        'shorthand': 'polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)',
      },
      colors: {
        // Kita beri nama 'nlfts' agar tidak bentrok dengan warna bawaan
        nlfts: {
          50: '#e6f0ff',
          100: '#cce1ff',
          500: '#0055FF', // Biru utama kamu
          600: '#0044CC',
          700: '#003399',
          950: '#050a15', // Background gelap mahal
        }
      }
    }
  }
}