module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["@nrwl/web/babel", 'babel-preset-expo'],
  };
};
