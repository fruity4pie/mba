$(document).ready(function() {
	//DocumentStart


	//ChangeLogoToSVGForFFAdaptive


	//fullPAgeJS
	let fullPage = $('#fullpage');
	if(fullPage) {
		fullPage.fullpage({
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			navigation: true,
			responsiveWidth: 900
		});
	}

	//RemovePreloader
	$('.preloader').fadeOut(1000);
	setTimeout(function(){
		$('body').removeClass('preload');
	}, 1200);

	//Tabs
	let clientsCont = $('.clients .img-cont .img-cont__item');
	let clientsText = $('.clients .t-cont');

	clientsCont.on('click', function(){
		let elem = $(this);
		let dataIndex = elem.data('num');

		let parent = elem.parent();
		parent.prepend(elem);
		clientsText.removeClass('atab');
		clientsText.eq(dataIndex).addClass('atab');
	})

	//Tabs2
	let tabsAnchors = $('.b-tabs__nav a');
	let tabsContent = $('.b-tabs__cont div');
	let tabsParent = $('.b-work');
	tabsContent.find('p > span:first-child').text(`01`);
	tabsContent.find('p > span:last-child').text(`0${tabsAnchors.length}`);

	tabsAnchors.each(function(ind, el) {
		let currentContent = ind;
		$(this).on('click', function(event){
			event.preventDefault();
			let bg = $(this).data('img');
			tabsParent.css("background-image", `url(${bg})`);
			tabsAnchors.removeClass('active');
			$(this).addClass('active');
			tabsContent.removeClass('active');
			tabsContent.filter(`div[data-subtitle=${$(this).data(`title`)}]`).addClass('active').find('p > span:first-child').text(`0${currentContent+1}`);
		})
	})

	//Gallery
	$('.g-c').owlCarousel({
		loop: true,
		nav: false,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1,
				center: true,
				margin: 0,
				autoplay: true,
				autoplayTimeout: 1500,
			},
			550: {
				margin: 75,
				items: 2,
				center: false
			},
			768: {
				margin: 50,
				items: 3
			},
			1100: {
				margin: 190
			},
			1280: {
				nav: true
			}
		}
	});

	$('.stories').owlCarousel({
		loop: false,
		nav: false,
		navText: [`<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65"><path id="Прямоугольник_3_копия" data-name="Прямоугольник 3 копия" class="cls-1" d="M1693.6,559.375h0a32.646,32.646,0,0,0,9.6,11.273,0.777,0.777,0,0,0,1.09-.165,0.762,0.762,0,0,0,.15-0.582,0.771,0.771,0,0,0-.31-0.515,31.254,31.254,0,0,1-9.14-10.73,30.6,30.6,0,0,1-3.42-14.156,30.93,30.93,0,1,1,30.93,30.929,0.786,0.786,0,1,0,0,1.571A32.49,32.49,0,1,0,1693.6,559.375Zm18.98-14.675a0.873,0.873,0,0,0,.33.7l14.49,10.612a0.563,0.563,0,0,0,.51.093,0.7,0.7,0,0,0,.41-0.379,0.967,0.967,0,0,0,.08-0.628,0.88,0.88,0,0,0-.31-0.508l-8.98-6.581v-0.031l-4.56-3.325,4.46-3.513v-0.03l8.8-6.951a0.85,0.85,0,0,0,.29-0.521,0.954,0.954,0,0,0-.09-0.624,0.694,0.694,0,0,0-.43-0.361,0.56,0.56,0,0,0-.5.113l-14.19,11.209a0.866,0.866,0,0,0-.31.712V544.7Z" transform="translate(-1690 -512)"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65"><path id="Прямоугольник_3" data-name="Прямоугольник 3" class="cls-1" 					  d="M1651.4,529.625h0a32.646,32.646,0,0,0-9.6-11.273,0.777,0.777,0,0,0-1.09.165,0.762,0.762,0,0,0-.15.582,0.771,0.771,0,0,0,.31.515,31.254,31.254,0,0,1,9.14,10.73,30.6,30.6,0,0,1,3.42,14.156,30.93,30.93,0,1,1-30.93-30.929,0.786,0.786,0,1,0,0-1.571A32.49,32.49,0,1,0,1651.4,529.625ZM1632.42,544.3a0.873,0.873,0,0,0-.33-0.7l-14.49-10.612a0.563,0.563,0,0,0-.51-0.093,0.7,0.7,0,0,0-.41.379,0.967,0.967,0,0,0-.08.628,0.88,0.88,0,0,0,.31.508l8.98,6.581v0.031l4.56,3.325-4.46,3.513v0.03l-8.8,6.951a0.85,0.85,0,0,0-.29.521,0.954,0.954,0,0,0,.09.624,0.694,0.694,0,0,0,.43.361,0.56,0.56,0,0,0,.5-0.113l14.19-11.209a0.866,0.866,0,0,0,.31-0.712V544.3Z" transform="translate(-1590 -512)"/>
		</svg>`],
		dots: false,
		items: 4,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1,
				center: true,
				margin: 0,
			},
			768: {
				items: 2
			},
			1440: {
				nav: true
			}
		}
	});

	let visibleLang = $('.lang__visible a');
	let hiddenLang = $('.lang__hidden');
	visibleLang.on('click', function(e) {
		e.preventDefault();
		hiddenLang.toggleClass('active');
	})

	//MobileMenu
	let mobBtn = $('.m-menu');
	let mobHmen = $('.m-menu-h');
	let mobListAnch = $('.m-menu-list > li > a');
	let mobClose = $('.m-menu-header span');

	mobBtn.on('click', function(){
		mobHmen.toggleClass('active');
		$('body').addClass('active');
	})

	mobListAnch.one('click', function(e){
		e.preventDefault();
		mobListAnch.removeClass('active').next().removeClass('active');
		$(this).addClass('active').next().toggleClass('active');
	})

	mobClose.on('click', function() {
		mobHmen.removeClass('active');
		$('body').removeClass('active');
	})

	//FormTabs
  let formAnch = $('.form-tabs__list a');
  let formTabs = $('.form-tabs__elem');
	formAnch.on('click', function(e) {
		e.preventDefault();
		formAnch.removeClass('active');
    $(this).addClass('active');
    let data = $(this).data('tab');
    formTabs.removeClass('active');
    formTabs.filter(`#${data}`).addClass('active');
	})

	//ResizeMapWindow
	let globeWrap = $('.globe-wrapper');
	function globeResize() {
		let headerHeight = $('header').outerHeight();
		    globeWrap.css({
		    	'padding-top': `${headerHeight}px`
		})
	}
	globeResize();
	if(globeWrap.length) {
		$(window).resize(function(){
			globeResize();
		});
	}

	//EndOfTheDoc
});


