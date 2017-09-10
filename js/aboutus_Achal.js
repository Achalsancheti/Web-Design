$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
  $( function() {
    $( "#tabs" ).tabs();
  } );
  
  var AnimationStep = 10; //pixels
var AnimationInterval = 50; //milliseconds

function loadDiv() {
    var oDiv = document.getElementById("tabs-2");
    oDiv.style.display = "block";
    var height = oDiv.clientHeight;
    oDiv.style.height = "0px";
    Animate(oDiv, height);
}

function Animate(element, targetHeight) {
    var curHeight = element.clientHeight;
    if (curHeight >= targetHeight)
        return true;
    element.style.height = (curHeight + AnimationStep) + "px";
    window.setTimeout(function() {
        Animate(element, targetHeight);
    }, AnimationInterval);
    return false;
}

$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Number of Admissions Each Year'
        },
        xAxis: {
            categories: ['2006','2007','2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Number of Students'
            },
            labels: {
                formatter: function () {
                    return this.value / 2;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' students'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Information Systems',
            data: [30, 45, 60, 90, 120, 150, 190, 220, 270, 360, 270]
        }, {
            name: 'Computer Science',
            data: [30, 60, 60, 75, 90, 90, 120, 120, 120, 120, 150]
        }, {
            name: 'Engineering Management',
            data: [25, 30, 50, 60, 60, 75, 75, 90, 90, 120, 120]
        }, {
            name: 'Information Assurance',
            data: [30, 30, 45, 45, 60, 60, 75, 75, 75, 90, 90]
        }]
    });
});

$(function () {
    // Set up the chart
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container1',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Information Systems Ranking'
        },
        xAxis: {
        title: {
                text: 'Years'
            },
            categories: ['2005','2006','2007','2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            tickmarkPlacement: 'on',
        },
        yAxis: {
            title: {
                text: 'Rank'
            }
            },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
        name: 'Ranking',
            data: [54, 41, 37, 39, 23, 17, 21, 14, 11, 7, 4, 3]
        }]
    });

    function showValues() {
        $('#alpha-value').html(chart.options.chart.options3d.alpha);
        $('#beta-value').html(chart.options.chart.options3d.beta);
        $('#depth-value').html(chart.options.chart.options3d.depth);
    }

    // Activate the sliders
    $('#sliders input').on('input change', function () {
        chart.options.chart.options3d[this.id] = this.value;
        showValues();
        chart.redraw(false);
    });

    showValues();
});