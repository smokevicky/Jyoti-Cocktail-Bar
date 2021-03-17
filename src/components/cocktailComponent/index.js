import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';

class cocktailComponent extends React.Component {

  state = {
    cocktailDetails: {}
  };

  componentDidMount = () => {
    AppLoader.showLoader();
    let id = this.props.match.params.id;
    id && ApiHelpers.getCocktailDetails(id,
      response => {
        this.setState({
          cocktailDetails: response[0]
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          cocktailDetails: []
        });
        AppLoader.hideLoader();
      }
    );
  }

  render() {
    const { cocktailDetails } = this.state;
    const ingredientsList = [];
    for (let i = 1; i <= 15; i++) {
      if (cocktailDetails['strIngredient' + i]?.length > 0) {
        ingredientsList.push(cocktailDetails['strIngredient' + i]);
        continue;
      }
      break;
    }

    return (
      <section className='section-bg'>
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-title">
            <Link to={'/'} className='text-left'><p><i className="fas fa-chevron-left"></i> back</p></Link>
            <p>Your Cocktail details</p>
          </div>

          <div className='row team portfolio'>
            <div className='col-md-5 col-lg-6 pb-3'>
              <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="portfolio-item filter-card">
                  <div className="portfolio-img">
                    <img src={cocktailDetails.strDrinkThumb} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='row'>
                <div className='col-12'>
                  <h5>{cocktailDetails.strDrink} ({cocktailDetails.strAlcoholic + ' Drink'})</h5>
                </div>
                <div className='col-12'>
                  <p>{cocktailDetails.strInstructions}</p>
                </div>
                <div className='col-12'>
                  Category: <Link to={`/category/${cocktailDetails.strCategory}`}>{cocktailDetails.strCategory}</Link>
                </div>
                <div className='col-12'>
                  Glass type: <Link to={`/glass/${cocktailDetails.strGlass}`}>{cocktailDetails.strGlass}</Link>
                </div>
                {
                  ingredientsList.length > 0 &&
                  <div className='col-12'>
                    Ingredients:
                      <ul>
                      {
                        ingredientsList.map((ingredient, index) => {
                          return <li><Link to={`/ingredient/${ingredient}`} key={index}>{ingredient}</Link></li>
                        })
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default cocktailComponent;
