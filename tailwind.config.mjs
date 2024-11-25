/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj din egen farvepalette nedenfor */
        colors: {
        transparent: 'transparent',
            current: 'currentColor',
            orange: {
                50: "#FFEEE5",
                100: "#FFDDCC",
                200: "#FFBB99",
                300: "#FF9966",
                400: "#FF7734",
                500: "#FF5701",
                600: "#CC4400",
                700: "#993301",
                800: "#662300",
                900: "#331100",
              },
              blue: {
                50: "#EEF2F6",
                100: "#DEE5EE",
                200: "#B8C7DA",
                300: "#97AEC9",
                400: "#7192B6",
                500: "#5377A1",
                600: "#425F80",
                700: "#334861",
                800: "#212F40",
                900: "#111922",
              },
              beige: {
                50: "#FDFDFB",
                100: "#FDFDFB",
                200: "#FCFAF8",
                300: "#FAF8F4",
                400: "#F7F3ED",
                500: "#F6F1EB",
                600: "#D6C2A7",
                700: "#BB9668",
                800: "#86653C",
                900: "#43321E",
              },
              black: {
                50: "#E6E6E6",
                100: "#CFCFCF",
                200: "#9E9E9E",
                300: "#6B6B6B",
                400: "#3B3B3B",
                500: "#0A0A0A",
                600: "#080808",
                700: "#050505",
                800: "#050505",
                900: "#030303",
              },

        //     'white': '#fff',
        //     'black': '#000',
        },

         /* Tilføj din egen spacing nedenfor */
         spacing: {
            xxs: "8px",
            xs: "16px",
            s: "24px",
            sm: "32px",
            m: "40px",
            ml: "48px",
            lg: "56px",
            xl: "64px",
            "2xl": "72px",
            "3xl": "80px",
            "4xl": "88px",
            "5xl": "96px",
            "6xl": "104px",
            "7xl": "112px",
            "8xl": "120px",
            "9xl": "128px",
            "10xl": "136px",
          },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
     fontFamily: {
     'display': ['think', 'sans serif'], /* eksempel på ekstra font */
     montserrat: ['Montserrat', 'sans-serif'],
     'open-sans': ['Open Sans', 'sans-serif'],
      },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
          fontWeight: {
thin:'300',
            regular: '400',
            semibold: '600',
            bold: '700',
          },

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },

        /* Border radius størrelser herunder */
        // borderRadius: {
        //     DEFAULT: '1.25rem',
        //     none: '0px',
        // },

        /* Box shadows herunder */
        boxShadow: {
      drop25:
        "4px 4px 4px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
      drop50:
        "4px 4px 4px 0 rgb(0 0 0 / 0.50)" /* x y blur spread farve / opacity */,
      inner25:
        "0px 4px 4px 0 rgb(0 0 0 / 0.25)/inset" /* x y blur spread farve / opacity */,
      inner50:
        "0px 4px 4px 0 rgb(0 0 0 / 0.50)/inset" /* x y blur spread farve / opacity */,
    },

		extend: {
        /* Tilføj din egen farvepalette nedenfor */
        // colors: {
        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     'farvenavn': {
        //         50: '#hexkode',     
        //         100: '#hexkode',
        //         200: '#hexkode',
        //         300: '#hexkode',
        //         400: '#hexkode',
        //         500: '#hexkode',
        //         600: '#hexkode',
        //         700: '#hexkode',
        //         800: '#hexkode',
        //         900: '#hexkode',
        //     },
        //     'white': '#fff',
        //     'black': '#000',
        // },

         /* Tilføj din egen spacing nedenfor */
        // spacing: {
        //     'm': '40px',
        // },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      
        // fontFamily: {
        //     sans: ['Prompt', 'sans-serif'],
        //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
        // },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        //   fontWeight: {
        //     regular: '400',
        //   },

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },

        /* Border radius størrelser herunder */
        // borderRadius: {
        //     DEFAULT: '1.25rem',
        //     none: '0px',
        // },

        /* Box shadows herunder */
        // boxShadow: {
        //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */  
        // },

        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}