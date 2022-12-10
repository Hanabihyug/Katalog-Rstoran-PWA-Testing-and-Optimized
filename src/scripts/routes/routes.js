import Restaurant from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routesWarunk = {
  '/': Restaurant,
  '/home': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routesWarunk;
