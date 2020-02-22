module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            $root: './src'
          },
        },
      ],
    ],
=======
>>>>>>> f3afe1e94ce4da792cf323b302d880e40e7066f9
  };
};
