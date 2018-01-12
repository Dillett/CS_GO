 

// $('div, a.act').click(function() {
//     $(this).next('.hidden-block').toggleClass('block').slideToggle(400);
// })

// Открыть, скрыть блок

	var firstBlock = $('.block-teams');
	 $('#hide-first-block, #nav-toggle-1').click( function(){
        firstBlock.stop().slideToggle(400)
	 }
	);

	var secondBlock = $('.current');
	$('#hide-second-block, #nav-toggle-2').click( function(){
	  secondBlock.stop().slideToggle(400);
	 }
	);

	var pastBlock = $('.past');
	$('#hide-past-events, #nav-toggle-3').click( function(){
	  pastBlock.stop().slideToggle(200);
	 }
	);

	var express = $('.ex-menu');
	$('#express').click( function(){
	  express.stop().slideToggle(200);
	 }
	);


	var expr = $('.ex-menu');
	$('#expr').click( function(){
	  expr.stop().slideToggle(200);
	 }
	);

	var graph = $('.graphic');
	$('#graph').click( function(){
	  graph.stop().slideToggle(200);
	 }
	);

	var graphm = $('.graphicm');
	$('#graphm').click( function(){
	  graphm.stop().slideToggle(200);
	 }
	);

	var info = $('.info-i');
	$('#inf-ic').click( function(){
	  info.stop().slideToggle(200);
	 }
	);

	var twitch = $('.twitch');
	$('#twitch-b').click( function(){
	  twitch.stop().slideToggle(200);
	 }
	);

	var player = $('.player-info');
	$('#player-b').click( function(){
	  player.stop().slideToggle(200);
	 }
	);

// Открыть, скрыть блок


$(function() {
    $('.switch-c').on('click', function() {
        $('.switch-c').removeClass('active-color')
        $(this).addClass('active-color')
    })
})


// $(function() {
//     $('.img-active').on('click', function() {
//         $('.img-active').removeClass('bullet-active')
//         // $(this).addClass('bullet-active')
//         // $('.img-active').removeClass('phoenix-active')
//         // $(this).addClass('phoenix-active')
//     })
// })


$(function() {
    $('.op-w').on('click', function() {
        $('.inscription').removeClass('t-w')
        $(this).addClass('t-b')

    })
})

// // Запрет перехода по ссылке

	$(document).on("click", ".prevent", function (e) {
	if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
    	return true;
    }
    
	e.preventDefault();
	});
// Запрет перехода по ссылке


// POPUP

$('.first-popup-link, .second-popup-link, .three-popup-link').magnificPopup({
  closeBtnInside:true
});

// POPUP



// КАЛЬКУЛЯТОР


$(document).ready(function(){
    $('.col').keyup(function(){ 
       
       $('.result').val($('.price').val()*$(this).val()+"$"); 
    });

});

$(document).ready(function(){
    $('#inp').keyup(function(){ 
       $('#result-w').val($('#inp').val()-$('#comis').val()*$(this).val());
    });
});


// КАЛЬКУЛЯТОР


// Hide/show


$(function() {
    $('.link').on('click', function() {
        $('.link').removeClass('active-mr')
        $(this).addClass('active-mr')
        $('.link-mr').fadeOut(0)
        $($(this).attr('href')).fadeIn(800)
        return false
    })
})


$(function() {
    $('.second-link').on('click', function() {
        $('.second-link').removeClass('active-mr')
        $(this).addClass('active-mr')
        $('.link-ref').fadeOut(0)
        $($(this).attr('href')).fadeIn(800)
        return false
    })
})

$(function() {
    $('.rate-link').on('click', function() {
        $('.rate-link').removeClass('active-mr')
        $(this).addClass('active-mr')
        $('.content-popup').fadeOut(0)
        $($(this).attr('href')).fadeIn(800)
        return false
    })
})



// Hide/show


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: false,
    margin: 0,
    stagePadding: 0,
    mouseDrag: false,
    nav: true,
    navText: [ "<i class='arrow back fa fa-chevron-left'>","<i class='arrow next fa fa-chevron-right'>"],
    responsive: {
        0: {
            items: 1,
        },
        375: {
            items: 1,
            mouseDrag: false,
        },
         1200: {
            items: 1,
        },
        1920: {
            items: 1,
        },
    
    }
});
});



$('.menu_icon, .close').on('click', function(){
    $('.menu-mobile--itself').toggleClass('show')

})


