import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';
import { NavigationComponent } from '../navigationComponent';

class Categories extends React.Component {

  hardcodedListofCategoryImages = [
    "https://www.thecocktaildb.com/images/media/drink/lvzl3r1504372526.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qvuyqw1441208955.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
    "https://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg",
    "https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg",
    "https://www.thecocktaildb.com/images/media/drink/yxswtp1441253918.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qywpvt1454512546.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg"
  ];

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
            <NavigationComponent props={this.props} />
            <p>We offer the best Beers in town!</p>
          </div>

          <div className='row team portfolio'>

            {
              this.state.categoriesList.map((category, index) => {
                return <Link className='col-md-6 col-lg-3 pb-3' to={`/category?name=${category.strCategory}`} key={index}>
                  <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="portfolio-item filter-card">
                      <div className="portfolio-img">
                        <img src={this.hardcodedListofCategoryImages[index]} className="img-fluid" alt="" />
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
