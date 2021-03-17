import * as $ from 'jquery';

function showLoader() {
  $('#preloader').delay(100).fadeIn('slow');
}

function hideLoader() {
  $('#preloader').delay(100).fadeOut('slow');
}

function isLoaderVisible() {
  return $('#preloader') ? true : false;
}

export const AppLoader = {
  showLoader: showLoader,
  hideLoader: hideLoader,
  isLoaderVisible: isLoaderVisible
}

export default AppLoader;