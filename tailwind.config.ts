import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        mainColor: {
          'primary-50': 'var(--primary-50)',
          'primary-100': 'var(--primary-100)',
          'primary-200': 'var(--primary-200)',
          'primary-300': 'var(--primary-300)',
          'primary-400': 'var(--primary-400)',
          'primary-500': 'var(--primary-500)',
          'primary-600': 'var(--primary-600)',
          'primary-700': 'var(--primary-700)',
          'primary-800': 'var(--primary-800)',
          'primary-900': 'var(--primary-900)',
          'primary-950': 'var(--primary-950)',
          // Add other custom colors here if needed
        },
        secondaryColor:{
          'secondary-50': 'var(--secondary-50)',
          'secondary-100': 'var(--secondary-100)',
          'secondary-200': 'var(--secondary-200)',
          'secondary-300': 'var(--secondary-300)',
          'secondary-400': 'var(--secondary-400)',
          'secondary-500': 'var(--secondary-500)',
          'secondary-600': 'var(--secondary-600)',
          'secondary-700': 'var(--secondary-700)',
          'secondary-800': 'var(--secondary-800)',
          'secondary-900': 'var(--secondary-900)',
          'secondary-950': 'var(--secondary-950)',
  
        },
        tertiaryColor : {
          'tertiary-50': 'var(--tertiary-50)',
          'tertiary-100': 'var(--tertiary-100)',
          'tertiary-200': 'var(--tertiary-200)',
          'tertiary-300': 'var(--tertiary-300)',
          'tertiary-400': 'var(--tertiary-400)',
          'tertiary-500': 'var(--tertiary-500)',
          'tertiary-600': 'var(--tertiary-600)',
          'tertiary-700': 'var(--tertiary-700)',
          'tertiary-800': 'var(--tertiary-800)',
          'tertiary-900': 'var(--tertiary-900)',
          'tertiary-950': 'var(--tertiary-950)',
  
        },
        quaternaryColor : {
          'quaternary-50': 'var(--quaternary-50)',
          'quaternary-100': 'var(--quaternary-100)',
          'quaternary-200': 'var(--quaternary-200)',
          'quaternary-300': 'var(--quaternary-300)',
          'quaternary-400': 'var(--quaternary-400)',
          'quaternary-500': 'var(--quaternary-500)',
          'quaternary-600': 'var(--quaternary-600)',
          'quaternary-700': 'var(--quaternary-700)',
          'quaternary-800': 'var(--quaternary-800)',
          'quaternary-900': 'var(--quaternary-900)',
          'quaternary-950': 'var(--quaternary-950)',
  
        },
        quinaryColor : {
          'quinary-50': 'var(--quinary-50)',
          'quinary-100': 'var(--quinary-100)',
          'quinary-200': 'var(--quinary-200)',
          'quinary-300': 'var(--quinary-300)',
          'quinary-400': 'var(--quinary-400)',
          'quinary-500': 'var(--quinary-500)',
          'quinary-600': 'var(--quinary-600)',
          'quinary-700': 'var(--quinary-700)',
          'quinary-800': 'var(--quinary-800)',
          'quinary-900': 'var(--quinary-900)',
          'quinary-950': 'var(--quinary-950)',
  
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config