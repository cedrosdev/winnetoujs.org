/**
 * @type {import('./interfaces').IWinConfig}
 */
export default {
  constructosPath: "./constructos",
  constructosOut: "./js/constructos",
  entry: "./js/app.js",
  out: "./release",

  defaultLang: "en-us",
  publicPath: "/",

  icons: "./icons",

  sass: [
    {
      entryFolder: "./sass",
      outFolder: "./release",
      firstFile: "_base.scss",
    },
    {
      entryFolder: "./sass_docs",
      outFolder: "./release/docs",
    },
  ],
};
