import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.benoiteirik.qorse',
  appName: 'Qorse',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.10.166:3000",
    cleartext: true
  },
};

export default config;
