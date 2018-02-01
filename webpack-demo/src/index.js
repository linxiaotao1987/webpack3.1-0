import { cube } from './math.js';
import './styles.css';

function component() {
  var element = document.createElement('pre');
  var imgNode = document.createElement('img');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');


  element.appendChild(imgNode);
  
  return element;
}

document.body.appendChild(component());

