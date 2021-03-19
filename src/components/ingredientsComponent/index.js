import React from 'react';
import { Link } from 'react-router-dom';
import { ApiHelpers } from '../../api-helpers/api-helpers';
import AppLoader from '../../utility/app-loader';
import { NavigationComponent } from '../navigationComponent';

class Ingredients extends React.Component {

  hardcodedListofIngredientsImages = [
    "https://www.thecocktaildb.com/images/media/drink/opxjzh1604179528.jpg",
    "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
    "https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg",
    "https://www.thecocktaildb.com/images/media/drink/km84qi1513705868.jpg",
    "https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg",
    "https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg",
    "https://www.thecocktaildb.com/images/media/drink/9myuc11492975640.jpg",
    "https://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg",
    "https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg",
    "https://www.thecocktaildb.com/images/media/drink/sp8hkp1596017787.jpg",
    "https://www.thecocktaildb.com/images/media/drink/006k4e1504370092.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ypxsqy1483387829.jpg",
    "https://www.thecocktaildb.com/images/media/drink/61wgch1504882795.jpg",
    "https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg",
    "https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg",
    "https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
    "https://www.thecocktaildb.com/images/media/drink/eaag491504367543.jpg",
    "https://www.thecocktaildb.com/images/media/drink/urpvvv1441249549.jpg",
    "https://www.thecocktaildb.com/images/media/drink/hyztmx1598719265.jpg",
    "https://www.thecocktaildb.com/images/media/drink/fwpd0v1614006733.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vyrvxt1461919380.jpg",
    "https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uwstrx1472406058.jpg",
    "https://www.thecocktaildb.com/images/media/drink/pfz3hz1582483111.jpg",
    "https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg",
    "https://www.thecocktaildb.com/images/media/drink/5yhd3n1571687385.jpg",
    "https://www.thecocktaildb.com/images/media/drink/spvrtp1472668037.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uuqqrv1439907068.jpg",
    "https://www.thecocktaildb.com/images/media/drink/tswpxx1441554674.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg",
    "https://www.thecocktaildb.com/images/media/drink/aqm9el1504369613.jpg",
    "https://www.thecocktaildb.com/images/media/drink/mgf0y91503565781.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qwvwqr1441207763.jpg",
    "https://www.thecocktaildb.com/images/media/drink/rvvpxu1478963194.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg",
    "https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qrryvq1478820428.jpg",
    "https://www.thecocktaildb.com/images/media/drink/zaqa381504368758.jpg",
    "https://www.thecocktaildb.com/images/media/drink/d7mo481504889531.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg",
    "https://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ctt20s1504373488.jpg",
    "https://www.thecocktaildb.com/images/media/drink/1xhjk91504783763.jpg",
    "https://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg",
    "https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg",
    "https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg",
    "https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
    "https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg",
    "https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
    "https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
    "https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
    "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    "https://www.thecocktaildb.com/images/media/drink/7os4gs1606854357.jpg",
    "https://www.thecocktaildb.com/images/media/drink/lyloe91487602877.jpg",
    "https://www.thecocktaildb.com/images/media/drink/2rzfer1487602699.jpg",
    "https://www.thecocktaildb.com/images/media/drink/wrvpuu1472667898.jpg",
    "https://www.thecocktaildb.com/images/media/drink/mgf0y91503565781.jpg",
    "https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg",
    "https://www.thecocktaildb.com/images/media/drink/acvf171561574403.jpg",
    "https://www.thecocktaildb.com/images/media/drink/upqvvp1441253441.jpg",
    "https://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qtspsx1472667392.jpg",
    "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xrqxuv1454513218.jpg",
    "https://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg",
    "https://www.thecocktaildb.com/images/media/drink/lijtw51551455287.jpg",
    "https://www.thecocktaildb.com/images/media/drink/wpspsy1468875747.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qxuppv1468875308.jpg",
    "https://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg",
    "https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg",
    "https://www.thecocktaildb.com/images/media/drink/tysssx1473344692.jpg",
    "https://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg",
    "https://www.thecocktaildb.com/images/media/drink/qxprxr1454511520.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ggx0lv1613942306.jpg",
    "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    "https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
    "https://www.thecocktaildb.com/images/media/drink/ypl13s1504890158.jpg",
    "https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
    "https://www.thecocktaildb.com/images/media/drink/3s6mlr1509551211.jpg",
    "https://www.thecocktaildb.com/images/media/drink/xtrvtx1472668436.jpg",
    "https://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg",
    "https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg",
    "https://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
    "https://www.thecocktaildb.com/images/media/drink/vqws6t1504888857.jpg",
    "https://www.thecocktaildb.com/images/media/drink/sk3lr91493068595.jpg",
    "https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg"
  ];

  state = {
    ingredientsList: []
  };

  componentDidMount = () => {
    AppLoader.showLoader();
    ApiHelpers.getIngredientsList(
      response => {
        this.setState({
          ingredientsList: response
        });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          ingredientsList: []
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
            <p>Experts suggest the vividest one</p>
          </div>

          <div className='row team portfolio'>

            {
              this.state.ingredientsList.map((ingredient, index) => {
                return <Link className='col-md-6 col-lg-3 pb-3' to={`/ingredient?name=${ingredient.strIngredient1}`} key={index}>
                  <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="portfolio-item filter-card">
                      <div className="portfolio-img">
                        <img src={this.hardcodedListofIngredientsImages[index]} className="img-fluid" alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4>{ingredient.strIngredient1}</h4>
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

export default Ingredients;
