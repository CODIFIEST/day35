module.exports = {
    content: ["./src/**/*.{html,js,svelte}"],  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c9aa46",
        
"secondary": "#aefcb0",
        
"accent": "#aa360f",
        
"neutral": "#27242E",
        
"base-100": "#433D43",
        
"info": "#71ADDA",
        
"success": "#3AD98C",
        
"warning": "#8E570B",
        
"error": "#FC5484",
        },
      },
    ],
  },

  plugins: [
    require("daisyui")
  ],
}