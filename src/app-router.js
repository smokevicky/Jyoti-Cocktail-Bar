import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path='/Zigram-Cocktail-Assignment/categories' exact component={Categories} />
          <Route path='/Zigram-Cocktail-Assignment/category' exact component={Category} />
          <Route path='/Zigram-Cocktail-Assignment/glasses' exact component={Glasses} />
          <Route path='/Zigram-Cocktail-Assignment/glass' exact component={Glass} />
          <Route path='/Zigram-Cocktail-Assignment/ingredients' exact component={Ingredients} />
          <Route path='/Zigram-Cocktail-Assignment/ingredient' exact component={Ingredient} />
          <Route path='/Zigram-Cocktail-Assignment/alcoholic-filters' exact component={AlchoholicFilters} />
          <Route path='/Zigram-Cocktail-Assignment/alcoholic-filter' exact component={AlchoholicFilter} />
          <Route path='/Zigram-Cocktail-Assignment/cocktail/:id' exact component={Cocktail} />
          <Route path='/Zigram-Cocktail-Assignment/search' exact component={CocktailSearch} />
          <Route path='/Zigram-Cocktail-Assignment/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;