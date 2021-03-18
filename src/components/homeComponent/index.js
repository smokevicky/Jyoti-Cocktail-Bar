import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';

class Home extends React.Component {

  state = {
    randomCocktail: {}
  }

  componentDidMount = () => {
    AppLoader.showLoader();
    ApiHelpers.getARamdomCocktail(
      response => {
        this.setState({
          randomCocktail: response[0]
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          randomCocktail: []
        });
        AppLoader.hideLoader();
      }
    );
  }

  render() {
    const { randomCocktail } = this.state;
    return (
      <section className='App section-bg'>
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-title">
            Welcome to<h2 className='mb-0'>Cocktail bar</h2>
          </div>

          {
            randomCocktail?.strDrinkThumb &&
            <React.Fragment>
              <div className="section-title">
                <p>Get 50% off on this cocktail handpicked only for you!</p>
              </div>

              <div className='row team portfolio justify-content-center'>
                {/* Random cocktail */}
                <Link className='col-md-6 col-lg-4 pb-3' to={`/cocktail/${randomCocktail.idDrink}`}>
                  <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="portfolio-item filter-card">
                      <div className="portfolio-img">
                        <img src={randomCocktail.strDrinkThumb} className="img-fluid" alt="" />
                      </div>
                      <div className="portfolio-info text-center">
                        <h4>{randomCocktail.strDrink}</h4>
                        <p>{randomCocktail.strAlcoholic + ' Drink'}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </React.Fragment>
          }

          <div className="section-title">
            <p>Browse Cocktails by</p>
          </div>

          <div className='row team portfolio'>

            {/* Filter by categories */}
            <Link className='col-md-6 col-lg-3 pb-3' to={'/categories'}>
              <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="portfolio-item filter-card">
                  <div className="portfolio-img">
                    <img src="https://www.thecocktaildb.com//images//media//drink//wwuvxv1472668899.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="portfolio-info text-left">
                    <h4>Categories</h4>
                    <p>E.g. Cocktails, Beers</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Filter by glasses */}
            <Link className='col-md-6 col-lg-3 pb-3' to={'/glasses'}>
              <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="portfolio-item filter-card">
                  <div className="portfolio-img">
                    <img src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="portfolio-info text-left">
                    <h4>Glasses</h4>
                    <p>E.g. Wine Glass</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Filter by ingredients  */}
            <Link className='col-md-6 col-lg-3 pb-3' to={'/ingredients'}>
              <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="portfolio-item filter-card">
                  <div className="portfolio-img">
                    <img src="https://www.thecocktaildb.com//images//media//drink//ido1j01493068134.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="portfolio-info text-left">
                    <h4>Ingredients</h4>
                    <p>E.g. Vodka, Gin</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Filter by alcoholic filters */}
            <Link className='col-md-6 col-lg-3 pb-3' to={'/alcoholic-filters'}>
              <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="portfolio-item filter-card">
                  <div className="portfolio-img">
                    <img src="https://www.thecocktaildb.com//images//media//drink//3nbu4a1487603196.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="portfolio-info text-left">
                    <h4>Alcoholic Filters</h4>
                    <p>E.g. Castillian Hot Chocolate</p>
                  </div>
                </div>
              </div>
            </Link>

          </div>



        </div>
      </section>
    );
  }
}

export default Home;
