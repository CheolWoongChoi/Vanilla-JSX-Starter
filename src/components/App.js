import styles from './App.module.css';

export function App() {
  const AppDiv = document.createElement('div');
  AppDiv.innerHTML = 'Appddd';
  AppDiv.className = styles.container;

  const Title = document.createElement('h1');
  Title.innerHTML = 'Title22';
  Title.className = styles.title;

  const Head = document.createElement('button');
  Head.innerHTML = 'Head222';

  AppDiv.appendChild(Title);
  AppDiv.appendChild(Head);

  return AppDiv;
}
