import { createElement } from './utils';
import App from './App';

function render(element, target) {
  target.innerHTML = '';
  target.appendChild(element);
}

render(<App />, document.getElementById('app'));
