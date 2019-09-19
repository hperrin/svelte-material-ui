import './app.scss';
import * as sapper from '@sapper/app';

sapper.start({
  target: document.getElementsByTagName('app')[0]
});