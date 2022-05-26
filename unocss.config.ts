import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    colors: {
      primary: '#131B29',
      secondary: '#1D2738',
      bluish: '#233354',
      redish: '#D91139',
      redishHover: '#f91c46',
      money: '#40e094',
      pinkMoney: 'rgb(255, 73, 106)',
      greenMoney: 'rgb(78, 227, 157)',
      cyan: '#34e7e4',
      cyanHover: '#64fdf9',
      textDark: '#090c0f',
      ghost: '#E9E9E9',
      bright: '#F8F8F8',
    },
  },
})
