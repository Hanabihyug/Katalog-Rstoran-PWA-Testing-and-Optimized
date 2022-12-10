import { Workbox } from 'workbox-window';

const WarunkswRegister = async () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('./sw.js');
    workbox.register();
  }
};

export default WarunkswRegister;
