// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();

// import logIn from './components/log-in.js';
import home from './components/home.js';
import register from './components/register.js';
import error from './components/error.js';
import wall from './components/wall.js';

const routes = [
  { path: '/', component: home },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/wall', component: wall },
];

const defaultRoute = '/';
const root = document.getElementById('root');
function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    // Recordar que cambiamos 'if' por 'while'
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);
