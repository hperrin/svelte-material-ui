import './App.scss';
import App from './App.svelte';

window.app = new App({
  target: document.getElementsByTagName('app')[0]
});