module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000808',
      'gray': '#707070',
      'darker-teal': '#142020',
      'dark-teal': '#0a5353',
      'teal': '#217575',
      'lighter-teal': '#98fcfc',
      'blue-gray':'#b6c9c9',
      'light-gray': '#e7e8e8',
      'green': '#0ee231',
      'pink-red':'#ff67A9',
      'lightYellow': '#f5fc98',
      'white': '#ffffff'
    },
    extend: {
      spacing: {
        '22.5': '5.625rem'
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: [
      {
        'stocxtune-dark': {
          primary: '#217575',
          secondary: "#0A5353",
          accent: "#98FCFC",
          neutral: "#E7E6E6",
          "base-100": "#142020",
          
           "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        }
      }
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
