import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Categories from './components/categoriesComponent';
import Category from './components/categoriesComponent/category';
import Cocktail from './components/cocktailComponent';
import Home from './components/homeComponent';
import Glasses from './components/glassesComponent';
import Glass from './components/glassesComponent/glass';
import Ingredients from './components/ingredientsComponent';
import Ingredient from './components/ingredientsComponent/ingredient';
import AlchoholicFilters from './components/alchoholicFilterComponent';
import AlchoholicFilter from './components/alchoholicFilterComponent/alchoholicFilter';
import CocktailSearch from './components/searchComponent';

const hist = createBrowserHistory();

const AppRouter = () => {
  return (
    <div>
      <Router history={hist}>
        <Route path='/categories' exact component={Categories} />
        <Route path='/category' exact component={Category} />
        <Route path='/glasses' exact component={Glasses} />
        <Route path='/glass' exact component={Glass} />
        <Route path='/ingredients' exact component={Ingredients} />
        <Route path='/ingredient' exact component={Ingredient} />
        <Route path='/alcoholic-filters' exact component={AlchoholicFilters} />
        <Route path='/alcoholic-filter' exact component={AlchoholicFilter} />
        <Route path='/cocktail/:id' exact component={Cocktail} />
        <Route path='/search' exact component={CocktailSearch} />
        <Route path='/' exact component={Home} />
      </Router>
    </div>
  );
};

export default AppRouter;