$(document).ready(function(){
    $("#nav-toggle-1").click(function(){
        $("#nav-toggle-1").toggleClass("active"); return false;
    });
});

$(document).ready(function(){
    $("#nav-toggle-2").click(function(){
        $("#nav-toggle-2").toggleClass("active"); return false;
    });
});


$(document).ready(function(){
    $("#nav-toggle-3").click(function(){
        $("#nav-toggle-3").toggleClass("active"); return false;
    });
});




AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "categoryField": "category",
                    "angle": 4,
                    "plotAreaBorderColor": "#0000FF",
                    "plotAreaFillAlphas": 0.14,
                    "plotAreaFillColors": "#0000FF",
                    "startDuration": 1,
                    "backgroundColor": "#000000",
                    "theme": "black",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "axisColor": "#000000",
                        "axisThickness": 3
                    },
                    "chartScrollbar": {
                        "enabled": true,
                        "dragIconHeight": 29,
                        "dragIconWidth": 20,
                        "offset": 20,
                        "scrollbarHeight": 10
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonColor": "undefined",
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#F9CF28",
                            "bulletHitAreaSize": 0,
                            "bulletSize": 12,
                            "columnWidth": 0,
                            "cornerRadiusTop": 6,
                            "cursorBulletAlpha": 0,
                            "id": "AmGraph-1",
                            "labelOffset": 6,
                            "labelText": "",
                            "lineAlpha": 1,
                            "lineColor": "#F9CF28",
                            "lineThickness": 4,
                            "negativeLineAlpha": 0,
                            "title": "Поставлено на North Academy",
                            "type": "smoothedLine",
                            "valueField": "column-1"
                        },
                        {
                            "balloonColor": "#FFFF00",
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#FFFF00",
                            "bulletSize": 12,
                            "color": "#000000",
                            "columnWidth": 0,
                            "id": "AmGraph-2",
                            "lineAlpha": 1,
                            "lineColor": "#74D221",
                            "lineThickness": 4,
                            "minBulletSize": 2,
                            "negativeBase": 1,
                            "showHandOnHover": true,
                            "title": "Поставлено на Space",
                            "type": "smoothedLine",
                            "valueField": "column-2"
                        },
                        {
                            "animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#FFFF00",
                            "bulletSize": 12,
                            "fillToAxis": "ValueAxis-2",
                            "id": "AmGraph-3",
                            "legendAlpha": 0,
                            "legendColor": "undefined",
                            "lineColor": "#3CE1DD",
                            "lineThickness": 4,
                            "minDistance": 0,
                            "title": "Отношение ставок North Academy / SpaceS",
                            "type": "smoothedLine",
                            "valueField": "column-3"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "axisFrequency": 0,
                            "id": "ValueAxis-1",
                            "synchronizationMultiplier": 2,
                            "totalText": "",
                            "zeroGridAlpha": 3,
                            "autoRotateCount": 0,
                            "axisAlpha": 0.57,
                            "axisColor": "#F4A321",
                            "axisThickness": 2,
                            "color": "#FFFFFF",
                            "dashLength": 0,
                            "fontSize": 12,
                            "gridAlpha": 0,
                            "gridColor": "#3967A8",
                            "gridCount": 4,
                            "labelOffset": 4,
                            "minHorizontalGap": 74,
                            "minorGridAlpha": 0,
                            "minVerticalGap": 34,
                            "offset": -2,
                            "title": "",
                            "titleColor": "#000000",
                            "titleRotation": -2
                        },
                        {
                            "baseValue": 2,
                            "id": "ValueAxis-2",
                            "maximum": 0,
                            "minimum": 0,
                            "minMaxMultiplier": 0,
                            "precision": 1,
                            "radarCategoriesEnabled": false,
                            "synchronizationMultiplier": 1,
                            "synchronizeWith": "ValueAxis-1",
                            "zeroGridAlpha": 0,
                            "autoRotateCount": 2,
                            "axisAlpha": 0.58,
                            "axisColor": "#2BB5F2",
                            "axisThickness": 2,
                            "color": "#FFFFFF",
                            "fillColor": "#000000",
                            "firstDayOfWeek": 0,
                            "fontSize": 12,
                            "gridAlpha": 0,
                            "gridCount": 0,
                            "minorGridAlpha": 0,
                            "offset": 40,
                            "title": "",
                            "titleFontSize": 0
                        }
                    ],
                    "allLabels": [],
                    "balloon": {
                        "borderColor": "#FFFF00",
                        "borderThickness": 0,
                        "color": "#FFFFFF",
                        "cornerRadius": 3,
                        "fillAlpha": 0.91,
                        "fillColor": "#FFFF00",
                        "fontSize": 12,
                        "pointerWidth": 5
                    },
                    "legend": {
                        "enabled": true,
                        "align": "center",
                        "borderColor": "#FFFFFF",
                        "bottom": 0,
                        "fontSize": 12,
                        "gradientRotation": 0,
                        "markerDisabledColor": "#A6A6A6",
                        "position": "top",
                        "rollOverColor": "#FFFF00",
                        "spacing": 20,
                        "useGraphSettings": true,
                        "valueWidth": 20
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": ""
                        }
                    ],
                    "dataProvider": [
                        {
                            "category": "category 1",
                            "column-1": 8,
                            "column-2": 5,
                            "column-3": "5"
                        },
                        {
                            "category": "category 2",
                            "column-1": 6,
                            "column-2": 7,
                            "column-3": "3"
                        },
                        {
                            "category": "category 3",
                            "column-1": 2,
                            "column-2": 3,
                            "column-3": "2"
                        },
                        {
                            "category": "category 4",
                            "column-1": 1,
                            "column-2": 3,
                            "column-3": "3"
                        },
                        {
                            "category": "category 5",
                            "column-1": 2,
                            "column-2": 1,
                            "column-3": "6"
                        },
                        {
                            "category": "category 6",
                            "column-1": 3,
                            "column-2": 2,
                            "column-3": "7"
                        },
                        {
                            "category": "category 7",
                            "column-1": 6,
                            "column-2": 8,
                            "column-3": "8"
                        }
                    ]
                }
            );

