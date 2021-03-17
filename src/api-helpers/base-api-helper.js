
// We may write different api helpers for all HTTP methods i.e. POST, PUT etc

function BaseApiHelperGet(url, successCallback, errorCallback) {
  fetch(url, {
    method: "GET"
  })
  .then(response => response.json())
  .then(jsonResponse=>{
    if(successCallback) {
      successCallback(jsonResponse.drinks);
    }
  })
  // Api error handle layer 
  .catch(err => {
    if(errorCallback) {
      errorCallback();
    }
    console.error(err);
  });
}

export default BaseApiHelperGet;