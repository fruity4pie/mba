$(document).ready(function() {
  //fullPAgeJS
  let fullPage = $('#fullpage');

  if(fullPage) {
    fullPage.fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      navigation: true,
    });
  }

  //Tabs
  let clientsCont = $('.clients .img-cont .img-cont__item');
  let clientsImg = $('.clients .img-cont .img-cont__item img');
  let clientsText = $('.clients .t-cont');

  clientsImg.on('click', function(){
    let elem = $(this);
    let parentElem = elem.parent();
    let parentElemTitle = parentElem.attr('data-title');
    let firstCont = clientsCont.first();
    let firstImg = firstCont.find('img');
    let firstTitle = firstCont.attr('data-title');
    let dataIndex = elem.data('num');

    parentElem.append(firstImg);
    parentElem.attr('data-title', firstTitle);
    firstCont.append(elem);
    firstCont.attr('data-title', parentElemTitle);

    clientsText.removeClass('atab');
    clientsText.eq(dataIndex).addClass('atab');
  })

  //Tabs2
  let tabsAnchors = $('.b-tabs__nav a');
  let tabsContent = $('.b-tabs__cont div');
  let numbOfContent = tabsContent.length;
  tabsContent.find('p > span:first-child').text(`01`)
  tabsContent.find('p > span:last-child').text(`0${tabsAnchors.length}`)

  tabsAnchors.each(function(ind, el) {
    let currentContent = ind;
    $(this).on('click', function(){
      event.preventDefault();
      tabsContent.removeClass('active');
      tabsContent.filter(`div[data-subtitle=${$(this).data(`title`)}]`).addClass('active').find('p > span:first-child').text(`0${currentContent+1}`);
    })
  })

  //Gallery
  $('.g-c').owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
        center: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 1500
      },
      550: {
        margin: 75,
        items: 2,
        center: false,
        nav: false
      },
      768: {
        margin: 50,
        items: 3,
        nav: true,
      },
      1100: {
        margin: 190
      }
    }
  });

  // $('.news-c1').owlCarousel({
  //   items: 3,
  //   autoWidth: true,
  //   margin: 20,
  // });

  let visibleLang = $('.lang__visible a');
  let hiddenLang = $('.lang__hidden');
  visibleLang.on('click', function(e) {
    e.preventDefault();
    hiddenLang.toggleClass('active');
  })

  //MobileMenu

  let mobBtn = $('.m-menu');
  let mobHmen = $('.m-menu-h');
  let mobListAnch = $('.m-menu-list li > a');
  let mobClose = $('.m-menu-header span');

  mobBtn.on('click', function(){
    mobHmen.toggleClass('active');
  })

  mobListAnch.on('click', function(e){
    e.preventDefault();
    mobListAnch.removeClass('active').next().removeClass('active');
    $(this).addClass('active').next().toggleClass('active');
  })

  mobClose.on('click', function() {
    mobHmen.removeClass('active');
  })

});



let ctx = document.getElementById("chart1").getContext("2d");
let myLineChart = new Chart(ctx, {
  type: 'line',
  data: [10, 13, 40, 10],
  options: options
});