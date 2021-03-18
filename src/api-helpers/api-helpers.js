import { API_ENDPOINTS } from "./api-endpoints"
import BaseApiHelperGet from "./base-api-helper"

export const ApiHelpers = {
  getCategoriesList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('c'), successCallback, errorCallback)},
  getGlassesList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('g'), successCallback, errorCallback)},
  getIngredientsList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('i'), successCallback, errorCallback)},
  getAlcholicFiltersList: (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getFilterList('a'), successCallback, errorCallback)},
  getARamdomCocktail:  (successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getARamdomCocktail(), successCallback, errorCallback)},
  getCocktailDetails:  (id, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getCocktailDetails(id), successCallback, errorCallback)},
  getCategoryDetails:  (categoryName, successCallback, errorCallback) => { BaseApiHelperGet(API_ENDPOINTS.getListByFilter('c', categoryName), successCallback, errorCallback)},
}