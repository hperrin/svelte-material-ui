import App from './standard.svelte';
import '../../App.scss';

window.app = new App({
  target: document.getElementsByTagName('app')[0]
});