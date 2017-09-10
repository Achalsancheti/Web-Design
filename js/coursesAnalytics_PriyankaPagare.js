$(function () {
    var chart = Highcharts.chart('container', {
		credits: {
			enabled: false
		},
		
		chart: {
                polar: true
        },
		
        title: {
            text: 'No. of students opting<br> for the various courses'
        },

        subtitle: {
            text: 'Course Analysis - Fall 2015 Batch'
        },

        xAxis: {
            categories: ['AED', 'WT', 'WD', 'DBMS', 'SWD', 'BDM', 'PSA', 'BA', 'OCIT', 'DWBI', 'PYD', 'BCD', 'NCC', 'MT', 'BPE', 'SQM']
        },
		
		yAxis: {
            min: 0,
			max: 100
        },

		tooltip: {
            valueSuffix: '%'
        },
		
        series: [{
            type: 'column',
			name:'Students(%)',
            colorByPoint: true,
            data: [100, 95, 85, 92, 50, 67, 82, 45, 55, 60, 40, 30, 78, 56, 45, 52],
            showInLegend: false
        }]

    });

});

$(function () {
    Highcharts.chart('container1', {
		credits: {
			enabled: false
		},
        title: {
            text: 'Student Interest as per Course categorization',
        },
        subtitle: {
            text: 'Year: 2010 - 2016',
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
        },
        yAxis: {
            title: {
                text: 'Students Interested'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            borderWidth: 0
        },
        series: [{
            name: 'SOFTWARE DEVELOPEMENT',
            data: [43, 67, 86, 70, 92, 80, 85]
        }, {
            name: 'MANAGEMENT INFORMATION SYSTEMS',
            data: [50, 62, 40, 39, 55, 34, 30]
        }, {
            name: 'DATA DESIGN AND MANAGEMENT',
            data: [27, 54, 77, 32, 66, 84, 50]
        }]
    });
});

$(function () {
    Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Seats offered for each course'
        },
        subtitle: {
            text: 'Recent study (Fall 2016)'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of Seats'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Seats',
            data: [
                ['AED',100],
                ['WT', 75],
                ['WD', 75],
                ['DBMS', 40],
                ['SWD', 56],
                ['BDM', 12],
                ['PSA', 90],
                ['BA', 30],
                ['OCIT', 30],
                ['DWBI', 40],
                ['PYD', 50],
                ['BCD', 20],
                ['NCC', 50],
                ['MT', 40],
                ['BPE', 35],
                ['SQM', 40]
                
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', 
                y: 10, 
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});