new Chart(document.getElementById("chart1"), {
  type: 'line',
  data: {
    labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    datasets: [
			{
					label: 'ASIA',
          data: [21, 21.4, 22.3, 24.7 ,26.3, 27.3, 28.4, 27.9, 28.4, 30.4, 31.4],
          backgroundColor: ['rgb(75, 1, 151)'],
          borderWidth: 1
        },
			{
					label: 'NORTH AMERICA',
          data: [51.2, 49.3, 48.2, 51.3, 51.7, 51.2, 52.7, 52.3, 53.06, 57.3, 58.5],
          backgroundColor: ['rgb(82, 67, 184)'],
          borderWidth: 1
        },
			{
					label: 'EUROPE',
          data: [85.8, 85.1, 84, 84.5, 82.6, 82, 81.6, 81.7, 82.1, 83.8, 84.6],
          backgroundColor: ['rgb(92, 133, 220)'],
          borderWidth: 1
        },
			{
					label: 'SOUTH AMERICA',
          data: [92.2, 91.8, 91.1, 91.6, 90.6, 90.2, 89.8, 89.8, 90.1, 90.4, 90.9],
          backgroundColor: ['rgb(99, 199, 255)'],
          borderWidth: 1
        },
        {
        	label: 'MIDDLE EAST',
        	data: [97.07, 97.07, 97.07, 97.07, 97.07, 97.07, 97.07, 97.07, 97.07, 97.07, 97.07],
        	backgroundColor: ['rgb(244, 167, 66)'],
        	borderWidth: 1
        },
		{
					label: 'AFRICA',
          data: [98.6, 98.5, 98.2, 98.72, 98.70, 98.4, 98.9, 98.9, 98.96, 98.07, 98.23],
          backgroundColor: ['rgb(99, 207, 220)'],
          borderWidth: 1
        },
			{
					label: 'OCEANIA',
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
          backgroundColor: ['rgb(99, 212, 184)'],
          borderWidth: 1
        },
		]
  },
	options: {
			legend: {
        display: true,
				position: 'bottom',
				labels: {
					fontSize: 13,
					fontFamily: 'Montserrat',
					boxWidth: 13,
					padding: 15,
					filter: function(item, chart) {
            return item.text ? item.text : '';
        	}
				},
    	},
			tooltips: {
         enabled: false
    	},
			elements: {
        point:{
          radius: 0
        }
      },
			scales: {
      	xAxes: [{
					display: true,
        	gridLines: {
          	display: true,
						lineWidth: 0,
						tickMarkLength: 25,
						color: 'rgba(0, 0, 0, 0)'
          },
          ticks: {
						textAlign: 'center',
          },
        }],
        yAxes: [{
        	display: true,
        	gridLines: {
        		display: false,
          },
					ticks: {
						min: 0,
						max: 100
					}
        }],
      },
			plugins: {
				labels: false
			},
			maintainAspectRatio: false
		}
});

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
    datasets: [
			{
				label: 'ASIA',
        data: [13.4,13.9,5.4,16.6,15.2,6.2,1.1,4.4,0.5,4.7],
        borderColor: "#63d4b8",
				backgroundColor: "#63d4b8",
        fill: false
      },
			{
				label: 'NORTH AMERICA',
        data: [5.1,2,-2.9,5,4.4,3.9,3.1,3.5,2.5,2.4],
        borderColor: "#63cfdc",
				backgroundColor: "#63cfdc",
        fill: false
      },
			{
				label: 'EUROPE',
        data: [16.6,9.6,-11.9,1.8,10.9,-4,4.3,1.4,-14.2,-0.5],
        borderColor: "#4b0197",
				backgroundColor: "#4b0197",
        fill: false
      },
			{
				label: 'SOUTH AMERICA',
        data: [18.1,16.6,-6.1,24.4,13.8,0.8,2.5,0.2,-21.7,-2.9],
        borderColor: "#5243b8",
				backgroundColor: "#5243b8",
        fill: false
      },
			{
				label: 'AFRICA',
        data: [16.3,15.6,-5.7,36.8,12.2,4.9,5.9,4.9,-9.4,-6.1],
        borderColor: "#5243b8",
				backgroundColor: "#5243b8",
        fill: false
      },
      {
      	label: 'MIDDLE EAST',
      	data: [19.5,20.1,-11.8,17.5,16.2,6.1,1.6,0.5,-10.9,0],
      	borderColor: "#f4a742",
    	backgroundColor: "#f4a742",
      	fill: false
      },
	{
		label: 'OCEANIA',
    	data: [15.4,19.9,-11.8,23,20.9,10,2.5,-5.5,-8.4,-8.6],
    	borderColor: "#5243b8",
		backgroundColor: "#5243b8",
    	fill: false
    },
    ]
  },
  options: {
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				fontSize: 13,
				fontFamily: 'Montserrat',
				boxWidth: 13,
				padding: 15,
				filter: function(item, chart) {
					return item.text ? item.text : '';
				}
			},
		},
		tooltips: {
    	enabled: false
  	},
		elements: {
      point: {
        radius: 0
      },
			line: {
        tension: 0
      }
    },
		scales: {
    	xAxes: [{
				display: true,
      	gridLines: {
        	display: false,
        },
				offset: true,
      }],
    	yAxes: [{
				display: true,
      	gridLines: {
        	display:false
        },
				ticks: {
          min: -30,
          max: 40,
					stepSize: 10,
        },
      }],
    },
		plugins: {
			labels: false
		},
		maintainAspectRatio: false
  }
});

new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
      labels: ["ASIA", "NORTH AMERICA", "EUROPE", "SOUTH AMERICA", "MIDDLE EAST", "AFRICA", "OCEANIA"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#4b0197", "#5243b8","#5c85dc","#63c7ff", "#f4a742","#63cfdc", "#63d4b8"],
        data: [31,27,26,6,5,2,2]
      }]
    },
  options: {
		legend: {
        display: false
    	},
		tooltips: {
         enabled: false
    	},
		elements: {
        point:{
          radius: 0
        }
      },
    plugins: {
      labels: [
          {
            render: 'label',
            position: 'outside',
            fontSize: 11,
            fontFamily: 'Montserrat',
            textMargin: 4,
           },
          {
            render: 'percentage',
            fontSize: 19,
            fontFamily: 'Montserrat',
            fontColor: '#fff',
          }
        ]
    },
		maintainAspectRatio: false
  }
});
