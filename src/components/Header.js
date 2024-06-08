import styles from './Header.module.css';

export function Header() {
  const Header = document.createElement('div');
  Header.className = styles.red;
  Header.innerHTML = 'He2223334221232131231231234';

  const Button = document.createElement('button');
  Button.innerHTML = 'Butto22333n';

  Header.appendChild(Button);

  return Header;
}
