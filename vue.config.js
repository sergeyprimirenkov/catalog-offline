module.exports = {
  devServer: {
    proxy: 'http://localhost:8080/',
  },
  publicPath: '',
  pwa: {
    // workboxPluginMode: "GenerateSW",
    // workboxOptions: {
    //   globIgnores: ["assets/images.*.jpg"],
    //   exclude: [".*\.jpg"],
    //   swSrc: "./service-worker.js",
    // },
    name: "DriV3R.Каталог",
    themeColor: "#0e0e30",
    backgroundColor: "#FFFFFF",
    // favicon16: '/assets/icons/favicon-32x32.png',
    // favicon32: '/assets/icons/favicon-32x32.png',
    // appleTouchIcon: '/assets/icons/apple-touch-icon-152x152.png',
    // msTileImage: '/assets/icons/msapplication-icon-144x144.png',
    iconPaths: {
      favicon16: '/assets/icons/favicon-16x16.png',
      favicon32: '/assets/icons/favicon-32x32.png',
      appleTouchIcon: '/assets/icons/apple-touch-icon.png',
      maskIcon: '/assets/icons/android-chrome-192x192.png',
      msTileImage: '/assets/icons/android-chrome-512x512.png'
    },
    manifestOptions: {
      icons: [
        { 'src': '/assets/icons/favicon-16x16.png', 'sizes': '16x16', 'type': 'image/png' },
        { 'src': '/assets/icons/favicon-16x16.png', 'sizes': '32x32', 'type': 'image/png' },
        { 'src': '/assets/icons/apple-touch-icon.png', 'sizes': '180x180', 'type': 'image/png' },
        { 'src': '/assets/icons/android-chrome-192x192.png', 'sizes': '192x192', 'type': 'image/png' },
        { 'src': '/assets/icons/android-chrome-512x512.png', 'sizes': '512x512', 'type': 'image/png' },
      ]
    }
  }
}