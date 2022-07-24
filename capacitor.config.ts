import { CapacitorConfig } from '@capacitor/cli';

const baseConfig: CapacitorConfig = {
  appId: 'com.benoiteirik.qorse',
  appName: 'Qorse',
  webDir: 'build',
  bundledWebRuntime: false
};

var config = {};

switch (process.env.NODE_ENV) {
  case "production":
    config = {
      ...baseConfig
    };
    break;
  default:
    config = {
      ...baseConfig,
      server: {
        url: "http://192.168.214.117:3000",
        cleartext: true
      }
    };
    break;
}

export default config;