module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@nex/data": ["./libs/data/src/index.ts"],
          }
        }
      ]
    ]
  };
};
