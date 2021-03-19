import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';
import { NavigationComponent } from '../navigationComponent';

class Ingredient extends React.Component {

  state = {
    cocktailListByIngredient: []
  };

  componentDidMount = () => {
    AppLoader.showLoader();
    let filterName = new URLSearchParams(window.location.search).get('name');
    ApiHelpers.getIngredientDetails(filterName,
      response => {
        this.setState({
          cocktailListByIngredient: response
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          cocktailListByIngredient: []
        });
        AppLoader.hideLoader();
      }
    );
  }

  render() {
    const filterName = new URLSearchParams(window.location.search).get('name');
    return (
      <section className='section-bg'>
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-title">
            <NavigationComponent props={this.props} />
            <p>{filterName} drinks</p>
          </div>

          <div className='row team portfolio'>

            {
              this.state.cocktailListByIngredient.map((cocktail, index) => {
                return <Link className='col-md-6 col-lg-3 pb-3' to={`/cocktail/${cocktail.idDrink}`} key={index}>
                  <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="portfolio-item filter-card">
                      <div className="portfolio-img">
                        <img src={cocktail.strDrinkThumb} className="img-fluid" alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4>{cocktail.strDrink}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              })
            }

          </div>
        </div>
      </section>
    );
  }
}

export default Ingredient;
