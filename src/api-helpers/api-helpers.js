import { API_ENDPOINTS } from "./api-endpoints"
import BaseApiHelperGet from "./base-api-helper"

export const ApiHelpers = {
  getCategoriesList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('c'), successCallback, errorCallback)},
  getGlassesList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('g'), successCallback, errorCallback)},
  getIngredientsList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('i'), successCallback, errorCallback)},
  getAlchoholicFiltersList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('a'), successCallback, errorCallback)},
  getAlcholicFiltersList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('a'), successCallback, errorCallback)},
  getARamdomCocktail:  (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getARamdomCocktail(), successCallback, errorCallback)},
  getCocktailDetails:  (id, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getCocktailDetails(id), successCallback, errorCallback)},
  getCategoryDetails:  (filterName, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getListByFilter('c', filterName), successCallback, errorCallback)},
  getGlassDetails:  (filterName, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getListByFilter('g', filterName), successCallback, errorCallback)},
  getIngredientDetails:  (filterName, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getListByFilter('i', filterName), successCallback, errorCallback)},
  getAlchoholicFilterDetails:  (filterName, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getListByFilter('a', filterName), successCallback, errorCallback)},
  searchCocktails:  (cocktailName, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.searchCocktails(cocktailName), successCallback, errorCallback)}
}