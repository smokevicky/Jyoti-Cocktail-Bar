import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';
import { NavigationComponent } from '../navigationComponent';

class AlchoholicFilters extends React.Component {

  hardcodedListofAlchoholicFiltersImages = [
    "https://www.thecocktaildb.com/images/media/drink/lvzl3r1504372526.jpg",
    "https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
    "https://www.thecocktaildb.com/images/media/drink/wpspsy1468875747.jpg"
  ];

  state = {
    alchoholicFiltersList: []
  };

  componentDidMount = () => {
    AppLoader.showLoader();
    ApiHelpers.getAlchoholicFiltersList(
      response => {
        this.setState({
          alchoholicFiltersList: response
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          alchoholicFiltersList: []
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
            <NavigationComponent props={this.props} />
            <p>Select your alchohol preference</p>
          </div>

          <div className='row team portfolio'>
            {
              this.state.alchoholicFiltersList.map((preference, index) => {
                return <Link className='col-md-6 col-lg-3 pb-3' to={`/alcoholic-filter?name=${preference.strAlcoholic}`} key={index}>
                  <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="portfolio-item filter-card">
                      <div className="portfolio-img">
                        <img src={this.hardcodedListofAlchoholicFiltersImages[index]} className="img-fluid" alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4>{preference.strAlcoholic}</h4>
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

export default AlchoholicFilters;
