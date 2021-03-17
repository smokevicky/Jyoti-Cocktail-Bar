import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import Categories from './components/categoriesComponent';
import cocktailComponent from './components/cocktailComponent';

const hist = createBrowserHistory();

const AppRouter = () => {
  return (
    <div>
      <Router history={hist}>
        <Route path='/categories' exact component={Categories} />
        <Route path='/glasses' exact component={App} />
        <Route path='/ingredients' exact component={App} />
        <Route path='/alcoholic-filters' exact component={App} />
        <Route path='/cocktail/:id' exact component={cocktailComponent} />
        <Route path='/' exact component={App} />
      </Router>
    </div>
  );
};

export default AppRouter;