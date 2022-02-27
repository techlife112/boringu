

$(function () {

    "use strict";

    /*---------------------------------------------------
      Countdown JS
    ---------------------------------------------------*/

    var $countdownClass = $('.countdown-clock');

    if ($countdownClass.length > 0) {
        var datetime = $countdownClass.data('datetime'); //Month Days, Year HH:MM:SS
        var date = new Date(datetime);
        var now = new Date();
        var diff;
        if (datetime == "" || datetime == null || date < now) {
            diff = 3600 * 24 * 3.1; // default fallback date 
        } else {
            diff = (date.getTime() / 1000) - (now.getTime() / 1000);
        }

        var clock = $countdownClass.FlipClock(diff, {
            // ... your options here
            clockFace: 'DailyCounter',
            countdown: true,
        });
    }

    /*---------------------------------------------------
      Donut Chart 01
    ---------------------------------------------------*/

    var ctx = $("#distChart");
    // And for a doughnut chart
    var distChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Presale Supply", "PancakeSwap Supply", "Marketing Supply", "Already Burned"],
            datasets: [{
                label: "Token Distribution",
                data: [39.6, 20.4,  5 , 35],
                backgroundColor: ["#00ff9c", "#01ac61", "#00ce79", "#01ae7b", "#02de9d"],
                borderWidth: 2,
                borderColor: "#262626",
                
            }]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            legend: {
                display: false,
            },
            cutoutPercentage: 30,
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                  }
                }
              }
              
        }
        
    });
    $("#dist_legend").html(distChart.generateLegend());

    /*---------------------------------------------------
      Donut Chart 02
    ---------------------------------------------------*/

    


});

/*---------------------------------------------------
     Owl Carousel
   ---------------------------------------------------*/

var $testimonalSlider = $('.testimonial-slider');

if ($testimonalSlider.length && $.fn.owlCarousel) {
    $testimonalSlider.owlCarousel({
        loop: false,
        autoplay: false,
        autoHeight: true,
        items: 1,
        navText: [
            "<img src=\"images/arrow-left.svg\" class=\"dark\"><img src=\"images/arrow-left-black.svg\" class=\"light\">",
            "<img src=\"images/arrow-right.svg\" class=\"dark\"><img src=\"images/arrow-right-black.svg\" class=\"light\">"
        ],
        responsive: {
            0: {
                dots: true,
                nav: false,
            },
            768: {
                dots: false,
                nav: true,
            }
        }
    });
}

/*
 * // End $ Strict Function
 * ------------------------ */