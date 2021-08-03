module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/styles/main.sass"
                `,
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
