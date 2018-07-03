$(document).ready(function() {
  //fullPAgeJS
  let fullPage = $('#fullpage');

  if(fullPage) {
    fullPage.fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      scrollingSpeed: 1000,
      navigation: true,
      scrollOverflow: true
    });
  }


});