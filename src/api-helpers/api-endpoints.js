import { baseUrl } from "./base";

export const API_ENDPOINTS = {
  getFilterList: (filter) => { return `${baseUrl}/list.php?${filter}=list` },
  getARamdomCocktail: () => { return `${baseUrl}/random.php` },
  getCocktailDetails: (id) => { return `${baseUrl}/lookup.php?i=${id}` },
  getListByFilter: (filter, name) => { return `${baseUrl}/filter.php?${filter}=${name}` },
}