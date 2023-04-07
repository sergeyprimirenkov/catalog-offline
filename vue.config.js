module.exports = {
  devServer: {
    proxy: 'http://localhost:8080/',
  },
  publicPath: 'catalog-offline',
  pwa: {
    name: "DriV3R.Каталог",
    themeColor: "#0e0e30",
    backgroundColor: "#FFFFFF",
    iconPaths: {
      favicon16: '/assets/icons/favicon-16x16.png',
      favicon32: '/assets/icons/favicon-32x32.png',
      appleTouchIcon: '/assets/icons/apple-touch-icon.png',
      maskIcon: '/assets/icons/android-chrome-192x192.png',
      msTileImage: '/assets/icons/android-chrome-512x512.png'
    },
    manifestOptions: {
      icons: [
        { 'src': '/catalog-offline/assets/icons/favicon-16x16.png', 'sizes': '16x16', 'type': 'image/png' },
        { 'src': '/catalog-offline/assets/icons/favicon-16x16.png', 'sizes': '32x32', 'type': 'image/png' },
        { 'src': '/catalog-offline/assets/icons/apple-touch-icon.png', 'sizes': '180x180', 'type': 'image/png' },
        { 'src': '/catalog-offline/assets/icons/android-chrome-192x192.png', 'sizes': '192x192', 'type': 'image/png' },
        { 'src': '/catalog-offline/assets/icons/android-chrome-512x512.png', 'sizes': '512x512', 'type': 'image/png' },
      ]
    }
  }
}