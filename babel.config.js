module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      ["module:react-native-dotenv"],
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./",
            // 你可以根据需要添加更多别名
          },
        },
      ],
    ],
  };
};
