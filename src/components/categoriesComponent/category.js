import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';

class Category extends React.Component {

  state = {
    cocktailListByCategory: []
  };

  componentDidMount = () => {
    AppLoader.showLoader();
    let categoryName = new URLSearchParams(window.location.search).get('name');
    ApiHelpers.getCategoryDetails(categoryName,
      response => {
        this.setState({
          cocktailListByCategory: response
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          cocktailListByCategory: []
        });
        AppLoader.hideLoader();
      }
    );
  }

  render() {
    const categoryName = new URLSearchParams(window.location.search).get('name');
    return (
      <section className='section-bg'>
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-title">
            <a href='#' onClick={this.props.history.goBack} className='text-left'><p><i className="fas fa-chevron-left"></i> back</p></a>
            <p>All available {categoryName}s</p>
          </div>

          <div className='row team portfolio'>

            {
              this.state.cocktailListByCategory.map((cocktail, index) => {
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

export default Category;
