import { App } from './components/App';
import { Header } from './components/Header';

function render() {
  document.getElementById('app').appendChild(App());

  document.getElementById('app').appendChild(Header());
}

render();
