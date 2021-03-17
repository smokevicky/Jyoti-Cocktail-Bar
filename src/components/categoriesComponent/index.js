import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';

class Categories extends React.Component {

  state = {
    categoriesList: []
  };

  componentDidMount = () => {
    AppLoader.showLoader();
    ApiHelpers.getCategoriesList(
      response => {
        this.setState({
          categoriesList: response
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          categoriesList: []
        });
        AppLoader.hideLoader();
      }
    );
  }

  render() {
    return (
      <section className='section-bg'>
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-title">
            <Link to={'/'} className='text-left'><p><i className="fas fa-chevron-left"></i> back</p></Link>
            <p>Select a Cocktail category</p>
          </div>

          <div className='row team portfolio'>

            {
              this.state.categoriesList.map((category, index) => {
                return <Link className='col-md-6 col-lg-3 pb-3' to={`/category/${category.strCategory}`} key={index}>
                  <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="portfolio-item filter-card">
                      <div className="portfolio-img">
                        <img src="https://www.thecocktaildb.com//images//media//drink//wwuvxv1472668899.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4>{category.strCategory}</h4>
                        {/* <p>E.g. Cocktails, Beers</p> */}
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

export default Categories;
