module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Bricolage Grotesque',
      secondary: 'Hedvig Letters Serif',
      third: 'Instrument Serif',
      quad : 'Inter',
      fifth : 'Space Mono',
      sixth : 'Tulpen One',
      seven : 'Silkscreen',
      eight : 'Outfit',
      nine : 'Maven Pro',
      ten:'Montserrat',
      eleven:'Kristi',
      twelve:'Macondo',
      thirteen:'Teko',
      fourteen:'New Amsterdam',
      fifteen:'Acme',
      sixteen:'Carter One', 
      seventeen:'Roboto', 
      eighteen:'Satisfy', 
      nineteen:'Playfair', 
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {

        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
