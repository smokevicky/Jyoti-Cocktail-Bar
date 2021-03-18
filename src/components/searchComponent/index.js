import React from "react";
import { Link } from "react-router-dom";
import { ApiHelpers } from "../../api-helpers/api-helpers";
import AppLoader from "../../utility/app-loader";
import { NavigationComponent } from "../navigationComponent";

class CocktailSearch extends React.Component {

  state = {
    searchVal: '',
    searchResults: [],
    isSearchInProgress: null
  }

  componentDidMount = () => {
    AppLoader.showLoader();
    let searchValFromUrl = new URLSearchParams(window.location.search).get('name');
    if (searchValFromUrl && searchValFromUrl.length > 0) {
      this.setState({
        searchVal: searchValFromUrl
      }, () => {
        this.searchCocktail();
      });
    } else {
      AppLoader.hideLoader();
    }
  }

  searchCocktail = () => {
    AppLoader.showLoader();
    this.state.searchVal.length > 0 && window.history.replaceState(null, "Cocktail Bar", `/search?name=${this.state.searchVal}`);
    this.setState({ isSearchInProgress: true, searchResults: [] });
    ApiHelpers.searchCocktails(
      this.state.searchVal,
      response => {
        this.setState({
          searchResults: response
        });
        this.setState({ isSearchInProgress: false });
        AppLoader.hideLoader();
      },
      error => {
        this.setState({
          searchResults: []
        });
        this.setState({ isSearchInProgress: false });
        AppLoader.hideLoader();
      }
    );
  }

  handleEnterKeyPress = (e) => {
    e.key === 'Enter' && this.searchCocktail();
  }

  updateSearchValue = (e) => {
    this.setState({
      searchVal: e.target.value
    });
  }

  render() {
    const { searchResults, searchVal, isSearchInProgress } = this.state;
    return (
      <section className='section-bg'>
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-title">
            <NavigationComponent props={this.props} />
            <p>Type in the searchbox and press enter</p>
          </div>

          <div className="input-group mb-3 justify-content-center">
            <input
              type="search"
              className="form-control col-lg-6"
              placeholder="e.g. lemonade, wine"
              aria-label="Cocktail Search"
              aria-describedby="cocktailSearch"
              onKeyUp={e => this.handleEnterKeyPress(e)}
              onChange={e => this.updateSearchValue(e)}
              value={searchVal}
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={this.searchCocktail}
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          {
            searchResults && searchResults.length > 0 &&
            <div className='row team portfolio justify-content-center pt-3'>
              {/* Search Results */}
              {
                searchResults.map((result, index) => {
                  return (
                    <Link className='col-md-6 col-lg-3 pb-3' to={`/cocktail/${result.idDrink}`} key={index}>
                      <div className="member d-flex align-items-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <div className="portfolio-item filter-card">
                          <div className="portfolio-img">
                            <img src={result.strDrinkThumb} className="img-fluid" alt="" />
                          </div>
                          <div className="portfolio-info text-center">
                            <h4>{result.strDrink}</h4>
                            <p>{result.strAlcoholic + ' Drink'}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          }
          {
            isSearchInProgress !== null &&
            (searchResults === null || searchResults.length === 0) &&
            <div>
              {
                isSearchInProgress
                  ?
                  <div className='row team portfolio justify-content-center pt-3'>
                    Checking with bartender..
                  </div>
                  :
                  <div className='row team portfolio justify-content-center pt-3'>
                    Nothing! Drinks and keyboards don't go hand in hand!!
                  </div>
              }
            </div>
          }
        </div>
      </section>
    );
  }
}

export default CocktailSearch;