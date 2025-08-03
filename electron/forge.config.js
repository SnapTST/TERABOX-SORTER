// electron/forge.config.js
module.exports = {
  packagerConfig: {
    icon: './assets/icon', // omit .icns extension, optional
  },
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
        name: 'TERABOX Sorter',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    }
  ],
};
