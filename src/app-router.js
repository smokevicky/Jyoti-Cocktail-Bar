import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Categories from './components/categoriesComponent';
import Category from './components/categoriesComponent/category';
import Cocktail from './components/cocktailComponent';
import Home from './components/homeComponent';

const hist = createBrowserHistory();

const AppRouter = () => {
  return (
    <div>
      <Router history={hist}>
        <Route path='/categories' exact component={Categories} />
        <Route path='/category' exact component={Category} />
        <Route path='/glasses' exact component={Home} />
        <Route path='/ingredients' exact component={Home} />
        <Route path='/alcoholic-filters' exact component={Home} />
        <Route path='/cocktail/:id' exact component={Cocktail} />
        <Route path='/' exact component={Home} />
      </Router>
    </div>
  );
};

export default AppRouter;