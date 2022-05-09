import 'normalize.css';
import './index.scss';
import App from './core/app/App';

window.onload = () => {
  const app = new App();
  app.run();
};
