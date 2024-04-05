const clickMe = document.getElementByClassName("btn-primary");
const searchBtn = document.getElementByClassName("");
const formatList = document.getElementByClassName("form-select");

searchBtn.addEventListener();

function getApi() {
  const requestUrl = "https://loc.gov/";
  fetch(requestUrl).then(function (response) {
    return response.json();
  });
}
