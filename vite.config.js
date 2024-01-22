import { resolve } from 'path';

export default {
  // config options
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        events: resolve(__dirname, 'events/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        reservations: resolve(__dirname, 'reservations/index.html'),
        ourMenu: resolve(__dirname, 'our-menu/index.html'),
        searchConsoleVerification: resolve(
          __dirname,
          'google95764015fded17ad.html'
        ),
      },
    },
  },
};
