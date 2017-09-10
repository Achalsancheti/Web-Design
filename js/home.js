FusionCharts.ready(function () {
$("#chart").insertFusionCharts({
    type: "column3d",
    width: "80%",
    height: "400px",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Co-op Scenario",
            subCaption: "Students placed over the past 5 years",
            theme: "fint",
			xAxisname: "YEAR",
            yAxisName: "No. of Students",
        },
        data: [{
            label: "2012",
            value: "90"
        }, {
            label: "2013",
            value: "100"
        }, {
            label: "2014",
            value: "122"
        }, {
            label: "2015",
            value: "120"
        }, {
            label: "2016",
            value: "150"
        }]
    }
	})
});