AmCharts.makeChart("chartdiv1",
                {
                    "type": "serial",
                    "categoryField": "category",
                    "angle": 4,
                    "plotAreaBorderColor": "#0000FF",
                    "plotAreaFillAlphas": 0.14,
                    "plotAreaFillColors": "#0000FF",
                    "startDuration": 1,
                    "backgroundColor": "#000000",
                    "theme": "black",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "axisColor": "#000000",
                        "axisThickness": 3
                    },
                    "chartScrollbar": {
                        "enabled": true,
                        "dragIconHeight": 29,
                        "dragIconWidth": 20,
                        "offset": 20,
                        "scrollbarHeight": 10
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonColor": "undefined",
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#F9CF28",
                            "bulletHitAreaSize": 0,
                            "bulletSize": 12,
                            "columnWidth": 0,
                            "cornerRadiusTop": 6,
                            "cursorBulletAlpha": 0,
                            "id": "AmGraph-1",
                            "labelOffset": 6,
                            "labelText": "",
                            "lineAlpha": 1,
                            "lineColor": "#F9CF28",
                            "lineThickness": 4,
                            "negativeLineAlpha": 0,
                            "title": "Поставлено на North Academy",
                            "type": "smoothedLine",
                            "valueField": "column-1"
                        },
                        {
                            "balloonColor": "#FFFF00",
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#FFFF00",
                            "bulletSize": 12,
                            "color": "#000000",
                            "columnWidth": 0,
                            "id": "AmGraph-2",
                            "lineAlpha": 1,
                            "lineColor": "#74D221",
                            "lineThickness": 4,
                            "minBulletSize": 2,
                            "negativeBase": 1,
                            "showHandOnHover": true,
                            "title": "Поставлено на Space",
                            "type": "smoothedLine",
                            "valueField": "column-2"
                        },
                        {
                            "animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#FFFF00",
                            "bulletSize": 12,
                            "fillToAxis": "ValueAxis-2",
                            "id": "AmGraph-3",
                            "legendAlpha": 0,
                            "legendColor": "undefined",
                            "lineColor": "#3CE1DD",
                            "lineThickness": 4,
                            "minDistance": 0,
                            "title": "Отношение ставок North Academy / SpaceS",
                            "type": "smoothedLine",
                            "valueField": "column-3"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "axisFrequency": 0,
                            "id": "ValueAxis-1",
                            "synchronizationMultiplier": 2,
                            "totalText": "",
                            "zeroGridAlpha": 3,
                            "autoRotateCount": 0,
                            "axisAlpha": 0.57,
                            "axisColor": "#F4A321",
                            "axisThickness": 2,
                            "color": "#FFFFFF",
                            "dashLength": 0,
                            "fontSize": 12,
                            "gridAlpha": 0,
                            "gridColor": "#3967A8",
                            "gridCount": 4,
                            "labelOffset": 4,
                            "minHorizontalGap": 74,
                            "minorGridAlpha": 0,
                            "minVerticalGap": 34,
                            "offset": -2,
                            "title": "",
                            "titleColor": "#000000",
                            "titleRotation": -2
                        },
                        {
                            "baseValue": 2,
                            "id": "ValueAxis-2",
                            "maximum": 0,
                            "minimum": 0,
                            "minMaxMultiplier": 0,
                            "precision": 1,
                            "radarCategoriesEnabled": false,
                            "synchronizationMultiplier": 1,
                            "synchronizeWith": "ValueAxis-1",
                            "zeroGridAlpha": 0,
                            "autoRotateCount": 2,
                            "axisAlpha": 0.58,
                            "axisColor": "#2BB5F2",
                            "axisThickness": 2,
                            "color": "#FFFFFF",
                            "fillColor": "#000000",
                            "firstDayOfWeek": 0,
                            "fontSize": 12,
                            "gridAlpha": 0,
                            "gridCount": 0,
                            "minorGridAlpha": 0,
                            "offset": 40,
                            "title": "",
                            "titleFontSize": 0
                        }
                    ],
                    "allLabels": [],
                    "balloon": {
                        "borderColor": "#FFFF00",
                        "borderThickness": 0,
                        "color": "#FFFFFF",
                        "cornerRadius": 3,
                        "fillAlpha": 0.91,
                        "fillColor": "#FFFF00",
                        "fontSize": 12,
                        "pointerWidth": 5
                    },
                    "legend": {
                        "enabled": true,
                        "align": "center",
                        "borderColor": "#FFFFFF",
                        "bottom": 0,
                        "fontSize": 12,
                        "gradientRotation": 0,
                        "markerDisabledColor": "#A6A6A6",
                        "position": "top",
                        "rollOverColor": "#FFFF00",
                        "spacing": 20,
                        "useGraphSettings": true,
                        "valueWidth": 20
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": ""
                        }
                    ],
                    "dataProvider": [
                        {
                            "category": "category 1",
                            "column-1": 8,
                            "column-2": 5,
                            "column-3": "5"
                        },
                        {
                            "category": "category 2",
                            "column-1": 6,
                            "column-2": 7,
                            "column-3": "3"
                        },
                        {
                            "category": "category 3",
                            "column-1": 2,
                            "column-2": 3,
                            "column-3": "2"
                        },
                        {
                            "category": "category 4",
                            "column-1": 1,
                            "column-2": 3,
                            "column-3": "3"
                        },
                        {
                            "category": "category 5",
                            "column-1": 2,
                            "column-2": 1,
                            "column-3": "6"
                        },
                        {
                            "category": "category 6",
                            "column-1": 3,
                            "column-2": 2,
                            "column-3": "7"
                        },
                        {
                            "category": "category 7",
                            "column-1": 6,
                            "column-2": 8,
                            "column-3": "8"
                        }
                    ]
                }
            );


