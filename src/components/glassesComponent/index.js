import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';
import { NavigationComponent } from '../navigationComponent';

class Glasses extends React.Component {

  hardcodedListofGlassesImages = [
    "https://www.thecocktaildb.com/images/media/drink/07iep51598719977.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
    "https://www.thecocktaildb.com/images/media/drink/8oxlqf1606772765.jpg",
    "https://www.thecocktaildb.com/images/media/drink/mlyk1i1606772340.jpg",
    "https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg",
    "https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
    "https://www.thecocktaildb.com/images/media/drink/t5pv461606773026.jpg",
    "https://www.thecocktaildb.com/images/media/drink/61wgch1504882795.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ne7re71604179012.jpg",
    "https://www.thecocktaildb.com/images/media/drink/sqxsxp1478820236.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qyr51e1504888618.jpg",
    "https://www.thecocktaildb.com/images/media/drink/b522ek1521761610.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg",
    "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
    "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg",
    "https://www.thecocktaildb.com/images/media/drink/hnuod91587851576.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
    "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    "https://www.thecocktaildb.com/images/media/drink/51ezka1551456113.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xsqrup1441249130.jpg",
    "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
    "https://www.thecocktaildb.com/images/media/drink/wwuvxv1472668899.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
    "https://www.thecocktaildb.com/images/media/drink/tyvpxt1468875212.jpg",
    "https://www.thecocktaildb.com/images/media/drink/861tzm1504784164.jpg",
    "https://www.thecocktaildb.com/images/media/drink/y7s3rh1598719574.jpg",
    "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    "https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg",
    "https://www.thecocktaildb.com/images/media/drink/nl89tf1518947401.jpg"
  ];

  state = {
    glassesList: []
  };

  componentDidMount = () => {
    AppLoader.showLoader();
    ApiHelpers.getGlassesList(
      response => {
        this.setState({
          glassesList: response
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          glassesList: []
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
            <p>Select your favourite glass shape</p>
          </div>

          <div className='row team portfolio'>

            {
              this.state.glassesList.map((glass, index) => {
                return <Link className='col-md-6 col-lg-3 pb-3' to={`/Zigram-Cocktail-Assignment/glass?name=${glass.strGlass}`} key={index}>
                  <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="portfolio-item filter-card">
                      <div className="portfolio-img">
                        <img src={this.hardcodedListofGlassesImages[index]} className="img-fluid" alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4>{glass.strGlass}</h4>
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

export default Glasses;
