$(function () {

    var data = [
        
        {
            "hc-key": "us",
            "value": 35
        },
        {
            "hc-key": "jp",
            "value": 8
        },
        {
            "hc-key": "in",
            "value": 28
        },
        {
            "hc-key": "fr",
            "value": 5
        },
        {
            "hc-key": "cn",
            "value": 20
        },
        {
            "hc-key": "mx",
            "value": 1
        },
        {
            "hc-key": "ca",
            "value": 2
        },
        {
            "hc-key": "au",
            "value": 1
        },
    ];

    $('#container').highcharts('Map', {

        title: {
            text: 'Diversity in Northeastern IS Dept'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            mapData: Highcharts.maps['custom/world'],
            joinBy: 'hc-key',
            name: 'Students(%)',
            states: {
                hover: {
                    color: '#DC143C'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});

FusionCharts.ready(function () {
$("#chart").insertFusionCharts({
    type: "column3d",
    width: "80%",
    height: "400px",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Scholarships offered",
            subCaption: "Scholarships offered to the students over the past 5 years",
            theme: "ocean",
			xAxisname: "YEAR",
            yAxisName: "No. of Students",
        },
        data: [{
            label: "2012",
            value: "10"
        }, {
            label: "2013",
            value: "41"
        }, {
            label: "2014",
            value: "35"
        }, {
            label: "2015",
            value: "52"
        }, {
            label: "2016",
            value: "43"
        }]
    }
	})
});