AmCharts.makeChart("chartdiv2",
                {
                    "type": "serial",
                    "categoryField": "category",
                    "angle": 4,
                    "plotAreaBorderColor": "#0000FF",
                    "plotAreaFillAlphas": 0.14,
                    "plotAreaFillColors": "#0000FF",
                    "startDuration": 1,
                    "backgroundColor": "#000000",
                    "theme": "black",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "axisColor": "#000000",
                        "axisThickness": 3
                    },
                    "chartScrollbar": {
                        "enabled": true,
                        "dragIconHeight": 29,
                        "dragIconWidth": 20,
                        "offset": 20,
                        "scrollbarHeight": 10
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonColor": "undefined",
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#F9CF28",
                            "bulletHitAreaSize": 0,
                            "bulletSize": 12,
                            "columnWidth": 0,
                            "cornerRadiusTop": 6,
                            "cursorBulletAlpha": 0,
                            "id": "AmGraph-1",
                            "labelOffset": 6,
                            "labelText": "",
                            "lineAlpha": 1,
                            "lineColor": "#F9CF28",
                            "lineThickness": 4,
                            "negativeLineAlpha": 0,
                            "title": "Поставлено на North Academy",
                            "type": "smoothedLine",
                            "valueField": "column-1"
                        },
                        {
                            "balloonColor": "#FFFF00",
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#FFFF00",
                            "bulletSize": 12,
                            "color": "#000000",
                            "columnWidth": 0,
                            "id": "AmGraph-2",
                            "lineAlpha": 1,
                            "lineColor": "#74D221",
                            "lineThickness": 4,
                            "minBulletSize": 2,
                            "negativeBase": 1,
                            "showHandOnHover": true,
                            "title": "Поставлено на Space",
                            "type": "smoothedLine",
                            "valueField": "column-2"
                        },
                        {
                            "animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "bulletColor": "#FFFF00",
                            "bulletSize": 12,
                            "fillToAxis": "ValueAxis-2",
                            "id": "AmGraph-3",
                            "legendAlpha": 0,
                            "legendColor": "undefined",
                            "lineColor": "#3CE1DD",
                            "lineThickness": 4,
                            "minDistance": 0,
                            "title": "Отношение ставок North Academy / SpaceS",
                            "type": "smoothedLine",
                            "valueField": "column-3"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "axisFrequency": 0,
                            "id": "ValueAxis-1",
                            "synchronizationMultiplier": 2,
                            "totalText": "",
                            "zeroGridAlpha": 3,
                            "autoRotateCount": 0,
                            "axisAlpha": 0.57,
                            "axisColor": "#F4A321",
                            "axisThickness": 2,
                            "color": "#FFFFFF",
                            "dashLength": 0,
                            "fontSize": 12,
                            "gridAlpha": 0,
                            "gridColor": "#3967A8",
                            "gridCount": 4,
                            "labelOffset": 4,
                            "minHorizontalGap": 74,
                            "minorGridAlpha": 0,
                            "minVerticalGap": 34,
                            "offset": -2,
                            "title": "",
                            "titleColor": "#000000",
                            "titleRotation": -2
                        },
                        {
                            "baseValue": 2,
                            "id": "ValueAxis-2",
                            "maximum": 0,
                            "minimum": 0,
                            "minMaxMultiplier": 0,
                            "precision": 1,
                            "radarCategoriesEnabled": false,
                            "synchronizationMultiplier": 1,
                            "synchronizeWith": "ValueAxis-1",
                            "zeroGridAlpha": 0,
                            "autoRotateCount": 2,
                            "axisAlpha": 0.58,
                            "axisColor": "#2BB5F2",
                            "axisThickness": 2,
                            "color": "#FFFFFF",
                            "fillColor": "#000000",
                            "firstDayOfWeek": 0,
                            "fontSize": 12,
                            "gridAlpha": 0,
                            "gridCount": 0,
                            "minorGridAlpha": 0,
                            "offset": 40,
                            "title": "",
                            "titleFontSize": 0
                        }
                    ],
                    "allLabels": [],
                    "balloon": {
                        "borderColor": "#FFFF00",
                        "borderThickness": 0,
                        "color": "#FFFFFF",
                        "cornerRadius": 3,
                        "fillAlpha": 0.91,
                        "fillColor": "#FFFF00",
                        "fontSize": 12,
                        "pointerWidth": 5
                    },
                    "legend": {
                        "enabled": true,
                        "align": "center",
                        "borderColor": "#FFFFFF",
                        "bottom": 0,
                        "fontSize": 12,
                        "gradientRotation": 0,
                        "markerDisabledColor": "#A6A6A6",
                        "position": "top",
                        "rollOverColor": "#FFFF00",
                        "spacing": 20,
                        "useGraphSettings": true,
                        "valueWidth": 20
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": ""
                        }
                    ],
                    "dataProvider": [
                        {
                            "category": "category 1",
                            "column-1": 8,
                            "column-2": 5,
                            "column-3": "5"
                        },
                        {
                            "category": "category 2",
                            "column-1": 6,
                            "column-2": 7,
                            "column-3": "3"
                        },
                        {
                            "category": "category 3",
                            "column-1": 2,
                            "column-2": 3,
                            "column-3": "2"
                        },
                        {
                            "category": "category 4",
                            "column-1": 1,
                            "column-2": 3,
                            "column-3": "3"
                        },
                        {
                            "category": "category 5",
                            "column-1": 2,
                            "column-2": 1,
                            "column-3": "6"
                        },
                        {
                            "category": "category 6",
                            "column-1": 3,
                            "column-2": 2,
                            "column-3": "7"
                        },
                        {
                            "category": "category 7",
                            "column-1": 6,
                            "column-2": 8,
                            "column-3": "8"
                        }
                    ]
                }
            );